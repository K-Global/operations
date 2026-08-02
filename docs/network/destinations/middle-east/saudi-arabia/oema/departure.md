# OEMA — Prince Mohammad Bin Abdulaziz · Departure Page

**OEMA / MED** · Madinah, Saudi Arabia · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [OEMA Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **17/35** (main, preferential); 18/36 secondary — expect delay if assigned |
| Config logic | Preferential-runway rule (17/35) plus wind |
| Transition altitude | 13,000 ft |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | No slot-coordination regime identified |
| De-icing on departure | **NIL** — not provided |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Confirm exact taxi with Ground/Apron on the day. If departing off RWY 18/36, note that **wide-body aircraft may not taxi the parallel taxiway** during that runway's use.
- **Hot spots / tight taxiways:** None specifically named beyond the parallel-taxiway restriction above during 18/36 operations.
- **Runway crossings / read-back-required points:** Not specifically identified beyond standard ATC crossing instructions.
- **Low-vis taxi caveats:** Not confirmed in reachable sources. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** **RWY 17/35 is the preferential runway** for takeoff and landing; RWY 18/36 "may be approved, however delay may be experienced."
- **By departure direction:** No specific directional preference beyond the 17/35 preference identified.
- **Noise / preferential-runway program:** No noise abatement procedure published (AIP: "NIL").
- **Interaction with arrivals:** Left-hand circuits for RWY 17/18, right-hand for RWY 35/36, height 1,500 ft AGL.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| RNAV 1 SID (per runway end) 🟧 | 17 / 35 / 18 / 36 | Not confirmed this pass — plateau elevation (2,134 ft) warrants a performance check even absent a documented special gradient | Radar Vector SID also published for RWY 35-36 and RWY 17-18 |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC instruction; 250 KIAS below FL100 — confirm current chart.
- **Noise-abatement departure procedure (NADP):** None published. 🟧
- **Early turn / altitude constraints:** Published per SID — verify current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** The AIP notes **solar beacons on mountains around the airport**, confirming elevated terrain nearby; the Harrat Rahat volcanic plateau lies to the south. See [Briefing §3.1](index.md).
- **Special DP / obstacle DP:** Not confirmed — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed in reachable sources. 🟧
- **De-icing:** **NIL** — not provided; non-issue given the desert climate.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** No discrete Clearance Delivery frequency was found in the retrieved AIP extract — likely handled on Ground; confirm locally. 🟧
- **Frequency sequence:** **Madinah Ground Control 121.900 → Madinah Tower 118.300/124.200 → Madinah Approach 125.100/127.700/120.350 (two of three carry a documented terrain coverage gap).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** No slot-coordination regime identified. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 17/35 (4,335 m) is non-limiting for any K Global type; RWY 18/36 (3,050 m) is adequate but the secondary/delay-likely runway — confirm current-type performance margin before planning a departure off it.
- **Density altitude / temperature:** Elevated plateau field (2,134 ft) with a 42°C AIP reference temperature — a moderate performance input; cross-link [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) for general guidance.
- **Contamination / wet-runway:** Not a seasonal factor at this desert field.
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 10. Gotchas

- **Two runways, not one** — 17/35 preferential, 18/36 secondary with expected delay if assigned.
- **Wide-body aircraft may not taxi the parallel taxiway** while RWY 18/36 is in use.
- **AIP-documented VHF terrain coverage gap** — expect a complementary Approach frequency to be assigned.
- **Solar beacons mark high ground near the airport** — a direct AIP signal of nearby elevated terrain.
- **Wind shear** is an AIP-flagged, actively studied local hazard — brief for it and report any encounter.
- **Bird strike caution** is explicitly flagged in the AIP.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima exact figures.
- Clearance Delivery frequency/procedure.
- EOSID/engine-out procedure detail per runway.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM if applicable, current Middle East conflict-zone/overflight bulletins. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **GACA/SANS eAIP, AD 2 OEMA**, AIRAC AMDT 07/25 — https://aimss.sans.com.sa/assets/FileManagerFiles/AIP%20AMDT%2007_25_2025_04_03/eAIP/AD%202%20OEMA%20MADINAH%20-%20PRINCE%20MOHAMMAD%20BIN%20ABDULAZIZ%20INTERNATIONAL-en-GB.html (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Saudi Arabia (GACA); K Global fields from live VAMSYS; 4-page pack. |
