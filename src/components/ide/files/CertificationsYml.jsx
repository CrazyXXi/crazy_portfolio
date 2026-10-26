import { ExternalLink } from 'lucide-react'
import { Line, Str, Com, Prop } from '../Tokens'
import { CERTIFICATIONS } from '../../../data/portfolioData'

export default function CertificationsYml() {
  let n = 0
  const next = () => ++n

  return (
    <div className="py-3 font-mono text-[13px]">
      <Line n={next()}>
        <Com># Certifications</Com>
      </Line>
      <Line n={next()}>
        <Prop>certifications</Prop>:
      </Line>
      {CERTIFICATIONS.map((cert) => (
        <div key={cert.name}>
          <Line n={next()} indent={1}>
            - <Prop>name</Prop>: <Str>{cert.name}</Str>
          </Line>
          <Line n={next()} indent={2}>
            <Prop>issuer</Prop>: <Str>{cert.issuer}</Str>
          </Line>
          {cert.description && (
            <>
              <Line n={next()} indent={2}>
                <Prop>description</Prop>: <Str>&gt;-</Str>
              </Line>
              <Line n={next()} indent={3}>
                <Str>{cert.description}</Str>
              </Line>
            </>
          )}
          {cert.link && (
            <div className="not-prose ml-16 my-1">
              <a
                href={cert.link}
                target={cert.link.startsWith('http') ? '_blank' : undefined}
                rel={cert.link.startsWith('http') ? 'noreferrer' : undefined}
                className="inline-flex items-center gap-1.5 text-ed-blue hover:underline"
              >
                <ExternalLink className="h-3 w-3" />
                Voir le certificat
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
