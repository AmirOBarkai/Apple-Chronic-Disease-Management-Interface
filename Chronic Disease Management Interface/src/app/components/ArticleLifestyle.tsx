interface ArticleLifestyleProps {
  onBack: () => void;
}

export function ArticleLifestyle({ onBack }: ArticleLifestyleProps) {
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
            <h1 className="text-[34px] font-bold tracking-[0.37px] leading-tight">Managing Blood Pressure Through Lifestyle</h1>
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
        <div className="px-5 pb-4">
          <div className="text-[11px] font-semibold uppercase tracking-[0.5px] text-[#34c759]">Wellness</div>
        </div>

        {/* Article Content */}
        <div className="px-5 space-y-5">

          <div className="space-y-3">
            <p className="text-[17px] text-[#3c3c43] tracking-[-0.43px] leading-[1.47]">
              Lifestyle changes are a powerful tool for managing high blood pressure. In many cases, adopting healthier habits can reduce blood pressure as much as medication, and when combined with prescribed treatments, the results can be even more effective.
            </p>
            <p className="text-[17px] text-[#3c3c43] tracking-[-0.43px] leading-[1.47]">
              The key is to make sustainable changes that fit into your daily routine. Small, consistent adjustments to your diet, activity level, and stress management can lead to significant improvements in your blood pressure over time.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-[22px] font-bold tracking-[-0.26px] text-black">Heart-Healthy Eating</h3>
            <p className="text-[17px] text-[#3c3c43] tracking-[-0.43px] leading-[1.47]">
              The DASH diet (Dietary Approaches to Stop Hypertension) is specifically designed to lower blood pressure. It emphasizes fruits, vegetables, whole grains, lean proteins, and low-fat dairy while limiting sodium, saturated fats, and added sugars.
            </p>
          </div>

          <div className="bg-[#34c759]/5 rounded-[20px] p-5">
            <h3 className="text-[20px] font-bold tracking-[-0.4px] text-black mb-3">Daily Food Goals</h3>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#34c759] mt-2 flex-shrink-0"/>
                <div className="text-[15px] tracking-[-0.24px] text-[#3c3c43]">4-5 servings of vegetables and fruits</div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#34c759] mt-2 flex-shrink-0"/>
                <div className="text-[15px] tracking-[-0.24px] text-[#3c3c43]">Whole grains with every meal</div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#34c759] mt-2 flex-shrink-0"/>
                <div className="text-[15px] tracking-[-0.24px] text-[#3c3c43]">Lean protein sources like fish and poultry</div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#34c759] mt-2 flex-shrink-0"/>
                <div className="text-[15px] tracking-[-0.24px] text-[#3c3c43]">Limit sodium to less than 2,300 mg</div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#34c759] mt-2 flex-shrink-0"/>
                <div className="text-[15px] tracking-[-0.24px] text-[#3c3c43]">Reduce saturated fats and avoid trans fats</div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-[22px] font-bold tracking-[-0.26px] text-black">Physical Activity</h3>
            <p className="text-[17px] text-[#3c3c43] tracking-[-0.43px] leading-[1.47]">
              Regular physical activity strengthens your heart, allowing it to pump blood with less effort and reducing pressure on your arteries. Aim for at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity each week.
            </p>
            <p className="text-[17px] text-[#3c3c43] tracking-[-0.43px] leading-[1.47]">
              You don't have to run marathons. Simple activities like brisk walking, cycling, swimming, or dancing can make a real difference. The key is consistency and finding activities you enjoy enough to stick with long-term.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-[22px] font-bold tracking-[-0.26px] text-black">Maintain a Healthy Weight</h3>
            <p className="text-[17px] text-[#3c3c43] tracking-[-0.43px] leading-[1.47]">
              Excess weight puts additional strain on your heart and blood vessels. Even modest weight loss of 5-10% of your body weight can significantly lower blood pressure and reduce your risk of related health complications.
            </p>
            <p className="text-[17px] text-[#3c3c43] tracking-[-0.43px] leading-[1.47]">
              Focus on gradual, sustainable changes rather than crash diets. Combining healthy eating with regular physical activity is the most effective approach for long-term weight management.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-[22px] font-bold tracking-[-0.26px] text-black">Manage Stress</h3>
            <p className="text-[17px] text-[#3c3c43] tracking-[-0.43px] leading-[1.47]">
              Chronic stress can contribute to high blood pressure. Finding healthy ways to cope with stress is an important part of blood pressure management. Techniques like deep breathing, meditation, yoga, or spending time on hobbies you enjoy can help lower stress levels.
            </p>
            <p className="text-[17px] text-[#3c3c43] tracking-[-0.43px] leading-[1.47]">
              Quality sleep is equally important. Aim for 7-9 hours of sleep each night, and establish a consistent sleep schedule to help regulate your body's stress response systems.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-[22px] font-bold tracking-[-0.26px] text-black">Limit Alcohol and Quit Smoking</h3>
            <p className="text-[17px] text-[#3c3c43] tracking-[-0.43px] leading-[1.47]">
              If you drink alcohol, do so in moderation. Excessive drinking can raise blood pressure and reduce the effectiveness of blood pressure medications. Smoking damages blood vessels and accelerates the narrowing of arteries.
            </p>
            <p className="text-[17px] text-[#3c3c43] tracking-[-0.43px] leading-[1.47]">
              Quitting smoking is one of the best things you can do for your overall cardiovascular health. Talk to your doctor about smoking cessation programs and aids that can help you quit successfully.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
