# LPPR — Francisco Sá Carneiro · Departure Page

**LPPR / OPO** · Porto, Portugal · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Portugal-derived

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LPPR Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **17 or 35** — single runway, wind-dependent config |
| Config logic | Wind-driven; no unusual constraint beyond standard runway selection |
| Transition altitude | 4,000 ft |
| Take-off minima | **RWY 17 LVTO — RVR at or above 125 m and below 400 m**; RWY 35 minima not separately confirmed in reachable text 🟧 |
| CTOT / flow regime | **Aerodrome Slot mandatory for all flights** (AIP, ref. GEN 1.2) 🟥; EUROCONTROL ATFM/CTOT a reasonable expectation 🟧 |
| De-icing on departure | **Not available** — not an operational factor at this field |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From the terminal (expected international pier, §Dispatch), Ground/Apron routes toward the assigned runway end (17 or 35); confirm the exact taxi with Ground/Tower on the day.
- **Hot spots / tight taxiways:** 🟥 **TWY A3 is not available for Code E aircraft** — plan an alternate routing for our larger types. Areas not visible from the Tower include the first 1,500 m of RWY 17, the last 1,500 m of RWY 35, and stands S08–S12/S30–S35 plus Apron taxiways S1/S3 (see [Briefing §13](index.md)). Stop bars protect all CAT II/III holding positions (TWY S2, S4, E1, E2, E3, E4, RET F1).
- **Runway crossings / read-back-required points:** Mode-S multilateration surface-surveillance is in use; expect explicit crossing instructions at CAT II/III holding positions.
- **Low-vis taxi caveats:** SMGCS/low-vis taxi routing applies consistent with the field's genuine low-visibility exposure (Briefing §3.4); follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Runway selection (17 vs. 35) is wind-driven — standard single-runway config logic, no unusual constraint identified.
- **By departure direction:** No separate directional-preference runway exists (single runway, both directions used per wind).
- **Noise / preferential-runway program:** No specific NADP named in reachable sources; general ICAO PANS-OPS Volume I / Portuguese AIP compliance referenced. 🟧
- **Interaction with arrivals:** Single-runway field with lower traffic density than LPPT — standard sequencing, no PMS-style structural pressure identified.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| **MANIK6S** (conventional) | 17 | Not confirmed 🟧 | Verify current chart |
| **TURON6N** (conventional) | 35 | Not confirmed 🟧 | Verify current chart |
| **ASMOV2R, BELDU9L, MANIK2R, PESUL9L, TURON9L, TURON9R, UBANI2R** (RNAV) | 17 | Not confirmed 🟧 | Verify current chart |
| **ASMOV2W, BELDU9E, PESUL9E, MANIK2E, MANIK2W, TURON9E, UBANI2W** (RNAV) | 35 | Not confirmed 🟧 | Verify current chart |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** No single mandated fleet-wide NADP confirmed this pass. 🟧
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart, noting the field's charted obstacle cluster to the east/northeast (Briefing §3.1).

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** 🟧 A charted obstacle cluster exists to the east/northeast of the field — towers up to 137 m elevation and a tree at 196 m elevation (the field's single highest charted obstacle), plus a natural highpoint (63 m) close to the aerodrome. Cross-reference the current obstacle/MSA chart before accepting a departure that tracks toward this sector, particularly on an engine-out profile.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** **RWY 17 — RVR at or above 125 m and below 400 m** (published Low Visibility Take-Off Procedure). RVR is assessed at TDZ (position A), mid-point (B) and stop-end (C); ATC always provides RVR-A, and provides B/C only if lower than A and below 550 m, or below 350 m, or on request. RWY 35 LVTO minima not separately confirmed. 🟧
- **De-icing:** **Not available** — not a Porto planning factor given the mild Atlantic-coastal climate.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Porto Delivery **118.930 / 118.855** (broadcast by ATIS). Contact Tower/Delivery **10 minutes before start-up**.
- **Frequency sequence:** **Delivery 118.930/118.855 → Ground 121.040/118.855 (broadcast by ATIS) → Tower 118.005/118.855 (H24) → Porto Approach 120.910/127.155 (HO).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** **Aerodrome Slot is mandatory for all flights** (AIP, ref. GEN 1.2) 🟥 — confirm slot status before planning; EUROCONTROL ATFM/CTOT expected in peak/adverse conditions. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 3,480 m physical length is non-limiting for any K Global type. Both thresholds carry permanent displacement (RWY 17: 300 m, RWY 35: 150 m) that does not reduce takeoff distances (TORA/TODA/ASDA remain full-length) but does reduce the reciprocal landing LDA — a landing-side consideration, not a takeoff constraint.
- **Density altitude / temperature:** Non-issue at 227 ft, mild coastal climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Atlantic frontal-passage rain is the relevant seasonal consideration; no specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length constraint identified for any K Global type at LPPR.

---

## 10. Gotchas

- **TWY A3 is not available for Code E aircraft** — plan an alternate ground route for our larger types.
- **Charted obstacle cluster to the east/northeast** (towers to 137 m elevation, tree at 196 m elevation) — do not assume a flat-field profile; cross-check the obstacle/MSA chart, especially for an engine-out departure profile.
- **RWY 17's genuine LVTO capability (RVR 125–400 m)** confirms this field does see real low-visibility events — treat low-vis departure planning seriously rather than as boilerplate.
- **Aerodrome Slot is mandatory for all flights** — confirm slot status before planning any departure.
- **Reverse thrust is not permitted for stand manoeuvring at any time**, and is forbidden immediately after a night landing — a standing ground-ops rule to brief.
- **Hard night curfew 00:00–06:00** — a late-day departure delay risks being prohibited outright; build buffer into the last rotation.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID RNP/gradient specifics per runway.
- RWY 35 take-off minima (only RWY 17's LVTO figure was found).
- Start-up/push-back procedure detail beyond the nose-in/no-reverse rule.
- NADP preference (not confirmed as mandated).
- Follow-me/SMGCS specifics.
- EOSID/engine-out procedure detail per runway, particularly relative to the east-side obstacle cluster.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. bird-activity and grass-cutting-window NOTAMs), CTOT/ATFM. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP Portugal (NAV Portugal eAIP), AD 2 LPPR**, valid from 14 May 2026 — https://ais.nav.pt/wp-content/uploads/AIS_Files/eAIP_Current/eAIP_Online/eAIP/html/eAIP/LP-AD-2.LPPR-en-PT.html (retrieved 2026-07-26). *LVTO procedure, obstacle table, communications, taxiway restrictions.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Portugal (NAV); K Global fields from live VAMSYS; 4-page pack. |
