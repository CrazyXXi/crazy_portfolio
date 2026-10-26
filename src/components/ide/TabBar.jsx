import { X } from 'lucide-react'
import { FILE_META } from './fileMeta'

export default function TabBar({ openFiles, activeFileId, onSelect, onClose }) {
  return (
    <div className="flex h-9 shrink-0 overflow-x-auto border-b border-ed-border bg-ed-panel">
      {openFiles.map((id) => {
        const meta = FILE_META[id]
        const Icon = meta.icon
        const active = id === activeFileId
        return (
          <button
            key={id}
            onClick={() => onSelect(id)}
            className={`group flex shrink-0 items-center gap-2 border-r border-ed-border px-3 text-[13px] ${
              active
                ? 'bg-ed-bg text-white before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-ed-blue'
                : 'bg-ed-panel text-ed-muted hover:bg-white/5'
            } relative`}
          >
            <Icon className={`h-3.5 w-3.5 shrink-0 ${meta.color}`} strokeWidth={1.75} />
            <span className="whitespace-nowrap">{meta.name}</span>
            <span
              role="button"
              tabIndex={-1}
              onClick={(e) => {
                e.stopPropagation()
                onClose(id)
              }}
              className="ml-1 flex h-4 w-4 items-center justify-center rounded hover:bg-white/10"
            >
              <X className="h-3 w-3" />
            </span>
          </button>
        )
      })}
    </div>
  )
}
