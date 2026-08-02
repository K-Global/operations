# LFBO — Toulouse-Blagnac · Departure Page

**LFBO / TLS** · Blagnac (Toulouse), Haute-Garonne, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LFBO Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **14R/32L** (main CAT III/longer pair); **RWY 14R only** mandated 2200–0600 in the RWY-14 configuration |
| Config logic | Config-dependent; night-hours rule funnels RWY-14-config traffic to 14R (§11) |
| Transition altitude | Not confirmed this pass — verify current chart 🟧 |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | Not confirmed — Push-and-Hold procedure available for CTOT management (72 h prior coordination) |
| De-icing on departure | Not confirmed in reachable extract — verify locally 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Confirm the exact taxi with Ground/Apron on the day; **non-8.33 kHz-equipped aircraft** use the Blagnac Prevol frequency (121.705) for clearance.
- **Hot spots / tight taxiways:** 🟥 **TWY P101** is Airbus-manufacturer (A380) activity only — not available for general commercial routing. **TWY P10** is clearstrip-limited to 84 m: taxiing under captain's responsibility for 52–65 m wingspan, forbidden ≥ 65 m except manufacturer activity. Half-turns on taxiways/runways are prohibited for turbojets > 24 m wingspan and turboprops > 36 m wingspan.
- **Runway crossings / read-back-required points:** Not individually detailed — expect standard crossing instructions per Ground/Tower given the mixed commercial/Airbus-test-flight environment.
- **Low-vis taxi caveats:** 🟧 Under LVP, RWY 14R must be vacated via **TWY M2** only (relevant to any operation using the runway before departure sequencing); **TWY M4** requires a specific ATC clearance in LVP. **Code F departures are not authorised under LVP** (TWY P101 unusable except manufacturer activity) — not directly relevant to standard K Global Category R equipment, but a live cross-check to note if a Code F aircraft shares the field.

---

## 3. Runway / SID selection logic

- **By wind / config:** Config-dependent; not individually documented beyond the CAT III/precision preference for RWY 14R.
- **By departure direction:** **Night RWY-use rule** (2200–0600, RWY-14 configuration): take-offs restricted to **RWY 14R only**, from TWY M10, S10 or the threshold between 2200–0000, and from the threshold only between 0000–0600. The equivalent RWY 32-configuration night rule was not captured this pass — confirm against current AIRAC. 🟧
- **Noise / preferential-runway program:** Turbofan aircraft off **RWY 32R and 32L fly ICAO NADP1**. All flights must comply with published noise-abatement procedures; overflight of the Purpan hospital is prohibited at all times.
- **Interaction with arrivals:** Not individually documented; expect coordination with Airbus flight-test traffic sharing the field.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 14L/32R/14R/32L | Not confirmed | Instrument take-offs must comply with the initial ATC clearance and overfly the SID's first turn point at/above the charted altitude — pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Not individually detailed beyond the NADP1 requirement on 32R/32L.
- **Noise-abatement departure procedure (NADP):** **ICAO NADP1** for turbofan aircraft off RWY 32R and 32L.
- **Early turn / altitude constraints:** Overflight of the SID's first turn point, and any altitude constraint before it, is mandatory — no early deviation without ATC instruction.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Garonne-valley plain — no significant close-in terrain or obstacle identified in the reachable extract.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed this pass — verify current chart. 🟧 **Code F departures are not authorised under LVP** (TWY P101 unusable except manufacturer activity) — confirm whether any equivalent restriction applies to K Global's Category R equipment (none identified in the reachable extract for non-Code-F types).
- **De-icing:** Not confirmed in the reachable extract — verify locally. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Standard delivery process; **non-8.33 kHz-equipped aircraft** use **Blagnac Prevol 121.705**.
- **Frequency sequence:** **Blagnac Prevol 121.705 (if applicable) → Blagnac Sol (Ground) 121.900 → Blagnac Tour (Tower) 118.100 → Blagnac Approche 121.105 / Toulouse Approche 120.355/123.850/124.975/125.180/129.305.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** No slot-coordination level confirmed for LFBO. **Push-and-Hold procedure** is available at coordinated remote stands (A20/B20, A22/B22, Romeo) to absorb a CTOT hold without occupying a contact stand — requires 72 h prior notice to the airport operator, not usable at night without a marshaller, not usable in LVP, and not usable when parking is saturated.

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 14R/32L (3,503 m) and 14L/32R (3,025 m) are both non-limiting for K Global Category R operations.
- **Density altitude / temperature:** Non-issue at 499 ft, temperate climate — no hot-and-high penalty.
- **Contamination / wet-runway:** De-icing availability/season not confirmed this pass — build a conservative winter buffer pending confirmation. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty identified for K Global Category R equipment at LFBO.

---

## 10. Gotchas

- **Noise curfew is aircraft-eligibility-based, not just time-based** — an aircraft's ICAO noise chapter and cumulative margin determine whether it can operate at all inside the 2200–0600 window (and inside narrower sub-windows for marginal Chapter 3 aircraft) — confirm eligibility before scheduling, not just runway/weather.
- **Night RWY-use rule funnels RWY-14-config traffic to 14R only** between 2200–0600 with time-dependent taxiway-entry points — do not assume 14L is available for a late-night departure in that configuration.
- **TWY P101 is Airbus-manufacturer-only** — never plan a routing through it for a commercial operation.
- **Engine test ground-runs are banned 2200–0600** and confined to the Bikini/St Martin Lagardère pads — relevant if any post-maintenance run-up is contemplated at this field.
- **Push-and-Hold requires 72 h prior coordination** — it is not a same-day-arrangeable CTOT mitigation.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima / LVTO RVR minima exact figures.
- Transition altitude.
- RWY 32-configuration night-hours use rule.
- EOSID/engine-out procedure detail per runway.
- De-icing availability/season.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. P101/M2/M4 status), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **SIA France eAIP, AD 2 LFBO** (AD 2.13, 2.18, 2.20, 2.21), mirrored via DIRCAM MIAC1, cycles AMDT 06/25 / eff. 12 JUN 2025 / eff. 28 DEC 2023 — https://www.dircam.dsae.defense.gouv.fr/images/Stories/Doc/MIAC1/miac1_toulouse_blagnac_lfbo.pdf (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
