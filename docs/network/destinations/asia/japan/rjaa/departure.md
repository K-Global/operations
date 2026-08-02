# RJAA — Tokyo Narita · Departure Page

**RJAA / NRT** · Narita, Chiba Prefecture, Japan · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [RJAA Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **16R/34L (Runway A)** — the field's primary pair, and the only runway usable 23:00–24:00 JST; **16L/34R (Runway B)** supplements capacity in good weather/daytime |
| Config logic | Wind/traffic driven between the 16- and 34-directions; **Runway A is mandatory (not just preferred) during the 23:00–24:00 JST noise-limited shoulder hour** |
| Transition altitude | 14,000 ft (Japan-wide standard value) — verify current chart 🟧 |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | No slot-coordination level confirmed; annual-movement-cap/curfew regime is the operative constraint 🟧 |
| De-icing on departure | Season typical of Kanto-plain winters; pad locations/provisioning not confirmed 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From the assigned terminal, Ground/Ramp routes toward the assigned departure runway (16R/34L main pair, or 16L/34R in good weather/daytime); confirm the exact taxi with Ground/Ramp on the day.
- **Hot spots / tight taxiways:** 🟥 **Taxiways A3–A8 and B1–B7 are not individually ATC-controlled and become unavailable to departures whenever stop-bar lights are active (RVR ≤ 600 m)** — expect ground delay in low-visibility conditions. **Code F (A380-class) aircraft** operate under a reduced 90 m taxiway centreline separation and require 10.5 m wingtip-to-fence clearance on **TWY K**, with **mandatory tow at stands D3/N1**.
- **Runway crossings / read-back-required points:** Not independently confirmed — expect explicit crossing/hold-short instructions given the field's mixed asphalt/concrete taxiway network; confirm locally.
- **Low-vis taxi caveats:** SMGCS-style low-vis taxi routing applies once stop-bar lights activate at RVR ≤ 600 m (§ above); follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Wind-driven choice between the 16- and 34-directions on both runway pairs — confirm current ATIS wind/config on the day.
- **By departure direction:** Not independently confirmed beyond the wind-driven 16/34 choice. 🟧
- **Noise / preferential-runway program:** **RWY 16R/34L (Runway A) is mandatory during the 23:00–24:00 JST shoulder hour**, with a quantified noise-compliance standard (10 EPNdB below the total permitted level, 2 EPNdB below at each measuring point) applying to any departure in that window. Outside that hour, runway choice is wind/traffic driven between the two pairs.
- **Interaction with arrivals:** RJAA shares Tokyo-area terminal airspace with Haneda (RJTT) under Tokyo Approach/Departure Radar — expect sequencing interaction between the two majors during peak periods; cross-ref [Tokyo (RJJJ) FIR brief](../../../../airspace/fir/asia/tokyo-rjjj.md).

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 16R / 34L / 16L / 34R | MSAS (Japan's SBAS) supports satellite-based procedures generally — verify RNP/gradient requirement per SID on current chart | Pull the live current-AIRAC SID list before use. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not independently confirmed; the field's documented noise-management tool is the **runway-restriction/EPNdB-compliance rule for the 23:00–24:00 JST shoulder hour** (§3) rather than a published fleet-wide NADP choice. 🟧
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat Kanto plain — no significant close-in terrain or obstacle identified in reachable sources.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed in reachable sources this pass; low-visibility taxi restrictions (stop-bar activation at RVR ≤ 600 m, §2) are documented, but specific LVTO RVR minima are not. 🟧 See [`OM E — Low Visibility Operations`](../../../../../flight-ops/low-visibility-operations.md).
- **De-icing:** Not confirmed — pad location/provisioning not identified in reachable sources; treat Kanto-plain winter snow as a seasonal consideration. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md). 🟧

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Narita Delivery **121.90** (primary) / 121.65 (H24).
- **Frequency sequence:** **Delivery 121.90/121.65 → Ramp 121.60/121.75/118.15/121.70 (push-back/apron) → Ground 121.95/121.85 → Tower 118.20 (primary)/118.35/122.70/126.20/236.80 → Tokyo Departure 124.20 (primary)/119.60/120.60/125.525/127.50.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** No slot-coordination level or EUROCONTROL-style CTOT program confirmed for RJAA; comply with any locally assigned flow-control instruction. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 16R/34L (4,000 m) is non-limiting for any K Global type. RWY 16L/34R (2,500 m) is the more constrained pair — confirm against type performance if assigned. **RWY 34L's usable landing/declared-distance figures carry an unresolved displaced-threshold question (Briefing §7/§18)** — this affects arrival planning more than departure, but be aware of it if 34L is ever used as an intersection/partial-length departure reference point.
- **Density altitude / temperature:** Non-issue at 135 ft, humid subtropical climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Occasional winter snow is the relevant seasonal consideration (§7); no specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty identified for any K Global type at RJAA; the one fleet-relevant item is the Code F ground-movement constraint (§2).

---

## 10. Gotchas

- **RWY 16R/34L is mandatory (not just preferred) during the 23:00–24:00 JST shoulder hour** — a departure planned near that boundary must be on Runway A and must meet the published EPNdB noise standard.
- **Hard curfew 00:00–06:00 JST** — a late-day departure delay risks being prohibited outright past midnight; build buffer into the last rotation of the day.
- **Taxiways A3–A8 and B1–B7 close to departures whenever stop-bar lights activate (RVR ≤ 600 m)** — expect ground delay in fog/low-vis conditions, which is a genuine, recurring Kanto-plain winter risk.
- **Code F (A380-class) ground-movement constraints** — reduced 90 m centreline separation, 10.5 m wingtip-to-fence clearance on TWY K, mandatory tow at D3/N1 — confirm before any Code F departure.
- **CAT II/III only exists on RWY 16R** — if the field is fogged in with wind favouring the reciprocal/parallel runway, expect a lower-capacity, CAT-I-only departure/arrival flow, not a full CAT III operation.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima / DVA exact figures.
- Start-up/push-back procedure detail (cross-bleed/APU notification).
- NADP preference (no fleet-wide NADP confirmed).
- LVTO RVR minima and follow-me/SMGCS specifics.
- EOSID/engine-out procedure detail per runway.
- De-icing pad location/provisioning and season.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. CAT II/III equipment status on RWY 16R and any construction-related closure), CTOT/flow status, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **Civil Aviation Bureau, Japan (JCAB) — AIP Japan, AD 2 RJAA** (mirrored full-text extract) — https://nagodede.github.io/aip/japan/documents/RJAA_full.pdf (retrieved 2026-07-26). *Communications, curfew/noise-shoulder-hour text, taxiway ground-movement rules.*
- Civil Aviation Bureau, Japan — AIP Japan, Aerodrome Chart AD 2.24.1 RJAA (mirrored) — https://opennav.com/pdf/RJAA/JP-AD-2.24.1-RJAA-en-JP.pdf (retrieved 2026-07-26). *Stop-bar/taxiway lighting layout.*
- Narita International Airport Corporation — "Capacity Enhancement of Narita Airport: Relaxation of restrictions on night flights" — https://www.narita-kinoukyouka.jp/en/mitigation.html (retrieved 2026-07-26). *Shoulder-hour/runway-restriction rationale.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
