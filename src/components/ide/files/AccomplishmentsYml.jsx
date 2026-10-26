import { Line, Str, Com, Prop, Num } from '../Tokens'
import { ACCOMPLISHMENTS } from '../../../data/portfolioData'

export default function AccomplishmentsYml() {
  let n = 0
  const next = () => ++n

  return (
    <div className="py-3 font-mono text-[13px]">
      <Line n={next()}>
        <Com># Palmarès &amp; hackathons</Com>
      </Line>
      <Line n={next()}>
        <Prop>accomplishments</Prop>:
      </Line>
      {ACCOMPLISHMENTS.map((award) => (
        <div key={award.title}>
          <Line n={next()} indent={1}>
            - <Prop>rank</Prop>: <Num>{award.rank}</Num>
          </Line>
          <Line n={next()} indent={2}>
            <Prop>title</Prop>: <Str>{award.title}</Str>
          </Line>
          <Line n={next()} indent={2}>
            <Prop>date</Prop>: <Str>{award.date}</Str>
          </Line>
          <Line n={next()} indent={2}>
            <Prop>description</Prop>: <Str>&gt;-</Str>
          </Line>
          <Line n={next()} indent={3}>
            <Str>{award.description}</Str>
          </Line>
        </div>
      ))}
    </div>
  )
}
