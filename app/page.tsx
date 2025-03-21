import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="text-3xl mb-8 tracking-tighter">
        Hi, Nana
      </h1>
      <div className="prose dark:prose-invert">
        <p className="mb-4">
          Privacy Engineer & AI Ethics Advocate
        </p>
        <p className="mb-4">
          {`I specialize in privacy engineering, data protection, and compliance, bridging the gap between security and user trust.`}
        </p>
        <p className="mb-4">
          {`I'm passionate about the intersection of AI and user experience, with a particular focus on Explainable and Responsible AI.`}
        </p>
        <p className="mb-8">
          {`My work aims to ensure that AI systems are not only powerful but also transparent, ethical, and user-centric.`}
        </p>
      </div>
      <div className="my-8">
        <h2 className="text-2xl font-semibold mb-4 tracking-tighter">Latest Posts</h2>
        <BlogPosts />
      </div>
    </section>
  )
}
