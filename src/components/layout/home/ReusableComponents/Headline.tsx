import React from 'react'

interface HeadlineProps {
    Title: string;
    subTitle: string;
}

function Headline({Title, subTitle}: HeadlineProps) {
    return (
        <div className='flex flex-col items-center gap-1 py-18'>
            <h1 className='text-4xl sm:text-5xl font-medium font-akshar text-neutral '>{Title}</h1>
            <p className='text-lg font-normal text-font-2'>{subTitle}</p>
        </div>
    )
}

export default Headline