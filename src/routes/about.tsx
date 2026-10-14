import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Linkedin, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
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
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState(false)
  async function copyEmail() { try { await navigator.clipboard.writeText(EMAIL); setCopied(true); setError(false); setTimeout(() => setCopied(false), 2500) } catch { setError(true) } }
  return <main className="site-width fade-in">
    <section className="py-16">
      <p className="eyebrow text-muted-foreground">Om mig</p>
      <h1 className="page-heading">Bakom arbetet.</h1>
      <ul className="contact-facts">
        <li className="contact-fact"><Mail/><span className="label">E-post</span><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
        <li className="contact-fact"><Linkedin/><span className="label">LinkedIn</span><a href={LINKEDIN} target="_blank" rel="noreferrer">Minna Jansson <ArrowUpRight className="size-3"/></a></li>
        <li className="contact-fact"><MapPin/><span className="label">Plats</span><span>Stockholm, Sverige</span></li>
      </ul>
      <div className="mt-12 grid gap-12 md:grid-cols-[1.6fr_1fr]">
        <article className="space-y-6 prose-text">{aboutText.map(paragraph => <p key={paragraph.slice(0, 24)}>{paragraph}</p>)}</article>
        <aside>
          <img src={portratt.url} alt="Porträtt av Minna Jansson" width={1000} height={1000} className="about-portrait"/>
          <h2 className="eyebrow mt-10">Intresseområden</h2>
          <ul className="mt-6 space-y-5">{interests.map(item => <li key={item.title}><h3 className="text-sm font-medium">{item.title}</h3><p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.text}</p></li>)}</ul>
          <h2 className="eyebrow mt-10">Tekniska kompetenser</h2>
          <dl className="mt-6 space-y-5">{skills.map(skill => <div key={skill.label}><dt className="text-sm font-medium">{skill.label}</dt><dd className="mt-1 text-xs leading-relaxed text-muted-foreground">{skill.text}</dd></div>)}</dl>
        </aside>
      </div>
    </section>
    <section className="contact-band"><div><span className="availability"><span className="status-dot"/>Öppen för nya möjligheter</span><h2 className="mt-4 text-3xl font-medium">Låt oss skapa något<br/>meningsfullt tillsammans.</h2><p className="mt-3 text-sm text-muted-foreground">Har du en praktikplats, ett jobb eller en idé i åtanke? Jag hör gärna mer.</p><div className="mt-6 flex flex-wrap items-center gap-4"><Button asChild size="lg"><a href={`mailto:${EMAIL}`}>Hör av dig <ArrowUpRight/></a></Button><Button variant="outline" size="icon" title="Kopiera e-postadress" aria-label="Kopiera e-postadress" onClick={copyEmail}>{copied ? <Check/> : <Copy/>}</Button></div><p className="mt-5 text-sm text-muted-foreground">{EMAIL}</p><p className="mt-2 text-xs text-muted-foreground" aria-live="polite">{copied ? 'E-postadressen har kopierats.' : error ? 'Det gick inte att kopiera. Du kan markera e-postadressen ovan.' : ''}</p></div><Button asChild variant="outline" className="shrink-0" size="lg"><Link to="/work">Se mina projekt <ArrowUpRight/></Link></Button></section>
  </main>
}
