const questions = [
  {
    "id": 1,
    "question": "'Workers should receive orders from only one manager', this principle is termed as",
    "options": [
      "Unity of command",
      "Unity of direction",
      "Unity of group",
      "Unity of management"
    ],
    "answer": "Unity of command"
  },
  {
    "id": 2,
    "question": "'The Hawthorne Experiments' are related to",
    "options": [
      "Scientific Management",
      "Administrative Management",
      "Human Relations School",
      "Bureaucratic Organization"
    ],
    "answer": "Human Relations School"
  },
  {
    "id": 3,
    "question": "'Managers have long realised that there is no one best way to do things'. This statement is suitable for which management approach?",
    "options": [
      "Systems Theory",
      "Contingency Theory",
      "Organizational Humanism",
      "Management Science"
    ],
    "answer": "Contingency Theory"
  },
  {
    "id": 4,
    "question": "'g(n) is an upper bound for f(n) that is not asymptotically tight', statement holds true for",
    "options": [
      "Big oh",
      "Big theta",
      "Big omega",
      "Amortized"
    ],
    "answer": "Big oh"
  },
  {
    "id": 5,
    "question": "'Functional foremanship' is related to",
    "options": [
      "Scientific Management",
      "Administrative Management",
      "Human Relations School",
      "Bureaucratic Organization"
    ],
    "answer": "Scientific Management"
  },
  {
    "id": 6,
    "question": "'Fayol's principles' are related to",
    "options": [
      "Scientific Management",
      "Administrative Management",
      "Human Relations School",
      "Bureaucratic Organization"
    ],
    "answer": "Administrative Management"
  },
  {
    "id": 7,
    "question": "X.25 standards covers how many layers?",
    "options": [
      "Two",
      "Three",
      "Seven",
      "Six"
    ],
    "answer": "Three"
  },
  {
    "id": 8,
    "question": "Working set model for page replacement is based on the assumption of",
    "options": [
      "Modularity of references",
      "Working Set Size",
      "Locality of references",
      "Random access"
    ],
    "answer": "Locality of references"
  },
  {
    "id": 9,
    "question": "Within an organisation, leadership influence will be dependent upon the type of ______ that the leader can exercise over the followers.",
    "options": [
      "knowledge",
      "power",
      "delegation",
      "friendship"
    ],
    "answer": "power"
  },
  {
    "id": 10,
    "question": "Why, according to stakeholder theory, is it in companies' best interests to pay attention to their stakeholders?",
    "options": [
      "If firms only act in their own self-interest, employees may feel exploited.",
      "If firms only act in their own self-interest, the government might put more regulation on them.",
      "If firms only act in their own self-interest, customers might not like the image that the company portrays.",
      "If firms only act in their own self-interest and inflict harm on stakeholders, then society might withdraw its support"
    ],
    "answer": "If firms only act in their own self-interest and inflict harm on stakeholders, then society might withdraw its support"
  },
  {
    "id": 11,
    "question": "Why is it necessary for all employees to sign the Confidentiality and Security Agreement each year?",
    "options": [
      "To check if you still work there.",
      "No reason, they just like paperwork.",
      "To remind everyone of what their responsibilities are",
      "Will be used for moving to a higher position."
    ],
    "answer": "To remind everyone of what their responsibilities are"
  },
  {
    "id": 12,
    "question": "Why is autocratic leadership considered negative?",
    "options": [
      "people are uninformed, insecure and afraid of the leader",
      "leader is extra friendly",
      "too much confusion arises",
      "it is very participative"
    ],
    "answer": "people are uninformed, insecure and afraid of the leader"
  },
  {
    "id": 13,
    "question": "Who suggested a system of cards?",
    "options": [
      "Henry Metcalfe",
      "Henry Robinson Towne",
      "Peter Drucker",
      "Robert Owen"
    ],
    "answer": "Henry Metcalfe"
  },
  {
    "id": 14,
    "question": "Who published the famous book 'The Cost of Manufacture and Administration of Workshop: Public and private'?",
    "options": [
      "Henry Metcalfe",
      "Henry Robinson Towne",
      "Peter Drucker",
      "Robert Owen"
    ],
    "answer": "Henry Metcalfe"
  },
  {
    "id": 15,
    "question": "Who presented the paper 'Engineer as an Economist'?",
    "options": [
      "F W Taylor",
      "Henry Robinson Towne",
      "Peter Drucker",
      "Robert Owen"
    ],
    "answer": "Henry Robinson Towne"
  },
  {
    "id": 16,
    "question": "Who plays an important role in the success of products and services and in increasing the marketing share of the firm in business?",
    "options": [
      "Functional level Managers",
      "Corporate level Managers",
      "Business level Managers",
      "All of the above"
    ],
    "answer": "All of the above"
  },
  {
    "id": 17,
    "question": "Who is the father of scientific management?",
    "options": [
      "FW Taylor",
      "Henry Fayol",
      "Peter Drucker",
      "None of these"
    ],
    "answer": "FW Taylor"
  },
  {
    "id": 18,
    "question": "Who is the father of Personnel Management?",
    "options": [
      "FW Taylor",
      "Henry Fayol",
      "Peter Drucker",
      "Robert Owen"
    ],
    "answer": "Robert Owen"
  },
  {
    "id": 19,
    "question": "Who is the father of modern management?",
    "options": [
      "FW Taylor",
      "Henry Fayol",
      "Peter Drucker",
      "None of these"
    ],
    "answer": "Henry Fayol"
  },
  {
    "id": 20,
    "question": "Who developed the force-field analysis theory?",
    "options": [
      "Carl Rogers",
      "B.F.Skinner",
      "Kurt Lewin",
      "James Johnson"
    ],
    "answer": "Kurt Lewin"
  },
  {
    "id": 21,
    "question": "Who believed that workers performance was influenced by the total environment?",
    "options": [
      "F W Taylor",
      "Henry Fayol",
      "Peter Drucker",
      "Robert Owen"
    ],
    "answer": "Robert Owen"
  },
  {
    "id": 22,
    "question": "Who are the organisational stakeholders?",
    "options": [
      "Government",
      "Employees",
      "Customers",
      "All the other answers are correct."
    ],
    "answer": "All the other answers are correct."
  },
  {
    "id": 23,
    "question": "White Box techniques are also classified as?",
    "options": [
      "Design based testing",
      "Structural testing",
      "Error guessing technique",
      "None of the mentioned"
    ],
    "answer": "Structural testing"
  },
  {
    "id": 24,
    "question": "While selecting a string w such that w belongs to L, where L is a regular language, and w=mno. Which of the following parts cannot be an empty string?",
    "options": [
      "m",
      "n",
      "o",
      "no"
    ],
    "answer": "n"
  },
  {
    "id": 25,
    "question": "While applying Pumping lemma over a regular language, we consider a string w that belong to L and separate it into ______ components.",
    "options": [
      "3",
      "4",
      "2",
      "5"
    ],
    "answer": "3"
  },
  {
    "id": 26,
    "question": "Which type of software can be used to merge data of two files in one file ?",
    "options": [
      "System software",
      "Networking software",
      "Documenting software",
      "Utility Software"
    ],
    "answer": "Utility Software"
  },
  {
    "id": 27,
    "question": "Which type of attack requires multiple handler on various system?",
    "options": [
      "Man in the Middle Attack",
      "DoS",
      "DDoS",
      "Backdoor Attack"
    ],
    "answer": "DDoS"
  },
  {
    "id": 28,
    "question": "Which transmission media has the highest transmission speed in the network.",
    "options": [
      "Coaxial cable",
      "Twisted pair cable",
      "Optical fibre cable",
      "Electrical cable"
    ],
    "answer": "Optical fibre cable"
  },
  {
    "id": 29,
    "question": "Which term refers to a systematic assessment of a company's activities in terms of social impact?",
    "options": [
      "managerial appraisal",
      "social audit",
      "social responsibility metric",
      "ethics audit"
    ],
    "answer": "social audit"
  },
  {
    "id": 30,
    "question": "which technique was introduced because a single job could not keep both the CPU and the I/O devices busy?",
    "options": [
      "Time-sharing",
      "SPOOLing",
      "Preemptive scheduling",
      "Multiprogramming"
    ],
    "answer": "Multiprogramming"
  },
  {
    "id": 31,
    "question": "Which sublayer of the data link layer performs data link functions that depend upon the type of medium?",
    "options": [
      "logical link control sublayer",
      "media access control sublayer",
      "network interface control sublayer",
      "none of the mentioned"
    ],
    "answer": "media access control sublayer"
  },
  {
    "id": 32,
    "question": "Which style of leadership focuses on goals, standards, and organization?",
    "options": [
      "task leadership",
      "social leadership",
      "semantic leadership",
      "transformational leadership"
    ],
    "answer": "task leadership"
  },
  {
    "id": 33,
    "question": "Which statement is CORRECT",
    "options": [
      "The internal data model represents the data's physical storage details",
      "To communicate with the business user, mainly, the logical data model is used",
      "The logical data model is implementation-independent",
      "A database state contains the description of the database data and is stored in the catalogue"
    ],
    "answer": "The logical data model is implementation-independent"
  },
  {
    "id": 34,
    "question": "Which server translates the alphanumeric name into numeric addresses?",
    "options": [
      "Network server",
      "Protocols",
      "DNS",
      "System server"
    ],
    "answer": "DNS"
  },
  {
    "id": 35,
    "question": "Which process model deals with understanding of the problem domain and architecture framework and developing the project plan with identification of risks?",
    "options": [
      "Agile Process Model",
      "Iterative Process Model",
      "Incremental Process Model",
      "Spiral Model"
    ],
    "answer": "Spiral Model"
  },
  {
    "id": 36,
    "question": "Which process model deals with review of project and a decision is made whether to continue with a further loop or not in the planning phase?",
    "options": [
      "Agile Process Model",
      "Waterfall Process Model",
      "Incremental Process Model",
      "Spiral Model"
    ],
    "answer": "Spiral Model"
  },
  {
    "id": 37,
    "question": "Which principle of general management advocates that 'Employee turnover should be minimized to maintain organizational efficiency.'?",
    "options": [
      "Stability of personnel",
      "Remuneration of employees",
      "Equity",
      "Esprit de Corps"
    ],
    "answer": "Stability of personnel"
  },
  {
    "id": 38,
    "question": "Which organisation structure is generally followed by big steel plants?",
    "options": [
      "Line organisation",
      "Line and staff organisation",
      "Functional organisation",
      "All the other answers are correct"
    ],
    "answer": "Functional organisation"
  },
  {
    "id": 39,
    "question": "Which option is incorrect. Monitors can contain",
    "options": [
      "multiple (user) procedures.",
      "only a single user procedure.",
      "only one procedure will be active in the monitor at any one time.",
      "multiple procedures can share variables."
    ],
    "answer": "only a single user procedure."
  },
  {
    "id": 40,
    "question": "Which one of these scenarios are ethical issues? (i) A company is thinking of employing a robot that will make most of the workforce redundant (ii) Someone creates an Al (iii) A judge decides to give someone a prison sentence (iv) Someone hacks a computer",
    "options": [
      "(i) and (iv)",
      "(i) and (iii)",
      "(ii) and (iii)",
      "(iii) and (iv)"
    ],
    "answer": "(i) and (iv)"
  },
  {
    "id": 41,
    "question": "Which one of the following would be classified as sensitive personal data?",
    "options": [
      "Address",
      "Religion",
      "CCTV Video",
      "Name"
    ],
    "answer": "Religion"
  },
  {
    "id": 42,
    "question": "Which one of the following regular expressions over {0,1} denotes the set of all strings not containing 100 as a substring?",
    "options": [
      "0*(10+1)*",
      "0*(11*0)*",
      "0*1010*",
      "0*1*01"
    ],
    "answer": "0*(11*0)*"
  },
  {
    "id": 43,
    "question": "Which one of the following languages over the alphabet {a,b} is described by the regular expression: (a+b)*a(a+b)*a(a+b)*?",
    "options": [
      "The set of all strings containing the substring aa.",
      "The set of all strings containing at most two a's.",
      "The set of all strings containing at least two a's.",
      "The set of all strings that begin and end with either a or b."
    ],
    "answer": "The set of all strings containing at least two a's."
  },
  {
    "id": 44,
    "question": "Which one of the following is not a 'hygiene factor' of Herzberg's Two Factor theory?",
    "options": [
      "Interpersonal relations",
      "Working conditions",
      "Responsibility",
      "Job security"
    ],
    "answer": "Responsibility"
  },
  {
    "id": 45,
    "question": "Which one of the following is not a transmission medium.",
    "options": [
      "Coaxial cable",
      "Telephone Lines",
      "Modems",
      "Microwave systems"
    ],
    "answer": "Modems"
  },
  {
    "id": 46,
    "question": "Which one of the following is not a responsibility of the government?",
    "options": [
      "Enacting the pollution laws.",
      "Establishment of norms for the industrial undertakings.",
      "Providing after sales service.",
      "None of the other answers is correct."
    ],
    "answer": "Providing after sales service."
  },
  {
    "id": 47,
    "question": "Which one of the following is correct?",
    "options": [
      "A relationship can have one or more attributes directly linked to it",
      "All relationships attributes may be attached to one of the participating entities",
      "All relationships may be converted to 1:1 relationships",
      "All relationships may be converted to binary relationships"
    ],
    "answer": "All relationships may be converted to binary relationships"
  },
  {
    "id": 48,
    "question": "Which one of the following is an element of motivation according to Vroom's Vector Valence theory?",
    "options": [
      "Involvement",
      "Equity",
      "Instrumentality",
      "Existence"
    ],
    "answer": "Instrumentality"
  },
  {
    "id": 49,
    "question": "Which one of the following is an application of Stack Data Structure?",
    "options": [
      "Managing function calls",
      "The stock span problem",
      "Arithmetic expression evaluation",
      "All of these"
    ],
    "answer": "All of these"
  },
  {
    "id": 50,
    "question": "Which one of the following is a synchronization tool?",
    "options": [
      "Thread",
      "Pipe",
      "Semaphore",
      "Socket"
    ],
    "answer": "Semaphore"
  },
  // (Append these to the 'questions' array in your questions.js file)
  {
    "id": 51,
    "question": "Which one of the following describes the leadership style in which the leader generally gives the group complete freedom to make decisions and complete the work in whatever way it sees fit?",
    "options": [
      "facilitative style",
      "delegative style",
      "democratic style",
      "laissez-faire style"
    ],
    "answer": "laissez-faire style"
  },
  {
    "id": 52,
    "question": "Which one of the following describes the leadership style in which a leader tends to centralize authority, dictate work methods, make unilateral decisions, and limit employee participation?",
    "options": [
      "authoritarian style",
      "autocratic style",
      "democratic style",
      "laissez-faire style"
    ],
    "answer": "autocratic style"
  },
  {
    "id": 53,
    "question": "Which one of the following communication lines is best suitable for interactive process applications.",
    "options": [
      "Narrow band channel",
      "Half-duplex",
      "Full-duplex",
      "Simplex"
    ],
    "answer": "Full-duplex"
  },
  {
    "id": 54,
    "question": "Which one of the below is not a file infecting virus?",
    "options": [
      "Cavity Virus",
      "Prepending Virus",
      "Appending Virus",
      "Stealth Virus"
    ],
    "answer": "Cavity Virus"
  },
  {
    "id": 55,
    "question": "Which of these statements concerning Weber's concept of Bureaucracy is not correct?",
    "options": [
      "It is based on rules and procedures rather than personal preference and judgment.",
      "It is still a relevant concept in today's organization.",
      "It has acquired a negative reputation for inefficiency and rigidity.",
      "It rejects rational approaches to managing organizations"
    ],
    "answer": "It rejects rational approaches to managing organizations"
  },
  {
    "id": 56,
    "question": "Which of these is an application of linked lists?",
    "options": [
      "To implement file systems",
      "For separate chaining in hash-tables",
      "To implement non-binary trees",
      "All of these"
    ],
    "answer": "All of these"
  },
  {
    "id": 57,
    "question": "Which of these expresses the specific number of entity occurrences associated with one occurrence of the related entity?",
    "options": [
      "Degree of relationship",
      "Connectivity of relationship",
      "Cardinality of relationship",
      "None of these"
    ],
    "answer": "Cardinality of relationship"
  },
  {
    "id": 58,
    "question": "Which of the two features match each other",
    "options": [
      "Inheritance and Encapsulation",
      "Encapsulation and Polymorphism",
      "Encapsulation and Abstraction",
      "Abstraction and Polymorphism"
    ],
    "answer": "Encapsulation and Abstraction"
  },
  {
    "id": 59,
    "question": "Which of the three pillars of digital privacy does not apply?",
    "options": [
      "Information privacy",
      "Individual privacy",
      "Communication privacy",
      "Family privacy"
    ],
    "answer": "Family privacy"
  },
  {
    "id": 60,
    "question": "Which of the statement is true regarding the dequeue operation?",
    "options": [
      "Element are deleted at both end",
      "any element beside the last one",
      "Designing of the operation is simple",
      "All of these"
    ],
    "answer": "Designing of the operation is simple"
  },
  {
    "id": 61,
    "question": "Which of the statement is false as part of asymptotic notation?",
    "options": [
      "Discuss about rate of growth of the function",
      "Asymptotically weakly bound based on the function",
      "Functions that are dependent are non-negative",
      "Bigoh notation speaks on defined constant"
    ],
    "answer": "Asymptotically weakly bound based on the function"
  },
  {
    "id": 62,
    "question": "Which of the following ways should organizations use to protect personal information?",
    "options": [
      "Security clearances and access restrictions on a 'need-to-know' basis are examples of organizational measures.",
      "Technological measures, for example, the use of passwords and encryption.",
      "Physical measures, for example, shredding documents and locking desk drawers.",
      "All of the these"
    ],
    "answer": "All of the these"
  },
  {
    "id": 63,
    "question": "Which of the following true about FILE *fp",
    "options": [
      "FILE is a keyword in C for representing files and fp is a variable of FILE type.",
      "FILE is a stream",
      "FILE is a buffered stream",
      "FILE is a structure and fp is a pointer to the structure of FILE type"
    ],
    "answer": "FILE is a structure and fp is a pointer to the structure of FILE type"
  },
  {
    "id": 64,
    "question": "Which of the following technique is used for fragment?",
    "options": [
      "a technique used in best-effort delivery systems to avoid endlessly looping packets",
      "a technique used by protocols in which a lower level protocol accepts a message from a higher level protocol and places it in the data portion of the low level frame",
      "one of the pieces that results when an IP gateway divides an IP datagram into smaller pieces for transmission across a network that cannot handle the original datagram size",
      "Compaction technique"
    ],
    "answer": "one of the pieces that results when an IP gateway divides an IP datagram into smaller pieces for transmission across a network that cannot handle the original datagram size"
  },
  {
    "id": 65,
    "question": "Which of the following TCP/IP protocol is used for transferring electronic mail messages from one machine to another?",
    "options": [
      "FTP",
      "SNMP",
      "SMTP",
      "RPC"
    ],
    "answer": "SMTP"
  },
  {
    "id": 66,
    "question": "Which of the following statements are true? I. Shortest remaining time first scheduling may cause starvation II. Preemptive scheduling may cause starvation III. Round robin is better than FCFS in terms of response time",
    "options": [
      "I only",
      "I and III only",
      "II and III only",
      "I, II, and III only"
    ],
    "answer": "I, II, and III only"
  },
  {
    "id": 67,
    "question": "Which of the following statements about the Privacy Data Breach Incident is correct?",
    "options": [
      "A Privacy incident is a theft of an asset",
      "A privacy event occurs when personal information is lost in any way. Both suspected and confirmed occurrences involving Pil that provide a reasonable risk of harm are covered by this term",
      "A Privacy Incident is one that may not cause serious injury or harm to the individual and/or involves a few numbers of affected individuals",
      "A Privacy incident is an attack on an asset"
    ],
    "answer": "A privacy event occurs when personal information is lost in any way. Both suspected and confirmed occurrences involving Pil that provide a reasonable risk of harm are covered by this term"
  },
  {
    "id": 68,
    "question": "Which of the following statements about leadership is false?",
    "options": [
      "Leadership does not necessarily take place within a hierarchical structure of an organisation",
      "Not every leader is a manager",
      "When people operate as leaders their role is always clearly established and defined.",
      "All the other answers are correct."
    ],
    "answer": "When people operate as leaders their role is always clearly established and defined."
  },
  {
    "id": 69,
    "question": "Which of the following statement(s) is/are correct? S1: When Bjarne stroustrup designed C++, there is no such concept of exception handling. S2: Exception handling is a new feature added to ANSI C++; not available in earlier compilers.",
    "options": [
      "Only S1",
      "Only S2",
      "Neither S1 nor S2",
      "Both S1 and S2"
    ],
    "answer": "Both S1 and S2"
  },
  {
    "id": 70,
    "question": "Which of the following statement is true?",
    "options": [
      "DFA is more powerful than NFA",
      "NFA and DFA have equal power",
      "NFA is more powerful than DFA",
      "All options are true"
    ],
    "answer": "NFA and DFA have equal power"
  },
  {
    "id": 71,
    "question": "Which of the following standard algorithms is not a Greedy algorithm?",
    "options": [
      "Dijkstra's shortest path algorithm",
      "Prim's algorithm",
      "Kruskal algorithm",
      "Bellman-Ford Shortest path algorithm"
    ],
    "answer": "Bellman-Ford Shortest path algorithm"
  },
  {
    "id": 72,
    "question": "Which of the following risk is the failure of a purchased component to perform as expected?",
    "options": [
      "Product risk",
      "Project risk",
      "Process risk",
      "Program risk"
    ],
    "answer": "Product risk"
  },
  {
    "id": 73,
    "question": "Which of the following represents the rights inherent in a managerial position to give orders and expect them to be obeyed?",
    "options": [
      "Power",
      "Authority",
      "Influence",
      "Responsibility"
    ],
    "answer": "Authority"
  },
  {
    "id": 74,
    "question": "Which of the following regular expression identity is true?",
    "options": [
      "r(**)=r*",
      "(r*s*)*=(r+s)*",
      "(r+s)*=r*+s*",
      "r*s*=r*+s*"
    ],
    "answer": "(r*s*)*=(r+s)*"
  },
  {
    "id": 75,
    "question": "Which of the following regular expression denotes a language comprising of all possible strings over {a,b} of length n where n is a multiple of 3?",
    "options": [
      "((a+b)(a+b)(a+b))*",
      "(aaa+ab+a)+(bbb+bb+a)",
      "(aaa+bbb)*",
      "(a+b+aa+bb+aba+bba)*"
    ],
    "answer": "((a+b)(a+b)(a+b))*"
  },
  {
    "id": 76,
    "question": "Which of the following properties is associated with a queue?",
    "options": [
      "First In Last Out",
      "First In First Out",
      "Last In First Out",
      "None"
    ],
    "answer": "First In First Out"
  },
  {
    "id": 77,
    "question": "Which of the following properties are necessary for an Algorithm?",
    "options": [
      "Definiteness",
      "Correctness",
      "Effectiveness",
      "A and C"
    ],
    "answer": "A and C"
  },
  {
    "id": 78,
    "question": "Which of the following pair is correctly matched ?",
    "options": [
      "A. F.W. Taylor - Human Relations Approach",
      "B. Henry Fayol - Universality of Management",
      "C. Elton Mayo - Psychological Approach",
      "D. M. Parker Follet - Scientific Management"
    ],
    "answer": "B. Henry Fayol - Universality of Management"
  },
  {
    "id": 79,
    "question": "The usage of 'virtual' keyword before the member function is to achieve......... (i). Inheritance (ii). Compile time Polymorphism (iii). Runtime Polymorphism (iv). Static binding",
    "options": [
      "(i) only",
      "(ii) and (iv) only",
      "(ii) and (iii) only",
      "(iii) only"
    ],
    "answer": "(iii) only"
  },
  {
    "id": 80,
    "question": "Which of the following operation take worst-case linear time in the array implementation of the stack?",
    "options": [
      "Push",
      "Pop",
      "IsEmpty",
      "None"
    ],
    "answer": "None"
  },
  {
    "id": 81,
    "question": "Which of the following one can relate to the statement: If x items are put into y containers, with x>y, then at least one container must contain more than one item.",
    "options": [
      "Pumping Lemma",
      "Pigeon Hole Principle",
      "Counting principle",
      "None"
    ],
    "answer": "Pigeon Hole Principle"
  },
  {
    "id": 82,
    "question": "Which of the following must you do if a laptop holding client account information is stolen?",
    "options": [
      "Log the breach immediately with the DPO",
      "Notify the individuals concerned if their rights or freedoms are at risk",
      "Notify your manager",
      "Notify the regulators"
    ],
    "answer": "Log the breach immediately with the DPO"
  },
  {
    "id": 83,
    "question": "Which of the following keys in a table can uniquely identify a row in a table?",
    "options": [
      "Candidate key",
      "Alternate key",
      "Primary key",
      "All of these"
    ],
    "answer": "All of these"
  },
  {
    "id": 84,
    "question": "Which of the following is/are White box technique ?",
    "options": [
      "Statement Testing",
      "Decision Testing",
      "Condition Coverage",
      "All of the mentioned"
    ],
    "answer": "All of the mentioned"
  },
  {
    "id": 85,
    "question": "Which of the following is/are not shared by the threads of the same process? (a) Program counter (b) Logical Address space (c) Stack (d) Registers (e) Virtual Address space (f) File descriptor table (g) Message queue (h) Code",
    "options": [
      "(a), (b) and (e)",
      "(a), (c) and (f)",
      "(a), (c) and (h)",
      "(a) (c) and (d)"
    ],
    "answer": "(a) (c) and (d)"
  },
  {
    "id": 86,
    "question": "Which of the following is TRUE?",
    "options": [
      "Every finite subset of a non-regular set is regular",
      "Every subset of a regular set is regular",
      "Infinite union of finite sets is regular",
      "The union of two non-regular sets is not regular"
    ],
    "answer": "Every finite subset of a non-regular set is regular"
  },
  {
    "id": 87,
    "question": "Which of the following is true",
    "options": [
      "P is a subset of NP",
      "NP is a subset of P",
      "P and NP are equal",
      "NP is a subset of NP-hard"
    ],
    "answer": "P is a subset of NP"
  },
  {
    "id": 88,
    "question": "Which of the following is true of a divisional structure?",
    "options": [
      "It is also known as chain of command.",
      "It is also called a U-form (unitary) structure.",
      "It is a centralized structural form.",
      "It is used to promote flexibility and change."
    ],
    "answer": "It is used to promote flexibility and change."
  },
  {
    "id": 89,
    "question": "Which of the following is true of effective information sharing in an organization?",
    "options": [
      "Information should be shared vertically, but not horizontally.",
      "Vertical linkages are designed primarily for coordination and collaboration.",
      "The structure should fit the information requirements of the organization.",
      "It is not possible to give people a lot of information."
    ],
    "answer": "The structure should fit the information requirements of the organization."
  },
  {
    "id": 90,
    "question": "Which of the following is the most accurate description of an access control method that allows the data owner to develop and manage access control?",
    "options": [
      "MACS (Mandatory Access Control)",
      "RBACS (Role-Based Access Control)",
      "LBACS (List Based Access Control)",
      "DACS (Discretionary Access Control)"
    ],
    "answer": "DACS (Discretionary Access Control)"
  },
  {
    "id": 91,
    "question": "Which of the following is referred as part of restricted data structure?",
    "options": [
      "Stack",
      "Queue",
      "Linked list",
      "All of these"
    ],
    "answer": "All of these"
  },
  {
    "id": 92,
    "question": "Which of the following is odd one out?",
    "options": [
      "Evaluating a postfix expression",
      "Matching Balancing Parentheses",
      "Luggage checking in airports",
      "Depth first search of graphs"
    ],
    "answer": "Luggage checking in airports"
  },
  {
    "id": 93,
    "question": "Which of the following is NOT a valid access control mechanism?",
    "options": [
      "DAC (Discretionary Access Control) list.",
      "SAC (Subjective Access Control) list.",
      "MAC (Mandatory Access Control) list.",
      "RBAC (Role-Based Access Control) list."
    ],
    "answer": "SAC (Subjective Access Control) list."
  },
  {
    "id": 94,
    "question": "Which of the following is NOT a key concept associated with scientific management?",
    "options": [
      "One best way",
      "Formalization",
      "Time-and-motion studies.",
      "Systematic selection"
    ],
    "answer": "Formalization"
  },
  {
    "id": 95,
    "question": "Which of the following is not a good way to protect one's privacy?",
    "options": [
      "Use privacyfocused -SE",
      "Use private Browser-window",
      "Disable cookies",
      "Uninstall Antivirus"
    ],
    "answer": "Uninstall Antivirus"
  },
  {
    "id": 96,
    "question": "Which of the following is element of the database?",
    "options": [
      "Constraints and schema",
      "Relationships",
      "Data",
      "All of these"
    ],
    "answer": "All of these"
  },
  {
    "id": 97,
    "question": "Which of the following is an example of the implementation of an access control policy for a bank teller?",
    "options": [
      "Rule-based policy",
      "Identity-based policy",
      "User-based policy",
      "Role-based policy"
    ],
    "answer": "Role-based policy"
  },
  {
    "id": 98,
    "question": "Which of the following is an ethical behaviour?",
    "options": [
      "Giving less remuneration to the employees.",
      "Selling inferior goods.",
      "Honest behaviour with the customer",
      "Polluting the environment."
    ],
    "answer": "Honest behaviour with the customer"
  },
  {
    "id": 99,
    "question": "Which of the following is a vulnerability in a network environment with discretionary access controls?",
    "options": [
      "SYN flood",
      "Impersonation",
      "Denial of service",
      "Birthday attack"
    ],
    "answer": "Impersonation"
  },
  {
    "id": 100,
    "question": "Which of the following is a project scheduling method that can be applied to software development?",
    "options": [
      "EPM",
      "CPM",
      "CMM",
      "NONE OF THE ABOVE"
    ],
    "answer": "CPM"
  },
  // (Append these to the 'questions' array in your questions.js file)
  {
    "id": 101,
    "question": "Which of the following is a MAC (Mandatory Access Control) feature?",
    "options": [
      "Uses levels of security to classify users and data.",
      "Allows owners of documents to determine who has access to specific documents.",
      "Uses access control lists that specify a list of authorized users.",
      "Uses access control lists that specify a list of unauthorized users."
    ],
    "answer": "Uses levels of security to classify users and data."
  },
  {
    "id": 102,
    "question": "Which of the following is a leadership trait?",
    "options": [
      "Dominance",
      "energy",
      "cognitive ability",
      "All the other answers are correct"
    ],
    "answer": "All the other answers are correct"
  },
  {
    "id": 103,
    "question": "Which of the following does not require additional temporary space?",
    "options": [
      "Stack",
      "Queue",
      "Linked list",
      "All of these"
    ],
    "answer": "Linked list"
  },
  {
    "id": 104,
    "question": "Which of the following condition is used to transmit two packets over a medium at the same time?",
    "options": [
      "Contention",
      "Collision",
      "Synchronous",
      "Asynchronous"
    ],
    "answer": "Collision"
  },
  {
    "id": 105,
    "question": "Which of the following claims about DAC (Discretionary Access Control) is correct?",
    "options": [
      "Files that don't have an owner CANNOT be modified.",
      "The administrator of the system is the owner of each object.",
      "The operating system is the owner of each object.",
      "Each object has an owner, which has full control over the object."
    ],
    "answer": "Each object has an owner, which has full control over the object."
  },
  {
    "id": 106,
    "question": "Which of the following are objectives of an information systems security program?",
    "options": [
      "Threats, vulnerabilities, and risks",
      "Security, information value, and threats",
      "Integrity, confidentiality, and availability",
      "Authenticity, vulnerabilities, and costs"
    ],
    "answer": "Integrity, confidentiality, and availability"
  },
  {
    "id": 107,
    "question": "Which of the following are components of a database except?",
    "options": [
      "User data",
      "Metadata",
      "Reports",
      "Indexes"
    ],
    "answer": "Reports"
  },
  {
    "id": 108,
    "question": "Which of the following application generally use a stack?",
    "options": [
      "Parenthesis balancing program",
      "Syntax analyzer in compiler",
      "Keeping track of local variables at run time",
      "All of the above"
    ],
    "answer": "All of the above"
  },
  {
    "id": 109,
    "question": "Which of the below statement(s) is/are true? (i). By using pure virtual function, it is possible to achieve a pointer to base class points to refer derived class objects. (ii). By using pure virtual function, it is possible to achieve a pointer to derived class points to refer base class objects.",
    "options": [
      "Both (i) and (ii)",
      "Neither (i) nor (ii)",
      "only (i)",
      "only (ii)"
    ],
    "answer": "only (i)"
  },
  {
    "id": 110,
    "question": "Which of the below is used for designing real time networking capabilities?",
    "options": [
      "Packet Tracer",
      "WireShark",
      "Network Simulator 2",
      "TinyOS"
    ],
    "answer": "TinyOS"
  },
  {
    "id": 111,
    "question": "Which of the below is not a business continuity disaster?",
    "options": [
      "Flooding",
      "Covid19",
      "Earth Quake",
      "Tsunami"
    ],
    "answer": "Covid19"
  },
  {
    "id": 112,
    "question": "Which of the below is an inline device?",
    "options": [
      "Switch",
      "Router",
      "VPN",
      "Host"
    ],
    "answer": "Router"
  },
  {
    "id": 113,
    "question": "Which of the below is a network sniffer tool?",
    "options": [
      "Packet Tracer",
      "WireShark",
      "Network Simulator 2",
      "TinyOS"
    ],
    "answer": "WireShark"
  },
  {
    "id": 114,
    "question": "Which of the following would LEAST likely be a source of ethical guidance?",
    "options": [
      "holy books",
      "laws",
      "tests",
      "friends"
    ],
    "answer": "tests"
  },
  {
    "id": 115,
    "question": "Which of the following term is the practice of hiding data in graphic, audio, or other text file?",
    "options": [
      "Masking",
      "Steganography",
      "Cryptography",
      "None of the choices"
    ],
    "answer": "Steganography"
  },
  {
    "id": 116,
    "question": "Which of the following statement(s) is/are NOT true? (i) Virtual function help to achieve a pointer to base class points to refer base class objects only. (ii) Virtual function help to achieve a pointer to base class points to refer derived class objects. (iii) Virtual function has no role in supporting a pointer to achieve polymorphism. (iv) Virtual functions are not member functions of a class.",
    "options": [
      "(i) and (iv) only",
      "(i), (ii) and (iv) only",
      "(i), (iii) and (iv) only",
      "(ii) only"
    ],
    "answer": "(i), (iii) and (iv) only"
  },
  {
    "id": 117,
    "question": "Which of the following relations is correct, when comparing the best-case complexity?",
    "options": [
      "insertion < merge < selection",
      "merge < insertion < selection",
      "insertion < selection < merge",
      "none of the above"
    ],
    "answer": "insertion < selection < merge"
  },
  {
    "id": 118,
    "question": "Which of the following principles of management was not given by Fayol?",
    "options": [
      "Unity of direction",
      "Subordination of individual interest to common interest",
      "Stability of tenure",
      "Standardisation"
    ],
    "answer": "Standardisation"
  },
  {
    "id": 119,
    "question": "Which of the following is true of a functional structure?",
    "options": [
      "It reacts quickly to environmental changes.",
      "It has a strong horizontal coordination.",
      "It often results in hierarchy overload.",
      "It cannot work in small organizations."
    ],
    "answer": "It often results in hierarchy overload."
  },
  {
    "id": 120,
    "question": "Which of the following is the encryption/decryption key known only to the party or parties that exchange secret messages?",
    "options": [
      "E-Signature",
      "Digital Signature",
      "Private key",
      "Security token"
    ],
    "answer": "Private key"
  },
  {
    "id": 121,
    "question": "Which of the following is NOT one of the triple bottom line factors of corporate social responsibility?",
    "options": [
      "society",
      "environment",
      "economy",
      "culture"
    ],
    "answer": "culture"
  },
  {
    "id": 122,
    "question": "Which of the following is NOT a topic included in the social responsibility audit focus?",
    "options": [
      "open communication",
      "treatment of employees",
      "leadership",
      "management structure"
    ],
    "answer": "management structure"
  },
  {
    "id": 123,
    "question": "Which of the following is an advantage of a peer-to-peer network?",
    "options": [
      "Files and folders cannot be centrally backed up",
      "Does not need an expensive server as individual workstations are used to access files",
      "The server is expensive to purchase",
      "Network security can be carried out centrally"
    ],
    "answer": "Does not need an expensive server as individual workstations are used to access files"
  },
  {
    "id": 124,
    "question": "Which of the following is an advantage of a client-server network?",
    "options": [
      "If one computer fails it will not disrupt the network",
      "There is little or no security",
      "Users can access shared data which is centrally controlled",
      "If any part of the network fails, a lot of disruption can occur"
    ],
    "answer": "Users can access shared data which is centrally controlled"
  },
  {
    "id": 125,
    "question": "Which of the following firms has NOT been exposed for ethical abuses and corrupt conduct?",
    "options": [
      "Satyam Computers",
      "Lehman Brothers",
      "Enron",
      "General Electric(GE)"
    ],
    "answer": "General Electric(GE)"
  },
  {
    "id": 126,
    "question": "Which of following linked list has the feature of its elimination of the need for a pointer to a node's predecessor to delete the node?",
    "options": [
      "Singly",
      "Doubly",
      "Circular",
      "All of these"
    ],
    "answer": "Doubly"
  },
  {
    "id": 127,
    "question": "Which of the given option is correct for the C code? #include<stdio.h> main(){ int a[4]={1,2,3,4}; int *b[4]; int (*c)[4]; ... }",
    "options": [
      "a is an integer array, b is an array of pointers, c is an array of pointers",
      "a is an integer array, b is an array of pointers, c is a pointer to an array",
      "a is an array of pointers, b is a pointer to an array, c is an array of pointers",
      "a is an array of pointers, b is a pointer to an array, c is a pointer to an array"
    ],
    "answer": "a is an integer array, b is an array of pointers, c is a pointer to an array"
  },
  {
    "id": 128,
    "question": "Which network protocol is often used for gaming?",
    "options": [
      "TCP",
      "FTP",
      "UDP",
      "HTTP"
    ],
    "answer": "UDP"
  },
  {
    "id": 129,
    "question": "Which network topology is the most common way of setting up a network?",
    "options": [
      "Ring",
      "Bus",
      "Star",
      "Mesh"
    ],
    "answer": "Star"
  },
  {
    "id": 130,
    "question": "Which model can be selected if a user is involved in all the phases of SDLC?",
    "options": [
      "Waterfall Model",
      "Prototyping Model",
      "RAD Model",
      "Build AND Fix Model"
    ],
    "answer": "RAD Model"
  },
  {
    "id": 131,
    "question": "Which method is meant for coordinating access to resources with respect to the available IP addresses?",
    "options": [
      "MAC",
      "ACL",
      "DAC",
      "None of the choices"
    ],
    "answer": "ACL"
  },
  {
    "id": 132,
    "question": "WHICH LAYER IS RESPONSIBLE FOR PROCESS TO PROCESS DELIVERY?",
    "options": [
      "NETWORK LAYER",
      "TRANSPORT LAYER",
      "SESSION LAYER",
      "DATA LINK LAYER"
    ],
    "answer": "TRANSPORT LAYER"
  },
  {
    "id": 133,
    "question": "Which key skill was not mentioned by Kanter as needed by managers of innovative organisations?",
    "options": [
      "Coping",
      "Political",
      "Communicating",
      "Leading a team"
    ],
    "answer": "Communicating"
  },
  {
    "id": 134,
    "question": "Which is/are the application(s) of stack",
    "options": [
      "Function calls",
      "Large number Arithmetic",
      "Evaluation of arithmetic expressions",
      "All of these"
    ],
    "answer": "All of these"
  },
  {
    "id": 135,
    "question": "Which is used for predicting virus?",
    "options": [
      "Firewall",
      "CWE",
      "IPS",
      "Exposures"
    ],
    "answer": "CWE"
  },
  {
    "id": 136,
    "question": "Which is the most optimal scheduling algorithm?",
    "options": [
      "FCFS-First Come First Served",
      "Shortest Job First",
      "Round Robin",
      "None of the Mentioned"
    ],
    "answer": "Shortest Job First"
  },
  {
    "id": 137,
    "question": "Which is the most efferent phone directory search?",
    "options": [
      "Binary search tree",
      "Balanced BST",
      "Trie",
      "Linked List"
    ],
    "answer": "Trie"
  },
  {
    "id": 138,
    "question": "which is the fastest storage unit in a usual memory hierarchy?",
    "options": [
      "cache",
      "main memory",
      "hard disk memory",
      "register"
    ],
    "answer": "register"
  },
  {
    "id": 139,
    "question": "Which is not the application of queue?",
    "options": [
      "Printing jobs",
      "Process waiting",
      "Function nesting",
      "Network packet forwarding"
    ],
    "answer": "Function nesting"
  },
  {
    "id": 140,
    "question": "Which is not one of Fayol's principles?",
    "options": [
      "Authority and responsibility",
      "Globalization",
      "Unity of direction",
      "Unity of command"
    ],
    "answer": "Globalization"
  },
  {
    "id": 141,
    "question": "Which is first loaded into the BUS by the data transfer initiator?",
    "options": [
      "Data",
      "Address",
      "Control Information",
      "Address, Control Information"
    ],
    "answer": "Address, Control Information"
  },
  {
    "id": 142,
    "question": "Which is a true statement.",
    "options": [
      "Breadth-first search is the shortest path algorithm that works on un-weighted graphs",
      "Depth first search is the shortest path algorithm that works on un-weighted graphs",
      "Both of the above are true",
      "None of the above are true"
    ],
    "answer": "Breadth-first search is the shortest path algorithm that works on un-weighted graphs"
  },
  {
    "id": 143,
    "question": "Which HR practice would most likely be improved through a firm's efforts at corporate social responsibility?",
    "options": [
      "benefits",
      "recruitment",
      "compensation",
      "succession planning"
    ],
    "answer": "recruitment"
  },
  {
    "id": 144,
    "question": "Which directory implementation is used in most Operating System?",
    "options": [
      "Single level directory structure",
      "Two level directory structure",
      "Tree directory structure",
      "Acyclic directory structure"
    ],
    "answer": "Tree directory structure"
  },
  {
    "id": 145,
    "question": "Which database level is closest to the users?",
    "options": [
      "Internal",
      "Physical",
      "Conceptual",
      "External"
    ],
    "answer": "External"
  },
  {
    "id": 146,
    "question": "Which data structure is used for implementing recursion?",
    "options": [
      "Queue",
      "Stack",
      "Arrays",
      "List"
    ],
    "answer": "Stack"
  },
  {
    "id": 147,
    "question": "Which data structure is needed to convert infix notation to postfix notation?",
    "options": [
      "Branch",
      "Queue",
      "Tree",
      "Stack"
    ],
    "answer": "Stack"
  },
  {
    "id": 148,
    "question": "Which data model is independent of both hardware and DBMS?",
    "options": [
      "External",
      "Internal",
      "Conceptual",
      "All of these"
    ],
    "answer": "Conceptual"
  },
  {
    "id": 149,
    "question": "Which approach recognises that there is no optimal organisational design?",
    "options": [
      "Flexible",
      "Virtual",
      "Contingency",
      "Boundaryless"
    ],
    "answer": "Contingency"
  },
  {
    "id": 150,
    "question": "Which among the following is equivalent to the given regular expression? ab*+b",
    "options": [
      "(ab)*+b",
      "a(b*+b)",
      "a(b*)+b",
      "((a*b)b*)*"
    ],
    "answer": "a(b*)+b"
  },
  // (Append these to the 'questions' array in your questions.js file)
  {
    "id": 151,
    "question": "Which access control type has a central authority that determines what objects people have access to depending on their role or organizational security policy?",
    "options": [
      "Mandatory Access Control",
      "Discretionary Access Control",
      "Non-Discretionary Access Control",
      "Rule-based Access control"
    ],
    "answer": "Mandatory Access Control"
  },
  {
    "id": 152,
    "question": "Which term refers to the discipline that deals with what is good and bad or right and wrong?",
    "options": [
      "morals and traditions",
      "social responsibility",
      "ethics",
      "cultural norms"
    ],
    "answer": "ethics"
  },
  {
    "id": 153,
    "question": "Which of the following statements regarding inline functions is correct?",
    "options": [
      "It speeds up execution.",
      "It slows down execution.",
      "It increases the code size.",
      "It increases the code size and length."
    ],
    "answer": "It speeds up execution."
  },
  {
    "id": 154,
    "question": "Which of the following is the correct representation of pure virtual function?",
    "options": [
      "class base { public: virtual void display() = 0; };",
      "class base { public: virtual void display! = 0; };",
      "class base { public: virtual void display()=0 }",
      "class base { public: virtual void display() > 0; };"
    ],
    "answer": "class base { public: virtual void display() = 0; };"
  },
  {
    "id": 155,
    "question": "Which of the following is suitable to be considered as an object?",
    "options": [
      "Name",
      "Email",
      "Transaction",
      "Quantity"
    ],
    "answer": "Transaction"
  },
  {
    "id": 156,
    "question": "Which of the following concept of oops allows compiler to insert arguments in a function call if it is not specified?",
    "options": [
      "Call by value",
      "Default arguments",
      "Call by reference",
      "Call by pointer"
    ],
    "answer": "Default arguments"
  },
  {
    "id": 157,
    "question": "Which access control model can be suited for bank teller application?",
    "options": [
      "Discretionary",
      "Mandatory",
      "Role-based",
      "Rule-based"
    ],
    "answer": "Role-based"
  },
  {
    "id": 158,
    "question": "When class B is inherited from class A, what is the order in which the destructors are called?",
    "options": [
      "Class A first Class B next",
      "Class B first Class A next",
      "Class B's only as it is the child class",
      "Class A's only as it is the parent class"
    ],
    "answer": "Class B first Class A next"
  },
  {
    "id": 159,
    "question": "When we concatenate two languages L1 and L2 recognized by machine M1 and M2 we obtain a machine with final state same as that of",
    "options": [
      "M2",
      "M1",
      "M1 and M2",
      "M1 or M2"
    ],
    "answer": "M2"
  },
  {
    "id": 160,
    "question": "When there is more than one final state in the reduced FA, then its regular expression will contain ________ operator surely",
    "options": [
      "dot",
      "star",
      "binary+",
      "unary+"
    ],
    "answer": "binary+"
  },
  {
    "id": 161,
    "question": "When there is complete DFA with Five states out of which two are final states if F is modified such that it recognizes complement of the original language then there will be at least _______ final states.",
    "options": [
      "2",
      "3",
      "7",
      "5"
    ],
    "answer": "3"
  },
  {
    "id": 162,
    "question": "When there are infinite distinguishable strings then there cannot be a",
    "options": [
      "automata",
      "finite automata",
      "regular expression",
      "both finite automata and regular expression"
    ],
    "answer": "both finite automata and regular expression"
  },
  {
    "id": 163,
    "question": "When the project deals with developing a well understood application, then the model is called as",
    "options": [
      "Waterfall Model",
      "Spiral Model",
      "COCOMO Model",
      "Agile Model"
    ],
    "answer": "COCOMO Model"
  },
  {
    "id": 164,
    "question": "When the entries in the segment tables of two different processes point to the same physical address then",
    "options": [
      "the segments are invalid",
      "the processes get blocked",
      "the address space is invalid",
      "the segments are shared"
    ],
    "answer": "the segments are shared"
  },
  {
    "id": 165,
    "question": "When the computer processor does not get a data item it requires in the cache, then the problem is known as",
    "options": [
      "Cache miss",
      "Cache hit",
      "File caches",
      "Name cache"
    ],
    "answer": "Cache miss"
  },
  {
    "id": 166,
    "question": "When FA M is given which recognizes language L and reverse of L is found by using M then there can be _______ Final states",
    "options": [
      "Two",
      "Three",
      "Only one",
      "Any number"
    ],
    "answer": "Only one"
  },
  {
    "id": 167,
    "question": "When employee satisfaction is measured, employees seemed to be more satisfied under a(n) ________ leadership style than under a(n) ________ one.",
    "options": [
      "laissez-faire; participative",
      "supportive; laissez-faire",
      "democratic; directive",
      "democratic; autocratic"
    ],
    "answer": "democratic; autocratic"
  },
  {
    "id": 168,
    "question": "When determining the most appropriate form of leadership, which of the following should be considered?",
    "options": [
      "The manager.",
      "The work environment.",
      "The group.",
      "All the other options are correct"
    ],
    "answer": "All the other options are correct"
  },
  {
    "id": 169,
    "question": "When designing apps, a software company considers data protection issues. So, what should we call this strategy?",
    "options": [
      "Data protection by default",
      "Legitimate data protection",
      "Data protection by design",
      "Organisational data protection"
    ],
    "answer": "Data protection by design"
  },
  {
    "id": 170,
    "question": "When a state in a FA has self loop its regular expression will have",
    "options": [
      "dot",
      "star",
      "binary+",
      "unary+"
    ],
    "answer": "star"
  },
  {
    "id": 171,
    "question": "When a program tries to access a page that is mapped in address space but not loaded in physical memory, then",
    "options": [
      "segmentation fault occurs",
      "fatal error occurs",
      "page fault occurs",
      "no error occurs"
    ],
    "answer": "page fault occurs"
  },
  {
    "id": 172,
    "question": "What would be the asymptotic time complexity to insert an element at the second position in the linked list?",
    "options": [
      "O(1)",
      "O(n)",
      "O(n^2)",
      "None"
    ],
    "answer": "O(1)"
  },
  {
    "id": 173,
    "question": "What will be the value of top, if there is a size of stack STACK_SIZE is 5",
    "options": [
      "5",
      "6",
      "4",
      "none"
    ],
    "answer": "4"
  },
  {
    "id": 174,
    "question": "What will be the output? #include<stdio.h> #include<string.h> main(){ char arr1[5]={'a','p','p','l','e'}; char arr2[5]; arr2=arr1; printf('%s',arr2); }",
    "options": [
      "apple",
      "Error",
      "a",
      "0"
    ],
    "answer": "Error"
  },
  {
    "id": 175,
    "question": "What will be the output? #include<stdio.h> main(){ char arr[]='ab.cd.ef'; printf('%s',strrchr(arr,'.')); }",
    "options": [
      "ab",
      ".cd",
      ".cd.ef",
      ".ef"
    ],
    "answer": ".ef"
  },
  {
    "id": 176,
    "question": "What will be the output? #include<stdio.h> int value=100; void myFunction(int parameter) { printf('%d', parameter); } main(){ int value=200; myFunction(value); }",
    "options": [
      "200",
      "100",
      "100 200",
      "200 100"
    ],
    "answer": "200"
  },
  {
    "id": 177,
    "question": "What will be the output? #include<stdio.h> void myFunction() { return 1; } main(){ printf('%d', myFunction()); }",
    "options": [
      "1",
      "0",
      "Error",
      "None of these"
    ],
    "answer": "Error"
  },
  {
    "id": 178,
    "question": "What will be the output? #include<stdio.h> main(){ int arr[4]={0,1,2,3}; int one, two, three; one=++arr[1]; two=arr[one]+1; three=arr[one+1]; printf('%d %d %d', one, two, three); }",
    "options": [
      "1 2 3",
      "2 3 3",
      "2 2 3",
      "0 1 2"
    ],
    "answer": "2 3 3"
  },
  {
    "id": 179,
    "question": "What will be the output? #include<stdio.h> main(){ float a[]={1.23,2.34,3.45,4.56,5.67}; printf('%d',sizeof(a)/sizeof(a[-1])); }",
    "options": [
      "5",
      "1",
      "Error",
      "0"
    ],
    "answer": "5"
  },
  {
    "id": 180,
    "question": "What will be the output? #include<stdio.h> int myFunction1 (int parameter) { return parameter; } int myFunction2(int *parameter) { return *parameter++; } main(){ int value=100; printf('%d %d', myFunction1(value), myFunction2(&value)); }",
    "options": [
      "100 101",
      "101 101",
      "100 100",
      "101 100"
    ],
    "answer": "100 100"
  },
  {
    "id": 181,
    "question": "What will be the output? #include <stdio.h> char *cut(char *parameter) { parameter+=5; return parameter; } main() { printf('%s', cut('AllisWell!')); }",
    "options": [
      "Allis",
      "Well!",
      "Allis Well!",
      "Error"
    ],
    "answer": "Well!"
  },
  {
    "id": 182,
    "question": "What will be the output of the given program? #include<stdio.h> int myFunction(int parameter) { return parameter++; } main(){ int value1=100; int value2=myFunction(value1); printf('%d',-value2); }",
    "options": [
      "100",
      "101",
      "-100",
      "Error"
    ],
    "answer": "-100"
  },
  {
    "id": 183,
    "question": "What will be the output of the given code? #include<stdio.h> void myFunction(int parameter) { printf('%d ',parameter); } main(){ int value1=1; myFunction(value1); static int value2; if (value2<value1) { value2++; main(); } }",
    "options": [
      "Error",
      "1 1",
      "2",
      "1"
    ],
    "answer": "1 1"
  },
  {
    "id": 184,
    "question": "What will be the output of the below code? #include<stdio.h> int myFunction(int *parameter) { return ++*parameter; } main(){ int value=100; printf('%d ',value); myFunction(&value); printf('%d', value); }",
    "options": [
      "100 100",
      "101 101",
      "101 100",
      "100 101"
    ],
    "answer": "100 101"
  },
  {
    "id": 185,
    "question": "What will be printed? #include<stdio.h> int myFunction() { return 1; return 2; } main(){ printf('%d', myFunction()); }",
    "options": [
      "1",
      "2",
      "12",
      "21"
    ],
    "answer": "1"
  },
  {
    "id": 186,
    "question": "What will be printed? #include<stdio.h> main(){ int myFunction() { return 1; } printf('%d', myFunction()); }",
    "options": [
      "1",
      "Invalid function definition",
      "myFunction() should be defined outside main method",
      "0"
    ],
    "answer": "myFunction() should be defined outside main method"
  },
  {
    "id": 187,
    "question": "What will be printed? #include<stdio.h> main(){ char arr[]='ab.cd.ef'; printf('%s', strchr(arr,'.')); }",
    "options": [
      "ab",
      ".cd",
      ".cd.ef",
      ".ef"
    ],
    "answer": ".cd.ef"
  },
  {
    "id": 188,
    "question": "What will be printed? #include<stdio.h> main(){ char arr[5]='apple'; printf('%c',0[arr]); }",
    "options": [
      "apple",
      "a",
      "97",
      "Error"
    ],
    "answer": "a"
  },
  {
    "id": 189,
    "question": "What type of teams are composed of workers from different functional departments of the organization that meet to solve an important organizational problem?",
    "options": [
      "Line teams.",
      "Cross-functional teams.",
      "Staff teams.",
      "Multi-dimensional teams."
    ],
    "answer": "Cross-functional teams."
  },
  {
    "id": 190,
    "question": "What type of computer chips are volatile?",
    "options": [
      "RAM chips",
      "ROM chips",
      "CDROM",
      "FLASH MEMORY"
    ],
    "answer": "RAM chips"
  },
  {
    "id": 191,
    "question": "What type of encryption is capable of encrypting a fixed-length plaintext block into a 128-bit cipher text block at the same time?",
    "options": [
      "Block",
      "Symmetric",
      "Hash",
      "None of the choices"
    ],
    "answer": "Block"
  },
  {
    "id": 192,
    "question": "What type of encryption encrypts the plain text byte by byte or bit by bit?",
    "options": [
      "Block",
      "Hash",
      "Stream",
      "Elliptic"
    ],
    "answer": "Stream"
  },
  {
    "id": 193,
    "question": "What terms are applied by sociologists to two contrasting pictures of organizations: competing individuals and groups or people acting with common interests?",
    "options": [
      "contingent, functional",
      "pooled, reciprocal",
      "pluralist, unitary",
      "co-operative, conflictual"
    ],
    "answer": "pluralist, unitary"
  },
  {
    "id": 194,
    "question": "What should you do with someone's personal data once you've finished using it?",
    "options": [
      "Pass it on to someone else",
      "Throw it out.",
      "Give it back to the owner.",
      "Securely delete or destroy it."
    ],
    "answer": "Securely delete or destroy it."
  },
  {
    "id": 195,
    "question": "What should a project manager do or follow to ensure clear boundaries for project completion?",
    "options": [
      "Scope verification",
      "Completing a scope statement",
      "scope definition",
      "Risk management plan"
    ],
    "answer": "Completing a scope statement"
  },
  {
    "id": 196,
    "question": "What oracle backup and recovery file contains user and system data?",
    "options": [
      "Datafile",
      "Control file",
      "Online ReDo file",
      "Redolog file"
    ],
    "answer": "Datafile"
  },
  {
    "id": 197,
    "question": "What is {1,2} intersection {2,3}?",
    "options": [
      "{12,2}*",
      "{23,2}*",
      "{2}",
      "{12,23}*"
    ],
    "answer": "{2}"
  },
  {
    "id": 198,
    "question": "What is the value of the postfix expression 6 3 2 4 + - *?",
    "options": [
      "Something between -15 and -100",
      "Something between -5 and -15",
      "Something between 5 and -5",
      "Something between 5 and 15"
    ],
    "answer": "Something between -5 and -15"
  },
  {
    "id": 199,
    "question": "What is the status of array after the first iteration of selection sort for the given array of elements: 5,7,10,12,2,8",
    "options": [
      "5,7,10,12,2,8",
      "2,5,10,12,7,8",
      "2,7,10,12,5,8",
      "5,7,10,2,8,12"
    ],
    "answer": "2,7,10,12,5,8"
  },
  {
    "id": 200,
    "question": "What is the result of the following operation? Top (Push (S, X))",
    "options": [
      "X",
      "Null",
      "S",
      "None"
    ],
    "answer": "X"
  },
  // (Append these to the 'questions' array in your questions.js file)
  {
    "id": 201,
    "question": "What is the real disadvantage of a linear list of directory entries?",
    "options": [
      "size of the linear list in memory",
      "linear search to find a file",
      "it is not reliable",
      "all of the mentioned"
    ],
    "answer": "linear search to find a file"
  },
  {
    "id": 202,
    "question": "What is the postfix form of the following prefix *+ab-cd",
    "options": [
      "ab+cd-*",
      "abc+*-",
      "ab+*cd-",
      "ab+*cd-"
    ],
    "answer": "ab+cd-*"
  },
  {
    "id": 203,
    "question": "What is the name of the process in which an employee informs another responsible employee in the company about potentially unethical behavior?",
    "options": [
      "Whistleblowing",
      "Purging and releasing",
      "Identification",
      "Information transfer"
    ],
    "answer": "Whistleblowing"
  },
  {
    "id": 204,
    "question": "What is the level of recursion if the input array is { 4, 8, 32, 58, 98, 129, 201 } and key is 8?",
    "options": [
      "5",
      "2",
      "3",
      "4"
    ],
    "answer": "3"
  },
  {
    "id": 205,
    "question": "What is the difference in graph traversal and tree:",
    "options": [
      "There can be a loop in the graph",
      "DFS and BFS are the same",
      "There can't be a loop in the graph",
      "DFS and BFD are different"
    ],
    "answer": "There can be a loop in the graph"
  },
  {
    "id": 206,
    "question": "What is the current industry for the measure of Software Quality?",
    "options": [
      "Iterations to Successful Build",
      "Number of Bugs Fixed",
      "Number of Defects per KLOC",
      "None in the list"
    ],
    "answer": "Number of Defects per KLOC"
  },
  {
    "id": 207,
    "question": "What is the function of HTTP?",
    "options": [
      "webserver and browser activity according to command",
      "Mark-up language",
      "Forming authority of the page",
      "Tag files and create effects"
    ],
    "answer": "webserver and browser activity according to command"
  },
  {
    "id": 208,
    "question": "What is the complexity of quick sort algorithm, if the array to be sorted is already in sorted order?",
    "options": [
      "O(n^2)",
      "O(nlogn)",
      "Constant",
      "O(n)"
    ],
    "answer": "O(n^2)"
  },
  {
    "id": 209,
    "question": "What is split horizon?",
    "options": [
      "Information about a route should not be sent back in the direction from which the original update came",
      "It splits the traffic when you have a large bus (horizon) physical network.",
      "It holds the regular updates from broadcasting to a downed link.",
      "It prevents regular update messages from reinstating a route that has gone down."
    ],
    "answer": "Information about a route should not be sent back in the direction from which the original update came"
  },
  {
    "id": 210,
    "question": "What is Cyclomatic complexity?",
    "options": [
      "Black box testing",
      "White box testing",
      "Yellow box testing",
      "Green box testing"
    ],
    "answer": "White box testing"
  },
  {
    "id": 211,
    "question": "What is Address Binding?",
    "options": [
      "going to an address in memory",
      "locating an address with the help of another address",
      "binding two addresses together to form a new address in a different memory space",
      "a mapping from one address space to another"
    ],
    "answer": "a mapping from one address space to another"
  },
  {
    "id": 212,
    "question": "What is a network?",
    "options": [
      "A group of 1 or more devices that communicate",
      "A group of 2 or more devices that communicate",
      "When 2 or more computers are in the same building",
      "A group of 3 or more devices that communicate"
    ],
    "answer": "A group of 2 or more devices that communicate"
  },
  {
    "id": 213,
    "question": "What is a Network Protocol",
    "options": [
      "Formal standards and policies comprised of memes",
      "Formal standards and policies",
      "Formal standards and policies comprised of rules, procedures and formats",
      "None of the above"
    ],
    "answer": "Formal standards and policies comprised of rules, procedures and formats"
  },
  {
    "id": 214,
    "question": "What is a disadvantage of a star network?",
    "options": [
      "It is cheap",
      "It uses one cable",
      "It is expensive",
      "It has a terminator"
    ],
    "answer": "It is expensive"
  },
  {
    "id": 215,
    "question": "What happens to a task force after it finishes its assignment?",
    "options": [
      "It is integrated with the organisation.",
      "It is disbanded",
      "It continues after accomplishment.",
      "None of the other answers is correct."
    ],
    "answer": "It is disbanded"
  },
  {
    "id": 216,
    "question": "What does DPIA expand as?",
    "options": [
      "Data Privacy Impact Assessment",
      "Data Protection Impact Assessment",
      "Data Privacy Identification Assessment",
      "Data Protection Identification Assessment"
    ],
    "answer": "Data Protection Impact Assessment"
  },
  {
    "id": 217,
    "question": "What does biometrics have to do with access control?",
    "options": [
      "Authorization",
      "Authentication",
      "Confirmation",
      "Certification"
    ],
    "answer": "Authentication"
  },
  {
    "id": 218,
    "question": "What are the mid values in each level of recursion in the binary search for the input array {4, 8, 58, 98, 129, 201 } and key 201?",
    "options": [
      "58, 129, 201",
      "98, 129, 201",
      "98, 201",
      "58, 129, 201"
    ],
    "answer": "98, 129, 201"
  },
  {
    "id": 219,
    "question": "What are all candidate keys, other than the primary keys called?",
    "options": [
      "Partial keys",
      "Alternate keys",
      "Superkey keys",
      "None of these"
    ],
    "answer": "Alternate keys"
  },
  {
    "id": 220,
    "question": "What Access Control paradigm was created to deal primarily with computer system information flow?",
    "options": [
      "Lattice-Based",
      "Integrity Based",
      "Flow-Based",
      "Area Based"
    ],
    "answer": "Flow-Based"
  },
  {
    "id": 221,
    "question": "What is another way to describe a parent-child relationship?",
    "options": [
      "Has-A",
      "Is-A",
      "Does-A",
      "Gets-A"
    ],
    "answer": "Is-A"
  },
  {
    "id": 222,
    "question": "Virtual memory technique facilitates sharing of memory among",
    "options": [
      "processes",
      "threads",
      "instructions",
      "programs"
    ],
    "answer": "processes"
  },
  {
    "id": 223,
    "question": "Unity of command means:",
    "options": [
      "Parity of authority and responsibility",
      "The flow of command from superior to a subordinate",
      "Parity in controlling",
      "None of the above"
    ],
    "answer": "The flow of command from superior to a subordinate"
  },
  {
    "id": 224,
    "question": "Unit testing is done by?",
    "options": [
      "Users",
      "Developers",
      "Customers",
      "None of the mentioned"
    ],
    "answer": "Developers"
  },
  {
    "id": 225,
    "question": "Triple Bottom Line reporting refers to:",
    "options": [
      "using a low, medium, and high estimates for profitability forecasts.",
      "measuring the impact of the firm on stockholders, customers, and employees",
      "measuring the social, environmental, and financial performance of the firm.",
      "measuring the impact of local, state, and federal governments on the firm."
    ],
    "answer": "measuring the social, environmental, and financial performance of the firm."
  },
  {
    "id": 226,
    "question": "Transfer time is ...",
    "options": [
      "the time is taken to locate the disk arm to a specified track where the data is to be read or write.",
      "the time is taken by the desired sector of disk to rotate into a position so that it can access the read/write heads.",
      "the time to transfer the data.",
      "the time taken to complete the execution."
    ],
    "answer": "the time to transfer the data."
  },
  {
    "id": 227,
    "question": "Traits or skills on which leaders differ from non-leaders include:",
    "options": [
      "Honesty and integrity",
      "Self-confidence",
      "Drive and desire to lead",
      "All the other options are correct"
    ],
    "answer": "All the other options are correct"
  },
  {
    "id": 228,
    "question": "Trait theory ignores ________.",
    "options": [
      "the physical traits of leaders.",
      "the aspects of honesty and integrity.",
      "the interactions of leaders and their group members as well as situational factors.",
      "the fact that leaders should be able to create visions and solve problems."
    ],
    "answer": "the interactions of leaders and their group members as well as situational factors."
  },
  {
    "id": 229,
    "question": "Total number of levels in DFD",
    "options": [
      "1",
      "2",
      "3",
      "Depends on the system"
    ],
    "answer": "3"
  },
  {
    "id": 230,
    "question": "Total Development in programmer months of Utility programs",
    "options": [
      "TDEV=2.5xPM pow 0.38",
      "TDEV=2.5xPM pow0.35",
      "TDEV=2.5xPM pow0.32",
      "None of the above"
    ],
    "answer": "TDEV=2.5xPM pow0.35"
  },
  {
    "id": 231,
    "question": "Total Development in programmer months of Systems programs",
    "options": [
      "TDEV=2.5xPM pow 0.38",
      "TDEV=2.5xPM pow0.35",
      "TDEV=2.5xPM pow0.32",
      "None of the above"
    ],
    "answer": "TDEV=2.5xPM pow0.32"
  },
  {
    "id": 232,
    "question": "Total bits for a direct-mapped cache with data of 16 KB and blocks of 4-word, assuming a 32-bit address are",
    "options": [
      "143K",
      "144K",
      "145K",
      "147K"
    ],
    "answer": "147K"
  },
  {
    "id": 233,
    "question": "To read and write from a file we are using the standard C++ library called",
    "options": [
      "fstream",
      "stream",
      "filestream",
      "None"
    ],
    "answer": "fstream"
  },
  {
    "id": 234,
    "question": "To make a process as Zombie, which process needs to delay (sleep()) its execution? The parent process or the child process?",
    "options": [
      "parent to sleep for a while. child normal execution",
      "child to sleep for a while, parent normal execution",
      "parent and child both normal execution",
      "parent and child both to sleep for a while"
    ],
    "answer": "parent to sleep for a while. child normal execution"
  },
  {
    "id": 235,
    "question": "To help the operating system estimate LRU, many processors provide a",
    "options": [
      "Use bit",
      "Reference bit",
      "Fault bit",
      "Both a and b"
    ],
    "answer": "Both a and b"
  },
  {
    "id": 236,
    "question": "To create a dynamic record which is better?",
    "options": [
      "Stack",
      "Queue",
      "Linked list",
      "All of these"
    ],
    "answer": "Linked list"
  },
  {
    "id": 237,
    "question": "To avoid the race condition, the number of processes that may be simultaneously inside their critical section is",
    "options": [
      "1",
      "8",
      "16",
      "0"
    ],
    "answer": "1"
  },
  {
    "id": 238,
    "question": "Time Oriented Diagram",
    "options": [
      "class Diagram",
      "UseCase Diagram",
      "Object Diagram",
      "Sequence Diagram"
    ],
    "answer": "Sequence Diagram"
  },
  {
    "id": 239,
    "question": "Through this principle of management, Henri Fayol guides the managers to exhibit exemplary behaviour... Which principle of management is being described?",
    "options": [
      "Remuneration of employees",
      "Centralization and decentralization",
      "Subordination of Individual interest to general interest",
      "Equity"
    ],
    "answer": "Subordination of Individual interest to general interest"
  },
  {
    "id": 240,
    "question": "Threat to confidentiality is .....",
    "options": [
      "DDoS",
      "Malware",
      "Eavesdropping",
      "DoS"
    ],
    "answer": "Eavesdropping"
  },
  {
    "id": 241,
    "question": "Thomas Tharakan expects his employees to 'check their brains at the door.' He does all the thinking, makes all the decisions, and issues commands to his subordinates. Thomas uses the _____ style of leadership.",
    "options": [
      "autocratic",
      "authoritarian",
      "democratic",
      "laissez-faire"
    ],
    "answer": "autocratic"
  },
  {
    "id": 242,
    "question": "This technique of scientific management helps in the development of the concept of the assembly line, which is widely used in automobile companies these days as well. Identify the technique.",
    "options": [
      "Motion study",
      "Standardization and simplification of work",
      "Method study",
      "Time study"
    ],
    "answer": "Method study"
  },
  {
    "id": 243,
    "question": "This code would work but is bad practice because",
    "options": [
      "The object attribute is changed by a method",
      "The object attribute is being changed directly through mainline code (outside of the class/object itself)",
      "There is no object being created",
      "The principle of encapsulation has been ignored"
    ],
    "answer": "The object attribute is being changed directly through mainline code (outside of the class/object itself)"
  },
  {
    "id": 244,
    "question": "There exists a language L. We define a string w such that w belongs to L and w=pqr and |w|>=n for some constant integer n. What can be the maximum length of the substring pq i.e. |pq|<=?",
    "options": [
      "n",
      "|w|",
      "|q|",
      "w*n"
    ],
    "answer": "n"
  },
  {
    "id": 245,
    "question": "There are two abilities that you must have to properly understand ethics. The first is the _____ and the second ability is _____.",
    "options": [
      "ability to discern; concentration",
      "ability to visualize; devotion",
      "ability to distinguish; dedication",
      "ability to judge; dedication"
    ],
    "answer": "ability to distinguish; dedication"
  },
  {
    "id": 246,
    "question": "There are _____ type's specializations. They are full specialization and partial specialization",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": "2"
  },
  {
    "id": 247,
    "question": "Theodore New-Comb's balance theory is related to",
    "options": [
      "Leadership",
      "Group formation",
      "Selection",
      "Retirement"
    ],
    "answer": "Group formation"
  },
  {
    "id": 248,
    "question": "The word _____ refers to the portion of a _____ that carries a transmission.",
    "options": [
      "line; channel",
      "channel: link",
      "link; channel",
      "line; link"
    ],
    "answer": "link; channel"
  },
  {
    "id": 249,
    "question": "The way the work activities and the departments are organised is called",
    "options": [
      "chain of command",
      "span of control.",
      "unity of direction.",
      "organizational structure."
    ],
    "answer": "organizational structure."
  },
  {
    "id": 250,
    "question": "The view that sees profit maximization as the main objective is known as:",
    "options": [
      "Shareholder theory",
      "Principal-agent problem",
      "Stakeholder theory",
      "Corporation theory"
    ],
    "answer": "Shareholder theory"
  },
  // (Append these to the 'questions' array in your questions.js file)
  {
    "id": 251,
    "question": "The VFS (virtual file system) activates file system-specific operations to handle local requests according to their",
    "options": [
      "size",
      "commands",
      "timings",
      "file system types"
    ],
    "answer": "file system types"
  },
  {
    "id": 252,
    "question": "The Unix system call to get the size of a page is",
    "options": [
      "pagesize()",
      "getpagesize()",
      "pagesizeof()",
      "sizeof()"
    ],
    "answer": "getpagesize()"
  },
  {
    "id": 253,
    "question": "The University of Michigan studies used the ____ and ____ two dimensions of to study behavioural characteristics of leaders.",
    "options": [
      "employee oriented; production oriented",
      "consideration; initiating structure",
      "task; people",
      "decision-making; employee development"
    ],
    "answer": "employee oriented; production oriented"
  },
  {
    "id": 254,
    "question": "The universal Turing machine U consists of",
    "options": [
      "1 input tape",
      "2 input tape",
      "3 input tape",
      "4 input tape"
    ],
    "answer": "3 input tape"
  },
  {
    "id": 255,
    "question": "The underlying technology on which the system is built is superseded by new technology is the type of risk",
    "options": [
      "Project",
      "Product",
      "Business",
      "None in the list"
    ],
    "answer": "Business"
  },
  {
    "id": 256,
    "question": "The two major benefits are improvement in performance and minimization of cost to process the system",
    "options": [
      "True",
      "False"
    ],
    "answer": "True"
  },
  {
    "id": 257,
    "question": "The transformational leadership style",
    "options": [
      "encourages group members to transform themselves into better people.",
      "strives to change the group members' opinions by showing them a better way to think.",
      "changes opinions and attitudes without changing behaviours.",
      "encourages and inspires group members to go above and beyond selfish interests and do what is best for the common good of the group."
    ],
    "answer": "encourages and inspires group members to go above and beyond selfish interests and do what is best for the common good of the group."
  },
  {
    "id": 258,
    "question": "The total number of states required to automate the given regular expression (aa)*(bb)*",
    "options": [
      "4",
      "3",
      "5",
      "7"
    ],
    "answer": "5"
  },
  {
    "id": 259,
    "question": "The three major methods of allocating disk space that are in wide use are",
    "options": [
      "contiguous",
      "linked",
      "indexed",
      "all of the mentioned"
    ],
    "answer": "all of the mentioned"
  },
  {
    "id": 260,
    "question": "The technology is used to analyze and monitor network and information flow traffic",
    "options": [
      "Cloud access security brokers (CASBs)",
      "Managed detection and response (MDR)",
      "Network Security Firewall",
      "Network traffic analysis (NTA)"
    ],
    "answer": "Network traffic analysis (NTA)"
  },
  {
    "id": 261,
    "question": "The technique of storing the previously calculated values is called?",
    "options": [
      "Saving value property",
      "Storing value property",
      "Memoization",
      "Mapping"
    ],
    "answer": "Memoization"
  },
  {
    "id": 262,
    "question": "The syntax for catching all exceptions in a program is",
    "options": [
      "catch-all(...) {}",
      "catchall(...){}",
      "catch(...) {}",
      "catch(.) {}"
    ],
    "answer": "catch(...) {}"
  },
  {
    "id": 263,
    "question": "The sum of the degrees of all vertices in an undirected graph",
    "options": [
      "2V",
      "E+1",
      "V+1",
      "2E"
    ],
    "answer": "2E"
  },
  {
    "id": 264,
    "question": "The subtraction of hit rate (1-hit rate) is known as",
    "options": [
      "Hit time",
      "Miss penalty",
      "Miss rate",
      "Cache"
    ],
    "answer": "Miss rate"
  },
  {
    "id": 265,
    "question": "The structure or format of data is called",
    "options": [
      "Syntax",
      "Semantics",
      "Struct",
      "Formatting"
    ],
    "answer": "Syntax"
  },
  {
    "id": 266,
    "question": "The stress which is negative in nature and causes mental and physical problems is known as",
    "options": [
      "Eustress",
      "Distress",
      "Negative stress",
      "Permanent stress"
    ],
    "answer": "Distress"
  },
  {
    "id": 267,
    "question": "The stress that exists for weeks, months, or even years is called",
    "options": [
      "Chronic stress",
      "Acute stress",
      "Negative stress",
      "Permanent stress"
    ],
    "answer": "Chronic stress"
  },
  {
    "id": 268,
    "question": "The software cost estimation is done in stages as",
    "options": [
      "Basic COCOMO",
      "Intermediate COCOMO",
      "A and B",
      "None of the above"
    ],
    "answer": "A and B"
  },
  {
    "id": 269,
    "question": "The single and multi-variable estimation models at different stages of estimation is performed by",
    "options": [
      "Halstead",
      "FP",
      "COCOMO",
      "None of the above"
    ],
    "answer": "COCOMO"
  },
  {
    "id": 270,
    "question": "The set of all strings over the alphabet {p,q} (including epsilon is denoted by",
    "options": [
      "(q+p)",
      "(q+p)+",
      "p*+q*+",
      "(p+q)*"
    ],
    "answer": "(p+q)*"
  },
  {
    "id": 271,
    "question": "The set of all strings over the alphabet {a,b} (including epsilon is denoted by",
    "options": [
      "(a+b)+",
      "a*+b*+",
      "a*b*",
      "(a+b)*"
    ],
    "answer": "(a+b)*"
  },
  {
    "id": 272,
    "question": "The semi-detached software is",
    "options": [
      "Development of the GUI",
      "Database module",
      "Networking Module",
      "Operating System"
    ],
    "answer": "Operating System"
  },
  {
    "id": 273,
    "question": "The Scalar principle of organisation implies",
    "options": [
      "All authority must be vested to one person",
      "Manager should directly supervise only a limited number of subordinates",
      "Line of authority must be clearly defined",
      "A subordinate should have only one supervisor"
    ],
    "answer": "Line of authority must be clearly defined"
  },
  {
    "id": 274,
    "question": "The result of evaluating the prefix expression */b+-dacd, where a=3, b=6, c=1, d=5 is",
    "options": [
      "0",
      "5",
      "10",
      "15"
    ],
    "answer": "15"
  },
  {
    "id": 275,
    "question": "The recognizing capabilities of NDFSM and DFSM",
    "options": [
      "must be same",
      "may be different",
      "must be different",
      "none of the answers given"
    ],
    "answer": "must be same"
  },
  {
    "id": 276,
    "question": "The purpose of cache memory in a computer is to",
    "options": [
      "ensure fast booting",
      "reduce load on CPU registers",
      "replace static memory",
      "speed up memory cycle time"
    ],
    "answer": "speed up memory cycle time"
  },
  {
    "id": 277,
    "question": "The project plan sets out",
    "options": [
      "the resources available to the project",
      "the work breakdown",
      "a schedule for the work",
      "all the above"
    ],
    "answer": "all the above"
  },
  {
    "id": 278,
    "question": "The process-related to process control, file management, device management, information about system and communication that is requested by any higher level language can be performed by",
    "options": [
      "Editors",
      "Compilers",
      "System Call",
      "Caching"
    ],
    "answer": "System Call"
  },
  {
    "id": 279,
    "question": "The process of planning starts with clearly laying down of",
    "options": [
      "Policies",
      "Procedures",
      "Goals and Objectives",
      "All of the Above"
    ],
    "answer": "Goals and Objectives"
  },
  {
    "id": 280,
    "question": "The process of perceiving the causes of behavior and outcomes is termed as",
    "options": [
      "Perception",
      "Stereotype",
      "Attribution",
      "Personality"
    ],
    "answer": "Attribution"
  },
  {
    "id": 281,
    "question": "The process of accessing data stored in a serial access memory is similar to manipulating data on a",
    "options": [
      "Heap",
      "Binary Tree",
      "Array",
      "Stack"
    ],
    "answer": "Stack"
  },
  {
    "id": 282,
    "question": "The process model that represents a way of thinking that allows businesses and team members to quickly innovate and respond to the dynamic demands of an Organization is",
    "options": [
      "Waterfall Model",
      "Incremental Model",
      "RAD Model",
      "Agile Model"
    ],
    "answer": "Agile Model"
  },
  {
    "id": 283,
    "question": "The process by which an individual gives meaning to the environment is called",
    "options": [
      "Perception",
      "Stereotype",
      "Attribution",
      "Personality"
    ],
    "answer": "Perception"
  },
  {
    "id": 284,
    "question": "The primary or first component of DFD is known as",
    "options": [
      "Process",
      "Data",
      "Square",
      "Entity"
    ],
    "answer": "Process"
  },
  {
    "id": 285,
    "question": "The postfix form of A*B+C/D is?",
    "options": [
      "*AB/CD+",
      "AB*CD/+",
      "A*BC+/D",
      "ABCD+/*"
    ],
    "answer": "AB*CD/+"
  },
  {
    "id": 286,
    "question": "The policy for memory hierarchies: L1 data are never found in an L2 cache, refers to",
    "options": [
      "Write buffer",
      "Multilevel exclusion",
      "Write-through",
      "Multilevel inclusion"
    ],
    "answer": "Multilevel exclusion"
  },
  {
    "id": 287,
    "question": "The pager is concerned with the",
    "options": [
      "individual page of a process",
      "entire process",
      "entire thread",
      "first page of a process"
    ],
    "answer": "individual page of a process"
  },
  {
    "id": 288,
    "question": "The page table contains",
    "options": [
      "base address of each page in physical memory",
      "page offset",
      "page size",
      "displacement"
    ],
    "answer": "base address of each page in physical memory"
  },
  {
    "id": 289,
    "question": "The page replacement algorithm that suffers highly from Belady's anamoly is",
    "options": [
      "Least Recently Used",
      "Most Frequently Used",
      "First In First Out",
      "Least Frequently Used"
    ],
    "answer": "First In First Out"
  },
  {
    "id": 290,
    "question": "The output of the requirement analysis and the requirement specification is used as the input for writing",
    "options": [
      "User Acceptance Test Cases",
      "User Rejection Test Cases",
      "Product Rejection Test Cases",
      "Product Acceptance Test Cases"
    ],
    "answer": "User Acceptance Test Cases"
  },
  {
    "id": 291,
    "question": "The output of the below program will be #include <string.h> #include <stdio.h> main(){ char Be[16]=\"Positive\"; char Positive[16]=\"Be \"; printf(\"%s\", strcpy(Positive, strcat(Positive,Be))); }",
    "options": [
      "Be Positive",
      "Positive Be",
      "Positive Positive Be",
      "Be Be Positive"
    ],
    "answer": "Be Positive"
  },
  {
    "id": 292,
    "question": "The operation for adding an entry to a stack is traditionally called:",
    "options": [
      "add",
      "append",
      "insert",
      "push"
    ],
    "answer": "push"
  },
  {
    "id": 293,
    "question": "The objective of this technique of scientific management is to reduce a given line or a product to fixed type sizes and characteristics. Name the technique.",
    "options": [
      "Method study",
      "Differential piece wage system",
      "Standardization and simplification of work",
      "Functional foremanship"
    ],
    "answer": "Standardization and simplification of work"
  },
  {
    "id": 294,
    "question": "The number of states in DFA is -----than the number of states in NFA for the same Language.",
    "options": [
      "greater equal",
      "less",
      "Greater",
      "equal"
    ],
    "answer": "less"
  },
  {
    "id": 295,
    "question": "The number of states in a machine M recognizing L1UL2 will be ____ where n is the number of states in M1 and m is the number of states in M2.",
    "options": [
      "m*n",
      "m-n",
      "m+n+1",
      "n-m"
    ],
    "answer": "m*n"
  },
  {
    "id": 296,
    "question": "The number of comparisons required in the Linear search algorithm, if the search element is not present in the array,",
    "options": [
      "n+1",
      "n",
      "(n+1)/2",
      "n-1"
    ],
    "answer": "n"
  },
  {
    "id": 297,
    "question": "The number of auxiliary memory required for a Push Down Machine (PDM) to behave like a Finite State Machine (FSM) is",
    "options": [
      "1",
      "4",
      "0",
      "2"
    ],
    "answer": "0"
  },
  {
    "id": 298,
    "question": "The necessity of cost-benefit analysis in PM is to have a systemic approach to identify the pluses and minuses of various paths through a project",
    "options": [
      "True",
      "False"
    ],
    "answer": "True"
  },
  {
    "id": 299,
    "question": "The model in which environmental, social, and economic responsibilities are satisfied concurrently is known as",
    "options": [
      "corporate social responsibility",
      "global activism",
      "giving back to the planet",
      "restoration and revivification"
    ],
    "answer": "corporate social responsibility"
  },
  {
    "id": 300,
    "question": "The MMU is a",
    "options": [
      "Hardware",
      "Software",
      "Malware",
      "None of the given choices"
    ],
    "answer": "Hardware"
  },
  // (Append these to the 'questions' array in your questions.js file)
  {
    "id": 201,
    "question": "What is the real disadvantage of a linear list of directory entries?",
    "options": [
      "size of the linear list in memory",
      "linear search to find a file",
      "it is not reliable",
      "all of the mentioned"
    ],
    "answer": "linear search to find a file"
  },
  {
    "id": 202,
    "question": "What is the postfix form of the following prefix *+ab-cd",
    "options": [
      "ab+cd-*",
      "abc+*-",
      "ab+*cd-",
      "ab+*cd-"
    ],
    "answer": "ab+cd-*"
  },
  {
    "id": 203,
    "question": "What is the name of the process in which an employee informs another responsible employee in the company about potentially unethical behavior?",
    "options": [
      "Whistleblowing",
      "Purging and releasing",
      "Identification",
      "Information transfer"
    ],
    "answer": "Whistleblowing"
  },
  {
    "id": 204,
    "question": "What is the level of recursion if the input array is { 4, 8, 32, 58, 98, 129, 201 } and key is 8?",
    "options": [
      "5",
      "2",
      "3",
      "4"
    ],
    "answer": "3"
  },
  {
    "id": 205,
    "question": "What is the difference in graph traversal and tree:",
    "options": [
      "There can be a loop in the graph",
      "DFS and BFS are the same",
      "There can't be a loop in the graph",
      "DFS and BFD are different"
    ],
    "answer": "There can be a loop in the graph"
  },
  {
    "id": 206,
    "question": "What is the current industry for the measure of Software Quality?",
    "options": [
      "Iterations to Successful Build",
      "Number of Bugs Fixed",
      "Number of Defects per KLOC",
      "None in the list"
    ],
    "answer": "Number of Defects per KLOC"
  },
  {
    "id": 207,
    "question": "What is the function of HTTP?",
    "options": [
      "webserver and browser activity according to command",
      "Mark-up language",
      "Forming authority of the page",
      "Tag files and create effects"
    ],
    "answer": "webserver and browser activity according to command"
  },
  {
    "id": 208,
    "question": "What is the complexity of quick sort algorithm, if the array to be sorted is already in sorted order?",
    "options": [
      "O(n^2)",
      "O(nlogn)",
      "Constant",
      "O(n)"
    ],
    "answer": "O(n^2)"
  },
  {
    "id": 209,
    "question": "What is split horizon?",
    "options": [
      "Information about a route should not be sent back in the direction from which the original update came",
      "It splits the traffic when you have a large bus (horizon) physical network.",
      "It holds the regular updates from broadcasting to a downed link.",
      "It prevents regular update messages from reinstating a route that has gone down."
    ],
    "answer": "Information about a route should not be sent back in the direction from which the original update came"
  },
  {
    "id": 210,
    "question": "What is Cyclomatic complexity?",
    "options": [
      "Black box testing",
      "White box testing",
      "Yellow box testing",
      "Green box testing"
    ],
    "answer": "White box testing"
  },
  {
    "id": 211,
    "question": "What is Address Binding?",
    "options": [
      "going to an address in memory",
      "locating an address with the help of another address",
      "binding two addresses together to form a new address in a different memory space",
      "a mapping from one address space to another"
    ],
    "answer": "a mapping from one address space to another"
  },
  {
    "id": 212,
    "question": "What is a network?",
    "options": [
      "A group of 1 or more devices that communicate",
      "A group of 2 or more devices that communicate",
      "When 2 or more computers are in the same building",
      "A group of 3 or more devices that communicate"
    ],
    "answer": "A group of 2 or more devices that communicate"
  },
  {
    "id": 213,
    "question": "What is a Network Protocol",
    "options": [
      "Formal standards and policies comprised of memes",
      "Formal standards and policies",
      "Formal standards and policies comprised of rules, procedures and formats",
      "None of the above"
    ],
    "answer": "Formal standards and policies comprised of rules, procedures and formats"
  },
  {
    "id": 214,
    "question": "What is a disadvantage of a star network?",
    "options": [
      "It is cheap",
      "It uses one cable",
      "It is expensive",
      "It has a terminator"
    ],
    "answer": "It is expensive"
  },
  {
    "id": 215,
    "question": "What happens to a task force after it finishes its assignment?",
    "options": [
      "It is integrated with the organisation.",
      "It is disbanded",
      "It continues after accomplishment.",
      "None of the other answers is correct."
    ],
    "answer": "It is disbanded"
  },
  {
    "id": 216,
    "question": "What does DPIA expand as?",
    "options": [
      "Data Privacy Impact Assessment",
      "Data Protection Impact Assessment",
      "Data Privacy Identification Assessment",
      "Data Protection Identification Assessment"
    ],
    "answer": "Data Protection Impact Assessment"
  },
  {
    "id": 217,
    "question": "What does biometrics have to do with access control?",
    "options": [
      "Authorization",
      "Authentication",
      "Confirmation",
      "Certification"
    ],
    "answer": "Authentication"
  },
  {
    "id": 218,
    "question": "What are the mid values in each level of recursion in the binary search for the input array {4, 8, 58, 98, 129, 201 } and key 201?",
    "options": [
      "58, 129, 201",
      "98, 129, 201",
      "98, 201",
      "58, 129, 201"
    ],
    "answer": "98, 129, 201"
  },
  {
    "id": 219,
    "question": "What are all candidate keys, other than the primary keys called?",
    "options": [
      "Partial keys",
      "Alternate keys",
      "Superkey keys",
      "None of these"
    ],
    "answer": "Alternate keys"
  },
  {
    "id": 220,
    "question": "What Access Control paradigm was created to deal primarily with computer system information flow?",
    "options": [
      "Lattice-Based",
      "Integrity Based",
      "Flow-Based",
      "Area Based"
    ],
    "answer": "Flow-Based"
  },
  {
    "id": 221,
    "question": "What is another way to describe a parent-child relationship?",
    "options": [
      "Has-A",
      "Is-A",
      "Does-A",
      "Gets-A"
    ],
    "answer": "Is-A"
  },
  {
    "id": 222,
    "question": "Virtual memory technique facilitates sharing of memory among",
    "options": [
      "processes",
      "threads",
      "instructions",
      "programs"
    ],
    "answer": "processes"
  },
  {
    "id": 223,
    "question": "Unity of command means:",
    "options": [
      "Parity of authority and responsibility",
      "The flow of command from superior to a subordinate",
      "Parity in controlling",
      "None of the above"
    ],
    "answer": "The flow of command from superior to a subordinate"
  },
  {
    "id": 224,
    "question": "Unit testing is done by?",
    "options": [
      "Users",
      "Developers",
      "Customers",
      "None of the mentioned"
    ],
    "answer": "Developers"
  },
  {
    "id": 225,
    "question": "Triple Bottom Line reporting refers to:",
    "options": [
      "using a low, medium, and high estimates for profitability forecasts.",
      "measuring the impact of the firm on stockholders, customers, and employees",
      "measuring the social, environmental, and financial performance of the firm.",
      "measuring the impact of local, state, and federal governments on the firm."
    ],
    "answer": "measuring the social, environmental, and financial performance of the firm."
  },
  {
    "id": 226,
    "question": "Transfer time is ...",
    "options": [
      "the time is taken to locate the disk arm to a specified track where the data is to be read or write.",
      "the time is taken by the desired sector of disk to rotate into a position so that it can access the read/write heads.",
      "the time to transfer the data.",
      "the time taken to complete the execution."
    ],
    "answer": "the time to transfer the data."
  },
  {
    "id": 227,
    "question": "Traits or skills on which leaders differ from non-leaders include:",
    "options": [
      "Honesty and integrity",
      "Self-confidence",
      "Drive and desire to lead",
      "All the other options are correct"
    ],
    "answer": "All the other options are correct"
  },
  {
    "id": 228,
    "question": "Trait theory ignores ________.",
    "options": [
      "the physical traits of leaders.",
      "the aspects of honesty and integrity.",
      "the interactions of leaders and their group members as well as situational factors.",
      "the fact that leaders should be able to create visions and solve problems."
    ],
    "answer": "the interactions of leaders and their group members as well as situational factors."
  },
  {
    "id": 229,
    "question": "Total number of levels in DFD",
    "options": [
      "1",
      "2",
      "3",
      "Depends on the system"
    ],
    "answer": "3"
  },
  {
    "id": 230,
    "question": "Total Development in programmer months of Utility programs",
    "options": [
      "TDEV=2.5xPM pow 0.38",
      "TDEV=2.5xPM pow0.35",
      "TDEV=2.5xPM pow0.32",
      "None of the above"
    ],
    "answer": "TDEV=2.5xPM pow0.35"
  },
  {
    "id": 231,
    "question": "Total Development in programmer months of Systems programs",
    "options": [
      "TDEV=2.5xPM pow 0.38",
      "TDEV=2.5xPM pow0.35",
      "TDEV=2.5xPM pow0.32",
      "None of the above"
    ],
    "answer": "TDEV=2.5xPM pow0.32"
  },
  {
    "id": 232,
    "question": "Total bits for a direct-mapped cache with data of 16 KB and blocks of 4-word, assuming a 32-bit address are",
    "options": [
      "143K",
      "144K",
      "145K",
      "147K"
    ],
    "answer": "147K"
  },
  {
    "id": 233,
    "question": "To read and write from a file we are using the standard C++ library called",
    "options": [
      "fstream",
      "stream",
      "filestream",
      "None"
    ],
    "answer": "fstream"
  },
  {
    "id": 234,
    "question": "To make a process as Zombie, which process needs to delay (sleep()) its execution? The parent process or the child process?",
    "options": [
      "parent to sleep for a while. child normal execution",
      "child to sleep for a while, parent normal execution",
      "parent and child both normal execution",
      "parent and child both to sleep for a while"
    ],
    "answer": "parent to sleep for a while. child normal execution"
  },
  {
    "id": 235,
    "question": "To help the operating system estimate LRU, many processors provide a",
    "options": [
      "Use bit",
      "Reference bit",
      "Fault bit",
      "Both a and b"
    ],
    "answer": "Both a and b"
  },
  {
    "id": 236,
    "question": "To create a dynamic record which is better?",
    "options": [
      "Stack",
      "Queue",
      "Linked list",
      "All of these"
    ],
    "answer": "Linked list"
  },
  {
    "id": 237,
    "question": "To avoid the race condition, the number of processes that may be simultaneously inside their critical section is",
    "options": [
      "1",
      "8",
      "16",
      "0"
    ],
    "answer": "1"
  },
  {
    "id": 238,
    "question": "Time Oriented Diagram",
    "options": [
      "class Diagram",
      "UseCase Diagram",
      "Object Diagram",
      "Sequence Diagram"
    ],
    "answer": "Sequence Diagram"
  },
  {
    "id": 239,
    "question": "Through this principle of management, Henri Fayol guides the managers to exhibit exemplary behaviour... Which principle of management is being described?",
    "options": [
      "Remuneration of employees",
      "Centralization and decentralization",
      "Subordination of Individual interest to general interest",
      "Equity"
    ],
    "answer": "Subordination of Individual interest to general interest"
  },
  {
    "id": 240,
    "question": "Threat to confidentiality is .....",
    "options": [
      "DDoS",
      "Malware",
      "Eavesdropping",
      "DoS"
    ],
    "answer": "Eavesdropping"
  },
  {
    "id": 241,
    "question": "Thomas Tharakan expects his employees to 'check their brains at the door.' He does all the thinking, makes all the decisions, and issues commands to his subordinates. Thomas uses the _____ style of leadership.",
    "options": [
      "autocratic",
      "authoritarian",
      "democratic",
      "laissez-faire"
    ],
    "answer": "autocratic"
  },
  {
    "id": 242,
    "question": "This technique of scientific management helps in the development of the concept of the assembly line, which is widely used in automobile companies these days as well. Identify the technique.",
    "options": [
      "Motion study",
      "Standardization and simplification of work",
      "Method study",
      "Time study"
    ],
    "answer": "Method study"
  },
  {
    "id": 243,
    "question": "This code would work but is bad practice because",
    "options": [
      "The object attribute is changed by a method",
      "The object attribute is being changed directly through mainline code (outside of the class/object itself)",
      "There is no object being created",
      "The principle of encapsulation has been ignored"
    ],
    "answer": "The object attribute is being changed directly through mainline code (outside of the class/object itself)"
  },
  {
    "id": 244,
    "question": "There exists a language L. We define a string w such that w belongs to L and w=pqr and |w|>=n for some constant integer n. What can be the maximum length of the substring pq i.e. |pq|<=?",
    "options": [
      "n",
      "|w|",
      "|q|",
      "w*n"
    ],
    "answer": "n"
  },
  {
    "id": 245,
    "question": "There are two abilities that you must have to properly understand ethics. The first is the _____ and the second ability is _____.",
    "options": [
      "ability to discern; concentration",
      "ability to visualize; devotion",
      "ability to distinguish; dedication",
      "ability to judge; dedication"
    ],
    "answer": "ability to distinguish; dedication"
  },
  {
    "id": 246,
    "question": "There are _____ type's specializations. They are full specialization and partial specialization",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": "2"
  },
  {
    "id": 247,
    "question": "Theodore New-Comb's balance theory is related to",
    "options": [
      "Leadership",
      "Group formation",
      "Selection",
      "Retirement"
    ],
    "answer": "Group formation"
  },
  {
    "id": 248,
    "question": "The word _____ refers to the portion of a _____ that carries a transmission.",
    "options": [
      "line; channel",
      "channel: link",
      "link; channel",
      "line; link"
    ],
    "answer": "link; channel"
  },
  {
    "id": 249,
    "question": "The way the work activities and the departments are organised is called",
    "options": [
      "chain of command",
      "span of control.",
      "unity of direction.",
      "organizational structure."
    ],
    "answer": "organizational structure."
  },
  {
    "id": 250,
    "question": "The view that sees profit maximization as the main objective is known as:",
    "options": [
      "Shareholder theory",
      "Principal-agent problem",
      "Stakeholder theory",
      "Corporation theory"
    ],
    "answer": "Shareholder theory"
  },
  // (Append these to the 'questions' array in your questions.js file)
  {
    "id": 251,
    "question": "The VFS (virtual file system) activates file system-specific operations to handle local requests according to their",
    "options": [
      "size",
      "commands",
      "timings",
      "file system types"
    ],
    "answer": "file system types"
  },
  {
    "id": 252,
    "question": "The Unix system call to get the size of a page is",
    "options": [
      "pagesize()",
      "getpagesize()",
      "pagesizeof()",
      "sizeof()"
    ],
    "answer": "getpagesize()"
  },
  {
    "id": 253,
    "question": "The University of Michigan studies used the ____ and ____ two dimensions of to study behavioural characteristics of leaders.",
    "options": [
      "employee oriented; production oriented",
      "consideration; initiating structure",
      "task; people",
      "decision-making; employee development"
    ],
    "answer": "employee oriented; production oriented"
  },
  {
    "id": 254,
    "question": "The universal Turing machine U consists of",
    "options": [
      "1 input tape",
      "2 input tape",
      "3 input tape",
      "4 input tape"
    ],
    "answer": "3 input tape"
  },
  {
    "id": 255,
    "question": "The underlying technology on which the system is built is superseded by new technology is the type of risk",
    "options": [
      "Project",
      "Product",
      "Business",
      "None in the list"
    ],
    "answer": "Business"
  },
  {
    "id": 256,
    "question": "The two major benefits are improvement in performance and minimization of cost to process the system",
    "options": [
      "True",
      "False"
    ],
    "answer": "True"
  },
  {
    "id": 257,
    "question": "The transformational leadership style",
    "options": [
      "encourages group members to transform themselves into better people.",
      "strives to change the group members' opinions by showing them a better way to think.",
      "changes opinions and attitudes without changing behaviours.",
      "encourages and inspires group members to go above and beyond selfish interests and do what is best for the common good of the group."
    ],
    "answer": "encourages and inspires group members to go above and beyond selfish interests and do what is best for the common good of the group."
  },
  {
    "id": 258,
    "question": "The total number of states required to automate the given regular expression (aa)*(bb)*",
    "options": [
      "4",
      "3",
      "5",
      "7"
    ],
    "answer": "5"
  },
  {
    "id": 259,
    "question": "The three major methods of allocating disk space that are in wide use are",
    "options": [
      "contiguous",
      "linked",
      "indexed",
      "all of the mentioned"
    ],
    "answer": "all of the mentioned"
  },
  {
    "id": 260,
    "question": "The technology is used to analyze and monitor network and information flow traffic",
    "options": [
      "Cloud access security brokers (CASBs)",
      "Managed detection and response (MDR)",
      "Network Security Firewall",
      "Network traffic analysis (NTA)"
    ],
    "answer": "Network traffic analysis (NTA)"
  },
  {
    "id": 261,
    "question": "The technique of storing the previously calculated values is called?",
    "options": [
      "Saving value property",
      "Storing value property",
      "Memoization",
      "Mapping"
    ],
    "answer": "Memoization"
  },
  {
    "id": 262,
    "question": "The syntax for catching all exceptions in a program is",
    "options": [
      "catch-all(...) {}",
      "catchall(...){}",
      "catch(...) {}",
      "catch(.) {}"
    ],
    "answer": "catch(...) {}"
  },
  {
    "id": 263,
    "question": "The sum of the degrees of all vertices in an undirected graph",
    "options": [
      "2V",
      "E+1",
      "V+1",
      "2E"
    ],
    "answer": "2E"
  },
  {
    "id": 264,
    "question": "The subtraction of hit rate (1-hit rate) is known as",
    "options": [
      "Hit time",
      "Miss penalty",
      "Miss rate",
      "Cache"
    ],
    "answer": "Miss rate"
  },
  {
    "id": 265,
    "question": "The structure or format of data is called",
    "options": [
      "Syntax",
      "Semantics",
      "Struct",
      "Formatting"
    ],
    "answer": "Syntax"
  },
  {
    "id": 266,
    "question": "The stress which is negative in nature and causes mental and physical problems is known as",
    "options": [
      "Eustress",
      "Distress",
      "Negative stress",
      "Permanent stress"
    ],
    "answer": "Distress"
  },
  {
    "id": 267,
    "question": "The stress that exists for weeks, months, or even years is called",
    "options": [
      "Chronic stress",
      "Acute stress",
      "Negative stress",
      "Permanent stress"
    ],
    "answer": "Chronic stress"
  },
  {
    "id": 268,
    "question": "The software cost estimation is done in stages as",
    "options": [
      "Basic COCOMO",
      "Intermediate COCOMO",
      "A and B",
      "None of the above"
    ],
    "answer": "A and B"
  },
  {
    "id": 269,
    "question": "The single and multi-variable estimation models at different stages of estimation is performed by",
    "options": [
      "Halstead",
      "FP",
      "COCOMO",
      "None of the above"
    ],
    "answer": "COCOMO"
  },
  {
    "id": 270,
    "question": "The set of all strings over the alphabet {p,q} (including epsilon is denoted by",
    "options": [
      "(q+p)",
      "(q+p)+",
      "p*+q*+",
      "(p+q)*"
    ],
    "answer": "(p+q)*"
  },
  {
    "id": 271,
    "question": "The set of all strings over the alphabet {a,b} (including epsilon is denoted by",
    "options": [
      "(a+b)+",
      "a*+b*+",
      "a*b*",
      "(a+b)*"
    ],
    "answer": "(a+b)*"
  },
  {
    "id": 272,
    "question": "The semi-detached software is",
    "options": [
      "Development of the GUI",
      "Database module",
      "Networking Module",
      "Operating System"
    ],
    "answer": "Operating System"
  },
  {
    "id": 273,
    "question": "The Scalar principle of organisation implies",
    "options": [
      "All authority must be vested to one person",
      "Manager should directly supervise only a limited number of subordinates",
      "Line of authority must be clearly defined",
      "A subordinate should have only one supervisor"
    ],
    "answer": "Line of authority must be clearly defined"
  },
  {
    "id": 274,
    "question": "The result of evaluating the prefix expression */b+-dacd, where a=3, b=6, c=1, d=5 is",
    "options": [
      "0",
      "5",
      "10",
      "15"
    ],
    "answer": "15"
  },
  {
    "id": 275,
    "question": "The recognizing capabilities of NDFSM and DFSM",
    "options": [
      "must be same",
      "may be different",
      "must be different",
      "none of the answers given"
    ],
    "answer": "must be same"
  },
  {
    "id": 276,
    "question": "The purpose of cache memory in a computer is to",
    "options": [
      "ensure fast booting",
      "reduce load on CPU registers",
      "replace static memory",
      "speed up memory cycle time"
    ],
    "answer": "speed up memory cycle time"
  },
  {
    "id": 277,
    "question": "The project plan sets out",
    "options": [
      "the resources available to the project",
      "the work breakdown",
      "a schedule for the work",
      "all the above"
    ],
    "answer": "all the above"
  },
  {
    "id": 278,
    "question": "The process-related to process control, file management, device management, information about system and communication that is requested by any higher level language can be performed by",
    "options": [
      "Editors",
      "Compilers",
      "System Call",
      "Caching"
    ],
    "answer": "System Call"
  },
  {
    "id": 279,
    "question": "The process of planning starts with clearly laying down of",
    "options": [
      "Policies",
      "Procedures",
      "Goals and Objectives",
      "All of the Above"
    ],
    "answer": "Goals and Objectives"
  },
  {
    "id": 280,
    "question": "The process of perceiving the causes of behavior and outcomes is termed as",
    "options": [
      "Perception",
      "Stereotype",
      "Attribution",
      "Personality"
    ],
    "answer": "Attribution"
  },
  {
    "id": 281,
    "question": "The process of accessing data stored in a serial access memory is similar to manipulating data on a",
    "options": [
      "Heap",
      "Binary Tree",
      "Array",
      "Stack"
    ],
    "answer": "Stack"
  },
  {
    "id": 282,
    "question": "The process model that represents a way of thinking that allows businesses and team members to quickly innovate and respond to the dynamic demands of an Organization is",
    "options": [
      "Waterfall Model",
      "Incremental Model",
      "RAD Model",
      "Agile Model"
    ],
    "answer": "Agile Model"
  },
  {
    "id": 283,
    "question": "The process by which an individual gives meaning to the environment is called",
    "options": [
      "Perception",
      "Stereotype",
      "Attribution",
      "Personality"
    ],
    "answer": "Perception"
  },
  {
    "id": 284,
    "question": "The primary or first component of DFD is known as",
    "options": [
      "Process",
      "Data",
      "Square",
      "Entity"
    ],
    "answer": "Process"
  },
  {
    "id": 285,
    "question": "The postfix form of A*B+C/D is?",
    "options": [
      "*AB/CD+",
      "AB*CD/+",
      "A*BC+/D",
      "ABCD+/*"
    ],
    "answer": "AB*CD/+"
  },
  {
    "id": 286,
    "question": "The policy for memory hierarchies: L1 data are never found in an L2 cache, refers to",
    "options": [
      "Write buffer",
      "Multilevel exclusion",
      "Write-through",
      "Multilevel inclusion"
    ],
    "answer": "Multilevel exclusion"
  },
  {
    "id": 287,
    "question": "The pager is concerned with the",
    "options": [
      "individual page of a process",
      "entire process",
      "entire thread",
      "first page of a process"
    ],
    "answer": "individual page of a process"
  },
  {
    "id": 288,
    "question": "The page table contains",
    "options": [
      "base address of each page in physical memory",
      "page offset",
      "page size",
      "displacement"
    ],
    "answer": "base address of each page in physical memory"
  },
  {
    "id": 289,
    "question": "The page replacement algorithm that suffers highly from Belady's anamoly is",
    "options": [
      "Least Recently Used",
      "Most Frequently Used",
      "First In First Out",
      "Least Frequently Used"
    ],
    "answer": "First In First Out"
  },
  {
    "id": 290,
    "question": "The output of the requirement analysis and the requirement specification is used as the input for writing",
    "options": [
      "User Acceptance Test Cases",
      "User Rejection Test Cases",
      "Product Rejection Test Cases",
      "Product Acceptance Test Cases"
    ],
    "answer": "User Acceptance Test Cases"
  },
  {
    "id": 291,
    "question": "The output of the below program will be #include <string.h> #include <stdio.h> main(){ char Be[16]=\"Positive\"; char Positive[16]=\"Be \"; printf(\"%s\", strcpy(Positive, strcat(Positive,Be))); }",
    "options": [
      "Be Positive",
      "Positive Be",
      "Positive Positive Be",
      "Be Be Positive"
    ],
    "answer": "Be Positive"
  },
  {
    "id": 292,
    "question": "The operation for adding an entry to a stack is traditionally called:",
    "options": [
      "add",
      "append",
      "insert",
      "push"
    ],
    "answer": "push"
  },
  {
    "id": 293,
    "question": "The objective of this technique of scientific management is to reduce a given line or a product to fixed type sizes and characteristics. Name the technique.",
    "options": [
      "Method study",
      "Differential piece wage system",
      "Standardization and simplification of work",
      "Functional foremanship"
    ],
    "answer": "Standardization and simplification of work"
  },
  {
    "id": 294,
    "question": "The number of states in DFA is -----than the number of states in NFA for the same Language.",
    "options": [
      "greater equal",
      "less",
      "Greater",
      "equal"
    ],
    "answer": "less"
  },
  {
    "id": 295,
    "question": "The number of states in a machine M recognizing L1UL2 will be ____ where n is the number of states in M1 and m is the number of states in M2.",
    "options": [
      "m*n",
      "m-n",
      "m+n+1",
      "n-m"
    ],
    "answer": "m*n"
  },
  {
    "id": 296,
    "question": "The number of comparisons required in the Linear search algorithm, if the search element is not present in the array,",
    "options": [
      "n+1",
      "n",
      "(n+1)/2",
      "n-1"
    ],
    "answer": "n"
  },
  {
    "id": 297,
    "question": "The number of auxiliary memory required for a Push Down Machine (PDM) to behave like a Finite State Machine (FSM) is",
    "options": [
      "1",
      "4",
      "0",
      "2"
    ],
    "answer": "0"
  },
  {
    "id": 298,
    "question": "The necessity of cost-benefit analysis in PM is to have a systemic approach to identify the pluses and minuses of various paths through a project",
    "options": [
      "True",
      "False"
    ],
    "answer": "True"
  },
  {
    "id": 299,
    "question": "The model in which environmental, social, and economic responsibilities are satisfied concurrently is known as",
    "options": [
      "corporate social responsibility",
      "global activism",
      "giving back to the planet",
      "restoration and revivification"
    ],
    "answer": "corporate social responsibility"
  },
  {
    "id": 300,
    "question": "The MMU is a",
    "options": [
      "Hardware",
      "Software",
      "Malware",
      "None of the given choices"
    ],
    "answer": "Hardware"
  },
  // (Append these to the 'questions' array in your questions.js file)
  {
    "id": 301,
    "question": "The minimum number of transitions to pass to reach the final state as per the following regular expression is: {0,1}*{1000}",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": "4"
  },
  {
    "id": 302,
    "question": "The minimum number of colors needed to color a graph having n (>3) vertices and 2 edges is",
    "options": [
      "4",
      "3",
      "2",
      "1"
    ],
    "answer": "2"
  },
  {
    "id": 303,
    "question": "The minimum length for strings in the regular expression (ba* + aab*)* is",
    "options": [
      "2",
      "0",
      "1",
      "infinite"
    ],
    "answer": "0"
  },
  {
    "id": 304,
    "question": "The minimum standards of ethical behaviour in a firm are based on ________, while higher standards are established by ________.",
    "options": [
      "corporate policies; human resources",
      "co-workers; mission statements",
      "organizational culture; laws",
      "laws; corporate leadership"
    ],
    "answer": "laws; corporate leadership"
  },
  {
    "id": 305,
    "question": "The maximum distance between two nodes present in the stack is 1 in the implementation of DFS. (length/edge=1)",
    "options": [
      "True",
      "False"
    ],
    "answer": "False"
  },
  {
    "id": 306,
    "question": "The maximum distance between two nodes present in the queue is 1 in the implementation of BFS. (length/edge=1)",
    "options": [
      "True",
      "False"
    ],
    "answer": "True"
  },
  {
    "id": 307,
    "question": "The matrix structure is the correct structure when three conditions are met. Which of the following is one of these three conditions?",
    "options": [
      "Pressure exists to share scarce resources across product lines",
      "Technical quality is not very important.",
      "The environmental domain of the organization is simple.",
      "The environmental domain of the organization is certain and stable."
    ],
    "answer": "Pressure exists to share scarce resources across product lines"
  },
  {
    "id": 308,
    "question": "The management of business activities that is conducted in more than one country is called:",
    "options": [
      "domestic management.",
      "altruistic management.",
      "comparative management.",
      "International management."
    ],
    "answer": "International management."
  },
  {
    "id": 309,
    "question": "The logical file system maintains structures consisting of information about a file...",
    "options": [
      "Program counter",
      "file control block",
      "Process control block",
      "file pointer"
    ],
    "answer": "file control block"
  },
  {
    "id": 310,
    "question": "The lexical analysis for a modern language such as Java needs the power of which one of the following machine models in a necessary and sufficient sense?",
    "options": [
      "Finite state automata",
      "Non-deterministic pushdown automata",
      "Deterministic pushdown automata",
      "Turing machine"
    ],
    "answer": "Finite state automata"
  },
  {
    "id": 311,
    "question": "The Lattice-Based Access Control paradigm was created primarily to address",
    "options": [
      "Affinity",
      "Availability",
      "Confidentiality",
      "Integrity"
    ],
    "answer": "Confidentiality"
  },
  {
    "id": 312,
    "question": "The language defined by S->SS is",
    "options": [
      "Strings of even length",
      "Strings of odd length",
      "Strings of length multiple of 2 + 1",
      "Null/E"
    ],
    "answer": "Strings of even length"
  },
  {
    "id": 313,
    "question": "The Knapsack problem where the objective function is to minimize the profit is",
    "options": [
      "Greedy",
      "Dynamic 0 / 1",
      "Backtracking",
      "Branch & Bound 0/1"
    ],
    "answer": "Branch & Bound 0/1"
  },
  {
    "id": 314,
    "question": "The intersection of CFL and regular language",
    "options": [
      "Is always regular and context free",
      "Is always regular",
      "Need not be regular",
      "IS always context free"
    ],
    "answer": "IS always context free"
  },
  {
    "id": 315,
    "question": "The interactive transmission of data within a time sharing system may be best suited to",
    "options": [
      "simplex lines",
      "half-duplex lines",
      "full duplex lines",
      "diplex-lines"
    ],
    "answer": "half-duplex lines"
  },
  {
    "id": 316,
    "question": "The instruct Kernel to do various operations of the calling program and exchange data between the Kernel at the program",
    "options": [
      "Shell",
      "Editors",
      "System Calls",
      "Commands"
    ],
    "answer": "System Calls"
  },
  {
    "id": 317,
    "question": "The initial array elements are 1,7,5,2 after which the following operation are performed enqueue(6), enqueue(8), dequeue, dequeue, enqueue(9), enqueue(0). what are the final elements of the array?",
    "options": [
      "1,7,5,2,9,0",
      "1,7,5,2,6,8",
      "5,2,6,8,9,0",
      "5,2,9,0,6,8"
    ],
    "answer": "5,2,6,8,9,0"
  },
  {
    "id": 318,
    "question": "The implied, enforced, or felt obligation of managers, acting in their official capacities, to serve or protect the interests of groups other than themselves is known as",
    "options": [
      "corporate social responsibility",
      "human resource ethics",
      "environmental morality",
      "business-centered morality"
    ],
    "answer": "corporate social responsibility"
  },
  {
    "id": 319,
    "question": "The idea of developing an initial implementation, getting the user feedback, and evolving it through various versions until an acceptable system is made is",
    "options": [
      "Agile Process Model",
      "Waterfall Process Model",
      "Incremental Process Model",
      "RAD Process Model"
    ],
    "answer": "Agile Process Model"
  },
  {
    "id": 320,
    "question": "The group development stage described as 'Deforming and Mourning' is",
    "options": [
      "Storming",
      "Norming",
      "Performing",
      "Adjourning"
    ],
    "answer": "Adjourning"
  },
  {
    "id": 321,
    "question": "The garbage can model is related to",
    "options": [
      "Leadership",
      "Learning",
      "Decision making",
      "Recruitment"
    ],
    "answer": "Decision making"
  },
  {
    "id": 322,
    "question": "The fundamental activity of a process arranged in a linear order of software development paradigm is",
    "options": [
      "Spiral model",
      "Big Bang model",
      "V-model",
      "Waterfall model"
    ],
    "answer": "Waterfall model"
  },
  {
    "id": 323,
    "question": "The following graph, which is not a topological ordering of the following graph",
    "options": [
      "123456",
      "132456",
      "324165",
      "324156"
    ],
    "answer": "324165"
  },
  {
    "id": 324,
    "question": "The following is not a type of organisation structure.",
    "options": [
      "Line organisation",
      "Staff organisation",
      "Matrix organisation",
      "Flexible organisation"
    ],
    "answer": "Flexible organisation"
  },
  {
    "id": 325,
    "question": "The five items: A, B, C, D and E are pushed in the stack, one after the other starting from A. The stack is popped into four items and each element is inserted in a queue. Then two elements are deleted from the queue and pushed back on the stack. Now one item is popped from the stack. The popped item is.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": "C"
  },
  {
    "id": 326,
    "question": "The file-position pointer is _____ value that specifies the location in the file as a number of bytes from the file's starting location",
    "options": [
      "Integer",
      "Float",
      "Null",
      "None"
    ],
    "answer": "Integer"
  },
  {
    "id": 327,
    "question": "the file system allows the same system call interface (the API) to be used for different types of file systems.",
    "options": [
      "NTFS",
      "EXT2",
      "VFS(virtual file system)",
      "DOS"
    ],
    "answer": "VFS(virtual file system)"
  },
  {
    "id": 328,
    "question": "The extent to which a leader lets followers make decisions themselves rather than making the decisions for them are focused on by _________ leadership styles.",
    "options": [
      "Laissez-faire and general",
      "Participative and autocratic",
      "Employee-oriented and job-centred",
      "Laissez-faire and close"
    ],
    "answer": "Participative and autocratic"
  },
  {
    "id": 329,
    "question": "The execution when it finds the solution otherwise starts the problem from the top",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Branch and Bound",
      "Dynamic programming"
    ],
    "answer": "Backtracking"
  },
  {
    "id": 330,
    "question": "The Epsilon-Closure of any state q will contain the state ________ irrespective of q.",
    "options": [
      "Epsilon",
      "q",
      "Final state",
      "p"
    ],
    "answer": "q"
  },
  {
    "id": 331,
    "question": "The entity that has a primary key is",
    "options": [
      "weak entity",
      "Full Entity",
      "Complete Entity",
      "Strong Entity"
    ],
    "answer": "Strong Entity"
  },
  {
    "id": 332,
    "question": "The encryption methodology is used in.",
    "options": [
      "IDS",
      "Firewall",
      "Host",
      "VPN"
    ],
    "answer": "VPN"
  },
  {
    "id": 333,
    "question": "The employees should be rewarded for their suggestions which results in a substantial reduction in the cost. Which principle of management advocates this?",
    "options": [
      "Science, not the rule of thumb",
      "Co-operation, not individualism",
      "Harmony, not discord",
      "Science, not art"
    ],
    "answer": "Co-operation, not individualism"
  },
  {
    "id": 334,
    "question": "The element of role identity which describes how others believe one should behave in a given situation.",
    "options": [
      "Role perception",
      "Role expectation",
      "Role identification",
      "Role description"
    ],
    "answer": "Role expectation"
  },
  {
    "id": 335,
    "question": "The element of role identity which describes how an individual is expected to behave according to his own perception in the group is called",
    "options": [
      "Role perception",
      "Role expectation",
      "Role identification",
      "Role description"
    ],
    "answer": "Role perception"
  },
  {
    "id": 336,
    "question": "The divisional structure has a special feature of",
    "options": [
      "flexibility",
      "reliabilty.",
      "both flexibility and reliability.",
      "change."
    ],
    "answer": "flexibility"
  },
  {
    "id": 337,
    "question": "The Directors' responsibilities are unlikely to include.",
    "options": [
      "a fiduciary duty",
      "a duty to keep proper accounting records",
      "a duty to propose high dividends for shareholders",
      "a duty of care"
    ],
    "answer": "a duty to propose high dividends for shareholders"
  },
  {
    "id": 338,
    "question": "The device used to identify fast-spreading threats is ...",
    "options": [
      "IDS",
      "IPS",
      "Firewall",
      "VPN"
    ],
    "answer": "IDS"
  },
  {
    "id": 339,
    "question": "The device used to block unauthorized access to your network is ...",
    "options": [
      "IDS",
      "Firewall",
      "IPS",
      "VPN"
    ],
    "answer": "Firewall"
  },
  {
    "id": 340,
    "question": "The device used for providing secured remote access is ...",
    "options": [
      "IDS",
      "IPS",
      "Firewall",
      "VPN"
    ],
    "answer": "VPN"
  },
  {
    "id": 341,
    "question": "The decision-making in an organic structure is generally",
    "options": [
      "decentralised",
      "centralised.",
      "formalised.",
      "None of the other answers is correct."
    ],
    "answer": "decentralised"
  },
  {
    "id": 342,
    "question": "The DBMS language component which can be embedded in a program is",
    "options": [
      "The data definition language(DDL)",
      "The data manipulation language (DML)",
      "The database administrator (DBA)",
      "A query language"
    ],
    "answer": "The data manipulation language (DML)"
  },
  {
    "id": 343,
    "question": "The data transmission on the asynchronous BUS is also referred as",
    "options": [
      "Bulk transmission",
      "Same time transmission",
      "Switch mode transmission",
      "Hand-Shake transmission."
    ],
    "answer": "Hand-Shake transmission."
  },
  {
    "id": 344,
    "question": "The data structure required to check whether an expression contains balanced parenthesis is",
    "options": [
      "Stack",
      "Queue",
      "Tree",
      "Array"
    ],
    "answer": "Stack"
  },
  {
    "id": 345,
    "question": "The control takes place after the action is called as",
    "options": [
      "Feed Forward Control",
      "Concurrent Control",
      "Feedback Control",
      "Control measure"
    ],
    "answer": "Feedback Control"
  },
  {
    "id": 346,
    "question": "The Contingency theory focuses on",
    "options": [
      "Situational variables",
      "Interrelationships",
      "Groups and human behavior",
      "Economic needs of workers"
    ],
    "answer": "Situational variables"
  },
  {
    "id": 347,
    "question": "The connected graph with n vertices and n edges consists of at least m different spanning trees, what is the largest integer m?",
    "options": [
      "1",
      "2",
      "n",
      "n-1"
    ],
    "answer": "n"
  },
  {
    "id": 348,
    "question": "The concept of ________ has evolved from the traditional view of corporate social responsibility.",
    "options": [
      "social scaffolding",
      "planetary progressivism",
      "work-life balance",
      "corporate sustainability"
    ],
    "answer": "corporate sustainability"
  },
  {
    "id": 349,
    "question": "The COCOMO model depends of time factors",
    "options": [
      "True",
      "False"
    ],
    "answer": "True"
  },
  {
    "id": 350,
    "question": "The cache term is now applied when a buffering is employed for reusing commonly occurring items, for example",
    "options": [
      "File caches",
      "Name cache",
      "Flash memory",
      "Both a and b"
    ],
    "answer": "Both a and b"
  },
  {
    "id": 351,
    "question": "The basic limitation of FSM is that",
    "options": [
      "all of the comments are true",
      "it cannot remember arbitrary large amounts of information",
      "it sometimes fails to recognize grammars that are regular",
      "it sometimes recognized grammars that are not regular"
    ],
    "answer": "it cannot remember arbitrary large amounts of information"
  },
  {
    "id": 352,
    "question": "The attribute composed of multiple components, each with an independent existence is called",
    "options": [
      "Composite attribute",
      "Simple attribute",
      "Single valued attribute",
      "Derived attribute"
    ],
    "answer": "Composite attribute"
  },
  {
    "id": 353,
    "question": "The attribute age can be a",
    "options": [
      "Single Valued",
      "Multi Valued",
      "Derived",
      "Composite"
    ],
    "answer": "Derived"
  },
  {
    "id": 354,
    "question": "The assumptions about the future in which the planning is implemented are termed as",
    "options": [
      "Boundaries",
      "Premises",
      "Limits",
      "Hypothesis"
    ],
    "answer": "Premises"
  },
  {
    "id": 355,
    "question": "The assignment of individual duties and responsibilities is most appropriately described in which of the following documents?",
    "options": [
      "Security policy",
      "Enforcement guidelines",
      "Acceptable use policy",
      "Job descriptions"
    ],
    "answer": "Job descriptions"
  },
  {
    "id": 356,
    "question": "The algorithm which chooses the page that has not been used for the longest period of time is",
    "options": [
      "First in first out algorithm",
      "Least recently used algorithm",
      "Additional reference bit algorithm",
      "Counting based page replacement algorithm"
    ],
    "answer": "Least recently used algorithm"
  },
  {
    "id": 357,
    "question": "The aim of this process is to develop low-quality software solutions that exceed or meet user expectations within time frame is development life cycle.",
    "options": [
      "True",
      "False"
    ],
    "answer": "False"
  },
  {
    "id": 358,
    "question": "The advantage of pure virtual function than normal virtual function is",
    "options": [
      "It reduces the program code size in terms of number of lines",
      "It reduces the memory space",
      "the compiler easily finds syntax error in a program",
      "forces derived classes to implement it"
    ],
    "answer": "forces derived classes to implement it"
  },
  {
    "id": 359,
    "question": "The address of a page table in memory is stored in",
    "options": [
      "stack pointer",
      "page table base register",
      "page register",
      "program counter"
    ],
    "answer": "page table base register"
  },
  {
    "id": 360,
    "question": "The address generated by the CPU is referred to as",
    "options": [
      "Physical address",
      "Logical address",
      "Neither physical nor logical",
      "Network Address"
    ],
    "answer": "Logical address"
  },
  {
    "id": 361,
    "question": "The actual count of elements associated with the connectivity is called ____ of the relationship connectivity.",
    "options": [
      "Cardinality",
      "Entity type",
      "Entity set",
      "None of these"
    ],
    "answer": "Cardinality"
  },
  {
    "id": 362,
    "question": "The access mode of Magnetic Disk is",
    "options": [
      "Sequential access",
      "Random access",
      "Associative access",
      "SemiRandom access"
    ],
    "answer": "Random access"
  },
  {
    "id": 363,
    "question": "The ability to temporarily halt the CPU and use this time to send information on buses is called",
    "options": [
      "Direct memory access",
      "Vectoring the interrupt",
      "System Interrupt",
      "Cycle stealing"
    ],
    "answer": "Cycle stealing"
  },
  {
    "id": 364,
    "question": "The ____ must design and program the overlay structure.",
    "options": [
      "programmer",
      "system architect",
      "system designer",
      "system analyst"
    ],
    "answer": "programmer"
  },
  {
    "id": 365,
    "question": "The ____ model defines the stored data structures in terms of the database model used.",
    "options": [
      "Physical level",
      "Conceptual level",
      "External level",
      "None of these"
    ],
    "answer": "Conceptual level"
  },
  {
    "id": 366,
    "question": "The ____ style of leadership describes a leader who tends to involve employees in decision making, delegate authority, encourage participation in deciding work methods and goals, and uses feedback as an opportunity for coaching employees.",
    "options": [
      "participative",
      "autocratic",
      "democratic",
      "laissez-faire"
    ],
    "answer": "democratic"
  },
  {
    "id": 367,
    "question": "The ____ theory states a manager's choice of organizational structures and control systems depends on the characteristics of the external environment.",
    "options": [
      "Mechanistic",
      "Management science",
      "Organic",
      "Contingency"
    ],
    "answer": "Contingency"
  },
  {
    "id": 368,
    "question": "The ____ technique expands the bandwidth of a signal by replacing each data bit with n bits.",
    "options": [
      "DSSS",
      "FHSS",
      "FDM",
      "TDM"
    ],
    "answer": "DSSS"
  },
  {
    "id": 369,
    "question": "The 'means' of leadership involve",
    "options": [
      "getting results through others.",
      "the ability to build cohesive, goal-oriented teams.",
      "the process of influencing an organized group toward accomplishing its goals",
      "the process of forcibly making others comply."
    ],
    "answer": "the process of influencing an organized group toward accomplishing its goals"
  },
  {
    "id": 370,
    "question": "The Simple Security Condition requires that a subject S can read an object O only if ____ and any DAC permits",
    "options": [
      "Ls > Lo",
      "LO <= LS",
      "LO < LS",
      "Ls <= Lo"
    ],
    "answer": "LO <= LS"
  },
  {
    "id": 371,
    "question": "The number of subordinates a superior can effectively handle is called",
    "options": [
      "Organising people",
      "Span of control",
      "Direction",
      "Coordination"
    ],
    "answer": "Span of control"
  },
  {
    "id": 372,
    "question": "The easiest form of offline password hash attack which can be used for capturing insecure passwords is?",
    "options": [
      "Hybrid",
      "Dictionary",
      "Brute-force",
      "Man-in-the-middle"
    ],
    "answer": "Dictionary"
  },
  {
    "id": 373,
    "question": "The ____ access control model in which users are not given much freedom to decide who can access their files and is recognized for its structure and use of security labels?",
    "options": [
      "Discretionary",
      "Mandatory",
      "Role-based",
      "Nondiscretionary"
    ],
    "answer": "Mandatory"
  },
  {
    "id": 374,
    "question": "That an enterprise must behave as a good citizen is an example of its responsibility towards:",
    "options": [
      "owners.",
      "workers.",
      "consumers.",
      "community."
    ],
    "answer": "community."
  },
  {
    "id": 375,
    "question": "Thackeray Manufacturing recently developed a code of ethics. Which of the following topics is most likely covered in the document?",
    "options": [
      "business conduct",
      "fair competition",
      "HR issues",
      "All the other answers are correct"
    ],
    "answer": "All the other answers are correct"
  },
  {
    "id": 376,
    "question": "Testing the end to end functionality of the system as a whole is defined as",
    "options": [
      "Unit Testing",
      "System Testing",
      "Stress Testing",
      "Load Testing"
    ],
    "answer": "System Testing"
  },
  {
    "id": 377,
    "question": "Templates ____ some common errors found in code that makes heavy use of function-like macros",
    "options": [
      "Reject",
      "Allow",
      "Avoid",
      "None"
    ],
    "answer": "Avoid"
  },
  {
    "id": 378,
    "question": "Template uses keyword?",
    "options": [
      "class",
      "typename",
      "both class & typename",
      "function"
    ],
    "answer": "both class & typename"
  },
  {
    "id": 379,
    "question": "Template creates ____ versions of a function at run time",
    "options": [
      "Similar",
      "Different",
      "None",
      "Both similar and different"
    ],
    "answer": "Different"
  },
  {
    "id": 380,
    "question": "Template classes and functions ____ the code duplication of different data types and thus makes the development easier and faster.",
    "options": [
      "Allow",
      "Eliminate",
      "Permit",
      "None"
    ],
    "answer": "Eliminate"
  },
  {
    "id": 381,
    "question": "TCP/IP MODEL DOES NOT HAVE ____ LAYER BUT OSI MODEL HAVE THIS LAYER.",
    "options": [
      "SESSION LAYER",
      "PRESENTATION LAYER",
      "APPLICATION LAYER",
      "Both Session and Presentation layer"
    ],
    "answer": "Both Session and Presentation layer"
  },
  {
    "id": 382,
    "question": "Tangible premises in planning doesn't include",
    "options": [
      "capital investment",
      "Unit of production",
      "Cost per unit",
      "Goodwill"
    ],
    "answer": "Goodwill"
  },
  {
    "id": 383,
    "question": "Synchronous and Asynchronous data transfer classification is based on",
    "options": [
      "Time at which data transfer happens",
      "Type of data transfer occurs",
      "Type of devices connected to them",
      "None of the mentioned options"
    ],
    "answer": "Time at which data transfer happens"
  },
  {
    "id": 384,
    "question": "Suppose the following disk request sequence (track numbers) for a disk with 100 tracks is given: 45, 20, 90, 10, 50, 60, 80, 25, 70. Assume that the initial position of the R/W head is on track 50. The additional distance that will be traversed by the R/W head when the Shortest Seek Time First (SSTF) algorithm is used compared to the SCAN (Elevator) algorithm (assuming that SCAN algorithm moves towards 100 when it starts execution) is ____ tracks",
    "options": [
      "8",
      "9",
      "10",
      "11"
    ],
    "answer": "10"
  },
  {
    "id": 385,
    "question": "Suppose that a system has a paging system with 8 entries in a page table. Given that there are three processes of equal sizes, creating 8 valid entries in their page tables. What would be the total number of frames allocated to these three processes under the condition that 2 pages are shared by the three processes?",
    "options": [
      "24",
      "20",
      "22",
      "30"
    ],
    "answer": "20"
  },
  {
    "id": 386,
    "question": "Suppose a disk has 201 cylinders, numbered from 0 to 200. At some time the disk arm is at cylinder 100, and there is a queue of disk access requests for cylinders 30, 85, 90, 100, 105, 110, 135 and 145. If Shortest-Seek Time First (SSTF) is being used for scheduling the disk access, the request for cylinder 90 is serviced after servicing ____ number of requests.",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": "3"
  },
  {
    "id": 387,
    "question": "Supervision of employees is greatly enhanced by having a small span of control, but it is expensive.",
    "options": [
      "expensive.",
      "time-consuming.",
      "resource-consuming.",
      "complex."
    ],
    "answer": "expensive."
  },
  {
    "id": 388,
    "question": "Stress that usually lasts for short time and may be due to work pressure, meeting deadlines pressure or minor accident, or any related matters is called",
    "options": [
      "Chronic stress",
      "Acute stress",
      "Negative stress",
      "Permanent stress"
    ],
    "answer": "Acute stress"
  },
  {
    "id": 389,
    "question": "State true or false. i) Unix, support multiple user processes but only support one thread per process. ii) A java run time environment is an example of a system of one process with multiple threads.",
    "options": [
      "True, False",
      "True, True",
      "False, True",
      "False, False"
    ],
    "answer": "False, True"
  },
  {
    "id": 390,
    "question": "SP 800 series standard are defined by....",
    "options": [
      "NIST",
      "COBIT",
      "COSO",
      "ISO"
    ],
    "answer": "NIST"
  },
  {
    "id": 391,
    "question": "Sort out the following virus based on their severity: Resident virus, non-resident virus, boot sector virus, and macro virus",
    "options": [
      "Resident virus, non-resident virus, boot sector virus, and macro virus",
      "Boot sector virus, resident virus, non-resident virus and macro virus",
      "Boot sector virus, non-resident virus, resident virus and macro virus",
      "Boot sector virus, non-resident virus, macro virus and resident virus"
    ],
    "answer": "Boot sector virus, resident virus, non-resident virus and macro virus"
  },
  {
    "id": 392,
    "question": "Social responsibility is",
    "options": [
      "the same as legal responsibility.",
      "broader than legal responsibility.",
      "narrower than legal responsibility.",
      "None of the other answers is correct."
    ],
    "answer": "broader than legal responsibility."
  },
  {
    "id": 393,
    "question": "Significant percentage of the spent time in moving data in two levels in the memory hierarchy, then the memory-hierarchy is said to",
    "options": [
      "Mixed",
      "Write stall",
      "Averaging",
      "Thrash"
    ],
    "answer": "Thrash"
  },
  {
    "id": 394,
    "question": "Select the output of the following #include<stdio.h> main(){ char arr1[5]=\"apple\"; char arr2[5]=\"apple\"; if (arr1==arr2) printf(\"Same\"); else printf(\"Not Same\"); }",
    "options": [
      "Same",
      "Not Same",
      "Error",
      "None of these"
    ],
    "answer": "Not Same"
  },
  {
    "id": 395,
    "question": "Seek Time is",
    "options": [
      "the time taken to locate the disk arm to a specified track where the data is to be read or write.",
      "the time taken by the desired sector of disk to rotate into a position so that it can access the read/write heads",
      "the time to transfer the data.",
      "the time is taken to complete the execution."
    ],
    "answer": "the time taken to locate the disk arm to a specified track where the data is to be read or write."
  },
  {
    "id": 396,
    "question": "SDLC stands for",
    "options": [
      "Software Development Life Cycle",
      "System Development Life cycle",
      "Software Design Life Cycle",
      "System Design Life Cycle"
    ],
    "answer": "Software Development Life Cycle"
  },
  {
    "id": 397,
    "question": "Scientific Management is related to",
    "options": [
      "Elton Mayo",
      "Henry Fayol",
      "F W Taylor",
      "Max Weber"
    ],
    "answer": "F W Taylor"
  },
  {
    "id": 398,
    "question": "Scalar chain is a",
    "options": [
      "Leadership chain",
      "Authority chain",
      "Decision making chain",
      "Control chain"
    ],
    "answer": "Authority chain"
  },
  {
    "id": 399,
    "question": "Sanjana works as a production supervisor, and she believes one of her subordinates is drinking during his lunch break. Sanjana’s employer does not have a specific rule regarding the subordinate's behaviour. Which of the following would most likely assist Sanjana with her problem in this situation?",
    "options": [
      "corporate code of ethics",
      "corporate vision statement",
      "corporate code of conduct",
      "labour legislation"
    ],
    "answer": "corporate code of conduct"
  },
  {
    "id": 400,
    "question": "RTM stands for",
    "options": [
      "Repeated Trade Matrix",
      "Redundant Trace Module",
      "Robust Test Mechanism",
      "Requirement traceability matrix"
    ],
    "answer": "Requirement traceability matrix"
  },
  {
    "id": 401,
    "question": "Routing is performed by ____ in OSI architecture",
    "options": [
      "network layer",
      "data link layer",
      "transport layer",
      "session layer"
    ],
    "answer": "network layer"
  },
  {
    "id": 402,
    "question": "Rotational Latency is",
    "options": [
      "the time is taken to locate the disk arm to a specified track where the data is to be read or write.",
      "the time taken by the desired sector of disk to rotate into a position so that it can access the read/write heads.",
      "the time to transfer the data.",
      "the time is taken to complete the execution."
    ],
    "answer": "the time taken by the desired sector of disk to rotate into a position so that it can access the read/write heads."
  },
  {
    "id": 403,
    "question": "Reverse polish notation is used by",
    "options": [
      "Stack",
      "Queue",
      "Linked list",
      "All of these"
    ],
    "answer": "Stack"
  },
  {
    "id": 404,
    "question": "Return type of is_open() function is",
    "options": [
      "int",
      "bool",
      "float",
      "char *"
    ],
    "answer": "bool"
  },
  {
    "id": 405,
    "question": "Resource allocation graph can be used to avoid deadlock for 'n' processes",
    "options": [
      "Yes",
      "No"
    ],
    "answer": "No"
  },
  {
    "id": 406,
    "question": "Requirement of two pointer is not mandatory in",
    "options": [
      "Stack",
      "Queue",
      "Linked list",
      "Doubly Linked List"
    ],
    "answer": "Stack"
  },
  {
    "id": 407,
    "question": "Relationship set in ER diagram",
    "options": [
      "Divided Rectangle",
      "Non Divided Rectangle",
      "Line",
      "Diamond"
    ],
    "answer": "Diamond"
  },
  {
    "id": 408,
    "question": "Relations produced by ER model will always be in",
    "options": [
      "1 NF",
      "2 NF",
      "3 NF",
      "4 NF"
    ],
    "answer": "1 NF"
  },
  {
    "id": 409,
    "question": "Relation between two different function with two constant are applicable in",
    "options": [
      "F(n)=O(g(n))",
      "F(n)=θ(g(n))",
      "F(n)=Ώ(g(n))",
      "All of them"
    ],
    "answer": "All of them"
  },
  {
    "id": 410,
    "question": "Related to Fibonacci sequence, which of the following is more appropriate.",
    "options": [
      "Integer sequence",
      "Irrational number",
      "Both are true",
      "None is correct"
    ],
    "answer": "Integer sequence"
  },
  {
    "id": 411,
    "question": "Regular expressions that do not contain the star operator can represent only finite languages",
    "options": [
      "True",
      "False",
      "Can't determined",
      "Neither True and Nor False"
    ],
    "answer": "True"
  },
  {
    "id": 412,
    "question": "Regular Expression recognizes --------grammars",
    "options": [
      "type-1",
      "type-2",
      "type-3",
      "type-0"
    ],
    "answer": "type-3"
  },
  {
    "id": 413,
    "question": "Recursion fails due to fixed size",
    "options": [
      "Linked list",
      "Queue",
      "Stack",
      "All of these"
    ],
    "answer": "Stack"
  },
  {
    "id": 414,
    "question": "Random access memories are useful in applications where",
    "options": [
      "Data consists of numbers",
      "Short access time is required",
      "Each stored word is processed differently",
      "Data naturally needs to flow in and out in serial form"
    ],
    "answer": "Short access time is required"
  },
  {
    "id": 415,
    "question": "Queues serve a major role in",
    "options": [
      "Simulation of recursion",
      "Simulation of arbitrary linked list",
      "Simulation of limited resource allocation",
      "All of these"
    ],
    "answer": "Simulation of limited resource allocation"
  },
  {
    "id": 416,
    "question": "Program always deals with",
    "options": [
      "logical address",
      "absolute address",
      "physical address",
      "relative address"
    ],
    "answer": "logical address"
  },
  {
    "id": 417,
    "question": "Prims algorithm is based on",
    "options": [
      "Divide and conquer method",
      "Dynamic programming",
      "Greedy method",
      "Branch and bound"
    ],
    "answer": "Greedy method"
  },
  {
    "id": 418,
    "question": "Plan-driven process is a process where all the activities are planned first and the progress is measured against the plan is",
    "options": [
      "Agile Process Model",
      "Waterfall Process Model",
      "Prototyping Process Model",
      "RAD Process Model"
    ],
    "answer": "Waterfall Process Model"
  },
  {
    "id": 419,
    "question": "Pharming is an attack which referred to",
    "options": [
      "Collecting social data from victim device",
      "Installing any software or app in victim device",
      "Redirecting a user to a fraudulent website",
      "Attacking victim social network"
    ],
    "answer": "Redirecting a user to a fraudulent website"
  },
  {
    "id": 420,
    "question": "Persons who can influence others and who possess managerial authority are termed ________.",
    "options": [
      "entrepreneurs",
      "leaders",
      "managers",
      "visionaries"
    ],
    "answer": "leaders"
  },
  {
    "id": 421,
    "question": "Periodically adding, changing and deleting file records is called as File?",
    "options": [
      "Updating",
      "Upgrading",
      "Reconstructing",
      "Renewing"
    ],
    "answer": "Updating"
  },
  {
    "id": 422,
    "question": "Parallel computing means doing several tasks simultaneously thus improving the performance of the",
    "options": [
      "Data system",
      "Computer system",
      "Memory",
      "Vector system"
    ],
    "answer": "Computer system"
  },
  {
    "id": 423,
    "question": "Page fault occurs when the referenced page is",
    "options": [
      "not in main memory",
      "not in secondary memory",
      "not in tertiary memory",
      "not in shared memory"
    ],
    "answer": "not in main memory"
  },
  {
    "id": 424,
    "question": "overflow condition was raised by the stack, which of the condition holds false",
    "options": [
      "maximum limit exceeds",
      "top of the stack is reached",
      "limited stack size",
      "none of these"
    ],
    "answer": "none of these"
  },
  {
    "id": 425,
    "question": "Output will be #include<stdio.h> int myFunction(int parameter) { return parameter; } main(){ int value=100; printf(\"%d %d\", myFunction(value), myFunction(value+100)); }",
    "options": [
      "100 100",
      "100 200",
      "200 100",
      "Warning during compilation"
    ],
    "answer": "200 100"
  },
  {
    "id": 426,
    "question": "Output will be #include<stdio.h> #include<string.h> main(){ char Be[16]=\"Positive \"; char Positive[16]=\"Positive \"; printf(\"%d\",strcmp(Be,Positive) ); }",
    "options": [
      "1",
      "-1",
      "0",
      "Error"
    ],
    "answer": "0"
  },
  {
    "id": 427,
    "question": "Output of the given code will be #include<stdio.h> #include<string.h> main(){ char Be[16]=\"Positive \"; char Positive[16]=\"positive \"; printf(\"%d\",strcmp(Be,Positive) ); }",
    "options": [
      "1",
      "-1",
      "0",
      "Error"
    ],
    "answer": "-1"
  },
  {
    "id": 428,
    "question": "Output of the following code will be #include<stdio.h> int myFunction() { return 1; } int myFunction(int a) { return 2; } main(){ printf(\"%d %d\", myFunction(), myFunction(1)); }",
    "options": [
      "1 1",
      "1 2",
      "2 2",
      "Error"
    ],
    "answer": "1 2"
  },
  {
    "id": 429,
    "question": "Operating System maintains the page table for",
    "options": [
      "each process",
      "each thread",
      "each instruction",
      "each address"
    ],
    "answer": "each process"
  },
  {
    "id": 430,
    "question": "Open mail relays are",
    "options": [
      "Mail user agent",
      "Mail transfer agent",
      "Mail delivers agent",
      "Internet mail extension"
    ],
    "answer": "Mail transfer agent"
  },
  {
    "id": 431,
    "question": "Only one external reference is required for",
    "options": [
      "Linear linked list",
      "Circular linked list",
      "Double ended list",
      "None of these"
    ],
    "answer": "Circular linked list"
  },
  {
    "id": 432,
    "question": "Nusrat sees her role as someone who provides direction and resources for her team then gets out of their way and lets them do their work however they think best. Nusrat uses the ________ style of leadership.",
    "options": [
      "autocratic",
      "participative",
      "democratic",
      "laissez-faire"
    ],
    "answer": "laissez-faire"
  },
  {
    "id": 433,
    "question": "Non-type template parameters provide the ability to pass what type of data at compile time",
    "options": [
      "int",
      "float",
      "constant expression",
      "none of the mentioned"
    ],
    "answer": "constant expression"
  },
  {
    "id": 434,
    "question": "Non-type parameters are mainly used for specifying _____ values or any other constant value for a particular instance of a template.",
    "options": [
      "max and min",
      "max or min",
      "min",
      "max"
    ],
    "answer": "max or min"
  },
  {
    "id": 435,
    "question": "Nesting of try block is",
    "options": [
      "syntax error",
      "possible in C++",
      "logical error",
      "both (a) and (c)"
    ],
    "answer": "possible in C++"
  },
  {
    "id": 436,
    "question": "Nesting of catch block is",
    "options": [
      "syntax error",
      "possible in C++",
      "logical error",
      "not possible in C++"
    ],
    "answer": "not possible in C++"
  },
  {
    "id": 437,
    "question": "Negative cash flow is one of the classification when desired rate of return is minimum by actual rate of return",
    "options": [
      "True",
      "False"
    ],
    "answer": "False"
  },
  {
    "id": 438,
    "question": "Narrow span of control results into",
    "options": [
      "Tall structure",
      "Flat structure",
      "Mechanistic structure",
      "All the above"
    ],
    "answer": "Tall structure"
  },
  {
    "id": 439,
    "question": "N Ach, N Aff and N Pow are related",
    "options": [
      "McClelland’s Learned Needs",
      "ERG theory",
      "Justice Theory",
      "Equity theory"
    ],
    "answer": "McClelland’s Learned Needs"
  },
  {
    "id": 440,
    "question": "Multivalued attribute Example",
    "options": [
      "Student Name",
      "Student address",
      "Student Phone number",
      "Student Id number"
    ],
    "answer": "Student Phone number"
  },
  {
    "id": 441,
    "question": "Minnesota Multi-phasic Personality Inventory (MMPI) is used to assess",
    "options": [
      "Attitude",
      "Personality",
      "Work engagement",
      "Wellbeing"
    ],
    "answer": "Personality"
  },
  {
    "id": 442,
    "question": "Memory management technique in which system stores and retrieves data from secondary storage for use in main memory is called",
    "options": [
      "fragmentation",
      "paging",
      "mapping",
      "spooling"
    ],
    "answer": "paging"
  },
  {
    "id": 443,
    "question": "Memory Address locations are specified using which data representation?",
    "options": [
      "Sign-magnitude",
      "one`s complement",
      "Unsigned",
      "two`s complement"
    ],
    "answer": "Unsigned"
  },
  {
    "id": 444,
    "question": "McKinsky’s 7S framework doesn’t include:",
    "options": [
      "System",
      "Shared value",
      "Share holders",
      "Staff"
    ],
    "answer": "Share holders"
  },
  {
    "id": 445,
    "question": "MBTI is used to measure",
    "options": [
      "Attitude",
      "Behaviour",
      "Personality",
      "Response"
    ],
    "answer": "Personality"
  },
  {
    "id": 446,
    "question": "Max Weber belongs to which school of Management thought?",
    "options": [
      "Scientific",
      "Administrative",
      "Bureaucratic",
      "Human relations"
    ],
    "answer": "Bureaucratic"
  },
  {
    "id": 447,
    "question": "Match the following: i. Breadth-first search a. Heap ii. Depth-first search b. Stack iii. Sorting c. Queue",
    "options": [
      "i-a ii-b iii-c",
      "i-c ii-b iii-a",
      "i-c ii-a iii-b",
      "i-b ii-c iii-a"
    ],
    "answer": "i-c ii-b iii-a"
  },
  {
    "id": 448,
    "question": "Match the following elements of organisation with their characteristics A) 1. Strategic apex ... B) 2. Techno - structure ... C) 3. Middle line ... D) 4. Support staff ... E) 5. Operating core ...",
    "options": [
      "1-B, 2-C, 3-D, 4-E, 5-A",
      "1-C, 2-B, 3-E, 4-D, 5-A",
      "1-E, 2-C, 3-B, 4-A, 5-D",
      "1-B, 2-A, 3-E, 4-C, 5-D"
    ],
    "answer": "1-B, 2-C, 3-D, 4-E, 5-A"
  },
  {
    "id": 449,
    "question": "Management as a process refers to",
    "options": [
      "Group of managers",
      "Functions of management",
      "Subject of management",
      "All of these"
    ],
    "answer": "Functions of management"
  },
  {
    "id": 450,
    "question": "Management as a Noun refers to",
    "options": [
      "Group of managers",
      "Functions of management",
      "Subject of management",
      "All of these"
    ],
    "answer": "Group of managers"
  },
  {
    "id": 451,
    "question": "Magnetic tape is a",
    "options": [
      "serial access medium",
      "Random access medium",
      "A parallel access medium",
      "NONE"
    ],
    "answer": "serial access medium"
  },
  {
    "id": 452,
    "question": "LSD stands for",
    "options": [
      "Lean Software Development",
      "Live Software Development",
      "Less Software Data",
      "Least Software Data loss"
    ],
    "answer": "Lean Software Development"
  },
  {
    "id": 453,
    "question": "Lower and upper limits are present in which chart ?",
    "options": [
      "Run chart",
      "Bar chart",
      "Control chart",
      "None of the mentioned"
    ],
    "answer": "Control chart"
  },
  {
    "id": 454,
    "question": "Logical memory is broken into blocks of the same size called",
    "options": [
      "frames",
      "pages",
      "backing store",
      "registers"
    ],
    "answer": "pages"
  },
  {
    "id": 455,
    "question": "Linked list uses",
    "options": [
      "Random memory allocation",
      "Static memory allocation",
      "Fixed memory allocation",
      "Dynamic memory allocation"
    ],
    "answer": "Dynamic memory allocation"
  },
  {
    "id": 456,
    "question": "Like normal parameters, we can specify ____arguments to templates.",
    "options": [
      "Default",
      "Function",
      "Class",
      "None"
    ],
    "answer": "Default"
  },
  {
    "id": 457,
    "question": "Let w be a string and separated by three variable m, n, and o as per pumping lemma for regular language. What does these variables represent?",
    "options": [
      "string",
      "string count",
      "string and string count",
      "substrings"
    ],
    "answer": "substrings"
  },
  {
    "id": 458,
    "question": "Let the initial value of count be 5. What will be the final value of count if the instructions are executed in the following order: S1;T1;S2;T2;S3;T3. Process P0: { S1: register1=count; S2: register1=register1 - 5 S3: count=register1 } Process P1: { T1: register2=count; T2: register2=register2 X 5 T3: count=register2 }",
    "options": [
      "50",
      "25",
      "10",
      "0"
    ],
    "answer": "0"
  },
  {
    "id": 459,
    "question": "Let the initial value of count be 10. What will be the final value of count if the instructions are executed in the following order: S1;T1;S2;T2;S3;T3. Process P0: { S1: register1=count; S2: register1=register1 - 5 S3: count=register1 } Process P1: { T1: register2=count; T2: register2=register2 X 5 T3: count=register2 }",
    "options": [
      "50",
      "25",
      "5",
      "1"
    ],
    "answer": "25"
  },
  {
    "id": 460,
    "question": "Let int arr[4]={0,1,2,3}. Which of the following are valid operations? I. arr++ II. ++arr III. arr+4 IV. arr*4",
    "options": [
      "I and II",
      "III",
      "IV",
      "All"
    ],
    "answer": "III"
  },
  {
    "id": 461,
    "question": "Legitimate power is based on the subordinate's perception that the leader has a right to exercise influence because of the leader’s",
    "options": [
      "role or position within the organisation.",
      "expertise and knowledge.",
      "personal characteristics and personality.",
      "ability to punish or reward."
    ],
    "answer": "role or position within the organisation."
  },
  {
    "id": 462,
    "question": "Left linear grammars are ...... of CFG",
    "options": [
      "Power set",
      "Sub set",
      "Super set",
      "Nullable"
    ],
    "answer": "Sub set"
  },
  {
    "id": 463,
    "question": "Lean philosophy regards everything not adding value to the customer as",
    "options": [
      "Unnecessary",
      "Waste",
      "Useful",
      "Necessary"
    ],
    "answer": "Waste"
  },
  {
    "id": 464,
    "question": "Lean Development follows the principle of",
    "options": [
      "Decide as late as possible",
      "Deliver as late as possible",
      "Decide as early as possible",
      "Not building integrity"
    ],
    "answer": "Decide as late as possible"
  },
  {
    "id": 465,
    "question": "Leadership is the process whose important ingredient is the _____________ exercised by the leaders on the group members.",
    "options": [
      "friendship",
      "loyalty",
      "trust",
      "influence"
    ],
    "answer": "influence"
  },
  {
    "id": 466,
    "question": "Leadership has a lot of characteristics, and a leader must not maintain this trait in his behaviour:",
    "options": [
      "co-existence",
      "taking responsibility",
      "avoiding responsibility",
      "All the other answers are correct"
    ],
    "answer": "avoiding responsibility"
  },
  {
    "id": 467,
    "question": "Leaders that focus on the individuality and personality needs of their employees and emphasize building good interpersonal relationships are:",
    "options": [
      "job-centred",
      "laissez-faire",
      "employee-oriented",
      "task-oriented"
    ],
    "answer": "employee-oriented"
  },
  {
    "id": 468,
    "question": "Leaders that focus on production and the job’s technical aspects are:",
    "options": [
      "job-centred",
      "laissez-faire",
      "general",
      "autocratic"
    ],
    "answer": "job-centred"
  },
  {
    "id": 469,
    "question": "Lakshan sends an encrypted message to Ruhan but it is intercepted by Tanish. Tanish cannot read it but forwards it on to Ruhan from an anonymous address she controls. Which precept of the CIA Triad would have been violated?",
    "options": [
      "Confidentiality",
      "Integrity",
      "Availability",
      "Authentication"
    ],
    "answer": "Authentication"
  },
  {
    "id": 470,
    "question": "Keerthana solicits input from her subordinates before making decisions that will affect them. She often praises them for good work and gently offers suggestions to improve their performance. Keerthana uses the ________ style of leadership.",
    "options": [
      "autocratic",
      "participative",
      "democratic",
      "supportive"
    ],
    "answer": "democratic"
  },
  {
    "id": 471,
    "question": "Kalam Enterprises recently fired two employees who were caught stealing tools from the firm's warehouse. As a result, the CEO of Kalam wants to strengthen the firm's ethical culture and prevent future violations by redesigning the firm's ethics program. Which of the following questions is the LEAST relevant when developing Kalam's new ethics program?",
    "options": [
      "What behaviour is expected of Kalam employees?",
      "What is the opinion of stakeholders regarding Kalam's ethics?",
      "How are ethical situations communicated and resolved at Kalam?",
      "What is the process for Kalam establishing a corporate giving program?"
    ],
    "answer": "What is the process for Kalam establishing a corporate giving program?"
  },
  {
    "id": 472,
    "question": "Josephus problem is a best example of",
    "options": [
      "Singly linked list",
      "Doubly linked list",
      "Circular linked list",
      "All of these"
    ],
    "answer": "Circular linked list"
  },
  {
    "id": 473,
    "question": "It is through ______________ that group members can be inspired, motivated, and guided to be successful and productive.",
    "options": [
      "fellowship",
      "sportsmanship",
      "coercion",
      "leadership"
    ],
    "answer": "leadership"
  },
  {
    "id": 474,
    "question": "It is possible to use more than one generic data type in a class template, and each generic data type is separated by the ___.",
    "options": [
      ".",
      ", (Comma)",
      ";",
      "\"\""
    ],
    "answer": ", (Comma)"
  },
  {
    "id": 475,
    "question": "It is often difficult to estimate size at an early stage in a project when only a specification is available",
    "options": [
      "True",
      "False"
    ],
    "answer": "True"
  },
  {
    "id": 476,
    "question": "it is necessary for a programming language that it must support all these_____ features completely to become a pure Object-Oriented Language.",
    "options": [
      "encapsulation, inheritance, and polymorphism",
      "encapsulation and polymorphism",
      "Inheritance, and polymorphism",
      "Encapsulation and inheritance"
    ],
    "answer": "encapsulation, inheritance, and polymorphism"
  },
  {
    "id": 477,
    "question": "________ is a placeholder name which will be determined when the class is instantiated.",
    "options": [
      "Ttype",
      "type",
      "Type",
      "None"
    ],
    "answer": "Type"
  },
  {
    "id": 478,
    "question": "Internal premises in planning doesn’t include",
    "options": [
      "Money",
      "Materials",
      "Machines",
      "Competitors strategy"
    ],
    "answer": "Competitors strategy"
  },
  {
    "id": 479,
    "question": "Interaction Diagram",
    "options": [
      "class + Object",
      "state + Activity",
      "component + Deployment",
      "Sequence + collaboration"
    ],
    "answer": "Sequence + collaboration"
  },
  {
    "id": 480,
    "question": "int main(){fork();fork();fork();fork();exit(0);printf(“hello”);}How many “hello” messages will be printed if the following program is executed?",
    "options": [
      "16",
      "8",
      "4",
      "0"
    ],
    "answer": "0"
  },
  {
    "id": 481,
    "question": "Institute of Electrical and Electronics Engineers (IEEE) is the largest international professional group. What are the standards developed by this organization?",
    "options": [
      "Computing, communication, electrical engineering, and electronics",
      "Communication, electrical engineering, and electronics",
      "Electrical engineering and electronics",
      "Electrical engineering and computing"
    ],
    "answer": "Computing, communication, electrical engineering, and electronics"
  },
  {
    "id": 482,
    "question": "Information security is the protection of data. Information will be protected mainly based on",
    "options": [
      "Its sensitivity to the company",
      "Its confidentiality",
      "Its value",
      "All the above"
    ],
    "answer": "All the above"
  },
  {
    "id": 483,
    "question": "Independent testers are _____________ and identify different defects at the same time.",
    "options": [
      "Isolated",
      "Biased",
      "Unbiased",
      "Modular"
    ],
    "answer": "Unbiased"
  },
  {
    "id": 484,
    "question": "In working with his employees, Rahman involves them in decision making and encourages them to participate in deciding their work methods and goals. Rahman’s leadership style can best be described as ________.",
    "options": [
      "autocratic",
      "laissez-faire",
      "democratic",
      "participative"
    ],
    "answer": "democratic"
  },
  {
    "id": 485,
    "question": "In which cache organization, index field is not required during block identification",
    "options": [
      "Direct mapping",
      "set associative",
      "2-way associative",
      "fully associative"
    ],
    "answer": "fully associative"
  },
  {
    "id": 486,
    "question": "In which attack, text messages (other than email) are used for hacking personal information?",
    "options": [
      "Phishing",
      "Moshing",
      "Vishing",
      "Smishing"
    ],
    "answer": "Smishing"
  },
  {
    "id": 487,
    "question": "In which attack, phone calls are used for hacking personal information?",
    "options": [
      "Phishing",
      "Moshing",
      "Vishing",
      "Smishing"
    ],
    "answer": "Vishing"
  },
  {
    "id": 488,
    "question": "In which attack, email is used for hacking personal information?",
    "options": [
      "Phishing",
      "Moshing",
      "Vishing",
      "Smishing"
    ],
    "answer": "Phishing"
  },
  {
    "id": 489,
    "question": "In this type of culture the behaviour of individuals are shaped by tradition, loyalty, personal commitment, extensive socialization and self-management",
    "options": [
      "Clan",
      "Market",
      "Entrepreneurial",
      "Bureaucratic"
    ],
    "answer": "Clan"
  },
  {
    "id": 490,
    "question": "In this type of topology data travels only in one direction",
    "options": [
      "Bus",
      "Ring",
      "Star",
      "Mesh"
    ],
    "answer": "Ring"
  },
  {
    "id": 491,
    "question": "In the segment table the segment base contains the",
    "options": [
      "starting logical address of the process",
      "starting physical address of the segment in the memory",
      "segment offset",
      "segment length"
    ],
    "answer": "starting physical address of the segment in the memory"
  },
  {
    "id": 492,
    "question": "In the linked list, each node contains a minimum of two fields. One field is the data field to store the data second field is?",
    "options": [
      "Pointer to character",
      "Pointer to integer",
      "Pointer to node",
      "Node"
    ],
    "answer": "Pointer to node"
  },
  {
    "id": 493,
    "question": "In the graph traversing, Stack is useful for which searching algorithm?",
    "options": [
      "Depth first search",
      "Breadth first search",
      "In-order search",
      "Pre-order search"
    ],
    "answer": "Depth first search"
  },
  {
    "id": 494,
    "question": "In the below function “factorial”, all automatic variables are stored in #include <stdio.h> int factorial(int i) { if(i <= 1) { return 1; } return i * factorial(i - 1); } main() { printf(\"%d\",factorial(5)); }",
    "options": [
      "Array",
      "Register",
      "Stack",
      "Queue"
    ],
    "answer": "Stack"
  },
  {
    "id": 495,
    "question": "In synchronous TDM, for n signal sources of the same data rate, each frame contains _______ slots.",
    "options": [
      "n + 1",
      "n - 1",
      "0 to n",
      "n"
    ],
    "answer": "n"
  },
  {
    "id": 496,
    "question": "In segmentation technique, each address is specified by",
    "options": [
      "an offset and value",
      "a value and segment number",
      "a key and value",
      "a segment number and offset"
    ],
    "answer": "a segment number and offset"
  },
  {
    "id": 497,
    "question": "In regular language pumping lemma, w= mn^io belongs to L then i ranges from?",
    "options": [
      "i>=0",
      "i<=0",
      "i>=1",
      "i<0"
    ],
    "answer": "i>=0"
  },
  {
    "id": 498,
    "question": "In Mintzberg’s management roles, the role that evaluate the performance of managers in different functions is called",
    "options": [
      "Liaison",
      "Figurehead",
      "Monitor",
      "Disseminator"
    ],
    "answer": "Monitor"
  },
  {
    "id": 499,
    "question": "In Mintzberg’s management roles, the role that describes ethical guidelines and the principles of behavior employees are to follow in their dealings with customers and suppliers is",
    "options": [
      "Liaison",
      "Figurehead",
      "Monitor",
      "Spokesperson"
    ],
    "answer": "Figurehead"
  },
  {
    "id": 500,
    "question": "In Mintzberg’s management roles, the role that coordinates between different departments and establish alliances between different organizations, is termed as",
    "options": [
      "Liaison",
      "Figurehead",
      "Monitor",
      "Disseminator"
    ],
    "answer": "Liaison"
  },
  {
    "id": 501,
    "question": "In memory management , a technique called as paging, physical memory is broken into fixed-sized blocks called",
    "options": [
      "Pages",
      "Frames",
      "Blocks",
      "Segments"
    ],
    "answer": "Frames"
  },
  {
    "id": 502,
    "question": "In interactive environments such as time-sharing systems, the primary requirement is to provide reasonably good response time and in general, to share system resources equitably. In such situations, the scheduling algorithm that is most popularly applied is",
    "options": [
      "Shortest Remaining Time Next (SRTN) Scheduling",
      "Priority Based Preemptive Scheduling",
      "Round Robin Scheduling",
      "None of the above"
    ],
    "answer": "Round Robin Scheduling"
  },
  {
    "id": 503,
    "question": "In India, whose law governs data privacy and information technology?",
    "options": [
      "Banking Regulation Act 1949",
      "IT Act 2000",
      "Indian Penal Code",
      "IT (amendment) Act 2008"
    ],
    "answer": "IT Act 2000"
  },
  {
    "id": 504,
    "question": "In hospitals, the following type of departmentalisation is common -",
    "options": [
      "By function",
      "By committee",
      "By geographical region",
      "All of the above"
    ],
    "answer": "By function"
  },
  {
    "id": 505,
    "question": "In his speech the previous day, the new CEO had discussed his experience in the industry and his education... Haripriya realized that she had been judging the new CEO in a manner consistent with the ________ theories of leadership.",
    "options": [
      "trait",
      "behavioural",
      "contingency",
      "situational"
    ],
    "answer": "trait"
  },
  {
    "id": 506,
    "question": "In FIFO page replacement algorithm, when a page must be replaced",
    "options": [
      "oldest page is chosen",
      "newest page is chosen",
      "random page is chosen",
      "first page is chosen"
    ],
    "answer": "oldest page is chosen"
  },
  {
    "id": 507,
    "question": "In expectancy theory, the belief that effort will lead to performance is termed as",
    "options": [
      "Expectancy",
      "Instrumentality",
      "Valence",
      "Values"
    ],
    "answer": "Expectancy"
  },
  {
    "id": 508,
    "question": "In contiguous allocation",
    "options": [
      "each file must occupy a set of contiguous blocks on the disk",
      "each file is a linked list of disk blocks",
      "all the pointers to scattered blocks are placed together in one location",
      "none of the mentioned"
    ],
    "answer": "each file must occupy a set of contiguous blocks on the disk"
  },
  {
    "id": 509,
    "question": "In CIA Triad, CIA refers to ....",
    "options": [
      "Confidentiality, Integrity and Authentication",
      "Confidentiality, Integrity and Availability",
      "Confidentiality, Integrity and Accessibility",
      "Confidentiality, Integrity and Authorization"
    ],
    "answer": "Confidentiality, Integrity and Availability"
  },
  {
    "id": 510,
    "question": "In Big Five Personality dimensions, a person’s range of interest in new things. Open people are creative, curious, and artistically sensitive, as opposed to being closed-minded is called as",
    "options": [
      "Conscientiousness",
      "Extraversion–Introversion",
      "Agreeableness",
      "Openness to Experience"
    ],
    "answer": "Openness to Experience"
  },
  {
    "id": 511,
    "question": "In Big Five Personality dimensions, the hardworking, diligent, organized, dependable, and persistent behavior of a person is termed as",
    "options": [
      "Conscientiousness",
      "Extraversion–Introversion",
      "Agreeableness",
      "Emotional Stability"
    ],
    "answer": "Conscientiousness"
  },
  {
    "id": 512,
    "question": "In an optical fiber, the inner core is _________ the cladding.",
    "options": [
      "less dense than",
      "denser than",
      "the same density as",
      "another name for"
    ],
    "answer": "denser than"
  },
  {
    "id": 513,
    "question": "In an inverted page table scheme",
    "options": [
      "One page table is used in a system",
      "One page table for each process is used in a system",
      "One page table for each file is used in a system",
      "One page table for each program is used in a system"
    ],
    "answer": "One page table is used in a system"
  },
  {
    "id": 514,
    "question": "In ABC University, there are several ‘Departments’... Some departments have students and some are not. If department and student are entity sets... which among the following is a partial participation?",
    "options": [
      "Participation of department in student",
      "Participation of department in DS",
      "Participation of student in department",
      "Participation of student in DS"
    ],
    "answer": "Participation of department in DS"
  },
  {
    "id": 515,
    "question": "In a time sharing scheduling algorithm which of the data structure is used?",
    "options": [
      "Stack",
      "Queue",
      "Linked list",
      "Circular queue"
    ],
    "answer": "Circular queue"
  },
  {
    "id": 516,
    "question": "In a stack, the command to access an nth element from the top of the stack s will be",
    "options": [
      "S[Top –n]",
      "S[Top +n]",
      "S[top-n+1]",
      "None of the option"
    ],
    "answer": "S[top-n+1]"
  },
  {
    "id": 517,
    "question": "In a Segmentation scheme, given the logical address (4, 50) and the corresponding base address in the segment table as 5000, what is the physical address mapped to the given logical address?",
    "options": [
      "0050",
      "4050",
      "5050",
      "4000"
    ],
    "answer": "5050"
  },
  {
    "id": 518,
    "question": "In a reactive approach, the bulk of the test design work begins",
    "options": [
      "Before any software is made",
      "After some modules are completed",
      "After every module, testing is done",
      "After the software has been produced"
    ],
    "answer": "After the software has been produced"
  },
  {
    "id": 519,
    "question": "In a Paging scheme with page sizes of 1K, given the logical address (2, 35) and the corresponding frame number in the page table as 4, what is the physical address mapped to the given logical address?",
    "options": [
      "5131",
      "2030",
      "2083",
      "4131"
    ],
    "answer": "4131"
  },
  {
    "id": 520,
    "question": "In a Page replacement algorithm, which of the following type of page is the best page to replace.",
    "options": [
      "not recently used but modified",
      "recently used but clean",
      "neither recently used nor modified",
      "recently used and modified"
    ],
    "answer": "neither recently used nor modified"
  },
  {
    "id": 521,
    "question": "In a circular queue, the value of r will be",
    "options": [
      "r=r+1",
      "r=(r+1)%[queue_size-1]",
      "r=(r+1)%queue_size",
      "r=(r-1)%queue_size"
    ],
    "answer": "r=(r+1)%queue_size"
  },
  {
    "id": 522,
    "question": "In ___________ each component at lower hierarchy is tested individually and then the components that rely upon these components are tested.",
    "options": [
      "Top down testing",
      "Unit testing",
      "Bottom up testing",
      "Load testing"
    ],
    "answer": "Bottom up testing"
  },
  {
    "id": 523,
    "question": "In _______ transmission, the channel capacity is shared by both communicating devices at all times.",
    "options": [
      "simplex",
      "half-duplex",
      "full-duplex",
      "half-simplex"
    ],
    "answer": "full-duplex"
  },
  {
    "id": 524,
    "question": "In MAC Tuples ,Process can read object when: Object MAC range (lr, hr); process MAC label pl",
    "options": [
      "pl dom lr",
      "pl U (lr, hr)",
      "pl ∈ (lr, hr)",
      "pl dom hr"
    ],
    "answer": "pl dom lr"
  },
  {
    "id": 525,
    "question": "Imposing a total ordering of all resource types, and ensuring process requests resources in an increasing order of enumeration voilates the _______________ condition for deadlock",
    "options": [
      "Mutual exclusion",
      "Hold and Wait",
      "Circular Wait",
      "No Preemption"
    ],
    "answer": "Circular Wait"
  },
  {
    "id": 526,
    "question": "If there is a unique LMD , the grammar is",
    "options": [
      "ambiguous",
      "unambiguous",
      "LLG",
      "RLG"
    ],
    "answer": "unambiguous"
  },
  {
    "id": 527,
    "question": "If there is a complete DFA M1 recognizing a language L1 and has m states out of which two are final states then the machine M recognizing L1 complement will have _____________ final states.",
    "options": [
      "m",
      "m+2",
      "2",
      "m-2"
    ],
    "answer": "m-2"
  },
  {
    "id": 528,
    "question": "If the stringent regulations on the operational procedures exist, the project is considered as Semi -detached",
    "options": [
      "True",
      "False"
    ],
    "answer": "False"
  },
  {
    "id": 529,
    "question": "If the data transfers are done asynchronously, which of the data structure is possible?",
    "options": [
      "Stack",
      "Queue",
      "Linked list",
      "All of these"
    ],
    "answer": "Queue"
  },
  {
    "id": 530,
    "question": "If the characters 'D' 'C' 'B' 'A' are placed in a queue (in that order), and then removed one at a time, in what order will they be removed?",
    "options": [
      "DCAB",
      "ABCD",
      "ABDC",
      "DCBA"
    ],
    "answer": "DCBA"
  },
  {
    "id": 531,
    "question": "If L is a regular language and M is a finite language then L U M must be regular language",
    "options": [
      "True",
      "False",
      "Can't determined",
      "Neither True and Nor False"
    ],
    "answer": "True"
  },
  {
    "id": 532,
    "question": "If M1 machine recognizing L with n states, then M2 recognizing L* constructed Using Thompson construction will have ------------- states.",
    "options": [
      "n-1",
      "n+2",
      "n+1",
      "n"
    ],
    "answer": "n+2"
  },
  {
    "id": 533,
    "question": "If L1 and L2 are languages such that L2, L1L2, and L2L1 are all regular, then L1 must be regular.",
    "options": [
      "True",
      "False",
      "Can't determined",
      "Neither True and Nor False"
    ],
    "answer": "False"
  },
  {
    "id": 534,
    "question": "If L1 and L2 are CFL and R a regular set, one of the languages below is not necessarily a CFL. which one?",
    "options": [
      "L1nL2",
      "L1nR",
      "L1L2",
      "L1UL2"
    ],
    "answer": "L1nL2"
  },
  {
    "id": 535,
    "question": "If an item is referenced once, then it again be referenced soon; given statement is stated by",
    "options": [
      "Temporary locality",
      "Spatial locality",
      "Temporal locality",
      "Spectral Locality"
    ],
    "answer": "Temporal locality"
  },
  {
    "id": 536,
    "question": "If a selection sort algorithm in the worst case is taking 20sec for processing an array of size 32. Which of the following is close to the maximum input size that can be solved in 5 minutes?",
    "options": [
      "256",
      "512",
      "1024",
      "128"
    ],
    "answer": "256"
  },
  {
    "id": 537,
    "question": "If a problem can be broken into subproblems that are reused several times",
    "options": [
      "Overlapping subproblems",
      "Optimal substructure",
      "Memoization",
      "Greedy"
    ],
    "answer": "Overlapping subproblems"
  },
  {
    "id": 538,
    "question": "Identity and Access Management (IdAM) is for ...",
    "options": [
      "Storing multiple passwords",
      "Protecting multiple data",
      "Providing Data Leakage Prevention",
      "Managing digital identities and user access"
    ],
    "answer": "Managing digital identities and user access"
  },
  {
    "id": 539,
    "question": "Identify which one feature explains Indian Ethos.",
    "options": [
      "Belief in Ego Assertion.",
      "Spirit of Sacrifice and Self Control",
      "Emphasis on Individual Achievement",
      "Your Status defines your Character"
    ],
    "answer": "Spirit of Sacrifice and Self Control"
  },
  {
    "id": 540,
    "question": "Identify the organisational risk from the following",
    "options": [
      "Software components which should be reused contain defects which limit their functionality",
      "Required training for staff is not available",
      "Customers fail to understand the impact of requirements changes",
      "None in the list"
    ],
    "answer": "Required training for staff is not available"
  },
  {
    "id": 541,
    "question": "Identify the model which is not coming under the four categories of access control models?",
    "options": [
      "Discretionary",
      "Mandatory",
      "Role-based",
      "Delegated"
    ],
    "answer": "Delegated"
  },
  {
    "id": 542,
    "question": "Human Relations School is related to",
    "options": [
      "Elton Mayo",
      "Henry Fayol",
      "F W Taylor",
      "Max Weber"
    ],
    "answer": "Elton Mayo"
  },
  {
    "id": 543,
    "question": "How often should your data be backed up?",
    "options": [
      "In accordance with your organization’s backup policy",
      "Once a fortnight.",
      "Once a month.",
      "Once a week."
    ],
    "answer": "In accordance with your organization’s backup policy"
  },
  {
    "id": 544,
    "question": "How many “SCOPE”s are printed?, how many “SCOPE”s are printed by only child processes? int main() { if(fork() || fork()) fork(); printf(\"SCOPE\"); }",
    "options": [
      "5,2",
      "5,3",
      "5,4",
      "5,1"
    ],
    "answer": "5,3"
  },
  {
    "id": 545,
    "question": "How many “SCOPE”s are printed?, how many “SCOPE”s are printed by only child processes? int main() { if(fork() && fork()) fork(); printf(\"SCOPE\"); }",
    "options": [
      "4,3",
      "5,3",
      "5,4",
      "5,1"
    ],
    "answer": "4,3"
  },
  {
    "id": 546,
    "question": "How many “hello” messages will be printed if the following program is executed? int main() { pid_t p; fork(); if (p >0) { fork(); fork(); } if (p==0) { fork(); fork(); exit(0); } printf(“hello”); }",
    "options": [
      "2",
      "3",
      "1",
      "4"
    ],
    "answer": "4"
  },
  {
    "id": 547,
    "question": "How many “hello” messages will be printed if the following program is executed? int main() { pid_t p; fork(); if (p >0) { fork(); fork(); exit(0); } if (p==0) { fork(); fork(); exit(0); } printf(“hello”); }",
    "options": [
      "1",
      "3",
      "0",
      "4"
    ],
    "answer": "0"
  },
  {
    "id": 548,
    "question": "How many undirected graphs (not necessarily connected) can be constructed out of a given set V = {v1, v2, ... vn} of n vertices?",
    "options": [
      "n(n-1)/2",
      "2^n",
      "n!",
      "2^(n(n-1)/2)"
    ],
    "answer": "2^(n(n-1)/2)"
  },
  {
    "id": 549,
    "question": "How many principles of the Data Protection Act are there?",
    "options": [
      "8",
      "5",
      "6",
      "7"
    ],
    "answer": "7"
  },
  {
    "id": 550,
    "question": "How many minimum no of stack is required for the runtime executable script",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": "1"
  },
  {
    "id": 551,
    "question": "How many address lines are needed to address each memory locations in a 2048 x 4 memory chip?",
    "options": [
      "10",
      "12",
      "11",
      "8"
    ],
    "answer": "11"
  },
  {
    "id": 552,
    "question": "How many rounds are there in DES?",
    "options": [
      "15",
      "8",
      "64",
      "16"
    ],
    "answer": "16"
  },
  {
    "id": 553,
    "question": "How does your personal computer (end device/host) recognize its IP address and the Gateway IP address to use for transmitting packets to remote hosts without any manual configuration when you connect it to the internet?",
    "options": [
      "DNS (Domain Name System)",
      "ARP (Address Resolution Protocol)",
      "DHCP (Dynamic Host Configuration Protocol)",
      "FTP (File transfer protocol)"
    ],
    "answer": "DHCP (Dynamic Host Configuration Protocol)"
  },
  {
    "id": 554,
    "question": "Hospitals, banks, and supermarkets are all linked using which network type?",
    "options": [
      "WAN",
      "LAN",
      "BUS",
      "WiFi"
    ],
    "answer": "WAN"
  },
  {
    "id": 555,
    "question": "Hofstede’s framework is regarding",
    "options": [
      "Personality",
      "Culture",
      "Perception",
      "Stereotype"
    ],
    "answer": "Culture"
  },
  {
    "id": 556,
    "question": "Hit-rate of the processor is the memory fraction, found in",
    "options": [
      "DRAM",
      "SRAM",
      "Magnetic disk",
      "Cache"
    ],
    "answer": "Cache"
  },
  {
    "id": 557,
    "question": "Hiding internal data from the outside world and accessing it only through publicly exposed methods is known as data",
    "options": [
      "inheritance",
      "polymorphism",
      "abstraction",
      "encapsulation"
    ],
    "answer": "encapsulation"
  },
  {
    "id": 558,
    "question": "Harsha Electronics has used several methods to create an ethical culture that both employees and customers appreciate. What is the most effective way for the firm to sustain its ethical culture?",
    "options": [
      "asking job candidates ethical questions",
      "implementing an ethics audit regularly",
      "publishing the firm's code of ethics periodically",
      "ensuring that new employees receive ethics training"
    ],
    "answer": "implementing an ethics audit regularly"
  },
  {
    "id": 559,
    "question": "Hardware, Personnel ,Facility are not the factors of Cost",
    "options": [
      "True",
      "False"
    ],
    "answer": "False"
  },
  {
    "id": 560,
    "question": "Hardware unavailability risk is the _________ type of risk",
    "options": [
      "Project",
      "Product",
      "Business",
      "None in the list"
    ],
    "answer": "Project"
  },
  {
    "id": 561,
    "question": "Hardware solution to the critical section problem using test&set while (true) { while ( TestAndSet (&lock )); /* do nothing // critical section lock = FALSE; // remainder section }",
    "options": [
      "Implements mutual exclusion and progress",
      "Implements only mutual exclusion",
      "Implements progress and bounded waiting.",
      "Implements mutual exclusion but not progress or bounded waiting"
    ],
    "answer": "Implements mutual exclusion but not progress or bounded waiting"
  },
  {
    "id": 562,
    "question": "Hardware solution to the critical section problem using swap: while(true) {key = TRUE; while(key==TRUE) Swap(&lock,&key); //critical sectionlock = FALSE; //remainder section}",
    "options": [
      "Implements mutual exclusion and progress",
      "Implements only mutual exclusion",
      "Implements progress and bounded waiting.",
      "Implements mutual exclusion but not bounded waiting."
    ],
    "answer": "Implements mutual exclusion but not bounded waiting."
  },
  {
    "id": 563,
    "question": "Guess the output. #include<stdio.h> #include<string.h> main(){ char Be[16]=\"Positive \"; char Positive[16]=\"Be \"; strcat(Be,Positive); printf(\"%s\",Be ); }",
    "options": [
      "Be",
      "Positive",
      "Positive Be",
      "Be Positive"
    ],
    "answer": "Positive Be"
  },
  {
    "id": 564,
    "question": "Guess the output #include<stdio.h> main(){ int value=100; myFunction(value); } void myFunction(int parameter) { parameter=200; printf(\"%d\", parameter); }",
    "options": [
      "100",
      "200",
      "100 200",
      "Error"
    ],
    "answer": "200"
  },
  {
    "id": 565,
    "question": "Guess the output #include<stdio.h> main(){ int a=100; int b=200; int *c[1][2][3]={&a}; c[1][1][1]=&b; printf(\"%d\",*c[1][1][1]); }",
    "options": [
      "200",
      "100",
      "Address of variable a",
      "Address of variable b"
    ],
    "answer": "200"
  },
  {
    "id": 566,
    "question": "Guess the output of the following #include<stdio.h> main(){ typedef char arr[4]; arr arr1[4]; printf(\"%d\",sizeof(arr1)); }",
    "options": [
      "Error",
      "4",
      "44",
      "16"
    ],
    "answer": "16"
  },
  {
    "id": 567,
    "question": "Guess the output of the below code #include<stdio.h> int myFunction1(int parameter) { return parameter; } int myFunction2(int *parameter) { return ++*parameter; } main(){ int value=100; printf(\"%d %d\", myFunction1(value), myFunction2(&value)); }",
    "options": [
      "100 100",
      "101 100",
      "100 101",
      "101 101"
    ],
    "answer": "101 101"
  },
  {
    "id": 568,
    "question": "Greetwell Technologies wants to gain the confidence of employees and customers by developing a strong ethical culture. Which of the following methods would be the best way for the firm's HR department to accomplish this goal?",
    "options": [
      "placing the code of ethics on the firm's intranet",
      "posting the code of ethics in the breakroom",
      "providing ethics training to employees",
      "having employees sign ethics contracts"
    ],
    "answer": "providing ethics training to employees"
  },
  {
    "id": 569,
    "question": "Given grammar G as follows: G { S --> aB | B --> Sb } This grammar is",
    "options": [
      "regular and context-free",
      "not regular and not context-free",
      "regular, but not context-free",
      "context-free, but not regular"
    ],
    "answer": "context-free, but not regular"
  },
  {
    "id": 570,
    "question": "Given five memory partitions of 200Kb, 500Kb, 200Kb, 300Kb, 600Kb (in order), which algorithm would be able to successfully place the following processes of 212 Kb, 417 Kb, 112 Kb, and 126 Kb?",
    "options": [
      "Best Fit",
      "Worst Fit",
      "First Fit",
      "All the given choices."
    ],
    "answer": "First Fit"
  },
  {
    "id": 571,
    "question": "Given five memory partitions of 100Kb, 500Kb, 200Kb, 300Kb, 600Kb (in order), which algorithm would be able to successfully place the following processes of 212 Kb, 417 Kb, 112 Kb, and 426 Kb?",
    "options": [
      "Best Fit",
      "Worst Fit",
      "First Fit",
      "All the given choices."
    ],
    "answer": "First Fit"
  },
  {
    "id": 572,
    "question": "Given an arbitrary non-deterministic finite automaton (NFA). with N states, the maximum number of states in an equivalent minimized DFA is at least.",
    "options": [
      "N",
      "N!",
      "2^N",
      "N^2"
    ],
    "answer": "2^N"
  },
  {
    "id": 573,
    "question": "Generic functions perform ____ operation for all the versions of a function except the data type differs",
    "options": [
      "Different",
      "Same",
      "Similar",
      "None"
    ],
    "answer": "Same"
  },
  {
    "id": 574,
    "question": "Frustration-Regression is related to",
    "options": [
      "Maslow’s Hierarchy",
      "ERG theory",
      "Justice Theory",
      "Equity theory"
    ],
    "answer": "ERG theory"
  },
  {
    "id": 575,
    "question": "Frames from one LAN can be transmitted to another LAN via the device",
    "options": [
      "Router",
      "Bridge",
      "Repeater",
      "Modem"
    ],
    "answer": "Bridge"
  },
  {
    "id": 576,
    "question": "For every pair of regular expressions r and s, the languages denoted by r(sr)* and (rs)*r are the same.",
    "options": [
      "True",
      "False",
      "Can't determined",
      "Neither True and Nor False"
    ],
    "answer": "True"
  },
  {
    "id": 577,
    "question": "For every ....grammar there is equivalent grammar for the same language which is .....",
    "options": [
      "ambiguous grammar, un ambiguous grammar",
      "un ambiguous grammar, ambiguous grammar",
      "ambiguous grammar, ambiguous grammar",
      "un ambiguous grammar, un ambiguous grammar"
    ],
    "answer": "ambiguous grammar, un ambiguous grammar"
  },
  {
    "id": 578,
    "question": "For declaring function templates, __ arguments in template declaration must be generic (class T).",
    "options": [
      "all",
      "Any one",
      "One",
      "none"
    ],
    "answer": "all"
  },
  {
    "id": 579,
    "question": "For declaring class templates, ___ of the arguments in template declaration may be non-generic ordinary data types.",
    "options": [
      "Some",
      "all",
      "None of the argument",
      "One"
    ],
    "answer": "Some"
  },
  {
    "id": 580,
    "question": "For any two functions g(n) and f(n), f(n) = Θ(g(n)) iff",
    "options": [
      "f(n) = O(g(n)) and f(n) = Ω(g(n))",
      "f(n) > O(g(n)) and f(n) = Ω(g(n))",
      "f(n) = O(g(n)) and f(n) >=Ω(g(n))",
      "None of these"
    ],
    "answer": "f(n) = O(g(n)) and f(n) = Ω(g(n))"
  },
  {
    "id": 581,
    "question": "Finite automata recognizes --------grammars",
    "options": [
      "type-3",
      "type-1",
      "type-2",
      "type-0"
    ],
    "answer": "type-3"
  },
  {
    "id": 582,
    "question": "Finite automata --------------- memory",
    "options": [
      "Infinite",
      "No auxiliary memory",
      "Finite",
      "auxiliary memory"
    ],
    "answer": "No auxiliary memory"
  },
  {
    "id": 583,
    "question": "Find the shortest path from the root to a given node v. Which algorithm would one use to find this shortest path?",
    "options": [
      "DFS",
      "BFS",
      "Either BFS or DFS",
      "The statement is incomplete"
    ],
    "answer": "BFS"
  },
  {
    "id": 584,
    "question": "Find the correct syntax of throw statement:",
    "options": [
      "throw (exception);",
      "throw exception;",
      "throw;",
      "All of the above"
    ],
    "answer": "All of the above"
  },
  {
    "id": 585,
    "question": "Find the correct statement(s) (i). A try block can throw an exception using “throw” (ii). A catch block always catch and handle the exception and never ever throws the exception. (iii). A catch also sometimes throws the exception using “throw”",
    "options": [
      "only (i)",
      "only (i) and (iii)",
      "only (ii) and (iii)",
      "(i), (ii) and (iii)"
    ],
    "answer": "only (i) and (iii)"
  },
  {
    "id": 586,
    "question": "Find out the true statement(s) from the following: (i). Virtual constructors are not at all possible. (ii). It is possible to have virtual destructor without virtual constructors. (iii). Both virtual constructors and virtual destructors are not possible in C++. (iv). Only Virtual constructors are allowed; but not virtual destructors.",
    "options": [
      "(i) and (ii) only",
      "(i) only",
      "(iii) only",
      "(iv) only"
    ],
    "answer": "(i) and (ii) only"
  },
  {
    "id": 587,
    "question": "Find out the incorrect statement(s). (i). There are only predefined exception handling mechanism available in C++ (ii). User-defined exception handling is possible in C++ (iii). Both (i) and (ii) is possible in C++",
    "options": [
      "(i) and (ii) only",
      "(i) only",
      "(iii) only",
      "None of the above"
    ],
    "answer": "(i) only"
  },
  {
    "id": 588,
    "question": "Find out the incorrect statement(s) (i). pure virtual functions should be defined in derived class. (ii). virtual function concept can be implemented even without inheritance. (iii). the keyword “virtual” prevents compile-time binding",
    "options": [
      "(ii) and (iii) only",
      "(i) and (iii) only",
      "(iii) only",
      "(ii) only"
    ],
    "answer": "(ii) only"
  },
  {
    "id": 589,
    "question": "F.W. Taylor has done the following studies for improving the production process:",
    "options": [
      "Time Study, Fatigue Study and Fatal Study.",
      "Time Study, Motion Study and Fatal Study.",
      "Time Study, Motion Study and Fatigue Study.",
      "Time Study, Motivation Study and Fatigue Study."
    ],
    "answer": "Time Study, Motion Study and Fatigue Study."
  },
  {
    "id": 590,
    "question": "Exhaustive testing is",
    "options": [
      "always possible",
      "practically possible",
      "impractical but possible",
      "impractical and impossible"
    ],
    "answer": "impractical and impossible"
  },
  {
    "id": 591,
    "question": "Executives and managers at ABC Enterprises actively encourage a strong ethical culture at the firm. Which of the following would be the most likely result of the firm's actions?",
    "options": [
      "increased employee interest in development programs",
      "frequent use of human resource information systems",
      "changes in corporate communication methods",
      "improvements in organizational performance"
    ],
    "answer": "improvements in organizational performance"
  },
  {
    "id": 592,
    "question": "Exceptions are",
    "options": [
      "Syntax error",
      "Logic error",
      "Compile time error",
      "Run time error"
    ],
    "answer": "Run time error"
  },
  {
    "id": 593,
    "question": "Exception handling is the correlation between",
    "options": [
      "try and catch block",
      "retry and recatch block",
      "both (a) and (b)",
      "Neither (a) nor (b)"
    ],
    "answer": "try and catch block"
  },
  {
    "id": 594,
    "question": "Example for Associative type of memory",
    "options": [
      "Main Memory",
      "Cache Memory",
      "Magnetic",
      "Optical"
    ],
    "answer": "Cache Memory"
  },
  {
    "id": 595,
    "question": "Every weak entity set can be converted into a strong entity set by",
    "options": [
      "Using generalization",
      "Adding appropriate attributes",
      "Using aggregation",
      "None of the above"
    ],
    "answer": "Adding appropriate attributes"
  },
  {
    "id": 596,
    "question": "Every context free language is context sensitive language",
    "options": [
      "True",
      "False",
      "nothing",
      "True and False"
    ],
    "answer": "True"
  },
  {
    "id": 597,
    "question": "Event based modelling in UML",
    "options": [
      "Activity Diagram",
      "State Diagram",
      "Class Diagram",
      "Object Diagram"
    ],
    "answer": "State Diagram"
  },
  {
    "id": 598,
    "question": "Evaluate the following prefix expression * - + 4 3 5 / + 2 4 3",
    "options": [
      "8",
      "4",
      "2",
      "None"
    ],
    "answer": "4"
  },
  {
    "id": 599,
    "question": "Evaluate the following postfix expression 1 4 1 8 6 / 3 + + 5 / +",
    "options": [
      "2",
      "8",
      "3",
      "None"
    ],
    "answer": "2"
  },
  {
    "id": 600,
    "question": "Ethics training should ________.",
    "options": [
      "start at the bottom and move upward through all organizational levels.",
      "focus only on the employees who deal with the public on a day-to-day basis.",
      "begin at the top and continue through all levels of the organization.",
      "start with mid-level management and move laterally through the organization."
    ],
    "answer": "begin at the top and continue through all levels of the organization."
  },
  // (Append these to the 'questions' array in your questions.js file, after question 600)
  {
    "id": 601,
    "question": "Esprit de corps refers to",
    "options": [
      "Team work and cooperation",
      "A Single Boss",
      "Flexibility",
      "None of these"
    ],
    "answer": "Team work and cooperation"
  },
  {
    "id": 602,
    "question": "Environmental protection can best be done by the efforts of",
    "options": [
      "business people.",
      "the scientists.",
      "the government.",
      "all the people."
    ],
    "answer": "all the people."
  },
  {
    "id": 603,
    "question": "Ensuring processes request resources only if all resources are available in the system, violates the _______________ condition of deadlock",
    "options": [
      "Mutual exclusion",
      "Hold and Wait",
      "Circular Wait",
      "No Preemption"
    ],
    "answer": "Hold and Wait"
  },
  {
    "id": 604,
    "question": "End-to-end connectivity is provided from host-to-host in:",
    "options": [
      "Network layer",
      "Session layer",
      "Transport layer",
      "Datalink layer"
    ],
    "answer": "Transport layer"
  },
  {
    "id": 605,
    "question": "Empty stack top pointer indicates to",
    "options": [
      "Last memory location",
      "Set to 1",
      "Set to -1",
      "Beginning of memory location"
    ],
    "answer": "Set to -1"
  },
  {
    "id": 606,
    "question": "Effort is mostly used to estimate",
    "options": [
      "Project resource costs",
      "Project duration",
      "Remaining calendar time",
      "Contingencies"
    ],
    "answer": "Project resource costs"
  },
  {
    "id": 607,
    "question": "Effort Adjustment Factor is the product of effort multipliers of all the_________attributes",
    "options": [
      "11",
      "12",
      "14",
      "15"
    ],
    "answer": "15"
  },
  {
    "id": 608,
    "question": "Effective access time is directly proportional to",
    "options": [
      "page read/write time",
      "hit ratio",
      "memory access time",
      "page-fault rate"
    ],
    "answer": "page-fault rate"
  },
  {
    "id": 609,
    "question": "Early research on leadership traits ________.",
    "options": [
      "sought to prove that charisma was an essential trait of leadership",
      "focused on behavioural traits rather than physical traits of a leader",
      "found consistent and unique traits that would apply to all effective leaders",
      "focused on characteristics that might differentiate leaders from non-leaders"
    ],
    "answer": "focused on characteristics that might differentiate leaders from non-leaders"
  },
  {
    "id": 610,
    "question": "EA stands for______.",
    "options": [
      "Effective add",
      "Effective absolute",
      "Effective address",
      "End address"
    ],
    "answer": "Effective address"
  },
  {
    "id": 611,
    "question": "Dynamic growing stack finds the solution with the help of",
    "options": [
      "Array implementation",
      "Pointer implementation",
      "Linked list implementation",
      "All of these"
    ],
    "answer": "Linked list implementation"
  },
  {
    "id": 612,
    "question": "During the ______ design phase of database design, the properties of data is given importance, rather than its storage details",
    "options": [
      "conceptual",
      "logical",
      "physical",
      "actual"
    ],
    "answer": "logical"
  },
  {
    "id": 613,
    "question": "DSDM stands for",
    "options": [
      "Dynamic systems development method",
      "Dynamic solutions development method",
      "Database systems development method",
      "Database solutions development method"
    ],
    "answer": "Dynamic systems development method"
  },
  {
    "id": 614,
    "question": "Draw up plans to avoid or minimise the effects of the risk is called",
    "options": [
      "Risk identification",
      "Risk analysis",
      "Risk planning",
      "Risk monitoring"
    ],
    "answer": "Risk planning"
  },
  {
    "id": 615,
    "question": "Double Diamond representation in ER diagram",
    "options": [
      "weak Entity Set",
      "Total Participation",
      "Strong Entity Set",
      "weak Relationship Set"
    ],
    "answer": "weak Relationship Set"
  },
  {
    "id": 616,
    "question": "Does an algorithm solve the all-pair shortest path problem?",
    "options": [
      "Floyd’s algorithm",
      "Prim’s algorithm",
      "Dijkstra’s algorithm",
      "Warshall’s algorithm"
    ],
    "answer": "Floyd’s algorithm"
  },
  {
    "id": 617,
    "question": "Disk scheduling policies results in minimum amount of head movement.",
    "options": [
      "FCFS",
      "Circular SCAN",
      "Elevator",
      "SSTF"
    ],
    "answer": "SSTF"
  },
  {
    "id": 618,
    "question": "Disk Response Time is...",
    "options": [
      "the average of time spent by a request waiting to perform its I/O operation.",
      "the time taken to locate the disk arm to a specified track where the data is to be read or write.",
      "the time taken by the desired sector of disk to rotate into a position so that it can access the read/write heads.",
      "the time taken to complete the execution."
    ],
    "answer": "the average of time spent by a request waiting to perform its I/O operation."
  },
  {
    "id": 619,
    "question": "Dialogue control and Token management are responsibility of which OSI Layer",
    "options": [
      "session layer",
      "network layer",
      "transport layer",
      "data link layer"
    ],
    "answer": "session layer"
  },
  {
    "id": 620,
    "question": "Design techniques which one is used to finding all the pairs of shortest distances in a graph?",
    "options": [
      "Backtracking",
      "Greedy",
      "Dynamic programming",
      "Divide and Conquer"
    ],
    "answer": "Dynamic programming"
  },
  {
    "id": 621,
    "question": "Departmentalization is a process in which",
    "options": [
      "Tasks are grouped into jobs",
      "Jobs are grouped into effective work groups",
      "Work groups are grouped into identifiable segments",
      "All the other answers are correct"
    ],
    "answer": "Work groups are grouped into identifiable segments"
  },
  {
    "id": 622,
    "question": "Definition of a language L with alphabet {a} is given as following. L= { a^nk | k > 0, and n is a positive integer constant} What is the minimum number of states needed in a DFA to recognize L",
    "options": [
      "2^n+1",
      "n+1",
      "k+1",
      "2^k+1"
    ],
    "answer": "n+1"
  },
  {
    "id": 623,
    "question": "Decision table technique is sometimes also referred to as a ________ table.",
    "options": [
      "Cause-effect",
      "Redundant",
      "Extreme",
      "Isolated"
    ],
    "answer": "Cause-effect"
  },
  {
    "id": 624,
    "question": "Databases overall structure is maintained in a file called",
    "options": [
      "Redolog File",
      "Data file",
      "Control file",
      "All"
    ],
    "answer": "Control file"
  },
  {
    "id": 625,
    "question": "Data on someone's racial or ethnic heritage, political, philosophical, or religious beliefs, union affiliation, and health or sex life and sexual orientation, either directly or indirectly. What kind of personal information is this?",
    "options": [
      "Direct personal data",
      "Indirect personal data",
      "Pseudonymized data",
      "Special category personal data"
    ],
    "answer": "Special category personal data"
  },
  {
    "id": 626,
    "question": "CPU fetches the instruction from memory according to the value of",
    "options": [
      "program counter",
      "status register",
      "instruction register",
      "program status word"
    ],
    "answer": "program counter"
  },
  {
    "id": 627,
    "question": "Correct relationship",
    "options": [
      "O(log n) < O(n) < O(n* log n) < O(2^n ) < O(n^2 )",
      "O(n) < O(log n) < O(n* log n) < O(2^n ) < O(n^2 )",
      "O(n) < O(log n) < O(n* log n) < O(n^2 ) < O(2^n )",
      "O(log n) < O(n) < O(n* log n) < O(n^2 ) < O(2^n )"
    ],
    "answer": "O(log n) < O(n) < O(n* log n) < O(n^2 ) < O(2^n )"
  },
  {
    "id": 628,
    "question": "Control that monitors ongoing employee activities during their progress, to ensure they are consistent with quality standards, is called as",
    "options": [
      "Feed Forward Control",
      "Concurrent Control",
      "Feedback Control",
      "Control measure"
    ],
    "answer": "Concurrent Control"
  },
  {
    "id": 629,
    "question": "Control that attempts to identify and prevent deviations before they occur is called as",
    "options": [
      "Feed Forward Control",
      "Concurrent Control",
      "Feedback Control",
      "Control measure"
    ],
    "answer": "Feed Forward Control"
  },
  {
    "id": 630,
    "question": "Contingency theories of leadership are based on the belief that:",
    "options": [
      "there is no single style of leadership appropriate to all situations.",
      "there is a single style of leadership appropriate to all managers.",
      "there is a single style of leadership appropriate to all situations.",
      "None of the other answers is correct."
    ],
    "answer": "there is no single style of leadership appropriate to all situations."
  },
  {
    "id": 631,
    "question": "Contemporary organizations are redesigning their ethics programs to facilitate a broader, more consistent process that ________.",
    "options": [
      "embraces chaos and forges new paradigms.",
      "incorporates the analysis of outcomes and continual improvement .",
      "uses outcome analysis to focus on short-term goals.",
      "relies on expediency and situational management."
    ],
    "answer": "incorporates the analysis of outcomes and continual improvement ."
  },
  {
    "id": 632,
    "question": "Consider the regular language L = (111 + 11111)*. The minimum number of states in any DFA accepting the language is",
    "options": [
      "3",
      "5",
      "8",
      "9"
    ],
    "answer": "9"
  },
  {
    "id": 633,
    "question": "Consider the followings right-linear grammar G = (N,T,P,S) N={S} P{ S-->aS|aA A-->bA|b} T={a,b} Which of the following regular expression denotes L(G)?",
    "options": [
      "a*b*",
      "aa*bb*",
      "a(ab)*b",
      "(a+b)*"
    ],
    "answer": "aa*bb*"
  },
  {
    "id": 634,
    "question": "Consider the following languageL={a^nb^n| n>=1} L is",
    "options": [
      "regular",
      "CFL but not regular",
      "type 0 language but not type 1",
      "CSL but not CFL"
    ],
    "answer": "CFL but not regular"
  },
  {
    "id": 635,
    "question": "Consider the following language L={a^nb^mc^pd^q | n,m, p,q>=1} L is",
    "options": [
      "CFL but not regular",
      "CSL but not CFL",
      "type 0 language but not type 1",
      "regular"
    ],
    "answer": "regular"
  },
  {
    "id": 636,
    "question": "Consider the following DFA. How many states does the DFA has after minimization?",
    "options": [
      "5",
      "4",
      "3",
      "2"
    ],
    "answer": "2"
  },
  {
    "id": 637,
    "question": "Consider the following statement: virtual void show() = 0; It is called as",
    "options": [
      "Virtual function",
      "Pure virtual function",
      "Syntax Error",
      "Only variable can be equated to Zero; not functions- So it is not supported by C++."
    ],
    "answer": "Pure virtual function"
  },
  {
    "id": 638,
    "question": "Consider that a page is 1KB in size and a process is 9485 bytes in length. What would be the number of valid entries in the corresponding page table?",
    "options": [
      "8",
      "10",
      "9",
      "11"
    ],
    "answer": "10"
  },
  {
    "id": 639,
    "question": "Consider pumping lemma of regular language, here w= pqr and q refers to the middle part and |q|>0.What do we call the process of repeating q 0 or more times before checking that they still belong to the language L or not?",
    "options": [
      "Pumping",
      "Generating",
      "Creating",
      "Producing"
    ],
    "answer": "Pumping"
  },
  {
    "id": 640,
    "question": "Consider an operating system capable of loading and executing a single sequential user process at a time. The disk head scheduling algorithm used is First Come First Served (FCFS). If FCFS is replaced by Shortest Seek Time First (SSTF), claimed by the vendor to give 50% better benchmark results, what is the expected improvement in the I/O performance of user programs?",
    "options": [
      "50%",
      "40%",
      "25%",
      "0%"
    ],
    "answer": "0%"
  },
  {
    "id": 641,
    "question": "CONCERT and CONDUCTOR are entity sets... CONDUCTS is a one-to-many relationship from CONDUCTOR to CONCERT. While reducing the ERD to schemas, what would be the schema for CONDUCTS?",
    "options": [
      "CONDUCTS(coid, soloid)",
      "CONDUCTS(coid, location, time, date, soloid, fname, lname, phone)",
      "CONDUCTS(soloid, coid)",
      "None of the above"
    ],
    "answer": "None of the above"
  },
  {
    "id": 642,
    "question": "Components of attitude doesn’t include",
    "options": [
      "Cognitive Component",
      "Behavioral component",
      "Affective component",
      "Personality Component"
    ],
    "answer": "Personality Component"
  },
  {
    "id": 643,
    "question": "Comparison of two results and to make sure its accuracy is a process of",
    "options": [
      "Waterfall model",
      "Big Bang model",
      "V-model",
      "Spiral model"
    ],
    "answer": "V-model"
  },
  {
    "id": 644,
    "question": "Company (cid, name, department). Here, the ‘name’ is a --------------------------- and ‘Company’ is a ----------------------",
    "options": [
      "Relation, Attribute",
      "Attribute, Relation",
      "Tuple, Relation",
      "Tuple, Attribute"
    ],
    "answer": "Attribute, Relation"
  },
  {
    "id": 645,
    "question": "Compaction is",
    "options": [
      "a technique for overcoming internal fragmentation",
      "a paging technique",
      "a technique for overcoming external fragmentation",
      "a technique for overcoming fatal error"
    ],
    "answer": "a technique for overcoming external fragmentation"
  },
  {
    "id": 646,
    "question": "Communication between a computer and a keyboard involves ______________ transmission.",
    "options": [
      "Automatic",
      "Half-duplex",
      "Full-duplex",
      "Simplex"
    ],
    "answer": "Simplex"
  },
  {
    "id": 647,
    "question": "Class contains....................",
    "options": [
      "Members",
      "data types",
      "variables",
      "all of them"
    ],
    "answer": "Members"
  },
  {
    "id": 648,
    "question": "Choose the software quality activites from the below",
    "options": [
      "Prepares an SQA plan for a project",
      "Records any noncompliance and reports to senior management",
      "Participates in the development of the project's software process description",
      "All the options"
    ],
    "answer": "All the options"
  },
  {
    "id": 649,
    "question": "Choose the purpose of reviews from the below",
    "options": [
      "Serve as a filter for the software process",
      "Uncover errors that can then be removed",
      "Catch large classes of errors that escape the originator more than other practitioners",
      "All the options"
    ],
    "answer": "All the options"
  },
  {
    "id": 650,
    "question": "Choose an internal software quality from given below:",
    "options": [
      "scalability",
      "usability",
      "reusability",
      "reliability"
    ],
    "answer": "reusability"
  },
  {
    "id": 651,
    "question": "Charles Babbage was a professor of __________ subject",
    "options": [
      "Computer Science",
      "Mathematics",
      "Management",
      "None of these"
    ],
    "answer": "Mathematics"
  },
  {
    "id": 652,
    "question": "Change control procedures are developed by organizations to ensure that ________",
    "options": [
      "All changes are authorized, tested, and recorded.",
      "Changes are controlled by the Policy Control Board (PCB).",
      "All changes are requested, scheduled, and completed on time.",
      "Management is advised of changes made to systems."
    ],
    "answer": "All changes are authorized, tested, and recorded."
  },
  {
    "id": 653,
    "question": "Centralisation",
    "options": [
      "Increasing the importance of subordinate role",
      "Decreasing the importance of subordinate role",
      "Retention of decision-making authority",
      "None"
    ],
    "answer": "Retention of decision-making authority"
  },
  {
    "id": 654,
    "question": "Build a new product will cost 55,000 with expected sales of 55,000 per unit (unit price = 4)",
    "options": [
      "1,65,000",
      "1,68,750",
      "1,78,750",
      "1,75,750"
    ],
    "answer": "1,65,000"
  },
  {
    "id": 655,
    "question": "Boehm divided the historical project data into following types of projects",
    "options": [
      "Organic",
      "Semi-detached",
      "Embedded",
      "All of the above"
    ],
    "answer": "All of the above"
  },
  {
    "id": 656,
    "question": "Blocks to be placed at the upper level of the hierarchy scheme used, is from direct memory to",
    "options": [
      "Set definitive",
      "Block associative",
      "Fully associative",
      "Set associative"
    ],
    "answer": "Set associative"
  },
  {
    "id": 657,
    "question": "Because it is difficult to find one single person with all the needed qualities, Taylor suggested the appointment of a specialist through this technique of scientific management. Identify the technique.",
    "options": [
      "Standardization and simplification of work",
      "Method study",
      "Functional foremanship",
      "Motion study"
    ],
    "answer": "Functional foremanship"
  },
  {
    "id": 658,
    "question": "baa*c denotes the set",
    "options": [
      "{b^na^mc^p|n,m,p>=1}",
      "{ba^nc|n>=0}",
      "{ba^nc|n>=1}",
      "{w|w is a string of a,b,c}"
    ],
    "answer": "{ba^nc|n>=1}"
  },
  {
    "id": 659,
    "question": "Authority always flows from",
    "options": [
      "Superior to subordinate",
      "Subordinate to superior",
      "Both Superior to subordinate and Subordinate to superior",
      "None of the other answers is correct"
    ],
    "answer": "Superior to subordinate"
  },
  {
    "id": 660,
    "question": "Attributes, relations and map entities in oracle is represented by",
    "options": [
      "Conceptual schema",
      "Physical schema",
      "Logical schema",
      "All of above"
    ],
    "answer": "Logical schema"
  },
  {
    "id": 661,
    "question": "Attack against availability is ....",
    "options": [
      "Trojan Horse",
      "Malware",
      "VIRUS",
      "DoS"
    ],
    "answer": "DoS"
  },
  {
    "id": 662,
    "question": "Assuming that memory is byte-addressable, if a frame size is 2KB, what is the number of bits required to represent the page offset?",
    "options": [
      "12",
      "10",
      "9",
      "11"
    ],
    "answer": "11"
  },
  {
    "id": 663,
    "question": "Assume that a process has 3 user threads assigned to one kernel thread. Thread 1 is blocked, Tread2 is running and thread 3 is ready. What will be the state of the process?",
    "options": [
      "Running",
      "Ready",
      "Terminated",
      "Blocked"
    ],
    "answer": "Blocked"
  },
  {
    "id": 664,
    "question": "Assume page size as 2KB and a process is 72750 bytes in length. What is the size of the internal fragment?",
    "options": [
      "878",
      "1078",
      "978",
      "1178"
    ],
    "answer": "978"
  },
  {
    "id": 665,
    "question": "Assume we have an object called Employee. Which of the following best represent this object's identity?",
    "options": [
      "Name",
      "Staff ID",
      "Date of Birth",
      "Address"
    ],
    "answer": "Staff ID"
  },
  {
    "id": 666,
    "question": "Assess the likelihood and consequences of these risk is called",
    "options": [
      "Risk identification",
      "Risk analysis",
      "Risk planning",
      "Risk monitoring"
    ],
    "answer": "Risk analysis"
  },
  {
    "id": 667,
    "question": "Assertion (A): The virtual function supports dynamic-binding Reason (R): The inheritance concept helps in achieving it.",
    "options": [
      "A is correct; R is the correct explanation for A",
      "A and R are correct; But R is not the actual reason for A",
      "A is incorrect; R is correct",
      "Both A and R are incorrect"
    ],
    "answer": "A is correct; R is the correct explanation for A"
  },
  {
    "id": 668,
    "question": "As a professional, what should be your primary source of ethical guidance in the workplace?",
    "options": [
      "corporate HR policies",
      "corporate code of ethics",
      "corporate mission statement",
      "corporate procedures"
    ],
    "answer": "corporate code of ethics"
  },
  {
    "id": 669,
    "question": "Arunima, an HR manager, has been given the task of strengthening the ethical culture at her firm. Which of the following activities would be most beneficial?",
    "options": [
      "e-mailing ethics codes to all employees",
      "posting ethics code posters in the hallways",
      "writing a memo about ethics to top executives",
      "discussing ethics during performance appraisals"
    ],
    "answer": "discussing ethics during performance appraisals"
  },
  {
    "id": 670,
    "question": "Arrange the 32-bit number 0x0A0B0C0D in big endian order starting from address 1000h",
    "options": [
      "1000h-0D, 1001h-0C, 1002h-0B, 1003–0A",
      "1000h-0A, 1001h-0B, 1002h-0C, 1003-0D",
      "1000h-0B, 1001h-0A, 1002h-0D, 1003h-0C",
      "1000h–0C, 1001h-0B, 1002h-0D, 1003h-0A"
    ],
    "answer": "1000h-0A, 1001h-0B, 1002h-0C, 1003-0D"
  },
  {
    "id": 671,
    "question": "ARP (Address Resolution Protocol) is....",
    "options": [
      "a TCP/IP protocol used to dynamically bind a high level IP Address to a low-level physical hardware address",
      "a TCP/IP high level protocol for transferring files from one machine to another",
      "a protocol used to monitor computers",
      "a protocol that handles error and control messages"
    ],
    "answer": "a TCP/IP protocol used to dynamically bind a high level IP Address to a low-level physical hardware address"
  },
  {
    "id": 672,
    "question": "Analysis the probabilty and effects for the risk 'The size of the software is underestimated'",
    "options": [
      "High and Serious",
      "Moderate and Serious",
      "Moderate and Tolerable",
      "High and Tolerable"
    ],
    "answer": "High and Serious"
  },
  {
    "id": 673,
    "question": "Analysis the probabilty and effects for the risk 'HighCatastrophicKey staff are ill at critical times in the project'",
    "options": [
      "High and Serious",
      "Moderate and Serious",
      "Moderate and Tolerable",
      "High and Catastrophic"
    ],
    "answer": "High and Catastrophic"
  },
  {
    "id": 674,
    "question": "An over-generalized, oversimplified, and self-perpetuating belief about people’s personal characteristics is known as",
    "options": [
      "Perception",
      "Stereotype",
      "Attribution",
      "Personality"
    ],
    "answer": "Stereotype"
  },
  {
    "id": 675,
    "question": "An organisation establishes relationships among",
    "options": [
      "People, work, and resources",
      "Customer, work, and resources",
      "People, work, and management",
      "Customer, work, and management"
    ],
    "answer": "People, work, and resources"
  },
  {
    "id": 676,
    "question": "An industry having low growth rate ,but possess high relative market share. In BCG matrix, its placed in:",
    "options": [
      "Stars",
      "Question Marks",
      "Cash cows",
      "Dogs"
    ],
    "answer": "Cash cows"
  },
  {
    "id": 677,
    "question": "An individuals’ ability to cooperate with other members of the organization and work effectively in teams is called as",
    "options": [
      "Technical skills",
      "Human skills",
      "Conceptual skills",
      "Employee skills"
    ],
    "answer": "Human skills"
  },
  {
    "id": 678,
    "question": "An implied understanding of mutual contributions between a person and his or her organization, which is not a written document, is called as",
    "options": [
      "Psychological contract",
      "Legal contract",
      "Illegal contact",
      "Unwritten contract"
    ],
    "answer": "Psychological contract"
  },
  {
    "id": 679,
    "question": "An example for external premises in planning is",
    "options": [
      "Money",
      "Materials",
      "Machines",
      "Competitors strategy"
    ],
    "answer": "Competitors strategy"
  },
  {
    "id": 680,
    "question": "An evaluative statements that is either favorable or unfavorable about objects, people, or events is called",
    "options": [
      "Attitude",
      "Stereotype",
      "Attribution",
      "Personality"
    ],
    "answer": "Attitude"
  },
  {
    "id": 681,
    "question": "An acyclic graph, what is the maximum number of edge.",
    "options": [
      "n",
      "n+1",
      "2n-1",
      "n-1"
    ],
    "answer": "n-1"
  },
  {
    "id": 682,
    "question": "Amount of data utilized by the stack, which of the content holds",
    "options": [
      "not a fixed size",
      "the amount of the data fluctuates",
      "depends on stack's lifetime",
      "all of these"
    ],
    "answer": "all of these"
  },
  {
    "id": 683,
    "question": "Among the Mintzberg’s management roles, figurehead comes under",
    "options": [
      "Interpersonal roles",
      "Informational roles",
      "Decision roles",
      "Leader roles"
    ],
    "answer": "Interpersonal roles"
  },
  {
    "id": 684,
    "question": "All of the following are elements of planning EXCEPT:",
    "options": [
      "Developing Plans",
      "Monitoring Performance",
      "Establishing Strategies",
      "Coordinate Activities"
    ],
    "answer": "Monitoring Performance"
  },
  {
    "id": 685,
    "question": "After a study of the work processes on a project, a quality audit team reports to the project manager that irrelevant quality standards were being used by the project, which might lead to rework. What was the objective of the project manager in initiating this study?",
    "options": [
      "Quality control",
      "Quality assurance",
      "Checking adherence to processes",
      "None in the list"
    ],
    "answer": "Quality assurance"
  },
  {
    "id": 686,
    "question": "Administrative Management is related to",
    "options": [
      "Elton Mayo",
      "Henry Fayol",
      "F W Taylor",
      "Max Weber"
    ],
    "answer": "Henry Fayol"
  },
  {
    "id": 687,
    "question": "Aditi has a reputation of being fair, helpful, and understanding. She even helped her subordinate overcome a personal crisis. Which one of the following dimensions of leadership is Aditi displaying here?",
    "options": [
      "consideration",
      "initiating structure",
      "employee orientation",
      "task orientation"
    ],
    "answer": "consideration"
  },
  {
    "id": 688,
    "question": "Activity Bar charts show schedule against",
    "options": [
      "task dependencies",
      "calendar time",
      "critical bar chart",
      "defining milestones"
    ],
    "answer": "calendar time"
  },
  {
    "id": 689,
    "question": "According to this principle of general management, “an organization should safeguard against abuse of managerial power, but at the same time, a manager should have the necessary authority to carry out his responsibility.” Name the principle of management described in the given statement.",
    "options": [
      "Discipline",
      "Authority and responsibility",
      "Unity of command",
      "Unity of direction"
    ],
    "answer": "Authority and responsibility"
  },
  {
    "id": 690,
    "question": "According to the University of Iowa behavioural studies, group members' satisfaction levels were generally",
    "options": [
      "higher under a supportive leader in the long run.",
      "improved when the leader was production oriented",
      "maintained when the leader was directive in the short run",
      "higher under a democratic leader than under an autocratic one"
    ],
    "answer": "higher under a democratic leader than under an autocratic one"
  },
  {
    "id": 691,
    "question": "According to the Ohio State studies, the ________ dimension of leader behaviour is defined as the extent to which a leader has job relationships characterized by mutual trust and respect for group members' ideas and feelings.",
    "options": [
      "relationship management",
      "consideration",
      "people orientation",
      "integrity"
    ],
    "answer": "consideration"
  },
  {
    "id": 692,
    "question": "According to the Ohio State studies, ________ refers to the extent to which a leader is likely to define and shape his or her role and the roles of group members in the search for goal attainment.",
    "options": [
      "people orientation",
      "production orientation",
      "initiating structure",
      "consideration"
    ],
    "answer": "initiating structure"
  },
  {
    "id": 693,
    "question": "According to Henri Fayol, if this principle of general management is violated, “authority is undermined, discipline is in jeopardy, order disturbed, and stability threatened.” Identify the principle.",
    "options": [
      "Authority and responsibility",
      "Discipline",
      "Unity of command",
      "Equity"
    ],
    "answer": "Unity of command"
  },
  {
    "id": 694,
    "question": "According to Burns and Stalker, which of the following is a feature of organic organisations?",
    "options": [
      "Emphasis on vertical communication channels",
      "Prestige drawn from personal contribution",
      "Stress on obedience to superiors and loyalty to the organisation",
      "Knowledge requirement based on job"
    ],
    "answer": "Prestige drawn from personal contribution"
  },
  {
    "id": 695,
    "question": "According to research, what characteristic is most frequently shared by firms that receive high rankings for corporate social responsibility?",
    "options": [
      "encouraging employees to participate in civic activities",
      "requiring managers to understand ethics laws",
      "promoting integrity through ethics training",
      "linking compensation to ethical behaviours"
    ],
    "answer": "linking compensation to ethical behaviours"
  },
  {
    "id": 696,
    "question": "Access is determined by rules in Rule-Based Access Control (RuBAC). What type of access control would such restrictions fall under?",
    "options": [
      "Discretionary Access Control (DAC)",
      "Mandatory Access control (MAC)",
      "Non-Discretionary Access Control (NDAC)",
      "Lattice-based Access control"
    ],
    "answer": "Non-Discretionary Access Control (NDAC)"
  },
  {
    "id": 697,
    "question": "Ability of an individual to analyze complex situations and to rationally process and interpret available information is called",
    "options": [
      "Technical skills",
      "Human skills",
      "Conceptual skills",
      "Employee skills"
    ],
    "answer": "Conceptual skills"
  },
  {
    "id": 698,
    "question": "ABC Airways uses software to manage reservation of its passengers. After a year of its use, the database administrator decided to add few attributes with the passenger table. If he is able to change the structure of passenger table without adjusting its front-end, how do we call such independence?",
    "options": [
      "Physical data independence",
      "Logical data independence",
      "External data independence",
      "View data independence"
    ],
    "answer": "Logical data independence"
  },
  {
    "id": 699,
    "question": "A mistake in software code or configuration that provides an attacker with indirect access to a system or network is called as...",
    "options": [
      "Vulnerability",
      "Virus",
      "Trojan Horse",
      "Exposures"
    ],
    "answer": "Vulnerability"
  },
  {
    "id": 700,
    "question": "A visual drawing of the reporting relationships within an organization is called a(n):",
    "options": [
      "work specialization chart.",
      "unity of command chart.",
      "organization chart.",
      "division of labour chart."
    ],
    "answer": "organization chart."
  },
  // START PAGE 186
  {
    "id": 701,
    "question": "A view of database that appears to an application program is known as",
    "options": [
      "Virtual table",
      "Schema",
      "Subschema",
      "None of the above"
    ],
    "answer": "Subschema"
  },
  {
    "id": 702,
    "question": "A variable that derive E is called .",
    "options": [
      "E",
      "@",
      "*",
      "Nullable"
    ],
    "answer": "Nullable"
  },
  {
    "id": 703,
    "question": "A stable set of characteristics and tendencies that determine commonalities and differences in people’s behavior is called",
    "options": [
      "Attitude",
      "Stereotype",
      "Attribution",
      "Personality"
    ],
    "answer": "Personality"
  },
  {
    "id": 704,
    "question": "A software process is a set of related activities that gives outcome to the ____________of the software",
    "options": [
      "Production",
      "Engineering",
      "Sales",
      "None of the above"
    ],
    "answer": "Engineering"
  },
  {
    "id": 705,
    "question": "A rule of thumb is if you can find another company which can do a non-core activity better and faster, ________________.",
    "options": [
      "you should keep producing.",
      "you should compete with the company.",
      "you should outsource.",
      "you should increase your efficiency."
    ],
    "answer": "you should outsource."
  },
  {
    "id": 706,
    "question": "A reporting relationship in which an employee receives orders from, and reports to, only one supervisor is known as:",
    "options": [
      "Line of authority",
      "Unity of direction",
      "Unity of command",
      "Responsibility"
    ],
    "answer": "Unity of command"
  },
  {
    "id": 707,
    "question": "A relationship between the instances of a single entity type is called",
    "options": [
      "Recursive relationship",
      "Ternary relationship",
      "Binary relationship",
      "None of these"
    ],
    "answer": "Recursive relationship"
  },
  {
    "id": 708,
    "question": "A pure virtual function implicitly means",
    "options": [
      "do-everything function",
      "do-nothing function",
      "do-something function",
      "None of the above."
    ],
    "answer": "do-nothing function"
  },
  {
    "id": 709,
    "question": "A process of verifying the validity of a claimed identity of a person is called?",
    "options": [
      "Identification",
      "Authentication",
      "Authorization",
      "Accountability"
    ],
    "answer": "Authentication"
  },
  {
    "id": 710,
    "question": "A process is thrashing if",
    "options": [
      "it is spending more time paging than executing",
      "it is spending less time paging than executing",
      "page fault occurs",
      "swapping cannot take place"
    ],
    "answer": "it is spending more time paging than executing"
  },
  {
    "id": 711,
    "question": "A problem is said to be decidable if it is a",
    "options": [
      "recursively enumerable",
      "recursive",
      "context-sensitive",
      "None of the choices."
    ],
    "answer": "recursive"
  },
  {
    "id": 712,
    "question": "A period of 'testing-out' the leaders in group development stages",
    "options": [
      "Storming",
      "Norming",
      "Performing",
      "Adjourning"
    ],
    "answer": "Storming"
  },
  {
    "id": 713,
    "question": "A mistake in the software code that provides an attacker with direct access to a system or network is called as....",
    "options": [
      "Vulnerability",
      "Virus",
      "Trojan Horse",
      "Backdoor Attack"
    ],
    "answer": "Backdoor Attack"
  },
  {
    "id": 714,
    "question": "A memory buffer used to accommodate a speed differential is called",
    "options": [
      "stack pointer",
      "cache",
      "accumulator",
      "disk buffer"
    ],
    "answer": "cache"
  },
  {
    "id": 715,
    "question": "a logical disk component that manages a disk's internal operations as it relates to a computer and is abstract to a human user.....",
    "options": [
      "disk management",
      "scheduler",
      "memory management",
      "file management system"
    ],
    "answer": "file management system"
  },
  {
    "id": 716,
    "question": "A leader uses _____________ when giving the individual or group the authority and responsibility to decide.",
    "options": [
      "consultation",
      "laissez-faire",
      "joint decision",
      "delegation"
    ],
    "answer": "delegation"
  },
  {
    "id": 717,
    "question": "A language that can generate the new data types is known as ___ languages as they can handle the new data types",
    "options": [
      "Overloaded",
      "Encapsulated",
      "Reprehensible",
      "Extensible"
    ],
    "answer": "Extensible"
  },
  {
    "id": 718,
    "question": "A group of experts are taking decision in this through consensus",
    "options": [
      "Interacting groups",
      "Delphi Methods",
      "Nominal groups",
      "Participative decision making"
    ],
    "answer": "Delphi Methods"
  },
  {
    "id": 719,
    "question": "A function template can have __template argument.",
    "options": [
      "1",
      "2",
      "More than one",
      "0"
    ],
    "answer": "More than one"
  },
  {
    "id": 720,
    "question": "a file system with data stored on a server. The data is accessed and processed as if it was stored on the local client machine.",
    "options": [
      "distributed file system",
      "stand-alone machine",
      "Internet file system",
      "EXT2 FS"
    ],
    "answer": "distributed file system"
  },
  {
    "id": 721,
    "question": "A dollar value is not used to measure all costs and benefits",
    "options": [
      "True",
      "False"
    ],
    "answer": "True"
  },
  {
    "id": 722,
    "question": "A department can be created by",
    "options": [
      "function",
      "product",
      "process",
      "All the other answers are correct"
    ],
    "answer": "All the other answers are correct"
  },
  {
    "id": 723,
    "question": "A DBMS query language is designed to",
    "options": [
      "Specify the structure of a database",
      "Support end users who use english-like commands",
      "Support in the development of complex applications software",
      "All of the above"
    ],
    "answer": "All of the above"
  },
  {
    "id": 724,
    "question": "A dataStore in DFD represents",
    "options": [
      "Sequential File",
      "Disk Store",
      "Repository of Data",
      "a Random Access Memory"
    ],
    "answer": "Repository of Data"
  },
  {
    "id": 725,
    "question": "A data dictionary is a special file that contains",
    "options": [
      "The name of all fields in all files",
      "The Data type of all fields in all files",
      "The width of all fields in all files",
      "All of the above"
    ],
    "answer": "All of the above"
  },
  {
    "id": 726,
    "question": "A cost benefit analysis involves measurable metrics such as",
    "options": [
      "Revenue earned or costs",
      "Quality or costs",
      "Benefits or costs",
      "None of the above"
    ],
    "answer": "Revenue earned or costs"
  },
  {
    "id": 727,
    "question": "A contingency model of leadership is the path-goal theory. This suggests that subordinates will see leadership behaviour as a motivating influence if:",
    "options": [
      "path-goal relationships are clarified.",
      "their effective performance will satisfy their needs.",
      "the necessary direction, guidance, training, and support is provided.",
      "all the other options are correct."
    ],
    "answer": "all the other options are correct."
  },
  {
    "id": 728,
    "question": "A complete graph can have",
    "options": [
      "n^2 spanning trees",
      "n^(n-2) spanning trees",
      "n^(n+1) spanning trees",
      "n^(n+2) spanning trees"
    ],
    "answer": "n^(n-2) spanning trees"
  },
  {
    "id": 729,
    "question": "A company is running with a peer-to-peer network of 30 computers. The policy is such that all system users are responsible for their own security and they can set file and folder privileges on their own. Which of the following access control model best suits the configuration at this company?",
    "options": [
      "Discretionary",
      "Mandatory",
      "Role-based",
      "Nondiscretionary"
    ],
    "answer": "Discretionary"
  },
  {
    "id": 730,
    "question": "A clustered system",
    "options": [
      "Gathers together multiple CPUs to accomplish computational work",
      "Is an operating system that provides file sharing across a network",
      "Is used when rigid time requirements are present",
      "Can only operate one application at a time"
    ],
    "answer": "Gathers together multiple CPUs to accomplish computational work"
  },
  {
    "id": 731,
    "question": "A bus is one possible local area network topology. One advantage of a bus network is",
    "options": [
      "the failure of one node does not affect the rest of the network",
      "the performance of the network is unaffected by the number of users",
      "failure of the main bus cable will only affect a few users",
      "it has the fastest performance of any network topology"
    ],
    "answer": "the failure of one node does not affect the rest of the network"
  },
  {
    "id": 732,
    "question": "A Block can be placed in a restricted set of places in the cache",
    "options": [
      "Direct mapping",
      "set associative",
      "fully associative",
      "Indirect associative"
    ],
    "answer": "set associative"
  },
  {
    "id": 733,
    "question": "A better measurement of performance of memory-hierarchy is the",
    "options": [
      "Average memory access time",
      "Average memory hit rate",
      "Average memory miss rate",
      "Write stall"
    ],
    "answer": "Average memory access time"
  },
  {
    "id": 734,
    "question": "A ____________ of an issue consists of weighing and balancing all of the competing demands on a firm by each of those who have a claim on it.",
    "options": [
      "stakeholder analysis",
      "board of directors’ analysis",
      "corporation analysis",
      "management analysis"
    ],
    "answer": "stakeholder analysis"
  },
  {
    "id": 735,
    "question": "A ____________ leader avoids power and leaves the group entirely to itself.",
    "options": [
      "socialistic",
      "democratic",
      "autocratic",
      "laissez-faire"
    ],
    "answer": "laissez-faire"
  },
  {
    "id": 736,
    "question": "A _______ is a data communication system within a building, plant, or campus, or between nearby buildings.",
    "options": [
      "MAN",
      "LAN",
      "WAN",
      "None of the above"
    ],
    "answer": "LAN"
  },
  {
    "id": 737,
    "question": "A high-level document which defines the management plan in detail for how security should be practiced throughout the organization is called?",
    "options": [
      "Guidelines",
      "Policies",
      "Procedures",
      "Standards"
    ],
    "answer": "Policies"
  },
  {
    "id": 738,
    "question": "______is concerned with the safety of a person's personal information while accessing the Internet on any computer or mobile device.",
    "options": [
      "Digital agony",
      "Digital privacy",
      "Digital secrecy",
      "Digital protection"
    ],
    "answer": "Digital privacy"
  },
  {
    "id": 739,
    "question": "________is not a proper metric of a program's size",
    "options": [
      "LOC",
      "KLOC",
      "KDSI",
      "Number of pages of documentation"
    ],
    "answer": "Number of pages of documentation"
  },
  {
    "id": 740,
    "question": "___________model provide ideas about historical projects",
    "options": [
      "Waterfall",
      "Spiral",
      "COCOMO",
      "Incremental"
    ],
    "answer": "COCOMO"
  },
  {
    "id": 741,
    "question": "_____________used node as activity and links as precedence",
    "options": [
      "on-arrow approach",
      "precedence networks",
      "Timeline chart",
      "None of the above"
    ],
    "answer": "precedence networks"
  },
  {
    "id": 742,
    "question": "_________________ provides a framework for effective delivery of technology, forms the basis for management, and also provides the context for work products, milestones, quality measures, and change management",
    "options": [
      "Prototyping Model",
      "Linear Sequential Model",
      "Process",
      "Cost estimation"
    ],
    "answer": "Process"
  },
  {
    "id": 743,
    "question": "_______________ ensure there is always an up-to-date system that can be demonstrated to the client.",
    "options": [
      "Domain Object Modelling",
      "Individual Class (Code) Ownership",
      "Visibility of progress and results",
      "Regular Builds"
    ],
    "answer": "Regular Builds"
  },
  {
    "id": 744,
    "question": "_____________ is triggered by modifications, migration or retirement of existing software.",
    "options": [
      "Regression Testing",
      "Unit Testing",
      "Maintenance testing",
      "Integration Testing"
    ],
    "answer": "Maintenance testing"
  },
  {
    "id": 745,
    "question": "_____________ is the system call that the parent has to invoke in order to avoid creating zombie processes?",
    "options": [
      "wait()",
      "Sleep()",
      "exec()",
      "execvp()"
    ],
    "answer": "wait()"
  },
  {
    "id": 746,
    "question": "_____________ is a lack of access control policy.",
    "options": [
      "Bug",
      "Threat",
      "Vulnerability",
      "Attack"
    ],
    "answer": "Vulnerability"
  },
  {
    "id": 747,
    "question": "_____________ consists of exploring and explaining the domain of the problem to be solved.",
    "options": [
      "Feature Teams",
      "Inspections",
      "Domain Object Modelling",
      "Configuration Management"
    ],
    "answer": "Domain Object Modelling"
  },
  {
    "id": 748,
    "question": "____________ is the technique by which a partially loaded program can be executed.",
    "options": [
      "Cache memory",
      "Virtual memory",
      "Associative memory",
      "Shared memory"
    ],
    "answer": "Virtual memory"
  },
  {
    "id": 749,
    "question": "___________ is very useful in situations when data have to be stored and then retrieved in reverse order.",
    "options": [
      "Stack",
      "Queue",
      "List",
      "Linked List"
    ],
    "answer": "Stack"
  },
  {
    "id": 750,
    "question": "___________ is the system call that has to be invoked by the child to replace the memory image of the child?",
    "options": [
      "wait()",
      "sleep()",
      "exec()",
      "exit()"
    ],
    "answer": "exec()"
  },
  {
    "id": 751,
    "question": "___________ is a model that illustrates how testing activities integrate with software development phases.",
    "options": [
      "Waterfall Model",
      "V-Model",
      "Spiral Model",
      "Iterative Model"
    ],
    "answer": "V-Model"
  },
  {
    "id": 752,
    "question": "___________ communication modes support two-way traffic but in only one direction at a time?",
    "options": [
      "simplex",
      "half duplex",
      "three-quarters duplex",
      "all of the above"
    ],
    "answer": "half duplex"
  },
  {
    "id": 753,
    "question": "__________ is the responsible for carrying out the instructions and procedures necessary for performing software configuration management tasks are documented in the software configuration management plan.",
    "options": [
      "Project manager",
      "Project leader",
      "Configuration Manager",
      "None from the list"
    ],
    "answer": "Configuration Manager"
  },
  {
    "id": 754,
    "question": "__________ is the process of using a function for more than one purpose. It allows the use of different internal structures of the object by keeping the same external interface.",
    "options": [
      "Inheritance",
      "Polymorphism",
      "Abstraction",
      "Encapsulation"
    ],
    "answer": "Polymorphism"
  },
  {
    "id": 755,
    "question": "__________ is the minimum number of steps that can execute for the given parameters",
    "options": [
      "Average case",
      "Worst case",
      "Time complexity",
      "Best case"
    ],
    "answer": "Best case"
  },
  {
    "id": 756,
    "question": "__________ is the average number of steps that can be executed for the given parameters",
    "options": [
      "Average case",
      "Worst case",
      "Time complexity",
      "Best case"
    ],
    "answer": "Average case"
  },
  {
    "id": 757,
    "question": "__________ in the code are signs of bad code designs and should be avoided.",
    "options": [
      "Repetitions",
      "Modularity",
      "Functions",
      "Documentation"
    ],
    "answer": "Repetitions"
  },
  {
    "id": 758,
    "question": "__________ cable consists of inner copper core and a second conducting outer sheath",
    "options": [
      "Coaxial cable",
      "Twisted Pair",
      "Optical fibre cable",
      "shielded Twisted Pair"
    ],
    "answer": "Coaxial cable"
  },
  {
    "id": 759,
    "question": "__________ begins at the root and follows a path down to the specified file.",
    "options": [
      "Relative path name",
      "Absolute path name",
      "Standalone name",
      "All of the above"
    ],
    "answer": "Absolute path name"
  },
  {
    "id": 760,
    "question": "_________ utilization is the use of available bandwidth to achieve specific goals.",
    "options": [
      "Amplitude",
      "Frequency",
      "Bandwidth",
      "None of the above"
    ],
    "answer": "Bandwidth"
  },
  {
    "id": 761,
    "question": "_________ memory management scheme will produce least fragment",
    "options": [
      "Best Fit",
      "Worst Fit",
      "First Fit",
      "None of the given choices"
    ],
    "answer": "Best Fit"
  },
  {
    "id": 762,
    "question": "_________ is the maximum number of steps that can execute for the given parameters",
    "options": [
      "Average case",
      "Worst case",
      "Time complexity",
      "Best case"
    ],
    "answer": "Worst case"
  },
  {
    "id": 763,
    "question": "_________ is not the operation that can be performed on queue.",
    "options": [
      "Insertion",
      "Deletion",
      "Retrieval",
      "Traversal"
    ],
    "answer": "Traversal"
  },
  {
    "id": 764,
    "question": "_________ are used for cellular phone, satellite, and wireless LAN communications.",
    "options": [
      "Radio waves",
      "Infrared waves",
      "Microwaves",
      "None of the above"
    ],
    "answer": "Microwaves"
  },
  {
    "id": 765,
    "question": "_________ affect schedule or resources",
    "options": [
      "Project risks",
      "Project people",
      "Task dependencies",
      "None in the list"
    ],
    "answer": "Project risks"
  },
  {
    "id": 766,
    "question": "________ cable consists of two insulated copper wires twisted together.",
    "options": [
      "Coaxial",
      "Fiber-optic",
      "Twisted-pair",
      "none of the above"
    ],
    "answer": "Twisted-pair"
  },
  {
    "id": 767,
    "question": "________ are used for short-range communications such as those between a PC and a peripheral device.",
    "options": [
      "Radio waves",
      "Infrared waves",
      "Microwaves",
      "none of the above"
    ],
    "answer": "Infrared waves"
  },
  {
    "id": 768,
    "question": "_______ is the singleness of purpose that makes possible the creation of one plan of action to guide managers in resource allocations.",
    "options": [
      "Unity of direction",
      "Unity of command",
      "Unity of resources",
      "Unity of authority"
    ],
    "answer": "Unity of direction"
  },
  {
    "id": 769,
    "question": "_______ is designed to be used in wireless applications in which stations must be able to share the medium without interception by an eavesdropper and without being subject to jamming from a malicious intruder.",
    "options": [
      "Multiplexing",
      "Spread spectrum",
      "Modulation",
      "None of the above."
    ],
    "answer": "Spread spectrum"
  },
  {
    "id": 770,
    "question": "_______ diagrams are important part of object modeling methodology",
    "options": [
      "application",
      "data",
      "class",
      "level"
    ],
    "answer": "class"
  },
  {
    "id": 771,
    "question": "______ can be applied when the bandwidth of a link (in hertz) is greater than the combined bandwidths of the signals to be transmitted.",
    "options": [
      "TDM",
      "FDM",
      "Both TDM or FDM",
      "Neither TDM or FDM"
    ],
    "answer": "FDM"
  },
  {
    "id": 772,
    "question": "______ cables are composed of a glass or plastic inner core surrounded by cladding,all encased in an outside jacket.",
    "options": [
      "Coaxial",
      "Fiber-optic",
      "Twisted-pair",
      "none of the above"
    ],
    "answer": "Fiber-optic"
  },
  {
    "id": 773,
    "question": "_____ is the concept in which a process is copied into main memory from the secondary memory according to the requirement.",
    "options": [
      "Paging",
      "Demand paging",
      "Segmentation",
      "Swapping"
    ],
    "answer": "Demand paging"
  },
  {
    "id": 774,
    "question": "____ provide member functions for repositioning the file-position pointer.",
    "options": [
      "istream",
      "ostream",
      "istream and ostream",
      "None"
    ],
    "answer": "istream and ostream"
  },
  {
    "id": 775,
    "question": "____ is designed to use the high bandwidth capability of fiber-optic cable.",
    "options": [
      "WDM",
      "FDM",
      "TDM",
      "None of the above"
    ],
    "answer": "WDM"
  },
  {
    "id": 776,
    "question": "____ function can create versions of the add function for adding the int, float or double type values.",
    "options": [
      "Sum()",
      "Add()",
      "Total()",
      "all"
    ],
    "answer": "Add()"
  },
  {
    "id": 777,
    "question": "____ data type represents the file stream generally, and has the capabilities of both ofstream and ifstream which means it can create files, write information to files, and read information from files.",
    "options": [
      "fstream",
      "stream",
      "filestream",
      "None"
    ],
    "answer": "fstream"
  },
  {
    "id": 778,
    "question": "Which of the following statements is false?",
    "options": [
      "The halting problem for Turing machine is undecidable.",
      "Determining whether a context-free grammar is ambiguous is undecidable.",
      "Given two arbitrary context-free grammars, G1and G2, it is undecidable with L(G1) = L(G2)",
      "Given two regular grammars G1 and G2, it is undecidable whether L(G1) = L(G2)"
    ],
    "answer": "Given two regular grammars G1 and G2, it is undecidable whether L(G1) = L(G2)"
  },
  {
    "id": 779,
    "question": "Which one of the following is decidable?",
    "options": [
      "Given a Turing machine M, a string s, and an integer k, M accepts s with k steps",
      "Equivalence of two given Turing machines",
      "Language accepted by a given DFA is nonempty",
      "Language generated by a CFG is nonempty"
    ],
    "answer": "Given a Turing machine M, a string s, and an integer k, M accepts s with k steps"
  },
  {
    "id": 780,
    "question": "The language { 0^n 2 1^n / n >= 0 } over the alphabet { 0, 1, 2} is",
    "options": [
      "Not recursive",
      "is recursive and is a deterministic CFL",
      "is a regular language",
      "is not a deterministic CFL but a CFL."
    ],
    "answer": "is not a deterministic CFL but a CFL."
  },
  {
    "id": 781,
    "question": "It is undecidable, whether",
    "options": [
      "an arbitrary TM has 15 states",
      "an arbitrary TM halts after 10 steps",
      "an arbitrary TM ever prints a specific letter",
      "an arbitrary TM accepts a string w in 5 steps"
    ],
    "answer": "an arbitrary TM ever prints a specific letter"
  },
  {
    "id": 782,
    "question": "Which of these statements is TRUE about a LAN?",
    "options": [
      "A LAN connects computers in a small area such as an office",
      "A modem is needed to connect a computer to a LAN",
      "A LAN consists of only one computer",
      "Internet is a LAN"
    ],
    "answer": "A LAN connects computers in a small area such as an office"
  },
  {
    "id": 783,
    "question": "Which one of the following protocols is used for the noisy channel?",
    "options": [
      "Simplest protocol",
      "Half duplex",
      "Selective repeat ARQ",
      "Hybrid"
    ],
    "answer": "Selective repeat ARQ"
  },
  {
    "id": 784,
    "question": "Which of the following is not a primitive root of 17?",
    "options": [
      "7",
      "10",
      "14",
      "4"
    ],
    "answer": "4"
  },
  {
    "id": 785,
    "question": "Which error detection method uses one's complement arithmetic?",
    "options": [
      "Simple parity check",
      "Checksum",
      "Two-dimensional parity check",
      "CRC"
    ],
    "answer": "Checksum"
  },
  {
    "id": 786,
    "question": "Which error detection method involves polynomials?",
    "options": [
      "CRC",
      "Simple parity check",
      "Two-dimensional parity check",
      "Checksum"
    ],
    "answer": "CRC"
  },
  {
    "id": 787,
    "question": "What is the minimum hamming distance of this coding scheme d (01101,10011)?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": "4"
  },
  {
    "id": 788,
    "question": "What is the efficiency of the Go back N ARQ protocol?",
    "options": [
      "N = N / (2a + 2a)",
      "N = N / (1 + 2a)",
      "N = N * (2a + 2a)",
      "N = N * (1 + 2a)"
    ],
    "answer": "N = N / (1 + 2a)"
  },
  {
    "id": 789,
    "question": "The term that refers to a set of procedures used to restrict the amount of data that the sender can send before waiting for acknowledgment is",
    "options": [
      "Error control",
      "Flow control",
      "Delay",
      "Byte stuffing"
    ],
    "answer": "Flow control"
  },
  {
    "id": 790,
    "question": "The hamming distance between the words 101101101 and 110110010 is",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "answer": "6"
  },
  {
    "id": 791,
    "question": "The ________ method provides a one-time session key for two parties.",
    "options": [
      "Diffie-Hellman",
      "RSA",
      "DES",
      "AES"
    ],
    "answer": "Diffie-Hellman"
  },
  {
    "id": 792,
    "question": "Protocols in which the sender waits for a positive acknowledgment before advancing to the next data item are often called",
    "options": [
      "ARQ",
      "PPR",
      "ARS",
      "PRS"
    ],
    "answer": "ARQ"
  },
  {
    "id": 793,
    "question": "Parity bits are used for which of the following purposes?",
    "options": [
      "Encryption of data",
      "To transmit faster",
      "To detect errors",
      "To identify the user"
    ],
    "answer": "To detect errors"
  },
  {
    "id": 794,
    "question": "In the _________Protocol, if no acknowledgment for a frame has arrived, we resend all outstanding frames.",
    "options": [
      "Stop-and-Wait",
      "Simplest",
      "Go-Back-N ARQ",
      "Selective-Repeat ARQ"
    ],
    "answer": "Go-Back-N ARQ"
  },
  {
    "id": 795,
    "question": "In the _________ Protocol, the sender sends one frame, stops until it receives confirmation from the receiver, and then sends the next frame.",
    "options": [
      "Stop-and-Wait",
      "Simplest",
      "Go-Back-N ARQ",
      "Selective-Repeat ARQ"
    ],
    "answer": "Stop-and-Wait"
  },
  {
    "id": 796,
    "question": "In the _________ Protocol, the sender sends its frames one after another with no regard to the receiver.",
    "options": [
      "Stop-and-Wait",
      "Simplest",
      "Go-Back-N ARQ",
      "Selective-Repeat ARQ"
    ],
    "answer": "Simplest"
  },
  {
    "id": 797,
    "question": "In the _________ protocol we avoid unnecessary transmission by sending only frames that are corrupted.",
    "options": [
      "Stop-and-Wait ARQ",
      "Go-Back-N ARQ",
      "Selective-Repeat ARQ",
      "None of the above"
    ],
    "answer": "Selective-Repeat ARQ"
  },
  {
    "id": 798,
    "question": "In stop and wait flow control, for n data packets sent, how many acknowledgments are needed?",
    "options": [
      "n-1",
      "n",
      "2n",
      "n+1"
    ],
    "answer": "n"
  },
  {
    "id": 799,
    "question": "In stop and wait automatic repeat request, acknowledgment number is announced in the sequence of",
    "options": [
      "Next frame",
      "Previous frame",
      "Zeros",
      "Last frame"
    ],
    "answer": "Next frame"
  },
  {
    "id": 800,
    "question": "In Selective Repeat ARQ, if 4 is the number of bits for the sequence number, then the maximum size of the send window must be _____.",
    "options": [
      "15",
      "16",
      "31",
      "8"
    ],
    "answer": "8"
  },
  // START PAGE 215
  {
    "id": 801,
    "question": "In Selective Repeat ARQ, if 4 is the number of bits for the sequence number, then the maximum size of the receive window must be _____.",
    "options": [
      "15",
      "16",
      "31",
      "8"
    ],
    "answer": "8"
  },
  {
    "id": 802,
    "question": "In Go-Back-N ARQ, if frames 5, 6, and 7 are received successfully, the receiver may send an ACK _________ to the sender.",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "answer": "8"
  },
  {
    "id": 803,
    "question": "In Go-Back-N ARQ, if 10 is the number of bits for the sequence number, then the maximum size of the receive window must be _____.",
    "options": [
      "1023",
      "1024",
      "512",
      "1"
    ],
    "answer": "1"
  },
  {
    "id": 804,
    "question": "In CRC if the data unit is 100110111 and the divisor is 1111 then what is dividend at the receiver?",
    "options": [
      "100111001101",
      "100110111001",
      "100111001",
      "100111001110"
    ],
    "answer": "100110111001"
  },
  {
    "id": 805,
    "question": "If the sender of a statement cannot successfully dispute its authorship, this ability is called ____________.",
    "options": [
      "Authentication",
      "Non-repudiation",
      "Confidentiality",
      "Integrity"
    ],
    "answer": "Non-repudiation"
  },
  {
    "id": 806,
    "question": "If the information is protected from unauthorized change which of the following holds good.",
    "options": [
      "Availability",
      "Authenticity",
      "Non-repudiation",
      "Integrity"
    ],
    "answer": "Integrity"
  },
  {
    "id": 807,
    "question": "Error control in the data link layer is based on",
    "options": [
      "Automatic repeat request",
      "Manually repeat request",
      "Situation based",
      "Terminated request"
    ],
    "answer": "Automatic repeat request"
  },
  {
    "id": 808,
    "question": "CRC stands for",
    "options": [
      "Cyclic Redundancy Check",
      "Code Repeat Check",
      "Code Redundancy Check",
      "Cyclic Repeat Check"
    ],
    "answer": "Cyclic Redundancy Check"
  },
  {
    "id": 809,
    "question": "Caesar Cipher is also referred to as _________",
    "options": [
      "Shift Cipher",
      "Row transposition cipher",
      "One – pad",
      "None of the choices"
    ],
    "answer": "Shift Cipher"
  },
  {
    "id": 810,
    "question": "Bob receives a message digitally signed by Alice. Bob wants to verify the signature, he requires?",
    "options": [
      "Alice’s Public key",
      "Bob’s Public Key",
      "Alice’s Private Key",
      "Bob’s Private Key"
    ],
    "answer": "Alice’s Public key"
  },
  {
    "id": 811,
    "question": "An error detecting code is which code is the remainder resulting from dividing the bits to be checked by a predetermined binary number, is known as",
    "options": [
      "Cyclic redundancy check",
      "Checksum",
      "Error detecting code",
      "Hamming code"
    ],
    "answer": "Cyclic redundancy check"
  },
  {
    "id": 812,
    "question": "______________ attacks involve modification of the contents of the message.",
    "options": [
      "Passive",
      "Active",
      "Both Passive and Active",
      "None of the given choices"
    ],
    "answer": "Active"
  },
  {
    "id": 813,
    "question": "_____________ is a technique of decoding messages from a non-readable form back to readable format without knowing how they were initially converted from readable format to non-readable format.",
    "options": [
      "Cryptography",
      "Encryption",
      "Decryption",
      "Cryptanalysis"
    ],
    "answer": "Cryptanalysis"
  },
  {
    "id": 814,
    "question": "___________ is referred to the process of analysing information systems using mathematical formulas to understand the hidden aspects of the system.",
    "options": [
      "Cryptography",
      "Cryptanalysis",
      "Cryptology",
      "None of the choices"
    ],
    "answer": "Cryptology"
  },
  {
    "id": 815,
    "question": "___________ is the relationship between the message and signature in case of Digital Signature.",
    "options": [
      "Many to One",
      "One to Many",
      "Many to Many",
      "One to One"
    ],
    "answer": "Many to One"
  },
  {
    "id": 816,
    "question": "The term that is used to set standards to enable intercommunication among equipment from a variety of manufactures is called",
    "options": [
      "project 802",
      "project 8802",
      "project 208",
      "project 2088"
    ],
    "answer": "project 802"
  },
  {
    "id": 817,
    "question": "IEEE standard was adopted by",
    "options": [
      "ISO",
      "ANSI",
      "OSI",
      "IEEE"
    ],
    "answer": "ISO"
  },
  {
    "id": 818,
    "question": "Which of the following symmetric block cipher supports multiple key sizes?",
    "options": [
      "DES",
      "AES",
      "Double DES",
      "Triple DES"
    ],
    "answer": "AES"
  },
  {
    "id": 819,
    "question": "Which of the following ensures that data received was sent by the specified sender?",
    "options": [
      "Confidentiality",
      "Authenticity",
      "Non-repudiation",
      "None of the choices"
    ],
    "answer": "Authenticity"
  },
  {
    "id": 820,
    "question": "Which of the following encryption has the capability for computing over encrypted data without access to the secret key?",
    "options": [
      "Homomorphic Encryption",
      "RSA",
      "Elliptic Curve cryptography",
      "None of the choices"
    ],
    "answer": "Homomorphic Encryption"
  },
  {
    "id": 821,
    "question": "To construct cipher text, __________________ technique reorders plaintext characters.",
    "options": [
      "Substitution",
      "Transposition",
      "neither (a) nor (b)",
      "both (a) and (b)"
    ],
    "answer": "Transposition"
  },
  {
    "id": 822,
    "question": "The science and art of converting messages to make them secure and resistant to attacks is known as _________________.",
    "options": [
      "Cryptography",
      "Cryptanalysis",
      "Cryptology",
      "None of the choices"
    ],
    "answer": "Cryptography"
  },
  {
    "id": 823,
    "question": "DES will fall under the category of ___________",
    "options": [
      "Electronic Cipher Book",
      "Electronic Code Book",
      "Complex block cipher",
      "None of the choices"
    ],
    "answer": "Electronic Code Book"
  },
  {
    "id": 824,
    "question": "A ________ is used to verify the integrity of a message.",
    "options": [
      "Message digest",
      "Decryption algorithm",
      "Digital envelope",
      "None of the above"
    ],
    "answer": "Message digest"
  },
  {
    "id": 825,
    "question": "In IDEA, the key size is ____________",
    "options": [
      "128 bytes",
      "128 bits",
      "256 bytes",
      "256 bits"
    ],
    "answer": "128 bits"
  },
  {
    "id": 826,
    "question": "Which of these is a disadvantage of a Bus network?",
    "options": [
      "Expensive",
      "Needs extra hardware",
      "Slow",
      "If the main cable fails, the entire network fails"
    ],
    "answer": "If the main cable fails, the entire network fails"
  },
  {
    "id": 827,
    "question": "_________ is a communications protocol standard for transmitting small amounts of digital information using conventional FM Sound Broadcast techniques",
    "options": [
      "Radio System",
      "Radio Data System",
      "Radio Broadcast Data System",
      "Broadcast Data System"
    ],
    "answer": "Radio Data System"
  },
  {
    "id": 828,
    "question": "Which of the following statement/statements is/are TRUE, with respect to vectored interrupts?",
    "options": [
      "In vectored interrupt, device identifies itself to the processor by sending the starting address of the service routine.",
      "Code sent by the vectored interrupt are upto 32 bits",
      "In vectored interrupt starting address sent by the device to identify itself is referred as “service location”",
      "All the mentioned options"
    ],
    "answer": "In vectored interrupt, device identifies itself to the processor by sending the starting address of the service routine."
  },
  {
    "id": 829,
    "question": "Which of the following statement/statements is/are FALSE with respect to Centralized BUS arbitration?",
    "options": [
      "In centralized BUS arbitration, the processor takes into account the various parameters and assigns the BUS to that device",
      "Centralized Bus arbitration involves both Processor and DMA controller for its processing.",
      "Centralized Bus arbitration is similar to Priority interrupt circuit.",
      "None of the mentioned options."
    ],
    "answer": "Centralized Bus arbitration involves both Processor and DMA controller for its processing."
  },
  {
    "id": 830,
    "question": "Which of the following statement is CORRECT, when the process request for DMA operation.",
    "options": [
      "The process, which has requested for DMA is temporarily suspended.",
      "The process, which has requested for DMA continues execution.",
      "Another process, gets executed.",
      "The process, which has requested for DMA is temporarily suspended and another process start executing."
    ],
    "answer": "The process, which has requested for DMA is temporarily suspended and another process start executing."
  },
  {
    "id": 831,
    "question": "Which of the following RAID levels gives the striping at the Block level and double distributed parity for address both speed and fault tolerance issue.",
    "options": [
      "RAID 10",
      "RAID 2",
      "RAID 6",
      "RAID 5"
    ],
    "answer": "RAID 6"
  },
  {
    "id": 832,
    "question": "Which of the following is TRUE, with respect to RAID 5,",
    "options": [
      "Distributed Parity",
      "Minimum number of Disks required is 3",
      "High hardware cost for implementation",
      "All the mentioned options"
    ],
    "answer": "All the mentioned options"
  },
  {
    "id": 833,
    "question": "Which of the following is TRUE, w. r. t, “difference between DMA and Interrupt mode of I/ O data transfer”?",
    "options": [
      "DMA involves the processor for the I/O transfer",
      "The rate of data transfer is moderate in DMA",
      "The amount of data transfer is less in DMA",
      "DMA operates on a block of data"
    ],
    "answer": "DMA operates on a block of data"
  },
  {
    "id": 834,
    "question": "Which of the following is not under the category of Flynn’s classification",
    "options": [
      "SISD",
      "MIMD",
      "SIMD",
      "MISD"
    ],
    "answer": "MISD"
  },
  {
    "id": 835,
    "question": "Which of the following has the highest data rate?",
    "options": [
      "RAID 1",
      "RAID 3",
      "RAID 4",
      "RAID 5"
    ],
    "answer": "RAID 5"
  },
  {
    "id": 836,
    "question": "The significance of I/O mapped I/O with memory mapped I/O is",
    "options": [
      "I/O mapped I/O is faster than memory mapped I/O in terms of data transfer.",
      "I/O mapped I/O devices have large buffer space.",
      "I/O mapped I/O devices need to deal with only fewer address lines at the time of communication.",
      "All the mentioned options."
    ],
    "answer": "I/O mapped I/O devices need to deal with only fewer address lines at the time of communication."
  },
  {
    "id": 837,
    "question": "The mechanism in which I/O device is accessed by continuous monitoring its status using status flag is referred as",
    "options": [
      "Program – controlled I/O",
      "Memory mapped I/O",
      "I/ O mapped I/O",
      "Interrupt driven I/O"
    ],
    "answer": "Program – controlled I/O"
  },
  {
    "id": 838,
    "question": "The _________________ is used to overcome the contention over the BUS possession and usage.",
    "options": [
      "Multiple BUS structure",
      "Single BUS Structure",
      "BUS Optimizers",
      "BUS arbitrator"
    ],
    "answer": "BUS arbitrator"
  },
  {
    "id": 839,
    "question": "State the number of registers present in DMA controller",
    "options": [
      "1",
      "2",
      "3",
      "No registers"
    ],
    "answer": "3"
  },
  {
    "id": 840,
    "question": "Overall speed of transfer in RAID level 4 is",
    "options": [
      "Low",
      "Very low",
      "High",
      "None of the mentioned options"
    ],
    "answer": "High"
  },
  {
    "id": 841,
    "question": "Once DMA transfer is completed, it is notified to the CPU through ____________ signal",
    "options": [
      "Acknowledgement signal",
      "Interrupt Signal",
      "Program status word",
      "None of the mentioned options."
    ],
    "answer": "Interrupt Signal"
  },
  {
    "id": 842,
    "question": "In bus arbitration, the controller which initiates data communication on the BUS at any time is called",
    "options": [
      "Bus Arbitrator",
      "Bus Master",
      "Processor",
      "Controller"
    ],
    "answer": "Bus Master"
  },
  {
    "id": 843,
    "question": "How interrupt latency can be reduced?",
    "options": [
      "Amount of information saved automatically by the processor when an interrupt request should be kept to a minimum.",
      "By means of shadow registers",
      "Processor with small number of registers, hardware unit is used to save the information automatically, once the processor accepts the interrupt request.",
      "All the mentioned options."
    ],
    "answer": "All the mentioned options."
  },
  {
    "id": 844,
    "question": "During DMA transfer, the signals and addresses are issued by the _______________ unit",
    "options": [
      "DMA controllers",
      "Device drivers",
      "CPU",
      "The program itself"
    ],
    "answer": "DMA controllers"
  },
  {
    "id": 845,
    "question": "DMA transfer is initiated by ________________ of the following",
    "options": [
      "Processor",
      "The process being executed",
      "I/O devices",
      "Operating System"
    ],
    "answer": "I/O devices"
  },
  {
    "id": 846,
    "question": "Decomposing the instruction execution into sub-tasks, each sub-tasks were executed in exclusive unit, all such units operate concurrently, and the defined technique is referred as",
    "options": [
      "UMA",
      "DMA",
      "Pipelining",
      "Vector Processing"
    ],
    "answer": "Pipelining"
  },
  {
    "id": 847,
    "question": "_____________ is the efficient method to implement multiple interrupt handling.",
    "options": [
      "Polling Method",
      "Vectored interrupts",
      "Interrupt nesting",
      "None of the mentioned options"
    ],
    "answer": "Interrupt nesting"
  },
  {
    "id": 848,
    "question": "Which of the following statement is TRUE, with respect to “difference between subroutines and interrupt-service enabled”?",
    "options": [
      "During subroutine execution, the changes in status information and content registers are anticipated",
      "During subroutine execution, the changes in status information and content registers are unanticipated",
      "During interrupt service enabling, the changes in status information and content registers are anticipated.",
      "None of the mentioned options"
    ],
    "answer": "During interrupt service enabling, the changes in status information and content registers are anticipated."
  },
  {
    "id": 849,
    "question": "Which of following statement/statements is /are TRUE, w. r. t DMA Controller?",
    "options": [
      "The DMA controller can perform operations on two different disks simultaneous, if the appropriate details are known.",
      "The DMA controller is directly connected to the system bus to provide faster access.",
      "When the R/W bit of the status register of the DMA controller is set to 1, then Read operation is performed.",
      "All the mentioned options."
    ],
    "answer": "All the mentioned options."
  },
  {
    "id": 850,
    "question": "The control circuit which is responsible for the DMA transfer is known as _________",
    "options": [
      "DMA controller",
      "DMA interface",
      "Data Controller",
      "CPU control unit."
    ],
    "answer": "DMA controller"
  },
  {
    "id": 851,
    "question": "MIMD classified computers are known as ______________, if the processor has high degree of interactions among themselves.",
    "options": [
      "UMA",
      "NUMA",
      "Dynamic Memory accessing",
      "Random Memory Accessing"
    ],
    "answer": "UMA"
  },
  {
    "id": 852,
    "question": "I/O device is connected to the interconnection network by using a device interface, the interface includes _________________________registers accessed by the processor.",
    "options": [
      "Data",
      "Status",
      "Control",
      "Data, Status and Control"
    ],
    "answer": "Data, Status and Control"
  },
  {
    "id": 853,
    "question": "High-speed of I/O data transfer is possible by using _______________ mechanism",
    "options": [
      "Interrupt driven I/O",
      "Program – controlled I/O",
      "DMA",
      "Memory mapped I/O"
    ],
    "answer": "DMA"
  },
  {
    "id": 854,
    "question": "Worst-case complexity is mostly used in algorithm designs instead of remaining complexity cases. Because of",
    "options": [
      "Worst-case complexity measure is simple and easy.",
      "Worst-case complexity has better understanding parameters.",
      "Best-case for almost any algorithm is trivial and determination of Average case complexity requires more parameters.",
      "None"
    ],
    "answer": "Best-case for almost any algorithm is trivial and determination of Average case complexity requires more parameters."
  },
  {
    "id": 855,
    "question": "Which of the following is an undecidable problem?",
    "options": [
      "Euler’s circuit problem",
      "Halting problem",
      "Traveling sales man problem",
      "Knapsack problem"
    ],
    "answer": "Halting problem"
  },
  {
    "id": 856,
    "question": "Which of the following way is best to represent the algorithms",
    "options": [
      "English literature step by step",
      "Flowchart",
      "Pseudocode",
      "None"
    ],
    "answer": "Pseudocode"
  },
  {
    "id": 857,
    "question": "Which of the following statement is the correct reason for analyzing algorithms?",
    "options": [
      "To choose the best algorithm for a particular task",
      "To study and improve the algorithm performance from existing algorithms",
      "Both",
      "None"
    ],
    "answer": "Both"
  },
  {
    "id": 858,
    "question": "Which of the following statement is correct for Recursion",
    "options": [
      "Structure or code representation is complex.",
      "Used First in First out principle.",
      "Required more memory space to hold intermediate results on the system stacks.",
      "Took less time than iterative method."
    ],
    "answer": "Required more memory space to hold intermediate results on the system stacks."
  },
  {
    "id": 859,
    "question": "Which of the following is not NP-Hard problem",
    "options": [
      "Hamiltonian Cycle Problem",
      "Travelling Salesman Problem",
      "Euler’s circuit problem",
      "All the above"
    ],
    "answer": "Euler’s circuit problem"
  },
  {
    "id": 860,
    "question": "Which of the following is not criteria for algorithms",
    "options": [
      "Alertness",
      "Definiteness",
      "Finiteness",
      "Effectiveness"
    ],
    "answer": "Alertness"
  },
  {
    "id": 861,
    "question": "Which of the following is compulsory criteria for algorithms",
    "options": [
      "Easiness",
      "Simple",
      "Activeness",
      "Finiteness"
    ],
    "answer": "Finiteness"
  },
  {
    "id": 862,
    "question": "What is the primary usage of asymptotic analysis?",
    "options": [
      "Measure the efficiency of algorithms that don’t depend on machine-specific constants.",
      "Used to judge an algorithm whether is it suitable to a particular system or not",
      "Used to find the minimum specification of hardware to execute the algorithm",
      "None"
    ],
    "answer": "Measure the efficiency of algorithms that don’t depend on machine-specific constants."
  },
  {
    "id": 863,
    "question": "Use of Omega notation (Ω) notation?",
    "options": [
      "To specify the least or minimum amount of resources that needed over all inputs of size",
      "To specify Best case complexity",
      "To Specify Worst case complexity",
      "Both A and B"
    ],
    "answer": "Both A and B"
  },
  {
    "id": 864,
    "question": "Undecidable problems mean:",
    "options": [
      "Problems that polynomial algorithms can solve",
      "Problems that deterministic polynomial algorithms can solve",
      "Problems that non-deterministic polynomial algorithms can solve",
      "Problems that any algorithm cannot solve"
    ],
    "answer": "Problems that any algorithm cannot solve"
  },
  {
    "id": 865,
    "question": "The algorithms whose time complexity is O(n2) belong to",
    "options": [
      "NP-Hard",
      "NP-Complete",
      "P",
      "None"
    ],
    "answer": "P"
  },
  {
    "id": 866,
    "question": "Space complexity is measured using the word. Which of the following statement is correct for term word.",
    "options": [
      "Word is a collection of bits stored in computer memory. Its size is a 4 to 64 bits",
      "Word is a collection variable used in an algorithm, which is a sum of each variable type memory occupied memory.",
      "Word is a count of statements used in the algorithm",
      "Word is the total algorithm size."
    ],
    "answer": "Word is a collection of bits stored in computer memory. Its size is a 4 to 64 bits"
  },
  {
    "id": 867,
    "question": "SAT or B-SAT is an example for",
    "options": [
      "NP-Hard",
      "NP-Complete",
      "P",
      "None"
    ],
    "answer": "NP-Complete"
  },
  {
    "id": 868,
    "question": "P class problem means:",
    "options": [
      "Problems that can be solvable in polynomial time",
      "Tractable problems.",
      "whose time complexity is O(N^c) where N is input size and C is constant",
      "All"
    ],
    "answer": "All"
  },
  {
    "id": 869,
    "question": "One problem which is known to be NP-Complete and from that problem give Transformation to some other problem in NP, then that NP problem becomes:",
    "options": [
      "NP-Hard",
      "NP-Complete",
      "P",
      "None"
    ],
    "answer": "NP-Complete"
  },
  {
    "id": 870,
    "question": "NP-complete problems mean:",
    "options": [
      "Problems in NP",
      "Problems in P",
      "Problems in NP and NP-Hard",
      "Problems in P and NP"
    ],
    "answer": "Problems in NP and NP-Hard"
  },
  {
    "id": 871,
    "question": "NP class of decision problem can be:",
    "options": [
      "Solved by non-deterministic polynomial algorithms",
      "Solved by deterministic polynomial algorithms",
      "Solved by polynomial algorithms",
      "None"
    ],
    "answer": "Solved by non-deterministic polynomial algorithms"
  },
  {
    "id": 872,
    "question": "In recursion, which data structure were used",
    "options": [
      "Hash table",
      "Stack",
      "Queue",
      "Dictionary"
    ],
    "answer": "Stack"
  },
  {
    "id": 873,
    "question": "In Algorithm time complexity analysis which of the following is correct?",
    "options": [
      "Only compile time is considered.",
      "Only Execution Time is considered.",
      "Both Compile execution time is considered.",
      "None"
    ],
    "answer": "Only Execution Time is considered."
  },
  {
    "id": 874,
    "question": "In algorithm analysis, Constant time means?",
    "options": [
      "Algorithm terminates after a specified time.",
      "Algorithm automatically produces output in a specified constant time.",
      "Algorithm checks whether it can be completed in a given time or not.",
      "Algorithm requires the same fixed number of steps (regardless of) independent of the input size."
    ],
    "answer": "Algorithm requires the same fixed number of steps (regardless of) independent of the input size."
  },
  {
    "id": 875,
    "question": "If every problem in NP can be polynomial-time reducible to a problem 'A,' and 'A' is not in NP, then 'A' is called:",
    "options": [
      "NP-Hard",
      "NP-Complete",
      "P",
      "None"
    ],
    "answer": "NP-Hard"
  },
  {
    "id": 876,
    "question": "If every problem in NP can be polynomial-time reducible to a problem 'A,' and 'A' is also in NP, then 'A' is called:",
    "options": [
      "NP-Hard",
      "NP-Complete",
      "P",
      "None"
    ],
    "answer": "NP-Complete"
  },
  {
    "id": 877,
    "question": "Consider two Algorithm’s A and B, with time-complexities 100 n + 1 and n2 + n + 1, respectively. Which of the following statements is correct.",
    "options": [
      "Algorithm-A takes almost ten times longer than Algorithm-B.",
      "Algorithm-A is better than Algorithm-B.",
      "For smaller input, Algorithm-B is best, and for bigger input, Algorithm-A is best",
      "For smaller input, Algorithm-A is best, and for bigger input, Algorithm-B is best"
    ],
    "answer": "For smaller input, Algorithm-B is best, and for bigger input, Algorithm-A is best"
  },
  {
    "id": 878,
    "question": "Class NP problems are:",
    "options": [
      "verifiable in polynomial time",
      "Solvable in polynomial time",
      "Not Solvable in Non polynomial time",
      "None"
    ],
    "answer": "verifiable in polynomial time"
  },
  {
    "id": 879,
    "question": "Analysis of an Algorithms means",
    "options": [
      "Determine the amount of space to store on the hard disk",
      "Determine the amount of duration to execute or RUN",
      "Determining the amount of electrical power to complete the algorithm task.",
      "Determining the required number of instructions and storage memory required for an algorithm."
    ],
    "answer": "Determining the required number of instructions and storage memory required for an algorithm."
  },
  {
    "id": 880,
    "question": "In a full binary tree if there are L leaves, then total number of nodes N are?",
    "options": [
      "N = 2*L",
      "N = L + 1",
      "N = L – 1",
      "N = 2*L – 1"
    ],
    "answer": "N = 2*L – 1"
  },
  {
    "id": 881,
    "question": "Which of the following Recursive Algorithms analysis method is not suitable for all cases.",
    "options": [
      "Substitution Method",
      "Recurrence Tree Method",
      "Master Method",
      "None"
    ],
    "answer": "Master Method"
  },
  {
    "id": 882,
    "question": "Which operator connects the structure name to its member name?",
    "options": [
      ".",
      "->",
      "-",
      "*"
    ],
    "answer": "."
  },
  {
    "id": 883,
    "question": "Which of the following are themselves a collection of different data types?",
    "options": [
      "string",
      "int",
      "structures",
      "char"
    ],
    "answer": "structures"
  },
  {
    "id": 884,
    "question": "Prior to use a pointer variable",
    "options": [
      "It should be declared",
      "It should be initialized",
      "It should be either declared or initialized",
      "It should be declared and initialized"
    ],
    "answer": "It should be declared and initialized"
  },
  {
    "id": 885,
    "question": "C structure are also called as",
    "options": [
      "Primary datatype",
      "User-defined datatype",
      "Built-in datatype",
      "Default datatype"
    ],
    "answer": "User-defined datatype"
  },
  {
    "id": 886,
    "question": "What is the average case time complexity for finding the height of the binary tree?",
    "options": [
      "h = O(loglogn)",
      "h = O(nlogn)",
      "h = O(n)",
      "h = O(log n)"
    ],
    "answer": "h = O(log n)"
  },
  {
    "id": 887,
    "question": "What is a full binary tree?",
    "options": [
      "Each node has exactly zero or two children",
      "Each node has exactly two children",
      "All the leaves are at the same level",
      "Each node has exactly one or two children"
    ],
    "answer": "Each node has exactly zero or two children"
  },
  {
    "id": 888,
    "question": "What is a complete binary tree?",
    "options": [
      "Each node has exactly zero or two children",
      "A binary tree, which is completely filled, with the possible exception of the bottom level, which is filled from right to left",
      "A binary tree, which is completely filled, with the possible exception of the bottom level, which is filled from left to right",
      "A tree In which all nodes have degree 2"
    ],
    "answer": "A binary tree, which is completely filled, with the possible exception of the bottom level, which is filled from left to right"
  },
  {
    "id": 889,
    "question": "The number of edges from the node to the deepest leaf is called _________ of the tree.",
    "options": [
      "Height",
      "Depth",
      "Length",
      "Width"
    ],
    "answer": "Height"
  },
  {
    "id": 890,
    "question": "The sql query to establish not null constraint on the vendorid column in the vendor table is",
    "options": [
      "alter table vendor add constraint vendorid not null;",
      "alter table vendor modify constraint vendorid not null;",
      "alter table vendor modify vendorid varchar2(10) not null;",
      "alter table vendor add constraint vendor_nn not null;"
    ],
    "answer": "alter table vendor modify vendorid varchar2(10) not null;"
  },
  {
    "id": 891,
    "question": "Some addresses in the address space of the processor are assigned to I/O locations, which are implemented as a bit storage circuits organized in the form of registers, and this type of arrangement is called",
    "options": [
      "I/O registers",
      "I/O address space",
      "Memory mapped I/O",
      "I/O mapped I/O"
    ],
    "answer": "Memory mapped I/O"
  },
  {
    "id": 892,
    "question": "Telnet transfer data in",
    "options": [
      "Encrypted format",
      "Secure channel",
      "Simple plain text",
      "Privileged mode"
    ],
    "answer": "Simple plain text"
  },
  {
    "id": 893,
    "question": "Present-day electronic mail systems are based on",
    "options": [
      "Store and forward model",
      "Save and retrieve model",
      "Forward and retrieve model",
      "Save and pop model"
    ],
    "answer": "Store and forward model"
  },
  {
    "id": 894,
    "question": "Did FTP link to which protocol stack?",
    "options": [
      "Network layer",
      "TCP/IP layer",
      "Presentation layer",
      "Application layer"
    ],
    "answer": "Application layer"
  },
  {
    "id": 895,
    "question": "Worldwide Web is a collection of",
    "options": [
      "Web ID",
      "Web page",
      "Web browser",
      "Web URLs"
    ],
    "answer": "Web page"
  },
  {
    "id": 896,
    "question": "Which of the following is an advantage of SNMP?",
    "options": [
      "No security risk",
      "Detailed messages",
      "High bandwidth",
      "Support proprietary protocol"
    ],
    "answer": "Support proprietary protocol"
  },
  {
    "id": 897,
    "question": "Which is false about FTP?",
    "options": [
      "Transfer files and folders back and forth",
      "Builds and maintains a website",
      "Securely transferring files",
      "uploads or downloads files"
    ],
    "answer": "Securely transferring files"
  },
  {
    "id": 898,
    "question": "These are the idempotent method in the stateless protocol",
    "options": [
      "PUT",
      "CONNECT",
      "POST",
      "EXIT"
    ],
    "answer": "PUT"
  },
  {
    "id": 899,
    "question": "The patch is a request method used for",
    "options": [
      "Check server function",
      "Web browser function",
      "Partial modification",
      "Create a tunnel to a server"
    ],
    "answer": "Partial modification"
  },
  {
    "id": 900,
    "question": "Numerous IT organizations collect and gather information in hierarchical structure also manage and monitor files with the help of which protocol?",
    "options": [
      "SNMP",
      "Telnet",
      "FTP",
      "SMTP"
    ],
    "answer": "SNMP"
  },
  // (Append these to the 'questions' array in your questions.js file, after question 900)
  {
    "id": 901,
    "question": "Multiple web resources create common theme forms",
    "options": [
      "Website",
      "Webserver",
      "Web page",
      "Web browser"
    ],
    "answer": "Website"
  },
  {
    "id": 902,
    "question": "In the Internet stack, the protocol data unit (PDU) for the application layer is",
    "options": [
      "Segment",
      "Datagram",
      "Message",
      "Frame"
    ],
    "answer": "Message"
  },
  {
    "id": 903,
    "question": "For the client-server model, it uses a separate connection for controlling the data is",
    "options": [
      "File transfer protocol",
      "Dynamic host control protocol",
      "Secure shell protocol",
      "IETF"
    ],
    "answer": "File transfer protocol"
  },
  {
    "id": 904,
    "question": "An alert to a remotely located host from one application through agents of management protocol is",
    "options": [
      "Inform",
      "Get",
      "Trap",
      "Set"
    ],
    "answer": "Trap"
  },
  {
    "id": 905,
    "question": "A web page cannot be viewed on the world wide web if",
    "options": [
      "Type URL of the page",
      "Select the hyperlink",
      "Type HTTP",
      "Follow resource link"
    ],
    "answer": "Type HTTP"
  },
  {
    "id": 906,
    "question": "Which detects user activity on the internet and sends the data to a third party in the background?",
    "options": [
      "Malware",
      "Adware",
      "Spyware",
      "Security treat"
    ],
    "answer": "Spyware"
  },
  {
    "id": 907,
    "question": "Integrates business firewall capabilities with an intrusion prevention system (IPS) and application control using a multi-layered approach known as",
    "options": [
      "Packet-filtering firewall",
      "Stateful Inspection firewall",
      "Application-level firewall",
      "Next-Generation firewall"
    ],
    "answer": "Next-Generation firewall"
  },
  {
    "id": 908,
    "question": "Encryption is a form of security. Encryption, on the other hand, offers nothing to keep hackers and other digital pests distant. We'll need ________ to achieve this objective.",
    "options": [
      "Hubs",
      "Bridge",
      "Routers",
      "Firewalls"
    ],
    "answer": "Firewalls"
  },
  {
    "id": 909,
    "question": "This theories talk about Freudian approach that discusses the id, superego, and ego.",
    "options": [
      "Trait Personality Theories",
      "Psychodynamic Personality Theories",
      "Humanistic Personality Theories",
      "Self efficacy theories"
    ],
    "answer": "Psychodynamic Personality Theories"
  },
  {
    "id": 910,
    "question": "Participative management",
    "options": [
      "Empower employees",
      "Collective decision making",
      "Both empower employees and collective decision making",
      "Neither empower employees nor collective decision making"
    ],
    "answer": "Both empower employees and collective decision making"
  },
  {
    "id": 911,
    "question": "In his book, Capitalism and Freedom, Milton Friedman argues that ________.",
    "options": [
      "doing well while doing good is an essential corporate mantra",
      "socially responsible behaviour adds to the corporation's bottom line",
      "corporations are responsible for the environment, society, and profits",
      "the only social responsibility of business is to increase profits"
    ],
    "answer": "the only social responsibility of business is to increase profits"
  },
  {
    "id": 912,
    "question": "Ethics training should be part of a ________.",
    "options": [
      "reactive strategy",
      "contextual strategy",
      "defensive strategy",
      "proactive strategy"
    ],
    "answer": "proactive strategy"
  },
  {
    "id": 913,
    "question": "y^2 = x^3 − 5x + 1 defined over E17. If P = (3, 9) what is – P?",
    "options": [
      "(3, 9)",
      "(3, 4)",
      "(3, 8)",
      "none of the above"
    ],
    "answer": "(3, 8)"
  },
  {
    "id": 914,
    "question": "Which variant of DES is also called Encrypt-Decrypt-Encrypt mode?",
    "options": [
      "Double DES",
      "Triple DES with two keys",
      "Triple DES with three keys",
      "None of the given choices"
    ],
    "answer": "Triple DES with two keys"
  },
  {
    "id": 915,
    "question": "The plain text “come home tomorrow” will be transformed into which of the following if it uses Rail-fence technique.",
    "options": [
      "cmhmtmrooeoeoorw",
      "cmtmhmrooreoeowo",
      "cmhmtmeoeoroorwo",
      "ceohmoormoetmwor"
    ],
    "answer": "ceohmoormoetmwor"
  },
  {
    "id": 916,
    "question": "The Diffie-Hellman key exchange is vulnerable to which of the following attacks?",
    "options": [
      "Meet-in-the-middle attack",
      "Man-in-the-middle attack",
      "Phishing attack",
      "Snooping"
    ],
    "answer": "Man-in-the-middle attack"
  },
  {
    "id": 917,
    "question": "The term _____ means the redesign of a vertical organization along its horizontal workflows and processes.",
    "options": [
      "vertical linkage",
      "vertical network grouping",
      "innovation",
      "reengineering"
    ],
    "answer": "reengineering"
  },
  {
    "id": 918,
    "question": "Terminology that defines the extent to which activities within an organisation are to be subdivided",
    "options": [
      "Departmentalisation",
      "Divisional structure",
      "Work specialisation",
      "Formalisation"
    ],
    "answer": "Work specialisation"
  },
  {
    "id": 919,
    "question": "In work specialisation, efficiency is generated through________________.",
    "options": [
      "a variety of tasks.",
      "repetitive tasks.",
      "training.",
      "guidance of managers."
    ],
    "answer": "repetitive tasks."
  },
  {
    "id": 920,
    "question": "In an organic structure, formalisation is",
    "options": [
      "high.",
      "low.",
      "moderate.",
      "absent."
    ],
    "answer": "low."
  },
  {
    "id": 921,
    "question": "A(n) _____ is a group that is made up of organizationally or geographically dispersed members who are linked primarily through advanced information and communications technologies.",
    "options": [
      "vertical linkage",
      "functional department",
      "organisational committee",
      "virtual team"
    ],
    "answer": "virtual team"
  },
  {
    "id": 922,
    "question": "A small span of control decreases employee autonomy through",
    "options": [
      "tight supervision.",
      "loose supervision.",
      "biased supervision.",
      "lack of supervision."
    ],
    "answer": "tight supervision."
  },
  {
    "id": 923,
    "question": "_____ means people are organized according to what the organization produces.",
    "options": [
      "Functional grouping",
      "Divisional grouping",
      "Multi-focused grouping",
      "Horizontal grouping"
    ],
    "answer": "Divisional grouping"
  },
  {
    "id": 924,
    "question": "“The entire organization should be moving towards a common objective in a common direction” this principle is termed as",
    "options": [
      "Unity of command",
      "Unity of direction",
      "Unity of group",
      "Unity of management"
    ],
    "answer": "Unity of direction"
  },
  {
    "id": 925,
    "question": "“Keyboard Interrupt is an example for …………….",
    "options": [
      "Synchronous exception",
      "Asynchronous exception",
      "Both (a) and (b)",
      "Neither (a) nor (b)"
    ],
    "answer": "Asynchronous exception"
  },
  {
    "id": 926,
    "question": "“Array Index out of range” is an example for …………….",
    "options": [
      "Synchronous exception",
      "Asynchronous exception",
      "Both (a) and (b)",
      "Neither (a) nor (b)"
    ],
    "answer": "Synchronous exception"
  },
  {
    "id": 927,
    "question": "Which one of the following is not a step in planning?",
    "options": [
      "Establishing objectives",
      "Developing premises",
      "Determining alternative courses",
      "Identifying needs of employees"
    ],
    "answer": "Identifying needs of employees"
  },
  {
    "id": 928,
    "question": "Which of the following is the fundamental assumption about human behaviour ?",
    "options": [
      "Caused behaviour",
      "Goal oriented behaviour",
      "Motivated behaviour",
      "All of the above"
    ],
    "answer": "All of the above"
  },
  {
    "id": 929,
    "question": "Which of the following is not right about the formal organization",
    "options": [
      "Deliberately planned & created by management",
      "Stable & predictable",
      "Violation of rules may lead to penalties",
      "Social relationships are developed"
    ],
    "answer": "Social relationships are developed"
  },
  {
    "id": 930,
    "question": "Which of the following is correct about ‘Grapevine’ ?",
    "options": [
      "It tends to exist when members of formal group know one- another well",
      "It is the result of social forces at work place.",
      "It is more common in times of high organisational excitement.",
      "All the above"
    ],
    "answer": "All the above"
  },
  {
    "id": 931,
    "question": "Which of the following is an objective of time study?",
    "options": [
      "To determine the number of workers to be employed",
      "To formulate suitable incentive schemes",
      "To calculate the labor costs",
      "All of the above"
    ],
    "answer": "All of the above"
  },
  {
    "id": 932,
    "question": "Which of the following holds true for the relation f(n) = O(g(n))?",
    "options": [
      "There exist positive constants c and n0 such that 0 <= f(n) <= c*g(n) for all n >= n0",
      "There exist positive constants c and n0 such that 0 <= c*g(n) <= f(n) for all n >= n0",
      "There exist positive constants c1, c2 and n0 such that 0 <= c1*g(n) <= f(n) <= c2*g(n) for all n >= n0",
      "None of these"
    ],
    "answer": "There exist positive constants c and n0 such that 0 <= f(n) <= c*g(n) for all n >= n0"
  },
  {
    "id": 933,
    "question": "Which of the following does NOT describe a problem with scientific management?",
    "options": [
      "Productivity increases may not be reflected in workers’ pay",
      "It is better suited to complex jobs.",
      "Improvement is not necessarily maintainable.",
      "It is better suited to simple jobs."
    ],
    "answer": "It is better suited to complex jobs."
  },
  {
    "id": 934,
    "question": "Virtual functions work because of",
    "options": [
      "Virtual pointer correctly points to Virtual table",
      "Virtual Pointer does not point to virtual table",
      "There is no concept of Virtual table and virtual pointer working mechanism.",
      "Both (b) and (c)"
    ],
    "answer": "Virtual pointer correctly points to Virtual table"
  },
  {
    "id": 935,
    "question": "This stress is positive stress which motivates a person",
    "options": [
      "Chronic stress",
      "Acute stress",
      "Eustress",
      "Distress"
    ],
    "answer": "Eustress"
  },
  {
    "id": 936,
    "question": "The theorist who advocated standard methodology for doing a task and suggested that workers were motivated by pay according to output (piecework) is",
    "options": [
      "Fayol",
      "Taylor",
      "Mintzberg",
      "Mayo"
    ],
    "answer": "Taylor"
  },
  {
    "id": 937,
    "question": "The technique of differential piece rate system was developed by Taylor to",
    "options": [
      "Discriminate between efficient and inefficient workers",
      "Reward the efficient worker",
      "Motivate the inefficient workers to perform better",
      "All of the above"
    ],
    "answer": "All of the above"
  },
  {
    "id": 938,
    "question": "The managerial function of organizing is",
    "options": [
      "to review and adjust the plan in light of changing conditions",
      "to establish a program for the accomplishment of objectives",
      "to create a structure of function and duties to be performed by a group of people",
      "to get things done through and with the help of people"
    ],
    "answer": "to create a structure of function and duties to be performed by a group of people"
  },
  {
    "id": 939,
    "question": "The keyword virtual can be used for",
    "options": [
      "data members (or) variables",
      "Member functions",
      "classes",
      "Both (b) and (c)"
    ],
    "answer": "Member functions"
  },
  {
    "id": 940,
    "question": "The Hawthorne Studies doesn’t include",
    "options": [
      "The illumination studies",
      "The Relay Assembly Test Room Studies",
      "The mass interviewing Program",
      "The time and motion study"
    ],
    "answer": "The time and motion study"
  },
  {
    "id": 941,
    "question": "The behavioral science approaches add which of the following emphases to management?",
    "options": [
      "The study of people who satisfy social needs at work and how informal, as well as a formal organization affects behavior",
      "The scientific study of human behaviour and developing behavioural techniques",
      "Both A and B",
      "None of the above"
    ],
    "answer": "Both A and B"
  },
  {
    "id": 942,
    "question": "The attributions that emphasize some aspect of the individual, such as ability or skill, to explain behavior is termed as",
    "options": [
      "Dispositional Attributions",
      "Situational Attributions",
      "Event Attributions",
      "Skill Attributions"
    ],
    "answer": "Dispositional Attributions"
  },
  {
    "id": 943,
    "question": "The application of this principle of management leads to higher production and better work for the same effort. Identify the related principle of general management.",
    "options": [
      "Discipline",
      "Equity",
      "Division of work",
      "Unity of command"
    ],
    "answer": "Division of work"
  },
  {
    "id": 944,
    "question": "Planning function of management is performed by",
    "options": [
      "Top Management",
      "Middle Management",
      "Lower Management",
      "All of the above"
    ],
    "answer": "All of the above"
  },
  {
    "id": 945,
    "question": "MBO is",
    "options": [
      "Management By Options",
      "Management By Operations",
      "Management By Objectives",
      "Management By Orders"
    ],
    "answer": "Management By Objectives"
  },
  {
    "id": 946,
    "question": "Management as a discipline refers to",
    "options": [
      "Group of managers",
      "Functions of management",
      "Subject of management",
      "All of these"
    ],
    "answer": "Subject of management"
  },
  {
    "id": 947,
    "question": "In Mintzberg’s management roles, the role that communicate to employees the organization’s vision and purpose is called",
    "options": [
      "Liaison",
      "Figurehead",
      "Monitor",
      "Disseminator"
    ],
    "answer": "Disseminator"
  },
  {
    "id": 948,
    "question": "In expectancy theory, value of rewards is termed as",
    "options": [
      "Expectancy",
      "Instrumentality",
      "Valence",
      "Values"
    ],
    "answer": "Valence"
  },
  {
    "id": 949,
    "question": "In expectancy theory, the belief that performance leads to rewards is termed as",
    "options": [
      "Expectancy",
      "Instrumentality",
      "Valence",
      "Values"
    ],
    "answer": "Instrumentality"
  },
  {
    "id": 950,
    "question": "In Big Five Personality dimensions, the degree to which a person is sociable, gregarious, and assertive versus reserved, quiet and timid is called as",
    "options": [
      "Conscientiousness",
      "Extraversion–Introversion",
      "Agreeableness",
      "Emotional Stability"
    ],
    "answer": "Extraversion–Introversion"
  },
  {
    "id": 951,
    "question": "In Big Five Personality dimensions, the degree of working well with others by sharing trust, warmth, and cooperativeness is called as",
    "options": [
      "Conscientiousness",
      "Extraversion–Introversion",
      "Agreeableness",
      "Emotional Stability"
    ],
    "answer": "Agreeableness"
  },
  {
    "id": 952,
    "question": "In Big Five Personality dimensions, the ability a person displays in handling stress by remaining calm, focused, and self-confident, as opposed to insecure, anxious, and depressed is known as",
    "options": [
      "Conscientiousness",
      "Extraversion–Introversion",
      "Agreeableness",
      "Emotional Stability"
    ],
    "answer": "Emotional Stability"
  },
  {
    "id": 953,
    "question": "In a try-catch block, if exception is not caught in try block, the control must go to",
    "options": [
      "catch block",
      "same try block again",
      "immediate line of code or normal immediate block",
      "throw block"
    ],
    "answer": "catch block"
  },
  {
    "id": 954,
    "question": "Highest level of Maslow’s Hierarchy is",
    "options": [
      "Security",
      "Physiological",
      "Esteem",
      "Self- Actualization"
    ],
    "answer": "Self- Actualization"
  },
  {
    "id": 955,
    "question": "Group development stages in the order are",
    "options": [
      "Forming, Performing, Storming, Norming, Adjourning",
      "Forming, Norming, Storming, Performing, Adjourning",
      "Forming, Norming, Performing, Storming, Adjourning",
      "Forming, Storming, Norming, Performing, Adjourning"
    ],
    "answer": "Forming, Storming, Norming, Performing, Adjourning"
  },
  {
    "id": 956,
    "question": "Find the incorrect statement(s) from the following: (i). A virtual function is allowed to be a static member (ii). Virtual keyword decides the dynamic binding",
    "options": [
      "(i) only",
      "(ii) only",
      "All are incorrect",
      "All are correct"
    ],
    "answer": "(i) only"
  },
  {
    "id": 957,
    "question": "Find the correct statement(s) below:",
    "options": [
      "There should be one catch block for one try block.",
      "There may be multiple catch block for single try block.",
      "There may be a catch block without even a single try block.",
      "All are correct"
    ],
    "answer": "There may be multiple catch block for single try block."
  },
  {
    "id": 958,
    "question": "Find the correct order in Exception Handling:",
    "options": [
      "Hit – Throw - Catch – Handle",
      "Hit-catch-Throw-Handle",
      "Handle-Throw-Catch-Hit",
      "Hit-Catch-Handle-Throw"
    ],
    "answer": "Hit – Throw - Catch – Handle"
  },
  {
    "id": 959,
    "question": "Fibonnaci sequence complexity can only be identified by?",
    "options": [
      "Iterative method",
      "Recursive method",
      "Master theorem",
      "All of them"
    ],
    "answer": "All of them"
  },
  {
    "id": 960,
    "question": "Exception handling means",
    "options": [
      "clearing runtime errors",
      "managing runtime errors",
      "clearing logic errors",
      "managing logic errors"
    ],
    "answer": "managing runtime errors"
  },
  {
    "id": 961,
    "question": "Documents that outline how goals are to be accomplished are called",
    "options": [
      "Plans",
      "Goals",
      "Strategies",
      "Ideas"
    ],
    "answer": "Plans"
  },
  {
    "id": 962,
    "question": "By comparing ______ with standards, the manager can know whether the goals are achieved or not.",
    "options": [
      "Risk",
      "Ideas",
      "Actual performance",
      "Costs"
    ],
    "answer": "Actual performance"
  },
  {
    "id": 963,
    "question": "Attributions that emphasize the environment’s effect on behavior is called",
    "options": [
      "Dispositional Attributions",
      "Situational Attributions",
      "Event Attributions",
      "Skill Attributions"
    ],
    "answer": "Situational Attributions"
  },
  {
    "id": 964,
    "question": "An example for intangible premises in planning is",
    "options": [
      "capital investment",
      "Unit of production",
      "Cost per unit",
      "Goodwill"
    ],
    "answer": "Goodwill"
  },
  {
    "id": 965,
    "question": "A persons’ knowledge and ability to make effective use of any process or technique constitutes",
    "options": [
      "Technical skills",
      "Human skills",
      "Conceptual skills",
      "Employee skills"
    ],
    "answer": "Technical skills"
  },
  {
    "id": 966,
    "question": "A base class that contain pure virtual function is said be",
    "options": [
      "virtual child class",
      "abstract base class",
      "super base class",
      "None of the above"
    ],
    "answer": "abstract base class"
  },
  {
    "id": 967,
    "question": "PDA can recognise",
    "options": [
      "any grammar",
      "only CFG",
      "only regular grammar",
      "any unambiguous grammar"
    ],
    "answer": "only CFG"
  },
  {
    "id": 968,
    "question": "Network congestion occurs........",
    "options": [
      "in case of traffic overloading",
      "when a system terminates",
      "when connection between two nodes terminates",
      "when connection between three nodes terminates"
    ],
    "answer": "in case of traffic overloading"
  },
  {
    "id": 969,
    "question": "FORTRAN is a",
    "options": [
      "regular language",
      "context free language",
      "context sensitive language",
      "None of the above"
    ],
    "answer": "context free language"
  },
  {
    "id": 970,
    "question": ".......................is the protocol suite for the current Internet.",
    "options": [
      "TCP/IP",
      "NCP",
      "UNIX",
      "ACM"
    ],
    "answer": "TCP/IP"
  },
  {
    "id": 971,
    "question": "Which organization has authority over interstate and international commerce in the communications field",
    "options": [
      "ITU-T",
      "IEEE",
      "FCC",
      "ISOC"
    ],
    "answer": "FCC"
  },
  {
    "id": 972,
    "question": "Which of the following ISO standards is typically used as a framework for network communications?",
    "options": [
      "IEEE",
      "802.1X",
      "Ethernet",
      "OSI/RM"
    ],
    "answer": "OSI/RM"
  },
  {
    "id": 973,
    "question": "Which one of the following model induces administrative overload in a huge environment?",
    "options": [
      "Rule based access control",
      "Directory based access control",
      "Lattice based access control",
      "ID based access control"
    ],
    "answer": "ID based access control"
  },
  {
    "id": 974,
    "question": "Which one of the following model enables frequent changes to data permissions?",
    "options": [
      "Rule-based",
      "List-based",
      "Role-based",
      "Ticket based"
    ],
    "answer": "List-based"
  },
  {
    "id": 975,
    "question": "Which access control model is defined based on a specific profile for every user?",
    "options": [
      "Lattice based access control",
      "Directory based access control",
      "Rule based access control",
      "ID based access control"
    ],
    "answer": "ID based access control"
  },
  {
    "id": 976,
    "question": "Tractable problems mean",
    "options": [
      "Problems that cannot be solved in polynomial time",
      "Problems that can be solved in polynomial time",
      "Problems that can be solved in constant time",
      "Problems that can be solved in non-polynomial time"
    ],
    "answer": "Problems that can be solved in polynomial time"
  },
  {
    "id": 977,
    "question": "Intractable problems means",
    "options": [
      "Problems that cannot be solved in polynomial time",
      "Problems that can be solved in polynomial time",
      "Problems that can be solved in constant time",
      "Problems that can be solved in non-polynomial time"
    ],
    "answer": "Problems that cannot be solved in polynomial time"
  },
  {
    "id": 978,
    "question": "Which of the following would lead you to believe that a given system is an SMP-type system?",
    "options": [
      "Each processor is assigned a specific task",
      "There is a boss–worker relationship between the processors",
      "Each processor performs all tasks within the operating system",
      "None of the above"
    ],
    "answer": "Each processor performs all tasks within the operating system"
  },
  {
    "id": 979,
    "question": "Which of the following statements is false?",
    "options": [
      "Mobile devices must be concerned with power consumption.",
      "Mobile devices can provide features that are unavailable on desktop or laptop computers.",
      "The difference in storage capacity between a mobile device and a laptop is shrinking.",
      "Mobile devices usually have fewer processing cores than a standard desktop computer."
    ],
    "answer": "The difference in storage capacity between a mobile device and a laptop is shrinking."
  },
  {
    "id": 980,
    "question": "Which of the following statements concerning open-source operating systems is true?",
    "options": [
      "Solaris is open source",
      "Source code is freely available",
      "They are always more secure than commercial, closed systems",
      "All open-source operating systems share the same set of goals"
    ],
    "answer": "Source code is freely available"
  },
  {
    "id": 981,
    "question": "Which of the following operating systems is not open source?",
    "options": [
      "Windows",
      "BSD UNIX",
      "Linux",
      "PCLinuxOS"
    ],
    "answer": "Windows"
  },
  {
    "id": 982,
    "question": "Which of the following is a property of peer-to-peer systems?",
    "options": [
      "Clients and servers are not distinguished from one another",
      "Separate machines act as either the client or the server but not both.",
      "They do not offer any advantages over traditional client-server systems",
      "They suffer from the server acting as the bottleneck in performance"
    ],
    "answer": "Clients and servers are not distinguished from one another"
  },
  {
    "id": 983,
    "question": "Which of the following file systems is supported by the windows OS?",
    "options": [
      "NTFS",
      "FAT32",
      "exFAT",
      "All of the these"
    ],
    "answer": "All of the these"
  },
  {
    "id": 984,
    "question": "What statement concerning privileged instructions is considered false?",
    "options": [
      "They may cause harm to the system",
      "They can only be executed in kernel mode.",
      "They cannot be attempted from user mode.",
      "They are used to manage interrupts"
    ],
    "answer": "They cannot be attempted from user mode."
  },
  {
    "id": 985,
    "question": "What is Scheduling?",
    "options": [
      "Allowing a job to use the processor",
      "Making proper use of Processor",
      "The process of deciding which process to run next",
      "All of the mentioned"
    ],
    "answer": "The process of deciding which process to run next"
  },
  {
    "id": 986,
    "question": "What are some other terms for kernel-mode?",
    "options": [
      "Supervisor mode",
      "System mode",
      "Privileged mode",
      "All of the above"
    ],
    "answer": "All of the above"
  },
  {
    "id": 987,
    "question": "Two important design issues for cache memory are",
    "options": [
      "Speed and volatility",
      "Size and replacement policy",
      "Power consumption and reusability",
      "Size and access privileges"
    ],
    "answer": "Size and replacement policy"
  },
  {
    "id": 988,
    "question": "The two separate modes of operating in a system are",
    "options": [
      "Supervisor mode and system mode",
      "Kernel mode and privileged mode",
      "Physical mode and logical mode",
      "User mode and kernel mode"
    ],
    "answer": "User mode and kernel mode"
  },
  {
    "id": 989,
    "question": "The portion of the process scheduler in an operating system that dispatches processes is concerned with",
    "options": [
      "Assigning ready processes to CPU",
      "Assigning ready processes to the waiting queue",
      "Assigning running processes to blocked queue",
      "All of the mentioned"
    ],
    "answer": "Assigning ready processes to CPU"
  },
  {
    "id": 990,
    "question": "The most common secondary storage device is",
    "options": [
      "Random-access memory",
      "Solid-state disks",
      "Tape drives",
      "Magnetic disk"
    ],
    "answer": "Magnetic disk"
  },
  {
    "id": 991,
    "question": "In what way is an operating system like a government?",
    "options": [
      "It seldom functions correctly",
      "It creates an environment within which other programs can do useful work.",
      "It performs the most useful functions by itself.",
      "It is always concerned primarily with the individual's needs"
    ],
    "answer": "It creates an environment within which other programs can do useful work."
  },
  {
    "id": 992,
    "question": "Embedded computers typically run on a ____ operating system",
    "options": [
      "Real-time",
      "Windows XP",
      "Network",
      "Clustered"
    ],
    "answer": "Real-time"
  },
  {
    "id": 993,
    "question": "Bluetooth and 802.11 devices use wireless technology to communicate over several feet, in essence creating a",
    "options": [
      "Local-area network",
      "Wide-area network",
      "Personal-area network",
      "Metropolitan-area network"
    ],
    "answer": "Personal-area network"
  },
  {
    "id": 994,
    "question": "A(n) ________ is the unit of work in a system.",
    "options": [
      "Process",
      "Operating System",
      "Timer",
      "Mode bit"
    ],
    "answer": "Process"
  },
  {
    "id": 995,
    "question": "A _____ provides a file-system interface that allows clients to create and modify files",
    "options": [
      "Compute-server system",
      "File-server system",
      "Wireless network",
      "Network computer"
    ],
    "answer": "File-server system"
  },
  {
    "id": 996,
    "question": "A ____ is a custom build of the Linux operating system",
    "options": [
      "LiveCD",
      "Installation",
      "Distribution",
      "VMWare Player"
    ],
    "answer": "Distribution"
  },
  {
    "id": 997,
    "question": "A ____ can be used to prevent a user program from never returning control to the operating system",
    "options": [
      "Portal",
      "Program Counter",
      "Firewall",
      "Timer"
    ],
    "answer": "Timer"
  },
  {
    "id": 998,
    "question": "__________ is a set of software frameworks that provide additional services to application developers.",
    "options": [
      "System programs",
      "Virtualization",
      "Cloud computing",
      "Middleware"
    ],
    "answer": "Middleware"
  },
  {
    "id": 999,
    "question": "____ operating systems are designed primarily to maximize resource utilization.",
    "options": [
      "PC",
      "Handheld computer",
      "Mainframe",
      "Network"
    ],
    "answer": "Mainframe"
  },
  {
    "id": 1000,
    "question": "In ____ length instruction some programs wants a complex instruction set containing more instruction, more addressing modes and greater address rang, as in case of",
    "options": [
      "RISC",
      "CISC",
      "Both",
      "None"
    ],
    "answer": "CISC"
  },
  {
    "id": 1001,
    "question": "------------------------is not a good practice in order to enhance the security offered by password authentication?",
    "options": [
      "Enabling account lockout controls",
      "Enforcing a reasonable password policy",
      "Using password verification tools and password cracking tools against your own password database file",
      "Allowing users to reuse the same password"
    ],
    "answer": "Allowing users to reuse the same password"
  },
  {
    "id": 1002,
    "question": "Match the items of List-II with the items of List-I (Model of Organisational Behaviour vs Employee Orientation)",
    "options": [
      "(a) Autocratic - (iv) Obedience, (b) Custodial - (ii) Security and benefits, (c) Supportive - (iii) Job performance, (d) Collegial - (i) Responsible behaviour",
      "(a) Autocratic - (iv) Obedience, (b) Custodial - (iii) Job performance, (c) Supportive - (i) Responsible behaviour, (d) Collegial - (ii) Security and benefits",
      "(a) Autocratic - (i) Responsible behaviour, (b) Custodial - (iv) Obedience, (c) Supportive - (iii) Job performance, (d) Collegial - (ii) Security and benefits",
      "(a) Autocratic - (iv) Obedience, (b) Custodial - (i) Responsible behaviour, (c) Supportive - (ii) Security and benefits, (d) Collegial - (iii) Job performance"
    ],
    "answer": "(a) Autocratic - (iv) Obedience, (b) Custodial - (ii) Security and benefits, (c) Supportive - (iii) Job performance, (d) Collegial - (i) Responsible behaviour"
  },
  {
    "id": 1003,
    "question": "To control access by an active entity such as individual or process to an object encompasses designing:",
    "options": [
      "Access Rules",
      "Access Matrix",
      "Identification controls",
      "Access terminal"
    ],
    "answer": "Access Rules"
  },
  {
    "id": 1004,
    "question": "Rule-Based Access Control access is defined based on rules. Such rules would fit within what type of access control?",
    "options": [
      "Discretionary Access Control (DAC)",
      "Mandatory Access control (MAC)",
      "Non-Discretionary Access Control (NDAC)",
      "Lattice-based Access control"
    ],
    "answer": "Non-Discretionary Access Control (NDAC)"
  },
  {
    "id": 1005,
    "question": "In which of the following access control model, a central authority will determine what objects the subjects have access to and the access control is based on role or on the organizational security policy?",
    "options": [
      "Mandatory Access Control",
      "Discretionary Access Control",
      "Non-Discretionary Access Control",
      "Rule-based Access control"
    ],
    "answer": "Mandatory Access Control"
  },
  {
    "id": 1006,
    "question": "In which access control model, there are sets of elements which have greatest lower bound of values and the least upper bound of values?",
    "options": [
      "Mandatory model",
      "Discretionary model",
      "Lattice model",
      "Rule model"
    ],
    "answer": "Lattice model"
  },
  {
    "id": 1007,
    "question": "If a user admitting an identity to a system regularly in the form of a log-on ID, then what type of act it is?",
    "options": [
      "Authentication",
      "Identification",
      "Authorization",
      "Confidentiality"
    ],
    "answer": "Identification"
  },
  {
    "id": 1008,
    "question": "----------- is the type of discretionary access control (DAC) model which is based on an individual's identity.",
    "options": [
      "Identity-based Access control",
      "Rule-based Access control",
      "Non-Discretionary Access Control",
      "Lattice-based Access control"
    ],
    "answer": "Identity-based Access control"
  },
  {
    "id": 1009,
    "question": "Which of the following security services provided by Kerberos?",
    "options": [
      "Availability and nonrepudiation",
      "Confidentiality and authentication",
      "Confidentiality and integrity",
      "Availability and authorization"
    ],
    "answer": "Confidentiality and authentication"
  },
  {
    "id": 1010,
    "question": "Which of the following is considered as foremost parameter to decide the quality of a biometric device?",
    "options": [
      "Accuracy",
      "Acceptability",
      "Enrollment time",
      "Invasiveness"
    ],
    "answer": "Accuracy"
  },
  {
    "id": 1011,
    "question": "Stronger security can be provided by means of incorporating one of the following. What it is?",
    "options": [
      "Password and a PIN",
      "One-time password",
      "Pass phrase and a smart card",
      "Fingerprint"
    ],
    "answer": "Pass phrase and a smart card"
  },
  {
    "id": 1012,
    "question": "One of the following cannot be considered as an example of a deterrent access control?",
    "options": [
      "Encryption",
      "Auditing",
      "Awareness training",
      "Antivirus software"
    ],
    "answer": "Encryption"
  },
  {
    "id": 1013,
    "question": "Mention True or false. In role-based access control, every user takes one or more roles, and based on the roles, each user is allowed to access the system resources.",
    "options": [
      "True",
      "False"
    ],
    "answer": "True"
  },
  {
    "id": 1014,
    "question": "Mention True or false. Authorization deals with deciding who the user is, and the authentication deals with restricting what operations or data the user can access.",
    "options": [
      "True",
      "False"
    ],
    "answer": "False"
  },
  {
    "id": 1015,
    "question": "-------------- form of biometric device is least accepted for authentication purpose.",
    "options": [
      "Iris scan",
      "Retina scan",
      "Fingerprint",
      "Facial geometry"
    ],
    "answer": "Retina scan"
  },
  {
    "id": 1016,
    "question": "Initially what step has to be carried out to define access control?",
    "options": [
      "Accountability logging",
      "ACL verification",
      "Subject authorization",
      "Subject identification"
    ],
    "answer": "Subject identification"
  },
  {
    "id": 1017,
    "question": "An authentication factor which is physiological or behavioural characteristic unique to a subject is called?",
    "options": [
      "Account ID",
      "Biometric factor",
      "Token",
      "IQ"
    ],
    "answer": "Biometric factor"
  },
  {
    "id": 1018,
    "question": "Let us assume that an organization is using discretionary access control model for security. Then it is vulnerable to one of the following attack. What it is?",
    "options": [
      "SYN flood",
      "Impersonation",
      "Denial of service",
      "Birthday attack"
    ],
    "answer": "Impersonation"
  },
  {
    "id": 1019,
    "question": "Which one of the following access controls defined based on the use of labels?",
    "options": [
      "Discretionary",
      "Mandatory",
      "Role-based",
      "Nondiscretionary"
    ],
    "answer": "Mandatory"
  },
  {
    "id": 1020,
    "question": "In order to authenticate the users requesting to access the resources, One of the following technologies meant which can be used for fingerprint scanning, iris scanning and retina scanning",
    "options": [
      "Micrometrics",
      "Macrometrics",
      "Biometrics",
      "MicroBiometrics"
    ],
    "answer": "Biometrics"
  },
  {
    "id": 1021,
    "question": "Which return type cannot return any value to the calling function?",
    "options": [
      "int",
      "float",
      "void",
      "double"
    ],
    "answer": "void"
  },
  {
    "id": 1022,
    "question": "Which operator cannot be used with floating point numbers?",
    "options": [
      "+",
      "-",
      "%",
      "*"
    ],
    "answer": "%"
  },
  {
    "id": 1023,
    "question": "Which of the following is the conversion character associated with short integer?",
    "options": [
      "%c",
      "%h",
      "%e",
      "%f"
    ],
    "answer": "%h"
  },
  {
    "id": 1024,
    "question": "Which of the following is a valid variable name?",
    "options": [
      "Initial.Name",
      "A+B",
      "$amt",
      "Floats"
    ],
    "answer": "$amt"
  },
  {
    "id": 1025,
    "question": "What will be output for printf(“%c”, 65);",
    "options": [
      "65",
      "A",
      "10",
      "a"
    ],
    "answer": "A"
  },
  {
    "id": 1026,
    "question": "To find a raised to power of b , the function we would use is",
    "options": [
      "a^b",
      "a**b",
      "pow(b,a)",
      "pow(a,b)"
    ],
    "answer": "pow(a,b)"
  },
  {
    "id": 1027,
    "question": "To check the equality of two variables a and b , in C language",
    "options": [
      "if (a=b)",
      "if (a equalto(b))",
      "if (a==b)",
      "if((a,b)=0)"
    ],
    "answer": "if (a==b)"
  },
  {
    "id": 1028,
    "question": "The declaration unsigned u indicates:",
    "options": [
      "u is a character",
      "u is an unsigned integer",
      "u is unsigned character",
      "u is unsigned long integer"
    ],
    "answer": "u is an unsigned integer"
  },
  {
    "id": 1029,
    "question": "How many times “Hi” will be printed. { int x=0; while(x++<2) printf(“Hi”); }",
    "options": [
      "1",
      "2",
      "infinite",
      "0"
    ],
    "answer": "2"
  },
  {
    "id": 1030,
    "question": "Given a= 00110010 (50) . Write C statements to determine whether bit 1 in the above pattern is ON/OFF.(least significant bit is bit 0)",
    "options": [
      "a & 0x03",
      "a|0x03",
      "a & 0x02",
      "a | 0x02"
    ],
    "answer": "a & 0x02"
  },
  {
    "id": 1031,
    "question": "For using clrscr() function, the standard library file to be included",
    "options": [
      "conio.h",
      "stdio.h",
      "math.h",
      "iostream.h"
    ],
    "answer": "conio.h"
  },
  {
    "id": 1032,
    "question": "Which operator retrieves the lvalue of a variable?",
    "options": [
      "&",
      "*",
      "–>",
      "#"
    ],
    "answer": "&"
  },
  {
    "id": 1033,
    "question": "Which operator produces the one’s complement of the given binary value?",
    "options": [
      "Logical AND",
      "Bitwise AND",
      "Logical OR",
      "Bitwise NOT"
    ],
    "answer": "Bitwise NOT"
  },
  {
    "id": 1034,
    "question": "Which operator is used to dereference a pointer?",
    "options": [
      "&",
      "*",
      "–>",
      "~"
    ],
    "answer": "*"
  },
  {
    "id": 1035,
    "question": "Which operator has the lowest precedence?",
    "options": [
      "sizeof",
      "Unary",
      "Assignment",
      "Comma"
    ],
    "answer": "Comma"
  },
  {
    "id": 1036,
    "question": "Which of the following is not a character constant?",
    "options": [
      "‘A’",
      "“A”",
      "‘ ’",
      "‘*’"
    ],
    "answer": "“A”"
  },
  {
    "id": 1037,
    "question": "Which of the following are true statements I. goto can be used in for loop to come out of the loop II. continue takes you to beginning of the loop III. continue can be used in switch statement IV. break can be used in switch statement",
    "options": [
      "Only statement I, II, IV are correct",
      "Only statement II, IV are correct",
      "Both statements II & III are’ correct",
      "only IV is correct"
    ],
    "answer": "Only statement I, II, IV are correct"
  },
  {
    "id": 1038,
    "question": "When two strings are equal strcmp(stg1,stg2) returns",
    "options": [
      "-1",
      "0",
      "1",
      "true"
    ],
    "answer": "0"
  },
  {
    "id": 1039,
    "question": "What is ascii value for 0 and 9",
    "options": [
      "48, 57",
      "31, 40",
      "31,39",
      "56, 64"
    ],
    "answer": "48, 57"
  },
  {
    "id": 1040,
    "question": "To read a character and echo the character on to screen , with out the need to press enter key, appropriate function is",
    "options": [
      "getche()",
      "getch()",
      "getchar()",
      "getcharecho()"
    ],
    "answer": "getche()"
  },
  {
    "id": 1041,
    "question": "The operator which compares two values is",
    "options": [
      "Assignment",
      "Relational",
      "Unary",
      "Equality"
    ],
    "answer": "Relational"
  },
  {
    "id": 1042,
    "question": "Ternary operator operates on how many operands?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": "3"
  },
  {
    "id": 1043,
    "question": "Structure declaration and definition and are placed above void main(). Which one of the following statements are NOT true.",
    "options": [
      "its required by all functions",
      "Its global declaration",
      "Space available",
      "They are global declaration and available to all"
    ],
    "answer": "Space available"
  },
  {
    "id": 1044,
    "question": "Memory is allocated for a function when the function is",
    "options": [
      "declared",
      "defined",
      "called",
      "returned"
    ],
    "answer": "called"
  },
  {
    "id": 1045,
    "question": "Identify the erroneous expression.",
    "options": [
      "x=y=2, 4;",
      "res = ++a * 5;",
      "res = a/4;",
      "res = a++ –b *2"
    ],
    "answer": "res = a++ –b *2"
  },
  {
    "id": 1046,
    "question": "Following code converts c to lower case. char c =’A’; c=c+’a’- ________",
    "options": [
      "65",
      "'A'",
      "32",
      "'a'"
    ],
    "answer": "65"
  },
  {
    "id": 1047,
    "question": "Conversion specifier for string in scanf statement are",
    "options": [
      "%d",
      "%f",
      "%c",
      "%s"
    ],
    "answer": "%s"
  },
  {
    "id": 1048,
    "question": "ASCII value for a , z are",
    "options": [
      "66, 91",
      "65, 90",
      "97, 122",
      "96, 121"
    ],
    "answer": "97, 122"
  },
  {
    "id": 1049,
    "question": "ASCII value for A , Z are",
    "options": [
      "66, 91",
      "65, 90",
      "97, 122",
      "96, 121"
    ],
    "answer": "65, 90"
  },
  {
    "id": 1050,
    "question": "*(&num) is equivalent to writing",
    "options": [
      "&num",
      "*num",
      "num",
      "0"
    ],
    "answer": "num"
  },
  {
    "id": 1051,
    "question": "Which of the following is the address operator?",
    "options": [
      "@",
      "#",
      "&",
      "%"
    ],
    "answer": "&"
  },
  {
    "id": 1052,
    "question": "In the template <class T> declaration, what is T stands for",
    "options": [
      "a generic data type",
      "an arbitrary class",
      "a class defined earlier",
      "none of the above"
    ],
    "answer": "a generic data type"
  },
  {
    "id": 1053,
    "question": "There’s a notion of _______ and _______. A subject is allowed to temporarily reduce her level or set of compartments from (L, C) → (L ‘ , C’ )",
    "options": [
      "Maximum security level, Current security level",
      "Current security level, Audit security level",
      "Temporary security level , Current security level",
      "Audit security level, Maximum security level"
    ],
    "answer": "Maximum security level, Current security level"
  },
  {
    "id": 1054,
    "question": "The implements Multi–Lateral security by adding compartments",
    "options": [
      "Biba’s model",
      "Integrity Policies",
      "Bell–LaPadula model",
      "Low Water Mark"
    ],
    "answer": "Bell–LaPadula model"
  },
  {
    "id": 1055,
    "question": "The model does not give users power to alter access control in the system manifested in a principle called tranquility",
    "options": [
      "Bell–LaPadula model",
      "Biba model",
      "Low Water Mark model",
      "Ring model"
    ],
    "answer": "Bell–LaPadula model"
  },
  {
    "id": 1056,
    "question": "The Bell–LaPadula model leverages mandatory _____ a",
    "options": [
      "Access control",
      "Kernel control",
      "System control",
      "Privacy control"
    ],
    "answer": "Access control"
  },
  {
    "id": 1057,
    "question": "The _______ requires that a subject S can read an object O only if S dom O and any DAC permits it (“read down”)",
    "options": [
      "Simple Integrity Condition",
      "Complex security condition",
      "*-Property",
      "Multi lateral security"
    ],
    "answer": "Simple Integrity Condition"
  },
  {
    "id": 1058,
    "question": "Lipners model combines _____ and _____ models",
    "options": [
      "Biba model , Bell–LaPadula model",
      "Low Water Mark model , Biba Model",
      "Low Water Mark model, Ring Policy model",
      "Ring Policy model, Bell–LaPadula model"
    ],
    "answer": "Biba model , Bell–LaPadula model"
  },
  {
    "id": 1059,
    "question": "In MAC Tuples ,Process can write object when: Object MAC range (lr, hr); process MAC label pl",
    "options": [
      "pl is in (lr, hr)",
      "pl U (lr, hr)",
      "pl dom hr",
      "pl dom lr"
    ],
    "answer": "pl dom lr"
  },
  {
    "id": 1060,
    "question": "In clark Wilson model IVPs must ensure that all the _______ are in valid state when the IVP is run",
    "options": [
      "Unconstrained data items",
      "Constrained data items",
      "Transformation data items",
      "Integrity verification data items"
    ],
    "answer": "Constrained data items"
  },
  {
    "id": 1061,
    "question": "In clark Wilson model a proper_______ log files to be maintained",
    "options": [
      "Active",
      "Data",
      "Audit",
      "Internal"
    ],
    "answer": "Audit"
  },
  {
    "id": 1062,
    "question": "In Biba Model A subjects can only read an object o if",
    "options": [
      "Is > Io",
      "LO > LS",
      "Is <= Io",
      "Io <= Is"
    ],
    "answer": "Io <= Is"
  },
  {
    "id": 1063,
    "question": "In _____ , each subject S and object O is assigned an integrity level in I",
    "options": [
      "Biba’s model",
      "Bell–LaPadula",
      "Low Water Mark",
      "Integrity Policies"
    ],
    "answer": "Biba’s model"
  },
  {
    "id": 1064,
    "question": "If there is an information path from O1 to On+1, then enforcement of the low-water-mark policy requires that _____ for all i>n",
    "options": [
      "i(On) > i(O)",
      "i(On-1) != i(O1)",
      "i(On-1) >= i(O1)",
      "i(On+1) <= i(O1)"
    ],
    "answer": "i(On+1) <= i(O1)"
  },
  {
    "id": 1065,
    "question": "If (s,o,a) is in b and access is in alter mode, then fC(s) <= fO(o); also, if subject s has access to object o in alter mode, then fO(o’) <= fO(o) for all objects o’ accessed by s in observe mode",
    "options": [
      "Simple Security (ss)-Property",
      "Discretionary Simple (ds)-Property",
      "*-Property (star property)",
      "Invocation Property"
    ],
    "answer": "Invocation Property"
  },
  {
    "id": 1066,
    "question": "Access permissions defined through an access _____ and _____.",
    "options": [
      "Control matrix, Security levels",
      "Control level, Access level",
      "Control matrix, Access level",
      "Security, Permission"
    ],
    "answer": "Control matrix, Security levels"
  },
  {
    "id": 1067,
    "question": "Access must be permitted by the access control matrix: if (s,o,a) ∈ b, then a ∈ Mso",
    "options": [
      "Simple Security (ss)-Property",
      "Discretionary Security (ds)-Property",
      "Security Property (sp)",
      "Discretionary Simple (ds)-Property"
    ],
    "answer": "Discretionary Security (ds)-Property"
  },
  {
    "id": 1068,
    "question": "A system has _____ when subjects or objects levels and compartments do not change in a way that violates a given security policy.",
    "options": [
      "Weak Tranquility",
      "Tranquility",
      "Normal Operation",
      "Unclassified level"
    ],
    "answer": "Tranquility"
  },
  {
    "id": 1069,
    "question": "_____means that when a system is in use, subjects and objects levels and compartments do not change",
    "options": [
      "Weak Tranquility",
      "Tranquility",
      "Normal Operation",
      "Unclassified Level"
    ],
    "answer": "Tranquility"
  },
  {
    "id": 1070,
    "question": "________ means ensuring timely and reliable access to and the use of information.",
    "options": [
      "Integrity",
      "Availability",
      "Confidentiality",
      "Threat intelligence"
    ],
    "answer": "Availability"
  },
  {
    "id": 1071,
    "question": "________ includes activities to protect the usability, reliability, integrity and safety of the network",
    "options": [
      "Disaster security",
      "Information security",
      "Network security",
      "Application security"
    ],
    "answer": "Network security"
  },
  {
    "id": 1072,
    "question": "Which operator is used to insert the data into file?",
    "options": [
      ">>",
      "<<",
      "<",
      "none"
    ],
    "answer": "<<"
  },
  {
    "id": 1073,
    "question": "Use of Big oh notation (O) notation?",
    "options": [
      "To Specify Worst case complexity",
      "To specify Best case complexity",
      "To specify average case complexity",
      "None"
    ],
    "answer": "To Specify Worst case complexity"
  },
  {
    "id": 1074,
    "question": "Which of the following are parts of any organisation given by Mintzberg?",
    "options": [
      "Operating core",
      "Strategic apex",
      "Middle line",
      "All of the above"
    ],
    "answer": "All of the above"
  },
  {
    "id": 1075,
    "question": "______ is a set of autonomous units, each typically machine bureaucracies, coordinated by a central headquarters.",
    "options": [
      "Divisional structure",
      "Professional bureaucracy",
      "Adhocracy",
      "None of the above."
    ],
    "answer": "Divisional structure"
  },
  {
    "id": 1076,
    "question": "Which of the following is not true of the span of control?",
    "options": [
      "The average span of control affects the number of managers.",
      "Geographical separation of staff influences the span that can be coped with.",
      "High spans of control are found in supervision of line production.",
      "The technical content of jobs has little effect on the required span of control of supervisors."
    ],
    "answer": "The technical content of jobs has little effect on the required span of control of supervisors."
  },
  {
    "id": 1077,
    "question": "Which one of the following statements most accurately describes the nature of an ethical issue in business?",
    "options": [
      "Ethical issues can be resolved if you do what you think is right.",
      "Ethical issues can be resolved by following the guidance of religious beliefs.",
      "Ethical issues are difficult because all the choices may do some harm.",
      "Ethical issues are difficult because the results of a decision are hard to predict."
    ],
    "answer": "Ethical issues are difficult because all the choices may do some harm."
  },
  {
    "id": 1078,
    "question": "Which of the following statements is false about the behavioural theories of leadership?",
    "options": [
      "Consideration is people-oriented",
      "Production-orientation has little concern for people",
      "High initiating structure leaders do not set deadlines.",
      "Employee-centred leader behaviour focuses on people."
    ],
    "answer": "High initiating structure leaders do not set deadlines."
  },
  {
    "id": 1079,
    "question": "There are several practical steps that managers can take to improve the level of socially responsible behaviour in their company. Which of the following is the least likely to work?",
    "options": [
      "Publishing a statement of ethical policy in a booklet for staff.",
      "Creating a system of ethical reporting which is widely accessible on their website.",
      "Leading by example.",
      "Creating ethical structures."
    ],
    "answer": "Publishing a statement of ethical policy in a booklet for staff."
  },
  {
    "id": 1080,
    "question": "The number of persons which can be effectively supervised by a single executive or departmental head should be limited to _______ in an average firm.",
    "options": [
      "six",
      "ten",
      "fourteen",
      "twenty"
    ],
    "answer": "six"
  },
  {
    "id": 1081,
    "question": "The managerial grid used the behavioural dimensions 'concern for people' and ________",
    "options": [
      "'Concern for integrity'",
      "'Concern for profit'",
      "'Concern for environment'",
      "'Concern for production'"
    ],
    "answer": "'Concern for production'"
  },
  {
    "id": 1082,
    "question": "The following phrase is used to describe a leader:",
    "options": [
      "relies on control strategies",
      "challenges the status quo",
      "uses traditional influence",
      "acts with established culture"
    ],
    "answer": "challenges the status quo"
  },
  {
    "id": 1083,
    "question": "The following is not a principle of organisation.",
    "options": [
      "Principle of exception",
      "Principle of balance",
      "Principle of complexity",
      "Principle of co-ordination"
    ],
    "answer": "Principle of complexity"
  },
  {
    "id": 1084,
    "question": "Responsibility always flows from",
    "options": [
      "Superior to subordinate",
      "Subordinate to superior",
      "Both from the superior to the subordinate, and from the subordinate to the superior",
      "None of the answers is correct"
    ],
    "answer": "Subordinate to superior"
  },
  {
    "id": 1085,
    "question": "Leadership which enlists the help of subordinates as a group to solve problems is:",
    "options": [
      "Situational",
      "Laissez-faire",
      "participative",
      "employee-oriented"
    ],
    "answer": "participative"
  },
  {
    "id": 1086,
    "question": "In a line organisation, the business activities are divided into following three types.",
    "options": [
      "Accounts, Production, Sales",
      "Production, Quality, Sales",
      "Production, Quality, Maintenance",
      "Production, Maintenance, Sales"
    ],
    "answer": "Accounts, Production, Sales"
  },
  {
    "id": 1087,
    "question": "_______________ builds trust among individuals and in business relationships, which validates and promotes confidence in business relationships.",
    "options": [
      "Ethical conduct",
      "Social responsibility",
      "Ethical responsibility",
      "Business ethics"
    ],
    "answer": "Ethical conduct"
  },
  {
    "id": 1088,
    "question": "____ dependent on template parameter?",
    "options": [
      "base class",
      "abstract class",
      "method",
      "None of the mentioned"
    ],
    "answer": "base class"
  },
  {
    "id": 1089,
    "question": "What is the output of this program? #include <iostream> ... template <typename T> void print_mydata(T output) ...",
    "options": [
      "5.5 Hello World",
      "5.5",
      "Hello World",
      "5.5 \n Hello World"
    ],
    "answer": "5.5 \n Hello World"
  },
  {
    "id": 1090,
    "question": "Non-type template allows how many legal parameters?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": "3"
  },
  {
    "id": 1091,
    "question": "Is overloading of the function templates allowed in C++?",
    "options": [
      "Yes",
      "No",
      "May Be",
      "Can't Say"
    ],
    "answer": "Yes"
  },
  {
    "id": 1092,
    "question": "The query to add a unique constraint using alter table command on name column in the proctor table is",
    "options": [
      "alter table proctor constraint proctor_name_uk unique(name);",
      "alter table proctor add constraint proctor_name_uk unique;",
      "alter table proctor add constraint proctor_name_uk unique(name);",
      "alter table proctor add proctor_name_uk unique(name);"
    ],
    "answer": "alter table proctor add constraint proctor_name_uk unique(name);"
  },
  {
    "id": 1093,
    "question": "The query to add a check constraint on numberofstudents column in the proctor table such that the number of students is between 1 and 20 is",
    "options": [
      "alter table proctor add proctor_numberofstudents_ck check(numberofstudents>=1 and numberofstudents<=20);",
      "alter table proctor add constraint proctor_numberofstudents_ck check(numberofstudents>=1 and numberofstudents<=20);",
      "alter table proctor add proctor_numberofstudents_ck check(numberofstudents>1 and numberofstudents<20);",
      "alter proctor add constraint proctor_numberofstudents_ck check(numberofstudents>=1 and numberofstudents<=20);"
    ],
    "answer": "alter table proctor add constraint proctor_numberofstudents_ck check(numberofstudents>=1 and numberofstudents<=20);"
  },
  {
    "id": 1094,
    "question": "Select transitive dependency from the following",
    "options": [
      "x-->y then wy-->z",
      "X--> YZ then X-->Y , X--> Z",
      "X-->Y , Y-->Z then X-->Z",
      "X-->Y then XZ--> YZ"
    ],
    "answer": "X-->Y , Y-->Z then X-->Z"
  },
  {
    "id": 1095,
    "question": "Select the query to add not null constraint on the numberofstudents column in the proctor table",
    "options": [
      "alter table add constraint proctor_numberofstudent_nn not null;",
      "alter table proctor add constraint proctor_numberofstudent_nn not null;",
      "alter table proctor modify numberofstudents number constraint proctor_numberofstudents_nn not null;",
      "alter table proctor modify numberofstudents constraint proctor_numberofstudents_nn not null;"
    ],
    "answer": "alter table proctor modify numberofstudents number constraint proctor_numberofstudents_nn not null;"
  },
  {
    "id": 1096,
    "question": "Select the query that establishes the foreign key constraint between the given two tables. Here proctor id is a foreign key in the student table",
    "options": [
      "alter table student add constraint foreign key references proctor(proctorid);",
      "alter table student add constraint student_proctorid_fk foreign key references proctor(proctorid);",
      "alter table student add constraint student_proctorid_fk foreign key(proctorid) references student(proctorid);",
      "alter table student add constraint student_proctorid_fk foreign key(proctorid) references proctor(proctorid);"
    ],
    "answer": "alter table student add constraint student_proctorid_fk foreign key(proctorid) references proctor(proctorid);"
  },
  {
    "id": 1097,
    "question": "Identify the normal for the given relational schema employee (id, name, projectid, projectname, projectlocation) . An employee can work on multiple projects.",
    "options": [
      "employee relation is in first normal form",
      "employee relation is in third normal form",
      "employee relation is in second normal form",
      "employee relation is not in any normal form"
    ],
    "answer": "employee relation is not in any normal form"
  },
  {
    "id": 1098,
    "question": "Foreign keys can be established",
    "options": [
      "only at the column level",
      "only at the table level",
      "Either at the table level or at the column level",
      "All the given options are wrong"
    ],
    "answer": "Either at the table level or at the column level"
  },
  {
    "id": 1099,
    "question": "For any relation R(pqrs) the set of FD's are F= {pq-->r, q-->s}. If pq is the key for the relation then",
    "options": [
      "R is in third normal form",
      "R is in second normal form",
      "R is in Boyce Codd normal form",
      "R is not in second normal form"
    ],
    "answer": "R is not in second normal form"
  },
  {
    "id": 1100,
    "question": "For a relation R(ABC) with functional dependencies f={A-->B, B-->C,C-->A) is in",
    "options": [
      "second normal form",
      "third normal form",
      "Boyce Codd normal form",
      "All the options are correct"
    ],
    "answer": "All the options are correct"
  },
  {
    "id": 1101,
    "question": "F+ for the set of functional dependencies F = {A-->B,B-->C} is",
    "options": [
      "{A-->A,B-->B,C-->C,A-->B, B-->C,A-->C }",
      "{A-->B, B-->C,AB-->C }",
      "{A-->A,B-->B,C-->C, B-->C,A-->C }",
      "{A-->A,B-->B,C-->C}"
    ],
    "answer": "{A-->A,B-->B,C-->C,A-->B, B-->C,A-->C }"
  },
  {
    "id": 1102,
    "question": "The SQL query to establish check constraint on the location column on location column in the vendor table such that location accepts only US or UK is",
    "options": [
      "alter table vendor add constraint vendor_location_ck check(location in ('US','UK'));",
      "alter table vendor add constraint vendor_location_ck check(location = 'US' or location ='UK');",
      "Both the given SQL queries are correct",
      "Only one of the given SQL query is correct"
    ],
    "answer": "Both the given SQL queries are correct"
  },
  {
    "id": 1103,
    "question": "The SQL query to establish vendorid as the foreign key in the product table is",
    "options": [
      "alter table product add constraint foreign key(vendorId) references vendor(vendorId);",
      "alter table product add constraint product_vendorid_fr foreign key references vendor(vendorId);",
      "alter table vendor add constraint product_vendorid_fr foreign key(vendorId) references vendor(vendorId);",
      "alter table product add constraint product_vendorid_fr foreign key(vendorId) references vendor(vendorId);"
    ],
    "answer": "alter table product add constraint product_vendorid_fr foreign key(vendorId) references vendor(vendorId);"
  },
  {
    "id": 1104,
    "question": "The SQL query to establish default price as 100 in the product_price column in the product table is",
    "options": [
      "alter table product add constraint price default 100;",
      "alter table product modify product_price number default 100;",
      "alter table vendor add price default 100;",
      "alter table product add price default 100;"
    ],
    "answer": "alter table product modify product_price number default 100;"
  },
  {
    "id": 1105,
    "question": "A-->A according to rule of",
    "options": [
      "Reflexivity",
      "Transitivity",
      "Union",
      "Decomposition"
    ],
    "answer": "Reflexivity"
  },
  {
    "id": 1106,
    "question": "A table is in second normal form if",
    "options": [
      "It is in first normal form and has no partial key dependencies",
      "It is not having multivalued attributes",
      "It’s partial composite key functionally determines an attribute",
      "None of the given options are true"
    ],
    "answer": "It is in first normal form and has no partial key dependencies"
  },
  {
    "id": 1107,
    "question": "A relation R(ABC) has all attributes to be prime attributes. The highest normal form satisfied by R is",
    "options": [
      "BCNF",
      "Third Normal Form",
      "Fourth Normal Form",
      "Second Normal Form"
    ],
    "answer": "BCNF"
  },
  {
    "id": 1108,
    "question": "A relation R which is having a non-prime attribute transitively dependent on the key is not in",
    "options": [
      "Boyce Codd normal form",
      "Third normal Form",
      "Fourth Normal Form",
      "Any of the given Normal Forms"
    ],
    "answer": "Third normal Form"
  },
  {
    "id": 1109,
    "question": "Which of the following problem is undecidable?",
    "options": [
      "Membership problem for CFL",
      "Membership problem for regular sets",
      "Membership problem for CSL",
      "Membership problem for type 0 languages"
    ],
    "answer": "Membership problem for type 0 languages"
  },
  {
    "id": 1110,
    "question": "Recursive languages are",
    "options": [
      "A proper super set of CFL",
      "Always recognized by PDA",
      "Are also called type 0 languages",
      "Always recognized by FSA"
    ],
    "answer": "A proper super set of CFL"
  },
  {
    "id": 1111,
    "question": "Recursive enumerable languages are not closed under",
    "options": [
      "Union",
      "Homomorphism",
      "Complementation",
      "Concatenation"
    ],
    "answer": "Complementation"
  },
  {
    "id": 1112,
    "question": "The statement “ A Turing machine cannot solve halting problem” is",
    "options": [
      "True",
      "False",
      "Still an open problem",
      "Cannot say"
    ],
    "answer": "True"
  },
  {
    "id": 1113,
    "question": "Every non-deterministic TM can be simulated by a deterministic TM",
    "options": [
      "True",
      "False",
      "Some times",
      "None of the choices."
    ],
    "answer": "True"
  },
  {
    "id": 1114,
    "question": "Context-sensitive languages can be recognized by",
    "options": [
      "Deterministic PDA",
      "Non-deterministic PDA",
      "Linear bounded automaton",
      "Finite state automaton"
    ],
    "answer": "Linear bounded automaton"
  },
  {
    "id": 1115,
    "question": "A multi-head TM can be simulated by a single head TM",
    "options": [
      "True",
      "False",
      "Some times",
      "None of the choices."
    ],
    "answer": "True"
  },
  {
    "id": 1116,
    "question": "To determine whether the stream object is currently associated with a file ___ member function is used",
    "options": [
      "is_open",
      "Buf",
      "String",
      "None of the above"
    ],
    "answer": "is_open"
  },
  {
    "id": 1117,
    "question": "What is the output of: void main() { struct books{ float st1; char st2[6]; }*ptr; printf(\"%d\",sizeof(ptr)); }",
    "options": [
      "10",
      "6",
      "8",
      "Size of a pointer (e.g., 4 or 8)"
    ],
    "answer": "Size of a pointer (e.g., 4 or 8)"
  },
  {
    "id": 1118,
    "question": "which of the following is the correct way of declaring a float pointer variable:",
    "options": [
      "float ptr;",
      "float **ptr;",
      "*float ptr;",
      "float *ptr;"
    ],
    "answer": "float *ptr;"
  },
  {
    "id": 1119,
    "question": "What is the size of a C structure?",
    "options": [
      "C structure is always 128 bytes.",
      "Size of C structure is the total bytes of all elements of structure (with padding).",
      "Size of C structure is the size of largest element.",
      "Size of C structure is the size of smallest element."
    ],
    "answer": "Size of C structure is the total bytes of all elements of structure (with padding)."
  },
  {
    "id": 1120,
    "question": "What is actually passed if you pass a structure variable to a function?",
    "options": [
      "Copy of structure variable",
      "Reference of structure variable",
      "Starting address of structure variable",
      "Ending address of structure variable"
    ],
    "answer": "Copy of structure variable"
  },
  {
    "id": 1121,
    "question": "What is the output of: void main() { printf(“%d %d”, sizeof(int *), sizeof(int **)); }",
    "options": [
      "2 0",
      "0 2",
      "Depends on architecture (e.g., 8 8 on 64-bit)",
      "2 4"
    ],
    "answer": "Depends on architecture (e.g., 8 8 on 64-bit)"
  },
  {
    "id": 1122,
    "question": "What is the output of: void main() { int i=3, *f, **g; f=&i; g=&f; printf(“%d %d %d”, *f, **g, *(*g)); }",
    "options": [
      "4 4 4",
      "0 0 0",
      "3 3 3",
      "4 3 3"
    ],
    "answer": "3 3 3"
  },
  {
    "id": 1123,
    "question": "What is the output of: void main() { int a[]={1, 2, 3,4}, *p; p=a; ++*p; printf(“%d”, *p); }",
    "options": [
      "2",
      "1",
      "3",
      "4"
    ],
    "answer": "2"
  },
  {
    "id": 1124,
    "question": "What is the output of: void main() { int *pt, q=20; pt=&q; *pt+=1; printf(“%d,%d”,*pt,q); }",
    "options": [
      "20, 20",
      "20, 21",
      "21, 20",
      "21, 21"
    ],
    "answer": "21, 21"
  },
  {
    "id": 1125,
    "question": "What is the output of: void main() { char *st1=”qwty”; char st2[]=”qwty”; printf(“%d %d %d”, sizeof(st1),sizeof(st2),sizeof(“qwty”)); }",
    "options": [
      "Pointer Size, 5, 5",
      "2, 4, 4",
      "8, 5, 5 (if 64-bit)",
      "2, 4, 5"
    ],
    "answer": "8, 5, 5 (if 64-bit)"
  },
  {
    "id": 1126,
    "question": "What is the output of: void main() { char fast, *faster, *fastest; printf(“%d..%d”, sizeof(faster),sizeof(fastest)); }",
    "options": [
      "Pointer Size .. Pointer Size",
      "2..2",
      "4..4",
      "2..4"
    ],
    "answer": "Pointer Size .. Pointer Size"
  },
  {
    "id": 1127,
    "question": "What is the output of: void main() { char *pt=NULL; char *p=0; if(pt) printf(“PT”); else printf(“Nullvaluept”); if(p) printf(“P”); else printf(“Nullvaluep”); }",
    "options": [
      "PT P",
      "Nullvaluept P",
      "PT Nullvaluep",
      "NullvalueptNullvaluep"
    ],
    "answer": "NullvalueptNullvaluep"
  },
  {
    "id": 1128,
    "question": "What is the output of: void main() { char *pt; pt=”World”; printf(“%c\n”, *&*pt); }",
    "options": [
      "World",
      "Some address will be printed",
      "W",
      "Error"
    ],
    "answer": "W"
  },
  {
    "id": 1129,
    "question": "What is the output of: void main() { char *f=”Hello”; printf(f); }",
    "options": [
      "Hello",
      "H",
      "Hello followed by garbage value",
      "Garbage value"
    ],
    "answer": "Hello"
  },
  {
    "id": 1130,
    "question": "What is the output of: void main() { char *f; printf(“%d %d”, sizeof(*f),sizeof(f)); }",
    "options": [
      "1, Pointer Size",
      "1, 2",
      "2, 1",
      "2, 2"
    ],
    "answer": "1, Pointer Size"
  },
  {
    "id": 1131,
    "question": "What is the output of: void main() { struct books{ int pages; char str[4]; }b; printf(\"%d\",sizeof(b)); }",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "answer": "8"
  },
  {
    "id": 1132,
    "question": "What is the output of: void main() { struct paint{ int type; int color; }p1, p2; p1.type=1; p1.color=5; if(sizeof(p1)==sizeof(p2)) { printf(\"SAME\"); } else { printf(\"DIFFERENT\"); } }",
    "options": [
      "Garbage value",
      "DIFFERENT",
      "Compiler error",
      "SAME"
    ],
    "answer": "SAME"
  },
  {
    "id": 1133,
    "question": "What is the output of: void main() { struct laptop { int cost; char brand[10]; }; struct laptop L1={5000,\"ACER\"}; struct laptop L2={6000,\"IBM\"}; printf(\"Name=%s\",strcat(L1.brand,L2.brand)); }",
    "options": [
      "ACERIBM",
      "IBM ACER",
      "ACER IBM",
      "IBMACER"
    ],
    "answer": "ACERIBM"
  },
  {
    "id": 1134,
    "question": "What is the output of: struct tree { int q,w; }; struct tree t1={10}; printf(“%d”, t1.w); printf(“%d”, t1.q);",
    "options": [
      "0 0",
      "10 0",
      "0 10",
      "10 10"
    ],
    "answer": "0 10"
  },
  {
    "id": 1135,
    "question": "What is the output of: struct ship { char paint[10]; }b1,b2; strcpy(b1.paint,”RED”); printf(“%s”, b1.paint); b2=b1; strcpy(b2.paint,”YELLOW”); printf(“%s”, b1.paint);",
    "options": [
      "YELLOW RED",
      "RED YELLOW",
      "YELLOW YELLOW",
      "RED RED"
    ],
    "answer": "RED YELLOW"
  },
  {
    "id": 1136,
    "question": "What is the output of: struct bus { int sz; char type[10]; }b1,b2; b1.sz=20; b2=b1; printf(“b2=%d”, b2.sz);",
    "options": [
      "boat2=0",
      "boat2=-1",
      "boat2=20",
      "boat2=some garbage value"
    ],
    "answer": "boat2=20"
  },
  {
    "id": 1137,
    "question": "The address operator & cannot act on",
    "options": [
      "R-values and Arithmetic expressions",
      "Local variables",
      "Global variables",
      "Member of a structure"
    ],
    "answer": "R-values and Arithmetic expressions"
  },
  {
    "id": 1138,
    "question": "The statement int **a;",
    "options": [
      "is illegal",
      "is legal but meaningless",
      "pointer to pointer variable",
      "pointer variable"
    ],
    "answer": "pointer to pointer variable"
  },
  {
    "id": 1139,
    "question": "Select the valid statement about C structure.",
    "options": [
      "Structure elements are stored on random free memory locations",
      "Structure elements are stored in register memory locations",
      "Structure elements are stored in contiguous memory locations",
      "Structure elements are stored in detached memory locations"
    ],
    "answer": "Structure elements are stored in contiguous memory locations"
  },
  {
    "id": 1140,
    "question": "What is the time complexity of the given function? function(){ int i=1, s=1; while(s<=n) { i++; s=s+i; printf(“hello”); } }",
    "options": [
      "O(n)",
      "O(n^2)",
      "O(sqrt(n))",
      "O(nlogn)"
    ],
    "answer": "O(sqrt(n))"
  },
  {
    "id": 1141,
    "question": "What is the time complexity of the given function? function(){ int i,j,k; for(i=n/2;i<=n;i++) for(j=1;j<=n;j=2*j) for(k=1;k<=n;k=k*2) printf(“Hello”); }",
    "options": [
      "O(n * (log n)^2)",
      "O(n * log n)",
      "O(n^2 * log n)",
      "O(n^3)"
    ],
    "answer": "O(n * (log n)^2)"
  },
  {
    "id": 1142,
    "question": "Comment on the following pointer declaration. int *ptr, p;",
    "options": [
      "ptr and p, both are pointers to integer.",
      "ptr is a pointer to integer, p is not.",
      "ptr is pointer to integer, p may or may not be.",
      "ptr and p both are not pointers to integer."
    ],
    "answer": "ptr is a pointer to integer, p is not."
  },
  {
    "id": 1143,
    "question": "Choose the correct statement about C structure.",
    "options": [
      "Structure members cannot be initialized at the time of declaration",
      "Structure variables can be initialized at the time of declaration.",
      "Only integer members of structure can be initialized at the time of declaration",
      "Only float members of structure can be initialized at the time of declaration"
    ],
    "answer": "Structure variables can be initialized at the time of declaration."
  },
  {
    "id": 1144,
    "question": "struct node { int i; float j; }; struct node *s[10];",
    "options": [
      "An array, each element of which is a pointer to a structure of type node",
      "A structure of 2 fields, each field being a pointer to an array of 10",
      "A structure of 3 fields: an integer, a float, and an array of 10 elements",
      "An array, each element of which is a structure of type node"
    ],
    "answer": "An array, each element of which is a pointer to a structure of type node"
  },
  {
    "id": 1145,
    "question": "You have a class A network address 10.0.0.0 with 40 subnets, but are required to add 60 new subnets very soon. You would like to still allow for the largest possible number of host IDs per subnet. Which subnet mask should you assign?",
    "options": [
      "255.240.0.0",
      "255.248.0.0",
      "255.252.0.0",
      "255.254.0.0"
    ],
    "answer": "255.254.0.0"
  },
  {
    "id": 1146,
    "question": "Which of the transport layer protocols is connectionless?",
    "options": [
      "UDP",
      "TCP",
      "FTP",
      "Nvt"
    ],
    "answer": "UDP"
  },
  {
    "id": 1147,
    "question": "Which of the following uses network address translation?",
    "options": [
      "Routers",
      "Network adapter drivers",
      "Hubs",
      "Windows 95"
    ],
    "answer": "Routers"
  },
  {
    "id": 1148,
    "question": "Which of the following pieces of information can be found in the IP header?",
    "options": [
      "Source address of the IP packet",
      "Destination address for the IP packet",
      "Sequence number of the IP packet",
      "Both Source address of the IP packet and Destination address for the IP packet"
    ],
    "answer": "Both Source address of the IP packet and Destination address for the IP packet"
  },
  {
    "id": 1149,
    "question": "Which layer of the OSI reference model has service point addressing",
    "options": [
      "session layer",
      "physical layer",
      "transport layer",
      "data link layer"
    ],
    "answer": "transport layer"
  },
  {
    "id": 1150,
    "question": "WHICH LAYER LINKS THE NETWORK SUPPORT LAYERS AND USER SUPPORT LAYERS?",
    "options": [
      "SESSION LAYER",
      "DATA LINK LAYER",
      "TRANSPORT LAYER",
      "NETWORK LAYER"
    ],
    "answer": "TRANSPORT LAYER"
  },
  {
    "id": 1151,
    "question": "WHICH ADDRESS IDENTIFIES A PROCESS ON A HOST?",
    "options": [
      "PHYSICAL ADDRESS",
      "LOGICAL ADDRESS",
      "PORT ADDRESS",
      "SPECIFIC ADDRESS"
    ],
    "answer": "PORT ADDRESS"
  },
  {
    "id": 1152,
    "question": "What is the default subnet mask for a class C network?",
    "options": [
      "127.0.0.1",
      "255.0.0.0",
      "255.255.0.0",
      "255.255.255.0"
    ],
    "answer": "255.255.255.0"
  },
  {
    "id": 1153,
    "question": "We also don't want our undeliverable packets to hop around forever. What feature/flag limits the life of an IP packet on the network?",
    "options": [
      "Time to Live counter",
      "Subnet Mask",
      "Header Checksum",
      "Wackamole field"
    ],
    "answer": "Time to Live counter"
  },
  {
    "id": 1154,
    "question": "The standard suit of protocols used by the Internet, Intranets, extranets and some other networks.",
    "options": [
      "Protocol",
      "TCP/IP",
      "Open system",
      "Internet work processor"
    ],
    "answer": "TCP/IP"
  },
  {
    "id": 1155,
    "question": "THE 4 BYTE IP ADDRESS CONSISTS OF....",
    "options": [
      "NETWORK ADDRESS",
      "HOST ADDRESS",
      "BOTH NETWORK ADDRESS and HOST ADDRESS",
      "MAC ADDRESS"
    ],
    "answer": "BOTH NETWORK ADDRESS and HOST ADDRESS"
  },
  {
    "id": 1156,
    "question": "TCP/IP ................. layer corresponds to the OSI models to three layers.",
    "options": [
      "Application",
      "Presentation",
      "Session",
      "Transport"
    ],
    "answer": "Application"
  },
  {
    "id": 1157,
    "question": "State the following statement is true or false. (i) In class B addresses a total of more than 1 billion addresses can be formed. (ii)Class E addresses are reserved for future or experimental use.",
    "options": [
      "True, False",
      "True, True",
      "False, True",
      "False, False"
    ],
    "answer": "False, True"
  },
  {
    "id": 1158,
    "question": "Propagation time of data packets is calculated using",
    "options": [
      "transmission time + delay",
      "queuing time + processing delay",
      "distance/propagation speed",
      "message size/bandwidth"
    ],
    "answer": "distance/propagation speed"
  },
  {
    "id": 1159,
    "question": "Leaky bucket algorithm works in",
    "options": [
      "Transport layer",
      "Network layer",
      "Data link layer",
      "Application layer"
    ],
    "answer": "Network layer"
  },
  {
    "id": 1160,
    "question": "If there are N routers from source to destination, total end to end delay in sending packet P (L->number of bits in the packet R-> transmission rate)",
    "options": [
      "N",
      "(N*L)/R",
      "(2N*L)/R",
      "L/R"
    ],
    "answer": "(N*L)/R"
  },
  {
    "id": 1161,
    "question": "ICMP IS PRIMARILY USED FOR.....",
    "options": [
      "ERROR AND DIAGNOSTIC FUNCTIONS",
      "ADDRESSING",
      "FORWARDING",
      "REVERSING"
    ],
    "answer": "ERROR AND DIAGNOSTIC FUNCTIONS"
  },
  {
    "id": 1162,
    "question": "How many bits internet address is assigned to each host on a TCP/IP internet which is used in all information exchange with the host?",
    "options": [
      "16 bits",
      "32 bits",
      "48 bits",
      "64 bits"
    ],
    "answer": "32 bits"
  },
  {
    "id": 1163,
    "question": "End-to-end connectivity is provided from host-to-host in:",
    "options": [
      "Network layer",
      "Session layer",
      "Transport layer",
      "Data link layer"
    ],
    "answer": "Transport layer"
  },
  {
    "id": 1164,
    "question": "A SUBSET OF A NETWORK THAT INCLUDES ALL THE ROUTERS BUT CONTAINS NO LOOPS IS CALLED....",
    "options": [
      "SPANNING TREE",
      "SPIDER STRUCTURE",
      "SPIDER TREE",
      "ACYCLIC TREE"
    ],
    "answer": "SPANNING TREE"
  },
  {
    "id": 1165,
    "question": "................... address use 8 bits for the <network> and 24 bits for the <host> portion of the IP address.",
    "options": [
      "Class A",
      "Class B",
      "Class C",
      "Class D"
    ],
    "answer": "Class A"
  },
  {
    "id": 1166,
    "question": "............. addresses are reserved for multicasting.",
    "options": [
      "Class B",
      "Class C",
      "Class D",
      "Class E"
    ],
    "answer": "Class D"
  },
  {
    "id": 1167,
    "question": "Which of the following algorithm shows better best-case complexity?",
    "options": [
      "Quick sort",
      "Insertion sort",
      "Merge sort",
      "Selection sort"
    ],
    "answer": "Insertion sort"
  },
  {
    "id": 1168,
    "question": "What is the minimum complexity to perform sorting on an array of n elements?",
    "options": [
      "O(n logn)",
      "O(n)",
      "O(n+logn)",
      "O(logn)"
    ],
    "answer": "O(n logn)"
  },
  {
    "id": 1169,
    "question": "Which of the following is not a limitation of the binary search algorithms?",
    "options": [
      "must use a sorted array",
      "requirement of the sorted array is expensive when a lot of insertion and deletions are needed",
      "there must be a mechanism to access the middle element directly",
      "the binary search algorithm is not efficient when the data elements are more than 1500"
    ],
    "answer": "the binary search algorithm is not efficient when the data elements are more than 1500"
  },
  {
    "id": 1170,
    "question": "The condition signals the binary search is unsuccessful is,",
    "options": [
      "END<BEG+2",
      "END>BEG",
      "END<BEG",
      "END=BEG"
    ],
    "answer": "END<BEG"
  },
  {
    "id": 1171,
    "question": "Assume that the available memory space is very less. Which of the following sorting algorithm is not suitable for performing the sorting of a large amount of data elements.",
    "options": [
      "Bubble sort",
      "Insertion sort",
      "Merge sort",
      "Selection sort"
    ],
    "answer": "Merge sort"
  },
  {
    "id": 1172,
    "question": "Selection sort is suitable when,",
    "options": [
      "If even number of elements are there in the list",
      "If odd number of elements are there in the list",
      "If number of elements in the list is small",
      "If number of elements in the list is large"
    ],
    "answer": "If number of elements in the list is small"
  },
  {
    "id": 1173,
    "question": "The algorithm which works based on the intervals between the elements of the array is,",
    "options": [
      "Bubble sort",
      "Insertion sort",
      "Shell sort",
      "Selection sort"
    ],
    "answer": "Shell sort"
  },
  {
    "id": 1174,
    "question": "A minimum state DFA accepting the language L={w/w belongs {0,1}*} number of 0s and 1s in w are divisible by 3 and 5, respectively} has",
    "options": [
      "15",
      "9",
      "7",
      "8"
    ],
    "answer": "15"
  },
  {
    "id": 1175,
    "question": "The clark Wilson model addressess _______ requirments for commercial applications",
    "options": [
      "Data Integrity",
      "Data Privacy",
      "Confidentiality",
      "Threat Intelligence"
    ],
    "answer": "Data Integrity"
  },
  {
    "id": 1176,
    "question": "Which of the following attacks would compromise the integrity of system information?",
    "options": [
      "Denial-of-service",
      "Smurf",
      "SQL Injection",
      "Fraggle"
    ],
    "answer": "SQL Injection"
  },
  {
    "id": 1177,
    "question": "In clark Wilson model CDIs can only be manipulated by",
    "options": [
      "Integrity procedure",
      "Transformation procedure",
      "Unconstrained data procedure",
      "Integrity verification procedure"
    ],
    "answer": "Transformation procedure"
  },
  {
    "id": 1178,
    "question": "The SQL query to establish vendorid as the primary key in the vendor table is",
    "options": [
      "alter table vendor add constraint vendor_vendorid_pk primary key (vendorid);",
      "alter table vendor add constraint primary key (vendorid);",
      "alter table vendor add constraint vendor_vendorid_pk primary key;",
      "alter table vendor constraint vendor_vendorid_pk primary key (vendorid);"
    ],
    "answer": "alter table vendor add constraint vendor_vendorid_pk primary key (vendorid);"
  },
  {
    "id": 1179,
    "question": "The clause to set the foreign key field to null in the child table on deletion of the corresponding parent key in the parent table is",
    "options": [
      "On Delete Cascade",
      "On Delete Restrict",
      "On Delete Update",
      "On Delete Set Null"
    ],
    "answer": "On Delete Set Null"
  },
  {
    "id": 1180,
    "question": "The clause to automatically delete the entire rows in the child table on deletion of the Parent key in the parent table is",
    "options": [
      "On Delete Set Null",
      "On Delete Cascade",
      "On Delete Update",
      "All the given options are wrong"
    ],
    "answer": "On Delete Cascade"
  },
  {
    "id": 1181,
    "question": "F = {AB-->C,C-->A} , A closure is",
    "options": [
      "CA",
      "C",
      "A",
      "ABC"
    ],
    "answer": "ABC"
  },
  {
    "id": 1182,
    "question": "Which if the functional dependencies is not true in a real world scenario",
    "options": [
      "registrationnumber --> name",
      "pincode --> district",
      "personname-->city",
      "country-->capital"
    ],
    "answer": "personname-->city"
  },
  {
    "id": 1183,
    "question": "The relational schema in fourth normal form should not have",
    "options": [
      "Multi Valued Dependencies",
      "Transitive Dependencies",
      "Partial Key Dependencies",
      "Should not have any of the given dependencies"
    ],
    "answer": "Multi Valued Dependencies"
  },
  {
    "id": 1184,
    "question": "A Foreign Key",
    "options": [
      "should always be a primary key in the Parent Table",
      "should always be a unique key in the Parent Table",
      "can be either a primary key or a unique key in the Parent Table",
      "All the given options are wrong"
    ],
    "answer": "can be either a primary key or a unique key in the Parent Table"
  },
  {
    "id": 1185,
    "question": "__________ mode of addressing is a form of implied addressing:",
    "options": [
      "Stack",
      "Array",
      "Queue",
      "Binary"
    ],
    "answer": "Stack"
  },
  {
    "id": 1186,
    "question": "Definition of a language L with alphabet {a} is given as following. L= { a^nk | k > 0, and n is a positive integer constant} What is the minimum number of states needed in a DFA to recognize L?",
    "options": [
      "k+1",
      "n+1",
      "2^n+1",
      "2^k+1"
    ],
    "answer": "n+1"
  },
  {
    "id": 1187,
    "question": "Which of the following relations is correct, when comparing the worst-case complexity?",
    "options": [
      "insertion=quick <selection",
      "quick =insertion=selection",
      "insertion<selection<quick",
      "none of the above"
    ],
    "answer": "insertion<selection<quick"
  },
  {
    "id": 1188,
    "question": "Which is more suitable (DFS or BFS) if the solution is far from the starting node?",
    "options": [
      "DFS",
      "BFS",
      "Both are suitable",
      "None"
    ],
    "answer": "DFS"
  },
  {
    "id": 1189,
    "question": "Which is more suitable (DFS or BFS) if the solution is closer to the starting node?",
    "options": [
      "DFS",
      "BFS",
      "Both are suitable",
      "None"
    ],
    "answer": "BFS"
  },
  {
    "id": 1190,
    "question": "What is the status of the array after the first iteration of quick sort for the given array of elements:5,7,10,12,2,8",
    "options": [
      "2,5,7,10,12,8",
      "2,5,10,12,7,8",
      "2,7,10,12,5,8",
      "5,7,10,2,8,12"
    ],
    "answer": "2,5,7,10,12,8"
  },
  {
    "id": 1191,
    "question": "What is the status of an array after the first iteration of bubble sort for the given array of elements:5,7,10,12,2,8",
    "options": [
      "5,7,10,12,2,8",
      "5,7,10,2,12,8",
      "5,7,10,2,8,12",
      "5,7,2,8,10,12"
    ],
    "answer": "5,7,10,2,8,12"
  },
  {
    "id": 1192,
    "question": "Quick sort algorithms are not following the divide and conquer type of algorithm strategy?",
    "options": [
      "True",
      "False"
    ],
    "answer": "False"
  },
  {
    "id": 1193,
    "question": "Merge sort algorithms are following the divide and conquer type of algorithm strategy?",
    "options": [
      "True",
      "False"
    ],
    "answer": "True"
  },
  {
    "id": 1194,
    "question": "What is the status of the array after the first iteration of insertion sort for the given array of elements:5,7,10,12,2,8",
    "options": [
      "5,7,10,12,2,8",
      "2,5,10,12,7,8",
      "5,7,2,10,12,8",
      "5,7,10,2,8,12"
    ],
    "answer": "5,7,10,12,2,8"
  },
  {
    "id": 1195,
    "question": "Insertion sort algorithms are following the divide and conquer type of algorithm strategy?",
    "options": [
      "True",
      "False"
    ],
    "answer": "False"
  },
  {
    "id": 1196,
    "question": "Finite automata recognizes --------grammars",
    "options": [
      "Type-1",
      "Type-2",
      "Type-3",
      "Type-0"
    ],
    "answer": "Type-3"
  },
  {
    "id": 1197,
    "question": "The lexical analysis for a modern language such as Java needs The power of which one of the following machine models in a necessary and sufficient sense?",
    "options": [
      "Finite state automata",
      "Deterministic pushdown automata",
      "Non-deterministic pushdown automata",
      "Turing machine"
    ],
    "answer": "Finite state automata"
  },
  {
    "id": 1198,
    "question": "When FA M is given which recognizes language L and reverse of L is found by using M then there can be ___________ Final states",
    "options": [
      "2",
      "3",
      "only one",
      "any number"
    ],
    "answer": "only one"
  },
  {
    "id": 1199,
    "question": "The number of states in minimum DFA corresponding to the language (00+10)*100 is",
    "options": [
      "4",
      "3",
      "6",
      "5"
    ],
    "answer": "5"
  },
  {
    "id": 1200,
    "question": "Minimal dfa where number of 0’s are divisible by 2 and number of 1’s divisible by 3",
    "options": [
      "5",
      "6",
      "8",
      "10"
    ],
    "answer": "6"
  },
];








