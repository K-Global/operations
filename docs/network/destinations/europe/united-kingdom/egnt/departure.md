# EGNT — Newcastle · Departure Page

**EGNT / NCL** · Woolsington, Newcastle-upon-Tyne, England, United Kingdom · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [EGNT Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **07 or 25** — single runway, wind-driven; no published preferential-runway rule found |
| Config logic | Wind-driven single-runway direction of use; brief the RWY25 160°–190° wind-disturbance hazard and the RWY07 pressure-transition rushed-approach hazard regardless of active end (relevant to the arriving traffic you'll be sequenced behind/around) |
| Transition altitude | 6,000 ft |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | **PPR at all times** is the standing gate; no independent CTOT/ATFM data confirmed for EGNT specifically 🟧 |
| De-icing on departure | Listed H24 availability per AD 2.20; provisioning detail not confirmed 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Confirm exact stand-to-runway taxi routing with Ground/Apron on the day; not itemised route-by-route in the reachable AIP extract this pass. 🟧
- **Hot spots / tight taxiways:** 🟥 **Ground-movement wingspan restrictions** — Holding Point D2 max 36 m wingspan; Taxiway E max 17 m; Taxiway F max 27.5 m — larger aircraft towed with caution through these points. **Code E and higher aircraft (except the Boeing 787-8) must not use the angled Taxiway B/C (Hold CW) turnoffs.**
- **Runway crossings / read-back-required points:** Not individually confirmed this pass. 🟧
- **Low-vis taxi caveats:** CAT II/III holding points are published (RWY07 = A2; RWY25 = D3 or D2), implying SMGCS-type low-vis taxi discipline in low-visibility conditions; exact routing not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Single runway, direction of use is wind-driven. No published preferential-runway rule was found in the reachable AIP extract — treat as tactical ATC assignment on the day.
- **By departure direction:** Not applicable — single runway, both directions available per wind.
- **Noise / preferential-runway program:** No published NAP/preferential-runway program identified this pass. 🟧
- **Interaction with arrivals:** Single-runway field — departures and arrivals share the one runway; sequencing is entirely tactical ATC. The **turn pad 50 m before the RWY25 threshold** (usable to B757 size, "use with caution at night") is a ground-movement feature relevant to RWY25 operations generally, arrival or departure.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 07 / 25 | No unusual gradient expected at this low-elevation field — verify RNP/gradient on current chart 🟧 | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (UK/ICAO norm) — confirm current chart. 🟧
- **Noise-abatement departure procedure (NADP):** Not confirmed in reachable sources this pass. 🟧
- **Early turn / altitude constraints:** Published per SID — verify on the current chart; none independently confirmed this pass.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources this pass — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** No close-in high terrain identified in the reachable AIP extract this pass (see [Briefing §3.1](index.md)); a bird-hazard area (nature reserve + woodland north of the field, 1.2 NM from the RWY25 touchdown zone) is the one specifically sourced hazard, more relevant to arrival than departure but worth crew awareness on a RWY25 departure roll toward that sector.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** CAT II/III operations are authorised on both runways subject to serviceability, with CAT II/III holding points published (RWY07 = A2; RWY25 = D3 or D2) — implying an LVP regime exists, but exact LVTO RVR minima are not confirmed this pass. 🟧 Note also the **RWY07 lighting degradation** — two luminaires removed 510 m from the RWY07 threshold as part of a CAT II/III lighting-removal programme — a relevant low-visibility-capability caution for departures off RWY07 in marginal conditions.
- **De-icing:** Listed **H24 availability** per AD 2.20 remarks; pad location, fluid type and holdover/throughput detail not confirmed this pass. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not separately published as a distinct "Delivery" frequency in the reachable AIP extract — confirm current chart; **Datalink Departure Clearance (DCL)** is available via ARINC/SITA for aircraft flight-planned via **GIRLI P18** or **BAVDO/ERKIT N110**, requested no earlier than 20 minutes before EOBT.
- **Frequency sequence:** **Ground 121.730 (as directed by ATC) → Tower 119.705 (H24) → Approach/Radar 124.380 (H24) → Director 125.830 (as directed by ATC)** as applicable. Take the assigned frequency and confirm current chart. (Frequencies from [Briefing §8](index.md).)
- **CTOT / slot handling:** **PPR at all times** is the standing gate (§4/Dispatch §4) — office-hours slots via Airport Coordination Ltd (ACL), otherwise via Samson Aviation per movement. No independent CTOT/ATFM data confirmed for EGNT specifically. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Physical runway length 2,330 m is non-limiting for narrowbody types at typical departure weights; TORA/TODA/ASDA figures per runway are published in [Briefing §7](index.md) — confirm against type-specific field-length performance for the planned weight. Several intersection-takeoff distances (Taxiways B/C/E/F/G) are published but not individually transcribed here — pull the current-AIRAC table if an intersection departure is being considered.
- **Density altitude / temperature:** Non-issue at 266 ft, temperate UK coastal climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Standard UK winter contamination/braking-action consideration; no EGNT-specific data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — the Code E+ Taxiway B/C turnoff restriction (with the B787-8 exception) is a ground-handling item rather than a takeoff-performance one, but relevant to any Code E type routed through EGNT.

---

## 10. Gotchas

- **PPR is a standing, all-times requirement** — a filed flight plan is not permission; confirm PPR/slot status before dispatch on every rotation, not just as a special case.
- **RWY25, wind 160°–190°: expect wind disturbance and possible negative gradient** on approach for arriving traffic you may be sequenced around — brief crews on this named hazard even when the departure itself is unaffected.
- **RWY07, high-to-low pressure transitions (or strong sea breeze): rushed-approach risk for arriving traffic** — again a sequencing/traffic-flow awareness item for departing crews as much as a direct departure hazard.
- **Ground-movement wingspan limits** at Holding Point D2 (36 m), Taxiway E (17 m) and Taxiway F (27.5 m) — plan towing for larger types.
- **Code E+ aircraft (except B787-8) must not use the angled Taxiway B/C turnoffs** — relevant to taxi routing awareness even pre-departure.
- **RWY07 lighting: two luminaires removed 510 m from threshold** as part of a CAT II/III lighting-removal programme — a low-visibility-capability caution.
- **Mandatory 24-hour high-visibility clothing area on the aprons.**
- **Bird hazard** concentrated north of the field near the RWY25 touchdown zone (nature reserve + woodland) — a factor on a RWY25 departure track toward that sector.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima / DVA exact figures.
- Clearance-delivery frequency (not separately confirmed beyond the DCL datalink procedure).
- Start-up/push-back procedure detail.
- NADP preference and noise-abatement departure procedure detail.
- LVTO RVR minima.
- EOSID/engine-out procedure detail per runway.
- De-icing pad location/provisioning detail.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. RWY07 lighting-removal-programme status), CTOT/ATFM, de-icing status, PPR/slot confirmation. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **UK NATS eAIP, AD 2 EGNT**, AIRAC effective 2026-05-14 — https://www.aurora.nats.co.uk/htmlAIP/Publications/2026-05-14-AIRAC/html/eAIP/EG-AD-2.EGNT-en-GB.html (retrieved 2026-07-26). *Runway/declared distances, communications, PPR/slot regime, DCL procedure, ground-movement restrictions, CAT II/III holding points, lighting-removal note.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from UK AIP (NATS AIS); K Global fields from live VAMSYS; 4-page pack. |
