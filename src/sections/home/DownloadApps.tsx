import DownloadButton from '@/components/DownloadButton';
import NextImage from '@/components/NextImage';

export default function DownloadApps() {
  return (
    <section className='py-16 px-4 sm:px-8'>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between bg-[url('/images/download_bg.png')] bg-cover bg-no-repeat rounded-[60px] p-8 md:p-0">
        {/* Mobile Images */}
        <div className='flex justify-center lg:justify-start w-full lg:w-1/2 mb-8 lg:mb-0'>
          <NextImage
            src='/images/download_phones.png'
            width={550}
            height={0}
            alt='App Mockup'
            className='w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-none lg:mr-4 lg:ml-[100px]'
          />
        </div>

        {/* Text and Buttons */}
        <div className='lg:w-1/2 text-center lg:text-left'>
          <NextImage
            src='/images/mini_mark_logo.png'
            width={80}
            height={80}
            alt='Mini Mark Logo'
            className='mx-auto lg:mx-0 mb-4'
          />
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white my-10'>
            Download RUSH Gigs App
          </h2>
          <p className='text-base lg:text-sm text-white mt-4 max-w-[600px]'>
            Lorem ipsum dolor sit amet consectetur. Scelerisque tellus tortor
            consectetur mattis quis interdum amet. Duis tincidunt lectus nulla
            enim. Gravida tempor volutpat mauris ullamcorper vitae felis. Neque
            iaculis non sed sagittis vitae.
          </p>
          <div className='mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8'>
            <DownloadButton
              platform='App Store'
              background='white'
              className='w-full md:w-auto'
            />
            <DownloadButton
              platform='Play Market'
              background='white'
              className='w-full md:w-auto'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
