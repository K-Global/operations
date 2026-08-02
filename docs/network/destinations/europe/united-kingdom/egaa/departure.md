# EGAA — Aldergrove · Departure Page

**EGAA / BFS** · Aldergrove, Co. Antrim, Northern Ireland, United Kingdom · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [EGAA Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Wind-dependent — no single published preferential runway; all four runway ends (07/25/17/35) are usable for departure per declared distances |
| Config logic | Wind-driven; **RWY 07 full-length departure requires a backtrack** from the Delta taxiway entry point |
| Transition altitude | 6,000 ft |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | No slot-coordination/CTOT regime confirmed — tier-4 sources report none required 🟧 |
| De-icing on departure | Available "as required"; pad/procedure detail not confirmed 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not individually detailed in reachable sources this pass. 🟧 **PPR is required for use of the RWY 07/25 vacate at Taxiway Bravo**, due to apron pushback procedures — confirm this coordination before planning a departure routing that relies on it.
- **Hot spots / tight taxiways:** 🟥 **Taxiway Bravo** (PPR, apron pushback procedures). **RWY 07's full-length take-off requires a backtrack** from the Delta taxiway entry point (turning area 70 m wide at the threshold) — do not expect an intersection line-up to reach full length. Given EGAA's two intersecting runway pairs (07/25 and 17/35), expect explicit ATC crossing instructions for any ground routing that traverses the other pair — exact taxiway-crossing detail is not confirmed in reachable sources this pass. 🟧
- **Runway crossings / read-back-required points:** Not individually detailed — treat any routing that crosses between the 07/25 and 17/35 pairs as a read-back-required point pending confirmation. 🟧
- **Low-vis taxi caveats:** SMGCS/low-vis taxi routing and follow-me availability not confirmed in reachable sources. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** No single published preferential-runway rule found — assignment is wind/traffic-driven across all four runway ends.
- **By departure direction:** No directional departure preference identified beyond the runway-specific ground-manoeuvre constraints in §2 and the RWY 17 180°-turn prohibition (a taxi/ground rule, not an airborne one) — see Briefing §3.3.
- **Noise / preferential-runway program:** Not confirmed — the tier-4-sourced CDA procedure described in the Briefing (§12) is by definition an arrival (continuous descent) procedure; no equivalent departure noise-abatement routing was identified in reachable sources this pass. 🟧
- **Interaction with arrivals:** EGAA's two runway pairs (07/25 roughly east–west, 17/35 roughly north-northwest–south-southeast) intersect, so departures and arrivals on the non-active pair are expected to be sequenced/constrained by ATC — exact simultaneous-operations detail is not confirmed in reachable sources this pass. 🟧 Cross-ref [Briefing §3.2](index.md).

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 07 / 25 / 17 / 35 | Not confirmed — verify RNP/gradient requirements on current chart | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC instruction; 250 KIAS below FL100 (UK/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed in reachable sources this pass. 🟧
- **Early turn / altitude constraints:** Not confirmed — verify any published constraint on the current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** No close-in high terrain identified in the reachable AIP extract (see Briefing §3.1); not independently quantified against a current obstacle/MSA chart this pass. 🟧
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed in reachable sources this pass — verify current chart. 🟧 Note the field's low-visibility approach capability is asymmetric across runway ends (CAT III RWY 25 only, CAT I RWY 17, non-precision RWY 07/35 — see Briefing §3.5); confirm whether an equivalent asymmetry applies to LVTO minima by runway.
- **De-icing:** Provisioned "as required" per the primary AIP; dedicated pad location, fluid type and holdover detail not confirmed this pass. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** No dedicated Delivery frequency was found published in the reachable AIP extract for this field — confirm current AIRAC for whether clearance is obtained via Ground or Approach. 🟧
- **Frequency sequence:** **Ground 121.755 (as directed) → Tower 118.300 (H24) → Aldergrove Approach 133.125 (H24; combines with Tower under the single callsign "Aldergrove" when notified via ATIS) → Scottish ACC (EGPX) upper handoff.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** No slot-coordination or CTOT regime confirmed for EGAA; standard UK/EU ATFM flow-management practice may still apply in constrained weather/traffic circumstances. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 07/25 (2,780 m) is non-limiting for narrowbody and typical widebody weights. **RWY 17/35 (1,891 m, TORA down to 1,791 m)** is materially shorter — confirm against the operating type and weight before planning a departure off this pair.
- **Density altitude / temperature:** Non-issue at 268 ft AMSL in a temperate maritime climate — no hot-and-high performance penalty.
- **Contamination / wet-runway:** Atlantic-influenced climate implies routine wet-runway operations; no specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — note the **RWY 17 180° turn-not-permitted restriction for 737/A319-size aircraft and larger**, which affects most of the K Global narrowbody-and-above fleet on the ground, though it is not a takeoff-performance limitation per se.

---

## 10. Gotchas

- **RWY 07 full-length take-off requires a backtrack** from the Delta taxiway entry point — never expect an intersection line-up to full length.
- **180° turn is NOT permitted on RWY 17** for 737/A319-size aircraft or larger — continue to the RWY 35 turning circle instead; relevant if ever considering a RWY 17 departure with a late runway change from an intended landing.
- **Taxiway Bravo requires PPR** for the RWY 07/25 vacate, due to apron pushback procedures — confirm this coordination is in place before planning that routing.
- **RWY 35's displaced threshold and downslope** (0.76% over the first 400 m of LDA) are primarily arrival-side considerations but complete the picture of this runway's constrained profile — relevant if ever assigned for a RWY 35 departure.
- **Aldergrove Approach and Tower combine under the single callsign "Aldergrove"** when notified via ATIS — do not expect separate controller voices at all times; the Director position (120.905) is HX 0700–2200 (0600–2100) only.
- **No confirmed slot/CTOT regime** — do not assume a hard flow-control window, but confirm current status at planning given the lack of a primary-source confirmation either way.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima / DVA exact figures.
- Clearance-delivery frequency/procedure (none found published — confirm whether Ground or Approach issues clearance).
- NADP/noise-abatement departure routing, if any.
- LVTO RVR minima by runway.
- EOSID/engine-out procedure detail per runway.
- Exact simultaneous-operations/crossing procedure between the 07/25 and 17/35 runway pairs.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. Taxiway Bravo PPR status), CTOT/ATFM, de-icing status, current RFF Category 8/9 notice status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **UK AIP (NATS AIS), AD 2 EGAA**, AIRAC effective 2025-03-20 — https://www.aurora.nats.co.uk/htmlAIP/Publications/2025-03-20-AIRAC/html/eAIP/EG-AD-2.EGAA-en-GB.html (retrieved 2026-07-26). *Runway/declared-distance data, communications, local aerodrome regulations (AD 2.20).*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from UK AIP (NATS AIS); K Global fields from live VAMSYS; 4-page pack. |
