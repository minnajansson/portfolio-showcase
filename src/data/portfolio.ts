import inskolningsapp from '@/assets/inskolningsapp.webp.asset.json'
import observation from '@/assets/observation.png.asset.json'
import testing from '@/assets/testing.png.asset.json'
import trelasningar from '@/assets/trelasningar.webp.asset.json'
import intervjuer from '@/assets/intervjuer.webp.asset.json'
import grafiskprofil from '@/assets/grafiskprofil.webp.asset.json'
import databas from '@/assets/databas.webp.asset.json'
import wordpress from '@/assets/wordpress.webp.asset.json'
import poster from '@/assets/poster.webp.asset.json'
import vuxen from '@/assets/gymnasiearbetevuxen.webp.asset.json'
import smabarn from '@/assets/gymnasiearbetesmabarn.webp.asset.json'
import enkat from '@/assets/enkat.webp.asset.json'
import inlagg from '@/assets/inlagg.webp.asset.json'
import lopp from '@/assets/lopp.webp.asset.json'
import styrelsemote from '@/assets/styrelsemote.webp.asset.json'
import traning from '@/assets/traning.webp.asset.json'
import styrelsepresentation from '@/assets/styrelsepresentation.webp.asset.json'
import bild1 from '@/assets/bild1.webp.asset.json'
import bild2 from '@/assets/bild2.webp.asset.json'
import moodboard from '@/assets/moodboard.webp.asset.json'
import santarun from '@/assets/santarun.png.asset.json'
import runners from '@/assets/runners.png.asset.json'
import kundresa from '@/assets/kundresa.png.asset.json'
import persona1 from '@/assets/persona1.png.asset.json'
import persona2 from '@/assets/persona2.png.asset.json'
import persona3 from '@/assets/persona3.png.asset.json'

export interface ProjectImage {
  src: string
  alt: string
  caption?: string
  width: number
  height: number
}

export interface Project {
  slug: string
  title: string
  subtitle?: string
  subtitleStrong?: string
  category: string
  year?: string
  tags: string[]
  hero: ProjectImage
  duration?: string
  collaboration?: string
  reference?: { name: string; role: string; contact: string }
  tools?: string
  focus?: string
  link?: string
  sections: { title: string; text: string }[]
  images?: ProjectImage[]
}

export const projects: Project[] = [
  {
    slug: 'inskolningsapp',
    title: 'Inskolningsapp',
    subtitle: 'Designprojekt i samarbete med Karolinska universitetssjukhuset',
    subtitleStrong: 'Karolinska universitetssjukhuset',
    category: 'Produktdesign',
    year: '2026',
    tags: ['UX / UI-design', 'Mobilapp', 'Användarundersökning'],
    hero: { src: inskolningsapp.url, alt: 'Fyra skärmar ur prototypen av inskolningsappen med texten Tryggare inskolning, starkare kompetens, säkrare vård', caption: 'Prototypens gränssnitt', width: 1920, height: 1080 },
    duration: '6 veckor',
    collaboration: 'Karolinska universitetssjukhuset',
    focus: 'UX / UI-design, Mobilapp, Användarundersökning',
    sections: [
      { title: 'Utmaningen', text: 'Uppdrag från omvårdnadschef på akutmottagningen på Karolinska universitetssjukhuset att förenkla och digitalisera inskolningsprocessen för nyanställda som idag sker via fysiska papper.' },
      { title: 'Processen', text: 'Arbetet utfördes genom intervjuer och observationer med chefer, anställda och nyanställda på plats på akutmottagningen för att bilda en förståelse för kontexten och målgruppen. Sedan definierades materialet för att konkretisera insikter, behov och mål. Vidare utfördes idégenerering och prototyping för att visualisera lösningar som sedan testades på plats på akutmottagningen och förfinades.' },
      { title: 'Resultatet', text: 'Resultatet blev en prototyp av en app där information, inlärning, dokumentation, återkoppling och kommunikation under inskolningsprocessen samlas på samma ställe digitalt.' },
    ],
    images: [
      { src: observation.url, alt: 'Klinisk arbetsplats på akutmottagningen', caption: 'Observation på akutmottagningen', width: 1200, height: 1000 },
      { src: testing.url, alt: 'Test av appens prototyp på en smartphone', caption: 'Test av prototypen på plats', width: 1200, height: 1000 },
    ],
  },
  {
    slug: 'aterbruk-huddinge',
    title: 'Designlösningar för återbruk',
    subtitle: 'Designprojekt i samarbete med Huddinge kommun',
    subtitleStrong: 'Huddinge kommun',
    category: 'Produktdesign',
    year: '2026',
    tags: ['Tjänstedesign', 'Användarundersökningar', 'Prototyping'],
    hero: { src: trelasningar.url, alt: 'Tre designförslag: dela digitalt, centraler för återbruk och pantsystem för förpackningar', caption: 'Tre designförslag för ökat återbruk bland villahushåll.', width: 1920, height: 1080 },
    duration: '4 veckor',
    collaboration: 'Huddinge kommun',
    reference: { name: 'Sara Tunheden', role: 'Verksamhetsutvecklare Innovation · Huddinge kommun', contact: 'Kontaktuppgifter lämnas på begäran.' },
    focus: 'Tjänstedesign, användarundersökningar, konceptutveckling, prototyping',
    sections: [
      { title: 'Utmaningen', text: 'Uppdraget från Huddinge kommun var att ta fram tre konkreta designlösningar som främjar återbruk bland boende i villa.' },
      { title: 'Processen', text: 'Arbetet omfattade omvärldsbevakning, enkäter och intervjuer för att undersöka målgruppens behov och förutsättningar. Insikterna bearbetades med definierings- och idégenereringsmetoder och omsattes i personas och prototyper.' },
      { title: 'Resultatet', text: 'Tre designförslag med fokus på att underlätta återbruk för villahushåll i Huddinge kommun.' },
    ],
    images: [
      { src: intervjuer.url, alt: 'Studenter intervjuar en förbipasserande vid en gångtunnel', caption: 'Intervjuer som underlag för projektets behovsanalys.', width: 1920, height: 1358 },
      { src: enkat.url, alt: 'Stapeldiagram över enkätens svar om hinder för att göra sig av med saker', caption: 'Resultat från enkätundersökningen.', width: 1920, height: 1358 },
      { src: persona1.url, alt: 'Personaprofil med rubriken Den engagerade, som kan göra mer', caption: 'Persona: Den engagerade.', width: 2000, height: 1414 },
      { src: persona2.url, alt: 'Personaprofil med rubriken Den begränsade, som behöver funktion', caption: 'Persona: Den begränsade.', width: 2000, height: 1414 },
      { src: persona3.url, alt: 'Personaprofil med rubriken Den omotiverade', caption: 'Persona: Den omotiverade.', width: 2000, height: 1414 },
      { src: kundresa.url, alt: 'Kundresediagram med faserna innan, under och efter, med aktiviteter, tankar, känslor och insikter', caption: 'Kundresa över användarens aktiviteter, tankar och insikter.', width: 1920, height: 1080 },
    ],
  },
  {
    slug: 'sodersrunners',
    title: 'Grafisk identitet och marknadsföring',
    subtitle: 'Visuell kommunikation för löparföreningen SödersRunners',
    subtitleStrong: 'SödersRunners',
    category: 'Grafisk design',
    year: '2025',
    tags: ['Visuell identitet', 'Marknadsföring', 'Fotografi'],
    hero: { src: grafiskprofil.url, alt: 'Grafisk profil för SödersRunners med logotyp, typsnitt och primärfärger', caption: 'Grafisk identitet utvecklad för SödersRunners.', width: 1920, height: 1080 },
    duration: '1 år',
    tools: 'Adobe Illustrator, Adobe InDesign, Adobe Photoshop, Canva och fotografi',
    focus: 'Grafisk design, visuell identitet, marknadsföring, innehåll för sociala medier, fotografi',
    sections: [
      { title: 'Grafisk identitet', text: 'Utveckling av föreningens grafiska identitet i samband med uppstarten och etableringen av SödersRunners.' },
      { title: 'Marknadsföring', text: 'Som marknadsföringsansvarig ansvarade jag för grafiskt innehåll och fotografering för föreningens kommunikation. Arbetet omfattade inlägg för sociala medier samt affischer för fysisk marknadsföring. Samtliga fotografier är tagna av mig.' },
    ],
    images: [
      { src: inlagg.url, alt: 'SödersRunners inlägg med löpare och inbjudan att springa tillsammans', caption: 'Inlägg för sociala medier.', width: 1536, height: 1920 },
      { src: lopp.url, alt: 'SödersRunners affisch för Stadium Night Run', caption: 'Affisch för Stadium Night Run.', width: 1536, height: 1920 },
      { src: styrelsemote.url, alt: 'SödersRunners affisch med inbjudan till årsmöte', caption: 'Inbjudan till årsmöte.', width: 1536, height: 1920 },
      { src: traning.url, alt: 'SödersRunners träningsaffisch med texten Styrka X Intervaller', caption: 'Träningsaffisch.', width: 1536, height: 1920 },
      { src: styrelsepresentation.url, alt: 'Presentation av SödersRunners ordförande Yassar Anwari', caption: 'Styrelsepresentation.', width: 1536, height: 1920 },
      { src: santarun.url, alt: 'SödersRunners affisch för Santa Run 10 dec 16:30 med löpare i skogsmörker', caption: 'Affisch för Santa Run.', width: 1080, height: 1350 },
      { src: bild1.url, alt: 'Två löpare från SödersRunners på en skogsstig', caption: 'Fotografi för SödersRunners.', width: 1536, height: 1920 },
      { src: bild2.url, alt: 'En sittande löpare mellan två löpare i rörelse i skogen', caption: 'Fotografi för SödersRunners.', width: 1536, height: 1920 },
      { src: runners.url, alt: 'Fotocollage med löpning i skogen, rockring på gräs, mingel vid ett mässbord, ett lopp med uppblåsbar portal och en presentation i en hörsal', caption: 'Fotocollage från föreningens aktiviteter.', width: 1080, height: 1350 },
    ],
  },
  {
    slug: 'webbplats-med-databas',
    title: 'Webbplats med databas',
    subtitle: 'Webbutveckling med JavaScript, PHP och SQL',
    category: 'Webbutveckling',
    year: '2025',
    tags: ['Frontend', 'Backend', 'Databas'],
    hero: { src: databas.url, alt: 'Webbplatsen Min Bakningsdatabas i två webbläsarfönster', caption: 'Webbplatsens gränssnitt', width: 1920, height: 1080 },
    duration: '1 vecka',
    tools: 'HTML, CSS, JavaScript, PHP och SQL',
    focus: 'Webbutveckling, databashantering, frontend, backend, datavalidering',
    link: 'https://medialab.sh.se/mtbvt25/minnajansson/webdesign/jansson_minna_WP_VT25/',
    sections: [
      { title: 'Utmaningen', text: 'Att utveckla en webbplats med databastabeller och funktionalitet för att hantera data.' },
      { title: 'Processen', text: 'Webbplatsens struktur byggdes i HTML och formgavs med CSS. JavaScript, PHP och SQL användes för att implementera funktionalitet och hantera kommunikationen med databasen.' },
      { title: 'Resultatet', text: 'En fungerande webbplats med databastabeller och databasfunktionalitet.' },
    ],
  },
  {
    slug: 'webbplats-i-wordpress',
    title: 'Webbplats i WordPress',
    subtitle: 'Webbutveckling med Wordpress och sökoptimering',
    category: 'Webbutveckling',
    year: '2025',
    tags: ['Webbdesign', 'CMS', 'SEO'],
    hero: { src: wordpress.url, alt: 'Webbplatsen Restauranger i Stockholm i två webbläsarfönster', caption: 'Webbplatsens visuella utformning.', width: 1920, height: 1080 },
    duration: '1 vecka',
    tools: 'WordPress (CMS) och verktyg för sökoptimering (SEO)',
    focus: 'Webbdesign, innehållshantering, sökoptimering, CMS, SEO',
    link: 'https://medialab.sh.se/mtaht24/mtaht24g10/webdesign/wordpress/',
    sections: [
      { title: 'Utmaningen', text: 'Att skapa en webbplats med WordPress och strukturera innehåll med fokus på användbarhet och synlighet i sökmotorer.' },
      { title: 'Processen', text: 'Webbplatsen utvecklades i WordPress, ett innehållshanteringssystem (CMS). Innehållet sökoptimerades (SEO) med hjälp av WordPress-verktyg för att förbättra webbplatsens förutsättningar att synas i sökmotorer.' },
      { title: 'Resultatet', text: 'En WordPress-webbplats med strukturerat och sökoptimerat innehåll.' },
    ],
  },
  {
    slug: 'poster-popkonst',
    title: 'Poster om hav och marina resurser',
    subtitle: 'Grafisk formgivning med inspiration från popkonsten',
    category: 'Grafisk design',
    year: '2026',
    tags: ['Grafisk formgivning', 'Illustration', 'Popkonst'],
    hero: { src: poster.url, alt: 'Poster för FN-dagen 2026 med en sköldpadda och stora vågor i popkonststil', caption: 'Poster med utgångspunkt i FN:s globala mål 14 – Hav och marina resurser.', width: 1358, height: 1920 },
    duration: '1 vecka',
    tools: 'Adobe Illustrator',
    focus: 'Grafisk formgivning, illustration, popkonst, konceptutveckling',
    sections: [
      { title: 'Uppgiften', text: 'Att skapa en poster med utgångspunkt i FN:s globala mål 14: Hav och marina resurser, med popkonst som vald konststil.' },
      { title: 'Processen', text: 'Arbetet inleddes med en moodboard baserad på inspiration från etablerade popkonstnärer. Moodboarden användes som utgångspunkt för att utveckla posterns visuella uttryck, som sedan skapades i Adobe Illustrator.' },
      { title: 'Resultatet', text: 'En grafisk poster som kombinerar popkonstens visuella uttryck med temat bevarande av hav och marina resurser.' },
    ],
    images: [
      { src: moodboard.url, alt: 'Moodboard med popkonst, havsmotiv och färgprover', caption: 'Moodboard med popkonstinspiration.', width: 1920, height: 1358 },
    ],
  },
  {
    slug: 'livets-stadier',
    title: 'Livets stadier',
    subtitle: 'Ett fotografiskt projekt med surrealistiska uttryck – mitt gymnasiearbete.',
    category: 'Fotografi',
    year: '2024',
    tags: ['Fotografi', 'Surrealism', 'Bildredigering'],
    hero: { src: vuxen.url, alt: 'Kvinna i skogen speglar sig i en spegel på ett träd, med en uggla och flygande boksidor', caption: 'Fotografiskt verk på temat vuxenlivet.', width: 1440, height: 1920 },
    duration: '1 år',
    tools: 'Systemkamera, fotografi och Adobe Photoshop',
    focus: 'Fotografi, bildkomposition, surrealism, bildredigering, visuell gestaltning',
    sections: [
      { title: 'Utgångspunkt', text: 'Ett fotografiskt gymnasiearbete med temat livets olika stadier, från småbarn till äldre.' },
      { title: 'Processen', text: 'Arbetet bestod av fem surrealistiska bilder som skapades genom olika fotograferingstekniker och efterbearbetning i Adobe Photoshop. Varje bild utforskade ett av livets stadier genom ett surrealistiskt visuellt uttryck.' },
      { title: 'Resultatet', text: 'En sammanhängande bildserie med fem fotografiska verk som gestaltar livets olika stadier.' },
    ],
    images: [
      { src: smabarn.url, alt: 'Barn springer på en blomsteräng med en hund och en giraff, och håller månen som en ballong', caption: 'Fotografiskt verk på temat småbarn.', width: 1920, height: 1440 },
    ],
  },
]

export type ProjectEntry = Project

const galleryOrder = ['inskolningsapp', 'sodersrunners', 'aterbruk-huddinge', 'webbplats-i-wordpress']
export const galleryProjects = [...projects].sort((a, b) => {
  const aRank = galleryOrder.indexOf(a.slug)
  const bRank = galleryOrder.indexOf(b.slug)
  return (aRank < 0 ? galleryOrder.length : aRank) - (bRank < 0 ? galleryOrder.length : bRank)
})

export function pageMeta(title: string, description: string) {
  return { meta: [{ title: `${title} — Minna Jansson` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} — Minna Jansson` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }
}
