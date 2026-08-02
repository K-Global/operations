# LEAL — Alicante-Elche Miguel Hernández · Departure Page

**LEAL / ALC** · Alicante, Valencian Community, Spain · Europe
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — AIP España (ENAIRE)-derived

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LEAL Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **RWY10** with onshore/easterly wind component; **RWY28** with offshore/westerly component |
| Config logic | Wind-driven — single runway used in either direction depending on wind |
| Transition altitude | Not confirmed this pass 🟧 |
| Take-off minima | Not confirmed this pass 🟧 |
| CTOT / flow regime | Not confirmed — no standing slot-coordination identified 🟧 |
| De-icing on departure | Not typically required; NIL/rare assumption, not confirmed 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From the terminal stands, Ground/Tower (Alicante TWR combines both functions) routes traffic to RWY10 or RWY28 depending on the active configuration; confirm exact taxi with ATC on the day.
- **Hot spots / tight taxiways:** 🟧 **A346, A35K and B77W restricted to TWY C8 only** — a real routing constraint for these types. No formally charted hot-spot list was located in reachable sources. Nose-in stand orientation flips with the active runway (West-facing under RWY10, East-facing under RWY28).
- **Runway crossings / read-back-required points:** Not itemised in reachable sources — expect standard read-back discipline at any taxiway/runway intersection.
- **Low-vis taxi caveats:** Not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** **RWY10** used with onshore/easterly wind (also the field's only ILS runway); **RWY28** used with offshore/westerly wind (VOR-only arrivals, but standard departure runway in that config).
- **By departure direction:** Not otherwise differentiated — single runway, bidirectional use driven by wind.
- **Noise / preferential-runway program:** Not confirmed in reachable sources. 🟧
- **Interaction with arrivals:** Single-runway field — departures and arrivals share the active runway; standard sequencing applies, no parallel/crossing-runway interaction.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 10 / 28 | Not confirmed 🟧 | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed in reachable sources. 🟧
- **Early turn / altitude constraints:** Not confirmed — verify current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Low-to-moderate terrain inland/west of the field — not a significant close-in obstacle factor for either runway direction based on reachable sources.
- **Special DP / obstacle DP:** Not confirmed — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed this pass. 🟧 Note the field has no CAT II/III infrastructure (Briefing §10) — low-vis departure planning should account for the RWY28 no-ILS limitation on the return/diversion side of the leg.
- **De-icing:** Not typically required; NIL/rare assumption for this mild Mediterranean-coastal field, not independently confirmed. 🟧

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Alicante TWR **119.855** (marked "CLR" in AIP) — H24.
- **Frequency sequence:** **Delivery/Clearance 119.855 → (Ground — no separate frequency published; combined with TWR) → Alicante TWR 118.155 (H24) → Valencia Control (Approach) 118.800 / 119.075.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** Not confirmed — no standing slot-coordination identified for LEAL; comply with any assigned CTOT/EDCT-equivalent if issued. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 3,000 m is non-limiting for any K Global narrowbody or widebody type.
- **Density altitude / temperature:** Non-issue at 142 ft, Mediterranean coastal climate — no hot-and-high penalty.
- **Contamination / wet-runway:** No specific contamination/braking-action data confirmed this pass; mild climate makes this a low-frequency consideration. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty for any K Global type at LEAL.

---

## 10. Gotchas

- **RWY28 has no ILS/LOC** — if departing RWY28 (offshore/westerly wind config), remember the reciprocal RWY10 is the field's only precision-approach runway, relevant if an immediate return is needed.
- **A346, A35K and B77W are restricted to TWY C8 only** — confirm routing before pushback for these types.
- **Code F operations require prior coordination** — do not expect ad-hoc acceptance of a second Code F aircraft simultaneously.
- **Levante (easterly) wind** can bring gusty crosswind conditions with limited notice — monitor ATIS wind trend closely before committing to a runway direction.
- **No separate published Ground frequency** — Alicante TWR combines tower/ground functions; expect a single frequency for taxi and take-off clearance.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Transition altitude and take-off minima exact figures.
- NADP preference and noise-abatement procedure detail.
- EOSID/engine-out procedure detail per runway.
- Slot-coordination level and CTOT/ATFM specifics for LEAL.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. the single ILS on RWY10), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP España (ENAIRE), AD 2-LEAL**, current AIRAC — https://aip.enaire.es/AIP/contenido_AIP/AD/AD2/LEAL/LE_AD_2_LEAL_en.html (retrieved 2026-07-26). *Runway/taxiway data, communications, local stand/taxi regulations.*
- PPRuNe forum thread on LEAL RWY10/28 approach selection — https://www.pprune.org/archive/index.php/t-339152.html (retrieved 2026-07-26). *Tier-4 operational corroboration only.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Built from AIP España (ENAIRE); K Global fields from live VAMSYS; 4-page pack. |
