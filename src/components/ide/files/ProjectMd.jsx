import { ExternalLink, Trophy } from 'lucide-react'
import { Line, Kw, Str, Com, Punc } from '../Tokens'
import { PROJECTS } from '../../../data/portfolioData'

export default function ProjectMd({ slug }) {
  const project = PROJECTS.find((p) => p.slug === slug)
  let n = 0
  const next = () => ++n

  return (
    <div className="py-3 font-mono text-[13px]">
      <Line n={next()}>
        <Kw># {project.name}</Kw>
      </Line>
      <Line n={next()}>
        <Str>_{project.subtitle}_</Str>
      </Line>
      <Line n={next()} />
      <Line n={next()}>{project.description}</Line>
      <Line n={next()} />
      <Line n={next()}>
        <Kw>## Tags</Kw>
      </Line>
      <Line n={next()}>
        {project.tags.map((t, i) => (
          <span key={t}>
            <Punc>`</Punc>
            <Com>{t}</Com>
            <Punc>`</Punc>
            {i < project.tags.length - 1 ? '  ' : ''}
          </span>
        ))}
      </Line>
      <Line n={next()} />

      {project.status === 'hackathon' && (
        <div className="not-prose ml-10 mb-4 flex items-center gap-2 text-ed-yellow">
          <Trophy className="h-3.5 w-3.5" />
          <span className="text-xs">{project.subtitle}</span>
        </div>
      )}

      {project.links?.length > 0 && (
        <div className="not-prose ml-10 mt-2 flex flex-wrap gap-2">
          {project.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href?.startsWith('http') ? '_blank' : undefined}
              rel={l.href?.startsWith('http') ? 'noreferrer' : undefined}
              className="inline-flex items-center gap-2 rounded-md bg-ed-blue/15 px-3 py-1.5 text-ed-blue transition-colors hover:bg-ed-blue/25"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
