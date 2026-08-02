# CYZF — Yellowknife · Arrival Page

**CYZF / YZF** · Yellowknife, Northwest Territories, Canada · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for X-Plane 11, not a chart. Companion to the [CYZF Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. CYZF is the primary western-Arctic **ETOPS/EDTO enroute alternate** and the ETP-exit alternate cited on the reference EDDF–KSFO OFP — brief this page for any real ETOPS/EDTO diversion planning. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **34** preferred — carries the ILS (IZF) + SSALR; **16** and **10/28** available, RNAV/GNSS/RNP only |
| Usual approach | **ILS Y/Z (IZF, 109.5)** on RWY 34; RNAV(GNSS) Z / RNAV(RNP) Y on 16/34; RNAV(RNP) on 10/28 |
| Config logic | Wind-driven; RWY 34's stronger approach aid (ILS+SSALR) is the default preference otherwise 🟧 |
| Transition level | By QNH; transition altitude **18,000 ft** — CYZF has H24 METAR/altimeter reporting, so local altimeter is expected for approach/landing (Briefing §10) 🟧 |
| LVP trigger | RVOP triggers per current AIRAC chart — not a classic CAT II/III LVP regime (Briefing §10) 🟧 |
| Missed-approach driver | **Terrain/obstacle** — lit rock outcrop close under the RWY 34 approach/missed-approach path (see §5) |

---

## 2. STAR / transition selection

- **STARs (names only):** Not published / verify — remote-north field; arrivals may be point-to-point/vectored off airway rather than named STARs (Briefing §10). 🟧
- **Selection by arrival direction / runway:** Not published / verify; RWY 34 is the default preference given its ILS+SSALR. 🟧
- **Transition to approach:** Expect procedural handoff from Edmonton Centre (non-radar, per the [Arctic area brief](../../../../airspace/arctic.md) §3) to the CYZF Tower/MF environment — no dedicated radar Approach identified (Briefing §3.2/§8).
- **Speed / flow constraints on the STAR:** 250 KIAS below 10,000 ft ASL (Canadian standard); no published local override.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Not published / verify — plan a conservative profile given the non-radar procedural environment outside Tower hours. 🟧
- **Speed control:** 250 KIAS below 10,000 ft ASL; CYZF's H24 altimeter/METAR reporting means local QNH is expected for the approach/landing phase (Briefing §10).
- **Altitude constraints:** Not published / verify. 🟧
- **Energy traps:** 🟥 The **lit rock outcrop obstacle close under the RWY 34 approach/missed-approach path** (§5) is the standout energy/terrain trap; a late runway change to 34 without having briefed the obstacle is a real risk. Extreme-cold cold-soak/altimetry corrections (Briefing §3.5) are a second energy-management consideration.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 34 | ILS Y / ILS Z (IZF, 109.5), RNAV (GNSS) Z, RNAV (RNP) Y | LOC reliable only within 10° either side of centreline (CFS caution); ILS CAT unconfirmed 🟧 | verify current chart |
| 16 | RNAV (GNSS) Z, RNAV (RNP) Y | No ILS this end 🟧 | verify current chart |
| 10/28 | RNAV (RNP) | Secondary runway; names unverified 🟧 | verify current chart |

- **LVP triggers:** RVOP is the governing low-vis regime (RWY 10/28 used as taxiway west of 16/34 during RVOP; access to 16/34 restricted to Twy A, H or G) rather than a classic CAT II/III LVP — verify current-AIRAC RVOP trigger conditions. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟥 Canadian Shield low-relief terrain overall (benign), but a **lit rock outcrop obstacle 3,445 ft north of THR 34, 410 ft left of centreline, ~984 ft long, top elevation ~696 ft ASL** sits directly under the RWY 34 approach/missed-approach path (cross-ref [Briefing §3.1](index.md)). No published MSA/obstacle chart reached in this build — treat the current-AIRAC AD chart's MSA ring/obstacle table as authoritative and brief the missed-approach climb explicitly before flying the RWY 34 approach.
- **Specific threats:** 🟥 **Extensive migratory bird activity Apr–Oct** (CFS CAUTION). 🟧 **BAK-12 arresting cable across RWY 16/34** — normally recessed, NOTAM issued when raised for military use. 🟧 **Drainage ditches** parallel RWY 16/34 (310 ft W / 260 ft E of centreline) — an excursion-catch hazard rather than an approach hazard per se, but relevant to any long-landing scenario.
- **Airspace / traffic:** 🟧 No dedicated radar Approach identified; Edmonton FIR is procedural (non-radar) per the [Arctic area brief](../../../../airspace/arctic.md) §3 — expect position reports, not vectors, outside MF/Tower coverage. Outside Tower hours (14–05Z) the field reverts to **MF procedures (118.5, 5 NM, ≤3,700 ft ASL)** with no local ATC (Briefing §3.2).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** 🟥 Fly and brief the **published missed-approach climb gradient for RWY 34** explicitly given the close-in lit rock outcrop obstacle (§5) — this is the field's primary terrain-driven MAP consideration.
- **Re-sequencing environment:** Outside Tower hours, a go-around drops the aircraft into a procedural, non-radar MF environment (118.5) with no local ATC — expect self-announced re-sequencing per CAR 602.98.
- **Go-around traps:** Cold-soak/engine-response considerations in extreme cold (Briefing §3.5), plus the bird-activity watch-item (Apr–Oct), are the two standout field-specific go-around considerations.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** Not published — no numeric TORA/TODA/ASDA/LDA table exists in the reachable CFS entry for either runway (Briefing §7/§18); physical length (7,503 ft on 16/34) is generous at this elevation but braking distance is not independently confirmed. 🟧
- **Braking / vacate:** Runway Condition Reporting (CRFI) and winter maintenance only guaranteed **1100–0754Z, Oct 15–Apr 15**, with O/T 2-hr PN outside that window (Briefing §3.3) — confirm current NOTAM/braking-action before any winter landing. RWY 10/28 has documented rough-pavement sections ~2,400–2,495 ft beyond THR 10, 39 ft N of centreline.
- **Runway-excursion watch:** 🟧 Drainage ditches parallel RWY 16/34 (310 ft W / 260 ft E) are an excursion-catch hazard if the aircraft departs the paved surface; the BAK-12 arresting cable across 16/34 is normally recessed but check NOTAMs.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Taxiways A–K; **D, E, F, G, K are uncontrolled** (Briefing §13). Access to RWY 16/34 restricted to Twy A, H or G during RVOP; towing requires ATC/FSS clearance. VAMSYS carries no taxi-in timing for this field — **not in VAMSYS** (Briefing §1). 🟧
- **Hot spots / tight taxiways:** Not published / verify. 🟧
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — transient parking is limited, **PPR required** (867-445-5518); treat any widebody arrival's parking as unconfirmed until coordinated ahead of time.

---

## 9. Arrival frequency sequence

- **Sequence:** **Edmonton Centre 135.8 (PAL, H24) → Yellowknife Tower 118.5/340.8 (emergency) (14–05Z) → Yellowknife Ground 121.9 (14–05Z).** Outside Tower/Ground hours, use **Yellowknife Radio (MF) 118.5** (05–14Z, 5 NM/≤3,700 ft ASL, CAR 602.98). (Frequencies per [Briefing §8](index.md).)
- **Approach/Departure control:** No dedicated radar Approach identified — treat as procedural; Edmonton FIR (non-radar) per the [Arctic area brief](../../../../airspace/arctic.md) governs en route handoff. 🟧

---

## 10. Gotchas

- **Lit rock outcrop obstacle close under the RWY 34 approach/missed-approach path** — brief the published missed-approach climb explicitly; this is the single most field-specific arrival hazard at CYZF.
- **BAK-12 arresting cable across RWY 16/34** — check NOTAMs; may be raised for military use.
- **Drainage ditches close to RWY 16/34 centreline** — an excursion-catch hazard, not merely a soft-shoulder.
- **RVOP restricts RWY 16/34 access to Twy A, H or G**, with RWY 10/28 used as a taxiway — brief before any low-vis arrival.
- **No local ATC outside 14–05Z** — MF procedures apply; expect self-announced, procedural sequencing.
- **Extensive migratory bird activity Apr–Oct.**
- **Customs is GA-only, ≤15 pax** — a full airline diversion cannot clear customs here without special arrangement (Briefing §17); plan as a technical/fuel stop for that purpose.
- **RFF CAT 6 may be below requirement for a wide-body** — verify against fleet before filing CYZF as a planned (not contingency-only) alternate (Briefing §2/§17).

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- ILS IZF category (CAT I assumed, unconfirmed).
- Numeric LDA/declared distances for both runways — genuinely absent from the CFS AD entry (Briefing §7/§18).
- STAR names (if any exist) and exact RVOP RVR/visibility trigger values.
- Current status of CYZF on Nav Canada's cold-temperature restricted-altitude list.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (BAK-12 cable status, RWY 10/28 rough-pavement, RVOP activation, ILS IZF serviceability, GPS/RAIM, bird-activity), space-weather (HF/GNSS) advisories — NOAA SWPC. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **Canada Flight Supplement (Nav Canada), AIRAC cycle effective 21 MAR 2024** — https://imageserver.fltplan.com/afd/Canada/21MAR2024/CYZF-2574.PDF (retrieved 2026-07-25). See [CYZF Briefing](index.md) §Sources for the full source list.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from NAV CANADA + Briefing; folded to 4-page pack. |
