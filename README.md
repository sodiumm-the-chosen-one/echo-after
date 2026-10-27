# ECHO//AFTER — THE CAMPUS THAT REMEMBERS
### Paranormal Detective Game Powered by Gemma 4 // Halloween Hackathon Edition
> *"Every witness remembers something. Every memory leaves something out."*

**ECHO//AFTER** is a complete, polished, playable paranormal detective mystery game built for the **Best Use of Gemma 4** hackathon track. Set within the gothic research campus of the fictional **Blackthorn Institute**, players step into the shoes of a specialized paranormal investigator assigned to unravel unexplained incidents where physical laws, acoustic frequencies, and human testimonies rupture.

Unlike generic chatbot wrappers, ECHO//AFTER bridges **natural, emergent AI reasoning** with an **airtight, deterministic deduction game engine**. Gemma powers in-character witness cross-examinations, forensic clue analysis, cross-evidence contradiction detection, progressive hint guidance, and player theory evaluation, while a confidential server-side state machine maintains canonical truth, airtight timelines, and fair mystery solutions.

---

## 🏛️ All Four Playable Investigations

| Docket ID | Case Title | Setting & Scene | Witnesses | Clues | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **CASE 001** | **The 11:47 Incident** | Sub-Level 3 Physics & Acoustic Resonance Lab | Officer Arthur Pendelton, Maya Lin, Julian Thorne | 8 Unique Clues | Fully Playable |
| **CASE 002** | **The Book That Wasn't There** | Radcliffe Memorial Library Restricted Stacks | Chief Archivist Albright, Samuel Ward, Nora Finch | 8 Unique Clues | Fully Playable |
| **CASE 003** | **The Empty Seat** | Thorne Great Auditorium & Acoustic Plenum | Julian Hayes, Dennis Croft, Chloe Ross | 8 Unique Clues | Fully Playable |
| **CASE 004** | **Room Zero** | North Wing Sub-Basement Restricted Corridor | Marcus Briggs, Dr. Alistair Vane, Tara Sethi | 8 Unique Clues | Fully Playable |

- **Sequential Progression**: Case 001 begins available. Solving Case 001 unlocks Case 002; solving Case 002 unlocks Case 003; solving Case 003 unlocks Case 004.
- **Judge Review / Free Investigation Mode**: A one-click toggle on the case docket allows hackathon judges to immediately unlock and evaluate all 4 cases without completing them sequentially.

---

## 🔬 Visual & Spatial Design: No Random Box Rooms

The investigation workspace features distinct, authentic environments:
1. **Case 001**: Sub-Level 3 Physics Lab — Perspective laboratory workbench, Cabinet #4, stopped antique wall clock, industrial breaker panel, CRT Terminal TERM-04, Maya Lin's desk, and maintenance locker #12.
2. **Case 002**: Radcliffe Restricted Archives — Gothic stone vault arches, Shelf 14-C with a false dummy encyclopedia compartment, paper pulping bin, microfilm reader station, conservator's workbench, and spiral iron stairs.
3. **Case 003**: Thorne Great Auditorium — Gothic proscenium stage, Center Stage music stand with amber rosin dust, Seat A-14 in the orchestra pit with black velvet rose, Otari reel-to-reel deck in the sound booth, and ceiling HVAC acoustic plenum horn.
4. **Case 004**: North Wing Sub-Basement Corridor — Narrow brick corridor, revolving 1,200 lb counterbalance brick wall on roller bearings, Room 9 brass plaque with concealed rotary potentiometer, Junction Box #9 2,400-lb magnetic shear lock, and service elevator mezzanine switch.

Every evidence item opens a distinct, high-resolution forensic visual asset (photographs, CRT logs, thermal scans, cyanotype blueprints, spectrograms, or typed declarations) with legible typography.

---

## ⚡ Gemma AI Features & Capabilities

1. **Dynamic Witness Interrogation**: Ask questions in natural language. Gemma responds in character, constrained by the witness's canonical knowledge boundary, emotional pressure points, and secret motives.
2. **Forensic Evidence Analysis**: Analyze any secured clue to identify physical facts, acoustic resonance anomalies, and discrepancies with witness testimonies.
3. **Progressive Contextual Hints**:
   - **Tier 1 (Direction)**: A subtle, atmospheric directional nudge.
   - **Tier 2 (Correlation)**: Points toward a specific contradiction or unexamined evidence item.
   - **Tier 3 (Deep Analysis)**: Explains the forensic relationship between key clues without spoiling the verdict.
4. **Detective Pinboard Correlation**: Connect any two evidence cards on the pinboard with dynamic crimson red string connections. Gemma evaluates the relationship as `SUPPORTS`, `CONTRADICTS`, or `CORRELATES`.
5. **Timeline Chronology Verification**: Reorder timeline events using interactive controls and test the sequence against canonical forensic records.
6. **Theory Indictment & Scoring Matrix**: Accuse a suspect, specify motive, method, and corroborating evidence, and write a deductive synthesis. The engine assigns an objective 0–100 score, letter rank (S/A/B/C), and provides personalized constructive feedback.
7. **Honest Model Status**:
   - **LIVE GEMMA**: Displayed when a verified Google AI Studio or OpenAI-compatible endpoint is configured and active.
   - **DEMO MODE**: When no API key is provided, the application runs on the deterministic Paranormal Deduction Matrix with 100% offline consistency, rich case data, and zero latency.

---

## 🚀 Quickstart & Setup

### 1. Prerequisites
- Node.js v18+ (tested on Node v24)
- npm

### 2. Configure Environment (Optional for Live Gemma)
Create a `.env` file in the project root:
```env
PORT=3001
GEMMA_API_KEY=your_google_ai_studio_key_here
GEMMA_MODEL=gemma-2-9b-it
```
> **Note**: If `GEMMA_API_KEY` is omitted, the application runs in **DEMO MODE**, providing full deterministic responses for all 4 cases with zero setup required.

### 3. Run Production Mode (Recommended)
Builds the TypeScript application and serves both backend API and frontend:
```bash
npm run build
npm start
```
Open **[http://localhost:3001](http://localhost:3001)** in your browser.

### 4. Run Development Mode
Starts both the Express API server and Vite client concurrently:
```bash
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser.

### 5. Automated Verification Test Suite
Execute the comprehensive end-to-end multi-case test suite:
```bash
npm test
```
Tests status health, all 4 cases, safe data serialization, evidence analysis, witness interrogation, progressive hints, clue comparison, and final verdict scoring.

---

## 🎵 Procedural Web Audio Engine
The audio architecture utilizes the Web Audio API with zero external MP3 dependencies:
- Ambient low-frequency drone (47Hz resonance tone)
- Click, type, inspect, and clue discovery sound cues
- Contradiction exposure audio stingers
- Independent volume controls for Ambience and SFX, with persistent mute toggle
- Follows browser autoplay best practices (audio engages only after deliberate user interaction on the opening screen).
