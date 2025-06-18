import type { Question } from "~/types/quiz";

export const quizQuestions: Question[] = [
  {
    question:
      "Which of the following best defines 'service management' in ITIL 4?",
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
        answer: "A process for managing IT infrastructure only.",
        isCorrect: false,
        explanation:
          "Service management is broader than just IT infrastructure; it encompasses all organizational capabilities for value creation.",
      },
      {
        answer: "A method for reducing costs in IT departments.",
        isCorrect: false,
        explanation:
          "While cost reduction can be a benefit, service management is not solely about reducing costs.",
      },
      {
        answer: "A set of tools for automating business processes.",
        isCorrect: false,
        explanation:
          "Service management is about capabilities, not just tools or automation.",
      },
    ],
  },
  {
    question:
      "Which term describes the perceived benefits, usefulness, and importance of something in ITIL 4?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Value",
        isCorrect: true,
        explanation:
          "Value is defined as the perceived benefits, usefulness, and importance of something.",
      },
      {
        answer: "Outcome",
        isCorrect: false,
        explanation:
          "An outcome is a result enabled by one or more outputs, not the perception of benefits.",
      },
      {
        answer: "Utility",
        isCorrect: false,
        explanation:
          "Utility refers to the functionality offered by a product or service, not the overall perception of benefits.",
      },
      {
        answer: "Warranty",
        isCorrect: false,
        explanation:
          "Warranty is about assurance that a product or service will meet agreed requirements.",
      },
    ],
  },
  {
    question:
      "Select TWO correct statements about value co-creation in ITIL 4.",
    hasMultipleAnswers: true,
    answers: [
      {
        answer:
          "Value is co-created through active collaboration between providers and consumers.",
        isCorrect: true,
        explanation:
          "ITIL 4 emphasizes that value is co-created, not just delivered, through collaboration.",
      },
      {
        answer: "Value is created solely by the service provider.",
        isCorrect: false,
        explanation:
          "Value is not created solely by the provider; it requires collaboration with consumers.",
      },
      {
        answer:
          "Other organizations can also participate in value co-creation.",
        isCorrect: true,
        explanation:
          "Other stakeholders, such as partners and suppliers, can be involved in value co-creation.",
      },
      {
        answer: "Value is always the same for every stakeholder.",
        isCorrect: false,
        explanation:
          "Value is subjective and can differ between stakeholders.",
      },
    ],
  },
  {
    question: "Which TWO roles are considered service consumers in ITIL 4?",
    hasMultipleAnswers: true,
    answers: [
      {
        answer: "Customer",
        isCorrect: true,
        explanation:
          "A customer defines requirements and takes responsibility for outcomes of service consumption.",
      },
      {
        answer: "Sponsor",
        isCorrect: true,
        explanation:
          "A sponsor authorizes the budget for service consumption, making them a service consumer.",
      },
      {
        answer: "Service provider",
        isCorrect: false,
        explanation:
          "A service provider delivers services, not consumes them.",
      },
      {
        answer: "Supplier",
        isCorrect: false,
        explanation:
          "A supplier provides goods or services to the service provider, not directly consuming the service.",
      },
    ],
  },
  {
    question:
      "Which of the following is the BEST description of a service offering?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "A description of one or more services, designed to address the needs of a target consumer group.",
        isCorrect: true,
        explanation:
          "A service offering is a formal description of services tailored to a consumer group.",
      },
      {
        answer: "A list of all products an organization sells.",
        isCorrect: false,
        explanation:
          "A service offering is not just a product list; it is focused on services and consumer needs.",
      },
      {
        answer: "A contract between a provider and a supplier.",
        isCorrect: false,
        explanation:
          "Service offerings are not contracts with suppliers, but with consumers.",
      },
      {
        answer: "A set of internal IT processes.",
        isCorrect: false,
        explanation:
          "Service offerings are about services provided to consumers, not internal processes.",
      },
    ],
  },
  {
    question:
      "Which of the following is NOT a key stakeholder in service management?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Competitors",
        isCorrect: true,
        explanation:
          "Competitors are not considered stakeholders in the context of service management.",
      },
      {
        answer: "Customers",
        isCorrect: false,
        explanation:
          "Customers are key stakeholders as they define requirements and consume services.",
      },
      {
        answer: "Suppliers",
        isCorrect: false,
        explanation:
          "Suppliers are stakeholders as they provide goods or services to the provider.",
      },
      {
        answer: "Users",
        isCorrect: false,
        explanation:
          "Users are stakeholders as they use the services provided.",
      },
    ],
  },
  {
    question:
      "Which of the following is LEAST likely to be considered an outcome in service management?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "The number of servers installed",
        isCorrect: true,
        explanation:
          "The number of servers is an output, not an outcome. Outcomes are results enabled by outputs.",
      },
      {
        answer: "Improved customer satisfaction",
        isCorrect: false,
        explanation:
          "Improved satisfaction is a typical outcome of service management.",
      },
      {
        answer: "Faster response times for users",
        isCorrect: false,
        explanation:
          "Faster response times are outcomes that benefit stakeholders.",
      },
      {
        answer: "Increased business revenue",
        isCorrect: false,
        explanation:
          "Increased revenue is a business outcome enabled by services.",
      },
    ],
  },
  {
    question:
      "Which of the following is NOT a component of the service relationship model?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Service competition",
        isCorrect: true,
        explanation:
          "Service competition is not a component of the service relationship model.",
      },
      {
        answer: "Service provision",
        isCorrect: false,
        explanation:
          "Service provision is a key component of the service relationship model.",
      },
      {
        answer: "Service consumption",
        isCorrect: false,
        explanation:
          "Service consumption is a key component of the service relationship model.",
      },
      {
        answer: "Service relationship management",
        isCorrect: false,
        explanation:
          "Service relationship management is a key component of the model.",
      },
    ],
  },
  {
    question:
      "A company provides cloud storage to a client. The client uses the storage to back up critical data, and the provider ensures data is available 24/7. Which ITIL 4 concept does this scenario BEST illustrate?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Value co-creation through service relationships",
        isCorrect: true,
        explanation:
          "Both provider and consumer collaborate to co-create value through the service relationship.",
      },
      {
        answer: "Service provider only delivers value",
        isCorrect: false,
        explanation:
          "Value is not delivered unilaterally; it is co-created.",
      },
      {
        answer: "Only the consumer is responsible for value",
        isCorrect: false,
        explanation:
          "Both parties are responsible for value co-creation.",
      },
      {
        answer: "The provider manages all risks for the consumer",
        isCorrect: false,
        explanation:
          "While the provider manages some risks, not all risks are transferred.",
      },
    ],
  },
  {
    question:
      "A business subscribes to a software service. The service guarantees 99.9% uptime and provides features that meet the business's needs. Which TWO ITIL 4 terms BEST describe these aspects?",
    hasMultipleAnswers: true,
    answers: [
      {
        answer: "Utility",
        isCorrect: true,
        explanation:
          "Utility is the functionality offered by a product or service to meet a need.",
      },
      {
        answer: "Warranty",
        isCorrect: true,
        explanation:
          "Warranty is the assurance that a product or service will meet agreed requirements.",
      },
      {
        answer: "Outcome",
        isCorrect: false,
        explanation:
          "Outcome is the result enabled by the service, not the features or guarantees.",
      },
      {
        answer: "Cost",
        isCorrect: false,
        explanation:
          "Cost refers to the amount spent, not the features or guarantees.",
      },
    ],
  },
  {
    question:
      "Which of the following is the BEST definition of a 'service' in ITIL 4?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "A means of enabling value co-creation by facilitating outcomes that customers want to achieve, without the customer having to manage specific costs and risks.",
        isCorrect: true,
        explanation:
          "This is the official ITIL 4 definition of a service, emphasizing value co-creation and the removal of costs and risks from the customer.",
      },
      {
        answer: "A set of tools used to automate business processes.",
        isCorrect: false,
        explanation:
          "A service is not just a set of tools; it is about enabling outcomes and value.",
      },
      {
        answer: "A contract between a provider and a consumer.",
        isCorrect: false,
        explanation:
          "While contracts may be involved, a service is not defined as a contract.",
      },
      {
        answer: "A list of products offered by an organization.",
        isCorrect: false,
        explanation:
          "A service is not simply a product list; it is about enabling value for customers.",
      },
    ],
  },
  {
    question: "Which TWO statements about 'products' in ITIL 4 are correct?",
    hasMultipleAnswers: true,
    answers: [
      {
        answer:
          "A product is a configuration of an organization's resources designed to offer value for a consumer.",
        isCorrect: true,
        explanation:
          "This is the ITIL 4 definition of a product, focusing on resource configuration for value.",
      },
      {
        answer:
          "Products are always visible to the consumer in their entirety.",
        isCorrect: false,
        explanation:
          "Consumers often only see part of the product; many components remain hidden.",
      },
      {
        answer: "Products support the delivery of one or more services.",
        isCorrect: true,
        explanation:
          "Products are the basis for services and support their delivery.",
      },
      {
        answer: "Products are only physical goods.",
        isCorrect: false,
        explanation:
          "Products can include intangible resources, not just physical goods.",
      },
    ],
  },
  {
    question:
      "Which of the following is the BEST example of a service offering?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "A formal description of one or more services, designed to address the needs of a target consumer group.",
        isCorrect: true,
        explanation:
          "A service offering is a formal description tailored to a consumer group, possibly including goods, access, and actions.",
      },
      {
        answer: "A list of all IT assets owned by a company.",
        isCorrect: false,
        explanation:
          "A service offering is not just an asset list; it is focused on consumer needs.",
      },
      {
        answer: "A contract with a supplier.",
        isCorrect: false,
        explanation:
          "Service offerings are for consumers, not suppliers.",
      },
      {
        answer: "A set of internal policies.",
        isCorrect: false,
        explanation: "Internal policies are not service offerings.",
      },
    ],
  },
  {
    question: "Which TWO are components of a service offering?",
    hasMultipleAnswers: true,
    answers: [
      {
        answer: "Goods supplied to the consumer",
        isCorrect: true,
        explanation:
          "Goods are one component of a service offering, with ownership transferred to the consumer.",
      },
      {
        answer: "Access to resources",
        isCorrect: true,
        explanation:
          "Access to resources is another component, with ownership retained by the provider.",
      },
      {
        answer: "Internal process documentation",
        isCorrect: false,
        explanation:
          "Internal documentation is not part of a service offering.",
      },
      {
        answer: "Competitor analysis reports",
        isCorrect: false,
        explanation:
          "Competitor analysis is not a component of a service offering.",
      },
    ],
  },
  {
    question:
      "Which of the following is the BEST description of a service relationship?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "A cooperation between a service provider and service consumer to co-create value.",
        isCorrect: true,
        explanation:
          "A service relationship is about cooperation for value co-creation.",
      },
      {
        answer: "A contract between two suppliers.",
        isCorrect: false,
        explanation:
          "Service relationships are between providers and consumers, not just suppliers.",
      },
      {
        answer: "A list of all services provided.",
        isCorrect: false,
        explanation:
          "A service relationship is not a list; it is a cooperative arrangement.",
      },
      {
        answer: "A set of internal IT processes.",
        isCorrect: false,
        explanation: "Internal processes are not service relationships.",
      },
    ],
  },
  {
    question: "Which of the following is NOT a role in a service relationship?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Auditor",
        isCorrect: true,
        explanation:
          "Auditor is not a defined role in the service relationship model.",
      },
      {
        answer: "Service provider",
        isCorrect: false,
        explanation:
          "Service provider is a key role in service relationships.",
      },
      {
        answer: "Service consumer",
        isCorrect: false,
        explanation:
          "Service consumer is a key role in service relationships.",
      },
      {
        answer: "Sponsor",
        isCorrect: false,
        explanation:
          "Sponsor is a recognized role within the consumer group.",
      },
    ],
  },
  {
    question:
      "Which of the following is LEAST likely to be considered a risk in service management?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "A new feature that increases customer satisfaction",
        isCorrect: true,
        explanation:
          "A new feature that increases satisfaction is a positive outcome, not a risk.",
      },
      {
        answer: "Potential data breaches",
        isCorrect: false,
        explanation: "Data breaches are a classic example of risk.",
      },
      {
        answer: "Service downtime",
        isCorrect: false,
        explanation: "Downtime is a risk to service delivery.",
      },
      {
        answer: "Unexpected costs",
        isCorrect: false,
        explanation: "Unexpected costs are a risk in service management.",
      },
    ],
  },
  {
    question:
      "Which of the following is NOT a type of cost considered in ITIL 4 service management?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Costs imposed by competitors",
        isCorrect: true,
        explanation:
          "Competitor-imposed costs are not considered in ITIL 4 service management.",
      },
      {
        answer: "Costs removed from the consumer by the service",
        isCorrect: false,
        explanation:
          "ITIL 4 considers costs removed from the consumer by the service.",
      },
      {
        answer: "Costs imposed on the consumer by the service",
        isCorrect: false,
        explanation:
          "ITIL 4 considers costs imposed on the consumer by the service.",
      },
      {
        answer: "Non-financial costs translated into financial terms",
        isCorrect: false,
        explanation:
          "Non-financial costs can be translated into financial terms in ITIL 4.",
      },
    ],
  },
  {
    question:
      "A company configures its resources to deliver a new online platform, providing customers with 24/7 access and support. Which ITIL 4 concept does this scenario BEST illustrate?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Configuring resources for value creation",
        isCorrect: true,
        explanation:
          "The scenario describes configuring resources to create value for customers.",
      },
      {
        answer: "Service competition",
        isCorrect: false,
        explanation:
          "Service competition is not the focus of this scenario.",
      },
      {
        answer: "Internal process improvement",
        isCorrect: false,
        explanation:
          "The focus is on value creation for customers, not just internal improvement.",
      },
      {
        answer: "Cost reduction only",
        isCorrect: false,
        explanation:
          "Cost reduction is not the main concept illustrated here.",
      },
    ],
  },
  {
    question:
      "A business subscribes to a cloud service that guarantees high availability and provides the features needed for its operations. Which TWO ITIL 4 terms BEST describe these aspects?",
    hasMultipleAnswers: true,
    answers: [
      {
        answer: "Utility",
        isCorrect: true,
        explanation:
          "Utility is the functionality offered by a product or service to meet a need.",
      },
      {
        answer: "Warranty",
        isCorrect: true,
        explanation:
          "Warranty is the assurance that a product or service will meet agreed requirements, such as high availability.",
      },
      {
        answer: "Outcome",
        isCorrect: false,
        explanation:
          "Outcome is the result enabled by the service, not the features or guarantees.",
      },
      {
        answer: "Risk",
        isCorrect: false,
        explanation:
          "Risk is not the best term to describe features or guarantees.",
      },
    ],
  },
  {
    question:
      "Which of the following statements about 'utility' and 'warranty' in ITIL 4 is correct?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "Utility is what the service does, and warranty is how well the service performs.",
        isCorrect: true,
        explanation:
          "Utility refers to the functionality offered by a service, while warranty is about the assurance that the service will meet agreed requirements.",
      },
      {
        answer:
          "Utility is about the cost of the service, and warranty is about the risks.",
        isCorrect: false,
        explanation:
          "Utility and warranty are not defined in terms of cost and risk; they relate to functionality and assurance.",
      },
      {
        answer:
          "Utility is the same as outcome, and warranty is the same as output.",
        isCorrect: false,
        explanation:
          "Utility and warranty are distinct from outcomes and outputs in ITIL 4.",
      },
      {
        answer:
          "Utility and warranty are both about the financial value of a service.",
        isCorrect: false,
        explanation:
          "Utility and warranty are not defined by financial value but by functionality and assurance.",
      },
    ],
  },
  {
    question: "Which TWO are considered service actions in a service offering?",
    hasMultipleAnswers: true,
    answers: [
      {
        answer: "Providing technical support to users",
        isCorrect: true,
        explanation:
          "Service actions include activities performed by the provider to address consumer needs, such as technical support.",
      },
      {
        answer: "Transferring ownership of goods",
        isCorrect: false,
        explanation:
          "Transferring ownership of goods is a separate component of a service offering, not a service action.",
      },
      {
        answer: "Resetting user passwords upon request",
        isCorrect: true,
        explanation:
          "Resetting passwords is a service action performed to meet consumer needs.",
      },
      {
        answer: "Granting access to a software application",
        isCorrect: false,
        explanation:
          "Granting access is considered 'access to resources,' not a service action.",
      },
    ],
  },
  {
    question:
      "Which of the following is the BEST example of value co-creation?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "A provider and consumer working together to improve a service based on feedback.",
        isCorrect: true,
        explanation:
          "Value co-creation involves active collaboration between provider and consumer to enhance value.",
      },
      {
        answer: "A provider delivering a service without consumer input.",
        isCorrect: false,
        explanation:
          "Value co-creation requires collaboration, not just delivery.",
      },
      {
        answer: "A consumer using a service as-is, without interaction.",
        isCorrect: false,
        explanation:
          "Co-creation is not present if there is no collaboration.",
      },
      {
        answer: "A provider setting service terms unilaterally.",
        isCorrect: false,
        explanation:
          "Unilateral decisions do not represent co-creation of value.",
      },
    ],
  },
  {
    question: "Which TWO are roles of a service consumer in ITIL 4?",
    hasMultipleAnswers: true,
    answers: [
      {
        answer: "User",
        isCorrect: true,
        explanation:
          "A user is a person who uses the service, which is a service consumer role.",
      },
      {
        answer: "Customer",
        isCorrect: true,
        explanation:
          "A customer defines requirements and takes responsibility for outcomes, also a service consumer role.",
      },
      {
        answer: "Supplier",
        isCorrect: false,
        explanation:
          "A supplier provides goods or services to the provider, not a consumer role.",
      },
      {
        answer: "Service provider",
        isCorrect: false,
        explanation:
          "The service provider delivers services, not consumes them.",
      },
    ],
  },
  {
    question:
      "Which of the following is the LEAST likely to be considered a stakeholder in service management?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "A competitor organization",
        isCorrect: true,
        explanation:
          "Competitors are not considered stakeholders in the context of service management.",
      },
      {
        answer: "A user of the service",
        isCorrect: false,
        explanation: "Users are stakeholders as they use the service.",
      },
      {
        answer: "A supplier providing components",
        isCorrect: false,
        explanation:
          "Suppliers are stakeholders as they provide goods or services.",
      },
      {
        answer: "A sponsor authorizing the budget",
        isCorrect: false,
        explanation:
          "Sponsors are stakeholders as they authorize budgets for service consumption.",
      },
    ],
  },
  {
    question:
      "Which of the following is NOT a component of a service offering?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Internal process documentation",
        isCorrect: true,
        explanation:
          "Internal process documentation is not part of a service offering.",
      },
      {
        answer: "Goods supplied to the consumer",
        isCorrect: false,
        explanation: "Goods are a component of a service offering.",
      },
      {
        answer: "Access to resources",
        isCorrect: false,
        explanation:
          "Access to resources is a component of a service offering.",
      },
      {
        answer: "Service actions performed by the provider",
        isCorrect: false,
        explanation:
          "Service actions are a component of a service offering.",
      },
    ],
  },
  {
    question:
      "Which of the following is the BEST description of a service relationship?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "A cooperation between a service provider and service consumer to co-create value.",
        isCorrect: true,
        explanation:
          "A service relationship is about cooperation for value co-creation.",
      },
      {
        answer: "A contract between two suppliers.",
        isCorrect: false,
        explanation:
          "Service relationships are between providers and consumers, not just suppliers.",
      },
      {
        answer: "A list of all services provided.",
        isCorrect: false,
        explanation:
          "A service relationship is not a list; it is a cooperative arrangement.",
      },
      {
        answer: "A set of internal IT processes.",
        isCorrect: false,
        explanation: "Internal processes are not service relationships.",
      },
    ],
  },
  {
    question:
      "Which of the following is NOT a type of cost considered in ITIL 4 service management?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Costs imposed by competitors",
        isCorrect: true,
        explanation:
          "Competitor-imposed costs are not considered in ITIL 4 service management.",
      },
      {
        answer: "Costs removed from the consumer by the service",
        isCorrect: false,
        explanation:
          "ITIL 4 considers costs removed from the consumer by the service.",
      },
      {
        answer: "Costs imposed on the consumer by the service",
        isCorrect: false,
        explanation:
          "ITIL 4 considers costs imposed on the consumer by the service.",
      },
      {
        answer: "Non-financial costs translated into financial terms",
        isCorrect: false,
        explanation:
          "Non-financial costs can be translated into financial terms in ITIL 4.",
      },
    ],
  },
  {
    question:
      "A company configures its resources to deliver a new online platform, providing customers with 24/7 access and support. Which ITIL 4 concept does this scenario BEST illustrate?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Configuring resources for value creation",
        isCorrect: true,
        explanation:
          "The scenario describes configuring resources to create value for customers.",
      },
      {
        answer: "Service competition",
        isCorrect: false,
        explanation:
          "Service competition is not the focus of this scenario.",
      },
      {
        answer: "Internal process improvement",
        isCorrect: false,
        explanation:
          "The focus is on value creation for customers, not just internal improvement.",
      },
      {
        answer: "Cost reduction only",
        isCorrect: false,
        explanation:
          "Cost reduction is not the main concept illustrated here.",
      },
    ],
  },
  {
    question:
      "A business subscribes to a cloud service that guarantees high availability and provides the features needed for its operations. Which TWO ITIL 4 terms BEST describe these aspects?",
    hasMultipleAnswers: true,
    answers: [
      {
        answer: "Utility",
        isCorrect: true,
        explanation:
          "Utility is the functionality offered by a product or service to meet a need.",
      },
      {
        answer: "Warranty",
        isCorrect: true,
        explanation:
          "Warranty is the assurance that a product or service will meet agreed requirements, such as high availability.",
      },
      {
        answer: "Outcome",
        isCorrect: false,
        explanation:
          "Outcome is the result enabled by the service, not the features or guarantees.",
      },
      {
        answer: "Risk",
        isCorrect: false,
        explanation:
          "Risk is not the best term to describe features or guarantees.",
      },
    ],
  },
  {
    question:
      "Which of the following is NOT one of the four dimensions of service management in ITIL 4?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Financial management",
        isCorrect: true,
        explanation:
          "Financial management is not one of the four dimensions; the four are Organizations and People, Information and Technology, Partners and Suppliers, and Value Streams and Processes.",
      },
      {
        answer: "Organizations and people",
        isCorrect: false,
        explanation:
          "Organizations and people is one of the four dimensions of service management.",
      },
      {
        answer: "Partners and suppliers",
        isCorrect: false,
        explanation:
          "Partners and suppliers is one of the four dimensions of service management.",
      },
      {
        answer: "Value streams and processes",
        isCorrect: false,
        explanation:
          "Value streams and processes is one of the four dimensions of service management.",
      },
    ],
  },
  {
    question:
      "What is the primary focus of the 'Organizations and People' dimension in ITIL 4?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "Ensuring the right culture, structure, and competencies are in place",
        isCorrect: true,
        explanation:
          "This dimension focuses on organizational structure, culture, roles, and competencies needed for effective service management.",
      },
      {
        answer: "Managing supplier contracts",
        isCorrect: false,
        explanation:
          "Managing supplier contracts is part of the Partners and Suppliers dimension.",
      },
      {
        answer: "Optimizing technology platforms",
        isCorrect: false,
        explanation:
          "Optimizing technology platforms is part of the Information and Technology dimension.",
      },
      {
        answer: "Defining value streams",
        isCorrect: false,
        explanation:
          "Defining value streams is part of the Value Streams and Processes dimension.",
      },
    ],
  },
  {
    question:
      "Select TWO correct statements about the 'Information and Technology' dimension.",
    hasMultipleAnswers: true,
    answers: [
      {
        answer:
          "It includes both the information needed for service management and the technologies used.",
        isCorrect: true,
        explanation:
          "This dimension covers all information and technology required for service management and the services themselves.",
      },
      {
        answer: "It only refers to IT systems used by the service provider.",
        isCorrect: false,
        explanation:
          "It is broader than just IT systems; it includes all relevant information and technology.",
      },
      {
        answer: "It considers the security and compliance of information.",
        isCorrect: true,
        explanation:
          "Security and compliance are important aspects of this dimension.",
      },
      {
        answer: "It excludes customer-facing technologies.",
        isCorrect: false,
        explanation:
          "Customer-facing technologies are included in this dimension.",
      },
    ],
  },
  {
    question:
      "Which TWO are key considerations in the 'Partners and Suppliers' dimension?",
    hasMultipleAnswers: true,
    answers: [
      {
        answer: "Supplier relationships and contracts",
        isCorrect: true,
        explanation:
          "Managing supplier relationships and contracts is a key part of this dimension.",
      },
      {
        answer: "Organizational culture",
        isCorrect: false,
        explanation:
          "Organizational culture is part of the Organizations and People dimension.",
      },
      {
        answer: "Strategic and tactical partnerships",
        isCorrect: true,
        explanation:
          "Both strategic and tactical partnerships are considered in this dimension.",
      },
      {
        answer: "Process mapping",
        isCorrect: false,
        explanation:
          "Process mapping is part of the Value Streams and Processes dimension.",
      },
    ],
  },
  {
    question:
      "Which of the following is the BEST description of a value stream in ITIL 4?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "A series of steps an organization undertakes to create and deliver products and services to consumers",
        isCorrect: true,
        explanation:
          "A value stream is the series of activities that create value for customers.",
      },
      {
        answer: "A list of all suppliers used by the organization",
        isCorrect: false,
        explanation: "This describes supplier management, not value streams.",
      },
      {
        answer: "A set of IT systems supporting business processes",
        isCorrect: false,
        explanation:
          "This is related to the Information and Technology dimension.",
      },
      {
        answer: "A collection of organizational policies",
        isCorrect: false,
        explanation: "Policies are not value streams.",
      },
    ],
  },
  {
    question:
      "Which is the BEST reason for considering all four dimensions of service management?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "To ensure a holistic and balanced approach to value creation",
        isCorrect: true,
        explanation:
          "Considering all four dimensions ensures that services are effective, efficient, and aligned with organizational goals.",
      },
      {
        answer: "To reduce the number of suppliers",
        isCorrect: false,
        explanation:
          "Reducing suppliers is not the main reason for considering all four dimensions.",
      },
      {
        answer: "To automate all processes",
        isCorrect: false,
        explanation: "Automation is only one aspect and not the main reason.",
      },
      {
        answer: "To focus only on technology",
        isCorrect: false,
        explanation:
          "Focusing only on technology ignores the holistic approach.",
      },
    ],
  },
  {
    question:
      "Which of the following is LEAST likely to be included in the 'Organizations and People' dimension?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Cloud infrastructure selection",
        isCorrect: true,
        explanation:
          "Cloud infrastructure selection is part of the Information and Technology dimension.",
      },
      {
        answer: "Organizational culture",
        isCorrect: false,
        explanation: "Organizational culture is a key part of this dimension.",
      },
      {
        answer: "Roles and responsibilities",
        isCorrect: false,
        explanation:
          "Roles and responsibilities are included in this dimension.",
      },
      {
        answer: "Skills and competencies",
        isCorrect: false,
        explanation: "Skills and competencies are included in this dimension.",
      },
    ],
  },
  {
    question:
      "Which of the following is NOT a primary focus of the 'Partners and Suppliers' dimension?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Defining internal value streams",
        isCorrect: true,
        explanation:
          "Defining value streams is part of the Value Streams and Processes dimension.",
      },
      {
        answer: "Supplier strategy",
        isCorrect: false,
        explanation: "Supplier strategy is a focus of this dimension.",
      },
      {
        answer: "Contract management",
        isCorrect: false,
        explanation: "Contract management is a focus of this dimension.",
      },
      {
        answer: "Managing external relationships",
        isCorrect: false,
        explanation:
          "Managing external relationships is a focus of this dimension.",
      },
    ],
  },
  {
    question:
      "A company is mapping out all the steps required to deliver a new IT service, including customer touchpoints and feedback loops. Which dimension and subtopic does this activity BEST represent?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "Value streams and processes – Value streams for service management",
        isCorrect: true,
        explanation:
          "Mapping steps and touchpoints is part of value streams for service management.",
      },
      {
        answer: "Information and technology – Security management",
        isCorrect: false,
        explanation: "Security management is not the focus here.",
      },
      {
        answer: "Partners and suppliers – Supplier selection",
        isCorrect: false,
        explanation: "Supplier selection is not the focus here.",
      },
      {
        answer: "Organizations and people – Workforce planning",
        isCorrect: false,
        explanation: "Workforce planning is not the focus here.",
      },
    ],
  },
  {
    question:
      "A new data privacy law requires changes to how customer information is handled. Which external factor is influencing the service management system?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Legal",
        isCorrect: true,
        explanation:
          "Legal factors such as laws and regulations are external factors that influence service management.",
      },
      {
        answer: "Technological",
        isCorrect: false,
        explanation:
          "Technological factors relate to technology changes, not laws.",
      },
      {
        answer: "Economic",
        isCorrect: false,
        explanation: "Economic factors relate to the economy, not laws.",
      },
      {
        answer: "Organizational",
        isCorrect: false,
        explanation: "Organizational factors are internal, not external.",
      },
    ],
  },
  {
    question:
      "Which of the following best describes the purpose of the 'Value Streams and Processes' dimension in ITIL 4?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "To define how value is created and delivered through activities and workflows",
        isCorrect: true,
        explanation:
          "This dimension focuses on the activities, workflows, and processes that create and deliver value to stakeholders.",
      },
      {
        answer: "To manage supplier contracts and relationships",
        isCorrect: false,
        explanation:
          "Supplier contracts are managed under the Partners and Suppliers dimension.",
      },
      {
        answer: "To ensure the right organizational culture",
        isCorrect: false,
        explanation:
          "Organizational culture is part of the Organizations and People dimension.",
      },
      {
        answer: "To select appropriate technology platforms",
        isCorrect: false,
        explanation:
          "Technology platforms are part of the Information and Technology dimension.",
      },
    ],
  },
  {
    question:
      "Which TWO are examples of external factors that can influence the four dimensions of service management?",
    hasMultipleAnswers: true,
    answers: [
      {
        answer: "Legal regulations",
        isCorrect: true,
        explanation:
          "Legal regulations are external factors that can impact service management.",
      },
      {
        answer: "Organizational hierarchy",
        isCorrect: false,
        explanation: "Organizational hierarchy is an internal factor.",
      },
      {
        answer: "Technological advancements",
        isCorrect: true,
        explanation:
          "Technological advancements are external factors that influence service management.",
      },
      {
        answer: "Employee training programs",
        isCorrect: false,
        explanation:
          "Employee training programs are internal to the organization.",
      },
    ],
  },
  {
    question:
      "Which of the following is the BEST example of a process in ITIL 4?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Incident management",
        isCorrect: true,
        explanation:
          "Incident management is a process that helps restore normal service operation as quickly as possible.",
      },
      {
        answer: "Supplier selection",
        isCorrect: false,
        explanation:
          "Supplier selection is an activity within the Partners and Suppliers dimension, not a process.",
      },
      {
        answer: "Organizational restructuring",
        isCorrect: false,
        explanation:
          "Organizational restructuring is not a defined ITIL process.",
      },
      {
        answer: "Technology upgrade",
        isCorrect: false,
        explanation: "Technology upgrade is an activity, not a process.",
      },
    ],
  },
  {
    question:
      "Which TWO statements are correct about the 'Partners and Suppliers' dimension?",
    hasMultipleAnswers: true,
    answers: [
      {
        answer:
          "It considers the organization's relationships with third parties.",
        isCorrect: true,
        explanation:
          "This dimension focuses on how organizations work with external parties to deliver services.",
      },
      {
        answer: "It includes the management of contracts and agreements.",
        isCorrect: true,
        explanation:
          "Managing contracts and agreements is a key part of this dimension.",
      },
      {
        answer: "It defines the organization's internal value streams.",
        isCorrect: false,
        explanation:
          "Internal value streams are part of the Value Streams and Processes dimension.",
      },
      {
        answer: "It sets the organization's culture and values.",
        isCorrect: false,
        explanation:
          "Culture and values are part of the Organizations and People dimension.",
      },
    ],
  },
  {
    question:
      "Which of the following is NOT a key consideration of the 'Information and Technology' dimension?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Supplier relationship management",
        isCorrect: true,
        explanation:
          "Supplier relationship management is part of the Partners and Suppliers dimension.",
      },
      {
        answer: "Security and compliance",
        isCorrect: false,
        explanation:
          "Security and compliance are important considerations in the Information and Technology dimension.",
      },
      {
        answer: "Data management",
        isCorrect: false,
        explanation:
          "Data management is a key consideration in this dimension.",
      },
      {
        answer: "Technology architecture",
        isCorrect: false,
        explanation:
          "Technology architecture is a key consideration in this dimension.",
      },
    ],
  },
  {
    question:
      "Which is the LEAST likely to be influenced by external social factors?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Internal process documentation",
        isCorrect: true,
        explanation:
          "Internal process documentation is primarily influenced by internal organizational needs, not external social factors.",
      },
      {
        answer: "Customer expectations",
        isCorrect: false,
        explanation:
          "Customer expectations are often shaped by social factors.",
      },
      {
        answer: "Workforce diversity initiatives",
        isCorrect: false,
        explanation:
          "Workforce diversity initiatives can be influenced by social trends and expectations.",
      },
      {
        answer: "Brand reputation",
        isCorrect: false,
        explanation: "Brand reputation can be influenced by social factors.",
      },
    ],
  },
  {
    question:
      "Which of the following is the BEST reason for mapping value streams in service management?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "To identify and eliminate inefficiencies in service delivery",
        isCorrect: true,
        explanation:
          "Mapping value streams helps organizations find and remove inefficiencies, improving value delivery.",
      },
      {
        answer: "To increase the number of suppliers",
        isCorrect: false,
        explanation:
          "Increasing suppliers is not the purpose of value stream mapping.",
      },
      {
        answer: "To focus only on technology improvements",
        isCorrect: false,
        explanation: "Value stream mapping is broader than just technology.",
      },
      {
        answer: "To define organizational culture",
        isCorrect: false,
        explanation:
          "Organizational culture is not the focus of value stream mapping.",
      },
    ],
  },
  {
    question: "Which of the following is NOT a process in ITIL 4?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Supplier onboarding",
        isCorrect: true,
        explanation:
          "Supplier onboarding is an activity, not a defined ITIL process.",
      },
      {
        answer: "Change enablement",
        isCorrect: false,
        explanation: "Change enablement is a process in ITIL 4.",
      },
      {
        answer: "Incident management",
        isCorrect: false,
        explanation: "Incident management is a process in ITIL 4.",
      },
      {
        answer: "Service request management",
        isCorrect: false,
        explanation: "Service request management is a process in ITIL 4.",
      },
    ],
  },
  {
    question:
      "A company is reviewing its use of cloud-based tools to support collaboration and data sharing. Which ITIL 4 dimension is MOST relevant to this activity?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Information and Technology",
        isCorrect: true,
        explanation:
          "This dimension covers the use of technology and information to support service management.",
      },
      {
        answer: "Organizations and People",
        isCorrect: false,
        explanation:
          "Organizations and People focuses on culture, structure, and competencies.",
      },
      {
        answer: "Partners and Suppliers",
        isCorrect: false,
        explanation:
          "Partners and Suppliers focuses on external relationships.",
      },
      {
        answer: "Value Streams and Processes",
        isCorrect: false,
        explanation:
          "Value Streams and Processes focuses on workflows and activities.",
      },
    ],
  },
  {
    question:
      "A new environmental regulation requires changes to how an organization disposes of IT equipment. Which external factor is influencing the service management system?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Environmental",
        isCorrect: true,
        explanation:
          "Environmental factors include regulations related to sustainability and environmental impact.",
      },
      {
        answer: "Technological",
        isCorrect: false,
        explanation:
          "Technological factors relate to technology changes, not environmental regulations.",
      },
      {
        answer: "Economic",
        isCorrect: false,
        explanation:
          "Economic factors relate to the economy, not environmental regulations.",
      },
      {
        answer: "Organizational",
        isCorrect: false,
        explanation: "Organizational factors are internal, not external.",
      },
    ],
  },
  {
    question:
      "Which of the following best describes the ITIL Service Value System (SVS)?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "A model showing how all the components and activities of an organization work together to create value through IT-enabled services.",
        isCorrect: true,
        explanation:
          "The SVS illustrates how various elements interact to facilitate value creation for customers and stakeholders.",
      },
      {
        answer: "A set of technical tools for IT service automation.",
        isCorrect: false,
        explanation:
          "The SVS is not a set of tools, but a holistic framework for value creation.",
      },
      {
        answer: "A list of ITIL processes and procedures.",
        isCorrect: false,
        explanation:
          "The SVS is broader than just a list of processes; it encompasses principles, governance, and continual improvement.",
      },
      {
        answer: "A method for measuring IT service performance only.",
        isCorrect: false,
        explanation:
          "While performance measurement is part of ITIL, the SVS covers much more, including value creation and improvement.",
      },
    ],
  },
  {
    question:
      "Which two are core components of the ITIL Service Value System (SVS)? (Select TWO)",
    hasMultipleAnswers: true,
    answers: [
      {
        answer: "Service Value Chain",
        isCorrect: true,
        explanation:
          "The Service Value Chain is a central component of the SVS.",
      },
      {
        answer: "Guiding Principles",
        isCorrect: true,
        explanation:
          "Guiding Principles are a key part of the SVS, providing universal recommendations.",
      },
      {
        answer: "Incident Management",
        isCorrect: false,
        explanation:
          "Incident Management is an ITIL practice, not a core SVS component.",
      },
      {
        answer: "Service Desk",
        isCorrect: false,
        explanation:
          "Service Desk is an ITIL practice, not a core SVS component.",
      },
    ],
  },
  {
    question:
      "Which of the following is the BEST description of 'opportunity' in the context of the ITIL SVS?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "A possibility to add value for stakeholders or improve the organization.",
        isCorrect: true,
        explanation:
          "Opportunity refers to potential for value creation or improvement.",
      },
      {
        answer: "A mandatory requirement from a customer.",
        isCorrect: false,
        explanation:
          "Opportunities are not mandatory requirements, but potential improvements.",
      },
      {
        answer: "A risk that must be mitigated.",
        isCorrect: false,
        explanation: "Opportunities are positive possibilities, not risks.",
      },
      {
        answer: "A process for handling incidents.",
        isCorrect: false,
        explanation: "Opportunity is not a process, but a potential for value.",
      },
    ],
  },
  {
    question:
      "Which two guiding principles emphasize the importance of feedback and collaboration? (Select TWO)",
    hasMultipleAnswers: true,
    answers: [
      {
        answer: "Progress iteratively with feedback",
        isCorrect: true,
        explanation:
          "This principle stresses the value of incremental progress and regular feedback.",
      },
      {
        answer: "Collaborate and promote visibility",
        isCorrect: true,
        explanation:
          "This principle highlights the need for teamwork and transparency.",
      },
      {
        answer: "Optimize and automate",
        isCorrect: false,
        explanation:
          "This principle focuses on efficiency, not feedback or collaboration.",
      },
      {
        answer: "Keep it simple and practical",
        isCorrect: false,
        explanation:
          "This principle is about simplicity, not feedback or collaboration.",
      },
    ],
  },
  {
    question: "Which of the following is NOT a guiding principle of ITIL 4?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Document everything in detail",
        isCorrect: true,
        explanation:
          "ITIL 4 does not recommend documenting everything in detail; it promotes simplicity and practicality.",
      },
      {
        answer: "Focus on value",
        isCorrect: false,
        explanation: "Focus on value is a core guiding principle.",
      },
      {
        answer: "Start where you are",
        isCorrect: false,
        explanation: "Start where you are is a guiding principle.",
      },
      {
        answer: "Think and work holistically",
        isCorrect: false,
        explanation: "Think and work holistically is a guiding principle.",
      },
    ],
  },
  {
    question:
      "Which of the following is LEAST aligned with the principle 'Keep it simple and practical'?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "Adding unnecessary steps to a process to cover every possible scenario.",
        isCorrect: true,
        explanation:
          "This contradicts the principle, which encourages simplicity and practicality.",
      },
      {
        answer: "Eliminating redundant activities.",
        isCorrect: false,
        explanation: "This supports the principle by reducing complexity.",
      },
      {
        answer: "Focusing on delivering what is needed.",
        isCorrect: false,
        explanation: "This aligns with the principle.",
      },
      {
        answer: "Using the minimum number of steps to achieve an objective.",
        isCorrect: false,
        explanation: "This is in line with the principle.",
      },
    ],
  },
  {
    question:
      "A company is launching a new service. Which value chain activity ensures the service is designed to meet stakeholder expectations for quality, cost, and time to market?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Design and transition",
        isCorrect: true,
        explanation:
          "Design and transition ensures services meet stakeholder expectations before going live.",
      },
      {
        answer: "Engage",
        isCorrect: false,
        explanation: "Engage focuses on stakeholder relationships, not design.",
      },
      {
        answer: "Obtain/build",
        isCorrect: false,
        explanation: "Obtain/build is about acquiring resources, not design.",
      },
      {
        answer: "Deliver and support",
        isCorrect: false,
        explanation: "Deliver and support is about ongoing service delivery.",
      },
    ],
  },
  {
    question:
      "Which value chain activity is responsible for ensuring continual engagement and good relationships with all stakeholders?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Engage",
        isCorrect: true,
        explanation:
          "Engage is focused on stakeholder needs and relationships.",
      },
      {
        answer: "Plan",
        isCorrect: false,
        explanation: "Plan is about strategy and direction.",
      },
      {
        answer: "Improve",
        isCorrect: false,
        explanation: "Improve is about continual improvement.",
      },
      {
        answer: "Obtain/build",
        isCorrect: false,
        explanation: "Obtain/build is about acquiring resources.",
      },
    ],
  },
  {
    question:
      "Which of the following best describes the role of governance in the Service Value System?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "Ensuring that policies and continual improvement are aligned with the organization's direction and objectives.",
        isCorrect: true,
        explanation:
          "Governance ensures alignment with organizational goals and oversight of policies and improvement.",
      },
      {
        answer: "Managing only the IT department's daily activities.",
        isCorrect: false,
        explanation: "Governance is broader than just daily IT management.",
      },
      {
        answer: "Focusing solely on financial reporting.",
        isCorrect: false,
        explanation: "Governance covers more than financial reporting.",
      },
      {
        answer: "Defining technical standards for software development.",
        isCorrect: false,
        explanation:
          "Technical standards are part of practices, not governance.",
      },
    ],
  },
  {
    question:
      "A team wants to improve a process. According to the continual improvement model, what is the FIRST step they should take?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Understand the vision and business objectives.",
        isCorrect: true,
        explanation:
          "The first step is to understand the vision and objectives to ensure alignment.",
      },
      {
        answer: "Define measurable targets.",
        isCorrect: false,
        explanation:
          "Targets are set after understanding the vision and assessing the current state.",
      },
      {
        answer: "Execute improvement actions.",
        isCorrect: false,
        explanation: "Actions are taken after planning and setting targets.",
      },
      {
        answer: "Evaluate the results.",
        isCorrect: false,
        explanation: "Evaluation comes after actions are executed.",
      },
    ],
  },
  {
    question:
      "Which ITIL guiding principle encourages organizations to understand and prioritize what is truly important to stakeholders?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Focus on value",
        isCorrect: true,
        explanation:
          "This principle emphasizes the need to understand what creates value for stakeholders and to align activities accordingly.",
      },
      {
        answer: "Start where you are",
        isCorrect: false,
        explanation:
          "This principle is about assessing the current state before making changes.",
      },
      {
        answer: "Optimize and automate",
        isCorrect: false,
        explanation:
          "This principle is about improving efficiency, not directly about stakeholder value.",
      },
      {
        answer: "Collaborate and promote visibility",
        isCorrect: false,
        explanation: "This principle focuses on teamwork and transparency.",
      },
    ],
  },
  {
    question:
      "Which two activities are part of the continual improvement model? (Select TWO)",
    hasMultipleAnswers: true,
    answers: [
      {
        answer: "Define measurable targets",
        isCorrect: true,
        explanation:
          "Setting measurable targets is a key step in the continual improvement model.",
      },
      {
        answer: "Evaluate the results",
        isCorrect: true,
        explanation:
          "Evaluating results ensures that improvements are effective and objectives are met.",
      },
      {
        answer: "Ignore stakeholder feedback",
        isCorrect: false,
        explanation:
          "Ignoring feedback contradicts the model's emphasis on learning and adaptation.",
      },
      {
        answer: "Skip baseline assessment",
        isCorrect: false,
        explanation:
          "A baseline assessment is essential for understanding the starting point.",
      },
    ],
  },
  {
    question:
      "Which of the following is the BEST example of 'collaborate and promote visibility' in practice?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Regular cross-team meetings to share progress and challenges",
        isCorrect: true,
        explanation:
          "This approach fosters collaboration and ensures transparency across teams.",
      },
      {
        answer: "Working in isolation to complete tasks quickly",
        isCorrect: false,
        explanation: "Isolation reduces collaboration and visibility.",
      },
      {
        answer: "Automating all manual processes without consulting users",
        isCorrect: false,
        explanation:
          "Automation without collaboration can lead to misaligned outcomes.",
      },
      {
        answer: "Documenting every process in detail",
        isCorrect: false,
        explanation:
          "Detailed documentation does not guarantee collaboration or visibility.",
      },
    ],
  },
  {
    question:
      "Which of the following is NOT a value chain activity in the ITIL Service Value System?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Incident Management",
        isCorrect: true,
        explanation:
          "Incident Management is an ITIL practice, not a value chain activity.",
      },
      {
        answer: "Plan",
        isCorrect: false,
        explanation: "Plan is a value chain activity.",
      },
      {
        answer: "Engage",
        isCorrect: false,
        explanation: "Engage is a value chain activity.",
      },
      {
        answer: "Obtain/build",
        isCorrect: false,
        explanation: "Obtain/build is a value chain activity.",
      },
    ],
  },
  {
    question:
      "Which two statements about governance in the Service Value System are correct? (Select TWO)",
    hasMultipleAnswers: true,
    answers: [
      {
        answer:
          "Governance ensures alignment with organizational direction and objectives",
        isCorrect: true,
        explanation:
          "Governance provides oversight and ensures that activities support the organization's goals.",
      },
      {
        answer:
          "Governance includes evaluating, directing, and monitoring organizational performance",
        isCorrect: true,
        explanation: "These are the core activities of governance in the SVS.",
      },
      {
        answer: "Governance is only concerned with IT operations",
        isCorrect: false,
        explanation: "Governance covers the entire organization, not just IT.",
      },
      {
        answer: "Governance is optional in the SVS",
        isCorrect: false,
        explanation: "Governance is a required component of the SVS.",
      },
    ],
  },
  {
    question:
      "Which of the following is LEAST aligned with the principle 'Optimize and automate'?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Automating inefficient processes without improvement",
        isCorrect: true,
        explanation:
          "Optimizing should come before automating; automating inefficiency leads to poor results.",
      },
      {
        answer: "Streamlining processes before automation",
        isCorrect: false,
        explanation: "This aligns with the principle.",
      },
      {
        answer: "Using technology to reduce manual effort",
        isCorrect: false,
        explanation: "This supports the principle.",
      },
      {
        answer: "Reviewing processes for improvement opportunities",
        isCorrect: false,
        explanation: "This is part of optimization.",
      },
    ],
  },
  {
    question:
      "A team is unsure where to begin with process improvement. Which guiding principle should they apply first?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Start where you are",
        isCorrect: true,
        explanation:
          "This principle advises assessing the current state before making changes.",
      },
      {
        answer: "Focus on value",
        isCorrect: false,
        explanation:
          "While important, understanding the current state comes first.",
      },
      {
        answer: "Progress iteratively with feedback",
        isCorrect: false,
        explanation: "Iteration comes after understanding the starting point.",
      },
      {
        answer: "Keep it simple and practical",
        isCorrect: false,
        explanation:
          "Simplicity is important, but not the first step in improvement.",
      },
    ],
  },
  {
    question:
      "Which of the following is the BEST example of 'progress iteratively with feedback'?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "Implementing small changes and reviewing results before proceeding",
        isCorrect: true,
        explanation:
          "This approach allows for learning and adjustment at each step.",
      },
      {
        answer: "Making all changes at once without review",
        isCorrect: false,
        explanation: "This increases risk and reduces learning opportunities.",
      },
      {
        answer: "Ignoring feedback from stakeholders",
        isCorrect: false,
        explanation: "Feedback is essential for iterative progress.",
      },
      {
        answer: "Focusing only on long-term goals",
        isCorrect: false,
        explanation: "Short, iterative steps are more effective.",
      },
    ],
  },
  {
    question:
      "A service provider and consumer work together to improve a service. What is this an example of?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Value co-creation",
        isCorrect: true,
        explanation:
          "Value is co-created through collaboration between provider and consumer.",
      },
      {
        answer: "Service consumption",
        isCorrect: false,
        explanation:
          "Service consumption is only one side of the relationship.",
      },
      {
        answer: "Service provision",
        isCorrect: false,
        explanation: "Provision is the provider's activities only.",
      },
      {
        answer: "Governance",
        isCorrect: false,
        explanation: "Governance is about oversight, not direct collaboration.",
      },
    ],
  },
  {
    question:
      "Which guiding principle is MOST concerned with ensuring that improvements are based on actual data and current state analysis?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Start where you are",
        isCorrect: true,
        explanation:
          "This principle emphasizes the importance of understanding the current situation before making changes.",
      },
      {
        answer: "Focus on value",
        isCorrect: false,
        explanation:
          "Focus on value is about aligning activities with stakeholder needs, not necessarily about data-driven improvement.",
      },
      {
        answer: "Optimize and automate",
        isCorrect: false,
        explanation:
          "Optimize and automate is about efficiency, not specifically about starting with current data.",
      },
      {
        answer: "Collaborate and promote visibility",
        isCorrect: false,
        explanation: "This principle is about teamwork and transparency.",
      },
    ],
  },
  {
    question:
      "Which two value chain activities are directly involved in ensuring that services are delivered and supported according to agreed specifications? (Select TWO)",
    hasMultipleAnswers: true,
    answers: [
      {
        answer: "Deliver and support",
        isCorrect: true,
        explanation:
          "This activity ensures ongoing delivery and support of services.",
      },
      {
        answer: "Engage",
        isCorrect: true,
        explanation:
          "Engage maintains relationships and ensures stakeholder needs are met.",
      },
      {
        answer: "Plan",
        isCorrect: false,
        explanation: "Plan is about strategy, not direct delivery or support.",
      },
      {
        answer: "Obtain/build",
        isCorrect: false,
        explanation:
          "Obtain/build is about acquiring resources, not direct delivery or support.",
      },
    ],
  },
  {
    question:
      "Which of the following is the BEST example of 'think and work holistically'?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "Considering the impact of a change on all parts of the organization",
        isCorrect: true,
        explanation:
          "This principle requires understanding the interconnections within the organization.",
      },
      {
        answer: "Automating a single process without consulting other teams",
        isCorrect: false,
        explanation:
          "This ignores the holistic view and may cause issues elsewhere.",
      },
      {
        answer: "Focusing only on IT systems",
        isCorrect: false,
        explanation: "A holistic approach considers more than just IT.",
      },
      {
        answer: "Documenting every process in detail",
        isCorrect: false,
        explanation: "Documentation alone does not ensure a holistic approach.",
      },
    ],
  },
  {
    question:
      "Which of the following is NOT a core component of the ITIL Service Value System (SVS)?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Incident Management",
        isCorrect: true,
        explanation:
          "Incident Management is an ITIL practice, not a core SVS component.",
      },
      {
        answer: "Guiding Principles",
        isCorrect: false,
        explanation: "Guiding Principles are a core component of the SVS.",
      },
      {
        answer: "Governance",
        isCorrect: false,
        explanation: "Governance is a core component of the SVS.",
      },
      {
        answer: "Continual Improvement",
        isCorrect: false,
        explanation: "Continual Improvement is a core component of the SVS.",
      },
    ],
  },
  {
    question:
      "Which two statements about the continual improvement model are correct? (Select TWO)",
    hasMultipleAnswers: true,
    answers: [
      {
        answer: "It starts with understanding the vision and objectives",
        isCorrect: true,
        explanation:
          "The first step is to understand the vision and objectives.",
      },
      {
        answer: "It includes evaluating the results of improvement actions",
        isCorrect: true,
        explanation: "Evaluation is a key step in the model.",
      },
      {
        answer: "It skips baseline assessment to save time",
        isCorrect: false,
        explanation: "Baseline assessment is essential for measuring progress.",
      },
      {
        answer: "It ends with defining measurable targets",
        isCorrect: false,
        explanation: "Defining targets is an early step, not the final one.",
      },
    ],
  },
  {
    question:
      "Which of the following is LEAST aligned with the principle 'collaborate and promote visibility'?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Working in silos with limited communication",
        isCorrect: true,
        explanation: "This approach reduces collaboration and visibility.",
      },
      {
        answer: "Sharing progress updates with all stakeholders",
        isCorrect: false,
        explanation: "This supports collaboration and visibility.",
      },
      {
        answer: "Holding regular cross-functional meetings",
        isCorrect: false,
        explanation: "This encourages collaboration.",
      },
      {
        answer: "Making information accessible to relevant teams",
        isCorrect: false,
        explanation: "This promotes visibility.",
      },
    ],
  },
  {
    question:
      "A company wants to ensure that its services continually meet stakeholder expectations for quality, cost, and time to market. Which value chain activity is responsible for this?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Design and transition",
        isCorrect: true,
        explanation:
          "Design and transition ensures services meet stakeholder expectations before going live.",
      },
      {
        answer: "Plan",
        isCorrect: false,
        explanation: "Plan is about strategy and direction.",
      },
      {
        answer: "Obtain/build",
        isCorrect: false,
        explanation: "Obtain/build is about acquiring resources.",
      },
      {
        answer: "Deliver and support",
        isCorrect: false,
        explanation: "Deliver and support is about ongoing service delivery.",
      },
    ],
  },
  {
    question:
      "Which guiding principle is MOST likely to help an organization avoid overcomplicating its processes?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Keep it simple and practical",
        isCorrect: true,
        explanation:
          "This principle encourages simplicity and practicality in processes.",
      },
      {
        answer: "Optimize and automate",
        isCorrect: false,
        explanation:
          "This principle is about efficiency, not necessarily simplicity.",
      },
      {
        answer: "Progress iteratively with feedback",
        isCorrect: false,
        explanation: "This principle is about incremental improvement.",
      },
      {
        answer: "Think and work holistically",
        isCorrect: false,
        explanation: "This principle is about considering the whole system.",
      },
    ],
  },
  {
    question:
      "A team is planning a major change. Which guiding principle advises them to break the work into smaller, manageable sections and review after each step?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Progress iteratively with feedback",
        isCorrect: true,
        explanation:
          "This principle recommends making changes in small steps and seeking feedback.",
      },
      {
        answer: "Start where you are",
        isCorrect: false,
        explanation: "This principle is about assessing the current state.",
      },
      {
        answer: "Collaborate and promote visibility",
        isCorrect: false,
        explanation: "This principle is about teamwork and transparency.",
      },
      {
        answer: "Optimize and automate",
        isCorrect: false,
        explanation: "This principle is about efficiency.",
      },
    ],
  },
  {
    question:
      "Which guiding principle is MOST likely to prevent unnecessary work and complexity in processes?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Keep it simple and practical",
        isCorrect: true,
        explanation:
          "This principle encourages organizations to avoid overcomplicating processes and focus on what is essential.",
      },
      {
        answer: "Optimize and automate",
        isCorrect: false,
        explanation:
          "While this principle focuses on efficiency, it does not directly address unnecessary complexity.",
      },
      {
        answer: "Collaborate and promote visibility",
        isCorrect: false,
        explanation:
          "This principle is about teamwork and transparency, not simplicity.",
      },
      {
        answer: "Think and work holistically",
        isCorrect: false,
        explanation:
          "This principle is about considering the whole system, not specifically about simplicity.",
      },
    ],
  },
  {
    question:
      "Which two activities are part of the ITIL Service Value Chain? (Select TWO)",
    hasMultipleAnswers: true,
    answers: [
      {
        answer: "Plan",
        isCorrect: true,
        explanation: "Plan is a core activity in the Service Value Chain.",
      },
      {
        answer: "Obtain/build",
        isCorrect: true,
        explanation: "Obtain/build is also a Service Value Chain activity.",
      },
      {
        answer: "Incident Management",
        isCorrect: false,
        explanation:
          "Incident Management is an ITIL practice, not a value chain activity.",
      },
      {
        answer: "Service Desk",
        isCorrect: false,
        explanation:
          "Service Desk is an ITIL practice, not a value chain activity.",
      },
    ],
  },
  {
    question:
      "Which of the following is the BEST example of 'optimize and automate'?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Improving a process before introducing automation",
        isCorrect: true,
        explanation:
          "Optimization should occur before automation to ensure efficiency.",
      },
      {
        answer: "Automating a process without review",
        isCorrect: false,
        explanation:
          "Automating without optimization can lead to inefficiency.",
      },
      {
        answer: "Documenting every step in detail",
        isCorrect: false,
        explanation:
          "Detailed documentation does not equate to optimization or automation.",
      },
      {
        answer: "Focusing only on manual tasks",
        isCorrect: false,
        explanation: "This ignores the benefits of automation.",
      },
    ],
  },
  {
    question:
      "Which of the following is NOT a core component of the ITIL Service Value System (SVS)?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Service Request Management",
        isCorrect: true,
        explanation:
          "Service Request Management is an ITIL practice, not a core SVS component.",
      },
      {
        answer: "Guiding Principles",
        isCorrect: false,
        explanation: "Guiding Principles are a core component of the SVS.",
      },
      {
        answer: "Governance",
        isCorrect: false,
        explanation: "Governance is a core component of the SVS.",
      },
      {
        answer: "Continual Improvement",
        isCorrect: false,
        explanation: "Continual Improvement is a core component of the SVS.",
      },
    ],
  },
  {
    question:
      "Which two statements about the ITIL guiding principles are correct? (Select TWO)",
    hasMultipleAnswers: true,
    answers: [
      {
        answer: "They provide universal recommendations for service management",
        isCorrect: true,
        explanation:
          "Guiding principles are designed to be universally applicable.",
      },
      {
        answer: "They should be considered together, not in isolation",
        isCorrect: true,
        explanation: "Principles interact and should be applied holistically.",
      },
      {
        answer: "They are only relevant to IT teams",
        isCorrect: false,
        explanation:
          "Guiding principles are relevant to the entire organization.",
      },
      {
        answer: "They replace the need for practices",
        isCorrect: false,
        explanation: "Guiding principles complement, not replace, practices.",
      },
    ],
  },
  {
    question:
      "Which of the following is LEAST aligned with the principle 'think and work holistically'?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Focusing only on one department's needs",
        isCorrect: true,
        explanation:
          "This approach ignores the interconnectedness of the organization.",
      },
      {
        answer: "Considering the impact of changes on all stakeholders",
        isCorrect: false,
        explanation: "This supports a holistic approach.",
      },
      {
        answer: "Ensuring all value chain activities are coordinated",
        isCorrect: false,
        explanation: "This is in line with holistic thinking.",
      },
      {
        answer: "Collaborating across teams",
        isCorrect: false,
        explanation: "Collaboration supports holistic work.",
      },
    ],
  },
  {
    question:
      "A team is planning a process improvement. According to the continual improvement model, what should they do after defining measurable targets?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Define the improvement plan",
        isCorrect: true,
        explanation:
          "After setting targets, the next step is to plan the improvement actions.",
      },
      {
        answer: "Execute improvement actions",
        isCorrect: false,
        explanation: "Execution comes after planning.",
      },
      {
        answer: "Evaluate the results",
        isCorrect: false,
        explanation: "Evaluation is the final step.",
      },
      {
        answer: "Understand the vision and objectives",
        isCorrect: false,
        explanation: "This is the first step, not after defining targets.",
      },
    ],
  },
  {
    question:
      "Which guiding principle is MOST relevant when a team is unsure about the current state of a process?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Start where you are",
        isCorrect: true,
        explanation:
          "This principle emphasizes assessing the current state before making changes.",
      },
      {
        answer: "Focus on value",
        isCorrect: false,
        explanation:
          "Focusing on value is important, but understanding the current state comes first.",
      },
      {
        answer: "Progress iteratively with feedback",
        isCorrect: false,
        explanation: "Iteration comes after understanding the starting point.",
      },
      {
        answer: "Optimize and automate",
        isCorrect: false,
        explanation: "Optimization is not the first step in improvement.",
      },
    ],
  },
  {
    question:
      "A company wants to ensure that all stakeholders are engaged and their needs are understood. Which value chain activity is responsible for this?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Engage",
        isCorrect: true,
        explanation:
          "Engage is focused on stakeholder relationships and understanding their needs.",
      },
      {
        answer: "Plan",
        isCorrect: false,
        explanation: "Plan is about strategy and direction.",
      },
      {
        answer: "Obtain/build",
        isCorrect: false,
        explanation: "Obtain/build is about acquiring resources.",
      },
      {
        answer: "Deliver and support",
        isCorrect: false,
        explanation: "Deliver and support is about ongoing service delivery.",
      },
    ],
  },
  {
    question:
      "Which of the following is NOT a step in the continual improvement model?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Skip defining measurable targets",
        isCorrect: true,
        explanation:
          "Defining measurable targets is an essential step and should not be skipped.",
      },
      {
        answer: "Understand the vision and objectives",
        isCorrect: false,
        explanation: "This is the first step in the model.",
      },
      {
        answer: "Define the improvement plan",
        isCorrect: false,
        explanation: "This is a key step in the model.",
      },
      {
        answer: "Evaluate the results",
        isCorrect: false,
        explanation: "This is a final step in the model.",
      },
    ],
  },
  {
    question:
      "Which ITIL 4 management practice is responsible for providing an understanding of all the different elements that make up an organization and how those elements relate to one another?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Architecture management",
        isCorrect: true,
        explanation:
          "Architecture management provides an understanding of all the different elements that make up an organization and how those elements relate to one another.",
      },
      {
        answer: "Knowledge management",
        isCorrect: false,
        explanation:
          "Knowledge management focuses on maintaining and improving the effective, efficient, and convenient use of information and knowledge across the organization, not on organizational structure.",
      },
      {
        answer: "Portfolio management",
        isCorrect: false,
        explanation:
          "Portfolio management is about ensuring the organization has the right mix of programs, projects, products, and services to achieve its objectives.",
      },
      {
        answer: "Service configuration management",
        isCorrect: false,
        explanation:
          "Service configuration management ensures that accurate and reliable information about the configuration of services is available, not about the overall organizational structure.",
      },
    ],
  },
  {
    question:
      "Which of the following is the BEST description of the Continual Improvement practice?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "Aligning an organization’s practices and services with changing business needs through ongoing identification and improvement of all elements involved in the management of products and services.",
        isCorrect: true,
        explanation:
          "Continual improvement is about ongoing identification and improvement of all elements involved in the management of products and services to align with changing business needs.",
      },
      {
        answer:
          "Ensuring that services deliver agreed levels of availability to meet the needs of customers and users.",
        isCorrect: false,
        explanation:
          "This describes the Availability Management practice, not Continual Improvement.",
      },
      {
        answer: "Ensuring that risks are properly assessed and managed.",
        isCorrect: false,
        explanation:
          "This describes the Risk Management practice, not Continual Improvement.",
      },
      {
        answer:
          "Ensuring that the organization has the right mix of programs, projects, products, and services.",
        isCorrect: false,
        explanation:
          "This describes Portfolio Management, not Continual Improvement.",
      },
    ],
  },
  {
    question:
      "Which TWO practices are classified as technical management practices in ITIL 4? (Select two.)",
    hasMultipleAnswers: true,
    answers: [
      {
        answer: "Deployment management",
        isCorrect: true,
        explanation:
          "Deployment management is a technical management practice responsible for moving new or changed hardware, software, documentation, processes, or any other service component to live environments.",
      },
      {
        answer: "Software development and management",
        isCorrect: true,
        explanation:
          "Software development and management is a technical management practice focused on the development and management of software applications.",
      },
      {
        answer: "Service desk",
        isCorrect: false,
        explanation:
          "Service desk is a service management practice, not a technical management practice.",
      },
      {
        answer: "Supplier management",
        isCorrect: false,
        explanation:
          "Supplier management is a general management practice, not a technical management practice.",
      },
    ],
  },
  {
    question:
      "Which TWO practices are general management practices in ITIL 4? (Select two.)",
    hasMultipleAnswers: true,
    answers: [
      {
        answer: "Risk management",
        isCorrect: true,
        explanation:
          "Risk management is a general management practice focused on ensuring that the organization understands and effectively handles risks.",
      },
      {
        answer: "Workforce and talent management",
        isCorrect: true,
        explanation:
          "Workforce and talent management is a general management practice that ensures the organization has the right people with the right skills.",
      },
      {
        answer: "Incident management",
        isCorrect: false,
        explanation:
          "Incident management is a service management practice, not a general management practice.",
      },
      {
        answer: "Release management",
        isCorrect: false,
        explanation:
          "Release management is a service management practice, not a general management practice.",
      },
    ],
  },
  {
    question:
      "Which of the following is the BEST example of the purpose of the Service Desk practice?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "To act as a single point of contact for users to report issues, make requests, and ask questions.",
        isCorrect: true,
        explanation:
          "The Service Desk practice provides a single point of contact for users to interact with the IT organization.",
      },
      {
        answer:
          "To ensure that services deliver agreed levels of availability.",
        isCorrect: false,
        explanation:
          "This describes Availability Management, not Service Desk.",
      },
      {
        answer: "To ensure that risks are properly assessed and managed.",
        isCorrect: false,
        explanation: "This describes Risk Management, not Service Desk.",
      },
      {
        answer:
          "To ensure that the organization has the right mix of programs, projects, products, and services.",
        isCorrect: false,
        explanation:
          "This describes Portfolio Management, not Service Desk.",
      },
    ],
  },
  {
    question:
      "Which of the following is NOT a purpose of the Change Enablement practice?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "To ensure that all changes are implemented without any risk.",
        isCorrect: true,
        explanation:
          "Change Enablement aims to ensure that risks are properly assessed and managed, but it cannot guarantee that all changes are implemented without any risk.",
      },
      {
        answer: "To ensure that risks are properly assessed.",
        isCorrect: false,
        explanation:
          "Assessing risks is a key purpose of Change Enablement.",
      },
      {
        answer: "To authorize changes to proceed.",
        isCorrect: false,
        explanation:
          "Authorizing changes is a key purpose of Change Enablement.",
      },
      {
        answer: "To manage a change schedule.",
        isCorrect: false,
        explanation:
          "Managing a change schedule is a key purpose of Change Enablement.",
      },
    ],
  },
  {
    question:
      "Which of the following is NOT a responsibility of the Service Configuration Management practice?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Ensuring that services deliver agreed levels of availability.",
        isCorrect: true,
        explanation:
          "Ensuring agreed levels of availability is the responsibility of Availability Management, not Service Configuration Management.",
      },
      {
        answer:
          "Ensuring that accurate and reliable information about the configuration of services is available.",
        isCorrect: false,
        explanation:
          "This is a key responsibility of Service Configuration Management.",
      },
      {
        answer: "Maintaining information about configuration items (CIs).",
        isCorrect: false,
        explanation:
          "This is a key responsibility of Service Configuration Management.",
      },
      {
        answer: "Maintaining relationships between configuration records.",
        isCorrect: false,
        explanation:
          "This is a key responsibility of Service Configuration Management.",
      },
    ],
  },
  {
    question:
      "A company is planning to launch a new service. Which practice would be MOST responsible for ensuring that the service can meet current and future demand in a cost-effective way?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Capacity and performance management",
        isCorrect: true,
        explanation:
          "Capacity and performance management ensures that services achieve agreed and expected performance levels, satisfying current and future demand in a cost-effective way.",
      },
      {
        answer: "Service desk",
        isCorrect: false,
        explanation:
          "Service desk is responsible for acting as a single point of contact for users, not for managing capacity and performance.",
      },
      {
        answer: "Change enablement",
        isCorrect: false,
        explanation:
          "Change enablement is responsible for managing changes, not for managing capacity and performance.",
      },
      {
        answer: "Service request management",
        isCorrect: false,
        explanation:
          "Service request management is responsible for handling user requests, not for managing capacity and performance.",
      },
    ],
  },
  {
    question:
      "A user reports an issue with a service. Which practice is MOST likely to be the first point of contact?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Service desk",
        isCorrect: true,
        explanation:
          "The service desk is the single point of contact for users to report issues, make requests, and ask questions.",
      },
      {
        answer: "Incident management",
        isCorrect: false,
        explanation:
          "Incident management is responsible for managing the lifecycle of incidents, but the service desk is usually the first point of contact.",
      },
      {
        answer: "Problem management",
        isCorrect: false,
        explanation:
          "Problem management focuses on managing the lifecycle of all problems, not on being the first point of contact.",
      },
      {
        answer: "Change enablement",
        isCorrect: false,
        explanation:
          "Change enablement is responsible for managing changes, not for being the first point of contact for users.",
      },
    ],
  },
  {
    question:
      "A major incident has occurred, and the organization needs to restore service as quickly as possible. Which practice is MOST responsible for this?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Incident management",
        isCorrect: true,
        explanation:
          "Incident management is responsible for minimizing the negative impact of incidents by restoring normal service operation as quickly as possible.",
      },
      {
        answer: "Problem management",
        isCorrect: false,
        explanation:
          "Problem management focuses on identifying and managing the root causes of incidents, not on immediate restoration of service.",
      },
      {
        answer: "Change enablement",
        isCorrect: false,
        explanation:
          "Change enablement is responsible for managing changes, not for restoring service after incidents.",
      },
      {
        answer: "Service request management",
        isCorrect: false,
        explanation:
          "Service request management is responsible for handling user requests, not for restoring service after incidents.",
      },
    ],
  },
  {
    question:
      "What is the primary purpose of the ITIL 4 architecture management practice?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "To provide an understanding of all the different elements that make up an organization and how those elements relate to one another",
        isCorrect: true,
        explanation:
          "According to ITIL 4, the purpose of architecture management practice is to provide an understanding of all the different elements that make up an organization and how those elements relate to one another, enabling the organization to effectively achieve its current and future objectives.",
      },
      {
        answer: "To manage the organization's financial resources and budgets",
        isCorrect: false,
        explanation:
          "This describes service financial management practice, not architecture management. Architecture management focuses on organizational elements and their relationships.",
      },
      {
        answer:
          "To handle user requests and incidents through a single point of contact",
        isCorrect: false,
        explanation:
          "This describes the service desk practice. Architecture management is concerned with understanding organizational structure and element relationships.",
      },
      {
        answer:
          "To protect information from unauthorized access and security threats",
        isCorrect: false,
        explanation:
          "This describes information security management practice. Architecture management focuses on organizational architecture and element relationships.",
      },
    ],
  },
  {
    question:
      "Which of the following best describes the continual improvement practice in ITIL 4?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "A one-time project to fix organizational problems",
        isCorrect: false,
        explanation:
          "Continual improvement is an ongoing practice, not a one-time project. It involves regular, iterative improvements over time.",
      },
      {
        answer:
          "The practice of aligning an organization's practices and services with changing business needs through ongoing identification and improvement",
        isCorrect: true,
        explanation:
          "This correctly defines continual improvement practice as ongoing alignment with changing business needs through continuous identification and improvement of all elements involved in service management.",
      },
      {
        answer:
          "The process of deploying new software to production environments",
        isCorrect: false,
        explanation:
          "This describes deployment management practice. Continual improvement focuses on ongoing enhancement of practices and services.",
      },
      {
        answer: "The management of supplier relationships and contracts",
        isCorrect: false,
        explanation:
          "This describes supplier management practice. Continual improvement is about ongoing enhancement of organizational practices and services.",
      },
    ],
  },
  {
    question:
      "What are the three main categories of ITIL 4 management practices?",
    hasMultipleAnswers: true,
    answers: [
      {
        answer: "General management practices",
        isCorrect: true,
        explanation:
          "General management practices are one of the three main categories, focusing on organizational capabilities that support the entire business.",
      },
      {
        answer: "Service management practices",
        isCorrect: true,
        explanation:
          "Service management practices are one of the three main categories, specifically designed for managing IT services throughout their lifecycle.",
      },
      {
        answer: "Technical management practices",
        isCorrect: true,
        explanation:
          "Technical management practices are one of the three main categories, adapted from technology management domains for service management purposes.",
      },
      {
        answer: "Business management practices",
        isCorrect: false,
        explanation:
          "There is no 'business management practices' category in ITIL 4. The three categories are general management, service management, and technical management practices.",
      },
    ],
  },
  {
    question:
      "Which practice is primarily responsible for ensuring that risks are properly assessed and changes are authorized to proceed?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Problem management",
        isCorrect: false,
        explanation:
          "Problem management focuses on identifying and managing the root causes of incidents, not on assessing and authorizing changes.",
      },
      {
        answer: "Change enablement",
        isCorrect: true,
        explanation:
          "Change enablement practice ensures that risks are properly assessed, authorizes changes to proceed, and manages a change schedule to maximize successful service and product changes.",
      },
      {
        answer: "Release management",
        isCorrect: false,
        explanation:
          "Release management focuses on planning, scheduling, and controlling the build, test, and deployment of releases, not specifically on risk assessment and change authorization.",
      },
      {
        answer: "Service validation and testing",
        isCorrect: false,
        explanation:
          "Service validation and testing ensures that new or changed products and services meet defined requirements, but doesn't focus on risk assessment and change authorization.",
      },
    ],
  },
  {
    question:
      "In ITIL 4, what is the key difference between incident management and problem management?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "Incident management handles hardware issues while problem management handles software issues",
        isCorrect: false,
        explanation:
          "Both practices can handle hardware and software issues. The distinction is not based on the type of technology involved.",
      },
      {
        answer:
          "Incident management focuses on restoring service quickly while problem management focuses on identifying and addressing root causes",
        isCorrect: true,
        explanation:
          "Incident management aims to restore normal service operation as quickly as possible, while problem management focuses on identifying and managing the root causes of incidents to prevent recurrence.",
      },
      {
        answer:
          "Incident management is reactive while problem management is only proactive",
        isCorrect: false,
        explanation:
          "While incident management is primarily reactive, problem management can be both reactive (responding to incidents) and proactive (identifying potential problems before they cause incidents).",
      },
      {
        answer:
          "There is no difference - they are the same practice with different names",
        isCorrect: false,
        explanation:
          "These are distinct practices with different purposes: incident management focuses on service restoration, while problem management focuses on root cause analysis and prevention.",
      },
    ],
  },
  {
    question:
      "Which of the following is NOT a characteristic of the service desk practice in ITIL 4?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "Provides a single point of contact between users and the IT organization",
        isCorrect: false,
        explanation:
          "This is a key characteristic of the service desk practice - it serves as the single point of contact for users to interact with IT services.",
      },
      {
        answer: "Handles both incidents and service requests",
        isCorrect: false,
        explanation:
          "The service desk practice does handle both incidents and service requests as part of its core functionality.",
      },
      {
        answer:
          "Automatically resolves all technical problems without human intervention",
        isCorrect: true,
        explanation:
          "The service desk does not automatically resolve all problems without human intervention. While it may use automation for some tasks, human involvement is essential for many service desk activities.",
      },
      {
        answer: "Provides information about services and how to use them",
        isCorrect: false,
        explanation:
          "Providing information about services and their usage is indeed a characteristic of the service desk practice.",
      },
    ],
  },
  {
    question:
      "A company is experiencing repeated failures in their email system every Monday morning, causing significant business disruption. The IT team quickly restores service each time, but the issue keeps recurring. Which scenario best describes the appropriate ITIL 4 practice response?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "Only incident management is needed since the service is being restored quickly",
        isCorrect: false,
        explanation:
          "While incident management handles the immediate restoration, the recurring nature of the problem indicates that problem management should also be involved to identify and address the root cause.",
      },
      {
        answer:
          "Problem management should investigate the root cause while incident management continues to handle service restoration",
        isCorrect: true,
        explanation:
          "This scenario requires both practices: incident management to restore service quickly each time, and problem management to investigate and resolve the underlying root cause to prevent recurrence.",
      },
      {
        answer:
          "Change enablement should immediately implement a solution without investigation",
        isCorrect: false,
        explanation:
          "Change enablement would be involved after problem management identifies the root cause and develops a solution. Implementing changes without proper investigation could cause more problems.",
      },
      {
        answer:
          "Service level management should renegotiate the email service agreement",
        isCorrect: false,
        explanation:
          "While service levels might be affected, the primary need is to identify and fix the root cause through problem management, not to change service level agreements.",
      },
    ],
  },
  {
    question:
      "Which of the following statements about ITIL 4 technical management practices is most accurate?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "There are five technical management practices in ITIL 4",
        isCorrect: false,
        explanation:
          "ITIL 4 defines exactly three technical management practices, not five.",
      },
      {
        answer:
          "Technical management practices focus only on hardware management",
        isCorrect: false,
        explanation:
          "Technical management practices cover both hardware and software aspects, including infrastructure, platforms, and software development and management.",
      },
      {
        answer:
          "There are three technical management practices adapted from technology management domains",
        isCorrect: true,
        explanation:
          "ITIL 4 includes exactly three technical management practices: deployment management, infrastructure and platform management, and software development and management, adapted from technology management domains.",
      },
      {
        answer:
          "Technical management practices are the same as service management practices",
        isCorrect: false,
        explanation:
          "Technical management practices and service management practices are distinct categories with different focuses and purposes within the ITIL 4 framework.",
      },
    ],
  },
  {
    question: "How many total management practices are defined in ITIL 4?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "26 practices",
        isCorrect: false,
        explanation:
          "26 was the number of processes in ITIL v3, not the number of practices in ITIL 4.",
      },
      {
        answer: "30 practices",
        isCorrect: false,
        explanation:
          "ITIL 4 defines more than 30 management practices across all three categories.",
      },
      {
        answer: "34 practices",
        isCorrect: true,
        explanation:
          "ITIL 4 defines exactly 34 management practices total: 14 general management practices, 17 service management practices, and 3 technical management practices.",
      },
      {
        answer: "40 practices",
        isCorrect: false,
        explanation:
          "ITIL 4 defines 34 management practices, not 40. The number 40 refers to the number of questions in the ITIL 4 Foundation exam.",
      },
    ],
  },
  {
    question:
      "In the context of ITIL 4 service management practices, what is the primary focus of capacity and performance management?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Managing user access rights and permissions",
        isCorrect: false,
        explanation:
          "Managing user access rights and permissions is related to information security management and access management, not capacity and performance management.",
      },
      {
        answer:
          "Ensuring services achieve agreed performance levels and satisfy current and future demand cost-effectively",
        isCorrect: true,
        explanation:
          "Capacity and performance management practice focuses on ensuring that services achieve agreed and expected performance levels, satisfying current and future demand in a cost-effective way.",
      },
      {
        answer:
          "Creating and maintaining service level agreements with customers",
        isCorrect: false,
        explanation:
          "Creating and maintaining service level agreements is the focus of service level management practice, not capacity and performance management.",
      },
      {
        answer: "Managing the financial aspects of IT services and budgeting",
        isCorrect: false,
        explanation:
          "Managing financial aspects and budgeting relates to service financial management practice, not capacity and performance management.",
      },
    ],
  },
  {
    question:
      "Which ITIL 4 practice is responsible for ensuring that information needed by the organization to conduct its business is protected?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Information security management",
        isCorrect: true,
        explanation:
          "Information security management practice is responsible for protecting the information needed by the organization to conduct its business.",
      },
      {
        answer: "Service configuration management",
        isCorrect: false,
        explanation:
          "Service configuration management focuses on maintaining information about configuration items, not on protecting information.",
      },
      {
        answer: "IT asset management",
        isCorrect: false,
        explanation:
          "IT asset management is responsible for managing assets, not specifically for information protection.",
      },
      {
        answer: "Obtain/Build",
        isCorrect: false,
        explanation:
          "Obtain/Build is a value chain activity, not a management practice focused on information protection.",
      },
    ],
  },
  {
    question:
      "What is the primary purpose of the service request management practice?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "To support the agreed quality of a service by handling all pre-defined, user-initiated service requests in an effective and user-friendly manner",
        isCorrect: true,
        explanation:
          "Service request management practice is designed to handle all pre-defined, user-initiated service requests efficiently and effectively.",
      },
      {
        answer: "To restore normal service operation as quickly as possible",
        isCorrect: false,
        explanation:
          "This is the purpose of incident management, not service request management.",
      },
      {
        answer: "To identify and manage the root causes of incidents",
        isCorrect: false,
        explanation:
          "This is the purpose of problem management, not service request management.",
      },
      {
        answer: "To authorize and manage changes to services",
        isCorrect: false,
        explanation:
          "This is the purpose of change enablement, not service request management.",
      },
    ],
  },
  {
    question: "Which of the following is NOT a guiding principle of ITIL 4?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Adopt an agile mentality",
        isCorrect: true,
        explanation:
          "‘Adopt an agile mentality’ is not one of the official ITIL 4 guiding principles.",
      },
      {
        answer: "Focus on value",
        isCorrect: false,
        explanation:
          "‘Focus on value’ is one of the ITIL 4 guiding principles.",
      },
      {
        answer: "Start where you are",
        isCorrect: false,
        explanation:
          "‘Start where you are’ is one of the ITIL 4 guiding principles.",
      },
      {
        answer: "Progress iteratively with feedback",
        isCorrect: false,
        explanation:
          "‘Progress iteratively with feedback’ is one of the ITIL 4 guiding principles.",
      },
    ],
  },
  {
    question:
      "Which practice is responsible for the care and control of hardware, software, people, and other elements involved in providing and maintaining services?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "IT asset management",
        isCorrect: true,
        explanation:
          "IT asset management practice is responsible for the care and control of all assets involved in service provision and maintenance.",
      },
      {
        answer: "Change enablement",
        isCorrect: false,
        explanation:
          "Change enablement is responsible for managing changes, not asset control.",
      },
      {
        answer: "Service configuration management",
        isCorrect: false,
        explanation:
          "Service configuration management maintains information about configuration items, not their care and control.",
      },
      {
        answer: "Service portfolio management",
        isCorrect: false,
        explanation:
          "Service portfolio management focuses on managing the service portfolio, not asset control.",
      },
    ],
  },
  {
    question:
      "Which of the following statements about risks in ITIL 4 is correct?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "Risks can represent the possibility of something good happening",
        isCorrect: true,
        explanation:
          "In ITIL 4, risks are not always negative; they can also represent opportunities for positive outcomes.",
      },
      {
        answer: "Risks should always be avoided",
        isCorrect: false,
        explanation:
          "Not all risks should be avoided; some may be accepted or managed for potential benefit.",
      },
      {
        answer: "Risks are always negative",
        isCorrect: false,
        explanation: "Risks can be positive or negative in ITIL 4.",
      },
      {
        answer: "Risks cannot be avoided",
        isCorrect: false,
        explanation: "Some risks can be avoided, but not all.",
      },
    ],
  },
  {
    question:
      "Which of the following is the best description of a 'problem' in ITIL 4?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "A cause, or potential cause, of one or more incidents",
        isCorrect: true,
        explanation:
          "A problem is defined as a cause, or potential cause, of one or more incidents.",
      },
      {
        answer: "A service disruption",
        isCorrect: false,
        explanation: "A service disruption is an incident, not a problem.",
      },
      {
        answer: "A service interruption",
        isCorrect: false,
        explanation: "A service interruption is an incident, not a problem.",
      },
      {
        answer: "An incident",
        isCorrect: false,
        explanation:
          "An incident is an unplanned interruption or reduction in service quality, not a problem.",
      },
    ],
  },
  {
    question:
      "Which of the following is NOT a correct dimension of service management?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Value streams and people",
        isCorrect: true,
        explanation:
          "‘Value streams and people’ is not a correct dimension; the correct dimension is ‘value streams and processes’.",
      },
      {
        answer: "Information and technology",
        isCorrect: false,
        explanation:
          "‘Information and technology’ is a correct dimension of service management.",
      },
      {
        answer: "Value streams and processes",
        isCorrect: false,
        explanation:
          "‘Value streams and processes’ is a correct dimension of service management.",
      },
      {
        answer: "Partners and suppliers",
        isCorrect: false,
        explanation:
          "‘Partners and suppliers’ is a correct dimension of service management.",
      },
    ],
  },
  {
    question:
      "Which practice is responsible for setting clear business-based targets for service performance?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Service level management",
        isCorrect: true,
        explanation:
          "Service level management is responsible for setting clear business-based targets for service performance.",
      },
      {
        answer: "Service strategy",
        isCorrect: false,
        explanation:
          "Service strategy is not a practice in ITIL 4; service level management sets performance targets.",
      },
      {
        answer: "Information security management",
        isCorrect: false,
        explanation:
          "Information security management focuses on protecting information, not setting service performance targets.",
      },
      {
        answer: "Workforce & talent management",
        isCorrect: false,
        explanation:
          "Workforce & talent management focuses on people, not service performance targets.",
      },
    ],
  },
  {
    question:
      "Which of the following is a correct statement about the service desk practice?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "It should be adequately resourced, motivated, led, and supported",
        isCorrect: true,
        explanation:
          "The service desk should be adequately resourced, motivated, led, and supported to function effectively.",
      },
      {
        answer: "It should be outsourced whenever possible to save money",
        isCorrect: false,
        explanation:
          "Outsourcing is not always the best option; the focus should be on effectiveness.",
      },
      {
        answer: "It should be automated in every case",
        isCorrect: false,
        explanation:
          "Automation can help, but human involvement is often necessary.",
      },
      {
        answer:
          "It should only be outsourced if there are problems with the service desk",
        isCorrect: false,
        explanation:
          "Outsourcing decisions should be based on business needs, not just problems.",
      },
    ],
  },
  {
    question:
      "Which of the following is a correct output of the 'Obtain/Build' value chain activity?",
    hasMultipleAnswers: true,
    answers: [
      {
        answer: "Service components for deliver and support",
        isCorrect: true,
        explanation:
          "Obtain/Build produces service components for deliver and support.",
      },
      {
        answer: "Service components for design and transition",
        isCorrect: true,
        explanation:
          "Obtain/Build produces service components for design and transition.",
      },
      {
        answer:
          "Knowledge and information about new and changed service components to all value chain activities",
        isCorrect: true,
        explanation:
          "Obtain/Build provides knowledge and information about new and changed service components.",
      },
      {
        answer: "Improvement status reports from improve",
        isCorrect: false,
        explanation:
          "Improvement status reports are outputs from the 'Improve' activity, not 'Obtain/Build'.",
      },
    ],
  },
  {
    question:
      "What is the primary purpose of the monitoring and event management practice in ITIL 4?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "To systematically observe services and service components, and record and report selected changes of state identified as events",
        isCorrect: true,
        explanation:
          "Monitoring and event management practice systematically observes services and service components, recording and reporting changes of state that are identified as events.",
      },
      {
        answer: "To restore normal service operation as quickly as possible",
        isCorrect: false,
        explanation:
          "This is the purpose of incident management practice, not monitoring and event management.",
      },
      {
        answer:
          "To ensure that risks are properly assessed before authorizing changes",
        isCorrect: false,
        explanation:
          "This is the purpose of change enablement practice, not monitoring and event management.",
      },
      {
        answer: "To provide a single point of contact for users",
        isCorrect: false,
        explanation:
          "This is the purpose of service desk practice, not monitoring and event management.",
      },
    ],
  },
  {
    question:
      "Which of the following are components of the ITIL 4 Service Value System?",
    hasMultipleAnswers: true,
    answers: [
      {
        answer: "Guiding principles",
        isCorrect: true,
        explanation:
          "Guiding principles are one of the five components of the ITIL 4 Service Value System.",
      },
      {
        answer: "Service value chain",
        isCorrect: true,
        explanation:
          "The service value chain is one of the five components of the ITIL 4 Service Value System.",
      },
      {
        answer: "Governance",
        isCorrect: true,
        explanation:
          "Governance is one of the five components of the ITIL 4 Service Value System.",
      },
      {
        answer: "Service lifecycle",
        isCorrect: false,
        explanation:
          "Service lifecycle was part of ITIL v3, not ITIL 4. ITIL 4 uses the Service Value System instead.",
      },
    ],
  },
  {
    question: "What is the definition of 'utility' in ITIL 4?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "The functionality offered by a product or service to meet a particular need",
        isCorrect: true,
        explanation:
          "Utility is defined as the functionality offered by a product or service to meet a particular need - what the service does.",
      },
      {
        answer: "How well a service is perceived by stakeholders",
        isCorrect: false,
        explanation:
          "This relates more to value perception rather than utility specifically.",
      },
      {
        answer:
          "The assurance that a product or service will meet agreed requirements",
        isCorrect: false,
        explanation:
          "This describes warranty, not utility. Warranty is about how the service performs.",
      },
      {
        answer: "The total cost of ownership for a service",
        isCorrect: false,
        explanation: "This describes cost considerations, not utility.",
      },
    ],
  },
  {
    question:
      "Which practice is responsible for ensuring that accurate and reliable information about configuration items is available when and where needed?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Service configuration management",
        isCorrect: true,
        explanation:
          "Service configuration management practice ensures that accurate and reliable information about configuration items is available when and where needed.",
      },
      {
        answer: "Knowledge management",
        isCorrect: false,
        explanation:
          "Knowledge management focuses on organizational knowledge, not specifically configuration item information.",
      },
      {
        answer: "IT asset management",
        isCorrect: false,
        explanation:
          "IT asset management focuses on the care and control of assets, not configuration information.",
      },
      {
        answer: "Measurement and reporting",
        isCorrect: false,
        explanation:
          "Measurement and reporting focuses on metrics and reporting, not configuration information.",
      },
    ],
  },
  {
    question:
      "Which of the following is NOT one of the seven ITIL 4 guiding principles?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Manage by exception",
        isCorrect: true,
        explanation:
          "'Manage by exception' is not one of the seven ITIL 4 guiding principles.",
      },
      {
        answer: "Think and work holistically",
        isCorrect: false,
        explanation:
          "'Think and work holistically' is one of the seven ITIL 4 guiding principles.",
      },
      {
        answer: "Keep it simple and practical",
        isCorrect: false,
        explanation:
          "'Keep it simple and practical' is one of the seven ITIL 4 guiding principles.",
      },
      {
        answer: "Optimize and automate",
        isCorrect: false,
        explanation:
          "'Optimize and automate' is one of the seven ITIL 4 guiding principles.",
      },
    ],
  },
  {
    question:
      "In ITIL 4, what is the difference between an output and an outcome?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "An output is a tangible or intangible deliverable, while an outcome is a result for a stakeholder enabled by outputs",
        isCorrect: true,
        explanation:
          "An output is a tangible or intangible deliverable of an activity, while an outcome is a result for a stakeholder enabled by one or more outputs.",
      },
      {
        answer:
          "An output is always tangible, while an outcome is always intangible",
        isCorrect: false,
        explanation:
          "Outputs can be either tangible or intangible, not just tangible.",
      },
      {
        answer: "There is no difference - they are the same thing",
        isCorrect: false,
        explanation:
          "Outputs and outcomes are distinct concepts in ITIL 4 with different meanings.",
      },
      {
        answer:
          "An output is internal to the organization, while an outcome is external",
        isCorrect: false,
        explanation:
          "The distinction is not based on internal vs external, but on deliverable vs result.",
      },
    ],
  },
  {
    question:
      "A software development company wants to implement ITIL 4 practices but is concerned about disrupting their existing Agile development processes. Which guiding principle should they primarily focus on?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Start where you are",
        isCorrect: true,
        explanation:
          "The 'Start where you are' guiding principle advises not to start from scratch but to consider what is already available and working, including existing Agile processes.",
      },
      {
        answer: "Focus on value",
        isCorrect: false,
        explanation:
          "While important, 'Focus on value' doesn't specifically address the concern about disrupting existing processes.",
      },
      {
        answer: "Optimize and automate",
        isCorrect: false,
        explanation:
          "This principle focuses on optimization and automation, not on preserving existing processes.",
      },
      {
        answer: "Keep it simple and practical",
        isCorrect: false,
        explanation:
          "While relevant, this principle doesn't specifically address building on existing processes.",
      },
    ],
  },
  {
    question:
      "Which of the following statements about the ITIL 4 service value chain activities is most accurate?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "The activities can be combined in different sequences to create various value streams",
        isCorrect: true,
        explanation:
          "The service value chain activities are flexible and can be combined in different sequences to define various value streams for different scenarios.",
      },
      {
        answer: "The activities must always be performed in a sequential order",
        isCorrect: false,
        explanation:
          "The service value chain is flexible, and activities don't have to be performed in a fixed sequential order.",
      },
      {
        answer: "There are five core activities in the service value chain",
        isCorrect: false,
        explanation:
          "There are six core activities in the ITIL 4 service value chain, not five.",
      },
      {
        answer: "Each activity can only be performed once in any value stream",
        isCorrect: false,
        explanation:
          "Activities can be repeated and combined multiple times within different value streams.",
      },
    ],
  },
  {
    question:
      "What is the primary purpose of the workforce and talent management practice?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "To ensure that the organization has the right people with the appropriate skills and knowledge",
        isCorrect: true,
        explanation:
          "Workforce and talent management practice ensures the organization has the right people with appropriate skills and knowledge to support its business objectives.",
      },
      {
        answer: "To manage the organization's financial resources and budgets",
        isCorrect: false,
        explanation:
          "This describes service financial management practice, not workforce and talent management.",
      },
      {
        answer: "To ensure that services achieve agreed performance levels",
        isCorrect: false,
        explanation:
          "This describes capacity and performance management practice, not workforce and talent management.",
      },
      {
        answer: "To protect information from unauthorized access",
        isCorrect: false,
        explanation:
          "This describes information security management practice, not workforce and talent management.",
      },
    ],
  },
  {
    question:
      "Which dimension of service management focuses on the relationships with external organizations that provide goods and services?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Partners and suppliers",
        isCorrect: true,
        explanation:
          "The 'Partners and suppliers' dimension addresses relationships and interactions with external entities that provide goods and services.",
      },
      {
        answer: "Organizations and people",
        isCorrect: false,
        explanation:
          "This dimension focuses on the human aspects and organizational culture within the organization.",
      },
      {
        answer: "Information and technology",
        isCorrect: false,
        explanation:
          "This dimension covers information, knowledge, and technologies needed for service management.",
      },
      {
        answer: "Value streams and processes",
        isCorrect: false,
        explanation:
          "This dimension focuses on how different parts of the organization work together in an integrated way.",
      },
    ],
  },
  {
    question:
      "What is the primary purpose of the portfolio management practice in ITIL 4?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "To ensure that the organization has the right mix of programmes, projects, products, and services to execute the organization's strategy within its funding and resource constraints",
        isCorrect: true,
        explanation:
          "Portfolio management practice ensures the organization has the optimal mix of programmes, projects, products, and services to execute strategy within funding and resource constraints.",
      },
      {
        answer: "To manage individual projects from initiation to closure",
        isCorrect: false,
        explanation:
          "This describes project management practice, not portfolio management. Portfolio management focuses on the overall mix and strategic alignment.",
      },
      {
        answer: "To provide technical infrastructure and platform capabilities",
        isCorrect: false,
        explanation:
          "This describes infrastructure and platform management practice, not portfolio management.",
      },
      {
        answer: "To handle incidents and restore normal service operation",
        isCorrect: false,
        explanation:
          "This describes incident management practice, not portfolio management.",
      },
    ],
  },
  {
    question:
      "Which of the following best describes the strategy management practice?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "The practice of formulating, documenting, reviewing, maintaining, and improving the strategic direction and objectives of an organization",
        isCorrect: true,
        explanation:
          "Strategy management practice involves formulating, documenting, reviewing, maintaining, and improving organizational strategic direction and objectives.",
      },
      {
        answer: "The practice of managing day-to-day operational activities",
        isCorrect: false,
        explanation:
          "Strategy management focuses on strategic direction, not day-to-day operations.",
      },
      {
        answer: "The practice of managing supplier relationships and contracts",
        isCorrect: false,
        explanation:
          "This describes supplier management practice, not strategy management.",
      },
      {
        answer: "The practice of managing financial resources for services",
        isCorrect: false,
        explanation:
          "This describes service financial management practice, not strategy management.",
      },
    ],
  },
  {
    question: "In ITIL 4, what does 'warranty' refer to?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "The assurance that a product or service will meet agreed requirements",
        isCorrect: true,
        explanation:
          "Warranty is the assurance that a product or service will meet agreed requirements - it's about how the service performs.",
      },
      {
        answer:
          "The functionality offered by a product or service to meet a particular need",
        isCorrect: false,
        explanation:
          "This describes utility, not warranty. Utility is what the service does, warranty is how it performs.",
      },
      {
        answer: "The legal protection for intellectual property",
        isCorrect: false,
        explanation:
          "This is a legal warranty concept, not the ITIL 4 service management definition.",
      },
      {
        answer: "The financial guarantee for service costs",
        isCorrect: false,
        explanation:
          "Warranty in ITIL 4 relates to service performance assurance, not financial guarantees.",
      },
    ],
  },
  {
    question:
      "Which of the following are key activities in the ITIL 4 service value chain?",
    hasMultipleAnswers: true,
    answers: [
      {
        answer: "Plan",
        isCorrect: true,
        explanation:
          "Plan is one of the six key activities in the ITIL 4 service value chain.",
      },
      {
        answer: "Engage",
        isCorrect: true,
        explanation:
          "Engage is one of the six key activities in the ITIL 4 service value chain.",
      },
      {
        answer: "Design and transition",
        isCorrect: true,
        explanation:
          "Design and transition is one of the six key activities in the ITIL 4 service value chain.",
      },
      {
        answer: "Monitor",
        isCorrect: false,
        explanation:
          "Monitor is not one of the six service value chain activities. The six activities are: Plan, Improve, Engage, Design and transition, Obtain/Build, and Deliver and support.",
      },
    ],
  },
  {
    question:
      "What is the main difference between a service and a product in ITIL 4?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "A service enables value co-creation by facilitating outcomes without the customer managing specific costs and risks, while a product is a configuration of resources designed to offer value",
        isCorrect: true,
        explanation:
          "A service facilitates outcomes without customer management of specific costs/risks, while a product is a configuration of organizational resources designed to offer value.",
      },
      {
        answer:
          "A service is always intangible while a product is always tangible",
        isCorrect: false,
        explanation:
          "Services and products can both have tangible and intangible elements in ITIL 4.",
      },
      {
        answer: "A service is internal while a product is external",
        isCorrect: false,
        explanation:
          "Both services and products can be internal or external in ITIL 4.",
      },
      {
        answer: "There is no difference - they are the same thing",
        isCorrect: false,
        explanation:
          "Services and products are distinct concepts in ITIL 4 with different definitions and purposes.",
      },
    ],
  },
  {
    question:
      "Which statement about the supplier management practice is NOT correct?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "It should always outsource all supplier relationships to third parties",
        isCorrect: true,
        explanation:
          "Supplier management does not require outsourcing all relationships; it focuses on managing supplier relationships effectively whether internal or external.",
      },
      {
        answer:
          "It ensures that suppliers and their performance are managed appropriately",
        isCorrect: false,
        explanation:
          "This is a correct aspect of supplier management practice.",
      },
      {
        answer:
          "It supports the seamless provision of quality products and services",
        isCorrect: false,
        explanation:
          "This is a correct objective of supplier management practice.",
      },
      {
        answer: "It includes supplier evaluation and selection processes",
        isCorrect: false,
        explanation:
          "Supplier evaluation and selection are key components of supplier management practice.",
      },
    ],
  },
  {
    question:
      "A large organization is struggling to align its various departments and initiatives with its strategic objectives. Multiple projects are running independently without clear connection to business goals, and resources are being duplicated across departments. Which ITIL 4 practice would be most beneficial to address this situation?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Portfolio management",
        isCorrect: true,
        explanation:
          "Portfolio management ensures the organization has the right mix of programmes, projects, products, and services to execute strategy within resource constraints, addressing the alignment and resource optimization issues described.",
      },
      {
        answer: "Project management",
        isCorrect: false,
        explanation:
          "Project management focuses on individual projects, not the strategic alignment and coordination of multiple initiatives across the organization.",
      },
      {
        answer: "Service level management",
        isCorrect: false,
        explanation:
          "Service level management focuses on service performance targets, not strategic alignment of organizational initiatives.",
      },
      {
        answer: "Change enablement",
        isCorrect: false,
        explanation:
          "Change enablement manages changes to services, not the strategic alignment of organizational initiatives and resource optimization.",
      },
    ],
  },
  {
    question:
      "What is the purpose of the business analysis practice in ITIL 4?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "To analyze a business or element of a business, define its needs and recommend solutions to address these needs and create value for stakeholders",
        isCorrect: true,
        explanation:
          "Business analysis practice analyzes business or business elements, defines needs, and recommends solutions to address needs and create stakeholder value.",
      },
      {
        answer: "To manage the financial performance of business services",
        isCorrect: false,
        explanation:
          "This describes service financial management practice, not business analysis.",
      },
      {
        answer: "To ensure services deliver agreed levels of availability",
        isCorrect: false,
        explanation:
          "This describes availability management practice, not business analysis.",
      },
      {
        answer:
          "To provide access to services through a single point of contact",
        isCorrect: false,
        explanation:
          "This describes service desk practice, not business analysis.",
      },
    ],
  },
  {
    question:
      "Which of the following is NOT one of the four dimensions of service management in ITIL 4?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Products and services",
        isCorrect: true,
        explanation:
          "Products and services is not one of the four dimensions. The four dimensions are: Organizations and people, Information and technology, Partners and suppliers, and Value streams and processes.",
      },
      {
        answer: "Organizations and people",
        isCorrect: false,
        explanation:
          "Organizations and people is one of the four dimensions of service management.",
      },
      {
        answer: "Information and technology",
        isCorrect: false,
        explanation:
          "Information and technology is one of the four dimensions of service management.",
      },
      {
        answer: "Value streams and processes",
        isCorrect: false,
        explanation:
          "Value streams and processes is one of the four dimensions of service management.",
      },
    ],
  },
  {
    question:
      "What is the main purpose of the service continuity management practice?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "To ensure that the availability and performance of services are maintained at sufficient levels in the event of a disaster",
        isCorrect: true,
        explanation:
          "Service continuity management ensures that service availability and performance are maintained at sufficient levels during and after a disaster or major disruption.",
      },
      {
        answer:
          "To restore normal service operation as quickly as possible after an incident",
        isCorrect: false,
        explanation:
          "This describes incident management practice, not service continuity management.",
      },
      {
        answer: "To manage day-to-day service availability requirements",
        isCorrect: false,
        explanation:
          "This describes availability management practice, not service continuity management which focuses on disaster scenarios.",
      },
      {
        answer: "To manage changes to service configurations",
        isCorrect: false,
        explanation:
          "This describes service configuration management practice, not service continuity management.",
      },
    ],
  },
  {
    question:
      "What is the primary purpose of the continual improvement practice in ITIL 4?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "To align an organization's practices and services with changing business needs through the ongoing identification and improvement of all elements involved in the effective management of products and services",
        isCorrect: true,
        explanation:
          "This is the correct definition from ITIL 4. Continual improvement practice focuses on aligning practices and services with changing business needs through ongoing identification and improvement of all elements.",
      },
      {
        answer:
          "To restore normal service operation as quickly as possible after an incident",
        isCorrect: false,
        explanation:
          "This describes incident management practice, not continual improvement. Continual improvement focuses on ongoing enhancement rather than incident restoration.",
      },
      {
        answer:
          "To ensure that risks are properly assessed before authorizing changes",
        isCorrect: false,
        explanation:
          "This describes change enablement practice, not continual improvement. Continual improvement focuses on ongoing enhancement of practices and services.",
      },
      {
        answer: "To identify and manage the root causes of incidents",
        isCorrect: false,
        explanation:
          "This describes problem management practice, not continual improvement. Continual improvement focuses on ongoing enhancement across all service management elements.",
      },
    ],
  },
  {
    question:
      "Which of the following are steps in the ITIL 4 continual improvement model?",
    hasMultipleAnswers: true,
    answers: [
      {
        answer: "What is the vision?",
        isCorrect: true,
        explanation:
          "This is the first step in the ITIL 4 continual improvement model, focusing on understanding the organization's vision and objectives.",
      },
      {
        answer: "Where are we now?",
        isCorrect: true,
        explanation:
          "This is the second step in the continual improvement model, involving baseline assessment of the current situation.",
      },
      {
        answer: "How do we keep the momentum going?",
        isCorrect: true,
        explanation:
          "This is the seventh and final step in the continual improvement model, ensuring that improvement momentum is maintained.",
      },
      {
        answer: "Who is responsible for the incident?",
        isCorrect: false,
        explanation:
          "This is not part of the continual improvement model. It relates more to incident management processes rather than improvement methodology.",
      },
    ],
  },
  {
    question:
      "What is the main difference between 'continuous' and 'continual' improvement in ITIL 4?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "Continuous means without interruption, while continual means recurring regularly with periods of stability",
        isCorrect: true,
        explanation:
          "ITIL 4 uses 'continual' because people need periods of stability to embed improvements before moving to the next round, rather than continuous change which would cause burnout.",
      },
      {
        answer: "There is no difference - the terms are used interchangeably",
        isCorrect: false,
        explanation:
          "There is a specific distinction in ITIL 4. Continual allows for periods of stability, while continuous would be uninterrupted.",
      },
      {
        answer:
          "Continuous applies to services while continual applies to processes",
        isCorrect: false,
        explanation:
          "The distinction is not based on what is being improved, but on the nature of the improvement approach - allowing for periods of stability.",
      },
      {
        answer:
          "Continuous is used in ITIL v3 while continual is used in ITIL 4",
        isCorrect: false,
        explanation:
          "While ITIL versions may emphasize different approaches, the distinction between continuous and continual relates to the nature of the improvement approach, not version differences.",
      },
    ],
  },
  {
    question:
      "Which statement about change enablement practice is NOT correct?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "All changes must go through the Change Advisory Board (CAB) for approval",
        isCorrect: true,
        explanation:
          "This is incorrect. ITIL 4 introduces Change Authority concept which decentralizes decision-making, and not all changes require CAB approval.",
      },
      {
        answer:
          "The purpose is to maximize the number of successful service and product changes",
        isCorrect: false,
        explanation:
          "This is correct. Change enablement aims to maximize successful changes while properly assessing risks.",
      },
      {
        answer:
          "It ensures that risks are properly assessed before authorizing changes",
        isCorrect: false,
        explanation:
          "This is correct. Risk assessment is a key component of change enablement practice.",
      },
      {
        answer: "It manages the change schedule to optimize successful changes",
        isCorrect: false,
        explanation:
          "This is correct. Managing the change schedule is part of change enablement to maximize successful changes.",
      },
    ],
  },
  {
    question:
      "A company's email system has been experiencing outages every Monday morning for the past month. The IT team restores service within 30 minutes each time, but users are frustrated with the recurring disruption. Which combination of ITIL 4 practices should be applied?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "Incident management for immediate restoration and problem management for root cause analysis",
        isCorrect: true,
        explanation:
          "This scenario requires incident management to handle the immediate service restoration and problem management to identify and resolve the underlying root cause of the recurring outages.",
      },
      {
        answer:
          "Only incident management since the service is being restored quickly",
        isCorrect: false,
        explanation:
          "While incident management handles restoration, the recurring nature indicates an underlying problem that requires problem management to prevent future occurrences.",
      },
      {
        answer:
          "Change enablement to implement immediate fixes without investigation",
        isCorrect: false,
        explanation:
          "Implementing changes without understanding the root cause could make the problem worse. Problem management should first identify the cause.",
      },
      {
        answer: "Only problem management since this is a recurring issue",
        isCorrect: false,
        explanation:
          "Both practices are needed: incident management for immediate restoration and problem management for preventing recurrence through root cause analysis.",
      },
    ],
  },
  {
    question:
      "What is the key difference between emergency changes and normal changes in ITIL 4 change enablement?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "Emergency changes are time-sensitive and urgent to prevent major incidents, while normal changes require standard risk assessment and approval",
        isCorrect: true,
        explanation:
          "Emergency changes are expedited due to urgency to prevent major incidents, while normal changes follow standard risk assessment and approval processes.",
      },
      {
        answer:
          "Emergency changes don't require any approval while normal changes require CAB approval",
        isCorrect: false,
        explanation:
          "Emergency changes still require approval but through expedited processes, and not all normal changes require CAB approval in ITIL 4.",
      },
      {
        answer:
          "Emergency changes are always automated while normal changes are manual",
        isCorrect: false,
        explanation:
          "The distinction is not based on automation but on urgency and risk assessment requirements.",
      },
      {
        answer: "There is no difference - they follow the same process",
        isCorrect: false,
        explanation:
          "Emergency changes have expedited processes due to their time-sensitive nature, unlike normal changes which follow standard procedures.",
      },
    ],
  },
  {
    question:
      "Which of the following correctly describes the relationship between incidents and problems in ITIL 4?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "A problem is a cause, or potential cause, of one or more incidents",
        isCorrect: true,
        explanation:
          "This is the correct ITIL 4 definition. Problems represent the underlying causes that can lead to multiple incidents.",
      },
      {
        answer: "An incident is a cause of one or more problems",
        isCorrect: false,
        explanation:
          "This reverses the relationship. Incidents are symptoms or effects, while problems are the underlying causes.",
      },
      {
        answer:
          "Incidents and problems are the same thing with different names",
        isCorrect: false,
        explanation:
          "Incidents and problems are distinct concepts. Incidents are service disruptions while problems are underlying causes.",
      },
      {
        answer: "Problems only occur after incidents have been resolved",
        isCorrect: false,
        explanation:
          "Problems can exist before incidents occur (proactive problem management) and incidents are symptoms of underlying problems.",
      },
    ],
  },
  {
    question: "What are the main phases of problem management in ITIL 4?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Problem identification, problem control, and error control",
        isCorrect: true,
        explanation:
          "ITIL 4 problem management consists of these three main phases: identification (finding problems), control (managing the problem lifecycle), and error control (managing known errors and workarounds).",
      },
      {
        answer:
          "Reactive management, proactive management, and post-incident review",
        isCorrect: false,
        explanation:
          "While reactive and proactive are approaches within problem management, these are not the main phases. The phases are identification, control, and error control.",
      },
      {
        answer: "Logging, investigation, and closure",
        isCorrect: false,
        explanation:
          "These are activities within problem management but not the main phases. The phases are identification, control, and error control.",
      },
      {
        answer: "Detection, analysis, and prevention",
        isCorrect: false,
        explanation:
          "While these activities occur in problem management, the official ITIL 4 phases are identification, control, and error control.",
      },
    ],
  },
  {
    question:
      "Which practice is primarily focused on 'what the service does' rather than 'how the service performs'?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "This question relates to utility vs warranty concepts, not specific practices",
        isCorrect: true,
        explanation:
          "This question describes utility (what the service does) vs warranty (how the service performs). This is a service design concept rather than a specific management practice.",
      },
      {
        answer: "Incident management",
        isCorrect: false,
        explanation:
          "Incident management focuses on service restoration rather than the utility vs warranty distinction.",
      },
      {
        answer: "Problem management",
        isCorrect: false,
        explanation:
          "Problem management focuses on root cause identification rather than the utility vs warranty distinction.",
      },
      {
        answer: "Change enablement",
        isCorrect: false,
        explanation:
          "Change enablement focuses on managing changes rather than the utility vs warranty distinction.",
      },
    ],
  },
  {
    question:
      "An IT organization wants to reduce the number of recurring incidents and improve their overall service stability. They currently have a reactive approach where they only address issues after they occur. Which ITIL 4 approach would be most beneficial?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "Implement proactive problem management combined with continual improvement practices",
        isCorrect: true,
        explanation:
          "Proactive problem management identifies potential issues before they cause incidents, while continual improvement ensures ongoing enhancement of service stability through systematic improvement initiatives.",
      },
      {
        answer: "Focus only on improving incident management response times",
        isCorrect: false,
        explanation:
          "While faster response helps minimize impact, this doesn't address the root causes of recurring incidents or improve overall stability.",
      },
      {
        answer: "Implement more rigorous change enablement controls",
        isCorrect: false,
        explanation:
          "While change control is important, this doesn't directly address existing stability issues or prevent recurring incidents from known problems.",
      },
      {
        answer: "Outsource all problem resolution to external vendors",
        isCorrect: false,
        explanation:
          "Outsourcing doesn't inherently improve the approach to problem management or provide the systematic improvement needed for long-term stability.",
      },
    ],
  },
  {
    question: "What is the purpose of the Continual Improvement Register?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "To capture and prioritize all opportunities for improvement in a single, living document.",
        isCorrect: true,
        explanation:
          "The Continual Improvement Register is designed to record, track, and prioritize improvement opportunities on an ongoing basis, ensuring no idea is lost.",
      },
      {
        answer:
          "To log all incidents and their resolutions for compliance purposes.",
        isCorrect: false,
        explanation:
          "Incident logging is handled by the Incident Management practice, not by the Continual Improvement Register.",
      },
      {
        answer: "To document all changes approved by the Change Authority.",
        isCorrect: false,
        explanation:
          "Change records are maintained in the Change Management system, not in the Continual Improvement Register.",
      },
      {
        answer: "To track the financial performance of services over time.",
        isCorrect: false,
        explanation:
          "Financial tracking is the responsibility of the Service Financial Management practice, not the Continual Improvement Register.",
      },
    ],
  },
  {
    question:
      "Which of the following are steps in the ITIL 4 Continual Improvement Model?",
    hasMultipleAnswers: true,
    answers: [
      {
        answer: "What is the vision?",
        isCorrect: true,
        explanation:
          "Identifying the vision is the first step in the model, focusing on strategic alignment of improvements.",
      },
      {
        answer: "Where are we now?",
        isCorrect: true,
        explanation:
          "Establishing the current baseline is the second step, assessing the present state.",
      },
      {
        answer: "How do we keep the momentum going?",
        isCorrect: true,
        explanation:
          "Ensuring momentum is maintained is the final, seventh step, embedding improvements into organizational culture.",
      },
      {
        answer: "Who is responsible for the incident?",
        isCorrect: false,
        explanation:
          "Assigning incident responsibility is part of Incident Management, not the Continual Improvement Model.",
      },
    ],
  },
  {
    question:
      "Which guiding principle is most critical when initiating a continual improvement initiative?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Start where you are.",
        isCorrect: true,
        explanation:
          "The principle 'Start where you are' emphasizes leveraging existing capabilities and data when planning improvements.",
      },
      {
        answer: "Progress iteratively with feedback.",
        isCorrect: false,
        explanation:
          "While important, iterative progress is a methodology within the model rather than the initial guiding principle.",
      },
      {
        answer: "Optimize and automate.",
        isCorrect: false,
        explanation:
          "Optimization and automation are recommended practices but not the primary principle for starting improvement.",
      },
      {
        answer: "Focus on value.",
        isCorrect: false,
        explanation:
          "Focusing on value is central but comes after understanding current state, per the model sequence.",
      },
    ],
  },
  {
    question:
      "Which concept in ITIL 4 replaces the Change Advisory Board for decentralized decision making?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Change Authority.",
        isCorrect: true,
        explanation:
          "The Change Authority concept allows delegated decision making at different levels, replacing a single CAB for many changes.",
      },
      {
        answer: "Standard Change Model.",
        isCorrect: false,
        explanation:
          "Standard Changes are pre-authorized low-risk changes, but they are not a decision-making body.",
      },
      {
        answer: "Emergency Change Board.",
        isCorrect: false,
        explanation:
          "Emergency changes still require approval, often expedited, but are not governed by a separate board in ITIL 4.",
      },
      {
        answer: "Change Register.",
        isCorrect: false,
        explanation:
          "The Change Register logs change requests but does not authorize them; authorization is handled by the Change Authority.",
      },
    ],
  },
  {
    question:
      "Which of the following are recognized change types in ITIL 4?",
    hasMultipleAnswers: true,
    answers: [
      {
        answer: "Standard change.",
        isCorrect: true,
        explanation:
          "Standard Changes are low-risk, pre-authorized changes that follow a defined procedure.",
      },
      {
        answer: "Normal change.",
        isCorrect: true,
        explanation:
          "Normal Changes follow the full risk assessment and authorization process.",
      },
      {
        answer: "Emergency change.",
        isCorrect: true,
        explanation:
          "Emergency Changes are expedited to prevent or resolve major incidents, with accelerated authorization.",
      },
      {
        answer: "Major change.",
        isCorrect: false,
        explanation:
          "'Major change' describes impact but is not an official ITIL 4 change type; the three types are Standard, Normal, and Emergency.",
      },
    ],
  },
  {
    question:
      "Which practice ensures that changes to products and services are carried out in a controlled manner?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Change enablement.",
        isCorrect: true,
        explanation:
          "Change Enablement practice oversees risk assessment, authorization, and scheduling to ensure successful changes.",
      },
      {
        answer: "Release management.",
        isCorrect: false,
        explanation:
          "Release Management handles build, test, and deployment of releases but relies on Change Enablement for authorization.",
      },
      {
        answer: "Service configuration management.",
        isCorrect: false,
        explanation:
          "Service Configuration Management maintains configuration records but does not authorize changes.",
      },
      {
        answer: "Project management.",
        isCorrect: false,
        explanation:
          "Project Management governs project delivery, not the specific authorization of service changes.",
      },
    ],
  },
  {
    question:
      "What is the primary objective of the Incident Management practice?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "To minimize the negative impact of incidents by restoring normal service operation as quickly as possible.",
        isCorrect: true,
        explanation:
          "Incident Management focuses on treating incident symptoms to rapidly restore service and reduce business disruption.",
      },
      {
        answer:
          "To identify and resolve underlying problems to prevent future incidents.",
        isCorrect: false,
        explanation:
          "Preventing recurrence is the aim of Problem Management, not the primary objective of Incident Management.",
      },
      {
        answer: "To approve and schedule changes that may prevent incidents.",
        isCorrect: false,
        explanation:
          "Change Enablement governs change approval and scheduling, not Incident Management.",
      },
      {
        answer:
          "To maintain the Known Error Database for use in incident diagnosis.",
        isCorrect: false,
        explanation:
          "The Known Error Database is an output of Problem Management and supports Incident Management, but is not its primary objective.",
      },
    ],
  },
  {
    question:
      "Which two factors determine incident priority in ITIL 4?",
    hasMultipleAnswers: true,
    answers: [
      {
        answer: "Impact.",
        isCorrect: true,
        explanation:
          "Impact measures the extent of effect on business and users, crucial for prioritization.",
      },
      {
        answer: "Urgency.",
        isCorrect: true,
        explanation:
          "Urgency assesses how quickly a response is needed, guiding prioritization in Incident Management.",
      },
      {
        answer: "Cost.",
        isCorrect: false,
        explanation:
          "Cost implications may influence decisions but are not formal factors in ITIL 4’s priority calculation.",
      },
      {
        answer: "Risk.",
        isCorrect: false,
        explanation:
          "Risk assessment is part of Change Enablement, not a direct factor in incident prioritization.",
      },
    ],
  },
  {
    question: "What is the first step in the incident management workflow?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Incident identification.",
        isCorrect: true,
        explanation:
          "Identifying and recording an unplanned service interruption is the initial step in Incident Management.",
      },
      {
        answer: "Incident categorization.",
        isCorrect: false,
        explanation:
          "Categorization occurs after identification to aid prioritization and routing.",
      },
      {
        answer: "Incident escalation.",
        isCorrect: false,
        explanation:
          "Escalation follows initial diagnosis if resolution is not immediate.",
      },
      {
        answer: "Incident resolution.",
        isCorrect: false,
        explanation:
          "Resolution is the final phase, restoring service to normal operations.",
      },
    ],
  },
  {
    question:
      "Which of the following is a key output of the Problem Management practice?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Known Error record.",
        isCorrect: true,
        explanation:
          "Known Error records capture error details and workarounds, enabling rapid incident resolution and prevention.",
      },
      {
        answer: "Change Schedule.",
        isCorrect: false,
        explanation:
          "The Change Schedule is maintained by Change Enablement, not Problem Management.",
      },
      {
        answer: "Service Level Agreement.",
        isCorrect: false,
        explanation:
          "SLAs are defined by Service Level Management, not by Problem Management.",
      },
      {
        answer: "Continual Improvement Register entry.",
        isCorrect: false,
        explanation:
          "While improvements may stem from problems, the CIR is managed by Continual Improvement practice.",
      },
    ],
  },
  {
    question:
      "Which of the following are phases of Problem Management?",
    hasMultipleAnswers: true,
    answers: [
      {
        answer: "Problem control.",
        isCorrect: true,
        explanation:
          "Problem Control manages the lifecycle of problems, including analysis and risk assessment.",
      },
      {
        answer: "Error control.",
        isCorrect: true,
        explanation:
          "Error Control focuses on managing known errors and implementing permanent solutions.",
      },
      {
        answer: "Incident control.",
        isCorrect: false,
        explanation:
          "Incident Control is part of Incident Management, not Problem Management.",
      },
      {
        answer: "Change control.",
        isCorrect: false,
        explanation: "Change Control belongs to Change Enablement practice.",
      },
    ],
  },
  {
    question: "Which statement about Problem Management is least correct?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Problems should always be raised only after incidents occur.",
        isCorrect: true,
        explanation:
          "Problem Management can be proactive, raising problems before incidents to prevent disruptions.",
      },
      {
        answer: "A problem is the cause of one or more incidents.",
        isCorrect: false,
        explanation:
          "This correctly defines a problem as the underlying cause of incidents.",
      },
      {
        answer: "Known errors are documented workarounds for problems.",
        isCorrect: false,
        explanation:
          "Known errors capture workarounds and root causes, aiding incident resolution.",
      },
      {
        answer:
          "Problem Management aims to reduce the likelihood and impact of incidents.",
        isCorrect: false,
        explanation:
          "Reducing incident likelihood and impact is a primary objective of Problem Management.",
      },
    ],
  },
  {
    question:
      "What is the primary purpose of the ITIL 4 service desk practice?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "To capture demand for incident resolution and service requests, acting as the single point of contact for users",
        isCorrect: true,
        explanation:
          "The service desk practice is designed to be the entry point and single point of contact for all users, capturing demand for incident resolution and service requests.",
      },
      {
        answer: "To negotiate service level agreements with customers",
        isCorrect: false,
        explanation:
          "Negotiating service level agreements is the responsibility of service level management, not the service desk.",
      },
      {
        answer: "To automate all IT operations",
        isCorrect: false,
        explanation:
          "While automation can support the service desk, its primary purpose is not to automate all IT operations.",
      },
      {
        answer: "To manage the organization's financial resources",
        isCorrect: false,
        explanation:
          "Financial management is a separate ITIL practice, not the focus of the service desk.",
      },
    ],
  },
  {
    question:
      "Which of the following best describes 'service empathy' in the context of the ITIL 4 service desk?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "The ability to recognize, understand, predict, and project the interests, needs, intentions, and experiences of another party",
        isCorrect: true,
        explanation:
          "Service empathy is a key concept in the ITIL 4 service desk practice, emphasizing understanding and improving the service relationship.",
      },
      {
        answer: "The ability to automate all user requests",
        isCorrect: false,
        explanation:
          "Automation supports efficiency, but empathy is about understanding user needs and experiences.",
      },
      {
        answer: "The process of logging incidents",
        isCorrect: false,
        explanation:
          "Logging incidents is a service desk activity, but not related to empathy.",
      },
      {
        answer: "The measurement of service level targets",
        isCorrect: false,
        explanation:
          "Measuring service levels is part of service level management, not service empathy.",
      },
    ],
  },
  {
    question:
      "Which of the following is NOT a responsibility of the service desk practice?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "Negotiating and signing Service Level Agreements (SLAs) with customers",
        isCorrect: true,
        explanation:
          "Negotiating and signing SLAs is the responsibility of service level management, not the service desk.",
      },
      {
        answer: "Providing a single point of contact for users",
        isCorrect: false,
        explanation:
          "Providing a single point of contact is a core responsibility of the service desk.",
      },
      {
        answer: "Capturing and logging incidents and service requests",
        isCorrect: false,
        explanation:
          "Capturing and logging incidents and requests is a key service desk activity.",
      },
      {
        answer: "Communicating with users about the status of their requests",
        isCorrect: false,
        explanation:
          "Effective communication with users is a fundamental service desk responsibility.",
      },
    ],
  },
  {
    question:
      "What is the main objective of service level management in ITIL 4?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "To set clear business-based targets for service levels and ensure delivery is assessed, monitored, and managed against these targets",
        isCorrect: true,
        explanation:
          "Service level management aims to set, monitor, and manage service level targets to ensure services meet business needs.",
      },
      {
        answer: "To resolve all incidents as quickly as possible",
        isCorrect: false,
        explanation:
          "Incident resolution is the focus of incident management, not service level management.",
      },
      {
        answer: "To automate all service requests",
        isCorrect: false,
        explanation:
          "Automation supports service delivery but is not the main objective of service level management.",
      },
      {
        answer: "To manage the organization's IT assets",
        isCorrect: false,
        explanation:
          "IT asset management is a separate practice from service level management.",
      },
    ],
  },
  {
    question:
      "Which of the following are key components of service request management in ITIL 4?",
    hasMultipleAnswers: true,
    answers: [
      {
        answer: "Self-service options",
        isCorrect: true,
        explanation:
          "Self-service portals empower users to submit and track requests independently, a key component of service request management.",
      },
      {
        answer: "Automation and workflow management",
        isCorrect: true,
        explanation:
          "Automation streamlines request handling, ensuring consistency and faster resolution.",
      },
      {
        answer: "Knowledge management",
        isCorrect: true,
        explanation:
          "Knowledge management enables faster and more accurate resolution of requests by sharing solutions.",
      },
      {
        answer: "Incident escalation",
        isCorrect: false,
        explanation:
          "Incident escalation is part of incident management, not a core component of service request management.",
      },
    ],
  },
  {
    question:
      "Which statement about the difference between service requests and incidents is correct?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "Service requests are routine, predefined, and non-urgent, while incidents are unplanned interruptions or reductions in service quality",
        isCorrect: true,
        explanation:
          "Service requests are for standard services or information, while incidents are disruptions that require restoration of normal service.",
      },
      {
        answer: "Service requests always require urgent attention",
        isCorrect: false,
        explanation:
          "Service requests are typically non-urgent and routine.",
      },
      {
        answer:
          "Incidents are always handled by the service desk, while service requests are not",
        isCorrect: false,
        explanation:
          "Both incidents and service requests are typically handled by the service desk.",
      },
      {
        answer: "There is no difference between service requests and incidents",
        isCorrect: false,
        explanation:
          "There is a clear distinction in ITIL 4 between service requests and incidents.",
      },
    ],
  },
  {
    question:
      "Which of the following is a best practice for managing service requests in ITIL 4?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Implementing self-service portals and automating workflows",
        isCorrect: true,
        explanation:
          "Self-service and automation are best practices that improve efficiency and user satisfaction in service request management.",
      },
      {
        answer: "Treating all service requests as high priority incidents",
        isCorrect: false,
        explanation:
          "Service requests are typically routine and should be prioritized based on urgency and impact, not treated as incidents.",
      },
      {
        answer: "Allowing only IT staff to submit service requests",
        isCorrect: false,
        explanation:
          "Users should be empowered to submit their own service requests, often via self-service portals.",
      },
      {
        answer: "Resolving all requests manually without automation",
        isCorrect: false,
        explanation:
          "Manual resolution is less efficient; automation is encouraged in ITIL 4.",
      },
    ],
  },
  {
    question:
      "Which document describes the IT service, documents service level targets, and specifies the responsibilities of the IT service provider and the customer?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Service Level Agreement (SLA)",
        isCorrect: true,
        explanation:
          "An SLA is a formal agreement that defines the service, targets, and responsibilities for both provider and customer.",
      },
      {
        answer: "Operational Level Agreement (OLA)",
        isCorrect: false,
        explanation:
          "An OLA is an internal agreement between IT teams, not between provider and customer.",
      },
      {
        answer: "Service Level Report",
        isCorrect: false,
        explanation:
          "A Service Level Report provides insight into achieved service levels but is not an agreement.",
      },
      {
        answer: "Service Acceptance Criteria (SAC)",
        isCorrect: false,
        explanation:
          "SAC defines criteria for accepting a service, not the ongoing service level targets.",
      },
    ],
  },
  {
    question:
      "Which of the following is NOT a benefit of effective service request management?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Increased manual effort for IT staff",
        isCorrect: true,
        explanation:
          "Effective service request management aims to reduce manual effort through automation and self-service.",
      },
      {
        answer: "Improved user experience",
        isCorrect: false,
        explanation:
          "A key benefit is improved user experience through faster and more convenient service.",
      },
      {
        answer: "Faster request fulfilment",
        isCorrect: false,
        explanation:
          "Automation and streamlined workflows lead to faster fulfilment.",
      },
      {
        answer: "Enhanced efficiency and productivity",
        isCorrect: false,
        explanation:
          "Efficiency and productivity are improved by standardizing and automating request handling.",
      },
    ],
  },
  {
    question:
      "Which role is primarily accountable for negotiating and ensuring service level agreements are met?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Service Level Manager",
        isCorrect: true,
        explanation:
          "The Service Level Manager is responsible for negotiating SLAs and ensuring they are met.",
      },
      {
        answer: "Service Desk Analyst",
        isCorrect: false,
        explanation:
          "Service Desk Analysts handle user interactions but do not negotiate SLAs.",
      },
      {
        answer: "IT Asset Manager",
        isCorrect: false,
        explanation:
          "IT Asset Managers focus on asset management, not SLAs.",
      },
      {
        answer: "Change Manager",
        isCorrect: false,
        explanation:
          "Change Managers oversee changes, not service level agreements.",
      },
    ],
  },
  {
    question:
      "Which of the following best describes the primary purpose of the Service Desk practice in ITIL 4?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "To capture demand for incident resolution and service requests and act as the single point of contact for users",
        isCorrect: true,
        explanation:
          "The Service Desk serves as the entry point and single point of contact, capturing demand for both incident resolution and service requests.",
      },
      {
        answer:
          "To negotiate and maintain Service Level Agreements with customers",
        isCorrect: false,
        explanation:
          "Negotiating SLAs is the responsibility of Service Level Management, not the Service Desk.",
      },
      {
        answer: "To manage the organization's IT assets and inventory",
        isCorrect: false,
        explanation:
          "Asset management falls under the IT Asset Management practice, not the Service Desk.",
      },
      {
        answer: "To implement security controls and policies across services",
        isCorrect: false,
        explanation:
          "Information Security Management handles security controls and policies, not the Service Desk practice.",
      },
    ],
  },
  {
    question:
      "Which characteristic is NOT a responsibility of the Service Desk practice?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "Providing a single, consistent point of communication between users and the IT organization",
        isCorrect: false,
        explanation:
          "This is a core responsibility of the Service Desk practice.",
      },
      {
        answer: "Capturing and logging incidents and service requests",
        isCorrect: false,
        explanation:
          "Recording incidents and service requests is fundamental to the Service Desk practice.",
      },
      {
        answer:
          "Negotiating operational level agreements (OLAs) with internal teams",
        isCorrect: true,
        explanation:
          "OLAs are managed through Service Level Management and internal agreements, not by the Service Desk practice.",
      },
      {
        answer: "Communicating status updates to users about their tickets",
        isCorrect: false,
        explanation:
          "Keeping users informed about ticket status is a key activity of the Service Desk.",
      },
    ],
  },
  {
    question:
      "What is the primary objective of Service Level Management in ITIL 4?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "To set clear, business-based targets for service performance and ensure they are monitored and met",
        isCorrect: true,
        explanation:
          "Service Level Management negotiates SLAs, monitors performance, and reports against agreed targets.",
      },
      {
        answer: "To automate all routine service requests",
        isCorrect: false,
        explanation:
          "Automation supports efficiency but is not the core objective of Service Level Management.",
      },
      {
        answer: "To restore normal service operation as quickly as possible",
        isCorrect: false,
        explanation:
          "Incident Management focuses on restoration of service, not Service Level Management.",
      },
      {
        answer: "To manage supplier contracts and performance",
        isCorrect: false,
        explanation:
          "Supplier Management is responsible for managing external suppliers, not Service Level Management.",
      },
    ],
  },
  {
    question:
      "Which role is primarily accountable for negotiating and ensuring service level agreements are met?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Service Level Manager",
        isCorrect: true,
        explanation:
          "The Service Level Manager is accountable for SLAs, ensuring targets are negotiated and achieved.",
      },
      {
        answer: "Service Desk Analyst",
        isCorrect: false,
        explanation:
          "Service Desk Analysts handle ticket intake and communication, not SLA negotiation.",
      },
      {
        answer: "Change Manager",
        isCorrect: false,
        explanation:
          "Change Managers focus on change authorization and scheduling, not SLAs.",
      },
      {
        answer: "Service Request Fulfillment Coordinator",
        isCorrect: false,
        explanation:
          "This role assists in fulfilling requests but does not negotiate SLAs.",
      },
    ],
  },
  {
    question:
      "Which of the following is a key component of Service Request Management in ITIL 4?",
    hasMultipleAnswers: true,
    answers: [
      {
        answer: "Self-service options through a portal",
        isCorrect: true,
        explanation:
          "Self-service portals empower users to submit and track requests, a core element of Service Request Management.",
      },
      {
        answer: "Automation of workflows",
        isCorrect: true,
        explanation:
          "Automation ensures consistency and speeds up request fulfillment by automating approvals and tasks.",
      },
      {
        answer: "Knowledge management for standard procedures",
        isCorrect: true,
        explanation:
          "A central knowledge base supports quick, accurate resolution of service requests.",
      },
      {
        answer: "Setting service level targets for each request",
        isCorrect: false,
        explanation:
          "SLAs are defined in Service Level Management; Service Request Management focuses on fulfillment, not target setting.",
      },
    ],
  },
  {
    question:
      "Which statement correctly distinguishes between incidents and service requests?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "Incidents are unplanned service interruptions, while service requests are predefined, routine requests",
        isCorrect: true,
        explanation:
          "Incidents involve service disruptions; service requests are standard, repeatable, and non-urgent.",
      },
      {
        answer:
          "Incident resolution always takes longer than request fulfillment",
        isCorrect: false,
        explanation:
          "Resolution time varies based on complexity and priority, not by type alone.",
      },
      {
        answer:
          "Service requests are handled only by technical teams, not the Service Desk",
        isCorrect: false,
        explanation:
          "Service Desk handles both incidents and service requests.",
      },
      {
        answer: "Incidents require SLA negotiation before resolution",
        isCorrect: false,
        explanation:
          "Incidents are managed under existing SLAs; no new negotiation is required during incident handling.",
      },
    ],
  },
  {
    question:
      "What document formally defines the service, targets, and responsibilities between the service provider and the customer?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Service Level Agreement (SLA)",
        isCorrect: true,
        explanation:
          "An SLA specifies services, performance targets, and responsibilities of both provider and customer.",
      },
      {
        answer: "Operational Level Agreement (OLA)",
        isCorrect: false,
        explanation:
          "OLAs are internal agreements between supporting teams, not with customers.",
      },
      {
        answer: "Service Policy",
        isCorrect: false,
        explanation:
          "Policies guide governance but do not define performance targets and responsibilities in detail.",
      },
      {
        answer: "Service Acceptance Criteria",
        isCorrect: false,
        explanation:
          "Acceptance criteria specify conditions for service handover, not ongoing performance targets.",
      },
    ],
  },
  {
    question:
      "Which activity is NOT typically part of the Service Desk practice?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Incident logging and categorization",
        isCorrect: false,
        explanation:
          "Logging and categorization are fundamental Service Desk activities.",
      },
      {
        answer: "Fulfilling password reset requests",
        isCorrect: false,
        explanation:
          "Password resets are routine requests handled by the Service Desk.",
      },
      {
        answer: "Monitoring and reporting service performance metrics",
        isCorrect: true,
        explanation:
          "Performance monitoring and reporting falls under Service Level Management, not Service Desk.",
      },
      {
        answer: "Communicating status updates to users",
        isCorrect: false,
        explanation:
          "User communication is a core function of the Service Desk.",
      },
    ],
  },
  {
    question:
      "Which of the following best practices improves user satisfaction in Service Request Management?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer:
          "Implementing self-service portals and automating routine tasks",
        isCorrect: true,
        explanation:
          "Self-service and automation reduce handling time and empower users, enhancing satisfaction.",
      },
      {
        answer: "Requiring manual approval for all requests",
        isCorrect: false,
        explanation:
          "Manual approvals for all requests slow down fulfillment and frustrate users.",
      },
      {
        answer: "Limiting request types to reduce workload",
        isCorrect: false,
        explanation:
          "Restricting request types may hinder user needs and lower satisfaction.",
      },
      {
        answer: "Routing requests through multiple support levels",
        isCorrect: false,
        explanation:
          "Multiple handoffs increase complexity and delay resolution.",
      },
    ],
  },
  {
    question: "Which sub-process is part of Service Level Management?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Service Level Monitoring and Reporting",
        isCorrect: true,
        explanation:
          "Monitoring and reporting against SLA targets is a key sub-process in Service Level Management.",
      },
      {
        answer: "Change Scheduling",
        isCorrect: false,
        explanation:
          "Change scheduling belongs to Change Enablement, not Service Level Management.",
      },
      {
        answer: "Incident Escalation",
        isCorrect: false,
        explanation:
          "Escalation is part of Incident Management, not Service Level Management.",
      },
      {
        answer: "Problem Control",
        isCorrect: false,
        explanation:
          "Problem Control is a phase in Problem Management, not Service Level Management.",
      },
    ],
  },
];
