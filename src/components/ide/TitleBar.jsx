import { Menu } from 'lucide-react'

export default function TitleBar({ onToggleSidebar }) {
  return (
    <div className="flex h-9 shrink-0 items-center gap-3 border-b border-ed-border bg-ed-panel px-3 text-ed-muted">
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
      </div>

      <button onClick={onToggleSidebar} className="text-ed-muted hover:text-white sm:hidden">
        <Menu className="h-4 w-4" />
      </button>

      <p className="flex-1 truncate text-center text-xs">
        nelxie-portfolio — Visual Studio Code
      </p>

      <div className="hidden w-16 sm:block" />
    </div>
  )
}
