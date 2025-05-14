import React from 'react'

function SaleBanner() {
  return (
    
<section className="relative h-16">
  <div className="absolute top-0 mx-auto flex w-full items-center justify-center  bg-[#2C1755] py-4">
    <p className="md:mx-auto text-center mr-2 text-[#E4CBAA] font-extrabold">
    First-Time Client Special: 10% Off ALL Services - Offer Ends May 31st, 2025

    </p>

    <div>
      <svg className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_3799_19183)">
          <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="black" />
        </g>
        <defs>
          <clipPath id="clip0_3799_19183">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  </div>
</section>

  )
}

export default SaleBanner