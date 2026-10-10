import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProjectGallery } from '@/components/portfolio/project-gallery'
import { ContactBand } from '@/components/portfolio/site-chrome'
import { pageMeta } from '@/data/portfolio'

export const Route = createFileRoute('/')({ head: () => pageMeta('Portfolio', 'Minna Jansson’s selected projects, creative process, and digital design portfolio. Open to internship and work opportunities.'), component: Index })
function Index() {
 return <main className="site-width fade-in"><section className="intro"><div className="flex flex-wrap items-center justify-between gap-4"><p className="eyebrow text-muted-foreground">Portfolio / 2026</p><span className="availability"><span className="status-dot"/>Open to opportunities</span></div><h1 className="intro-title">Student inom medieteknik <span className="text-muted-foreground">med intresse för design, webbutveckling och visuell kommunikation</span></h1><div className="mt-7 flex flex-wrap items-end justify-between gap-7"><div><Button asChild variant="link" className="mt-5 h-auto p-0 text-xs"><Link to="/about">A little more about me <ArrowUpRight className="size-3"/></Link></Button></div><span className="flex items-center gap-3 text-[11px] text-muted-foreground">Selected projects below <ArrowDown className="size-4" strokeWidth={1.3}/></span></div></section><ProjectGallery/><ContactBand/></main>
}
