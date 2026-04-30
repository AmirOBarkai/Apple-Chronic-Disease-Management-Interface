interface BPReading {
  systolic: number;
  diastolic: number;
  date: string;
  time: string;
}

interface BloodPressureScreenProps {
  onBack: () => void;
  onAddReading: () => void;
  readings: BPReading[];
}

export function BloodPressureScreen({ onBack, onAddReading, readings: allReadings }: BloodPressureScreenProps) {
  // Get last 7 days of readings
  const last7Readings = allReadings.slice(-7);

  // Format for chart display
  const readings = last7Readings.map((r, idx) => {
    const date = new Date(r.date);
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return {
      day: dayNames[date.getDay()],
      systolic: r.systolic,
      diastolic: r.diastolic
    };
  });

  // Chart dimensions
  const chartWidth = 342;
  const chartHeight = 200;
  const padding = { top: 20, right: 10, bottom: 30, left: 40 };
  const innerWidth = chartWidth - padding.left - padding.right;
  const innerHeight = chartHeight - padding.top - padding.bottom;

  // Y-axis range (60-160 mmHg)
  const yMin = 60;
  const yMax = 160;

  // Calculate point positions
  const getX = (index: number) => padding.left + (index / (readings.length - 1)) * innerWidth;
  const getY = (value: number) => padding.top + innerHeight - ((value - yMin) / (yMax - yMin)) * innerHeight;

  // Create path strings
  const systolicPath = readings
    .map((r, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(r.systolic)}`)
    .join(' ');
  const diastolicPath = readings
    .map((r, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(r.diastolic)}`)
    .join(' ');

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
            <h1 className="text-[34px] font-bold tracking-[0.37px] leading-tight">Blood Pressure</h1>
          </div>
        </div>

        {/* Subtitle */}
        <div className="px-5 pb-4">
          <p className="text-[17px] text-[#848484] tracking-[-0.43px]">Hypertension</p>
        </div>

        {/* Privacy Text - ALWAYS BELOW header */}
        <div className="flex items-center gap-1.5 px-5 pb-3 text-[11px] font-medium text-[#848484] tracking-[0.06px]">
          <svg width="10" height="12" viewBox="0 0 10 12" fill="none" className="opacity-50">
            <rect x="1" y="5" width="8" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.1"/>
            <path d="M3 5V3.5a2 2 0 1 1 4 0V5" stroke="currentColor" strokeWidth="1.1"/>
          </svg>
          Your health data stays on this iPhone
        </div>

        {/* Chart Card */}
        <div className="px-4 mb-3">
          <div className="bg-white rounded-[26px] p-5 shadow-sm">
            <div className="mb-4">
              <h2 className="text-[22px] font-bold tracking-[-0.26px] text-black">
                Past Week
              </h2>
            </div>

            {/* Chart */}
            <svg width={chartWidth} height={chartHeight} className="mx-auto">
              {/* Background zones */}
              {/* High (Stage 2) - 140+ systolic */}
              <rect
                x={padding.left}
                y={padding.top}
                width={innerWidth}
                height={getY(140) - padding.top}
                fill="#ff3b30"
                opacity="0.05"
              />
              {/* Elevated/High (Stage 1) - 130-140 systolic */}
              <rect
                x={padding.left}
                y={getY(140)}
                width={innerWidth}
                height={getY(130) - getY(140)}
                fill="#ff9500"
                opacity="0.05"
              />
              {/* Elevated - 120-130 systolic */}
              <rect
                x={padding.left}
                y={getY(130)}
                width={innerWidth}
                height={getY(120) - getY(130)}
                fill="#ffcc00"
                opacity="0.05"
              />
              {/* Normal - below 120 systolic */}
              <rect
                x={padding.left}
                y={getY(120)}
                width={innerWidth}
                height={innerHeight - (getY(120) - padding.top)}
                fill="#34c759"
                opacity="0.05"
              />

              {/* Grid lines */}
              {[80, 100, 120, 140].map((value) => (
                <line
                  key={value}
                  x1={padding.left}
                  y1={getY(value)}
                  x2={chartWidth - padding.right}
                  y2={getY(value)}
                  stroke="#e6e6e6"
                  strokeWidth="1"
                />
              ))}

              {/* Y-axis labels */}
              {[80, 100, 120, 140].map((value) => (
                <text
                  key={value}
                  x={padding.left - 8}
                  y={getY(value) + 4}
                  textAnchor="end"
                  fontSize="11"
                  fill="#848484"
                  fontFamily="-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif"
                >
                  {value}
                </text>
              ))}

              {/* Systolic line (purple) */}
              <path
                d={systolicPath}
                fill="none"
                stroke="#af52de"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Systolic points */}
              {readings.map((r, i) => (
                <circle
                  key={`sys-${i}`}
                  cx={getX(i)}
                  cy={getY(r.systolic)}
                  r="4"
                  fill="#af52de"
                />
              ))}

              {/* Diastolic line (teal) */}
              <path
                d={diastolicPath}
                fill="none"
                stroke="#30b0c7"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Diastolic points */}
              {readings.map((r, i) => (
                <circle
                  key={`dia-${i}`}
                  cx={getX(i)}
                  cy={getY(r.diastolic)}
                  r="4"
                  fill="#30b0c7"
                />
              ))}

              {/* X-axis labels */}
              {readings.map((r, i) => (
                <text
                  key={r.day}
                  x={getX(i)}
                  y={chartHeight - 10}
                  textAnchor="middle"
                  fontSize="11"
                  fill="#848484"
                  fontFamily="-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif"
                >
                  {r.day}
                </text>
              ))}
            </svg>

            {/* Legend */}
            <div className="flex items-center justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#af52de]"></div>
                <span className="text-[13px] text-[#848484] tracking-[-0.08px]">Systolic</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#30b0c7]"></div>
                <span className="text-[13px] text-[#848484] tracking-[-0.08px]">Diastolic</span>
              </div>
            </div>
          </div>
        </div>

        {/* Add Reading Card */}
        <div className="px-4 mb-3">
          <button
            onClick={onAddReading}
            className="w-full bg-white rounded-[26px] p-5 shadow-sm active:opacity-60 transition-opacity text-left"
          >
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#ff3b30]/10 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 4v12M4 10h12" stroke="#ff3b30" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[17px] font-semibold tracking-[-0.43px] text-black leading-tight">
                  Add a Reading
                </h3>
                <p className="text-[13px] text-[#848484] tracking-[-0.08px] leading-[1.4] mt-1">
                  Log your blood pressure manually
                </p>
              </div>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="opacity-30 flex-shrink-0">
                <path d="M7 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
