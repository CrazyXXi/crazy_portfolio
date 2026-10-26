import { Files, Search, GitBranch, Bug, Blocks, UserCircle2 } from 'lucide-react'

const ICONS = [
  { Icon: Files, active: true },
  { Icon: Search, active: false },
  { Icon: GitBranch, active: false },
  { Icon: Bug, active: false },
  { Icon: Blocks, active: false },
]

export default function ActivityBar({ className = '' }) {
  return (
    <div
      className={`hidden w-12 shrink-0 flex-col items-center justify-between border-r border-ed-border bg-ed-panel py-3 sm:flex ${className}`}
    >
      <div className="flex flex-col items-center gap-5">
        {ICONS.map(({ Icon, active }, i) => (
          <div key={i} className="relative">
            {active && (
              <span className="absolute -left-3 top-0.5 h-5 w-0.5 rounded-r bg-white" />
            )}
            <Icon className={`h-5 w-5 ${active ? 'text-white' : 'text-ed-muted'}`} strokeWidth={1.75} />
          </div>
        ))}
      </div>
      <UserCircle2 className="h-5 w-5 text-ed-muted" strokeWidth={1.75} />
    </div>
  )
}
