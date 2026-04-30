interface DeleteConfirmationProps {
  onBack: () => void;
  onConfirm: () => void;
}

export function DeleteConfirmation({ onBack, onConfirm }: DeleteConfirmationProps) {
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
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="text-center">
          {/* Warning Icon */}
          <div className="w-20 h-20 rounded-full bg-[#ff3b30]/10 flex items-center justify-center mx-auto mb-6">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M20 14v8" stroke="#ff3b30" strokeWidth="3" strokeLinecap="round"/>
              <circle cx="20" cy="28" r="2" fill="#ff3b30"/>
              <circle cx="20" cy="20" r="16" stroke="#ff3b30" strokeWidth="2.5" fill="none"/>
            </svg>
          </div>

          {/* Title */}
          <h1 className="text-[22px] font-bold tracking-[-0.26px] text-black mb-3">
            Delete Medication?
          </h1>

          {/* Message */}
          <p className="text-[17px] tracking-[-0.43px] text-[#848484] leading-[1.4] mb-2">
            Are you sure you want to delete Lisinopril 10 mg?
          </p>
          <p className="text-[15px] tracking-[-0.24px] text-[#848484] leading-[1.4]">
            This will remove all history and reminders for this medication.
          </p>
        </div>
      </div>

      {/* Top Bar with Back Arrow */}
      <div className="absolute top-[52px] left-0 right-0 px-5 pt-3 pb-2 flex-shrink-0 z-10">
        <button
          onClick={onBack}
          className="w-[36px] h-[36px] rounded-full bg-[#e5e5ea] flex items-center justify-center active:opacity-60 flex-shrink-0"
        >
          <svg width="13" height="21" viewBox="0 0 13 21" fill="none">
            <path d="M10.5 2.5L2 10.5l8.5 8" stroke="#007aff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Bottom Actions */}
      <div className="pb-8 px-4 flex-shrink-0 flex flex-col gap-3">
        <button
          onClick={onConfirm}
          className="w-full py-4 bg-[#ff3b30] rounded-full active:opacity-80 transition-opacity"
        >
          <span className="text-white text-[17px] font-semibold tracking-[-0.43px]">Delete</span>
        </button>
      </div>
    </div>
  );
}
