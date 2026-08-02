# LFLL — Lyon-Saint Exupéry · Departure Page

**LFLL / LYS** · Colombier-Saugnieu (Lyon), Rhône, Auvergne-Rhône-Alpes, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — SIA France eAIP-derived

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LFLL Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **35L** (north-flow, 4,000 m) or **17R** (south-flow, 4,000 m) — the field habitually assigns the **long runway to departures** |
| Config logic | Wind-driven; north-flow ("35-config") is the standard/preferential pattern |
| Transition altitude | 5,000 ft — verify no local override on current chart 🟧 |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | Slot-coordination level not confirmed; EUROCONTROL ATFM/CTOT expected as standard EU practice 🟧 |
| De-icing on departure | Available — season mid-Nov to mid-Apr, potassium-formate fluid |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** All three terminals (T1/T2/T3), the cargo apron and GA parking feed onto a **single taxiway parallel to the long runway (17R/35L)**; Ground has jurisdiction from stand/gate out to the 17R/35L holding points. Confirm the exact taxi routing with Ground/Apron on the day.
- **Hot spots / tight taxiways:** 🟧 The taxiways lying **between the two runways** fall under **Tower's** jurisdiction, not Ground's — a jurisdictional hand-off point worth briefing if routed via that area. Most aircraft can use the full taxiway network; the largest Code F types (A380/B747-8/An-124 class) reportedly have a **restricted taxi routing** — confirm applicability against the [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for any K Global type in that class.
- **Runway crossings / read-back-required points:** Not itemised by named hot spot in reachable sources; expect standard crossing/hold-short read-back discipline at the runway-holding-point handoff between Ground and Tower.
- **Low-vis taxi caveats:** Not confirmed in reachable sources; the field's winter fog/frost risk is itself disputed (Briefing §3.4) — do not assume a fog-free taxi environment without checking current METAR/TAF/TREND. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** North-flow ("35-config") is the standard/preferential pattern; south-flow ("17-config") is the reciprocal used when wind dictates.
- **By departure direction:** The field **segregates runway role by configuration** rather than by geographic departure direction — in north-flow, **35L (long runway) is the departure runway** and 35R (short runway) is the arrival runway; in south-flow this mirrors to **17R for departure, 17L for arrival**. See [Briefing §3.3](index.md) for the full dependent-runway rationale.
- **Noise / preferential-runway program:** No named noise-preferential-runway program beyond the standard RNAV SID structure (§4) and the noisiest-aircraft night restriction (22:00–06:00, see Briefing §12).
- **Interaction with arrivals:** Because the two runways are **dependent** (no simultaneous takeoff/landing operations between them), a departure off the long runway is sequenced relative to the arrival stream on the short runway rather than operating fully independently — expect single-stream-style sequencing logic even with two physical runways in use.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| ALURA, BELEP, BELUS, BUSIL, MABES, MADOT, MOKIP, MURRO, REPSI, ROMAM, RISOR | 17R / 35L (per configuration suffix) | RNAV — confirm RNP-1/gradient on current chart 🟧 | BELEP, MURRO, REPSI, RISOR, ROMAM carry a piston/turboprop-only restriction 06:00–22:00 local (not relevant to jet equipment) |
| Non-RNAV / omnidirectional departure | 17R / 35L | Runway-heading climb to 5,000 ft AMSL then assigned heading/route; a steep ATS climb gradient applies to 5,000 ft — verify exact figure on current chart 🟧 | For aircraft not RNAV-1 capable; notify at pre-flight/clearance delivery |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** No named NADP identified beyond the standard RNAV SID structure; the field's core noise mechanism is the **noisiest-aircraft night restriction** (22:00–06:00) rather than a specific NADP1/2 mandate. 🟧
- **Early turn / altitude constraints:** Published per SID — verify on the current chart; the non-RNAV/omnidirectional departure option (§4) carries a notably steep initial ATS climb-gradient requirement to 5,000 ft, worth a specific performance check if ever assigned.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** No close-in obstacle identified; the operative terrain consideration is **regional relief to the east and southwest of the field**, which drives minimum-guidance-altitude/MSA sectoring rather than a specific close-in obstacle on any one departure track — see [Briefing §3.1](index.md).
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed in reachable sources. ILS is published on 3 of 4 runway ends (not 17R) as the field's principal low-visibility infrastructure; sub-category and exact LVTO RVR minima are unconfirmed. 🟧
- **De-icing:** Available; season **mid-November to mid-April**; potassium-formate fluid; holdover up to ~1.5 h in normal conditions, as little as ~20 min in heavy snowfall — plan accordingly. Pad locations/assignment by runway not itemised in reachable sources. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Saint-Exupéry Delivery **121.655** (frequencies per [Briefing §8](index.md); cross-checked between SkyVector and the IVAO France operational reference, not primary-AIP-verified).
- **Frequency sequence:** **Delivery 121.655 → Ground 121.830 → Tower 120.455 (or the combined Tower/Approach position, 132.00, during lower-traffic periods) → Lyon Approach 136.075 (primary; sector frequencies 120.230 / 125.430 / 131.310 / 133.150).** Take the assigned frequency and confirm current chart.
- **CTOT / slot handling:** Slot-coordination level not confirmed; EUROCONTROL ATFM/CTOT regulation expected as standard EU practice. Comply with any assigned CTOT/EDCT-equivalent. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** The **standard departure runway (17R/35L, 4,000 m)** is non-limiting for any K Global type. Note that this is the **long** runway and the field's habitual departure assignment — do not confuse with the shorter 2,670 m runway, which is the habitual **arrival** runway (§3, and see [Arrival §7](arrival.md)) and not the default departure option.
- **Density altitude / temperature:** Non-issue at 821 ft field elevation, temperate climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Winter snow/de-icing season (mid-Nov–mid-Apr) is the relevant seasonal consideration (§7); no specific contamination/braking-action statistic confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty expected for K Global equipment on the 4,000 m departure runway at LFLL.

---

## 10. Gotchas

- **The long runway (17R/35L, 4,000 m) is the habitual departure runway — not the habitual arrival runway.** A crew assuming "longest runway = usual landing runway" will be wrong at this field; confirm the assigned configuration.
- **The two runways are dependent** — simultaneous takeoff/landing operations between them are not permitted; expect single-stream sequencing even with two physical runways available.
- **RWY 17R has no published ILS** (RNP/VOR only) — relevant mainly if a non-standard departure-runway/approach combination is ever assigned.
- **Taxiways between the two runways are Tower's jurisdiction, not Ground's** — expect a frequency/jurisdiction change at that boundary.
- **Largest Code F aircraft (A380/B747-8/An-124 class) reportedly have a restricted taxi routing** — confirm before assigning any such type to an unfamiliar stand/route.
- **Regional relief east/southwest of the field** drives non-trivial MSA/AMG sectoring — do not treat this as a flat, obstacle-free plain field.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway (this pass sourced to a network-sim cross-check, not primary AIP).
- Take-off minima / exact figures.
- LVTO RVR minima and low-vis taxi/SMGCS specifics.
- EOSID/engine-out procedure detail per runway.
- De-icing pad location/assignment by departure runway.
- Confirmation that the dependent-runway/no-simultaneous-ops rule holds on the current primary AIP.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status, current Lyon SIV/TMA restricted-area (LF-R45 series) activation. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- SIA France eAIP, AD 2.LFLL — domain reachable, deep AD-2 page rendered empty (JS frameset) this pass — https://www.sia.aviation-civile.gouv.fr/ (retrieved 2026-07-26). See Briefing page for full detail.
- IVAO France Division — "LFLL - Lyon Saint-Exupéry" operational reference — https://wiki.ivao.fr/books/manex-aeroports-civils/page/lfll-lyon-saint-exupery (retrieved 2026-07-26). *Network-sim document, not regulatory — SID names/configuration logic, dependent-runway rule, taxi-jurisdiction split, ATC frequencies, non-RNAV departure procedure.*
- SkyVector — https://skyvector.com/airport/LFLL/Lyon-Saint-Exupery-Airport (retrieved 2026-07-26). *Frequency cross-check.*
- International Airport Review — "Winter operations are an Olympic sport for Lyon-Saint Exupéry Aéroport" — https://www.internationalairportreview.com/article/232604/winter-operations-are-an-olympic-sport-for-lyon%E2%80%91saint-exupery-aeroport/ (retrieved 2026-07-26). *De-icing detail.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
