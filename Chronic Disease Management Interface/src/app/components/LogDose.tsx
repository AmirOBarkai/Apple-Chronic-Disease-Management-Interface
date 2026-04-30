import { useState } from 'react';

interface LogDoseProps {
  onBack: () => void;
  onSave: () => void;
}

export function LogDose({ onBack, onSave }: LogDoseProps) {
  const [status, setStatus] = useState<'taken' | 'skipped' | null>(null);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState(new Date().toTimeString().slice(0, 5));
  const [notes, setNotes] = useState('');

  const isValid = status !== null;

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
            <h1 className="text-[34px] font-bold tracking-[0.37px] leading-tight">Log Dose</h1>
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
        <div className="px-5 pb-3.5">
          <p className="text-[17px] text-[#848484] tracking-[-0.43px]">Lisinopril 10 mg</p>
        </div>

        {/* Form Fields */}
        <div className="px-4 flex flex-col gap-3">

          {/* Status Selection */}
          <div className="bg-white rounded-[26px] p-4 shadow-sm">
            <label className="text-[13px] text-[#848484] tracking-[-0.08px] block mb-3">
              Status
            </label>
            <div className="flex gap-3">
              <button
                onClick={() => setStatus('taken')}
                className={`flex-1 py-3.5 rounded-xl transition-all ${
                  status === 'taken' ? 'bg-[#67ce67] text-white' : 'bg-[#67ce67]/10 text-[#67ce67]'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path d="M1.5 4.5l3.5 3.5 7.5-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[15px] font-semibold tracking-[-0.24px]">Taken</span>
                </div>
              </button>
              <button
                onClick={() => setStatus('skipped')}
                className={`flex-1 py-3.5 rounded-xl transition-all ${
                  status === 'skipped' ? 'bg-[#eb4b62] text-white' : 'bg-[#eb4b62]/10 text-[#eb4b62]'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path d="M1.5 1.5l8 8M9.5 1.5l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                  <span className="text-[15px] font-semibold tracking-[-0.24px]">Skipped</span>
                </div>
              </button>
            </div>
          </div>

          {/* Date */}
          <div className="bg-white rounded-[26px] p-4 shadow-sm">
            <label className="text-[13px] text-[#848484] tracking-[-0.08px] block mb-2">
              Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full text-[17px] font-semibold tracking-[-0.43px] text-black bg-transparent border-none outline-none"
            />
          </div>

          {/* Time */}
          <div className="bg-white rounded-[26px] p-4 shadow-sm">
            <label className="text-[13px] text-[#848484] tracking-[-0.08px] block mb-2">
              Time
            </label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full text-[17px] font-semibold tracking-[-0.43px] text-black bg-transparent border-none outline-none"
            />
          </div>

          {/* Notes */}
          <div className="bg-white rounded-[26px] p-4 shadow-sm">
            <label className="text-[13px] text-[#848484] tracking-[-0.08px] block mb-2">
              Notes (Optional)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add any notes about this dose"
              rows={3}
              className="w-full text-[17px] tracking-[-0.43px] text-black bg-transparent border-none outline-none resize-none placeholder:text-[#c7c7cc]"
            />
          </div>
        </div>
      </div>

      {/* Bottom Action */}
      <div className="pb-8 px-4 flex-shrink-0">
        <button
          onClick={onSave}
          disabled={!isValid}
          className={`w-full py-4 rounded-full transition-opacity ${
            isValid
              ? 'bg-[#007aff] active:opacity-80'
              : 'bg-[#c7c7cc] opacity-50 cursor-not-allowed'
          }`}
        >
          <span className="text-white text-[17px] font-semibold tracking-[-0.43px]">Save</span>
        </button>
      </div>
    </div>
  );
}
