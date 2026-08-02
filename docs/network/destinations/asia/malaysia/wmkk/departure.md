# WMKK — Kuala Lumpur International (KLIA) · Departure Page

**WMKK / KUL** · Sepang, Selangor, Malaysia · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Malaysia (CAAM)-derived, Asia network build

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [WMKK Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **14L/32R, 14R/32L, 15/33** — direction-of-flight/config-dependent (§3); no fixed default pairing |
| Config logic | Simultaneous-independent-parallel-approach regime (AIP Supplement 50/25, 2025) drives runway/config assignment — confirm active configuration on ATIS |
| Transition altitude | **11,000 ft** `[AIP Malaysia, AD 2 WMKK 2.17]` |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | None identified in reachable sources; standard clearance-delivery sequencing (5 min before start via Lumpur Delivery) |
| De-icing on departure | **Not available / not required** — equatorial field |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From the Contact Pier or Satellite Terminal A, Ground routes toward the assigned departure runway (14L/32R, 14R/32L, or 15/33 per the active configuration); confirm the exact taxi routing with Ground on the day. Aircraft shall follow the **published (standard) taxi routes** shown on the aerodrome ground-movement charts unless directed otherwise by ATC. `[AIP Malaysia, AD 2 WMKK 2.20]`
- **Hot spots / tight taxiways:** 🟧 **TWY U5 and U6 carry heavy-vehicle crossing traffic** (AIP-noted caution) — expect ground-vehicle activity when routed via these taxiways.
- **Runway crossings / read-back-required points:** Not individually confirmed; expect standard crossing-instruction/read-back discipline at any runway-crossing taxiway given the three-runway layout.
- **Low-vis taxi caveats:** SMGCS/low-vis taxi routing would apply in any low-visibility event consistent with the field's ILS environment; follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Runway/configuration assignment follows the **permanent simultaneous-independent-parallel-approach procedure based on the direction of flights** (AIP Supplement 50/25, effective 2025) rather than a single dominant wind-driven default — confirm the active configuration on ATIS before planning a specific runway.
- **By departure direction:** Not individually sourced; the field's three near-parallel/oblique runways (14L/32R, 14R/32L, 15/33) allow flexible direction assignment per the supplement above.
- **Noise / preferential-runway program:** **NIL** — no noise-abatement departure procedure is published for WMKK. `[AIP Malaysia, AD 2 WMKK 2.21]` 🟩
- **Interaction with arrivals:** The independent-parallel-approach geometry means departures on one runway can run concurrently with arrivals on another — standard parallel-operations vigilance applies (blunder/TCAS awareness) rather than a crossing-runway dependency.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 14L/32R, 14R/32L, 15/33 | RNP 1 terminal procedures apply generally across the developed SE-Asian FIRs — see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Unless notified otherwise by ATC, departing aircraft climb to an **initial altitude of 6,000 ft**, further climb on ATC approval only; contact **Lumpur Approach** as soon as practicable before passing 2,000 ft — **124.20 MHz when departing RWY 32R/32L**, **119.45 MHz when departing RWY 14R/14L** `[AIP Malaysia, AD 2 WMKK 2.22]`. 🟧 RWY 15/33 initial-contact frequency not confirmed in reachable sources (post-dates this AIP cycle).
- **Noise-abatement departure procedure (NADP):** **NIL** — no NADP published. 🟩
- **Early turn / altitude constraints:** ATC issues take-off clearance without specifying initial climb altitude or departure frequency by default; on first contact with Approach, advise the SID identifier or assigned heading, the last level vacated (nearest 100 ft), and the assigned altitude. `[AIP Malaysia, AD 2 WMKK 2.22]`

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Largely flat former plantation land; the notable obstacle considerations are the two lit hills — **Bukit Lada (110 m AMSL)** and **Bukit Sungai Lanau (101 m AMSL)** — positioned under the **32L and 33 departure-adjacent tracks** (they sit in the 14R/TKOF and 15/TKOF obstacle sets as well as the reciprocal approach sets), plus the twin **KLIA control towers (141–147 m AMSL)** and two telecom towers (~62 m AMSL) near the 14R/32L extended centreline — all charted and lit. See [Briefing §3.1](index.md).
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Take-off minima published per AIP; exact figures not confirmed this pass. 🟧 A local ATC procedure protects the Localiser Sensitive Area when cloud base ≤600 ft and/or visibility <2,000 m, consistent with an ILS-equipped, occasionally low-vis-affected field (haze/convective rain — see Briefing §3.4).
- **De-icing:** **Not available / not required** — equatorial field, no icing season.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** **Lumpur Delivery 126.000 MHz** — contact **5 minutes before engine start-up** for airways clearance and any slot/departure time. `[AIP Malaysia, AD 2 WMKK 2.20]`
- **Frequency sequence:** **Delivery 126.000 → Ground (area-specific: 121.650/121.800/122.150/122.850/122.275/123.250) → Tower 118.800 (RWY 14L/32R) or 118.500 (RWY 14R/32L) → Lumpur Approach North 124.200 (departing 32R/32L) or Lumpur Approach South 119.450 (departing 14R/14L) / Lumpur Director 125.100.** 🟧 RWY 15/33 tower and initial-approach-contact frequencies not confirmed. Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** No formal ATFM/CTOT program identified in reachable sources; comply with any assigned slot/departure time issued by Lumpur Delivery. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** All three runways (3,960–4,019 m) are non-limiting for any K Global type.
- **Density altitude / temperature:** Non-issue at 69 ft, equatorial climate — no hot-and-high penalty; reference temperature is a warm 32°C but this does not approach a performance-limiting regime for our fleet at these field lengths.
- **Contamination / wet-runway:** **Heavy monsoon-season rain** is the relevant seasonal consideration — RWY 14L/32R and 14R/32L are **grooved** (a wet-braking mitigation); RWY 15/33 grooving status not confirmed. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty for any K Global type at WMKK.

---

## 10. Gotchas

- **Runway/configuration assignment is direction-of-flight-dependent**, not a fixed default pairing — confirm the active configuration on ATIS before assuming a specific departure runway.
- **RWY 15/33 comms/procedure data is thin in the reachable AIP extract** (the runway post-dates the retrieved cycle) — treat initial-contact frequencies and SID/gradient detail for that runway as unconfirmed until cross-checked against current AIRAC.
- **TWY U5/U6 heavy-vehicle crossing traffic** — expect ground-vehicle activity if routed via these taxiways.
- **No noise-abatement departure procedure exists** — do not assume a noise-driven routing constraint at this field.
- **Convective cells build near-daily, especially in the afternoon/evening and during monsoon-transition periods** — brief CB avoidance and expect possible short-notice sequencing changes.
- **Power-back is not permitted** at this field — push-back only. `[AIP Malaysia, AD 2 WMKK 2.20]`

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima exact figures.
- RWY 15/33 tower frequency and initial-Approach-contact frequency.
- LVTO RVR minima and follow-me/SMGCS specifics.
- EOSID/engine-out procedure detail per runway.
- Grooving status of RWY 15/33.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/slot status, haze/visibility advisory. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP Malaysia (CAAM), AD 2 WMKK PDF** (1999–2011 cycle) — clearance/taxi/departure procedures, communications, transition altitude — https://aip.caam.gov.my/aip%20pdf/AD/AD2/WMKK/WMKK-KL%20InternationalSepang%20Airpor.pdf (retrieved 2026-07-26).
- **AIP Malaysia (CAAM), AD 2 WMKK** (current eAIP) — https://aip.caam.gov.my/aip/eAIP/2025-03-25/html/eAIP/WM-AD-2.WMKK-en-MS.html (retrieved 2026-07-26). *Obstacle data, aprons/taxiways.*
- AIP Malaysia (CAAM) — SUP 50/25, Simultaneous Independent Parallel Approaches at KLIA — https://aip.caam.gov.my/aip/eAIP/2025-10-02-AIRAC/html/eSUP/WM-eSUP-25-50-en-MS.html (retrieved 2026-07-26). *Runway-configuration logic.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
