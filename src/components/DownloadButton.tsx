import * as React from 'react';

import { cn } from '@/lib/utils';

import NextImage from '@/components/NextImage';

type DownloadButtonProps = {
  platform: 'App Store' | 'Play Market';
  background?: 'orange' | 'white';
  className?: string;
};

const DownloadButton: React.FC<DownloadButtonProps> = ({
  platform,
  background = 'orange',
  className,
  ...rest
}) => {
  let icon_name = 'App Store';

  if (background == 'orange') {
    icon_name =
      platform === 'App Store'
        ? 'app-store-white-icon'
        : 'play-market-white-icon';
  } else {
    icon_name =
      platform === 'App Store' ? 'app-store-icon' : 'play-market-icon';
  }

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center px-12 py-4 rounded-full shadow-lg text-sm md:text-base font-semibold',
        background === 'orange'
          ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
          : 'bg-white text-gray-700',
        'transition-all hover:shadow-xl',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        className,
      )}
      {...rest}
    >
      <NextImage
        src={`/svg/${icon_name}.svg`}
        width={35}
        height={35}
        alt='App Mockup Right'
        className='mr-2'
      />
      <div className='flex flex-col text-left'>
        <span className='text-xs'>Download in the</span>
        <span className='font-semibold'>{platform}</span>
      </div>
    </button>
  );
};

export default DownloadButton;
