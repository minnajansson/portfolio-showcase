import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProjectSubtitle } from '@/components/portfolio/project-subtitle'
import { projects, pageMeta } from '@/data/portfolio'

export const Route = createFileRoute('/projects/$slug')({
  loader: ({ params }) => { const project = projects.find(p => p.slug === params.slug); if (!project) throw notFound(); return project },
  head: ({ loaderData }) => pageMeta(loaderData?.title ?? 'Projektet hittades inte', loaderData?.sections[0]?.text ?? 'Det här projektet kunde inte hittas.'),
  component: ProjectDetail,
})

function ProjectDetail() {
  const project = Route.useLoaderData()
  const next = projects.length > 1 ? projects[(projects.findIndex(p => p.slug === project.slug) + 1) % projects.length] : undefined
  const facts = ([['Tidsperiod', project.duration], ['Samarbete', project.collaboration], ['Verktyg', project.tools], ['Fokus', project.focus]].filter(([, v]) => Boolean(v)) as [string, string][])
  const eyebrow = [project.category, project.year].filter(Boolean).join(' / ')
  const portrait = project.hero.height > project.hero.width
  return <main className="site-width fade-in py-12">
    <Button asChild variant="link" className="p-0 text-muted-foreground"><Link to="/"><ArrowLeft/> Tillbaka till projekten</Link></Button>
    <div className={`detail-top${portrait ? ' detail-top--portrait' : ''}`}>
      <div>
        <p className="eyebrow text-muted-foreground">{eyebrow}</p>
        <h1 className="detail-heading">{project.title}</h1>
        <ProjectSubtitle project={project} className="prose-text mt-4"/>
        {project.link && <Button asChild variant="outline" className="mt-7"><a href={project.link} target="_blank" rel="noreferrer">Besök webbplatsen <ArrowUpRight/></a></Button>}
      </div>
      <figure className="detail-hero"><img src={project.hero.src} alt={project.hero.alt} width={project.hero.width} height={project.hero.height} loading="eager"/>{project.hero.caption && <figcaption className="figure-caption">{project.hero.caption}</figcaption>}</figure>
    </div>
    <div className="mt-16 grid gap-12 md:grid-cols-[1fr_2fr]">
      <aside><h2 className="eyebrow">Kort om projektet</h2><dl className="mt-7 space-y-6 text-sm">{facts.map(([label, value]) => <div key={label}><dt className="text-muted-foreground text-xs">{label}</dt><dd className="mt-2">{value}</dd>{label === 'Samarbete' && project.reference && <><dt className="eyebrow mt-6">Referens</dt><dd className="mt-3 space-y-2"><p>{project.reference.name}</p><p className="text-muted-foreground leading-relaxed">{project.reference.role}</p><p className="text-muted-foreground text-xs leading-relaxed">{project.reference.contact}</p></dd></>}</div>)}</dl></aside>
      <article className="space-y-10">{project.sections.map(s => <section key={s.title}><h2 className="text-xl font-medium">{s.title}</h2><p className="prose-text mt-4">{s.text}</p></section>)}</article>
    </div>
    {project.images && project.images.length > 0 && <div className="case-figures">{project.images.map(image => <figure className={`case-figure${image.height > image.width ? ' case-figure--portrait' : ''}`} key={image.src}><img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy"/>{image.caption && <figcaption className="figure-caption">{image.caption}</figcaption>}</figure>)}</div>}
    {next && <div className="mt-20 border-t pt-9 flex justify-between items-center gap-6"><span className="eyebrow text-muted-foreground">Nästa projekt</span><Link to="/projects/$slug" params={{ slug: next.slug }} className="flex items-center gap-4 text-2xl text-right">{next.title}<ArrowRight className="shrink-0" strokeWidth={1.2}/></Link></div>}
  </main>
}
