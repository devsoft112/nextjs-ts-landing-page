import DownloadButton from '@/components/DownloadButton';
import NextImage from '@/components/NextImage';

export default function DownloadApps() {
  return (
    <section className='py-16 px-4 sm:px-8'>
      <div className="container bg-[url('/images/download_bg.png')] bg-cover bg-no-repeat rounded-[60px] p-8 mx-auto">
        {/* Text and Buttons */}
        <div className='text-center'>
          <NextImage
            src='/images/mini_mark_logo.png'
            width={80}
            height={80}
            alt='Mini Mark Logo'
            className='mx-auto mb-4'
          />
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white my-10'>
            Download RUSH Gigs and get started today!
          </h2>
          <p className='text-base lg:text-sm text-white mt-4 max-w-[600px] mx-auto'>
            Jovoria is your trusted partner in the job market. We make finding
            jobs or employees fast, convenient, and transparent by offering all
            the tools you need in one app.
          </p>
          <div className='mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8'>
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
