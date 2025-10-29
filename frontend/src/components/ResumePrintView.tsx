import './ResumePrintView.css';
import type { ResumeData } from '../types/resume';

interface ResumePrintViewProps {
  data: ResumeData;
}

export function ResumePrintView({ data }: ResumePrintViewProps) {
  const { profile, skills, projects, experience, education } = data;

  // Filter out phone number in production
  const contacts = import.meta.env.DEV
    ? profile.contact
    : profile.contact.filter(c => c.type !== 'phone');

  return (
    <div className="print-resume">
      {/* Hero Section */}
      <div className="print-hero">
        <h1 className="print-name">{profile.name}</h1>
        <h2 className="print-title">{profile.title}</h2>
        <p className="print-headline">{profile.headline}</p>
        <p className="print-summary">{profile.summary.join(' ')}</p>
        <div className="print-contact">
          {contacts.map((contact) => (
            <span key={contact.label} className="print-contact-item">
              {contact.value}
            </span>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="print-section">
        <h3 className="print-section-title">Skills & Proficiencies</h3>
        <div className="print-skills-grid">
          {skills.map((category) => (
            <div key={category.id} className="print-skill-category">
              <strong>{category.name}:</strong> {category.items.join(', ')}
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="print-section">
        <h3 className="print-section-title">Selected Projects</h3>
        <div className="print-projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="print-project-card">
              <h4 className="print-project-title">{project.name}</h4>
              <p className="print-project-desc">{project.description}</p>
              {project.impact && (
                <p className="print-project-impact">{project.impact}</p>
              )}
              {project.tags && (
                <p className="print-project-tags">{project.tags.join(' • ')}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="print-section">
        <h3 className="print-section-title">Experience</h3>
        {experience.map((role) => (
          <div key={role.id} className="print-experience-role">
            <div className="print-experience-header">
              <h4 className="print-role-title">{role.title}</h4>
              <span className="print-role-dates">
                {role.start} - {role.isCurrent ? 'Present' : role.end}
              </span>
            </div>
            <p className="print-role-company">
              {role.organization} • {role.location}
            </p>
            {role.summary && (
              <p className="print-role-summary">{role.summary}</p>
            )}
            <ul className="print-role-achievements">
              {role.achievements.slice(0, 5).map((achievement, idx) => (
                <li key={idx}>{achievement.title}</li>
              ))}
            </ul>
            {role.tags && (
              <p className="print-role-tags">{role.tags.join(' • ')}</p>
            )}
          </div>
        ))}
      </div>

      {/* Education Section */}
      <div className="print-section">
        <h3 className="print-section-title">Education</h3>
        {education.map((edu) => (
          <div key={edu.id} className="print-education">
            <h4 className="print-edu-institution">{edu.institution}</h4>
            <p className="print-edu-credential">
              {edu.credential} • {edu.location}
            </p>
          </div>
        ))}
      </div>

      {/* References Section */}
      <div className="print-section">
        <h3 className="print-section-title">References</h3>
        <p className="print-references">Available upon request.</p>
      </div>
    </div>
    );
}
