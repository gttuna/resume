import { Box, Card, CardContent, Chip, Stack, Typography } from '@mui/material';
import { SectionHeading } from '../components/SectionHeading';
import type { SkillCategory } from '../types/resume';

interface SkillsSectionProps {
  skills: SkillCategory[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <Stack spacing={3}>
      <SectionHeading title='Skills & Proficiencies' />
      <Box
        sx={{
          display: 'grid',
          gap: 3,
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' },
        }}
      >
        {skills.map((category) => (
          <Box key={category.id}>
            <Card
              elevation={0}
              sx={{
                height: '100%',
                border: '1px solid rgba(255,255,255,0.08)',
                background:
                  'linear-gradient(135deg, rgba(18, 20, 36, 0.9) 0%, rgba(24, 27, 46, 0.92) 100%)',
              }}
            >
              <CardContent>
                <Stack spacing={2}>
                  <Typography variant="h6">{category.name}</Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {category.items.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        color="primary"
                        variant="filled"
                        sx={{ backgroundColor: 'rgba(103,80,164,0.24)' }}
                      />
                    ))}
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Stack>
  );
}
