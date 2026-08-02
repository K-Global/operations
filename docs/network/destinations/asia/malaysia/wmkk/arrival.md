# WMKK — Kuala Lumpur International (KLIA) · Arrival Page

**WMKK / KUL** · Sepang, Selangor, Malaysia · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Malaysia (CAAM)-derived, Asia network build

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [WMKK Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **14L/32R, 14R/32L, 15/33** — direction-of-flight/config-dependent (§2); no fixed default pairing |
| Usual approach | **ILS** on 14L/32R and 14R/32L (idents IEL/IER/IWR/IWL); RWY 15/33 navaid data not confirmed in reachable tier-1 extract — 🟧 secondary sourcing indicates ILS |
| Config logic | Simultaneous-independent-parallel-approach regime (AIP Supplement 50/25, 2025) — confirm active configuration on ATIS |
| Transition level | By QNH; transition altitude **11,000 ft** `[AIP Malaysia, AD 2 WMKK 2.17]` |
| LVP trigger | Local Localiser Sensitive Area protection applies when cloud base ≤600 ft and/or visibility <2,000 m 🟧 (exact LVP/RVR trigger not confirmed) |
| Missed-approach driver | Traffic/sequencing within the multi-runway, direction-dependent environment rather than terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Runway/configuration assignment follows the **permanent simultaneous-independent-parallel-approach procedure based on the direction of flights** (AIP Supplement 50/25, effective 2025) — confirm the active configuration on ATIS; **Lumpur Approach North/South** and **Lumpur Director** assign the STAR-to-runway transition for the active configuration.
- **Transition to approach:** Expect a STAR-to-ILS transition with radar vectors onto final under **Lumpur Approach**/**Lumpur Director**; verify the charted transition.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 (ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** A late runway/configuration change under the direction-dependent multi-runway regime is the main energy trap at this field; convective-cell avoidance vectoring can also compress the arrival profile during monsoon-transition weather.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 14L | ILS (IEL) | Sourced **CAT I** (1999 AIP table); 🟧 secondary sourcing indicates CAT II | verify current chart |
| 32R | ILS (IER) | As above 🟧 | verify current chart |
| 14R | ILS (IWR) | As above 🟧 | verify current chart |
| 32L | ILS (IWL) | As above 🟧 | verify current chart |
| 15 | Not confirmed — 🟧 secondary sourcing indicates ILS CAT I | Not confirmed | verify current chart |
| 33 | Not confirmed — 🟧 secondary sourcing indicates ILS CAT I | Not confirmed | verify current chart |

- **LVP triggers:** Local ATC procedure protects the Localiser Sensitive Area when cloud base ≤600 ft and/or visibility <2,000 m; exact RVR/CAT trigger figures not confirmed this pass. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟧 Largely flat coastal-plain site; two lit hills — **Bukit Lada (110 m AMSL)** and **Bukit Sungai Lanau (101 m AMSL)** — sit under the **32L and 33 approach paths**, roughly 2–4 NM south of the runway ends. Low but charted/lit — verify MSA sectors on the current chart, particularly for a visual or circling approach to those ends. See [Briefing §3.1](index.md).
- **Specific threats:** 🟧 The **three near-parallel/oblique-runway, simultaneous-independent-approach geometry** (AIP Supplement 50/25) calls for standard parallel-approach vigilance — monitor for a blunder from the adjacent approach stream and maintain TCAS awareness during independent operations. Wake-turbulence separation applies as standard; note that ATC may offer a **wake-turbulence waiver** in VMC by day at the pilot's request — this shifts wake-separation responsibility to the flight crew. 🟧
- **Airspace / traffic:** Dense **Class C** Kuala Lumpur CTR/TMA under **Lumpur Approach North/South** and **Lumpur Director** — see [Asia Airspace Brief](../../../../airspace/asia.md). Brief for possible re-sequencing/vectoring during convective weather.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** The two low hills south of the field (§5) are a minor consideration for a missed approach off RWY 32L or 33 — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around returns you to the direction-dependent, multi-runway radar environment under Lumpur Approach/Director — expect vectoring and possible holding before re-sequencing, especially during convective weather.
- **Go-around traps:** Configuration/runway-assignment awareness in the three-runway environment; be alert to a possible mid-approach runway/configuration change if a convective cell affects the active runway.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 14L/32R **4,019 m**; 14R/32L **4,000 m** — both per the AIP declared-distance table, with no displaced-threshold reduction in the reachable extract (a tier-4 cross-check shows a slightly larger gross-pavement figure with small displaced sections — treat the AIP-declared LDA as authoritative). RWY 15/33 LDA **not published** in the reachable tier-1 extract; tier-4 sourcing gives a physical length of ~3,960 m. 🟧 All three are ample for any K Global widebody at typical arrival weights.
- **Braking / vacate:** RWY 14L/32R and RWY 14R/32L are **grooved** (a wet-braking mitigation); RWY 15/33 grooving status not confirmed. Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground on the day. 🟧
- **Runway-excursion watch:** 🟧 Heavy monsoon-season rain is the relevant seasonal braking-action consideration; ATC may clear a succeeding aircraft to land before the preceding aircraft is clear of the runway under VMC-by-day conditions with reasonable separation assurance — a live sequencing practice worth noting for spacing awareness. `[AIP Malaysia, AD 2 WMKK 2.22]`

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on the assigned runway, taxi in to the **Contact Pier** or **Satellite Terminal A** (Terminal 1) per Ground assignment; VAMSYS mirror gives a planning taxi-in time of **12 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟧 **TWY U5 and U6 carry heavy-vehicle crossing traffic** (AIP-noted); taxi with awareness of ground-vehicle activity on these taxiways. See [Briefing §13](index.md).
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — widebody clusters at Terminal 1's Contact Pier and Satellite Terminal A; Terminal 2 (klia2) is not the expected stand area for our scheduled operation.

---

## 9. Arrival frequency sequence

- **Sequence:** **Lumpur Approach North 124.200/230.000 or Lumpur Approach South 119.450/232.200, Lumpur Director 125.100 (sector/direction-specific) → Lumpur Tower 118.800 (RWY 14L/32R) or 118.500 (RWY 14R/32L) → Lumpur Ground (area-specific: 121.650/121.800/122.150/122.850/122.275/123.250).** 🟧 RWY 15/33 approach-hand-off and tower frequency not confirmed. Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Lumpur Approach** (North/South) and **Lumpur Director** are the facilities for Kuala Lumpur's terminal approach; **Kuala Lumpur (WMFC)** hands off en route inbound — see [Asia Airspace Brief](../../../../airspace/asia.md). 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **Runway/configuration assignment is direction-of-flight-dependent** — do not assume a default landing runway; confirm the active configuration on ATIS.
- **RWY 15/33 navaid/ILS category and comms data are thin in the reachable AIP extract** (post-dates the retrieved cycle) — treat as unconfirmed pending current-AIRAC cross-check.
- **Two lit hills (Bukit Lada, Bukit Sungai Lanau) sit under the 32L/33 approach paths** — low but worth a mention on a visual/circling approach to those ends.
- **Near-daily convective build-up, worse in monsoon-transition periods** — brief a holding/diversion contingency and expect possible late runway/config changes ahead of a cell.
- **Transboundary haze can suppress visibility with little warning**, independent of convective weather — check current visibility/haze advisories before committing to a visual segment.
- **A wake-turbulence waiver may be offered/requested in VMC by day** — understand that accepting it shifts wake-separation responsibility to the flight crew. `[AIP Malaysia, AD 2 WMKK 2.20]`

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- ILS category (CAT I vs CAT II) confirmation for 14L/32R and 14R/32L.
- RWY 15/33 navaid ident/frequency, ILS category, and declared LDA.
- Exact LVP/RVR trigger values.
- Rapid-exit taxiway/vacate detail.
- RWY 15/33 approach-control hand-off and tower frequency.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config, haze/visibility advisory. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP Malaysia (CAAM), AD 2 WMKK PDF** (1999–2011 cycle) — declared distances, navaids, ATS airspace, local traffic regulations, flight procedures — https://aip.caam.gov.my/aip%20pdf/AD/AD2/WMKK/WMKK-KL%20InternationalSepang%20Airpor.pdf (retrieved 2026-07-26).
- **AIP Malaysia (CAAM), AD 2 WMKK** (current eAIP) — https://aip.caam.gov.my/aip/eAIP/2025-03-25/html/eAIP/WM-AD-2.WMKK-en-MS.html (retrieved 2026-07-26). *Obstacle data.*
- AIP Malaysia (CAAM) — SUP 50/25, Simultaneous Independent Parallel Approaches at KLIA — https://aip.caam.gov.my/aip/eAIP/2025-10-02-AIRAC/html/eSUP/WM-eSUP-25-50-en-MS.html (retrieved 2026-07-26). *Runway-configuration logic.*
- OurAirports — https://ourairports.com/airports/WMKK/runways.html (retrieved 2026-07-26). *RWY 15/33 physical dimension cross-check.*
- Wikipedia — "Kuala Lumpur International Airport" — https://en.wikipedia.org/wiki/Kuala_Lumpur_International_Airport (retrieved 2026-07-26). *ILS category corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
