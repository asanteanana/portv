import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="text-3xl mb-12 tracking-tighter">
        Hi, I'm Nana
      </h1>
      <p className="mb-4">
        {`I specialize in privacy engineering, data protection, and compliance, bridging the gap between security and user trust. My mission is to design robust privacy systems for the greater good of society.`}
      </p>
      <p className="mb-4">
        {`I'm passionate about the intersection of AI and user experience, with a particular focus on Explainable and Responsible AI.`}
      </p>
      <p className="mb-8">
        {`My work aims to ensure that AI systems are not only powerful but also transparent, ethical, and user-centric.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
