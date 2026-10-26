import { Line, Kw, Str, Com } from '../Tokens'
import { EDUCATION } from '../../../data/portfolioData'

export default function EducationMd() {
  let n = 0
  const next = () => ++n

  return (
    <div className="py-3 font-mono text-[13px]">
      <Line n={next()}>
        <Kw># Formation</Kw>
      </Line>
      <Line n={next()} />
      {EDUCATION.map((edu) => (
        <div key={edu.title}>
          <Line n={next()}>
            <Kw>## {edu.title}</Kw>
          </Line>
          <Line n={next()}>
            <Str>
              _{edu.place} · {edu.period}_
            </Str>
          </Line>
          {edu.description && (
            <Line n={next()}>
              <Com>{edu.description}</Com>
            </Line>
          )}
          <Line n={next()} />
        </div>
      ))}
      <Line n={next()}>
        <Com>&gt; Voir `certifications.yml` pour mes certifications.</Com>
      </Line>
    </div>
  )
}
