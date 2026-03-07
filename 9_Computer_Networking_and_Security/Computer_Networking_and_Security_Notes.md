# Computer Networking and Security - Study Notes

## Table of Contents
1. [Introduction to Networks](#1-introduction-to-networks)
2. [OSI Model](#2-osi-model)
3. [TCP/IP Model](#3-tcpip-model)
4. [Network Devices](#4-network-devices)
5. [IP Addressing](#5-ip-addressing)
6. [Network Protocols](#6-network-protocols)
7. [Network Security](#7-network-security)
8. [Cryptography](#8-cryptography)

---

## 1. Introduction to Networks

### What is a Computer Network?
- Connected computers and devices
- Share resources (data, hardware, software)
- Communication between users

### Network Types

| Type | Area | Example |
|------|------|---------|
| PAN | Personal | Bluetooth |
| LAN | Local (building) | Office network |
| MAN | Metropolitan | City WiFi |
| WAN | Wide (country) | Internet |

### Network Topologies
- **Bus**: Single backbone cable
- **Star**: Central hub/switch
- **Ring**: Circular connection
- **Mesh**: Multiple connections
- **Tree**: Hierarchical structure

---

## 2. OSI Model

### 7 Layers

| Layer | Number | Function | Protocols |
|-------|--------|----------|-----------|
| Physical | 1 | Bits, cables, signals | Ethernet, USB |
| Data Link | 2 | Frames, MAC addresses | Ethernet, PPP |
| Network | 3 | Packets, Routing | IP, ICMP |
| Transport | 4 | End-to-end | TCP, UDP |
| Session | 5 | Session management | NetBIOS |
| Presentation | 6 | Data format | SSL, JPEG |
| Application | 7 | User interface | HTTP, FTP |

### Data Encapsulation
```
Application → Transport → Network → Data Link → Physical
   Data        Segments    Packets    Frames     Bits
```

---

## 3. TCP/IP Model

### 4 Layers

| Layer | Protocols | Function |
|-------|-----------|----------|
| Network Access | Ethernet, ARP | Physical + Data Link |
| Internet | IP, ICMP, IGMP | Addressing, Routing |
| Transport | TCP, UDP | End-to-end |
| Application | HTTP, FTP, SMTP | User services |

### Comparison with OSI
```
OSI:     App → Pres → Sess → Trans → Net → Data → Phys
TCP/IP:  Application → Transport → Internet → Link
```

---

## 4. Network Devices

| Device | Layer | Function |
|--------|-------|----------|
| **Repeater** | Physical | Amplify signal |
| **Hub** | Physical | Broadcast to all ports |
| **Bridge** | Data Link | Connect LANs, filter traffic |
| **Switch** | Data Link | Connect devices, learn MAC |
| **Router** | Network | Connect networks, route packets |
| **Gateway** | All | Connect different networks |

### MAC Address
- 48-bit physical address
- Format: XX:XX:XX:XX:XX:XX
- First 24 bits: Manufacturer ID

---

## 5. IP Addressing

### IPv4
- 32-bit address
- Format: X.X.X.X (0-255 each)
- Classes:
  - Class A: 1-126 (8 network)
  - Class B: 128-191 (16 network)
  - Class C: 192-223 (24 network)
  - Class D: 224-239 (Multicast)
  - Class E: 240-255 (Reserved)

### Special Addresses
- **127.0.0.1**: Loopback (localhost)
- **0.0.0.0**: Default route
- **255.255.255.255**: Broadcast
- **Private IPs**:
  - 10.0.0.0 - 10.255.255.255
  - 172.16.0.0 - 172.31.255.255
  - 192.168.0.0 - 192.168.255.255

### Subnetting
- **Subnet Mask**: Defines network and host portions
- **CIDR**: Classless Inter-Domain Routing (/24, /16, etc.)
- **VLSM**: Variable Length Subnet Mask

### IPv6
- 128-bit address
- Format: XXXX:XXXX:XXXX:XXXX:XXXX:XXXX:XXXX:XXXX

---

## 6. Network Protocols

### Application Layer
- **HTTP/HTTPS**: Web traffic
- **FTP**: File transfer
- **SMTP**: Email sending
- **POP3/IMAP**: Email receiving
- **DNS**: Domain name resolution
- **SSH**: Secure remote access
- **Telnet**: Remote access (insecure)

### Transport Layer
- **TCP**: Reliable, connection-oriented
  - Three-way handshake: SYN → SYN-ACK → ACK
  - Flow control, error correction
- **UDP**: Unreliable, connectionless
  - Fast, no overhead
  - Streaming, gaming, VoIP

### Network Layer
- **IP**: Addressing and routing
- **ICMP**: Error reporting (ping)
- **ARP**: IP to MAC resolution
- **RARP**: MAC to IP resolution

### Common Ports
| Port | Service |
|------|---------|
| 20/21 | FTP |
| 22 | SSH |
| 23 | Telnet |
| 25 | SMTP |
| 53 | DNS |
| 80 | HTTP |
| 110 | POP3 |
| 443 | HTTPS |

---

## 7. Network Security

### Threats
1. **Malware**: Viruses, worms, trojans, ransomware
2. **Phishing**: Fake emails/websites
3. **Man-in-the-Middle**: Intercepting communication
4. **Denial of Service (DoS)**: Flooding with traffic
5. **SQL Injection**: Database attack
6. **Cross-Site Scripting (XSS)**: Inject malicious scripts
7. **Brute Force**: Password guessing

### Security Measures
- **Firewall**: Filter traffic
- **Antivirus**: Detect malware
- **Encryption**: Protect data
- **Authentication**: Verify identity
- **VPN**: Secure connection over internet

### Firewall Types
- **Packet Filtering**: Check packet headers
- **Stateful Inspection**: Track connections
- **Application Gateway**: Filter by application
- **Proxy**: Intermediate server

---

## 8. Cryptography

### Types
1. **Symmetric (Secret Key)**: Same key for encrypt/decrypt
   - Algorithms: AES, DES, 3DES
2. **Asymmetric (Public Key)**: Public and private keys
   - Algorithms: RSA, DSA, ECC
3. **Hashing**: One-way function
   - Algorithms: MD5, SHA-1, SHA-256

### Digital Signature
- Sender's private key encrypts hash
- Receiver uses sender's public key to verify

### SSL/TLS
- Secure communication over internet
- Uses certificates
- HTTPS = HTTP + SSL

### VPN Protocols
- **PPTP**: Point-to-Point Tunneling
- **L2TP**: Layer 2 Tunneling
- **IPSec**: Secure IP communication
- **OpenVPN**: Open-source VPN

---

## Quick Reference

| Concept | Key Point |
|---------|-----------|
| OSI Model | 7 layers |
| TCP | Reliable, connection-oriented |
| UDP | Fast, connectionless |
| IP Address | Network device identifier |
| Subnet Mask | Defines network size |
| Firewall | Filters network traffic |
| Encryption | Protects data confidentiality |

---

*Last Updated: 2026*
*Subject: Computer Networking and Security*
