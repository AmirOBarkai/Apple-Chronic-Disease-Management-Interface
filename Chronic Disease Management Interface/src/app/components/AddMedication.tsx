import { useState } from 'react';

interface AddMedicationProps {
  onBack: () => void;
  onScanMedication?: () => void;
  onManualEntry?: () => void;
}

export function AddMedication({ onBack, onScanMedication, onManualEntry }: AddMedicationProps) {
  const [step, setStep] = useState<'entry' | 'frequency'>('entry');
  const [selectedFrequency, setSelectedFrequency] = useState<'morning' | 'evening' | 'both' | null>(null);

  if (step === 'frequency') {
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
                onClick={() => setStep('entry')}
                className="w-[36px] h-[36px] rounded-full bg-[#e5e5ea] flex items-center justify-center active:opacity-60 flex-shrink-0"
              >
                <svg width="13" height="21" viewBox="0 0 13 21" fill="none">
                  <path d="M10.5 2.5L2 10.5l8.5 8" stroke="#007aff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <h1 className="text-[34px] font-bold tracking-[0.37px] leading-tight">Add a New Medication</h1>
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
            <p className="text-[15px] text-[#848484] tracking-[-0.24px] leading-[1.4]">
              How often do you take this medication?
            </p>
          </div>

          {/* Frequency Options */}
          <div className="px-4 flex flex-col gap-2">
            <button
              onClick={() => setSelectedFrequency('morning')}
              className={`w-full rounded-[26px] p-4 shadow-sm active:opacity-60 transition-all ${
                selectedFrequency === 'morning' ? 'bg-[#30b0c7] text-white' : 'bg-white text-black'
              }`}
            >
              <div className="text-[17px] font-semibold tracking-[-0.43px] text-center">
                Morning
              </div>
            </button>

            <button
              onClick={() => setSelectedFrequency('evening')}
              className={`w-full rounded-[26px] p-4 shadow-sm active:opacity-60 transition-all ${
                selectedFrequency === 'evening' ? 'bg-[#30b0c7] text-white' : 'bg-white text-black'
              }`}
            >
              <div className="text-[17px] font-semibold tracking-[-0.43px] text-center">
                Evening
              </div>
            </button>

            <button
              onClick={() => setSelectedFrequency('both')}
              className={`w-full rounded-[26px] p-4 shadow-sm active:opacity-60 transition-all ${
                selectedFrequency === 'both' ? 'bg-[#30b0c7] text-white' : 'bg-white text-black'
              }`}
            >
              <div className="text-[17px] font-semibold tracking-[-0.43px] text-center">
                Both
              </div>
            </button>
          </div>

          {selectedFrequency && (
            <div className="px-4 mt-4">
              <button className="w-full bg-[#30b0c7] rounded-[26px] p-4 shadow-sm active:opacity-80 transition-opacity">
                <div className="text-[17px] font-semibold tracking-[-0.43px] text-white text-center">
                  Continue
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

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
            <h1 className="text-[34px] font-bold tracking-[0.37px] leading-tight">Add a New Medication</h1>
          </div>
        </div>

        {/* Privacy Text - ALWAYS BELOW header */}
        <div className="flex items-center gap-1.5 px-5 pb-4 text-[11px] font-medium text-[#848484] tracking-[0.06px]">
          <svg width="10" height="12" viewBox="0 0 10 12" fill="none" className="opacity-50">
            <rect x="1" y="5" width="8" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.1"/>
            <path d="M3 5V3.5a2 2 0 1 1 4 0V5" stroke="currentColor" strokeWidth="1.1"/>
          </svg>
          Your health data stays on this iPhone
        </div>

        {/* Entry Options */}
        <div className="px-4 flex flex-col gap-2">
          <button
            onClick={onScanMedication || (() => setStep('frequency'))}
            className="w-full bg-white rounded-[26px] p-5 shadow-sm active:opacity-60 transition-opacity text-left"
          >
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#007aff]/10 flex items-center justify-center flex-shrink-0">
                <svg width="24" height="20" viewBox="0 0 24 20" fill="none">
                  <rect x="2" y="2" width="20" height="14" rx="2" stroke="#007aff" strokeWidth="1.5" fill="none"/>
                  <circle cx="12" cy="9" r="3" stroke="#007aff" strokeWidth="1.5" fill="none"/>
                  <path d="M5 16l4-3 3 2 5-4" stroke="#007aff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[17px] font-semibold tracking-[-0.43px] text-black leading-tight">
                  Scan Medication or Prescription
                </h3>
                <p className="text-[13px] text-[#848484] tracking-[-0.08px] leading-[1.4] mt-1">
                  Take a photo of your medication bottle or prescription
                </p>
              </div>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="opacity-30 flex-shrink-0">
                <path d="M7 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>

          <button
            onClick={onManualEntry || (() => setStep('frequency'))}
            className="w-full bg-white rounded-[26px] p-5 shadow-sm active:opacity-60 transition-opacity text-left"
          >
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#007aff]/10 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="3" y="5" width="14" height="11" rx="2" stroke="#007aff" strokeWidth="1.5" fill="none"/>
                  <line x1="6" y1="8.5" x2="14" y2="8.5" stroke="#007aff" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="6" y1="11.5" x2="14" y2="11.5" stroke="#007aff" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="6" y1="3" x2="6" y2="6" stroke="#007aff" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="10" y1="3" x2="10" y2="6" stroke="#007aff" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="14" y1="3" x2="14" y2="6" stroke="#007aff" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[17px] font-semibold tracking-[-0.43px] text-black leading-tight">
                  Enter Medication Manually
                </h3>
                <p className="text-[13px] text-[#848484] tracking-[-0.08px] leading-[1.4] mt-1">
                  Type the medication name and details
                </p>
              </div>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="opacity-30 flex-shrink-0">
                <path d="M7 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
