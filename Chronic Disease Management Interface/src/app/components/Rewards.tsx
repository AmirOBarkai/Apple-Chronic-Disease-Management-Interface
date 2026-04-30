interface RewardsProps {
  onBack: () => void;
}

export function Rewards({ onBack }: RewardsProps) {
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
            <h1 className="text-[34px] font-bold tracking-[0.37px] leading-tight">Apple Health Rewards</h1>
          </div>
          <div className="w-[26px] h-[26px] rounded-[6px] bg-[#34c759] flex items-center justify-center flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2v5M8 11v1M5 5l6 6M11 5l-6 6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
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

        {/* Subheading */}
        <div className="px-5 pb-3">
          <p className="text-[14px] text-[#8e8e93] tracking-[-0.24px] leading-[1.35]">
            Stay on track with your medications.<br/>Unlock more savings each week.
          </p>
        </div>

        {/* Current Discount Card */}
        <div className="px-5 pb-3">
          <div className="bg-white rounded-[20px] px-5 pt-4 pb-4 shadow-[0px_1px_4px_rgba(0,0,0,0.06)]">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="text-[13px] font-medium text-[#8e8e93] tracking-[-0.08px] mb-2">Unlocked this month</div>
                <div className="flex items-baseline gap-2">
                  <div className="text-[48px] font-bold tracking-[-1.5px] leading-none text-[#34c759]">2%</div>
                  <div className="text-[17px] font-semibold text-black tracking-[-0.43px] pb-1">Discount</div>
                </div>
              </div>
              <div className="w-[26px] h-[26px] rounded-full bg-[#34c759] flex items-center justify-center flex-shrink-0">
                <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                  <path d="M1 5.5l4 4 8-9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="text-[13px] text-[#8e8e93] tracking-[-0.08px] leading-[1.35]">
              Complete four full weeks to unlock up to 4% off.
            </div>
          </div>
        </div>

        {/* Progress Section */}
        <div className="px-5 pb-4">
          <div className="flex items-center justify-between mb-3">
            <div className="text-[13px] font-medium text-[#8e8e93] tracking-[-0.08px]">Complete this week to unlock 3%</div>
            <div className="text-[13px] font-medium text-[#8e8e93] tracking-[-0.08px]">Week 3 of 4</div>
          </div>

          {/* Progress Bar with Labels */}
          <div className="relative mb-2">
            <div className="flex items-center justify-between mb-2 px-1">
              <span className="text-[12px] font-semibold text-[#34c759] tracking-[-0.08px]">2%</span>
              <span className="text-[12px] font-semibold text-[#8e8e93] tracking-[-0.08px]">3%</span>
            </div>

            <div className="relative h-[3px] bg-[#e5e5ea] rounded-full">
              <div className="absolute top-0 left-0 h-[3px] bg-[#34c759] rounded-full" style={{ width: '43%' }} />

              {/* Progress Dots - 7 total, 3 filled */}
              <div className="absolute -top-[4.5px] left-0 w-3 h-3 rounded-full bg-[#34c759]" />
              <div className="absolute -top-[4.5px]" style={{ left: 'calc(14.28% - 6px)' }}>
                <div className="w-3 h-3 rounded-full bg-[#34c759]" />
              </div>
              <div className="absolute -top-[4.5px]" style={{ left: 'calc(28.56% - 6px)' }}>
                <div className="w-3 h-3 rounded-full bg-[#34c759]" />
              </div>
              <div className="absolute -top-[4.5px]" style={{ left: 'calc(42.84% - 6px)' }}>
                <div className="w-3 h-3 rounded-full bg-[#e5e5ea]" />
              </div>
              <div className="absolute -top-[4.5px]" style={{ left: 'calc(57.12% - 6px)' }}>
                <div className="w-3 h-3 rounded-full bg-[#e5e5ea]" />
              </div>
              <div className="absolute -top-[4.5px]" style={{ left: 'calc(71.4% - 6px)' }}>
                <div className="w-3 h-3 rounded-full bg-[#e5e5ea]" />
              </div>
              <div className="absolute -top-[4.5px] right-0">
                <div className="w-3 h-3 rounded-full bg-[#e5e5ea]" />
              </div>
            </div>
          </div>

          <div className="text-[12px] text-[#8e8e93] text-center tracking-[-0.08px] mt-2">
            3 days left to unlock 3%.
          </div>
        </div>

        {/* Available Services */}
        <div className="px-5 pb-3">
          <div className="flex items-center justify-between mb-2.5">
            <div className="text-[22px] font-bold text-black tracking-[-0.26px]">Available Services</div>
            <div className="text-[13px] font-semibold text-[#34c759] tracking-[-0.08px]">1 Active</div>
          </div>

          {/* Service Card - iCloud+ Active */}
          <div className="bg-white rounded-[16px] shadow-[0px_1px_4px_rgba(0,0,0,0.06)] px-4 py-3.5">
            <div className="flex items-center gap-3">
              {/* Icon */}
              <div className="w-12 h-12 rounded-[12px] bg-gradient-to-b from-[#52a7f5] to-[#2d8cf0] flex items-center justify-center flex-shrink-0">
                <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
                  <path d="M21.5 10.5c-.1-2.8-2.4-5-5.2-5-.8 0-1.6.2-2.3.5-1-1.8-2.9-3-5.1-3-3.2 0-5.8 2.6-5.8 5.8 0 .3 0 .6.1.9C1.4 10.3 0 12.1 0 14.2c0 2.7 2.2 4.8 4.9 4.8h16.2c2.7 0 4.9-2.2 4.9-4.9 0-2.4-1.8-4.4-4.2-4.8-.1.1-.2.1-.3.2z" fill="white"/>
                </svg>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="text-[17px] font-semibold text-black tracking-[-0.43px]">iCloud+</div>
                <div className="text-[13px] text-[#8e8e93] tracking-[-0.08px] mt-0.5">
                  $29.99/mo  ·  Active
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Suggested Services */}
        <div className="px-5 pb-5">
          <div className="mb-2.5">
            <div className="text-[22px] font-bold text-black tracking-[-0.26px]">Suggested Services</div>
            <div className="text-[13px] text-[#8e8e93] tracking-[-0.08px] mt-1">Apply your discount to services you don't use yet.</div>
          </div>

          {/* Service Card - Apple TV+ */}
          <div className="bg-white rounded-[16px] shadow-[0px_1px_4px_rgba(0,0,0,0.06)] px-4 py-3.5 mb-2.5">
            <div className="flex items-center gap-3">
              {/* Icon */}
              <div className="w-12 h-12 rounded-[12px] bg-black flex items-center justify-center flex-shrink-0">
                <svg width="32" height="12" viewBox="0 0 32 12" fill="none">
                  <text x="1" y="10" fill="white" fontSize="11" fontWeight="600" fontFamily="-apple-system, BlinkMacSystemFont, sans-serif">tv</text>
                  <text x="15" y="10" fill="white" fontSize="11" fontWeight="400" fontFamily="-apple-system, BlinkMacSystemFont, sans-serif">+</text>
                </svg>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="text-[17px] font-semibold text-black tracking-[-0.43px]">Apple TV+</div>
                <div className="text-[13px] text-[#8e8e93] tracking-[-0.08px] mt-0.5">
                  $12.99/mo  ·  Not connected
                </div>
                <div className="text-[12px] text-[#8e8e93] leading-[1.3] mt-1">
                  A welcome gift for your first month only.
                </div>
              </div>

              {/* Button */}
              <button className="bg-[#f2f2f7] px-4 py-2 rounded-[20px] flex-shrink-0 active:opacity-70">
                <span className="text-[13px] font-semibold text-[#007aff] whitespace-nowrap tracking-[-0.08px]">Subscribe</span>
              </button>
            </div>
          </div>

          {/* Service Card - Apple Arcade */}
          <div className="bg-white rounded-[16px] shadow-[0px_1px_4px_rgba(0,0,0,0.06)] px-4 py-3.5">
            <div className="flex items-center gap-3">
              {/* Icon */}
              <div className="w-12 h-12 rounded-[12px] bg-gradient-to-br from-[#ff6b57] to-[#ff3b47] flex items-center justify-center flex-shrink-0">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M14 4L8 10l6 6 6-6-6-6z" fill="white" opacity="0.9"/>
                  <circle cx="14" cy="20" r="3" fill="white" opacity="0.9"/>
                </svg>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="text-[17px] font-semibold text-black tracking-[-0.43px]">Apple Arcade</div>
                <div className="text-[13px] text-[#8e8e93] tracking-[-0.08px] mt-0.5">
                  $6.99/mo  ·  Not connected
                </div>
                <div className="text-[12px] text-[#8e8e93] leading-[1.3] mt-1">
                  A welcome gift for your first month only.
                </div>
              </div>

              {/* Button */}
              <button className="bg-[#f2f2f7] px-4 py-2 rounded-[20px] flex-shrink-0 active:opacity-70">
                <span className="text-[13px] font-semibold text-[#007aff] whitespace-nowrap tracking-[-0.08px]">Subscribe</span>
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
