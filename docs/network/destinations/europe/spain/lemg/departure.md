# LEMG — Málaga-Costa del Sol · Departure Page

**LEMG / AGP** · Málaga, Andalusia, Spain · Europe
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — AIP España (ENAIRE)-derived

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LEMG Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **RWY13** (Configuración Sur, preferred) or **RWY30** (Configuración Norte) |
| Config logic | Segregated same-direction arrival/departure pairing — **not** independent parallel runways; see Briefing §3.3 |
| Transition altitude | Not confirmed this pass 🟧 |
| Take-off minima | Not confirmed this pass 🟧 |
| CTOT / flow regime | **Fully slot-coordinated** (AECFA/CEOPS AGP) 🟥 |
| De-icing on departure | Not typically required; NIL/rare assumption, not confirmed 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From T2/T3 stands, Ground/Apron routes to the assigned departure runway — **RWY13** under Configuración Sur or **RWY30** under Configuración Norte; confirm exact taxi with Ground/Apron on the day.
- **Hot spots / tight taxiways:** 🟥 **Single taxiway link from the RWY12/30 side to the terminal apron** — a recognised throughput/complexity constraint and a contributing factor in a Nov 2025 near-miss event (Norwegian 737 MAX8 go-around after spotting a business jet still on RWY12). No formally charted hot-spot list was located this pass.
- **Runway crossings / read-back-required points:** Not itemised in reachable sources — expect standard read-back discipline, particularly around the single taxiway link noted above.
- **Low-vis taxi caveats:** Not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** **Configuración Sur** (preferred): departures **RWY13**. **Configuración Norte**: departures **RWY30** (takeoff-only, 3,089 m effective TORA/TODA/ASDA including the 340 m preceding paved extension).
- **By departure direction:** Not otherwise differentiated beyond the Sur/Norte configuration choice.
- **Noise / preferential-runway program:** Not confirmed in reachable sources. 🟧
- **Interaction with arrivals:** In each configuration, arrivals and departures run in the **same compass sense** on separate runways (Sur: arr RWY12/dep RWY13; Norte: arr RWY31/dep RWY30) — this is the mechanism enabling a high simultaneous-movement rate without classic independent-parallel-approach separation logic.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 13 / 30 | Not confirmed 🟧 | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed in reachable sources. 🟧
- **Early turn / altitude constraints:** Not confirmed — verify current chart, particularly given the Montes de Málaga proximity. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** **Montes de Málaga** rise close on the landward (north/northeast) side of the field — relevant to any climb-out routing on that side; verify obstacle clearance on the current chart.
- **Special DP / obstacle DP:** Not confirmed — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed this pass. 🟧 Note the field's CAT I-only ILS reality (Briefing §9) — do not assume CAT III-grade low-vis infrastructure without a fresh AIRAC cross-check.
- **De-icing:** Not typically required; NIL/rare assumption for this Mediterranean-coastal field, not independently confirmed. 🟧

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Málaga Clearance **121.880** — H24, also via datalink.
- **Frequency sequence:** **Clearance 121.880 → Ground (GMC-W 121.705 / GMC-E 121.955) → Málaga TWR (TWR-W 118.155 for RWY13/31, TWR-E 118.780 for RWY12/30) → Málaga APP (118.455 primary, 123.855 ARR West, 125.955 APP).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** **Fully slot-coordinated** (AECFA/CEOPS AGP) — comply with the assigned slot; aircraft with cruise speed <200 kt may be delayed. 🟥

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY13 (3,198 m) and RWY30 (3,089 m effective) are non-limiting for any K Global type.
- **Density altitude / temperature:** Non-issue at 52 ft, though the **Terral wind** (§Briefing §14) can bring elevated temperatures with the descending airflow — monitor rather than treat as a classic hot-and-high issue.
- **Contamination / wet-runway:** No specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — **the A350-1000 (A35K) is explicitly excluded from LEMG** per the AIP; no other field-length/elevation performance penalty applies to K Global types here.

---

## 10. Gotchas

- **RWY12 is landing-only; RWY30 is takeoff-only** — never plan a takeoff from RWY12 or a landing on RWY30; these runways function as a segregated arrival/departure pair, not a redundant parallel set.
- **A350-1000 (A35K) is explicitly barred from this aerodrome** — do not schedule this type into LEMG.
- **Terral/mountain-wave turbulence** off the Montes de Málaga can affect the initial climb-out, especially on the RWY30/31 (northern) side — brief accordingly in forecast conditions.
- **Single taxiway link from the RWY12/30 side to the terminal apron** — a real ground-workload/complexity factor, recently the subject of a publicised Nov 2025 near-miss event.
- **Fully slot-coordinated field** — on-time pushback discipline matters here; a missed slot has real network consequences.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Transition altitude and take-off minima exact figures.
- NADP preference and noise-abatement procedure detail.
- EOSID/engine-out procedure detail per runway, particularly relative to the Montes de Málaga.
- CTOT/ATFM specifics for LEMG beyond the confirmed slot-coordination fact.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. the single RWY12/30-side taxiway link), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP España (ENAIRE), AD 2-LEMG**, current AIRAC — https://aip.enaire.es/aip/contenido_AIP/AD/AD2/LEMG/LE_AD_2_LEMG_en.pdf (retrieved 2026-07-26). *Runway configuration logic, communications, A35K exclusion, slot coordination.*
- Euro Weekly News — Nov 2025 near-miss report — https://euroweeklynews.com/2025/11/23/near-miss-on-malaga-runway-does-air-traffic-control-need-a-massive-upgrade/ (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Built from AIP España (ENAIRE); K Global fields from live VAMSYS; 4-page pack. |
