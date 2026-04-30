import { useState } from 'react';
import { VitalsCard } from './components/VitalsCard';
import { MedicationsScreen } from './components/MedicationsScreen';
import { AddMedication } from './components/AddMedication';
import { CreateReminder } from './components/CreateReminder';
import { BloodPressureScreen } from './components/BloodPressureScreen';
import { AddBPReading } from './components/AddBPReading';
import { DocumentInterpreterHub } from './components/DocumentInterpreterHub';
import { DocumentExplanation } from './components/DocumentExplanation';
import { DoctorQuestions } from './components/DoctorQuestions';
import { ReadingDocument } from './components/ReadingDocument';
import { FullExplanation } from './components/FullExplanation';
import { SavedSummaries } from './components/SavedSummaries';
import { SavedQuestionsList } from './components/SavedQuestionsList';
import { ScanDocument } from './components/ScanDocument';
import { FilesPicker } from './components/FilesPicker';
import { HealthRecordsPicker } from './components/HealthRecordsPicker';
import { ScanMedication } from './components/ScanMedication';
import { ReviewScan } from './components/ReviewScan';
import { ManualMedicationEntry } from './components/ManualMedicationEntry';
import { SetFrequency } from './components/SetFrequency';
import { SetRegularReminder } from './components/SetRegularReminder';
import { MedicationDetail } from './components/MedicationDetail';
import { LogDose } from './components/LogDose';
import { EditMedication } from './components/EditMedication';
import { DeleteConfirmation } from './components/DeleteConfirmation';
import { MyMedicationsList } from './components/MyMedicationsList';
import { ArticleHypertension } from './components/ArticleHypertension';
import { ArticleLifestyle } from './components/ArticleLifestyle';
import { IPhoneHomeScreen } from './components/IPhoneHomeScreen';
import { AppleHealthSummary } from './components/AppleHealthSummary';
import { MyInsights } from './components/MyInsights';
import { Rewards } from './components/Rewards';
import { sampleDocuments } from './data/sampleDocuments';

type Screen =
  | 'iphone-home'
  | 'health-summary'
  | 'home'
  | 'medications'
  | 'add-medication'
  | 'create-reminder'
  | 'blood-pressure'
  | 'add-bp-reading'
  | 'document-hub'
  | 'scan-document'
  | 'files-picker'
  | 'health-records-picker'
  | 'reading-document'
  | 'document-explanation'
  | 'full-explanation'
  | 'doctor-questions'
  | 'saved-summaries'
  | 'saved-questions'
  | 'scan-medication'
  | 'review-scan'
  | 'manual-medication-entry'
  | 'set-frequency'
  | 'set-regular-reminder'
  | 'medication-detail'
  | 'log-dose'
  | 'edit-medication'
  | 'delete-confirmation'
  | 'my-medications-list'
  | 'article-hypertension'
  | 'article-lifestyle'
  | 'my-insights'
  | 'rewards';

interface BPReading {
  systolic: number;
  diastolic: number;
  date: string;
  time: string;
}

interface Medication {
  id: string;
  name: string;
  dosage: string;
  instructions: string;
  frequency: 'morning' | 'evening' | 'both';
}

interface Reminder {
  id: string;
  medicationId: string;
  type: 'smart' | 'regular';
  time?: string;
  startTime?: string;
  endTime?: string;
  frequency?: 'daily' | 'weekly';
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('iphone-home');
  const [selectedDocumentId, setSelectedDocumentId] = useState<string>('1');
  const [homeMedStates, setHomeMedStates] = useState<Record<number, 'taken' | 'skipped' | null>>({ 0: null, 1: null });

  // Track saved summaries and saved questions separately
  const [savedSummaries, setSavedSummaries] = useState<Set<string>>(new Set(['1', '2', '3']));
  const [savedQuestions, setSavedQuestions] = useState<Set<string>>(new Set(['1', '2']));

  // BP readings state
  const [bpReadings, setBpReadings] = useState<BPReading[]>([
    { systolic: 122, diastolic: 78, date: '2026-04-20', time: '08:30' },
    { systolic: 125, diastolic: 80, date: '2026-04-21', time: '08:15' },
    { systolic: 130, diastolic: 84, date: '2026-04-22', time: '09:00' },
    { systolic: 126, diastolic: 81, date: '2026-04-23', time: '08:45' },
    { systolic: 124, diastolic: 79, date: '2026-04-24', time: '08:20' },
    { systolic: 127, diastolic: 82, date: '2026-04-25', time: '09:10' },
    { systolic: 128, diastolic: 82, date: '2026-04-26', time: '09:14' },
  ]);

  // Medications state
  const [medications, setMedications] = useState<Medication[]>([
    { id: '1', name: 'Lisinopril', dosage: '10 mg', instructions: 'Take with water', frequency: 'morning' },
    { id: '2', name: 'Amlodipine', dosage: '5 mg', instructions: 'Can be taken with food', frequency: 'morning' },
    { id: '3', name: 'Metoprolol', dosage: '25 mg', instructions: '', frequency: 'evening' },
  ]);

  // Reminders state
  const [reminders, setReminders] = useState<Reminder[]>([
    { id: '1', medicationId: '1', type: 'smart', startTime: '08:00', endTime: '10:00' },
  ]);

  // Temporary medication being added
  const [tempMedication, setTempMedication] = useState<Partial<Medication> | null>(null);

  // Widget state
  const [widgetState, setWidgetState] = useState<'yellow' | 'green'>('yellow');

  const selectedDocument = sampleDocuments.find(d => d.id === selectedDocumentId) || sampleDocuments[0];

  const handleHomeMedAction = (idx: number, action: 'taken' | 'skipped') => {
    if (homeMedStates[idx]) return;
    setHomeMedStates(prev => ({ ...prev, [idx]: action }));
  };

  const handleSaveSummary = (documentId: string) => {
    setSavedSummaries(prev => new Set(prev).add(documentId));
  };

  const handleUnsaveSummary = (documentId: string) => {
    setSavedSummaries(prev => {
      const newSet = new Set(prev);
      newSet.delete(documentId);
      return newSet;
    });
  };

  const handleSaveQuestions = (documentId: string) => {
    setSavedQuestions(prev => new Set(prev).add(documentId));
  };

  const handleUnsaveQuestions = (documentId: string) => {
    setSavedQuestions(prev => {
      const newSet = new Set(prev);
      newSet.delete(documentId);
      return newSet;
    });
  };

  const handleAddBPReading = (reading: BPReading) => {
    setBpReadings(prev => [...prev, reading].sort((a, b) =>
      new Date(a.date + 'T' + a.time).getTime() - new Date(b.date + 'T' + b.time).getTime()
    ));
  };

  const handleSaveMedication = (frequency: 'morning' | 'evening' | 'both') => {
    if (tempMedication && tempMedication.name && tempMedication.dosage) {
      const newMed: Medication = {
        id: Date.now().toString(),
        name: tempMedication.name,
        dosage: tempMedication.dosage,
        instructions: tempMedication.instructions || '',
        frequency,
      };
      setMedications(prev => [...prev, newMed]);
      setTempMedication(null);
    }
  };

  const handleSaveReminder = (reminder: Omit<Reminder, 'id'>) => {
    const newReminder: Reminder = {
      ...reminder,
      id: Date.now().toString(),
    };
    setReminders(prev => [...prev, newReminder]);
  };

  if (currentScreen === 'iphone-home') {
    return (
      <div className="flex items-start justify-center min-h-screen bg-[#e5e5ea] py-10">
        <IPhoneHomeScreen
          onHealthAppClick={() => setCurrentScreen('health-summary')}
          widgetState={widgetState}
          onResolveWidget={() => setWidgetState('green')}
          medications={medications}
        />
      </div>
    );
  }

  if (currentScreen === 'health-summary') {
    return (
      <div className="flex items-start justify-center min-h-screen bg-[#e5e5ea] py-10">
        <AppleHealthSummary
          onBack={() => setCurrentScreen('iphone-home')}
          onChronicDiseaseClick={() => setCurrentScreen('home')}
          widgetState={widgetState}
          medications={medications}
          onResolveWidget={() => setWidgetState('green')}
        />
      </div>
    );
  }

  if (currentScreen === 'article-hypertension') {
    return (
      <div className="flex items-start justify-center min-h-screen bg-[#e5e5ea] py-10">
        <ArticleHypertension
          onBack={() => setCurrentScreen('home')}
        />
      </div>
    );
  }

  if (currentScreen === 'article-lifestyle') {
    return (
      <div className="flex items-start justify-center min-h-screen bg-[#e5e5ea] py-10">
        <ArticleLifestyle
          onBack={() => setCurrentScreen('home')}
        />
      </div>
    );
  }

  if (currentScreen === 'my-insights') {
    return (
      <div className="flex items-start justify-center min-h-screen bg-[#e5e5ea] py-10">
        <MyInsights
          onBack={() => setCurrentScreen('home')}
        />
      </div>
    );
  }

  if (currentScreen === 'rewards') {
    return (
      <div className="flex items-start justify-center min-h-screen bg-[#e5e5ea] py-10">
        <Rewards
          onBack={() => setCurrentScreen('home')}
        />
      </div>
    );
  }

  if (currentScreen === 'document-hub') {
    const savedSummaryDocuments = sampleDocuments.filter(doc => savedSummaries.has(doc.id));
    const savedQuestionDocuments = sampleDocuments.filter(doc => savedQuestions.has(doc.id));

    return (
      <div className="flex items-start justify-center min-h-screen bg-[#e5e5ea] py-10">
        <DocumentInterpreterHub
          onBack={() => setCurrentScreen('home')}
          onSelectDocument={(source: 'scan' | 'files' | 'health-records') => {
            // Navigate to appropriate picker screen
            if (source === 'scan') {
              setCurrentScreen('scan-document');
            } else if (source === 'files') {
              setCurrentScreen('files-picker');
            } else {
              setCurrentScreen('health-records-picker');
            }
          }}
          onSavedSummary={(id) => {
            setSelectedDocumentId(id);
            setCurrentScreen('document-explanation');
          }}
          onSavedQuestions={(id) => {
            setSelectedDocumentId(id);
            setCurrentScreen('doctor-questions');
          }}
          onViewAllSummaries={() => setCurrentScreen('saved-summaries')}
          onViewAllQuestions={() => setCurrentScreen('saved-questions')}
          savedSummaryDocuments={savedSummaryDocuments}
          savedQuestionDocuments={savedQuestionDocuments}
        />
      </div>
    );
  }

  if (currentScreen === 'scan-document') {
    return (
      <div className="flex items-start justify-center min-h-screen bg-[#e5e5ea] py-10">
        <ScanDocument
          onBack={() => setCurrentScreen('document-hub')}
          onCapture={() => {
            setSelectedDocumentId('4'); // Complete Blood Count
            setCurrentScreen('reading-document');
            setTimeout(() => setCurrentScreen('document-explanation'), 2000);
          }}
        />
      </div>
    );
  }

  if (currentScreen === 'files-picker') {
    return (
      <div className="flex items-start justify-center min-h-screen bg-[#e5e5ea] py-10">
        <FilesPicker
          onBack={() => setCurrentScreen('document-hub')}
          onSelectFile={() => {
            setSelectedDocumentId('8'); // Iron Studies
            setCurrentScreen('reading-document');
            setTimeout(() => setCurrentScreen('document-explanation'), 2000);
          }}
        />
      </div>
    );
  }

  if (currentScreen === 'health-records-picker') {
    return (
      <div className="flex items-start justify-center min-h-screen bg-[#e5e5ea] py-10">
        <HealthRecordsPicker
          onBack={() => setCurrentScreen('document-hub')}
          onSelectRecord={() => {
            setSelectedDocumentId('9'); // Discharge Summary
            setCurrentScreen('reading-document');
            setTimeout(() => setCurrentScreen('document-explanation'), 2000);
          }}
        />
      </div>
    );
  }

  if (currentScreen === 'reading-document') {
    return (
      <div className="flex items-start justify-center min-h-screen bg-[#e5e5ea] py-10">
        <ReadingDocument />
      </div>
    );
  }

  if (currentScreen === 'document-explanation') {
    const hasSavedSummary = savedSummaries.has(selectedDocumentId);
    const hasSavedQuestions = savedQuestions.has(selectedDocumentId);

    return (
      <div className="flex items-start justify-center min-h-screen bg-[#e5e5ea] py-10">
        <DocumentExplanation
          onBack={() => setCurrentScreen('document-hub')}
          onQuestionsClick={() => setCurrentScreen('doctor-questions')}
          onFullExplanation={() => setCurrentScreen('full-explanation')}
          document={selectedDocument}
          hasSavedSummary={hasSavedSummary}
          hasSavedQuestions={hasSavedQuestions}
          onSaveSummary={() => handleSaveSummary(selectedDocumentId)}
          onUnsaveSummary={() => handleUnsaveSummary(selectedDocumentId)}
          onViewSavedSummaries={() => setCurrentScreen('saved-summaries')}
        />
      </div>
    );
  }

  if (currentScreen === 'full-explanation') {
    return (
      <div className="flex items-start justify-center min-h-screen bg-[#e5e5ea] py-10">
        <FullExplanation
          onBack={() => setCurrentScreen('document-explanation')}
          document={selectedDocument}
        />
      </div>
    );
  }

  if (currentScreen === 'doctor-questions') {
    return (
      <div className="flex items-start justify-center min-h-screen bg-[#e5e5ea] py-10">
        <DoctorQuestions
          onBack={() => setCurrentScreen('document-explanation')}
          document={selectedDocument}
          isSaved={savedQuestions.has(selectedDocumentId)}
          onSave={() => handleSaveQuestions(selectedDocumentId)}
          onUnsave={() => handleUnsaveQuestions(selectedDocumentId)}
          onViewSaved={() => setCurrentScreen('saved-questions')}
        />
      </div>
    );
  }

  if (currentScreen === 'saved-summaries') {
    const savedSummaryDocuments = sampleDocuments.filter(doc => savedSummaries.has(doc.id));

    return (
      <div className="flex items-start justify-center min-h-screen bg-[#e5e5ea] py-10">
        <SavedSummaries
          onBack={() => setCurrentScreen('document-hub')}
          onDocumentClick={(id) => {
            setSelectedDocumentId(id);
            setCurrentScreen('document-explanation');
          }}
          documents={savedSummaryDocuments}
        />
      </div>
    );
  }

  if (currentScreen === 'saved-questions') {
    const savedQuestionDocuments = sampleDocuments.filter(doc => savedQuestions.has(doc.id));

    return (
      <div className="flex items-start justify-center min-h-screen bg-[#e5e5ea] py-10">
        <SavedQuestionsList
          onBack={() => setCurrentScreen('document-hub')}
          onQuestionSetClick={(id) => {
            setSelectedDocumentId(id);
            setCurrentScreen('doctor-questions');
          }}
          documents={savedQuestionDocuments}
        />
      </div>
    );
  }

  if (currentScreen === 'medications') {
    const morningMeds = medications.filter(m => m.frequency === 'morning' || m.frequency === 'both');
    const eveningMeds = medications.filter(m => m.frequency === 'evening' || m.frequency === 'both');

    const displayMeds = [
      ...morningMeds.slice(0, 2).map(m => ({
        name: m.name,
        dose: `${m.dosage} · once daily`,
        note: m.instructions
      })),
      ...eveningMeds.slice(0, 1).map(m => ({
        name: m.name,
        dose: `${m.dosage} · once daily`,
        note: m.instructions
      }))
    ];

    return (
      <div className="flex items-start justify-center min-h-screen bg-[#e5e5ea] py-10">
        <MedicationsScreen
          onBack={() => setCurrentScreen('home')}
          onAddMedication={() => setCurrentScreen('add-medication')}
          onCreateReminder={() => setCurrentScreen('create-reminder')}
          onMedicationClick={() => setCurrentScreen('medication-detail')}
          onMyMedications={() => setCurrentScreen('my-medications-list')}
          medications={displayMeds}
        />
      </div>
    );
  }

  if (currentScreen === 'add-medication') {
    return (
      <div className="flex items-start justify-center min-h-screen bg-[#e5e5ea] py-10">
        <AddMedication
          onBack={() => setCurrentScreen('medications')}
          onScanMedication={() => setCurrentScreen('scan-medication')}
          onManualEntry={() => setCurrentScreen('manual-medication-entry')}
        />
      </div>
    );
  }

  if (currentScreen === 'create-reminder') {
    return (
      <div className="flex items-start justify-center min-h-screen bg-[#e5e5ea] py-10">
        <CreateReminder
          onBack={() => setCurrentScreen('medications')}
          onRegularReminder={() => setCurrentScreen('set-regular-reminder')}
          onSmartReminderSave={(startTime, endTime) => {
            handleSaveReminder({
              medicationId: '1',
              type: 'smart',
              startTime,
              endTime,
            });
            setCurrentScreen('medications');
          }}
        />
      </div>
    );
  }

  if (currentScreen === 'blood-pressure') {
    return (
      <div className="flex items-start justify-center min-h-screen bg-[#e5e5ea] py-10">
        <BloodPressureScreen
          onBack={() => setCurrentScreen('home')}
          onAddReading={() => setCurrentScreen('add-bp-reading')}
          readings={bpReadings}
        />
      </div>
    );
  }

  if (currentScreen === 'add-bp-reading') {
    return (
      <div className="flex items-start justify-center min-h-screen bg-[#e5e5ea] py-10">
        <AddBPReading
          onBack={() => setCurrentScreen('blood-pressure')}
          onSave={(reading) => {
            handleAddBPReading(reading);
            setCurrentScreen('blood-pressure');
          }}
        />
      </div>
    );
  }

  if (currentScreen === 'scan-medication') {
    return (
      <div className="flex items-start justify-center min-h-screen bg-[#e5e5ea] py-10">
        <ScanMedication
          onCancel={() => setCurrentScreen('add-medication')}
          onCapture={() => setCurrentScreen('review-scan')}
        />
      </div>
    );
  }

  if (currentScreen === 'review-scan') {
    return (
      <div className="flex items-start justify-center min-h-screen bg-[#e5e5ea] py-10">
        <ReviewScan
          onBack={() => setCurrentScreen('scan-medication')}
          onConfirm={() => setCurrentScreen('medications')}
        />
      </div>
    );
  }

  if (currentScreen === 'manual-medication-entry') {
    return (
      <div className="flex items-start justify-center min-h-screen bg-[#e5e5ea] py-10">
        <ManualMedicationEntry
          onBack={() => setCurrentScreen('add-medication')}
          onNext={(medication) => {
            setTempMedication(medication);
            setCurrentScreen('set-frequency');
          }}
        />
      </div>
    );
  }

  if (currentScreen === 'set-frequency') {
    return (
      <div className="flex items-start justify-center min-h-screen bg-[#e5e5ea] py-10">
        <SetFrequency
          onBack={() => setCurrentScreen('manual-medication-entry')}
          onComplete={(frequency) => {
            handleSaveMedication(frequency);
            setCurrentScreen('medications');
          }}
        />
      </div>
    );
  }

  if (currentScreen === 'set-regular-reminder') {
    return (
      <div className="flex items-start justify-center min-h-screen bg-[#e5e5ea] py-10">
        <SetRegularReminder
          onBack={() => setCurrentScreen('create-reminder')}
          onSave={() => setCurrentScreen('medications')}
        />
      </div>
    );
  }

  if (currentScreen === 'medication-detail') {
    return (
      <div className="flex items-start justify-center min-h-screen bg-[#e5e5ea] py-10">
        <MedicationDetail
          onBack={() => setCurrentScreen('medications')}
          onLogDose={() => setCurrentScreen('log-dose')}
          onEdit={() => setCurrentScreen('edit-medication')}
          onDelete={() => setCurrentScreen('delete-confirmation')}
        />
      </div>
    );
  }

  if (currentScreen === 'log-dose') {
    return (
      <div className="flex items-start justify-center min-h-screen bg-[#e5e5ea] py-10">
        <LogDose
          onBack={() => setCurrentScreen('medication-detail')}
          onSave={() => setCurrentScreen('medication-detail')}
        />
      </div>
    );
  }

  if (currentScreen === 'edit-medication') {
    return (
      <div className="flex items-start justify-center min-h-screen bg-[#e5e5ea] py-10">
        <EditMedication
          onBack={() => setCurrentScreen('medication-detail')}
          onSave={() => setCurrentScreen('medication-detail')}
        />
      </div>
    );
  }

  if (currentScreen === 'delete-confirmation') {
    return (
      <div className="flex items-start justify-center min-h-screen bg-[#e5e5ea] py-10">
        <DeleteConfirmation
          onBack={() => setCurrentScreen('medication-detail')}
          onConfirm={() => setCurrentScreen('medications')}
        />
      </div>
    );
  }

  if (currentScreen === 'my-medications-list') {
    return (
      <div className="flex items-start justify-center min-h-screen bg-[#e5e5ea] py-10">
        <MyMedicationsList
          onBack={() => setCurrentScreen('medications')}
          onMedicationClick={() => setCurrentScreen('medication-detail')}
          medications={medications}
        />
      </div>
    );
  }

  return (
    <div className="flex items-start justify-center min-h-screen bg-[#e5e5ea] py-10">
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

        {/* Scroll Area */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden pb-8 scrollbar-hide" style={{
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
}}>

          {/* Header with Back Button and Title */}
          <div className="px-5 pt-3 pb-4 flex items-center justify-between gap-3">
            <div className="flex items-start gap-3">
              <button
                onClick={() => setCurrentScreen('health-summary')}
                className="w-[36px] h-[36px] rounded-full bg-[#e5e5ea] flex items-center justify-center active:opacity-60 flex-shrink-0"
              >
                <svg width="13" height="21" viewBox="0 0 13 21" fill="none">
                  <path d="M10.5 2.5L2 10.5l8.5 8" stroke="#007aff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <h1 className="text-[34px] font-bold tracking-[0.37px] leading-tight">Chronic Disease Management</h1>
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

          {/* Cards */}
          <div className="flex flex-col gap-2.5 px-4">

            {/* Health Rewards */}
            <VitalsCard
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#34c759"/>
                  <path d="M8 12l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
              title="Health Rewards"
              subtitle="Active"
              color="text-[#34c759]"
              onClick={() => setCurrentScreen('rewards')}
            >
              <div className="flex items-baseline gap-1">
                <span className="text-[34px] font-extralight tracking-[-1px] leading-none text-black">$15.00</span>
              </div>
              <div className="text-[13px] text-[#848484] tracking-[-0.08px]">available balance</div>
            </VitalsCard>

            {/* Medications */}
            <VitalsCard
              icon={
                <svg width="28" height="24" viewBox="0 0 28 24" fill="none">
                  <g transform="rotate(-40 11 12)">
                    <rect x="2" y="7" width="18" height="10" rx="5" fill="#007aff"/>
                    <rect x="2" y="7" width="9" height="10" fill="rgba(255,255,255,0.3)" style={{clipPath: 'inset(0 0 0 0 round 5px 0 0 5px)'}}/>
                  </g>
                  <circle cx="21" cy="17" r="5" fill="#007aff"/>
                  <line x1="18.5" y1="17" x2="23.5" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              }
              title="My Medications"
              subtitle="Today"
              color="text-[#007aff]"
              onClick={() => setCurrentScreen('medications')}
            >
              <div className="space-y-1.5">
                {/* Morning */}
                <div className="flex items-center">
                  <div className="flex-1">
                    <div className="text-[10px] font-semibold text-[#848484] uppercase tracking-[0.3px] mb-0.5">Morning</div>
                    <div className="text-xs text-black tracking-[-0.08px] leading-tight">Lisinopril · Amlodipine</div>
                  </div>
                  <div className="flex gap-1.5">
                    <button
                      onClick={(e) => { e.stopPropagation(); handleHomeMedAction(0, 'skipped'); }}
                      disabled={!!homeMedStates[0]}
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                        homeMedStates[0] === 'skipped' ? 'bg-[#eb4b62]' : 'bg-[rgba(235,75,98,0.10)]'
                      } ${homeMedStates[0] && homeMedStates[0] !== 'skipped' ? 'opacity-20' : 'active:scale-85'}`}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M1 1l8 8M9 1L1 9" stroke={homeMedStates[0] === 'skipped' ? '#fff' : '#eb4b62'} strokeWidth="1.7" strokeLinecap="round"/>
                      </svg>
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleHomeMedAction(0, 'taken'); }}
                      disabled={!!homeMedStates[0]}
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                        homeMedStates[0] === 'taken' ? 'bg-[#67ce67]' : 'bg-[rgba(103,206,103,0.15)]'
                      } ${homeMedStates[0] && homeMedStates[0] !== 'taken' ? 'opacity-20' : 'active:scale-85'}`}
                    >
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path d="M1 4.5l3.5 3L11 1" stroke={homeMedStates[0] === 'taken' ? '#fff' : '#67ce67'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Evening */}
                <div className="flex items-center pt-1.5 border-t border-[#e6e6e6]">
                  <div className="flex-1">
                    <div className="text-[10px] font-semibold text-[#848484] uppercase tracking-[0.3px] mb-0.5">Evening</div>
                    <div className="text-xs text-black tracking-[-0.08px] leading-tight">Metoprolol</div>
                  </div>
                  <div className="flex gap-1.5">
                    <button
                      onClick={(e) => { e.stopPropagation(); handleHomeMedAction(1, 'skipped'); }}
                      disabled={!!homeMedStates[1]}
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                        homeMedStates[1] === 'skipped' ? 'bg-[#eb4b62]' : 'bg-[rgba(235,75,98,0.10)]'
                      } ${homeMedStates[1] && homeMedStates[1] !== 'skipped' ? 'opacity-20' : 'active:scale-85'}`}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M1 1l8 8M9 1L1 9" stroke={homeMedStates[1] === 'skipped' ? '#fff' : '#eb4b62'} strokeWidth="1.7" strokeLinecap="round"/>
                      </svg>
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleHomeMedAction(1, 'taken'); }}
                      disabled={!!homeMedStates[1]}
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                        homeMedStates[1] === 'taken' ? 'bg-[#67ce67]' : 'bg-[rgba(103,206,103,0.15)]'
                      } ${homeMedStates[1] && homeMedStates[1] !== 'taken' ? 'opacity-20' : 'active:scale-85'}`}
                    >
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path d="M1 4.5l3.5 3L11 1" stroke={homeMedStates[1] === 'taken' ? '#fff' : '#67ce67'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </VitalsCard>

            {/* Insights */}
            <VitalsCard
              icon={
                <svg width="18" height="26" viewBox="0 0 18 26" fill="#5856d6">
                  <path d="M9 0C5.13 0 2 3.13 2 7c0 2.6 1.4 4.9 3.5 6.2v3.3h7v-3.3C14.6 11.9 16 9.6 16 7c0-3.87-3.13-7-7-7Z"/>
                  <rect x="5.5" y="18" width="7" height="2" rx="1"/>
                  <rect x="6.5" y="21.5" width="5" height="2" rx="1"/>
                  <rect x="7.5" y="24.5" width="3" height="1.5" rx="0.75"/>
                </svg>
              }
              title="My Insights"
              subtitle="Today"
              color="text-[#5856d6]"
              onClick={() => setCurrentScreen('my-insights')}
            >
              <div className="text-[11px] font-medium uppercase tracking-[0.3px] text-[#848484] mb-1">Latest finding</div>
              <div className="text-[13px] text-black tracking-[-0.08px] leading-snug line-clamp-3">
                BP readings more stable over the past 7 days.
              </div>
            </VitalsCard>

            {/* Document Interpreter */}
            <VitalsCard
              icon={
                <svg width="20" height="26" viewBox="0 0 20 26" fill="none">
                  <rect x="0" y="4" width="20" height="22" rx="3" fill="#ff9500"/>
                  <rect x="5.5" y="0" width="9" height="7" rx="2" fill="#ff9500"/>
                  <rect x="7" y="1.5" width="6" height="3.5" rx="1.5" fill="white" fillOpacity="0.25"/>
                  <line x1="4.5" y1="11" x2="15.5" y2="11" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="4.5" y1="15" x2="15.5" y2="15" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="4.5" y1="19" x2="11.5" y2="19" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              }
              title="Document Interpreter"
              subtitle="Mar 18"
              color="text-[#ff9500]"
              onClick={() => setCurrentScreen('document-hub')}
            >
              <div className="flex items-baseline gap-1">
                <span className="text-[34px] font-extralight tracking-[-1px] leading-none text-black">3</span>
              </div>
              <div className="text-[13px] text-[#848484] tracking-[-0.08px]">documents</div>
            </VitalsCard>

            {/* Blood Pressure */}
            <VitalsCard
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#ff3b30"/>
                </svg>
              }
              title="Blood Pressure"
              subtitle={new Date(bpReadings[bpReadings.length - 1].date + 'T' + bpReadings[bpReadings.length - 1].time).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
              color="text-[#ff3b30]"
              onClick={() => setCurrentScreen('blood-pressure')}
            >
              <div className="flex items-baseline gap-1">
                <span className="text-[34px] font-extralight tracking-[-1px] leading-none text-black">{bpReadings[bpReadings.length - 1].systolic}</span>
                <span className="text-[22px] font-extralight text-[#848484] leading-none">/</span>
                <span className="text-[34px] font-extralight tracking-[-1px] leading-none text-black">{bpReadings[bpReadings.length - 1].diastolic}</span>
                <span className="text-[13px] text-[#848484] tracking-[-0.08px] self-end pb-1">mmHg</span>
              </div>
            </VitalsCard>

          </div>

          {/* Educational Articles */}
          <div className="px-4 mt-6 space-y-3">

            {/* What is Hypertension */}
            <button
              onClick={() => setCurrentScreen('article-hypertension')}
              className="w-full bg-gradient-to-br from-[#ff3b30]/8 to-[#ff3b30]/4 rounded-[20px] p-6 shadow-sm active:opacity-80 transition-opacity text-left overflow-hidden relative"
            >
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#ff3b30]/15 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="8" stroke="#ff3b30" strokeWidth="2" fill="none"/>
                      <path d="M10 6v4M10 14h.01" stroke="#ff3b30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.5px] text-[#ff3b30]/70">Health Guide</div>
                </div>
                <h3 className="text-[20px] font-bold tracking-[-0.4px] text-black leading-tight mb-2">
                  What is Hypertension?
                </h3>
                <p className="text-[15px] text-[#3c3c43]/80 tracking-[-0.24px] leading-[1.45] mb-3">
                  Understanding high blood pressure and why it matters for your long-term health.
                </p>
                <div className="flex items-center gap-1.5 text-[#ff3b30]">
                  <span className="text-[15px] font-semibold tracking-[-0.24px]">Learn more</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </button>

            {/* Lifestyle Management */}
            <button
              onClick={() => setCurrentScreen('article-lifestyle')}
              className="w-full bg-gradient-to-br from-[#34c759]/8 to-[#34c759]/4 rounded-[20px] p-6 shadow-sm active:opacity-80 transition-opacity text-left overflow-hidden relative"
            >
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#34c759]/15 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6l2-6z" stroke="#34c759" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.5px] text-[#34c759]/70">Wellness</div>
                </div>
                <h3 className="text-[20px] font-bold tracking-[-0.4px] text-black leading-tight mb-2">
                  Managing Blood Pressure Through Lifestyle
                </h3>
                <p className="text-[15px] text-[#3c3c43]/80 tracking-[-0.24px] leading-[1.45] mb-3">
                  Diet, exercise, and daily habits that help control blood pressure naturally.
                </p>
                <div className="flex items-center gap-1.5 text-[#34c759]">
                  <span className="text-[15px] font-semibold tracking-[-0.24px]">Explore tips</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}