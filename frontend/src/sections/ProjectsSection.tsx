import LaunchIcon from '@mui/icons-material/LaunchRounded';
import { Box, Card, CardActionArea, CardContent, Chip, Stack, Typography } from '@mui/material';
import { SectionHeading } from '../components/SectionHeading';
import type { ProjectShowcase } from '../types/resume';

interface ProjectsSectionProps {
  projects: ProjectShowcase[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <Stack spacing={3}>
      <SectionHeading title="Selected Projects" />
      <Box
        sx={{
          display: 'grid',
          gap: 3,
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' },
        }}
      >
        {projects.map((project) => {
          const content = (
            <Card
              elevation={0}
              sx={{
                height: '100%',
                border: '1px solid rgba(255,255,255,0.08)',
                background:
                  'linear-gradient(135deg, rgba(18,23,38,0.85) 0%, rgba(24,29,50,0.9) 100%)',
              }}
            >
              <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}>
                <Stack direction="row" spacing={1.5} alignItems="center" justifyContent="space-between">
                  <Typography variant="h5">{project.name}</Typography>
                  {project.href ? (
                    <LaunchIcon fontSize="small" color="secondary" />
                  ) : null}
                </Stack>
                <Typography variant="body1" color="text.secondary">
                  {project.description}
                </Typography>
                {project.impact ? (
                  <Typography variant="body2" color="text.secondary">
                    <strong>Impact:</strong> {project.impact}
                  </Typography>
                ) : null}
                {project.tags && project.tags.length > 0 ? (
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap mt="auto">
                    {project.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        color="primary"
                        variant="outlined"
                        sx={{ borderColor: 'rgba(255,255,255,0.16)' }}
                      />
                    ))}
                  </Stack>
                ) : null}
              </CardContent>
            </Card>
          );

          return (
            <Box key={project.id}>
              {project.href ? (
                <CardActionArea
                  component="a"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  sx={{ display: 'block', borderRadius: 4 }}
                >
                  {content}
                </CardActionArea>
              ) : (
                content
              )}
            </Box>
          );
        })}
      </Box>
    </Stack>
  );
}
