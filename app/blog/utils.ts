import fs from 'fs'
import path from 'path'

export type Metadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
}

// Since blog is marked as private, we'll return an empty array
export type BlogPost = {
  slug: string;
  content: string;
  metadata: Metadata;
};

function parseFrontmatter(content: string): { metadata: Metadata; content: string } {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/
  const match = content.match(frontmatterRegex)

  if (!match) {
    throw new Error('Invalid frontmatter')
  }

  const [, frontmatter, postContent] = match

  // Parse the frontmatter
  const metadata: any = {}
  frontmatter.split('\n').forEach((line) => {
    const [key, ...valueArr] = line.split(': ')
    if (key && valueArr.length > 0) {
      // Remove quotes if they exist
      const value = valueArr.join(': ').replace(/^['"](.*)['"]$/, '$1')
      metadata[key.trim()] = value.trim()
    }
  })

  return {
    metadata: metadata as Metadata,
    content: postContent
  }
}

export function getBlogPosts(): BlogPost[] {
  const postsDirectory = path.join(process.cwd(), 'app/blog/posts')
  const fileNames = fs.readdirSync(postsDirectory)

  const posts = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      const { metadata, content } = parseFrontmatter(fileContents)

      return {
        slug,
        content,
        metadata,
      }
    })

  return posts
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date()
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }
  let targetDate = new Date(date)

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  let daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ''

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = 'Today'
  }

  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  if (!includeRelative) {
    return fullDate
  }

  return `${fullDate} (${formattedDate})`
}
