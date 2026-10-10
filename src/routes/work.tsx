import { createFileRoute } from '@tanstack/react-router'
import { ProjectGallery } from '@/components/portfolio/project-gallery'
import { ContactBand } from '@/components/portfolio/site-chrome'
import { pageMeta } from '@/data/portfolio'
export const Route = createFileRoute('/work')({ head: () => pageMeta('Selected work', 'Explore Minna’s product design, web design, and visual identity projects.'), component: Work })
function Work() { return <main className="site-width fade-in"><div className="py-16"><p className="eyebrow text-muted-foreground">Ideas into outcomes</p><h1 className="page-heading">A selection of my work.</h1><p className="prose-text mt-5">Explorations in design, creativity, and everyday problem-solving.</p></div><ProjectGallery/><ContactBand/></main> }
