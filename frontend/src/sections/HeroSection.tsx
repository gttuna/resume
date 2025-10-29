import DownloadIcon from '@mui/icons-material/FileDownloadRounded';
import MailOutlineIcon from '@mui/icons-material/MailOutlineRounded';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { ContactPills } from '../components/ContactPills';
import type { ResumeData } from '../types/resume';

interface HeroSectionProps {
  profile: ResumeData['profile'];
}

export function HeroSection({ profile }: HeroSectionProps) {
  // Filter out phone number in production
  const contacts = import.meta.env.DEV
    ? profile.contact
    : profile.contact.filter(c => c.type !== 'phone');

  return (
    <Paper
      elevation={0}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 1,
        px: { xs: 4, md: 6 },
        py: { xs: 6, md: 8 },
        background: 'linear-gradient(135deg, rgba(16, 17, 33, 0.92) 0%, rgba(32, 36, 73, 0.92) 100%)',
        border: '1px solid rgba(255,255,255,0.1)',
        '@media print': {
          borderRadius: 0,
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: -60,
          right: -60,
          width: 220,
          height: 220,
          background:
            'radial-gradient(circle at center, rgba(103, 80, 164, 0.28), rgba(103, 80, 164, 0))',
          filter: 'blur(0)',
        }}
      />
      <Stack spacing={{ xs: 4, md: 5 }} position="relative" zIndex={1}>
        <Stack spacing={2}>
          <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '4rem' } }}>
            {profile.name}
          </Typography>
          <Typography variant="h3" component="p" color="secondary.main">
            {profile.title}
          </Typography>
          <Typography variant="subtitle1" color="secondary.light">
            {profile.headline}
          </Typography>
          <Stack spacing={1.5} sx={{ maxWidth: 780 }}>
            {profile.summary.map((paragraph) => (
              <Typography key={paragraph} variant="body1" color="text.secondary">
                {paragraph}
              </Typography>
            ))}
          </Stack>
        </Stack>
        <ContactPills contacts={contacts} />
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} flexWrap="wrap">
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<DownloadIcon />}
            onClick={() => window.print()}
          >
            Download PDF
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            startIcon={<MailOutlineIcon />}
            href={profile.contact.find((c) => c.type === 'email')?.href}
          >
            Let’s Collaborate
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
}

