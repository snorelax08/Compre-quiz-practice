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
  }
  // ... continue this pattern for all other questions.
];






