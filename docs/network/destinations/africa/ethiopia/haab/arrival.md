# HAAB — Addis Ababa Bole International · Arrival Page

**HAAB / ADD** · Addis Ababa, Ethiopia (Bole, SE of city centre) · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional (primary eAIP verification pending)

> **Read-me:** Tactical arrival aid for X-Plane 11, not a chart. Companion to the [HAAB Briefing](index.md), Dispatch and Departure pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Ethiopia publishes no open eAIP — static data here is AIP-derived (IVAO OPMAN) or secondary-sourced and treated as **provisional**. Live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **07R/25L** preferred (stronger pad, ILS to 25L); **07L/25R** secondary |
| Usual approach | ILS RWY 25L (IAA); RNAV/VOR/NDB on other runway ends |
| Config logic | Wind/traffic driven |
| Transition level | By QNH — not independently confirmed 🟧 |
| LVP trigger | Not confirmed — verify 🟧 |
| Missed-approach driver | **Terrain** — Entoto Mts N of the city, broader Ethiopian highlands |

---

## 2. STAR / transition selection

- **STARs (names only):** ANTEX, BEREL, BETIR, KATOK, NADAX, POKEG 1W — active per recent NOTAM; verify current AIRAC. **Withdrawn arrivals — do not use:** LABLA, MARCO, RANSO, ASOLE, MIWAS, BENDO, SHALA, EGNAK, KOFTA, GUDER. 🟧
- **Selection by arrival direction / runway:** Not confirmed — verify chart. 🟧
- **Transition to approach:** Not confirmed — verify chart. 🟧
- **Speed / flow constraints on the STAR:** 250 KIAS below FL100 (standard); STAR-specific speed gates not confirmed. 🟧

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Not confirmed — verify with performance tool. 🟧
- **Speed control:** 250 KIAS below FL100; observe charted STAR/IAF caps.
- **Altitude constraints:** Not confirmed — verify chart; terrain-driven step-downs expected given the surrounding high ground. 🟥
- **Energy traps:** High terrain proximity plus high density altitude raises true airspeed/groundspeed on approach — avoid a high, fast, close-in energy state.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 25L | ILS (IAA 111.500) | CAT unverified (likely CAT I) 🟧 | verify current AIRAC |
| 07R | RNAV, VOR/NDB | — | verify current AIRAC |
| 07L / 25R | RNAV, VOR/NDB | — | verify current AIRAC |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** Entoto Mountains (~3,200 m / ~10,500 ft) north of the city; broader Ethiopian highlands exceed 4,000 m — cross-ref Briefing §3.1. 🟥
- **Specific threats:** High density altitude raises approach groundspeed; kiremt-season (Jun–mid-Sep) morning fog/low cloud has repeatedly forced diversions — have a live diversion plan.
- **Airspace / traffic:** Radar (Bole Approach); Bole CTR Class C to 14,000 ft; TMA Class A FL145–FL240 — cross-ref Briefing §3.2 and [Africa — General Airspace Notes](../../../../airspace/africa.md).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Brief the published missed-approach procedure and climb gradient before every approach — high terrain surrounds the field on multiple bearings.
- **Re-sequencing environment:** Major hub, two parallel runways under radar — expect vectoring/holding during re-sequencing.
- **Go-around traps:** The climb-gradient / density-altitude combination is the critical item on a go-around, not configuration alone.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 07L 3,375 m; 25R 3,325 m; 07R/25L 3,440 m — all reduced from TORA by displaced thresholds (Briefing §7); fly the correct (displaced) aiming point.
- **Braking / vacate:** Rapid-exit taxiway locations not confirmed — verify. 🟧
- **Runway-excursion watch:** High density altitude raises touchdown groundspeed, extending braking distance; declared distances are provisional — verify per direction. 🟧

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not captured — verify with Ground/Tower on the day. 🟧
- **Hot spots / tight taxiways:** Not captured — verify. 🟧
- **Stand/gate notes:** Cross-ref [Dispatch §3](dispatch.md) — stand/gate detail not confirmed this pass.

---

## 9. Arrival frequency sequence

- **Sequence:** Bole Approach (119.700) → Bole Tower (118.100) → Bole Ground (121.900) — per Briefing §8.
- **Approach/Departure control:** Bole Approach (radar); sector-specific frequencies not confirmed — verify current chart. 🟧

---

## 10. Gotchas

- Morning fog/low cloud in the kiremt season (Jun–mid-Sep) has repeatedly forced diversions — check current wx closely and hold a firm diversion plan.
- All runway ends have **displaced thresholds** — do not aim for the physical threshold.
- High density altitude increases approach groundspeed and stabilised-approach energy-management difficulty on a long-body type.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- STAR-to-approach transitions, STAR speed gates, transition level.
- LVP trigger conditions; braking-action/rapid-exit taxiway detail.
- Taxi-in routing and hot spots; sector-specific approach/departure frequencies.
- Current SID/STAR validity (procedures actively changing by NOTAM).

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config, ground-delay/flow status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **Ethiopia ECAA AIP, AD 2.HAAB** — subscription-only; not publicly reachable. Primary verification PENDING.
- IVAO Ethiopia FIR OPMAN, cycle 09/2023 (AIP-derived sim doc) — ivao.aero division library (retrieved 2026-06-26). *Secondary; re-verify against current AIP/AIRAC.*
- OurAirports — https://ourairports.com/airports/HAAB/ (retrieved 2026-06-26).
- SkyVector — https://skyvector.com/airport/HAAB (retrieved 2026-06-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
