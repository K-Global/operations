# FALA — Lanseria Intl · Departure Page

**FALA / HLA** · Lanseria, Gauteng (NW of Johannesburg), South Africa · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [FALA Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **07 or 25** — wind-driven |
| Config logic | Standard wind-driven single-runway selection; no preferential bias beyond wind |
| Transition altitude | 8,000 ft |
| Take-off minima | Not confirmed in reachable sources 🟧 |
| CTOT / flow regime | None found |
| De-icing on departure | **NIL** |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From the main aprons (A/B/C) via the field's compact taxiway network to the assigned runway end; confirm with Tower/Ground on the day.
- **Hot spots / tight taxiways:** 🟧 Category C-or-greater aircraft caution on Taxiway A3 opposite Apron C — a steep embankment lies 16 m north of the taxiway edge.
- **Runway crossings / read-back-required points:** Traffic positioning across the active runway only under SMC instruction, liaising with Tower.
- **Low-vis taxi caveats:** Refer to the aerodrome restricted-visibility chart (AD-03); no further SMGCS detail confirmed in reachable sources. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Straightforward single-runway wind selection between 07 and 25 — no complicating factors beyond the apron slope taxi requirement (§Briefing §3.4).
- **By departure direction:** No directional preference beyond wind and destination routing.
- **Noise / preferential-runway program:** No engine testing 1700–0300; no other NAP detail confirmed.
- **Interaction with arrivals:** Single runway — departures and arrivals share the same runway, sequenced by Tower/Approach.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not detailed by name beyond the RNAV RWY 25 approach procedure in the reachable AIP chart index 🟧 | 07, 25 | 🟥 Given the hot-and-high regime, confirm the type meets the achievable climb gradient at the day's weight/temperature | Pull the current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per ATC/procedure; 250 KIAS below FL100 — confirm current chart.
- **Noise-abatement departure procedure (NADP):** No specific NADP1/2 preference found in reachable sources. 🟧
- **Early turn / altitude constraints:** Not detailed in reachable sources — verify on current chart, particularly given the terrain caution west of the field (Briefing §3.1) and hot-and-high climb-gradient sensitivity.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** 🟥 No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. Given the hot-and-high regime and the high ground ~5.5 NM west of the field, brief the driftdown/level-off plan per [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) §4. 🟧
- **Close-in / distant obstacles:** **High ground ("Swart Koppies," ~5,338 ft) ~5.5 NM west of the field** is the field's notable terrain feature — relevant to any westbound departure or engine-out routing.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed in reachable sources. 🟧 No CAT II/III infrastructure at this field.
- **De-icing:** **NIL** — no facilities published.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Contact Lanseria Ground (SMC) 121.65 MHz for start clearance (0345–1700 hours); outside these hours, coordinate per current NOTAM/local procedure. 🟧
- **Frequency sequence:** **Ground (SMC) 121.65 → Apron 122.85 (non-ATC, traffic/hazard info) → Tower/Approach 124.0.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** None found in reachable sources.

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 🟥 2,996 m is the only runway available — combined with the hot-and-high regime (Briefing §3.5), this is materially less margin than FAOR's long parallel. Confirm the day's RTOW/climb-gradient at dispatch.
- **Density altitude / temperature:** 🟥 Shares FAOR's Highveld hot-and-high performance regime — a real planning constraint, peaking on hot summer afternoons.
- **Contamination / wet-runway:** Highveld convective-season rain (Oct–Apr) is the relevant seasonal consideration; no specific braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — treat FALA as a constrained alternate for larger K Global types given the single short-of-major-hub runway and the hot-and-high regime together.

---

## 10. Gotchas

- **Single runway, single ILS-equipped end (07)** — an active RWY 25 configuration limits the achievable approach to RNAV only, with knock-on implications for a return-to-field scenario after departure.
- **High ground ~5.5 NM west of the field** — a genuine terrain-awareness item on any westbound track, especially at night or in poor visibility.
- **Apron slope requires multi-engine aircraft to taxi with a minimum of two engines running** — brief before pushback/taxi.
- **No engine testing 1700–0300** — plan any required ground run outside this window.
- **Limited SMC (Ground) hours (0345–1700)** — confirm the after-hours start/clearance procedure before an off-hours departure.
- **Hot-air-balloon and hang/paragliding activity** in the surrounding area — a VFR/low-level traffic awareness item, particularly around sunrise/sunset.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and gradient tables per runway.
- Take-off minima exact figures.
- EOSID/engine-out procedure detail.
- After-hours clearance/start procedure given limited SMC hours.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/navaid/lighting — esp. the single ILS on RWY 07), current density-altitude/performance figures, hot-air-balloon/paragliding activity notices. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP South Africa (ATNS/SACAA), AD 2 FALA** — chart index, communications, terrain/hazard remarks — https://cad.atns.co.za/SmartAIM/EAipPackages/15-JUL-22/2022-07-15-000000/html/eAIP/FA-AD-2-FALA-en-US.html (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP South Africa (ATNS); K Global fields from live VAMSYS; 4-page pack. |
