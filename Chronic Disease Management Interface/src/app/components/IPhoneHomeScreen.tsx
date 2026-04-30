interface Medication {
  name: string;
  dosage: string;
  instructions: string;
}

interface IPhoneHomeScreenProps {
  onHealthAppClick: () => void;
  widgetState: 'yellow' | 'green';
  onResolveWidget: () => void;
  medications: Medication[];
}

export function IPhoneHomeScreen({ onHealthAppClick, widgetState, onResolveWidget, medications }: IPhoneHomeScreenProps) {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const formattedTime = `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')}`;

  const nextMedication = medications[0];

  const handleTaken = () => {
    onResolveWidget();
  };

  const handleSkip = () => {
    onResolveWidget();
  };

  return (
    <div className="relative w-[402px] h-[874px] overflow-hidden flex flex-col" style={{ borderRadius: '44px' }}>

      {/* Official iOS 26 Wallpaper */}
      <img
        src="https://www.figma.com/api/mcp/asset/62dfaf05-770f-4a2b-b63a-31e5536b164c"
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
      />

      {/* All content above wallpaper */}
      <div className="relative z-10 flex flex-col h-full">

        {/* Status Bar */}
        <div className="flex justify-start items-center px-6 pt-[21px] pb-[19px] h-[62px] flex-shrink-0">
          <span
            className="text-[17px] font-semibold text-white leading-[22px]"
            style={{ fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif", letterSpacing: '-0.2px', fontWeight: 590 }}
          >
            {formattedTime}
          </span>
        </div>

        {/* Widget Frame - iOS 26 Specs */}
        <div className="px-[26.666px] pt-[26.333px] pb-9 flex-shrink-0">
          <div
            className="w-[349px] h-[164px] rounded-[28px] px-5 py-4 flex flex-col relative overflow-hidden"
            style={{
              background: widgetState === 'yellow'
                ? 'linear-gradient(135deg, rgba(255,250,235,0.42) 0%, rgba(255,245,220,0.38) 100%)'
                : 'rgba(52,199,89,0.28)',
              backdropFilter: 'blur(50px) saturate(165%) brightness(1.15)',
              WebkitBackdropFilter: 'blur(50px) saturate(165%) brightness(1.15)',
              border: widgetState === 'yellow'
                ? '0.5px solid rgba(220,200,160,0.30)'
                : '0.5px solid rgba(52,199,89,0.35)',
              boxShadow: widgetState === 'yellow'
                ? '0 0 0 0.5px rgba(220,200,160,0.12), 0 16px 48px rgba(220,190,130,0.18), 0 1px 0 rgba(255,255,255,0.90) inset, 0 8px 24px rgba(0,0,0,0.07)'
                : '0 0 0 0.5px rgba(52,199,89,0.12), 0 16px 48px rgba(52,199,89,0.20), 0 1px 0 rgba(255,255,255,0.92) inset, 0 8px 24px rgba(0,0,0,0.06)',
              transition: 'all 0.45s cubic-bezier(0.4,0,0.2,1)',
            }}
          >
            {/* Body - Centered Content, No Header */}
            <div className="flex-1 flex flex-col items-center justify-center gap-2 relative z-10">
              {widgetState === 'yellow' ? (
                <>
                  <div className="flex items-center justify-center mb-1">
                    <svg width="48" height="24" viewBox="0 0 56 28" fill="none">
                      <rect x=".75" y=".75" width="54.5" height="26.5" rx="13.25" fill="#FFB340"/>
                      <path d="M.75 14C.75 6.68 6.68.75 14 .75H28V27.25H14C6.68 27.25.75 21.32.75 14Z" fill="white" fillOpacity="0.28"/>
                      <line x1="28" y1="1" x2="28" y2="27" stroke="white" strokeOpacity="0.45" strokeWidth="1.4"/>
                      <rect x=".75" y=".75" width="54.5" height="26.5" rx="13.25" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <p
                    className="text-[26px] font-bold text-center leading-[1.05]"
                    style={{
                      fontFamily: "ui-rounded, 'SF Pro Rounded', -apple-system, BlinkMacSystemFont, sans-serif",
                      letterSpacing: '-0.7px',
                      fontWeight: 700,
                      color: '#1c1c1e'
                    }}
                  >
                    {nextMedication?.name || 'No medication'}
                  </p>
                  <p
                    className="text-[17px] font-semibold text-center leading-[1.1]"
                    style={{
                      fontFamily: "ui-rounded, 'SF Pro Rounded', -apple-system, BlinkMacSystemFont, sans-serif",
                      letterSpacing: '-0.3px',
                      fontWeight: 600,
                      color: 'rgba(60,60,67,0.85)'
                    }}
                  >
                    {nextMedication?.dosage || ''}
                  </p>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-center mb-1">
                    <svg width="48" height="48" viewBox="0 0 52 52" fill="none">
                      <defs>
                        <radialGradient id="cg" cx="38%" cy="28%" r="62%">
                          <stop offset="0%" stopColor="white" stopOpacity="0.24"/>
                          <stop offset="100%" stopColor="white" stopOpacity="0"/>
                        </radialGradient>
                      </defs>
                      <circle cx="26" cy="26" r="26" fill="#34C759"/>
                      <circle cx="26" cy="26" r="26" fill="url(#cg)"/>
                      <path d="M14.5 27.5L21.5 34.5L37.5 17.5" stroke="white" strokeWidth="3.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p
                    className="text-[26px] font-bold text-center leading-[1.05]"
                    style={{
                      fontFamily: "ui-rounded, 'SF Pro Rounded', -apple-system, BlinkMacSystemFont, sans-serif",
                      letterSpacing: '-0.7px',
                      fontWeight: 700,
                      color: '#1c1c1e'
                    }}
                  >
                    Medication Taken
                  </p>
                </>
              )}
            </div>

            {/* Action Buttons */}
            {widgetState === 'yellow' && (
              <div className="relative z-10 grid grid-cols-2 gap-[6px] w-full mt-auto">
                <button
                  onClick={handleTaken}
                  className="h-[32px] rounded-[12px] flex items-center justify-center gap-1.5 transition-all active:scale-[0.93] active:opacity-[0.78]"
                  style={{
                    background: 'rgba(52,199,89,0.85)',
                    border: '1px solid rgba(30,150,60,0.20)',
                    color: '#ffffff',
                    fontFamily: "ui-rounded, 'SF Pro Rounded', -apple-system, sans-serif",
                    fontSize: '13px',
                    fontWeight: 600,
                    letterSpacing: '-0.15px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 13 13" fill="none">
                    <path d="M2 7L5 10.5L11 3" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Taken
                </button>
                <button
                  onClick={handleSkip}
                  className="h-[32px] rounded-[12px] flex items-center justify-center gap-1.5 transition-all active:scale-[0.93] active:opacity-[0.78]"
                  style={{
                    background: 'rgba(255,255,255,0.70)',
                    border: '1px solid rgba(60,60,67,0.25)',
                    color: '#1c1c1e',
                    fontFamily: "ui-rounded, 'SF Pro Rounded', -apple-system, sans-serif",
                    fontSize: '13px',
                    fontWeight: 600,
                    letterSpacing: '-0.15px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 13 13" fill="none">
                    <path d="M3 3L10 10M10 3L3 10" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round"/>
                  </svg>
                  Skip
                </button>
              </div>
            )}
          </div>
        </div>

        {/* App Icons Grid - Official Apple Icons */}
        <div className="flex flex-wrap justify-between px-[26px] gap-0 flex-1 content-start pt-[0.333px]" style={{ rowGap: '17px' }}>

          {/* Row 1 */}
          <div className="flex flex-col items-center gap-[5px] w-[72px]">
            <img src="https://www.figma.com/api/mcp/asset/3deb0d74-54ab-4764-b208-326ac6c2b9bc" alt="FaceTime" className="w-16 h-16 rounded-[14px] shadow-[0_1px_4px_rgba(0,0,0,0.15)]" />
            <span className="text-[12px] font-medium text-white text-center whitespace-nowrap overflow-hidden text-ellipsis max-w-[72px]" style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif", textShadow: '0 1px 6px rgba(0,0,0,0.55)', fontWeight: 510 }}>FaceTime</span>
          </div>
          <div className="flex flex-col items-center gap-[5px] w-[72px]">
            <img src="https://www.figma.com/api/mcp/asset/a2f7096d-4130-4a13-a4ed-1cd523b34c6b" alt="Calendar" className="w-16 h-16 rounded-[14px] shadow-[0_1px_4px_rgba(0,0,0,0.15)]" />
            <span className="text-[12px] font-medium text-white text-center whitespace-nowrap overflow-hidden text-ellipsis max-w-[72px]" style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif", textShadow: '0 1px 6px rgba(0,0,0,0.55)', fontWeight: 510 }}>Calendar</span>
          </div>
          <div className="flex flex-col items-center gap-[5px] w-[72px]">
            <img src="https://www.figma.com/api/mcp/asset/53240ef6-3951-4d3d-a95b-3f3f34fa1785" alt="Photos" className="w-16 h-16 rounded-[14px] shadow-[0_1px_4px_rgba(0,0,0,0.15)]" />
            <span className="text-[12px] font-medium text-white text-center whitespace-nowrap overflow-hidden text-ellipsis max-w-[72px]" style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif", textShadow: '0 1px 6px rgba(0,0,0,0.55)', fontWeight: 510 }}>Photos</span>
          </div>
          <div className="flex flex-col items-center gap-[5px] w-[72px]">
            <img src="https://www.figma.com/api/mcp/asset/7e030d9a-ea2f-41b4-80b3-7063942c889b" alt="Camera" className="w-16 h-16 rounded-[14px] shadow-[0_1px_4px_rgba(0,0,0,0.15)]" />
            <span className="text-[12px] font-medium text-white text-center whitespace-nowrap overflow-hidden text-ellipsis max-w-[72px]" style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif", textShadow: '0 1px 6px rgba(0,0,0,0.55)', fontWeight: 510 }}>Camera</span>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col items-center gap-[5px] w-[72px]">
            <img src="https://www.figma.com/api/mcp/asset/3e099eb9-95f5-4031-8a82-61e5cb7dc393" alt="Mail" className="w-16 h-16 rounded-[14px] shadow-[0_1px_4px_rgba(0,0,0,0.15)]" />
            <span className="text-[12px] font-medium text-white text-center whitespace-nowrap overflow-hidden text-ellipsis max-w-[72px]" style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif", textShadow: '0 1px 6px rgba(0,0,0,0.55)', fontWeight: 510 }}>Mail</span>
          </div>
          <div className="flex flex-col items-center gap-[5px] w-[72px]">
            <img src="https://www.figma.com/api/mcp/asset/8fef5609-6218-4806-aa96-d87131bec449" alt="Notes" className="w-16 h-16 rounded-[14px] shadow-[0_1px_4px_rgba(0,0,0,0.15)]" />
            <span className="text-[12px] font-medium text-white text-center whitespace-nowrap overflow-hidden text-ellipsis max-w-[72px]" style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif", textShadow: '0 1px 6px rgba(0,0,0,0.55)', fontWeight: 510 }}>Notes</span>
          </div>
          <div className="flex flex-col items-center gap-[5px] w-[72px]">
            <img src="https://www.figma.com/api/mcp/asset/22f63eb6-8404-4a8c-99ec-5c40b80f0c0c" alt="Reminders" className="w-16 h-16 rounded-[14px] shadow-[0_1px_4px_rgba(0,0,0,0.15)]" />
            <span className="text-[12px] font-medium text-white text-center whitespace-nowrap overflow-hidden text-ellipsis max-w-[72px]" style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif", textShadow: '0 1px 6px rgba(0,0,0,0.55)', fontWeight: 510 }}>Reminders</span>
          </div>
          <div className="flex flex-col items-center gap-[5px] w-[72px]">
            <img src="https://www.figma.com/api/mcp/asset/ba21417c-6c76-4337-b338-85a44717093d" alt="Clock" className="w-16 h-16 rounded-[14px] shadow-[0_1px_4px_rgba(0,0,0,0.15)]" />
            <span className="text-[12px] font-medium text-white text-center whitespace-nowrap overflow-hidden text-ellipsis max-w-[72px]" style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif", textShadow: '0 1px 6px rgba(0,0,0,0.55)', fontWeight: 510 }}>Clock</span>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col items-center gap-[5px] w-[72px]">
            <img src="https://www.figma.com/api/mcp/asset/bceb00b5-b163-458a-a9aa-6d2df111553e" alt="News" className="w-16 h-16 rounded-[14px] shadow-[0_1px_4px_rgba(0,0,0,0.15)]" />
            <span className="text-[12px] font-medium text-white text-center whitespace-nowrap overflow-hidden text-ellipsis max-w-[72px]" style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif", textShadow: '0 1px 6px rgba(0,0,0,0.55)', fontWeight: 510 }}>News</span>
          </div>
          <div className="flex flex-col items-center gap-[5px] w-[72px]">
            <img src="https://www.figma.com/api/mcp/asset/62388e03-8d43-4b46-8ae3-03a12d3acb10" alt="TV" className="w-16 h-16 rounded-[14px] shadow-[0_1px_4px_rgba(0,0,0,0.15)]" />
            <span className="text-[12px] font-medium text-white text-center whitespace-nowrap overflow-hidden text-ellipsis max-w-[72px]" style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif", textShadow: '0 1px 6px rgba(0,0,0,0.55)', fontWeight: 510 }}>TV</span>
          </div>
          <div className="flex flex-col items-center gap-[5px] w-[72px]">
            <img src="https://www.figma.com/api/mcp/asset/93ef4bfc-b44c-4fe0-8de3-e095d6927675" alt="Games" className="w-16 h-16 rounded-[14px] shadow-[0_1px_4px_rgba(0,0,0,0.15)]" />
            <span className="text-[12px] font-medium text-white text-center whitespace-nowrap overflow-hidden text-ellipsis max-w-[72px]" style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif", textShadow: '0 1px 6px rgba(0,0,0,0.55)', fontWeight: 510 }}>Games</span>
          </div>
          <div className="flex flex-col items-center gap-[5px] w-[72px]">
            <img src="https://www.figma.com/api/mcp/asset/eb53c4fa-c653-4404-ba42-856cab802a90" alt="App Store" className="w-16 h-16 rounded-[14px] shadow-[0_1px_4px_rgba(0,0,0,0.15)]" />
            <span className="text-[12px] font-medium text-white text-center whitespace-nowrap overflow-hidden text-ellipsis max-w-[72px]" style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif", textShadow: '0 1px 6px rgba(0,0,0,0.55)', fontWeight: 510 }}>App Store</span>
          </div>

          {/* Row 4 - with Health */}
          <div className="flex flex-col items-center gap-[5px] w-[72px]">
            <img src="https://www.figma.com/api/mcp/asset/56ee4066-2569-45db-ac0e-84d5f764475c" alt="Maps" className="w-16 h-16 rounded-[14px] shadow-[0_1px_4px_rgba(0,0,0,0.15)]" />
            <span className="text-[12px] font-medium text-white text-center whitespace-nowrap overflow-hidden text-ellipsis max-w-[72px]" style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif", textShadow: '0 1px 6px rgba(0,0,0,0.55)', fontWeight: 510 }}>Maps</span>
          </div>
          <button onClick={onHealthAppClick} className="flex flex-col items-center gap-[5px] w-[72px] active:scale-[0.88] active:opacity-85 transition-all">
            <img src="https://www.figma.com/api/mcp/asset/ede65ca7-bb15-47c5-86d4-6b99cefb8903" alt="Health" className="w-16 h-16 rounded-[14px] shadow-[0_1px_4px_rgba(0,0,0,0.15)]" />
            <span className="text-[12px] font-medium text-white text-center whitespace-nowrap overflow-hidden text-ellipsis max-w-[72px]" style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif", textShadow: '0 1px 6px rgba(0,0,0,0.55)', fontWeight: 510 }}>Health</span>
          </button>
          <div className="flex flex-col items-center gap-[5px] w-[72px]">
            <img src="https://www.figma.com/api/mcp/asset/593bc53e-4285-4443-8e4f-516d19f3f8cb" alt="Wallet" className="w-16 h-16 rounded-[14px] shadow-[0_1px_4px_rgba(0,0,0,0.15)]" />
            <span className="text-[12px] font-medium text-white text-center whitespace-nowrap overflow-hidden text-ellipsis max-w-[72px]" style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif", textShadow: '0 1px 6px rgba(0,0,0,0.55)', fontWeight: 510 }}>Wallet</span>
          </div>
          <div className="flex flex-col items-center gap-[5px] w-[72px]">
            <img src="https://www.figma.com/api/mcp/asset/eb3533a5-ab57-43cf-947e-3b3152e9bbbe" alt="Settings" className="w-16 h-16 rounded-[14px] shadow-[0_1px_4px_rgba(0,0,0,0.15)]" />
            <span className="text-[12px] font-medium text-white text-center whitespace-nowrap overflow-hidden text-ellipsis max-w-[72px]" style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif", textShadow: '0 1px 6px rgba(0,0,0,0.55)', fontWeight: 510 }}>Settings</span>
          </div>
        </div>

        {/* Search Bar */}
        <div
          className="h-[30px] mx-[26px] rounded-full flex items-center justify-center gap-1 px-3 py-[7px] flex-shrink-0"
          style={{
            background: 'rgba(0,0,0,0.20)',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
            boxShadow: 'inset 0 0 0 0.5px rgba(255,255,255,0.15)',
          }}
        >
          <span className="text-[11.5px] font-semibold text-white leading-4" style={{ fontFamily: "'SF Pro Text', -apple-system, sans-serif", letterSpacing: '-0.1px', fontWeight: 590 }}>􀊫</span>
          <span className="text-[11.5px] font-semibold text-white leading-4" style={{ fontFamily: "'SF Pro Text', -apple-system, sans-serif", letterSpacing: '-0.1px', fontWeight: 590 }}>Search</span>
        </div>

        {/* Dock - Official Apple Icons */}
        <div className="px-[17px] pt-5 pb-[17px] flex-shrink-0">
          <div
            className="flex items-center justify-between px-[19px] pt-5 pb-[19px] rounded-[28px]"
            style={{
              background: 'rgba(0,0,0,0.20)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              boxShadow: 'inset 0 0 0 0.5px rgba(255,255,255,0.16)',
            }}
          >
            <img src="https://www.figma.com/api/mcp/asset/e9667eab-9ab8-468b-9c51-c1379b745661" alt="Phone" className="w-16 h-16 rounded-[14px] shadow-[0_1px_4px_rgba(0,0,0,0.15)]" />
            <img src="https://www.figma.com/api/mcp/asset/e337ca3d-1a40-4e8a-b91d-97e3d1bb6474" alt="Safari" className="w-16 h-16 rounded-[14px] shadow-[0_1px_4px_rgba(0,0,0,0.15)]" />
            <img src="https://www.figma.com/api/mcp/asset/26037414-cccd-47e9-a0e8-33a3d4e318a8" alt="Messages" className="w-16 h-16 rounded-[14px] shadow-[0_1px_4px_rgba(0,0,0,0.15)]" />
            <img src="https://www.figma.com/api/mcp/asset/10035d3c-42ec-4c73-870c-099101558a7b" alt="Music" className="w-16 h-16 rounded-[14px] shadow-[0_1px_4px_rgba(0,0,0,0.15)]" />
          </div>
        </div>

        {/* Home Indicator */}
        <div className="h-[34px] flex items-center justify-center flex-shrink-0">
          <div className="w-[134px] h-[5px] rounded-[3px]" style={{ background: 'rgba(255,255,255,0.50)' }} />
        </div>

      </div>
    </div>
  );
}
