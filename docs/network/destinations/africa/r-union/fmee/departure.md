# FMEE — La Réunion-Roland Garros · Departure Page

**FMEE / RUN** · Sainte-Marie, Réunion (French DOM) · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — French SIA eAIP-derived

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [FMEE Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | No published preferential rule; **RWY 12 carries a hard 10 kt tailwind-component limit** |
| Config logic | Wind-driven; RWY 12 tailwind limit is a real operating constraint, not a preference |
| Transition altitude | 12,000 ft |
| Take-off minima | Published per chart — not confirmed this pass 🟧 |
| CTOT / flow regime | None identified in the reachable AD 2 extract |
| De-icing on departure | **NIL** (tropical) |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Stand-specific per the published compatibility matrix (see [Briefing §13](index.md)); confirm routing with Ground/Tower on the day.
- **Hot spots / tight taxiways:** 🟥 **TWY B and TWY M are closed to A380** movements; **TWY F/G are GA-scale only (7.5 m)** — do not plan a widebody routing through them. Runway turn-around areas are marked (yellow) and **limited to 10 kt / 80% max turning radius**.
- **Runway crossings / read-back-required points:** Not separately identified in the reachable extract.
- **Low-vis taxi caveats:** Not published — verify locally. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** No published preferential-runway rule; **RWY 12 is limited to a 10 kt tailwind component** — a hard limit that will force a runway change if exceeded.
- **By departure direction:** RNAV and conventional SID sets exist for RWY 12, RWY 14, RWY 30 and RWY 32; individual SID names are not itemised in the reachable AD 2 text extract — pull the current-AIRAC chart list at planning. 🟧
- **Noise / preferential-runway program:** RWY 12 conventional departure carries a specific noise-related instruction (AD 2 FMEE SID RWY12 CONV INSTR 01) — verify the exact routing/altitude constraint on the current chart.
- **Interaction with arrivals:** Landing traffic on RWY 30/32 flies a right-hand circuit; confirm any dependent-runway interaction with Approach/Tower on the day.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| RNAV and conventional SID sets (names not itemised this pass) | 12 | Noise-related instruction applies (CONV INSTR 01) 🟧 | Verify current chart |
| RNAV and conventional SID sets (names not itemised this pass) | 14 | — | Verify current chart 🟧 |
| RNAV and conventional SID sets (names not itemised this pass) | 30 | — | Verify current chart 🟧 |
| RNAV and conventional SID sets (names not itemised this pass) | 32 | — | Verify current chart 🟧 |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Standard ICAO 250 KIAS < FL100; observe the charted SID altitude/speed constraints.
- **Noise-abatement departure procedure (NADP):** A specific instruction applies to the **RWY 12 conventional SID** (AD 2 FMEE SID RWY12 CONV INSTR 01) — pull the current chart for the exact routing/altitude constraint. 🟧
- **Early turn / altitude constraints:** Not separately itemised for the RNAV SIDs — verify current chart before planning an early turn.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not separately published in the reachable AD 2 extract — verify current chart. 🟧
- **Close-in / distant obstacles:** Réunion's extreme interior terrain (Piton des Neiges ~3,069 m/10,069 ft; Piton de la Fournaise ~2,632 m/8,635 ft) dominates any escape-route planning — see [Briefing §3.1](index.md). Local obstacles near the field itself (masts/antennas, some lit day/night) are catalogued in the primary AIP — read exact positions off the current chart.
- **Special DP / obstacle DP:** Not identified — name-only pointer, verify current chart.

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not separately tabulated in the reachable AD 2 extract — verify current chart. 🟧
- **De-icing:** **NIL** (tropical field).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** No separate Delivery frequency published — expect clearance via **Ground (121.900)** or **Tower (118.400)**; see [Briefing §8](index.md).
- **Frequency sequence:** Ground (121.900) → Tower (118.400) → Approach (119.400 or 127.200) — all H24; Gonio/VDF homing service is available on multiple frequencies.
- **CTOT / slot handling:** No CTOT/ATFM regime identified in the reachable AD 2 extract.

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 12/30 (3,200 m) is non-limiting; RWY 14/32 (2,670 m) — check performance against the runway assigned, particularly if departing RWY 32.
- **Density altitude / temperature:** Low coastal field (66 ft, ref temp 29.9 °C) — not a hot-and-high performance driver.
- **Contamination / wet-runway:** No specific contamination data published; treat as standard wet-runway planning in the wet/cyclone season.
- **Link to OM B:** See [Briefing §17](index.md) — A339 stand assignment is the operative caveat rather than field performance on RWY 12/30.

---

## 10. Gotchas

- **RWY 12's 10 kt tailwind limit** is a hard, published limit — do not treat it as advisory.
- **A380/AN124 ground movements can close the manoeuvring area to all other traffic** — check the day's movement schedule before planning a tight turnaround alongside a heavy-type rotation.
- **TWY B/M are closed to A380**; **TWY F/G are GA-scale only** — confirm wingspan clearance for the assigned type.
- Runway turn-around-area use is capped at **10 kt / 80% max turning radius** — a real ground-manoeuvring limit, not just a caution.
- Frequent **laser-dazzle reports** near the field — brief crews to report immediately with location if possible.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Exact SID names and climb-gradient/RNP specifics (chart-only, not itemised in the reachable text extract).
- Take-off minima; LVTO minima/procedure; engine-out/obstacle DP detail.
- RWY 12 noise-instruction exact routing (CONV INSTR 01).

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. LOC/GP 14 and any A380/AN124 movement notice), cyclone-season TC advisory (RSMC La Réunion), GPS/RAIM for RNP. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **French SIA eAIP, AIP RUN, AD 2 FMEE**, AIRAC eff. 11 JUN 2026 — https://www.sia.aviation-civile.gouv.fr/media/dvd/eAIP_11_JUN_2026/RUN/AIRAC-2026-06-11/html/eAIP/FR-AD-2.FMEE-fr-FR.html (retrieved 2026-07-26). *Runway/declared distances, local traffic regs, noise, communications.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from the French SIA eAIP and live VAMSYS fields; new 4-page pack replacing the 23-line stub. |
