// src/sections/TermsAndConditions.tsx

export default function TermsAndConditions() {
  return (
    <section className='container mx-auto py-12'>
      <div className='grid grid-cols-1 md:grid-cols-[1fr_10px_3fr] gap-12 px-4'>
        {/* Left Section - Bullet Points */}
        <div>
          <div className='sticky top-10'>
            <div className='max-w-[480px]'>
              {Array(2)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className='mb-8'>
                    <h3 className='font-bold text-xl mb-4'>
                      Lorem ipsum dolor sit amet consectetur.
                    </h3>
                    <ul className='list-disc list-inside text-gray-700 space-y-3'>
                      {Array(10)
                        .fill(0)
                        .map((_, liIndex) => (
                          <li key={liIndex}>
                            Lorem ipsum dolor sit amet consectetur.
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className='hidden md:flex justify-center max-w-[10px]'>
          <div className='w-[2px] h-full bg-gray-300'></div>
        </div>

        {/* Right Section - Title and Text */}
        <div>
          <div className='mb-8'>
            <h1 className='text-[24px] font-bold text-orange-600'>Terms</h1>
            <h2 className='text-5xl font-bold py-4'>Terms and Conditions</h2>
            <p className='mt-6 text-lg text-gray-700'>
              Lorem ipsum dolor sit amet consectetur. Maecenas sit tortor tellus
              ornare morbi integer feugiat turpis. Arcu donec in scelerisque et
              rhoncus turpis bibendum. Tellus aenean egestas tellus viverra
              habitant mattis sollicitudin pellentesque aliquet. Vel odio mauris
              nisl varius sit et sit euismod a. Turpis elementum odio netus in
              sed. Nisi nunc ac nisl nibh tincidunt a aenean. Donec tortor
              faucibus lorem duis. Lorem amet leo non volutpat.
            </p>
          </div>

          {Array(10)
            .fill(0)
            .map((_, index) => (
              <div key={index} className='mb-8'>
                <h3 className='font-bold text-xl mb-4'>
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
                <p className='text-gray-700 leading-relaxed mb-6'>
                  Lorem ipsum dolor sit amet consectetur. Velit imperdiet
                  posuere nec dui. Aliquam vel eget vitae egestas est habitant
                  facilisi. Eu nisi et sagittis ultricies. Amet adipiscing
                  varius pulvinar risus sed consequat nulla est nulla. Lorem
                  ipsum dolor sit amet consectetur. Velit imperdiet posuere nec
                  dui. Aliquam vel eget vitae egestas est habitant facilisi. Eu
                  nisi et sagittis ultricies. Amet adipiscing varius pulvinar
                  risus sed consequat nulla est nulla. Lorem ipsum dolor sit
                  amet consectetur. Velit imperdiet posuere nec dui. Aliquam vel
                  eget vitae egestas est habitant facilisi. Eu nisi et sagittis
                  ultricies. Amet adipiscing varius pulvinar risus sed consequat
                  nulla est nulla. Lorem ipsum dolor sit amet consectetur. Velit
                  imperdiet posuere nec dui. Aliquam vel eget vitae egestas est
                  habitant facilisi. Eu nisi et sagittis ultricies. Amet
                  adipiscing varius pulvinar risus sed consequat nulla est
                  nulla.
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
