interface FilesPickerProps {
  onBack: () => void;
  onSelectFile: () => void;
}

export function FilesPicker({ onBack, onSelectFile }: FilesPickerProps) {
  const files = [
    { name: 'Lab Results March 2026.pdf', size: '2.4 MB', date: 'Mar 18', location: 'Downloads' },
    { name: 'Blood Work - Quest.pdf', size: '1.8 MB', date: 'Mar 10', location: 'Downloads' },
    { name: 'Chest X-ray Report.pdf', size: '3.2 MB', date: 'Feb 28', location: 'iCloud Drive' },
    { name: 'Prescription Summary.pdf', size: '856 KB', date: 'Feb 15', location: 'Downloads' },
    { name: 'Hospital Discharge.pdf', size: '4.1 MB', date: 'Jan 22', location: 'iCloud Drive' },
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

        {/* Header */}
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

        {/* Title */}
        <div className="px-5 pt-2 pb-3.5">
          <h1 className="text-[34px] font-bold tracking-[0.37px] leading-tight text-black">
            Choose File
          </h1>
        </div>

        {/* Subtitle */}
        <div className="px-5 pb-4">
          <p className="text-[15px] text-[#848484] tracking-[-0.24px] leading-[1.4]">
            Select a medical document from your files
          </p>
        </div>

        {/* Files list */}
        <div className="px-4 space-y-2">
          {files.map((file, index) => (
            <button
              key={index}
              onClick={onSelectFile}
              className="w-full bg-white rounded-[26px] p-4 shadow-sm active:opacity-60 transition-opacity"
            >
              <div className="flex items-start gap-3">
                {/* PDF icon */}
                <div className="w-10 h-10 rounded-lg bg-[#ff3b30]/10 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
                    <path d="M4 0h8l8 8v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" fill="#ff3b30"/>
                    <path d="M12 0v6a2 2 0 0 0 2 2h6" fill="#ff3b30" opacity="0.6"/>
                    <text x="10" y="17" fontSize="8" fill="white" textAnchor="middle" fontWeight="bold">PDF</text>
                  </svg>
                </div>

                {/* File info */}
                <div className="flex-1 min-w-0 text-left">
                  <p className="text-[17px] font-semibold tracking-[-0.43px] text-black truncate">
                    {file.name}
                  </p>
                  <p className="text-[13px] text-[#848484] tracking-[-0.08px] mt-0.5">
                    {file.location} · {file.size}
                  </p>
                </div>

                {/* Date */}
                <div className="text-[13px] text-[#848484] tracking-[-0.08px] flex-shrink-0">
                  {file.date}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
