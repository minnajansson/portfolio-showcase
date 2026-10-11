import { createFileRoute } from '@tanstack/react-router'
import { ProjectGallery } from '@/components/portfolio/project-gallery'
import { ContactBand } from '@/components/portfolio/site-chrome'
import { pageMeta } from '@/data/portfolio'
export const Route = createFileRoute('/work')({ head: () => pageMeta('Utvalda projekt', 'Utforska Minna Janssons projekt inom produktdesign, webbdesign och visuell identitet.'), component: Work })
function Work() { return <main className="site-width fade-in"><div className="py-16"><p className="eyebrow text-muted-foreground">Från idé till resultat</p><h1 className="page-heading">Ett urval av mina projekt.</h1><p className="prose-text mt-5">Utforskande av design, kreativitet och problemlösning i vardagen.</p></div><ProjectGallery/><ContactBand/></main> }
