import { LucideIcon } from 'lucide-react';
import * as React from 'react';
import { ImSpinner2 } from 'react-icons/im';

import { cn } from '@/lib/utils';

const IconButtonVariant = [
  'primary',
  'outline',
  'ghost',
  'light',
  'dark',
] as const;

type IconButtonProps = {
  isLoading?: boolean;
  isDarkBg?: boolean;
  variant?: (typeof IconButtonVariant)[number];
  icon?: LucideIcon;
  className?: string;
} & React.ComponentPropsWithRef<'button'>;

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      disabled: buttonDisabled,
      isLoading,
      variant = 'primary',
      icon: Icon,
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
          'inline-flex items-center justify-center rounded-full transition-all shadow-lg',
          'focus:outline-none focus:ring-2 focus:ring-offset-2',
          'min-h-[34px] min-w-[34px] p-2',
          //#region  //*=========== Variants ===========
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
          //#endregion  //*======== Variants ===========
          isLoading &&
            'relative text-transparent hover:text-transparent disabled:cursor-wait',
          className,
        )}
        {...rest}
      >
        {isLoading && (
          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
            <ImSpinner2 className='animate-spin' />
          </div>
        )}
        {Icon && <Icon size='1.25em' />}
      </button>
    );
  },
);

IconButton.displayName = 'IconButton';

export default IconButton;
