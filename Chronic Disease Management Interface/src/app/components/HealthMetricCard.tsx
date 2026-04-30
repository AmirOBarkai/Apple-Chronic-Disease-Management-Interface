import { ArrowUp, ArrowDown } from 'lucide-react';

interface HealthMetricCardProps {
  title: string;
  value: string;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  percentage?: string;
  icon: React.ReactNode;
  color: string;
}

export function HealthMetricCard({ title, value, unit, trend, percentage, icon, color }: HealthMetricCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${color}`}>
          {icon}
        </div>
        {percentage && (
          <div className={`flex items-center gap-1 ${trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-gray-600'}`}>
            {trend === 'up' && <ArrowUp className="w-4 h-4" />}
            {trend === 'down' && <ArrowDown className="w-4 h-4" />}
            <span className="text-[13px] font-medium tracking-[-0.08px]">{percentage}</span>
          </div>
        )}
      </div>
      <div>
        <p className="text-[#848484] text-[13px] tracking-[-0.08px] mb-1">{title}</p>
        <p className="text-[34px] font-extralight tracking-[-1px] leading-none">
          {value}
          <span className="text-[17px] tracking-[-0.24px] text-[#848484] ml-1">{unit}</span>
        </p>
      </div>
    </div>
  );
}
