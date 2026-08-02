# EBOS — Ostend-Bruges · Departure Page

**EBOS / OST** · Ostend (Middelkerke), West Flanders, Belgium · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP-verified (skeyes eAIP, AD 2 EBOS, direct retrieval successful this session)

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [EBOS Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. **EBOS is not a field in the K Global VAMSYS network.** Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Night window (21:00–07:00/20:00–06:00): **RWY 26** (crosswind ≤15 kt, tailwind ≤5 kt, traffic permitting); otherwise wind-dependent between 08/26 |
| Config logic | AIP-published night runway-swap rule (§3 below); daytime selection wind/traffic-dependent |
| Transition altitude | **4,500 ft AMSL** `[AIP Belgium AD 2 EBOS]` |
| Take-off minima | **Minimum RVR 200 m**, except CAA-authorised or emergency `[AIP Belgium AD 2 EBOS]` |
| CTOT / flow regime | None identified — no slot/ATFM regime found |
| De-icing on departure | Available, H24 `[AIP Belgium AD 2 EBOS]` |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** **B777-300-class aircraft taxiing to/from Apron 2 via TWY K shall always route via TWY C2** `[AIP Belgium AD 2 EBOS]`. TWY C1 usable only during HJ by aircraft ≤5,700 kg; turns TWY B1↔K4 and D1↔K5 restricted to ICAO Code C max; TWY B1 limited to aircraft with OMGWS <9 m.
- **Hot spots / tight taxiways:** A dedicated Hot Spots appendix and Ground Movement Responsibilities appendix are published on the AD 2.EBOS-ADC charts — consult the current chart; not transcribed here per governance. 🟧
- **Runway crossings / read-back-required points:** Not detailed beyond the taxiway-restriction notes above.
- **Low-vis taxi caveats:** Follow-me service available (runway exit to stand, stand to holding position); **no follow-me on Apron 1 unless requested** `[AIP Belgium AD 2 EBOS]`.

---

## 3. Runway / SID selection logic

- **By wind / config:** Night window **21:00–07:00 (20:00–06:00)**: if crosswind ≤15 kt and tailwind ≤5 kt (traffic permitting), **RWY 26 for take-off, RWY 08 for landing**. PIC may request another runway if the runway-in-use is considered unsuitable for safety/performance, subject to ATC acceptance `[AIP Belgium AD 2 EBOS]`.
- **By departure direction:** Straight-departure SID family via ONO NDB (COA6S, KOK5S, NIK4S, MAK6S, FERDI4S, SASKI6S); turning-departure family via a 500 ft turn onto the DD 292/293 radial (COA7M, KOK6M, KONAN4M, MAK4M, FERDI4M, NIK4M, SASKI6M). Several SIDs (KONAN4S, SASKI6S, and the "M"-suffix turning family) **cross EBR17 — Oostende ATC obtains the crossing clearance before the aircraft is airborne** `[AIP Belgium AD 2 EBOS]`.
- **Noise / preferential-runway program:** Noise-abatement descent/approach techniques apply on arrival (Briefing §12); departure noise management is primarily through the reverse-thrust/idle-power policy and the QC-restricted night window rather than a named NADP.
- **Interaction with arrivals:** Single-runway field — departures and arrivals share the same runway/reciprocal pair; sequencing is managed by Oostende Tower.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| COA6S, KOK5S, NIK4S, MAK6S | 08 / 26 | RNAV1 — no critical navaid; GNSS or INS/IRU guidance to 3,000 ft | Straight departure via ONO NDB |
| FERDI4S | 08 / 26 | RNAV1 | Straight departure via ONO NDB |
| KONAN4S, SASKI6S | 08 / 26 | RNAV1 | Straight departure via ONO NDB; **crosses EBR17 — crossing clearance obtained before airborne** |
| COA7M, KOK6M, MAK4M, FERDI4M, NIK4M | 08 / 26 | RNAV1 — 500 ft turn onto DD radial | Turning departure; several cross EBR17 (verify per-SID on chart) |
| KONAN4M, SASKI6M | 08 / 26 | RNAV1 | Turning departure; **crosses EBR17 — crossing clearance obtained before airborne** |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; RNAV1 SIDs assume GNSS or DME/DME/IRU with automatic runway-position update for initial guidance to 3,000 ft.
- **Noise-abatement departure procedure (NADP):** No named NADP published; noise management is via the QC-restricted night window (§Dispatch §4) and the idle-power reverse-thrust policy.
- **Early turn / altitude constraints:** Turning-family SIDs (the "M"-suffix set) execute an initial turn at **500 ft**, then further turns at specified altitudes (e.g. 3,000 ft) per the individual SID — verify exact constraints on the current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not published in the reachable extract — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Published close-in obstacle data exists for both runway ends (low vegetation/small objects, 10–90 ft AGL range) — not CFIT-relevant but consult AD 2.EBOS-AOC.01 for the full obstacle chart.
- **Special DP / obstacle DP:** Not confirmed — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** **Minimum RVR 200 m for take-off**, except CAA-authorised or emergency `[AIP Belgium AD 2 EBOS]`.
- **De-icing:** **Available, H24** `[AIP Belgium AD 2 EBOS]`; exact pad location/procedure not detailed in the reachable extract. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Via Oostende Tower/Ground — no dedicated Delivery frequency published; clearance obtained through Tower.
- **Frequency sequence:** **Ground 121.980 (8.33 kHz) → Tower 118.180 (primary, 8.33 kHz) → Oostende Approach 120.600 (primary) / 266.075 → Brussels FIR (EBBU) en route.** Emergency 121.500/243.000; supplementary 127.330 (8.33 kHz) available throughout. Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8, AIP-sourced.)
- **CTOT / slot handling:** None identified — no ATFM/slot regime found in the reachable extract.

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Single 3,200 m runway is non-limiting for any K Global type; declared TORA/TODA/ASDA are all 3,200 m both ends (Briefing §7).
- **Density altitude / temperature:** Non-issue at 7 ft, temperate coastal climate — no hot-and-high penalty.
- **Contamination / wet-runway:** 🟧 **"RWY strip soft after heavy rain"** is an explicit AIP caution `[AIP Belgium AD 2 EBOS]` — factor wet-weather ground/braking-action awareness into planning.
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty for any K Global type; the confirmed **B777-300 TWY K→C2 routing note** (§2) is the one fleet-specific procedural item in the AIP.

---

## 10. Gotchas

- **Pre-departure engine/power checks are prohibited on the parking position** — use the dedicated run-up area after taxi clearance, one aircraft at a time by ATC clearance, at the holding bays near RWY intersections A and M.
- **Apron 2 stands 230–233 have no push-back — self-manoeuvring only, max span 43 m.**
- **Several SIDs cross EBR17** — Oostende ATC obtains the crossing clearance before the aircraft is airborne; do not assume this is automatic.
- **Aircraft shall not leave the stand before the preceding aircraft has taken off or parked** — a specific sequencing rule at this field.
- **Reverse thrust is idle-power only except for safety** — and excessive reverse thrust should specifically be avoided 22:00–05:00 (21:00–04:00), with a long landing considered instead.
- **A380/747-8F/An124/An225-class operations require prior coordination** with Airport Authorities.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Full SID chart detail (exact turn altitudes, EBR17 crossing procedure per SID) — verify on current AIRAC chart, not transcribed here.
- EOSID/engine-out procedure detail per runway.
- Named taxiway hot spots (AD 2.EBOS-ADC Hot Spots appendix) — consult current chart.
- De-icing pad location/procedure detail.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. post-heavy-rain runway condition), current EBR17 status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP Belgium (skeyes eAIP), AD 2 EBOS** — https://ops.skeyes.be/html/belgocontrol_static/eaip/eAIP_Main/html/eAIP/EB-AD-2.EBOS-en-GB.html (retrieved 2026-07-26). *Primary source for all data in this page.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Belgium (skeyes); K Global fields from live VAMSYS (EBOS not in network — flagged); 4-page pack. |
