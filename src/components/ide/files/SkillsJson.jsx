import { Line, Str, Punc, Prop } from '../Tokens'
import { SKILLS } from '../../../data/portfolioData'

export default function SkillsJson() {
  let n = 0
  const next = () => ++n
  const entries = Object.entries(SKILLS)

  return (
    <div className="py-3 font-mono text-[13px]">
      <Line n={next()}>{'{'}</Line>
      {entries.map(([key, items], gi) => (
        <div key={key}>
          <Line n={next()} indent={1}>
            <Prop>&quot;{key}&quot;</Prop>
            <Punc>: [</Punc>
          </Line>
          {items.map((item, ii) => (
            <Line key={item} n={next()} indent={2}>
              <Str>&quot;{item}&quot;</Str>
              <Punc>{ii < items.length - 1 ? ',' : ''}</Punc>
            </Line>
          ))}
          <Line n={next()} indent={1}>
            <Punc>]{gi < entries.length - 1 ? ',' : ''}</Punc>
          </Line>
        </div>
      ))}
      <Line n={next()}>{'}'}</Line>
    </div>
  )
}
