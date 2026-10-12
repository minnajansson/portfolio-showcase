import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProjectGallery } from '@/components/portfolio/project-gallery'
import { ContactBand } from '@/components/portfolio/site-chrome'
import { pageMeta } from '@/data/portfolio'

export const Route = createFileRoute('/')({ head: () => pageMeta('Portfolio', 'Minna Janssons utvalda projekt, kreativa process och portfolio inom digital design. Öppen för praktik och arbete.'), component: Index })
function Index() {
 return <main className="site-width fade-in"><section className="intro"><div className="flex flex-wrap items-center justify-between gap-4"><p className="eyebrow text-muted-foreground">Portfolio / 2026</p><p className="eyebrow text-muted-foreground">Öppen för nya möjligheter</p></div><h1 className="intro-title">Design och digitala upplevelser med människan i fokus</h1><p className="intro-subtitle mt-5">Student inom it, medier och design, med intresse för en kombination av teknik och kreativitet.</p><div className="mt-7 flex flex-wrap items-end justify-between gap-7 max-sm:flex-col max-sm:items-start max-sm:gap-5"></div></section><ProjectGallery/><ContactBand/></main>
}
