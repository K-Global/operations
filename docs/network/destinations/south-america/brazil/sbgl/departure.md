# SBGL — Galeão–Antônio Carlos Jobim · Departure Page

**SBGL / GIG** · Rio de Janeiro, Rio de Janeiro, Brazil · South America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Brasil (DECEA)-derived

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [SBGL Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Not confirmed by config logic; RWY 10/28 (main) and 15/33 (secondary, displaced thresholds) are both active 🟧 |
| Config logic | Wind-driven; exact criteria not confirmed 🟧 |
| Transition altitude | Not confirmed 🟧 |
| Take-off minima | Not confirmed 🟧 |
| CTOT / flow regime | No slot regime confirmed; Rio-TMA/Santos Dumont flow interaction possible 🟧 |
| De-icing on departure | **NIL** — sea-level coastal climate |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not confirmed — confirm exact taxi routing with Ground/Apron on the day, from Terminal 2 to the departure runway. 🟧
- **Hot spots / tight taxiways:** Not confirmed in reachable sources. 🟧
- **Runway crossings / read-back-required points:** Not confirmed. 🟧
- **Low-vis taxi caveats:** Not a signature hazard here (contrast the São Paulo-area fields' fog season); tropical rain-shower visibility reduction is the more likely low-vis scenario. SMGCS/follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Not confirmed — verify with ATC/current chart on the day. 🟧
- **By departure direction:** Not confirmed. 🟧
- **Noise / preferential-runway program:** Not confirmed in reachable sources. 🟧
- **Interaction with arrivals:** Rio Approach coordinates SBGL traffic alongside the busy downtown Santos Dumont (SBRJ) airport ~9 NM south-west, sharing the Rio terminal airspace — see [Briefing §3.2](index.md).

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 10 / 28 / 15 / 33 | Brazil operates a national RNAV/PBN SID network `[South America Airspace briefing]` — exact gradient/equipage not confirmed for SBGL | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed in reachable sources. 🟧
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart. The field itself has no close-in terrain constraint (Briefing §3.1).

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** No significant close-in terrain at the aerodrome itself (flat, sea-level, Guanabara Bay location) — Rio's dramatic terrain lies further inland/around the city core near Santos Dumont, not at Galeão.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed in reachable sources; tropical rain-shower visibility reduction is the more relevant scenario than the fog risk seen at the São Paulo-area fields. 🟧
- **De-icing:** **NIL** — sea-level tropical/subtropical coastal climate, no de-icing infrastructure or season.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Galeão Delivery/Clearance **121.000** (hours not confirmed 🟧).
- **Frequency sequence:** **Delivery 121.000 → Ground 121.650 → Tower 118.000 → Rio Approach 119.350.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** No slot regime confirmed for SBGL; Rio-TMA flow interaction with Santos Dumont traffic possible but not independently sourced. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 10/28 (4,000 m) is non-limiting for any K Global type; RWY 15/33 (3,180 m, displaced-threshold LDA reduced accordingly) is likewise generally non-limiting for typical departure weights.
- **Density altitude / temperature:** Non-issue at 28 ft, though tropical heat/humidity is a routine consideration for takeoff performance calculations.
- **Contamination / wet-runway:** Tropical convective-storm rain is the relevant seasonal consideration; no specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty for any K Global type at SBGL.

---

## 10. Gotchas

- **RWY 15/33 both carry displaced thresholds** (187 m on 15, 114 m on 33) — this affects landing LDA (Arrival page) more than departure planning, but confirm which distances apply to a rejected-takeoff scenario.
- **Santos Dumont (SBRJ) cross-traffic** in the shared Rio terminal airspace — brief for coordination even on a routine departure.
- **Tropical convective storms** can develop quickly in the afternoon/evening — build a weather-avoidance contingency into the departure plan in season.
- **No confirmed curfew/slot regime** — greater schedule flexibility than the São Paulo-area fields, but do not assume this without re-verifying current AIP.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names, runway/config selection logic, and take-off minima.
- Standard taxi routings and any named hot spots.
- NADP preference; EOSID/engine-out procedure detail per runway.
- Rio-TMA flow-management interaction with Santos Dumont traffic.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/flow status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **DECEA / AISWEB — AIP Brasil, aerodrome page AD 2 SBGL** — https://aisweb.decea.mil.br/?i=aerodromos&codigo=SBGL (JS-rendered frameset; not readable to a direct fetch this pass) (attempted 2026-07-26).
- OurAirports — https://ourairports.com/airports/SBGL/frequencies.html (retrieved 2026-07-26).
- Wikipedia — "Rio de Janeiro/Galeão International Airport" — https://en.wikipedia.org/wiki/Rio_de_Janeiro%E2%80%93Gale%C3%A3o_International_Airport (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Brasil (DECEA); K Global fields from live VAMSYS; 4-page pack. |
