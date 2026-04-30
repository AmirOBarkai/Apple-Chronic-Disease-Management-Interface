import { MedicalDocument } from '../data/sampleDocuments';

interface DocumentInterpreterHubProps {
  onBack: () => void;
  onSelectDocument: (source: 'scan' | 'files' | 'health-records') => void;
  onSavedSummary: (id: string) => void;
  onSavedQuestions: (id: string) => void;
  onViewAllSummaries: () => void;
  onViewAllQuestions: () => void;
  savedSummaryDocuments: MedicalDocument[];
  savedQuestionDocuments: MedicalDocument[];
}

export function DocumentInterpreterHub({ onBack, onSelectDocument, onSavedSummary, onSavedQuestions, onViewAllSummaries, onViewAllQuestions, savedSummaryDocuments, savedQuestionDocuments }: DocumentInterpreterHubProps) {
  const summaries = savedSummaryDocuments.slice(0, 3);
  const questions = savedQuestionDocuments.slice(0, 2);
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
            <h1 className="text-[34px] font-bold tracking-[0.37px] leading-tight">Document Interpreter</h1>
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
            Get clear explanations of your medical documents in plain language.
          </p>
        </div>

        {/* Primary Entry Card - Choose a document */}
        <div className="px-4 mb-3">
          <div className="bg-white rounded-[26px] p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-5 pb-5 border-b border-[#e6e6e6]">
              <div className="w-12 h-12 rounded-full bg-[rgba(255,149,0,0.09)] flex items-center justify-center flex-shrink-0">
                <svg width="24" height="30" viewBox="0 0 20 26" fill="none">
                  <rect x="0" y="4" width="20" height="22" rx="3" fill="#ff9500"/>
                  <rect x="5.5" y="0" width="9" height="7" rx="2" fill="#ff9500"/>
                  <rect x="7" y="1.5" width="6" height="3.5" rx="1.5" fill="white" fillOpacity="0.25"/>
                  <line x1="4.5" y1="11" x2="15.5" y2="11" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="4.5" y1="15" x2="15.5" y2="15" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="4.5" y1="19" x2="11.5" y2="19" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-[13px] font-medium uppercase tracking-[0.06px] text-[#848484] mb-0.5">
                  Choose Source
                </p>
                <p className="text-[15px] text-black tracking-[-0.24px]">
                  Select how to import your document
                </p>
              </div>
            </div>

            <div className="space-y-0">
              <button
                onClick={() => onSelectDocument('scan')}
                className="w-full py-4 flex items-center justify-between active:opacity-60 transition-opacity border-b border-[#e6e6e6]"
              >
                <span className="text-[17px] tracking-[-0.43px] text-black">Scan a document</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="opacity-30">
                  <path d="M7 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <button
                onClick={() => onSelectDocument('files')}
                className="w-full py-4 flex items-center justify-between active:opacity-60 transition-opacity border-b border-[#e6e6e6]"
              >
                <span className="text-[17px] tracking-[-0.43px] text-black">Choose from Files</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="opacity-30">
                  <path d="M7 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <button
                onClick={() => onSelectDocument('health-records')}
                className="w-full py-4 flex items-center justify-between active:opacity-60 transition-opacity"
              >
                <span className="text-[17px] tracking-[-0.43px] text-black">Choose from Health Records</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="opacity-30">
                  <path d="M7 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Saved Content - Unified Block */}
        <div className="px-4 mb-3">
          <div className="bg-white rounded-[26px] p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-5 pb-5 border-b border-[#e6e6e6]">
              <div className="w-12 h-12 rounded-full bg-[rgba(255,149,0,0.09)] flex items-center justify-center flex-shrink-0">
                <svg width="24" height="30" viewBox="0 0 20 26" fill="none">
                  <rect x="0" y="4" width="20" height="22" rx="3" fill="#ff9500"/>
                  <rect x="5.5" y="0" width="9" height="7" rx="2" fill="#ff9500"/>
                  <rect x="7" y="1.5" width="6" height="3.5" rx="1.5" fill="white" fillOpacity="0.25"/>
                  <line x1="4.5" y1="11" x2="15.5" y2="11" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="4.5" y1="15" x2="15.5" y2="15" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="4.5" y1="19" x2="11.5" y2="19" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-[13px] font-medium uppercase tracking-[0.06px] text-[#848484] mb-0.5">
                  Saved Content
                </p>
                <p className="text-[15px] text-black tracking-[-0.24px]">
                  Access your saved summaries and questions
                </p>
              </div>
            </div>

            <div className="space-y-0">
              <button
                onClick={onViewAllSummaries}
                className="w-full py-4 flex items-center justify-between active:opacity-60 transition-opacity border-b border-[#e6e6e6]"
              >
                <div className="flex-1 text-left">
                  <span className="text-[17px] tracking-[-0.43px] text-black block">Saved Summaries</span>
                  <span className="text-[13px] text-[#848484] tracking-[-0.08px] block mt-0.5">
                    {summaries.length} {summaries.length === 1 ? 'summary' : 'summaries'}
                  </span>
                </div>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="opacity-30">
                  <path d="M7 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <button
                onClick={onViewAllQuestions}
                className="w-full py-4 flex items-center justify-between active:opacity-60 transition-opacity"
              >
                <div className="flex-1 text-left">
                  <span className="text-[17px] tracking-[-0.43px] text-black block">Questions for Your Next Visit</span>
                  <span className="text-[13px] text-[#848484] tracking-[-0.08px] block mt-0.5">
                    {questions.length} question {questions.length === 1 ? 'set' : 'sets'}
                  </span>
                </div>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="opacity-30">
                  <path d="M7 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
