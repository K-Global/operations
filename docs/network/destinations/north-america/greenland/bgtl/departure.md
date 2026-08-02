# BGTL — Pituffik Space Base · Departure Page

**BGTL / THU** · Pituffik, NW Greenland (Avannaata Municipality) · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for X-Plane 11, not a chart. Companion to the [BGTL Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-published** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal. **Role note:** any departure from BGTL follows a **genuine unplanned emergency** (AIP §3.12 bars planned use) — see [`OM E — ETOPS/EDTO Procedures`](../../../../../flight-ops/etops-edto.md) and [`OM E — Polar & High-Latitude Operations`](../../../../../flight-ops/polar.md).

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Local rule: **take-off normally RWY 26T** |
| Config logic | Local operating rule (landing normally 08T / take-off normally 26T), not purely wind-driven |
| Transition altitude | Not published in reachable AIP page — verify 🟧 |
| Take-off minima | Not published — verify 🟧 |
| CTOT / flow regime | None — access governed entirely by the PPR process, not a CTOT/slot mechanism |
| De-icing on departure | **Type 1 only**, Mon–Thu 1030–2030 (0930–1930), Fri 1030–2000 (0930–1900) |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not published — coordinate via **Thule Ground** (275.800/119.900 MHz) and **Base Ops** (131.100 MHz); no published stand/push procedure. 🟧
- **Hot spots / tight taxiways:** Not published — verify. 🟧
- **Runway crossings / read-back-required points:** Single runway (08T/26T) — no crossing-runway complexity, but confirm any taxiway constraint locally given "extremely limited" apron/hangar space (Briefing §13).
- **Low-vis taxi caveats:** Not published — verify. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Local rule — **take-off normally RWY 26T**, landing normally RWY 08T (right-hand circuit for RWY 08 landing) — this is a stated local operating rule, not purely wind-derived (Briefing §1/§10).
- **By departure direction:** RWY 08T bearing 085.0° GEO/TRUE; RWY 26T bearing 265.0° GEO/TRUE. **All designators and bearings are TRUE-referenced — no magnetic correction applied** (mag var 46.0°W published but unused). Confirm FMS/heading-reference setup before any departure. 🟥
- **Noise / preferential-runway program:** NIL (AIP §21) — remote military siting.
- **Interaction with arrivals:** Single runway; the local rule splits normal landing (08T) from normal take-off (26T) directions rather than flipping the whole field with wind — verify against ATC instruction on the day.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not published in reachable AIP page 🟧 | 08T / 26T | Not published — verify RNP/gradient on current chart 🟧 | Pull the live current-AIRAC SID list before any planned use; note the field's TRUE-reference convention when interpreting any chart |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Not published for this field — apply standard ICAO 250 KIAS below FL100 pending verification. 🟧
- **Noise-abatement departure procedure (NADP):** NIL (AIP §21) — N/A given remote military siting.
- **Early turn / altitude constraints:** Not published — verify on current chart. Given high terrain in all quadrants (Briefing §3.1), treat any early-turn constraint as a real consideration, not a formality. 🟥

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not published — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** AIP states **"high terrain in all quadrants"**; a charted antenna obstacle sits at **837 ft MSL, 0.86 NM from THR 08T, bearing 173° GEO**. The **Greenland icecap dome (~10,500 ft)** is the wider driftdown constraint — see [Briefing §3.1](index.md) and the [Arctic airspace brief](../../../../airspace/arctic.md) §7. 🟥
- **Special DP / obstacle DP:** Not published — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not published — verify. 🟧
- **De-icing:** **Type 1 only**, Mon–Thu 1030–2030 (0930–1930), Fri 1030–2000 (0930–1900) local. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md) for the ground/aerodrome cold-weather method (holdover, contaminated-runway RWYCC/braking-action reporting).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** No dedicated Delivery frequency published — combined with Tower function (Briefing §8). 🟧
- **Frequency sequence:** **Thule Ground 275.800/119.900 MHz (Mon–Fri 1200–2000 UTC) → Thule Tower 126.200/255.600 MHz (Mon–Fri 1200–2000; closed Sat/Sun/US Hol) → Thule TWR/APP (combined, as Tower).** Base Ops 131.100 MHz available for coordination. Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** No civil slot regime — access is governed entirely by the **PPR process** (§5 of the Briefing: 30-day advance via HAF/A30, or 72-hour PPR under blanket approval), not a CTOT/slot mechanism. 🟥

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 3,047 × 42 m runway is ample for our types; ASDA (3,355 m) exceeds LDA (3,047 m) both ends — stopway/overrun margin, not a limiting factor (Briefing §2/§7).
- **Density altitude / temperature:** Non-issue at 251 ft; extreme-cold environment is the dominant performance driver — see [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).
- **Contamination / wet-runway:** **RCR 08 or lower (icy/contaminated) expected 15 Sep–15 May** — roughly 8 months of the year (Briefing §3.3/§14). 🟥
- **Link to OM B:** RFF category **CAT 6** confirmed by AIP (Briefing §1/§6) — cross-check against the specific type's requirement via [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). All aircraft operating here must be **winterized** per the AIP mandate.

---

## 10. Gotchas

- **Field operates on TRUE north, no magnetic correction** (mag var 46°W published but unused) — verify FMS/heading reference before flying any procedure; runways are designated 08T/26T, not magnetic headings.
- **AIP §3.12: field cannot be used for planned emergency divert or weather alternate** — any departure here follows a genuine unplanned emergency, not a scheduled or plannable operation.
- **Surface wind >30 kt from 125°–185° GEO produces severe downdrafts + moderate turbulence to 5,000 ft** on the RWY 08T side — brief this even though it is described for final approach, as it affects the same terrain/wind regime on departure.
- **High terrain in all quadrants**, charted antenna obstacle 837 ft MSL 0.86 NM off THR 08T.
- **Fuel is JP-8 (F-34) military grade only** — confirm compatibility before assuming an uplift is possible for a return departure.
- **Confirmed quarters mandatory before arrival; hangar space "extremely limited"; no repair facilities** — a technical issue discovered here has very limited local recovery options.
- **PPR/military access gate governs everything** — there is no CTOT/slot workaround; coordinate through HAF/A30 or the FAA Flight Standards District Office/Principal Operations Inspector channel named in the AIP.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Transition altitude, take-off minima, SID names/gradients — none published in the reachable AIP page.
- Stand → runway taxi routing detail — not published.
- LVTO RVR minima — not confirmed.
- EOSID/engine-out procedure detail per runway.
- Current PPR contact/lead-time details.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/navaid/lighting, obstacle status), current PPR/access status, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here. See Sources for the tier hierarchy.*

- See [BGTL Briefing — Sources & References](index.md) for the full Naviair AIP AD 2-BGTL / OurAirports / SkyVector / Wikipedia citation set underlying this page's static data.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP + Briefing; folded to 4-page pack. |
