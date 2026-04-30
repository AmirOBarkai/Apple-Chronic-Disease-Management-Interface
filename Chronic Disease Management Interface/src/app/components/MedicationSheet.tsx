import { useState } from 'react';

interface Medication {
  name: string;
  dose: string;
  note: string;
}

interface MedicationSheetProps {
  isOpen: boolean;
  onClose: () => void;
  medications: Medication[];
}

export function MedicationSheet({ isOpen, onClose, medications }: MedicationSheetProps) {
  const [states, setStates] = useState<Record<number, 'taken' | 'skipped' | null>>({});

  const handleAction = (index: number, action: 'taken' | 'skipped') => {
    if (states[index]) return;
    setStates(prev => ({ ...prev, [index]: action }));
  };

  const allResolved = medications.every((_, idx) => states[idx]);

  return (
    <>
      <div
        className={`fixed inset-0 transition-all duration-300 ${
          isOpen ? 'bg-black/25 backdrop-blur-[8px] pointer-events-auto' : 'bg-black/0 backdrop-blur-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed left-0 right-0 bottom-0 bg-white rounded-t-[38px] pb-12 transition-transform duration-[380ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ maxWidth: '390px', margin: '0 auto' }}
      >
        <div className="w-9 h-[5px] bg-[#e6e6e6] rounded-full mx-auto mt-2.5" />

        <div className="px-5 pt-5">
          <div className="text-[11px] font-semibold tracking-[0.06px] uppercase text-[#30b0c7] mb-1">
            Medication reminder
          </div>
          <div className="text-[22px] font-bold tracking-[-0.26px] leading-tight">
            Did you take your medications?
          </div>
          <div className="text-[15px] text-[#848484] tracking-[-0.24px] mt-1">
            Morning doses · 8:00 AM
          </div>
        </div>

        {/* Action Blocks */}
        <div className="mt-5 mx-4 flex flex-col gap-2">
          <button className="w-full bg-white rounded-[26px] p-4 shadow-sm active:opacity-60 transition-opacity text-left">
            <div className="flex items-center justify-between gap-3">
              <div className="flex-1 min-w-0">
                <h3 className="text-[17px] font-semibold tracking-[-0.43px] text-black leading-tight">
                  Add a New Medication
                </h3>
                <p className="text-[13px] text-[#848484] tracking-[-0.08px] leading-[1.4] mt-1">
                  Add a prescription, supplement, or vitamin
                </p>
              </div>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="opacity-30 flex-shrink-0">
                <path d="M7 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>

          <button className="w-full bg-white rounded-[26px] p-4 shadow-sm active:opacity-60 transition-opacity text-left">
            <div className="flex items-center justify-between gap-3">
              <div className="flex-1 min-w-0">
                <h3 className="text-[17px] font-semibold tracking-[-0.43px] text-black leading-tight">
                  Create a New Reminder
                </h3>
                <p className="text-[13px] text-[#848484] tracking-[-0.08px] leading-[1.4] mt-1">
                  Set a time and schedule for a medication
                </p>
              </div>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="opacity-30 flex-shrink-0">
                <path d="M7 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>

          <button className="w-full bg-white rounded-[26px] p-4 shadow-sm active:opacity-60 transition-opacity text-left">
            <div className="flex items-center justify-between gap-3">
              <div className="flex-1 min-w-0">
                <h3 className="text-[17px] font-semibold tracking-[-0.43px] text-black leading-tight">
                  Your Medications
                </h3>
                <p className="text-[13px] text-[#848484] tracking-[-0.08px] leading-[1.4] mt-1">
                  View today's medications and update status
                </p>
              </div>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="opacity-30 flex-shrink-0">
                <path d="M7 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
        </div>

        <div className="mt-4 mx-4 flex flex-col gap-2">
          {medications.map((med, idx) => (
            <div
              key={idx}
              className={`bg-[#f2f2f7] rounded-2xl p-3.5 flex items-center justify-between gap-2.5 transition-opacity ${
                states[idx] ? 'opacity-45' : ''
              }`}
            >
              <div className="flex-1">
                <div className="text-[17px] font-semibold tracking-[-0.43px]">{med.name}</div>
                <div className="text-[13px] text-[#848484] tracking-[-0.08px] mt-0.5">{med.dose}</div>
                <div className="text-[13px] text-[#848484] tracking-[-0.08px] mt-0.5">{med.note}</div>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <button
                  onClick={() => handleAction(idx, 'skipped')}
                  disabled={!!states[idx]}
                  className={`w-11 h-11 rounded-full flex items-center justify-center transition-all ${
                    states[idx] === 'skipped'
                      ? 'bg-[#ff3b30]'
                      : 'bg-[rgba(255,59,48,0.12)] active:scale-[0.87]'
                  }`}
                >
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M1.5 1.5l10 10M11.5 1.5l-10 10" stroke={states[idx] === 'skipped' ? '#fff' : '#ff3b30'} strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
                <button
                  onClick={() => handleAction(idx, 'taken')}
                  disabled={!!states[idx]}
                  className={`w-11 h-11 rounded-full flex items-center justify-center transition-all ${
                    states[idx] === 'taken'
                      ? 'bg-[#34c759]'
                      : 'bg-[rgba(52,199,89,0.14)] active:scale-[0.87]'
                  }`}
                >
                  <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
                    <path d="M1.5 5.5l4.5 4L14.5 1" stroke={states[idx] === 'taken' ? '#fff' : '#34c759'} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {allResolved && (
          <div className="mt-3 mx-4 bg-[rgba(52,199,89,0.12)] rounded-2xl p-3.5 flex items-center gap-3">
            <div className="w-8 h-8 bg-[#34c759] rounded-full flex items-center justify-center flex-shrink-0">
              <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
                <path d="M1.5 5.5l4.5 4L14.5 1" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="text-[15px] font-medium text-[#34c759] tracking-[-0.24px] leading-snug">
              All medications logged for this morning.
            </div>
          </div>
        )}

        <button
          onClick={onClose}
          className="mt-3.5 mx-4 w-[calc(100%-32px)] py-3.5 bg-[rgba(120,120,128,0.16)] rounded-2xl text-[17px] font-semibold text-[#007aff] tracking-[-0.43px] active:opacity-60 transition-opacity"
        >
          Done
        </button>
      </div>
    </>
  );
}
