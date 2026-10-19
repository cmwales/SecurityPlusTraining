// AUTO-GENERATED from Flashcards.json by build_data.py - do not edit directly
window.FLASHCARD_DATA = {
  "1.1 - Security Controls": {
    "domain": "1.0 - General Security Concepts",
    "page": "1-2",
    "cards": [
      {
        "q": "What are the four security control categories?",
        "a": "Technical, Managerial, Operational, and Physical.",
        "page": "1"
      },
      {
        "q": "Is a firewall a technical or managerial control?",
        "a": "Technical - it is implemented using systems.",
        "page": "1"
      },
      {
        "q": "Is a security policy a technical or managerial control?",
        "a": "Managerial (administrative) - it's tied to security design and implementation.",
        "page": "1"
      },
      {
        "q": "Are security guards and awareness programs operational or technical controls?",
        "a": "Operational - implemented by people instead of systems.",
        "page": "1"
      },
      {
        "q": "Name the six security control types.",
        "a": "Preventive, Deterrent, Detective, Corrective, Compensating, and Directive.",
        "page": "1"
      },
      {
        "q": "Does a deterrent control directly prevent access?",
        "a": "No. It discourages an intrusion attempt (e.g., warning signs, splash screens) but doesn't block access.",
        "page": "1"
      },
      {
        "q": "Does a detective control always prevent access?",
        "a": "No. It identifies and logs an intrusion attempt (e.g., system logs, motion detectors) but may not prevent it.",
        "page": "1"
      },
      {
        "q": "Restoring from backup after ransomware is what control type?",
        "a": "Corrective - applied after an event to reverse its impact.",
        "page": "1"
      },
      {
        "q": "A firewall rule that blocks a vulnerable app because it can't be patched yet is what control type?",
        "a": "Compensating - control using other means when existing controls aren't sufficient.",
        "page": "1"
      },
      {
        "q": "Is a directive control considered strong or weak?",
        "a": "Relatively weak - it directs a subject toward compliance (e.g., an 'Authorized Personnel Only' sign).",
        "page": "1"
      },
      {
        "q": "A generator used after a power outage is what control type?",
        "a": "Compensating (physical category).",
        "page": "1"
      },
      {
        "q": "A door lock is what control type?",
        "a": "Preventive (physical category).",
        "page": "1"
      }
    ]
  },
  "1.2 - The CIA Triad": {
    "domain": "1.0 - General Security Concepts",
    "page": "2",
    "cards": [
      {
        "q": "What does CIA stand for in the CIA Triad?",
        "a": "Confidentiality, Integrity, Availability. (Sometimes called the AIC Triad.)"
      },
      {
        "q": "Which part of the CIA triad does encryption primarily support?",
        "a": "Confidentiality."
      },
      {
        "q": "Which part of the CIA triad does hashing primarily support?",
        "a": "Integrity."
      },
      {
        "q": "Which part of the CIA triad does redundancy and fault tolerance support?",
        "a": "Availability."
      },
      {
        "q": "What does integrity mean?",
        "a": "Messages can't be modified without detection - data is stored and transferred as intended."
      },
      {
        "q": "Name three ways to provide confidentiality.",
        "a": "Encryption, access controls, and two-factor authentication."
      },
      {
        "q": "Name four ways to provide integrity.",
        "a": "Hashing, digital signatures, certificates, and non-repudiation."
      },
      {
        "q": "Does patching support availability?",
        "a": "Yes - it adds stability and closes security holes."
      }
    ]
  },
  "1.2 - Non-repudiation": {
    "domain": "1.0 - General Security Concepts",
    "page": "3",
    "cards": [
      {
        "q": "What is non-repudiation?",
        "a": "You can't deny what you've said or done - like signing a contract."
      },
      {
        "q": "Does a hash by itself associate data with an individual?",
        "a": "No. A hash only tells you if the data has changed (proof of integrity)."
      },
      {
        "q": "What three things does proof of origin (a digital signature) provide?",
        "a": "Integrity, authentication, and non-repudiation."
      },
      {
        "q": "Which key is used to create a digital signature?",
        "a": "The sender's private key."
      },
      {
        "q": "Which key is used to verify a digital signature?",
        "a": "The sender's public key."
      },
      {
        "q": "Does a message need to be encrypted to be digitally signed?",
        "a": "No."
      },
      {
        "q": "What does the sender actually encrypt to create a digital signature?",
        "a": "A hash of the plaintext, encrypted with the sender's private key."
      },
      {
        "q": "How does the recipient verify a digital signature?",
        "a": "Decrypt the signature with the sender's public key to get the hash, then hash the plaintext and compare the two."
      }
    ]
  },
  "1.2 - Authentication, Authorization, and Accounting": {
    "domain": "1.0 - General Security Concepts",
    "page": "4",
    "cards": [
      {
        "q": "What are the parts of the AAA framework (plus the step before it)?",
        "a": "Identification, Authentication, Authorization, and Accounting."
      },
      {
        "q": "Is a username identification or authentication?",
        "a": "Identification - who you claim to be."
      },
      {
        "q": "Is a password identification or authentication?",
        "a": "Authentication - proving you are who you say you are."
      },
      {
        "q": "What does authorization determine?",
        "a": "What access you have, based on your identification and authentication."
      },
      {
        "q": "What does accounting track?",
        "a": "Resources used - login time, data sent and received, logout time."
      },
      {
        "q": "How do you authenticate a device that can't type a password?",
        "a": "Put a digitally signed certificate on the device."
      },
      {
        "q": "Why use an authorization model instead of mapping users directly to resources?",
        "a": "Direct user-to-resource mapping doesn't scale; a model (roles, organizations, attributes) adds abstraction and simplifies administration."
      }
    ]
  },
  "1.2 - Gap Analysis": {
    "domain": "1.0 - General Security Concepts",
    "page": "5",
    "cards": [
      {
        "q": "What is a gap analysis?",
        "a": "A comparison of where you are versus where you want to be - the 'gap' between the two."
      },
      {
        "q": "Is a gap analysis usually quick?",
        "a": "No - it can take weeks or months with extensive research and many participants."
      },
      {
        "q": "Name two formal frameworks you might use as a gap analysis baseline.",
        "a": "NIST SP 800-171 Rev 2 and ISO/IEC 27001."
      },
      {
        "q": "What does ISO/IEC 27001 cover?",
        "a": "Information security management systems."
      },
      {
        "q": "What is the final output of a gap analysis?",
        "a": "A gap analysis report: a formal description of the current state and recommendations for meeting the baseline."
      }
    ]
  },
  "1.2 - Zero Trust": {
    "domain": "1.0 - General Security Concepts",
    "page": "5-6",
    "cards": [
      {
        "q": "What is the core idea of zero trust?",
        "a": "Nothing is inherently trusted - everything must be verified.",
        "page": "5"
      },
      {
        "q": "What are the two planes of operation in zero trust?",
        "a": "Data plane and control plane.",
        "page": "5"
      },
      {
        "q": "Which plane processes frames, packets, forwarding, and NAT?",
        "a": "The data plane.",
        "page": "5"
      },
      {
        "q": "Which plane manages routing tables, session tables, and policies?",
        "a": "The control plane.",
        "page": "5"
      },
      {
        "q": "What is the Policy Enforcement Point (PEP)?",
        "a": "The gatekeeper - it allows, monitors, and terminates connections.",
        "page": "5"
      },
      {
        "q": "Is the Policy Enforcement Point in the data plane or the control plane?",
        "a": "The data plane.",
        "page": "5"
      },
      {
        "q": "What two components make up the Policy Decision Point (PDP)?",
        "a": "The Policy Engine and the Policy Administrator.",
        "page": "6"
      },
      {
        "q": "Which PDP component evaluates access decisions and grants, denies, or revokes?",
        "a": "The Policy Engine.",
        "page": "6"
      },
      {
        "q": "Which PDP component communicates with the PEP and generates access tokens?",
        "a": "The Policy Administrator.",
        "page": "6"
      },
      {
        "q": "What is adaptive identity?",
        "a": "Evaluating risk indicators (location, connection type, IP, relationship to the org) to decide how strongly to authenticate.",
        "page": "5"
      },
      {
        "q": "What is threat scope reduction?",
        "a": "Decreasing the number of possible entry points.",
        "page": "6"
      }
    ]
  },
  "1.2 - Physical Security": {
    "domain": "1.0 - General Security Concepts",
    "page": "7",
    "cards": [
      {
        "q": "What do bollards do?",
        "a": "Prevent vehicle access while allowing people through - they channel traffic to specific access points."
      },
      {
        "q": "What is an access control vestibule?",
        "a": "A set of doors where opening/unlocking one door controls the others, so people pass through one at a time."
      },
      {
        "q": "What is two-person integrity/control?",
        "a": "No single person has access to a physical asset."
      },
      {
        "q": "Name four types of sensors used for physical security.",
        "a": "Infrared, pressure, microwave, and ultrasonic."
      },
      {
        "q": "Which sensor detects movement across large areas?",
        "a": "Microwave."
      },
      {
        "q": "Which sensor detects a change in force on floors or windows?",
        "a": "Pressure."
      },
      {
        "q": "What does CCTV stand for?",
        "a": "Closed Circuit Television."
      },
      {
        "q": "Does more lighting improve security?",
        "a": "Yes - attackers avoid light and non-IR cameras see better."
      }
    ]
  },
  "1.2 - Deception and Disruption": {
    "domain": "1.0 - General Security Concepts",
    "page": "7",
    "cards": [
      {
        "q": "What is a honeypot?",
        "a": "A fake system designed to attract attackers and trap them for observation."
      },
      {
        "q": "What is a honeynet?",
        "a": "A larger deception network made of one or more honeypots."
      },
      {
        "q": "What is a honeyfile?",
        "a": "A fake file (e.g., passwords.txt) used as bait; an alert is sent when it's accessed."
      },
      {
        "q": "What is a honeytoken?",
        "a": "Traceable fake data (API credentials, fake email addresses) that reveals who stole it and where it went."
      },
      {
        "q": "Do honeytoken API credentials provide real access?",
        "a": "No - they send a notification when used."
      }
    ]
  },
  "1.3 - Change Management": {
    "domain": "1.0 - General Security Concepts",
    "page": "8",
    "cards": [
      {
        "q": "Who gives final approval for a change in a formal process?",
        "a": "The change control board."
      },
      {
        "q": "Does the owner of a change usually perform the change?",
        "a": "No - the owner manages the process; someone else (often IT) performs it."
      },
      {
        "q": "What is a stakeholder in change management?",
        "a": "Anyone impacted by the change who wants input on it."
      },
      {
        "q": "What is an impact analysis?",
        "a": "Determining a risk value (high/medium/low) for making - and for NOT making - the change."
      },
      {
        "q": "Where should a change be tested before production?",
        "a": "In a sandbox testing environment with no connection to production."
      },
      {
        "q": "What is a backout plan?",
        "a": "A way to revert your changes if something goes wrong."
      },
      {
        "q": "What is a maintenance window?",
        "a": "The scheduled time when a change will happen, usually when it least affects production (often overnight)."
      },
      {
        "q": "Is a standard operating procedure a static document?",
        "a": "No - it's a living document that changes as the process changes."
      }
    ]
  },
  "1.3 - Technical Change Management": {
    "domain": "1.0 - General Security Concepts",
    "page": "9",
    "cards": [
      {
        "q": "Change management focuses on 'what'. What does the technical team focus on?",
        "a": "'How' to make the change."
      },
      {
        "q": "With an allow list, what can run?",
        "a": "Only approved applications - nothing runs unless it's on the list. Very restrictive."
      },
      {
        "q": "With a deny list, what can run?",
        "a": "Everything except items on the 'bad list' (anti-virus works this way)."
      },
      {
        "q": "Does a change approval give permission to make any change?",
        "a": "No - approval is very specific to the defined scope."
      },
      {
        "q": "What is a dependency?",
        "a": "To complete A you must complete B - e.g., a service that requires another service or a specific library version."
      },
      {
        "q": "Why use version control?",
        "a": "To track changes to files/configurations over time and easily revert to a previous setting."
      },
      {
        "q": "What is a legacy application?",
        "a": "An older application often no longer supported by the developer - you become its support team."
      }
    ]
  },
  "1.4 - Public Key Infrastructure": {
    "domain": "1.0 - General Security Concepts",
    "page": "10",
    "cards": [
      {
        "q": "What does PKI stand for?",
        "a": "Public Key Infrastructure."
      },
      {
        "q": "How many keys does symmetric encryption use?",
        "a": "One single, shared (secret) key."
      },
      {
        "q": "Is symmetric encryption faster or slower than asymmetric?",
        "a": "Faster - less overhead."
      },
      {
        "q": "Does symmetric encryption scale well?",
        "a": "No - the shared key is challenging to distribute."
      },
      {
        "q": "Which key decrypts data encrypted with someone's public key?",
        "a": "Only their matching private key."
      },
      {
        "q": "Can you derive the private key from the public key?",
        "a": "No."
      },
      {
        "q": "What is key escrow?",
        "a": "A third party holds your decryption keys (e.g., for legal or business access)."
      },
      {
        "q": "What is another name for asymmetric encryption?",
        "a": "Public key cryptography."
      }
    ]
  },
  "1.4 - Encrypting Data": {
    "domain": "1.0 - General Security Concepts",
    "page": "11",
    "cards": [
      {
        "q": "Name two full-disk encryption tools.",
        "a": "BitLocker (Windows) and FileVault (macOS)."
      },
      {
        "q": "What is EFS?",
        "a": "Encrypting File System - Windows file-level encryption."
      },
      {
        "q": "What is transparent database encryption?",
        "a": "Encrypting all database information with a symmetric key."
      },
      {
        "q": "What is record-level database encryption?",
        "a": "Encrypting individual columns, each with its own symmetric key."
      },
      {
        "q": "Which VPN type is typically used for site-to-site?",
        "a": "IPsec."
      },
      {
        "q": "Which VPN type is typically used for client-based remote access?",
        "a": "SSL/TLS."
      },
      {
        "q": "In cryptography, what is usually the only secret - the algorithm or the key?",
        "a": "The key. The algorithm is usually publicly known."
      },
      {
        "q": "Are asymmetric keys usually larger or smaller than symmetric keys?",
        "a": "Larger - 3,072 bits or more is common, vs. 128-bit+ symmetric."
      },
      {
        "q": "What is key stretching?",
        "a": "Making a weak key stronger by hashing it repeatedly (hash the hash...), so brute force takes much longer."
      }
    ]
  },
  "1.4 - Key Exchange": {
    "domain": "1.0 - General Security Concepts",
    "page": "11-12",
    "cards": [
      {
        "q": "What is out-of-band key exchange?",
        "a": "Sharing the key outside the network - telephone, courier, in person.",
        "page": "11"
      },
      {
        "q": "What is in-band key exchange?",
        "a": "Sharing the key over the network, protected with additional encryption (often asymmetric).",
        "page": "11"
      },
      {
        "q": "What is a session key?",
        "a": "A random symmetric key, shared using asymmetric encryption, used to encrypt a session's data.",
        "page": "11"
      },
      {
        "q": "What is an ephemeral key?",
        "a": "A temporary key that is changed often.",
        "page": "11"
      },
      {
        "q": "How can two parties create the same symmetric key without sending it?",
        "a": "Each combines their own private key with the other's public key.",
        "page": "12"
      }
    ]
  },
  "1.4 - Encryption Technologies": {
    "domain": "1.0 - General Security Concepts",
    "page": "12",
    "cards": [
      {
        "q": "What does TPM stand for?",
        "a": "Trusted Platform Module."
      },
      {
        "q": "Is a TPM on the device or a separate appliance?",
        "a": "On the device - cryptographic hardware built into the computer."
      },
      {
        "q": "What does a TPM commonly store securely?",
        "a": "BitLocker keys, storage keys, and hardware configuration info."
      },
      {
        "q": "What does HSM stand for?",
        "a": "Hardware Security Module."
      },
      {
        "q": "TPM or HSM: which is used in large environments to store thousands of keys?",
        "a": "HSM."
      },
      {
        "q": "What is a cryptographic accelerator in an HSM?",
        "a": "Hardware that offloads crypto CPU overhead from other devices."
      },
      {
        "q": "What does a key management system do?",
        "a": "Centrally manages keys - create, associate with users, rotate, and log use - separate from the data."
      },
      {
        "q": "What is a secure enclave?",
        "a": "A protected hardware processor isolated from the main processor, with its own boot ROM, true RNG, and root keys."
      }
    ]
  },
  "1.4 - Obfuscation": {
    "domain": "1.0 - General Security Concepts",
    "page": "13",
    "cards": [
      {
        "q": "What is obfuscation?",
        "a": "Making something unclear and harder to understand - but not impossible."
      },
      {
        "q": "What is steganography?",
        "a": "Hiding information inside another file (image, audio, video, network packets). Greek for 'concealed writing'."
      },
      {
        "q": "What is the covertext?",
        "a": "The container document or file that hides a steganographic message."
      },
      {
        "q": "What is tokenization?",
        "a": "Replacing sensitive data with a non-sensitive placeholder (common in credit card processing)."
      },
      {
        "q": "Is tokenization a form of encryption or hashing?",
        "a": "No - the token and original data are not mathematically related."
      },
      {
        "q": "What is data masking?",
        "a": "Hiding part of the original data (e.g., showing only the last 4 digits) - may only be hidden from view."
      },
      {
        "q": "Are printer yellow dots an example of steganography?",
        "a": "Yes - invisible watermarks."
      }
    ]
  },
  "1.4 - Hashing and Digital Signatures": {
    "domain": "1.0 - General Security Concepts",
    "page": "14",
    "cards": [
      {
        "q": "Is hashing one-way or two-way?",
        "a": "One-way - you can't recover the original data from the hash."
      },
      {
        "q": "Is a hash a fixed or variable length?",
        "a": "Fixed length, regardless of input size."
      },
      {
        "q": "What is a hash collision?",
        "a": "Two different inputs producing the same hash."
      },
      {
        "q": "Which hash algorithm has a known collision problem?",
        "a": "MD5 (found in 1996) - don't use it for anything important."
      },
      {
        "q": "What is a salt?",
        "a": "Random data added to a password before hashing; each user gets their own."
      },
      {
        "q": "Do rainbow tables work against salted hashes?",
        "a": "No."
      },
      {
        "q": "Does salting completely stop brute force?",
        "a": "No - it slows it down."
      },
      {
        "q": "Should you store passwords as plaintext or as a salted hash?",
        "a": "A salted hash."
      }
    ]
  },
  "1.4 - Blockchain Technology": {
    "domain": "1.0 - General Security Concepts",
    "page": "15",
    "cards": [
      {
        "q": "What is a blockchain?",
        "a": "A distributed ledger that tracks transactions, maintained by everyone on the network."
      },
      {
        "q": "What links each block to the previous one?",
        "a": "A hash of the previous blocks."
      },
      {
        "q": "What happens if a block is altered?",
        "a": "Its hash and all following hashes change, so the chain no longer matches the network and is rejected."
      },
      {
        "q": "Name some practical uses for blockchain.",
        "a": "Payment processing, digital identification, supply chain monitoring, digital voting."
      }
    ]
  },
  "1.4 - Certificates": {
    "domain": "1.0 - General Security Concepts",
    "page": "16-17",
    "cards": [
      {
        "q": "What is the standard format for digital certificates?",
        "a": "X.509.",
        "page": "16"
      },
      {
        "q": "What does a digital certificate bind together?",
        "a": "A public key with a digital signature and details about the key holder.",
        "page": "16"
      },
      {
        "q": "What does CA stand for?",
        "a": "Certificate Authority.",
        "page": "16"
      },
      {
        "q": "What is a CSR?",
        "a": "Certificate Signing Request - you create a key pair and send the public key to the CA to be signed.",
        "page": "16"
      },
      {
        "q": "When creating a CSR, which key do you send to the CA?",
        "a": "The public key. The private key never leaves the applicant.",
        "page": "16"
      },
      {
        "q": "What is a root of trust?",
        "a": "An inherently trusted component (HSM, secure enclave, CA) that other trust is built on.",
        "page": "16"
      },
      {
        "q": "What is a wildcard certificate?",
        "a": "A certificate covering all server names in a domain, e.g., *.professormesser.com.",
        "page": "16"
      },
      {
        "q": "What X.509 extension lets one certificate support many domain names?",
        "a": "Subject Alternative Name (SAN).",
        "page": "16"
      },
      {
        "q": "What does CRL stand for?",
        "a": "Certificate Revocation List - maintained by the CA.",
        "page": "16"
      },
      {
        "q": "What does OCSP stand for?",
        "a": "Online Certificate Status Protocol.",
        "page": "17"
      },
      {
        "q": "Is OCSP more or less efficient than downloading a CRL?",
        "a": "More efficient.",
        "page": "17"
      },
      {
        "q": "What is OCSP stapling?",
        "a": "The certificate holder's server includes CA-signed status info in the TLS handshake, so the CA doesn't have to answer every client.",
        "page": "17"
      },
      {
        "q": "Do self-signed / internal CA certificates need a public CA?",
        "a": "No - install your CA's certificate on your devices and they'll trust certs it issues.",
        "page": "16"
      }
    ]
  },
  "2.1 - Threat Actors": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "18-19",
    "cards": [
      {
        "q": "Which threat actor has the highest sophistication and massive resources?",
        "a": "Nation state.",
        "page": "18"
      },
      {
        "q": "What does APT stand for?",
        "a": "Advanced Persistent Threat - commonly a nation state.",
        "page": "18"
      },
      {
        "q": "What was Stuxnet?",
        "a": "A worm (US and Israel) that destroyed ~1,000 nuclear centrifuges - a nation-state attack.",
        "page": "18"
      },
      {
        "q": "Which threat actor runs pre-made scripts without understanding them?",
        "a": "Unskilled attacker.",
        "page": "18"
      },
      {
        "q": "Which threat actor is a hacker with a purpose (philosophical/political)?",
        "a": "Hacktivist.",
        "page": "18"
      },
      {
        "q": "Is an insider threat internal or external?",
        "a": "Internal.",
        "page": "18"
      },
      {
        "q": "What is the main motivation of organized crime?",
        "a": "Money / financial gain.",
        "page": "18"
      },
      {
        "q": "What is shadow IT?",
        "a": "Employees building their own infrastructure around the internal IT organization (e.g., unapproved cloud services).",
        "page": "18"
      },
      {
        "q": "Is shadow IT internal or external?",
        "a": "Internal.",
        "page": "18"
      },
      {
        "q": "Name three threat actor attributes.",
        "a": "Internal/external, resources/funding, and level of sophistication/capability.",
        "page": "18"
      },
      {
        "q": "Is organized crime usually internal or external?",
        "a": "Almost always external.",
        "page": "18"
      }
    ]
  },
  "2.2 - Common Threat Vectors": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "19-20",
    "cards": [
      {
        "q": "What is a threat vector?",
        "a": "The method an attacker uses to gain access to or infect a target (also called attack vector).",
        "page": "19"
      },
      {
        "q": "Why can SVG images be a threat?",
        "a": "SVG is described in XML, so it can contain HTML injection or JavaScript attack code.",
        "page": "19"
      },
      {
        "q": "What is vishing?",
        "a": "Phishing over the phone (voice).",
        "page": "19"
      },
      {
        "q": "Why are USB devices a threat vector?",
        "a": "They bypass the firewall, can infect air-gapped networks, act as keyboards, and exfiltrate data.",
        "page": "19"
      },
      {
        "q": "Is agentless software client-based?",
        "a": "No - nothing is installed; compromised server software affects all users.",
        "page": "20"
      },
      {
        "q": "Why are unsupported systems a risk?",
        "a": "They no longer receive security patches.",
        "page": "20"
      },
      {
        "q": "Why do open service ports matter?",
        "a": "Every open port is an opportunity for an attacker and expands the attack surface.",
        "page": "20"
      },
      {
        "q": "What supply chain vector was used in the 2013 Target breach?",
        "a": "Gaining access to the network using a vendor.",
        "page": "20"
      }
    ]
  },
  "2.2 - Phishing": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "20",
    "cards": [
      {
        "q": "What is phishing?",
        "a": "Social engineering with a touch of spoofing, often by email or text."
      },
      {
        "q": "What is smishing?",
        "a": "SMS (text message) phishing."
      },
      {
        "q": "What is typosquatting?",
        "a": "Registering a misspelled domain (e.g., professormessor.com) - a type of URL hijacking."
      },
      {
        "q": "What is pretexting?",
        "a": "Lying to get information - the attacker plays a character in a situation they create."
      },
      {
        "q": "What is business email compromise?",
        "a": "Using spoofed/compromised trusted email accounts for fraud, e.g., changing wire transfer details."
      }
    ]
  },
  "2.2 - Impersonation": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "21",
    "cards": [
      {
        "q": "What is impersonation?",
        "a": "Attackers pretending to be someone they aren't (help desk, executive, etc.)."
      },
      {
        "q": "What is eliciting information?",
        "a": "Extracting info from a victim without them realizing it - often via vishing."
      },
      {
        "q": "Name four types of identity fraud.",
        "a": "Credit card fraud, bank fraud, loan fraud, and government benefits fraud."
      },
      {
        "q": "What's the best protection against impersonation?",
        "a": "Never volunteer info and always verify (call back, verify through third parties)."
      }
    ]
  },
  "2.2 - Watering Hole Attacks": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "21",
    "cards": [
      {
        "q": "What is a watering hole attack?",
        "a": "Infecting a third-party site the target group commonly visits, instead of attacking the target directly."
      },
      {
        "q": "When would an attacker use a watering hole attack?",
        "a": "When the target's network is well secured and users don't fall for phishing."
      },
      {
        "q": "What's the defense against watering hole attacks?",
        "a": "Defense in depth - firewalls, IPS, and up-to-date anti-malware."
      }
    ]
  },
  "2.2 - Other Social Engineering Attacks": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "22",
    "cards": [
      {
        "q": "What is an influence campaign?",
        "a": "Using misinformation/disinformation to sway public opinion on political and social issues."
      },
      {
        "q": "What is brand impersonation?",
        "a": "Pretending to be a well-known brand (often with many fake sites) to infect visitors with malware."
      },
      {
        "q": "Who commonly runs disinformation campaigns?",
        "a": "Nation-state actors - to divide, distract, and persuade."
      }
    ]
  },
  "2.3 - Memory Injections": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "22",
    "cards": [
      {
        "q": "What is memory injection?",
        "a": "Adding code into the memory of an existing process to hide malware and gain its rights."
      },
      {
        "q": "What is DLL injection?",
        "a": "Injecting a path to a malicious DLL so it runs as part of the target process."
      },
      {
        "q": "What does DLL stand for?",
        "a": "Dynamic-Link Library."
      },
      {
        "q": "Can memory injection lead to privilege escalation?",
        "a": "Yes - the code gets the same rights and permissions as the process."
      }
    ]
  },
  "2.3 - Buffer Overflows": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "23",
    "cards": [
      {
        "q": "What is a buffer overflow?",
        "a": "Writing more data than a buffer holds, spilling over into other memory areas."
      },
      {
        "q": "What should developers do to prevent buffer overflows?",
        "a": "Perform bounds checking."
      },
      {
        "q": "Is a buffer overflow a simple exploit?",
        "a": "No - it takes time to avoid crashing and to make it do what you want."
      },
      {
        "q": "What makes a buffer overflow really useful to an attacker?",
        "a": "Being repeatable."
      }
    ]
  },
  "2.3 - Race Conditions": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "23",
    "cards": [
      {
        "q": "What is a race condition?",
        "a": "A flaw where two things happening at the same time cause unexpected results."
      },
      {
        "q": "What does TOCTOU stand for?",
        "a": "Time-of-check to time-of-use."
      },
      {
        "q": "What is a TOCTOU attack?",
        "a": "Something changes between when a system checks a value and when it uses the result."
      },
      {
        "q": "Name a real-world race condition example.",
        "a": "Mars rover Spirit reboot loop (2004), or the Tesla Model 3 TOCTOU at Pwn2Own 2023."
      }
    ]
  },
  "2.3 - Malicious Updates": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "24",
    "cards": [
      {
        "q": "What should you always have before installing an update?",
        "a": "A known-good backup."
      },
      {
        "q": "Should you install an update from a random pop-up?",
        "a": "No - visit the developer's site directly."
      },
      {
        "q": "What was the SolarWinds Orion attack?",
        "a": "A supply chain attack where attackers added malicious code to legitimate software updates (reported Dec 2020)."
      }
    ]
  },
  "2.3 - Operating System Vulnerabilities": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "24",
    "cards": [
      {
        "q": "Why is the operating system a big target?",
        "a": "Everyone has one, and its millions of lines of code create many opportunities for vulnerabilities."
      },
      {
        "q": "When is Microsoft's Patch Tuesday?",
        "a": "The 2nd Tuesday of each month."
      },
      {
        "q": "Should patches be tested before deployment?",
        "a": "Yes - a patch might break something else."
      }
    ]
  },
  "2.3 - SQL Injection": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "25",
    "cards": [
      {
        "q": "What does SQLi stand for?",
        "a": "SQL injection."
      },
      {
        "q": "What is SQL injection?",
        "a": "Putting your own SQL commands into an application's database query."
      },
      {
        "q": "What does adding ' OR '1'='1 to a query do?",
        "a": "It's injected SQL that changes the query - it could let an attacker view all database information."
      },
      {
        "q": "What is the root cause of code injection?",
        "a": "Bad programming - the application doesn't properly handle input."
      },
      {
        "q": "Name four data types that can be injected.",
        "a": "HTML, SQL, XML, LDAP."
      }
    ]
  },
  "2.3 - Cross-site Scripting": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "25-26",
    "cards": [
      {
        "q": "What does XSS stand for?",
        "a": "Cross-site scripting.",
        "page": "25"
      },
      {
        "q": "What language does XSS commonly use?",
        "a": "JavaScript.",
        "page": "25"
      },
      {
        "q": "XSS takes advantage of whose trust?",
        "a": "The trust a user has for a site.",
        "page": "25"
      },
      {
        "q": "What is a reflected (non-persistent) XSS attack?",
        "a": "A malicious script in a link (e.g., in a search box parameter) runs in the victim's browser when clicked.",
        "page": "25"
      },
      {
        "q": "What is a stored (persistent) XSS attack?",
        "a": "The malicious payload is saved on the site (e.g., a social post) and runs for everyone who views it.",
        "page": "25"
      },
      {
        "q": "What's the developer's main defense against XSS?",
        "a": "Input validation - don't allow users to add scripts to input fields.",
        "page": "25"
      }
    ]
  },
  "2.3 - Hardware Vulnerabilities": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "26",
    "cards": [
      {
        "q": "What is firmware?",
        "a": "The software inside the hardware - only the vendor can fix it."
      },
      {
        "q": "What is the difference between EOL and EOSL?",
        "a": "EOL: the manufacturer stops selling but may still support it. EOSL: no more support or security patches."
      },
      {
        "q": "How do you protect legacy platforms that can't be updated?",
        "a": "Additional controls like extra firewall rules and IPS signatures."
      }
    ]
  },
  "2.3 - Virtualization Vulnerabilities": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "27",
    "cards": [
      {
        "q": "What is VM escape?",
        "a": "Breaking out of a virtual machine to interact with the host OS or other VMs."
      },
      {
        "q": "Why is VM escape so serious?",
        "a": "It can give control of the host and all other guest VMs."
      },
      {
        "q": "What is a resource reuse vulnerability?",
        "a": "Data unintentionally shared between VMs when the hypervisor reallocates resources like RAM."
      },
      {
        "q": "What manages the relationship between physical and virtual resources?",
        "a": "The hypervisor."
      }
    ]
  },
  "2.3 - Cloud-specific Vulnerabilities": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "27",
    "cards": [
      {
        "q": "What is directory traversal?",
        "a": "An attack where faulty configurations put data at risk."
      },
      {
        "q": "What is an out-of-bounds write?",
        "a": "Writing to unauthorized memory areas, causing corruption, crashes, or code execution."
      },
      {
        "q": "What CVSS score is considered high or critical?",
        "a": "7.0 and above."
      },
      {
        "q": "Name two widely exploited web application vulnerabilities mentioned in the notes.",
        "a": "Log4j and Spring Cloud Function."
      }
    ]
  },
  "2.3 - Supply Chain Vulnerabilities": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "28",
    "cards": [
      {
        "q": "Why is the supply chain a risk?",
        "a": "Attackers can infect any step, and people trust their suppliers."
      },
      {
        "q": "How should you reduce hardware supplier risk?",
        "a": "Use a small supplier base with strict controls over policies and procedures."
      },
      {
        "q": "Is open source software immune to supply chain attacks?",
        "a": "No - the source code itself can be compromised."
      },
      {
        "q": "What should you verify when installing software?",
        "a": "Its digital signature."
      },
      {
        "q": "What happened with counterfeit Cisco equipment (2022)?",
        "a": "A reseller sold over $1 billion of fake Cisco products made in China."
      }
    ]
  },
  "2.3 - Misconfiguration Vulnerabilities": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "28-29",
    "cards": [
      {
        "q": "What caused the 2017 Verizon data exposure?",
        "a": "A third party left an Amazon S3 bucket open (open permissions).",
        "page": "28"
      },
      {
        "q": "Should users log in directly as root?",
        "a": "No - disable direct root login and use su or sudo.",
        "page": "28"
      },
      {
        "q": "Is Telnet secure?",
        "a": "No - it sends everything in the clear. Use SSH instead.",
        "page": "29"
      },
      {
        "q": "Is FTP encrypted?",
        "a": "No - use SFTP.",
        "page": "29"
      },
      {
        "q": "What did the Mirai botnet exploit?",
        "a": "Default credentials/configurations on IoT devices.",
        "page": "29"
      }
    ]
  },
  "2.3 - Mobile Device Vulnerabilities": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "29",
    "cards": [
      {
        "q": "What is it called to gain full OS access on Android?",
        "a": "Rooting."
      },
      {
        "q": "What is it called to gain full OS access on iOS?",
        "a": "Jailbreaking."
      },
      {
        "q": "What is sideloading?",
        "a": "Installing apps manually without using an app store."
      },
      {
        "q": "What happens to MDM control when a device is jailbroken?",
        "a": "The MDM becomes relatively useless."
      }
    ]
  },
  "2.3 - Zero-day Vulnerabilities": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "29",
    "cards": [
      {
        "q": "What is a zero-day attack?",
        "a": "An attack on a vulnerability the vendor doesn't know about - no patch or mitigation exists."
      },
      {
        "q": "What does CVE stand for?",
        "a": "Common Vulnerabilities and Exposures."
      },
      {
        "q": "Why are zero-days hard to defend against?",
        "a": "You can't defend against the unknown - there's no fix yet."
      }
    ]
  },
  "2.4 - An Overview of Malware": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "30",
    "cards": [
      {
        "q": "What does ransomware do?",
        "a": "Encrypts your data files and demands payment for the decryption key."
      },
      {
        "q": "Does ransomware usually leave the OS working?",
        "a": "Yes - they want you running, but not working."
      },
      {
        "q": "What is the best protection against ransomware?",
        "a": "An offline backup (plus patching and up-to-date anti-malware)."
      },
      {
        "q": "What is a drive-by download?",
        "a": "Malware installed just by visiting a malicious web page."
      }
    ]
  },
  "2.4 - Viruses and Worms": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "30-31",
    "cards": [
      {
        "q": "Does a virus need user action to spread?",
        "a": "Yes - you have to execute a program.",
        "page": "30"
      },
      {
        "q": "Does a worm need user action to spread?",
        "a": "No - it self-replicates over the network.",
        "page": "30"
      },
      {
        "q": "Name four virus types.",
        "a": "Program, boot sector, script, and macro viruses.",
        "page": "30"
      },
      {
        "q": "Where are macro viruses common?",
        "a": "Microsoft Office documents.",
        "page": "30"
      },
      {
        "q": "What is a fileless virus?",
        "a": "Malware that operates in memory and is never installed as a file, avoiding anti-virus detection.",
        "page": "30"
      },
      {
        "q": "What can mitigate worm infestations at the network level?",
        "a": "Firewalls and IDS/IPS.",
        "page": "30"
      }
    ]
  },
  "2.4 - Spyware and Bloatware": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "31",
    "cards": [
      {
        "q": "What is spyware?",
        "a": "Malware that spies on you - browsing habits, keystrokes - for ads, identity theft, or fraud."
      },
      {
        "q": "What is bloatware?",
        "a": "Unneeded apps preinstalled by the manufacturer that waste space and may open exploits."
      },
      {
        "q": "What's the first option for removing bloatware?",
        "a": "The built-in uninstaller."
      }
    ]
  },
  "2.4 - Other Malware Types": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "32",
    "cards": [
      {
        "q": "What is a keylogger?",
        "a": "Malware that captures every keystroke and sends it to the attacker."
      },
      {
        "q": "Does encryption protect against a keylogger?",
        "a": "No - keystrokes are captured before encryption."
      },
      {
        "q": "What is a logic bomb?",
        "a": "Malicious code that waits for a predefined event (time or user action) to trigger."
      },
      {
        "q": "Are logic bombs easy to find with signatures?",
        "a": "No - each is unique with no predefined signature."
      },
      {
        "q": "What is a rootkit?",
        "a": "Malware that modifies core system files/kernel to hide from the OS and anti-virus."
      },
      {
        "q": "What helps protect against rootkits at boot?",
        "a": "Secure Boot with UEFI."
      },
      {
        "q": "How can you help prevent logic bombs?",
        "a": "Formal change control, file monitoring (Tripwire/HIDS), and constant auditing."
      }
    ]
  },
  "2.4 - Physical Attacks": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "32",
    "cards": [
      {
        "q": "If someone has physical access to a server, how much control do they have?",
        "a": "Full control - the OS can't stop an in-person attack."
      },
      {
        "q": "What is RFID cloning?",
        "a": "Copying an access badge or key fob to another card in seconds."
      },
      {
        "q": "What's the defense against RFID cloning?",
        "a": "MFA - require another factor along with the card."
      },
      {
        "q": "Name three environmental attack targets.",
        "a": "Power, HVAC/humidity controls, and fire suppression."
      }
    ]
  },
  "2.4 - Denial of Service": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "33",
    "cards": [
      {
        "q": "What is a DoS attack?",
        "a": "Forcing a service to fail, usually by overloading it."
      },
      {
        "q": "What is the difference between DoS and DDoS?",
        "a": "DDoS uses many computers (often a botnet) instead of one."
      },
      {
        "q": "What is DDoS amplification?",
        "a": "Turning a small attack into a big one by reflecting off services like NTP, DNS, or ICMP."
      },
      {
        "q": "Why is DDoS called an asymmetric threat?",
        "a": "The attacker may have fewer resources than the victim."
      },
      {
        "q": "Give an example of an unintentional DoS.",
        "a": "A layer 2 loop without STP, or a water line break."
      }
    ]
  },
  "2.4 - DNS Attacks": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "33",
    "cards": [
      {
        "q": "Name three ways to perform DNS poisoning.",
        "a": "Modify the DNS server, modify the client's hosts file, or send a fake response to a valid DNS request."
      },
      {
        "q": "Does the hosts file take precedence over DNS?",
        "a": "Yes."
      },
      {
        "q": "What is domain hijacking?",
        "a": "Gaining access to the domain registration to control where traffic flows."
      },
      {
        "q": "What is URL hijacking?",
        "a": "Profiting from users' typing mistakes with look-alike domains."
      },
      {
        "q": "Is professormesser.org vs .com an example of typosquatting?",
        "a": "Yes - using a different top-level domain."
      }
    ]
  },
  "2.4 - Wireless Attacks": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "34",
    "cards": [
      {
        "q": "What is a wireless deauthentication attack?",
        "a": "A wireless DoS using spoofed management frames to disconnect users."
      },
      {
        "q": "Which IEEE standard protects wireless management frames?",
        "a": "802.11w."
      },
      {
        "q": "Does 802.11w encrypt beacon frames?",
        "a": "No - beacons, probes, authentication, and association aren't encrypted."
      },
      {
        "q": "What is RF jamming?",
        "a": "Intentionally transmitting interfering signals to decrease signal-to-noise ratio - a DoS."
      },
      {
        "q": "Is a microwave oven disrupting Wi-Fi 'jamming'?",
        "a": "No - that's interference. Jamming is intentional."
      },
      {
        "q": "What is 'fox hunting'?",
        "a": "Tracking down a jamming source using a directional antenna and attenuator."
      }
    ]
  },
  "2.4 - On-path Attacks": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "34",
    "cards": [
      {
        "q": "What was an on-path attack formerly called?",
        "a": "Man-in-the-middle."
      },
      {
        "q": "What is ARP poisoning?",
        "a": "An on-path attack on the local IP subnet - ARP has no security."
      },
      {
        "q": "What is an on-path browser attack?",
        "a": "Malware in the victim's browser proxies traffic (formerly man-in-the-browser)."
      }
    ]
  },
  "2.4 - Replay Attacks": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "35-36",
    "cards": [
      {
        "q": "Is a replay attack an on-path attack?",
        "a": "No - the replay doesn't require the original workstation.",
        "page": "35"
      },
      {
        "q": "What is pass the hash?",
        "a": "Capturing a password hash and replaying it to authenticate as the user.",
        "page": "35"
      },
      {
        "q": "What is session hijacking (sidejacking)?",
        "a": "Stealing a session ID (often from a cookie) to access a server as the victim.",
        "page": "35"
      },
      {
        "q": "What's the best defense against session hijacking?",
        "a": "Encrypt end-to-end (HTTPS) so the session ID can't be captured.",
        "page": "36"
      },
      {
        "q": "Are browser cookies executable?",
        "a": "No - but they may contain session IDs and private data.",
        "page": "35"
      }
    ]
  },
  "2.4 - Malicious Code": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "36",
    "cards": [
      {
        "q": "What vulnerability did WannaCry exploit?",
        "a": "Windows SMBv1."
      },
      {
        "q": "What attack hit British Airways' checkout pages?",
        "a": "Cross-site scripting - 22 lines of malicious JavaScript."
      },
      {
        "q": "What attack breached the Estonian Central Health Database?",
        "a": "SQL injection."
      }
    ]
  },
  "2.4 - Application Attacks": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "36-37",
    "cards": [
      {
        "q": "What is privilege escalation?",
        "a": "Gaining higher-level access to a system by exploiting a bug or design flaw.",
        "page": "37"
      },
      {
        "q": "What is horizontal privilege escalation?",
        "a": "User A gaining access to User B's resources.",
        "page": "37"
      },
      {
        "q": "What does DEP stand for and do?",
        "a": "Data Execution Prevention - only data in executable areas can run.",
        "page": "37"
      },
      {
        "q": "What does ASLR stand for and do?",
        "a": "Address Space Layout Randomization - prevents buffer overruns at known memory addresses.",
        "page": "37"
      },
      {
        "q": "What does CSRF/XSRF stand for?",
        "a": "Cross-site request forgery.",
        "page": "37"
      },
      {
        "q": "CSRF takes advantage of whose trust?",
        "a": "The trust a web application has for the user's browser.",
        "page": "37"
      },
      {
        "q": "How do you prevent CSRF?",
        "a": "Anti-forgery techniques, usually a cryptographic token.",
        "page": "37"
      },
      {
        "q": "What is directory traversal?",
        "a": "Reading files outside the website's directory (path traversal).",
        "page": "37"
      }
    ]
  },
  "2.4 - Cryptographic Attacks": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "38",
    "cards": [
      {
        "q": "What is a birthday attack?",
        "a": "Finding a hash collision through brute force."
      },
      {
        "q": "How do you protect against birthday attacks?",
        "a": "Use a large hash output size."
      },
      {
        "q": "What is a downgrade attack?",
        "a": "Forcing systems to use weaker encryption."
      },
      {
        "q": "What was POODLE?",
        "a": "A downgrade attack forcing clients to fall back to SSL 3.0."
      },
      {
        "q": "What is SSL stripping?",
        "a": "An on-path attacker rewrites HTTPS to HTTP so the victim talks to them in the clear."
      }
    ]
  },
  "2.4 - Password Attacks": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "39",
    "cards": [
      {
        "q": "What is password spraying?",
        "a": "Trying a few common passwords against many accounts to avoid lockouts."
      },
      {
        "q": "What is a brute force attack?",
        "a": "Trying every possible password combination."
      },
      {
        "q": "Online vs offline brute force: which is slowed by account lockouts?",
        "a": "Online. Offline brute force works against a stolen hash file."
      },
      {
        "q": "Should passwords ever be stored in plaintext?",
        "a": "No."
      }
    ]
  },
  "2.4 - Indicators of Compromise": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "39-40",
    "cards": [
      {
        "q": "What does IOC stand for?",
        "a": "Indicator of Compromise.",
        "page": "39"
      },
      {
        "q": "What is impossible travel?",
        "a": "Logins from distant locations within an impossibly short time.",
        "page": "40"
      },
      {
        "q": "Why would an attacker block security update sites?",
        "a": "To stay on the system longer - blocked content is an IOC.",
        "page": "39"
      },
      {
        "q": "Why are missing logs suspicious?",
        "a": "Attackers delete logs to cover their tracks.",
        "page": "40"
      },
      {
        "q": "What is out-of-cycle logging?",
        "a": "Log activity at an unexpected time, like patching outside the normal patch day.",
        "page": "40"
      },
      {
        "q": "Name some common IOCs.",
        "a": "Unusual network activity, changed file hashes, irregular international traffic, DNS changes, uncommon login patterns.",
        "page": "39"
      },
      {
        "q": "Is concurrent session usage from multiple locations an IOC?",
        "a": "Yes.",
        "page": "39"
      }
    ]
  },
  "2.5 - Segmentation and Access Control": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "40",
    "cards": [
      {
        "q": "Name three reasons to segment a network.",
        "a": "Performance, security, and compliance (e.g., PCI)."
      },
      {
        "q": "What does an ACL do?",
        "a": "Allows or disallows traffic/access based on source/destination IP, port, time, application, etc."
      },
      {
        "q": "Name four ways an application allow list can identify apps.",
        "a": "Application hash, certificate (publisher), path, and network zone."
      },
      {
        "q": "Can you lock yourself out with an ACL?",
        "a": "Yes - be careful when configuring."
      }
    ]
  },
  "2.5 - Mitigation Techniques": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "41",
    "cards": [
      {
        "q": "What is an out-of-band update?",
        "a": "An emergency patch outside the normal schedule, often for a zero-day."
      },
      {
        "q": "What is least privilege?",
        "a": "Rights and permissions set to the bare minimum needed."
      },
      {
        "q": "What happens to a device that fails configuration enforcement / posture assessment?",
        "a": "It's quarantined, often on a private VLAN, until it's corrected."
      },
      {
        "q": "Should decommissioning be a formal policy?",
        "a": "Yes - don't throw data into the trash."
      },
      {
        "q": "In monitoring, what is the difference between sensors and collectors?",
        "a": "Sensors gather data (IPS, logs); collectors aggregate it (SIEM, syslog)."
      }
    ]
  },
  "2.5 - Hardening Techniques": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "41-42",
    "cards": [
      {
        "q": "What does EDR stand for?",
        "a": "Endpoint Detection and Response.",
        "page": "42"
      },
      {
        "q": "Does EDR rely only on signatures?",
        "a": "No - it also uses behavioral analysis, machine learning, and process monitoring.",
        "page": "42"
      },
      {
        "q": "What does HIPS stand for?",
        "a": "Host-based Intrusion Prevention System.",
        "page": "42"
      },
      {
        "q": "What tool can verify open ports?",
        "a": "Nmap (or a similar port scanner).",
        "page": "42"
      },
      {
        "q": "Why remove unnecessary software?",
        "a": "All software has bugs; removing unused software reduces risk.",
        "page": "42"
      },
      {
        "q": "What does a host-based firewall control?",
        "a": "Incoming and outgoing traffic per application process on the endpoint.",
        "page": "42"
      }
    ]
  },
  "3.1 - Cloud Infrastructures": {
    "domain": "3.0 - Security Architecture",
    "page": "42-43",
    "cards": [
      {
        "q": "What does a cloud responsibility matrix show?",
        "a": "Who is responsible for which security tasks - provider vs. customer.",
        "page": "42"
      },
      {
        "q": "In IaaS, who manages the operating system?",
        "a": "The customer.",
        "page": "43"
      },
      {
        "q": "In SaaS, who manages the application?",
        "a": "The provider.",
        "page": "43"
      },
      {
        "q": "Is information and data always the customer's responsibility?",
        "a": "Yes - in SaaS, PaaS, IaaS, and on-prem.",
        "page": "43"
      },
      {
        "q": "What is a hybrid cloud?",
        "a": "More than one public or private cloud.",
        "page": "42"
      },
      {
        "q": "What is Infrastructure as Code (IaC)?",
        "a": "Defining servers, networks, and apps as code so you can build them identically every time.",
        "page": "43"
      },
      {
        "q": "What is serverless architecture?",
        "a": "Function as a Service (FaaS) - apps split into functions; the OS is managed by a third party.",
        "page": "43"
      },
      {
        "q": "What is a monolithic application?",
        "a": "One big application that does everything.",
        "page": "43"
      },
      {
        "q": "What is the 'glue' between microservices?",
        "a": "APIs (Application Programming Interfaces).",
        "page": "43"
      }
    ]
  },
  "3.1 - Network Infrastructure Concepts": {
    "domain": "3.0 - Security Architecture",
    "page": "44",
    "cards": [
      {
        "q": "What is an air gap?",
        "a": "Physical isolation - devices aren't connected at all."
      },
      {
        "q": "Can VLANs communicate with each other without a router?",
        "a": "No - they need a Layer 3 device."
      },
      {
        "q": "What does SDN stand for?",
        "a": "Software Defined Networking."
      },
      {
        "q": "What are the three SDN planes?",
        "a": "Data (infrastructure), control, and management (application) planes."
      },
      {
        "q": "Which SDN plane handles SSH, browser, and API configuration?",
        "a": "The management plane (application layer)."
      }
    ]
  },
  "3.1 - Other Infrastructure Concepts": {
    "domain": "3.0 - Security Architecture",
    "page": "44-45",
    "cards": [
      {
        "q": "Does each VM have its own operating system?",
        "a": "Yes - each VM runs a guest OS on a hypervisor.",
        "page": "44"
      },
      {
        "q": "Do containers have their own OS kernel?",
        "a": "No - they share the host kernel, so they're lightweight.",
        "page": "44"
      },
      {
        "q": "Centralized vs decentralized security management: which has a single point of failure?",
        "a": "Centralized.",
        "page": "44"
      },
      {
        "q": "What does SCADA stand for?",
        "a": "Supervisory Control and Data Acquisition.",
        "page": "45"
      },
      {
        "q": "What does ICS stand for?",
        "a": "Industrial Control Systems.",
        "page": "45"
      },
      {
        "q": "How should SCADA/ICS be protected?",
        "a": "Extensive segmentation - no access from the outside.",
        "page": "45"
      },
      {
        "q": "What does RTOS stand for?",
        "a": "Real-Time Operating System - deterministic processing schedule.",
        "page": "45"
      },
      {
        "q": "What is an embedded system?",
        "a": "Hardware and software designed for one specific function (traffic lights, watches).",
        "page": "45"
      },
      {
        "q": "What is a common IoT weakness?",
        "a": "Weak defaults - IoT makers aren't security professionals.",
        "page": "44"
      },
      {
        "q": "Is redundancy the same as high availability?",
        "a": "No - redundant gear may need manual power-on; HA is always on, always available.",
        "page": "45"
      }
    ]
  },
  "3.1 - Infrastructure Considerations": {
    "domain": "3.0 - Security Architecture",
    "page": "45-46",
    "cards": [
      {
        "q": "What does MTTR stand for?",
        "a": "Mean Time to Repair.",
        "page": "45"
      },
      {
        "q": "What is resilience?",
        "a": "The ability to maintain availability and recover after an event.",
        "page": "45"
      },
      {
        "q": "Is cybersecurity insurance risk transference?",
        "a": "Yes.",
        "page": "46"
      },
      {
        "q": "What is elasticity?",
        "a": "Quickly increasing or decreasing capacity as needed (scalability).",
        "page": "46"
      },
      {
        "q": "How do you protect a device you can't patch, like a time clock?",
        "a": "Add security controls around it, such as a firewall.",
        "page": "46"
      },
      {
        "q": "What provides short-term vs long-term backup power?",
        "a": "UPS for short-term; generators for long-term.",
        "page": "46"
      }
    ]
  },
  "3.2 - Secure Infrastructures": {
    "domain": "3.0 - Security Architecture",
    "page": "47",
    "cards": [
      {
        "q": "Why use security zones instead of IP address ranges?",
        "a": "Zones are more flexible and simplify security policies."
      },
      {
        "q": "What is the attack surface?",
        "a": "All the ways an attacker could get in - code, open ports, authentication, human error."
      },
      {
        "q": "Name three ways to minimize the attack surface.",
        "a": "Audit code, block ports at the firewall, monitor traffic in real time."
      },
      {
        "q": "Where do honeypots usually sit in a zone design?",
        "a": "In the screened zone, receiving anomalous traffic."
      }
    ]
  },
  "3.2 - Intrusion Prevention": {
    "domain": "3.0 - Security Architecture",
    "page": "48",
    "cards": [
      {
        "q": "What is fail-open?",
        "a": "When a system fails, data continues to flow."
      },
      {
        "q": "What is fail-closed?",
        "a": "When a system fails, data stops flowing."
      },
      {
        "q": "Is IPS typically active or passive?",
        "a": "Active - connected inline."
      },
      {
        "q": "Is IDS typically active or passive?",
        "a": "Passive - examines a copy of traffic via tap or port monitor."
      },
      {
        "q": "Can passive monitoring block traffic in real time?",
        "a": "No."
      },
      {
        "q": "What's the difference between an IDS and an IPS?",
        "a": "IDS alerts; IPS stops the traffic."
      }
    ]
  },
  "3.2 - Network Appliances": {
    "domain": "3.0 - Security Architecture",
    "page": "48-50",
    "cards": [
      {
        "q": "What is a jump server?",
        "a": "A hardened, monitored device used to access a secure network zone.",
        "page": "48"
      },
      {
        "q": "What is a forward proxy?",
        "a": "An internal proxy that controls user access to the Internet.",
        "page": "49"
      },
      {
        "q": "What is a reverse proxy?",
        "a": "A proxy for inbound traffic from the Internet to an internal service.",
        "page": "49"
      },
      {
        "q": "What is an open proxy?",
        "a": "A third-party, uncontrolled proxy - often used to circumvent security.",
        "page": "49"
      },
      {
        "q": "Explicit vs transparent proxy?",
        "a": "Explicit: the app must be configured to use it. Transparent: invisible to the user.",
        "page": "48"
      },
      {
        "q": "Is NAT a type of proxy?",
        "a": "Yes - a simple network-level proxy.",
        "page": "49"
      },
      {
        "q": "Active/active vs active/passive load balancing?",
        "a": "Active/active: all servers serve traffic. Active/passive: standby servers take over on failure.",
        "page": "50"
      },
      {
        "q": "What is SSL offload on a load balancer?",
        "a": "The load balancer handles encryption/decryption instead of the servers.",
        "page": "50"
      }
    ]
  },
  "3.2 - Port Security": {
    "domain": "3.0 - Security Architecture",
    "page": "50",
    "cards": [
      {
        "q": "What is 802.1X?",
        "a": "Port-based Network Access Control (NAC) - no network access until you authenticate."
      },
      {
        "q": "What does EAP stand for?",
        "a": "Extensible Authentication Protocol."
      },
      {
        "q": "Is EAP a protocol or a framework?",
        "a": "An authentication framework."
      },
      {
        "q": "In 802.1X, what is the supplicant?",
        "a": "The client."
      },
      {
        "q": "In 802.1X, what is the authenticator?",
        "a": "The device that provides access (switch or AP)."
      },
      {
        "q": "In 802.1X, what is the authentication server?",
        "a": "The server that validates credentials (e.g., RADIUS)."
      }
    ]
  },
  "3.2 - Firewall Types": {
    "domain": "3.0 - Security Architecture",
    "page": "50-51",
    "cards": [
      {
        "q": "Traditional firewalls filter at which OSI layer?",
        "a": "Layer 4 (port numbers).",
        "page": "50"
      },
      {
        "q": "NGFWs filter at which OSI layer?",
        "a": "Layer 7 (application).",
        "page": "51"
      },
      {
        "q": "What does UTM stand for?",
        "a": "Unified Threat Management - an all-in-one security appliance.",
        "page": "51"
      },
      {
        "q": "Name other names for an NGFW.",
        "a": "Application layer gateway, stateful multilayer inspection, deep packet inspection.",
        "page": "51"
      },
      {
        "q": "What does a WAF protect?",
        "a": "Web applications - it applies rules to HTTP/HTTPS conversations.",
        "page": "51"
      },
      {
        "q": "Which compliance standard focuses heavily on WAFs?",
        "a": "PCI DSS.",
        "page": "51"
      }
    ]
  },
  "3.2 - Secure Communication": {
    "domain": "3.0 - Security Architecture",
    "page": "51-52",
    "cards": [
      {
        "q": "What does a VPN concentrator do?",
        "a": "Encrypts/decrypts VPN traffic - often integrated into a firewall.",
        "page": "51"
      },
      {
        "q": "Which port does an SSL/TLS VPN use?",
        "a": "TCP 443.",
        "page": "51"
      },
      {
        "q": "Does an SSL/TLS VPN require digital certificates or shared passwords like IPsec?",
        "a": "No.",
        "page": "51"
      },
      {
        "q": "Is a site-to-site IPsec VPN usually on-demand or always-on?",
        "a": "Always-on.",
        "page": "51"
      },
      {
        "q": "What does SD-WAN stand for?",
        "a": "Software Defined Wide Area Network.",
        "page": "51"
      },
      {
        "q": "Does SD-WAN adequately address security?",
        "a": "No - it manages connectivity to the cloud.",
        "page": "52"
      },
      {
        "q": "What does SASE stand for?",
        "a": "Secure Access Service Edge - a 'next generation' VPN with cloud-based security.",
        "page": "51"
      }
    ]
  },
  "3.3 - Data Types and Classifications": {
    "domain": "3.0 - Security Architecture",
    "page": "53",
    "cards": [
      {
        "q": "What does PII stand for?",
        "a": "Personally Identifiable Information."
      },
      {
        "q": "What does PHI stand for?",
        "a": "Protected Health Information."
      },
      {
        "q": "What is regulated data?",
        "a": "Data managed by third-party laws and statutes."
      },
      {
        "q": "What is a trade secret?",
        "a": "An organization's secret formulas or unique information."
      },
      {
        "q": "Is a barcode human-readable data?",
        "a": "No - it's non-human readable."
      },
      {
        "q": "Are CSV, XML, and JSON human-readable?",
        "a": "They're a hybrid of both."
      },
      {
        "q": "Which data classification means the data should always be available?",
        "a": "Critical."
      },
      {
        "q": "Which data classification has no viewing restrictions?",
        "a": "Public / Unclassified."
      }
    ]
  },
  "3.3 - States of Data": {
    "domain": "3.0 - Security Architecture",
    "page": "53-54",
    "cards": [
      {
        "q": "What are the three states of data?",
        "a": "Data at rest, data in transit (in motion), and data in use.",
        "page": "53"
      },
      {
        "q": "Data on a hard drive is in which state?",
        "a": "At rest.",
        "page": "53"
      },
      {
        "q": "Data in RAM or CPU cache is in which state?",
        "a": "In use.",
        "page": "53"
      },
      {
        "q": "Is data in use usually encrypted?",
        "a": "No - it's almost always decrypted so it can be processed.",
        "page": "53"
      },
      {
        "q": "How do you protect data in transit?",
        "a": "Transport encryption like TLS and IPsec.",
        "page": "53"
      },
      {
        "q": "In the 2013 Target breach, which data state was attacked?",
        "a": "Data in use - card numbers were picked out of POS RAM.",
        "page": "53"
      },
      {
        "q": "What is data sovereignty?",
        "a": "Data is subject to the laws of the country where it resides.",
        "page": "54"
      },
      {
        "q": "Under GDPR, where must EU citizens' data be stored?",
        "a": "In the EU.",
        "page": "54"
      }
    ]
  },
  "3.3 - Protecting Data": {
    "domain": "3.0 - Security Architecture",
    "page": "54-55",
    "cards": [
      {
        "q": "What is geofencing?",
        "a": "Automatically allowing or restricting access based on the user's location.",
        "page": "54"
      },
      {
        "q": "Which is most accurate for geolocation: GPS, 802.11, or IP address?",
        "a": "GPS. IP address is least accurate.",
        "page": "54"
      },
      {
        "q": "Is encryption one-way or two-way?",
        "a": "Two-way - with the key you can convert back and forth.",
        "page": "54"
      },
      {
        "q": "What is 'confusion' in encryption?",
        "a": "The ciphertext is drastically different from the plaintext.",
        "page": "54"
      },
      {
        "q": "Does obfuscated code work differently from the original?",
        "a": "No - both perform exactly the same way.",
        "page": "54"
      },
      {
        "q": "Why segment data?",
        "a": "So one breach doesn't put all data at risk.",
        "page": "55"
      }
    ]
  },
  "3.4 - Resiliency": {
    "domain": "3.0 - Security Architecture",
    "page": "55-56",
    "cards": [
      {
        "q": "Clustering vs load balancing: which usually requires the same OS on every server?",
        "a": "Clustering.",
        "page": "55"
      },
      {
        "q": "In load balancing, are servers aware of each other?",
        "a": "Often not.",
        "page": "55"
      },
      {
        "q": "What is a hot site?",
        "a": "An exact replica with hardware, software, and data constantly updated - flip a switch.",
        "page": "55"
      },
      {
        "q": "What is a cold site?",
        "a": "An empty building - no hardware, data, or people.",
        "page": "55"
      },
      {
        "q": "What is a warm site?",
        "a": "In between - rack space and some hardware; you bring the software and data.",
        "page": "56"
      },
      {
        "q": "What is geographic dispersion?",
        "a": "Locating recovery sites far from the primary site to avoid the same disaster.",
        "page": "56"
      },
      {
        "q": "What is platform diversity?",
        "a": "Using different OSes/apps to spread risk.",
        "page": "56"
      },
      {
        "q": "What does COOP stand for?",
        "a": "Continuity of Operations Planning.",
        "page": "56"
      }
    ]
  },
  "3.4 - Capacity Planning": {
    "domain": "3.0 - Security Architecture",
    "page": "56",
    "cards": [
      {
        "q": "What is capacity planning?",
        "a": "Matching supply to demand."
      },
      {
        "q": "What are the three areas of capacity planning?",
        "a": "People, technology, and infrastructure."
      },
      {
        "q": "What happens with too much supply?",
        "a": "You're paying too much."
      }
    ]
  },
  "3.4 - Recovery Testing": {
    "domain": "3.0 - Security Architecture",
    "page": "57",
    "cards": [
      {
        "q": "What is a tabletop exercise?",
        "a": "Key players talk through a simulated disaster instead of doing a full drill."
      },
      {
        "q": "Should recovery tests touch production?",
        "a": "No - use well-defined rules of engagement."
      },
      {
        "q": "What is fail over?",
        "a": "Switching to a redundant system when one fails."
      },
      {
        "q": "What is a simulation test?",
        "a": "Testing with a simulated event, like a fake phishing campaign."
      },
      {
        "q": "How does parallel processing help recovery?",
        "a": "A faulty processor can be removed while the others keep running."
      }
    ]
  },
  "3.4 - Backups": {
    "domain": "3.0 - Security Architecture",
    "page": "57-58",
    "cards": [
      {
        "q": "Onsite or offsite backup: which is available after a site disaster?",
        "a": "Offsite.",
        "page": "57"
      },
      {
        "q": "Should backups be encrypted?",
        "a": "Yes - especially offsite and cloud backups.",
        "page": "57"
      },
      {
        "q": "What is a snapshot?",
        "a": "An instant backup of an entire system (common with VMs); later snapshots store changes.",
        "page": "58"
      },
      {
        "q": "Is performing a backup enough?",
        "a": "No - you must test restoring it.",
        "page": "58"
      },
      {
        "q": "What is replication?",
        "a": "An ongoing, near real-time copy of data to multiple locations.",
        "page": "58"
      },
      {
        "q": "What is journaling?",
        "a": "Writing a journal entry before writing data, so a power loss mid-write can be recovered.",
        "page": "58"
      }
    ]
  },
  "3.4 - Power Resiliency": {
    "domain": "3.0 - Security Architecture",
    "page": "58",
    "cards": [
      {
        "q": "What does UPS stand for?",
        "a": "Uninterruptible Power Supply."
      },
      {
        "q": "Name the three UPS types.",
        "a": "Offline/Standby, Line-interactive, and On-line/Double-conversion."
      },
      {
        "q": "Why use a UPS with a generator?",
        "a": "The UPS covers the minutes it takes the generator to start."
      },
      {
        "q": "Which is for long-term power: UPS or generator?",
        "a": "Generator."
      }
    ]
  },
  "4.1 - Secure Baselines": {
    "domain": "4.0 - Security Operations",
    "page": "59",
    "cards": [
      {
        "q": "What is a secure baseline?",
        "a": "A well-defined security configuration that all application instances must follow."
      },
      {
        "q": "What checks systems against the secure baseline?",
        "a": "Integrity measurements."
      },
      {
        "q": "Where are security baselines often available?",
        "a": "From the manufacturer (OS, app, or appliance vendor)."
      },
      {
        "q": "How are baselines usually deployed?",
        "a": "Centrally - e.g., Active Directory Group Policy or MDM."
      }
    ]
  },
  "4.1 - Hardening Targets": {
    "domain": "4.0 - Security Operations",
    "page": "59-60",
    "cards": [
      {
        "q": "Are systems secure with default configurations?",
        "a": "No.",
        "page": "59"
      },
      {
        "q": "What tool manages and secures mobile devices?",
        "a": "MDM - Mobile Device Manager.",
        "page": "59"
      },
      {
        "q": "How should IoT devices be segmented?",
        "a": "On their own VLAN.",
        "page": "60"
      },
      {
        "q": "What does C2C backup mean for cloud infrastructure?",
        "a": "Cloud to Cloud backups.",
        "page": "59"
      },
      {
        "q": "How should you harden an RTOS?",
        "a": "Isolate it, run minimum services, and use secure communication / host-based firewall.",
        "page": "60"
      }
    ]
  },
  "4.1 - Securing Wireless and Mobile": {
    "domain": "4.0 - Security Operations",
    "page": "60-61",
    "cards": [
      {
        "q": "What is a wireless site survey?",
        "a": "Sampling the existing wireless landscape to identify APs and frequencies.",
        "page": "60"
      },
      {
        "q": "What is a heat map?",
        "a": "A map of wireless signal strengths.",
        "page": "60"
      },
      {
        "q": "What does BYOD stand for?",
        "a": "Bring Your Own Device - the employee owns it.",
        "page": "60"
      },
      {
        "q": "What does COPE stand for?",
        "a": "Corporate Owned, Personally Enabled.",
        "page": "61"
      },
      {
        "q": "In COPE, who owns the device?",
        "a": "The company.",
        "page": "61"
      },
      {
        "q": "What does CYOD stand for?",
        "a": "Choose Your Own Device - like COPE but the user picks the device.",
        "page": "61"
      },
      {
        "q": "What type of network is Bluetooth?",
        "a": "A PAN - Personal Area Network.",
        "page": "61"
      }
    ]
  },
  "4.1 - Wireless Security Settings": {
    "domain": "4.0 - Security Operations",
    "page": "61-62",
    "cards": [
      {
        "q": "What is the WPA2 PSK problem?",
        "a": "Attackers can capture the hash and brute force the PSK offline - and there's no forward secrecy.",
        "page": "61"
      },
      {
        "q": "What encryption mode does WPA3 use?",
        "a": "GCMP - Galois/Counter Mode Protocol (AES).",
        "page": "61"
      },
      {
        "q": "What does SAE stand for?",
        "a": "Simultaneous Authentication of Equals - the WPA3 'dragonfly handshake'.",
        "page": "61"
      },
      {
        "q": "Does WPA3 use the four-way handshake for PSK?",
        "a": "No - it uses SAE, so no hashes to brute force.",
        "page": "61"
      },
      {
        "q": "With WPA3 SAE, does everyone share the same session key?",
        "a": "No - everyone gets a different session key, even with the same PSK.",
        "page": "61"
      },
      {
        "q": "WPA3-Personal vs WPA3-Enterprise?",
        "a": "Personal uses a pre-shared key; Enterprise uses 802.1X with an authentication server like RADIUS.",
        "page": "62"
      },
      {
        "q": "What does RADIUS stand for?",
        "a": "Remote Authentication Dial-in User Service.",
        "page": "62"
      },
      {
        "q": "What does MIC stand for in wireless?",
        "a": "Message Integrity Check.",
        "page": "61"
      }
    ]
  },
  "4.1 - Application Security": {
    "domain": "4.0 - Security Operations",
    "page": "62-63",
    "cards": [
      {
        "q": "What is input validation?",
        "a": "Checking actual input against expected input and correcting it (normalization).",
        "page": "62"
      },
      {
        "q": "What does the Secure attribute on a cookie do?",
        "a": "The browser only sends it over HTTPS.",
        "page": "62"
      },
      {
        "q": "Should sensitive info be stored in a cookie?",
        "a": "No.",
        "page": "62"
      },
      {
        "q": "What does SAST stand for?",
        "a": "Static Application Security Testing (static code analysis).",
        "page": "63"
      },
      {
        "q": "Can static analysis find every vulnerability?",
        "a": "No - e.g., authentication security and insecure crypto; and false positives occur.",
        "page": "63"
      },
      {
        "q": "Which key does a developer use to sign code?",
        "a": "Their private key.",
        "page": "63"
      },
      {
        "q": "What is sandboxing?",
        "a": "Running applications so they can't access unrelated resources.",
        "page": "63"
      }
    ]
  },
  "4.2 - Asset Management": {
    "domain": "4.0 - Security Operations",
    "page": "63-64",
    "cards": [
      {
        "q": "Is hardware a capital or operating expenditure?",
        "a": "Capital expenditure.",
        "page": "63"
      },
      {
        "q": "Is software usually a capital or operating expenditure?",
        "a": "Operating expenditure.",
        "page": "63"
      },
      {
        "q": "What is enumeration in asset tracking?",
        "a": "Listing all parts of an asset (CPU, memory, storage, etc.).",
        "page": "63"
      },
      {
        "q": "What is degaussing?",
        "a": "Removing the magnetic field - destroys the data and makes the drive unusable.",
        "page": "64"
      },
      {
        "q": "What proves a third party destroyed your data?",
        "a": "A certificate of destruction.",
        "page": "64"
      },
      {
        "q": "What is media sanitization?",
        "a": "Completely removing data so nothing is recoverable, even with forensics tools.",
        "page": "63"
      }
    ]
  },
  "4.3 - Vulnerability Scanning": {
    "domain": "4.0 - Security Operations",
    "page": "64",
    "cards": [
      {
        "q": "Is a vulnerability scan more or less invasive than a penetration test?",
        "a": "Less - usually minimally invasive."
      },
      {
        "q": "Should you scan from the inside as well as the outside?",
        "a": "Yes - don't dismiss insider threats."
      },
      {
        "q": "What is fuzzing?",
        "a": "Dynamic analysis - sending random input to an app looking for crashes or errors."
      },
      {
        "q": "Is fuzzing static or dynamic analysis?",
        "a": "Dynamic."
      },
      {
        "q": "What is package monitoring?",
        "a": "Confirming software packages are legitimate and safe before deployment (supply chain integrity)."
      }
    ]
  },
  "4.3 - Threat Intelligence": {
    "domain": "4.0 - Security Operations",
    "page": "65",
    "cards": [
      {
        "q": "What does OSINT stand for?",
        "a": "Open-Source Intelligence - publicly available sources."
      },
      {
        "q": "What is proprietary threat intelligence?",
        "a": "Threat info compiled by someone else that you buy."
      },
      {
        "q": "What does CTA stand for?",
        "a": "Cyber Threat Alliance - an information-sharing organization."
      },
      {
        "q": "Does the dark web require special software?",
        "a": "Yes - it's an overlay network needing specific software/config."
      }
    ]
  },
  "4.3 - Penetration Testing": {
    "domain": "4.0 - Security Operations",
    "page": "65-66",
    "cards": [
      {
        "q": "What's the key difference between a vuln scan and a pentest?",
        "a": "A pentest actually tries to exploit the vulnerabilities.",
        "page": "65"
      },
      {
        "q": "What are rules of engagement?",
        "a": "A document defining a test's purpose, scope, schedule, IP ranges, and contacts.",
        "page": "65"
      },
      {
        "q": "What is lateral movement?",
        "a": "Moving from system to system inside the network.",
        "page": "66"
      },
      {
        "q": "What is persistence?",
        "a": "Ensuring a way back in - backdoors, new accounts.",
        "page": "66"
      },
      {
        "q": "What is pivoting?",
        "a": "Using a compromised system as a relay to reach otherwise inaccessible systems.",
        "page": "66"
      },
      {
        "q": "What is a bug bounty?",
        "a": "A reward for discovering and reporting vulnerabilities.",
        "page": "66"
      },
      {
        "q": "What is responsible disclosure?",
        "a": "Researcher reports, vendor fixes, then the vulnerability is announced publicly.",
        "page": "66"
      }
    ]
  },
  "4.3 - Analyzing Vulnerabilities": {
    "domain": "4.0 - Security Operations",
    "page": "66-67",
    "cards": [
      {
        "q": "What is a false positive?",
        "a": "A vulnerability is reported that doesn't really exist.",
        "page": "66"
      },
      {
        "q": "What is a false negative?",
        "a": "A vulnerability exists but wasn't detected.",
        "page": "66"
      },
      {
        "q": "What does CVSS stand for?",
        "a": "Common Vulnerability Scoring System.",
        "page": "66"
      },
      {
        "q": "What is the CVSS score range?",
        "a": "0 to 10.",
        "page": "66"
      },
      {
        "q": "What does NVD stand for?",
        "a": "National Vulnerability Database (synchronized with CVE).",
        "page": "66"
      },
      {
        "q": "What is exposure factor?",
        "a": "The percentage of value lost if a vulnerability is exploited.",
        "page": "66"
      },
      {
        "q": "What is risk tolerance in patching?",
        "a": "Balancing patching immediately against time needed to test.",
        "page": "67"
      }
    ]
  },
  "4.3 - Vulnerability Remediation": {
    "domain": "4.0 - Security Operations",
    "page": "67-68",
    "cards": [
      {
        "q": "What is the most common mitigation technique?",
        "a": "Patching.",
        "page": "67"
      },
      {
        "q": "Does cybersecurity insurance cover intentional acts?",
        "a": "No.",
        "page": "67"
      },
      {
        "q": "What can you do if a system can't be patched?",
        "a": "Segment it (or air gap it) or use compensating controls.",
        "page": "67"
      },
      {
        "q": "What is an exception in vulnerability management?",
        "a": "A formally approved decision not to remediate a vulnerability.",
        "page": "68"
      },
      {
        "q": "Name three ways to validate remediation.",
        "a": "Rescanning, auditing, and verification.",
        "page": "68"
      }
    ]
  },
  "4.4 - Security Monitoring": {
    "domain": "4.0 - Security Operations",
    "page": "68-69",
    "cards": [
      {
        "q": "What does SIEM stand for?",
        "a": "Security Information and Event Management.",
        "page": "68"
      },
      {
        "q": "What is log aggregation?",
        "a": "Consolidating logs from many devices into a central database.",
        "page": "68"
      },
      {
        "q": "Roughly how long does it take a company to identify and contain a breach?",
        "a": "About 9 months (IBM 2022).",
        "page": "68"
      },
      {
        "q": "What is alert tuning?",
        "a": "Adjusting alerts to reduce false positives and false negatives.",
        "page": "69"
      },
      {
        "q": "What is quarantine?",
        "a": "Isolating a potential issue to prevent it spreading.",
        "page": "69"
      }
    ]
  },
  "4.4 - Security Tools": {
    "domain": "4.0 - Security Operations",
    "page": "69-70",
    "cards": [
      {
        "q": "What does SCAP stand for?",
        "a": "Security Content Automation Protocol.",
        "page": "69"
      },
      {
        "q": "Who manages SCAP?",
        "a": "NIST.",
        "page": "69"
      },
      {
        "q": "Who publishes popular security benchmarks?",
        "a": "CIS - Center for Internet Security.",
        "page": "69"
      },
      {
        "q": "Agent vs agentless: which gives more detail and real-time alerts?",
        "a": "Agent.",
        "page": "69"
      },
      {
        "q": "What does DLP stand for?",
        "a": "Data Loss Prevention.",
        "page": "70"
      },
      {
        "q": "Which UDP port does SNMP polling use?",
        "a": "UDP 161.",
        "page": "70"
      },
      {
        "q": "Which UDP port do SNMP traps use?",
        "a": "UDP 162.",
        "page": "70"
      },
      {
        "q": "What does MIB stand for in SNMP?",
        "a": "Management Information Base.",
        "page": "70"
      },
      {
        "q": "What does OID stand for in SNMP?",
        "a": "Object Identifier.",
        "page": "70"
      },
      {
        "q": "What does NetFlow collect?",
        "a": "Traffic statistics from network flows (probe sends summaries to a collector).",
        "page": "70"
      }
    ]
  },
  "4.5 - Firewalls": {
    "domain": "4.0 - Security Operations",
    "page": "70-71",
    "cards": [
      {
        "q": "What port does HTTPS use?",
        "a": "TCP 443.",
        "page": "70"
      },
      {
        "q": "What port does HTTP use?",
        "a": "TCP 80.",
        "page": "70"
      },
      {
        "q": "What port does SSH use?",
        "a": "TCP 22.",
        "page": "70"
      },
      {
        "q": "What port does RDP use?",
        "a": "TCP 3389.",
        "page": "70"
      },
      {
        "q": "What port does a DNS query use?",
        "a": "UDP 53.",
        "page": "70"
      },
      {
        "q": "What port does NTP use?",
        "a": "UDP 123.",
        "page": "70"
      },
      {
        "q": "In what order are firewall rules usually evaluated?",
        "a": "Top to bottom - specific rules at the top.",
        "page": "71"
      },
      {
        "q": "What is implicit deny?",
        "a": "A deny-all at the bottom of the rulebase, even if you didn't add it.",
        "page": "71"
      },
      {
        "q": "What is a screened subnet?",
        "a": "An additional layer of security between you and the Internet - public access to public resources, private data stays inaccessible.",
        "page": "71"
      },
      {
        "q": "Signature-based vs anomaly-based IPS?",
        "a": "Signature looks for exact matches; anomaly flags deviation from a 'normal' baseline.",
        "page": "71"
      }
    ]
  },
  "4.5 - Web Filtering": {
    "domain": "4.0 - Security Operations",
    "page": "71-72",
    "cards": [
      {
        "q": "What is URL filtering based on?",
        "a": "Specific URLs or site categories (allow/block lists).",
        "page": "71"
      },
      {
        "q": "What is agent-based web filtering?",
        "a": "Client software on the device makes filtering decisions anywhere.",
        "page": "71"
      },
      {
        "q": "What is reputation-based filtering?",
        "a": "Allowing or blocking URLs based on perceived risk.",
        "page": "72"
      },
      {
        "q": "How does DNS filtering block sites?",
        "a": "Harmful domains aren't resolved - no IP address, no connection.",
        "page": "72"
      },
      {
        "q": "Does DNS filtering only work for web browsing?",
        "a": "No - it works for any DNS lookup.",
        "page": "72"
      }
    ]
  },
  "4.5 - Operating System Security": {
    "domain": "4.0 - Security Operations",
    "page": "72",
    "cards": [
      {
        "q": "What is Active Directory?",
        "a": "A Windows database of everything on the network that manages authentication and access."
      },
      {
        "q": "What is Group Policy?",
        "a": "Centralized management of Windows computers/users' settings."
      },
      {
        "q": "What does SELinux add to Linux?",
        "a": "Mandatory Access Control (MAC)."
      },
      {
        "q": "What access control does Linux traditionally use?",
        "a": "Discretionary Access Control (DAC)."
      }
    ]
  },
  "4.5 - Secure Protocols": {
    "domain": "4.0 - Security Operations",
    "page": "72-73",
    "cards": [
      {
        "q": "What is the secure replacement for Telnet?",
        "a": "SSH.",
        "page": "72"
      },
      {
        "q": "What is the secure replacement for HTTP?",
        "a": "HTTPS.",
        "page": "72"
      },
      {
        "q": "What is the secure replacement for IMAP?",
        "a": "IMAPS.",
        "page": "72"
      },
      {
        "q": "What is the secure replacement for FTP?",
        "a": "SFTP.",
        "page": "72"
      },
      {
        "q": "Does using a secure port number guarantee security?",
        "a": "No - confirm security features are enabled (packet capture).",
        "page": "72"
      },
      {
        "q": "Does an open wireless access point encrypt traffic?",
        "a": "No - WPA3 does.",
        "page": "73"
      }
    ]
  },
  "4.5 - Email Security": {
    "domain": "4.0 - Security Operations",
    "page": "73",
    "cards": [
      {
        "q": "What does SPF stand for?",
        "a": "Sender Policy Framework."
      },
      {
        "q": "What does SPF do?",
        "a": "Lists the mail servers authorized to send for a domain in a DNS TXT record."
      },
      {
        "q": "What does DKIM stand for?",
        "a": "DomainKeys Identified Mail."
      },
      {
        "q": "What does DKIM do?",
        "a": "The mail server digitally signs outgoing mail; the public key is in DNS."
      },
      {
        "q": "What does DMARC stand for?",
        "a": "Domain-based Message Authentication, Reporting, and Conformance."
      },
      {
        "q": "What does DMARC do?",
        "a": "Tells receivers what to do with mail failing SPF/DKIM (accept, spam, reject) and sends reports."
      },
      {
        "q": "Where are SPF, DKIM, and DMARC records stored?",
        "a": "DNS TXT records."
      },
      {
        "q": "What is a mail gateway?",
        "a": "A gatekeeper that evaluates and blocks inbound email before it reaches users."
      }
    ]
  },
  "4.5 - Monitoring Data": {
    "domain": "4.0 - Security Operations",
    "page": "73-74",
    "cards": [
      {
        "q": "What does FIM stand for?",
        "a": "File Integrity Monitoring.",
        "page": "73"
      },
      {
        "q": "Name a Windows and a Linux FIM tool.",
        "a": "Windows: SFC (System File Checker). Linux: Tripwire.",
        "page": "73"
      },
      {
        "q": "Endpoint DLP protects data in which state?",
        "a": "Data in use.",
        "page": "73"
      },
      {
        "q": "Network DLP protects data in which state?",
        "a": "Data in motion.",
        "page": "73"
      },
      {
        "q": "Server DLP protects data in which state?",
        "a": "Data at rest.",
        "page": "73"
      },
      {
        "q": "What's the most critical DLP risk vector?",
        "a": "Email.",
        "page": "74"
      }
    ]
  },
  "4.5 - Endpoint Security": {
    "domain": "4.0 - Security Operations",
    "page": "74-75",
    "cards": [
      {
        "q": "What is a posture assessment?",
        "a": "A health check of a device before it connects to the network.",
        "page": "74"
      },
      {
        "q": "What is a persistent agent?",
        "a": "A permanently installed posture assessment agent.",
        "page": "74"
      },
      {
        "q": "What is a dissolvable agent?",
        "a": "Runs during the posture assessment and then terminates - no install.",
        "page": "74"
      },
      {
        "q": "What is agentless NAC?",
        "a": "Integrated with Active Directory; checks at login/logoff; can't be scheduled.",
        "page": "74"
      },
      {
        "q": "What happens when a posture assessment fails?",
        "a": "The device goes to a quarantine network with just enough access to fix it.",
        "page": "74"
      },
      {
        "q": "What does XDR stand for?",
        "a": "Extended Detection and Response.",
        "page": "75"
      },
      {
        "q": "How is XDR different from EDR?",
        "a": "XDR correlates endpoint, network, and cloud data, not just the endpoint.",
        "page": "75"
      },
      {
        "q": "What does user behavior analytics do?",
        "a": "User behavior analytics - baselines normal activity and flags anomalies.",
        "page": "75"
      }
    ]
  },
  "4.6 - Identity and Access Management": {
    "domain": "4.0 - Security Operations",
    "page": "75-76",
    "cards": [
      {
        "q": "What does IAM stand for?",
        "a": "Identity and Access Management.",
        "page": "75"
      },
      {
        "q": "What is provisioning/de-provisioning?",
        "a": "Creating and removing user accounts (hiring, transfers, separation).",
        "page": "75"
      },
      {
        "q": "What is identity proofing?",
        "a": "Confirming who someone is - resolution, validation, verification/attestation.",
        "page": "75"
      },
      {
        "q": "What does SSO stand for?",
        "a": "Single Sign-On - authenticate once to access all assigned resources.",
        "page": "75"
      },
      {
        "q": "What does LDAP stand for?",
        "a": "Lightweight Directory Access Protocol.",
        "page": "76"
      },
      {
        "q": "What directory standard does LDAP query?",
        "a": "X.500.",
        "page": "76"
      },
      {
        "q": "What does SAML stand for?",
        "a": "Security Assertion Markup Language.",
        "page": "76"
      },
      {
        "q": "What was SAML's biggest roadblock?",
        "a": "It wasn't originally designed for mobile apps.",
        "page": "76"
      },
      {
        "q": "Is OAuth authentication or authorization?",
        "a": "Authorization. OpenID Connect handles authentication.",
        "page": "76"
      },
      {
        "q": "What is federation?",
        "a": "Trust between organizations to authenticate users across them (e.g., log in with Facebook).",
        "page": "76"
      }
    ]
  },
  "4.6 - Access Controls": {
    "domain": "4.0 - Security Operations",
    "page": "77",
    "cards": [
      {
        "q": "What does MAC stand for (access control)?",
        "a": "Mandatory Access Control."
      },
      {
        "q": "In MAC, can users change access settings?",
        "a": "No - the administrator assigns labels/clearance levels."
      },
      {
        "q": "What does DAC stand for?",
        "a": "Discretionary Access Control - the owner controls access."
      },
      {
        "q": "Is DAC strong or weak security?",
        "a": "Weak - very flexible, but weak."
      },
      {
        "q": "What does RBAC stand for?",
        "a": "Role-based access control."
      },
      {
        "q": "In Windows, how is RBAC usually implemented?",
        "a": "With Groups."
      },
      {
        "q": "Rule-based access control is based on what?",
        "a": "System-enforced rules (e.g., only 9-5), not who you are."
      },
      {
        "q": "What does ABAC stand for?",
        "a": "Attribute-based access control - evaluates many parameters/context."
      },
      {
        "q": "Which access control model uses labels like secret and top secret?",
        "a": "MAC."
      }
    ]
  },
  "4.6 - Multifactor Authentication": {
    "domain": "4.0 - Security Operations",
    "page": "78",
    "cards": [
      {
        "q": "What are the four authentication factors in the notes?",
        "a": "Something you know, have, are, and somewhere you are."
      },
      {
        "q": "Is a PIN something you know or have?",
        "a": "Something you know."
      },
      {
        "q": "Is a smart card something you know or have?",
        "a": "Something you have."
      },
      {
        "q": "Is a fingerprint something you have or are?",
        "a": "Something you are."
      },
      {
        "q": "Is GPS location an authentication factor?",
        "a": "Yes - somewhere you are."
      },
      {
        "q": "Is your actual fingerprint usually stored?",
        "a": "No - a mathematical representation is stored."
      }
    ]
  },
  "4.6 - Password Security": {
    "domain": "4.0 - Security Operations",
    "page": "78-79",
    "cards": [
      {
        "q": "What is password entropy?",
        "a": "Unpredictability - increased with mixed case, numbers, symbols, and length.",
        "page": "78"
      },
      {
        "q": "What is password age?",
        "a": "How long since the password was changed.",
        "page": "78"
      },
      {
        "q": "What is just-in-time permissions?",
        "a": "Granting admin access only for a limited time instead of permanently.",
        "page": "79"
      },
      {
        "q": "What is password vaulting?",
        "a": "Primary credentials stored in a vault that controls who gets access.",
        "page": "79"
      },
      {
        "q": "Are JIT credentials reused?",
        "a": "No - ephemeral credentials used for one session then deleted.",
        "page": "79"
      },
      {
        "q": "What is passwordless authentication?",
        "a": "Authenticating without a password - facial recognition, security key, etc.",
        "page": "78"
      }
    ]
  },
  "4.7 - Scripting and Automation": {
    "domain": "4.0 - Security Operations",
    "page": "79-80",
    "cards": [
      {
        "q": "What are guard rails in automation?",
        "a": "Automated validations that limit behaviors and reduce errors.",
        "page": "79"
      },
      {
        "q": "Name some benefits of automation.",
        "a": "Saves time, enforces baselines, secure scaling, employee retention, faster reaction, workforce multiplier.",
        "page": "79"
      },
      {
        "q": "What is technical debt?",
        "a": "Short-term fixes that push problems down the road and cost more later.",
        "page": "80"
      },
      {
        "q": "Name some scripting considerations / risks.",
        "a": "Complexity, cost, single point of failure, technical debt, ongoing supportability.",
        "page": "80"
      }
    ]
  },
  "4.8 - Incident Response": {
    "domain": "4.0 - Security Operations",
    "page": "80-81",
    "cards": [
      {
        "q": "Which NIST publication covers incident handling?",
        "a": "NIST SP 800-61.",
        "page": "80"
      },
      {
        "q": "What are the four NIST incident response phases?",
        "a": "Preparation; Detection and Analysis; Containment, Eradication, and Recovery; Post-incident Activity.",
        "page": "80"
      },
      {
        "q": "What is the first phase of incident response?",
        "a": "Preparation.",
        "page": "80"
      },
      {
        "q": "What is a precursor?",
        "a": "A heads-up that an incident might occur in the future (e.g., scanner in web logs).",
        "page": "80"
      },
      {
        "q": "Why can isolation be problematic?",
        "a": "Malware may detect lost connectivity and delete/encrypt data.",
        "page": "80"
      },
      {
        "q": "What is eradication?",
        "a": "Removing malware, disabling breached accounts, fixing vulnerabilities.",
        "page": "81"
      },
      {
        "q": "When should a lessons learned meeting happen?",
        "a": "Soon after the incident - memories fade.",
        "page": "81"
      }
    ]
  },
  "4.8 - Incident Planning": {
    "domain": "4.0 - Security Operations",
    "page": "81",
    "cards": [
      {
        "q": "What is root cause analysis?",
        "a": "Determining the ultimate cause of an incident by asking 'why'."
      },
      {
        "q": "Can there be more than one root cause?",
        "a": "Yes."
      },
      {
        "q": "What is threat hunting?",
        "a": "Proactively looking for attackers before they find you."
      },
      {
        "q": "Tabletop exercise vs simulation?",
        "a": "Tabletop: talk through a scenario. Simulation: run a fake event like a phishing test."
      }
    ]
  },
  "4.8 - Digital Forensics": {
    "domain": "4.0 - Security Operations",
    "page": "82",
    "cards": [
      {
        "q": "Which RFC covers evidence collection and archiving?",
        "a": "RFC 3227."
      },
      {
        "q": "What are the three steps of the standard digital forensic process?",
        "a": "Acquisition, analysis, and reporting."
      },
      {
        "q": "What is a legal hold?",
        "a": "Preserving relevant information for impending litigation, initiated by legal counsel."
      },
      {
        "q": "What is chain of custody?",
        "a": "Documenting everyone who handles evidence to maintain integrity."
      },
      {
        "q": "How do you prove evidence hasn't been tampered with?",
        "a": "Hashes and digital signatures."
      },
      {
        "q": "Should you analyze original evidence or copies?",
        "a": "Copies."
      },
      {
        "q": "What does ESI stand for?",
        "a": "Electronically Stored Information."
      },
      {
        "q": "Does e-discovery involve analysis?",
        "a": "Not generally - it gathers data required by the legal process."
      }
    ]
  },
  "4.9 - Log Data": {
    "domain": "4.0 - Security Operations",
    "page": "83-84",
    "cards": [
      {
        "q": "Where are Linux log files stored?",
        "a": "/var/log.",
        "page": "83"
      },
      {
        "q": "Where are Windows application logs viewed?",
        "a": "Event Viewer.",
        "page": "83"
      },
      {
        "q": "What is metadata?",
        "a": "Data that describes other data (email headers, file info, GPS).",
        "page": "83"
      },
      {
        "q": "Are dashboards designed for long-term analysis?",
        "a": "No - they show real-time status.",
        "page": "84"
      },
      {
        "q": "What does a packet capture show?",
        "a": "Detailed traffic, including plain-language application data.",
        "page": "84"
      },
      {
        "q": "What info is commonly in IPS/IDS logs?",
        "a": "Timestamp, attack type, source/destination IP and port.",
        "page": "83"
      }
    ]
  },
  "5.1 - Security Policies": {
    "domain": "5.0 - Security Program Management and Oversight",
    "page": "84-85",
    "cards": [
      {
        "q": "Security policies answer what questions?",
        "a": "'What' and 'why'. Technical controls answer 'how'.",
        "page": "84"
      },
      {
        "q": "What does AUP stand for?",
        "a": "Acceptable Use Policy.",
        "page": "84"
      },
      {
        "q": "Why do organizations use an AUP?",
        "a": "To define acceptable use of company assets and limit legal liability.",
        "page": "84"
      },
      {
        "q": "Is a disaster recovery plan part of business continuity?",
        "a": "Yes.",
        "page": "84"
      },
      {
        "q": "What does SDLC stand for?",
        "a": "Software (or systems) development life cycle.",
        "page": "85"
      },
      {
        "q": "Is there a single best SDLC?",
        "a": "No - but a framework helps.",
        "page": "85"
      }
    ]
  },
  "5.1 - Security Standards": {
    "domain": "5.0 - Security Program Management and Oversight",
    "page": "85",
    "cards": [
      {
        "q": "What is a security standard?",
        "a": "A formal definition for using security technologies and processes."
      },
      {
        "q": "Name two organizations that publish standards.",
        "a": "ISO and NIST."
      },
      {
        "q": "What should an encryption standard define?",
        "a": "Password storage methods and minimum algorithms for data in use, in transit, and at rest."
      }
    ]
  },
  "5.1 - Security Procedures": {
    "domain": "5.0 - Security Program Management and Oversight",
    "page": "86",
    "cards": [
      {
        "q": "What is onboarding?",
        "a": "Bringing someone into the org - agreements, accounts, hardware."
      },
      {
        "q": "During offboarding, are accounts usually deleted?",
        "a": "Usually deactivated, not always deleted."
      },
      {
        "q": "What is a playbook?",
        "a": "A step-by-step set of procedures for a scenario, e.g., ransomware recovery."
      },
      {
        "q": "What does SOAR stand for?",
        "a": "Security Orchestration, Automation, and Response."
      },
      {
        "q": "Board vs committee?",
        "a": "A board gathers info; a committee of SMEs considers it and determines next steps."
      },
      {
        "q": "Centralized vs decentralized governance?",
        "a": "Centralized: one group decides. Decentralized: decisions spread across individuals/locations."
      }
    ]
  },
  "5.1 - Security Considerations": {
    "domain": "5.0 - Security Program Management and Oversight",
    "page": "87",
    "cards": [
      {
        "q": "What does SOX stand for?",
        "a": "Sarbanes-Oxley Act (2002) - public company accounting."
      },
      {
        "q": "What does HIPAA stand for?",
        "a": "Health Insurance Portability and Accountability Act."
      },
      {
        "q": "What does HIPAA regulate?",
        "a": "Storage, use, and transmission of health care information."
      },
      {
        "q": "Why does cloud computing complicate legal requirements?",
        "a": "Data can move between jurisdictions without human intervention."
      }
    ]
  },
  "5.1 - Data Roles and Responsibilities": {
    "domain": "5.0 - Security Program Management and Oversight",
    "page": "87",
    "cards": [
      {
        "q": "Who is the data owner?",
        "a": "The person accountable for specific data, often a senior officer (e.g., VP of Sales)."
      },
      {
        "q": "What does the data controller do?",
        "a": "Manages the purposes and means by which personal data is processed."
      },
      {
        "q": "What does the data processor do?",
        "a": "Processes data on behalf of the controller - often a third party."
      },
      {
        "q": "A payroll company processing employee pay is the controller or processor?",
        "a": "Processor. The payroll department is the controller."
      },
      {
        "q": "Who is responsible for data accuracy, privacy, and security day-to-day?",
        "a": "The data custodian/steward."
      },
      {
        "q": "Who assigns sensitivity labels and manages access rights?",
        "a": "The data custodian/steward."
      }
    ]
  },
  "5.2 - Risk Management": {
    "domain": "5.0 - Security Program Management and Oversight",
    "page": "88",
    "cards": [
      {
        "q": "What is an ad hoc risk assessment?",
        "a": "Performed when the situation requires, without a formal process."
      },
      {
        "q": "What is a recurring risk assessment?",
        "a": "One performed at standard intervals (e.g., quarterly)."
      },
      {
        "q": "How often does PCI DSS require a risk assessment?",
        "a": "Annually."
      },
      {
        "q": "Name four risk assessment types.",
        "a": "One-time, continuous, ad hoc, and recurring."
      }
    ]
  },
  "5.2 - Risk Analysis": {
    "domain": "5.0 - Security Program Management and Oversight",
    "page": "88-89",
    "cards": [
      {
        "q": "What does SLE stand for?",
        "a": "Single Loss Expectancy.",
        "page": "88"
      },
      {
        "q": "What is the SLE formula?",
        "a": "SLE = Asset Value (AV) x Exposure Factor (EF).",
        "page": "88"
      },
      {
        "q": "What does ALE stand for?",
        "a": "Annualized Loss Expectancy.",
        "page": "88"
      },
      {
        "q": "What is the ALE formula?",
        "a": "ALE = ARO x SLE.",
        "page": "88"
      },
      {
        "q": "What does ARO stand for?",
        "a": "Annualized Rate of Occurrence.",
        "page": "88"
      },
      {
        "q": "A $1,000 laptop is fully lost (EF 1.0) 7 times a year. What is the ALE?",
        "a": "$7,000. (SLE $1,000 x ARO 7)",
        "page": "88"
      },
      {
        "q": "If you lose a quarter of an asset's value, what is the EF?",
        "a": "0.25.",
        "page": "88"
      },
      {
        "q": "Qualitative or quantitative: a traffic light grid?",
        "a": "Qualitative.",
        "page": "88"
      },
      {
        "q": "Risk likelihood vs probability?",
        "a": "Likelihood is qualitative (rare, possible); probability is quantitative/statistical.",
        "page": "88"
      },
      {
        "q": "What is the most important impact consideration?",
        "a": "Life.",
        "page": "88"
      },
      {
        "q": "Risk appetite vs risk tolerance?",
        "a": "Appetite: acceptable risk before acting (the speed limit). Tolerance: acceptable variance beyond it (when you get ticketed).",
        "page": "89"
      },
      {
        "q": "What is a risk register?",
        "a": "A document identifying risks, owners, indicators, and solutions.",
        "page": "89"
      },
      {
        "q": "What are the three risk appetite postures?",
        "a": "Conservative, neutral, and expansionary.",
        "page": "89"
      }
    ]
  },
  "5.2 - Risk Management Strategies": {
    "domain": "5.0 - Security Program Management and Oversight",
    "page": "89",
    "cards": [
      {
        "q": "Buying cybersecurity insurance is which risk strategy?",
        "a": "Transfer."
      },
      {
        "q": "Stopping a high-risk activity is which risk strategy?",
        "a": "Avoid."
      },
      {
        "q": "Investing in security systems to lower risk is which strategy?",
        "a": "Mitigate."
      },
      {
        "q": "Deciding to take the risk is which strategy?",
        "a": "Accept."
      },
      {
        "q": "Accept with exemption vs exception?",
        "a": "Exemption: an external policy/regulation can't be followed. Exception: an internal policy isn't applied."
      },
      {
        "q": "Who is a risk report usually for?",
        "a": "Senior management."
      }
    ]
  },
  "5.2 - Business Impact Analysis": {
    "domain": "5.0 - Security Program Management and Oversight",
    "page": "89",
    "cards": [
      {
        "q": "What does RTO stand for?",
        "a": "Recovery Time Objective - how long to get back up to a service level."
      },
      {
        "q": "What does RPO stand for?",
        "a": "Recovery Point Objective - how much data loss is acceptable."
      },
      {
        "q": "'We can lose at most 4 hours of data' is RTO or RPO?",
        "a": "RPO."
      },
      {
        "q": "'The system must be back within 2 hours' is RTO or RPO?",
        "a": "RTO."
      },
      {
        "q": "What does MTBF stand for?",
        "a": "Mean Time Between Failures."
      },
      {
        "q": "How is MTBF calculated?",
        "a": "Total uptime / number of breakdowns."
      },
      {
        "q": "Does MTTR include diagnosis time?",
        "a": "Yes."
      }
    ]
  },
  "5.3 - Third-party Risk Assessment": {
    "domain": "5.0 - Security Program Management and Oversight",
    "page": "90-91",
    "cards": [
      {
        "q": "What is a right-to-audit clause?",
        "a": "A contract term allowing you to perform a security audit of a vendor at any time.",
        "page": "90"
      },
      {
        "q": "What is due diligence in vendor selection?",
        "a": "Checking out a company before doing business - finances, legal issues, background checks.",
        "page": "90"
      },
      {
        "q": "Give an example of a conflict of interest.",
        "a": "A vendor employs the CFO's brother, or offers gifts if a contract is signed.",
        "page": "90"
      },
      {
        "q": "Does vendor monitoring end when the contract is signed?",
        "a": "No - it's ongoing.",
        "page": "90"
      },
      {
        "q": "Why use vendor questionnaires?",
        "a": "To get security answers directly from the vendor and update risk analysis.",
        "page": "91"
      }
    ]
  },
  "5.3 - Agreement Types": {
    "domain": "5.0 - Security Program Management and Oversight",
    "page": "91",
    "cards": [
      {
        "q": "What does SLA stand for?",
        "a": "Service Level Agreement - minimum terms like uptime and response time."
      },
      {
        "q": "What does MOU stand for?",
        "a": "Memorandum of Understanding."
      },
      {
        "q": "Is an MOU a signed legally binding contract?",
        "a": "No - an informal letter of intent stating common goals."
      },
      {
        "q": "What does MOA stand for?",
        "a": "Memorandum of Agreement - the next step above an MOU."
      },
      {
        "q": "What does MSA stand for?",
        "a": "Master Service Agreement - a broad framework contract for future work."
      },
      {
        "q": "What does SOW stand for?",
        "a": "Statement of Work - specific scope, deliverables, schedule, used with an MSA."
      },
      {
        "q": "What does NDA stand for?",
        "a": "Non-Disclosure Agreement."
      },
      {
        "q": "What is a unilateral NDA?",
        "a": "A one-way NDA (bilateral is mutual)."
      },
      {
        "q": "What does BPA stand for?",
        "a": "Business Partners Agreement - going into business together."
      }
    ]
  },
  "5.4 - Compliance": {
    "domain": "5.0 - Security Program Management and Oversight",
    "page": "92",
    "cards": [
      {
        "q": "What is compliance?",
        "a": "Meeting the standards of laws, policies, and regulations."
      },
      {
        "q": "What does GLBA stand for?",
        "a": "Gramm-Leach-Bliley Act - privacy info disclosure from financial institutions."
      },
      {
        "q": "Due care vs due diligence?",
        "a": "Due care usually refers to internal activities; due diligence to third-party activities."
      },
      {
        "q": "What is attestation?",
        "a": "Someone formally 'signs off' on compliance documentation and is responsible if wrong."
      },
      {
        "q": "Name some consequences of non-compliance.",
        "a": "Fines, sanctions, reputational damage, loss of license, contractual impacts."
      }
    ]
  },
  "5.4 - Privacy": {
    "domain": "5.0 - Security Program Management and Oversight",
    "page": "93",
    "cards": [
      {
        "q": "What does GDPR stand for?",
        "a": "General Data Protection Regulation (EU)."
      },
      {
        "q": "What GDPR right lets people request data removal?",
        "a": "The right to be forgotten."
      },
      {
        "q": "Who is the data subject?",
        "a": "The individual the personal data is about."
      },
      {
        "q": "What is a data inventory?",
        "a": "A listing of all managed data - owner, update frequency, format."
      }
    ]
  },
  "5.5 - Audits and Assessments": {
    "domain": "5.0 - Security Program Management and Oversight",
    "page": "93-94",
    "cards": [
      {
        "q": "Who oversees risk management activities and audits internally?",
        "a": "The audit committee.",
        "page": "93"
      },
      {
        "q": "What is a self-assessment?",
        "a": "The organization performs its own checks.",
        "page": "93"
      },
      {
        "q": "Who often must perform audits for regulatory requirements?",
        "a": "An independent third party (external audit).",
        "page": "94"
      }
    ]
  },
  "5.5 - Penetration Tests": {
    "domain": "5.0 - Security Program Management and Oversight",
    "page": "94",
    "cards": [
      {
        "q": "Red team or blue team: who attacks?",
        "a": "Red team (offensive)."
      },
      {
        "q": "Red team or blue team: who defends?",
        "a": "Blue team (defensive)."
      },
      {
        "q": "What is a known environment test?",
        "a": "Full disclosure - the tester knows the systems."
      },
      {
        "q": "What is an unknown environment test?",
        "a": "A 'blind' test - the tester knows nothing about the systems."
      },
      {
        "q": "Is social media research passive or active reconnaissance?",
        "a": "Passive."
      },
      {
        "q": "Are port scans passive or active reconnaissance?",
        "a": "Active - visible in network traffic and logs."
      },
      {
        "q": "Is dumpster diving passive or active reconnaissance?",
        "a": "Passive."
      }
    ]
  },
  "5.6 - Security Awareness": {
    "domain": "5.0 - Security Program Management and Oversight",
    "page": "95",
    "cards": [
      {
        "q": "Why run internal phishing campaigns?",
        "a": "To see who clicks and give immediate feedback and training."
      },
      {
        "q": "Name some signs of a phishing email.",
        "a": "Spelling/grammar errors, domain inconsistencies, unusual attachments, requests for personal info."
      },
      {
        "q": "Modifying the hosts file is what type of anomalous behavior?",
        "a": "Risky behavior."
      },
      {
        "q": "A logon from another country is what type of anomalous behavior?",
        "a": "Unexpected behavior."
      },
      {
        "q": "Typing the wrong domain name is what type of anomalous behavior?",
        "a": "Unintentional behavior."
      }
    ]
  },
  "5.6 - User Training": {
    "domain": "5.0 - Security Program Management and Oversight",
    "page": "96",
    "cards": [
      {
        "q": "When should users receive security training?",
        "a": "Before they're given access."
      },
      {
        "q": "Does security training apply to third parties?",
        "a": "Yes - contractors, partners, suppliers."
      },
      {
        "q": "How do you guard against insider threats?",
        "a": "Multiple approvals for critical processes and monitoring files/systems."
      },
      {
        "q": "What is operational security?",
        "a": "Viewing security from the attacker's perspective and keeping sensitive data private."
      },
      {
        "q": "Who is the front line defense against social engineering?",
        "a": "The users."
      }
    ]
  }
};
