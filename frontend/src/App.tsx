import { Box, Container, Stack } from '@mui/material';
import './App.css';
import { resumeData } from './data';
import { ResumePrintView } from './components/ResumePrintView';
import { EducationSection } from './sections/EducationSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { FooterSection } from './sections/FooterSection';
import { HeroSection } from './sections/HeroSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { SkillsSection } from './sections/SkillsSection';

function App() {
  const { profile, projects, experience, education, skills } = resumeData;

  return (
    <>
      {/* Print-only optimized layout */}
      <ResumePrintView data={resumeData} />

      {/* Screen-only regular layout */}
      <Box
        className="screen-only"
        sx={{
          minHeight: '100vh',
          background: 'radial-gradient(circle at top left, #1f2541 0%, #0b0d17 55%)',
          pb: { xs: 6, md: 10 },
          '@media print': {
            display: 'none !important',
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            pt: { xs: 6, md: 10 },
          }}
        >
          <Stack spacing={{ xs: 6, md: 8 }}>
            <HeroSection profile={profile} />
            <SkillsSection skills={skills} />
            <ProjectsSection projects={projects} />
            <ExperienceSection experience={experience} />
            <EducationSection education={education} />
            <FooterSection profile={profile} />
          </Stack>
        </Container>
      </Box>
    </>
  );
}export default App;
