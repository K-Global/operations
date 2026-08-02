# LIMC — Malpensa · Departure Page

**LIMC / MXP** · Ferno / Somma Lombardo, Varese, Lombardy, Italy · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LIMC Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **17R/35L or 17L/35R** depending on wind/noise/time-of-day config; overnight (2330–0630 LT) reported preferential **17R** |
| Config logic | Independent/segregated parallel operation; 35L/35R pair alternates roles on a published day/time noise-sharing schedule; wind and a 10 kt max-tailwind rule also drive ATC's runway choice |
| Transition altitude | 6,000 ft MSL (network-sim cross-check) — verify current chart 🟧 |
| Take-off minima | Published per AIP/chart index; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | Slot-coordination level not confirmed; EUROCONTROL ATFM/CTOT expected in peak/adverse conditions as standard Milano-area practice 🟧 |
| De-icing on departure | Confirmed at Cargo City; main passenger-apron pad location/procedure not confirmed — season typ. Nov–Mar 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From Terminal 1 (Concourse A/B/C), Ground/Apron routes toward the assigned departure runway per the active config; dedicated **"Taxi Routes RWY 35L/R"** and **"Low-Vis Taxi Routes"** charts are indexed for the current AIRAC — confirm the exact taxi with Ground/Apron on the day.
- **Hot spots / tight taxiways:** 🟥 Not individually named in reachable public sources. The existence of a dedicated **Code-F taxi-restriction chart** signals recognised complexity for large wide-body ground movement — see [Briefing §13](index.md); confirm current hot-spot identifiers and any Code F routing restriction on the current chart before a large wide-body taxi.
- **Runway crossings / read-back-required points:** Not confirmed in reachable sources — expect explicit crossing/hold-short instructions given the field's independent-parallel-runway geometry. 🟧
- **Low-vis taxi caveats:** A dedicated low-vis taxi-routing chart exists per the current AIRAC index, consistent with the field's CAT II/III winter-fog environment; follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** ATC assigns the active runway/config per wind, with a reported maximum-tailwind rule (up to 10 kt) governing runway choice; a pilot who believes the assigned runway is unsuitable may request another, subject to delay.
- **By departure direction:** The two independent parallels (17R/35L and 17L/35R) are typically assigned **distinct roles** (one for arrivals, one for departures) rather than mixed continuous use of either — see [Briefing §3.2/§10](index.md). When the 35L/35R pair is in active use, take-offs from the 17R/17L direction are still permitted but **subject to ATC delay**.
- **Noise / preferential-runway program:** The **35L/35R pair alternates departure/arrival roles on a published rotating day/time-of-day schedule** intended to share overflight noise between communities on either side of the runway pair — confirm current ATIS config rather than assuming a fixed role; a late schedule slip can cross an alternation boundary.
- **Interaction with arrivals:** Departures interact with the continuous arrival stream on the parallel runway assigned the arrival role for the active config, and with the field's sectorised Milano Radar traffic generally — see [Briefing §3.2](index.md).

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| FARAK, IBCUC, IRKED, NELAB, DOGUB, MMP, SRN, TELVA (RNAV, multiple suffix/runway variants) | 17L / 35L / 35R | RNAV/RNP-1-style departures reported per runway — verify RNP/gradient equipage on current chart 🟧 | Pull the live current-AIRAC SID list before use; non-RNAV/omnidirectional departure charts also exist for RWY 35L/35R |
| RWY 17L/17R RNAV departures (temporary-effective procedures also indexed) | 17L / 17R | Verify current status/gradient on chart 🟧 | Confirm whether "TEMP" chart variants are still in effect at planning |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** No single mandated fleet-wide NADP confirmed this pass; the field's principal noise-management tool is the runway/config alternation scheme (§3) rather than a published NADP variant — verify locally. 🟧
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat Po/Ticino valley floor — no significant close-in terrain. The Alps' foothills lie roughly 20–25 NM N/NW, relevant to some higher-altitude western SID transitions rather than the immediate departure path.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** LVP applies consistent with the field's Po Valley winter-fog risk; reported LVP runway assignment is **RWY 35R for departures / RWY 35L for arrivals** (segregated mode) — specific LVTO RVR minima not confirmed this pass. 🟧
- **De-icing:** Confirmed **on-stand equipment at Malpensa Cargo City**; main passenger-apron de-icing pad location(s)/procedure not confirmed in reachable sources. Season typically **Nov–Mar**. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md) and [`OM E — Low Visibility Operations`](../../../../../flight-ops/low-visibility-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Malpensa Delivery **120.900** (H24, assumed).
- **Frequency sequence:** **Delivery 120.900 → Ground West 121.900 / Ground North 121.825 → Tower 128.350 (main) / East Tower 123.600 → Milano Radar (sectorised) 126.750 / 134.175 / 125.630.** Take the assigned frequency and confirm current chart — an older (c. 2011) source instead assigns Tower 119.000 to RWY 17L/35R and 128.350 to RWY 17R/35L; treat as superseded pending AIRAC confirmation. (Frequencies from Briefing §8.) 🟧
- **CTOT / slot handling:** Slot-coordination level not confirmed for LIMC; EUROCONTROL ATFM/CTOT regulation expected in peak/adverse conditions as standard Milano-area practice. Comply with any assigned CTOT/EDCT-equivalent. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Both 3,920 m runway pairs are non-limiting for any K Global type; the displaced-threshold LDA figures (17L 2,977 m, 35L 3,515 m) affect landing distance, not take-off — take-off distances (TORA/TODA/ASDA) are full-length on both pairs except where an intersection departure is used.
- **Density altitude / temperature:** Non-issue at 768 ft, temperate Po Valley climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Winter Po Valley fog/de-icing season is the relevant seasonal consideration (§7); no specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty expected for any K Global type at LIMC; confirm current Code F stand/taxiway suitability given the reference-code ambiguity noted in the Briefing.

---

## 10. Gotchas

- **The independent parallel runways are typically role-segregated** (one for arrivals, one for departures) rather than mixed-use — do not assume either runway is available for both roles simultaneously.
- **The 35L/35R pair alternates roles on a published day/time-of-day schedule** — check current ATIS config before assuming a fixed departure runway, especially on a schedule that runs late.
- **Overnight (2330–0630 LT) reported reduced-capacity single-runway regime** — a late-day departure delay risks running into this window; confirm current status and build buffer.
- **Departures off the 17-direction when the 35-config is active are permitted but subject to ATC delay** — do not expect priority handling.
- **RWY 17R has no ILS** — irrelevant for take-off itself, but a factor if a same-runway return/approach contingency is briefed.
- **Reference-code/Code F ambiguity** — confirm current stand/taxiway suitability before a large wide-body first-time rotation; see Briefing §13.
- **De-icing pad location for the passenger apron is unconfirmed** — do not assume Cargo City's equipment serves passenger-terminal departures.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway, and whether "TEMP" SID variants remain in effect.
- Take-off minima / DVA exact figures.
- Start-up/push-back procedure detail (cross-bleed/APU notification).
- NADP preference (if any) — not confirmed as mandated.
- LVTO RVR minima and follow-me/SMGCS specifics.
- EOSID/engine-out procedure detail per runway.
- Passenger-apron de-icing pad location(s) and procedure.
- Current ATC frequency set — network-sim cross-check partially disagrees with an older (2011) spotter-guide source on tower frequency assignment.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- SEA S.p.A. ("Milan Airports") — "Technical data" — https://milanairports.com/en/group/technical-data (retrieved 2026-07-26). *Preferential-runway/tailwind rule, declared distances.*
- IVAO Italy Division — QuickOverview LIMC — https://quickoverview.ivao.it/aerodrome/show/LIMC (retrieved 2026-07-26). *Runway-role/config logic, LVP runway assignment, TA, ATC frequency sequence. Network-sim document, not regulatory.*
- Navigraph — LIMC Airport Charts index — https://navigraph.com/airport/LIMC/Milan-Malpensa (retrieved 2026-07-26). *SID names, Code-F taxi-restriction and low-vis taxi-routing chart names (names only).*
- scramble.nl — "Milano - Malpensa" airfield guide — https://www.scramble.nl/planning/airfield-guide/italy/milano-malpensa (retrieved 2026-07-26; content dated "last validated May 2011"). *Historical tower-frequency cross-check — superseded where conflicting.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Italia (ENAV); K Global fields from live VAMSYS; 4-page pack. |
