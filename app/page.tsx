import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { ProblemSolution } from '@/components/sections/ProblemSolution'
import { Features } from '@/components/sections/Features'
import { SecondaryCta } from '@/components/sections/SecondaryCta'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <SecondaryCta />
      </main>
      <Footer />
    </>
  )
}
