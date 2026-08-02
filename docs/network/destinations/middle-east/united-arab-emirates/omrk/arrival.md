# OMRK — Ras Al Khaimah Intl · Arrival Page

**OMRK / RKT** · Ras Al Khaimah, United Arab Emirates · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [OMRK Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name/type only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **16 or 34** — single runway, wind-driven, no crosswind alternative |
| Usual approach | **ILS CAT I on RWY 34**; non-precision only on RWY 16 (type not confirmed) 🟧 |
| Config logic | Wind-only; no crosswind-runway alternative exists at this field |
| Transition level | Not published / verify 🟧 |
| LVP trigger | 🟥 **No CAT II/III capability published** — RWY 34 CAT I is the field's low-visibility ceiling |
| Missed-approach driver | **Terrain** (Hajar Mountains, close east) rather than traffic density |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Not formally published; single-runway field, wind-driven selection between 16 and 34.
- **Transition to approach:** Handoff comes from **Emirates Area Control (OMAE)** into **Ras Al Khaimah Approach/Radar** — radar vectoring is only available **Sun–Thu 0800–1400 local** (extendable by arrangement); outside those hours, including the Fri–Sat weekend, an **Approach Procedural service** applies — expect a self-positioning/procedural technique rather than vectors. See the [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md).
- **Speed / flow constraints on the STAR:** Not confirmed — pointer only, verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR/procedural altitude gate.
- **Speed control:** 250 KIAS below FL100 (ICAO norm) — confirm current chart.
- **Altitude constraints:** Not confirmed — pointer only, fly the charted altitudes.
- **Energy traps:** No crosswind-runway alternative exists — a late wind shift forcing a runway-direction change (16↔34) has no fallback option; don't let this compress the approach. Outside the Sun–Thu radar window, a procedural (non-vectored) approach may require earlier energy management than a radar-vectored arrival.

---

## 4. Approach selection by runway

*Names/types only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 34 | ILS CAT I (IRK/GP) | **CAT I only** — no CAT II/III 🟥 | verify current chart |
| 16 | Non-precision (type not confirmed) 🟧 | No precision capability on this runway | verify current chart |

- **LVP triggers:** No CAT II/III capability is published at this field — an event below CAT I minima on RWY 34, or below the applicable non-precision minima on RWY 16, is a **diversion trigger**, not a lower-minima option.

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟥 The **Hajar Mountains** (Jebel Jais, ~1,934 m/6,345 ft, the UAE's highest peak) lie close east of the field — see [Briefing §3.1](index.md). The field's own VOR/DME (RAV) is published as **unusable below stated altitudes in three sectors** toward the east/southeast for this reason — do not rely on it for terrain clearance there; fly the MSA and current-chart terrain data.
- **Specific threats:** Single runway — no closely-spaced-parallel or offset/converging-approach consideration. Outside the Sun–Thu 0800–1400-local radar window, a **procedural (non-radar) approach environment** applies — brief accordingly.
- **Airspace / traffic:** 🟩 Comparatively light — OMRK sits inside the Emirates (OMAE) FIR but away from the dense Dubai/Abu Dhabi terminal core. Cross-ref the [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) for the wider FIR picture, including its live conflict-zone/GNSS-jamming advisory (re-check at planning).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** The Hajar Mountains to the east are the operative missed-approach concern, particularly off RWY 34 — fly the published missed approach precisely and do not shorten a turn toward high ground. Verify climb-gradient/turn constraints on the current chart.
- **Re-sequencing environment:** Traffic density is low; the main re-sequencing consideration outside the Sun–Thu radar window is procedural (non-vectored) positioning for a second attempt.
- **Go-around traps:** Terrain awareness on the miss is the dominant trap at this field — not a traffic/config trap.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 3,760 m on both RWY 16 and RWY 34 — no displaced threshold either direction; ample for typical narrowbody and most widebody arrival weights generically (no K Global type currently validated here).
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Tower on the day. 🟧
- **Runway-excursion watch:** 🟧 Minor runway slope is published (RWY 16 rising +0.24%, RWY 34 descending −0.24%) — non-limiting but worth including in a landing-distance check; no contamination/braking-action data confirmed (hot, largely dry climate).

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on the assigned runway, taxi via **Kilo, Lima, Mike, Loop A, Loop B, Sierra** or **November** (Briefing §7/§13) to the assigned stand (1–19); confirm exact routing with Tower on the day — no separate aircraft Ground frequency is published (121.600 is vehicles only).
- **Hot spots / tight taxiways:** None independently confirmed in reachable sources — confirm current chart. 🟧
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — Stands 4–19 are the larger-aircraft cluster (concrete, PCN 120/F/B/W/T); Stands 1–3 are smaller (asphalt, PCN 58/F/B/W/U).

---

## 9. Arrival frequency sequence

- **Sequence:** **Emirates Area Control (OMAE)** hand-off → **Ras Al Khaimah Approach/Radar 124.000** (Radar service Sun–Thu 0800–1400 local, extendable; **Approach Procedural service outside those hours**, including the Fri–Sat weekend) → **Ras Al Khaimah Tower 118.250** (also handles taxi-in guidance — no separate aircraft Ground frequency). Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Ras Al Khaimah Approach/Radar** is the terminal facility; **Emirates Area Control (OMAE)** hands off en route inbound — see [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md). 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **RWY 34 is the only precision-approach runway** — a low-ceiling arrival is effectively RWY-34-only, subject to tailwind limits.
- **No CAT II/III capability at this field** — an event below CAT I minima (or the applicable RWY 16 non-precision minima) means diversion, not a lower-minima option.
- **VOR/DME (RAV) is unusable below stated altitudes in three sectors east/southeast of the field** — don't lean on it for terrain clearance there.
- **Approach/Radar service is published Sun–Thu 0800–1400 local only** (extendable) — expect procedural technique outside these hours, including the entire Fri–Sat weekend.
- **No aircraft Ground frequency** — taxi-in guidance comes from Tower, not a separate ground position.
- **The Hajar Mountains lie close east of the field** — fly the published missed approach precisely; don't cut a turn early toward high ground.
- **No crosswind-runway alternative** — a late wind shift forcing a runway change (16↔34) has no fallback; watch the wind trend on approach.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and RWY 16 non-precision approach procedure name/type.
- Exact CAT I minima for RWY 34 and non-precision minima for RWY 16.
- Transition level.
- Rapid-exit taxiway/vacate detail.
- Hot spots/tight-taxiway detail on the taxiway network.
- VATSIM cross-check — no VATSIM vACC/division-published airport briefing or SOP for OMRK was located this pass.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting — esp. the RAV VOR/DME sector restriction), ATIS config/wind trend, current radar-vs-procedural control status, Emirates FIR conflict-zone/GNSS-jamming advisories. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- Ras Al Khaimah International Airport (airport operator) — "Operating Rules and Procedures" (runway/declared-distance data, navaids, ATS communications, radar-hours policy) — https://www.rakairport.com/operations.html (retrieved 2026-07-25).
- GCAA — eAIP AD 2 OMRK (current AIRAC cycle) — https://www.gcaa.gov.ae/en/ais/AIPHtmlFiles/AIP/Current/AIRACs/2026-P02/html/eAIP/AD-2.OMRK-en-GB.html (identified 2026-07-26; page renders via a JavaScript frameset not reachable via a standard fetch — content not independently extracted this pass).
- OurAirports — https://ourairports.com/airports/OMRK/ (retrieved 2026-07-25). *Cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
