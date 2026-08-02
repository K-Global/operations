# OOSA — Salalah · Departure Page

**OOSA / SLL** · Salalah, Dhofar Governorate, Oman · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [OOSA Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **07 or 25** — single runway, wind-driven selection; no preferential rule confirmed 🟧 |
| Config logic | Wind-driven; possible khareef-season seasonal bias not confirmed 🟧 |
| Transition altitude | Not published / verify 🟧 |
| Take-off minima | Not published / verify 🟧 |
| CTOT / flow regime | No ATFM/CTOT programme confirmed; slot coordination reported required (§Dispatch §4) 🟧 |
| De-icing on departure | **NIL** — arid/tropical climate 🟩 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not confirmed — single-runway field, taxi routing detail not independently obtained this build. 🟧
- **Hot spots / tight taxiways:** Not confirmed. 🟧
- **Runway crossings / read-back-required points:** Not confirmed — single runway, no crossing-runway geometry expected, but not verified. 🟧
- **Low-vis taxi caveats:** Given the khareef-season fog/drizzle risk (§3.4 of the Briefing), expect low-visibility taxi procedures may apply in season; SMGCS/follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Not confirmed — expect standard wind-driven selection between 07 and 25 on this single runway.
- **By departure direction:** Not confirmed.
- **Noise / preferential-runway program:** Not confirmed. 🟧
- **Interaction with arrivals:** Single runway serves both arrivals and departures — sequencing is the operative consideration rather than parallel/crossing-runway interaction.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research 🟧 | 07 / 25 | Not confirmed | Pull the live current-AIRAC SID list before use. Note: this field carries a recent history of SID/STAR suspension by AIP supplement (SUP 07/2024, since cancelled) — re-verify procedure availability each visit, see [Briefing §5](index.md) |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Not confirmed; standard 250 KIAS below FL100 (ICAO norm) assumed. 🟧
- **Noise-abatement departure procedure (NADP):** Not confirmed. 🟧
- **Early turn / altitude constraints:** Not confirmed — verify on current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed. 🟧
- **Close-in / distant obstacles:** The airport sits on the flat Salalah coastal plain; the Dhofar escarpment (Jebel Qara massif, ~1,200 m) lies generally inland/north of the field — regional terrain, not a confirmed close-in obstacle for the runway environment itself. Exact bearing/distance not independently confirmed — see [Briefing §3.1](index.md). 🟧
- **Special DP / obstacle DP:** Not confirmed. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed; the operative low-vis risk period is the **khareef monsoon (Jun–Sep)**, when persistent coastal fog/drizzle can reduce visibility sharply, most severely in July mornings — see [Briefing §3.4](index.md). Specific LVTO RVR minima not confirmed. 🟧
- **De-icing:** **NIL** — no cold-weather requirement at this field. 🟩

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not independently confirmed as a separate frequency — see [Briefing §8](index.md) for the published communications set (no dedicated Delivery frequency identified this build). 🟧
- **Frequency sequence:** **Ground 124.02 → Tower 118.20/129.57 → Salalah Approach/Radar 119.10/126.25.** Take the assigned frequency and confirm current chart (frequencies from Briefing §8; not cross-checked against a primary AIP table).
- **CTOT / slot handling:** Slot coordination reported required (see [Dispatch §4](dispatch.md)); no ATFM/CTOT programme independently confirmed. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 3,997 m runway is non-limiting for any K Global type.
- **Density altitude / temperature:** Sea-level field (73 ft) — not hot-and-high; no density-altitude performance penalty expected.
- **Contamination / wet-runway:** **Khareef-season (Jun–Sep) persistent drizzle** is the relevant seasonal consideration — a wet-runway braking-action watch-item during that window; no specific contamination/braking-action data confirmed this build. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty identified for any K Global type at OOSA.

---

## 10. Gotchas

- **Khareef season (Jun–Sep) can bring sudden coastal fog/drizzle** with little warning — brief a low-visibility-departure and diversion contingency for any departure in this window.
- **Single runway (07/25)** — no reciprocal-runway or crossing-runway complexity, but also no redundancy if the runway is unavailable.
- **Co-located military air base (RAFO Salalah)** — expect occasional coordination with military traffic on the field.
- **Published operating-hours/curfew status is unresolved** (see Briefing §6/§18) — confirm current AD hours before planning an off-schedule departure.
- **SID/STAR availability has changed by NOTAM/supplement at this field before** — re-verify the current-AIRAC procedure set each visit.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names, RNP/gradient specifics.
- Take-off minima / transition altitude.
- Start-up/push-back procedure detail.
- LVTO RVR minima and low-visibility taxi/SMGCS procedure.
- Clearance-delivery frequency (not identified this build).
- Standard taxi routing and any hot-spot/read-back-required points.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, current SID/STAR status), CTOT/ATFM/slot status, current khareef-season LVP status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- SkyVector — https://skyvector.com/airport/OOSA/Salalah-Airport (retrieved 2026-07-26). *Runway/communications data.*
- Oman Civil Aviation Authority — eAIP AMDT 02/25 cover/amendment index — https://aim.caa.gov.om/eAIP_AMDT_02-25/final/2025-05-15/html/cover-en-GB.html (retrieved 2026-07-26). *SID/STAR suspension supplement history (SUP 07/2024, cancelled).*
- Wego Travel Blog — "Salalah Weather in Summer" — https://blog.wego.com/salalah-weather-in-summer/ (retrieved 2026-07-26). *Khareef visibility degradation detail — general climatology, not aviation MET source.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
