const QUESTION_BANK = [
  {
    "id": 1,
    "domain": "Domain 1 · Security and Risk Management",
    "trapFamily": "Secure process over expedience",
    "trap": "Executive pressure vs due diligence",
    "difficulty": "Hard",
    "stem": "A strategic partner needs access to a shared environment tomorrow, but third-party risk review has not been completed. What is the BEST action?",
    "options": [
      "Grant access temporarily and complete the review next week.",
      "Limit access to non-sensitive areas until due diligence and approvals are completed.",
      "Share a generic account to avoid onboarding delays.",
      "Disable logging so the emergency onboarding is less disruptive."
    ],
    "answer": 1,
    "rationale": "The right move is controlled, limited exposure consistent with due diligence—not bypassing the process entirely.",
    "trapRationale": "Urgency creates pressure to waive controls, but CISSP favors controlled reduction of exposure over unchecked convenience.",
    "principle": "Do not normalize insecure shortcuts just to hit a deadline."
  },
  {
    "id": 2,
    "domain": "Domain 1 · Security and Risk Management",
    "trapFamily": "Prove effectiveness, not activity",
    "trap": "Awareness activity vs measurable risk reduction",
    "difficulty": "Easy",
    "stem": "Executives ask whether the annual security awareness campaign is improving behavior. Which metric is MOST useful?",
    "options": [
      "Number of posters distributed across office locations.",
      "Percentage of employees completing the training module.",
      "Reduction in simulated phishing click rate over time.",
      "Total hours spent by the awareness team creating content."
    ],
    "answer": 2,
    "rationale": "The strongest measure ties activity to a behavioral outcome, not just completion or effort.",
    "trapRationale": "Visible activity feels comforting, but CISSP logic looks for evidence that risk-relevant behavior changed.",
    "principle": "Prefer evidence of effectiveness over visible but weak activity."
  },
  {
    "id": 3,
    "domain": "Domain 2 · Asset Security",
    "trapFamily": "Resilience over single-point heroics",
    "trap": "Single custodian backup media",
    "difficulty": "Hard",
    "stem": "One administrator keeps the only copy of monthly backup keys in a personal safe at home. What is the MOST important improvement?",
    "options": [
      "Require the administrator to check in by phone every month.",
      "Implement controlled escrow and dual-control or approved key custodianship.",
      "Buy a second safe for the administrator's office.",
      "Print the keys and store them in the data center break room."
    ],
    "answer": 1,
    "rationale": "Key recovery and backup processes should not depend on a single individual. Formal custody and recovery reduce continuity risk.",
    "trapRationale": "The current method may seem careful, but it creates a single point of failure.",
    "principle": "Design for continuity and verified recovery, not improvisation."
  },
  {
    "id": 4,
    "domain": "Domain 2 · Asset Security",
    "trapFamily": "Right-sized control over strongest control",
    "trap": "Media sanitization overkill",
    "difficulty": "Easy",
    "stem": "A team wants to physically destroy all retired storage media, including devices containing only public test data. What is the BEST decision?",
    "options": [
      "Destroy all media because the strongest sanitization method is always best.",
      "Select sanitization or destruction methods appropriate to the data classification and media type.",
      "Reuse all media because storage is expensive.",
      "Keep retired media in a locked closet indefinitely."
    ],
    "answer": 1,
    "rationale": "Media handling should be based on classification, sensitivity, and reuse needs.",
    "trapRationale": "The strongest option feels safest, but the better answer applies the right disposal method to the right data.",
    "principle": "Choose controls based on risk and fit, not maximum strength."
  },
  {
    "id": 5,
    "domain": "Domain 3 · Security Architecture and Engineering",
    "trapFamily": "Business ownership before technical action",
    "trap": "Safety system tradeoff",
    "difficulty": "Hard",
    "stem": "A facility automation project wants to disable a safety interlock because it slows manufacturing throughput. What should happen FIRST?",
    "options": [
      "Disable it temporarily during peak production.",
      "Escalate the decision through the appropriate safety, risk, and business governance process.",
      "Let engineering decide because they run the system.",
      "Document the slowdown in a spreadsheet and proceed."
    ],
    "answer": 1,
    "rationale": "When security and safety controls affect business operations, the accountable governance body must decide. Technical teams should not unilaterally remove the control.",
    "trapRationale": "The attractive wrong answer is to let the people closest to the process decide fast, but the risk and accountability sit higher.",
    "principle": "Resolve ownership, legal, and business accountability before tuning technology."
  },
  {
    "id": 6,
    "domain": "Domain 3 · Security Architecture and Engineering",
    "trapFamily": "Prove effectiveness, not activity",
    "trap": "Resilience test vs design assumption",
    "difficulty": "Easy",
    "stem": "An architect says a new high-availability design is sufficient because both components are redundant on paper. What evidence is MOST valuable?",
    "options": [
      "A diagram showing two instances.",
      "Vendor marketing materials describing resiliency.",
      "A successful failover test under realistic conditions.",
      "A design review meeting with senior attendance."
    ],
    "answer": 2,
    "rationale": "Demonstrated failover under realistic conditions proves the design works better than diagrams or claims.",
    "trapRationale": "The wrong answers show intent and design effort. The better answer proves operational effectiveness.",
    "principle": "Prefer evidence of effectiveness over visible but weak activity."
  },
  {
    "id": 7,
    "domain": "Domain 4 · Communication and Network Security",
    "trapFamily": "Contain before recover",
    "trap": "Reconnect fast vs investigate",
    "difficulty": "Hard",
    "stem": "A branch office is suspected of sending command-and-control traffic. Local staff want the site reconnected quickly because business is impacted. What should happen FIRST?",
    "options": [
      "Reconnect the site and review logs later.",
      "Contain or isolate the affected connectivity until the situation is understood.",
      "Replace all laptops before making any network decision.",
      "Disable DNS permanently across the company."
    ],
    "answer": 1,
    "rationale": "Containment comes first to limit further spread or external communication.",
    "trapRationale": "Fast restoration feels business-friendly, but it can preserve the attack path.",
    "principle": "Reduce blast radius before broad restoration."
  },
  {
    "id": 8,
    "domain": "Domain 4 · Communication and Network Security",
    "trapFamily": "Least privilege over convenience",
    "trap": "Shared firewall admin",
    "difficulty": "Easy",
    "stem": "Multiple network engineers use the same firewall administrator account because change windows are short. What is the BEST fix?",
    "options": [
      "Keep the shared account but rotate the password weekly.",
      "Issue individual privileged access with accountability and least privilege.",
      "Allow only the most senior engineer to know the shared password.",
      "Put the password in a shared spreadsheet with MFA enabled."
    ],
    "answer": 1,
    "rationale": "Individual accountability and scoped privilege are core access principles for infrastructure administration.",
    "trapRationale": "The shared account seems operationally easy, but it weakens accountability and control.",
    "principle": "Reduce standing privilege and scope access to the task."
  },
  {
    "id": 9,
    "domain": "Domain 5 · Identity and Access Management",
    "trapFamily": "Segmentation over flat access",
    "trap": "Privilege tiering",
    "difficulty": "Hard",
    "stem": "Administrators use the same workstation and credentials to manage email, browse the internet, and administer domain controllers. What is the BEST improvement?",
    "options": [
      "Require browser extensions to block risky sites.",
      "Separate privileged administration from general-use activity with tiered access paths.",
      "Rotate admin passwords every day and keep the same workstation.",
      "Ask administrators to be more careful."
    ],
    "answer": 1,
    "rationale": "Privileged administration should be separated from lower-trust activity to reduce credential theft and exposure.",
    "trapRationale": "Awareness and password rotation do not solve the architectural exposure of mixed-use admin workstations.",
    "principle": "Reduce blast radius through separation and controlled paths."
  },
  {
    "id": 10,
    "domain": "Domain 5 · Identity and Access Management",
    "trapFamily": "Secure process over expedience",
    "trap": "Generic account workaround",
    "difficulty": "Easy",
    "stem": "A project team wants a generic service account shared by several developers to speed troubleshooting in production. What is the BEST response?",
    "options": [
      "Allow it temporarily if the password is long.",
      "Use approved service-account governance and preserve individual accountability for privileged actions.",
      "Give the developers full administrator accounts instead.",
      "Disable logs so troubleshooting is faster."
    ],
    "answer": 1,
    "rationale": "Shared credentials weaken accountability and often bypass approval and review controls.",
    "trapRationale": "A generic account feels efficient, but it undermines traceability and control discipline.",
    "principle": "Do not normalize insecure shortcuts just to hit a deadline."
  },
  {
    "id": 11,
    "domain": "Domain 6 · Security Assessment and Testing",
    "trapFamily": "Preserve evidence before analysis",
    "trap": "Testing after incident",
    "difficulty": "Hard",
    "stem": "After a breach, a team wants to repurpose forensic images as test data for new detection content before legal review is complete. What is the BEST response?",
    "options": [
      "Proceed because detection improvement is urgent.",
      "Preserve evidence handling requirements and approvals before secondary use of forensic material.",
      "Delete the images after signatures are collected.",
      "Upload them to a public sandbox for community analysis."
    ],
    "answer": 1,
    "rationale": "Forensic evidence has handling constraints. Secondary use should not compromise evidentiary integrity or legal requirements.",
    "trapRationale": "The trap is to turn valuable evidence into a convenient lab asset too quickly.",
    "principle": "Preserve evidentiary integrity before deeper analysis."
  },
  {
    "id": 12,
    "domain": "Domain 6 · Security Assessment and Testing",
    "trapFamily": "Prove effectiveness, not activity",
    "trap": "Test execution vs control validity",
    "difficulty": "Easy",
    "stem": "A vulnerability scanning program runs weekly on schedule. Which evidence BEST shows the program is effective?",
    "options": [
      "Scans complete every Sunday at midnight.",
      "Findings are prioritized, remediated appropriately, and retested to verify closure.",
      "The scanner vendor is highly rated.",
      "The security team attends regular meetings about scans."
    ],
    "answer": 1,
    "rationale": "A scanning program is effective when findings are meaningfully addressed and closure is validated.",
    "trapRationale": "Running the tool on schedule is activity; verified remediation is the outcome.",
    "principle": "Prefer evidence of effectiveness over visible but weak activity."
  },
  {
    "id": 13,
    "domain": "Domain 7 · Security Operations",
    "trapFamily": "Preserve evidence before analysis",
    "trap": "Analyze now vs preserve evidence first",
    "difficulty": "Hard",
    "stem": "A suspected insider copied sensitive files from a workstation that is still powered on. Investigators want to begin searching the drive immediately. What should happen FIRST?",
    "options": [
      "Capture and preserve relevant evidence using approved forensic procedures.",
      "Run antivirus tools to determine whether malware was involved.",
      "Interview the employee before any technical action is taken.",
      "Reboot the workstation into a forensic environment."
    ],
    "answer": 0,
    "rationale": "Before analysis, evidence integrity must be preserved. That includes proper forensic handling and chain of custody.",
    "trapRationale": "The wrong answer feels productive because analysis seems urgent. Stronger judgment preserves evidentiary integrity first.",
    "principle": "Preserve evidentiary integrity before deeper analysis."
  },
  {
    "id": 14,
    "domain": "Domain 7 · Security Operations",
    "trapFamily": "Prove effectiveness, not activity",
    "trap": "IR playbook quality",
    "difficulty": "Easy",
    "stem": "An incident response team updates its playbooks every quarter. Which evidence BEST shows the program is actually improving?",
    "options": [
      "The playbooks are stored in a version-controlled wiki.",
      "Exercises and real incidents show improved response times and fewer coordination gaps.",
      "More people are invited to the playbook review meeting.",
      "The documents have grown in length."
    ],
    "answer": 1,
    "rationale": "The value lies in better response outcomes, not just updated documents.",
    "trapRationale": "The wrong answers show administrative maturity but not operational effectiveness.",
    "principle": "Prefer evidence of effectiveness over visible but weak activity."
  },
  {
    "id": 15,
    "domain": "Domain 8 · Software Development Security",
    "trapFamily": "Segmentation over flat access",
    "trap": "CI/CD credential spread",
    "difficulty": "Hard",
    "stem": "Build pipeline credentials for production deployment are available to every developer because release work rotates frequently. What is the BEST improvement?",
    "options": [
      "Keep the model and rotate the credentials more often.",
      "Separate duties and restrict deployment privileges through controlled pipeline roles.",
      "Publish the credentials in the runbook so emergencies are easier.",
      "Disable audit logging for the pipeline to improve speed."
    ],
    "answer": 1,
    "rationale": "Release systems should preserve accountability and least privilege, especially for production deployment.",
    "trapRationale": "Broad credential distribution trades convenience for unnecessary exposure.",
    "principle": "Reduce blast radius through separation and controlled paths."
  },
  {
    "id": 16,
    "domain": "Domain 8 · Software Development Security",
    "trapFamily": "Governance before control",
    "trap": "Security requirement missing",
    "difficulty": "Easy",
    "stem": "A new mobile application is entering development, but there are no documented security requirements or data handling assumptions. What should happen FIRST?",
    "options": [
      "Start coding and add security stories later.",
      "Define security requirements and data assumptions before design and implementation proceed.",
      "Buy a mobile testing tool so defects can be found near launch.",
      "Wait until QA to see what security issues appear."
    ],
    "answer": 1,
    "rationale": "Security requirements should precede design and implementation so controls can be built intentionally.",
    "trapRationale": "The trap is to rely on downstream tools instead of requirement definition up front.",
    "principle": "Classify and assign ownership before selecting controls."
  }
];
