# OJAQ — King Hussein Intl · Departure Page

**OJAQ / AQJ** · Aqaba, Jordan · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [OJAQ Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **RWY 01** reported preferred when winds are calm 🟧 (network-sim cross-check, not an AIP-published rule) |
| Config logic | Wind-dependent; **single runway, no crosswind alternative** — the assigned direction is whichever the wind favours on the day |
| Transition altitude | **13,000 ft AMSL** `[CARC AIP AD 2 OJAQ 2.17]` |
| Take-off minima | Published per AIP chart set; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | None identified — treat as uncoordinated pending confirmation 🟧 |
| De-icing on departure | **Nil** — not provisioned; not required by climate |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Taxiways A–D and M connect the passenger/cargo aprons to the runway; confirm the exact routing with Tower/Ground on the day given the field's small scale and single-runway layout. 🟧
- **Hot spots / tight taxiways:** None specifically flagged in the reachable AIP; confirm current NOTAM/chart picture before taxi.
- **Runway crossings / read-back-required points:** Not applicable at this scale — single-runway field with a straightforward taxiway network.
- **Low-vis taxi caveats:** Not confirmed in reachable sources; this is not a CAT II/III field, so low-vis taxi procedures are unlikely to be a routine consideration. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** No AIP-published preferential-runway rule was found; **RWY 01** is reported preferred in calm-wind conditions per a network-sim cross-check only. 🟧 With **no crosswind-runway alternative**, the assigned direction on any given day is simply whichever the wind favours — brief for the possibility of a full crosswind-limit event with no orientation workaround.
- **By departure direction:** Reported initial-climb altitudes by direction (network-sim cross-check, not AIP-sourced): northbound 8,000 ft, southbound 12,000 ft, westbound 8,000 ft. 🟧 Verify against the current AIRAC SID chart before use.
- **Noise / preferential-runway program:** **NIL** — no noise abatement procedure published (AIP AD 2.21).
- **Interaction with arrivals:** Single-runway field — departures and arrivals share the one runway/direction in use; sequencing is a straightforward single-stream operation given the field's low traffic volume (~3,000 movements/year).

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| LOXUS, LONOL, TAMIM, METSA 🟧 | 01 | Current-AIRAC chart titles (2025) suggest RNP/RNAV procedures exist for RWY 01; gradient/equipage not confirmed this pass | Fix names sourced to VATSIM Jordan vACC cross-check, not the primary AIP text — pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (ICAO norm) — confirm current chart. Reported planning-level initial climb altitudes by direction are in §3 above (network-sim sourced, not AIP-confirmed). 🟧
- **Noise-abatement departure procedure (NADP):** **NIL** — no NADP/noise abatement procedure published.
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway direction. 🟧
- **Close-in / distant obstacles:** AIP obstacle table (AD 2.10) lists poles around 78 m AGL near the RWY 01 threshold and a flag mast at 142 m elevation ~8.5 km out; the AIP remarks that natural terrain obstructions penetrate only ~2.5% of the approach/take-off surface — a benign obstacle environment overall.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** No CAT II/III infrastructure at this field; LVTO minima (if any) not confirmed this pass. 🟧
- **De-icing:** **Nil** `[CARC AIP AD 2 OJAQ 2.3/2.4]` — not provisioned; not required by this warm-climate coastal field.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** No dedicated Delivery frequency confirmed separate from Tower in the reachable AIP — confirm current chart. 🟧
- **Frequency sequence:** **King Hussein SMC 121.9 (ground) → King Hussein Tower 118.1 (0400–1800; combined onto Approach frequency 1800–0400 per the 2011/2012 AIP cycle 🟧) → Aqaba Approach 119.2 (2011/2012 AIP) / 132.425 (VATSIM cross-check, discrepancy — verify current) → Amman Control (OJAC) 128.500 🟧.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** No slot-coordination or CTOT regime identified for OJAQ in reachable sources. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Single runway, **3,000 m** — non-limiting for narrowbody types; a genuine consideration for widebody weight/performance planning. See [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md).
- **Density altitude / temperature:** Sea-level field (175 ft) but with **extreme summer heat** (AIP reference temperature 40.1°C) — a real density-altitude penalty on a hot-day max-weight departure despite the low elevation. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-specific figures.
- **Contamination / wet-runway:** Arid coastal-desert climate; contamination is not a routine consideration. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — confirm field-length/weight performance for any widebody type against the single 3,000 m runway.

---

## 10. Gotchas

- **Single runway, no crosswind alternative** — a strong crosswind event on the active direction has no runway-orientation workaround; this is the field's defining departure planning constraint.
- **RWY 19 has no ILS** — relevant if ever considering a same-runway approach/departure discussion; RWY 01 is the field's only precision-approach end.
- **Not currently VAMSYS-categorised** — confirm the operator category assumption before planning a rotation here.
- **Approach/Tower frequency discrepancy** — 119.2/118.1 MHz per the 2011/2012 AIP vs 132.425 MHz per the VATSIM cross-check; verify current AIRAC before relying on either.
- **Reduced/combined ATC position overnight** per the 2011/2012 AIP cycle (Tower control 0400–1800, combined onto Approach frequency outside those hours) — verify current hours structure.
- **Extreme summer heat** (ref. temp 40.1°C) despite sea-level elevation — brief for density-altitude performance on a hot-day departure.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics for RWY 01.
- Take-off minima / exact figures.
- Clearance-delivery frequency (not separately confirmed from Tower).
- Slot/CTOT regime confirmation.
- EOSID/engine-out procedure detail.
- Approach/Tower frequency and hours-structure discrepancy (§8).

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/navaid/lighting — no alternate runway exists at this field), CTOT/ATFM, current regional conflict-zone/GNSS-interference advisories. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **Jordan CARC AIP, AD 2 OJAQ** (base cycle AMDT 46/2007, amended through AMDT 66/2012) — runway/declared distances, obstacle data, communications, chart index — https://carc.gov.jo/pdf/AD2_OJAQ.pdf and https://khiaops.com/aac/attachments/article/121/052812AD2%20OJAQ.pdf (retrieved 2026-07-26).
- VATSIM Jordan vACC — "Pilot Briefing: Aqaba King Hussein Airport [OJAQ]" (2024) — https://jordan.vatsim.me/wp-content/uploads/2024/02/jovacc-ojaq-briefing-2024.pdf (retrieved 2026-07-26). *Network-sim document — SID fix names/initial-climb/frequency cross-check only.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
