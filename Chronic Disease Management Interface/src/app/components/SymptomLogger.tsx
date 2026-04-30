import { useState } from 'react';
import { Plus } from 'lucide-react';

interface Symptom {
  id: string;
  name: string;
  severity: number;
  time: string;
}

export function SymptomLogger() {
  const [symptoms, setSymptoms] = useState<Symptom[]>([
    { id: '1', name: 'כאב ראש', severity: 3, time: '14:30' },
    { id: '2', name: 'עייפות', severity: 2, time: '12:15' },
  ]);
  const [showForm, setShowForm] = useState(false);

  const severityColors = [
    'bg-green-100 text-green-700',
    'bg-green-200 text-green-800',
    'bg-yellow-200 text-yellow-800',
    'bg-orange-200 text-orange-800',
    'bg-red-200 text-red-800',
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[17px] font-semibold tracking-[-0.43px]">תיעוד תסמינים</h3>
        <button
          onClick={() => setShowForm(!showForm)}
          className="w-8 h-8 rounded-full bg-[#007aff] text-white flex items-center justify-center active:opacity-80 transition-opacity"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      {showForm && (
        <div className="mb-4 p-4 bg-gray-50 rounded-xl">
          <input
            type="text"
            placeholder="שם התסמין"
            className="w-full px-4 py-2 rounded-lg border border-gray-200 mb-3"
            dir="rtl"
          />
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((level) => (
              <button
                key={level}
                className={`flex-1 py-2 rounded-lg text-[15px] font-medium tracking-[-0.24px] ${severityColors[level - 1]}`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-3">
        {symptoms.map((symptom) => (
          <div key={symptom.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-3">
              <span className={`px-3 py-1 rounded-full text-[13px] font-medium tracking-[-0.08px] ${severityColors[symptom.severity - 1]}`}>
                {symptom.severity}
              </span>
              <span className="text-[17px] font-semibold tracking-[-0.43px] text-gray-900">{symptom.name}</span>
            </div>
            <span className="text-[13px] tracking-[-0.08px] text-gray-500">{symptom.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
