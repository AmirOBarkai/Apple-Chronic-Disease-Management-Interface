import { MedicalDocument } from '../data/sampleDocuments';

interface DocumentExplanationProps {
  onBack: () => void;
  onQuestionsClick: () => void;
  onFullExplanation: () => void;
  document: MedicalDocument;
  hasSavedSummary: boolean;
  hasSavedQuestions: boolean;
  onSaveSummary: () => void;
  onUnsaveSummary: () => void;
  onViewSavedSummaries: () => void;
}

export function DocumentExplanation({ onBack, onQuestionsClick, onFullExplanation, document, hasSavedSummary, hasSavedQuestions, onSaveSummary, onUnsaveSummary, onViewSavedSummaries }: DocumentExplanationProps) {
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
            <h1 className="text-[34px] font-bold tracking-[0.37px] leading-tight">Document Summary</h1>
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

        {/* Document Card - Compact */}
        <div className="px-4 mb-3">
          <div className="bg-white rounded-[26px] p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[rgba(255,149,0,0.09)] flex items-center justify-center flex-shrink-0">
                <svg width="16" height="20" viewBox="0 0 20 26" fill="none">
                  <rect x="0" y="4" width="20" height="22" rx="3" fill="#ff9500"/>
                  <rect x="5.5" y="0" width="9" height="7" rx="2" fill="#ff9500"/>
                  <rect x="7" y="1.5" width="6" height="3.5" rx="1.5" fill="white" fillOpacity="0.25"/>
                  <line x1="4.5" y1="11" x2="15.5" y2="11" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="4.5" y1="15" x2="15.5" y2="15" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="4.5" y1="19" x2="11.5" y2="19" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-[17px] font-semibold tracking-[-0.43px] leading-tight text-black truncate">
                  {document.title}
                </h2>
                <p className="text-[13px] text-[#848484] tracking-[-0.08px] mt-0.5">
                  {document.type} · {document.date}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Card */}
        <div className="px-4 mb-3">
          <div className="bg-white rounded-[26px] p-5 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.06px] text-[#848484] mb-3">
              Plain-language summary
            </p>
            <p className="text-[17px] text-black tracking-[-0.43px] leading-[1.47]">
              {document.summary}
            </p>
          </div>
        </div>

        {/* Actions Card */}
        <div className="px-4">
          <div className="bg-white rounded-[26px] shadow-sm overflow-hidden">
            <button
              onClick={onFullExplanation}
              className="w-full px-5 py-[18px] flex items-center justify-between border-b border-[#e6e6e6] active:opacity-60 transition-opacity"
            >
              <div className="flex-1 text-left">
                <span className="text-[17px] tracking-[-0.43px] text-black block">Read full explanation</span>
              </div>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="opacity-30 flex-shrink-0">
                <path d="M7 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button
              onClick={onQuestionsClick}
              className="w-full px-5 py-[18px] flex items-center justify-between border-b border-[#e6e6e6] active:opacity-60 transition-opacity"
            >
              <div className="flex-1 text-left">
                <span className="text-[17px] tracking-[-0.43px] text-black block">Questions for your next doctor visit</span>
              </div>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="opacity-30 flex-shrink-0">
                <path d="M7 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Save Summary - Always show, toggle between saved/unsaved */}
            {!hasSavedSummary ? (
              <button
                onClick={onSaveSummary}
                className="w-full px-5 py-[18px] flex items-center justify-between active:opacity-60 transition-opacity"
              >
                <div className="flex-1 text-left">
                  <span className="text-[17px] tracking-[-0.43px] text-black block">Save summary</span>
                </div>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="opacity-30 flex-shrink-0">
                  <path d="M7 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            ) : (
              <button
                onClick={onUnsaveSummary}
                className="w-full px-5 py-[18px] flex items-center gap-3 active:opacity-60 transition-opacity"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0">
                  <circle cx="9" cy="9" r="8" fill="#34c759"/>
                  <path d="M5.5 9l2.5 2.5 4.5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="flex-1 text-left">
                  <span className="text-[17px] tracking-[-0.43px] text-black block">Saved</span>
                  <span className="text-[13px] text-[#848484] tracking-[-0.08px] block mt-0.5">
                    Tap to remove from Saved Summaries
                  </span>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
