import { Link } from '@tanstack/react-router'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function SiteHeader() {
 return <header className="site-width site-header"><Link to="/" className="wordmark" aria-label="Minna Jansson – startsida">Minna Jansson<span className="text-muted-foreground">.</span></Link><nav className="flex items-center gap-4 sm:gap-9" aria-label="Huvudmeny"><Link to="/work" className="nav-link">Projekt</Link><Link to="/about" className="nav-link">Om mig</Link><Link to="/contact" className="nav-link flex items-center gap-1">Kontakt <ArrowUpRight className="size-3"/></Link></nav></header>
}
export function ContactBand() {
 return <section className="contact-band"><div><p className="eyebrow text-muted-foreground">Vad händer härnäst?</p><h2 className="mt-3 text-3xl font-medium">Bra samarbete börjar med ett samtal.</h2><p className="mt-3 text-sm text-muted-foreground">Öppen för praktik, nya utmaningar och givande samarbeten.</p></div><Button asChild variant="outline" className="shrink-0" size="lg"><Link to="/contact">Hör av dig <ArrowUpRight/></Link></Button></section>
}
export function SiteFooter() {
 return <footer className="site-width footer"><span>© {new Date().getFullYear()} Minna Jansson</span><span>Skapad med omtanke. Ständigt i utveckling.</span><Link to="/contact" className="flex items-center gap-2 hover:text-foreground">Kontakta mig <ArrowRight className="size-3"/></Link></footer>
}
