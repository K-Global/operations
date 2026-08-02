# ZBAA — Beijing Capital · Departure Page

**ZBAA / PEK** · Shunyi District, Beijing, China · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [ZBAA Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Config-dependent across the three parallel N–S runways (01/19, 18L/36R, 18R/36L) — no single "usual" runway confirmed; take the active configuration from ATIS |
| Config logic | Wind/traffic/CAAC-flow-driven; independent parallel departures are supported from all three parallel runways per the field's published triple-runway capability — see [Briefing §3.2](index.md) |
| Transition altitude | Not published / verify 🟧 |
| Take-off minima | Not published / verify 🟧 |
| CTOT / flow regime | **IATA Level 3 slot-coordinated**; CAAC ATFM (CTOT/minutes-in-trail/ground holding) routine, especially in dust/winter-weather season 🟧 |
| De-icing on departure | Available — seasonal, roughly Dec–Feb; pad locations/provisioning not confirmed 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From the Terminal 3 international concourse (our expected departure gate, §Dispatch §2), Ground/Apron will route toward the active departure runway per the day's configuration; confirm the exact taxi routing with Ground/Apron on the day — not independently sourced from a public chart this pass. 🟧
- **Hot spots / tight taxiways:** No specific named hot spots or taxiway junctions were obtainable from a reachable public chart source this pass. Given the field's three-runway/three-terminal layout and very high daily movement count (442,046 in 2025), treat ground movement with elevated vigilance and expect longer, more complex taxi routing than at a compact single-terminal field — reflected in the VAMSYS planning taxi-out time of 22 minutes. 🟧
- **Runway crossings / read-back-required points:** Not confirmed — a departure routed across the parallel-runway set should expect explicit crossing/hold-short instructions; confirm locally. 🟧
- **Low-vis taxi caveats:** Expect SMGCS-type low-visibility taxi procedures in the region's spring dust and winter fog/snow conditions; specific procedure/follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Config selection is wind/traffic-driven across the three parallel N–S runways; Beijing's monsoon-influenced climate carries a general seasonal tendency toward northerly/north-westerly winds in winter (favouring the 36-series runway ends) and southerly/south-easterly winds in summer (favouring the 18-series ends) — this is **regional climatology, not a sourced wind-rose figure**; take the current ATIS as the operative call. 🟧
- **By departure direction:** Not confirmed from a public source — no specific eastbound/westbound preferential-runway rule was found this pass. 🟧
- **Noise / preferential-runway program:** Not confirmed in reachable sources. 🟧
- **Interaction with arrivals:** The field runs **independent parallel ILS approaches to 36L/36R/01** and **dependent parallel ILS approaches to 18L/18R/19** depending on configuration (§Briefing §3.2) — departures interact with continuous parallel-runway arrival/departure streams under active CAAC sequencing; expect resequencing on any configuration change and periodic ATFM ground-holding in adverse weather.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 01 / 19 / 18L / 36R / 18R / 36L | China has been implementing PBN nationally at major hubs — RNP-1-type SIDs plausible but not confirmed for ZBAA specifically | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; standard ICAO 250 KIAS below 10,000 ft assumed, no local override confirmed. 🟧
- **Noise-abatement departure procedure (NADP):** Not confirmed in reachable sources — no ZBAA-specific NADP or noise-routing procedure found this pass. 🟧
- **Early turn / altitude constraints:** Not confirmed — verify on the current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** ZBAA sits on the flat North China Plain — no significant close-in obstacle/terrain confirmed for any of the three runways. The nearest relief (Yan Mountains north, Taihang range west) lies well clear of the immediate airfield environment.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed — the field's genuine seasonal low-visibility risk (spring sand-dust, winter fog/snow) makes an LVP-capable departure plan prudent, but specific RVR minima are not sourced this pass. 🟧
- **De-icing:** Available in the Beijing winter season (roughly Dec–Feb, sub-zero daily means); specific pad locations, fluid type and throughput not confirmed. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Beijing Delivery **121.60 / 121.65** (H24 assumed).
- **Frequency sequence:** **Delivery 121.60/121.65 → Ground 121.70–121.95 → Apron 121.95/122.12/122.22/122.62/122.67 → Tower 118.05/118.30/118.50/118.60/124.30 → Beijing/Capital Approach (sector-specific, see Briefing §8).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8, cross-checked between SkyVector and OurAirports.) 🟧
- **CTOT / slot handling:** **IATA Level 3 slot-coordinated**; comply with any assigned CTOT — CAAC ATFM (minutes-in-trail, ground holding) is routine practice, especially in dust/winter-weather season or around major state events (§Dispatch §4). 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** The 3,800 m main-pair runways (01/19, 18L/36R) are non-limiting for any K Global type; the 3,200 m third runway (18R/36L) is likewise ample for typical departure weights.
- **Density altitude / temperature:** Non-issue at 116 ft elevation — no hot-and-high penalty. Summer heat (July mean ≈27°C, per climate normals) is unremarkable for performance planning at this elevation.
- **Contamination / wet-runway:** Winter snow/ice season (roughly Dec–Feb) is the relevant seasonal consideration; no specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty for any K Global type at ZBAA; Terminal 3 was built with A380-capable stands/gates, confirming no size constraint either.

---

## 10. Gotchas

- **Three independent parallel N–S runways with a published independent/dependent triple-parallel operating capability** — never assume a single "usual" runway; take the active configuration from ATIS and expect resequencing on any config change.
- **IATA Level 3 slot-coordinated field** — CTOT compliance is non-optional; a missed slot has real network consequences.
- **CAAC can impose short-notice, event-driven full-stop restrictions** on non-priority traffic (documented historical precedent) — always check the current NOTAM picture before a departure into or out of this field, not just this durable brief.
- **Spring sand-dust season (Mar–May)** can cut visibility abruptly and trigger region-wide flow restrictions, not just a local delay — check current SIGMET, not only the local METAR.
- **Winter de-icing season (Dec–Feb)** — confirm current de-icing status; pad/provisioning detail is not sourced in this brief, coordinate with handling on the day.
- **Long taxi-out** (VAMSYS planning figure 22 minutes) reflects the three-runway/three-terminal layout — do not plan a tight turn assuming a short taxi.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima / transition altitude exact figures.
- Preferential-runway/noise-abatement departure procedure, if any.
- Start-up/push-back procedure detail and taxi hot spots — no public chart data found this pass.
- LVTO RVR minima and follow-me/SMGCS specifics.
- EOSID/engine-out procedure detail per runway.
- De-icing pad locations and provisioning.

> **Live data — pull at planning:** wx/METAR/TAF (incl. sand-dust SIGMET in season), NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP China (CAAC / AISC), eAIP China** — https://www.eaipchina.cn/ — attempted, gated/unreachable this pass (retrieved attempt 2026-07-26).
- SkyVector — https://skyvector.com/airport/ZBAA/Beijing-Capital-Airport (retrieved 2026-07-26). *Frequencies, runway data.*
- OurAirports — https://ourairports.com/airports/ZBAA/frequencies.html and /runways.html (retrieved 2026-07-26). *Frequency/runway cross-check.*
- Wikipedia — "List of airports with triple takeoff/landing capability" — https://en.wikipedia.org/wiki/List_of_airports_with_triple_takeoff/landing_capability (retrieved 2026-07-26). *Independent/dependent triple-parallel-runway operating capability.*
- UAS Aero — "Restrictions in Force at Beijing Airport" — https://www.uas.aero/restrictions-in-force-at-beijing-airport (retrieved 2026-07-26). *Event-driven restriction precedent.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP China (public cross-check where gated); K Global fields from live VAMSYS; 4-page pack. |
