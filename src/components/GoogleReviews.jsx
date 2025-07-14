import { useEffect } from 'react';

export default function GoogleReviews() {
 useEffect(() => {
  const roError = 'ResizeObserver loop completed with undelivered notifications.';
  window.addEventListener('error', e => {
    if (e.message === roError) {
      e.stopImmediatePropagation();
    }
  });
}, []);

  return (
   <div className="mx-auto px-4 py-8 min-h-[1900px] md:min-h-[1600px] bg-white" id="googlereviews">
   <h1 className='text-center p-6 text-7xl font-semibold text-gray-800'>Our Customers Are <span className="text-[#73C2F4] italic">Raving on Google!</span></h1>
      <div className="elfsight-app-dfcda99e-40e1-4e33-8427-18ca9aa36726" data-elfsight-app-lazy></div> 
    </div>
  );
}
