# RCTP — Taiwan Taoyuan Intl · Departure Page

**RCTP / TPE** · Taoyuan, Taiwan · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Taiwan (CAA)-derived, Asia network build

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [RCTP Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | ATC/wind-assigned across both pairs (05L/05R and 23R/23L) — no single preferential rule confirmed 🟧 |
| Config logic | Wind/traffic/ATC-driven; fixed traffic-pattern rule (05L/05R left-hand, 23R/23L right-hand) governs the VMC pattern, not necessarily departure preference |
| Transition altitude | 11,000 ft `[AIP 2.17]` |
| Take-off minima | RVR-tiered per engine number/lighting facility — exact current-chart figures not confirmed 🟧 |
| CTOT / flow regime | No confirmed ATFM/CTOT programme; ATC may initiate radar departures 0000–0300 & 0600–1000 UTC daily 🟧 |
| De-icing on departure | NIL — not provided/required |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not confirmed in per-stand detail from the reachable AIP text extract (ground-movement charts are chart-format, not text-extracted this pass); expect Ground/Apron-assigned routing to the active runway via the taxiway system described in [Briefing §7/§13](index.md). 🟧
- **Hot spots / tight taxiways:** 🟥 Three AIP-published Hot Spots — **TWY N11/L2** and **TWY N9/L1** crossing RWY 05L/23R to/from the cargo apron (bays 516–525), and the **service road/TWY S8** crossing RWY 05R/23L to/from the south fire station. **A380 movement is prohibited on TWY E, P6, P9, P10, Q6 and Q7.**
- **Runway crossings / read-back-required points:** Taxiing across a runway, or using a runway for taxiing, is **prohibited unless specifically approved by ATC** — expect explicit crossing instructions at the Hot Spot junctions above.
- **Low-vis taxi caveats:** 🟧 Progressive/"block separation" taxi procedures apply below RVR 550 m, tightening further below 300 m and 175 m; when Stop Bars or the Surface Movement Surveillance System are unserviceable in low-vis conditions, **follow-me guidance becomes mandatory** to enter or cross a runway — see §7 below and [`OM E — Low Visibility Operations`](../../../../../flight-ops/low-visibility-operations.md).

---

## 3. Runway / SID selection logic

- **By wind / config:** Not independently confirmed — runway-in-use is set by ATC per wind/traffic; no single preferential-runway rule found in reachable sources. 🟧
- **By departure direction:** **Northbound departures must fly an RNAV (or COSMO) departure during 1400–2300 UTC** when RWY 23R/23L is the active configuration — a direct noise-routing rule tied to runway-in-use.
- **Noise / preferential-runway program:** All SIDs carry a **mandatory 3 NM initial climb on runway heading**, with no early turn unless ATC-instructed or in an emergency.
- **Interaction with arrivals:** RWY 05L/05R fly a left-hand traffic pattern and RWY 23R/23L a right-hand pattern; a go-around must be reported to Tower immediately — brief for concurrent arrival-pattern traffic when departing the reciprocal configuration.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| MOLKA 1B/1D, KUDOS 1B/1D, ROBIN 1B/1D, TINHO 1B/1D 🟧 | Reported RNAV families (postfix A=05R, B=23L, C=05L, D=23R per source) | Not confirmed from the primary AIP text — verify current AIRAC | Sourced to a network-sim/chart-mirror (IVAO), not regulatory |
| AJENT ONE MIKE (AJ1M) 🟧 | RWY 05L/05R (reported) | Climb on runway heading until leaving 600 ft (per source), then routing via NOVAS/DECOY/SUMER/CHALI | Same caveat as above |
| COSMO 🟧 | Northbound alternative to the RNAV departure, RWY 23R/23L | Required 1400–2300 UTC when RWY 23R/23L active `[AIP 2.21]` | Name confirmed operationally (noise-abatement rule); routing detail not independently verified |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Mandatory **3 NM initial climb on runway heading**, no early turn unless ATC-instructed or an emergency `[AIP 2.21]`; departing traffic anticipates an **initial level of 3,000 ft** before further assignment by Taipei Approach/ACC `[AIP 2.22.2]`.
- **Noise-abatement departure procedure (NADP):** Not confirmed as a named NADP1/2 policy — the field's own published rule is the 3 NM straight-climb-then-RNAV/COSMO structure (§3/§4) rather than a NADP designation. 🟧
- **Early turn / altitude constraints:** No early turn permitted unless ATC instruction or an emergency — this is itself the field's defining departure constraint.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** AIP-published obstacles (buildings up to 501 ft, an electric tower at 333 ft, trees up to 375 ft) sit in the 23L-approach/05R-take-off funnel, with further buildings/trees (112–235 ft) in the 05L/23R and 05R/23L funnels — see [Briefing §3.1/§9](index.md) for the full obstacle picture. None amount to Himalaya-belt-class terrain, but they are real, AIP-published obstacle data relevant to any engine-out track planning.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** 🟧 RVR-tiered per engine number and lighting-facility combination — single-engine aircraft: RVR 175 m with REDL+RCLL+3×RVR, RVR 350 m with REDL+RCLL+any 2×RVR, RVR 500 m with REDL+RCLL or REDL+RCL marking, VIS 1,600 m (NIL facility, day only); 3/4-engine day-only NIL minimum VIS/RVR 800 m. Verify exact current-chart applicability to K Global types. The field's own **Low Visibility Procedure** is declared active below RVR 550 m (or VIS 800 m if RVR unavailable), tightening further below 300 m and 175 m RVR with progressive taxi/block-separation/follow-me procedures.
- **De-icing:** **NIL** — not provided or required.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Taipei Delivery **121.80 MHz** (2300–1500 UTC) or Taipei Ground **121.70/121.60 MHz** (per apron split, 1500–2300 UTC) — call 5 minutes ahead of engine start, stating parking bay and proposed flight level; an aircraft not ready to push back within 5 minutes of receiving clearance may have it withdrawn.
- **Frequency sequence:** **Delivery/Ground (per the time split above) → Ground for start-up/push-back (121.60 MHz for Apron B/C/Remote-Parking 601–615, 2200–1600 UTC; 121.70 MHz otherwise) → Taipei Tower 118.70 MHz (alt 129.30 MHz) → Taipei Approach 119.60/119.70/121.00/123.50/125.10/125.60/128.50 MHz (sector-dependent).** Take the assigned frequency and confirm current chart (frequencies from [Briefing §8](index.md)).
- **CTOT / slot handling:** No confirmed ATFM/CTOT programme; ATC may initiate radar departures during the stated flow windows (§1) to expedite the queue. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 05R/23L (3,800 m) and RWY 05L/23R (3,660 m) are both non-limiting for any K Global type at Category-L operating weights; the reduced LDA figures (§ Briefing §7) apply to landing planning, not departure TORA/TODA/ASDA.
- **Density altitude / temperature:** Field elevation 108 ft, reference temperature 34°C — non-issue for density altitude; the operative weather threat is typhoon season, not hot-and-high performance.
- **Contamination / wet-runway:** 🟧 No specific contamination/braking-action data confirmed this pass; RCTP has no de-icing programme (subtropical field), so winter contamination is not a factor — heavy tropical/typhoon-season rainfall is the relevant wet-runway consideration.
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty identified for any K Global type at RCTP.

---

## 10. Gotchas

- **Displaced thresholds (05R +100 m, 23L +350 m) matter for landing planning, not departure TORA** — don't conflate the two when briefing declared distances.
- **Mandatory 3 NM straight-runway-heading climb on every SID** — no early turn without ATC instruction or an emergency.
- **Northbound departures require an RNAV or COSMO departure 1400–2300 UTC** whenever RWY 23R/23L is active — brief this before assuming a conventional departure track.
- **A380 is prohibited on TWY E, P6, P9, P10, Q6 and Q7** — relevant to shared ground routing even though K Global's category here is L.
- **Three AIP-published ground Hot Spots** around the cargo-apron and south-fire-station runway crossings — expect explicit ATC crossing instructions.
- **Typhoon season (~Jun–Oct, peak Jul–Sep)** can force a short-notice ground stop or large-scale re-route — build buffer in season.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names/gradients (only tier-4/network-sim names available this pass — MOLKA/KUDOS/ROBIN/TINHO/AJ1M/COSMO).
- Exact take-off minima applicability per K Global type/lighting facility.
- Preferential-runway/config-selection wind rule.
- EOSID/engine-out procedure detail per runway.
- Reverse-thrust/idle-reverse and contamination/braking-action data.
- Stand-to-runway taxi routing detail by stand/apron.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. the cargo-apron and south-fire-station Hot Spots), CTOT/ATC flow-window status, LVP/Stop-Bar status, typhoon/tropical-cyclone advisories. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP Taiwan (Civil Aeronautics Administration, MOTC), AD 2 RCTP**, AMDT 01-23, eff. 2023-01-12 — SID/DP index references, take-off minima, communications, local aerodrome regulations, noise abatement, flight procedures — https://ais.caa.gov.tw/eaip/AIP%20AMDT%2001-23_2023_01_12/eAIP/RC-AD%202%20RCTP%20%E8%87%BA%E7%81%A3%E6%A1%83%E5%9C%92%E5%9C%8B%E9%9A%9BTAIPEI-TAIWAN%20TAOYUAN%20INTL-en-GB.html (retrieved 2026-07-26).
- IVAO chart mirror — RCTP SID chart — https://xe.ivao.aero/download/charts/RCTP_SID_S.pdf (retrieved 2026-07-26). *SID-name corroboration only, network-sim source, not regulatory.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
