import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, Linkedin, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NextBand } from '@/components/portfolio/site-chrome'
import { pageMeta } from '@/data/portfolio'
import portratt from '@/assets/minna-portratt.png.asset.json'

const EMAIL = 'minnaj31@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/minna-jansson-20a484329/'

const aboutText = [
  'Jag heter Minna och studerar just nu kandidatprogrammet it, medier och design vid Södertörns högskola. Jag är intresserad av hur design, teknik, kreativitet och visuell kommunikation kan samverka för att skapa genomtänkta digitala upplevelser. Genom min utbildning och tidigare arbeten har jag fått erfarenhet av bland annat grafisk formgivning, webbutveckling och marknadsföring.',
  'Jag tycker om att förstå hur och varför saker fungerar, utforska nya idéer och hitta lösningar på problem. För mig handlar design inte bara om det visuella, utan också om hur något fungerar, upplevs och kommunicerar med sin omgivning. Jag trivs särskilt bra i projekt där kreativt skapande möter teknik, struktur, analys och problemlösning.',
  'Som person är jag ordningsam, engagerad och lösningsorienterad. Jag tycker om att ta eget ansvar och arbeta självständigt, men jag värdesätter också samarbete högt, och möjligheten att ta del av andras perspektiv. Jag har öga för både detaljer och helhet och strävar efter att skapa resultat som är genomarbetade, funktionella och visuellt tydliga. Samtidigt är jag nyfiken på att lära mig nya saker och ser varje projekt som en möjlighet att utvecklas.',
  'Framåt vill jag fortsätta utforska samspelet mellan design och teknik, utveckla mina kunskaper och få omsätta dem i praktiken. Jag ser fram emot att lära av andra, bidra med mina egna idéer och få nya perspektiv genom framtida samarbeten och projekt.',
]

const interests = [
  { title: 'Visuell kommunikation och grafisk design', text: 'Grafisk formgivning, typografi, färg, fotografi och bildberättande.' },
  { title: 'UX/UI och digital design', text: 'Användarupplevelser, gränssnitt och interaktionsdesign.' },
  { title: 'Webbutveckling', text: 'Frontend, webbdesign och samspelet mellan design och kod.' },
  { title: 'Koncept och kreativ problemlösning', text: 'Idéutveckling och att hitta lösningar på verkliga problem.' },
]

const skills = [
  { label: 'Grafisk design och media', text: 'Adobe Creative Cloud (främst Photoshop, Illustrator, Indesign, Premiere Pro), Canva, Capcut.' },
  { label: 'Webbutveckling', text: 'HTML, CSS, Wordpress, Javascript, SQL, PHP, P5Javascript.' },
  { label: 'Kontorsprogram', text: 'Microsoft Office (främst Word, Excel och PowerPoint), Google Workspace.' },
]

export const Route = createFileRoute('/about')({
  head: () => pageMeta('Om mig/kontakt', 'Minna Jansson – student inom medieteknik i Stockholm. Kontakta mig om praktik, arbetsmöjligheter och kreativa samarbeten.'),
  component: About,
})

function About() {
  return <main className="site-width fade-in">
    <section className="about-layout py-16">
      <div>
      <p className="eyebrow text-muted-foreground">Om mig</p>
      <h1 className="page-heading">Bakom arbetet.</h1>
      <ul className="contact-facts">
        <li className="contact-fact"><Mail/><span className="label">E-post</span><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
        <li className="contact-fact"><Linkedin/><span className="label">LinkedIn</span><a href={LINKEDIN} target="_blank" rel="noreferrer">Minna Jansson <ArrowUpRight className="size-3"/></a></li>
        <li className="contact-fact"><MapPin/><span className="label">Plats</span><span>Stockholm, Sverige</span></li>
      </ul>
      <article className="mt-7 space-y-6 prose-text">{aboutText.map(paragraph => <p key={paragraph.slice(0, 24)}>{paragraph}</p>)}</article>
      </div>
        <aside>
          <img src={portratt.url} alt="Porträtt av Minna Jansson" width={1000} height={1000} className="about-portrait"/>
          <h2 className="eyebrow mt-8">Intresseområden</h2>
          <ul className="mt-4 space-y-4">{interests.map(item => <li key={item.title}><h3 className="text-sm font-medium">{item.title}</h3><p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.text}</p></li>)}</ul>
          <h2 className="eyebrow mt-8">Tekniska kompetenser</h2>
          <dl className="mt-4 space-y-4">{skills.map(skill => <div key={skill.label}><dt className="text-sm font-medium">{skill.label}</dt><dd className="mt-1 text-xs leading-relaxed text-muted-foreground">{skill.text}</dd></div>)}</dl>
        </aside>
    </section>
    <NextBand><Button asChild variant="outline" size="lg"><Link to="/">Mina projekt <ArrowUpRight/></Link></Button></NextBand>
  </main>
}
