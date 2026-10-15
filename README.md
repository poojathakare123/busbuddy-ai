# 🚌 Bus Route Assistant AI Agent (BusBuddy AI)

> **CIE-3 Continuous Internal Evaluation Project**  
> **Course:** Computer Engineering — Generative AI, Large Language Models (LLMs), RAG & Agentic AI  
> **Marks Evaluation:** 20 Marks (5 Deliverables × 4 Marks)  
> **Target Transit Network:** Greenfield City Transit System  

🌐 **Direct Live Website (GitHub Pages):** [https://poojathakare123.github.io/busbuddy-ai/](https://poojathakare123.github.io/busbuddy-ai/)  
🐙 **GitHub Source Code:** [https://github.com/poojathakare123/busbuddy-ai](https://github.com/poojathakare123/busbuddy-ai)  

---

## 📌 Project Overview
**BusBuddy AI** is an intelligent, conversational public transit assistant designed to eliminate the friction of searching through complex, static bus timetables. Built with modern web technologies, an integrated conversational agent engine, and **Retrieval-Augmented Generation (RAG)** principles, the agent helps city commuters quickly find:
- Verified bus route numbers
- Boarding bays and destination stops
- Interactive intermediate stop timelines
- Estimated journey duration & standard fares (₹)
- Alternative route suggestions (Express vs. Local)
- Clear anti-hallucination guardrails (refuses imaginary routes and live GPS fabrication)

---

## 🌟 Key Features

1. **💬 Conversational RAG AI Agent:** Natural language processing with entity extraction for Origin & Destination, typo tolerance, and grounded retrieval.
2. **🛡️ Anti-Hallucination & Safety Guardrails:** Strict grounding against verified dataset records; temperature locked at `0.1`.
3. **❓ Interactive Incomplete Input Handling:** Automatically prompts for missing source or destination without terminating the session.
4. **🗺️ Interactive Route Knowledge Base:** Searchable and filterable catalog of all 10 Greenfield City routes (Express, Regular Local, AC Premium, Metro Feeder).
5. **🧪 CIE-3 Benchmark Test Runner:** Automated 1-click test suite executing all 6 evaluation criteria (TC-01 to TC-06) with 100% Pass validation.
6. **📄 Dynamic CIE-3 Report Hub:** Full 17-section academic submission report with live student details customization and 1-click PDF export.

---

## 📂 Project Structure

```text
busbuddy-ai/
├── index.html                  # Main Web Application & CIE-3 Suite
├── style.css                   # Modern design system (Dark mode glassmorphism)
├── app.js                      # RAG conversational agent engine & test runner
├── dataset.js                  # Greenfield City routes data & test case definitions
├── greenfield_bus_routes.csv   # Standalone transit dataset ready for RAG upload
├── REPORT.md                   # Full 17-section CIE-3 Academic Report
├── run.bat                     # 1-click double-click launcher for Windows
├── server.ps1                  # Native PowerShell HTTP server (localhost:5000)
└── README.md                   # Project documentation
```

---

## 🚀 How to Run Locally

### Option 1: Direct Browser Launch (Fastest)
Double-click `run.bat` or run in PowerShell:
```powershell
Start-Process index.html
```

### Option 2: Local Web Server (localhost:5000)
Run the native zero-dependency PowerShell server:
```powershell
powershell -ExecutionPolicy Bypass -File .\server.ps1
```
Open [http://localhost:5000](http://localhost:5000) in your browser.

---

## 🧪 Evaluation Test Battery (CIE-3)

| Test ID | Test Scenario | Expected Behavior | Status |
| :---: | :--- | :--- | :---: |
| **TC-01** | Direct Route Search | Recommends Bus 101 with duration, fare, and stops | **PASS** |
| **TC-02** | Missing Starting Point | Prompts user politely for boarding origin | **PASS** |
| **TC-03** | Missing Destination Point | Prompts user for destination stop | **PASS** |
| **TC-04** | Alternative Route Query | Compares Bus 305X (Express, 18 min) vs Bus 305 | **PASS** |
| **TC-05** | Unindexed Route Handling | Declares route unavailable; suggests transfer | **PASS** |
| **TC-06** | Live GPS Boundary Test | Refuses live GPS tracking truthfully; gives timetable | **PASS** |

---

## 📜 Academic Deliverables

- **Deliverable 1:** Problem Statement & 5 Measurable Objectives (4 Marks)
- **Deliverable 2:** AI Agent Design & Copy-Ready System Prompt (4 Marks)
- **Deliverable 3:** Working Agent Implementation & Architecture (4 Marks)
- **Deliverable 4:** Multi-Turn Sample Conversations & Test Cases (4 Marks)
- **Deliverable 5:** Innovation, Presentation & Final Report (4 Marks)

---

## 👤 Author & Submission
- **Student Name:** Pooja Sharma
- **Branch / Semester:** Computer Engineering / Semester VI
- **Academic Year:** 2025–2026
