import { type ReactNode } from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

export function SiteHeader() {
 return <header className="site-width site-header"><Link to="/" className="wordmark" aria-label="Minna Jansson – startsida">Minna Jansson<span className="text-muted-foreground">.</span></Link><nav className="flex items-center gap-4 sm:gap-9" aria-label="Huvudmeny"><Link to="/" activeOptions={{ exact: true }} className="nav-link">Projekt</Link><Link to="/about" className="nav-link">Om mig/kontakt</Link></nav></header>
}
export function NextBand({ children }: { children: ReactNode }) {
 return <section className="contact-band"><div><p className="eyebrow text-muted-foreground">Vad händer härnäst?</p><h2 className="mt-3 text-3xl font-medium">Låt oss skapa något<br/>meningsfullt tillsammans.</h2><p className="availability mt-4"><span className="status-dot" aria-hidden="true"/>Öppen för praktik, jobb och nya idéer.</p></div>{children}</section>
}
export function SiteFooter() {
 return <footer className="site-width footer"><span>© {new Date().getFullYear()} Minna Jansson</span><span>Skapad med omtanke. Ständigt i utveckling.</span><Link to="/about" className="flex items-center gap-2 hover:text-foreground">Kontakta mig <ArrowRight className="size-3"/></Link></footer>
}
