# GCLP — Gran Canaria (Gando) · Departure Page

**GCLP / LPA** · Gran Canaria Island (Bay of Gando), Canary Islands, Spain · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [GCLP Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **RWY 03 (03L/03R)** — dominant NE trade-wind (alisios) climatology 🟧 |
| Config logic | Wind-driven; persistent NE trades favour RWY 03 |
| Transition altitude | Not confirmed 🟧 |
| Take-off minima | Not published / verify 🟧 |
| CTOT / flow regime | Not confirmed — not expected to be significant at this traffic level 🟧 |
| De-icing on departure | **NIL** — sub-tropical climate |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not confirmed in detail — the **closely-spaced parallel-runway pair** (03L/21R, 03R/21L) likely shapes stand-to-runway taxi assignment; confirm the exact taxi with Ground/Apron on the day.
- **Hot spots / tight taxiways:** 🟧 The closely-spaced parallel-runway crossing/taxi interaction is a plausible caution point; specifics not confirmed in reachable sources.
- **Runway crossings / read-back-required points:** Not confirmed — expect possible crossing instructions given the parallel-runway pair.
- **Low-vis taxi caveats:** 🟧 Relevant given the field's reported CAT III capability; SMGCS/low-vis routing specifics not confirmed.

---

## 3. Runway / SID selection logic

- **By wind / config:** The persistent **NE trade wind (alisios)** strongly and climatologically favours **RWY 03** operations; RWY 21 is used when wind dictates otherwise. Not sourced from a primary AIP configuration table. 🟧
- **By departure direction:** Not confirmed. 🟧
- **Noise / preferential-runway program:** Not confirmed. 🟧
- **Interaction with arrivals:** The **closely-spaced parallel-runway pair** (03L/21R, 03R/21L) means departure and arrival streams may interact more tightly than a widely-spaced parallel set — confirm independent/dependent operating status on the current AIRAC (see Briefing §18).

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 03L / 03R / 21L / 21R | Not confirmed | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) assumed — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed. 🟧
- **Early turn / altitude constraints:** Not confirmed — verify current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources. 🟧
- **Close-in / distant obstacles:** 🟧 Gran Canaria's interior massif (**Pico de las Nieves, ~1,949 m**, roughly 20 NM inland) is the relevant obstacle consideration for any EOSID routing that tracks toward the island's interior rather than out over the Atlantic — apply the operator/type EOSID for the assigned runway and verify against the current chart. Not a factor for a standard coastal-track departure.
- **Special DP / obstacle DP:** Not confirmed. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed — relevant given the field's reported CAT III capability. 🟧
- **De-icing:** **NIL** — sub-tropical Canary Islands climate; non-factor at this field.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not confirmed. 🟧
- **Frequency sequence:** **Ground 121.7 → Tower 118.3 → Gran Canaria Aproximación 120.9.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** Not confirmed; not expected to be significant at this traffic level. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 3,100 m (each runway) is non-limiting for any K Global narrowbody and most widebody weights at normal conditions.
- **Density altitude / temperature:** Non-issue — sea-level field (78 ft), stable sub-tropical temperatures year-round.
- **Contamination / wet-runway:** Rare — arid/sub-tropical climate with occasional rain; no specific braking-action data confirmed. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or elevation performance penalty; the operative watch-item is **NE trade-wind crosswind/gust handling**.

---

## 10. Gotchas

- **Persistent NE trade-wind crosswind/gust** — brief for a strong, gusty crosswind/headwind component regardless of nominal RWY 03 preference.
- **Closely-spaced parallel runways (03L/21R, 03R/21L)** — confirm correct runway assignment; do not assume independent simultaneous operations without checking the current AIRAC.
- **Interior massif (~1,949 m, ~20 NM inland)** is the relevant obstacle for any inland-tracking EOSID — verify against the current chart.
- **Seasonal Saharan dust (calima)** can reduce visibility sharply — check current NOTAM/METAR trend before departure in season.
- **CAT III equipment-status check** before relying on low-vis departure capability, given the sub-category/runway designator is unconfirmed from a primary source.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics.
- Take-off minima / TA.
- Closely-spaced parallel-runway independent/dependent operating status.
- Start-up/push-back procedure detail.
- Engine-out/EOSID detail per runway.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, CAT III equipment status), CTOT/ATFM, calima/visibility advisories. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP España (ENAIRE)** — https://aip.enaire.es/AIP/ attempted 2026-07-26; JavaScript-frameset, not directly reachable this pass.
- OurAirports — https://ourairports.com/airports/GCLP/frequencies.html (retrieved 2026-07-26).
- Wikipedia — "Gran Canaria Airport" — https://en.wikipedia.org/wiki/Gran_Canaria_Airport (retrieved 2026-07-26). *Runway configuration/history.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP España (ENAIRE); K Global fields from live VAMSYS; 4-page pack. |
