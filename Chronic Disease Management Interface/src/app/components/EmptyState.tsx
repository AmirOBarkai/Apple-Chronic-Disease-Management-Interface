interface EmptyStateProps {
  onBack: () => void;
  type: 'summaries' | 'questions';
}

export function EmptyState({ onBack, type }: EmptyStateProps) {
  const content = type === 'summaries'
    ? {
        title: 'No Saved Summaries',
        message: 'When you interpret a medical document and save the summary, it will appear here.',
        icon: (
          <svg width="40" height="52" viewBox="0 0 20 26" fill="none">
            <rect x="0" y="4" width="20" height="22" rx="3" fill="#ff9500" opacity="0.3"/>
            <rect x="5.5" y="0" width="9" height="7" rx="2" fill="#ff9500" opacity="0.3"/>
            <rect x="7" y="1.5" width="6" height="3.5" rx="1.5" fill="white" fillOpacity="0.25"/>
            <line x1="4.5" y1="11" x2="15.5" y2="11" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0.5"/>
            <line x1="4.5" y1="15" x2="15.5" y2="15" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0.5"/>
            <line x1="4.5" y1="19" x2="11.5" y2="19" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0.5"/>
          </svg>
        )
      }
    : {
        title: 'No Saved Questions',
        message: 'When you save questions for your doctor from a document summary, they will appear here.',
        icon: (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="23" stroke="#ff9500" strokeWidth="2" opacity="0.3"/>
            <path d="M24 16v8M24 28h.01" stroke="#ff9500" strokeWidth="3" strokeLinecap="round" opacity="0.3"/>
          </svg>
        )
      };

  return (
    <div className="w-[390px] h-[844px] bg-gradient-to-br from-[#ffe5ee] via-[#f5f0ff] to-[#e0f4ff] relative overflow-hidden flex flex-col">

      {/* Status Bar */}
      <div className="flex justify-between items-center px-6 pt-3.5 h-[52px] flex-shrink-0">
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

      {/* Content - Centered */}
      <div className="flex-1 flex flex-col">

        {/* Back Button */}
        <div className="px-5 pt-3 pb-2">
          <button
            onClick={onBack}
            className="w-[36px] h-[36px] rounded-full bg-[#e5e5ea] flex items-center justify-center active:opacity-60 flex-shrink-0"
          >
            <svg width="13" height="21" viewBox="0 0 13 21" fill="none">
              <path d="M10.5 2.5L2 10.5l8.5 8" stroke="#007aff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Empty State Content - Centered */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 pb-20">
          <div className="w-20 h-20 rounded-full bg-[rgba(255,149,0,0.05)] flex items-center justify-center mb-6">
            {content.icon}
          </div>

          <h2 className="text-[22px] font-bold tracking-[-0.26px] text-center text-black mb-3">
            {content.title}
          </h2>

          <p className="text-[17px] text-[#848484] tracking-[-0.43px] text-center leading-[1.47] max-w-[280px]">
            {content.message}
          </p>
        </div>
      </div>
    </div>
  );
}
