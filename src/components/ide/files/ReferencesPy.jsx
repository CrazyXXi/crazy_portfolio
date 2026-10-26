import { Line, Kw, Str, Com, Punc } from '../Tokens'
import { REFERENCES } from '../../../data/portfolioData'

export default function ReferencesPy() {
  let n = 0
  const next = () => ++n

  return (
    <div className="py-3 font-mono text-[13px]">
      <Line n={next()}>
        <Com># Références professionnelles</Com>
      </Line>
      <Line n={next()} />
      <Line n={next()}>
        <Kw>references</Kw> = [
      </Line>
      {REFERENCES.map((ref, i) => (
        <div key={ref.name}>
          <Line n={next()} indent={1}>
            {'{'}
          </Line>
          <Line n={next()} indent={2}>
            <Str>&quot;name&quot;</Str>
            <Punc>: </Punc>
            <Str>&quot;{ref.name}&quot;</Str>
            <Punc>,</Punc>
          </Line>
          <Line n={next()} indent={2}>
            <Str>&quot;role&quot;</Str>
            <Punc>: </Punc>
            <Str>&quot;{ref.role}&quot;</Str>
            <Punc>,</Punc>
          </Line>
          <Line n={next()} indent={2}>
            <Str>&quot;company&quot;</Str>
            <Punc>: </Punc>
            <Str>&quot;{ref.company}&quot;</Str>
            <Punc>,</Punc>
          </Line>
          <Line n={next()} indent={2}>
            <Str>&quot;email&quot;</Str>
            <Punc>: </Punc>
            <Str>&quot;{ref.email}&quot;</Str>
          </Line>
          <Line n={next()} indent={1}>
            {'}'}
            {i < REFERENCES.length - 1 ? ',' : ''}
          </Line>
        </div>
      ))}
      <Line n={next()}>]</Line>
    </div>
  )
}
