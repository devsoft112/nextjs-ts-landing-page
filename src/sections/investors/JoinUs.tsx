import Button from '@/components/buttons/Button';
import NextImage from '@/components/NextImage';

export default function JoinUs() {
  return (
    <section className='py-16 px-4 sm:px-8'>
      <div className="container bg-[url('/images/download_bg.png')] bg-cover bg-no-repeat rounded-[60px] py-16 px-4 mx-auto">
        {/* Text and Buttons */}
        <div className='text-center'>
          <NextImage
            src='/images/mini_mark_logo.png'
            width={80}
            height={80}
            alt='Mini Mark Logo'
            className='mx-auto mb-4'
          />
          <h2 className='text-2xl sm:text-3xl lg:text-5xl font-bold text-white my-10 max-w-4xl mx-auto'>
            Join Us on the Journey to Transform Recruitment
          </h2>
          <p className='text-base lg:text-sm text-white mt-4 max-w-[600px] mx-auto'>
            Be part of the future of job searching and hiring. Contact our
            Investor Relations team today to explore investment opportunities
            with <strong>RUSH Gigs</strong>.
          </p>
          <Button variant='light' className='mt-20'>
            Join The Team
          </Button>
        </div>
      </div>
    </section>
  );
}
