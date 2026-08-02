# GMMN — Mohammed V Intl · Arrival Page

**GMMN / CMN** · Casablanca, Morocco · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [GMMN Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **35L** (northerly config) or **17R** (southerly config) per the segregated one-way logic — see §2 |
| Usual approach | **ILS CAT III** on 35L (INL) or 35R (INR); **ILS CAT I only** on 17R (ICAS); RWY 17L approach type unconfirmed |
| Config logic | Segregated parallel logic; up to 7 KT tailwind, the RWY 35 configuration is used; Tower determines the active configuration and does not mix arrivals/departures across configs |
| Transition level | By QNH; transition altitude 4,000 ft (cross-checked, not AIP-confirmed) 🟧 |
| LVP trigger | Three-stage regime — **Preparation** (RVR ≤1,000 m or cloud base <400 ft); **In-force** (RVR <800 m or cloud base <200 ft); **Termination** (RVR >1,500 m and increasing, cloud base >300 ft and increasing) — network-sim cross-check, verify against AIP 🟧 |
| Missed-approach driver | Traffic-density/re-sequencing, not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Current STAR names not confirmed in reachable research pass. Per the Maghreb vACC cross-check, arrivals are commonly **vectored point-to-point rather than flown as a full published STAR to the IAF** — on occasion an arrival may be assigned a STAR and then vectored before reaching the IAF. Named holding fixes associated with the field include BIRVO, CAE NDB, DEVNO, KOTAG and NASRO. Pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** The northerly configuration (land on 35L) is used up to a 7 KT tailwind component; the southerly configuration (land on 17R) is used otherwise. Tower determines the active configuration; configurations are not mixed.
- **Transition to approach:** Expect radar vectoring onto final rather than a charted STAR-to-ILS transition in many cases (per the cross-check source above) — verify the charted transition regardless.
- **Speed / flow constraints on the STAR:** 250 KIAS below FL100 within the Casablanca TMA; published speed/altitude gates are pointers only — verify chart. During high-traffic periods, arrivals may be held higher (e.g. cleared to FL160/FL200 for a later Approach transfer) to manage controller workload (network-sim cross-check).

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first assigned altitude/vector. Because arrivals are frequently vectored rather than flown a fixed STAR, expect variable track-miles-to-run and build in an energy margin accordingly.
- **Speed control:** 250 KIAS below FL100 (Casablanca TMA); Approach may reduce an aircraft to minimum approach speed to maintain separation on final — be prepared for a late speed-control instruction.
- **Altitude constraints:** Key constraint points are pointers only — fly the charted/assigned altitudes.
- **Energy traps:** A late runway/configuration change (northerly ↔ southerly) ahead of a wind shift, and extended vectoring/holding during a fog event (given the field's CAT III/LVP profile — see [Briefing §3.4](index.md)), are the main energy traps identified this pass.

---

## 4. Approach selection by runway

*Names/idents only — verify minima on current AIRAC charts.*

| RWY | Approach (name/ident) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 35L | ILS (INL, 110.700) | **CAT III** 🟩 | verify current chart |
| 35R | ILS (INR, 109.900) | **CAT III** 🟩 | verify current chart |
| 17R | ILS (ICAS, 108.300) | **CAT I only** 🟧 | verify current chart |
| 17L | Not confirmed 🟧 | Approach type not identified in reachable sources | verify current chart |

- **LVP triggers:** See §1 — three-stage regime keyed to RVR and cloud base (network-sim cross-check, not AIP-confirmed). ILS sub-category (IIIA/IIIB/IIIC) on 35L/35R not confirmed from a primary source this pass. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None identified. Flat Casablanca-Settat coastal plain at 656 ft AMSL — no close-in high terrain relevant to any arrival path (see [Briefing §3.1](index.md)).
- **Specific threats:** 🟧 Approach capability is **not uniform** across the field — a crew planning an arrival on 17L in low visibility should not assume CAT II/III capability exists there; confirm the assigned runway's actual approach type and category before committing to a low-vis plan. The segregated-parallel logic also means a landing runway is never simultaneously available for the reciprocal takeoff role — brief the active configuration.
- **Airspace / traffic:** 🟥 Busy Royal Air Maroc hub under Class D Mohammed V Approach control; 7 NM radar separation applied; arrivals are frequently vectored rather than flown fixed STARs, adding workload during banks — see [Briefing §3.2](index.md).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat coastal plain) — fly the published missed approach and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around drops the aircraft back into a busy, radar-vectored single-stream environment; per the Maghreb vACC cross-check, a departure will not be released until separation with the go-around traffic is assured, and coordination between Approach and Tower is expected.
- **Go-around traps:** Config/traffic awareness during the miss given the segregated-runway-role logic; keep transmissions brief and expect a prompt handoff back to Approach once climbing safely.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 17L/35R **3,717 m**; 17R/35L **3,711 m** (cross-checked, not AIP-primary — see [Briefing §7](index.md)) 🟧. No displaced thresholds found (LDA = TORA on every end) — ample for any K Global widebody arrival weight.
- **Braking / vacate:** 🟥 A taxiway reached after landing on **RWY 35L visually resembles a rapid-exit but must be taxied at normal speed** — a genuine trap if assumed to be a high-speed turnoff (chart-informed). Rapid-exit taxiway detail for the other runway ends is not confirmed. 🟧
- **Runway-excursion watch:** 🟧 No displaced thresholds confirmed; no seasonal contamination/braking-action data identified (mild, near-sea-level climate) — the more relevant seasonal factor is low-visibility fog risk rather than a contaminated-runway risk.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** No fixed regulated taxi routes are published; advisory practice (Maghreb vACC cross-check) is for inbound traffic to use apron inner taxiways. VAMSYS mirror gives a planning taxi-in time of **12 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟥 Chart-informed holding-position confusion risk near the 17L/17R and 35L/35R parallel hold points; **do not use the post-35L-landing "rapid-exit-look-alike" taxiway at high speed** (§7). Not independently AIP-confirmed.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — historic apron/pier groupings identified; current-day Code E/F stand assignment for our operation not confirmed given the active expansion programme.

---

## 9. Arrival frequency sequence

- **Sequence:** **Mohammed V Approach 119.900/121.300 → Mohammed V Tower 118.500 → Mohammed V Ground 130.600.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8 — cross-checked, not AIP-primary.)
- **Approach/Departure control:** **Mohammed V Approach** (Class D, 7 NM radar separation) is the facility for the Casablanca terminal area; **Casablanca ACC (GMMM — Casablanca FIR)** hands off en route inbound — see [Africa — General Airspace](../../../../airspace/africa.md). 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **GMMN's two parallel runways are segregated by role, not run independently** — never assume a runway is available for the reciprocal role (landing vs. takeoff) without confirming the active configuration.
- **CAT III capability exists on 35L/35R only** — RWY 17R is CAT I only and RWY 17L is unconfirmed; do not assume uniform low-vis capability across the field.
- **A post-35L-landing taxiway looks like a rapid exit but is not** — taxi at normal speed.
- **Holding-position confusion risk** near the 17L/17R and 35L/35R parallel hold points on taxi-in.
- **Config swap (northerly ↔ southerly) driven by a wind/tailwind shift** can bring a late runway change — watch the ATIS wind trend.
- **Active multi-year construction programme** (new runway/terminal/tower through ~2029) — expect evolving taxi-in routing, stand assignment and construction NOTAMs.
- **Company alternate DAAG (Algiers)** is materially farther than GMMX/GMTT — confirm its planning rationale rather than treating it as a local diversion option.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- ILS sub-category (IIIA/IIIB/IIIC) confirmation on 35L/35R.
- RWY 17L approach type/ident.
- Exact LVP/CAT trigger RVR values against a primary AIP source.
- Rapid-exit taxiway/vacate detail beyond the single chart-informed 35L caution.
- Current post-expansion-programme taxi-in routing and gate assignment.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. CAT III equipment status and construction closures), ATIS config/wind trend. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- Maghreb vACC (VATSIM Morocco division) — "Casablanca MV (GMMN)" aerodrome procedures — https://docs.vatsim.ma/controllers/aerodrome-procedures/casablanca/ (retrieved 2026-07-26; page last updated 2023-10-12). **Network-sim document, not regulatory** — STAR/vectoring practice, LVP stages, missed-approach coordination, declared distances.
- SkyVector — https://skyvector.com/airport/GMMN (retrieved 2026-07-26). *Navaid/frequency cross-check.*
- See the [GMMN Briefing](index.md) for the full source register and the ONDA AIP access-attempt note.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Morocco (ONDA); K Global fields from live VAMSYS; 4-page pack. |
