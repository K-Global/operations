# OBBI — Bahrain Intl · Arrival Page

**OBBI / BAH** · Manama / Muharraq Island, Bahrain · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for X-Plane 11, not a chart. Companion to the [OBBI Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **12L or 30R** (wind-dependent) — 🟥 **12R/30L currently unavailable per the sourced AIP cycle, verify current status** |
| Usual approach | **ILS CAT II** on the assigned end of the main pair; VOR/DME and RNP also charted |
| Config logic | Wind-driven; both ends equally equipped |
| Transition level | By QNH; transition altitude 13,000 ft |
| LVP trigger | RVR ≤ 1,000 m or manoeuvring area not fully visible from the tower; **no landing permitted below 350 m RVR** (hard floor) 🟧 |
| Missed-approach driver | Airspace/traffic and the man-made obstacle set (not terrain — flat reclaimed island) |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** **KOBOK 1**, **LADNA 1**, **ORDIG 1** (RNAV 1, RWY 12L-30R), plus a published **Radio Communication Failure STAR**.
- **Selection by arrival direction / runway:** Wind-driven between the 12L and 30R configuration; both ends carry ILS CAT II and equivalent RNAV-STAR structure to the same runway pair. RWY 12R/30L (🟥 currently unavailable) has no equivalent named-STAR structure found.
- **Transition to approach:** Expect an RNAV-STAR-to-ILS transition with Bahrain Approach vectors onto final; verify the charted transition for the assigned STAR/runway.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify current chart; 250 KIAS below FL100 (ICAO norm) applies generically. 🟧

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning to meet the first STAR altitude gate; verify current chart.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 — confirm current chart. 🟧
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** Late runway/config changes (12↔30 ahead of a wind shift) and re-sequencing during a shamal-dust/LVP event are the main energy traps at this field; the compact 10 NM Class D CTR leaves comparatively little room to absorb a late change.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 12L | ILS (IBIB); VOR/DME; RNP | **CAT II** 🟩 — LVP-eligible, holding position A1 | verify current chart; no landing below 350 m RVR |
| 30R | ILS (IBIA); VOR/DME; RNP | **CAT II** 🟩 — LVP-eligible, holding position H | verify current chart; no landing below 350 m RVR |
| 12R | VOR/DME; RNP | 🟥 **Runway currently unavailable** — no ILS published, never an arrival option pending re-verification | n/a |
| 30L | VOR/DME; RNP | 🟥 **Runway currently unavailable** — no ILS published, never an arrival option pending re-verification | n/a |

- **LVP triggers:** RVR ≤ 1,000 m or the manoeuvring area not fully visible from the tower; **no approach permitted below 350 m RVR** (hard floor, AD 2.22.3) — this is a firm limit, not a soft caution. 🟧 See [`OM E — Low Visibility Operations`](../../../../../flight-ops/low-visibility-operations.md).

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat reclaimed island at 8 ft AMSL — no high terrain relevant to any arrival path.
- **Specific threats:** 🟧 The obstacle picture is entirely man-made: low obstacles (lampposts, comms masts, cranes) charted in the approach funnels of all four runway ends, and the taller **Manama Financial Harbour towers (~266–267 m/874–875 ft AMSL)** roughly 2–3 NM SE of the field, charted in the **circling area** rather than on the straight-in path — relevant to any circling or visual manoeuvre. A dedicated **Bird Concentrations** chart is published for the field — treat bird activity as a standard coastal/Gulf caution.
- **Airspace / traffic:** 🟥 Compact **Class D CTR** (10 NM radius, SFC–2,500 ft) — with RWY 12R/30L currently unavailable, all arrivals and departures share the single 12L/30R pair, and the field sits inside a Bahrain (OBBB) FIR currently named in the regional CZIB/GNSS-jamming picture (§Briefing §3.2; [Middle East airspace brief](../../../../airspace/middle-east.md)).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not terrain-driven (flat island) — fly the published missed approach and verify any climb-gradient/turn constraint on the current chart.
- **Re-sequencing environment:** A go-around returns you to a compact, single-effective-runway-pair Class D CTR — expect vectoring/holding, especially during a shamal-dust or LVP event with reduced-rate arrivals.
- **Go-around traps:** Awareness of the man-made obstacle set (§5) during any circling/visual manoeuvre on the miss; the TWY Alpha (A1–A2) closure condition remains a ground-workload factor for traffic on the surface during a Code F event even though it doesn't affect the airborne miss itself.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 12L/30R **3,657 m** (307 m/1,000 ft threshold displacement, both ends) — ample for any K Global type. 12R/30L LDA figures (2,222 m / 2,410 m) are published in the AIP table but 🟥 **that runway pair is carried as currently unavailable** — do not plan against those figures without re-verification.
- **Braking / vacate:** 🟥 **TWY A4 cannot be used to vacate after a 12L landing; TWYs A6/A7 cannot be used to vacate after a 30R landing** (marking/AGL not provided for those exits in those directions) — plan the correct exit for the assigned runway. Standard RESA of 240 m is published for 12L/30R.
- **Runway-excursion watch:** 🟧 Both thresholds on the main pair are displaced 307 m; no winter-contamination consideration in this climate, but wet-runway braking-action awareness applies during rain/shamal events.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing, exit south at TWY A5 (12L) or A4 (30R) or beyond, or north at TWY B1/B2 under LVP, then taxi in via the A-series spine to Main Apron A/B/C; VAMSYS mirror gives a planning taxi-in time of **12 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟥 **TWY Alpha between A1 and A2 closes to all movement (including vehicles) during any Code F landing/take-off** on the main runway — expect an ATC hold at Lima, Kilo or abeam Mike if assigned that path. **TWY B1** carries special night-ops conditions (CAT-EYE reflectors only, continuously-lit stop-bar, mandatory follow-me).
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — Main Apron A/B/C (stands 7–28) are the principal Code E/F clusters, with three specific Code C/E-limited exceptions (stands 7, 14, 28).

---

## 9. Arrival frequency sequence

- **Sequence:** **Bahrain Approach (TAR) 127.85 (alt. 234.95) → Bahrain Tower 118.5 (alt. 296.025) → Bahrain Ground (SMC) 121.85.** Take the assigned frequency and confirm current chart. (Frequencies from [Briefing §8](index.md).) 🟧 A tier-4 source shows Ground at 121.675 MHz — AIP figure (121.85) used here.
- **Approach/Departure control:** **Bahrain Approach** is the terminal-radar facility; the **Bahrain (OBBB) FIR/ACC** hands off en route — its discrete frequency was not published in the reachable AD 2 extract (existence confirmed only via the AD 2.11 MET-distribution list). See the [Middle East airspace brief](../../../../airspace/middle-east.md). 🟧

---

## 10. Gotchas

- **RWY 12R/30L is carried as "currently not available" in the sourced AIP cycle** — never expect it as an arrival option without re-verifying current status.
- **No landing is permitted below 350 m RVR** — a hard floor, not a soft minimum.
- **TWY A4 (after 12L) and TWYs A6/A7 (after 30R) cannot be used to vacate** — plan the correct exit for the assigned runway direction.
- **The Manama Financial Harbour towers (~266–267 m AMSL) sit ~2–3 NM SE of the field**, in the circling area — a factor on any circling/visual manoeuvre, not the straight-in approach.
- **The 80° no-fly arc (180°–260° radials of the BHR VOR) over the main Bahrain islands** applies to arrivals as well as departures.
- **A Code F arrival interacting with a departing Code F aircraft on the main runway** triggers the TWY Alpha (A1–A2) closure — a ground-workload factor on taxi-in.
- **The regional conflict-zone/GNSS-jamming picture is a live planning input** — Bahrain (OBBB) FIR has been named in an EASA CZIB "avoid at all levels" advisory and experienced outright airspace closures in 2026; brief the DME/DME/IRU cross-check and early ATC notification for any GNSS position drift (see the [Middle East airspace brief](../../../../airspace/middle-east.md)).

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- **RWY 12R/30L current availability status** — see [Briefing §18](index.md).
- Exact LVP/CAT II trigger RVR figures beyond the 1,000 m LVP-declaration threshold and the 350 m hard floor.
- Bahrain (OBBB) FIR/ACC discrete frequency (not published in the reachable extract).
- Ground-frequency discrepancy (AIP 121.85 MHz vs a tier-4 source's 121.675 MHz).
- Current-AIRAC STAR names/minima re-verification generally (built from the 2024-03-21 cycle).

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. RWY 12R/30L and ILS/LVP equipment status), ATIS config/wind trend, current CZIB/conflict-zone and Bahrain-airspace open/closed state. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **Bahrain CAA — AIP, AD 2 OBBI**, AIRAC cycle eff. 2024-03-21 — STAR/IAP index, runway/declared-distance data, communications, LVP procedures — https://aim.mtt.gov.bh/eAIP/2024-03-21-AIRAC/html/eAIP/OB-AD-2.OBBI-en-BH.html (retrieved 2026-07-26).
- OurAirports — https://ourairports.com/airports/OBBI/frequencies.html and /runways.html (retrieved 2026-07-26). *Ground-frequency and declared-distance cross-check.*
- **Companion OM C file:** [Middle East airspace brief](../../../../airspace/middle-east.md) — conflict-zone/GNSS-jamming context.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
