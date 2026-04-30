interface ScanMedicationProps {
  onCancel: () => void;
  onCapture: () => void;
}

export function ScanMedication({ onCancel, onCapture }: ScanMedicationProps) {
  return (
    <div className="w-[390px] h-[844px] bg-black relative overflow-hidden flex flex-col">

      {/* Status Bar - White text for dark background */}
      <div className="flex justify-between items-center px-6 pt-3.5 h-[52px] flex-shrink-0 text-white">
        <span className="text-[15px] font-semibold tracking-[-0.3px]">9:41</span>
        <div className="flex items-center gap-1.5">
          <svg width="17" height="12" viewBox="0 0 17 12" fill="white">
            <rect x="0" y="7" width="3" height="5" rx=".8"/>
            <rect x="4.5" y="5" width="3" height="7" rx=".8"/>
            <rect x="9" y="2.5" width="3" height="9.5" rx=".8"/>
            <rect x="13.5" y="0" width="3" height="12" rx=".8" opacity=".3"/>
          </svg>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="white">
            <path d="M8 9.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"/>
            <path d="M4.2 6.7a5.4 5.4 0 0 1 7.6 0l-1.3 1.3a3.6 3.6 0 0 0-5 0Z"/>
            <path d="M1 3.5a9.5 9.5 0 0 1 14 0L13.7 4.8a7.8 7.8 0 0 0-11.4 0Z" opacity=".5"/>
          </svg>
          <svg width="25" height="12" viewBox="0 0 25 12">
            <rect x="0" y="1" width="22" height="10" rx="2.5" stroke="#fff" strokeWidth="1" fill="none"/>
            <rect x="1.5" y="2.5" width="16" height="7" rx="1.5" fill="white"/>
            <path d="M23.5 4.5v3a1.5 1.5 0 0 0 0-3Z" fill="white" opacity=".4"/>
          </svg>
        </div>
      </div>

      {/* Camera Viewfinder Area */}
      <div className="flex-1 relative flex items-center justify-center">
        {/* Back arrow button */}
        <button
          onClick={onCancel}
          className="absolute top-4 left-5 w-[36px] h-[36px] rounded-full bg-[#e5e5ea] flex items-center justify-center active:opacity-60 flex-shrink-0 z-10"
        >
          <svg width="13" height="21" viewBox="0 0 13 21" fill="none">
            <path d="M10.5 2.5L2 10.5l8.5 8" stroke="#007aff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Frame guide */}
        <div className="relative w-[320px] h-[180px]">
          {/* Corner guides */}
          <div className="absolute top-0 left-0 w-10 h-10 border-t-3 border-l-3 border-white opacity-80"></div>
          <div className="absolute top-0 right-0 w-10 h-10 border-t-3 border-r-3 border-white opacity-80"></div>
          <div className="absolute bottom-0 left-0 w-10 h-10 border-b-3 border-l-3 border-white opacity-80"></div>
          <div className="absolute bottom-0 right-0 w-10 h-10 border-b-3 border-r-3 border-white opacity-80"></div>

          {/* Simulated medication label preview */}
          <div className="absolute inset-6 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
            <div className="text-center opacity-50">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="mx-auto mb-3">
                <rect x="10" y="15" width="40" height="30" rx="4" fill="white" fillOpacity="0.3"/>
                <line x1="18" y1="25" x2="42" y2="25" stroke="white" strokeWidth="2" strokeOpacity="0.5"/>
                <line x1="18" y1="32" x2="35" y2="32" stroke="white" strokeWidth="2" strokeOpacity="0.5"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Instruction text */}
        <div className="absolute bottom-40 left-0 right-0 text-center px-8">
          <p className="text-white text-[17px] tracking-[-0.43px] font-medium leading-snug">
            Position the medication label or prescription in the frame
          </p>
        </div>
      </div>

      {/* Bottom controls */}
      <div className="pb-12 px-6 flex-shrink-0">
        <button
          onClick={onCapture}
          className="w-full py-4 bg-[#007aff] rounded-full active:opacity-80 transition-opacity"
        >
          <span className="text-white text-[17px] font-semibold tracking-[-0.43px]">Capture</span>
        </button>
      </div>
    </div>
  );
}
