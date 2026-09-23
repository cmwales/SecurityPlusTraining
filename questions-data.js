// AUTO-GENERATED from Questions.json by build_data.py - do not edit directly
window.QUIZ_DATA = {
  "Fundamentals of Security": {
    "domain": "1.0 General Security Concepts",
    "questions": [
      {
        "id": 557,
        "question": "What is the primary operational distinction between Information Security and Information Systems Security?",
        "correctAnswer": "Information Security protects data and information, while Information Systems Security protects the underlying hardware and systems processing that data.",
        "incorrectAnswers": [
          "Information Security applies strictly to paper documents, while Information Systems Security applies exclusively to digital files.",
          "Information Security focuses on firewalls, while Information Systems Security handles database encryption.",
          "Information Security is managed by operational staff, while Information Systems Security is managed solely by executive leadership.",
          "Information Security governs legal compliance, while Information Systems Security governs hardware disposal."
        ],
        "explanation": "Information Security focuses on protecting data, while Information Systems Security protects the systems that store and process that data."
      },
      {
        "id": 558,
        "question": "Which extension added to the traditional CIA Triad forms the CIANA Pentagon by guaranteeing that an action or event cannot be denied by involved parties?",
        "correctAnswer": "Non-repudiation and Authentication",
        "incorrectAnswers": [
          "Authorization and Accounting",
          "Auditing and Accountability",
          "Attestation and Governance",
          "Compensating Controls and Federation",
          "Identification and Authorization"
        ],
        "explanation": "The CIANA Pentagon extends the CIA triad by adding non-repudiation and authentication."
      },
      {
        "id": 559,
        "question": "In the Triple A's (AAA) framework of security, which component is specifically responsible for tracking user activities and resource usage for auditing or billing purposes?",
        "correctAnswer": "Accounting",
        "incorrectAnswers": [
          "Authentication",
          "Authorization",
          "Attestation",
          "Assessment"
        ],
        "explanation": "Accounting tracks user activities for auditing and billing."
      },
      {
        "id": 560,
        "question": "Which security principle ensures that users are granted only the minimum level of access required to perform their job functions?",
        "correctAnswer": "Least Privilege",
        "incorrectAnswers": [
          "Separation of Duties",
          "Mandatory Access Control",
          "Defense in Depth",
          "Zero Trust"
        ],
        "explanation": "Least privilege restricts access to only what is necessary for job tasks."
      },
      {
        "id": 561,
        "question": "Which security concept involves using multiple layers of security controls to protect systems and data?",
        "correctAnswer": "Defense in Depth",
        "incorrectAnswers": [
          "Least Privilege",
          "Zero Trust",
          "Mandatory Access Control",
          "Fail-Safe Defaults"
        ],
        "explanation": "Defense in depth uses layered controls to reduce risk."
      },
      {
        "id": 562,
        "question": "Which security concept ensures that a system continues operating even when one component fails?",
        "correctAnswer": "Fault Tolerance",
        "incorrectAnswers": [
          "Redundancy",
          "High Availability",
          "Fail-Safe Defaults",
          "Load Balancing"
        ],
        "explanation": "Fault tolerance allows systems to continue functioning despite failures."
      },
      {
        "id": 563,
        "question": "Which term describes the process of identifying, analyzing, and prioritizing potential security risks?",
        "correctAnswer": "Risk Assessment",
        "incorrectAnswers": [
          "Risk Avoidance",
          "Risk Transfer",
          "Risk Mitigation",
          "Risk Acceptance"
        ],
        "explanation": "Risk assessment evaluates and prioritizes risks."
      },
      {
        "id": 564,
        "question": "Which security control type includes policies, procedures, and training?",
        "correctAnswer": "Administrative Controls",
        "incorrectAnswers": [
          "Technical Controls",
          "Physical Controls",
          "Compensating Controls",
          "Preventive Controls"
        ],
        "explanation": "Administrative controls include policies, procedures, and training."
      },
      {
        "id": 565,
        "question": "Which security control type includes firewalls, encryption, and authentication mechanisms?",
        "correctAnswer": "Technical Controls",
        "incorrectAnswers": [
          "Administrative Controls",
          "Physical Controls",
          "Corrective Controls",
          "Deterrent Controls"
        ],
        "explanation": "Technical controls use technology to enforce security."
      },
      {
        "id": 566,
        "question": "Which security control type includes locks, fences, and security guards?",
        "correctAnswer": "Physical Controls",
        "incorrectAnswers": [
          "Technical Controls",
          "Administrative Controls",
          "Compensating Controls",
          "Corrective Controls"
        ],
        "explanation": "Physical controls protect physical access to systems and facilities."
      }
    ],
    "bonusQuestions": [
      {
        "id": 567,
        "question": "Which security concept ensures that actions taken by users can be traced uniquely back to them?",
        "correctAnswer": "Accountability",
        "incorrectAnswers": [
          "Authentication",
          "Authorization",
          "Non-repudiation",
          "Integrity"
        ],
        "explanation": "Accountability ensures user actions can be traced back to the responsible individual."
      },
      {
        "id": 568,
        "question": "Which security model focuses on preventing conflicts of interest by restricting access based on organizational roles?",
        "correctAnswer": "Chinese Wall Model",
        "incorrectAnswers": [
          "Bell-LaPadula Model",
          "Biba Model",
          "Clark-Wilson Model",
          "Brewer-Nash Model"
        ],
        "explanation": "The Chinese Wall Model prevents conflicts of interest by restricting access based on prior interactions."
      },
      {
        "id": 569,
        "question": "Which security principle requires dividing critical tasks among multiple individuals to reduce fraud risk?",
        "correctAnswer": "Separation of Duties",
        "incorrectAnswers": [
          "Least Privilege",
          "Defense in Depth",
          "Fail-Safe Defaults",
          "Zero Trust"
        ],
        "explanation": "Separation of duties prevents one person from having too much control over critical processes."
      },
      {
        "id": 570,
        "question": "Which security concept ensures that systems default to the most secure state when a failure occurs?",
        "correctAnswer": "Fail-Safe Defaults",
        "incorrectAnswers": [
          "Least Privilege",
          "Defense in Depth",
          "Implicit Deny",
          "Zero Trust"
        ],
        "explanation": "Fail-safe defaults ensure systems revert to secure states when failures occur."
      }
    ]
  },
  "Zero Trust Model & Architecture": {
    "domain": "1.0 General Security Concepts",
    "questions": [
      {
        "id": 571,
        "question": "Within a Zero Trust Architecture, which components are strictly part of the Control Plane?",
        "correctAnswer": "Adaptive identity, threat scope reduction, policy-driven access control, policy engine, and policy administrator",
        "incorrectAnswers": [
          "Subject/System, Policy Enforcement Point, and implicit trust zones",
          "Physical security guards, CCTV cameras, and bollards",
          "Honeypots, honeyfiles, and honeytokens",
          "Syslog servers, network taps, and packet capture devices"
        ],
        "explanation": "The Control Plane manages identity, access policies, and decision-making components."
      },
      {
        "id": 572,
        "question": "In a Zero Trust Architecture implementation, which Data Plane component actually executes the decision to grant, restrict, or block network traffic?",
        "correctAnswer": "Policy Enforcement Point",
        "incorrectAnswers": [
          "Policy Engine",
          "Policy Administrator",
          "Adaptive Identity Module",
          "Implicit Trust Zone"
        ],
        "explanation": "The Policy Enforcement Point enforces access decisions made by the Control Plane."
      },
      {
        "id": 573,
        "question": "What is the primary objective of Threat Scope Reduction within a Zero Trust framework?",
        "correctAnswer": "Limiting user access strictly to what is needed for work tasks to minimize the attack surface and blast radius.",
        "incorrectAnswers": [
          "Ensuring that all perimeter fences are monitored by physical security guards 24/7.",
          "Encrypting all hard drives with asymmetric public key pairs.",
          "Allowing unrestricted access across internal subnets once authenticated.",
          "Redirecting all external web traffic into screened subnets."
        ],
        "explanation": "Threat Scope Reduction limits access to reduce the impact of potential breaches."
      },
      {
        "id": 574,
        "question": "Which Zero Trust principle eliminates the assumption that anything inside the network perimeter is trustworthy?",
        "correctAnswer": "Never Trust, Always Verify",
        "incorrectAnswers": [
          "Implicit Allow",
          "Defense in Depth",
          "Least Privilege",
          "Fail-Safe Defaults"
        ],
        "explanation": "Zero Trust removes implicit trust and requires continuous verification."
      },
      {
        "id": 575,
        "question": "Which Zero Trust component evaluates contextual factors such as device health, user identity, and behavior before granting access?",
        "correctAnswer": "Policy Engine",
        "incorrectAnswers": [
          "Policy Enforcement Point",
          "Policy Administrator",
          "Threat Intelligence Gateway",
          "Identity Provider"
        ],
        "explanation": "The Policy Engine analyzes context and determines access decisions."
      },
      {
        "id": 576,
        "question": "Which Zero Trust concept ensures that access decisions are continuously reevaluated rather than granted indefinitely?",
        "correctAnswer": "Continuous Authentication",
        "incorrectAnswers": [
          "Single Sign-On",
          "Implicit Trust",
          "Static Authorization",
          "Credential Caching"
        ],
        "explanation": "Continuous authentication verifies identity throughout a session."
      },
      {
        "id": 577,
        "question": "Which Zero Trust component is responsible for distributing and enforcing access policies across network resources?",
        "correctAnswer": "Policy Administrator",
        "incorrectAnswers": [
          "Policy Engine",
          "Policy Enforcement Point",
          "Identity Provider",
          "Threat Detection Module"
        ],
        "explanation": "The Policy Administrator pushes decisions from the Policy Engine to enforcement points."
      },
      {
        "id": 578,
        "question": "Which Zero Trust design strategy focuses on breaking the network into smaller, isolated zones to limit lateral movement?",
        "correctAnswer": "Microsegmentation",
        "incorrectAnswers": [
          "Load Balancing",
          "Network Address Translation",
          "Subnet Masking",
          "Traffic Shaping"
        ],
        "explanation": "Microsegmentation isolates resources to reduce lateral movement."
      },
      {
        "id": 579,
        "question": "Which Zero Trust concept ensures that access is granted only after verifying both the user and the device being used?",
        "correctAnswer": "Strong Identity and Device Verification",
        "incorrectAnswers": [
          "Implicit Device Trust",
          "Single-Factor Authentication",
          "Credential Reuse",
          "Static Device Profiles"
        ],
        "explanation": "Zero Trust requires verifying both user identity and device posture."
      },
      {
        "id": 580,
        "question": "Which Zero Trust architecture component ensures that only authorized and healthy devices can connect to network resources?",
        "correctAnswer": "Device Posture Assessment",
        "incorrectAnswers": [
          "Network Address Translation",
          "Firewall ACLs",
          "DNS Filtering",
          "Load Balancing"
        ],
        "explanation": "Device posture assessment checks compliance before granting access."
      }
    ],
    "bonusQuestions": [
      {
        "id": 581,
        "question": "Which Zero Trust concept requires validating every access request as though it originates from an untrusted network?",
        "correctAnswer": "Assume Breach",
        "incorrectAnswers": [
          "Implicit Trust",
          "Open Access",
          "Perimeter-Based Trust",
          "Credential Persistence"
        ],
        "explanation": "Assume Breach treats all requests as potentially malicious."
      },
      {
        "id": 582,
        "question": "Which Zero Trust strategy uses behavioral analytics to detect anomalies in user activity?",
        "correctAnswer": "User and Entity Behavior Analytics (UEBA)",
        "incorrectAnswers": [
          "Static Access Control Lists",
          "Credential Rotation",
          "Network Address Translation",
          "Role-Based Access Control"
        ],
        "explanation": "UEBA identifies unusual behavior that may indicate compromise."
      },
      {
        "id": 583,
        "question": "Which Zero Trust component ensures that access decisions are logged and monitored for auditing and compliance?",
        "correctAnswer": "Visibility and Analytics Layer",
        "incorrectAnswers": [
          "Policy Engine",
          "Policy Administrator",
          "Policy Enforcement Point",
          "Identity Provider"
        ],
        "explanation": "Visibility and analytics provide monitoring and auditing capabilities."
      },
      {
        "id": 584,
        "question": "Which Zero Trust principle requires validating device compliance with security policies before granting access?",
        "correctAnswer": "Verify Device Health",
        "incorrectAnswers": [
          "Implicit Device Trust",
          "Open Access",
          "Credential Reuse",
          "Static Authorization"
        ],
        "explanation": "Zero Trust requires verifying device health before access is granted."
      }
    ]
  },
  "Data States & Protection Methods": {
    "domain": "1.0 General Security Concepts",
    "questions": [
      {
        "id": 585,
        "question": "Which encryption method protects data at rest by encrypting the entire physical drive, including the operating system and user files?",
        "correctAnswer": "Full Disk Encryption (FDE)",
        "incorrectAnswers": [
          "Partition Encryption",
          "Record Encryption",
          "Application-Level Encryption",
          "Database Column Encryption"
        ],
        "explanation": "Full Disk Encryption encrypts the entire drive, protecting all data at rest."
      },
      {
        "id": 586,
        "question": "Data that is actively being created, retrieved, updated, or processed in system memory belongs to which data state?",
        "correctAnswer": "Data in Use",
        "incorrectAnswers": [
          "Data at Rest",
          "Data in Transit",
          "Data in Motion",
          "Archived Data"
        ],
        "explanation": "Data in Use refers to data actively being processed in memory."
      },
      {
        "id": 587,
        "question": "Which hardware-based security mechanism provides an isolated processing environment in CPU memory to protect data in use from unauthorized access?",
        "correctAnswer": "Secure Enclaves (e.g., Intel SGX)",
        "incorrectAnswers": [
          "Communication Tunneling",
          "Database Table Encryption",
          "Self-Encrypting Drives",
          "Full Disk Encryption"
        ],
        "explanation": "Secure enclaves isolate sensitive operations in protected CPU memory."
      },
      {
        "id": 588,
        "question": "Which data state refers to information stored on a device, such as files on a hard drive or database records?",
        "correctAnswer": "Data at Rest",
        "incorrectAnswers": [
          "Data in Use",
          "Data in Transit",
          "Data in Motion",
          "Data in Processing"
        ],
        "explanation": "Data at Rest refers to stored data not actively being processed."
      },
      {
        "id": 589,
        "question": "Which data state refers to information moving across a network, such as emails or API calls?",
        "correctAnswer": "Data in Transit",
        "incorrectAnswers": [
          "Data at Rest",
          "Data in Use",
          "Data in Motion",
          "Data in Storage"
        ],
        "explanation": "Data in Transit refers to data moving between systems or across networks."
      },
      {
        "id": 590,
        "question": "Which protection method ensures that data remains confidential even if intercepted during transmission?",
        "correctAnswer": "Transport Encryption",
        "incorrectAnswers": [
          "Full Disk Encryption",
          "Secure Enclaves",
          "Data Masking",
          "Tokenization"
        ],
        "explanation": "Transport encryption protects data in transit using protocols like TLS."
      },
      {
        "id": 591,
        "question": "Which technique replaces sensitive data with non-sensitive placeholders while preserving format?",
        "correctAnswer": "Tokenization",
        "incorrectAnswers": [
          "Hashing",
          "Encryption",
          "Obfuscation",
          "Masking"
        ],
        "explanation": "Tokenization replaces sensitive data with tokens that have no exploitable meaning."
      },
      {
        "id": 592,
        "question": "Which technique hides portions of sensitive data, such as showing only the last four digits of a credit card number?",
        "correctAnswer": "Data Masking",
        "incorrectAnswers": [
          "Tokenization",
          "Hashing",
          "Encryption",
          "Obfuscation"
        ],
        "explanation": "Data masking obscures sensitive information while preserving usability."
      },
      {
        "id": 593,
        "question": "Which method ensures that encrypted data cannot be decrypted without the correct key?",
        "correctAnswer": "Cryptographic Key Management",
        "incorrectAnswers": [
          "Data Masking",
          "Tokenization",
          "Obfuscation",
          "Compression"
        ],
        "explanation": "Key management ensures encryption keys are properly stored and protected."
      },
      {
        "id": 594,
        "question": "Which technology encrypts data automatically when written to a drive and decrypts it when read?",
        "correctAnswer": "Self-Encrypting Drive (SED)",
        "incorrectAnswers": [
          "Secure Enclave",
          "Full Disk Encryption",
          "Transport Encryption",
          "Tokenization"
        ],
        "explanation": "SEDs perform encryption and decryption at the hardware level."
      }
    ],
    "bonusQuestions": [
      {
        "id": 595,
        "question": "Which data protection method converts plaintext into ciphertext using a reversible mathematical process?",
        "correctAnswer": "Encryption",
        "incorrectAnswers": [
          "Hashing",
          "Tokenization",
          "Masking",
          "Obfuscation"
        ],
        "explanation": "Encryption protects confidentiality by converting plaintext into ciphertext."
      },
      {
        "id": 596,
        "question": "Which data protection method converts data into a fixed-length value that cannot be reversed?",
        "correctAnswer": "Hashing",
        "incorrectAnswers": [
          "Encryption",
          "Tokenization",
          "Masking",
          "Obfuscation"
        ],
        "explanation": "Hashing ensures integrity by producing irreversible fixed-length outputs."
      },
      {
        "id": 597,
        "question": "Which data state is most vulnerable to memory scraping attacks?",
        "correctAnswer": "Data in Use",
        "incorrectAnswers": [
          "Data at Rest",
          "Data in Transit",
          "Data in Storage",
          "Archived Data"
        ],
        "explanation": "Data in Use resides in memory, making it vulnerable to scraping attacks."
      },
      {
        "id": 598,
        "question": "Which protection method is commonly used to secure data in transit between a web browser and server?",
        "correctAnswer": "TLS Encryption",
        "incorrectAnswers": [
          "Full Disk Encryption",
          "Secure Enclaves",
          "Tokenization",
          "Data Masking"
        ],
        "explanation": "TLS encrypts data transmitted over HTTPS connections."
      },
      {
        "id": 599,
        "question": "Which data protection method is ideal for anonymizing data while maintaining statistical usefulness?",
        "correctAnswer": "Data Obfuscation",
        "incorrectAnswers": [
          "Tokenization",
          "Masking",
          "Hashing",
          "Encryption"
        ],
        "explanation": "Obfuscation anonymizes data while preserving patterns for analysis."
      }
    ]
  },
  "Cryptography, PKI, & Hardware Security": {
    "domain": "1.0 General Security Concepts",
    "questions": [
      {
        "id": 600,
        "question": "Which hardware component is integrated directly onto a computer motherboard to securely generate, store, and manage cryptographic keys for drive encryption?",
        "correctAnswer": "Trusted Platform Module (TPM)",
        "incorrectAnswers": [
          "Hardware Security Module (HSM)",
          "Secure Enclave Subsystem",
          "Self-Encrypting Drive (SED)",
          "Key Distribution Center (KDC)"
        ],
        "explanation": "A TPM is a dedicated microcontroller that securely stores cryptographic keys and supports hardware-based encryption."
      },
      {
        "id": 601,
        "question": "In a Public Key Infrastructure (PKI), which entity collects user information and requests identifying data before forwarding the request to the CA?",
        "correctAnswer": "Registration Authority (RA)",
        "incorrectAnswers": [
          "Certificate Revocation List (CRL)",
          "Policy Enforcement Point",
          "Data Custodian",
          "Key Distribution Center"
        ],
        "explanation": "The RA validates user identity information and forwards certificate requests to the CA."
      },
      {
        "id": 602,
        "question": "Which post-quantum cryptography algorithm was selected by NIST specifically for general encryption needs?",
        "correctAnswer": "CRYSTALS-Kyber",
        "incorrectAnswers": [
          "CRYSTALS-Dilithium",
          "FALCON",
          "SPHINCS+",
          "RSA-4096"
        ],
        "explanation": "CRYSTALS-Kyber was chosen by NIST for general-purpose encryption in a post-quantum world."
      },
      {
        "id": 603,
        "question": "Which cryptographic concept ensures that a sender cannot deny having sent a message?",
        "correctAnswer": "Non-repudiation",
        "incorrectAnswers": [
          "Integrity",
          "Confidentiality",
          "Availability",
          "Obfuscation"
        ],
        "explanation": "Non-repudiation ensures actions can be verified and attributed to the correct party."
      },
      {
        "id": 604,
        "question": "Which cryptographic method uses two mathematically related keys for encryption and decryption?",
        "correctAnswer": "Asymmetric encryption",
        "incorrectAnswers": [
          "Symmetric encryption",
          "Hashing",
          "Tokenization",
          "Obfuscation"
        ],
        "explanation": "Asymmetric encryption uses public and private key pairs."
      },
      {
        "id": 605,
        "question": "Which PKI component is responsible for issuing, revoking, and managing digital certificates?",
        "correctAnswer": "Certificate Authority (CA)",
        "incorrectAnswers": [
          "Registration Authority",
          "Key Distribution Center",
          "Certificate Repository",
          "Policy Engine"
        ],
        "explanation": "The CA manages certificate lifecycle operations."
      },
      {
        "id": 607,
        "question": "Which hardware device provides high-performance cryptographic key storage and operations for enterprise environments?",
        "correctAnswer": "Hardware Security Module (HSM)",
        "incorrectAnswers": [
          "Trusted Platform Module",
          "Secure Enclave",
          "Self-Encrypting Drive",
          "Key Distribution Center"
        ],
        "explanation": "HSMs provide secure, tamper-resistant cryptographic processing."
      },
      {
        "id": 608,
        "question": "Which cryptographic protocol is used to securely exchange keys over an insecure channel?",
        "correctAnswer": "Diffie-Hellman",
        "incorrectAnswers": [
          "RSA",
          "AES",
          "SHA-256",
          "ECC"
        ],
        "explanation": "Diffie-Hellman enables secure key exchange without prior shared secrets."
      },
      {
        "id": 609,
        "question": "Which certificate format is commonly used for storing private keys and is protected with a password?",
        "correctAnswer": "PFX / PKCS#12",
        "incorrectAnswers": [
          "PEM",
          "DER",
          "CER",
          "CRT"
        ],
        "explanation": "PKCS#12 stores private keys and certificates in a password-protected container."
      }
    ],
    "bonusQuestions": [
      {
        "id": 610,
        "question": "Which cryptographic algorithm is widely used for symmetric encryption and considered secure for modern applications?",
        "correctAnswer": "AES",
        "incorrectAnswers": [
          "DES",
          "MD5",
          "RC4",
          "SHA-1"
        ],
        "explanation": "AES is the industry standard for secure symmetric encryption."
      },
      {
        "id": 611,
        "question": "Which PKI component lists certificates that are no longer trusted?",
        "correctAnswer": "Certificate Revocation List (CRL)",
        "incorrectAnswers": [
          "OCSP",
          "Registration Authority",
          "Certificate Repository",
          "Key Escrow"
        ],
        "explanation": "CRLs contain revoked certificates that should no longer be trusted."
      },
      {
        "id": 612,
        "question": "Which cryptographic concept ensures that data has not been altered during storage or transmission?",
        "correctAnswer": "Integrity",
        "incorrectAnswers": [
          "Confidentiality",
          "Availability",
          "Non-repudiation",
          "Obfuscation"
        ],
        "explanation": "Integrity ensures data remains unchanged and trustworthy."
      },
      {
        "id": 613,
        "question": "Which key type in asymmetric encryption is shared publicly?",
        "correctAnswer": "Public key",
        "incorrectAnswers": [
          "Private key",
          "Session key",
          "Symmetric key",
          "Root key"
        ],
        "explanation": "Public keys are openly shared for encryption and verification."
      },
      {
        "id": 614,
        "question": "Which cryptographic attack attempts to find two different inputs that produce the same hash value?",
        "correctAnswer": "Collision attack",
        "incorrectAnswers": [
          "Replay attack",
          "Brute force attack",
          "Side-channel attack",
          "Birthday attack"
        ],
        "explanation": "Collision attacks target hashing algorithms by finding identical outputs."
      }
    ]
  },
  "Physical Security Controls & Surveillance": {
    "domain": "1.0 General Security Concepts",
    "questions": [
      {
        "id": 615,
        "question": "Which physical security control uses electromagnetic fields to detect unauthorized movement of tagged items leaving a protected area?",
        "correctAnswer": "Electronic Article Surveillance (EAS)",
        "incorrectAnswers": [
          "Motion-Activated Lighting",
          "Infrared Tripwires",
          "Security Guards",
          "CCTV Monitoring"
        ],
        "explanation": "EAS systems detect tagged items passing through sensors, commonly used in retail environments."
      },
      {
        "id": 616,
        "question": "Which physical barrier is specifically designed to stop vehicles from entering restricted zones?",
        "correctAnswer": "Bollards",
        "incorrectAnswers": [
          "Turnstiles",
          "Mantraps",
          "Security Gates",
          "Crash Bars"
        ],
        "explanation": "Bollards prevent vehicle access and protect buildings from ramming attacks."
      },
      {
        "id": 617,
        "question": "Which physical security control forces individuals to authenticate before entering and exiting a small enclosed area?",
        "correctAnswer": "Mantrap",
        "incorrectAnswers": [
          "Turnstile",
          "Security Gate",
          "Airlock",
          "Access Badge Reader"
        ],
        "explanation": "Mantraps restrict entry by requiring authentication at both doors."
      },
      {
        "id": 618,
        "question": "Which surveillance system uses infrared illumination to capture images in low-light or no-light environments?",
        "correctAnswer": "Night Vision CCTV",
        "incorrectAnswers": [
          "Motion Sensors",
          "Thermal Cameras",
          "Standard CCTV",
          "Laser Tripwires"
        ],
        "explanation": "Night vision CCTV uses infrared light to capture images in darkness."
      },
      {
        "id": 619,
        "question": "Which physical control prevents tailgating by allowing only one person to pass through at a time?",
        "correctAnswer": "Turnstile",
        "incorrectAnswers": [
          "Mantrap",
          "Security Gate",
          "Bollard",
          "Crash Bar Door"
        ],
        "explanation": "Turnstiles restrict entry to one person per rotation, preventing tailgating."
      },
      {
        "id": 620,
        "question": "Which physical security control uses heat signatures to detect unauthorized presence?",
        "correctAnswer": "Thermal Imaging Cameras",
        "incorrectAnswers": [
          "Night Vision Cameras",
          "Motion Sensors",
          "Pressure Sensors",
          "Laser Tripwires"
        ],
        "explanation": "Thermal cameras detect heat signatures, useful for low-visibility environments."
      },
      {
        "id": 621,
        "question": "Which physical control is used to secure server racks and prevent unauthorized access to hardware?",
        "correctAnswer": "Rack Locks",
        "incorrectAnswers": [
          "Cable Trays",
          "Airflow Panels",
          "Crash Bars",
          "Turnstiles"
        ],
        "explanation": "Rack locks secure server racks and prevent unauthorized physical access."
      },
      {
        "id": 622,
        "question": "Which physical security measure uses sensors to detect vibrations caused by forced entry attempts?",
        "correctAnswer": "Seismic Sensors",
        "incorrectAnswers": [
          "Infrared Sensors",
          "Motion Detectors",
          "Pressure Mats",
          "Magnetic Contacts"
        ],
        "explanation": "Seismic sensors detect vibrations from drilling, cutting, or forced entry."
      },
      {
        "id": 623,
        "question": "Which physical control prevents unauthorized individuals from viewing sensitive information on a screen?",
        "correctAnswer": "Privacy Filters",
        "incorrectAnswers": [
          "Screen Locks",
          "Cable Locks",
          "Security Guards",
          "Motion Sensors"
        ],
        "explanation": "Privacy filters limit screen visibility to the user directly in front of the display."
      },
      {
        "id": 624,
        "question": "Which physical control is used to detect unauthorized opening of doors or windows?",
        "correctAnswer": "Magnetic Contact Sensors",
        "incorrectAnswers": [
          "Thermal Sensors",
          "Pressure Mats",
          "Infrared Beams",
          "Seismic Sensors"
        ],
        "explanation": "Magnetic contact sensors trigger alerts when doors or windows are opened."
      },
      {
        "id": 675,
        "question": "Which physical security control is designed to prevent unauthorized individuals from entering secure areas by requiring authentication at two separate doors?",
        "correctAnswer": "Mantrap",
        "incorrectAnswers": [
          "Turnstile",
          "Security Gate",
          "Crash Bar Door",
          "Bollard"
        ],
        "explanation": "Mantraps enforce strict access control by requiring authentication at both entry points."
      },
      {
        "id": 678,
        "question": "Which surveillance technology detects movement by measuring changes in infrared energy?",
        "correctAnswer": "Passive Infrared (PIR) Sensors",
        "incorrectAnswers": [
          "Thermal Cameras",
          "Pressure Mats",
          "Magnetic Contacts",
          "Laser Tripwires"
        ],
        "explanation": "PIR sensors detect motion by sensing changes in infrared radiation."
      },
      {
        "id": 682,
        "question": "Which physical security measure uses sensors embedded under flooring to detect unauthorized movement?",
        "correctAnswer": "Pressure Mats",
        "incorrectAnswers": [
          "Motion Sensors",
          "Thermal Cameras",
          "Magnetic Contacts",
          "Laser Tripwires"
        ],
        "explanation": "Pressure mats detect weight changes when someone steps on them."
      },
      {
        "id": 683,
        "question": "Which physical control helps prevent unauthorized removal of laptops or desktops?",
        "correctAnswer": "Cable Locks",
        "incorrectAnswers": [
          "Privacy Filters",
          "Motion Sensors",
          "Seismic Sensors",
          "Turnstiles"
        ],
        "explanation": "Cable locks physically secure devices to desks or fixed structures."
      }
    ],
    "bonusQuestions": [
      {
        "id": 625,
        "question": "Which physical security control uses two interlocking doors to prevent unauthorized entry and tailgating?",
        "correctAnswer": "Mantrap",
        "incorrectAnswers": [
          "Turnstile",
          "Security Gate",
          "Crash Bar Door",
          "Bollard"
        ],
        "explanation": "Mantraps require authentication at both doors, preventing piggybacking."
      },
      {
        "id": 626,
        "question": "Which physical control is designed to protect critical infrastructure from vehicle-based attacks?",
        "correctAnswer": "Anti-Ram Barriers",
        "incorrectAnswers": [
          "Turnstiles",
          "Mantraps",
          "Security Gates",
          "Pressure Mats"
        ],
        "explanation": "Anti-ram barriers prevent vehicles from breaching secure areas."
      },
      {
        "id": 689,
        "question": "Which physical control uses laser beams to detect unauthorized crossing of a protected boundary?",
        "correctAnswer": "Laser Tripwires",
        "incorrectAnswers": [
          "Pressure Mats",
          "Thermal Cameras",
          "Magnetic Contacts",
          "Seismic Sensors"
        ],
        "explanation": "Laser tripwires detect movement when beams are interrupted."
      }
    ]
  },
  "Threats & Vulnerabilities Overview": {
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "questions": [
      {
        "id": 630,
        "question": "Which term describes a weakness in a system, application, or process that can be exploited by a threat actor?",
        "correctAnswer": "Vulnerability",
        "incorrectAnswers": [
          "Threat",
          "Risk",
          "Exploit",
          "Payload"
        ],
        "explanation": "A vulnerability is a weakness that can be exploited to compromise security."
      },
      {
        "id": 631,
        "question": "Which term refers to the potential cause of an unwanted incident that may result in harm to a system or organization?",
        "correctAnswer": "Threat",
        "incorrectAnswers": [
          "Risk",
          "Vulnerability",
          "Exploit",
          "Payload"
        ],
        "explanation": "A threat is any circumstance or event with the potential to cause harm."
      },
      {
        "id": 632,
        "question": "Which term describes the likelihood that a threat will exploit a vulnerability and cause harm?",
        "correctAnswer": "Risk",
        "incorrectAnswers": [
          "Threat",
          "Payload",
          "Exposure",
          "Attack Vector"
        ],
        "explanation": "Risk is the probability of a threat exploiting a vulnerability."
      },
      {
        "id": 633,
        "question": "Which term describes the path or method a threat actor uses to exploit a vulnerability?",
        "correctAnswer": "Attack Vector",
        "incorrectAnswers": [
          "Payload",
          "Exposure",
          "Threat Surface",
          "Risk Factor"
        ],
        "explanation": "An attack vector is the route used to exploit a vulnerability."
      },
      {
        "id": 634,
        "question": "Which term refers to the total sum of all possible attack vectors within an environment?",
        "correctAnswer": "Attack Surface",
        "incorrectAnswers": [
          "Threat Landscape",
          "Exposure Zone",
          "Risk Profile",
          "Vulnerability Index"
        ],
        "explanation": "The attack surface includes all potential points where an attacker can attempt entry."
      },
      {
        "id": 635,
        "question": "Which vulnerability occurs when software does not properly validate input, allowing attackers to manipulate program behavior?",
        "correctAnswer": "Improper Input Validation",
        "incorrectAnswers": [
          "Race Condition",
          "Buffer Overflow",
          "Privilege Escalation",
          "Broken Authentication"
        ],
        "explanation": "Improper input validation allows malicious input to alter program logic."
      },
      {
        "id": 636,
        "question": "Which vulnerability occurs when a program writes more data to a buffer than it can hold?",
        "correctAnswer": "Buffer Overflow",
        "incorrectAnswers": [
          "Race Condition",
          "Improper Input Validation",
          "Broken Access Control",
          "Directory Traversal"
        ],
        "explanation": "Buffer overflows overwrite memory and can lead to crashes or code execution."
      },
      {
        "id": 637,
        "question": "Which vulnerability occurs when an attacker manipulates file paths to access restricted directories?",
        "correctAnswer": "Directory Traversal",
        "incorrectAnswers": [
          "SQL Injection",
          "Cross-Site Scripting",
          "Broken Authentication",
          "Race Condition"
        ],
        "explanation": "Directory traversal exploits improper path sanitization to access unauthorized files."
      },
      {
        "id": 638,
        "question": "Which vulnerability occurs when multiple processes attempt to access shared resources simultaneously, causing unpredictable behavior?",
        "correctAnswer": "Race Condition",
        "incorrectAnswers": [
          "Buffer Overflow",
          "Improper Input Validation",
          "Broken Access Control",
          "Privilege Escalation"
        ],
        "explanation": "Race conditions occur when timing issues cause unexpected results."
      },
      {
        "id": 639,
        "question": "Which vulnerability allows attackers to gain higher-level permissions than intended?",
        "correctAnswer": "Privilege Escalation",
        "incorrectAnswers": [
          "Race Condition",
          "Directory Traversal",
          "Broken Authentication",
          "Session Hijacking"
        ],
        "explanation": "Privilege escalation exploits weaknesses to gain unauthorized elevated access."
      }
    ],
    "bonusQuestions": [
      {
        "id": 640,
        "question": "Which vulnerability occurs when authentication mechanisms fail to properly verify user identity?",
        "correctAnswer": "Broken Authentication",
        "incorrectAnswers": [
          "Buffer Overflow",
          "Race Condition",
          "Directory Traversal",
          "Improper Input Validation"
        ],
        "explanation": "Broken authentication allows attackers to impersonate legitimate users."
      },
      {
        "id": 641,
        "question": "Which vulnerability occurs when access controls fail to restrict users to authorized resources?",
        "correctAnswer": "Broken Access Control",
        "incorrectAnswers": [
          "Privilege Escalation",
          "Race Condition",
          "Directory Traversal",
          "Improper Input Validation"
        ],
        "explanation": "Broken access control allows unauthorized access to protected resources."
      },
      {
        "id": 642,
        "question": "Which term describes the exposure of sensitive information due to insecure system design or configuration?",
        "correctAnswer": "Information Disclosure",
        "incorrectAnswers": [
          "Privilege Escalation",
          "Race Condition",
          "Directory Traversal",
          "Improper Input Validation"
        ],
        "explanation": "Information disclosure leaks sensitive data unintentionally."
      },
      {
        "id": 643,
        "question": "Which vulnerability occurs when cryptographic systems are improperly implemented or configured?",
        "correctAnswer": "Weak Cryptography",
        "incorrectAnswers": [
          "Privilege Escalation",
          "Race Condition",
          "Directory Traversal",
          "Improper Input Validation"
        ],
        "explanation": "Weak cryptography results from outdated algorithms or poor key management."
      },
      {
        "id": 644,
        "question": "Which vulnerability occurs when user sessions are not properly protected, allowing attackers to hijack them?",
        "correctAnswer": "Session Hijacking",
        "incorrectAnswers": [
          "Privilege Escalation",
          "Race Condition",
          "Directory Traversal",
          "Improper Input Validation"
        ],
        "explanation": "Session hijacking exploits weaknesses in session management."
      }
    ]
  },
  "Threat Actor Types & Motivations": {
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "questions": [
      {
        "id": 645,
        "question": "Which type of threat actor is typically motivated by financial gain and uses cybercrime as a primary revenue source?",
        "correctAnswer": "Organized Crime Groups",
        "incorrectAnswers": [
          "Hacktivists",
          "Script Kiddies",
          "Insider Threats",
          "Nation-State Actors"
        ],
        "explanation": "Organized crime groups conduct cybercrime operations for profit."
      },
      {
        "id": 646,
        "question": "Which threat actor is typically motivated by political or ideological goals and uses cyberattacks to promote a cause?",
        "correctAnswer": "Hacktivists",
        "incorrectAnswers": [
          "Script Kiddies",
          "Organized Crime Groups",
          "Insider Threats",
          "Nation-State Actors"
        ],
        "explanation": "Hacktivists attack systems to promote political or social causes."
      },
      {
        "id": 647,
        "question": "Which threat actor is characterized by limited technical skills and relies heavily on pre-built tools and scripts?",
        "correctAnswer": "Script Kiddies",
        "incorrectAnswers": [
          "Hacktivists",
          "Organized Crime Groups",
          "Insider Threats",
          "Nation-State Actors"
        ],
        "explanation": "Script kiddies use existing tools without deep technical knowledge."
      },
      {
        "id": 648,
        "question": "Which threat actor has legitimate access to organizational systems and may intentionally or unintentionally cause harm?",
        "correctAnswer": "Insider Threats",
        "incorrectAnswers": [
          "Hacktivists",
          "Organized Crime Groups",
          "Script Kiddies",
          "Nation-State Actors"
        ],
        "explanation": "Insiders have authorized access that can be misused."
      },
      {
        "id": 649,
        "question": "Which threat actor is typically backed by a government and conducts highly sophisticated cyber operations?",
        "correctAnswer": "Nation-State Actors",
        "incorrectAnswers": [
          "Hacktivists",
          "Organized Crime Groups",
          "Script Kiddies",
          "Insider Threats"
        ],
        "explanation": "Nation-state actors conduct advanced, well-funded cyber operations."
      },
      {
        "id": 650,
        "question": "Which threat actor type is most likely to target critical infrastructure for espionage or disruption?",
        "correctAnswer": "Nation-State Actors",
        "incorrectAnswers": [
          "Hacktivists",
          "Organized Crime Groups",
          "Script Kiddies",
          "Insider Threats"
        ],
        "explanation": "Nation-state actors often target critical infrastructure for strategic advantage."
      },
      {
        "id": 651,
        "question": "Which threat actor is primarily motivated by revenge or personal grievances against an organization?",
        "correctAnswer": "Malicious Insider",
        "incorrectAnswers": [
          "Hacktivist",
          "Organized Crime Group",
          "Script Kiddie",
          "Nation-State Actor"
        ],
        "explanation": "Malicious insiders may act out of revenge or personal conflict."
      },
      {
        "id": 652,
        "question": "Which threat actor type is most likely to perform cyberattacks to demonstrate skill or gain notoriety?",
        "correctAnswer": "Script Kiddies",
        "incorrectAnswers": [
          "Hacktivists",
          "Organized Crime Groups",
          "Insider Threats",
          "Nation-State Actors"
        ],
        "explanation": "Script kiddies often seek attention or recognition."
      },
      {
        "id": 653,
        "question": "Which threat actor is most likely to use ransomware as a primary attack method for financial gain?",
        "correctAnswer": "Organized Crime Groups",
        "incorrectAnswers": [
          "Hacktivists",
          "Nation-State Actors",
          "Script Kiddies",
          "Insider Threats"
        ],
        "explanation": "Organized crime groups frequently deploy ransomware for profit."
      },
      {
        "id": 654,
        "question": "Which threat actor type is most likely to target intellectual property for competitive advantage?",
        "correctAnswer": "Nation-State Actors",
        "incorrectAnswers": [
          "Hacktivists",
          "Organized Crime Groups",
          "Script Kiddies",
          "Insider Threats"
        ],
        "explanation": "Nation-state actors often steal intellectual property for national benefit."
      }
    ],
    "bonusQuestions": [
      {
        "id": 655,
        "question": "Which threat actor type is most likely to unintentionally cause harm due to negligence or lack of awareness?",
        "correctAnswer": "Unintentional Insider",
        "incorrectAnswers": [
          "Hacktivist",
          "Organized Crime Group",
          "Script Kiddie",
          "Nation-State Actor"
        ],
        "explanation": "Unintentional insiders cause harm through mistakes or lack of training."
      },
      {
        "id": 656,
        "question": "Which threat actor type is most likely to be motivated by curiosity rather than malicious intent?",
        "correctAnswer": "Amateur Hacker",
        "incorrectAnswers": [
          "Hacktivist",
          "Organized Crime Group",
          "Nation-State Actor",
          "Insider Threat"
        ],
        "explanation": "Amateur hackers may explore systems out of curiosity."
      },
      {
        "id": 657,
        "question": "Which threat actor type is most likely to target organizations for ideological disruption rather than financial gain?",
        "correctAnswer": "Hacktivists",
        "incorrectAnswers": [
          "Organized Crime Groups",
          "Script Kiddies",
          "Insider Threats",
          "Nation-State Actors"
        ],
        "explanation": "Hacktivists attack systems to promote ideological causes."
      },
      {
        "id": 658,
        "question": "Which threat actor type is most likely to use advanced persistent threats (APTs)?",
        "correctAnswer": "Nation-State Actors",
        "incorrectAnswers": [
          "Hacktivists",
          "Organized Crime Groups",
          "Script Kiddies",
          "Insider Threats"
        ],
        "explanation": "APTs are typically associated with nation-state operations."
      },
      {
        "id": 659,
        "question": "Which threat actor type is most likely to exploit insider access to steal sensitive data for external sale?",
        "correctAnswer": "Malicious Insider",
        "incorrectAnswers": [
          "Hacktivist",
          "Organized Crime Group",
          "Script Kiddie",
          "Nation-State Actor"
        ],
        "explanation": "Malicious insiders may sell sensitive data for personal gain."
      }
    ]
  },
  "Social Engineering & Malware Operations": {
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "questions": [
      {
        "id": 660,
        "question": "Which social engineering attack involves impersonating a trusted individual over the phone to extract sensitive information?",
        "correctAnswer": "Vishing",
        "incorrectAnswers": [
          "Phishing",
          "Smishing",
          "Whaling",
          "Pretexting"
        ],
        "explanation": "Vishing uses voice calls to trick victims into revealing sensitive information."
      },
      {
        "id": 661,
        "question": "Which social engineering technique involves creating a fabricated scenario to manipulate a target into providing information?",
        "correctAnswer": "Pretexting",
        "incorrectAnswers": [
          "Phishing",
          "Tailgating",
          "Baiting",
          "Dumpster Diving"
        ],
        "explanation": "Pretexting relies on a false narrative to gain trust and extract information."
      },
      {
        "id": 662,
        "question": "Which social engineering attack involves sending fraudulent emails designed to trick users into clicking malicious links?",
        "correctAnswer": "Phishing",
        "incorrectAnswers": [
          "Smishing",
          "Vishing",
          "Whaling",
          "Pretexting"
        ],
        "explanation": "Phishing uses deceptive emails to steal credentials or deliver malware."
      },
      {
        "id": 663,
        "question": "Which social engineering attack specifically targets high-profile individuals such as executives?",
        "correctAnswer": "Whaling",
        "incorrectAnswers": [
          "Phishing",
          "Smishing",
          "Vishing",
          "Baiting"
        ],
        "explanation": "Whaling targets executives with tailored phishing attacks."
      },
      {
        "id": 664,
        "question": "Which social engineering technique involves following an authorized person into a restricted area without proper authentication?",
        "correctAnswer": "Tailgating",
        "incorrectAnswers": [
          "Pretexting",
          "Baiting",
          "Phishing",
          "Dumpster Diving"
        ],
        "explanation": "Tailgating exploits physical proximity to bypass access controls."
      },
      {
        "id": 665,
        "question": "Which social engineering attack uses enticing items, such as free USB drives, to lure victims into executing malicious code?",
        "correctAnswer": "Baiting",
        "incorrectAnswers": [
          "Phishing",
          "Smishing",
          "Pretexting",
          "Shoulder Surfing"
        ],
        "explanation": "Baiting uses physical or digital lures to deliver malware."
      },
      {
        "id": 666,
        "question": "Which social engineering technique involves observing someone’s screen or keyboard to steal sensitive information?",
        "correctAnswer": "Shoulder Surfing",
        "incorrectAnswers": [
          "Tailgating",
          "Phishing",
          "Dumpster Diving",
          "Pretexting"
        ],
        "explanation": "Shoulder surfing captures sensitive information by direct observation."
      },
      {
        "id": 667,
        "question": "Which malware type encrypts a victim’s files and demands payment for decryption?",
        "correctAnswer": "Ransomware",
        "incorrectAnswers": [
          "Trojan",
          "Worm",
          "Rootkit",
          "Spyware"
        ],
        "explanation": "Ransomware encrypts data and demands payment for recovery."
      },
      {
        "id": 668,
        "question": "Which malware type disguises itself as legitimate software but performs malicious actions once executed?",
        "correctAnswer": "Trojan",
        "incorrectAnswers": [
          "Worm",
          "Rootkit",
          "Ransomware",
          "Adware"
        ],
        "explanation": "Trojans hide malicious intent behind seemingly legitimate applications."
      },
      {
        "id": 669,
        "question": "Which malware type self-replicates and spreads across systems without user interaction?",
        "correctAnswer": "Worm",
        "incorrectAnswers": [
          "Trojan",
          "Rootkit",
          "Spyware",
          "Adware"
        ],
        "explanation": "Worms replicate autonomously and spread across networks."
      }
    ],
    "bonusQuestions": [
      {
        "id": 670,
        "question": "Which malware type hides its presence by modifying system processes and kernel-level components?",
        "correctAnswer": "Rootkit",
        "incorrectAnswers": [
          "Trojan",
          "Worm",
          "Ransomware",
          "Spyware"
        ],
        "explanation": "Rootkits conceal malicious activity by altering system-level components."
      },
      {
        "id": 671,
        "question": "Which social engineering attack uses fraudulent text messages to trick victims into clicking malicious links?",
        "correctAnswer": "Smishing",
        "incorrectAnswers": [
          "Phishing",
          "Vishing",
          "Whaling",
          "Pretexting"
        ],
        "explanation": "Smishing uses SMS messages to deliver malicious content."
      },
      {
        "id": 672,
        "question": "Which malware type secretly monitors user activity and steals sensitive information such as credentials?",
        "correctAnswer": "Spyware",
        "incorrectAnswers": [
          "Adware",
          "Trojan",
          "Worm",
          "Rootkit"
        ],
        "explanation": "Spyware monitors user activity and exfiltrates sensitive data."
      },
      {
        "id": 673,
        "question": "Which social engineering technique involves searching through discarded materials to find sensitive information?",
        "correctAnswer": "Dumpster Diving",
        "incorrectAnswers": [
          "Tailgating",
          "Phishing",
          "Pretexting",
          "Baiting"
        ],
        "explanation": "Dumpster diving retrieves sensitive information from discarded documents or media."
      },
      {
        "id": 674,
        "question": "Which malware type displays unwanted advertisements and may track user behavior?",
        "correctAnswer": "Adware",
        "incorrectAnswers": [
          "Spyware",
          "Trojan",
          "Worm",
          "Rootkit"
        ],
        "explanation": "Adware shows ads and may collect user data for marketing."
      }
    ]
  },
  "Identity & Access Management (IAM)": {
    "domain": "3.0 Security Architecture",
    "questions": [
      {
        "id": 691,
        "question": "Which access control model uses predefined labels such as 'Top Secret' or 'Confidential' to determine access permissions?",
        "correctAnswer": "Mandatory Access Control (MAC)",
        "incorrectAnswers": [
          "Discretionary Access Control (DAC)",
          "Role-Based Access Control (RBAC)",
          "Attribute-Based Access Control (ABAC)",
          "Rule-Based Access Control"
        ],
        "explanation": "MAC uses classification labels to enforce strict access control."
      },
      {
        "id": 692,
        "question": "Which access control model assigns permissions based on job roles within an organization?",
        "correctAnswer": "Role-Based Access Control (RBAC)",
        "incorrectAnswers": [
          "Mandatory Access Control",
          "Discretionary Access Control",
          "Attribute-Based Access Control",
          "Rule-Based Access Control"
        ],
        "explanation": "RBAC assigns permissions based on organizational roles."
      },
      {
        "id": 693,
        "question": "Which access control model evaluates attributes such as user identity, device type, and environmental conditions before granting access?",
        "correctAnswer": "Attribute-Based Access Control (ABAC)",
        "incorrectAnswers": [
          "Role-Based Access Control",
          "Mandatory Access Control",
          "Discretionary Access Control",
          "Rule-Based Access Control"
        ],
        "explanation": "ABAC uses attributes and policies to determine access."
      },
      {
        "id": 694,
        "question": "Which IAM concept requires users to verify their identity using two or more authentication factors?",
        "correctAnswer": "Multi-Factor Authentication (MFA)",
        "incorrectAnswers": [
          "Single Sign-On",
          "Federated Identity",
          "Certificate-Based Authentication",
          "Biometric Authentication"
        ],
        "explanation": "MFA requires multiple factors such as something you know, have, or are."
      },
      {
        "id": 695,
        "question": "Which authentication method uses digital certificates to verify user identity?",
        "correctAnswer": "Certificate-Based Authentication",
        "incorrectAnswers": [
          "Password Authentication",
          "Token-Based Authentication",
          "Biometric Authentication",
          "Single Sign-On"
        ],
        "explanation": "Certificate-based authentication uses PKI certificates to verify identity."
      },
      {
        "id": 696,
        "question": "Which IAM concept allows users to authenticate once and gain access to multiple systems without re-authenticating?",
        "correctAnswer": "Single Sign-On (SSO)",
        "incorrectAnswers": [
          "Multi-Factor Authentication",
          "Federated Identity",
          "Role-Based Access Control",
          "Credential Rotation"
        ],
        "explanation": "SSO allows users to authenticate once and access multiple resources."
      },
      {
        "id": 697,
        "question": "Which IAM concept allows identity information to be shared across multiple organizations or domains?",
        "correctAnswer": "Federated Identity",
        "incorrectAnswers": [
          "Single Sign-On",
          "Role-Based Access Control",
          "Mandatory Access Control",
          "Attribute-Based Access Control"
        ],
        "explanation": "Federated identity enables cross-domain authentication and trust."
      },
      {
        "id": 698,
        "question": "Which IAM process involves verifying that a user is who they claim to be?",
        "correctAnswer": "Authentication",
        "incorrectAnswers": [
          "Authorization",
          "Accounting",
          "Provisioning",
          "Auditing"
        ],
        "explanation": "Authentication verifies identity before granting access."
      },
      {
        "id": 699,
        "question": "Which IAM process determines what resources an authenticated user is allowed to access?",
        "correctAnswer": "Authorization",
        "incorrectAnswers": [
          "Authentication",
          "Accounting",
          "Provisioning",
          "Auditing"
        ],
        "explanation": "Authorization determines access rights after authentication."
      }
    ],
    "bonusQuestions": [
      {
        "id": 701,
        "question": "Which IAM process involves creating, modifying, disabling, or deleting user accounts?",
        "correctAnswer": "Provisioning",
        "incorrectAnswers": [
          "Authentication",
          "Authorization",
          "Auditing",
          "Accounting"
        ],
        "explanation": "Provisioning manages user account lifecycle operations."
      },
      {
        "id": 702,
        "question": "Which IAM concept requires users to re-authenticate periodically to maintain secure access?",
        "correctAnswer": "Continuous Authentication",
        "incorrectAnswers": [
          "Single Sign-On",
          "Federated Identity",
          "Role-Based Access Control",
          "Credential Rotation"
        ],
        "explanation": "Continuous authentication verifies identity throughout a session."
      },
      {
        "id": 703,
        "question": "Which IAM mechanism uses physical characteristics such as fingerprints or facial recognition for authentication?",
        "correctAnswer": "Biometric Authentication",
        "incorrectAnswers": [
          "Token-Based Authentication",
          "Password Authentication",
          "Certificate-Based Authentication",
          "Single Sign-On"
        ],
        "explanation": "Biometric authentication uses unique physical traits to verify identity."
      }
    ]
  },
  "Network Security": {
    "domain": "3.0 Security Architecture",
    "questions": [
      {
        "id": 705,
        "question": "Which network security device monitors inbound and outbound traffic and enforces rules to allow or block specific traffic types?",
        "correctAnswer": "Firewall",
        "incorrectAnswers": [
          "Switch",
          "Router",
          "Load Balancer",
          "Repeater"
        ],
        "explanation": "Firewalls enforce security policies by filtering network traffic."
      },
      {
        "id": 706,
        "question": "Which network security technology inspects packets at multiple layers, including application-level data, to detect malicious activity?",
        "correctAnswer": "Next-Generation Firewall (NGFW)",
        "incorrectAnswers": [
          "Packet Filter Firewall",
          "Router ACL",
          "Proxy Server",
          "Load Balancer"
        ],
        "explanation": "NGFWs provide deep packet inspection and advanced threat detection."
      },
      {
        "id": 707,
        "question": "Which network security tool monitors network traffic for suspicious activity and alerts administrators without taking direct action?",
        "correctAnswer": "Intrusion Detection System (IDS)",
        "incorrectAnswers": [
          "Intrusion Prevention System (IPS)",
          "Firewall",
          "Proxy Server",
          "Load Balancer"
        ],
        "explanation": "IDS detects and alerts on suspicious activity but does not block it."
      },
      {
        "id": 708,
        "question": "Which network security tool actively blocks malicious traffic based on detected threats?",
        "correctAnswer": "Intrusion Prevention System (IPS)",
        "incorrectAnswers": [
          "Intrusion Detection System",
          "Firewall",
          "Proxy Server",
          "Load Balancer"
        ],
        "explanation": "IPS detects and blocks malicious activity in real time."
      },
      {
        "id": 709,
        "question": "Which network device segments a LAN into multiple broadcast domains?",
        "correctAnswer": "Router",
        "incorrectAnswers": [
          "Switch",
          "Hub",
          "Repeater",
          "Bridge"
        ],
        "explanation": "Routers separate networks into distinct broadcast domains."
      },
      {
        "id": 710,
        "question": "Which network device forwards traffic based on MAC addresses and reduces collisions by creating separate collision domains?",
        "correctAnswer": "Switch",
        "incorrectAnswers": [
          "Router",
          "Hub",
          "Repeater",
          "Bridge"
        ],
        "explanation": "Switches forward frames based on MAC addresses and reduce collisions."
      },
      {
        "id": 711,
        "question": "Which network security concept isolates network segments to limit lateral movement by attackers?",
        "correctAnswer": "Network Segmentation",
        "incorrectAnswers": [
          "Load Balancing",
          "Traffic Shaping",
          "Network Address Translation",
          "Port Forwarding"
        ],
        "explanation": "Segmentation limits attacker movement by isolating network zones."
      },
      {
        "id": 712,
        "question": "Which protocol encrypts web traffic to ensure confidentiality and integrity between clients and servers?",
        "correctAnswer": "TLS",
        "incorrectAnswers": [
          "FTP",
          "SMTP",
          "HTTP",
          "SNMP"
        ],
        "explanation": "TLS encrypts web traffic and secures HTTPS connections."
      },
      {
        "id": 713,
        "question": "Which network security technique hides internal IP addresses by translating them to a single external IP?",
        "correctAnswer": "Network Address Translation (NAT)",
        "incorrectAnswers": [
          "Port Forwarding",
          "Load Balancing",
          "Traffic Shaping",
          "Proxying"
        ],
        "explanation": "NAT hides internal IPs and conserves public address space."
      },
      {
        "id": 714,
        "question": "Which network security tool caches web content and filters requests to improve performance and security?",
        "correctAnswer": "Proxy Server",
        "incorrectAnswers": [
          "Firewall",
          "Router",
          "Switch",
          "Repeater"
        ],
        "explanation": "Proxy servers filter and cache web traffic for security and performance."
      }
    ],
    "bonusQuestions": [
      {
        "id": 715,
        "question": "Which network security concept ensures that only authorized devices can connect to a network?",
        "correctAnswer": "Network Access Control (NAC)",
        "incorrectAnswers": [
          "Network Address Translation",
          "Traffic Shaping",
          "Load Balancing",
          "Port Forwarding"
        ],
        "explanation": "NAC enforces device authentication and compliance before granting access."
      },
      {
        "id": 716,
        "question": "Which wireless security protocol provides the strongest protection for modern Wi-Fi networks?",
        "correctAnswer": "WPA3",
        "incorrectAnswers": [
          "WEP",
          "WPA",
          "WPA2",
          "802.1X"
        ],
        "explanation": "WPA3 improves encryption and authentication for wireless networks."
      },
      {
        "id": 717,
        "question": "Which network attack floods a target with excessive traffic to disrupt availability?",
        "correctAnswer": "Denial-of-Service (DoS)",
        "incorrectAnswers": [
          "Man-in-the-Middle",
          "Replay Attack",
          "Phishing",
          "DNS Spoofing"
        ],
        "explanation": "DoS attacks overwhelm systems to disrupt availability."
      },
      {
        "id": 718,
        "question": "Which network attack intercepts communication between two parties without their knowledge?",
        "correctAnswer": "Man-in-the-Middle (MITM)",
        "incorrectAnswers": [
          "DoS Attack",
          "Replay Attack",
          "Phishing",
          "DNS Spoofing"
        ],
        "explanation": "MITM attacks intercept and potentially alter communications."
      },
      {
        "id": 719,
        "question": "Which network security device distributes incoming traffic across multiple servers to improve performance and availability?",
        "correctAnswer": "Load Balancer",
        "incorrectAnswers": [
          "Router",
          "Switch",
          "Firewall",
          "Proxy Server"
        ],
        "explanation": "Load balancers distribute traffic to optimize performance and uptime."
      }
    ]
  },
  "Cloud Security": {
    "domain": "4.0 Cloud & Virtualization",
    "questions": [
      {
        "id": 720,
        "question": "Which cloud service model provides virtualized hardware resources such as compute, storage, and networking?",
        "correctAnswer": "Infrastructure as a Service (IaaS)",
        "incorrectAnswers": [
          "Platform as a Service (PaaS)",
          "Software as a Service (SaaS)",
          "Function as a Service (FaaS)",
          "Container as a Service (CaaS)"
        ],
        "explanation": "IaaS provides virtualized infrastructure resources managed by the cloud provider."
      },
      {
        "id": 721,
        "question": "Which cloud service model provides a managed environment for developers to build, deploy, and test applications?",
        "correctAnswer": "Platform as a Service (PaaS)",
        "incorrectAnswers": [
          "Infrastructure as a Service",
          "Software as a Service",
          "Function as a Service",
          "Container as a Service"
        ],
        "explanation": "PaaS provides a managed platform for application development."
      },
      {
        "id": 722,
        "question": "Which cloud service model delivers fully managed applications over the internet?",
        "correctAnswer": "Software as a Service (SaaS)",
        "incorrectAnswers": [
          "Infrastructure as a Service",
          "Platform as a Service",
          "Function as a Service",
          "Container as a Service"
        ],
        "explanation": "SaaS delivers complete applications managed by the provider."
      },
      {
        "id": 723,
        "question": "Which cloud deployment model is operated solely for a single organization and offers the highest level of control?",
        "correctAnswer": "Private Cloud",
        "incorrectAnswers": [
          "Public Cloud",
          "Hybrid Cloud",
          "Community Cloud",
          "Distributed Cloud"
        ],
        "explanation": "Private clouds are dedicated to one organization and offer maximum control."
      },
      {
        "id": 724,
        "question": "Which cloud deployment model combines on-premises infrastructure with public cloud services?",
        "correctAnswer": "Hybrid Cloud",
        "incorrectAnswers": [
          "Private Cloud",
          "Public Cloud",
          "Community Cloud",
          "Distributed Cloud"
        ],
        "explanation": "Hybrid clouds integrate on-premises and cloud environments."
      },
      {
        "id": 725,
        "question": "Which cloud security concept ensures that customers and providers share responsibility for securing cloud resources?",
        "correctAnswer": "Shared Responsibility Model",
        "incorrectAnswers": [
          "Zero Trust Model",
          "Defense in Depth",
          "Mandatory Access Control",
          "Federated Identity"
        ],
        "explanation": "The shared responsibility model defines which security tasks belong to the provider and customer."
      },
      {
        "id": 726,
        "question": "Which cloud security risk involves unauthorized access due to misconfigured storage buckets or access policies?",
        "correctAnswer": "Misconfiguration",
        "incorrectAnswers": [
          "Hypervisor Escape",
          "Data Residency Issues",
          "Vendor Lock-In",
          "Resource Exhaustion"
        ],
        "explanation": "Misconfiguration is one of the most common cloud security risks."
      },
      {
        "id": 727,
        "question": "Which cloud security threat involves attackers escaping a virtual machine to access the underlying hypervisor?",
        "correctAnswer": "Hypervisor Escape",
        "incorrectAnswers": [
          "VM Sprawl",
          "Container Drift",
          "Privilege Escalation",
          "Data Leakage"
        ],
        "explanation": "Hypervisor escape allows attackers to break out of a VM and access the host."
      },
      {
        "id": 728,
        "question": "Which cloud security control restricts access to cloud resources based on identity and contextual factors?",
        "correctAnswer": "Identity and Access Management (IAM)",
        "incorrectAnswers": [
          "Network Address Translation",
          "Load Balancing",
          "Traffic Shaping",
          "DNS Filtering"
        ],
        "explanation": "IAM enforces identity-based access control in cloud environments."
      },
      {
        "id": 729,
        "question": "Which cloud security concept ensures that data stored in the cloud remains encrypted even if the provider is compromised?",
        "correctAnswer": "Customer-Managed Keys (CMK)",
        "incorrectAnswers": [
          "Provider-Managed Keys",
          "Tokenization",
          "Data Masking",
          "Obfuscation"
        ],
        "explanation": "CMKs give customers full control over encryption keys."
      }
    ],
    "bonusQuestions": [
      {
        "id": 730,
        "question": "Which cloud security control monitors cloud environments for misconfigurations, vulnerabilities, and compliance violations?",
        "correctAnswer": "Cloud Security Posture Management (CSPM)",
        "incorrectAnswers": [
          "Cloud Workload Protection Platform",
          "Identity Federation",
          "Network Access Control",
          "Container Runtime Security"
        ],
        "explanation": "CSPM tools continuously monitor cloud environments for security issues."
      },
      {
        "id": 731,
        "question": "Which cloud security tool protects workloads such as VMs, containers, and serverless functions?",
        "correctAnswer": "Cloud Workload Protection Platform (CWPP)",
        "incorrectAnswers": [
          "Cloud Security Posture Management",
          "Identity and Access Management",
          "Network Segmentation",
          "TLS Encryption"
        ],
        "explanation": "CWPP tools secure workloads across cloud environments."
      },
      {
        "id": 732,
        "question": "Which cloud deployment model is shared by multiple organizations with similar requirements?",
        "correctAnswer": "Community Cloud",
        "incorrectAnswers": [
          "Public Cloud",
          "Private Cloud",
          "Hybrid Cloud",
          "Distributed Cloud"
        ],
        "explanation": "Community clouds serve organizations with shared interests or compliance needs."
      },
      {
        "id": 733,
        "question": "Which cloud security concern involves difficulty migrating applications or data away from a specific provider?",
        "correctAnswer": "Vendor Lock-In",
        "incorrectAnswers": [
          "Data Residency",
          "Hypervisor Escape",
          "Misconfiguration",
          "Resource Exhaustion"
        ],
        "explanation": "Vendor lock-in occurs when switching providers becomes difficult or costly."
      },
      {
        "id": 734,
        "question": "Which cloud security concept ensures that data stored in specific geographic regions complies with legal requirements?",
        "correctAnswer": "Data Residency",
        "incorrectAnswers": [
          "Vendor Lock-In",
          "Hypervisor Escape",
          "Misconfiguration",
          "Container Drift"
        ],
        "explanation": "Data residency ensures data is stored in legally compliant regions."
      }
    ]
  },
  "Virtualization Security": {
    "domain": "4.0 Cloud & Virtualization",
    "questions": [
      {
        "id": 736,
        "question": "Which virtualization component manages multiple virtual machines and allocates physical resources to them?",
        "correctAnswer": "Hypervisor",
        "incorrectAnswers": [
          "Container Runtime",
          "Virtual Switch",
          "Orchestration Engine",
          "Bare-Metal Host"
        ],
        "explanation": "Hypervisors manage VMs and allocate CPU, memory, and storage resources."
      },
      {
        "id": 737,
        "question": "Which type of hypervisor runs directly on physical hardware without a host operating system?",
        "correctAnswer": "Type 1 Hypervisor",
        "incorrectAnswers": [
          "Type 2 Hypervisor",
          "Container Runtime",
          "VM Orchestrator",
          "Bare-Metal Kernel"
        ],
        "explanation": "Type 1 hypervisors run directly on hardware and offer stronger isolation."
      },
      {
        "id": 738,
        "question": "Which virtualization security risk occurs when too many virtual machines are deployed without proper management?",
        "correctAnswer": "VM Sprawl",
        "incorrectAnswers": [
          "Hypervisor Escape",
          "Container Drift",
          "Snapshot Poisoning",
          "Resource Exhaustion"
        ],
        "explanation": "VM sprawl leads to unmanaged VMs that increase the attack surface."
      },
      {
        "id": 739,
        "question": "Which virtualization technology provides isolated environments that share the same operating system kernel?",
        "correctAnswer": "Containers",
        "incorrectAnswers": [
          "Virtual Machines",
          "Hypervisors",
          "Bare-Metal Hosts",
          "Serverless Functions"
        ],
        "explanation": "Containers share the host OS kernel while providing isolated environments."
      },
      {
        "id": 740,
        "question": "Which virtualization security threat involves outdated or inconsistent container images across environments?",
        "correctAnswer": "Container Drift",
        "incorrectAnswers": [
          "VM Sprawl",
          "Hypervisor Escape",
          "Privilege Escalation",
          "Snapshot Poisoning"
        ],
        "explanation": "Container drift occurs when container images become inconsistent or outdated."
      },
      {
        "id": 741,
        "question": "Which virtualization security control ensures that virtual machines are isolated from each other to prevent lateral movement?",
        "correctAnswer": "VM Isolation",
        "incorrectAnswers": [
          "Container Runtime Security",
          "Network Address Translation",
          "Load Balancing",
          "Snapshot Encryption"
        ],
        "explanation": "VM isolation prevents one VM from accessing another VM’s resources."
      },
      {
        "id": 742,
        "question": "Which virtualization security feature allows administrators to revert a VM to a previous state?",
        "correctAnswer": "Snapshots",
        "incorrectAnswers": [
          "Cloning",
          "Mirroring",
          "Replication",
          "Container Images"
        ],
        "explanation": "Snapshots capture VM states and allow rollback to earlier configurations."
      },
      {
        "id": 743,
        "question": "Which virtualization security risk occurs when attackers tamper with VM snapshots to inject malicious code?",
        "correctAnswer": "Snapshot Poisoning",
        "incorrectAnswers": [
          "Container Drift",
          "VM Sprawl",
          "Hypervisor Escape",
          "Privilege Escalation"
        ],
        "explanation": "Snapshot poisoning involves modifying snapshots to compromise VM integrity."
      },
      {
        "id": 744,
        "question": "Which virtualization security tool monitors container runtime behavior to detect anomalies and threats?",
        "correctAnswer": "Container Runtime Security",
        "incorrectAnswers": [
          "Cloud Security Posture Management",
          "Hypervisor Monitoring",
          "Network Segmentation",
          "TLS Encryption"
        ],
        "explanation": "Container runtime security tools monitor container behavior for threats."
      }
    ],
    "bonusQuestions": [
      {
        "id": 745,
        "question": "Which virtualization security concept ensures that containers are isolated from each other and the host system?",
        "correctAnswer": "Namespace Isolation",
        "incorrectAnswers": [
          "Snapshot Encryption",
          "VM Clustering",
          "Hypervisor Partitioning",
          "Resource Pooling"
        ],
        "explanation": "Namespaces isolate container processes and resources."
      },
      {
        "id": 746,
        "question": "Which virtualization security control limits the CPU, memory, and I/O resources available to a container?",
        "correctAnswer": "Cgroups (Control Groups)",
        "incorrectAnswers": [
          "Namespaces",
          "Hypervisor Pools",
          "Snapshot Limits",
          "VM Templates"
        ],
        "explanation": "Cgroups enforce resource limits for containers."
      },
      {
        "id": 747,
        "question": "Which virtualization security risk involves attackers compromising the container orchestrator to control workloads?",
        "correctAnswer": "Orchestrator Compromise",
        "incorrectAnswers": [
          "Container Drift",
          "VM Sprawl",
          "Snapshot Poisoning",
          "Hypervisor Escape"
        ],
        "explanation": "Compromising the orchestrator gives attackers control over container deployments."
      },
      {
        "id": 748,
        "question": "Which virtualization security control ensures that container images are scanned for vulnerabilities before deployment?",
        "correctAnswer": "Image Scanning",
        "incorrectAnswers": [
          "Snapshot Encryption",
          "VM Isolation",
          "Network Segmentation",
          "TLS Inspection"
        ],
        "explanation": "Image scanning detects vulnerabilities in container images."
      },
      {
        "id": 749,
        "question": "Which virtualization security concept ensures that virtual machines and containers are deployed from trusted, verified images?",
        "correctAnswer": "Image Signing",
        "incorrectAnswers": [
          "Snapshot Signing",
          "Hypervisor Verification",
          "Namespace Encryption",
          "Resource Pool Validation"
        ],
        "explanation": "Image signing ensures images are trusted and have not been tampered with."
      }
    ]
  },
  "Data Ownership & Governance Roles": {
    "domain": "5.0 Security Program Management and Oversight",
    "questions": [
      {
        "id": 750,
        "question": "Which role is ultimately responsible for determining how data should be protected and defining classification requirements?",
        "correctAnswer": "Data Owner",
        "incorrectAnswers": [
          "Data Custodian",
          "Data Steward",
          "Security Administrator",
          "Compliance Officer"
        ],
        "explanation": "The Data Owner defines classification levels and protection requirements."
      },
      {
        "id": 751,
        "question": "Which role is responsible for implementing and maintaining the technical controls required to protect data?",
        "correctAnswer": "Data Custodian",
        "incorrectAnswers": [
          "Data Owner",
          "Data Steward",
          "Security Architect",
          "Compliance Officer"
        ],
        "explanation": "Data custodians implement and maintain security controls defined by the Data Owner."
      },
      {
        "id": 752,
        "question": "Which role ensures that data governance policies are followed and that data quality is maintained?",
        "correctAnswer": "Data Steward",
        "incorrectAnswers": [
          "Data Custodian",
          "Data Owner",
          "Security Administrator",
          "Privacy Officer"
        ],
        "explanation": "Data stewards enforce governance policies and maintain data quality."
      },
      {
        "id": 753,
        "question": "Which role is responsible for ensuring that an organization complies with legal, regulatory, and contractual obligations related to data?",
        "correctAnswer": "Compliance Officer",
        "incorrectAnswers": [
          "Data Owner",
          "Data Custodian",
          "Security Administrator",
          "Data Steward"
        ],
        "explanation": "Compliance officers ensure adherence to regulatory and contractual requirements."
      },
      {
        "id": 754,
        "question": "Which role is responsible for designing and overseeing the implementation of security controls across the organization?",
        "correctAnswer": "Security Architect",
        "incorrectAnswers": [
          "Data Custodian",
          "Data Owner",
          "Data Steward",
          "Compliance Officer"
        ],
        "explanation": "Security architects design and oversee enterprise security controls."
      },
      {
        "id": 755,
        "question": "Which role is responsible for day-to-day security operations such as account management and access provisioning?",
        "correctAnswer": "Security Administrator",
        "incorrectAnswers": [
          "Security Architect",
          "Data Owner",
          "Compliance Officer",
          "Data Steward"
        ],
        "explanation": "Security administrators handle operational security tasks."
      },
      {
        "id": 756,
        "question": "Which role is responsible for ensuring that personal data is handled according to privacy laws such as GDPR or HIPAA?",
        "correctAnswer": "Privacy Officer",
        "incorrectAnswers": [
          "Data Owner",
          "Security Architect",
          "Compliance Officer",
          "Data Custodian"
        ],
        "explanation": "Privacy officers ensure compliance with privacy regulations."
      },
      {
        "id": 757,
        "question": "Which role is responsible for approving access to sensitive data based on business requirements?",
        "correctAnswer": "Data Owner",
        "incorrectAnswers": [
          "Data Custodian",
          "Security Administrator",
          "Compliance Officer",
          "Data Steward"
        ],
        "explanation": "Data owners approve access to data based on classification and business needs."
      },
      {
        "id": 758,
        "question": "Which role is responsible for maintaining backups, storage systems, and ensuring data availability?",
        "correctAnswer": "Data Custodian",
        "incorrectAnswers": [
          "Data Owner",
          "Data Steward",
          "Security Architect",
          "Compliance Officer"
        ],
        "explanation": "Data custodians maintain storage systems and ensure data availability."
      },
      {
        "id": 759,
        "question": "Which role ensures that data classification labels such as 'Confidential' or 'Public' are applied correctly?",
        "correctAnswer": "Data Steward",
        "incorrectAnswers": [
          "Data Owner",
          "Data Custodian",
          "Security Administrator",
          "Compliance Officer"
        ],
        "explanation": "Data stewards ensure correct application of classification labels."
      }
    ],
    "bonusQuestions": [
      {
        "id": 760,
        "question": "Which role is responsible for defining retention policies for organizational data?",
        "correctAnswer": "Data Owner",
        "incorrectAnswers": [
          "Data Custodian",
          "Data Steward",
          "Security Administrator",
          "Compliance Officer"
        ],
        "explanation": "Data owners define how long data must be retained."
      },
      {
        "id": 761,
        "question": "Which role ensures that encryption, access control, and backup mechanisms are functioning correctly?",
        "correctAnswer": "Data Custodian",
        "incorrectAnswers": [
          "Data Owner",
          "Data Steward",
          "Security Architect",
          "Compliance Officer"
        ],
        "explanation": "Data custodians maintain technical controls protecting data."
      },
      {
        "id": 762,
        "question": "Which role is responsible for monitoring compliance with internal data governance policies?",
        "correctAnswer": "Data Steward",
        "incorrectAnswers": [
          "Data Owner",
          "Security Administrator",
          "Privacy Officer",
          "Compliance Officer"
        ],
        "explanation": "Data stewards monitor adherence to governance policies."
      },
      {
        "id": 763,
        "question": "Which role ensures that security controls align with business objectives and risk tolerance?",
        "correctAnswer": "Security Architect",
        "incorrectAnswers": [
          "Data Owner",
          "Data Custodian",
          "Security Administrator",
          "Compliance Officer"
        ],
        "explanation": "Security architects align controls with business needs and risk posture."
      }
    ]
  },
  "Risk Management & Analysis Metrics": {
    "domain": "5.0 Security Program Management and Oversight",
    "questions": [
      {
        "id": 765,
        "question": "Which risk management term refers to the potential negative impact of a threat exploiting a vulnerability?",
        "correctAnswer": "Risk",
        "incorrectAnswers": [
          "Threat",
          "Exposure",
          "Impact",
          "Likelihood"
        ],
        "explanation": "Risk is the combination of likelihood and impact of a threat exploiting a vulnerability."
      },
      {
        "id": 766,
        "question": "Which risk analysis method uses numerical values to calculate risk based on likelihood and impact?",
        "correctAnswer": "Quantitative Analysis",
        "incorrectAnswers": [
          "Qualitative Analysis",
          "Hybrid Analysis",
          "Subjective Analysis",
          "Heuristic Analysis"
        ],
        "explanation": "Quantitative analysis uses numerical scoring to evaluate risk."
      },
      {
        "id": 767,
        "question": "Which risk analysis method uses descriptive categories such as 'High,' 'Medium,' and 'Low'?",
        "correctAnswer": "Qualitative Analysis",
        "incorrectAnswers": [
          "Quantitative Analysis",
          "Hybrid Analysis",
          "Heuristic Analysis",
          "Statistical Analysis"
        ],
        "explanation": "Qualitative analysis uses descriptive scales instead of numerical values."
      },
      {
        "id": 768,
        "question": "Which risk metric represents the expected monetary loss from a single security incident?",
        "correctAnswer": "Single Loss Expectancy (SLE)",
        "incorrectAnswers": [
          "Annualized Loss Expectancy (ALE)",
          "Exposure Factor (EF)",
          "Risk Appetite",
          "Residual Risk"
        ],
        "explanation": "SLE calculates the financial impact of a single incident."
      },
      {
        "id": 769,
        "question": "Which risk metric represents the percentage of asset value lost due to a security incident?",
        "correctAnswer": "Exposure Factor (EF)",
        "incorrectAnswers": [
          "Single Loss Expectancy",
          "Annualized Loss Expectancy",
          "Risk Tolerance",
          "Residual Risk"
        ],
        "explanation": "EF is the percentage of asset value lost during an incident."
      },
      {
        "id": 770,
        "question": "Which risk metric calculates the expected yearly loss from security incidents?",
        "correctAnswer": "Annualized Loss Expectancy (ALE)",
        "incorrectAnswers": [
          "Single Loss Expectancy",
          "Exposure Factor",
          "Residual Risk",
          "Risk Appetite"
        ],
        "explanation": "ALE = SLE × Annualized Rate of Occurrence (ARO)."
      },
      {
        "id": 771,
        "question": "Which risk management term refers to the remaining risk after security controls have been applied?",
        "correctAnswer": "Residual Risk",
        "incorrectAnswers": [
          "Inherent Risk",
          "Transferred Risk",
          "Accepted Risk",
          "Mitigated Risk"
        ],
        "explanation": "Residual risk is what remains after mitigation efforts."
      },
      {
        "id": 772,
        "question": "Which risk management strategy involves reducing the likelihood or impact of a risk through security controls?",
        "correctAnswer": "Risk Mitigation",
        "incorrectAnswers": [
          "Risk Acceptance",
          "Risk Avoidance",
          "Risk Transfer",
          "Risk Deferral"
        ],
        "explanation": "Mitigation reduces risk through controls and safeguards."
      },
      {
        "id": 773,
        "question": "Which risk management strategy involves shifting risk to a third party, such as through insurance?",
        "correctAnswer": "Risk Transfer",
        "incorrectAnswers": [
          "Risk Mitigation",
          "Risk Acceptance",
          "Risk Avoidance",
          "Risk Reduction"
        ],
        "explanation": "Risk transfer shifts responsibility to another entity."
      },
      {
        "id": 774,
        "question": "Which risk management strategy involves choosing not to engage in an activity that introduces risk?",
        "correctAnswer": "Risk Avoidance",
        "incorrectAnswers": [
          "Risk Mitigation",
          "Risk Transfer",
          "Risk Acceptance",
          "Risk Reduction"
        ],
        "explanation": "Avoidance eliminates risk by discontinuing risky activities."
      }
    ],
    "bonusQuestions": [
      {
        "id": 775,
        "question": "Which risk management strategy involves acknowledging a risk and choosing not to take action against it?",
        "correctAnswer": "Risk Acceptance",
        "incorrectAnswers": [
          "Risk Mitigation",
          "Risk Transfer",
          "Risk Avoidance",
          "Risk Reduction"
        ],
        "explanation": "Risk acceptance is used when the cost of mitigation outweighs the risk."
      },
      {
        "id": 776,
        "question": "Which term describes the maximum level of risk an organization is willing to tolerate?",
        "correctAnswer": "Risk Appetite",
        "incorrectAnswers": [
          "Risk Tolerance",
          "Residual Risk",
          "Inherent Risk",
          "Exposure Factor"
        ],
        "explanation": "Risk appetite defines how much risk an organization is willing to accept."
      },
      {
        "id": 777,
        "question": "Which term describes the acceptable variation in performance relative to risk appetite?",
        "correctAnswer": "Risk Tolerance",
        "incorrectAnswers": [
          "Risk Appetite",
          "Residual Risk",
          "Inherent Risk",
          "Exposure Factor"
        ],
        "explanation": "Risk tolerance defines acceptable deviation from risk appetite."
      },
      {
        "id": 778,
        "question": "Which risk metric represents the natural level of risk before any controls are applied?",
        "correctAnswer": "Inherent Risk",
        "incorrectAnswers": [
          "Residual Risk",
          "Risk Appetite",
          "Exposure Factor",
          "Annualized Loss Expectancy"
        ],
        "explanation": "Inherent risk is the baseline risk before mitigation."
      },
      {
        "id": 779,
        "question": "Which risk analysis method combines numerical scoring with descriptive categories?",
        "correctAnswer": "Hybrid Analysis",
        "incorrectAnswers": [
          "Quantitative Analysis",
          "Qualitative Analysis",
          "Heuristic Analysis",
          "Statistical Analysis"
        ],
        "explanation": "Hybrid analysis blends numerical and descriptive risk evaluation."
      }
    ]
  },
  "Incident Response & Digital Forensics": {
    "domain": "5.0 Security Program Management and Oversight",
    "questions": [
      {
        "id": 780,
        "question": "Which incident response phase focuses on preparing policies, communication plans, and tools before an incident occurs?",
        "correctAnswer": "Preparation",
        "incorrectAnswers": [
          "Identification",
          "Containment",
          "Eradication",
          "Recovery"
        ],
        "explanation": "Preparation ensures teams have the tools, training, and procedures ready before incidents occur."
      },
      {
        "id": 781,
        "question": "Which incident response phase involves detecting and determining whether an event qualifies as a security incident?",
        "correctAnswer": "Identification",
        "incorrectAnswers": [
          "Preparation",
          "Containment",
          "Eradication",
          "Recovery"
        ],
        "explanation": "Identification determines whether an event is a true security incident."
      },
      {
        "id": 782,
        "question": "Which incident response phase focuses on preventing further damage by isolating affected systems?",
        "correctAnswer": "Containment",
        "incorrectAnswers": [
          "Identification",
          "Eradication",
          "Recovery",
          "Lessons Learned"
        ],
        "explanation": "Containment limits the spread and impact of an incident."
      },
      {
        "id": 783,
        "question": "Which incident response phase involves removing malware, closing vulnerabilities, and eliminating the root cause?",
        "correctAnswer": "Eradication",
        "incorrectAnswers": [
          "Containment",
          "Recovery",
          "Preparation",
          "Identification"
        ],
        "explanation": "Eradication removes the threat and fixes vulnerabilities."
      },
      {
        "id": 784,
        "question": "Which incident response phase focuses on restoring systems to normal operation and verifying they are functioning correctly?",
        "correctAnswer": "Recovery",
        "incorrectAnswers": [
          "Eradication",
          "Containment",
          "Preparation",
          "Lessons Learned"
        ],
        "explanation": "Recovery restores systems and ensures they are safe to return to production."
      },
      {
        "id": 785,
        "question": "Which incident response phase involves documenting findings, analyzing performance, and improving future response processes?",
        "correctAnswer": "Lessons Learned",
        "incorrectAnswers": [
          "Recovery",
          "Eradication",
          "Containment",
          "Identification"
        ],
        "explanation": "Lessons learned improve future incident response effectiveness."
      },
      {
        "id": 786,
        "question": "Which digital forensics principle ensures that evidence is collected without altering its original state?",
        "correctAnswer": "Forensic Integrity",
        "incorrectAnswers": [
          "Chain of Custody",
          "Data Preservation",
          "Evidence Tagging",
          "Imaging Procedures"
        ],
        "explanation": "Forensic integrity ensures evidence remains unchanged."
      },
      {
        "id": 787,
        "question": "Which forensic process documents every person who handled evidence and every action taken with it?",
        "correctAnswer": "Chain of Custody",
        "incorrectAnswers": [
          "Forensic Integrity",
          "Evidence Preservation",
          "Imaging Procedures",
          "Data Recovery"
        ],
        "explanation": "Chain of custody ensures evidence is legally admissible."
      },
      {
        "id": 788,
        "question": "Which forensic technique creates an exact bit-for-bit copy of a storage device for analysis?",
        "correctAnswer": "Forensic Imaging",
        "incorrectAnswers": [
          "Data Carving",
          "Memory Dumping",
          "Log Correlation",
          "Disk Cloning"
        ],
        "explanation": "Forensic imaging preserves original evidence by analyzing a copy."
      },
      {
        "id": 789,
        "question": "Which forensic artifact contains records of system events such as logins, errors, and security alerts?",
        "correctAnswer": "System Logs",
        "incorrectAnswers": [
          "Disk Images",
          "Memory Dumps",
          "Packet Captures",
          "Registry Keys"
        ],
        "explanation": "System logs provide critical information for incident investigation."
      }
    ],
    "bonusQuestions": [
      {
        "id": 790,
        "question": "Which forensic artifact captures the contents of RAM and is essential for analyzing active malware?",
        "correctAnswer": "Memory Dump",
        "incorrectAnswers": [
          "Disk Image",
          "Packet Capture",
          "System Log",
          "Registry Snapshot"
        ],
        "explanation": "Memory dumps capture volatile data such as running processes and malware."
      },
      {
        "id": 791,
        "question": "Which forensic technique extracts deleted files or fragments from unallocated disk space?",
        "correctAnswer": "Data Carving",
        "incorrectAnswers": [
          "Disk Imaging",
          "Memory Dumping",
          "Log Analysis",
          "Packet Inspection"
        ],
        "explanation": "Data carving recovers deleted or fragmented data."
      },
      {
        "id": 792,
        "question": "Which incident response metric measures how long it takes to detect an incident after it occurs?",
        "correctAnswer": "Mean Time to Detect (MTTD)",
        "incorrectAnswers": [
          "Mean Time to Respond (MTTR)",
          "Mean Time to Remediate",
          "Mean Time to Recover",
          "Incident Severity Index"
        ],
        "explanation": "MTTD measures detection speed."
      },
      {
        "id": 793,
        "question": "Which incident response metric measures how long it takes to contain and remediate an incident after detection?",
        "correctAnswer": "Mean Time to Respond (MTTR)",
        "incorrectAnswers": [
          "Mean Time to Detect",
          "Mean Time to Recover",
          "Incident Severity Index",
          "Response Efficiency Score"
        ],
        "explanation": "MTTR measures response and remediation speed."
      },
      {
        "id": 794,
        "question": "Which forensic artifact contains configuration data and historical information about installed software and user activity on Windows systems?",
        "correctAnswer": "Registry Keys",
        "incorrectAnswers": [
          "System Logs",
          "Packet Captures",
          "Memory Dumps",
          "Disk Images"
        ],
        "explanation": "Registry keys store configuration and activity data useful for investigations."
      }
    ]
  },
  "Security Policies, Standards & Procedures": {
    "domain": "5.0 Security Program Management and Oversight",
    "questions": [
      {
        "id": 795,
        "question": "Which governance document defines high-level organizational requirements and expectations for security?",
        "correctAnswer": "Security Policy",
        "incorrectAnswers": [
          "Standard",
          "Procedure",
          "Guideline",
          "Playbook"
        ],
        "explanation": "Policies define overarching security requirements and organizational expectations."
      },
      {
        "id": 796,
        "question": "Which governance document provides mandatory, measurable rules that support policy implementation?",
        "correctAnswer": "Standard",
        "incorrectAnswers": [
          "Policy",
          "Procedure",
          "Guideline",
          "Checklist"
        ],
        "explanation": "Standards provide specific, enforceable requirements derived from policies."
      },
      {
        "id": 797,
        "question": "Which governance document provides step-by-step instructions for completing a specific task?",
        "correctAnswer": "Procedure",
        "incorrectAnswers": [
          "Policy",
          "Standard",
          "Guideline",
          "Playbook"
        ],
        "explanation": "Procedures describe detailed steps for performing tasks consistently."
      },
      {
        "id": 798,
        "question": "Which governance document provides recommended best practices but is not mandatory?",
        "correctAnswer": "Guideline",
        "incorrectAnswers": [
          "Policy",
          "Standard",
          "Procedure",
          "Checklist"
        ],
        "explanation": "Guidelines offer optional best practices to improve security posture."
      },
      {
        "id": 799,
        "question": "Which governance document provides predefined actions and workflows for responding to specific incidents?",
        "correctAnswer": "Playbook",
        "incorrectAnswers": [
          "Policy",
          "Standard",
          "Procedure",
          "Guideline"
        ],
        "explanation": "Playbooks outline repeatable steps for incident response scenarios."
      },
      {
        "id": 800,
        "question": "Which type of policy defines how employees should use organizational technology resources such as email and internet access?",
        "correctAnswer": "Acceptable Use Policy (AUP)",
        "incorrectAnswers": [
          "Privacy Policy",
          "Access Control Policy",
          "Retention Policy",
          "Data Classification Policy"
        ],
        "explanation": "AUPs define acceptable behavior when using organizational technology."
      },
      {
        "id": 801,
        "question": "Which policy defines how data should be categorized based on sensitivity and required protections?",
        "correctAnswer": "Data Classification Policy",
        "incorrectAnswers": [
          "Retention Policy",
          "Access Control Policy",
          "Acceptable Use Policy",
          "Privacy Policy"
        ],
        "explanation": "Data classification policies define sensitivity levels and protection requirements."
      },
      {
        "id": 802,
        "question": "Which policy defines how long data must be stored and when it should be securely disposed of?",
        "correctAnswer": "Retention Policy",
        "incorrectAnswers": [
          "Data Classification Policy",
          "Access Control Policy",
          "Acceptable Use Policy",
          "Privacy Policy"
        ],
        "explanation": "Retention policies define storage duration and disposal requirements."
      },
      {
        "id": 803,
        "question": "Which policy defines how access to systems and data is granted, modified, and revoked?",
        "correctAnswer": "Access Control Policy",
        "incorrectAnswers": [
          "Retention Policy",
          "Acceptable Use Policy",
          "Privacy Policy",
          "Data Classification Policy"
        ],
        "explanation": "Access control policies govern how access is managed throughout the user lifecycle."
      },
      {
        "id": 804,
        "question": "Which governance document ensures that security requirements are consistently applied across all systems and environments?",
        "correctAnswer": "Standard",
        "incorrectAnswers": [
          "Policy",
          "Procedure",
          "Guideline",
          "Playbook"
        ],
        "explanation": "Standards enforce consistency across systems and environments."
      }
    ],
    "bonusQuestions": [
      {
        "id": 805,
        "question": "Which governance document outlines how an organization protects personal data and complies with privacy regulations?",
        "correctAnswer": "Privacy Policy",
        "incorrectAnswers": [
          "Acceptable Use Policy",
          "Access Control Policy",
          "Retention Policy",
          "Data Classification Policy"
        ],
        "explanation": "Privacy policies define how personal data is collected, used, and protected."
      },
      {
        "id": 807,
        "question": "Which governance document is most useful during incident response for ensuring consistent actions?",
        "correctAnswer": "Playbook",
        "incorrectAnswers": [
          "Policy",
          "Standard",
          "Procedure",
          "Guideline"
        ],
        "explanation": "Playbooks provide predefined workflows for incident response."
      },
      {
        "id": 809,
        "question": "Which governance document defines the overarching security expectations that standards and procedures must follow?",
        "correctAnswer": "Security Policy",
        "incorrectAnswers": [
          "Guideline",
          "Procedure",
          "Playbook",
          "Checklist"
        ],
        "explanation": "Policies set the high-level direction for all other governance documents."
      }
    ]
  },
  "Security Awareness & Training": {
    "domain": "5.0 Security Program Management and Oversight",
    "questions": [
      {
        "id": 810,
        "question": "Which security awareness concept teaches employees to verify unexpected requests for sensitive information?",
        "correctAnswer": "Social Engineering Awareness",
        "incorrectAnswers": [
          "Password Hygiene",
          "Physical Security Training",
          "Data Classification Training",
          "Incident Response Training"
        ],
        "explanation": "Social engineering awareness helps employees identify fraudulent requests."
      },
      {
        "id": 811,
        "question": "Which training topic teaches employees how to create strong, unique passwords and avoid reuse?",
        "correctAnswer": "Password Hygiene",
        "incorrectAnswers": [
          "Social Engineering Awareness",
          "Physical Security Training",
          "Data Handling Training",
          "Incident Response Training"
        ],
        "explanation": "Password hygiene focuses on creating and managing secure passwords."
      },
      {
        "id": 812,
        "question": "Which security awareness topic teaches employees how to properly store, transmit, and dispose of sensitive data?",
        "correctAnswer": "Data Handling Training",
        "incorrectAnswers": [
          "Password Hygiene",
          "Social Engineering Awareness",
          "Physical Security Training",
          "Incident Response Training"
        ],
        "explanation": "Data handling training ensures employees protect sensitive information."
      },
      {
        "id": 813,
        "question": "Which training topic teaches employees how to recognize phishing emails and avoid malicious links?",
        "correctAnswer": "Phishing Awareness",
        "incorrectAnswers": [
          "Password Hygiene",
          "Data Handling Training",
          "Physical Security Training",
          "Incident Response Training"
        ],
        "explanation": "Phishing awareness helps employees identify fraudulent emails."
      },
      {
        "id": 814,
        "question": "Which security awareness concept teaches employees to lock their screens when leaving their workstation?",
        "correctAnswer": "Physical Security Training",
        "incorrectAnswers": [
          "Password Hygiene",
          "Phishing Awareness",
          "Data Handling Training",
          "Incident Response Training"
        ],
        "explanation": "Physical security training includes securing workstations and devices."
      },
      {
        "id": 815,
        "question": "Which training topic teaches employees how to report suspicious activity or potential security incidents?",
        "correctAnswer": "Incident Reporting Training",
        "incorrectAnswers": [
          "Password Hygiene",
          "Phishing Awareness",
          "Data Handling Training",
          "Physical Security Training"
        ],
        "explanation": "Incident reporting training ensures employees know how to escalate issues."
      },
      {
        "id": 816,
        "question": "Which security awareness concept teaches employees to avoid plugging unknown USB devices into company systems?",
        "correctAnswer": "Removable Media Safety",
        "incorrectAnswers": [
          "Password Hygiene",
          "Phishing Awareness",
          "Data Handling Training",
          "Physical Security Training"
        ],
        "explanation": "Removable media safety prevents malware infections from unknown devices."
      },
      {
        "id": 817,
        "question": "Which training topic teaches employees how to identify and protect personally identifiable information (PII)?",
        "correctAnswer": "Privacy Awareness",
        "incorrectAnswers": [
          "Password Hygiene",
          "Phishing Awareness",
          "Physical Security Training",
          "Incident Response Training"
        ],
        "explanation": "Privacy awareness focuses on protecting personal data."
      },
      {
        "id": 818,
        "question": "Which security awareness concept teaches employees to avoid discussing sensitive information in public areas?",
        "correctAnswer": "Confidentiality Awareness",
        "incorrectAnswers": [
          "Password Hygiene",
          "Phishing Awareness",
          "Physical Security Training",
          "Incident Response Training"
        ],
        "explanation": "Confidentiality awareness prevents accidental disclosure of sensitive information."
      },
      {
        "id": 819,
        "question": "Which training topic teaches employees how to identify unsafe websites and avoid downloading untrusted software?",
        "correctAnswer": "Safe Browsing Practices",
        "incorrectAnswers": [
          "Password Hygiene",
          "Phishing Awareness",
          "Data Handling Training",
          "Incident Response Training"
        ],
        "explanation": "Safe browsing practices help employees avoid malicious websites and downloads."
      }
    ],
    "bonusQuestions": [
      {
        "id": 820,
        "question": "Which security awareness concept teaches employees to verify the identity of individuals requesting physical access to secure areas?",
        "correctAnswer": "Visitor Verification Training",
        "incorrectAnswers": [
          "Password Hygiene",
          "Phishing Awareness",
          "Data Handling Training",
          "Incident Response Training"
        ],
        "explanation": "Visitor verification training prevents unauthorized physical access."
      },
      {
        "id": 821,
        "question": "Which training topic teaches employees how to identify signs of insider threats such as unusual behavior or unauthorized access attempts?",
        "correctAnswer": "Insider Threat Awareness",
        "incorrectAnswers": [
          "Password Hygiene",
          "Phishing Awareness",
          "Data Handling Training",
          "Physical Security Training"
        ],
        "explanation": "Insider threat awareness helps employees recognize risky behavior."
      },
      {
        "id": 822,
        "question": "Which security awareness concept teaches employees to avoid sharing sensitive information over unsecured communication channels?",
        "correctAnswer": "Secure Communication Training",
        "incorrectAnswers": [
          "Password Hygiene",
          "Phishing Awareness",
          "Data Handling Training",
          "Incident Response Training"
        ],
        "explanation": "Secure communication training ensures sensitive data is transmitted safely."
      },
      {
        "id": 823,
        "question": "Which training topic teaches employees how to identify malware symptoms such as slow performance or unexpected pop-ups?",
        "correctAnswer": "Malware Awareness",
        "incorrectAnswers": [
          "Password Hygiene",
          "Phishing Awareness",
          "Data Handling Training",
          "Physical Security Training"
        ],
        "explanation": "Malware awareness helps employees recognize signs of infection."
      },
      {
        "id": 824,
        "question": "Which security awareness concept teaches employees to avoid reusing passwords across multiple accounts?",
        "correctAnswer": "Credential Reuse Prevention",
        "incorrectAnswers": [
          "Phishing Awareness",
          "Data Handling Training",
          "Incident Response Training",
          "Physical Security Training"
        ],
        "explanation": "Credential reuse prevention reduces risk from compromised passwords."
      }
    ]
  },
  "Business Continuity & Disaster Recovery (BC/DR)": {
    "domain": "5.0 Security Program Management and Oversight",
    "questions": [
      {
        "id": 825,
        "question": "Which BC/DR metric defines the maximum acceptable amount of data loss measured in time?",
        "correctAnswer": "Recovery Point Objective (RPO)",
        "incorrectAnswers": [
          "Recovery Time Objective (RTO)",
          "Mean Time to Recover (MTTR)",
          "Maximum Tolerable Downtime (MTD)",
          "Failover Threshold"
        ],
        "explanation": "RPO defines how much data loss is acceptable, measured in time."
      },
      {
        "id": 826,
        "question": "Which BC/DR metric defines the maximum acceptable time to restore operations after a disruption?",
        "correctAnswer": "Recovery Time Objective (RTO)",
        "incorrectAnswers": [
          "Recovery Point Objective",
          "Mean Time to Recover",
          "Maximum Tolerable Downtime",
          "Failover Threshold"
        ],
        "explanation": "RTO defines how quickly systems must be restored."
      },
      {
        "id": 827,
        "question": "Which BC/DR metric defines the longest time an organization can tolerate a system outage before severe impact occurs?",
        "correctAnswer": "Maximum Tolerable Downtime (MTD)",
        "incorrectAnswers": [
          "RPO",
          "RTO",
          "MTTR",
          "Failover Time"
        ],
        "explanation": "MTD defines the maximum outage duration before unacceptable consequences."
      },
      {
        "id": 828,
        "question": "Which BC/DR strategy involves switching operations to a secondary system when the primary system fails?",
        "correctAnswer": "Failover",
        "incorrectAnswers": [
          "Failback",
          "Backup Rotation",
          "Warm Site Activation",
          "Redundancy"
        ],
        "explanation": "Failover automatically or manually switches operations to a backup system."
      },
      {
        "id": 829,
        "question": "Which BC/DR strategy involves returning operations from a backup system back to the primary system?",
        "correctAnswer": "Failback",
        "incorrectAnswers": [
          "Failover",
          "Backup Rotation",
          "Warm Site Activation",
          "Redundancy"
        ],
        "explanation": "Failback restores operations to the primary system after recovery."
      },
      {
        "id": 830,
        "question": "Which type of backup site is fully equipped and can take over operations immediately?",
        "correctAnswer": "Hot Site",
        "incorrectAnswers": [
          "Warm Site",
          "Cold Site",
          "Mobile Site",
          "Cloud Site"
        ],
        "explanation": "Hot sites are fully operational and ready for immediate failover."
      },
      {
        "id": 831,
        "question": "Which type of backup site has partial infrastructure and requires some setup before becoming operational?",
        "correctAnswer": "Warm Site",
        "incorrectAnswers": [
          "Hot Site",
          "Cold Site",
          "Mobile Site",
          "Cloud Site"
        ],
        "explanation": "Warm sites have partial infrastructure and require configuration."
      },
      {
        "id": 832,
        "question": "Which type of backup site has no pre-installed equipment and requires full setup before use?",
        "correctAnswer": "Cold Site",
        "incorrectAnswers": [
          "Hot Site",
          "Warm Site",
          "Mobile Site",
          "Cloud Site"
        ],
        "explanation": "Cold sites require full setup and are the slowest to activate."
      },
      {
        "id": 833,
        "question": "Which BC/DR document outlines step-by-step instructions for restoring systems after a disaster?",
        "correctAnswer": "Disaster Recovery Plan (DRP)",
        "incorrectAnswers": [
          "Business Continuity Plan",
          "Incident Response Plan",
          "Crisis Communication Plan",
          "Continuity Playbook"
        ],
        "explanation": "DRPs provide detailed recovery procedures for systems and infrastructure."
      },
      {
        "id": 834,
        "question": "Which BC/DR document focuses on maintaining essential business operations during and after a disruption?",
        "correctAnswer": "Business Continuity Plan (BCP)",
        "incorrectAnswers": [
          "Disaster Recovery Plan",
          "Incident Response Plan",
          "Continuity Playbook",
          "Crisis Communication Plan"
        ],
        "explanation": "BCPs ensure critical business functions continue during disruptions."
      }
    ],
    "bonusQuestions": [
      {
        "id": 835,
        "question": "Which BC/DR testing method involves walking through procedures without executing them?",
        "correctAnswer": "Tabletop Exercise",
        "incorrectAnswers": [
          "Full Interruption Test",
          "Parallel Test",
          "Simulation Test",
          "Failover Test"
        ],
        "explanation": "Tabletop exercises review procedures without actual system disruption."
      },
      {
        "id": 836,
        "question": "Which BC/DR testing method involves running backup systems alongside production without interrupting operations?",
        "correctAnswer": "Parallel Test",
        "incorrectAnswers": [
          "Full Interruption Test",
          "Tabletop Exercise",
          "Simulation Test",
          "Failover Test"
        ],
        "explanation": "Parallel tests validate backup systems while production continues."
      },
      {
        "id": 837,
        "question": "Which BC/DR testing method involves shutting down production systems to validate full recovery capabilities?",
        "correctAnswer": "Full Interruption Test",
        "incorrectAnswers": [
          "Parallel Test",
          "Tabletop Exercise",
          "Simulation Test",
          "Failover Test"
        ],
        "explanation": "Full interruption tests validate complete recovery but are high risk."
      },
      {
        "id": 838,
        "question": "Which BC/DR concept ensures that critical systems have redundant components to prevent single points of failure?",
        "correctAnswer": "Redundancy",
        "incorrectAnswers": [
          "Failover",
          "Backup Rotation",
          "Warm Site Activation",
          "Load Balancing"
        ],
        "explanation": "Redundancy prevents outages by duplicating critical components."
      },
      {
        "id": 839,
        "question": "Which BC/DR concept involves storing backup data in multiple geographic locations to reduce risk?",
        "correctAnswer": "Geographic Redundancy",
        "incorrectAnswers": [
          "Cold Storage",
          "Backup Rotation",
          "Failover",
          "Load Distribution"
        ],
        "explanation": "Geographic redundancy protects against regional disasters."
      }
    ]
  },
  "Security Controls & Frameworks": {
    "domain": "5.0 Security Program Management and Oversight",
    "questions": [
      {
        "id": 840,
        "question": "Which security framework provides a prioritized set of controls designed to help organizations reduce cyber risk?",
        "correctAnswer": "CIS Controls",
        "incorrectAnswers": [
          "NIST CSF",
          "ISO 27001",
          "SOC 2",
          "COBIT"
        ],
        "explanation": "CIS Controls offer a prioritized list of actions to reduce cyber risk."
      },
      {
        "id": 841,
        "question": "Which security framework provides a lifecycle-based approach with five core functions: Identify, Protect, Detect, Respond, Recover?",
        "correctAnswer": "NIST Cybersecurity Framework (CSF)",
        "incorrectAnswers": [
          "ISO 27001",
          "CIS Controls",
          "SOC 2",
          "COBIT"
        ],
        "explanation": "NIST CSF organizes cybersecurity activities into five core functions."
      },
      {
        "id": 842,
        "question": "Which security standard focuses on establishing, implementing, maintaining, and improving an information security management system (ISMS)?",
        "correctAnswer": "ISO 27001",
        "incorrectAnswers": [
          "NIST CSF",
          "CIS Controls",
          "SOC 2",
          "PCI DSS"
        ],
        "explanation": "ISO 27001 defines requirements for an ISMS."
      },
      {
        "id": 843,
        "question": "Which security framework is commonly used by service organizations to demonstrate security controls to customers?",
        "correctAnswer": "SOC 2",
        "incorrectAnswers": [
          "ISO 27001",
          "NIST CSF",
          "CIS Controls",
          "COBIT"
        ],
        "explanation": "SOC 2 evaluates security controls for service organizations."
      },
      {
        "id": 844,
        "question": "Which security standard focuses on protecting cardholder data for organizations that process credit card transactions?",
        "correctAnswer": "PCI DSS",
        "incorrectAnswers": [
          "ISO 27001",
          "SOC 2",
          "NIST CSF",
          "CIS Controls"
        ],
        "explanation": "PCI DSS defines requirements for securing cardholder data."
      },
      {
        "id": 848,
        "question": "Which type of control is designed to prevent security incidents from occurring?",
        "correctAnswer": "Preventive Controls",
        "incorrectAnswers": [
          "Detective Controls",
          "Corrective Controls",
          "Compensating Controls",
          "Administrative Controls"
        ],
        "explanation": "Preventive controls reduce the likelihood of incidents."
      },
      {
        "id": 849,
        "question": "Which type of control identifies and alerts on security incidents after they occur?",
        "correctAnswer": "Detective Controls",
        "incorrectAnswers": [
          "Preventive Controls",
          "Corrective Controls",
          "Compensating Controls",
          "Administrative Controls"
        ],
        "explanation": "Detective controls identify incidents through monitoring and alerts."
      }
    ],
    "bonusQuestions": [
      {
        "id": 850,
        "question": "Which type of control restores systems after a security incident?",
        "correctAnswer": "Corrective Controls",
        "incorrectAnswers": [
          "Preventive Controls",
          "Detective Controls",
          "Compensating Controls",
          "Administrative Controls"
        ],
        "explanation": "Corrective controls restore systems to normal operation."
      },
      {
        "id": 851,
        "question": "Which type of control provides an alternative when primary controls cannot be implemented?",
        "correctAnswer": "Compensating Controls",
        "incorrectAnswers": [
          "Preventive Controls",
          "Detective Controls",
          "Corrective Controls",
          "Administrative Controls"
        ],
        "explanation": "Compensating controls provide alternative protections."
      },
      {
        "id": 852,
        "question": "Which security framework focuses on aligning IT goals with business objectives?",
        "correctAnswer": "COBIT",
        "incorrectAnswers": [
          "NIST CSF",
          "ISO 27001",
          "CIS Controls",
          "SOC 2"
        ],
        "explanation": "COBIT focuses on governance and management of enterprise IT."
      },
      {
        "id": 853,
        "question": "Which security standard includes 114 controls organized into 14 categories?",
        "correctAnswer": "ISO 27002",
        "incorrectAnswers": [
          "ISO 27001",
          "NIST CSF",
          "SOC 2",
          "PCI DSS"
        ],
        "explanation": "ISO 27002 provides detailed security control guidance."
      },
      {
        "id": 854,
        "question": "Which NIST publication provides detailed security and privacy controls for federal information systems?",
        "correctAnswer": "NIST SP 800-53",
        "incorrectAnswers": [
          "NIST SP 800-37",
          "NIST SP 800-171",
          "NIST CSF",
          "NIST SP 800-30"
        ],
        "explanation": "NIST SP 800-53 defines comprehensive security and privacy controls."
      }
    ]
  },
  "Supply Chain & Third-Party Risk Management": {
    "domain": "5.0 Security Program Management and Oversight",
    "questions": [
      {
        "id": 855,
        "question": "Which type of risk occurs when a vendor or supplier introduces vulnerabilities into an organization’s environment?",
        "correctAnswer": "Supply Chain Risk",
        "incorrectAnswers": [
          "Operational Risk",
          "Financial Risk",
          "Compliance Risk",
          "Insider Risk"
        ],
        "explanation": "Supply chain risk arises when third parties introduce vulnerabilities."
      },
      {
        "id": 856,
        "question": "Which document defines security requirements that vendors must meet before doing business with an organization?",
        "correctAnswer": "Service-Level Agreement (SLA)",
        "incorrectAnswers": [
          "Memorandum of Understanding (MOU)",
          "Statement of Work (SOW)",
          "Master Service Agreement (MSA)",
          "Non-Disclosure Agreement (NDA)"
        ],
        "explanation": "SLAs define performance and security requirements for vendors."
      },
      {
        "id": 857,
        "question": "Which document outlines confidentiality requirements to protect sensitive information shared with third parties?",
        "correctAnswer": "Non-Disclosure Agreement (NDA)",
        "incorrectAnswers": [
          "SLA",
          "SOW",
          "MOU",
          "MSA"
        ],
        "explanation": "NDAs ensure sensitive information is not disclosed by third parties."
      },
      {
        "id": 858,
        "question": "Which document outlines the specific tasks, deliverables, and timelines for a vendor engagement?",
        "correctAnswer": "Statement of Work (SOW)",
        "incorrectAnswers": [
          "SLA",
          "NDA",
          "MOU",
          "MSA"
        ],
        "explanation": "SOWs define project-specific deliverables and timelines."
      },
      {
        "id": 859,
        "question": "Which type of assessment evaluates a vendor’s security posture before onboarding?",
        "correctAnswer": "Third-Party Risk Assessment",
        "incorrectAnswers": [
          "Penetration Test",
          "Compliance Audit",
          "Business Impact Analysis",
          "Gap Assessment"
        ],
        "explanation": "Third-party risk assessments evaluate vendor security before engagement."
      },
      {
        "id": 860,
        "question": "Which security concept ensures that software components are tracked and verified to prevent tampering?",
        "correctAnswer": "Software Bill of Materials (SBOM)",
        "incorrectAnswers": [
          "Code Signing",
          "Version Control",
          "Dependency Mapping",
          "Secure Boot"
        ],
        "explanation": "SBOMs list all software components to ensure transparency and security."
      },
      {
        "id": 861,
        "question": "Which security control verifies the authenticity and integrity of software updates?",
        "correctAnswer": "Code Signing",
        "incorrectAnswers": [
          "SBOM",
          "Secure Boot",
          "Dependency Scanning",
          "Patch Management"
        ],
        "explanation": "Code signing ensures updates come from trusted sources."
      },
      {
        "id": 862,
        "question": "Which type of risk occurs when a vendor fails to meet regulatory or contractual security requirements?",
        "correctAnswer": "Compliance Risk",
        "incorrectAnswers": [
          "Operational Risk",
          "Financial Risk",
          "Supply Chain Risk",
          "Strategic Risk"
        ],
        "explanation": "Compliance risk arises when vendors fail to meet required standards."
      },
      {
        "id": 863,
        "question": "Which process involves continuously monitoring vendors to ensure they maintain required security controls?",
        "correctAnswer": "Vendor Monitoring",
        "incorrectAnswers": [
          "Vendor Onboarding",
          "Vendor Offboarding",
          "Vendor Procurement",
          "Vendor Negotiation"
        ],
        "explanation": "Vendor monitoring ensures ongoing compliance with security requirements."
      },
      {
        "id": 864,
        "question": "Which type of attack compromises a trusted vendor to infiltrate a target organization?",
        "correctAnswer": "Supply Chain Attack",
        "incorrectAnswers": [
          "Phishing Attack",
          "Man-in-the-Middle Attack",
          "Watering Hole Attack",
          "Credential Stuffing"
        ],
        "explanation": "Supply chain attacks exploit trusted third-party relationships."
      }
    ],
    "bonusQuestions": [
      {
        "id": 865,
        "question": "Which document outlines high-level cooperation terms between organizations without legally binding commitments?",
        "correctAnswer": "Memorandum of Understanding (MOU)",
        "incorrectAnswers": [
          "SLA",
          "SOW",
          "NDA",
          "MSA"
        ],
        "explanation": "MOUs define cooperative agreements without binding obligations."
      },
      {
        "id": 866,
        "question": "Which agreement defines long-term terms and conditions for ongoing vendor relationships?",
        "correctAnswer": "Master Service Agreement (MSA)",
        "incorrectAnswers": [
          "SLA",
          "SOW",
          "NDA",
          "MOU"
        ],
        "explanation": "MSAs govern long-term vendor relationships and expectations."
      },
      {
        "id": 867,
        "question": "Which security practice ensures that third-party access is limited to only what is necessary?",
        "correctAnswer": "Least Privilege",
        "incorrectAnswers": [
          "Zero Trust",
          "Network Segmentation",
          "Access Recertification",
          "Role-Based Access Control"
        ],
        "explanation": "Least privilege restricts vendor access to only what is required."
      },
      {
        "id": 868,
        "question": "Which process ensures that vendor accounts and access are removed when no longer needed?",
        "correctAnswer": "Vendor Offboarding",
        "incorrectAnswers": [
          "Vendor Monitoring",
          "Vendor Procurement",
          "Vendor Assessment",
          "Vendor Negotiation"
        ],
        "explanation": "Vendor offboarding removes access and terminates relationships securely."
      },
      {
        "id": 869,
        "question": "Which security concept requires verifying all vendor actions and access requests regardless of trust level?",
        "correctAnswer": "Zero Trust",
        "incorrectAnswers": [
          "Least Privilege",
          "Network Segmentation",
          "Access Recertification",
          "Vendor Monitoring"
        ],
        "explanation": "Zero Trust requires continuous verification of all access requests."
      }
    ]
  },
  "Secure Software Development (SDLC & DevSecOps)": {
    "domain": "4.0 Cloud & Virtualization / 5.0 Security Program Management",
    "questions": [
      {
        "id": 870,
        "question": "Which SDLC phase focuses on gathering business requirements and defining security needs?",
        "correctAnswer": "Requirements Phase",
        "incorrectAnswers": [
          "Design Phase",
          "Development Phase",
          "Testing Phase",
          "Deployment Phase"
        ],
        "explanation": "The requirements phase defines functional and security needs before development begins."
      },
      {
        "id": 871,
        "question": "Which SDLC phase focuses on creating architecture diagrams, data flows, and security models?",
        "correctAnswer": "Design Phase",
        "incorrectAnswers": [
          "Requirements Phase",
          "Development Phase",
          "Testing Phase",
          "Deployment Phase"
        ],
        "explanation": "The design phase creates the architecture and security blueprint for the application."
      },
      {
        "id": 872,
        "question": "Which SDLC phase involves writing code and implementing security controls such as input validation?",
        "correctAnswer": "Development Phase",
        "incorrectAnswers": [
          "Design Phase",
          "Testing Phase",
          "Deployment Phase",
          "Maintenance Phase"
        ],
        "explanation": "The development phase includes coding and implementing secure coding practices."
      },
      {
        "id": 873,
        "question": "Which SDLC phase focuses on identifying vulnerabilities through methods such as static analysis and penetration testing?",
        "correctAnswer": "Testing Phase",
        "incorrectAnswers": [
          "Requirements Phase",
          "Design Phase",
          "Development Phase",
          "Deployment Phase"
        ],
        "explanation": "The testing phase validates functionality and security through various testing methods."
      },
      {
        "id": 874,
        "question": "Which SDLC phase involves releasing the application into production and enabling monitoring?",
        "correctAnswer": "Deployment Phase",
        "incorrectAnswers": [
          "Testing Phase",
          "Development Phase",
          "Design Phase",
          "Maintenance Phase"
        ],
        "explanation": "The deployment phase releases the application and activates monitoring controls."
      },
      {
        "id": 875,
        "question": "Which SDLC phase focuses on patching vulnerabilities, updating features, and maintaining security controls?",
        "correctAnswer": "Maintenance Phase",
        "incorrectAnswers": [
          "Development Phase",
          "Testing Phase",
          "Deployment Phase",
          "Requirements Phase"
        ],
        "explanation": "The maintenance phase ensures the application remains secure and functional over time."
      },
      {
        "id": 876,
        "question": "Which secure coding practice prevents attackers from injecting malicious input into applications?",
        "correctAnswer": "Input Validation",
        "incorrectAnswers": [
          "Code Signing",
          "Secure Boot",
          "Dependency Mapping",
          "Session Tokenization"
        ],
        "explanation": "Input validation ensures user input is safe before processing."
      },
      {
        "id": 877,
        "question": "Which secure coding practice ensures that sensitive data is not exposed in logs or error messages?",
        "correctAnswer": "Error and Exception Handling",
        "incorrectAnswers": [
          "Input Validation",
          "Code Signing",
          "Secure Boot",
          "Dependency Scanning"
        ],
        "explanation": "Proper error handling prevents leakage of sensitive information."
      },
      {
        "id": 878,
        "question": "Which DevSecOps practice integrates security testing into the CI/CD pipeline?",
        "correctAnswer": "Shift Left Security",
        "incorrectAnswers": [
          "Shift Right Security",
          "Blue-Green Deployment",
          "Immutable Infrastructure",
          "Runtime Hardening"
        ],
        "explanation": "Shift-left security moves testing earlier in the development process."
      },
      {
        "id": 879,
        "question": "Which automated security test analyzes source code without executing it?",
        "correctAnswer": "Static Application Security Testing (SAST)",
        "incorrectAnswers": [
          "Dynamic Application Security Testing (DAST)",
          "Interactive Application Security Testing (IAST)",
          "Penetration Testing",
          "Fuzzing"
        ],
        "explanation": "SAST analyzes code statically to find vulnerabilities early."
      }
    ],
    "bonusQuestions": [
      {
        "id": 880,
        "question": "Which automated security test analyzes running applications to identify vulnerabilities?",
        "correctAnswer": "Dynamic Application Security Testing (DAST)",
        "incorrectAnswers": [
          "Static Application Security Testing",
          "Interactive Application Security Testing",
          "Fuzzing",
          "Code Review"
        ],
        "explanation": "DAST tests applications while running to identify runtime vulnerabilities."
      },
      {
        "id": 881,
        "question": "Which security testing method sends random or malformed input to applications to find unexpected behavior?",
        "correctAnswer": "Fuzzing",
        "incorrectAnswers": [
          "SAST",
          "DAST",
          "Penetration Testing",
          "Code Review"
        ],
        "explanation": "Fuzzing identifies crashes and vulnerabilities by sending malformed input."
      },
      {
        "id": 882,
        "question": "Which secure development practice ensures that third-party libraries are safe and up to date?",
        "correctAnswer": "Dependency Scanning",
        "incorrectAnswers": [
          "Code Signing",
          "Input Validation",
          "Secure Boot",
          "Runtime Monitoring"
        ],
        "explanation": "Dependency scanning identifies vulnerable or outdated libraries."
      },
      {
        "id": 883,
        "question": "Which DevSecOps concept ensures that infrastructure is deployed from code rather than manual configuration?",
        "correctAnswer": "Infrastructure as Code (IaC)",
        "incorrectAnswers": [
          "Shift Left Security",
          "Immutable Infrastructure",
          "Blue-Green Deployment",
          "Runtime Hardening"
        ],
        "explanation": "IaC automates infrastructure deployment using code."
      },
      {
        "id": 884,
        "question": "Which secure development practice ensures that applications are deployed in environments that cannot be modified after creation?",
        "correctAnswer": "Immutable Infrastructure",
        "incorrectAnswers": [
          "Infrastructure as Code",
          "Shift Left Security",
          "Blue-Green Deployment",
          "Runtime Hardening"
        ],
        "explanation": "Immutable infrastructure prevents configuration drift and unauthorized changes."
      }
    ]
  },
  "Vulnerability Management & Penetration Testing": {
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations / 5.0 Security Program Management",
    "questions": [
      {
        "id": 885,
        "question": "Which vulnerability management process involves identifying weaknesses in systems using automated tools?",
        "correctAnswer": "Vulnerability Scanning",
        "incorrectAnswers": [
          "Penetration Testing",
          "Threat Modeling",
          "Risk Assessment",
          "Code Review"
        ],
        "explanation": "Vulnerability scanning uses automated tools to detect weaknesses."
      },
      {
        "id": 886,
        "question": "Which vulnerability management process involves manually exploiting weaknesses to validate their impact?",
        "correctAnswer": "Penetration Testing",
        "incorrectAnswers": [
          "Vulnerability Scanning",
          "Threat Modeling",
          "Risk Assessment",
          "Code Review"
        ],
        "explanation": "Penetration testing validates vulnerabilities by attempting exploitation."
      },
      {
        "id": 887,
        "question": "Which vulnerability management metric measures how easily a vulnerability can be exploited?",
        "correctAnswer": "Exploitability",
        "incorrectAnswers": [
          "Impact",
          "Likelihood",
          "Exposure Factor",
          "Severity"
        ],
        "explanation": "Exploitability indicates how easy it is for attackers to exploit a vulnerability."
      },
      {
        "id": 888,
        "question": "Which scoring system is commonly used to rate the severity of vulnerabilities?",
        "correctAnswer": "CVSS",
        "incorrectAnswers": [
          "NIST CSF",
          "ISO 27001",
          "CIS Controls",
          "PCI DSS"
        ],
        "explanation": "CVSS provides a standardized method for rating vulnerability severity."
      },
      {
        "id": 889,
        "question": "Which vulnerability management process involves prioritizing vulnerabilities based on severity and business impact?",
        "correctAnswer": "Risk Prioritization",
        "incorrectAnswers": [
          "Threat Modeling",
          "Patch Deployment",
          "Asset Inventory",
          "Configuration Review"
        ],
        "explanation": "Risk prioritization determines which vulnerabilities to address first."
      },
      {
        "id": 890,
        "question": "Which type of penetration test provides testers with full knowledge of the target environment?",
        "correctAnswer": "White Box Testing",
        "incorrectAnswers": [
          "Black Box Testing",
          "Gray Box Testing",
          "Blind Testing",
          "Double-Blind Testing"
        ],
        "explanation": "White box testing gives testers full internal knowledge of systems."
      },
      {
        "id": 891,
        "question": "Which type of penetration test provides testers with no prior knowledge of the target environment?",
        "correctAnswer": "Black Box Testing",
        "incorrectAnswers": [
          "White Box Testing",
          "Gray Box Testing",
          "Blind Testing",
          "Double-Blind Testing"
        ],
        "explanation": "Black box testing simulates an external attacker with no internal knowledge."
      },
      {
        "id": 892,
        "question": "Which type of penetration test provides testers with partial knowledge of the target environment?",
        "correctAnswer": "Gray Box Testing",
        "incorrectAnswers": [
          "White Box Testing",
          "Black Box Testing",
          "Blind Testing",
          "Double-Blind Testing"
        ],
        "explanation": "Gray box testing simulates an attacker with limited internal knowledge."
      },
      {
        "id": 893,
        "question": "Which penetration testing phase involves gathering publicly available information about the target?",
        "correctAnswer": "Reconnaissance",
        "incorrectAnswers": [
          "Scanning",
          "Exploitation",
          "Reporting",
          "Post-Exploitation"
        ],
        "explanation": "Reconnaissance collects information such as DNS records and open-source intel."
      },
      {
        "id": 894,
        "question": "Which penetration testing phase involves actively probing systems to identify open ports and services?",
        "correctAnswer": "Scanning",
        "incorrectAnswers": [
          "Reconnaissance",
          "Exploitation",
          "Post-Exploitation",
          "Reporting"
        ],
        "explanation": "Scanning identifies active services and potential attack vectors."
      }
    ],
    "bonusQuestions": [
      {
        "id": 895,
        "question": "Which penetration testing phase involves attempting to exploit identified vulnerabilities?",
        "correctAnswer": "Exploitation",
        "incorrectAnswers": [
          "Scanning",
          "Reconnaissance",
          "Reporting",
          "Post-Exploitation"
        ],
        "explanation": "Exploitation tests whether vulnerabilities can be used to gain access."
      },
      {
        "id": 896,
        "question": "Which penetration testing phase involves maintaining access and pivoting to other systems?",
        "correctAnswer": "Post-Exploitation",
        "incorrectAnswers": [
          "Exploitation",
          "Scanning",
          "Reconnaissance",
          "Reporting"
        ],
        "explanation": "Post-exploitation assesses the impact of a successful compromise."
      },
      {
        "id": 897,
        "question": "Which penetration testing phase involves documenting findings, impacts, and remediation recommendations?",
        "correctAnswer": "Reporting",
        "incorrectAnswers": [
          "Exploitation",
          "Scanning",
          "Reconnaissance",
          "Post-Exploitation"
        ],
        "explanation": "Reporting provides detailed results and remediation guidance."
      },
      {
        "id": 898,
        "question": "Which vulnerability management process ensures that systems remain up to date with the latest fixes?",
        "correctAnswer": "Patch Management",
        "incorrectAnswers": [
          "Asset Inventory",
          "Threat Modeling",
          "Code Review",
          "Configuration Baseline"
        ],
        "explanation": "Patch management applies updates to fix vulnerabilities."
      },
      {
        "id": 899,
        "question": "Which vulnerability management process involves identifying critical systems and their associated risks?",
        "correctAnswer": "Asset Inventory",
        "incorrectAnswers": [
          "Patch Management",
          "Threat Modeling",
          "Code Review",
          "Configuration Baseline"
        ],
        "explanation": "Asset inventory identifies systems that require protection and monitoring."
      }
    ]
  },
  "Monitoring, Logging & Detection (SIEM, SOAR)": {
    "domain": "3.0 Security Architecture / 5.0 Security Program Management",
    "questions": [
      {
        "id": 900,
        "question": "Which security tool aggregates logs from multiple systems and correlates events to identify threats?",
        "correctAnswer": "Security Information and Event Management (SIEM)",
        "incorrectAnswers": [
          "SOAR",
          "EDR",
          "NAC",
          "Firewall"
        ],
        "explanation": "SIEM systems collect and correlate logs to detect security incidents."
      },
      {
        "id": 901,
        "question": "Which security platform automates incident response workflows and integrates with SIEM systems?",
        "correctAnswer": "Security Orchestration, Automation, and Response (SOAR)",
        "incorrectAnswers": [
          "SIEM",
          "EDR",
          "IDS",
          "UEBA"
        ],
        "explanation": "SOAR automates response actions and integrates with SIEM alerts."
      },
      {
        "id": 902,
        "question": "Which type of monitoring detects unusual user behavior such as impossible travel or abnormal login patterns?",
        "correctAnswer": "User and Entity Behavior Analytics (UEBA)",
        "incorrectAnswers": [
          "SIEM",
          "SOAR",
          "EDR",
          "IDS"
        ],
        "explanation": "UEBA identifies anomalies in user and system behavior."
      },
      {
        "id": 903,
        "question": "Which type of detection system monitors network traffic for malicious activity but does not block it?",
        "correctAnswer": "Intrusion Detection System (IDS)",
        "incorrectAnswers": [
          "IPS",
          "Firewall",
          "EDR",
          "SIEM"
        ],
        "explanation": "IDS detects malicious activity but does not block traffic."
      },
      {
        "id": 904,
        "question": "Which type of detection system monitors network traffic and can block malicious activity?",
        "correctAnswer": "Intrusion Prevention System (IPS)",
        "incorrectAnswers": [
          "IDS",
          "Firewall",
          "EDR",
          "SIEM"
        ],
        "explanation": "IPS detects and blocks malicious traffic."
      },
      {
        "id": 905,
        "question": "Which type of log records authentication attempts, password changes, and account lockouts?",
        "correctAnswer": "Authentication Logs",
        "incorrectAnswers": [
          "System Logs",
          "Application Logs",
          "Network Logs",
          "Audit Logs"
        ],
        "explanation": "Authentication logs track login activity and credential events."
      },
      {
        "id": 907,
        "question": "Which type of log records events generated by software such as errors, warnings, and usage patterns?",
        "correctAnswer": "Application Logs",
        "incorrectAnswers": [
          "System Logs",
          "Authentication Logs",
          "Network Logs",
          "Audit Logs"
        ],
        "explanation": "Application logs track events within software applications."
      },
      {
        "id": 908,
        "question": "Which type of log records network activity such as connections, bandwidth usage, and packet flow?",
        "correctAnswer": "Network Logs",
        "incorrectAnswers": [
          "System Logs",
          "Authentication Logs",
          "Application Logs",
          "Audit Logs"
        ],
        "explanation": "Network logs track traffic patterns and connection activity."
      },
      {
        "id": 909,
        "question": "Which monitoring technique compares current activity to a baseline to detect anomalies?",
        "correctAnswer": "Behavioral Monitoring",
        "incorrectAnswers": [
          "Signature-Based Detection",
          "Heuristic Analysis",
          "Packet Inspection",
          "Log Rotation"
        ],
        "explanation": "Behavioral monitoring detects deviations from normal activity."
      }
    ],
    "bonusQuestions": [
      {
        "id": 910,
        "question": "Which detection method identifies threats by matching known malicious patterns?",
        "correctAnswer": "Signature-Based Detection",
        "incorrectAnswers": [
          "Behavioral Detection",
          "Heuristic Detection",
          "Anomaly Detection",
          "Packet Filtering"
        ],
        "explanation": "Signature-based detection uses known threat signatures."
      },
      {
        "id": 911,
        "question": "Which detection method identifies threats by analyzing behavior rather than known signatures?",
        "correctAnswer": "Anomaly Detection",
        "incorrectAnswers": [
          "Signature-Based Detection",
          "Heuristic Detection",
          "Packet Filtering",
          "Log Parsing"
        ],
        "explanation": "Anomaly detection identifies deviations from normal patterns."
      },
      {
        "id": 912,
        "question": "Which security tool monitors endpoints for malicious activity and provides response capabilities?",
        "correctAnswer": "Endpoint Detection and Response (EDR)",
        "incorrectAnswers": [
          "SIEM",
          "SOAR",
          "IDS",
          "Firewall"
        ],
        "explanation": "EDR monitors endpoints and provides response actions."
      },
      {
        "id": 913,
        "question": "Which SIEM feature reduces alert fatigue by grouping related events into a single incident?",
        "correctAnswer": "Event Correlation",
        "incorrectAnswers": [
          "Log Aggregation",
          "Threat Intelligence",
          "Alert Forwarding",
          "Packet Capture"
        ],
        "explanation": "Event correlation groups related alerts to identify meaningful incidents."
      },
      {
        "id": 914,
        "question": "Which SOAR capability allows automated actions such as blocking IPs or disabling accounts?",
        "correctAnswer": "Automated Response",
        "incorrectAnswers": [
          "Event Correlation",
          "Log Aggregation",
          "Threat Intelligence",
          "Packet Capture"
        ],
        "explanation": "SOAR automates response actions to reduce manual workload."
      }
    ]
  },
  "Cryptographic Operations (Advanced)": {
    "domain": "1.0 General Security Concepts / 3.0 Security Architecture",
    "questions": [
      {
        "id": 916,
        "question": "Which cryptographic algorithm type uses the same key for both encryption and decryption?",
        "correctAnswer": "Symmetric Encryption",
        "incorrectAnswers": [
          "Asymmetric Encryption",
          "Hashing",
          "Digital Signing",
          "Key Stretching"
        ],
        "explanation": "Symmetric encryption uses a shared secret key."
      },
      {
        "id": 919,
        "question": "Which hashing algorithm is considered secure and widely used for digital signatures?",
        "correctAnswer": "SHA-256",
        "incorrectAnswers": [
          "MD5",
          "SHA-1",
          "DES",
          "AES"
        ],
        "explanation": "SHA-256 is a secure hashing algorithm used in modern cryptography."
      },
      {
        "id": 921,
        "question": "Which cryptographic mechanism verifies the authenticity and integrity of a message using a private key?",
        "correctAnswer": "Digital Signature",
        "incorrectAnswers": [
          "Hashing",
          "Symmetric Encryption",
          "Key Stretching",
          "Obfuscation"
        ],
        "explanation": "Digital signatures verify authenticity using private keys."
      },
      {
        "id": 923,
        "question": "Which encryption algorithm is widely used for securing data at rest and supports 128-, 192-, and 256-bit keys?",
        "correctAnswer": "AES",
        "incorrectAnswers": [
          "DES",
          "RSA",
          "ECC",
          "Blowfish"
        ],
        "explanation": "AES is the modern standard for symmetric encryption."
      }
    ],
    "bonusQuestions": [
      {
        "id": 925,
        "question": "Which cryptographic concept strengthens weak passwords by increasing computational difficulty?",
        "correctAnswer": "Key Stretching",
        "incorrectAnswers": [
          "Hashing",
          "Salting",
          "Obfuscation",
          "Key Exchange"
        ],
        "explanation": "Key stretching increases the time required to brute-force passwords."
      },
      {
        "id": 926,
        "question": "Which cryptographic technique adds random data to passwords before hashing to prevent rainbow table attacks?",
        "correctAnswer": "Salting",
        "incorrectAnswers": [
          "Key Stretching",
          "Hashing",
          "Obfuscation",
          "Key Derivation"
        ],
        "explanation": "Salting prevents attackers from using precomputed hash tables."
      },
      {
        "id": 927,
        "question": "Which asymmetric algorithm is known for strong security with smaller key sizes?",
        "correctAnswer": "Elliptic Curve Cryptography (ECC)",
        "incorrectAnswers": [
          "RSA",
          "AES",
          "DES",
          "Blowfish"
        ],
        "explanation": "ECC provides strong encryption with smaller keys."
      },
      {
        "id": 928,
        "question": "Which cryptographic attack analyzes physical characteristics such as power consumption to extract keys?",
        "correctAnswer": "Side-Channel Attack",
        "incorrectAnswers": [
          "Replay Attack",
          "Collision Attack",
          "Brute Force Attack",
          "Man-in-the-Middle Attack"
        ],
        "explanation": "Side-channel attacks exploit physical leakage from cryptographic devices."
      },
      {
        "id": 929,
        "question": "Which cryptographic protocol secures web traffic using certificates and encryption?",
        "correctAnswer": "TLS",
        "incorrectAnswers": [
          "SSH",
          "IPsec",
          "S/MIME",
          "PGP"
        ],
        "explanation": "TLS secures web communication through encryption and certificates."
      }
    ]
  },
  "Wireless, Mobile & IoT Security": {
    "domain": "3.0 Security Architecture / 4.0 Cloud & Virtualization",
    "questions": [
      {
        "id": 931,
        "question": "Which wireless security protocol is considered insecure due to weak encryption and easily crackable keys?",
        "correctAnswer": "WEP",
        "incorrectAnswers": [
          "WPA2",
          "WPA3",
          "802.1X",
          "EAP-TLS"
        ],
        "explanation": "WEP is outdated and vulnerable to simple cracking attacks."
      },
      {
        "id": 932,
        "question": "Which wireless authentication method uses certificates for strong mutual authentication?",
        "correctAnswer": "EAP-TLS",
        "incorrectAnswers": [
          "EAP-MD5",
          "PEAP",
          "WEP",
          "PSK"
        ],
        "explanation": "EAP-TLS uses certificates for secure authentication."
      },
      {
        "id": 933,
        "question": "Which wireless attack involves tricking users into connecting to a malicious access point?",
        "correctAnswer": "Evil Twin Attack",
        "incorrectAnswers": [
          "Deauthentication Attack",
          "Jamming Attack",
          "Replay Attack",
          "Bluejacking"
        ],
        "explanation": "Evil twin attacks use rogue access points to steal credentials."
      },
      {
        "id": 934,
        "question": "Which wireless attack forces clients to disconnect from a legitimate access point?",
        "correctAnswer": "Deauthentication Attack",
        "incorrectAnswers": [
          "Evil Twin Attack",
          "Jamming Attack",
          "Replay Attack",
          "Bluejacking"
        ],
        "explanation": "Deauthentication attacks disrupt Wi-Fi connections."
      },
      {
        "id": 935,
        "question": "Which mobile security feature isolates apps to prevent them from accessing each other's data?",
        "correctAnswer": "Sandboxing",
        "incorrectAnswers": [
          "Rooting",
          "Sideloading",
          "Jailbreaking",
          "Tethering"
        ],
        "explanation": "Sandboxing isolates apps to protect sensitive data."
      },
      {
        "id": 936,
        "question": "Which mobile device attack involves installing unauthorized firmware to bypass security controls?",
        "correctAnswer": "Jailbreaking",
        "incorrectAnswers": [
          "Sandboxing",
          "Sideloading",
          "Bluejacking",
          "SIM Cloning"
        ],
        "explanation": "Jailbreaking bypasses security restrictions on mobile devices."
      },
      {
        "id": 937,
        "question": "Which mobile security control enforces policies such as password requirements and remote wipe?",
        "correctAnswer": "Mobile Device Management (MDM)",
        "incorrectAnswers": [
          "VPN",
          "Sandboxing",
          "Sideloading",
          "Carrier Locking"
        ],
        "explanation": "MDM enforces security policies on mobile devices."
      },
      {
        "id": 938,
        "question": "Which IoT security risk arises from devices using default or weak passwords?",
        "correctAnswer": "Poor Authentication",
        "incorrectAnswers": [
          "Firmware Tampering",
          "Network Segmentation",
          "Secure Boot",
          "Certificate Pinning"
        ],
        "explanation": "Weak authentication is a common IoT vulnerability."
      },
      {
        "id": 939,
        "question": "Which IoT security control ensures that devices only run trusted firmware?",
        "correctAnswer": "Secure Boot",
        "incorrectAnswers": [
          "Sandboxing",
          "MDM",
          "802.1X",
          "WPA3"
        ],
        "explanation": "Secure boot verifies firmware integrity before loading."
      }
    ],
    "bonusQuestions": [
      {
        "id": 940,
        "question": "Which wireless frequency band offers higher speeds but shorter range?",
        "correctAnswer": "5 GHz",
        "incorrectAnswers": [
          "2.4 GHz",
          "900 MHz",
          "60 GHz",
          "1.2 GHz"
        ],
        "explanation": "5 GHz provides faster speeds but shorter range than 2.4 GHz."
      },
      {
        "id": 941,
        "question": "Which wireless frequency band offers longer range but lower speeds?",
        "correctAnswer": "2.4 GHz",
        "incorrectAnswers": [
          "5 GHz",
          "900 MHz",
          "60 GHz",
          "1.2 GHz"
        ],
        "explanation": "2.4 GHz provides longer range but lower speeds."
      },
      {
        "id": 942,
        "question": "Which mobile security feature encrypts data stored on the device?",
        "correctAnswer": "Full Device Encryption",
        "incorrectAnswers": [
          "Sandboxing",
          "MDM",
          "Sideloading",
          "Carrier Locking"
        ],
        "explanation": "Full device encryption protects data at rest."
      },
      {
        "id": 943,
        "question": "Which IoT security practice isolates IoT devices from critical systems?",
        "correctAnswer": "Network Segmentation",
        "incorrectAnswers": [
          "Secure Boot",
          "MDM",
          "Sandboxing",
          "802.1X"
        ],
        "explanation": "Network segmentation limits IoT device access to critical systems."
      },
      {
        "id": 944,
        "question": "Which Bluetooth attack sends unsolicited messages to nearby devices?",
        "correctAnswer": "Bluejacking",
        "incorrectAnswers": [
          "Bluesnarfing",
          "Bluebugging",
          "Replay Attack",
          "Jamming"
        ],
        "explanation": "Bluejacking sends unsolicited messages over Bluetooth."
      }
    ]
  },
  "Secure Deployment & Hardening": {
    "domain": "3.0 Security Architecture / 4.0 Cloud & Virtualization",
    "questions": [
      {
        "id": 945,
        "question": "Which security concept ensures systems are configured to the minimum necessary functionality to reduce attack surface?",
        "correctAnswer": "System Hardening",
        "incorrectAnswers": [
          "Load Balancing",
          "Failover",
          "Virtualization",
          "Redundancy"
        ],
        "explanation": "System hardening reduces attack surface by disabling unnecessary features."
      },
      {
        "id": 946,
        "question": "Which security practice involves disabling unused services, ports, and protocols?",
        "correctAnswer": "Service Hardening",
        "incorrectAnswers": [
          "Patch Management",
          "Network Segmentation",
          "Secure Boot",
          "Code Signing"
        ],
        "explanation": "Service hardening reduces exposure by disabling unnecessary services."
      },
      {
        "id": 947,
        "question": "Which deployment model releases updates to a small subset of users before full rollout?",
        "correctAnswer": "Canary Deployment",
        "incorrectAnswers": [
          "Blue-Green Deployment",
          "Rolling Deployment",
          "Immutable Deployment",
          "Shadow Deployment"
        ],
        "explanation": "Canary deployments test updates with a small group before full release."
      },
      {
        "id": 948,
        "question": "Which deployment model uses two identical environments and switches traffic between them during updates?",
        "correctAnswer": "Blue-Green Deployment",
        "incorrectAnswers": [
          "Canary Deployment",
          "Rolling Deployment",
          "Immutable Deployment",
          "Shadow Deployment"
        ],
        "explanation": "Blue-green deployments use two environments to minimize downtime."
      },
      {
        "id": 949,
        "question": "Which security practice ensures that systems are deployed from a known, secure configuration baseline?",
        "correctAnswer": "Configuration Management",
        "incorrectAnswers": [
          "Patch Management",
          "Network Segmentation",
          "Secure Boot",
          "Code Signing"
        ],
        "explanation": "Configuration management ensures consistent, secure system setups."
      },
      {
        "id": 950,
        "question": "Which security practice ensures that systems are regularly updated to fix vulnerabilities?",
        "correctAnswer": "Patch Management",
        "incorrectAnswers": [
          "Configuration Management",
          "Network Segmentation",
          "Secure Boot",
          "Code Signing"
        ],
        "explanation": "Patch management applies updates to fix vulnerabilities."
      },
      {
        "id": 951,
        "question": "Which security control isolates workloads to prevent one compromised system from affecting others?",
        "correctAnswer": "Network Segmentation",
        "incorrectAnswers": [
          "Patch Management",
          "Configuration Baseline",
          "Secure Boot",
          "Code Signing"
        ],
        "explanation": "Network segmentation limits lateral movement."
      },
      {
        "id": 952,
        "question": "Which security concept ensures that systems cannot be modified after deployment?",
        "correctAnswer": "Immutable Infrastructure",
        "incorrectAnswers": [
          "Infrastructure as Code",
          "Rolling Deployment",
          "Canary Deployment",
          "Secure Boot"
        ],
        "explanation": "Immutable infrastructure prevents unauthorized changes."
      },
      {
        "id": 953,
        "question": "Which hardening practice involves removing default accounts or changing their passwords?",
        "correctAnswer": "Account Hardening",
        "incorrectAnswers": [
          "Service Hardening",
          "Patch Management",
          "Network Segmentation",
          "Secure Boot"
        ],
        "explanation": "Account hardening prevents unauthorized access through default credentials."
      },
      {
        "id": 954,
        "question": "Which security practice ensures that only approved software can run on a system?",
        "correctAnswer": "Application Whitelisting",
        "incorrectAnswers": [
          "Blacklisting",
          "Sandboxing",
          "Virtualization",
          "Load Balancing"
        ],
        "explanation": "Whitelisting restricts execution to approved applications."
      }
    ],
    "bonusQuestions": [
      {
        "id": 955,
        "question": "Which deployment model updates systems gradually, one server or node at a time?",
        "correctAnswer": "Rolling Deployment",
        "incorrectAnswers": [
          "Blue-Green Deployment",
          "Canary Deployment",
          "Immutable Deployment",
          "Shadow Deployment"
        ],
        "explanation": "Rolling deployments update systems incrementally."
      },
      {
        "id": 956,
        "question": "Which hardening practice ensures that logs are protected from tampering and unauthorized access?",
        "correctAnswer": "Log Hardening",
        "incorrectAnswers": [
          "Patch Management",
          "Network Segmentation",
          "Secure Boot",
          "Code Signing"
        ],
        "explanation": "Log hardening protects logs to maintain integrity and forensic value."
      },
      {
        "id": 958,
        "question": "Which security practice uses automation to deploy infrastructure consistently across environments?",
        "correctAnswer": "Infrastructure as Code (IaC)",
        "incorrectAnswers": [
          "Immutable Infrastructure",
          "Rolling Deployment",
          "Canary Deployment",
          "Secure Boot"
        ],
        "explanation": "IaC automates infrastructure deployment using code."
      },
      {
        "id": 959,
        "question": "Which hardening practice ensures that systems follow a documented, secure configuration template?",
        "correctAnswer": "Configuration Baseline",
        "incorrectAnswers": [
          "Patch Management",
          "Network Segmentation",
          "Secure Boot",
          "Code Signing"
        ],
        "explanation": "Configuration baselines define secure system templates."
      }
    ]
  }
};
