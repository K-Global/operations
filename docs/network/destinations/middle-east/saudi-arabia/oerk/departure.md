# OERK — King Khaled Intl · Departure Page

**OERK / RUH** · Riyadh, Saudi Arabia · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [OERK Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | One of 15L/15R/33L/33R per wind/traffic — no single published preference |
| Config logic | Wind-driven; two parallel pairs available in either direction |
| Transition altitude | 13,000 ft |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | No slot-coordination regime identified |
| De-icing on departure | **NIL** — not provided |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Confirm exact taxi with Ground/Apron on the day; only one aircraft may taxi in/out of an apron at a time or as ATC-instructed.
- **Hot spots / tight taxiways:** 🟧 **Taxiway H3** flagged for an obstruction inside the safety area in the retrieved AIP cycle — verify current NOTAM status before routing through this area.
- **Runway crossings / read-back-required points:** Not specifically identified beyond standard ATC crossing instructions.
- **Low-vis taxi caveats:** Not confirmed in reachable sources — this is not a fog-prone field, so low-vis taxi procedures are a lower-probability event here than at coastal Saudi fields. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Riyadh Approach/Tower assigns the active runway per wind; both parallel pairs (15L/33R and 15R/33L) are available in either direction.
- **By departure direction:** No specific directional preference identified.
- **Noise / preferential-runway program:** Overflight of Riyadh city is restricted except for take-off/landing under ATC instruction — this shapes initial departure track, not runway choice.
- **Interaction with arrivals:** Standard parallel-runway dependent/independent operations under Riyadh Approach — the AIP's "exercise extreme care in selecting the correct ILS" caution applies to arrivals more than departures but reflects the same simultaneous-parallel-ops environment.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| RNAV SID (per runway end) 🟧 | 15L / 15R / 33L / 33R | Not confirmed this pass | Radar Vector SID also published for each parallel pair |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC instruction; 250 KIAS below FL100 (Class C TMA norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** None identified beyond the city-overflight restriction (§3). 🟧
- **Early turn / altitude constraints:** Published per SID — verify current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** No AIP-listed obstacles in the reachable extract; flat plateau terrain, not a close-in-terrain field.
- **Special DP / obstacle DP:** Not confirmed — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed — this is a CAT I-only field with no LVP regime documented; low-vis events are a lower-probability item here than at coastal fields. 🟧
- **De-icing:** **NIL** — not provided; non-issue given the desert climate.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Clearance Delivery **121.700** (H24).
- **Frequency sequence:** **Clearance Delivery 121.700 → King Khaled Ground 121.600 → King Khaled Tower 118.600 (East) / 118.800 (West) → Riyadh Approach 120.000 / 128.500.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** No slot-coordination regime identified. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 4,205 m on all four ends is non-limiting for any K Global type.
- **Density altitude / temperature:** Elevated field (2,053 ft) with a 42.3°C AIP reference temperature — a genuine but moderate summer performance input; run a takeoff-weight check on the hottest days.
- **Contamination / wet-runway:** Not a seasonal factor at this desert field.
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length limitation for any home-fleet type at OERK.

---

## 10. Gotchas

- **Two closely-spaced parallel runway pairs with simultaneous ILS operation** — the AIP specifically cautions crews to select the correct ILS for the assigned runway.
- **Overflight of Riyadh city is restricted** outside take-off/landing under ATC instruction — expect a routing constraint, not a curfew.
- **Taxiway H3 obstruction** flagged in the retrieved AIP cycle — verify current NOTAM before routing through that area.
- **Summer reference temperature 42.3°C** — factor density altitude into the takeoff performance calculation on hot days.
- **Spring dust storms/shamal** can arrive with limited notice — check SIGMET/dust advisories before departure in season.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima exact figures.
- EOSID/engine-out procedure detail per runway.
- Start-up/push-back procedure detail beyond the named mandatory-tow stands (see Briefing §11).

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. TWY H3 status), CTOT/ATFM if applicable, current Middle East conflict-zone/overflight bulletins. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **GACA/SANS eAIP, AD 2 OERK**, AIRAC AMDT 05/24 — https://aimss.sans.com.sa/assets/FileManagerFiles/AIP%20AMDT%2005_24_2024_08_22/eAIP/AD%202%20OERK%20RIYADH%20-%20KING%20KHALED%20INTERNATIONAL-en-GB.html (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Saudi Arabia (GACA); K Global fields from live VAMSYS; 4-page pack. |
