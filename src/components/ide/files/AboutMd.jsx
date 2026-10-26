import { Line, Kw, Str, Com } from '../Tokens'
import { PROFILE } from '../../../data/portfolioData'

export default function AboutMd() {
  return (
    <div className="py-3 font-mono text-[13px]">
      <Line n={1}>
        <Kw># À propos</Kw>
      </Line>
      <Line n={2} />
      <Line n={3}>
        Je suis <Str>**{PROFILE.name}**</Str>, {PROFILE.role.toLowerCase()}.
      </Line>
      <Line n={4} />
      <Line n={5}>{PROFILE.bio}</Line>
      <Line n={6} />
      <Line n={7}>
        <Kw>## Ce que je fais</Kw>
      </Line>
      <Line n={8} />
      <Line n={9}>
        <Com>- Conception de solutions d&apos;intelligence artificielle, du</Com>
      </Line>
      <Line n={10}>
        <Com>&nbsp;&nbsp;prototype à la mise en production.</Com>
      </Line>
      <Line n={11}>
        <Com>- Audit d&apos;éthique et de fiabilité des systèmes d&apos;IA,</Com>
      </Line>
      <Line n={12}>
        <Com>&nbsp;&nbsp;notamment dans le domaine de la santé.</Com>
      </Line>
      <Line n={13}>
        <Com>- Traitement du langage naturel (NLP) et systèmes RAG.</Com>
      </Line>
      <Line n={14} />
      <Line n={15}>
        <Kw>&gt; </Kw>
        <Com>{PROFILE.tagline}</Com>
      </Line>
    </div>
  )
}
