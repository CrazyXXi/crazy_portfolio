import { useState } from 'react'
import {
  ChevronRight,
  ChevronDown,
  Folder,
  FolderOpen,
  Files,
  Search,
  GitBranch,
  UserCircle2,
} from 'lucide-react'
import { FILE_META } from './fileMeta'

function FileRow({ id, depth, active, onSelect }) {
  const meta = FILE_META[id]
  const Icon = meta.icon
  return (
    <button
      onClick={() => onSelect(id)}
      style={{ paddingLeft: `${depth * 16 + 28}px` }}
      className={`flex w-full items-center gap-2 py-[3px] pr-3 text-left text-[13px] ${
        active ? 'bg-ed-panel-light text-white' : 'text-ed-text hover:bg-white/5'
      }`}
    >
      <Icon className={`h-4 w-4 shrink-0 ${meta.color}`} strokeWidth={1.75} />
      <span className="truncate">{meta.name}</span>
    </button>
  )
}

function FolderRow({ label, depth, open, onToggle }) {
  return (
    <button
      onClick={onToggle}
      style={{ paddingLeft: `${depth * 16 + 8}px` }}
      className="flex w-full items-center gap-1 py-[3px] pr-3 text-left text-[13px] uppercase tracking-wide text-ed-text hover:bg-white/5"
    >
      {open ? (
        <ChevronDown className="h-3.5 w-3.5 shrink-0 text-ed-muted" />
      ) : (
        <ChevronRight className="h-3.5 w-3.5 shrink-0 text-ed-muted" />
      )}
      {open ? (
        <FolderOpen className="h-4 w-4 shrink-0 text-ed-blue" strokeWidth={1.75} />
      ) : (
        <Folder className="h-4 w-4 shrink-0 text-ed-blue" strokeWidth={1.75} />
      )}
      <span className="truncate font-medium">{label}</span>
    </button>
  )
}

export default function Sidebar({ activeFileId, onSelectFile, className = '' }) {
  const [srcOpen, setSrcOpen] = useState(true)
  const [projectsOpen, setProjectsOpen] = useState(true)

  return (
    <aside className={`flex h-full flex-col bg-ed-panel text-ed-text ${className}`}>
      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <span className="text-[11px] font-semibold tracking-widest text-ed-muted">
          EXPLORATEUR
        </span>
        <div className="flex items-center gap-2 text-ed-muted">
          <Files className="h-3.5 w-3.5" />
          <Search className="h-3.5 w-3.5" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-2">
        <div className="flex items-center gap-1 px-2 py-1 text-[12px] font-bold uppercase tracking-wide text-white">
          <ChevronDown className="h-3.5 w-3.5 text-ed-muted" />
          nelxie-portfolio
        </div>

        <FileRow id="readme" depth={0} active={activeFileId === 'readme'} onSelect={onSelectFile} />
        <FileRow id="contact" depth={0} active={activeFileId === 'contact'} onSelect={onSelectFile} />
        <FileRow
          id="references"
          depth={0}
          active={activeFileId === 'references'}
          onSelect={onSelectFile}
        />

        <FolderRow label="src" depth={0} open={srcOpen} onToggle={() => setSrcOpen((v) => !v)} />
        {srcOpen && (
          <>
            <FileRow id="about" depth={1} active={activeFileId === 'about'} onSelect={onSelectFile} />
            <FileRow
              id="experience"
              depth={1}
              active={activeFileId === 'experience'}
              onSelect={onSelectFile}
            />
            <FileRow id="skills" depth={1} active={activeFileId === 'skills'} onSelect={onSelectFile} />
            <FileRow
              id="certifications"
              depth={1}
              active={activeFileId === 'certifications'}
              onSelect={onSelectFile}
            />
            <FileRow
              id="accomplishments"
              depth={1}
              active={activeFileId === 'accomplishments'}
              onSelect={onSelectFile}
            />
            <FileRow
              id="education"
              depth={1}
              active={activeFileId === 'education'}
              onSelect={onSelectFile}
            />
            <FolderRow
              label="projects"
              depth={1}
              open={projectsOpen}
              onToggle={() => setProjectsOpen((v) => !v)}
            />
            {projectsOpen && (
              <>
                <FileRow
                  id="healthyguard"
                  depth={2}
                  active={activeFileId === 'healthyguard'}
                  onSelect={onSelectFile}
                />
                <FileRow
                  id="equinox"
                  depth={2}
                  active={activeFileId === 'equinox'}
                  onSelect={onSelectFile}
                />
              </>
            )}
          </>
        )}
      </div>

      <div className="flex items-center gap-2 border-t border-ed-border px-3 py-2 text-[12px] text-ed-muted">
        <GitBranch className="h-3.5 w-3.5" />
        <span>main</span>
        <span className="mx-1">·</span>
        <UserCircle2 className="h-3.5 w-3.5" />
        <span className="truncate">nelxie-adisso</span>
      </div>
    </aside>
  )
}
