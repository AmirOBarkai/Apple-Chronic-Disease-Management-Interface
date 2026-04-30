import { ReactNode } from 'react';

interface VitalsCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  color: string;
  children: ReactNode;
  onClick?: () => void;
}

export function VitalsCard({ icon, title, subtitle, color, children, onClick }: VitalsCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-[26px] h-[134px] p-4 flex flex-col cursor-pointer transition-all duration-150 active:scale-[0.977] active:opacity-88"
    >
      <div className="flex items-center gap-2 mb-auto">
        <div className="w-7 h-7 flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div className={`text-[15px] font-medium tracking-[-0.24px] flex-1 ${color}`}>
          {title}
        </div>
        <div className="flex items-center gap-1 flex-shrink-0">
          <span className="text-[14px] text-[#848484]">{subtitle}</span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="opacity-40">
            <path d="M7 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <div className="flex flex-col gap-0.5">
        {children}
      </div>
    </div>
  );
}
