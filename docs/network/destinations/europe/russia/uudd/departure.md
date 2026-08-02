# UUDD — Domodedovo · Departure Page

**UUDD / DME** · Domodedovo, Moscow Oblast, Russia · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [UUDD Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Static data only, built from public sources (Russian AIP verification pending 🟧 throughout). Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

> 🟥 **Network status — standby/reference only.** UUDD is not currently part of the active K Global route network and is **not present in VAMSYS**. This page is a standby/reference entry, not current tactical guidance. Current overflight/operating constraints are not tracked here.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Not published / verify — see the unresolved runway-designator/closure picture in [Briefing §7](index.md) 🟧 |
| Config logic | Not published / verify 🟧 |
| Transition altitude | Not published / verify 🟧 |
| Take-off minima | Not published / verify 🟧 |
| CTOT / flow regime | Not published / verify 🟧 |
| De-icing on departure | Historically a two-stage system reported; current provisioning not confirmed 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not published / verify. 🟧
- **Hot spots / tight taxiways:** Not published / verify — the reported runway-closure/reconstruction program ([Briefing §3.2](index.md)) is a plausible source of ground-movement complexity (construction-adjacent taxiways), but no field-specific hot-spot data was obtained. 🟧
- **Runway crossings / read-back-required points:** Not published / verify. 🟧
- **Low-vis taxi caveats:** Not published / verify — plausible given the field's severe winter/fog risk (§Briefing §14). 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Not published / verify. 🟧
- **By departure direction:** Not published / verify. 🟧
- **Noise / preferential-runway program:** Not published / verify. 🟧
- **Interaction with arrivals:** Domodedovo is reported (Wikipedia) as **Russia's first airport certified for simultaneous parallel-runway operations**; the currently reported closure of one runway ([Briefing §7](index.md)) would plausibly affect any such interleaving — not independently confirmed as current. 🟧

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 13C/31C, 13R/31L (13L/33R reported closed) | Not published 🟧 | Pull the live current-AIRAC SID list before use; confirm current runway designators and availability first |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Not confirmed — assume standard ICAO norms pending chart verification. 🟧
- **Noise-abatement departure procedure (NADP):** Not published / verify. 🟧
- **Early turn / altitude constraints:** Not published / verify. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not published / verify. 🟧
- **Close-in / distant obstacles:** Flat Moscow-region lowland — no significant close-in terrain expected, but not independently confirmed. 🟧
- **Special DP / obstacle DP:** Not published / verify. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not published / verify — a public source cites CAT IIIA approach capability at this field ([Briefing §1](index.md)), which would typically pair with a low-vis-takeoff procedure, but LVTO specifics were not obtained. 🟧
- **De-icing:** Historically a two-stage (deicing/anti-icing) system reported; current pad locations/provisioning not confirmed. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Domodedovo Delivery **123.75** (hours not confirmed) — see [Briefing §8](index.md). 🟧
- **Frequency sequence:** **Delivery 123.75 → Ground 119.0 → Apron 130.6 → Tower 118.6 → Approach/Radar 120.6 / 127.7 ("KRUG").** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8, tier-4 sourced.) 🟧
- **CTOT / slot handling:** Not published / verify. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** The reported main active runway (13R/31L, 3,500 m) is plausibly non-limiting for K Global types; the field was certified for ICAO Category F (NLA/A380) operations in 2009. **However, the runway-closure/reconstruction picture (§Briefing §7) is unresolved — re-confirm the actual current usable runway before relying on any field-length assumption.** 🟧
- **Density altitude / temperature:** Non-issue at 588 ft — no hot-and-high penalty. The relevant temperature consideration is the opposite extreme: severe winter cold and cold-soak/APU-start considerations, not density altitude.
- **Contamination / wet-runway:** Winter snow/ice contamination is the relevant seasonal consideration (§Briefing §14); a documented 2010 fog-related accident at this field underscores the seasonal weather risk (though that event was a landing accident, not a departure event). 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty identified pending resolution of the runway-availability picture.

---

## 10. Gotchas

- 🟥 **Field is not currently served and is not in VAMSYS** — this page is reference only; do not use for live tactical planning without a full current-AIRAC and current-AIP rebuild.
- 🟥 **One runway is reported closed** (§Briefing §7) — do not assume any runway's availability without a live NOTAM check.
- **Runway designators are mid-drift** between an older "14/32" and a current "13/31" numbering — treat any older chart/procedure with caution pending current-AIRAC confirmation.
- **Severe winter cold, snow/ice contamination, and fog risk** are standing seasonal factors at this hub — the field has a documented historical fog-related accident.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics.
- Take-off minima, transition altitude.
- Current runway designators and which runway(s) are actually open.
- Taxi routing and hot-spot detail.
- LVTO minima and de-icing pad specifics.
- CTOT/ATFM applicability.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting — especially current runway-closure status), CTOT/ATFM, de-icing status, current overflight/operating-restriction bulletins for Russian airspace. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/UUDD/frequencies.html , /runways.html (retrieved 2026-07-26). *Including a comment citing NOTAM A3594/25 (RWY 13L/31R repair closure).*
- Wikipedia — "Moscow Domodedovo Airport" — https://en.wikipedia.org/wiki/Moscow_Domodedovo_Airport (retrieved 2026-07-26). *Simultaneous-parallel-ops history, de-icing system, ILS CAT IIIA citation.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from public aeronautical data (AIP verification pending); K Global fields from live VAMSYS; 4-page pack. |
