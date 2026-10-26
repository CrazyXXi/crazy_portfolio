import Readme from './files/Readme'
import AboutMd from './files/AboutMd'
import ExperienceJs from './files/ExperienceJs'
import SkillsJson from './files/SkillsJson'
import CertificationsYml from './files/CertificationsYml'
import AccomplishmentsYml from './files/AccomplishmentsYml'
import EducationMd from './files/EducationMd'
import ProjectMd from './files/ProjectMd'
import ContactPy from './files/ContactPy'
import ReferencesPy from './files/ReferencesPy'

export default function EditorPane({ fileId, onOpenFile, onRun }) {
  return (
    <div className="flex-1 overflow-y-auto bg-ed-bg">
      {fileId === 'readme' && <Readme onOpenFile={onOpenFile} />}
      {fileId === 'about' && <AboutMd />}
      {fileId === 'experience' && <ExperienceJs />}
      {fileId === 'skills' && <SkillsJson />}
      {fileId === 'certifications' && <CertificationsYml />}
      {fileId === 'accomplishments' && <AccomplishmentsYml />}
      {fileId === 'education' && <EducationMd />}
      {fileId === 'healthyguard' && <ProjectMd slug="healthyguard" />}
      {fileId === 'equinox' && <ProjectMd slug="equinox" />}
      {fileId === 'contact' && <ContactPy onRun={onRun} />}
      {fileId === 'references' && <ReferencesPy />}
    </div>
  )
}
