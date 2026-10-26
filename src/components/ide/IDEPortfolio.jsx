import { useState } from 'react'
import TitleBar from './TitleBar'
import ActivityBar from './ActivityBar'
import Sidebar from './Sidebar'
import TabBar from './TabBar'
import EditorPane from './EditorPane'
import StatusBar from './StatusBar'
import Terminal from './Terminal'
import { FILE_META } from './fileMeta'

export default function IDEPortfolio() {
  const [openFiles, setOpenFiles] = useState(['readme'])
  const [activeFileId, setActiveFileId] = useState('readme')
  const [terminalOpen, setTerminalOpen] = useState(false)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  const openFile = (id) => {
    setOpenFiles((prev) => (prev.includes(id) ? prev : [...prev, id]))
    setActiveFileId(id)
    setMobileSidebarOpen(false)
  }

  const closeTab = (id) => {
    setOpenFiles((prev) => {
      const next = prev.filter((f) => f !== id)
      if (next.length === 0) {
        setActiveFileId('readme')
        return ['readme']
      }
      if (activeFileId === id) {
        setActiveFileId(next[next.length - 1])
      }
      return next
    })
  }

  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <TitleBar onToggleSidebar={() => setMobileSidebarOpen((v) => !v)} />

      <div className="relative flex min-h-0 flex-1">
        <ActivityBar />

        <Sidebar
          activeFileId={activeFileId}
          onSelectFile={openFile}
          className="hidden w-60 shrink-0 border-r border-ed-border sm:flex"
        />

        {mobileSidebarOpen && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black/60 sm:hidden"
              onClick={() => setMobileSidebarOpen(false)}
            />
            <Sidebar
              activeFileId={activeFileId}
              onSelectFile={openFile}
              className="fixed inset-y-9 left-0 z-50 w-64 border-r border-ed-border sm:hidden"
            />
          </>
        )}

        <div className="flex min-w-0 flex-1 flex-col">
          <TabBar
            openFiles={openFiles}
            activeFileId={activeFileId}
            onSelect={setActiveFileId}
            onClose={closeTab}
          />
          <EditorPane
            fileId={activeFileId}
            onOpenFile={openFile}
            onRun={() => setTerminalOpen(true)}
          />
          <Terminal open={terminalOpen} onClose={() => setTerminalOpen(false)} />
        </div>
      </div>

      <StatusBar
        fileLabel={FILE_META[activeFileId]?.name ?? ''}
        terminalOpen={terminalOpen}
        onToggleTerminal={() => setTerminalOpen((v) => !v)}
      />
    </div>
  )
}
