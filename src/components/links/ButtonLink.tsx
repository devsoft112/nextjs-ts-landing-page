import { LucideIcon } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';

const ButtonLinkVariant = [
  'primary',
  'outline',
  'ghost',
  'light',
  'dark',
] as const;
const ButtonLinkSize = ['sm', 'base'] as const;

type ButtonLinkProps = {
  isDarkBg?: boolean;
  variant?: (typeof ButtonLinkVariant)[number];
  size?: (typeof ButtonLinkSize)[number];
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  classNames?: {
    leftIcon?: string;
    rightIcon?: string;
  };
} & UnstyledLinkProps;

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'base',
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      classNames,
      ...rest
    },
    ref,
  ) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={cn(
          'inline-flex items-center justify-center font-semibold rounded-full transition-all shadow-lg',
          'focus:outline-none focus:ring-2 focus:ring-offset-2',
          [
            size === 'base' && 'px-6 py-2 text-base',
            size === 'sm' && 'px-4 py-1.5 text-sm',
          ],
          [
            variant === 'primary' &&
              'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-xl',
            variant === 'outline' &&
              'border border-orange-500 text-orange-500 hover:bg-orange-100',
            variant === 'ghost' &&
              'text-orange-500 bg-transparent hover:bg-orange-50',
            variant === 'light' &&
              'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100',
            variant === 'dark' && 'bg-gray-900 text-white hover:bg-gray-800',
          ],
          'disabled:cursor-not-allowed',
          className,
        )}
      >
        {LeftIcon && (
          <div
            className={cn([
              size === 'base' && 'mr-2',
              size === 'sm' && 'mr-1.5',
            ])}
          >
            <LeftIcon
              className={cn(
                size === 'base' ? 'text-base' : 'text-sm',
                classNames?.leftIcon,
              )}
            />
          </div>
        )}
        {children}
        {RightIcon && (
          <div
            className={cn([
              size === 'base' && 'ml-2',
              size === 'sm' && 'ml-1.5',
            ])}
          >
            <RightIcon
              className={cn(
                size === 'base' ? 'text-base' : 'text-sm',
                classNames?.rightIcon,
              )}
            />
          </div>
        )}
      </UnstyledLink>
    );
  },
);

ButtonLink.displayName = 'ButtonLink';

export default ButtonLink;
