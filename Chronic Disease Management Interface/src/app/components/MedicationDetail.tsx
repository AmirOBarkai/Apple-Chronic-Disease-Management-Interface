interface MedicationDetailProps {
  onBack: () => void;
  onLogDose: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export function MedicationDetail({ onBack, onLogDose, onEdit, onDelete }: MedicationDetailProps) {
  const history = [
    { date: 'Apr 26, 2026', time: '8:05 AM', status: 'taken' },
    { date: 'Apr 25, 2026', time: '8:02 AM', status: 'taken' },
    { date: 'Apr 24, 2026', time: 'Skipped', status: 'skipped' },
    { date: 'Apr 23, 2026', time: '8:10 AM', status: 'taken' },
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
            <h1 className="text-[34px] font-bold tracking-[0.37px] leading-tight">Lisinopril</h1>
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

        {/* Subtitle */}
        <div className="px-5 pb-4">
          <p className="text-[17px] text-[#848484] tracking-[-0.43px]">10 mg</p>
        </div>

        {/* Info Cards */}
        <div className="px-4 flex flex-col gap-2">

          {/* Schedule Card */}
          <div className="bg-white rounded-[26px] p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" stroke="#007aff" strokeWidth="1.3" fill="none"/>
                <path d="M7 3.5v3.5l2.5 1.5" stroke="#007aff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="text-[17px] font-semibold tracking-[-0.43px] text-black">Schedule</h3>
            </div>
            <p className="text-[15px] tracking-[-0.24px] text-[#3c3c43] leading-[1.4]">
              Once daily, 8:00 AM
            </p>
          </div>

          {/* Status Card */}
          <div className="bg-white rounded-[26px] p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" fill="#67ce67"/>
                <path d="M4.5 7l2 2 3-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="text-[17px] font-semibold tracking-[-0.43px] text-black">Status</h3>
            </div>
            <p className="text-[15px] tracking-[-0.24px] text-[#3c3c43] leading-[1.4]">
              Last taken today at 8:05 AM
            </p>
          </div>

          {/* Reminders Card */}
          <div className="bg-white rounded-[26px] p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 2a2.5 2.5 0 0 1 2.5 2.5v2a2 2 0 0 0 .5 1.3l.5.5H3.5l.5-.5a2 2 0 0 0 .5-1.3v-2A2.5 2.5 0 0 1 7 2Z" stroke="#007aff" strokeWidth="1.2" fill="none"/>
                <path d="M5.5 10.5a1.5 1.5 0 0 0 3 0" stroke="#007aff" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              <h3 className="text-[17px] font-semibold tracking-[-0.43px] text-black">Reminders</h3>
            </div>
            <p className="text-[15px] tracking-[-0.24px] text-[#3c3c43] leading-[1.4]">
              Smart reminder enabled<br />
              Widget updates at 8:00 AM
            </p>
          </div>

          {/* History Card */}
          <div className="bg-white rounded-[26px] p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="2" y="3" width="10" height="9" rx="1.5" stroke="#007aff" strokeWidth="1.2" fill="none"/>
                <line x1="4.5" y1="1" x2="4.5" y2="4" stroke="#007aff" strokeWidth="1.2" strokeLinecap="round"/>
                <line x1="9.5" y1="1" x2="9.5" y2="4" stroke="#007aff" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              <h3 className="text-[17px] font-semibold tracking-[-0.43px] text-black">History</h3>
            </div>
            <div className="space-y-2">
              {history.map((entry, idx) => (
                <div key={idx} className="flex items-center justify-between py-1.5">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${entry.status === 'taken' ? 'bg-[#67ce67]' : 'bg-[#eb4b62]'}`} />
                    <span className="text-[15px] tracking-[-0.24px] text-[#3c3c43]">{entry.date}</span>
                  </div>
                  <span className="text-[15px] tracking-[-0.24px] text-[#848484]">{entry.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="pb-8 px-4 flex-shrink-0 flex flex-col gap-2">
        <button
          onClick={onLogDose}
          className="w-full py-4 bg-[#30b0c7] rounded-full active:opacity-80 transition-opacity"
        >
          <span className="text-white text-[17px] font-semibold tracking-[-0.43px]">Log Dose</span>
        </button>
        <div className="flex gap-2">
          <button
            onClick={onEdit}
            className="flex-1 py-3.5 bg-white rounded-full shadow-sm active:opacity-60 transition-opacity"
          >
            <span className="text-[#30b0c7] text-[15px] font-semibold tracking-[-0.24px]">Edit</span>
          </button>
          <button
            onClick={onDelete}
            className="flex-1 py-3.5 bg-white rounded-full shadow-sm active:opacity-60 transition-opacity"
          >
            <span className="text-[#ff3b30] text-[15px] font-semibold tracking-[-0.24px]">Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}
