import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowUpRight, Check, Copy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { pageMeta } from '@/data/portfolio'
export const Route = createFileRoute('/contact')({ head: () => pageMeta('Kontakt', 'Kontakta Minna Jansson om praktik, arbetsmöjligheter och kreativa samarbeten.'), component: Contact })
function Contact() {
 const [copied, setCopied] = useState(false)
 const [error, setError] = useState(false)
 async function copyEmail() { try { await navigator.clipboard.writeText('minnaj31@gmail.com'); setCopied(true); setError(false); setTimeout(() => setCopied(false), 2500) } catch { setError(true) } }
 return <main className="site-width fade-in min-h-[70vh]"><section className="py-20"><span className="availability"><span className="status-dot"/>Öppen för nya möjligheter</span><h1 className="page-heading mt-8">Låt oss skapa något<br/>meningsfullt tillsammans.</h1><p className="prose-text max-w-lg mt-7">Har du en praktikplats, ett jobb eller en idé i åtanke? Jag hör gärna mer.</p><div className="mt-12 flex flex-wrap items-center gap-4"><Button asChild size="lg"><a href="mailto:minnaj31@gmail.com">Hör av dig <ArrowUpRight/></a></Button><Button variant="outline" size="icon" title="Kopiera e-postadress" aria-label="Kopiera e-postadress" onClick={copyEmail}>{copied ? <Check/> : <Copy/>}</Button></div><p className="mt-5 text-sm text-muted-foreground">minnaj31@gmail.com</p><p className="mt-2 text-xs text-muted-foreground" aria-live="polite">{copied ? 'E-postadressen har kopierats.' : error ? 'Det gick inte att kopiera. Du kan markera e-postadressen ovan.' : ''}</p></section></main>
}
