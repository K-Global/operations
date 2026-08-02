# FAOR — O.R. Tambo Intl · Departure Page

**FAOR / JNB** · Kempton Park, Johannesburg, Gauteng, South Africa · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [FAOR Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **03L** (predominant departure runway, both configs) |
| Config logic | Wind-driven 03↔21; 03L/21R is the long parallel and the field's default departure runway regardless of config |
| Transition altitude | 8,000 ft |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | Not confirmed — no ATFM programme found in reachable sources 🟧 |
| De-icing on departure | **NIL** — no facilities published |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From the main apron groups, Ground/Apron routes toward RWY 03L (default departure) via Taxiway A; confirm the exact taxi with Ground/Apron on the day.
- **Hot spots / tight taxiways:** 🟥 A published hot-spot chart exists (Briefing §13); notable cautions include the **TWY B/M intersection bend** (aircraft taxiing south-bound to RWY 03L threshold — TWY B bends east approximately 450 m after TWY India while TWY M continues straight), the **CAT II/CAT I holding-point visual illusion** on TWY A/B (Briefing §4 — green centreline lights can illuminate onto the runway when stop bars are deselected), and jet-blast caution points where TWY E crosses RWY 03L/21R.
- **Runway crossings / read-back-required points:** Stop bars are installed at all runway/taxiway intersections; no crossing without explicit ATC clearance.
- **Low-vis taxi caveats:** Pilots must not exceed 10 kt on any apron during low-vis procedures; follow-me available on request below RVR 350 m.

---

## 3. Runway / SID selection logic

- **By wind / config:** RWY 03L/21R is the default departure pair in either wind configuration given its length and hot-and-high performance margin; RWY 03R/21L is used predominantly for arrivals.
- **By departure direction:** Not otherwise directionally constrained — standard SID selection per destination.
- **Noise / preferential-runway program:** No runway/taxiway-intersection takeoffs and no engine run-ups 2000–0400.
- **Interaction with arrivals:** Departures off 03L/21R run parallel to the 03R/21L arrival stream — standard dual-parallel independent operations under Johannesburg Radar.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| EGMEN, APDAK, VASUR, RAGUL, OVALA, NESAN, GRASMERE, EXOBI/EXOSI, NORVA, HEIDELBERG, LANSERIA, GEROX (RNAV) | 03L/R, 21L/R (runway-specific variants) | 🟥 Given the field's hot-and-high regime, **confirm the type meets the published SID minimum climb gradient at the day's weight/temperature** — verify on current chart | Pull the current-AIRAC SID list and gradient table before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 — confirm current chart.
- **Noise-abatement departure procedure (NADP):** No specific NADP1/2 preference found in reachable sources. 🟧
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart, particularly given hot-and-high climb-gradient sensitivity.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** 🟥 No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. Given the hot-and-high regime, the **all-engines SID climb gradient is not guaranteed OEI** — brief the driftdown/level-off plan per [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) §4. 🟧
- **Close-in / distant obstacles:** Open Highveld plateau — no significant close-in terrain. The notable obstacle items are the **iron/steel works ~5 NM SE** (hot ignited-gas releases causing turbulence to 500 ft AGL) and the **building obstruction penetrating the Code F safety zone adjacent to TWY A** (Briefing §4).
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed this pass; CAT II ILS infrastructure exists on all four runway ends but LVTO-specific RVR minima not sourced. 🟧
- **De-icing:** **NIL** — no facilities published; frost is a possible dry-winter-morning consideration only, not a routine seasonal requirement.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** 121.7/121.9 MHz, Mon–Fri 0400–1830, Sat/Sun 0500–1830; outside hours via Ground on 121.9.
- **Frequency sequence:** **Clearance Delivery 121.7/121.9 → Apron 122.65 (non-ATC, parking/hazard) → Ground (SMC) 121.9 → Tower West 118.1 or Tower East 118.6 → Johannesburg Radar West/South/East 123.7/124.5/124.5, Director 121.4 (peak hours).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** Not confirmed — no ATFM programme found in reachable sources for FAOR specifically. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 🟥 RWY 03L (4,421 m) is ample in absolute length, but **hot-and-high density altitude routinely makes the limit thrust/climb-gradient rather than field length** — see [Briefing §3.5](index.md) and [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md).
- **Density altitude / temperature:** 🟥 The field's defining performance consideration year-round, peaking on hot Highveld summer afternoons. Compute the day's RTOW/climb-gradient at dispatch — do not assume standard-day performance.
- **Contamination / wet-runway:** Convective-season heavy rain (Oct–Apr) is the main wet-runway consideration; no specific braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) (Table D, hot-and-high sensitivity) for the per-type tendency at this field.

---

## 10. Gotchas

- **RWY 03L is virtually never a landing runway** — the AIP explicitly cautions against requesting it for landing; expect it for departures only.
- **CAT II holding-point visual illusion on TWY A/B** — green centreline lights can illuminate onto the runway when stop bars are deselected, giving a false impression of clearance; verify the actual ATC clearance received.
- **Hot-and-high performance is not a "long runway, no problem" field** — always compute the day's density-altitude-driven RTOW/gradient; a hot afternoon can force a real weight/fuel trade.
- **TWY B/M intersection bend** south-bound to RWY 03L threshold — the taxiway geometry deviates; follow the correct line.
- **Rotating nightly runway-pair maintenance closures** (03L/21R and 03R/21L on different weeknights, 2230–0300) — check current NOTAM before a late-night departure.
- **Iron/steel works ~5 NM SE** can release hot ignited gas causing turbulence to 500 ft AGL at unspecified times — a genuine low-level turbulence caution on departures routed that side.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names, runway-specific variants and gradient tables.
- Take-off minima exact figures.
- NADP preference (if any).
- EOSID/engine-out procedure detail per runway.
- ATFM/CTOT applicability for FAOR.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, rotating maintenance closures), CTOT/ATFM (if applicable), current density-altitude/performance figures. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP South Africa (ATNS/SACAA), AD 2 FAOR** — SID/chart index, communications, taxiway hot-spot remarks — https://cad.atns.co.za/SmartAIM/EAipPackages/15-OCT-22/2022-10-15-000000/html/eAIP/FA-AD-2-FAOR-en-US.html (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP South Africa (ATNS); K Global fields from live VAMSYS; 4-page pack. |
