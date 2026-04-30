interface ScanDocumentProps {
  onBack: () => void;
  onCapture: () => void;
}

export function ScanDocument({ onBack, onCapture }: ScanDocumentProps) {
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
        {/* Document frame guides */}
        <div className="relative w-[300px] h-[400px]">
          {/* Corner guides */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white"></div>

          {/* Simulated document preview */}
          <div className="absolute inset-4 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
            <div className="text-center">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="mx-auto mb-3">
                <rect x="10" y="5" width="40" height="50" rx="4" fill="white" fillOpacity="0.3"/>
                <line x1="18" y1="15" x2="42" y2="15" stroke="white" strokeWidth="2" strokeOpacity="0.5"/>
                <line x1="18" y1="22" x2="42" y2="22" stroke="white" strokeWidth="2" strokeOpacity="0.5"/>
                <line x1="18" y1="29" x2="35" y2="29" stroke="white" strokeWidth="2" strokeOpacity="0.5"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Instruction text */}
        <div className="absolute bottom-32 left-0 right-0 text-center">
          <p className="text-white text-[17px] tracking-[-0.43px] font-medium">
            Position document in frame
          </p>
        </div>
      </div>

      {/* Bottom controls */}
      <div className="pb-10 px-6 flex-shrink-0">
        {/* Back arrow and Capture buttons */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onBack}
            className="w-[36px] h-[36px] rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center active:opacity-60 flex-shrink-0"
          >
            <svg width="13" height="21" viewBox="0 0 13 21" fill="none">
              <path d="M10.5 2.5L2 10.5l8.5 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            onClick={onCapture}
            className="w-[70px] h-[70px] rounded-full bg-white flex items-center justify-center active:scale-95 transition-transform"
          >
            <div className="w-[60px] h-[60px] rounded-full border-2 border-black"></div>
          </button>
          <div className="w-[36px]"></div>
        </div>
      </div>
    </div>
  );
}
