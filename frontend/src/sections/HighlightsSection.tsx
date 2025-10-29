import InsightsIcon from '@mui/icons-material/InsightsRounded';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunchRounded';
import TuneIcon from '@mui/icons-material/TuneRounded';
import VerifiedIcon from '@mui/icons-material/VerifiedRounded';
import { Box, Card, CardContent, Stack, Typography, useTheme } from '@mui/material';
import { SectionHeading } from '../components/SectionHeading';

const icons = [VerifiedIcon, RocketLaunchIcon, TuneIcon, InsightsIcon];

interface HighlightsSectionProps {
  highlights: string[];
}

export function HighlightsSection({ highlights }: HighlightsSectionProps) {
  const theme = useTheme();

  return (
    <Stack spacing={3}>
      <SectionHeading title="Highlights in Focus">
        Guided by systems thinking and human-centered design, I translate complex challenges into
        intuitive, measurable outcomes.
      </SectionHeading>
      <Box
        sx={{
          display: 'grid',
          gap: 3,
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
        }}
      >
        {highlights.map((highlight, index) => {
          const Icon = icons[index % icons.length];
          return (
            <Card
              key={highlight}
              elevation={0}
              sx={{
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'linear-gradient(135deg, rgba(17,20,33,0.85) 0%, rgba(23,28,52,0.9) 100%)',
              }}
            >
              <CardContent>
                <Stack spacing={2} direction="row">
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: '24px',
                      backgroundColor: theme.palette.secondary.main,
                      color: theme.palette.getContrastText(theme.palette.secondary.main),
                    }}
                  >
                    <Icon fontSize="medium" />
                  </Stack>
                  <Typography variant="body1" color="text.secondary">
                    {highlight}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Stack>
  );
}
