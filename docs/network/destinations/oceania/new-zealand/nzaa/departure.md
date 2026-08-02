# NZAA — Auckland Intl · Departure Page

**NZAA / AKL** · Māngere, Auckland, New Zealand · Oceania
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [NZAA Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **05R or 23L** — the only runway pair; wind/traffic-driven selection |
| Config logic | No fixed preferential direction; ATC selects per wind and single-runway traffic flow |
| Transition altitude | 13,000 ft |
| Take-off minima | Published per AIP — exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | None identified — single-runway ATC sequencing |
| De-icing on departure | Not confirmed — low-frequency consideration in this maritime climate 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** RWY 05R domestic departures route via **TWY B and L**; TWY M may be used to bypass any queue at holding point A9. International departures route per Ground/Apron assignment toward the assigned runway.
- **Hot spots / tight taxiways:** 🟥 Rapid-exit (high-speed) taxiways feed directly onto TWY A — Ground avoids routing conflicting traffic across A near a vacating aircraft. **Holding points A3 and A8 are not used for departure release**, as pilots cannot visually confirm the approach is clear before entering.
- **Runway crossings / read-back-required points:** Standard hold-short/crossing instructions apply at TWY A intersections; confirm with Ground on the day.
- **Low-vis taxi caveats:** Not confirmed in reachable sources. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** No fixed preferential runway; ATC selects 05R or 23L per wind and traffic flow on the single runway pair.
- **By departure direction:** RWY 05R departures are **not taken off the SID until passing A030** and must not overfly the city below A050 unless established on an approach/departure path. RWY 23L departures must **climb to A030 on the extended runway centreline** before turning right; a left turn is permitted once above A005.
- **Noise / preferential-runway program:** Noise abatement is prescribed under CAR Part 93, Subpart B; international night noise-abatement STARs/SIDs may be used 2300–0600 local where traffic permits (not mandatory in all conditions — coordinate per ATC).
- **Interaction with arrivals:** **Divergent missed-approach and divergent-SID design** keep departure tracks and arrival missed-approach tracks apart on the single runway, sustaining a higher departure rate than a naive shared-track design would allow.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient/RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| AVNAR | 05R | Steep climb gradient 🟧 | **Preferred for international Cat C jets** ex-PEBLU/VELMO; aircraft unable to meet the gradient are assigned POLIS (domestic) or AKELA (international) |
| POLIS | 05R | Shallower gradient than AVNAR 🟧 | **Preferred for Cat D jets / heavies** |
| AKELA | 05R | Lower climb gradient than AVNAR 🟧 | For heavier aircraft ex-PEBLU/VELMO |
| BROOK | 05R | — | Noise-abatement departure, Cat A–C |
| REKIS | 05R | 180 kt limitation at VINOD 🟧 | Preferred for props south; may be given to jets comfortable with the speed limitation |
| EMRAG | 05R | — | Least preferred — manual vectoring required |
| LEVRA | 23L | — | **Preferred for jets** |
| STEAL | 23L | — | Preferred for props; not normally issued to jets initially |
| LENGU | 23L | — | Least preferred — manual vectoring required |

*Names/logic per VATNZ SOP (tier-4, network-sim) — pull the live current-AIRAC SID list and gradient tables before use.*

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per assigned SID; RWY 05R departures held on runway heading to A030 before SID track, no city overflight below A050 unless established. RWY 23L departures climb on the extended centreline to A030 before turning.
- **Noise-abatement departure procedure (NADP):** Governed under CAR Part 93, Subpart B; specific NADP1/2 fleet preference not confirmed in reachable sources. 🟧
- **Early turn / altitude constraints:** RWY 23L — no left turn below A005; no right turn before A030. RWY 05R — no SID track before A030.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat Māngere isthmus — no significant close-in terrain or obstacle constraint identified.
- **Special DP / obstacle DP:** Not confirmed in reachable sources. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed in reachable sources — verify current chart. 🟧
- **De-icing:** Not confirmed in reachable sources; New Zealand's temperate maritime climate makes this a low-frequency consideration at this field. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Auckland Delivery **128.2** (H24).
- **Frequency sequence:** **Delivery 128.2 → Ground 121.9 → Tower 118.7/120.95 → Approach (Auckland TMA) 124.3/129.6/129.5 → Auckland Control (Oceanic Radar 123.9/134.0 or Raglan Sector 126.0/120.5, as applicable).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** No formal slot/CTOT regime identified; single-runway ATC sequencing is the operative constraint. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 3,535 m / 3,292 m LDA is non-limiting for any K Global type under normal (non-WIP) declared distances. **Verify current "Runway WIP" rehabilitation status by NOTAM** — historic reduced-length figures are materially more limiting (§Briefing §7/§18).
- **Density altitude / temperature:** Non-issue at 23 ft, temperate maritime climate — no hot-and-high penalty.
- **Contamination / wet-runway:** No specific contamination/braking-action data confirmed this pass; standard wet-runway planning applies. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty for any K Global type at NZAA under normal declared distances.

---

## 10. Gotchas

- **Single runway (05R/23L)** — no parallel runway; any disruption on this runway pair constrains the whole field, unlike a multi-runway hub.
- **Monday 0130–0430 local maintenance closure** — do not plan a departure into this recurring window.
- **RWY 23L take-offs cross the wading-bird flight path near TWY A8/A9/RWY 05R threshold** — check ATIS for peak bird-activity notification, tidal-cycle-linked.
- **Holding points A3 and A8 are not used for departure release** — expect assignment to an alternative intersection.
- **Code F (A380/B747-8) aircraft cannot use rapid-exit taxiways A4–A7 or TWY B between B2–B6** — confirm routing if operating a Code F rotation.
- **"Runway WIP" rehabilitation programme** — confirm current status; displaced thresholds materially reduce declared distances when active.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names, gradients and RNP requirements per runway.
- Take-off minima exact figures.
- EOSID/engine-out procedure detail per runway.
- LVTO RVR minima.
- De-icing availability/provisioning.
- NADP fleet preference.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, current WIP-rehabilitation status), CTOT/ATFM if applicable, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP New Zealand, AD 2 NZAA 2.17/2.20/2.22** (extract carrying effective dates 2016–2018) — TA, taxiing/local traffic regulations, flight procedures — mirrored via https://pdf4pro.com/cdn/nzaaad-2-2-aerodrome-geographical-and-administration-55b69d.pdf (retrieved 2026-07-26).
- **AIP New Zealand GEN 3.7-2** — ATC frequencies — https://fyi.org.nz/request/22244/response/83943/attach/8/GEN%203.7.pdf (retrieved 2026-07-26).
- **VATNZ — NZAA Auckland SOP** — https://sops.vatnz.net/aerodromes/Class-C/nzaa/ (retrieved 2026-07-26). *Network-sim; SID assignment/gradient logic, taxi routing, Code F rules cross-checked here.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP New Zealand; K Global fields from live VAMSYS; 4-page pack. |
