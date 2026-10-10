import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowUpRight, Check, Copy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { pageMeta } from '@/data/portfolio'
export const Route = createFileRoute('/contact')({ head: () => pageMeta('Contact', 'Get in touch with Minna Jansson about internships, work opportunities, and creative collaborations.'), component: Contact })
function Contact() {
 const [copied, setCopied] = useState(false)
 const [error, setError] = useState(false)
 async function copyEmail() { try { await navigator.clipboard.writeText('minnaj31@gmail.com'); setCopied(true); setError(false); setTimeout(() => setCopied(false), 2500) } catch { setError(true) } }
 return <main className="site-width fade-in min-h-[70vh]"><section className="py-20"><span className="availability"><span className="status-dot"/>Open to opportunities</span><h1 className="page-heading mt-8">Let’s make something<br/>meaningful together.</h1><p className="prose-text max-w-lg mt-7">Have an internship, a role, or an idea in mind? I’d love to hear about it.</p><div className="mt-12 flex flex-wrap items-center gap-4"><Button asChild size="lg"><a href="mailto:minnaj31@gmail.com">Say hello <ArrowUpRight/></a></Button><Button variant="outline" size="icon" title="Copy email address" aria-label="Copy email address" onClick={copyEmail}>{copied ? <Check/> : <Copy/>}</Button></div><p className="mt-5 text-sm text-muted-foreground">minnaj31@gmail.com</p><p className="mt-2 text-xs text-muted-foreground" aria-live="polite">{copied ? 'Email address copied.' : error ? 'Could not copy. You can select the email address above.' : ''}</p></section></main>
}
