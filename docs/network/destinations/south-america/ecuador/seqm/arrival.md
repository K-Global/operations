# SEQM — Mariscal Sucre Intl · Arrival Page

**SEQM / UIO** · Tababela (Quito), Ecuador · South America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — DGAC Ecuador AIP not reachable this pass; built from tier-4 public sources

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [SEQM Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Single runway **18/36** — direction wind-driven; no preferential-runway rule published 🟧 |
| Usual approach | ILS believed on one direction (category not confirmed, believed CAT I only); **RNP AR** believed on the terrain-constrained direction 🟧 |
| Config logic | Wind-driven, single-runway field — no crosswind/parallel alternative |
| Transition level | Not published / verify (TL by QNH) 🟧 |
| LVP trigger | Not published / verify 🟧 |
| Missed-approach driver | **Terrain** — Andean valley/ridge/volcano profile constrains the climb path on at least one direction 🟥 |

---

## 2. STAR / transition selection

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Not confirmed — single-runway field, expect STAR/runway pairing to be terrain- and wind-driven; verify on current chart. 🟧
- **Transition to approach:** Not confirmed — RNAV-to-final transition specifics not published in reachable sources. 🟧
- **Speed / flow constraints on the STAR:** Not published / verify — standard ICAO norms (250 KIAS <FL100) assumed absent a local override. 🟧

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Not published / verify — plan conservatively given the terrain-hemmed valley and very high field elevation (less altitude to lose than a sea-level field, but energy management is complicated by surrounding high terrain). 🟧
- **Speed control:** Standard ICAO speed norms assumed; STAR-specific speed gates not confirmed. 🟧
- **Altitude constraints:** Not confirmed — expect terrain-driven minimum-altitude constraints on the arrival; verify every constraint on the current chart before descent. 🟥
- **Energy traps:** Terrain-hemmed valley reduces margin for a late runway-change or unstabilized approach; the very-high-altitude environment also means indicated airspeed corresponds to a materially higher true/ground speed at the same energy state — brief this explicitly. See [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md).

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 18/36 (one direction) | ILS, name/category not confirmed (believed CAT I only) | CAT category not confirmed — believed CAT I only given terrain constraints on the missed approach, not confirmed as CAT II/III 🟧 | Verify current chart |
| 18/36 (terrain-constrained direction) | RNP AR (RNAV (RNP) AR), name not confirmed | RNP AR crew/aircraft authorization believed required 🟧 | Verify current chart |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟥 Tababela sits in a valley on the eastern Andean slope; **Cotopaxi** volcanic massif to the south, the **Ilaló** ridgeline and surrounding high ground hem the valley. Verify current MSA sectors and area chart before every approach — cross-ref [SEQM Briefing](index.md) §3.1.
- **Specific threats:** No closely-spaced parallels (single runway); the operative specific threat is the believed **RNP AR requirement** on at least one direction due to terrain blocking a conventional ILS/missed-approach path — confirm current authorization before accepting this approach. Afternoon convective activity and potential mountain-wave/turbulence near high terrain are also relevant — see §14 of the Briefing.
- **Airspace / traffic:** Guayaquil FIR (SEFG); terminal control type (radar vs procedural) not independently confirmed — cross-ref [SEQM Briefing](index.md) §3.2.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** The missed-approach climb path on at least one runway direction is believed constrained by the surrounding valley/ridge/volcano terrain — this is the principal reason Quito/Tababela is understood to rely on RNP AR procedures rather than a simple conventional missed approach. Verify the charted climb gradient and turn constraints before every arrival. 🟥
- **Re-sequencing environment:** Single-runway field with terrain constraints on vectoring options — expect a structured go-around procedure rather than free vectoring; verify on current chart.
- **Go-around traps:** Density-altitude performance penalty affects go-around climb-gradient margin at this elevation — see [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md). Configuration/flap-retraction timing on a go-around should account for the higher true airspeed at this altitude.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** Not published individually per direction — overall runway length 4,098 m; per-direction LDA not confirmed. Cross-ref [SEQM Briefing](index.md) §7. 🟧
- **Braking / vacate:** Rapid-exit taxiway locations not confirmed in reachable sources. 🟧
- **Runway-excursion watch:** At this elevation, actual landing distance required is materially longer than at a sea-level equivalent for the same weight/config (density-altitude effect on groundspeed) — always use the AFM/OFP performance module for the day; do not rely on the nominal 4,098 m length as the safety margin. 🟧

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not published in reachable sources — confirm with Ground/Apron on the day. 🟧
- **Hot spots / tight taxiways:** Not confirmed in reachable sources this pass — cross-ref [SEQM Briefing](index.md) §13. 🟧
- **Stand/gate notes:** Cross-ref [SEQM Dispatch](dispatch.md) §3 — stand/gate allocation not confirmed this pass.

---

## 9. Arrival frequency sequence

- **Sequence:** **Quito Approach (119.7 / 121.2)** → **Quito Tower (118.1)** → **Quito Ground (121.9)** — per [SEQM Briefing](index.md) §8 (tier-4 snapshot only, treat as unconfirmed pending AIRAC cross-check).
- **Approach/Departure control:** **Quito Approach**, two sectors reported (119.7, 121.2); sector split/boundaries not confirmed. 🟧

---

## 10. Gotchas

- Terrain-hemmed valley — do not accept a visual shortcut or early descent below the charted MSA/procedure altitude; verify the area chart before every arrival.
- Believed RNP AR requirement on at least one runway direction — confirm current crew/aircraft authorization before planning or accepting this approach.
- Single runway — no crosswind/parallel alternative; a late runway-direction change carries the full weight of re-briefing the approach and missed-approach picture.
- Very-high-altitude approach speed/energy management — indicated airspeed corresponds to a materially higher true/ground speed than at a sea-level field; brief this explicitly, particularly for a go-around.
- Volcanic-ash/NOTAM risk from the regional Andean volcanic arc — check the current VAAC/NOTAM picture before every arrival.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- STAR names, transition procedures, and approach minima — not confirmed in reachable research pass.
- ILS category and RNP AR procedure name(s)/minima — not confirmed.
- Transition level, LVP trigger conditions — not confirmed.
- Rapid-exit taxiway locations and taxi-in routing — not confirmed.
- Approach-control sector boundaries — not confirmed.
- VATSIM cross-check — no dedicated VATSIM vACC/division airport SOP for SEQM located this pass.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config, ground-delay/flow status, volcanic-ash/VAAC advisories. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/SEQM/ , /runways.html , /frequencies.html (retrieved 2026-07-26).
- Wikipedia — "Mariscal Sucre International Airport" — https://en.wikipedia.org/wiki/Mariscal_Sucre_International_Airport (retrieved 2026-07-26).
- Companion OM C file: [SEQM Briefing](index.md) §3.1, §8, §10.
- Companion OM E file: [`High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md).
- Companion OM E file: [`PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **DGAC Ecuador AIP (AD 2 SEQM)** — primary source of record; not reachable in this research pass.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
