export const Kw = ({ children }) => <span className="text-ed-purple">{children}</span>
export const Str = ({ children }) => <span className="text-ed-green">{children}</span>
export const Com = ({ children }) => <span className="italic text-ed-muted">{children}</span>
export const Fn = ({ children }) => <span className="text-ed-blue">{children}</span>
export const Num = ({ children }) => <span className="text-ed-orange">{children}</span>
export const Prop = ({ children }) => <span className="text-ed-red">{children}</span>
export const Type = ({ children }) => <span className="text-ed-cyan">{children}</span>
export const Punc = ({ children }) => <span className="text-ed-text">{children}</span>
export const Attr = ({ children }) => <span className="text-ed-yellow">{children}</span>

export function Line({ n, children, indent = 0 }) {
  return (
    <div className="flex hover:bg-white/[0.03]">
      <span className="w-10 shrink-0 select-none pr-3 text-right text-ed-muted/70 sm:w-12">
        {n}
      </span>
      <span className="min-w-0 flex-1 whitespace-pre-wrap break-words pr-4" style={{ paddingLeft: `${indent * 1.25}rem` }}>
        {children}
        {children == null || children === '' ? ' ' : null}
      </span>
    </div>
  )
}
