import { useEffect } from 'react';

export default function AppFlow() {
  useEffect(() => {
    // Check if the script already exists
    const existingScript = document.querySelector("script[src='https://square.site/appointments/buyer/widget/ssrk16cq70u9xm/L90W7ZYT50MKG.js']");
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://square.site/appointments/buyer/widget/ssrk16cq70u9xm/L90W7ZYT50MKG.js';
      script.async = true;
      document.getElementById('square-widget-container')?.appendChild(script);
    }

    return () => {

    };
  }, []);

  return (
    <div className="min-h-[100px] w-full" id="square-widget-container">
      {/* The widget will be injected here */}
    </div>
  );
}
