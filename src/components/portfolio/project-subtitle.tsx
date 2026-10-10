import type { Project } from '@/data/portfolio'

/**
 * Renders a project subtitle, bolding the part named in `subtitleStrong`
 * (e.g. "Designprojekt i samarbete med **Karolinska sjukhuset**").
 */
export function ProjectSubtitle({ project, className }: { project: Project; className?: string }) {
  const strong = project.subtitleStrong
  if (!strong || !project.subtitle.includes(strong)) return <p className={className}>{project.subtitle}</p>
  const [before, after] = project.subtitle.split(strong)
  return (
    <p className={className}>
      {before}
      <strong className="subtitle-strong">{strong}</strong>
      {after}
    </p>
  )
}
