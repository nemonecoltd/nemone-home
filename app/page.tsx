import Nav                from '@/components/Nav'
import Hero               from '@/components/Hero'
import SectionLatestNews  from '@/components/SectionLatestNews'
import SectionThink       from '@/components/SectionThink'
import SectionBuild       from '@/components/SectionBuild'
import SectionTech        from '@/components/SectionTech'
import SectionWarang      from '@/components/SectionWarang'
import SectionMedia       from '@/components/SectionMedia'
import SectionNews        from '@/components/SectionNews'
import Footer             from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <SectionLatestNews />
      <main>
        <Hero          id="hero"  />
        <SectionThink  id="think" />
        <SectionBuild  id="build" />
        <SectionTech   id="tech"  />
        <SectionWarang id="lab"   />
        <SectionMedia  id="media" />
        <SectionNews   id="news"  />
      </main>
      <Footer />
    </>
  )
}
