import { Play } from 'lucide-react'
import { Line, Kw, Str, Com, Fn, Punc } from '../Tokens'
import { PROFILE, SOCIALS, LANGUAGES } from '../../../data/portfolioData'

export default function ContactPy({ onRun }) {
  return (
    <div className="py-3 font-mono text-[13px]">
      <div className="mb-2 flex items-center justify-end px-4">
        <button
          onClick={onRun}
          className="flex items-center gap-1.5 rounded border border-ed-border bg-ed-panel px-2.5 py-1 text-xs text-ed-green transition-colors hover:bg-white/5"
        >
          <Play className="h-3 w-3 fill-current" />
          Run contact.py
        </button>
      </div>

      <Line n={1}>
        <Com># -*- coding: utf-8 -*-</Com>
      </Line>
      <Line n={2} />
      <Line n={3}>
        <Kw>def</Kw> <Fn>contact</Fn>
        <Punc>():</Punc>
      </Line>
      <Line n={4} indent={1}>
        <Fn>print</Fn>
        <Punc>(</Punc>
        <Str>f&quot;👋 Salut, je suis {PROFILE.name} !&quot;</Str>
        <Punc>)</Punc>
      </Line>
      <Line n={5} indent={1}>
        <Fn>print</Fn>
        <Punc>(</Punc>
        <Str>&quot;{PROFILE.tagline}&quot;</Str>
        <Punc>)</Punc>
      </Line>
      <Line n={6} />
      <Line n={7} indent={1}>
        <Kw>contact_info</Kw> = {'{'}
      </Line>
      <Line n={8} indent={2}>
        <Str>&quot;email&quot;</Str>
        <Punc>: </Punc>
        <Str>&quot;{PROFILE.email}&quot;</Str>
        <Punc>,</Punc>
      </Line>
      <Line n={9} indent={2}>
        <Str>&quot;téléphone&quot;</Str>
        <Punc>: </Punc>
        <Str>&quot;{PROFILE.phone}&quot;</Str>
        <Punc>,</Punc>
      </Line>
      <Line n={10} indent={2}>
        <Str>&quot;localisation&quot;</Str>
        <Punc>: </Punc>
        <Str>&quot;{PROFILE.location}&quot;</Str>
        <Punc>,</Punc>
      </Line>
      {SOCIALS.map((s, i) => (
        <Line key={s.label} n={11 + i} indent={2}>
          <Str>&quot;{s.label.toLowerCase()}&quot;</Str>
          <Punc>: </Punc>
          <Str>
            &quot;
            {s.href.startsWith('http') ? (
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-dotted hover:text-white"
              >
                {s.href}
              </a>
            ) : (
              s.href
            )}
            &quot;
          </Str>
          <Punc>,</Punc>
        </Line>
      ))}
      <Line n={11 + SOCIALS.length} indent={1}>
        {'}'}
      </Line>
      <Line n={12 + SOCIALS.length} />
      <Line n={13 + SOCIALS.length} indent={1}>
        <Kw>languages</Kw> = [
        {LANGUAGES.map((l, i) => (
          <span key={l.lang}>
            <Str>&quot;{l.lang} ({l.level})&quot;</Str>
            {i < LANGUAGES.length - 1 ? ', ' : ''}
          </span>
        ))}
        ]
      </Line>
      <Line n={14 + SOCIALS.length} />
      <Line n={15 + SOCIALS.length} indent={1}>
        <Kw>return</Kw> contact_info
      </Line>
      <Line n={16 + SOCIALS.length} />
      <Line n={17 + SOCIALS.length}>
        <Kw>if</Kw> __name__ == <Str>&quot;__main__&quot;</Str>
        <Punc>:</Punc>
      </Line>
      <Line n={18 + SOCIALS.length} indent={1}>
        <Fn>contact</Fn>
        <Punc>()</Punc>{' '}
        <Com>
          # → appuie sur « Run » ou ouvre le terminal en bas
        </Com>
      </Line>
    </div>
  )
}
