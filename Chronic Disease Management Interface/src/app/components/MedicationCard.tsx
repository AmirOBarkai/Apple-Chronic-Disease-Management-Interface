import { Clock, Check } from 'lucide-react';
import { useState } from 'react';

interface MedicationCardProps {
  name: string;
  dosage: string;
  time: string;
  taken: boolean;
}

export function MedicationCard({ name, dosage, time }: MedicationCardProps) {
  const [taken, setTaken] = useState(false);

  return (
    <div className="bg-white rounded-[26px] p-4 shadow-sm flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setTaken(!taken)}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
            taken ? 'bg-[#67ce67] text-white' : 'bg-[#f2f2f7] text-[#848484]'
          }`}
        >
          <Check className="w-5 h-5" />
        </button>
        <div>
          <p className={`text-[17px] font-semibold tracking-[-0.43px] ${taken ? 'line-through text-[#848484]' : 'text-black'}`}>{name}</p>
          <p className="text-[13px] text-[#848484] tracking-[-0.08px] mt-0.5">{dosage}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-[#848484]">
        <Clock className="w-4 h-4" />
        <span className="text-[13px] tracking-[-0.08px]">{time}</span>
      </div>
    </div>
  );
}
