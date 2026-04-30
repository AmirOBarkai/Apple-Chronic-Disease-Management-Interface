interface AppleHealthSummaryProps {
  onBack: () => void;
  onChronicDiseaseClick: () => void;
  widgetState: 'yellow' | 'green';
  medications: any[];
  onResolveWidget?: () => void;
}

export function AppleHealthSummary({ onBack, onChronicDiseaseClick }: AppleHealthSummaryProps) {
  return (
    <div className="w-[390px] h-[844px] bg-gradient-to-br from-[#ffe5ee] via-[#f5f0ff] to-[#e0f4ff] relative overflow-hidden flex flex-col">

      {/* Status Bar */}
      <div className="flex justify-between items-center px-6 pt-3.5 h-[54px] flex-shrink-0">
        <span className="text-[15px] font-semibold tracking-[-0.3px]">9:41</span>
        <div className="flex items-center gap-1.5">
          <svg width="17" height="12" viewBox="0 0 17 12">
            <rect x="0" y="7" width="3" height="5" rx=".8"/>
            <rect x="4.5" y="5" width="3" height="7" rx=".8"/>
            <rect x="9" y="2.5" width="3" height="9.5" rx=".8"/>
            <rect x="13.5" y="0" width="3" height="12" rx=".8" opacity=".3"/>
          </svg>
          <svg width="16" height="12" viewBox="0 0 16 12">
            <path d="M8 9.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"/>
            <path d="M4.2 6.7a5.4 5.4 0 0 1 7.6 0l-1.3 1.3a3.6 3.6 0 0 0-5 0Z"/>
            <path d="M1 3.5a9.5 9.5 0 0 1 14 0L13.7 4.8a7.8 7.8 0 0 0-11.4 0Z" opacity=".5"/>
          </svg>
          <svg width="25" height="12" viewBox="0 0 25 12">
            <rect x="0" y="1" width="22" height="10" rx="2.5" stroke="#000" strokeWidth="1" fill="none"/>
            <rect x="1.5" y="2.5" width="16" height="7" rx="1.5"/>
            <path d="M23.5 4.5v3a1.5 1.5 0 0 0 0-3Z" opacity=".4"/>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden pb-8 scrollbar-hide" style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}>

        {/* Header with Back Button and Title */}
        <div className="px-5 pt-3 pb-4 flex items-center justify-between gap-3">
          <div className="flex items-start gap-3">
            <button
              onClick={onBack}
              className="w-[36px] h-[36px] rounded-full bg-[#e5e5ea] flex items-center justify-center active:opacity-60 flex-shrink-0"
            >
              <svg width="13" height="21" viewBox="0 0 13 21" fill="none">
                <path d="M10.5 2.5L2 10.5l8.5 8" stroke="#007aff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <h1 className="text-[34px] font-bold tracking-[0.37px] leading-tight">Summary</h1>
          </div>
          <button className="w-[36px] h-[36px] rounded-full bg-[#e5e5ea] flex items-center justify-center active:opacity-60">
            <span className="text-[14px] font-semibold text-[#3c3c43] tracking-[-0.2px]">NA</span>
          </button>
        </div>

        {/* Section Row: Pinned / Edit */}
        <div className="px-5 pb-3 flex items-baseline justify-between">
          <span className="text-[22px] font-bold tracking-[-0.26px] text-black">Pinned</span>
          <button className="text-[17px] text-[#007aff] tracking-[-0.43px] active:opacity-60">Edit</button>
        </div>

        {/* Cards */}
        <div className="px-4 flex flex-col gap-[10px]">

          {/* Card 1: Heart Rate */}
          <button className="bg-white rounded-[16px] overflow-hidden shadow-sm active:opacity-80 transition-opacity text-left">
            <div className="flex items-center px-4 pt-3 pb-[6px] gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#ff3b30"/>
              </svg>
              <span className="text-[17px] font-semibold text-[#ff3b30] tracking-[-0.43px] flex-1">Heart Rate</span>
              <span className="text-[15px] text-[#848484] tracking-[-0.24px] flex-shrink-0">22 Apr</span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="opacity-30 flex-shrink-0">
                <path d="M7 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex items-end justify-between px-4 pt-1 pb-4">
              <div>
                <div className="text-[13px] text-[#848484] tracking-[-0.08px] mb-1">Latest</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-[34px] font-extralight tracking-[-1px] leading-none text-black">100</span>
                  <span className="text-[17px] text-[#848484] tracking-[-0.24px]">BPM</span>
                </div>
              </div>
            </div>
          </button>

          {/* Card 2: Sleep */}
          <button className="bg-white rounded-[16px] overflow-hidden shadow-sm active:opacity-80 transition-opacity text-left">
            <div className="flex items-center px-4 pt-3 pb-[6px] gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="11" width="18" height="10" rx="2" fill="#5856d6"/>
                <rect x="5" y="9" width="3" height="3" rx="1.5" fill="#5856d6"/>
                <rect x="16" y="9" width="3" height="3" rx="1.5" fill="#5856d6"/>
              </svg>
              <span className="text-[17px] font-semibold text-[#5856d6] tracking-[-0.43px] flex-1">Sleep</span>
              <span className="text-[15px] text-[#848484] tracking-[-0.24px] flex-shrink-0">Today</span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="opacity-30 flex-shrink-0">
                <path d="M7 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="px-4 pt-1 pb-4">
              <div className="text-[15px] text-[#848484] tracking-[-0.24px]">No Data</div>
            </div>
          </button>

          {/* Card 3: Chronic Disease Management */}
          <button
            onClick={onChronicDiseaseClick}
            className="bg-white rounded-[16px] overflow-hidden shadow-sm active:opacity-80 transition-opacity text-left"
          >
            <div className="flex items-center px-4 pt-3 pb-[6px] gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="4" y="6" width="16" height="12" rx="2" fill="#ff3b30"/>
                <rect x="4" y="6" width="16" height="3" rx="1" fill="#ff3b30"/>
                <path d="M12 10v5M9.5 12.5h5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="text-[17px] font-semibold text-[#ff3b30] tracking-[-0.43px] flex-1">Chronic Disease Management</span>
              <span className="text-[15px] text-[#848484] tracking-[-0.24px] flex-shrink-0">Today</span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="opacity-30 flex-shrink-0">
                <path d="M7 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="px-4 pt-1 pb-3">
              <div className="text-[13px] text-[#848484] tracking-[-0.08px]">Hypertension</div>
            </div>
          </button>

        </div>

        {/* Show All Health Data */}
        <div className="px-4 pt-[10px]">
          <button className="w-full bg-white rounded-[16px] px-4 py-4 flex items-center gap-3 shadow-sm active:opacity-80 transition-opacity">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#ff3b30"/>
            </svg>
            <span className="text-[17px] text-[#007aff] tracking-[-0.43px] flex-1">Show All Health Data</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="opacity-30 flex-shrink-0">
              <path d="M7 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Trends */}
        <div className="px-5 pt-6 pb-3">
          <span className="text-[22px] font-bold tracking-[-0.26px] text-black">Trends</span>
        </div>

        <div className="px-4 pb-20">
          <button className="w-full bg-white rounded-[16px] px-4 py-4 flex items-center gap-3 shadow-sm active:opacity-80 transition-opacity">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 14l-4-4 4-4" stroke="#007aff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 10h8a6 6 0 0 1 0 12H9" stroke="#007aff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[17px] tracking-[-0.43px] flex-1 text-black">Health Trends</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="opacity-30 flex-shrink-0">
              <path d="M7 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

      </div>

    </div>
  );
}
