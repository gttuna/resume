import CalendarIcon from '@mui/icons-material/CalendarMonthRounded';
import CheckIcon from '@mui/icons-material/CheckCircleRounded';
import PlaceIcon from '@mui/icons-material/PlaceRounded';
import WorkIcon from '@mui/icons-material/WorkOutlineRounded';
import {
  Box,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { SectionHeading } from '../components/SectionHeading';
import type { ExperienceRole } from '../types/resume';

interface ExperienceSectionProps {
  experience: ExperienceRole[];
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <Stack spacing={3}>
      <SectionHeading title="Experience" />
      <Stack spacing={3}>
        {experience.map((role) => (
          <Paper
            key={role.id}
            elevation={0}
            sx={{
              p: { xs: 3, md: 4 },
              border: '1px solid rgba(255,255,255,0.08)',
              background:
                'linear-gradient(135deg, rgba(17, 19, 34, 0.92) 0%, rgba(20, 24, 44, 0.92) 100%)',
            }}
          >
            <Stack spacing={3}>
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} justifyContent="space-between">
                <Stack spacing={1}>
                  <Typography variant="h5">{role.title}</Typography>
                  <Stack direction="row" spacing={1.5} divider={<Divider orientation="vertical" flexItem />}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <WorkIcon fontSize="small" color="secondary" />
                      <Typography variant="body1" color="text.secondary">
                        {role.organization}
                      </Typography>
                    </Stack>
                    {role.location ? (
                      <Stack direction="row" spacing={1} alignItems="center">
                        <PlaceIcon fontSize="small" color="secondary" />
                        <Typography variant="body2" color="text.secondary">
                          {role.location}
                        </Typography>
                      </Stack>
                    ) : null}
                  </Stack>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <CalendarIcon fontSize="small" color="secondary" />
                  <Typography variant="body2" color="text.secondary">
                    {role.start} - {role.isCurrent ? 'Present' : role.end}
                  </Typography>
                </Stack>
              </Stack>

              {role.summary ? (
                <Typography variant="body1" color="text.secondary">
                  {role.summary}
                </Typography>
              ) : null}
              <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={3}
                component="section"
                alignItems="stretch"
              >
                <Box flex={1}>
                  <List disablePadding dense>
                    {role.achievements.map((achievement) => (
                      <ListItem key={achievement.title} sx={{ alignItems: 'flex-start', px: 0 }}>
                        <ListItemAvatar sx={{ minWidth: 36, mt: 0.5 }}>
                          <CheckIcon color="secondary" fontSize="small" />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography variant="body1" color="text.primary">
                              {achievement.title}
                            </Typography>
                          }
                          secondary={
                            achievement.description ? (
                              <Typography variant="body2" color="text.secondary" component="span">
                                {achievement.description}
                              </Typography>
                            ) : null
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
                {role.tags && role.tags.length > 0 ? (
                  <Stack spacing={1.5} sx={{ minWidth: { md: 220 } }}>
                    <Typography variant="overline" color="text.secondary" letterSpacing={1.2}>
                      Focus Areas
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                      {role.tags.map((tag) => (
                        <Chip
                          key={tag}
                          size="small"
                          label={tag}
                          color="secondary"
                          variant="outlined"
                          sx={{ borderColor: 'rgba(255,255,255,0.16)' }}
                        />
                      ))}
                    </Stack>
                  </Stack>
                ) : null}
              </Stack>
            </Stack>
          </Paper>
        ))}
      </Stack>
    </Stack>
  );
}
