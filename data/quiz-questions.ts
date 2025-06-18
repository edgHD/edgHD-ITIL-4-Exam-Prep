import type { Question } from "~/types/quiz";

export const quizQuestions: Question[] = [
  {
    question:
      "Which of the following best defines 'service management'?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "A set of specialized organizational capabilities for enabling value for customers in the form of services.",
        isCorrect: true,
        explanation:
          "This is the official ITIL 4 definition of service management, focusing on value creation for customers through services.",
      },
      {
        answer: "A process for managing IT infrastructure.",
        isCorrect: false,
        explanation:
          "This is too narrow and does not capture the full scope of service management as defined by ITIL 4.",
      },
      {
        answer: "A method for reducing IT costs.",
        isCorrect: false,
        explanation:
          "While cost reduction can be a benefit, it is not the definition of service management.",
      },
      {
        answer: "A tool for automating business processes.",
        isCorrect: false,
        explanation:
          "Service management is not a tool, but a set of organizational capabilities.",
      },
    ],
  },
  {
    question: "What is the ITIL 4 definition of 'value'?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "The perceived benefits, usefulness, and importance of something.",
        isCorrect: true,
        explanation:
          "ITIL 4 defines value as the perceived benefits, usefulness, and importance of something.",
      },
      {
        answer: "The total cost of ownership of a service.",
        isCorrect: false,
        explanation:
          "Cost is only one aspect of value, not the definition itself.",
      },
      {
        answer: "The number of users of a service.",
        isCorrect: false,
        explanation: "The number of users does not define value.",
      },
      {
        answer: "The amount of automation in a process.",
        isCorrect: false,
        explanation:
          "Automation can contribute to value but is not the definition.",
      },
    ],
  },
  {
    question:
      "Which two of the following are key components of the ITIL 4 Service Value System (SVS)?",
    hasMultipleAnswers: true,
    answers: [
      {
        answer: "Guiding Principles",
        isCorrect: true,
        explanation:
          "Guiding Principles are a core component of the SVS, providing recommendations that guide an organization in all circumstances.",
      },
      {
        answer: "Service Value Chain",
        isCorrect: true,
        explanation:
          "The Service Value Chain is a central element of the SVS, outlining key activities for value creation.",
      },
      {
        answer: "Incident Records",
        isCorrect: false,
        explanation:
          "Incident Records are not a component of the SVS; they are part of incident management practice.",
      },
      {
        answer: "Service Desk Tickets",
        isCorrect: false,
        explanation: "Service Desk Tickets are not a component of the SVS.",
      },
    ],
  },
  {
    question:
      "Select the two roles that are considered service consumers.",
    hasMultipleAnswers: true,
    answers: [
      {
        answer: "User",
        isCorrect: true,
        explanation:
          "A user is a person who uses services and is considered a service consumer.",
      },
      {
        answer: "Customer",
        isCorrect: true,
        explanation:
          "A customer defines requirements for services and takes responsibility for outcomes, making them a service consumer.",
      },
      {
        answer: "Service Provider",
        isCorrect: false,
        explanation:
          "A service provider delivers services, not consumes them.",
      },
      {
        answer: "Sponsor",
        isCorrect: false,
        explanation:
          "A sponsor authorizes the budget for service consumption but is not always a direct consumer.",
      },
    ],
  },
  {
    question:
      "Which of the following is the best description of the ITIL 4 guiding principle 'Start where you are'?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "Assess the current state and use what exists before building something new.",
        isCorrect: true,
        explanation:
          "This principle encourages organizations to evaluate their current situation and leverage existing resources and processes.",
      },
      {
        answer: "Always create new processes from scratch.",
        isCorrect: false,
        explanation:
          "This contradicts the principle, which emphasizes using what already exists.",
      },
      {
        answer: "Focus only on future improvements.",
        isCorrect: false,
        explanation:
          "The principle is about understanding and using the current state, not just focusing on the future.",
      },
      {
        answer: "Automate all processes immediately.",
        isCorrect: false,
        explanation: "Automation is not the focus of this principle.",
      },
    ],
  },
  {
    question:
      "Which of the following best describes the purpose of the 'continual improvement' practice?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "To align an organization’s practices and services with changing business needs through ongoing identification and improvement.",
        isCorrect: true,
        explanation:
          "Continual improvement is about ongoing alignment and enhancement of practices and services.",
      },
      {
        answer: "To manage incidents and service requests.",
        isCorrect: false,
        explanation:
          "Incident and service request management are separate practices.",
      },
      {
        answer: "To authorize changes to services.",
        isCorrect: false,
        explanation:
          "Change enablement is responsible for authorizing changes.",
      },
      {
        answer: "To monitor service performance only.",
        isCorrect: false,
        explanation:
          "Continual improvement is broader than just monitoring performance.",
      },
    ],
  },
  {
    question:
      "Which of the following is NOT one of the four dimensions of service management?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Financial Management",
        isCorrect: true,
        explanation:
          "Financial Management is not one of the four dimensions; the four are Organizations and People, Information and Technology, Partners and Suppliers, and Value Streams and Processes.",
      },
      {
        answer: "Organizations and People",
        isCorrect: false,
        explanation: "This is one of the four dimensions.",
      },
      {
        answer: "Partners and Suppliers",
        isCorrect: false,
        explanation: "This is one of the four dimensions.",
      },
      {
        answer: "Value Streams and Processes",
        isCorrect: false,
        explanation: "This is one of the four dimensions.",
      },
    ],
  },
  {
    question:
      "Which of the following is LEAST likely to be a benefit of adopting ITIL 4 practices?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Increased organizational silos",
        isCorrect: true,
        explanation:
          "ITIL 4 aims to break down silos, not increase them.",
      },
      {
        answer: "Improved customer satisfaction",
        isCorrect: false,
        explanation:
          "Improved customer satisfaction is a key benefit of ITIL 4.",
      },
      {
        answer: "Better alignment of IT and business goals",
        isCorrect: false,
        explanation: "ITIL 4 helps align IT and business goals.",
      },
      {
        answer: "Enhanced service delivery",
        isCorrect: false,
        explanation: "Enhanced service delivery is a benefit of ITIL 4.",
      },
    ],
  },
  {
    question:
      "A company is experiencing frequent service outages due to unplanned changes. Which ITIL 4 practice should be improved to address this issue?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Change Enablement",
        isCorrect: true,
        explanation:
          "Change Enablement ensures that risks are properly assessed and changes are authorized, reducing unplanned outages.",
      },
      {
        answer: "Incident Management",
        isCorrect: false,
        explanation:
          "Incident Management deals with restoring service, not preventing unplanned changes.",
      },
      {
        answer: "Service Desk",
        isCorrect: false,
        explanation:
          "The Service Desk handles communication and support, not change control.",
      },
      {
        answer: "Continual Improvement",
        isCorrect: false,
        explanation:
          "Continual Improvement is broader and not specifically focused on change control.",
      },
    ],
  },
  {
    question:
      "Scenario: An organization wants to ensure that its services are delivered and supported according to agreed specifications and stakeholder expectations. Which value chain activity is MOST relevant?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Deliver and Support",
        isCorrect: true,
        explanation:
          "The 'Deliver and Support' value chain activity ensures services are delivered and supported as agreed.",
      },
      {
        answer: "Plan",
        isCorrect: false,
        explanation:
          "The 'Plan' activity focuses on planning, not delivery and support.",
      },
      {
        answer: "Engage",
        isCorrect: false,
        explanation:
          "The 'Engage' activity is about stakeholder engagement, not direct service delivery.",
      },
      {
        answer: "Obtain/Build",
        isCorrect: false,
        explanation:
          "The 'Obtain/Build' activity is about acquiring or building service components.",
      },
    ],
  },
  {
    question:
      "Which ITIL 4 term is defined as 'a means of enabling value co-creation by facilitating outcomes that customers want to achieve, without the customer having to manage specific costs and risks'?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Service",
        isCorrect: true,
        explanation:
          "This is the official ITIL 4 definition of a service, focusing on value co-creation and relieving the customer of certain costs and risks.",
      },
      {
        answer: "Product",
        isCorrect: false,
        explanation:
          "A product is a configuration of an organization's resources designed to offer value, but it is not the same as a service.",
      },
      {
        answer: "Outcome",
        isCorrect: false,
        explanation:
          "An outcome is a result enabled by one or more outputs, not the means of value co-creation itself.",
      },
      {
        answer: "Process",
        isCorrect: false,
        explanation:
          "A process is a set of interrelated activities, not the means of enabling value co-creation as defined here.",
      },
    ],
  },
  {
    question: "What is the ITIL 4 definition of 'stakeholder'?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "A person or organization that has an interest or involvement in an organization, product, service, practice, or other entity.",
        isCorrect: true,
        explanation:
          "This is the official ITIL 4 definition of a stakeholder.",
      },
      {
        answer: "A person who uses services.",
        isCorrect: false,
        explanation: "This is the definition of a user, not a stakeholder.",
      },
      {
        answer: "A person who authorizes the budget for service consumption.",
        isCorrect: false,
        explanation:
          "This is the definition of a sponsor, not a stakeholder.",
      },
      {
        answer: "A person who defines requirements for services.",
        isCorrect: false,
        explanation:
          "This is the definition of a customer, not a stakeholder.",
      },
    ],
  },
  {
    question: "Which two of the following are ITIL 4 guiding principles?",
    hasMultipleAnswers: true,
    answers: [
      {
        answer: "Focus on value",
        isCorrect: true,
        explanation:
          "Focus on value is one of the seven ITIL 4 guiding principles.",
      },
      {
        answer: "Keep it simple and practical",
        isCorrect: true,
        explanation:
          "Keep it simple and practical is also an ITIL 4 guiding principle.",
      },
      {
        answer: "Incident escalation",
        isCorrect: false,
        explanation:
          "Incident escalation is not a guiding principle; it is an activity within incident management.",
      },
      {
        answer: "Service request fulfillment",
        isCorrect: false,
        explanation:
          "Service request fulfillment is a practice, not a guiding principle.",
      },
    ],
  },
  {
    question:
      "Select the two practices that are classified as 'service management practices'.",
    hasMultipleAnswers: true,
    answers: [
      {
        answer: "Incident Management",
        isCorrect: true,
        explanation:
          "Incident Management is a service management practice.[5]",
      },
      {
        answer: "Service Desk",
        isCorrect: true,
        explanation:
          "Service Desk is also a service management practice.[5]",
      },
      {
        answer: "Workforce and Talent Management",
        isCorrect: false,
        explanation:
          "Workforce and Talent Management is a general management practice, not a service management practice.[5]",
      },
      {
        answer: "Deployment Management",
        isCorrect: false,
        explanation:
          "Deployment Management is a technical management practice.[5]",
      },
    ],
  },
  {
    question:
      "Which of the following is the best description of the ITIL 4 guiding principle 'Collaborate and promote visibility'?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "Work together across boundaries and ensure information is shared and visible to those who need it.",
        isCorrect: true,
        explanation:
          "This principle emphasizes collaboration and transparency to improve outcomes and decision-making.",
      },
      {
        answer: "Automate all possible processes to reduce manual effort.",
        isCorrect: false,
        explanation:
          "This describes 'Optimize and automate,' not 'Collaborate and promote visibility.'",
      },
      {
        answer: "Always start from scratch when designing new services.",
        isCorrect: false,
        explanation:
          "This contradicts the principle of 'Start where you are.'",
      },
      {
        answer: "Focus only on customer requirements.",
        isCorrect: false,
        explanation:
          "While customer focus is important, this is not the main point of 'Collaborate and promote visibility.'",
      },
    ],
  },
  {
    question:
      "Which of the following best describes the purpose of the 'Service Desk' practice?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "To capture demand for incident resolution and service requests.",
        isCorrect: true,
        explanation:
          "The Service Desk acts as a single point of contact for users, handling incidents and service requests.",
      },
      {
        answer: "To authorize changes to services.",
        isCorrect: false,
        explanation:
          "Change Enablement is responsible for authorizing changes, not the Service Desk.",
      },
      {
        answer: "To manage the organization's financial resources.",
        isCorrect: false,
        explanation:
          "Financial management is a separate practice, not the Service Desk's purpose.",
      },
      {
        answer: "To design new services.",
        isCorrect: false,
        explanation:
          "Service design is a different practice from the Service Desk.",
      },
    ],
  },
  {
    question:
      "Which of the following is NOT a key activity of the 'Engage' value chain activity?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Designing and transitioning new or changed services",
        isCorrect: true,
        explanation:
          "Designing and transitioning services is part of the 'Design and Transition' activity, not 'Engage.'",
      },
      {
        answer: "Understanding stakeholder needs",
        isCorrect: false,
        explanation:
          "Understanding stakeholder needs is a key part of 'Engage.'",
      },
      {
        answer: "Maintaining good relationships with stakeholders",
        isCorrect: false,
        explanation: "Maintaining relationships is central to 'Engage.'",
      },
      {
        answer: "Ensuring transparency and continual engagement",
        isCorrect: false,
        explanation:
          "Transparency and continual engagement are part of 'Engage.'",
      },
    ],
  },
  {
    question:
      "Which of the following is LEAST likely to be a purpose of the 'Change Enablement' practice?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "To resolve incidents as quickly as possible",
        isCorrect: true,
        explanation:
          "Incident resolution is the purpose of Incident Management, not Change Enablement.",
      },
      {
        answer: "To ensure changes are properly assessed",
        isCorrect: false,
        explanation:
          "Change Enablement ensures changes are assessed and authorized.",
      },
      {
        answer: "To authorize changes to proceed",
        isCorrect: false,
        explanation:
          "Change Enablement is responsible for authorizing changes.",
      },
      {
        answer: "To manage a change schedule",
        isCorrect: false,
        explanation:
          "Managing a change schedule is part of Change Enablement.",
      },
    ],
  },
  {
    question:
      "Scenario: A service provider wants to ensure that its services deliver agreed levels of availability to meet customer needs. Which ITIL 4 practice should be the primary focus?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Availability Management",
        isCorrect: true,
        explanation:
          "Availability Management ensures that services deliver agreed levels of availability to meet customer needs.[5]",
      },
      {
        answer: "Service Desk",
        isCorrect: false,
        explanation:
          "The Service Desk handles incidents and requests, not availability management.[5]",
      },
      {
        answer: "Change Enablement",
        isCorrect: false,
        explanation:
          "Change Enablement manages changes, not service availability.[5]",
      },
      {
        answer: "Problem Management",
        isCorrect: false,
        explanation:
          "Problem Management focuses on identifying and managing the root causes of incidents, not directly on availability.[5]",
      },
    ],
  },
  {
    question:
      "Scenario: An organization is planning a major upgrade to its IT infrastructure. Which ITIL 4 guiding principle is MOST important to ensure the upgrade is successful and risk is minimized?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Progress iteratively with feedback",
        isCorrect: true,
        explanation:
          "This principle emphasizes making improvements in small steps, gathering feedback, and reducing risk during major changes.",
      },
      {
        answer: "Focus on value",
        isCorrect: false,
        explanation:
          "While important, 'Focus on value' is not as directly related to managing risk during upgrades as 'Progress iteratively with feedback.'",
      },
      {
        answer: "Keep it simple and practical",
        isCorrect: false,
        explanation:
          "Simplicity is important, but iterative progress is more relevant for managing risk in upgrades.",
      },
      {
        answer: "Optimize and automate",
        isCorrect: false,
        explanation:
          "Optimization and automation are valuable, but not the primary principle for minimizing risk in upgrades.",
      },
    ],
  },
];
