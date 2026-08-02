# TAPA — V C Bird Intl · Departure Page

**TAPA / ANU** · Osbourn, Saint George Parish, Antigua and Barbuda · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional, primary AIP not reachable this pass

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [TAPA Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Wind-dependent, RWY 07 or RWY 25 |
| Config logic | Wind-driven; no formal preferential-runway program identified |
| Transition altitude | 2,500 ft (tier-4) 🟧 |
| Take-off minima | Not confirmed this pass 🟧 |
| CTOT / flow regime | None identified |
| De-icing on departure | **NIL** |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not itemised in reachable sources; the field is described (tier-4) as a single ramp north of the runway connecting via four taxiways. Confirm the exact taxi routing with Ground/Tower on the day. 🟧
- **Hot spots / tight taxiways:** 🟥 **Taxiway A is restricted to day operations only, aircraft ≤65,000 lb (29,500 kg) MTOW and ≤100 ft (30 m) wingspan** — not usable for K Global Code C/D+ aircraft; confirm the assigned taxi routing uses an alternate taxiway.
- **Runway crossings / read-back-required points:** Single runway — no crossing traffic; standard hold-short discipline applies.
- **Low-vis taxi caveats:** No SMGCS/low-vis taxi procedure identified. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Wind-driven runway selection between RWY 07 and RWY 25; no published preferential program identified.
- **By departure direction:** No published departure-direction logic beyond standard runway-in-use selection.
- **Noise / preferential-runway program:** None identified.
- **Interaction with arrivals:** Single runway, non-radar procedural environment (Briefing §3.2) — departures and arrivals are sequenced procedurally by Tower/Approach rather than via radar deconfliction.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version if one exists. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| **None published** | 07 / 25 | Not applicable | V C Bird does not offer Standard Instrument Departures (tier-4 sourced) — departure routing is ATC-instructed on the day. Confirm against the current AIRAC in case this has changed. 🟧 |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Not confirmed from a primary source this pass; standard 250 KIAS below FL100 expected. 🟧
- **Noise-abatement departure procedure (NADP):** None identified.
- **Early turn / altitude constraints:** No published constraint identified — departures are ATC-instructed given the absence of a charted SID (§4).

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** No close-in high terrain identified for this field in reachable sources (Briefing §3.1); the primary AIP obstacle chart was not reachable this pass — treat as provisionally clear, not independently verified. 🟧
- **Special DP / obstacle DP:** Not confirmed. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** No LVP/CAT II-III infrastructure identified; standard take-off minima expected (not confirmed from a primary table this pass). 🟧
- **De-icing:** **NIL** — not applicable.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not separately published — clearance is obtained from V C Bird Ground/Tower (Briefing §8). All departing IFR traffic should notify Ground at least 5 minutes before start-up (tier-4 sourced).
- **Frequency sequence:** **Ground 121.900 → Tower 118.200 → Approach 119.100 (procedural, non-radar) → Piarco (TTZP) en route.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** No ATFM/CTOT regime identified; no discrete transponder code should be expected given the non-radar environment. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Full pavement length (3,038 m) is not limiting for K Global types; confirm current-day take-off performance against the (unconfirmed) TORA/TODA/ASDA figures once the primary AIP is accessible. 🟧
- **Density altitude / temperature:** Non-issue at 62 ft elevation.
- **Contamination / wet-runway:** No de-icing season; tropical-shower wet-runway braking-action consideration applies year-round, intensifying in hurricane season (Jun–Nov).
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length penalty identified for K Global types at this field.

---

## 10. Gotchas

- **No published SID** — expect ATC-instructed departure routing rather than a charted procedure.
- **Non-radar, procedural departure/approach control** — do not expect radar vectoring or a discrete SSR code by default.
- **Taxiway A is day-only and weight/wingspan-restricted** — confirm the ground routing avoids it for any K Global Code C/D+ aircraft.
- **Notify Ground at least 5 minutes before start-up** (tier-4 sourced) — build this into the pushback/start sequence.
- **Hurricane season (Jun–Nov)** carries real diversion/closure risk across the Leeward Islands.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary AIP not reachable this pass** — re-verify this entire page against the Eastern Caribbean AIP when access is available.
- Take-off minima exact figures.
- TORA/TODA/ASDA per runway.
- EOSID/engine-out procedure detail per runway.
- Confirmation that no SID exists on the current AIRAC (tier-4 sourced as of the 2021 VATCAR document).

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM status, tropical-cyclone advisories in season. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- VATSIM Caribbean (VATCAR, Piarco FIR division) — "V.C. Bird International Airport (TAPA)" airport SOP — https://piarco.vatcar.net/wp-content/uploads/2021/08/VC-Bird-International-Airport-TAPA.pdf (retrieved 2026-07-26). **Network-sim document, not regulatory** — no-SID statement, notify-Ground-before-start-up procedure, Taxiway A restriction.
- SkyVector — https://skyvector.com/airport/TAPA/St-Johns-Vc-Bird-Antigua-Airport (retrieved 2026-07-26). *Runway/communications cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national/territory AIP; K Global fields from live VAMSYS; 4-page pack. |
