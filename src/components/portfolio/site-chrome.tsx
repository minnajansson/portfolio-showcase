import { Link } from '@tanstack/react-router'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function SiteHeader() {
 return <header className="site-width site-header"><Link to="/" className="wordmark" aria-label="Minna Jansson home">Minna Jansson<span className="text-muted-foreground">.</span></Link><nav className="flex items-center gap-4 sm:gap-9" aria-label="Main navigation"><Link to="/work" className="nav-link">Work</Link><Link to="/about" className="nav-link">About</Link><Link to="/contact" className="nav-link flex items-center gap-1">Contact <ArrowUpRight className="size-3"/></Link></nav></header>
}
export function ContactBand() {
 return <section className="contact-band"><div><p className="eyebrow text-muted-foreground">What's next?</p><h2 className="mt-3 text-3xl font-medium">Good work starts with a conversation.</h2><p className="mt-3 text-sm text-muted-foreground">Open to internships, new challenges, and thoughtful collaborations.</p></div><Button asChild variant="outline" className="shrink-0" size="lg"><Link to="/contact">Let's talk <ArrowUpRight/></Link></Button></section>
}
export function SiteFooter() {
 return <footer className="site-width footer"><span>© {new Date().getFullYear()} Minna Jansson</span><span>Thoughtfully made. Always evolving.</span><Link to="/contact" className="flex items-center gap-2 hover:text-foreground">Get in touch <ArrowRight className="size-3"/></Link></footer>
}
