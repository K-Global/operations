# LCLK — Larnaca International · Departure Page

**LCLK / LCA** · Larnaca, Cyprus · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LCLK Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **04 or 22** — single-runway field; wind-dependent selection, exact criteria not sourced 🟧 |
| Config logic | Wind-driven; no published preferential-runway rule confirmed |
| Transition altitude | Not published / verify 🟧 |
| Take-off minima | Not published / verify 🟧 |
| CTOT / flow regime | Not published / verify 🟧 |
| De-icing on departure | Not normally expected (Mediterranean climate); treated as NIL — not independently confirmed 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not published / verify — single-runway field with a comparatively simple taxiway layout expected, but no routing detail is sourced. 🟧
- **Hot spots / tight taxiways:** Not published / verify. 🟧
- **Runway crossings / read-back-required points:** Not published / verify — a single-runway field has no cross-runway sequencing by definition, but named hot spots/junctions are not confirmed.
- **Low-vis taxi caveats:** Not published / verify; low-visibility events are not expected to be a defining feature of this coastal Mediterranean field, but no SMGCS/low-vis routing detail is confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Single runway 04/22 — selection is wind-driven between the two directions; the airport's own preferential-runway criteria are not published. 🟧
- **By departure direction:** Not published / verify. 🟧
- **Noise / preferential-runway program:** Not published / verify. 🟧
- **Interaction with arrivals:** Single-runway field — departures and arrivals share the one runway by definition; no dependent-configuration issue exists (there is only one runway), but sequencing detail (departure release relative to inbound traffic) is not confirmed.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not published / verify 🟧 | 04 / 22 | Not confirmed — verify RNP/gradient requirement on the current chart | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (ICAO/EU norm) assumed — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not published / verify. 🟧
- **Early turn / altitude constraints:** Not published / verify — pull the current-AIRAC SID for any early-turn/altitude constraint. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not published / verify. 🟧
- **Close-in / distant obstacles:** No close-in high terrain (Briefing §3.1) — the field is a flat coastal site. No specific obstacle data confirmed. 🟧
- **Special DP / obstacle DP:** Not published / verify. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not published / verify; low-visibility events are not expected to be a defining hazard here, but no minima/procedure are confirmed. 🟧
- **De-icing:** Not normally expected — Mediterranean coastal climate (Briefing §14); treated as **NIL for planning purposes**, though this is a climate-based inference, not a sourced AIP statement. 🟧

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not published / verify — no Delivery frequency confirmed. 🟧
- **Frequency sequence:** **Delivery (not published/verify) → Ground (not published/verify) → Tower 119.4 → Approach 121.2 → Nicosia ACC (LCCC, frequency not published/verify).** Take the assigned frequency and confirm current chart. (Tower/Approach frequencies per Briefing §8, sourced to a single tier-4 listing.) 🟧
- **CTOT / slot handling:** Not published / verify. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Single runway, ~2,994 m (RWY 04 full length; RWY 22 effectively ≈2,819 m given the 175 m displaced threshold, Briefing §7) — non-limiting for a typical Category M departure in normal conditions; a genuine watch-item for any heavier/longer-range type at high weight, especially combined with summer heat (below).
- **Density altitude / temperature:** Sea-level field (8 ft), so density altitude is a **summer-heat-driven** issue rather than an elevation one — Cyprus summers routinely reach the low-to-mid 30s °C and can exceed 40 °C, eroding takeoff performance margin on the single ~2,994 m runway. See Briefing §14.
- **Contamination / wet-runway:** Not expected to be a significant seasonal factor at this Mediterranean coastal field; no specific contamination/braking-action data confirmed. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — the ~2,994 m runway/summer-heat combination is the one performance watch-item at LCLK; not limiting for a typical Category M operation in normal conditions.

---

## 10. Gotchas

- **Single runway (04/22) — no redundancy and no crosswind-relief alternative.** Any obstruction closes the field outright.
- **RWY 22's threshold is displaced 175 m (575 ft)** — never plan a full-length departure roll on that direction if it is ever relevant to a rejected-takeoff distance assumption; confirm which direction is in use.
- **Summer heat is the real performance driver here, not elevation** — the field is sea-level, but high OAT on the ~2,994 m runway is the actual margin-eroding factor for heavier types.
- **Coastal sea-breeze wind shifts** are possible through the day — watch the ATIS wind trend for a runway-direction change.
- **No SID/take-off-minima/CTOT data is confirmed in this pack** — treat §4/§8 as pull-at-planning items, not settled reference.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names, RNP/gradient specifics, and any early-turn/altitude constraint per runway.
- Take-off minima and transition altitude.
- Clearance/Delivery and Ground frequencies (not published / verify).
- CTOT/slot handling regime.
- NADP preference/noise-abatement departure routing.
- LVTO minima and any low-vis taxi/SMGCS procedure.
- Engine-out/emergency-turn procedure detail.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting — single-runway field, any closure is airport-closing), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **DCA Cyprus / national eAIP** — primary source of record for AD 2 LCLK; **not available from a reachable public source** — see the [LCLK Briefing](index.md) Sources section and §18 for detail.
- OurAirports — https://ourairports.com/airports/LCLK/runways.html , /frequencies.html (retrieved 2026-07-25). *Runway/displaced-threshold and Tower/Approach frequency cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
