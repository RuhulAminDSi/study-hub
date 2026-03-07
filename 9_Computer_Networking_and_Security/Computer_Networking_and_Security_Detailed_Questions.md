# Computer Networking and Security - Detailed Review Questions

---

## Question 1
Explain the OSI model layers with their functions and protocols.

**Answer:** OSI Model - 7 Layers:

1. Physical Layer:
   - Transmits raw bits
   - Hardware: Cables, hubs, repeaters
   - Protocols: Ethernet, USB

2. Data Link Layer:
   - Framing, MAC addressing
   - Error detection
   - Protocols: Ethernet, PPP, HDLC

3. Network Layer:
   - Routing, logical addressing
   - Protocols: IP, ICMP, IGMP

4. Transport Layer:
   - End-to-end delivery
   - Protocols: TCP, UDP

5. Session Layer:
   - Session management
   - Protocols: NetBIOS, RPC

6. Presentation Layer:
   - Data formatting, encryption
   - Protocols: SSL, JPEG, MPEG

7. Application Layer:
   - User interface
   - Protocols: HTTP, FTP, SMTP

Data Flow:
- Sender: App → Pres → Sess → Trans → Net → Data → Phys
- Receiver: Phys → Data → Net → Trans → Sess → Pres → App

---

## Question 2
Differentiate between TCP and UDP protocols.

**Answer:**
TCP (Transmission Control Protocol):
- Connection-oriented (establishes connection)
- Reliable delivery
- Flow control (sliding window)
- Error correction
- Congestion control
- Ordered delivery
- Header: 20 bytes
- Applications: HTTP, FTP, Email, SSH

UDP (User Datagram Protocol):
- Connectionless (no connection)
- Unreliable delivery
- No flow control
- No error correction
- No ordering
- Header: 8 bytes
- Applications: DNS, DHCP, Video streaming, VoIP

Comparison:
Feature        | TCP        | UDP
--------------|------------|---------
Connection    | Yes        | No
Reliability   | High       | Low
Speed        | Slower     | Faster
Ordering      | Yes        | No
Flow Control | Yes        | No
Header Size  | 20 bytes   | 8 bytes

---

## Question 3
Explain the three-way handshake in TCP connection establishment.

**Answer:** TCP Three-Way Handshake:

Purpose: Establish reliable connection before data transfer

Steps:

1. Client sends SYN:
   - Sequence number (x)
   - SYN flag set
   - "I want to connect"

2. Server sends SYN-ACK:
   - Acknowledges (ACK = x+1)
   - Server sequence (y)
   - SYN flag set
   - "Ready, acknowledged"

3. Client sends ACK:
   - Acknowledges (ACK = y+1)
   - Connection established
   - "Ready to transfer"

Total: 3 packets exchanged

State Changes:
- Client: CLOSED → SYN_SENT → ESTABLISHED
- Server: LISTEN → SYN_RCVD → ESTABLISHED

Connection Termination:
1. FIN from sender
2. ACK from receiver
3. FIN from receiver
4. ACK from sender

---

## Question 4
Explain subnetting and CIDR notation with example.

**Answer:** Subnetting:
- Divides network into smaller subnets
- Uses subnet mask to define network/host portions

Default Classes:
- Class A: /8 (255.0.0.0)
- Class B: /16 (255.255.0.0)
- Class C: /24 (255.255.255.0)

CIDR (Classless Inter-Domain Routing):
- Notation: IP address/number
- /n = n bits for network
- More flexible than classful

Example: 192.168.1.0/26

Analysis:
- IP: 192.168.1.0
- Mask: /26 = 255.255.255.192
- Binary: 11111111.11111111.11111111.11000000

Subnets:
- Network bits: 26
- Host bits: 6
- Subnets: 2^2 = 4
- Hosts per subnet: 2^6 - 2 = 62

Subnet addresses:
- 192.168.1.0 (network)
- 192.168.1.64
- 192.168.1.128
- 192.168.1.192 (broadcast)

---

## Question 5
Explain symmetric and asymmetric encryption with examples.

**Answer:**
Symmetric Encryption:
- Same key for encryption/decryption
- Faster, simpler
- Key distribution problem
- Examples:
  - DES (56-bit key)
  - 3DES (112/168-bit)
  - AES (128/192/256-bit)
  - Blowfish

Process:
Sender: Plaintext + Key → Encryption → Ciphertext
Receiver: Ciphertext + Key → Decryption → Plaintext

Asymmetric Encryption:
- Public key for encryption
- Private key for decryption
- Slower but solves key distribution
- Examples:
  - RSA (Rivest-Shamir-Adleman)
  - DSA (Digital Signature Algorithm)
  - ECC (Elliptic Curve Cryptography)

Process:
Sender: Plaintext + Receiver's Public Key → Encryption → Ciphertext
Receiver: Ciphertext + Receiver's Private Key → Decryption → Plaintext

Digital Signature:
Sender: Hash + Sender's Private Key → Signature
Receiver: Signature + Sender's Public Key → Verify

---

## Question 6
Differentiate between various network topologies.

**Answer:**
Bus Topology:
- Single backbone cable
- All devices connected to backbone
- Terminators at ends
- Problem: Collision, limited length
- Used: Old Ethernet (10BASE2)

Star Topology:
- Central hub/switch
- All devices connected to center
- Most common today
- Advantage: Failure isolation
- Used: Modern Ethernet

Ring Topology:
- Devices connected in circle
- Token passing
- IBM Token Ring
- Problem: Single break affects all

Mesh Topology:
- Devices interconnected
- Multiple paths
- High reliability
- Used: Backbone networks

Tree Topology:
- Hierarchical structure
- Combination of star and bus
- Used: Campus networks

Hybrid Topology:
- Combination of above
- Most networks are hybrid

Comparison:
Topology  | Cost   | Reliability | Scalability
----------|--------|-------------|------------
Bus       | Low    | Low         | Poor
Star      | Medium | High        | Good
Ring      | Medium | Medium      | Medium
Mesh      | High   | Very High   | Good

---

## Question 7
Explain the working of DNS with resolution process.

**Answer:** DNS (Domain Name System):
- Converts domain names to IP addresses
- Distributed hierarchical database

Hierarchy:
1. Root Server (.)
2. TLD Servers (.com, .org, .edu)
3. Authoritative Servers
4. Recursive Resolvers (ISPs)

Record Types:
- A: IPv4 address
- AAAA: IPv6 address
- CNAME: Canonical name (alias)
- MX: Mail exchange
- NS: Name server
- SOA: Start of authority

Resolution Process:
1. User types www.example.com
2. Browser checks cache
3. Recursive resolver checks cache
4. Queries root server → com TLD server
5. Queries example.com authoritative server
6. Returns IP address
7. Browser connects to IP

Tools:
- nslookup: Query DNS
- dig: Detailed DNS lookup
- ping: Test connectivity

---

## Question 8
Explain common network security threats and attacks.

**Answer:** Network Security Threats:

1. Malware:
   - Virus: Self-replicating
   - Worm: Spreads across networks
   - Trojan: Disguised as legitimate
   - Ransomware: Encrypts data

2. DoS/DDoS:
   - Floods with traffic
   - Makes service unavailable
   - Examples: SYN flood, ping flood

3. Man-in-the-Middle:
   - Intercepts communication
   - Can modify data
   - Example: WiFi eavesdropping

4. Phishing:
   - Fake emails/websites
   - Steals credentials
   - Types: Spear, whaling

5. SQL Injection:
   - Attacks database
   - Injects SQL code
   - Data breach risk

6. XSS (Cross-Site Scripting):
   - Inject malicious scripts
   - Steals cookies, sessions

7. Brute Force:
   - Guesses passwords
   - Dictionary attack

8. Social Engineering:
   - Manipulates people
   - Phishing, pretexting

---

## Question 9
Explain firewall types and their working.

**Answer:** Firewall Types:

1. Packet Filtering Firewall:
   - Checks packet headers
   - Source/dest IP, port
   - Allow/block rules
   - Fast but limited
   - Operates at Network layer

2. Stateful Inspection Firewall:
   - Tracks connections
   - Remembers state
   - More secure than packet filter
   - Monitors TCP handshake

3. Application Gateway (Proxy):
   - Application-level filtering
   - Acts as intermediary
   - Complete request inspection
   - Slower but more secure

4. Circuit-Level Gateway:
   - SOCKS proxy
   - Session-level
   - UDP/TCP connection

5. Next-Generation Firewall:
   - Deep packet inspection
   - Intrusion prevention
   - Application awareness
   - SSL inspection

Placement:
- Network perimeter
- Between subnets
- Host-based (personal firewall)

---

## Question 10
Explain the working of VPN and its protocols.

**Answer:** VPN (Virtual Private Network):
- Creates secure tunnel over public network
- Encrypts data
- Provides privacy

Working:
1. Client connects to VPN server
2. Tunnel established
3. All traffic encrypted
4. Data travels through tunnel
5. Server decrypts and forwards

VPN Protocols:

1. PPTP (Point-to-Point Tunneling):
   - Microsoft protocol
   - Weak encryption
   - Easy to set up

2. L2TP (Layer 2 Tunneling):
   - Combines L2F and PPTP
   - No encryption (needs IPSec)
   - More secure than PPTP

3. IPSec:
   - Most secure
   - Encryption + authentication
   - Two modes: Tunnel, Transport
   - Used widely

4. OpenVPN:
   - Open source
   - SSL/TLS based
   - Cross-platform
   - Highly configurable

5. WireGuard:
   - Modern, fast
   - Simple code
   - Increasing adoption

Types:
- Remote Access: Individual users
- Site-to-Site: Networks

---

*End of Computer Networking and Security Detailed Questions*
