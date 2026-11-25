import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { ChapterColor } from './components/ChapterColor'
import { ChapterForm } from './components/ChapterForm'
import { ChapterRestore } from './components/ChapterRestore'
import { ChapterCare } from './components/ChapterCare'
import { Masters } from './components/Masters'
import { Booking } from './components/Booking'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <ChapterColor />
        <ChapterForm />
        <ChapterRestore />
        <ChapterCare />
        <Masters />
        <Booking />
      </main>
      <Footer />
    </>
  )
}
