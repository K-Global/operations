# LFPO — Paris-Orly · Arrival Page

**LFPO / ORY** · Paris (Orly), Île-de-France, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LFPO Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | RWY 06/24 and 07/25 (CAT III-equipped main pair); RWY 20 **no instrument approach — visual/PAPI only**; RWY 02 CAT I only |
| Usual approach | ILS CAT III on 06/24/07/25; ILS CAT I on 02; visual/PAPI only on 20 |
| Config logic | Wind/traffic-driven; exact preferential-runway rule not confirmed this pass 🟧 |
| Transition level | By QNH; transition altitude commonly reported 5,000 ft nationwide for France, not independently confirmed for LFPO 🟧 |
| LVP trigger | **Ceiling ≤ 200 ft or RVR ≤ 600 m** `[AIP France AD 2 LFPO.20.4.1]` |
| Missed-approach driver | Airspace/traffic density (shared multi-airport Paris CTR), not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Not confirmed this pass. RWY 06/24 and 07/25 are the primary CAT III-equipped pair; RWY 02/20 is the secondary/crosswind runway (CAT I on 02, visual-only on 20). Orly Approach assigns the STAR-to-runway transition within the combined Paris CTR. 🟧
- **Transition to approach:** Expect a STAR-to-ILS transition with radar vectors onto final for the assigned runway; verify the charted transition.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart; expect additional flow speed control given the shared, dense multi-airport terminal environment.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate. Reduced-rate or re-sequenced arrivals during winter fog events can compress the descent — brief an early-descent contingency.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** Late runway/config changes (e.g. a shift onto the CAT I-only or visual-only 02/20 pair ahead of a wind change), and holding/resequencing during winter fog/inversion events within the shared multi-airport CTR, are the main energy traps at this field.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 02 | ILS (OLN) | **CAT I only** 🟧 | verify current chart |
| 06 | ILS (ORE) | **CAT III** 🟩 | verify current chart |
| 07 | ILS (OLE) | **CAT III** 🟩 | verify current chart |
| 20 | Visual / PAPI only | **No instrument approach published** 🟥 | n/a |
| 24 | ILS (OLO) | **CAT III** 🟩 | verify current chart |
| 25 | ILS (OLW) | **CAT III** 🟩 — displaced threshold 435 m | verify current chart |

- **LVP triggers:** Ceiling ≤ 200 ft or RVR ≤ 600 m `[AIP France AD 2 LFPO.20.4.1]`. CAT III capability exists only on RWY 06/24/07/25 — if wind or config forces a landing on 02/20 during a low-vis event, capability drops sharply (CAT I on 02, no instrument approach at all on 20). ILS sub-category (IIIA/IIIB) not confirmed from a primary table this pass. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat Paris-basin location at 291 ft AMSL — no close-in high terrain relevant to any arrival path.
- **Specific threats:** 🟥 The field's defining approach hazard is **airspace density, not terrain or approach geometry**: Orly Approach operates inside a combined Paris CTR shared with De Gaulle, Le Bourget and Villacoublay approach positions, with several permanently prohibited areas (LF-P21/23/25/47/82) and a mandatory VFR-avoidance zone (LF-R275 Paris) inside/adjacent to the CTR. RWY 06 and RWY 25 also carry significant displaced thresholds (300 m and 435 m respectively) — verify the correct LDA before every approach, not the full runway length.
- **Airspace / traffic:** 🟥 Very high density in the shared multi-airport Paris terminal environment — brief for re-sequencing and extended vectoring, especially in marginal weather or during a bank.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat basin) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around drops you back into the dense, shared multi-airport Paris CTR — expect extended vectoring and possible holding before re-sequencing, especially during a winter fog event or a busy CDG/Orly cross-traffic period.
- **Go-around traps:** Awareness of the RWY 02/20 × 07/25 intersection geometry anomaly and any concurrent crossing traffic remains a ground-workload factor even on a go-around that returns to a full-stop landing.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** RWY 02/20 **2,400 m**; RWY 06 **3,350 m** (300 m displaced threshold); RWY 24 **3,650 m** (no displacement); RWY 07 **3,320 m** (no displacement); RWY 25 **2,885 m** (435 m displaced threshold) `[AIP France AD 2 LFPO.13]`. The main runway pair is ample for any K Global widebody; always use the declared LDA, not the full physical runway length, for RWY 06 and RWY 25.
- **Braking / vacate:** High-speed exit taxiways serve the main pair: **W43/W44** (RWY 06), **W45/W46** (RWY 24), **W35** (RWY 25) — each with a runway-specific speed limit (30–50 kt depending on surface condition; W35 is the most restrictive at 30 kt wet / 35 kt dry). Exit-taxiway indicator lights (RETIL) inform the remaining distance to the nearest high-speed exit.
- **Runway-excursion watch:** 🟧 RWY 06 (300 m) and RWY 25 (435 m) displaced thresholds must be factored into every landing-distance calculation; winter-contamination braking-action consideration applies in the de-icing season (see Briefing §14).

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on the assigned runway, taxi in to **Orly 1/2** or **Orly 4** per Ground/Approach assignment — no VAMSYS-mirrored taxi-in time exists for this field (§Open items).
- **Hot spots / tight taxiways:** 🟥 The **RWY 02/20 × 07/25 intersection** carries an AIP-flagged pavement-geometry anomaly (curvature radius and inter-curve spacing below international recommended values) — taxi with vigilance near this junction. Vehicle crossing points near W1/W2 in the North Industrial Apron (ZIN) carry published minimum-clearance distances from parked-aircraft tails; jet-blast caution applies broadly during start-up/taxi near stands.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — widebody clusters historically at Orly 1/2 and Orly 4; current-day gate assignment for our operation not yet confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Approach 118.855 / 120.855 / 124.450 / 127.750 / 128.380 (sector-specific, shared Paris CTR complex) → Tower 118.700 (HO) / 120.500 (aux) → Ground 121.705 (H24) / 121.815 (aux).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Orly Approach** operates within the combined De Gaulle–Orly–Le Bourget–Villacoublay Paris CTR; **Paris ACC (LFFF)** hands off en route inbound — no dedicated OM C Airspace FIR brief exists yet, see the [Europe area brief](../../../../airspace/europe.md). 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **RWY 20 has no published instrument approach** — do not expect it as anything but a visual/PAPI-only option.
- **RWY 02 is CAT I only** — do not expect CAT III capability if config forces a landing there in low visibility.
- **A delayed arrival risking the curfew window is the standout gotcha at this field** — the hard curfew (23:30–06:00, tightening from 25 Oct 2026) means a late inbound with no realistic chance of landing before the boundary should be planned for diversion well ahead of time, not decided tactically at the gate.
- **RWY 06 (300 m) and RWY 25 (435 m) displaced thresholds** — always compute landing distance from the declared LDA, not the full runway length.
- **Combined multi-airport Paris CTR** sustains continuous high traffic density — expect vectoring/holding, especially in marginal weather or during a bank shared with CDG/Le Bourget traffic.
- **The RWY 02/20 × 07/25 intersection geometry anomaly** remains a ground-workload factor on taxi-in even when 02/20 is not the landing runway.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- ILS sub-category (IIIA/IIIB) confirmation on RWY 06/24/07/25.
- Preferential-runway/config logic.
- Transition altitude/level for LFPO specifically (5,000 ft is a commonly reported nationwide figure, not independently confirmed here).
- Current taxi-in routing and gate assignment for a K Global operation (no VAMSYS entry exists).

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. CAT III equipment status and the RWY 02/20 × 07/25 intersection), ATIS config/wind trend, current AUP/UUP or RAD status in the Paris CTR/TMA. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **SIA France eAIP, AD 2 LFPO** (AIRAC cycle effective 11 Jun 2026, package dated 09 Jul 2026) — runway/declared-distance data, ILS categories, LVP triggers, communications, ground-movement rules — https://www.sia.aviation-civile.gouv.fr/media/dvd/eAIP_09_JUL_2026/FRANCE/AIRAC-2026-07-09/html/eAIP/FR-AD-2.LFPO-fr-FR.html (retrieved 2026-07-26).
- OurAirports — https://ourairports.com/airports/LFPO/runways.html (retrieved 2026-07-26). *Displaced-threshold cross-check.*
- COHOR — Paris Orly Airport (ORY/LFPO) — https://www.cohor.org/en/airports/paris-orly-airport-ory-lfpo/ (retrieved 2026-07-26). *Curfew/slot-regime corroboration relevant to arrival scheduling.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
