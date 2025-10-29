import SchoolIcon from '@mui/icons-material/SchoolRounded';
import { Paper, Stack, Typography } from '@mui/material';
import { SectionHeading } from '../components/SectionHeading';
import type { EducationEntry } from '../types/resume';

interface EducationSectionProps {
  education: EducationEntry[];
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <Stack spacing={3}>
      <SectionHeading title="Education" />
      <Stack spacing={2}>
        {education.map((entry) => (
          <Paper
            key={entry.id}
            elevation={0}
            sx={{
              px: { xs: 3, md: 4 },
              py: { xs: 3, md: 3.5 },
              border: '1px solid rgba(255,255,255,0.08)',
              background:
                'linear-gradient(135deg, rgba(18,21,36,0.88) 0%, rgba(26,29,46,0.92) 100%)',
            }}
          >
            <Stack direction="row" spacing={2} alignItems="flex-start">
              <SchoolIcon color="secondary" />
              <Stack spacing={0.5}>
                <Typography variant="h6">{entry.institution}</Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {entry.credential}
                </Typography>
                {entry.location ? (
                  <Typography variant="body2" color="text.secondary">
                    {entry.location}
                  </Typography>
                ) : null}
                {entry.details ? (
                  <Typography variant="body2" color="text.secondary">
                    {entry.details}
                  </Typography>
                ) : null}
              </Stack>
            </Stack>
          </Paper>
        ))}
      </Stack>
    </Stack>
  );
}
