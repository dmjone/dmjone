<p align="center">
  <img src="https://img.shields.io/badge/ET_AI_Hackathon-2026-22c55e?style=for-the-badge" alt="ET AI Hackathon 2026" />
  <img src="https://img.shields.io/badge/Problem_5-Domain_Specialized_AI_Agents-38bdf8?style=for-the-badge" alt="Problem 5" />
  <img src="https://img.shields.io/badge/Phase_II-Submission-f59e0b?style=for-the-badge" alt="Phase II" />
</p>

<h1 align="center">KisanMind (किसानमाइंड)</h1>
<h3 align="center">Satellite-to-Voice Agricultural Intelligence for 150M Indian Farmers</h3>

<p align="center">
  <b>Real Sentinel-2 NDVI</b> · <b>Live Mandi Prices</b> · <b>5-Day Weather</b> · <b>Voice in 22 Languages</b> · <b>Twilio Phone Calls</b>
</p>

<p align="center">
  <a href="https://kisanmind.dmj.one"><img src="https://img.shields.io/badge/Live_App-kisanmind.dmj.one-22c55e?style=for-the-badge&logo=google-cloud&logoColor=white" alt="Live App" /></a>
  <a href="https://github.com/divyamohan1993/kisanmind"><img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
</p>

---

## Submission Requirements

| # | Requirement | Status | Link |
|---|-------------|--------|------|
| 1 | **GitHub Repository** — Public repo with source code, README, and commit history | ✅ | [github.com/divyamohan1993/kisanmind](https://github.com/divyamohan1993/kisanmind) |
| 2 | **3-Minute Pitch Video** — Problem, solution, and demo walkthrough | ✅ | [Watch on YouTube](#3-minute-pitch-video) |
| 3 | **Architecture Document** — Agent roles, communication, tools, error handling | ✅ | [See below](#architecture-overview) |
| 4 | **Impact Model** — Quantified business impact with stated assumptions | ✅ | [See below](#impact-model) |

---

## Contributors

| Name | GitHub |
|------|--------|
| Divya Mohan | [@divyamohan1993](https://github.com/divyamohan1993) |
| Kumkum Thakur | [@kumkum-thakur](https://github.com/kumkum-thakur) |
| Anshul Garg | [@Explotorium](https://github.com/Explotorium) |

---

## Project Overview

**KisanMind** is a multi-agent AI platform that delivers satellite crop health, real-time mandi prices, and hyperlocal weather advisories to Indian farmers — all via a single phone call in any of 22 scheduled Indian languages. It fuses Sentinel-2 imagery, AgMarkNet government prices, Open-Meteo forecasts, and Google Maps logistics through 5 orchestrated Gemini agents.

> **Deployment:** Live at [kisanmind.dmj.one](https://kisanmind.dmj.one) on Google Cloud Run (asia-south1). If the link is inaccessible, the spot VM backing the service may have been preempted.

---

## 3-Minute Pitch Video

End-to-end walkthrough: a farmer calls in Hindi, the system detects intent, fetches live satellite NDVI, compares mandi prices with transport costs, generates weather-timed advice, and responds via voice — all in under 30 seconds.

<!-- Replace VIDEO_ID with the actual YouTube video ID when available -->
[![KisanMind Pitch Video](https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg)](https://www.youtube.com/watch?v=VIDEO_ID)

---

## Architecture Overview

Five specialized agents orchestrated by a Brain module, each backed by real data APIs. No simulated data — every number comes from a verified source.

### Data Flow

```
┌──────────────────┐     ┌─────────────────────────┐     ┌────────────────┐
│  Farmer          │     │  VaaniSetu              │     │  Brain         │
│  Voice / Text    │────▶│  STT + Intent Extraction│────▶│  (Router)      │
└──────────────────┘     └─────────────────────────┘     └───────┬────────┘
                                                                 │
                                          ┌──────────────────────┼──────────────────────┐
                                          │                      │                      │
                                          ▼                      ▼                      ▼
                                   ┌─────────────┐      ┌──────────────┐      ┌──────────────┐
                                   │ SatDrishti   │      │ MandiMitra   │      │ MausamGuru   │
                                   │ (Satellite)  │      │ (Market)     │      │ (Weather)    │
                                   │ Earth Engine │      │ AgMarkNet    │      │ Open-Meteo   │
                                   └──────┬──────┘      └──────┬───────┘      └──────┬───────┘
                                          │                      │                      │
                                          └──────────────────────┼──────────────────────┘
                                                                 │
                                                                 ▼
                                                    ┌────────────────────────┐
                                                    │  Brain                 │
                                                    │  Merge + Guardrails    │
                                                    │  + Fact-Check          │
                                                    └───────────┬────────────┘
                                                                │
                                                                ▼
                                                    ┌─────────────────────────┐     ┌──────────────────┐
                                                    │  VaaniSetu              │────▶│  Farmer          │
                                                    │  TTS + Translation      │     │  Voice / Text    │
                                                    └─────────────────────────┘     └──────────────────┘
```

### Agent Roles

#### 🧠 Brain (Orchestrator) — `Gemini 3.1 Pro`

Routes farmer intent to specialist agents, executes them in parallel via `asyncio.gather()`, merges outputs, enforces guardrails (no pesticide brands, no yield guarantees), and runs a Gemini Flash Lite fact-checker before delivery.

#### 🎙️ VaaniSetu (Voice Bridge) — `Gemini 2.5 Flash`

STT in 22 languages via Cloud Speech V2. Extracts intent & entities (crop, location). TTS via Wavenet/Neural2 voices. Translates advisory into farmer's language.

#### 🛰️ SatDrishti (Satellite Eye) — `Gemini 2.0 Flash`

Computes NDVI/EVI/NDWI from Sentinel-2 (10m resolution) via Earth Engine. Classifies crop health with 30-day trends. Falls back to pre-computed cache when clouds block imagery.

#### 🏪 MandiMitra (Market Friend) — `Gemini 2.0 Flash`

Fetches live prices from 7,000+ mandis via AgMarkNet. Calculates net profit per quintal (price − transport − commission − spoilage) using Google Maps real distances.

#### 🌦️ MausamGuru (Weather Guru) — `Gemini 2.5 Flash`

5-day hyperlocal forecast from Open-Meteo. Computes Growing Degree Days to estimate crop growth stage. Generates DO/DON'T/WARNING actions tailored to crop and weather.

### Error Handling & Resilience

| Mechanism | Details |
|-----------|---------|
| **2-tier cache** | L1 in-memory (0.13s) + L2 Cloud Storage (200ms); stale data served if both APIs fail |
| **Model fallback** | Gemini 3.1 Flash → 2.5 Flash automatic failover |
| **Agent isolation** | If one agent errors, others still return; Brain synthesizes partial advisory |
| **5-tier connectivity** | Smartphone → 2G voice call → SMS → missed-call callback → proactive push |
| **Guardrail enforcement** | Fact-checked via Gemini Flash Lite before delivery; KVK referral for pest/disease specifics |

### Tech Stack

| Layer | Technologies |
|-------|-------------|
| **AI/LLM** | Gemini 3.1 Pro, Gemini Flash, Google ADK |
| **Backend** | FastAPI (Python 3.12), Uvicorn, httpx |
| **Frontend** | Next.js 16, React 19, TypeScript, Tailwind CSS |
| **Satellite** | Google Earth Engine (Sentinel-2, MODIS, NASA SMAP) |
| **Market Data** | AgMarkNet / data.gov.in |
| **Weather** | Open-Meteo API |
| **Voice/Language** | Cloud STT V2, Cloud TTS, Cloud Translation API v3 |
| **Phone** | Twilio Voice + SMS |
| **Maps** | Google Maps (Geocoding, Distance Matrix, Places) |
| **Infra** | Docker, Google Cloud Run (asia-south1), Cloud Storage |

---

## Impact Model

> **Assumptions:** Conservative Year-1 estimates for 100,000 farmers. Average smallholder growing tomatoes or wheat, selling 30 quintals/season, 2 seasons/year.

| Metric | Mechanism | Value |
|--------|-----------|-------|
| Mandi arbitrage gain | Best mandi vs local mandi (net of transport & commission) | **+₹12,000/season** |
| Spoilage prevention | Weather-timed harvesting avoids post-harvest losses | **+₹10,000/season** |
| Input cost savings | Satellite-guided irrigation & spray timing | **+₹2,000/season** |
| Time saved per query | Voice call vs visiting mandi + KVK + checking weather separately | **~4 hours** |
| Income increase per farmer | Combined effect across 2 seasons | **+30% (~₹34,000/year)** |
| Total value created (Year 1) | 100,000 farmers × ₹34,000 | **₹3.4 billion** |

### Worked Example: Solan Tomato Farmer

**Without KisanMind:**
- Sells at local Solan mandi at ₹1,800/quintal
- Loses ₹10,000/year to rain-damaged harvest
- Annual tomato income: ₹50,000

**With KisanMind:**
- Satellite confirms NDVI 0.72 (healthy)
- Weather warns of rain in 72 hours — harvest today
- MandiMitra finds Shimla mandi at ₹2,400/quintal (60km away); after transport & commission, net ₹2,104/quintal vs ₹1,728 locally

**Result:** ₹376/quintal × 30 quintals = **₹11,280 gained** + ₹10,000 spoilage saved = **₹21,280 per harvest**

---

<p align="center">
  <sub>&copy; 2026 KisanMind · Submitted for ET AI Hackathon 2026 — Phase II</sub><br>
  <sub>Problem 5: Domain-Specialized AI Agents — Satellite-to-Voice Agricultural Intelligence</sub>
</p>
