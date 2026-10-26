import { Eye } from 'lucide-react'
import { PROFILE, EXPERIENCE, PROJECTS, ACCOMPLISHMENTS } from '../../../data/portfolioData'

const BADGES = [
  { label: 'Machine Learning', color: 'bg-[#3776ab]' },
  { label: 'Python', color: 'bg-[#2b5b84]' },
  { label: 'Status · Open to work', color: 'bg-[#2ea043]' },
  { label: 'Location · Bénin 🇧🇯', color: 'bg-[#8250df]' },
]

export default function Readme({ onOpenFile }) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10 sm:px-10">
      <div className="mb-6 flex items-center gap-2 text-xs text-ed-muted">
        <Eye className="h-3.5 w-3.5" />
        Aperçu Markdown — README.md
      </div>

      <div className="rounded-xl border border-ed-border bg-ed-panel/40 p-6 sm:p-10">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-ed-blue to-ed-purple text-xl font-bold text-white">
            NA
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white sm:text-3xl">{PROFILE.name}</h1>
            <p className="mt-1 text-sm text-ed-cyan">{PROFILE.role}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {BADGES.map((b) => (
            <span
              key={b.label}
              className={`rounded-md px-2.5 py-1 text-[11px] font-semibold text-white ${b.color}`}
            >
              {b.label}
            </span>
          ))}
        </div>

        <p className="mt-6 max-w-xl text-sm leading-relaxed text-ed-text">{PROFILE.bio}</p>

        <div className="mt-8 grid grid-cols-3 gap-4 border-t border-ed-border pt-6 text-center">
          <div>
            <p className="text-xl font-bold text-white">{EXPERIENCE.length}</p>
            <p className="text-[11px] uppercase tracking-wide text-ed-muted">expériences</p>
          </div>
          <div>
            <p className="text-xl font-bold text-white">{ACCOMPLISHMENTS.length}</p>
            <p className="text-[11px] uppercase tracking-wide text-ed-muted">prix</p>
          </div>
          <div>
            <p className="text-xl font-bold text-white">{PROJECTS.length}</p>
            <p className="text-[11px] uppercase tracking-wide text-ed-muted">projets</p>
          </div>
        </div>

        <div className="mt-8 rounded-lg border border-ed-border bg-ed-bg/60 p-4">
          <p className="font-mono text-xs text-ed-muted"># Pour aller plus loin</p>
          <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs">
            <button onClick={() => onOpenFile('about')} className="text-ed-blue hover:underline">
              cat about.md
            </button>
            <button onClick={() => onOpenFile('experience')} className="text-ed-blue hover:underline">
              open experience.js
            </button>
            <button onClick={() => onOpenFile('healthyguard')} className="text-ed-blue hover:underline">
              cd projects/ &amp;&amp; open healthyguard.md
            </button>
            <button
              onClick={() => onOpenFile('certifications')}
              className="text-ed-blue hover:underline"
            >
              cat certifications.yml
            </button>
            <button onClick={() => onOpenFile('contact')} className="text-ed-blue hover:underline">
              python3 contact.py
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
