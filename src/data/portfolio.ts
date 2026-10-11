import inskolningsappCover from '@/assets/inskolningsapp-cover.png.asset.json'
import inskolningsappObservation from '@/assets/observation.png.asset.json'
import inskolningsappTesting from '@/assets/testing.png.asset.json'

export interface ProjectImage {
  src: string
  alt: string
  caption?: string
  width: number
  height: number
  square?: boolean
}

export interface Project {
  slug: string
  title: string
  subtitle: string
  subtitleStrong?: string
  category: string
  tags: string[]
  year?: string
  image: string
  imageAlt?: string
  role?: string
  duration?: string
  collaboration?: string
  description?: string
  challenge: string
  approach: string
  outcome: string
  hero?: ProjectImage
  process?: ProjectImage[]
  sample?: boolean
}

export const projects: Project[] = [
  {
    slug: 'inskolningsapp',
    title: 'Inskolningsapp',
    subtitle: 'Designprojekt i samarbete med Karolinska sjukhuset',
    subtitleStrong: 'Karolinska sjukhuset',
    category: 'Produktdesign',
    tags: ['UX / UI-design', 'Mobilapp', 'Användarundersökning'],
    year: '2026',
    image: inskolningsappCover.url,
    imageAlt: 'Skärmar ur prototypen av inskolningsappen, med texten Tryggare inskolning, starkare kompetens, säkrare vård',
    role: '',
    duration: '',
    collaboration: 'Karolinska universitetssjukhuset',
    description: '',
    challenge: 'Uppdrag från omvårdnadschef på akutmottagningen på Karolinska universitetssjukhuset att förenkla och digitalisera inskolningsprocessen för nyanställda som idag sker via fysiska papper.',
    approach: 'Arbetet utfördes genom intervjuer och observationer med chefer, anställda och nyanställda på plats på akutmottagningen för att bilda en förståelse för kontexten och målgruppen. Sedan definierades materialet för att konkretisera insikter, behov och mål. Vidare utfördes idégenerering och prototyping för att visualisera lösningar som sedan testades på plats på akutmottagningen och förfinades.',
    outcome: 'Resultatet blev en prototyp av en app där information, inlärning, dokumentation, återkoppling och kommunikation under inskolningsprocessen samlas på samma ställe digitalt.',
    hero: {
      src: inskolningsappCover.url,
      alt: 'Sju skärmar ur prototypen av inskolningsappen, med texten Tryggare inskolning, starkare kompetens, säkrare vård',
      caption: 'Prototypens gränssnitt',
      width: 1566,
      height: 1080,
    },
    process: [
      {
        src: inskolningsappObservation.url,
        alt: 'Klinisk arbetsplats på akutmottagningen med väggmonterad datorterminal',
        caption: 'Observation på akutmottagningen',
        width: 1200,
        height: 1000,
      },
      {
        src: inskolningsappTesting.url,
        alt: 'Test av appens prototyp på en smartphone',
        caption: 'Test av prototypen på plats',
        width: 1200,
        height: 1000,
      },
    ],
  },
]

export type ProjectEntry = Project

export function pageMeta(title: string, description: string) {
  return { meta: [{ title: `${title} — Minna Jansson` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} — Minna Jansson` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }
}
