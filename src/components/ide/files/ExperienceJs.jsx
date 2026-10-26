import { Line, Kw, Str, Com, Prop, Punc } from '../Tokens'
import { EXPERIENCE } from '../../../data/portfolioData'

export default function ExperienceJs() {
  let n = 0
  const next = () => ++n

  return (
    <div className="py-3 font-mono text-[13px]">
      <Line n={next()}>
        <Com>// Mon parcours professionnel</Com>
      </Line>
      <Line n={next()}>
        <Kw>export const</Kw> experience = [
      </Line>

      {EXPERIENCE.map((job, i) => (
        <div key={job.role + job.company}>
          <Line n={next()} indent={1}>
            {'{'}
          </Line>
          <Line n={next()} indent={2}>
            <Prop>role</Prop>
            <Punc>: </Punc>
            <Str>&apos;{job.role}&apos;</Str>
            <Punc>,</Punc>
          </Line>
          <Line n={next()} indent={2}>
            <Prop>company</Prop>
            <Punc>: </Punc>
            <Str>&apos;{job.company}&apos;</Str>
            <Punc>,</Punc>
          </Line>
          <Line n={next()} indent={2}>
            <Prop>period</Prop>
            <Punc>: </Punc>
            <Str>&apos;{job.period}&apos;</Str>
            <Punc>,</Punc>
          </Line>
          <Line n={next()} indent={2}>
            <Prop>current</Prop>
            <Punc>: </Punc>
            <Kw>{String(job.current)}</Kw>
            <Punc>,</Punc>
          </Line>
          <Line n={next()} indent={2}>
            <Prop>bullets</Prop>
            <Punc>: [</Punc>
          </Line>
          {job.bullets.map((b) => (
            <Line key={b} n={next()} indent={3}>
              <Str>&apos;{b}&apos;</Str>
              <Punc>,</Punc>
            </Line>
          ))}
          <Line n={next()} indent={2}>
            <Punc>],</Punc>
          </Line>
          <Line n={next()} indent={1}>
            {'}'}
            {i < EXPERIENCE.length - 1 ? ',' : ''}
          </Line>
        </div>
      ))}

      <Line n={next()}>]</Line>
      <Line n={next()} />
      <Line n={next()}>
        <Kw>export default</Kw> experience
        <Punc>.</Punc>
        <Prop>length</Prop> <Com>// → {EXPERIENCE.length} rôles et toujours plus</Com>
      </Line>
    </div>
  )
}
