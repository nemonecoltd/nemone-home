import Nav                from '@/components/Nav'
import Hero               from '@/components/Hero'
import MainAdSlot         from '@/components/MainAdSlot'
import SectionLatestNews  from '@/components/SectionLatestNews'
import SectionThink       from '@/components/SectionThink'
import SectionBuild       from '@/components/SectionBuild'
import SectionTech        from '@/components/SectionTech'
import SectionWarang      from '@/components/SectionWarang'
import SectionMedia       from '@/components/SectionMedia'
import SectionNews        from '@/components/SectionNews'
import SectionBrandTeaser from '@/components/SectionBrandTeaser'
import Footer             from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <SectionLatestNews />
      <main>
        <Hero              id="hero"  />
        <MainAdSlot />
        <SectionThink      id="think" />
        <SectionBuild      id="build" />
        <SectionTech       id="tech"  />
        <SectionWarang     id="lab"   />
        <SectionMedia      id="media" />
        <SectionNews       id="news"  />
        <SectionBrandTeaser id="brand" />
      </main>
      <Footer />
    </>
  )
}
