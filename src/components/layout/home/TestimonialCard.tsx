// components/TestimonialCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import principal from '@/../public/assets/principal.svg'

// interface TestimonialProps {
//   name: string;
//   role: string;
//   imageUrl: string;
//   quote: string;
//   readMoreLink: string;
// }

export const TestimonialCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden p-8 shadow-custom">
      <div className="grid grid-cols-1 md:grid-cols-7 md:gap-8">

        {/* Left Column: Author Info */}
        <div className="flex flex-row items-end sm:flex-col  sm:items-center sm:justify-center text-start md:border-r-2 md:pr-8 col-span-2 mb-4 md:mb-0  border-gray-300">
          <div className="relative w-24 h-24 mb-0 sm:mb-3">
            <Image
              src={principal}
              alt={'name'}
              height={110}
              width={110}
              className="object-cover"
            />
          </div>
          <div className="ml-4 sm:ml-0">
            <h3 className="text-lg font-medium text-neutral">{"Lorem ipsum "}</h3>
            <p className="font-normal text-font-2">{"role"}</p>
          </div>
        </div>

        {/* Right Column: Quote */}
        <div className="col-span-5 flex flex-col">
          <p className="text-gray-600 font-normal leading-relaxed line-clamp-6">
            {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '}
            {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate '}
          </p>
          <Link href={'/'}>
            <span className="text-blue-500 font-normal mt-2 inline-block hover:underline">
              Read More
            </span>
          </Link>
        </div>

      </div>
    </div>
  );
};