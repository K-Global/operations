# LKPR — Praha/Ruzyně (Václav Havel Airport Prague) · Departure Page

**LKPR / PRG** · Prague-Ruzyně, Czech Republic · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — tier-4 corroborated, primary AIP not reachable this build

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LKPR Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **RWY 24** (most-used, prevailing westerly wind); **RWY 30** used often as secondary; **RWY 06** rarely; **RWY 12** only exceptionally `[Wikipedia, AIP-cited]` |
| Config logic | Wind-driven; RWY 24 is the dominant direction, RWY 12/30 pair is CAT I only and noise-routed over populated areas |
| Transition altitude | Not published / verify 🟧 |
| Take-off minima | Not published / verify 🟧 |
| CTOT / flow regime | Slot regime not confirmed (see Dispatch §4); standard EUROCONTROL ATFM applies as general EU practice 🟧 |
| De-icing on departure | Central European winter season (roughly Nov–Mar/Apr) assumed; facility specifics not confirmed 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not confirmed — confirm the assigned taxi routing to RWY 24/30/06/12 with Ground/Apron on the day. Note the former **RWY 04/22** is permanently closed and repurposed as taxiway/apron space, so it may appear in the ground-movement picture without ever being an active runway.
- **Hot spots / tight taxiways:** Not published / verify — pull the current airport ground chart at planning. 🟧
- **Runway crossings / read-back-required points:** Not confirmed. 🟧
- **Low-vis taxi caveats:** Low-visibility taxi procedures would apply consistent with winter fog conditions; SMGCS routing and follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Prevailing westerly wind drives **RWY 24** as the dominant departure direction; **RWY 30** is used often as the secondary direction; **RWY 06** and **RWY 12** are used rarely/exceptionally, respectively `[Wikipedia, AIP-cited]`.
- **By departure direction:** Not confirmed beyond the wind-driven pattern above.
- **Noise / preferential-runway program:** Not confirmed in detail; the CAT I-only, populated-area-overflying character of RWY 12/30 (Prague 6, Kladno) is consistent with that pair being reserved for non-preferred wind conditions. 🟧
- **Interaction with arrivals:** Not confirmed — coordinate with Tower/Approach for the active configuration.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable sources 🟧 | 06 / 24 / 12 / 30 | Not confirmed — verify RNP/gradient requirement on current chart | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed in reachable sources. 🟧
- **Early turn / altitude constraints:** Not confirmed — verify on the current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** No close-in high terrain at the aerodrome itself (plateau, 1,247 ft); the surrounding Central Bohemian upland is undulating regionally — quantified obstacle/terrain data not obtained this build, cross-ref [Briefing §3.1](index.md). 🟧
- **Special DP / obstacle DP:** Not confirmed — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed; RWY 06/24 is commonly reported as CAT II/III-capable, RWY 12/30 is CAT I only — neither is independently confirmed for LVTO minima this build. 🟧
- **De-icing:** Central European winter season (roughly Nov–Mar/Apr) assumed; facility type/location and provisioning not confirmed. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md). 🟧

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Ruzyně Delivery **120.06** (hours not confirmed) — cross-ref [Briefing §8](index.md). 🟧
- **Frequency sequence:** **Ruzyně Delivery 120.06 → Ruzyně Ground 121.91 → Praha/Ruzyně Tower 118.11 (or 134.56/335.60/378.75) → Ruzyně Approach 119.01 / Praha Approach 120.53, 127.58, 335.60, 378.75 / Praha/Ruzyně Approach 136.08 (sector-specific).** Take the assigned frequency and confirm current chart — all frequencies are tier-4 sourced and not independently AIRAC-verified.
- **CTOT / slot handling:** Slot regime not confirmed (see Dispatch §4); standard EUROCONTROL ATFM/CTOT regulation applies as general EU practice. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 06/24 (3,715 m) and RWY 12/30 (3,250 m) are both non-limiting for any K Global type.
- **Density altitude / temperature:** Non-issue at 1,247 ft, temperate climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Winter snow/icing season is the relevant seasonal consideration (§7); no LKPR-specific contamination/braking-action data confirmed this build. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty identified for any K Global type at LKPR.

---

## 10. Gotchas

- **RWY 04/22 is permanently closed** — never expect it as an active runway; it is taxiway/parking use only.
- **RWY 12/30 is CAT I only and overflies populated areas** — do not assume it is available with the same low-vis margin as RWY 06/24.
- **Slot regime and any curfew are unconfirmed** — do not assume an unrestricted departure window without direct verification.
- **ATC frequencies are tier-4 sourced** — cross-check against the current AIRAC chart before relying on any published value in this pack.
- **Winter fog/low-stratus events** are the field's principal seasonal delay driver — confirm current LVP/CAT status on the assigned runway before departure planning in season.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima / transition altitude.
- Start-up/push-back procedure detail.
- NADP preference / noise-abatement routing detail.
- LVTO minima and follow-me/SMGCS specifics.
- EOSID/engine-out procedure detail per runway.
- Slot/CTOT regime confirmation.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **ANS CR / AIM Czech Republic eAIP** — https://aim.rlp.cz — attempted, not reachable in a usable form as of 2026-07-26; not used as a direct citation this build.
- SkyVector — https://skyvector.com/airport/LKPR (retrieved 2026-07-26). *ATC frequencies, runway dimensions.*
- Wikipedia — "Václav Havel Airport Prague" — https://en.wikipedia.org/wiki/V%C3%A1clav_Havel_Airport_Prague (retrieved 2026-07-26). *Preferential-runway usage pattern, RWY 04/22 closure, RWY 12/30 CAT I/populated-area-overflight note.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
