# BGSF — Kangerlussuaq · Departure Page

**BGSF / SFJ** · Kangerlussuaq, Qeqqata Municipality, Greenland (Kingdom of Denmark) · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for X-Plane 11, not a chart. Companion to the [BGSF Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal. **Role note:** a departure from BGSF is normally the recovery leg **out of** a primary ETOPS/EDTO diversion — see [`OM E — ETOPS/EDTO Procedures`](../../../../../flight-ops/etops-edto.md).

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Not published / verify — expect wind-driven selection along the fjord axis (09/27) 🟧 |
| Config logic | Wind/fjord-axis driven; no preferential-runway rule published |
| Transition altitude | Not published / verify 🟧 |
| Take-off minima | Not published / verify 🟧 |
| CTOT / flow regime | None identified — low-traffic procedural field |
| De-icing on departure | Plausible via third-party FBO; procedure/frequency not confirmed 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not published / verify — no company-specific procedure identified. 🟧
- **Hot spots / tight taxiways:** None identified from sources reached — not confirmed absent. 🟧
- **Runway crossings / read-back-required points:** Single runway (09/27); no crossing-runway complexity, but confirm any published taxiway constraint on the current chart.
- **Low-vis taxi caveats:** Not published / verify; plausible follow-me availability given low staffing at a remote field. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Not published / verify — expect wind to drive runway selection along the fjord axis (09/27); RWY 09 is the only instrument-approach-served direction (Briefing §1/§10). 🟧
- **By departure direction:** RNP 1 SIDs are published for both RWY 09 and RWY 27 (AIRAC AMDT 12/24 series) — see §4.
- **Noise / preferential-runway program:** None identified — remote field, low population density (Briefing §12).
- **Interaction with arrivals:** Single runway; a late direction swap to RWY 27 removes the field's only published instrument approach for the **arrival** side, but RWY 27 does carry a published departure SID — brief the asymmetry between the two directions.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| RNP 1 SID RWY 09 | 09 | RNP 1; fjord-terrain climb gradient — verify current chart 🟧 | Published per AIRAC AMDT 12/24 series |
| RNP 1 SID RWY 27 | 27 | RNP 1; fjord-terrain climb gradient — verify current chart 🟧 | Published per AIRAC AMDT 12/24 series; RWY 27 has no matching instrument **approach** (arrival-side only gap) |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Not specifically published for this field — apply standard ICAO 250 KIAS below FL100 pending verification. 🟧
- **Noise-abatement departure procedure (NADP):** None identified — remote field, low population density (Briefing §12). NIL / verify. 🟧
- **Early turn / altitude constraints:** Given the fjord terrain, treat the published RNP 1 SID climb gradients as a real constraint, not a formality (Briefing §11) — verify current gradient requirements on the chart. 🟥

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not published / verify — no company-specific procedure identified. 🟧
- **Close-in / distant obstacles:** Terrain rises on both sides of Søndre Strømfjord; MSA/grid-MORA is driven by the Greenland icecap dome to the east (~10,500 ft) — see [Briefing §3.1](index.md) and the [Arctic airspace brief](../../../../airspace/arctic.md) §7. 🟥
- **Special DP / obstacle DP:** Not published — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not published / verify. 🟧
- **De-icing:** Third-party FBO/handling sources advertise de-icing coordination at BGSF; procedure/frequency not confirmed from a primary source. Given the extreme-cold operating environment, treat de-icing availability as needing pre-flight confirmation, not assumption — see [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md). 🟧

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** No dedicated Delivery frequency identified — coordinate via Tower (Briefing §8). 🟧
- **Frequency sequence:** **Tower 118.3 → Approach/Departure (Sondrestrom A-D) 126.2 → Sondrestrom Information/Radio (FIS) 121.3.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** No slot regime identified; low-traffic procedural field (Briefing §11).

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 2,810 m runway is not a constraint for any K Global type — long and widebody-capable (Briefing §1/§7).
- **Density altitude / temperature:** Non-issue at 165 ft; extreme cold rather than density altitude is the performance driver here — see [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).
- **Contamination / wet-runway:** Winter ice/snow contamination is expected at this latitude; braking-action reporting reliability at a low-traffic field should be treated with caution (Briefing §3.3).
- **Link to OM B:** Confirm RFF category (certified CAT 8 vs a possibly current CAT 7 w/ 4h PN limitation) against the specific type's ARFF/RFF requirement via [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) before nominating BGSF unannounced for the largest widebody types. 🟥

---

## 10. Gotchas

- **RWY 27 has a published departure SID but no published arrival approach** — do not assume symmetric capability between the two directions.
- **RFF may be limited to CAT 7 (vs CAT 8 certified) and may require 4h prior notice** — confirm before diverting/departing unannounced with our largest types.
- **Katabatic/foehn wind events off the icecap** can change wind conditions rapidly — brief for a late runway-change contingency before departure.
- **Procedural (non-radar) control** — maintain compulsory position reports on departure; do not expect radar vectoring.
- **Extreme cold / fuel cold-soak** — confirm fuel state and any required warming/mitigation before a departure following a diversion recovery.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Preferential/usual departure runway logic — not published.
- Transition altitude, take-off minima — not published.
- RNP 1 SID climb-gradient figures — verify on current chart.
- Stand → runway taxi routing and hot spots — not published.
- De-icing procedure/frequency — availability plausible via third-party handling but not confirmed from a primary source.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), de-icing status, ATS staffing at the intended departure time. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here. See Sources for the tier hierarchy.*

- See [BGSF Briefing — Sources & References](index.md) for the full AIP/OurAirports/SkyVector/AirportGuide citation set underlying this page's static data (AIRAC AMDT 12/24 SID names/dates).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP + Briefing; folded to 4-page pack. |
