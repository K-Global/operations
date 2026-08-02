# GMTT — Ibn Batouta Intl · Departure Page

**GMTT / TNG** · Tangier, Morocco · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [GMTT Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **10 or 28** (only usable runway pair) — selection is wind-driven only 🟧 |
| Config logic | Wind-driven — single runway, no crosswind alternative at the field |
| Transition altitude | Not published / verify current chart 🟧 |
| Take-off minima | Not published / verify current chart 🟧 |
| CTOT / flow regime | None identified in reachable sources — treat as unconfirmed 🟧 |
| De-icing on departure | Not applicable — coastal, low-elevation field |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not published / verify locally — single terminal, single runway pair; expect a straightforward taxi with limited routing options. 🟧
- **Hot spots / tight taxiways:** None identified in reachable sources — not confirmed as "none exist" on current AIRAC. 🟧
- **Runway crossings / read-back-required points:** Not published / verify. 🟧
- **Low-vis taxi caveats:** Coastal marine fog is a recognised regional hazard (see [GMTT Briefing §14](index.md)); SMGCS/low-vis taxi routing not confirmed in reachable sources. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Runway 10 or 28 selected by prevailing wind; the Strait of Gibraltar gap-wind effect (Levante/Poniente) can produce strong, gusty conditions favouring one direction sharply over the other — see [GMTT Briefing §3.4](index.md).
- **By departure direction:** Not published / verify — no confirmed preferential-direction logic beyond wind.
- **Noise / preferential-runway program:** Not published / verify. 🟧
- **Interaction with arrivals:** Single runway serves both arrivals and departures — no independent/dependent-runway configuration exists at this field.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed — verify current AIRAC | 10 / 28 | Not confirmed 🟧 | Pull the current-AIRAC SID list at planning; terrain to the south/east of the field (see [GMTT Briefing §3.1](index.md)) makes any published climb-gradient constraint worth confirming before a RWY 28 departure |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Not published / verify current chart. Standard 250 KIAS below FL100 (ICAO norm) assumed absent a local override.
- **Noise-abatement departure procedure (NADP):** Not published / verify. 🟧
- **Early turn / altitude constraints:** Not published — verify chart, particularly on a RWY 28 departure given the terrain context in [GMTT Briefing §3.1](index.md).

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed whether a runway-specific procedure is published — verify current AIRAC, particularly for RWY 28 given the close-in high terrain to the south/east. 🟥
- **Close-in / distant obstacles:** Rif foothill terrain rises to the south/southeast of the field — cross-ref [GMTT Briefing §3.1](index.md), the site of a historical CFIT accident on the RWY 28 approach.
- **Special DP / obstacle DP:** Not confirmed — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not published / verify current chart. Coastal marine fog is a recognised seasonal hazard — see [GMTT Briefing §14](index.md). 🟧
- **De-icing:** Not applicable — coastal North African field, low elevation; de-icing infrastructure not expected. 🟧

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not published — cross-ref [GMTT Briefing §8](index.md) (no dedicated Delivery frequency identified this pass).
- **Frequency sequence:** Ground (not published) → **Tanger Tower 119.50** → **Tanger Approach 121.20** — see [GMTT Briefing §8](index.md) for full detail and source caveats.
- **CTOT / slot handling:** No ATFM/CTOT regime identified in reachable sources for this field — treat as unregulated pending confirmation. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Non-limiting for a K Global Category **S** operation on the 3,500 m main runway; note the RWY 28 displaced threshold (500 m) if departing from an intersection or planning a rejected-takeoff scenario. 🟧
- **Density altitude / temperature:** Sea-level coastal field — non-issue.
- **Contamination / wet-runway:** No grooving/contamination data obtained; treat standard wet-runway braking-action caution as applicable in the Atlantic frontal-weather season (see [GMTT Briefing §14](index.md)). 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-specific type penalty identified.

---

## 10. Gotchas

- Runway **07/25 is permanently closed** — confirm no chart or FMS reference treats it as usable.
- **RWY 28's 500 m displaced threshold** reduces available landing distance from that end — relevant if planning an intersection departure or considering the runway for a return/diversion scenario.
- Strait of Gibraltar **gap-wind effect** can shift or strengthen with little warning — recheck wind trend close to departure time.
- No confirmed crosswind-runway alternative — a strong crosswind event on 10/28 has no on-field workaround.
- Terrain to the south/southeast is real and historically significant (1973 CFIT accident on the RWY 28 approach, see [GMTT Briefing §3.1](index.md)) — maintain terrain discipline on any RWY 28 departure requiring an early turn.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- SID names/gradients, transition altitude, take-off minima, NADP, LVTO minima, engine-out procedure, clearance-delivery frequency, CTOT/ATFM regime, taxi routing/hot spots — none confirmed in reachable sources this pass.
- Primary AIP (ONDA Morocco) not reached this build session — see [GMTT Briefing §18](index.md).

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here. See the source register for the tier hierarchy.*

- AIP Morocco (ONDA), AD 2 GMTT — attempted, not reachable within this build session (retrieved attempt 2026-07-26).
- OurAirports — https://ourairports.com/airports/GMTT/runways.html , /frequencies.html (retrieved 2026-07-26). *Runway/frequency cross-check.*
- SkyVector — https://skyvector.com/airport/GMTT (retrieved 2026-07-26). *Runway/threshold and frequency cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Morocco (ONDA); K Global fields from live VAMSYS; 4-page pack. |
