# OEJN — King Abdulaziz Intl · Departure Page

**OEJN / JED** · Jeddah, Saudi Arabia · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [OEJN Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | One of 16C/34C, 16L/34R, 16R/34L per wind/traffic — no single published preference |
| Config logic | Wind-driven; three parallel runways available in either direction |
| Transition altitude | 13,000 ft |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | No slot-coordination regime identified; Hajj-season informal flow management possible |
| De-icing on departure | **NIL** — not provided |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Confirm exact taxi with Ground/Apron on the day.
- **Hot spots / tight taxiways:** None specifically named in the reachable AIP extract; the standing caution is **simultaneous-ILS-selection discipline** across the three parallel runways (§3), which is primarily an arrival concern but reflects the same high-density parallel-ops environment departures operate within.
- **Runway crossings / read-back-required points:** Not specifically identified beyond standard ATC crossing instructions.
- **Low-vis taxi caveats:** Not confirmed in reachable sources. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Jeddah Control/Tower assigns the active runway per wind; all three parallels are available in either direction.
- **By departure direction:** No specific directional preference identified.
- **Noise / preferential-runway program:** Overflight of Jeddah city below 5,000 ft AGL is prohibited except for departure/arrival under ATC instruction — shapes initial track, not runway choice.
- **Interaction with arrivals:** Standard three-parallel dependent/independent operations under Jeddah Control — the AIP's "exercise extreme care in selecting the correct ILS" caution applies field-wide given the simultaneous-parallel-ILS environment.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| RNAV SID (per runway end, RNAV 1/GNSS) 🟧 | 16C / 34C / 16L / 34R / 16R / 34L | Not confirmed this pass | ATC may radar-vector after departure if no SID assigned |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC instruction; 250 KIAS below FL100 — confirm current chart.
- **Noise-abatement departure procedure (NADP):** None identified beyond the city-overflight restriction (§3). 🟧
- **Early turn / altitude constraints:** Published per SID — verify current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** No significant obstacles beyond the field's own tower-type structures (214 ft/90 ft, both marked/lighted) — flat coastal plain, not a close-in-terrain field.
- **Special DP / obstacle DP:** Not confirmed — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed — this is a CAT I-only field with no LVP regime documented. 🟧
- **De-icing:** **NIL** — not provided; non-issue given the desert/coastal climate.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Jeddah Ground Control **121.800** (H24).
- **Frequency sequence:** **Ground Control 121.800 (clearance) → 121.600 (West)/121.700 (East)/121.900 (Centre) → Jeddah Tower 118.200 (West)/118.500 (East) → Jeddah Control 119.100 (CTA-East)/125.450 (CTA-West).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** No slot-coordination regime identified; Hajj-season informal flow management possible but not documented in AIP text. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 4,000 m on the two main pairs and 3,800 m on the third are non-limiting for any K Global type.
- **Density altitude / temperature:** Non-issue at 49 ft; extreme summer heat (AIP reference temperature 37.9°C) is a moderate performance consideration despite the sea-level elevation.
- **Contamination / wet-runway:** Flash-flood-season ramp/taxiway flooding is the relevant seasonal consideration (autumn/winter) — confirm current conditions/NOTAM before taxi in heavy rain.
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length limitation for any home-fleet type at OEJN.

---

## 10. Gotchas

- **Three parallel runways with simultaneous ILS operation** — the AIP specifically cautions crews to select the correct ILS for the assigned runway.
- **Flash flooding** from intense rain is a real, sometimes fatal hazard in season — check for ramp/taxiway closures and convective wind-shear/microburst risk before taxi.
- **Overflight of Jeddah city below 5,000 ft AGL is prohibited** outside departure/arrival under ATC instruction.
- **Hajj/Umrah surge** drives ground-movement congestion during peak weeks — build buffer.
- **Shared civil/military field** (RSAF King Abdullah Air Base) — maintain awareness of mixed traffic.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima exact figures.
- EOSID/engine-out procedure detail per runway.
- Start-up/push-back procedure detail.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. ramp-flooding closures in season), CTOT/ATFM if applicable, current Middle East conflict-zone/overflight bulletins. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **GACA/SANS eAIP, AD 2 OEJN**, AIRAC AMDT 05/24 — https://aimss.sans.com.sa/assets/FileManagerFiles/AIP%20AMDT%2005_24_2024_08_22/eAIP/AD%202%20OEJN%20JEDDAH%20-%20KING%20ABDULAZIZ%20INTERNATIONAL-en-GB.html (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Saudi Arabia (GACA); K Global fields from live VAMSYS; 4-page pack. |
