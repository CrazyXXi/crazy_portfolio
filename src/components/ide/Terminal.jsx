import { useEffect, useRef, useState } from 'react'
import { X, TerminalSquare } from 'lucide-react'
import { PROFILE } from '../../data/portfolioData'

const SCRIPT = [
  { type: 'cmd', text: 'python3 contact_me.py' },
  { type: 'out', text: 'Connexion à nelxie.dev ...' },
  { type: 'ok', text: `Status: ${PROFILE.status}` },
  { type: 'out', text: `Email     → ${PROFILE.email}` },
  { type: 'out', text: `Téléphone → ${PROFILE.phone}` },
  { type: 'out', text: `Lieu      → ${PROFILE.location}` },
  { type: 'cmd', text: '' },
]

export default function Terminal({ open, onClose }) {
  const [lines, setLines] = useState([])
  const bottomRef = useRef(null)

  useEffect(() => {
    if (!open) {
      setLines([])
      return
    }

    let cancelled = false
    setLines([])

    async function run() {
      for (const line of SCRIPT) {
        if (cancelled) return
        await new Promise((r) => setTimeout(r, line.type === 'cmd' ? 350 : 180))
        setLines((prev) => [...prev, line])
      }
    }
    run()

    return () => {
      cancelled = true
    }
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ block: 'end' })
  }, [lines])

  if (!open) return null

  return (
    <div className="flex h-44 shrink-0 flex-col border-t border-ed-border bg-ed-bg sm:h-52">
      <div className="flex h-8 shrink-0 items-center justify-between border-b border-ed-border bg-ed-panel px-3">
        <span className="flex items-center gap-2 text-xs text-ed-muted">
          <TerminalSquare className="h-3.5 w-3.5" />
          TERMINAL
        </span>
        <button onClick={onClose} className="text-ed-muted hover:text-white">
          <X className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-3 text-[13px] leading-relaxed">
        {lines.map((line, i) => (
          <div key={i}>
            {line.type === 'cmd' ? (
              <span>
                <span className="text-ed-green">nelxie@portfolio</span>
                <span className="text-ed-text">:</span>
                <span className="text-ed-blue">~</span>
                <span className="text-ed-text">$ </span>
                <span className="text-white">{line.text}</span>
                {i === lines.length - 1 && <span className="cursor-blink text-white">▌</span>}
              </span>
            ) : line.type === 'ok' ? (
              <span className="text-ed-green">{line.text}</span>
            ) : (
              <span className="text-ed-text">{line.text}</span>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
    </div>
  )
}
