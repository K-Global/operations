# EDDV — Hannover · Arrival Page

**EDDV / HAJ** · Langenhagen (Hannover), Germany · Europe
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [EDDV Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **09L/27R** (main runway); wind-dependent — **never expect the short/unlit 09C/27C** for a K Global type |
| Usual approach | ILS (CAT II/III per ATIS LVP remark) on 09L/27R; per-end minima not independently confirmed |
| Config logic | Wind-dependent |
| Transition level | TL **FL60**, or **FL70 when QNH < 1013 hPa**, ATC-assigned — verify no local override on current chart |
| LVP trigger | Winter North German lowland fog/low stratus; CAT II/III capability confirmed via ATIS remark — exact RVR trigger not confirmed 🟧 |
| Missed-approach driver | Traffic/airspace re-sequencing under Hannover Tower/Bremen Radar, not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed from a reachable public source — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Not confirmed — expect **09L/27R** to be the default assignment for scheduled traffic; confirm active configuration with ATC.
- **Transition to approach:** Not confirmed — expect radar vectoring to final under Hannover Director/Approach. 🟧
- **Speed / flow constraints on the STAR:** Standard ICAO/SERA speed limits below FL100 (250 KIAS); no local override confirmed. 🟧

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; no field-specific TOD note identified.
- **Speed control:** 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Not confirmed — pointers only, verify current chart. 🟧
- **Energy traps:** Confirming the assigned runway is the operative caution — do not assume 09L/27R without ATC confirmation, and never plan an approach to the short/unlit centre runway (09C/27C).

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 09L / 27R | ILS (CAT II/III per ATIS remark) | CAT II/III confirmed via ATIS LVP remark — per-end minima not confirmed 🟧 | verify current chart |
| 09R / 27L | Not confirmed 🟧 | — | verify current chart |
| 09C / 27C | Not applicable | Short/unlit — not a scheduled-jet runway, never an arrival option | n/a |

- **LVP triggers:** Winter North German lowland fog/low stratus is the routine trigger; CAT II/III capability on 09L/27R is the standing mitigation. Exact RVR trigger and per-end minima not confirmed this pass. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat North German Plain around Langenhagen, roughly 11 km north of Hannover city centre — no close-in high terrain relevant to any arrival path.
- **Specific threats:** 🟧 **Three parallel runways with a short, unlit centre runway (09C/27C)** — confirm the assigned/active runway explicitly; do not assume the centre runway is in use for anything other than light GA traffic.
- **Airspace / traffic:** 🟧 Field is under **Bremen ACC (EDWW)**, not Langen — a genuine OM C Airspace library gap (no dedicated Bremen FIR brief exists yet); see the general [Europe area brief](../../../../airspace/europe.md) for continental-corridor context only, it does not cover Bremen FIR.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat lowland) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around returns you to the three-runway layout under Hannover Tower/Bremen Radar — expect re-sequencing; confirm the assigned runway is not the short/unlit centre runway.
- **Go-around traps:** No terrain-specific trap identified; the operative concern is traffic/config awareness among the three runways.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 09L/27R ≈3,490 m/11,450 ft (derived: full length − 300 m displacement, **both ends displaced 984 ft/300 m**); 09R/27L 2,340 m/7,677 ft (no displacement published); 09C/27C ≈712 m/2,336 ft and ≈612 m/2,007 ft respectively (short/unlit, not scheduled-jet-usable). LDA values for 09L/27R and 09C/27C are **derived**, not independently sourced against a declared-distance table — treat as 🟧.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground on the day. 🟧
- **Runway-excursion watch:** 🟧 Displaced thresholds apply on the main and centre runways — always fly the correct LDA for the assigned end, not the physical runway length. Winter contamination (snow/slush/ice) is a seasonal factor at this latitude.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on the assigned runway, taxi in to Terminals A/B/C (or D in peak periods) per Ground assignment; VAMSYS mirror gives a planning taxi-in time of **10 min** `[VAMSYS mirror 2026-07-25]`.
- **Hot spots / tight taxiways:** 🟧 No specific documented hotspot found in reachable sources beyond the general three-runway/short-unlit-centre-runway awareness item — be explicit about avoiding any routing onto 09C/27C.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — all three main terminals reported capable of Boeing 747-class aircraft; exact stand allocation for our operation not confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Bremen Radar (Bremen ACC, EDWW) 131.325 or 132.33 — discrepancy, not resolved → Director 119.6 (H24 assumed) → Tower 120.405 (H24 assumed; a second tower-labelled frequency 120.18 in tier-4 data, purpose not confirmed) → Ground 121.955 (H24 assumed).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Bremen Radar (Bremen ACC, EDWW)** is the facility for Hannover's upper sector — **not Langen**. 🟧 No dedicated Bremen FIR/EDWW airspace brief exists in OM C; see the general [Europe area brief](../../../../airspace/europe.md) for continental-corridor context only, and [Briefing §3.2/§18](index.md) for the flagged library gap.

---

## 10. Gotchas

- **Three parallel runways — the centre runway (09C/27C) is short (2,548 ft) and unlit** — never expect it as an arrival option for a K Global type.
- **Field is under Bremen ACC (EDWW), not Langen** — do not assume Langen-area procedures or frequencies apply; no dedicated Bremen FIR brief exists yet in OM C (flagged gap).
- **Bremen Radar frequency discrepancy** (131.325 vs 132.33) — confirm on current chart before use.
- **No hard curfew, but a noise-certificate-based restriction applies broadly 2200/2300–0600 local** — do not assume unrestricted late-night arrivals without confirming current parameters.
- **Displaced thresholds on the main runway (both ends +984 ft/300 m)** — fly the correct LDA, not the physical runway length.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- Exact CAT II/III RVR trigger values and per-end minima.
- Rapid-exit taxiway/vacate detail.
- Bremen Radar frequency discrepancy (§9) — confirm the current value.
- **No dedicated Bremen FIR/EDWW airspace brief exists in OM C** — genuine library gap, see Briefing §18.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. current runway-in-use and CAT II/III serviceability), ATIS config/wind trend. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — Hannover Airport (EDDV) runways/frequencies — https://ourairports.com/airports/EDDV/pilot-info.html , https://ourairports.com/airports/EDDV/frequencies.html (retrieved 2026-07-25).
- VATSIM Germany Knowledgebase — EDDV Hannover Airport (Bremen FIR/EDWW) — https://knowledgebase.vatsim-germany.org/books/airports-bremen-fir-edww/chapter/eddv-hannover (retrieved 2026-07-25).
- VATSIM Germany Knowledgebase — Altimetry (Air Law) — https://knowledgebase.vatsim-germany.org/books/air-law/page/altimetry (retrieved 2026-07-25). *TA/TL figures.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Built from DFS eAIP-derived Briefing + live VAMSYS; new page, part of the fold to a 4-page pack. |
