# OMSJ — Sharjah Intl · Departure Page

**OMSJ / SHJ** · Sharjah, United Arab Emirates · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [OMSJ Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **12 or 30** — whichever matches Dubai Intl's active runway direction; not independently wind-selected at Sharjah |
| Config logic | 🟥 **Slaved to Dubai Intl's active configuration** (Dubai CTA flow-control interaction) — see §3 |
| Transition altitude | 13,000 ft 🟧 (UAE-wide standard value; not independently confirmed for OMSJ) |
| Take-off minima | Published per AIP; not confirmed in reachable sources 🟧 |
| CTOT / flow regime | No formal slot/CTOT program identified; departure release is coordinated with Dubai Departures/Approach/Tower when exit points are shared, with named 3-minute separation minima on specific SIDs into the Muscat FIR 🟧 |
| De-icing on departure | **NIL** — hot desert climate |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Reported practice (tier-4 network-sim reference, verify locally): departing from **RWY 30**, passenger-apron traffic (stands 1A–26) taxis via A and A20 to holding point B20; cargo-apron traffic (stands 50–62) taxis via Z8, A8 and B to the same point. Departing from **RWY 12**, passenger-apron traffic taxis via A and A2 to holding point B2; cargo-apron traffic again via Z8, A8 and B.
- **Hot spots / tight taxiways:** 🟥 Eastbound taxiway-B traffic flow between **B2 and B7** blocks the RWY 30 exit taxiways; westbound B-flow between **B14 and B11** blocks the RWY 12 exits — both reported as points requiring active traffic deconfliction. 🟧
- **Runway crossings / read-back-required points:** Not specifically identified beyond the above; confirm current taxi-diagram hot spots with Ground on the day.
- **Low-vis taxi caveats:** 🟧 During low-visibility operations, a tier-4 source reports intersection departures are not permitted and only the full-length CAT I holding points (B2 for RWY 12, B20 for RWY 30) may be used — treat as unconfirmed against a primary source.

---

## 3. Runway / SID selection logic

- **By wind / config:** 🟥 **Not independently wind-determined at Sharjah.** The active runway is set to match Dubai Intl's active runway direction because of close arrival/departure interaction inside the shared Dubai CTA — see [Briefing §3.2](index.md).
- **By departure direction:** Not applicable in the usual sense — SID assignment follows the first waypoint in the filed flight plan and is issued to route the aircraft out of the Dubai TMA; Sharjah is reported to share common SID/STAR endpoints with Dubai specifically to manage this shared traffic flow.
- **Noise / preferential-runway program:** Not identified in reachable sources. 🟧
- **Interaction with arrivals:** Direct and structural — Sharjah's departure release is coordinated with Dubai Departures/Approach/Tower whenever multiple departures (from either field) are routing to the same exit point, and a tier-4 network-sim reference records named 3-minute longitudinal separation requirements toward specific Muscat FIR entry points from certain Sharjah SIDs.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed from a primary AIP source 🟧 | 12 / 30 | Not confirmed 🟧 | A tier-4 network-sim reference lists SID assignment by first-waypoint (ANVIX, DAVMO, EMERU, IVURO, KUTLI, MIROT, NABIX, RIDAP, SENPA each map to a specific SID identifier per runway) — pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** A tier-4 network-sim reference states an initial climb altitude of 3,000 ft for departures pending further clearance — verify against the current chart. 🟧
- **Noise-abatement departure procedure (NADP):** Not confirmed in reachable sources. 🟧
- **Early turn / altitude constraints:** Radar-heading departure instructions (issued before take-off clearance, coordinated with departures control) are reported as standard practice at this field rather than a fixed noise-driven early-turn procedure — verify current chart/AIP. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat coastal desert terrain — no significant close-in obstacle identified for either runway direction. See [Briefing §3.1](index.md).
- **Special DP / obstacle DP:** Not confirmed. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed from a primary source. A tier-4 network-sim reference describes a generic LVO trigger structure (RVR/visibility ≤1,500 m or ceiling ≤500 ft; all ops suspended below RVR 350 m) and states intersection departures are not permitted in LVO, with only the CAT I holding points (B2/B20) usable — this does not establish confirmed CAT II/III equipment at OMSJ and should be treated as unconfirmed. 🟧
- **De-icing:** **NIL** — hot desert climate, no de-icing requirement. 🟩

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Sharjah Ground, 121.875 — voice only; **no CPDLC/datalink clearance delivery is reported** at this field. Reported practice is to contact Ground approximately 10 minutes prior to start-up with callsign, aircraft type, stand, requested flight level, destination and current ATIS/QNH. 🟧
- **Frequency sequence:** **Ground 121.875 (push-back/taxi) → Tower 118.600 (line-up/take-off) → [no tower handoff] → Dubai Departures (South) 121.025 or Dubai Departures (North) 124.675, as assigned in the initial IFR clearance.** (Frequencies from [Briefing §8](index.md).) 🟥 **Sharjah Tower does not provide a handoff to departure control** — the airborne frequency is issued as part of the initial clearance and pilots are expected to change to it themselves once airborne without a further tower prompt.
- **CTOT / slot handling:** No formal CTOT/EDCT program identified for OMSJ. Departure release is coordinated with Dubai Departures/Approach/Tower when multiple departures share an exit point, and named 3-minute separation minima apply on specific SIDs feeding the Muscat FIR. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Single 4,060 m runway (TORA/ASDA full length; intersection options at reduced length — see [Briefing §7](index.md)) is non-limiting for any K Global type.
- **Density altitude / temperature:** 🟧 Sea-level elevation, but **extreme summer heat (40–45°C common, hot desert/BWh climate)** is a genuine density-altitude/performance consideration for any type departing close to MTOW in the summer months.
- **Contamination / wet-runway:** Not a seasonal factor at this hot, low-precipitation field.
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — field length is non-limiting; the summer heat/density-altitude consideration is generic to the type's standard hot-weather performance planning rather than field-specific.

---

## 10. Gotchas

- **The active runway is not locally wind-determined** — it follows Dubai Intl's active configuration; do not assume from Sharjah ATIS wind alone.
- **No tower-to-departure handoff** — self-select and change to the assigned Dubai Departures frequency after airborne.
- **Both runway thresholds are displaced** (~300 m) — usable take-off run for reduced-length intersection departures is less than the full published length; confirm the correct figure for the assigned holding point.
- **No CPDLC/datalink clearance at Sharjah** — voice-only IFR clearance delivery via Ground.
- **GNSS jamming/spoofing has been specifically reported at this field** as part of a wider Gulf pattern — brief a DME/DME/IRU cross-check contingency and advise ATC early if FMS position drift is suspected.
- **Extreme summer heat** — a real density-altitude performance consideration despite sea-level elevation.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names, runway-specific routings and RNP/gradient specifics.
- Take-off minima exact figures.
- Noise-abatement departure procedure (NADP) preference, if any.
- LVTO minima and confirmed CAT II/III equipment status (a generic LVO trigger structure is reported but not tied to confirmed ILS category).
- EOSID/engine-out procedure detail per runway.
- Exact push-back/start-up coordination procedure (10-minute-prior contact reported but not confirmed against a primary source).

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM and Dubai CTA flow-control status, GNSS-interference advisories. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- Arabian vACC (VATSIM) — Sharjah Aerodrome Information, Air Control Procedures, Ground Movement Procedures, Departing Traffic — https://library.vatsim-arabian.com/aerodrome/sharjah/aerodrome/ , /air/ , /gmc/ and https://library.vatsim-arabian.com/pilots/sharjah/departures/ (retrieved 2026-07-26). *Network-sim document, not regulatory — states it is derived from the GCAA eAIP and applicable CAA regulations; used here for cross-check of taxi routing, SID/waypoint assignment logic, Dubai-CTA flow-control dependency, clearance-delivery and frequency-handoff practice, LVO trigger structure. Per the VATSIM cross-check requirement in `_Instructions`, this is the operational-content validation source for this build.*
- SkyVector — https://skyvector.com/airport/OMSJ/Sharjah-International-Airport (retrieved 2026-07-26). *Communications frequency cross-check.*
- SKYbrary — https://skybrary.aero/airports/omsj (retrieved 2026-07-26). *Climate (Köppen BWh) and summer-heat corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
