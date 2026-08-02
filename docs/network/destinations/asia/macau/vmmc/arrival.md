# VMMC — Macao Intl · Arrival Page

**VMMC / MFM** · Macau · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [VMMC Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **16/34** (single runway) — **RWY 34 carries the field's only ILS CAT II capability**; runway-in-use is wind/config-driven |
| Usual approach | **ILS CAT II RWY 34**; ILS CAT I RWY 16 |
| Config logic | Wind/traffic driven; no independently sourced wind-rose data this pass 🟧 |
| Transition level | By QNH; transition altitude 9,000 ft / 2,700 m (per AD 2.24 area-chart legend) — verify current chart 🟧 |
| LVP trigger | RVR (TDZ RWY 34) ≤ 800 m, or cloud base (RWY 34) ≤ 200 ft, or visibility decreasing rapidly — announced "LOW VISIBILITY OPERATIONS IN FORCE" via RTF/ATIS `[AIP Macao AD 2 VMMC 1.1]` |
| Missed-approach driver | Airspace/traffic density and the externally-controlled approach environment (no dedicated Macau Approach), not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Charts exist per AD 2.24 (STAR Macau RWY 34, STAR Macau RWY 16) but procedure names were not obtained in this research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Wind/traffic-driven choice between the 16- and 34-directions; **RWY 34 is expected to be preferentially assigned whenever low-visibility (CAT II) capability may be needed**, since it is the field's only runway direction with that capability.
- **Transition to approach:** VMMC has **no dedicated Macau Approach** — the STAR-to-ILS transition and vectoring is provided by whichever external unit (Zhuhai Approach 120.35/124.25 MHz, or Hong Kong Radar 126.3/119.1 MHz) is responsible for the routing `[AIP Macao AD 2 VMMC 2.23]`. Confirm the assigned unit at planning and acknowledge its identifier on first contact.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart; expect additional flow/sequencing interaction given the extremely tight, overlapping Pearl River Delta terminal airspace.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 (ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** A late runway/config change driven by a wind shift is the main energy trap; if the change moves the assignment **away from RWY 34 during a low-visibility event**, be ready for a CAT-I-only re-plan (RWY 16) rather than assuming CAT II minima carry over. A late runway change may also require re-establishing contact with a different external approach unit if the routing crosses from a Zhuhai-worked arrival to a Hong Kong-worked one, or vice versa.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 34 | ILS RWY 34 | **CAT II** — the field's only low-vis-capable direction; LVP in force when RVR (TDZ) ≤ 800 m or cloud base ≤ 200 ft 🟥 | verify current chart |
| 16 | ILS RWY 16 | CAT I only; inbound track constrained to 215° (true), do not deviate north of ZAO R231° (noise abatement) 🟧 | verify current chart |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None identified. Reclaimed-land site at 20 ft AMSL — no close-in high terrain relevant to any arrival path in the reachable AIP obstacle data (only marine shipping-channel fairway notes near Taipa/Coloane).
- **Specific threats:** 🟥 The field's **single-direction ILS CAT II coverage** (RWY 34 only) is the standout specific threat — brief the CAT-I-only contingency on RWY 16. The **reduced LDA on both ends** (2,865 m RWY 16 / 2,930 m RWY 34, against a 3,360 m physical runway, via displaced thresholds) is a genuine runway-excursion consideration at max landing weight — see §7.
- **Airspace / traffic:** 🟥 VMMC has **no dedicated approach control** — arrivals are worked by Zhuhai Approach or Hong Kong Radar depending on routing, inside the extremely dense, overlapping Pearl River Delta terminal complex. Brief for possible extended vectoring, re-sequencing, or a cross-unit handoff, especially in marginal weather or during a peak bank. See [Briefing §3.2](index.md) and the [Hong Kong (VHHK) FIR brief](../../../../airspace/fir/asia/hong-kong-vhhk.md).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat, reclaimed-land site) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around drops you back into an externally-controlled, very dense Pearl River Delta radar environment — expect vectoring and possible re-establishment of contact with Zhuhai Approach or Hong Kong Radar before re-sequencing.
- **Go-around traps:** If the missed approach follows a RWY 34 low-vis attempt, be aware that a subsequent attempt on RWY 16 will **not** carry the same CAT II minima — plan the contingency (hold for RWY 34 again, or divert to VHHH/WSSS) rather than assuming an equivalent re-attempt on the reciprocal runway.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** RWY 16 **2,865 m** (displaced threshold 360 m); RWY 34 **2,930 m** (displaced threshold 370 m) — both reduced from the 3,360 m physical runway `[AIP Macao AD 2 VMMC 2.13]`.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground on the day. 🟧 Runway friction is actively measured by Mu-meter; the runway is notified **"slippery when wet" below a friction value of 0.42** `[AIP Macao AD 2 VMMC 1.1]`.
- **Runway-excursion watch:** 🟥 The **displaced-threshold-reduced LDA on both ends**, combined with active wet-runway friction management, makes this the field's genuine runway-excursion watch item — brief the reduced LDA figures explicitly (not the nominal 3,360 m runway length) and treat wet-runway conditions with a heightened excursion mindset, especially in the May–Nov typhoon/monsoon season. RESA dimensions were not stated in the reachable AIP extract for this build — see Briefing §18.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing, taxi in via TWY C2/D/E/F/G to the assigned stand, crossing from the runway to the apron via one of the **two causeway bridges** (Bridge H or Bridge C1); VAMSYS mirror gives a planning taxi-in time of **12 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟥 The **two causeway bridges are the sole runway–apron ground link** on this compact reclaimed-land site — taxi with awareness of any bridge-related NOTAM. Cargo apron stands **G01–G15** operate under strict sequential tow-in rules with designated Breakaway Points X/Y/Z; certain stand pairs (B1/B3) and Breakaway Points (Y/Z) cannot be worked simultaneously.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — AVDGS-equipped stands (A1–A15, A17, B1–B6, B8) and the colour-coded B7/B10 pair are the most likely widebody-capable positions; exact assignment for our operation not yet confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **External approach unit (Zhuhai Approach 120.35/124.25 MHz, or Hong Kong Radar 126.3/119.1 MHz, per assigned routing) → Macau Tower 118.000/119.400 MHz (primary/secondary) → Macau Ground 121.725/121.975 MHz.** Take the assigned frequency and confirm current chart. (Frequencies from [Briefing §8](index.md).)
- **Approach/Departure control:** 🟥 **No dedicated Macau Approach** — terminal approach control is provided externally by **Zhuhai Approach** (Guangzhou FIR/ZGZU) or **Hong Kong Radar** (VHHK), depending on the arrival routing. Acknowledge the correct identifier at first contact; exact sector/frequency assignment is AIRAC-dependent — see [Hong Kong (VHHK) FIR brief](../../../../airspace/fir/asia/hong-kong-vhhk.md) and [Asia airspace general](../../../../airspace/asia.md).

---

## 10. Gotchas

- **ILS CAT II exists only on RWY 34** — do not assume the same low-vis capability on RWY 16.
- **No dedicated Macau Approach** — the arrival is worked by Zhuhai Approach or Hong Kong Radar depending on routing; confirm the assigned unit at planning, not just in the air.
- **RWY 16 arrivals must not deviate from the Jiuzhou DVOR (ZAO) R231° inbound track (215° true)** — a hard noise-abatement lateral limit for Zhuhai City.
- **LDA is reduced by displaced thresholds on both ends** (2,865 m RWY 16 / 2,930 m RWY 34) — do not plan a near-max-weight landing against the nominal 3,360 m runway length.
- **Two causeway bridges are the sole taxi-in ground link** — watch for any bridge-related NOTAM restricting ground access.
- **Config swap (16↔34) driven by a wind shift** can bring a late runway change and, potentially, a late change of the responsible external approach unit — watch the ATIS wind trend and confirm the current assigned unit.
- **Wet-runway braking action is actively managed** (Mu-meter, "slippery when wet" below 0.42) — a genuine consideration given the reduced LDA, particularly in the May–Nov typhoon/monsoon season.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- RESA dimensions (not stated in the reachable AIP extract for this build).
- Rapid-exit taxiway/vacate detail.
- Exact LVP/CAT II trigger RVR values beyond the stated RWY 34 figures (RVR ≤800 m TDZ / cloud base ≤200 ft).
- Current taxi-in routing and gate assignment for a K Global operation.
- Sector/frequency split between Zhuhai Approach and Hong Kong Radar for a given arrival routing — AIRAC-dependent, not enumerated in this research pass.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/causeway-bridge/approach/navaid/lighting, esp. CAT II ILS equipment status on RWY 34), ATIS config/wind trend, current flow status from the external approach unit, typhoon-season track advisories. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **Civil Aviation Authority of Macao (AACM) — AIP Macao, Part 3 (AD), AD 2 VMMC** (mirrored full-text extract) — hosted via VATSIM Hong Kong vACC — https://vathk.com/pdf/macauaip.pdf (retrieved 2026-07-26). *Runway/declared-distance data, LVP triggers, communications, navaid/ILS category data, noise abatement inbound-track constraint.*
- OurAirports — https://ourairports.com/airports/VMMC/runways.html (retrieved 2026-07-26). *Displaced-threshold cross-check.*
- SkyVector — https://skyvector.com/airport/VMMC (retrieved 2026-07-26). *Displaced-threshold and navaid cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from territory AIP; K Global fields from live VAMSYS; 4-page pack. |
