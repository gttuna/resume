import { Box, Chip, Stack, Typography } from '@mui/material';
import type { PropsWithChildren } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  action?: React.ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  action,
  children,
}: PropsWithChildren<SectionHeadingProps>) {
  return (
    <Stack spacing={2}>
      <Stack direction="row" alignItems="center" spacing={1} justifyContent="space-between">
        <Stack direction="row" spacing={1} alignItems="center">
          {eyebrow ? (
            <Chip
              label={eyebrow}
              color="secondary"
              size="small"
              sx={{ fontWeight: 600, letterSpacing: 0.5 }}
            />
          ) : null}
          <Typography component="h2" variant="h4">
            {title}
          </Typography>
        </Stack>
        {action ? <Box>{action}</Box> : null}
      </Stack>
      {children ? (
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720 }}>
          {children}
        </Typography>
      ) : null}
    </Stack>
  );
}

