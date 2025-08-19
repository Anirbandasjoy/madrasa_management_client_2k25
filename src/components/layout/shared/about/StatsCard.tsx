'use client'
// components/StatsCard.tsx
import Image from 'next/image';

interface StatsCardProps {
  icon: string;
  count: number | string;
  label: string;
}

export const StatsCard = ({ icon: Icon, count, label }: StatsCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4 border rounded-lg bg-mint">
      {/* <Icon className="w-8 h-8 mb-2 text-teal-600" /> */}
      <Image src={Icon} alt='card img' height={50} width={50} className='mb-2 w-10 h-10'/>
      <p className="text-5xl font-normal font-akshar text-gray-800 mt-3">{count}</p>
      <p className="text-lg font-normal text-font-2">{label}</p>
    </div>
  );
};