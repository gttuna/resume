import ArrowOutwardIcon from '@mui/icons-material/ArrowOutwardRounded';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { ContactPills } from '../components/ContactPills';
import type { ResumeData } from '../types/resume';

interface FooterSectionProps {
  profile: ResumeData['profile'];
}

export function FooterSection({ profile }: FooterSectionProps) {
  return (
    <Paper
      elevation={0}
      className="no-print"
      sx={{
        mt: { xs: 6, md: 10 },
        px: { xs: 4, md: 6 },
        py: { xs: 5, md: 6 },
        borderRadius: 4,
        border: '1px solid rgba(255,255,255,0.1)',
        background:
          'linear-gradient(135deg, rgba(17, 19, 32, 0.95) 0%, rgba(28, 32, 54, 0.98) 100%)',
        '@media print': {
          display: 'none',
        },
      }}
    >
      <Stack spacing={3}>
        <Stack spacing={1.5}>
          <Typography variant="overline" color="secondary.light" letterSpacing={2}>
            Let's Build
          </Typography>
          <Typography variant="h4">
            Ready to elevate your infrastructure, automation, or product experience?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 640 }}>
            I partner with organizations to design resilient systems and intuitive interfaces that move
            the needle. Reach out and let's explore what we can ship together.
          </Typography>
        </Stack>
        <ContactPills contacts={profile.contact} />
        <Box>
          <Button
            variant="contained"
            color="secondary"
            endIcon={<ArrowOutwardIcon />}
            href={profile.contact.find((c) => c.type === 'email')?.href}
          >
            Start the Conversation
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
}

