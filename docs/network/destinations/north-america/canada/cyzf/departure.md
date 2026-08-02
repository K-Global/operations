# CYZF — Yellowknife · Departure Page

**CYZF / YZF** · Yellowknife, Northwest Territories, Canada · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for X-Plane 11, not a chart. Companion to the [CYZF Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. CYZF is the primary western-Arctic **ETOPS/EDTO enroute alternate** — any departure from here follows an unscheduled diversion, not a planned commercial service. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **16/34** (7,503 ft) preferred — RWY 34 carries the ILS/SSALR; wind otherwise governs; **10/28** (5,001 ft) secondary, doubles as taxiway during RVOP |
| Config logic | Not published / verify — wind-driven; no crosswind-alternative data confirmed 🟧 |
| Transition altitude | **18,000 ft** (Canada-wide Standard Pressure Region boundary) — see [Briefing §10](index.md) |
| Take-off minima | Not published / verify 🟧 |
| CTOT / flow regime | None — non-slot-controlled field |
| De-icing on departure | Available — Strategic Aviation; treat as a near-year-round requirement (Briefing §14) |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Taxiways A–K; **D, E, F, G, K are uncontrolled** (Briefing §13). Access to RWY 16/34 restricted to Twy A, H or G during RVOP.
- **Hot spots / tight taxiways:** None specifically identified in the reachable CFS extract. 🟧
- **Runway crossings / read-back-required points:** Not published / verify. 🟧
- **Low-vis taxi caveats:** 🟥 During **Reduced Visibility Operations (RVOP)**, RWY 10/28 is used as a taxiway west of RWY 16/34, aircraft towing requires ATC/FSS clearance, and access to RWY 16/34 is restricted to Twy A, H or G — brief this explicitly before any low-vis departure (Briefing §3.4).

---

## 3. Runway / SID selection logic

- **By wind / config:** Not published / verify — RWY 34 has the stronger approach aid (ILS + SSALR) but runway-in-use logic for departure is not confirmed. 🟧
- **By departure direction:** Not published / verify. 🟧
- **Noise / preferential-runway program:** No NAP identified in reachable sources (Briefing §12). 🟧
- **Interaction with arrivals:** Outside Tower/Ground hours (14–05Z), the field reverts to **Mandatory Frequency (MF) procedures** — expect procedural, non-radar sequencing with arrivals sharing the same MF environment (Briefing §3.2).

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not published / verify 🟧 | 16/34, 10/28 | Not confirmed — no hot-and-high driver at 675 ft; extreme cold is the governing factor instead | Confirm on current AIRAC whether any named SID exists or departures are runway-heading/direct-to-fix (Briefing §11). |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** 250 KIAS below 10,000 ft ASL (Canadian standard); initial climb procedure not otherwise confirmed. 🟧
- **Noise-abatement departure procedure (NADP):** Not identified — remote, low-traffic field with no published NAP (Briefing §12). 🟧
- **Early turn / altitude constraints:** Not published / verify. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not published / verify. 🟧
- **Close-in / distant obstacles:** 🟥 A **lit rock outcrop obstacle, ~696 ft ASL, 3,445 ft north of THR 34, 410 ft left of centreline** sits under the RWY 34 approach/missed-approach path (Briefing §3.1) — relevant primarily to arrivals/missed approach, but brief its presence for any RWY 34 departure emergency-turn planning too. Terrain otherwise benign — Canadian Shield, low relief.
- **Special DP / obstacle DP:** Not published / verify. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not published / verify. 🟧
- **De-icing:** Available — Strategic Aviation (867-766-2090 / 867-446-0600); treat as a near-year-round requirement given the sub-Arctic climate. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not separately published — likely combined with Ground/Tower (Briefing §8). 🟧
- **Frequency sequence:** **Ground 121.9 (14–05Z) → Tower 118.5/340.8 emergency (14–05Z) → en route via Edmonton Centre 135.8 (PAL, H24).** Outside Tower/Ground hours, use **Yellowknife Radio (MF) 118.5** (05–14Z, 5 NM/≤3,700 ft ASL). (Frequencies per [Briefing §8](index.md).)
- **CTOT / slot handling:** No slot regime. IFR clearance via **Edmonton ACC 888-358-7526 / FIC 866-WXBRIEF** where not available locally (Briefing §11).

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 34 (7,503 ft / 2,287 m) is length-adequate at this sea-level-equivalent elevation for most weights, but declared distances (TORA/TODA/ASDA) remain CFS-gated/unconfirmed (Briefing §7) — check against [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) before relying on it for a widebody departure.
- **Density altitude / temperature:** Non-issue at 675 ft — **extreme cold**, not density altitude, is the governing performance driver (Briefing §3.5).
- **Contamination / wet-runway:** Near-year-round icing/snow season; Runway Condition Reporting (CRFI) and winter maintenance only guaranteed 1100–0754Z, Oct 15–Apr 15, with O/T 2-hr PN outside that window (Briefing §3.3) — confirm current NOTAM before any winter departure.
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) and [`OM E — ETOPS-EDTO Procedures`](../../../../../flight-ops/etops-edto.md) for the fleet/policy context behind treating CYZF as an ETOPS/EDTO exit alternate.

---

## 10. Gotchas

- **BAK-12 arresting cable across RWY 16/34** — normally recessed, but a NOTAM is issued when raised for military use; check before any departure near that end (Briefing §3.3).
- **Drainage ditches parallel RWY 16/34** (310 ft W / 260 ft E of centreline) — excursion-catch hazard if off the paved surface.
- **RVOP restricts RWY 16/34 access to Twy A, H or G**, and RWY 10/28 becomes a taxiway — brief before any low-vis departure.
- **MF procedures outside 14–05Z** — no local ATC; expect procedural, non-radar handling.
- **Extensive migratory bird activity Apr–Oct.**
- **Extreme cold cold-soak fuel/engine-start limits** — brief cold-weather procedures for any departure outside the short summer.
- **CFS data is from the 21 MAR 2024 AIRAC cycle** — re-verify frequencies/procedures against current AIRAC.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- SID names, take-off minima, climb-gradient/RNP departure requirements — not published in any reachable source.
- Preferential-runway logic and delivery frequency.
- Push-back procedure for code C/D aircraft.
- Current status of CYZF on Nav Canada's cold-temperature restricted-altitude list.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (BAK-12 cable status, RWY 10/28 rough-pavement, RVOP activation, bird-activity, GPS/RAIM), space-weather (HF/GNSS) advisories, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **Canada Flight Supplement (Nav Canada), AIRAC cycle effective 21 MAR 2024** — https://imageserver.fltplan.com/afd/Canada/21MAR2024/CYZF-2574.PDF (retrieved 2026-07-25). See [CYZF Briefing](index.md) §Sources for the full source list.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from NAV CANADA + Briefing; folded to 4-page pack. |
