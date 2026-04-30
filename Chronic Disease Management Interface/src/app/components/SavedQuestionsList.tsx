import { MedicalDocument } from '../data/sampleDocuments';

interface SavedQuestionsListProps {
  onBack: () => void;
  onQuestionSetClick: (id: string) => void;
  documents: MedicalDocument[];
}

export function SavedQuestionsList({ onBack, onQuestionSetClick, documents }: SavedQuestionsListProps) {
  const documentsWithQuestions = documents;

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
            <h1 className="text-[34px] font-bold tracking-[0.37px] leading-tight">Questions for Your Next Visit</h1>
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
            {documentsWithQuestions.length} question {documentsWithQuestions.length === 1 ? 'set' : 'sets'} saved
          </p>
        </div>

        {/* Question Sets List */}
        <div className="px-4 space-y-3">
          {documentsWithQuestions.map((doc) => (
            <button
              key={doc.id}
              onClick={() => onQuestionSetClick(doc.id)}
              className="w-full bg-white rounded-[26px] p-5 shadow-sm active:opacity-60 transition-opacity"
            >
              <div className="text-left">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-[17px] font-semibold tracking-[-0.43px] text-black flex-1 pr-2">
                    {doc.title}
                  </h3>
                  <span className="text-[13px] text-[#848484] tracking-[-0.08px] flex-shrink-0">
                    {doc.questions.length} questions
                  </span>
                </div>
                <p className="text-[13px] text-[#848484] tracking-[-0.08px] mb-2">
                  {doc.type} · {doc.date}
                </p>
                <p className="text-[15px] text-[#848484] tracking-[-0.24px] leading-[1.4]">
                  {doc.questions[0]}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
