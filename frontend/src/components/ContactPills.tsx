import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import { Chip, Link, Stack } from '@mui/material';
import type { ReactElement } from 'react';
import type { ContactMethod } from '../types/resume';

const contactIcons: Partial<Record<ContactMethod['type'], ReactElement>> = {
  email: <EmailRoundedIcon fontSize="small" />,
  phone: <PhoneRoundedIcon fontSize="small" />,
  location: <LocationOnRoundedIcon fontSize="small" />,
  website: <LanguageRoundedIcon fontSize="small" />,
  portfolio: <LanguageRoundedIcon fontSize="small" />,
  linkedin: <LinkedInIcon fontSize="small" />,
  github: <GitHubIcon fontSize="small" />,
};

interface ContactPillsProps {
  contacts: ContactMethod[];
}

export function ContactPills({ contacts }: ContactPillsProps) {
  return (
    <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
      {contacts.map((contact) => {
        const icon = contactIcons[contact.type];
        const commonProps = {
          label: contact.value,
          color: 'primary' as const,
          variant: 'outlined' as const,
          sx: {
            color: 'text.primary',
            borderColor: 'rgba(255, 255, 255, 0.16)',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
          },
        };

        const chip = (
          <Chip
            {...commonProps}
            {...(icon ? { icon } : {})}
          />
        );

        if (contact.href) {
          return (
            <Link
              key={contact.value}
              href={contact.href}
              target={contact.type === 'location' ? undefined : '_blank'}
              rel="noreferrer"
              underline="none"
              sx={{ '&:hover': { textDecoration: 'none' } }}
            >
              {chip}
            </Link>
          );
        }

        return (
          <Chip
            key={contact.value}
            {...commonProps}
            {...(icon ? { icon } : {})}
          />
        );
      })}
    </Stack>
  );
}
