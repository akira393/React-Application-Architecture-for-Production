import { Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import { ReactNode } from 'react';
export type LinkProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  icon?: JSX.Element;
  shallow?: boolean;
};
const variants = {
  link: {
    variant: 'link',
    color: 'primary',
  },
  solid: {
    variant: 'solid',
    bg: 'primary',
    color: 'primaryAccent',
    _hover: { opacity: '0.9' },
  },
  outline: {
    valiant: 'outline',
    color: 'primary',
    bg: 'white',
  },
};

export const Link = ({
  href,
  children,
  variant = 'link',
  icon,
  shallow = false,
}: LinkProps) => {
  return (
    <NextLink shallow={shallow} href={href} passHref>
      <Button
        leftIcon={icon}
        as="a"
        {...variants[variant]}
      >
        {children}
      </Button>
    </NextLink>
  );
};
