const QUESTION_BANK = [
  {
    "id": 1,
    "domain": "Domain 1 · Security and Risk Management",
    "trapFamily": "Governance before control",
    "trap": "Fix fast vs govern first",
    "difficulty": "Medium",
    "stem": "A business unit wants to launch a customer portal in two weeks. The security team discovers there is no approved data classification for the customer data involved. What should the security manager do FIRST?",
    "options": [
      "Deploy DLP monitoring to catch misuse after launch.",
      "Define data ownership and classification requirements before selecting controls.",
      "Require the portal team to sign an exception acknowledging the risk.",
      "Add a web application firewall and proceed with the planned release."
    ],
    "answer": 1,
    "rationale": "Classification and ownership determine which controls are appropriate. Without that governance step, any control choice is premature.",
    "trapRationale": "The tempting answer is to add a visible control quickly, but sound judgment starts with understanding the asset and risk context before control selection.",
    "principle": "Classify and assign ownership before selecting controls."
  },
  {
    "id": 2,
    "domain": "Domain 1 · Security and Risk Management",
    "trapFamily": "Right-sized control over strongest control",
    "trap": "Strongest control vs right-sized control",
    "difficulty": "Medium",
    "stem": "A department asks for biometric authentication for an internal low-risk knowledge base because 'more security is always better.' What is the BEST response?",
    "options": [
      "Approve it because biometrics reduce password risk.",
      "Deny it because biometrics should never be used internally.",
      "Select controls based on risk, usability, and business need rather than maximum strength alone.",
      "Add biometrics only for system administrators and ignore other users."
    ],
    "answer": 2,
    "rationale": "Risk-based selection beats control maximalism. Security should be proportional to the asset and business need.",
    "trapRationale": "The attractive wrong answer is to deploy the strongest control available. The better answer fits control strength to the risk and use case.",
    "principle": "Choose controls based on risk and fit, not maximum strength."
  },
  {
    "id": 3,
    "domain": "Domain 1 · Security and Risk Management",
    "trapFamily": "Business ownership before technical action",
    "trap": "Technical fix vs business ownership",
    "difficulty": "Medium",
    "stem": "A vendor stores regulated customer data in a country with new transfer restrictions. The technical team proposes additional encryption as the solution. What should the security leader do FIRST?",
    "options": [
      "Increase key length and keep the architecture unchanged.",
      "Determine legal, contractual, and jurisdictional requirements with the appropriate stakeholders.",
      "Move the encryption keys to a different cloud region.",
      "Delay action until a regulator issues a formal penalty."
    ],
    "answer": 1,
    "rationale": "Cross-border data handling is fundamentally a governance, legal, and contractual issue before it is a technical one.",
    "trapRationale": "Encryption is useful, but it does not answer whether the transfer itself is permitted. The exam rewards resolving ownership and legal constraints first.",
    "principle": "Resolve ownership, legal, and business accountability before tuning technology."
  },
  {
    "id": 4,
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
    "id": 5,
    "domain": "Domain 1 · Security and Risk Management",
    "trapFamily": "Governance before control",
    "trap": "Policy exception vs missing policy",
    "difficulty": "Medium",
    "stem": "A project requests an exception to a data retention rule, but no approved enterprise retention schedule exists for that data type. What should happen FIRST?",
    "options": [
      "Grant a short-term exception so the project can continue.",
      "Create or confirm the retention requirement through the proper governance process.",
      "Archive the data indefinitely to avoid accidental deletion.",
      "Encrypt the data and treat retention as a later issue."
    ],
    "answer": 1,
    "rationale": "An exception cannot sensibly be granted when the governing requirement has not been defined.",
    "trapRationale": "The trap is to process the exception immediately. The better move is to establish the policy baseline first.",
    "principle": "Classify and assign ownership before selecting controls."
  },
  {
    "id": 6,
    "domain": "Domain 1 · Security and Risk Management",
    "trapFamily": "Business ownership before technical action",
    "trap": "Risk register vs engineer decision",
    "difficulty": "Easy",
    "stem": "A product team wants to accept a residual security risk after mitigation options are exhausted. Who should approve the acceptance?",
    "options": [
      "The lead engineer because the engineer understands the system best.",
      "The project manager because delivery owns the schedule.",
      "The appropriate business owner who is accountable for the risk.",
      "The security analyst who documented the findings."
    ],
    "answer": 2,
    "rationale": "Risk acceptance belongs with the accountable business owner, not with technical implementers.",
    "trapRationale": "Technical staff may understand the system best, but ownership of residual risk sits with the business.",
    "principle": "Resolve ownership, legal, and business accountability before tuning technology."
  },
  {
    "id": 7,
    "domain": "Domain 1 · Security and Risk Management",
    "trapFamily": "Right-sized control over strongest control",
    "trap": "Confidentiality impulse vs business balance",
    "difficulty": "Medium",
    "stem": "A data owner proposes encrypting every internal file share immediately, including low-value public-reference material, to 'treat everything the same.' What is the BEST response?",
    "options": [
      "Encrypt only the shares mapped to classified or otherwise sensitive data requirements.",
      "Encrypt everything because uniformity simplifies administration.",
      "Wait until a breach happens to decide which shares matter.",
      "Move all files to removable media so sharing can be controlled manually."
    ],
    "answer": 0,
    "rationale": "Controls should align with data sensitivity and business need. Uniform overprotection adds cost and friction without proportional benefit.",
    "trapRationale": "Treating everything as maximally sensitive sounds safe, but the better answer applies controls according to classification and value.",
    "principle": "Choose controls based on risk and fit, not maximum strength."
  },
  {
    "id": 8,
    "domain": "Domain 1 · Security and Risk Management",
    "trapFamily": "Governance before control",
    "trap": "Tool purchase vs requirement definition",
    "difficulty": "Medium",
    "stem": "Senior leadership wants to buy a new security governance platform after an audit finding. What should the security manager do FIRST?",
    "options": [
      "Run a proof of concept with the market leader.",
      "Define the control objectives and process gaps the tool is meant to address.",
      "Buy a platform that includes the widest feature set.",
      "Ask auditors which vendor they prefer."
    ],
    "answer": 1,
    "rationale": "Technology selection should follow clearly defined control objectives and process gaps.",
    "trapRationale": "Buying a tool feels like progress, but CISSP logic starts with the requirement, not the vendor.",
    "principle": "Classify and assign ownership before selecting controls."
  },
  {
    "id": 9,
    "domain": "Domain 1 · Security and Risk Management",
    "trapFamily": "Prove effectiveness, not activity",
    "trap": "Policy publication vs adoption",
    "difficulty": "Easy",
    "stem": "A new clean-desk policy has been published. Which evidence BEST demonstrates the policy is operating effectively?",
    "options": [
      "The policy was emailed to all employees.",
      "Managers signed that they received the document.",
      "Observations show improved compliance during follow-up inspections.",
      "The policy is stored in the policy portal with version control."
    ],
    "answer": 2,
    "rationale": "Operational evidence of compliance is stronger than evidence that the policy merely exists or was distributed.",
    "trapRationale": "The attractive wrong answers show paperwork. The better answer shows whether behavior changed.",
    "principle": "Prefer evidence of effectiveness over visible but weak activity."
  },
  {
    "id": 10,
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
    "id": 11,
    "domain": "Domain 1 · Security and Risk Management",
    "trapFamily": "Business ownership before technical action",
    "trap": "Security manager decision vs governance forum",
    "difficulty": "Medium",
    "stem": "Two business units disagree on who should fund a shared security control needed for compliance. What should happen NEXT?",
    "options": [
      "Have the security manager choose whichever unit can pay fastest.",
      "Escalate through the established governance or steering process for ownership resolution.",
      "Delay the control until next year's budgeting cycle.",
      "Implement the control in secret and charge back the cost later."
    ],
    "answer": 1,
    "rationale": "Shared accountability disputes belong in governance channels, not unilateral security decisions.",
    "trapRationale": "The trap is to force a fast answer outside the governance model. The better answer resolves ownership through the proper forum.",
    "principle": "Resolve ownership, legal, and business accountability before tuning technology."
  },
  {
    "id": 12,
    "domain": "Domain 1 · Security and Risk Management",
    "trapFamily": "Resilience over single-point heroics",
    "trap": "Heroic response vs defined process",
    "difficulty": "Easy",
    "stem": "A senior administrator claims formal incident escalation is unnecessary because 'I can handle this myself.' What is the BEST response?",
    "options": [
      "Allow the administrator to proceed if they are the most experienced.",
      "Use the incident response process so roles, decisions, and communications are controlled.",
      "Wait to escalate unless customers complain.",
      "Have the administrator email progress notes as an informal substitute."
    ],
    "answer": 1,
    "rationale": "Security operations should be process-driven, not dependent on a single hero. Defined escalation preserves coordination and accountability.",
    "trapRationale": "Individual expertise is valuable, but the stronger answer is repeatable governance and controlled response.",
    "principle": "Design for continuity and verified recovery, not improvisation."
  },
  {
    "id": 13,
    "domain": "Domain 2 · Asset Security",
    "trapFamily": "Governance before control",
    "trap": "Asset inventory vs tool deployment",
    "difficulty": "Medium",
    "stem": "A company wants to deploy data loss prevention broadly, but it does not have an accurate inventory of where sensitive data is stored. What should happen FIRST?",
    "options": [
      "Enable blocking mode for all outbound channels.",
      "Identify and map sensitive data locations and ownership.",
      "Configure the strictest default policy and tune later.",
      "Start with removable media controls only."
    ],
    "answer": 1,
    "rationale": "Data protection tooling works best when the organization knows which data exists, where it resides, and who owns it.",
    "trapRationale": "The temptation is to turn on controls broadly. The better answer establishes visibility and ownership first.",
    "principle": "Classify and assign ownership before selecting controls."
  },
  {
    "id": 14,
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
    "id": 15,
    "domain": "Domain 2 · Asset Security",
    "trapFamily": "Business ownership before technical action",
    "trap": "Retention conflict",
    "difficulty": "Easy",
    "stem": "Legal instructs the company to preserve a set of records for litigation, but operations wants them deleted under normal retention schedules. What should happen?",
    "options": [
      "Delete them on schedule to remain consistent.",
      "Preserve the records under legal hold and suspend normal deletion for that scope.",
      "Copy the records to employee laptops to ensure availability.",
      "Compress the files and keep deleting originals."
    ],
    "answer": 1,
    "rationale": "A legal hold overrides routine retention and disposal for the affected records.",
    "trapRationale": "Routine cleanup sounds orderly, but legal and business obligations take priority.",
    "principle": "Resolve ownership, legal, and business accountability before tuning technology."
  },
  {
    "id": 16,
    "domain": "Domain 2 · Asset Security",
    "trapFamily": "Segmentation over flat access",
    "trap": "Data lake sprawl vs logical separation",
    "difficulty": "Medium",
    "stem": "A central data lake now contains HR, finance, and product telemetry in one flat access model. What control improvement is MOST important?",
    "options": [
      "Give all analysts read access so collaboration is easier.",
      "Introduce logical separation and access controls by data sensitivity and use case.",
      "Turn on more verbose logging and keep access broad.",
      "Encrypt the storage account but leave user access unchanged."
    ],
    "answer": 1,
    "rationale": "Sensitive datasets should not share the same broad access model. Separation reduces blast radius and supports least privilege.",
    "trapRationale": "Encryption without access separation leaves the exposure model largely unchanged.",
    "principle": "Reduce blast radius through separation and controlled paths."
  },
  {
    "id": 17,
    "domain": "Domain 2 · Asset Security",
    "trapFamily": "Prove effectiveness, not activity",
    "trap": "Labeling effort vs outcome",
    "difficulty": "Medium",
    "stem": "A data classification initiative has been running for six months. Which metric BEST shows it is working?",
    "options": [
      "Number of workshops held with department representatives.",
      "Percentage of critical repositories correctly labeled and handled according to policy.",
      "Pages of classification guidance published on the intranet.",
      "Number of data owners invited to the project kickoff."
    ],
    "answer": 1,
    "rationale": "The strongest measure shows correct classification tied to handling behavior, not project activity alone.",
    "trapRationale": "The wrong answers reflect effort. The right answer shows operational adoption.",
    "principle": "Prefer evidence of effectiveness over visible but weak activity."
  },
  {
    "id": 18,
    "domain": "Domain 2 · Asset Security",
    "trapFamily": "Governance before control",
    "trap": "Backup everything vs classify first",
    "difficulty": "Easy",
    "stem": "A manager insists every dataset receive the same backup retention because 'storage is cheap.' What is the BEST response?",
    "options": [
      "Apply a single retention period so recovery is simpler.",
      "Base backup retention on business, legal, and recovery requirements by data type.",
      "Keep no backups for low-value data to cut cost.",
      "Store every backup forever to avoid accidental loss."
    ],
    "answer": 1,
    "rationale": "Retention decisions should follow business, legal, and recovery needs, not blanket assumptions.",
    "trapRationale": "Uniformity sounds simple, but appropriate retention depends on the data and recovery requirement.",
    "principle": "Classify and assign ownership before selecting controls."
  },
  {
    "id": 19,
    "domain": "Domain 2 · Asset Security",
    "trapFamily": "Secure process over expedience",
    "trap": "Quick sharing vs approved transfer",
    "difficulty": "Easy",
    "stem": "An employee wants to move a sensitive dataset to a personal cloud account because the approved transfer process is slow. What is the BEST response?",
    "options": [
      "Allow it if the employee promises to delete it later.",
      "Use an approved transfer mechanism and address the process bottleneck separately.",
      "Permit the upload only outside business hours.",
      "Tell the employee to split the file into smaller parts and upload them one at a time."
    ],
    "answer": 1,
    "rationale": "The process problem should be fixed, but bypassing approved handling for sensitive data is not acceptable.",
    "trapRationale": "The trap is the convenience of a quick workaround. The better answer preserves the approved handling path.",
    "principle": "Do not normalize insecure shortcuts just to hit a deadline."
  },
  {
    "id": 20,
    "domain": "Domain 2 · Asset Security",
    "trapFamily": "Business ownership before technical action",
    "trap": "Data owner absent",
    "difficulty": "Medium",
    "stem": "A critical repository contains sensitive customer data, but no one is formally assigned as owner. What should the security team do FIRST?",
    "options": [
      "Apply stricter monitoring and leave ownership undefined.",
      "Assign or escalate for formal data ownership before making broad handling decisions.",
      "Move the data into a separate database immediately.",
      "Revoke access for all users until an audit is complete."
    ],
    "answer": 1,
    "rationale": "Ownership drives classification, retention, access decisions, and accountability.",
    "trapRationale": "Controls matter, but ownership is the governance anchor that enables correct decisions.",
    "principle": "Resolve ownership, legal, and business accountability before tuning technology."
  },
  {
    "id": 21,
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
    "id": 22,
    "domain": "Domain 2 · Asset Security",
    "trapFamily": "Right-sized control over strongest control",
    "trap": "Need-to-know vs universal masking",
    "difficulty": "Hard",
    "stem": "A finance team asks to fully mask all production-like data in every internal analytics environment, including a tightly controlled fraud-analysis environment that needs realistic patterns. What is the BEST choice?",
    "options": [
      "Mask data appropriately by use case while preserving controls for sensitive environments.",
      "Mask every field everywhere with the same irreversible method.",
      "Stop all internal analytics on sensitive data.",
      "Copy the production data into spreadsheets for the fraud team only."
    ],
    "answer": 0,
    "rationale": "Security controls should fit the use case and sensitivity. Overmasking can defeat the legitimate business purpose when other safeguards can constrain risk.",
    "trapRationale": "The trap is to apply the strongest control uniformly without considering the mission and compensating safeguards.",
    "principle": "Choose controls based on risk and fit, not maximum strength."
  },
  {
    "id": 23,
    "domain": "Domain 2 · Asset Security",
    "trapFamily": "Segmentation over flat access",
    "trap": "Shared storage convenience vs exposure",
    "difficulty": "Easy",
    "stem": "Several departments want a single shared document repository with open read access because requesting access is 'too slow.' What is the BEST response?",
    "options": [
      "Allow it and rely on user discretion.",
      "Use separate repositories or permission groups aligned to business need and sensitivity.",
      "Keep one shared repository but add a warning banner.",
      "Open access during business hours only."
    ],
    "answer": 1,
    "rationale": "Segmentation and permission grouping reduce unnecessary exposure while still allowing collaboration.",
    "trapRationale": "A single flat repository is convenient, but it expands blast radius and violates need-to-know.",
    "principle": "Reduce blast radius through separation and controlled paths."
  },
  {
    "id": 24,
    "domain": "Domain 2 · Asset Security",
    "trapFamily": "Prove effectiveness, not activity",
    "trap": "Sanitization policy vs verified results",
    "difficulty": "Easy",
    "stem": "The organization introduced new media sanitization procedures last quarter. Which evidence BEST demonstrates control effectiveness?",
    "options": [
      "The procedure document was approved by leadership.",
      "Technicians completed a one-hour awareness session.",
      "A sample review confirms retired media were sanitized or destroyed according to policy.",
      "More people can access the media room than before."
    ],
    "answer": 2,
    "rationale": "Effectiveness is shown by verified execution against the requirement, not by policy approval or training alone.",
    "trapRationale": "Paperwork and training are inputs. The better evidence shows the control was actually performed correctly.",
    "principle": "Prefer evidence of effectiveness over visible but weak activity."
  },
  {
    "id": 25,
    "domain": "Domain 3 · Security Architecture and Engineering",
    "trapFamily": "Segmentation over flat access",
    "trap": "Convenience routing vs trust boundary",
    "difficulty": "Medium",
    "stem": "An engineering team wants the development network directly reachable from production to simplify troubleshooting. What is the BEST design response?",
    "options": [
      "Allow the direct route but log all traffic.",
      "Use controlled jump paths and segmentation between environments.",
      "Open the route only for senior engineers.",
      "Rely on endpoint antivirus to offset the risk."
    ],
    "answer": 1,
    "rationale": "Separate trust zones and controlled administrative paths reduce blast radius and limit lateral movement.",
    "trapRationale": "Direct connectivity sounds convenient, but it weakens trust boundaries.",
    "principle": "Reduce blast radius through separation and controlled paths."
  },
  {
    "id": 26,
    "domain": "Domain 3 · Security Architecture and Engineering",
    "trapFamily": "Right-sized control over strongest control",
    "trap": "Encryption everywhere vs architecture fit",
    "difficulty": "Medium",
    "stem": "A team proposes adding full-disk encryption to an appliance that already stores only ephemeral non-sensitive data and boots from signed images. What is the BEST response?",
    "options": [
      "Approve it because extra encryption is never a bad idea.",
      "Evaluate whether the control meaningfully addresses a real risk in this architecture.",
      "Reject it because encryption should only protect databases.",
      "Replace the appliance with a mainframe."
    ],
    "answer": 1,
    "rationale": "Controls should address real architectural risk, not be added only because they sound stronger.",
    "trapRationale": "The trap is to assume any additional control is automatically worthwhile.",
    "principle": "Choose controls based on risk and fit, not maximum strength."
  },
  {
    "id": 27,
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
    "id": 28,
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
    "id": 29,
    "domain": "Domain 3 · Security Architecture and Engineering",
    "trapFamily": "Governance before control",
    "trap": "Reference architecture absent",
    "difficulty": "Medium",
    "stem": "Multiple teams are building cloud workloads, but there is no approved secure reference architecture. What should security leadership do FIRST?",
    "options": [
      "Buy a cloud posture tool and require immediate scanning.",
      "Establish baseline architecture standards and design guardrails.",
      "Block all cloud deployments until every workload is manually reviewed.",
      "Let each team decide its own standards."
    ],
    "answer": 1,
    "rationale": "A reference architecture provides consistent guardrails and reduces ad hoc control decisions.",
    "trapRationale": "Scanning helps, but baseline architectural standards should come first.",
    "principle": "Classify and assign ownership before selecting controls."
  },
  {
    "id": 30,
    "domain": "Domain 3 · Security Architecture and Engineering",
    "trapFamily": "Segmentation over flat access",
    "trap": "Shared hypervisor management",
    "difficulty": "Hard",
    "stem": "A company manages production and lab hypervisors from the same workstation and credential set for convenience. What is the BEST improvement?",
    "options": [
      "Use separate management paths and stronger separation between production and lab administration.",
      "Keep the shared model but require longer passwords.",
      "Manage both environments from a personal laptop with VPN.",
      "Reduce logging to improve console performance."
    ],
    "answer": 0,
    "rationale": "Management-plane separation reduces cross-environment exposure and helps preserve trust boundaries.",
    "trapRationale": "The trap is to harden the same shared pathway instead of separating it.",
    "principle": "Reduce blast radius through separation and controlled paths."
  },
  {
    "id": 31,
    "domain": "Domain 3 · Security Architecture and Engineering",
    "trapFamily": "Resilience over single-point heroics",
    "trap": "Single HSM cluster admin",
    "difficulty": "Medium",
    "stem": "Only one engineer knows how to recover the hardware security module cluster after failure. What is the MOST important risk treatment?",
    "options": [
      "Give the engineer a bonus so they stay.",
      "Document and test recovery procedures with controlled cross-training.",
      "Trust the vendor to guide recovery if needed.",
      "Store the instructions only in the engineer's mailbox."
    ],
    "answer": 1,
    "rationale": "Critical recovery knowledge should be documented and exercised so continuity does not depend on one person.",
    "trapRationale": "Hero expertise helps daily operations but creates fragility during failure.",
    "principle": "Design for continuity and verified recovery, not improvisation."
  },
  {
    "id": 32,
    "domain": "Domain 3 · Security Architecture and Engineering",
    "trapFamily": "Secure process over expedience",
    "trap": "Prototype shortcut vs control drift",
    "difficulty": "Medium",
    "stem": "Architects want to reuse a prototype design in production even though key hardening steps were deferred. What is the BEST response?",
    "options": [
      "Move it to production and fix hardening after launch.",
      "Treat the production design as a separate approval decision and complete hardening requirements first.",
      "Deploy only on weekends.",
      "Have developers sign a note that the prototype is temporary."
    ],
    "answer": 1,
    "rationale": "Prototype shortcuts should not become production defaults. The secure process must be completed before production approval.",
    "trapRationale": "The trap is the belief that temporary deviations stay temporary once real users depend on them.",
    "principle": "Do not normalize insecure shortcuts just to hit a deadline."
  },
  {
    "id": 33,
    "domain": "Domain 3 · Security Architecture and Engineering",
    "trapFamily": "Right-sized control over strongest control",
    "trap": "Tamper response vs availability need",
    "difficulty": "Hard",
    "stem": "A branch office safe contains device recovery materials. Someone proposes a tamper response that permanently destroys the contents on any failed unlock attempt. What is the BEST evaluation?",
    "options": [
      "Approve it because destroying the contents maximizes confidentiality.",
      "Balance confidentiality with legitimate recovery and availability needs before choosing that control.",
      "Use the same destructive response for every branch asset.",
      "Store recovery materials in plain sight so destruction is unnecessary."
    ],
    "answer": 1,
    "rationale": "Security design should consider all relevant objectives. A destructive response may create unacceptable recovery risk.",
    "trapRationale": "The strongest confidentiality control may be inappropriate if it undermines operational resilience.",
    "principle": "Choose controls based on risk and fit, not maximum strength."
  },
  {
    "id": 34,
    "domain": "Domain 3 · Security Architecture and Engineering",
    "trapFamily": "Business ownership before technical action",
    "trap": "Control inheritance confusion",
    "difficulty": "Medium",
    "stem": "A business application migrates to a shared cloud platform. The product team assumes all needed controls are inherited, but responsibilities are undocumented. What should happen FIRST?",
    "options": [
      "Turn on every optional platform control immediately.",
      "Clarify the shared-responsibility model and assign control ownership.",
      "Let the cloud provider decide what remains to be done.",
      "Wait for an audit to discover gaps."
    ],
    "answer": 1,
    "rationale": "Shared services do not eliminate accountability. Ownership must be defined before coverage can be judged.",
    "trapRationale": "The trap is to equate provider capabilities with owned, verified control coverage.",
    "principle": "Resolve ownership, legal, and business accountability before tuning technology."
  },
  {
    "id": 35,
    "domain": "Domain 3 · Security Architecture and Engineering",
    "trapFamily": "Prove effectiveness, not activity",
    "trap": "Design review vs implemented state",
    "difficulty": "Easy",
    "stem": "A security architecture review approved network segmentation last quarter. Which evidence BEST confirms the control exists?",
    "options": [
      "Minutes from the architecture meeting.",
      "Screenshots of the architect's slide deck.",
      "Configuration and validation results showing segmentation is enforced as designed.",
      "An email from engineering saying the work is complete."
    ],
    "answer": 2,
    "rationale": "Implemented and validated configuration evidence is stronger than approvals, slides, or informal claims.",
    "trapRationale": "CISSP logic favors proof of operating state over design intent.",
    "principle": "Prefer evidence of effectiveness over visible but weak activity."
  },
  {
    "id": 36,
    "domain": "Domain 3 · Security Architecture and Engineering",
    "trapFamily": "Governance before control",
    "trap": "Pattern library vs team improvisation",
    "difficulty": "Medium",
    "stem": "Engineers repeatedly build internet-facing services with custom identity flows. What is the BEST strategic response?",
    "options": [
      "Approve the custom flows if each team signs its own risk memo.",
      "Create approved architecture patterns and require teams to use them or request exceptions.",
      "Block all internet-facing services indefinitely.",
      "Trust code review alone to catch design flaws."
    ],
    "answer": 1,
    "rationale": "Approved patterns reduce design drift, improve consistency, and make exceptions visible.",
    "trapRationale": "The trap is to let every team reinvent critical security architecture with only case-by-case review.",
    "principle": "Classify and assign ownership before selecting controls."
  },
  {
    "id": 37,
    "domain": "Domain 4 · Communication and Network Security",
    "trapFamily": "Segmentation over flat access",
    "trap": "Flat network vs blast radius",
    "difficulty": "Medium",
    "stem": "A hospital network grew rapidly and now clinical systems, guest devices, and printers share broad east-west connectivity. What is the BEST improvement?",
    "options": [
      "Increase bandwidth so network congestion is reduced.",
      "Segment the network based on trust level and business function.",
      "Install a larger core switch and keep the topology flat.",
      "Use the same administrator account on all network devices."
    ],
    "answer": 1,
    "rationale": "Segmentation reduces lateral movement and limits exposure between different trust zones.",
    "trapRationale": "Performance upgrades do not address the core security design problem of flat access.",
    "principle": "Reduce blast radius through separation and controlled paths."
  },
  {
    "id": 38,
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
    "id": 39,
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
    "id": 40,
    "domain": "Domain 4 · Communication and Network Security",
    "trapFamily": "Prove effectiveness, not activity",
    "trap": "Rule count vs policy outcome",
    "difficulty": "Medium",
    "stem": "Leadership asks whether egress filtering is working. Which measure is MOST useful?",
    "options": [
      "Total number of firewall rules deployed.",
      "Number of engineers who attended firewall training.",
      "Observed reduction in unauthorized outbound destinations and protocol usage.",
      "Age of the firewall platform."
    ],
    "answer": 2,
    "rationale": "Effectiveness is shown by whether unauthorized outbound communication is actually constrained.",
    "trapRationale": "The trap is to equate more rules or more training with better control outcomes.",
    "principle": "Prefer evidence of effectiveness over visible but weak activity."
  },
  {
    "id": 41,
    "domain": "Domain 4 · Communication and Network Security",
    "trapFamily": "Right-sized control over strongest control",
    "trap": "VPN for everything vs fit-for-purpose",
    "difficulty": "Medium",
    "stem": "A team wants to require full-tunnel VPN for all partner API traffic, even for short-lived server-to-server communications already protected by mutually authenticated TLS over private links. What is the BEST response?",
    "options": [
      "Add full-tunnel VPN because more encryption layers are always best.",
      "Evaluate whether the additional control materially reduces risk given the existing trust model.",
      "Remove TLS and rely only on VPN.",
      "Publish the API to the public internet without authentication."
    ],
    "answer": 1,
    "rationale": "Additional controls should be justified by risk reduction, not by instinctive layering.",
    "trapRationale": "Layering can help, but the exam favors fit and risk value over reflexive complexity.",
    "principle": "Choose controls based on risk and fit, not maximum strength."
  },
  {
    "id": 42,
    "domain": "Domain 4 · Communication and Network Security",
    "trapFamily": "Segmentation over flat access",
    "trap": "Wireless convenience vs segmentation",
    "difficulty": "Easy",
    "stem": "An office wants the same wireless network for employees, contractors, and conference-room devices because 'it is easier to support.' What is the BEST design choice?",
    "options": [
      "Use separate access controls or network segments by user and device type.",
      "Keep one SSID and post stronger usage rules.",
      "Rotate the pre-shared key monthly for everyone.",
      "Turn off logging to speed the network."
    ],
    "answer": 0,
    "rationale": "Different user and device classes should not share the same broad trust zone when separation is feasible.",
    "trapRationale": "Shared convenience increases blast radius and weakens control boundaries.",
    "principle": "Reduce blast radius through separation and controlled paths."
  },
  {
    "id": 43,
    "domain": "Domain 4 · Communication and Network Security",
    "trapFamily": "Business ownership before technical action",
    "trap": "Traffic inspection objection",
    "difficulty": "Hard",
    "stem": "A privacy-sensitive business unit objects to SSL inspection for a specific partner connection. What should happen FIRST?",
    "options": [
      "Inspect it anyway because network security owns the appliances.",
      "Clarify business, legal, privacy, and contractual requirements with the appropriate stakeholders.",
      "Disable TLS entirely so inspection is unnecessary.",
      "Route the traffic outside the firewall."
    ],
    "answer": 1,
    "rationale": "Inspection decisions can carry privacy, legal, and contractual implications. Stakeholder governance comes before unilateral technical action.",
    "trapRationale": "The trap is to let the network team decide alone because they control the gear.",
    "principle": "Resolve ownership, legal, and business accountability before tuning technology."
  },
  {
    "id": 44,
    "domain": "Domain 4 · Communication and Network Security",
    "trapFamily": "Secure process over expedience",
    "trap": "Emergency rule sprawl",
    "difficulty": "Medium",
    "stem": "During outages, engineers add temporary firewall rules directly in production and rarely clean them up. What is the BEST response?",
    "options": [
      "Allow it because availability is more important than governance.",
      "Use a controlled emergency-change process with review and timed cleanup.",
      "Give every engineer permanent admin to reduce delays.",
      "Remove change logging during outages."
    ],
    "answer": 1,
    "rationale": "Emergency changes still need governance, traceability, and cleanup discipline.",
    "trapRationale": "The trap is to normalize ad hoc changes because they helped once under pressure.",
    "principle": "Do not normalize insecure shortcuts just to hit a deadline."
  },
  {
    "id": 45,
    "domain": "Domain 4 · Communication and Network Security",
    "trapFamily": "Contain before recover",
    "trap": "DoS mitigation vs premature failback",
    "difficulty": "Medium",
    "stem": "Traffic is being scrubbing-routed during a denial-of-service attack. The business wants to fail back immediately once service stabilizes. What should happen FIRST?",
    "options": [
      "Fail back immediately to save provider cost.",
      "Confirm the attack has subsided and the original path can sustain service safely.",
      "Shut down the public application permanently.",
      "Move the application to a guest network."
    ],
    "answer": 1,
    "rationale": "Premature failback can re-expose the service. Stabilization and verification should precede rollback of mitigations.",
    "trapRationale": "The trap is to treat the first sign of stability as the end of the event.",
    "principle": "Reduce blast radius before broad restoration."
  },
  {
    "id": 46,
    "domain": "Domain 4 · Communication and Network Security",
    "trapFamily": "Least privilege over convenience",
    "trap": "Broad network share for packet captures",
    "difficulty": "Easy",
    "stem": "Analysts store packet captures from investigations in a broad-access network share so troubleshooting is easier across teams. What is the BEST improvement?",
    "options": [
      "Keep the share but send a memo reminding users to be careful.",
      "Store captures in a controlled repository with access limited to legitimate need.",
      "Move the files to personal drives so they are less visible.",
      "Delete captures immediately after every alert."
    ],
    "answer": 1,
    "rationale": "Investigation data can be sensitive and should be stored with controlled access based on need-to-know.",
    "trapRationale": "Broad shared storage is convenient, but it expands unnecessary exposure.",
    "principle": "Reduce standing privilege and scope access to the task."
  },
  {
    "id": 47,
    "domain": "Domain 4 · Communication and Network Security",
    "trapFamily": "Prove effectiveness, not activity",
    "trap": "Segmentation validation vs diagram",
    "difficulty": "Easy",
    "stem": "The network team says a new microsegmentation rollout is complete. Which evidence BEST confirms the result?",
    "options": [
      "A new Visio diagram was published.",
      "Validation results show blocked flows match the policy intent and permitted flows still work.",
      "The project manager marked the task done.",
      "A screenshot shows several new policies exist."
    ],
    "answer": 1,
    "rationale": "Validation against intended traffic is stronger than diagrams, screenshots, or project status.",
    "trapRationale": "The attractive wrong answers show activity and artifacts, not whether the control actually works.",
    "principle": "Prefer evidence of effectiveness over visible but weak activity."
  },
  {
    "id": 48,
    "domain": "Domain 4 · Communication and Network Security",
    "trapFamily": "Resilience over single-point heroics",
    "trap": "Single ISP vs continuity",
    "difficulty": "Medium",
    "stem": "A revenue-generating site depends on one ISP circuit because the failover contract renewal was delayed. What is the BEST risk response?",
    "options": [
      "Accept it permanently because the circuit has been stable.",
      "Restore redundancy or other approved continuity measures aligned to business availability needs.",
      "Ask employees to hotspot from their phones if the circuit fails.",
      "Disable monitoring to avoid false alarms."
    ],
    "answer": 1,
    "rationale": "Availability planning should reflect business impact. Single-provider dependence is a continuity weakness for a critical site.",
    "trapRationale": "A history of stability is not the same as resilient design.",
    "principle": "Design for continuity and verified recovery, not improvisation."
  },
  {
    "id": 49,
    "domain": "Domain 5 · Identity and Access Management",
    "trapFamily": "Least privilege over convenience",
    "trap": "Operational convenience vs standing admin",
    "difficulty": "Medium",
    "stem": "A regional office wants all help desk staff added to a privileged admin group so ticket resolution is faster after hours. What is the BEST control decision?",
    "options": [
      "Approve the request and monitor the group monthly.",
      "Use role-based access with just-in-time elevation for specific tasks.",
      "Create a shared admin account so after-hours access is easier to manage.",
      "Require supervisors to email approvals after each use."
    ],
    "answer": 1,
    "rationale": "JIT elevation and role-based access preserve least privilege while meeting operational needs.",
    "trapRationale": "The attractive wrong answer removes friction quickly, but strong judgment reduces standing privilege rather than normalizing it.",
    "principle": "Reduce standing privilege and scope access to the task."
  },
  {
    "id": 50,
    "domain": "Domain 5 · Identity and Access Management",
    "trapFamily": "Business ownership before technical action",
    "trap": "Joiner-mover-leaver ownership",
    "difficulty": "Medium",
    "stem": "HR says access errors are happening because managers do not approve role changes on time. What is the BEST governance response?",
    "options": [
      "Give IAM administrators authority to approve all access changes directly.",
      "Clarify role ownership and approval accountability with business managers and HR.",
      "Let employees choose their own access bundles.",
      "Ignore the issue if no incident has occurred yet."
    ],
    "answer": 1,
    "rationale": "Access decisions depend on business ownership and role accountability, not just technical administration.",
    "trapRationale": "The trap is to centralize approval in IT for speed, but the business best understands who should have what.",
    "principle": "Resolve ownership, legal, and business accountability before tuning technology."
  },
  {
    "id": 51,
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
    "id": 52,
    "domain": "Domain 5 · Identity and Access Management",
    "trapFamily": "Prove effectiveness, not activity",
    "trap": "Recertification quality vs completion rate",
    "difficulty": "Easy",
    "stem": "An access recertification campaign achieved 100% completion. Which evidence BEST indicates the control is valuable?",
    "options": [
      "Managers clicked complete before the deadline.",
      "A measurable reduction in unnecessary access after review.",
      "The campaign emails were sent on time.",
      "The IAM platform generated a completion dashboard."
    ],
    "answer": 1,
    "rationale": "The point of recertification is to correct over-entitlement, not just to collect approvals.",
    "trapRationale": "Completion is activity. Reduced inappropriate access is the real outcome.",
    "principle": "Prefer evidence of effectiveness over visible but weak activity."
  },
  {
    "id": 53,
    "domain": "Domain 5 · Identity and Access Management",
    "trapFamily": "Right-sized control over strongest control",
    "trap": "MFA choice vs user context",
    "difficulty": "Medium",
    "stem": "Executives want the strongest possible authentication factor for every workforce use case, including low-risk kiosk logins. What is the BEST response?",
    "options": [
      "Apply the same strongest factor everywhere regardless of context.",
      "Select authentication controls based on risk, user context, and operational fit.",
      "Remove all MFA for kiosk systems to avoid frustration.",
      "Use only passwords so all users have a uniform experience."
    ],
    "answer": 1,
    "rationale": "Authentication strength should reflect risk and context. Uniform maximum strength is not always the best design.",
    "trapRationale": "The strongest option feels secure, but proper control selection considers usability and mission constraints too.",
    "principle": "Choose controls based on risk and fit, not maximum strength."
  },
  {
    "id": 54,
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
    "id": 55,
    "domain": "Domain 5 · Identity and Access Management",
    "trapFamily": "Least privilege over convenience",
    "trap": "Broad default access bundle",
    "difficulty": "Easy",
    "stem": "New employees automatically receive a large baseline access bundle because it reduces onboarding tickets. What is the BEST response?",
    "options": [
      "Keep the large bundle and rely on annual review.",
      "Use role-based provisioning that grants only what the job requires.",
      "Give every employee read-only access to every system.",
      "Delay all access until managers submit a paper form."
    ],
    "answer": 1,
    "rationale": "Default access should be based on role need, not support efficiency.",
    "trapRationale": "The trap is optimizing ticket volume while institutionalizing overprivilege.",
    "principle": "Reduce standing privilege and scope access to the task."
  },
  {
    "id": 56,
    "domain": "Domain 5 · Identity and Access Management",
    "trapFamily": "Business ownership before technical action",
    "trap": "Entitlement dispute",
    "difficulty": "Easy",
    "stem": "A data owner and a line manager disagree about whether contractors should retain access after project completion. Who should decide?",
    "options": [
      "The IAM team because they administer the platform.",
      "The accountable resource owner under established governance rules.",
      "The contractor because they know what work remains.",
      "The help desk because they can remove access quickly."
    ],
    "answer": 1,
    "rationale": "The resource owner is accountable for deciding who should access the resource, consistent with policy.",
    "trapRationale": "Technical administrators execute decisions; they do not inherently own them.",
    "principle": "Resolve ownership, legal, and business accountability before tuning technology."
  },
  {
    "id": 57,
    "domain": "Domain 5 · Identity and Access Management",
    "trapFamily": "Prove effectiveness, not activity",
    "trap": "MFA rollout success metric",
    "difficulty": "Medium",
    "stem": "A company rolled out MFA for remote access. Which metric BEST shows the control is reducing risk?",
    "options": [
      "Number of launch communications sent.",
      "Percentage of successful logins now using MFA and reduced account takeover incidents.",
      "Size of the project budget.",
      "Number of engineers assigned to the rollout."
    ],
    "answer": 1,
    "rationale": "The best evidence links control adoption to a relevant outcome such as reduced compromise.",
    "trapRationale": "Communications and staffing show effort, not effectiveness.",
    "principle": "Prefer evidence of effectiveness over visible but weak activity."
  },
  {
    "id": 58,
    "domain": "Domain 5 · Identity and Access Management",
    "trapFamily": "Secure process over expedience",
    "trap": "Emergency access cleanup",
    "difficulty": "Easy",
    "stem": "During a critical outage, several users received emergency elevated access. What should happen after the outage is resolved?",
    "options": [
      "Leave the access in place in case another outage occurs soon.",
      "Review and remove the temporary access according to the emergency-access process.",
      "Convert the temporary access to permanent rights for convenience.",
      "Delete the logs so the event is less visible."
    ],
    "answer": 1,
    "rationale": "Emergency elevation should be temporary, reviewed, and cleaned up when the need ends.",
    "trapRationale": "The trap is to keep the privilege because it might be useful later.",
    "principle": "Do not normalize insecure shortcuts just to hit a deadline."
  },
  {
    "id": 59,
    "domain": "Domain 5 · Identity and Access Management",
    "trapFamily": "Right-sized control over strongest control",
    "trap": "Federation design vs local accounts",
    "difficulty": "Hard",
    "stem": "A partner portal team wants every partner user converted into a local internal account because 'that gives us more control.' What is the BEST evaluation?",
    "options": [
      "Use the identity model that best fits risk, lifecycle, and administrative control requirements.",
      "Always create local accounts because they seem easier to revoke.",
      "Avoid authentication entirely and use network restrictions only.",
      "Require partners to share a single account per company."
    ],
    "answer": 0,
    "rationale": "Identity architecture should fit lifecycle, assurance, and administrative needs. More direct control is not automatically the best answer.",
    "trapRationale": "The trap is to equate local control with better security without considering lifecycle and federation benefits.",
    "principle": "Choose controls based on risk and fit, not maximum strength."
  },
  {
    "id": 60,
    "domain": "Domain 5 · Identity and Access Management",
    "trapFamily": "Segmentation over flat access",
    "trap": "PAM vault vs broad secrets exposure",
    "difficulty": "Medium",
    "stem": "Privileged passwords are stored in an internal wiki because administrators need quick access during incidents. What is the BEST fix?",
    "options": [
      "Keep the wiki and add a disclaimer banner.",
      "Use a privileged access management solution or controlled secret store with audited retrieval.",
      "Email the passwords to each administrator individually.",
      "Print the passwords and keep them under keyboards."
    ],
    "answer": 1,
    "rationale": "Privileged credentials should be stored and retrieved through controlled, audited mechanisms.",
    "trapRationale": "The existing method is convenient, but it exposes high-value secrets broadly and weakens accountability.",
    "principle": "Reduce blast radius through separation and controlled paths."
  },
  {
    "id": 61,
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
    "id": 62,
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
    "id": 63,
    "domain": "Domain 6 · Security Assessment and Testing",
    "trapFamily": "Business ownership before technical action",
    "trap": "Pen test scope dispute",
    "difficulty": "Medium",
    "stem": "A penetration test team wants to expand scope into a newly acquired subsidiary network that was not approved in the rules of engagement. What should happen FIRST?",
    "options": [
      "Expand now because broader testing is always better.",
      "Obtain formal approval through the authorized scope and governance process.",
      "Test only after business hours without telling anyone.",
      "Let the lead tester decide based on technical feasibility."
    ],
    "answer": 1,
    "rationale": "Testing authority and scope must be explicit. Unauthorized expansion can create legal and operational issues.",
    "trapRationale": "The trap is assuming more testing is automatically better, even outside approved boundaries.",
    "principle": "Resolve ownership, legal, and business accountability before tuning technology."
  },
  {
    "id": 64,
    "domain": "Domain 6 · Security Assessment and Testing",
    "trapFamily": "Secure process over expedience",
    "trap": "Production test shortcut",
    "difficulty": "Medium",
    "stem": "A tester wants to run an intrusive security tool directly in production because the staging environment is not accurate enough. What is the BEST response?",
    "options": [
      "Allow it if the tester is experienced.",
      "Use the approved change, authorization, and risk process before intrusive production testing.",
      "Skip notification to avoid unnecessary concern.",
      "Run the tool only during lunch."
    ],
    "answer": 1,
    "rationale": "Potentially disruptive testing in production requires controlled approval and coordination.",
    "trapRationale": "Experience does not replace authorization and change discipline.",
    "principle": "Do not normalize insecure shortcuts just to hit a deadline."
  },
  {
    "id": 65,
    "domain": "Domain 6 · Security Assessment and Testing",
    "trapFamily": "Prove effectiveness, not activity",
    "trap": "Awareness of audit findings vs closure",
    "difficulty": "Easy",
    "stem": "An internal audit found weak control evidence collection. Which response metric BEST shows improvement?",
    "options": [
      "Number of meetings held with control owners.",
      "Percentage of controls with complete, timely, and reviewable evidence at the next cycle.",
      "Pages added to the audit procedure manual.",
      "Volume of email reminders sent."
    ],
    "answer": 1,
    "rationale": "The real improvement is better evidence quality and timeliness, not more administrative activity.",
    "trapRationale": "The trap is to count visible effort instead of control outcomes.",
    "principle": "Prefer evidence of effectiveness over visible but weak activity."
  },
  {
    "id": 66,
    "domain": "Domain 6 · Security Assessment and Testing",
    "trapFamily": "Right-sized control over strongest control",
    "trap": "Assessment depth vs risk",
    "difficulty": "Easy",
    "stem": "A low-risk internal tool is due for review. The team proposes the same testing regimen used for safety-critical platforms. What is the BEST response?",
    "options": [
      "Use identical testing for all systems to stay consistent.",
      "Scale assessment depth based on risk, exposure, and business impact.",
      "Skip testing entirely for low-risk tools.",
      "Allow developers to self-certify without review."
    ],
    "answer": 1,
    "rationale": "Assessment rigor should be proportional to risk and impact.",
    "trapRationale": "Uniform maximum depth may waste effort and delay higher-value work.",
    "principle": "Choose controls based on risk and fit, not maximum strength."
  },
  {
    "id": 67,
    "domain": "Domain 6 · Security Assessment and Testing",
    "trapFamily": "Preserve evidence before analysis",
    "trap": "Log rotation threat",
    "difficulty": "Medium",
    "stem": "A critical system may be compromised, and logs are about to rotate out. What should happen FIRST?",
    "options": [
      "Reboot the system to pause logging.",
      "Preserve the relevant logs and evidence before deeper investigative activity.",
      "Run a destructive cleanup tool to remove malware traces.",
      "Have the administrator manually review the logs and summarize them."
    ],
    "answer": 1,
    "rationale": "Potential evidence at risk of deletion should be preserved immediately.",
    "trapRationale": "The trap is to jump into analysis while evidence is still at risk of being lost.",
    "principle": "Preserve evidentiary integrity before deeper analysis."
  },
  {
    "id": 68,
    "domain": "Domain 6 · Security Assessment and Testing",
    "trapFamily": "Business ownership before technical action",
    "trap": "Control deficiency acceptance",
    "difficulty": "Easy",
    "stem": "A control assessment found a gap that will take six months to fix. Who should approve the temporary acceptance of residual risk?",
    "options": [
      "The assessor, because they documented the issue.",
      "The accountable business owner following the organization's risk process.",
      "The system user community by informal consensus.",
      "The vendor who sold the affected control."
    ],
    "answer": 1,
    "rationale": "Residual risk acceptance belongs with the accountable business owner, not the assessor or vendor.",
    "trapRationale": "Documenting a gap is not the same as owning the business decision about it.",
    "principle": "Resolve ownership, legal, and business accountability before tuning technology."
  },
  {
    "id": 69,
    "domain": "Domain 6 · Security Assessment and Testing",
    "trapFamily": "Secure process over expedience",
    "trap": "Evidence fabrication pressure",
    "difficulty": "Easy",
    "stem": "A control owner asks an analyst to backfill evidence screenshots so an audit sample appears complete. What is the BEST response?",
    "options": [
      "Do it if the control likely operated anyway.",
      "Refuse and address the evidence gap through the proper control and audit channels.",
      "Edit timestamps so the screenshots look timely.",
      "Ask a teammate to do it instead."
    ],
    "answer": 1,
    "rationale": "Fabricating evidence undermines control integrity and can create larger governance problems.",
    "trapRationale": "The pressure to make the file look complete is attractive in the moment, but the correct response protects integrity.",
    "principle": "Do not normalize insecure shortcuts just to hit a deadline."
  },
  {
    "id": 70,
    "domain": "Domain 6 · Security Assessment and Testing",
    "trapFamily": "Prove effectiveness, not activity",
    "trap": "Red team value",
    "difficulty": "Medium",
    "stem": "A red team exercise produced a lengthy report. Which follow-up BEST indicates the exercise added security value?",
    "options": [
      "The report was distributed to all managers.",
      "Findings led to remediations that were validated and improved detection or resistance.",
      "The exercise generated many screenshots.",
      "Executives praised the team's effort."
    ],
    "answer": 1,
    "rationale": "The value of adversary simulation is in validated improvements, not just the existence of a report.",
    "trapRationale": "The wrong answers show visibility and effort rather than measurable improvement.",
    "principle": "Prefer evidence of effectiveness over visible but weak activity."
  },
  {
    "id": 71,
    "domain": "Domain 6 · Security Assessment and Testing",
    "trapFamily": "Governance before control",
    "trap": "Control test without criteria",
    "difficulty": "Medium",
    "stem": "A team wants to begin control testing, but there are no defined pass/fail criteria for the selected controls. What should happen FIRST?",
    "options": [
      "Start testing and let testers decide what looks acceptable.",
      "Define the control objectives and test criteria before execution.",
      "Test only the controls that are easiest to observe.",
      "Outsource the testing and defer the criteria decision."
    ],
    "answer": 1,
    "rationale": "Meaningful testing requires defined expectations and criteria.",
    "trapRationale": "Testing without criteria produces noise and weak conclusions.",
    "principle": "Classify and assign ownership before selecting controls."
  },
  {
    "id": 72,
    "domain": "Domain 6 · Security Assessment and Testing",
    "trapFamily": "Resilience over single-point heroics",
    "trap": "One assessor dependency",
    "difficulty": "Medium",
    "stem": "Only one senior analyst knows how to execute a critical control validation script for a regulated platform. What is the MOST important improvement?",
    "options": [
      "Limit use of the script to preserve its secrecy.",
      "Document and cross-train the validation process with proper controls.",
      "Wait for the analyst to return from leave if needed.",
      "Have the analyst keep the procedure in a personal notebook."
    ],
    "answer": 1,
    "rationale": "Critical validation activities should not depend on a single person.",
    "trapRationale": "A hidden specialist process may seem efficient, but it creates continuity risk.",
    "principle": "Design for continuity and verified recovery, not improvisation."
  },
  {
    "id": 73,
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
    "id": 74,
    "domain": "Domain 7 · Security Operations",
    "trapFamily": "Contain before recover",
    "trap": "Restore speed vs evidence and containment",
    "difficulty": "Hard",
    "stem": "Ransomware is spreading through a file-sharing platform. Operations wants to restore from backup immediately to minimize downtime. What should happen FIRST?",
    "options": [
      "Restore the most critical servers and investigate later.",
      "Contain the incident to stop further spread and preserve evidence for response activities.",
      "Pay the ransom if the data is business-critical.",
      "Wipe all infected devices before identifying the attack path."
    ],
    "answer": 1,
    "rationale": "Containment comes before broad restoration. Restoring too early can reintroduce the threat or destroy useful evidence.",
    "trapRationale": "Business pressure makes restore-first feel responsible, but the better answer reduces blast radius before recovery begins.",
    "principle": "Reduce blast radius before broad restoration."
  },
  {
    "id": 75,
    "domain": "Domain 7 · Security Operations",
    "trapFamily": "Least privilege over convenience",
    "trap": "SOC admin creep",
    "difficulty": "Medium",
    "stem": "Because analyst turnover is high, the SOC manager wants every analyst to have full administrator rights on all monitoring platforms. What is the BEST response?",
    "options": [
      "Grant the rights and review quarterly.",
      "Provide role-based permissions aligned to analyst duties and escalation paths.",
      "Use a shared administrator account managed by the SOC manager.",
      "Disable approval workflows for experienced analysts."
    ],
    "answer": 1,
    "rationale": "SOC speed does not justify broad standing privilege. Access should match duty.",
    "trapRationale": "The trap is to solve staffing friction by expanding privilege everywhere.",
    "principle": "Reduce standing privilege and scope access to the task."
  },
  {
    "id": 76,
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
    "id": 77,
    "domain": "Domain 7 · Security Operations",
    "trapFamily": "Contain before recover",
    "trap": "Malware cleanup order",
    "difficulty": "Medium",
    "stem": "A server shows signs of active compromise. The server owner wants to reimage it immediately. What should the response lead consider FIRST?",
    "options": [
      "Reimage immediately so the visible symptoms stop.",
      "Contain the affected system and preserve needed evidence before full eradication.",
      "Leave the server online to watch the attacker longer.",
      "Delete every log file to protect privacy."
    ],
    "answer": 1,
    "rationale": "Containment and evidence preservation should precede full eradication when possible.",
    "trapRationale": "The attractive wrong answer is to clean first and ask questions later.",
    "principle": "Reduce blast radius before broad restoration."
  },
  {
    "id": 78,
    "domain": "Domain 7 · Security Operations",
    "trapFamily": "Resilience over single-point heroics",
    "trap": "Backup restore knowledge silo",
    "difficulty": "Medium",
    "stem": "Only one operator knows the exact sequence to restore a critical payment platform after failure. What is the MOST important improvement?",
    "options": [
      "Have the operator carry a pager at all times.",
      "Document and test the restore process with controlled cross-training.",
      "Promote the operator so they stay motivated.",
      "Avoid changing the platform to preserve the operator's knowledge."
    ],
    "answer": 1,
    "rationale": "Recovery capability should be institutional, not personal.",
    "trapRationale": "A heroic operator helps in the short term but creates continuity risk.",
    "principle": "Design for continuity and verified recovery, not improvisation."
  },
  {
    "id": 79,
    "domain": "Domain 7 · Security Operations",
    "trapFamily": "Preserve evidence before analysis",
    "trap": "Chain of custody shortcut",
    "difficulty": "Easy",
    "stem": "A responder copied suspect logs to a USB drive and handed it to a manager without documentation because 'everyone trusts each other.' What is the MOST serious issue?",
    "options": [
      "The manager may lose the USB drive.",
      "Chain-of-custody and evidence integrity were not properly maintained.",
      "The logs should have been printed instead.",
      "USB devices are always prohibited in operations."
    ],
    "answer": 1,
    "rationale": "Documentation and controlled handling preserve evidence reliability and defensibility.",
    "trapRationale": "Trust between coworkers does not replace formal evidence handling.",
    "principle": "Preserve evidentiary integrity before deeper analysis."
  },
  {
    "id": 80,
    "domain": "Domain 7 · Security Operations",
    "trapFamily": "Least privilege over convenience",
    "trap": "Break-glass account sprawl",
    "difficulty": "Medium",
    "stem": "An organization created several break-glass accounts for emergencies, but many staff know their passwords. What is the BEST improvement?",
    "options": [
      "Keep them as-is because emergencies require broad awareness.",
      "Restrict, monitor, and tightly control emergency-account access and use.",
      "Convert each break-glass account into a shared daily admin account.",
      "Post the credentials in the NOC so responders can act faster."
    ],
    "answer": 1,
    "rationale": "Emergency access should be tightly controlled even if rarely used.",
    "trapRationale": "The current model trades resilience for uncontrolled privilege exposure.",
    "principle": "Reduce standing privilege and scope access to the task."
  },
  {
    "id": 81,
    "domain": "Domain 7 · Security Operations",
    "trapFamily": "Prove effectiveness, not activity",
    "trap": "Backup success vs restore success",
    "difficulty": "Easy",
    "stem": "Daily backups complete successfully according to the backup console. What additional evidence BEST validates recoverability?",
    "options": [
      "Screenshots showing green status every day.",
      "Periodic restore testing that confirms required data can be recovered within objectives.",
      "An email saying the backup software is healthy.",
      "A spreadsheet listing the backup jobs."
    ],
    "answer": 1,
    "rationale": "Successful backup jobs do not prove usable recovery. Restore validation does.",
    "trapRationale": "The trap is to assume creation of backups equals recoverability.",
    "principle": "Prefer evidence of effectiveness over visible but weak activity."
  },
  {
    "id": 82,
    "domain": "Domain 7 · Security Operations",
    "trapFamily": "Secure process over expedience",
    "trap": "Emergency bypass of logging",
    "difficulty": "Hard",
    "stem": "A storage issue causes SIEM ingestion delays, and an engineer proposes disabling some audit logs temporarily without approval. What is the BEST response?",
    "options": [
      "Disable the logs to protect system performance.",
      "Use the emergency-change process and evaluate which logging can be reduced without violating requirements.",
      "Delete old logs to free space and stop documenting the issue.",
      "Turn off alerting so fewer logs are generated."
    ],
    "answer": 1,
    "rationale": "Even under operational pressure, changes to logging need controlled approval and requirement review.",
    "trapRationale": "The quick fix feels practical but can create compliance and investigative gaps.",
    "principle": "Do not normalize insecure shortcuts just to hit a deadline."
  },
  {
    "id": 83,
    "domain": "Domain 7 · Security Operations",
    "trapFamily": "Segmentation over flat access",
    "trap": "IR tooling network reach",
    "difficulty": "Hard",
    "stem": "The incident response jump server can directly reach every environment in the enterprise from one network path. What is the BEST security improvement?",
    "options": [
      "Keep the design and add a banner warning.",
      "Introduce controlled access paths and segmentation to reduce blast radius if the jump server is compromised.",
      "Give more teams access so the server is more useful.",
      "Move the jump server to the public internet for easier access."
    ],
    "answer": 1,
    "rationale": "Highly privileged operational tooling should not create unnecessary enterprise-wide reach.",
    "trapRationale": "Central convenience increases the impact of compromise.",
    "principle": "Reduce blast radius through separation and controlled paths."
  },
  {
    "id": 84,
    "domain": "Domain 7 · Security Operations",
    "trapFamily": "Business ownership before technical action",
    "trap": "Ransom payment pressure",
    "difficulty": "Hard",
    "stem": "A business executive asks the incident commander to pay a ransom immediately to restore operations. What is the BEST first response?",
    "options": [
      "Pay immediately if the executive is senior enough.",
      "Use the organization's established incident governance, legal, and executive decision process.",
      "Have the help desk decide because they know the users.",
      "Ignore the executive until technical analysis is complete."
    ],
    "answer": 1,
    "rationale": "Ransom decisions involve legal, business, and governance factors beyond technical recovery.",
    "trapRationale": "The trap is to let urgency force a unilateral technical response to a business decision.",
    "principle": "Resolve ownership, legal, and business accountability before tuning technology."
  },
  {
    "id": 85,
    "domain": "Domain 8 · Software Development Security",
    "trapFamily": "Secure process over expedience",
    "trap": "Deadline pressure vs secure process",
    "difficulty": "Medium",
    "stem": "Developers want to hardcode API secrets temporarily so a release can meet a client deadline. What is the BEST management response?",
    "options": [
      "Allow it if the code is removed in the next sprint.",
      "Allow it only in lower environments.",
      "Require use of an approved secret-management method and treat the issue as an SDLC control requirement.",
      "Let the project manager decide whether the risk is acceptable."
    ],
    "answer": 2,
    "rationale": "The right move is to enforce secure development controls, not rely on temporary exceptions that predictably become permanent.",
    "trapRationale": "The trap is the 'just for now' shortcut. The stronger answer keeps the secure process intact.",
    "principle": "Do not normalize insecure shortcuts just to hit a deadline."
  },
  {
    "id": 86,
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
  },
  {
    "id": 87,
    "domain": "Domain 8 · Software Development Security",
    "trapFamily": "Prove effectiveness, not activity",
    "trap": "SAST rollout metric",
    "difficulty": "Easy",
    "stem": "A team added static analysis to the pipeline. Which metric BEST shows the change is improving security?",
    "options": [
      "Number of emails announcing the tool rollout.",
      "Reduction in recurring vulnerable coding patterns and verified fixes over time.",
      "How many dashboards the tool provides.",
      "Amount spent on the tool license."
    ],
    "answer": 1,
    "rationale": "Tooling helps when it reduces real defect patterns and drives verified remediation.",
    "trapRationale": "Announcements, dashboards, and spend do not prove improved outcomes.",
    "principle": "Prefer evidence of effectiveness over visible but weak activity."
  },
  {
    "id": 88,
    "domain": "Domain 8 · Software Development Security",
    "trapFamily": "Business ownership before technical action",
    "trap": "Feature risk decision",
    "difficulty": "Medium",
    "stem": "Product leadership wants to launch a feature that processes sensitive customer data in a new way, but privacy review is incomplete. What should happen FIRST?",
    "options": [
      "Launch and patch controls in the next sprint.",
      "Complete the appropriate business, privacy, and governance review before release.",
      "Let engineering decide because they understand the implementation.",
      "Hide the feature behind a secret URL."
    ],
    "answer": 1,
    "rationale": "Changes in data use can carry governance and privacy implications beyond code correctness.",
    "trapRationale": "The trap is to let technical readiness override business and privacy accountability.",
    "principle": "Resolve ownership, legal, and business accountability before tuning technology."
  },
  {
    "id": 89,
    "domain": "Domain 8 · Software Development Security",
    "trapFamily": "Right-sized control over strongest control",
    "trap": "Crypto library choice",
    "difficulty": "Easy",
    "stem": "A developer wants to build a custom cryptographic routine because the standard library is 'too basic.' What is the BEST response?",
    "options": [
      "Approve it if the developer has strong math skills.",
      "Prefer approved, vetted cryptographic implementations rather than custom design.",
      "Use the custom routine only for internal data.",
      "Remove all encryption from the feature."
    ],
    "answer": 1,
    "rationale": "Custom cryptography is rarely the right answer when vetted, approved options exist.",
    "trapRationale": "The trap is to equate customization with superiority.",
    "principle": "Choose controls based on risk and fit, not maximum strength."
  },
  {
    "id": 90,
    "domain": "Domain 8 · Software Development Security",
    "trapFamily": "Secure process over expedience",
    "trap": "Test environment shortcut",
    "difficulty": "Medium",
    "stem": "A team wants to copy production data with identifiers intact into a development environment so bug reproduction is easier. What is the BEST response?",
    "options": [
      "Allow it if the developers sign confidentiality agreements.",
      "Use approved data handling methods such as masking or controlled access consistent with policy.",
      "Permit it only on Fridays.",
      "Store the production extract on a shared team drive."
    ],
    "answer": 1,
    "rationale": "Development convenience does not override data-handling requirements.",
    "trapRationale": "The shortcut seems practical, but it expands exposure and weakens process discipline.",
    "principle": "Do not normalize insecure shortcuts just to hit a deadline."
  },
  {
    "id": 91,
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
    "id": 92,
    "domain": "Domain 8 · Software Development Security",
    "trapFamily": "Prove effectiveness, not activity",
    "trap": "Threat model value",
    "difficulty": "Easy",
    "stem": "A team completed a threat-modeling workshop. Which follow-up BEST shows the exercise added value?",
    "options": [
      "The diagram is stored in the repository.",
      "The identified design risks led to concrete mitigations that were implemented and verified.",
      "The workshop lasted two hours.",
      "Many sticky notes were produced."
    ],
    "answer": 1,
    "rationale": "Threat modeling is valuable when it changes design decisions and produces verified mitigation work.",
    "trapRationale": "Artifacts and duration do not prove meaningful impact.",
    "principle": "Prefer evidence of effectiveness over visible but weak activity."
  },
  {
    "id": 93,
    "domain": "Domain 8 · Software Development Security",
    "trapFamily": "Governance before control",
    "trap": "Open-source intake",
    "difficulty": "Medium",
    "stem": "Developers want to add several new open-source packages, but there is no approved intake or review process. What should security leadership do FIRST?",
    "options": [
      "Block all open-source use permanently.",
      "Establish the intake, review, and approval expectations before scaling adoption.",
      "Let each team decide which packages feel safe.",
      "Rely on production monitoring to catch bad libraries later."
    ],
    "answer": 1,
    "rationale": "A defined intake process creates consistent expectations and risk review for component use.",
    "trapRationale": "The trap is to rely on downstream detection instead of lifecycle governance.",
    "principle": "Classify and assign ownership before selecting controls."
  },
  {
    "id": 94,
    "domain": "Domain 8 · Software Development Security",
    "trapFamily": "Least privilege over convenience",
    "trap": "Developer direct prod access",
    "difficulty": "Medium",
    "stem": "To accelerate support, developers are given direct shell access to production servers by default. What is the BEST response?",
    "options": [
      "Keep the access and monitor it monthly.",
      "Use controlled support pathways and least-privilege access aligned to actual support duties.",
      "Convert the access to a shared root account.",
      "Disable logs so developers are more willing to help."
    ],
    "answer": 1,
    "rationale": "Production access should be tightly controlled and tied to justified support duties.",
    "trapRationale": "The convenience of direct access is attractive, but it expands operational risk.",
    "principle": "Reduce standing privilege and scope access to the task."
  },
  {
    "id": 95,
    "domain": "Domain 8 · Software Development Security",
    "trapFamily": "Business ownership before technical action",
    "trap": "Insecure feature exception",
    "difficulty": "Easy",
    "stem": "Engineering says a risky feature is acceptable because customers have not complained in testing. What is the BEST response?",
    "options": [
      "Ship it because lack of complaints shows acceptance.",
      "Route the residual risk decision through the accountable business ownership and governance process.",
      "Let QA decide because they ran the test cycle.",
      "Delay documentation until after launch."
    ],
    "answer": 1,
    "rationale": "Silence from testers does not replace accountable risk ownership.",
    "trapRationale": "The trap is to interpret absence of complaint as business acceptance.",
    "principle": "Resolve ownership, legal, and business accountability before tuning technology."
  },
  {
    "id": 96,
    "domain": "Domain 8 · Software Development Security",
    "trapFamily": "Resilience over single-point heroics",
    "trap": "One maintainer dependency",
    "difficulty": "Medium",
    "stem": "A critical authentication component in the platform can only be maintained by one senior developer. What is the MOST important improvement?",
    "options": [
      "Make the developer available after hours indefinitely.",
      "Document, review, and share maintainability responsibilities with controlled cross-training.",
      "Keep the code secret so fewer people can break it.",
      "Avoid refactoring because the developer understands the current design."
    ],
    "answer": 1,
    "rationale": "Critical software should not depend on one person's knowledge to remain reliable and recoverable.",
    "trapRationale": "Individual mastery helps short term but creates continuity and change risk.",
    "principle": "Design for continuity and verified recovery, not improvisation."
  }
];
