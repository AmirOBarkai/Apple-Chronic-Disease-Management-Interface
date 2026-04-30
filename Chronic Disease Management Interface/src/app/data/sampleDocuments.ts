export interface KeyTerm {
  term: string;
  simple_definition: string;
}

export interface MedicalDocument {
  id: string;
  title: string;
  type: string;
  source: string;
  date: string;
  takeaway: string;
  summary: string;
  keyTakeaway: string;
  questions: string[];
  long_summary?: string;
  key_terms?: KeyTerm[];
  safety_note?: string;
}

export const sampleDocuments: MedicalDocument[] = [
  {
    id: "1",
    title: "24-Hour Blood Pressure Monitor Results",
    type: "Blood pressure report",
    source: "Cardiology Associates",
    date: "Apr 20",
    takeaway: "Your blood pressure was monitored continuously for 24 hours to see how it changes throughout the day and night.",
    summary: "This report shows your blood pressure measurements taken automatically every 30 minutes over a full day and night while you wore a portable monitor.",
    keyTakeaway: "The 24-hour monitoring provides your doctor a complete picture of your blood pressure patterns during different activities and sleep.",
    questions: [
      "Are my daytime and nighttime blood pressure averages in a healthy range?",
      "Is my blood pressure dipping enough at night, or do I need treatment adjustments?",
      "Were there any specific times of day when my blood pressure was too high or too low?",
      "Based on these results, should we adjust my medication timing or dosage?",
      "How often should I repeat this 24-hour monitoring test?"
    ],
    long_summary: "Ambulatory blood pressure monitoring gives your doctor a complete picture of how your blood pressure changes throughout your normal daily activities and during sleep. Unlike a single reading at the doctor's office, this 24-hour test captures your blood pressure patterns during different activities like work, meals, exercise, and rest. The results help your doctor understand if your current treatment is working well throughout the day and night, and whether adjustments might be needed to better control your hypertension.",
    key_terms: [
      {
        term: "Ambulatory monitoring",
        simple_definition: "Wearing a portable device that automatically measures your blood pressure at regular intervals while you go about your normal day"
      },
      {
        term: "Daytime average",
        simple_definition: "The average of all blood pressure readings taken while you were awake and active"
      },
      {
        term: "Nighttime average",
        simple_definition: "The average of all readings taken while you were sleeping, which should normally be lower than daytime readings"
      },
      {
        term: "Dipping pattern",
        simple_definition: "How much your blood pressure naturally drops during sleep — healthy blood pressure typically 'dips' 10-20% at night"
      },
      {
        term: "White coat effect",
        simple_definition: "When blood pressure is higher at the doctor's office than during normal daily life, often due to stress or anxiety"
      }
    ],
    safety_note: "This explanation is for informational purposes only and does not replace medical advice. Always discuss your results and treatment decisions with your healthcare provider."
  },
  {
    id: "2",
    title: "Hypertension Diagnosis Letter",
    type: "Doctor's letter",
    source: "Primary Care Clinic",
    date: "Mar 18",
    takeaway: "Official letter from your doctor confirming your high blood pressure diagnosis and treatment plan.",
    summary: "A letter from your doctor confirming your high blood pressure diagnosis and outlining your initial treatment plan.",
    keyTakeaway: "This letter documents your diagnosis and provides important information for your health records and other healthcare providers.",
    questions: [
      "What stage of hypertension do I have, and what does that mean for my treatment?",
      "What is my specific target blood pressure, and how long might it take to reach it?",
      "Are there any warning signs I should watch for that would require immediate medical attention?",
      "How often should I check in with you to monitor my progress?",
      "What lifestyle changes will have the biggest impact on lowering my blood pressure?"
    ],
    long_summary: "This letter documents your hypertension diagnosis based on multiple elevated blood pressure readings during recent visits. It explains why treatment is recommended, what your target blood pressure should be, and describes your personalized treatment plan including lifestyle changes and medications. Your doctor has written this to ensure you understand your diagnosis, the health risks of untreated high blood pressure, and the importance of following your treatment plan.",
    key_terms: [
      {
        term: "Stage 1 hypertension",
        simple_definition: "When your blood pressure consistently measures between 130-139 over 80-89, requiring lifestyle changes and possibly medication"
      },
      {
        term: "Stage 2 hypertension",
        simple_definition: "When your blood pressure is 140/90 or higher, usually requiring both medication and lifestyle changes"
      },
      {
        term: "Target blood pressure",
        simple_definition: "The blood pressure goal your doctor wants you to reach and maintain, typically below 130/80 for most adults with hypertension"
      },
      {
        term: "Cardiovascular risk",
        simple_definition: "The chance of developing heart disease, stroke, or other heart and blood vessel problems"
      }
    ],
    safety_note: "This explanation is for informational purposes only and does not replace medical advice. Always discuss your diagnosis and treatment plan with your healthcare provider."
  },
  {
    id: "3",
    title: "Blood Pressure Trend Summary",
    type: "Trend report",
    source: "Heart Health Center",
    date: "Apr 15",
    takeaway: "A chart showing how your blood pressure has changed over the past several weeks.",
    summary: "A chart showing how your blood pressure measurements have changed over the past several weeks or months.",
    keyTakeaway: "Tracking trends over time helps you and your doctor see if your treatment plan is working effectively.",
    questions: [
      "Is my blood pressure trending in the right direction with my current treatment?",
      "Are there certain times of day or days of the week when my blood pressure is consistently higher?",
      "Is my blood pressure varying too much between readings, and if so, what could be causing that?",
      "Based on these trends, do we need to adjust my medication or lifestyle plan?",
      "How often should I be checking my blood pressure at home?"
    ],
    long_summary: "This trend report compiles all your blood pressure readings from recent doctor visits and home monitoring into one view, making it easier to see patterns and progress over time. The report helps you and your doctor evaluate whether your current treatment plan is effectively controlling your blood pressure, or if adjustments are needed. Trend reports are especially valuable because a single reading can vary due to stress, activity, or time of day, but patterns over time give a more accurate picture of your blood pressure control.",
    key_terms: [
      {
        term: "Blood pressure trend",
        simple_definition: "The pattern showing whether your blood pressure is improving, staying stable, or getting worse over time"
      },
      {
        term: "Home monitoring",
        simple_definition: "Taking your own blood pressure readings at home with a personal monitor, which helps track daily patterns"
      },
      {
        term: "Variability",
        simple_definition: "How much your blood pressure changes from one reading to another — large swings can indicate poor control"
      },
      {
        term: "Treatment response",
        simple_definition: "How well your blood pressure has improved since starting or adjusting medications"
      }
    ],
    safety_note: "This explanation is for informational purposes only and does not replace medical advice. Always discuss your blood pressure trends and treatment adjustments with your healthcare provider."
  },
  {
    id: "4",
    title: "Hospital Discharge Summary",
    type: "Hospital record",
    source: "Memorial Hospital",
    date: "Apr 22",
    takeaway: "Summary of your recent hospital stay for a blood pressure emergency.",
    summary: "A summary of your recent hospital stay, including why you were admitted, what treatment you received, and instructions for continuing your care at home.",
    keyTakeaway: "This document is essential for ensuring your follow-up care continues what was started in the hospital.",
    questions: [
      "What caused my blood pressure emergency, and how can we prevent it from happening again?",
      "How have my medications changed from before my hospital stay, and why?",
      "What specific activities should I avoid, and for how long?",
      "What warning signs mean I should go to the emergency room right away?",
      "When should I follow up with you, and what tests or monitoring will I need?"
    ],
    long_summary: "This discharge summary provides a complete record of your hospital visit, including the reason for admission (such as a hypertensive emergency, stroke, heart attack, or other complication related to high blood pressure), the tests and treatments you received, and any changes to your medications or care plan. The summary is important because it bridges your hospital care with your ongoing outpatient care, ensuring your regular doctor knows exactly what happened and what follow-up care you need. It also includes specific instructions about medications, activity restrictions, warning signs to watch for, and when to schedule follow-up appointments.",
    key_terms: [
      {
        term: "Hypertensive crisis",
        simple_definition: "A dangerous spike in blood pressure (usually above 180/120) that requires immediate medical treatment to prevent organ damage"
      },
      {
        term: "Admission diagnosis",
        simple_definition: "The medical problem or condition that led to your hospital admission"
      },
      {
        term: "Discharge medications",
        simple_definition: "The complete list of medications you should take at home after leaving the hospital, including any new prescriptions or dose changes"
      },
      {
        term: "Follow-up care",
        simple_definition: "The medical appointments, tests, or check-ins you need to schedule after leaving the hospital to ensure proper recovery"
      },
      {
        term: "Warning signs",
        simple_definition: "Specific symptoms that mean you should seek immediate medical help, such as severe headache, chest pain, or vision changes"
      }
    ],
    safety_note: "This explanation is for informational purposes only and does not replace medical advice. Always follow your discharge instructions carefully and contact your healthcare provider if you have any concerns."
  },
  {
    id: "5",
    title: "High Blood Pressure Discharge Instructions",
    type: "Care instructions",
    source: "Memorial Hospital",
    date: "Apr 24",
    takeaway: "Detailed instructions for managing your high blood pressure at home after leaving the hospital.",
    summary: "Step-by-step instructions for managing your high blood pressure after leaving the hospital, including medications, lifestyle changes, and follow-up care.",
    keyTakeaway: "Following these instructions carefully is essential for preventing another hospital visit and keeping your blood pressure under control.",
    questions: [
      "Should I take all my blood pressure medications at the same time, or spread them throughout the day?",
      "What should I do if I forget to take a dose — take it late or wait until the next scheduled dose?",
      "How soon can I resume my normal exercise routine, and are there any restrictions?",
      "What blood pressure readings at home would mean I should contact you before my scheduled follow-up?",
      "Are there any specific foods or over-the-counter medications I should avoid with my new prescriptions?"
    ],
    long_summary: "These discharge instructions provide detailed, practical guidance for continuing your hypertension care at home after a hospital visit. The instructions cover how and when to take your blood pressure medications, what foods to eat or avoid, how much physical activity is safe, how to monitor your blood pressure at home, and what symptoms require immediate medical attention. Following these instructions carefully is essential for preventing another hospital visit and keeping your blood pressure under control. The instructions also include specific information about scheduling follow-up appointments and what to do if you experience side effects from your medications.",
    key_terms: [
      {
        term: "Medication schedule",
        simple_definition: "The specific times of day you should take each of your blood pressure medications for best results"
      },
      {
        term: "Sodium restriction",
        simple_definition: "Limiting salt and high-sodium foods to less than 2,300 mg per day (about 1 teaspoon) to help lower blood pressure"
      },
      {
        term: "Home blood pressure monitoring",
        simple_definition: "Regularly checking and recording your blood pressure at home to track your progress and catch any problems early"
      },
      {
        term: "Gradual activity increase",
        simple_definition: "Slowly returning to normal physical activity over several weeks rather than resuming everything immediately"
      },
      {
        term: "Medication side effects",
        simple_definition: "Unwanted symptoms that can occur from blood pressure medications, such as dizziness, fatigue, or frequent urination"
      }
    ],
    safety_note: "This explanation is for informational purposes only and does not replace medical advice. Always follow your discharge instructions exactly as written and contact your healthcare provider with any questions or concerns."
  },
];
