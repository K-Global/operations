# EGGP — Liverpool · Departure Page

**EGGP / LPL** · Liverpool (Speke), Merseyside, England, United Kingdom · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [EGGP Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **09 or 27** — wind-driven, single runway, no crosswind alternative |
| Config logic | Single-runway field; runway-in-use is wind-driven; **RWY 09 restricted for night take-off use** (§3) |
| Transition altitude | 5,000 ft |
| Take-off minima | Published per AIP — exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | ACL-coordinated (§4); DPI messaging operational to Network Manager Operations Centre |
| De-icing on departure | Available H24, centralised, prior arrangement |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Main Apron access via Taxiways Uniform/Victor/Whisky; Eastern Apron access via Taxiway Tango. **Wingspan ≥36 m aircraft must enter the Main Apron via Taxiway Whiskey.**
- **Hot spots / tight taxiways:** 🟥 **Wingspan ≥52 m aircraft on Taxiway Alpha (Holding Point A3 to the RWY 27 threshold) require a follow-me escort** keeping the nosewheel on centreline — a wing person is stationed near a building infringing the Code E taxiway strip in that segment. **Rapid-exit turn-off caution at Echo** when taxiing Main Apron via Victor to RWY 09/27. **Stands 1 and 32 are out of ATC's direct sightline** owing to hangar positioning — listen carefully to taxi instructions.
- **Runway crossings / read-back-required points:** Single runway, no crossing runway on the field.
- **Low-vis taxi caveats:** Stop bars at A2/A3/A8/K/T/U/V/W illuminated during Low Visibility Ops; departing RWY 27 aircraft hold at Alpha 2. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Single runway 09/27, no crosswind alternative — the assigned runway is a function of the reported/forecast wind.
- **By departure direction:** RWY 09 departs ENE; RWY 27 departs WSW. **RWY 09 is night-restricted for take-off use** (2300–0700/2200–0600) — available only when overriding operational considerations (e.g., performance) necessitate it; RWY 27 is the expected normal night-departure runway subject to wind.
- **Noise / preferential-runway program:** RWY 27 departures >5,700 kg MTWA must **climb straight ahead at maximum rate to 1,000 ft AAL** before turning. RWY 09 departures — initial turn onto outbound heading not below 500 ft AAL and not before passing the runway end. All turbo-jet departures reduce power to maintain at least 500 ft/min climb at progressively decreasing power settings.
- **Interaction with arrivals:** Single-runway field — departures and arrivals share the same runway; a runway-direction swap affects the whole operation at once. RWY 27 arrivals are additionally shaped by Manchester's runway-in-use (Briefing §3.2), which can extend the inbound track and indirectly affect departure sequencing.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not comprehensively confirmed in reachable research pass 🟧 | 09 / 27 | Not confirmed — verify RNP/gradient on current chart | Cross-referenced Manchester-coordination route names (EKLAD 1R/Y, ASMIM 1S/Z, WAL 2T/V) relate to shared airspace, not a full Liverpool SID list — pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC instruction; 250 KIAS below FL100 (UK/ICAO norm) unless ATC states "No ATC Speed Restriction" — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed as a specific mandated NADP1/2 variant in reachable sources — noise abatement is expressed through the runway-specific climb/turn rules in §3. 🟧
- **Early turn / altitude constraints:** RWY 27 — climb straight ahead to 1,000 ft AAL before turning (>5,700 kg MTWA). RWY 09 — no turn below 500 ft AAL and not before passing the runway end.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Obstacle tables list trees, fences, road signs and bushes at 68–129 ft elevation (4–74 ft above ground, unlit) in the 09/approach and 27/approach/09-take-off sectors, plus masts up to 622 ft and chimneys up to 654 ft in the circling area. None cross-checked against the current EOSID/obstacle chart this pass. See [Briefing §3.1](index.md). 🟧
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed this pass. RWY 27's CAT III authorisation implies a developed low-vis capability; RWY 09's category is not confirmed to the same standard — brief accordingly. 🟧
- **De-icing:** **Available H24**, centralised, subject to prior arrangement via handling agent. Fluid type and pad location(s) not confirmed in reachable sources. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** No separate Delivery frequency found in reachable sources — initial call for start/taxi is to **Liverpool Tower 126.355** unless ATIS states Ground is in operation, then **Liverpool Ground 121.955**.
- **Frequency sequence:** **Ground 121.955 (or Tower 126.355 if Ground not active) → Tower 126.355 (H24) → Liverpool Approach 119.855 (H24) / Liverpool Radar 118.455 (as directed) or 119.855 (H24).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** Every flight (except GA/military) requires prior Airport Operations Director approval and prior ACL notification — see [Briefing §5](index.md)/[Dispatch §4](dispatch.md). **DPI messaging is fully operational** to the Network Manager Operations Centre — comply with any assigned CTOT/EDCT-equivalent.

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 09/27 (2,285 m; TORA 2,162 m RWY 09 / 2,285 m RWY 27) is generally workable for narrowbody/regional Code C types; a **Code E widebody at high takeoff weight should be checked against the current-cycle field-length/weight chart** — the 61 m RWY 09 threshold displacement affects LDA (landing), not TORA (take-off), on that direction. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).
- **Density altitude / temperature:** Non-issue at 81 ft, temperate maritime climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Standard UK winter icing/snow season; SNOCLO possible during snowfall — no specific braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — check any Code E type against the 2,285 m runway, the RWY 27 undershoot RESA constraint, and the wingspan ≥52 m follow-me requirement on Taxiway Alpha before planning a widebody departure.

---

## 10. Gotchas

- **RWY 09 is night-restricted for take-off use** (2300–0700/2200–0600) — do not plan a routine night departure off RWY 09 without an operational-necessity justification.
- **Wingspan ≥52 m aircraft require a follow-me escort on Taxiway Alpha** to the RWY 27 threshold — do not self-taxi that segment without escort if the type qualifies.
- **Stands 1 and 32 are out of ATC's direct sightline** — listen carefully; do not assume ATC has visual confirmation of your position.
- **Rapid-exit turn-off caution at Echo** when taxiing Main Apron via Victor toward RWY 09/27.
- **PPR and mandatory handling apply to every visiting/non-based flight** — filing a flight plan does NOT constitute a PPR request; confirm before an ad-hoc departure.
- **Reverse thrust should be avoided after landing** (relevant to the prior arrival, briefed here for crew awareness of the field's noise culture), "especially between 2300–0600 (2200–0500)."
- **Engine testing restricted to 0700–2300 (0600–2200).**

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Comprehensive current-AIRAC SID list, names and RNP/gradient specifics per runway.
- Take-off minima exact figures.
- EOSID/engine-out procedure detail per runway.
- LVTO RVR minima.
- De-icing pad location(s)/fluid type.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/navaid/lighting, bird activity), CTOT/PPR status, de-icing/SNOCLO status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **UK NATS eAIP — AIP United Kingdom, AD 2 EGGP**, AIRAC effective 2020-10-08 — https://www.aurora.nats.co.uk/htmlAIP/Publications/2020-10-08-AIRAC/html/eAIP/EG-AD-2.EGGP-en-GB.html (retrieved 2026-07-26). *Runway/declared distances, noise-abatement rules, taxi/hot-spot detail, communications.*
- OurAirports — https://ourairports.com/airports/EGGP/ (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from UK AIP (NATS AIS); K Global fields from live VAMSYS; 4-page pack. |
