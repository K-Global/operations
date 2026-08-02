# LFRS — Nantes Atlantique · Departure Page

**LFRS / NTE** · Bouguenais (Nantes), Pays de la Loire, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LFRS Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **RWY 03** preferred (until a 5 kt tailwind component is reached — noise-driven preference); **RWY 21** otherwise |
| Config logic | Noise-abatement preference for RWY 03, not purely wind-limit logic — see §3 |
| Transition altitude | 5,000 ft (Nantes TMA) |
| Take-off minima | Not published / verify — exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | Seasonal COHOR coordination (summer full slot; winter facilitation); CTOT/ATFM specifics not independently sourced 🟧 |
| De-icing on departure | Available on-field; season/pad detail not confirmed 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Standard stand-to-runway taxi via Ground/Tower assignment on the day; preferential runway vacating logic (used in reverse for arrival, but taxi-out routing follows the same taxiway constraints) means departures should expect routing that respects the LOC critical area on RWY 03 and the taxiway-width limits below.
- **Hot spots / tight taxiways:** 🟥 **TWY RD is limited to aircraft with wingspan < 36 m; TWY D and E are limited to aircraft with main-gear outer width (OMGWS) < 9 m.** **No takeoff is possible from TWY C or D** (except helicopters) on either runway. The **Antonov 124 (AN124)** is subject to specific taxiing restrictions per AIP chart GMC01 (name only); aircraft with **wingspan over 36 m** are subject to taxiing restrictions per AIP chart GMC02 (name only). **A340-200/300** must keep outer engines at idle for the entire taxi phase.
- **Runway crossings / read-back-required points:** Not individually named beyond the taxiway-width and LOC-critical-area constraints above — confirm with Ground/Tower on the day.
- **Low-vis taxi caveats:** 🟧 **In LVP, TWY B and E are not usable.** When RVR < 150 m, only TWY A, R1, R2, C, RC, R3, D, RD, R4, R5, F are usable. **Follow-me is mandatory for entry to stand KILO 1 when RVR < 350 m.**

---

## 3. Runway / SID selection logic

- **By wind / config:** **RWY 03 is preferred until a 5 kt tailwind component is reached** — this is a **noise-abatement preference**, not simply standard into-wind runway selection; do not assume RWY 21 will be assigned purely because of a light tailwind component under 5 kt.
- **By departure direction:** RWY 03 departures follow SIDs designed to avoid overflying the urbanised areas of Nantes, Rezé and Bouguenais (takeoff from TWY B only for CAT A/B aircraft). RWY 21 departures follow SIDs designed to avoid overflying Bouaye, La Chevrolière and Pont Saint Martin, and **must not turn before reaching LULID** (2.3 NM from NTS VOR / 1.3 NM from NT locator).
- **Noise / preferential-runway program:** See Briefing §12 for the full ACNUSA noise/curfew regime — RWY 03 preference, per-runway SID noise-avoidance routing, and the mandatory position-report requirement that applies to RWY 21 **arrivals** (not departures).
- **Interaction with arrivals:** Single-runway-system field (03/21) — departures and arrivals share the same physical runway; sequencing is managed by Nantes Tower/Approche per the active runway direction.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| RNAV SID — not published / verify 🟧 | 03 | Avoids overflying Nantes/Rezé/Bouguenais urbanised areas — verify gradient on current chart | Takeoff from TWY B restricted to CAT A/B aircraft |
| RNAV SID — not published / verify 🟧 | 21 | Must not turn before **LULID** (2.3 NM NTS VOR / 1.3 NM NT locator); avoids overflying Bouaye/La Chevrolière/Pont Saint Martin — verify gradient on current chart | |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; standard 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart. 🟧
- **Noise-abatement departure procedure (NADP):** No single mandated fleet-wide NADP variant (NADP1/NADP2) confirmed in the reachable extract — the field's noise-abatement approach is expressed through per-runway SID routing and the RWY 03 preferential-runway rule (§3) rather than a stated NADP profile. 🟧
- **Early turn / altitude constraints:** **RWY 21 departures must not turn before LULID** (2.3 NM from NTS VOR / 1.3 NM from NT locator) — a hard-stated noise-abatement early-turn constraint; verify the full gradient/turn structure on the current SID chart. RWY 03 SID early-turn constraints not individually detailed in the reachable extract. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not published in the reachable extract — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** No significant close-in high terrain expected at this low-lying coastal Loire-estuary field (see [Briefing §3.1](index.md)); 🟧 not independently cross-checked against a published obstacle chart this pass.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not published in the reachable extract — verify current chart. 🟧 Note the field's asymmetric approach-aid picture is directly relevant to departure alternate/return planning: RWY 03 carries full CAT III ILS while **RWY 21 has no ILS at all** (RNP Y / RNP Z AR only) — this shapes which runway direction is realistically usable for a return in low visibility.
- **De-icing:** Available on-field; specific pad location, fluid type and holdover-time provisioning not detailed in the reachable extract. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not separately named from Ground in the reachable extract — expect initial contact/clearance via **Nantes Ground (121.655)** or Tower per local procedure. 🟧
- **Frequency sequence:** **Ground 121.655 (HO) → Tower 118.655 (HO) → Nantes Approche** (119.400 aux below FL115 / 119.535 above FL115 Sector LU / 120.130 Sectors NA1-4 / 121.215 aux above FL115 / 124.250 Sectors NB1-5 / 124.430 Sectors RS1-4 — sector-specific, take the assigned frequency). (Frequencies from [Briefing §8](index.md).)
- **CTOT / slot handling:** Seasonal **COHOR** coordination applies (summer full slot coordination, winter facilitation only) — comply with any assigned CTOT/slot per the active season. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** **RWY 03** TORA/TODA/ASDA/LDA all 2,853/2,903/2,853/2,853 m; **RWY 21** TORA/TODA/ASDA 2,853/2,913/2,853 m (LDA reduced to 2,591 m by displaced threshold, not a departure-relevant figure). Non-limiting for the Category R fleet types assigned to this destination. Intersection departures are available (TWY B on RWY 03: TORA/TODA/ASDA 2,001/2,051/2,001 m; TWY E on RWY 21: 2,343/2,403/2,343 m) — confirm which is planned before assuming full-length distances.
- **Density altitude / temperature:** Non-issue — 90 ft AMSL, temperate coastal climate, no hot-and-high penalty.
- **Contamination / wet-runway:** No LFRS-specific contamination/braking-action data confirmed this pass — the runway's **published non-uniform longitudinal/transverse slope profile** (see [Briefing §3.3](index.md)) is itself a distinct surface-geometry caution independent of contamination, and should be weighted in takeoff/rejected-takeoff planning. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty expected for Category R types at LFRS.

---

## 10. Gotchas

- **The runway is curved and there is no visibility of the opposite threshold from either end** — do not assume a clear sightline down the runway on the takeoff roll; brief this explicitly (see [Briefing §3.3](index.md)).
- **RWY 03 preference triggers at only a 5 kt tailwind component** — a noise rule, not a wind-limit rule; do not assume RWY 21 assignment on a light tailwind alone.
- **RWY 21 departures must not turn before LULID** — a hard noise-abatement early-turn constraint, verify the exact structure on the current SID chart.
- **No takeoff from TWY C or D** (except helicopters) on either runway — confirm the assigned departure point.
- **TWY RD/D/E carry hard wingspan/OMGWS limits** — verify the assigned aircraft against these before accepting a taxi route through them.
- **Hard curfew 0000–0600** — a departure delay risking a stand-departure in this window is prohibited outright; build buffer into the last rotation of the day and treat any slip toward the narrow 2100–2330 exception window as requiring the Ministerial-notification process (Briefing §12), not routine schedule flexibility.
- **RWY 21 has no ILS** — if a return to LFRS or a diversion back is contemplated in low visibility, RWY 03 (CAT III) is the realistic option unless RNP AR is authorised and current for the RWY 21 RNP Z (AR) procedure.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and exact RNP/gradient specifics per runway.
- Take-off minima / DVA exact figures.
- Start-up/push-back procedure detail (cross-bleed/APU notification).
- NADP profile (if any is formally mandated beyond the per-runway SID noise routing).
- LVTO RVR minima.
- EOSID/engine-out procedure detail per runway.
- De-icing pad location and provisioning detail.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. RWY 03 ILS status given RWY 21 has no ILS), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **SIA France eAIP — AD 2 LFRS**, AIRAC cycle eff. 09 JUL 2026 (retrieved 2026-07-26) — https://www.sia.aviation-civile.gouv.fr/ (eAIP France portal; AD 2 LFRS section within the current AIRAC package). Primary source for runway/declared-distance data, communications, SID/noise-routing detail (AD 2 LFRS.21), and taxiway restrictions.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
