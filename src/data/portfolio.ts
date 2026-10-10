import inskolningsappCover from '@/assets/inskolningsapp-cover.png.asset.json'
import inskolningsappResult from '@/assets/result.png.asset.json'
import inskolningsappObservation from '@/assets/observation.png.asset.json'
import inskolningsappTesting from '@/assets/testing.png.asset.json'
import folio from '@/assets/folio.jpg'
import form from '@/assets/form.jpg'
import still from '@/assets/still.jpg'

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
    category: 'Product design',
    tags: ['UX / UI design', 'Mobile app', 'Research'],
    year: '',
    image: inskolningsappCover.url,
    imageAlt: 'Person i skötaruniform som testar inskolningsappens prototyp på en smartphone',
    role: '',
    duration: '',
    collaboration: 'Karolinska universitetssjukhuset',
    description: '',
    challenge: 'Uppdrag från omvårdnadschef på akutmottagningen på Karolinska universitetssjukhuset att förenkla och digitalisera inskolningsprocessen för nyanställda som idag sker via fysiska papper.',
    approach: 'Arbetet utfördes genom intervjuer och observationer med chefer, anställda och nyanställda på plats på akutmottagningen för att bilda en förståelse för kontexten och målgruppen. Sedan definierades materialet för att konkretisera insikter, behov och mål. Vidare utfördes idégenerering och prototyping för att visualisera lösningar som sedan testades på plats på akutmottagningen och förfinades.',
    outcome: 'Resultatet blev en prototyp av en app där information, inlärning, dokumentation, återkoppling och kommunikation under inskolningsprocessen samlas på samma ställe digitalt.',
    hero: {
      src: inskolningsappResult.url,
      alt: 'Sju skärmar ur prototypen av inskolningsappen, med texten Tryggare inskolning, starkare kompetens, säkrare vård',
      caption: 'Prototypens gränssnitt',
      width: 1000,
      height: 1000,
      square: true,
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
  {
    slug: 'folio',
    title: 'Folio',
    subtitle: 'A clearer picture of your finances.',
    category: 'Product design',
    tags: ['UX / UI design', 'Web application'],
    year: '2026',
    image: folio,
    role: 'Product designer',
    duration: '6 weeks',
    description: 'A concept for making everyday finances feel approachable. Folio brings spending, savings, and sustainable choices together in one considered experience.',
    challenge: 'Financial information can feel overwhelming. The goal was to turn a complex overview into a calm, readable experience that helps people understand where their money goes.',
    approach: 'The concept explores clear visual hierarchy, plain-language labels, and purposeful data visualization. A restrained green palette connects financial progress with more sustainable everyday decisions.',
    outcome: 'A cohesive dashboard concept, with reusable interface patterns for spending, savings goals, and personal impact.',
    sample: true,
  },
  {
    slug: 'form',
    title: 'Form',
    subtitle: 'A digital home for a fresh perspective.',
    category: 'Web design',
    tags: ['Web design', 'Visual identity'],
    year: '2026',
    image: form,
    role: 'Web & visual designer',
    duration: '4 weeks',
    description: 'An independent editorial concept exploring the intersection of art, culture, and design. Form puts compelling stories and imagery at the center.',
    challenge: 'Create a distinctive editorial experience that feels expressive without distracting from the stories themselves.',
    approach: 'A bold typographic identity meets a flexible editorial grid. Generous space, oversized photography, and a single expressive accent establish a recognizable visual language.',
    outcome: 'An editorial homepage concept and visual direction that can extend across features, interviews, and essays.',
    sample: true,
  },
  {
    slug: 'still',
    title: 'Still',
    subtitle: 'Small rituals. A little more balance.',
    category: 'Product design',
    tags: ['Mobile app', 'UX / UI design'],
    year: '2025',
    image: still,
    role: 'UX / UI designer',
    duration: '5 weeks',
    description: 'A mobile wellbeing concept focused on simple, achievable daily rituals. Still makes space for progress without the pressure of perfection.',
    challenge: 'Habit tracking can become another source of pressure. This concept asks how an app can encourage consistency while remaining gentle and supportive.',
    approach: 'Warm colors, simple check-ins, and readable progress views keep the experience focused. Each screen supports one clear task, from selecting a ritual to reviewing the week.',
    outcome: 'A mobile app concept with daily ritual tracking and a weekly reflection experience.',
    sample: true,
  },
]

export type ProjectEntry = Project

export function pageMeta(title: string, description: string) {
  return { meta: [{ title: `${title} — Minna Jansson` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} — Minna Jansson` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }
}
