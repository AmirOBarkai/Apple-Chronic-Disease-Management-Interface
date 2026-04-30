interface ArticleHypertensionProps {
  onBack: () => void;
}

export function ArticleHypertension({ onBack }: ArticleHypertensionProps) {
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
            <h1 className="text-[34px] font-bold tracking-[0.37px] leading-tight">What is Hypertension?</h1>
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

        {/* Category label */}
        <div className="px-5 pb-2">
          <div className="text-[11px] font-semibold uppercase tracking-[0.5px] text-[#ff3b30]">Health Guide</div>
        </div>

        {/* Article Content */}
        <div className="px-5 space-y-5">

          <div className="space-y-3">
            <p className="text-[17px] text-[#3c3c43] tracking-[-0.43px] leading-[1.47]">
              Hypertension, or high blood pressure, is a common condition where the force of blood against your artery walls is consistently too high. Over time, this increased pressure can damage your blood vessels and lead to serious health problems.
            </p>
            <p className="text-[17px] text-[#3c3c43] tracking-[-0.43px] leading-[1.47]">
              Blood pressure is measured using two numbers: systolic pressure (the top number) represents the pressure when your heart beats, while diastolic pressure (the bottom number) represents the pressure when your heart rests between beats.
            </p>
          </div>

          <div className="bg-[#ff3b30]/5 rounded-[20px] p-5">
            <h3 className="text-[20px] font-bold tracking-[-0.4px] text-black mb-3">Blood Pressure Categories</h3>
            <div className="space-y-2.5">
              <div>
                <div className="text-[15px] font-semibold tracking-[-0.24px] text-black">Normal</div>
                <div className="text-[15px] tracking-[-0.24px] text-[#3c3c43]/80">Less than 120/80 mmHg</div>
              </div>
              <div>
                <div className="text-[15px] font-semibold tracking-[-0.24px] text-black">Elevated</div>
                <div className="text-[15px] tracking-[-0.24px] text-[#3c3c43]/80">120-129 systolic and less than 80 diastolic</div>
              </div>
              <div>
                <div className="text-[15px] font-semibold tracking-[-0.24px] text-black">Stage 1 Hypertension</div>
                <div className="text-[15px] tracking-[-0.24px] text-[#3c3c43]/80">130-139 systolic or 80-89 diastolic</div>
              </div>
              <div>
                <div className="text-[15px] font-semibold tracking-[-0.24px] text-black">Stage 2 Hypertension</div>
                <div className="text-[15px] tracking-[-0.24px] text-[#3c3c43]/80">140/90 mmHg or higher</div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-[22px] font-bold tracking-[-0.26px] text-black">Why It Matters</h3>
            <p className="text-[17px] text-[#3c3c43] tracking-[-0.43px] leading-[1.47]">
              High blood pressure is often called the "silent killer" because it typically has no symptoms, yet it can cause significant damage to your body over time. Untreated hypertension increases your risk of heart attack, stroke, kidney disease, and vision loss.
            </p>
            <p className="text-[17px] text-[#3c3c43] tracking-[-0.43px] leading-[1.47]">
              The good news is that hypertension can be managed effectively through lifestyle changes and medication. Regular monitoring, healthy eating, physical activity, stress management, and taking prescribed medications as directed can help keep your blood pressure in a healthy range.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-[22px] font-bold tracking-[-0.26px] text-black">Risk Factors</h3>
            <p className="text-[17px] text-[#3c3c43] tracking-[-0.43px] leading-[1.47]">
              Several factors can increase your risk of developing hypertension, including age, family history, obesity, lack of physical activity, tobacco use, excess salt intake, excessive alcohol consumption, stress, and certain chronic conditions like diabetes and kidney disease.
            </p>
            <p className="text-[17px] text-[#3c3c43] tracking-[-0.43px] leading-[1.47]">
              While some risk factors like age and genetics cannot be changed, many others can be modified through lifestyle choices. Making positive changes to your daily habits can significantly reduce your risk and help manage existing hypertension.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-[22px] font-bold tracking-[-0.26px] text-black">Working With Your Doctor</h3>
            <p className="text-[17px] text-[#3c3c43] tracking-[-0.43px] leading-[1.47]">
              Regular check-ups with your healthcare provider are essential for managing hypertension. Your doctor can help determine your target blood pressure goals, adjust medications as needed, and provide personalized guidance based on your overall health profile.
            </p>
            <p className="text-[17px] text-[#3c3c43] tracking-[-0.43px] leading-[1.47]">
              Monitoring your blood pressure at home between appointments can provide valuable information about how well your treatment is working and help you stay engaged in your health management.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
