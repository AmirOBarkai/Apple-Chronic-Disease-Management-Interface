import { useState } from 'react';

interface EditMedicationProps {
  onBack: () => void;
  onSave: () => void;
}

export function EditMedication({ onBack, onSave }: EditMedicationProps) {
  const [medicationName, setMedicationName] = useState('Lisinopril');
  const [dosage, setDosage] = useState('10 mg');
  const [frequency, setFrequency] = useState<'morning' | 'evening' | 'both'>('morning');
  const [time, setTime] = useState('08:00');
  const [instructions, setInstructions] = useState('Take with water');

  const isValid = medicationName.trim().length > 0 && dosage.trim().length > 0;

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
            <h1 className="text-[34px] font-bold tracking-[0.37px] leading-tight">Edit Medication</h1>
          </div>
        </div>

        {/* Privacy Text - ALWAYS BELOW header */}
        <div className="flex items-center gap-1.5 px-5 pb-3.5 text-[11px] font-medium text-[#848484] tracking-[0.06px]">
          <svg width="10" height="12" viewBox="0 0 10 12" fill="none" className="opacity-50">
            <rect x="1" y="5" width="8" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.1"/>
            <path d="M3 5V3.5a2 2 0 1 1 4 0V5" stroke="currentColor" strokeWidth="1.1"/>
          </svg>
          Your health data stays on this iPhone
        </div>

        {/* Form Fields */}
        <div className="px-4 flex flex-col gap-3">

          {/* Medication Name */}
          <div className="bg-white rounded-[26px] p-4 shadow-sm">
            <label className="text-[13px] text-[#848484] tracking-[-0.08px] block mb-2">
              Medication Name
            </label>
            <input
              type="text"
              value={medicationName}
              onChange={(e) => setMedicationName(e.target.value)}
              className="w-full text-[17px] font-semibold tracking-[-0.43px] text-black bg-transparent border-none outline-none"
            />
          </div>

          {/* Dosage */}
          <div className="bg-white rounded-[26px] p-4 shadow-sm">
            <label className="text-[13px] text-[#848484] tracking-[-0.08px] block mb-2">
              Dosage
            </label>
            <input
              type="text"
              value={dosage}
              onChange={(e) => setDosage(e.target.value)}
              className="w-full text-[17px] font-semibold tracking-[-0.43px] text-black bg-transparent border-none outline-none"
            />
          </div>

          {/* Frequency */}
          <div className="bg-white rounded-[26px] p-4 shadow-sm">
            <label className="text-[13px] text-[#848484] tracking-[-0.08px] block mb-3">
              Frequency
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setFrequency('morning')}
                className={`flex-1 py-2.5 rounded-xl transition-all ${
                  frequency === 'morning' ? 'bg-[#007aff]/15 border-2 border-[#007aff] text-[#007aff]' : 'bg-[#f2f2f7] border-2 border-transparent text-black'
                }`}
              >
                <span className="text-[15px] font-medium tracking-[-0.24px]">Morning</span>
              </button>
              <button
                onClick={() => setFrequency('evening')}
                className={`flex-1 py-2.5 rounded-xl transition-all ${
                  frequency === 'evening' ? 'bg-[#007aff]/15 border-2 border-[#007aff] text-[#007aff]' : 'bg-[#f2f2f7] border-2 border-transparent text-black'
                }`}
              >
                <span className="text-[15px] font-medium tracking-[-0.24px]">Evening</span>
              </button>
              <button
                onClick={() => setFrequency('both')}
                className={`flex-1 py-2.5 rounded-xl transition-all ${
                  frequency === 'both' ? 'bg-[#007aff]/15 border-2 border-[#007aff] text-[#007aff]' : 'bg-[#f2f2f7] border-2 border-transparent text-black'
                }`}
              >
                <span className="text-[15px] font-medium tracking-[-0.24px]">Both</span>
              </button>
            </div>
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

          {/* Instructions */}
          <div className="bg-white rounded-[26px] p-4 shadow-sm">
            <label className="text-[13px] text-[#848484] tracking-[-0.08px] block mb-2">
              Instructions (Optional)
            </label>
            <textarea
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="e.g., Take with food"
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
          <span className="text-white text-[17px] font-semibold tracking-[-0.43px]">Save Changes</span>
        </button>
      </div>
    </div>
  );
}
