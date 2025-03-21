import { BlogPosts } from 'app/components/posts'
import { motion } from 'framer-motion'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function Page() {
  return (
    <motion.section
      initial="initial"
      animate="animate"
      variants={stagger}
    >
      <motion.h1 
        className="text-3xl mb-12 tracking-tighter"
        variants={fadeIn}
      >
        Hi, I'm Nana
      </motion.h1>
      <motion.p 
        className="mb-4"
        variants={fadeIn}
      >
        {`I specialize in privacy engineering, data protection, and compliance, bridging the gap between security and user trust. My mission is to design robust privacy systems for the greater good of society.`}
      </motion.p>
      <motion.p 
        className="mb-4"
        variants={fadeIn}
      >
        {`I'm passionate about the intersection of AI and user experience, with a particular focus on Explainable and Responsible AI.`}
      </motion.p>
      <motion.p 
        className="mb-8"
        variants={fadeIn}
      >
        {`My work aims to ensure that AI systems are not only powerful but also transparent, ethical, and user-centric.`}
      </motion.p>
      <motion.div 
        className="my-8"
        variants={fadeIn}
      >
        <BlogPosts />
      </motion.div>
    </motion.section>
  )
}
