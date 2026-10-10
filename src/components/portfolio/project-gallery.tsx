import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { projects } from '@/data/portfolio'

export function ProjectGallery() {
  const [filter, setFilter] = useState('All projects')
  const filtered = projects.filter(project => filter === 'All projects' || project.category === filter)
  return <section aria-label="Selected work">
    <div className="section-bar">
      <div className="flex items-baseline gap-3"><h2 className="text-xl font-semibold">Selected work</h2><span className="text-xs text-muted-foreground">({String(projects.length).padStart(2,'0')})</span></div>
      <div className="flex flex-wrap gap-1" aria-label="Filter projects">{['All projects','Product design','Web design'].map(item => <Button key={item} variant={filter === item ? 'secondary' : 'ghost'} size="sm" aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</Button>)}</div>
    </div>
    <div className="project-grid">{filtered.map((project, index) => <Link key={project.slug} to="/projects/$slug" params={{slug:project.slug}} className="project-link block" aria-label={`View ${project.title} project`}>
      <div className="project-image"><img src={project.image} alt={`${project.title} interface design concept`} width={1440} height={1024} loading={index === 0 ? 'eager' : 'lazy'} /></div>
      <div className="mt-5 flex items-start justify-between gap-4"><div><h3 className="text-lg font-semibold">{project.title}</h3><p className="mt-1.5 text-xs text-muted-foreground">{project.subtitle}</p></div><ArrowUpRight className="project-arrow mt-1 size-5" strokeWidth={1.4}/></div>
      <div className="mt-4 flex items-center justify-between"><div className="project-tags">{project.tags.map(tag => <span className="project-tag" key={tag}>{tag}</span>)}</div><span className="text-[10px] text-muted-foreground">{project.year}</span></div>
    </Link>)}</div>
  </section>
}
