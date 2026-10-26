import { GitBranch, Check, Bell } from 'lucide-react'

export default function StatusBar({ fileLabel, onToggleTerminal, terminalOpen }) {
  return (
    <div className="flex h-6 shrink-0 items-center justify-between bg-ed-statusbar px-3 text-[12px] text-white">
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1">
          <GitBranch className="h-3.5 w-3.5" />
          main
        </span>
        <span className="hidden items-center gap-1 sm:flex">
          <Check className="h-3.5 w-3.5" />
          0
        </span>
      </div>

      <div className="flex items-center gap-3">
        <span className="hidden sm:inline">{fileLabel}</span>
        <span className="hidden sm:inline">UTF-8</span>
        <span className="hidden sm:inline">LF</span>
        <button
          onClick={onToggleTerminal}
          className={`rounded px-1.5 ${terminalOpen ? 'bg-white/20' : 'hover:bg-white/10'}`}
        >
          Terminal
        </button>
        <Bell className="h-3.5 w-3.5" />
      </div>
    </div>
  )
}
