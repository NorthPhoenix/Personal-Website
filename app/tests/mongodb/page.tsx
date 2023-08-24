import Projects from "./projects"
import { Suspense } from "react"

const ProjectPage = () => {
  return (
    <div className='max-w-4xl p-8 mx-auto'>
      <Suspense
        fallback={
          <div className='w-full h-screen max-w-4xl bg-gray-400 animate-pulse animate-infinite'></div>
        }>
        <Projects />
      </Suspense>
    </div>
  )
}

export default ProjectPage
