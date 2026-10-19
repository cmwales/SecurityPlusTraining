// AUTO-GENERATED from Acronyms.json by build_data.py - do not edit directly
window.ACRONYM_DATA = {
  "1.2 - The CIA Triad": {
    "domain": "1.0 - General Security Concepts",
    "page": "2",
    "cards": [
      {
        "q": "CIA",
        "a": "Confidentiality, Integrity, Availability",
        "detail": "The fundamentals of security. Confidentiality prevents unauthorized disclosure, integrity means data can't be modified without detection, and availability means systems are up and running for authorized users.",
        "page": "2"
      }
    ]
  },
  "1.2 - Authentication, Authorization, and Accounting": {
    "domain": "1.0 - General Security Concepts",
    "page": "4",
    "cards": [
      {
        "q": "AAA",
        "a": "Authentication, Authorization, and Accounting",
        "detail": "A framework (with identification) for proving who you are, deciding what access you get, and tracking the resources you use - login time, data sent and received, logout time.",
        "page": "4"
      }
    ]
  },
  "1.2 - Zero Trust": {
    "domain": "1.0 - General Security Concepts",
    "page": "5-6",
    "cards": [
      {
        "q": "PEP",
        "a": "Policy Enforcement Point",
        "detail": "The zero trust gatekeeper in the data plane. It allows, monitors, and terminates connections between subjects and enterprise resources.",
        "page": "5"
      },
      {
        "q": "PDP",
        "a": "Policy Decision Point",
        "detail": "The zero trust process for making an authentication decision, made up of the Policy Engine (grant, deny, revoke) and the Policy Administrator (tells the PEP).",
        "page": "6"
      }
    ]
  },
  "1.2 - Physical Security": {
    "domain": "1.0 - General Security Concepts",
    "page": "7",
    "cards": [
      {
        "q": "CCTV",
        "a": "Closed circuit television",
        "detail": "Video surveillance that can replace physical guards. Features like motion recognition and object detection (license plates, faces) matter; cameras are networked and recorded over time.",
        "page": "7"
      }
    ]
  },
  "1.4 - Public Key Infrastructure": {
    "domain": "1.0 - General Security Concepts",
    "page": "10",
    "cards": [
      {
        "q": "PKI",
        "a": "Public Key Infrastructure",
        "detail": "The policies, procedures, hardware, software, and people used to create, distribute, manage, store, and revoke digital certificates - binding public keys to people or devices through a CA.",
        "page": "10"
      }
    ]
  },
  "1.4 - Encrypting Data": {
    "domain": "1.0 - General Security Concepts",
    "page": "11",
    "cards": [
      {
        "q": "EFS",
        "a": "Encrypting File System",
        "detail": "Windows file-level encryption that protects individual files on a storage device (data at rest).",
        "page": "11"
      }
    ]
  },
  "1.4 - Encryption Technologies": {
    "domain": "1.0 - General Security Concepts",
    "page": "12",
    "cards": [
      {
        "q": "TPM",
        "a": "Trusted Platform Module",
        "detail": "Cryptographic hardware on a device - a crypto processor, random number and key generators, keys burned in during manufacturing, and secure storage for things like BitLocker keys.",
        "page": "12"
      },
      {
        "q": "HSM",
        "a": "Hardware Security Module",
        "detail": "High-end cryptographic hardware (plug-in card or separate device) for large environments. It securely stores thousands of keys, backs them up, and offloads crypto work with accelerators.",
        "page": "12"
      }
    ]
  },
  "1.4 - Certificates": {
    "domain": "1.0 - General Security Concepts",
    "page": "16-17",
    "cards": [
      {
        "q": "CA",
        "a": "Certificate Authority",
        "detail": "A trusted third party that digitally signs certificates. You trust the CA, therefore you trust the website. Organizations can also run their own private CA.",
        "page": "16"
      },
      {
        "q": "CSR",
        "a": "Certificate signing request",
        "detail": "You create a key pair and send the public key (with identifying info) to the CA to be signed. The CA validates the request, signs the certificate, and returns it.",
        "page": "16"
      },
      {
        "q": "SAN",
        "a": "Subject Alternative Name",
        "detail": "An X.509 certificate extension that lists additional identification information, allowing one certificate to support many different domains.",
        "page": "16"
      },
      {
        "q": "CRL",
        "a": "Certificate Revocation List",
        "detail": "A list of revoked certificates maintained by the CA. It can contain many revocations in a large file.",
        "page": "16"
      },
      {
        "q": "OCSP",
        "a": "Online Certificate Status Protocol",
        "detail": "Lets a browser check certificate revocation by asking an OCSP responder, usually over HTTP - more efficient than downloading a CRL. OCSP stapling puts the status in the TLS handshake.",
        "page": "17"
      }
    ]
  },
  "2.1 - Threat Actors": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "18-19",
    "cards": [
      {
        "q": "APT",
        "a": "Advanced Persistent Threat",
        "detail": "A threat actor, commonly a nation state, with constant attacks, massive resources, and the highest sophistication.",
        "page": "18"
      }
    ]
  },
  "2.2 - Common Threat Vectors": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "19-20",
    "cards": [
      {
        "q": "SVG",
        "a": "Scalable Vector Graphic",
        "detail": "An image format described in XML. It can carry HTML injection or JavaScript attack code, so browsers must provide input validation.",
        "page": "19"
      },
      {
        "q": "XML",
        "a": "Extensible Markup Language",
        "detail": "A markup language used to describe data - for example, SVG images are described in XML. It's also an injectable data type.",
        "page": "19"
      },
      {
        "q": "MSP",
        "a": "Managed service provider",
        "detail": "A provider that accesses many different customer networks from one location - a supply chain vector for attackers.",
        "page": "20"
      }
    ]
  },
  "2.3 - Memory Injections": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "22",
    "cards": [
      {
        "q": "DLL",
        "a": "Dynamic Link Library",
        "detail": "A Windows library containing code and data that many applications can use. In DLL injection, attackers inject the path to a malicious DLL so it runs inside a target process.",
        "page": "22"
      }
    ]
  },
  "2.3 - Race Conditions": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "23",
    "cards": [
      {
        "q": "TOCTOU",
        "a": "Time-of-check to time-of-use",
        "detail": "A race condition attack where something changes between when the system checks a value and when it uses the result of that check.",
        "page": "23"
      }
    ]
  },
  "2.3 - SQL Injection": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "25",
    "cards": [
      {
        "q": "SQL",
        "a": "Structured Query Language",
        "detail": "The most common relational database management system language.",
        "page": "25"
      },
      {
        "q": "SQLi",
        "a": "SQL injection",
        "detail": "Putting your own SQL requests into an existing application, often through a web form or field - possibly viewing or deleting all database information.",
        "page": "25"
      }
    ]
  },
  "2.3 - Cross-site Scripting": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "25-26",
    "cards": [
      {
        "q": "XSS",
        "a": "Cross-site scripting",
        "detail": "A common web app attack that uses the trust a user has for a site, usually with JavaScript. Reflected XSS uses a malicious link; stored XSS saves the payload for every viewer.",
        "page": "25"
      },
      {
        "q": "CSS",
        "a": "Cascading Style Sheets",
        "detail": "Something entirely different from cross-site scripting - which is why cross-site scripting is abbreviated XSS instead.",
        "page": "25"
      }
    ]
  },
  "2.3 - Hardware Vulnerabilities": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "26",
    "cards": [
      {
        "q": "EOL",
        "a": "End of life",
        "detail": "The manufacturer stops selling a product but may continue supporting it with security patches and updates.",
        "page": "26"
      },
      {
        "q": "EOSL",
        "a": "End of service life",
        "detail": "The manufacturer stops selling a product and support is no longer available - no ongoing security patches or updates (a premium support option may exist).",
        "page": "26"
      }
    ]
  },
  "2.3 - Zero-day Vulnerabilities": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "29",
    "cards": [
      {
        "q": "CVE",
        "a": "Common Vulnerabilities and Exposures",
        "detail": "A public list of known vulnerabilities (cve.mitre.org) that vulnerability scanners and the National Vulnerability Database cross-reference.",
        "page": "29"
      }
    ]
  },
  "2.4 - Physical Attacks": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "32",
    "cards": [
      {
        "q": "HVAC",
        "a": "Heating, Ventilation, and Air Conditioning",
        "detail": "Environmental controls a data center depends on for cooling and humidity - a target of environmental attacks.",
        "page": "32"
      }
    ]
  },
  "2.4 - Denial of Service": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "33",
    "cards": [
      {
        "q": "DoS",
        "a": "Denial of Service",
        "detail": "Forcing a service to fail by overloading it or exploiting a design failure or vulnerability. It can also be a smokescreen for another exploit.",
        "page": "33"
      },
      {
        "q": "DDoS",
        "a": "Distributed Denial of Service",
        "detail": "Launching an army of computers (usually a botnet) to bring down a service by using all its bandwidth or resources. Reflection and amplification make it bigger.",
        "page": "33"
      }
    ]
  },
  "2.4 - Wireless Attacks": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "34",
    "cards": [
      {
        "q": "RF",
        "a": "Radio frequency",
        "detail": "RF jamming is a wireless denial of service that transmits interfering signals to decrease the signal-to-noise ratio at the receiver.",
        "page": "34"
      }
    ]
  },
  "2.4 - Application Attacks": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "36-37",
    "cards": [
      {
        "q": "CSRF",
        "a": "Cross-site request forgery",
        "detail": "Also XSRF or 'sea surf.' It takes advantage of the trust a web application has for the user, making requests without the user's consent. Prevented with anti-forgery tokens.",
        "page": "37"
      },
      {
        "q": "DEP",
        "a": "Data Execution Prevention",
        "detail": "A privilege escalation mitigation where only data in executable areas can run.",
        "page": "37"
      }
    ]
  },
  "2.4 - Cryptographic Attacks": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "38",
    "cards": [
      {
        "q": "MD5",
        "a": "Message Digest Algorithm 5",
        "detail": "A hash algorithm published in 1992 with collisions identified in 1996 - don't use it for anything important. Researchers used MD5 collisions to fake a CA certificate in 2008.",
        "page": "38"
      },
      {
        "q": "POODLE",
        "a": "Padding Oracle On Downgraded Legacy Encryption",
        "detail": "A 2014 on-path downgrade attack that forced clients to fall back to SSL 3.0. Because of it, modern browsers won't fall back to SSL 3.0.",
        "page": "38"
      }
    ]
  },
  "2.4 - Indicators of Compromise": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "39-40",
    "cards": [
      {
        "q": "IOC",
        "a": "Indicator of compromise",
        "detail": "An event that indicates an intrusion with high confidence - e.g., unusual network activity, changed file hashes, impossible travel, missing logs.",
        "page": "39"
      }
    ]
  },
  "2.5 - Segmentation and Access Control": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "40",
    "cards": [
      {
        "q": "ACL",
        "a": "Access control list",
        "detail": "A list of permissions that allows or disallows traffic or access based on source/destination IP, port, time of day, application, or user.",
        "page": "40"
      }
    ]
  },
  "2.5 - Mitigation Techniques": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "41",
    "cards": [
      {
        "q": "FDE",
        "a": "Full disk encryption",
        "detail": "Encrypting everything on the drive - e.g., BitLocker or FileVault.",
        "page": "41"
      },
      {
        "q": "EDR",
        "a": "Endpoint Detection and Response",
        "detail": "Endpoint protection with a lightweight agent that detects threats using behavioral analysis, machine learning, and process monitoring, then investigates and responds automatically.",
        "page": "41"
      }
    ]
  },
  "2.5 - Hardening Techniques": {
    "domain": "2.0 - Threats, Vulnerabilities, and Mitigations",
    "page": "41-42",
    "cards": [
      {
        "q": "HIPS",
        "a": "Host-based Intrusion Prevention System",
        "detail": "Endpoint software that recognizes and blocks known attacks using signatures, heuristics, and behavior - e.g., buffer overflows, registry updates, writing to the Windows folder.",
        "page": "42"
      }
    ]
  },
  "3.1 - Cloud Infrastructures": {
    "domain": "3.0 - Security Architecture",
    "page": "42-43",
    "cards": [
      {
        "q": "FaaS",
        "a": "Function as a Service",
        "detail": "Serverless architecture - apps are separated into individual, autonomous functions in stateless containers, and the OS is managed by a third party.",
        "page": "43"
      },
      {
        "q": "API",
        "a": "Application Programming Interface",
        "detail": "The 'glue' that lets microservices work together as an application. Automation also uses APIs to talk to cloud services, firewalls, and operating systems.",
        "page": "43"
      }
    ]
  },
  "3.1 - Network Infrastructure Concepts": {
    "domain": "3.0 - Security Architecture",
    "page": "44",
    "cards": [
      {
        "q": "VLAN",
        "a": "Virtual Local Area Network",
        "detail": "Logical (not physical) network segmentation. Devices in different VLANs can't communicate without a Layer 3 device / router.",
        "page": "44"
      },
      {
        "q": "SDN",
        "a": "Software Defined Networking",
        "detail": "Splitting a network device's functions into separate logical units - data, control, and management planes. Perfectly built for the cloud.",
        "page": "44"
      }
    ]
  },
  "3.1 - Other Infrastructure Concepts": {
    "domain": "3.0 - Security Architecture",
    "page": "44-45",
    "cards": [
      {
        "q": "IoT",
        "a": "Internet of Things",
        "detail": "Sensors, smart devices, wearables, and facility automation. A common weakness is weak defaults - IoT manufacturers are not security professionals.",
        "page": "44"
      },
      {
        "q": "SCADA",
        "a": "Supervisory Control and Data Acquisition",
        "detail": "A large-scale, multi-site industrial control system where a PC manages equipment like power generation and manufacturing. Requires extensive segmentation.",
        "page": "45"
      },
      {
        "q": "ICS",
        "a": "Industrial Control Systems",
        "detail": "Systems that control industrial equipment; SCADA is a large-scale, multi-site ICS.",
        "page": "45"
      },
      {
        "q": "RTOS",
        "a": "Real-Time Operating System",
        "detail": "An OS with a deterministic processing schedule - no time to wait for other processes. Used in industrial equipment, automobiles, and military environments.",
        "page": "45"
      },
      {
        "q": "HA",
        "a": "High availability",
        "detail": "Always on, always available - possibly many components working together (active/active). Higher availability almost always means higher costs.",
        "page": "45"
      }
    ]
  },
  "3.2 - Intrusion Prevention": {
    "domain": "3.0 - Security Architecture",
    "page": "48",
    "cards": [
      {
        "q": "IPS",
        "a": "Intrusion Prevention System",
        "detail": "Watches network traffic and stops exploits before they get into the network. Commonly connected inline (active monitoring).",
        "page": "48"
      },
      {
        "q": "IDS",
        "a": "Intrusion Detection System",
        "detail": "Watches network traffic and sends an alarm or alert. Commonly passive, examining a copy of the traffic, so it can't block in real time.",
        "page": "48"
      }
    ]
  },
  "3.2 - Port Security": {
    "domain": "3.0 - Security Architecture",
    "page": "50",
    "cards": [
      {
        "q": "EAP",
        "a": "Extensible Authentication Protocol",
        "detail": "An authentication framework with many RFC-based methods. It integrates with 802.1X to prevent network access until authentication succeeds.",
        "page": "50"
      },
      {
        "q": "NAC",
        "a": "Network Access Control",
        "detail": "IEEE 802.1X is port-based NAC - you don't get access to the network until you authenticate.",
        "page": "50"
      }
    ]
  },
  "3.2 - Firewall Types": {
    "domain": "3.0 - Security Architecture",
    "page": "50-51",
    "cards": [
      {
        "q": "NAT",
        "a": "Network Address Translation",
        "detail": "A firewall/router function that translates addresses at the network edge. It's one of the simplest 'proxies' - a network-level proxy.",
        "page": "50"
      },
      {
        "q": "UTM",
        "a": "Unified Threat Management",
        "detail": "An all-in-one security appliance - URL filter, content and malware inspection, spam filter, router/switch, firewall, IDS/IPS, bandwidth shaper, and VPN endpoint.",
        "page": "51"
      },
      {
        "q": "NGFW",
        "a": "Next-generation firewall",
        "detail": "A layer 7 (application) firewall that analyzes all data in every packet - also called an application layer gateway, stateful multilayer inspection, or deep packet inspection.",
        "page": "51"
      },
      {
        "q": "WAF",
        "a": "Web application firewall",
        "detail": "Applies rules to HTTP/HTTPS conversations and allows or denies based on expected input - e.g., blocking SQL injection.",
        "page": "51"
      },
      {
        "q": "PCI DSS",
        "a": "Payment Card Industry Data Security Standard",
        "detail": "The security standard for card data. WAFs are a major focus, segmentation is mandated, and it requires annual risk assessments.",
        "page": "51"
      }
    ]
  },
  "3.2 - Secure Communication": {
    "domain": "3.0 - Security Architecture",
    "page": "51-52",
    "cards": [
      {
        "q": "VPN",
        "a": "Virtual Private Network",
        "detail": "Encrypted (private) data traversing a public network. SSL/TLS VPNs are used for user access; IPsec tunnels for site-to-site.",
        "page": "51"
      },
      {
        "q": "SSL",
        "a": "Secure Sockets Layer",
        "detail": "SSL/TLS VPNs use the common SSL/TLS protocol on tcp/443, with almost no firewall issues, from a browser or light client.",
        "page": "51"
      },
      {
        "q": "SD-WAN",
        "a": "Software Defined Networking in a Wide Area Network",
        "detail": "A WAN built for the cloud - cloud apps communicate directly to the cloud without hopping through a central point. It doesn't adequately address security.",
        "page": "51"
      },
      {
        "q": "SASE",
        "a": "Secure Access Service Edge",
        "detail": "A 'next generation' VPN with security technologies in the cloud and SASE clients on all devices - a complete network and security solution.",
        "page": "51"
      }
    ]
  },
  "3.3 - Data Types and Classifications": {
    "domain": "3.0 - Security Architecture",
    "page": "53",
    "cards": [
      {
        "q": "PII",
        "a": "Personally Identifiable Information",
        "detail": "Data that can be used to identify an individual - name, date of birth, mother's maiden name, biometric information.",
        "page": "53"
      },
      {
        "q": "PHI",
        "a": "Protected Health Information",
        "detail": "Health information associated with an individual - health status, health care records, payments for health care.",
        "page": "53"
      }
    ]
  },
  "3.3 - States of Data": {
    "domain": "3.0 - Security Architecture",
    "page": "53-54",
    "cards": [
      {
        "q": "TLS",
        "a": "Transport Layer Security",
        "detail": "Transport encryption that protects data in transit.",
        "page": "53"
      },
      {
        "q": "IPsec",
        "a": "Internet Protocol Security",
        "detail": "Transport encryption that protects data in transit, commonly used for site-to-site VPN tunnels.",
        "page": "53"
      }
    ]
  },
  "3.4 - Resiliency": {
    "domain": "3.0 - Security Architecture",
    "page": "55-56",
    "cards": [
      {
        "q": "COOP",
        "a": "Continuity of operations planning",
        "detail": "Documented, tested alternatives for when technology fails - manual transactions, paper receipts, phone calls for transaction approvals.",
        "page": "56"
      }
    ]
  },
  "3.4 - Power Resiliency": {
    "domain": "3.0 - Security Architecture",
    "page": "58",
    "cards": [
      {
        "q": "UPS",
        "a": "Uninterruptible Power Supply",
        "detail": "Short-term backup power for blackouts, brownouts, and surges. Types: offline/standby, line-interactive, on-line/double-conversion. It covers the time a generator needs to start.",
        "page": "58"
      }
    ]
  },
  "4.1 - Hardening Targets": {
    "domain": "4.0 - Security Operations",
    "page": "59-60",
    "cards": [
      {
        "q": "C2C",
        "a": "Cloud to Cloud",
        "detail": "A backup approach for cloud infrastructure - always have backups.",
        "page": "59"
      }
    ]
  },
  "4.1 - Securing Wireless and Mobile": {
    "domain": "4.0 - Security Operations",
    "page": "60-61",
    "cards": [
      {
        "q": "MDM",
        "a": "Mobile Device Management",
        "detail": "Centralized management of company- and user-owned mobile devices - set policies on apps, data, and camera, and force screen locks and PINs.",
        "page": "60"
      },
      {
        "q": "BYOD",
        "a": "Bring Your Own Device",
        "detail": "The employee owns the device but it must meet company requirements. Difficult to secure since it's both a home and work device.",
        "page": "60"
      },
      {
        "q": "COPE",
        "a": "Corporate owned, personally enabled",
        "detail": "The company buys the device for both corporate and personal use, and keeps full control - information can be deleted at any time.",
        "page": "61"
      },
      {
        "q": "CYOD",
        "a": "Choose Your Own Device",
        "detail": "Similar to COPE, but the user chooses the device.",
        "page": "61"
      },
      {
        "q": "PAN",
        "a": "Personal Area Network",
        "detail": "Bluetooth's high-speed, short-distance network connecting phones, headsets, health monitors, cars, and smartwatches.",
        "page": "61"
      }
    ]
  },
  "4.1 - Wireless Security Settings": {
    "domain": "4.0 - Security Operations",
    "page": "61-62",
    "cards": [
      {
        "q": "MIC",
        "a": "Message integrity check",
        "detail": "Verifies received wireless data is identical to the original sent data.",
        "page": "61"
      },
      {
        "q": "PSK",
        "a": "Pre-shared key",
        "detail": "A shared wireless password. WPA2 PSKs can be brute forced after capturing the hash; WPA3-Personal uses PSK with SAE.",
        "page": "61"
      },
      {
        "q": "WPA3",
        "a": "Wi-Fi Protected Access 3",
        "detail": "Introduced in 2018. Uses GCMP (AES with GMAC integrity) and SAE instead of the four-way handshake, so no hash to brute force.",
        "page": "61"
      },
      {
        "q": "GCMP",
        "a": "Galois/Counter Mode Protocol",
        "detail": "WPA3's block cipher mode - stronger than WPA2. Provides confidentiality with AES and a message integrity check with GMAC.",
        "page": "61"
      },
      {
        "q": "GMAC",
        "a": "Galois Message Authentication Code",
        "detail": "Provides the message integrity check in GCMP.",
        "page": "61"
      },
      {
        "q": "SAE",
        "a": "Simultaneous Authentication of Equals",
        "detail": "WPA3's Diffie-Hellman derived key exchange with mutual authentication (the dragonfly handshake). Everyone gets a different session key, even with the same PSK.",
        "page": "61"
      },
      {
        "q": "RADIUS",
        "a": "Remote Authentication Dial-in User Service",
        "detail": "A common AAA protocol that centralizes authentication for routers, switches, firewalls, servers, VPN, and 802.1X - not just for dial-in.",
        "page": "62"
      }
    ]
  },
  "4.1 - Application Security": {
    "domain": "4.0 - Security Operations",
    "page": "62-63",
    "cards": [
      {
        "q": "QA",
        "a": "Quality Assurance",
        "detail": "The testing process - 'testing, testing, testing' - in secure coding.",
        "page": "62"
      },
      {
        "q": "SAST",
        "a": "Static Application Security Testing",
        "detail": "Static code analyzers that find flaws like buffer overflows and database injections. Not everything can be found, and false positives must be verified.",
        "page": "63"
      },
      {
        "q": "UAC",
        "a": "User Account Control",
        "detail": "A Windows sandboxing feature - applications can't access unrelated resources.",
        "page": "63"
      }
    ]
  },
  "4.3 - Vulnerability Scanning": {
    "domain": "4.0 - Security Operations",
    "page": "64",
    "cards": [
      {
        "q": "CERT",
        "a": "Computer Emergency Response Team",
        "detail": "Carnegie Mellon's CERT publishes the Basic Fuzzing Framework (BFF).",
        "page": "64"
      },
      {
        "q": "BFF",
        "a": "Basic Fuzzing Framework",
        "detail": "CERT's fuzzing framework for sending random input to applications to find faults.",
        "page": "64"
      }
    ]
  },
  "4.3 - Threat Intelligence": {
    "domain": "4.0 - Security Operations",
    "page": "65",
    "cards": [
      {
        "q": "OSINT",
        "a": "Open-source intelligence",
        "detail": "Threat intelligence from publicly available sources - Internet discussion groups and social media, government data, and commercial data.",
        "page": "65"
      },
      {
        "q": "CTA",
        "a": "Cyber Threat Alliance",
        "detail": "An information-sharing organization. Members upload threat intelligence; CTA scores and validates it so other members can extract it.",
        "page": "65"
      }
    ]
  },
  "4.3 - Penetration Testing": {
    "domain": "4.0 - Security Operations",
    "page": "65-66",
    "cards": [
      {
        "q": "NIST",
        "a": "National Institute of Standards and Technology",
        "detail": "Publishes security guidance, such as the Technical Guide to Information Security Testing and Assessment, SP 800-61 for incident handling, and SCAP.",
        "page": "65"
      }
    ]
  },
  "4.3 - Analyzing Vulnerabilities": {
    "domain": "4.0 - Security Operations",
    "page": "66-67",
    "cards": [
      {
        "q": "CVSS",
        "a": "Common Vulnerability Scoring System",
        "detail": "Quantitative scoring of a vulnerability from 0 to 10. Scoring standards change over time (CVSS 2.0 vs 3.x).",
        "page": "66"
      }
    ]
  },
  "4.4 - Security Monitoring": {
    "domain": "4.0 - Security Operations",
    "page": "68-69",
    "cards": [
      {
        "q": "SIEM",
        "a": "Security Information and Event Management",
        "detail": "Consolidates logs from many systems to a central database for real-time alerts, long-term storage, reporting, correlation, and forensic analysis.",
        "page": "68"
      },
      {
        "q": "SEM",
        "a": "Security Information and Event Manager",
        "detail": "Another name used for a SIEM - it consolidates many different logs into a central database.",
        "page": "68"
      }
    ]
  },
  "4.4 - Security Tools": {
    "domain": "4.0 - Security Operations",
    "page": "69-70",
    "cards": [
      {
        "q": "SCAP",
        "a": "Security Content Automation Protocol",
        "detail": "A NIST-managed standard that lets different security tools identify and act on the same criteria - validating configurations, confirming patches, and enabling automation.",
        "page": "69"
      },
      {
        "q": "CIS",
        "a": "Center for Internet Security",
        "detail": "Publishes popular security benchmarks - best-practice minimum settings for OSes, cloud providers, mobile devices, and more.",
        "page": "69"
      },
      {
        "q": "DLP",
        "a": "Data Loss Prevention",
        "detail": "Stops sensitive data (SSNs, card numbers, medical records) from leaking - on endpoints (in use), the network (in motion), servers (at rest), email, and cloud.",
        "page": "70"
      },
      {
        "q": "SNMP",
        "a": "Simple Network Management Protocol",
        "detail": "Polls devices for statistics over udp/161 to build historical graphs. SNMP traps send threshold alerts over udp/162.",
        "page": "70"
      },
      {
        "q": "MIB",
        "a": "Management Information Base",
        "detail": "The SNMP database of data, which contains OIDs.",
        "page": "70"
      },
      {
        "q": "OID",
        "a": "Object Identifier",
        "detail": "An entry in the SNMP MIB.",
        "page": "70"
      }
    ]
  },
  "4.5 - Web Filtering": {
    "domain": "4.0 - Security Operations",
    "page": "71-72",
    "cards": [
      {
        "q": "URL",
        "a": "Uniform Resource Locator",
        "detail": "A web address. URL scanning allows or restricts access by specific URL or category using allow and block lists.",
        "page": "71"
      },
      {
        "q": "URI",
        "a": "Uniform Resource Identifier",
        "detail": "Another name for a URL in URL scanning and filtering.",
        "page": "71"
      }
    ]
  },
  "4.5 - Operating System Security": {
    "domain": "4.0 - Security Operations",
    "page": "72",
    "cards": [
      {
        "q": "SELinux",
        "a": "Security-Enhanced Linux",
        "detail": "Open-source security patches for the Linux kernel that add mandatory access control, limiting application access so a breach has limited scope.",
        "page": "72"
      }
    ]
  },
  "4.5 - Email Security": {
    "domain": "4.0 - Security Operations",
    "page": "73",
    "cards": [
      {
        "q": "SPF",
        "a": "Sender Policy Framework",
        "detail": "A DNS TXT record listing all servers authorized to send email for a domain, so receivers can check mail came from an authorized host.",
        "page": "73"
      },
      {
        "q": "DKIM",
        "a": "Domain Keys Identified Mail",
        "detail": "The mail server digitally signs all outgoing mail; receivers validate it with the public key in the DKIM DNS TXT record.",
        "page": "73"
      },
      {
        "q": "DMARC",
        "a": "Domain-based Message Authentication, Reporting, and Conformance",
        "detail": "An extension of SPF and DKIM. The domain owner's DNS policy tells receivers to accept, send to spam, or reject failing mail, and compliance reports are sent back.",
        "page": "73"
      }
    ]
  },
  "4.5 - Monitoring Data": {
    "domain": "4.0 - Security Operations",
    "page": "73-74",
    "cards": [
      {
        "q": "FIM",
        "a": "File Integrity Monitoring",
        "detail": "Monitors important OS and application files that should never change and identifies when changes occur - e.g., SFC on Windows, Tripwire on Linux.",
        "page": "73"
      },
      {
        "q": "SFC",
        "a": "System File Checker",
        "detail": "The Windows file integrity monitoring tool.",
        "page": "73"
      }
    ]
  },
  "4.5 - Endpoint Security": {
    "domain": "4.0 - Security Operations",
    "page": "74-75",
    "cards": [
      {
        "q": "XDR",
        "a": "Extended Detection and Response",
        "detail": "An evolution of EDR that adds network-based detection and correlates endpoint, network, and cloud data - often with user behavior analytics.",
        "page": "75"
      }
    ]
  },
  "4.6 - Identity and Access Management": {
    "domain": "4.0 - Security Operations",
    "page": "75-76",
    "cards": [
      {
        "q": "IAM",
        "a": "Identity and Access Management",
        "detail": "Giving the right permissions to the right people at the right time - identity lifecycle, access control, authentication and authorization, and identity governance.",
        "page": "75"
      },
      {
        "q": "SSO",
        "a": "Single sign-on",
        "detail": "Provide credentials one time to access all available or assigned resources. Usually limited by time, and the infrastructure must support it.",
        "page": "75"
      },
      {
        "q": "LDAP",
        "a": "Lightweight Directory Access Protocol",
        "detail": "The protocol for reading and writing directories over an IP network - used to query and update an X.500 directory like Active Directory.",
        "page": "76"
      },
      {
        "q": "ITU",
        "a": "International Telecommunications Union",
        "detail": "Wrote the X.500 directory specification.",
        "page": "76"
      },
      {
        "q": "SAML",
        "a": "Security Assertion Markup Language",
        "detail": "An open standard for authentication and authorization through a third party. Its largest roadblock: it wasn't originally designed for mobile apps.",
        "page": "76"
      }
    ]
  },
  "4.6 - Access Controls": {
    "domain": "4.0 - Security Operations",
    "page": "77",
    "cards": [
      {
        "q": "MAC",
        "a": "Mandatory Access Control",
        "detail": "The OS limits operations based on security clearance labels (confidential, secret, top secret). The administrator decides; users can't change it.",
        "page": "77"
      },
      {
        "q": "DAC",
        "a": "Discretionary Access Control",
        "detail": "Used in most OSes - the owner controls who has access. Very flexible but very weak security.",
        "page": "77"
      },
      {
        "q": "RBAC",
        "a": "Role-based access control",
        "detail": "Access based on your role in the organization (manager, team lead). Rights are gained implicitly; Windows uses Groups.",
        "page": "77"
      },
      {
        "q": "ABAC",
        "a": "Attribute-based access control",
        "detail": "A context-aware 'next generation' model combining many parameters - resource, IP address, time of day, desired action, relationship to the data.",
        "page": "77"
      }
    ]
  },
  "4.6 - Multifactor Authentication": {
    "domain": "4.0 - Security Operations",
    "page": "78",
    "cards": [
      {
        "q": "MFA",
        "a": "Multifactor authentication",
        "detail": "Proving who you are with different factors - something you know, have, are, and somewhere you are. It's why a cloned RFID badge alone isn't enough.",
        "page": "78"
      },
      {
        "q": "PIN",
        "a": "Personal identification number",
        "detail": "A 'something you know' factor, not typically contained anywhere on a smart card or ATM card.",
        "page": "78"
      }
    ]
  },
  "4.8 - Digital Forensics": {
    "domain": "4.0 - Security Operations",
    "page": "82",
    "cards": [
      {
        "q": "ESI",
        "a": "Electronically stored information",
        "detail": "Data preserved in a separate repository during a legal hold, with unique workflow and retention requirements.",
        "page": "82"
      }
    ]
  },
  "5.1 - Security Policies": {
    "domain": "5.0 - Security Program Management and Oversight",
    "page": "84-85",
    "cards": [
      {
        "q": "AUP",
        "a": "Acceptable use policy",
        "detail": "Defines acceptable use of company assets (Internet, phones, computers, mobile devices) and limits legal liability.",
        "page": "84"
      },
      {
        "q": "SDLC",
        "a": "Software development lifecycle",
        "detail": "The framework for getting from idea to application (also systems or application development life cycle). There's no single 'best way.'",
        "page": "85"
      }
    ]
  },
  "5.1 - Security Standards": {
    "domain": "5.0 - Security Program Management and Oversight",
    "page": "85",
    "cards": [
      {
        "q": "ISO",
        "a": "International Organization for Standardization",
        "detail": "Publishes security standards organizations can adopt, such as ISO/IEC 27001 for information security management systems.",
        "page": "85"
      }
    ]
  },
  "5.1 - Security Procedures": {
    "domain": "5.0 - Security Program Management and Oversight",
    "page": "86",
    "cards": [
      {
        "q": "SOAR",
        "a": "Security Orchestration, Automation, and Response",
        "detail": "A platform that integrates playbooks with third-party tools and data sources to make security teams more effective.",
        "page": "86"
      }
    ]
  },
  "5.1 - Security Considerations": {
    "domain": "5.0 - Security Program Management and Oversight",
    "page": "87",
    "cards": [
      {
        "q": "SOX",
        "a": "Sarbanes-Oxley Act",
        "detail": "The Public Company Accounting Reform and Investor Protection Act of 2002 - a regulatory requirement for public companies.",
        "page": "87"
      },
      {
        "q": "HIPAA",
        "a": "Health Insurance Portability and Accountability Act",
        "detail": "Extensive healthcare standards for the storage, use, and transmission of health care information, with fines and prison time for violations.",
        "page": "87"
      }
    ]
  },
  "5.2 - Risk Analysis": {
    "domain": "5.0 - Security Program Management and Oversight",
    "page": "88-89",
    "cards": [
      {
        "q": "ARO",
        "a": "Annualized Rate of Occurrence",
        "detail": "How likely an event is to happen in a year - e.g., a hurricane in Florida vs. Montana. ALE = ARO x SLE.",
        "page": "88"
      },
      {
        "q": "AV",
        "a": "Asset value",
        "detail": "The value of an asset to the organization, including its cost, effect on sales, and potential regulatory fines. SLE = AV x EF.",
        "page": "88"
      },
      {
        "q": "EF",
        "a": "Exposure factor",
        "detail": "The percentage of value lost due to an incident - losing a quarter is 0.25, losing the entire asset is 1.0.",
        "page": "88"
      },
      {
        "q": "SLE",
        "a": "Single Loss Expectancy",
        "detail": "The monetary loss if a single event occurs: SLE = AV x EF. A $1,000 laptop stolen = $1,000.",
        "page": "88"
      },
      {
        "q": "ALE",
        "a": "Annualized Loss Expectancy",
        "detail": "The expected yearly loss: ALE = ARO x SLE. Seven $1,000 laptops stolen a year = $7,000.",
        "page": "88"
      }
    ]
  },
  "5.2 - Business Impact Analysis": {
    "domain": "5.0 - Security Program Management and Oversight",
    "page": "89",
    "cards": [
      {
        "q": "RTO",
        "a": "Recovery time objective",
        "detail": "How long to get back up and running to a particular service level - you're not up until the database and web server are operational.",
        "page": "89"
      },
      {
        "q": "RPO",
        "a": "Recovery point objective",
        "detail": "How much data loss is acceptable - how far back the restored data goes.",
        "page": "89"
      },
      {
        "q": "MTTR",
        "a": "Mean time to repair",
        "detail": "The average time required to fix an issue, including diagnosis - important for the cost of unplanned outages.",
        "page": "89"
      },
      {
        "q": "MTBF",
        "a": "Mean time between failures",
        "detail": "The time between outages: total uptime / number of breakdowns. Used to statistically plan for outages.",
        "page": "89"
      }
    ]
  },
  "5.3 - Agreement Types": {
    "domain": "5.0 - Security Program Management and Oversight",
    "page": "91",
    "cards": [
      {
        "q": "SLA",
        "a": "Service Level Agreement",
        "detail": "Minimum terms for services provided - uptime, response time - commonly between customers and service providers.",
        "page": "91"
      },
      {
        "q": "MOU",
        "a": "Memorandum of Understanding",
        "detail": "Both sides agree in general - usually common goals. An informal letter of intent, not a signed contract.",
        "page": "91"
      },
      {
        "q": "MOA",
        "a": "Memorandum of Agreement",
        "detail": "The next step above an MOU - both sides conditionally agree to the objectives. May not contain legally enforceable promises.",
        "page": "91"
      },
      {
        "q": "MSA",
        "a": "Master Service Agreement",
        "detail": "A legal contract and broad framework of terms; future projects are based on it.",
        "page": "91"
      },
      {
        "q": "SOW",
        "a": "Statement of Work",
        "detail": "A specific list of items to complete, used with an MSA - scope, location, deliverables, schedule, and acceptance criteria.",
        "page": "91"
      },
      {
        "q": "WO",
        "a": "Work order",
        "detail": "Another name for a statement of work - the specific list of items to be completed under an MSA.",
        "page": "91"
      },
      {
        "q": "NDA",
        "a": "Non-disclosure agreement",
        "detail": "A formal confidentiality contract protecting trade secrets and business activities. Can be unilateral (one-way) or bilateral (mutual).",
        "page": "91"
      },
      {
        "q": "BPA",
        "a": "Business Partners Agreement",
        "detail": "An agreement for going into business together - owner stake, financial contract, decision-making, and contingencies like disaster recovery.",
        "page": "91"
      }
    ]
  },
  "5.4 - Compliance": {
    "domain": "5.0 - Security Program Management and Oversight",
    "page": "92",
    "cards": [
      {
        "q": "GLBA",
        "a": "Gramm-Leach-Bliley Act",
        "detail": "A 1999 law governing the disclosure of privacy information from financial institutions.",
        "page": "92"
      },
      {
        "q": "CCO",
        "a": "Central Compliance Officer",
        "detail": "In large organizations, the person who monitors and reports on organizational compliance efforts.",
        "page": "92"
      }
    ]
  },
  "5.4 - Privacy": {
    "domain": "5.0 - Security Program Management and Oversight",
    "page": "93",
    "cards": [
      {
        "q": "GDPR",
        "a": "General Data Protection Regulation",
        "detail": "An EU regulation for data protection and privacy. It controls export of personal data, gives data subjects a 'right to be forgotten,' and requires EU citizens' data to be stored in the EU.",
        "page": "93"
      }
    ]
  }
};
