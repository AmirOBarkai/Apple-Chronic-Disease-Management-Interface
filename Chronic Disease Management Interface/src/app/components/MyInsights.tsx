interface MyInsightsProps {
  onBack: () => void;
}

interface Insight {
  id: string;
  category: string;
  categoryColor: string;
  categoryBgColor: string;
  headline: string;
  detail: string;
  source: string;
  icon: JSX.Element;
}

export function MyInsights({ onBack }: MyInsightsProps) {
  const insights: Insight[] = [
    {
      id: '1',
      category: 'Heart Rate',
      categoryColor: '#30b0c7',
      categoryBgColor: 'rgba(48,176,199,0.10)',
      headline: 'Rest now.',
      detail: 'Low heart rate detected. Avoid exertion for the next 5 minutes to allow your cardiovascular system to stabilise.',
      source: 'Apple Watch · Heart rate 52 bpm · 9:38 AM',
      icon: (
        <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
          <path d="M10 16S2 10.5 2 5.5a4 4 0 0 1 8-.5 4 4 0 0 1 8 .5C18 10.5 10 16 10 16Z" stroke="#30b0c7" strokeWidth="1.4" strokeLinejoin="round"/>
          <path d="M4.5 9h2l2-3.5 2.5 7L13 9h2.5" stroke="#30b0c7" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: '2',
      category: 'Stress & Hydration',
      categoryColor: '#007aff',
      categoryBgColor: 'rgba(0,122,255,0.10)',
      headline: 'Drink water.',
      detail: 'Take 3 minutes for deep breathing to lower stress and blood pressure. Pair with a glass of water to support blood volume.',
      source: 'Apple Watch · Resting HR elevated · Today',
      icon: (
        <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
          <path d="M10 16S2 10.5 2 5.5a4 4 0 0 1 8-.5 4 4 0 0 1 8 .5C18 10.5 10 16 10 16Z" stroke="#007aff" strokeWidth="1.4" strokeLinejoin="round"/>
          <path d="M10 5v4" stroke="#007aff" strokeWidth="1.7" strokeLinecap="round"/>
          <circle cx="10" cy="11.5" r="1" fill="#007aff"/>
        </svg>
      ),
    },
    {
      id: '3',
      category: 'Sleep',
      categoryColor: '#5856d6',
      categoryBgColor: 'rgba(88,86,214,0.10)',
      headline: 'Enable Night Shift.',
      detail: 'Reducing blue-light exposure after sunset supports melatonin production and improves sleep quality.',
      source: 'iPhone · Screen time after 10 PM detected',
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M13.5 3.5A6.5 6.5 0 1 0 14.5 13 5 5 0 0 1 13.5 3.5Z" stroke="#5856d6" strokeWidth="1.4" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

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

      {/* Header */}
      <div className="flex-shrink-0 border-b border-[rgba(60,60,67,0.18)]">

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
            <h1 className="text-[34px] font-bold tracking-[0.37px] leading-tight">My Insights</h1>
          </div>
        </div>

        {/* Privacy Text - ALWAYS BELOW header */}
        <div className="flex items-center gap-1.5 px-5 pb-3 text-[11px] font-medium text-[#848484] tracking-[0.06px]">
          <svg width="10" height="12" viewBox="0 0 10 12" fill="none" className="opacity-50">
            <rect x="1" y="5" width="8" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.1"/>
            <path d="M3 5V3.5a2 2 0 1 1 4 0V5" stroke="currentColor" strokeWidth="1.1"/>
          </svg>
          Your health data stays on this iPhone
        </div>

        {/* Date */}
        <div className="px-5 pt-2 pb-1">
          <div className="text-[22px] font-bold tracking-[-0.26px] text-black leading-tight">Thursday, Apr 27</div>
          <div className="text-[12px] text-[rgba(60,60,67,0.60)] tracking-[-0.1px] mt-0.5">{insights.length} insights today</div>
        </div>

      </div>

      {/* Insights List */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden pb-8 pt-3.5 scrollbar-hide" style={{
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
}}>
        <div className="px-4 flex flex-col gap-2.5">
          {insights.map((insight) => (
            <button
              key={insight.id}
              className="w-full bg-white rounded-[20px] shadow-sm active:opacity-60 transition-opacity text-left overflow-hidden"
            >
              {/* Card Content */}
              <div className="flex items-start gap-3 p-4">
                {/* Icon */}
                <div
                  className="w-[38px] h-[38px] rounded-[11px] flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: insight.categoryBgColor }}
                >
                  {insight.icon}
                </div>

                {/* Body */}
                <div className="flex-1 min-w-0">
                  <div
                    className="text-[10px] font-bold uppercase tracking-[0.55px] mb-1"
                    style={{ color: insight.categoryColor }}
                  >
                    {insight.category}
                  </div>
                  <div className="text-[15px] font-bold tracking-[-0.3px] text-black leading-[1.28] mb-1">
                    {insight.headline}
                  </div>
                  <div className="text-[12px] text-[rgba(60,60,67,0.60)] leading-[1.5] tracking-[-0.05px]">
                    {insight.detail}
                  </div>
                </div>
              </div>

              {/* Source Metadata */}
              <div className="flex items-center gap-1.5 px-4 py-2.5 border-t border-[rgba(60,60,67,0.18)]">
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: insight.categoryColor }}
                />
                <span className="text-[11px] font-medium text-[rgba(60,60,67,0.30)] tracking-[0.02px]">
                  {insight.source}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}
