import { LucideIcon } from 'lucide-react';
import * as React from 'react';
import { ImSpinner2 } from 'react-icons/im';

import { cn } from '@/lib/utils';

const ButtonVariant = ['primary', 'outline', 'ghost', 'light', 'dark'] as const;
const ButtonSize = ['sm', 'base'] as const;

type ButtonProps = {
  isLoading?: boolean;
  isDarkBg?: boolean;
  variant?: (typeof ButtonVariant)[number];
  size?: (typeof ButtonSize)[number];
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  className?: string;
} & React.ComponentPropsWithRef<'button'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      isDarkBg,
      variant = 'primary',
      size = 'base',
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      ...rest
    },
    ref,
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        type='button'
        disabled={disabled}
        className={cn(
          'inline-flex items-center justify-center font-semibold rounded-full shadow-lg transition-all',
          'focus:outline-none focus:ring-2 focus:ring-offset-2',
          'disabled:cursor-not-allowed',
          //#region  //*=========== Size ===========
          [
            size === 'base' && 'px-6 py-2 text-base',
            size === 'sm' && 'px-4 py-1.5 text-sm',
          ],
          //#endregion  //*======== Size ===========
          //#region  //*=========== Variants ===========
          [
            variant === 'primary' &&
              'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-xl',
            variant === 'outline' &&
              'border border-orange-500 text-orange-500 hover:bg-orange-100',
            variant === 'ghost' &&
              'text-orange-500 bg-transparent hover:bg-orange-50',
            variant === 'light' && 'bg-white text-[#4B74E9] hover:bg-gray-100',
            variant === 'dark' && 'bg-gray-900 text-white hover:bg-gray-800',
          ],
          //#endregion  //*======== Variants ===========
          isLoading &&
            'relative text-transparent hover:text-transparent cursor-wait',
          className,
        )}
        {...rest}
      >
        {isLoading && (
          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
            <ImSpinner2 className='animate-spin' />
          </div>
        )}
        {LeftIcon && (
          <LeftIcon
            className={cn('mr-2', size === 'sm' ? 'text-sm' : 'text-base')}
          />
        )}
        <span>{children}</span>
        {RightIcon && (
          <RightIcon
            className={cn('ml-2', size === 'sm' ? 'text-sm' : 'text-base')}
          />
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
