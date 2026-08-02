# RJTT — Tokyo Haneda · Departure Page

**RJTT / HND** · Ota City, Tokyo, Japan · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [RJTT Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **North Wind (~60%):** 34R (C) and 05 (D) · **South Wind (~40%):** 16L (C) and 16R (A) |
| Config logic | Wind-driven 4-runway/2-configuration system, further split by departure direction (north vs south/west) to keep tracks separated — see [Briefing §3.2](index.md) |
| Transition altitude | Not confirmed this pass — verify current chart 🟧 |
| Take-off minima | Not confirmed this pass 🟧 |
| CTOT / flow regime | No formal slot level modelled; Japanese domestic Ground Delay Program practice applies generally 🟧 |
| De-icing on departure | Published "Nil" in the primary AIP; tier-4 sources report Type I/IV capability in season — discrepancy, confirm locally |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From the domestic terminals (T1/T2, located between the A- and C-Runways) or the international terminal (T3, west of the A-Runway), Ground routes toward the assigned departure runway per the active configuration (§3). Confirm the exact taxi with Ground on the day.
- **Hot spots / tight taxiways:** 🟥 **International (T3) departures must cross the A-Runway** — an AIP-acknowledged ground-workload and hazard-crossing point, especially active during a concurrent A-Runway arrival/departure bank (see [Briefing §3.2/§13](index.md)). JCAB's own operational-procedures material specifically documents an international-departure/runway-crossing hazard under both wind states.
- **Runway crossings / read-back-required points:** Expect explicit crossing/hold-short instructions for any T3-origin departure crossing the A-Runway.
- **Low-vis taxi caveats:** SMGCS/low-vis taxi routing applies consistent with the field's winter Tokyo Bay fog exposure; follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** **North Wind (~60% of the year):** land 34L/34R, **depart 34R (C) and 05 (D)** — simultaneous C/D departures are **not** permitted (flight paths conflict); only one departure stream runs at a time. **South Wind (~40%):** land 22/23, **depart 16L (C) and 16R (A)** — departures from the A-Runway commence the take-off roll from the A/B-Runway intersection to increase capacity, giving an **effective departure length of 2,500 m** on that runway in this configuration, not the full 3,000 m physical length. While an aircraft is inbound to the D-Runway, departures from the A- and C-Runways are suspended.
- **By departure direction:** Traffic departing **north (~30% of volume)** is assigned to the **C-Runway** in both wind states (34R north-wind / 16L south-wind); traffic departing **south/west (~70% of volume)** is assigned to the **D-Runway (05, north-wind)** or the **A-Runway (16R, south-wind)** — this direction-based split keeps departing tracks from crossing in the air, with the outbound ATC sector maintaining separation between the two streams.
- **Noise / preferential-runway program:** The entire runway/config logic exists to route traffic away from central Tokyo and the noise-sensitive residential/refinery areas bordering the field — see [Briefing §12](index.md). No overflight of Metropolitan Tokyo or Chiba Prefecture below prescribed altitudes.
- **Interaction with arrivals:** Departures interact with the continuous arrival stream on the paired runway per the documented hazard-crossing points (an arrival/departure conflict under north wind; a D-Runway-arrival/C-Runway-departure conflict and an A-Runway-departure jet-blast effect on B-Runway arrivals under south wind) — see [Briefing §3.2](index.md).

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in this research pass 🟧 | 34R / 05 / 16L / 16R | **RNAV1/RNAV5 certification is mandatory for all RJTT departures** — this is a hard equipage gate, not a chart preference; verify gradient/equipage per SID on the current chart | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; standard 250 KIAS below FL100 applies in the terminal area (JCAB-wide practice) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** The field's runway/direction-split system (§3) is itself the primary noise-abatement mechanism; no specific NADP1/2 fleet-wide mandate confirmed this pass. 🟧
- **Early turn / altitude constraints:** No overflight of the residential area north of the field or the oil-refinery area to the west; no overflight of Metropolitan Tokyo or Chiba Prefecture below prescribed altitudes — published constraints, verify exact altitude floors on the current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat, reclaimed-land/Tokyo-Bay site — no significant close-in terrain (see [Briefing §3.1](index.md)). The D-Runway's pile-supported structure over the Tama River estuary is a construction/engineering feature, not an approach/departure obstacle.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** LVP applies consistent with the field's Tokyo Bay sea-fog exposure; specific LVTO RVR minima not confirmed this pass. 🟧
- **De-icing:** Published **"Nil"** in the primary AIP facilities table, yet tier-4 operational sources report Type I/IV fluid capability in season for RJTT — genuine discrepancy, confirm locally before planning around either figure. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Tokyo Delivery **121.825 MHz** (primary), H24. IFR departures must call five minutes prior to engine start with callsign, spot number, and proposed FL/altitude/route if changed from the filed plan.
- **Frequency sequence:** **Delivery 121.825/121.875 MHz → Ground 118.225/121.625/121.7/121.975/122.075 MHz → Tower 118.1 MHz (primary) → Tokyo Departure 126.0 MHz (primary) → Tokyo Radar/Approach as assigned.** Take the assigned frequency and confirm current chart. (Frequencies from [Briefing §8](index.md).)
- **CTOT / slot handling:** No formal slot/CTOT regime modelled for K Global's simulated schedule; Japanese domestic Ground Delay Program practice applies generally. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** C-Runway (3,360 m) and A-Runway (3,000 m, but **effectively 2,500 m for south-wind departures** starting roll from the A/B intersection, §3) and D-Runway (2,500 m) are all non-limiting for scheduled K Global widebody weights; brief the correct effective length for the assigned runway and configuration.
- **Density altitude / temperature:** Non-issue at 21 ft, temperate maritime climate — no hot-and-high penalty.
- **Contamination / wet-runway:** All four runway pairs are fully grooved, a positive wet-runway braking factor; winter snow is uncommon but does occur — see [Briefing §14](index.md).
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty for any home-based type at RJTT; **RNAV1/RNAV5 equipage is the binding gate**, not runway performance.

---

## 10. Gotchas

- **RNAV1/RNAV5 certification is mandatory** — an uncertified aircraft cannot be dispatched into RJTT at all, on any runway or configuration.
- **RWY 05 is never a landing runway and RWY 04 has no published approach** — neither is a factor for departure planning, but do not confuse either with a viable arrival option on the return leg.
- **Simultaneous C/D-Runway departures are not permitted under north wind** — only one departure stream runs at a time; expect ATC sequencing between the two.
- **A-Runway south-wind departures use a reduced 2,500 m effective length** (roll starts from the A/B intersection) — do not assume the full 3,000 m physical runway is available.
- **International (T3) departures cross the A-Runway** — a standing, AIP-acknowledged hazard-crossing point; expect explicit crossing instructions.
- **A380 is prohibited from daytime departure** (06:00–23:00 JST), permitted only overnight with a weight restriction; classic B747 variants are barred outright.
- **Historical (2010-era) JCAB guidance cites a 3,000 m C-Runway** — the current AIP shows 3,360 m; treat the current declared distances (Briefing §7) as authoritative and the older document's runway-selection *logic* as background context requiring re-confirmation.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima / transition altitude exact figures.
- NADP preference, if any beyond the runway/direction-split system itself.
- LVTO RVR minima and follow-me/SMGCS specifics.
- EOSID/engine-out procedure detail per runway.
- De-icing availability/provisioning discrepancy between the primary AIP and tier-4 operator reporting.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, especially current runway-configuration status), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **JCAB AIP Japan, AD 2 RJTT** — mirrored via https://nagodede.github.io/aip/japan/documents/RJTT_full.pdf (retrieved 2026-07-26). Communications, runway/declared-distance data, local traffic regulations (procedural speeds, preflight-call requirement).
- Japan Civil Aviation Bureau / airport-slot coordination secretariat — "Operational Procedures at Tokyo International Airport (Haneda)" — https://www.schedule-coordination.jp/archives/arc_hnd/2010/operational_procedure_at_hnd.pdf (retrieved 2026-07-26). Runway/direction-split departure logic, A/B-intersection reduced-length departure procedure, hazard-crossing points.
- OPSGROUP — "Japan BizAv Ops: Haneda, Narita, and Nagoya Explained", 2026-01-13 — https://ops.group/blog/japan-bizav-ops-haneda-narita-and-nagoya-explained/ (retrieved 2026-07-26). Runway-use-by-noise corroboration, de-icing capability reporting.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
