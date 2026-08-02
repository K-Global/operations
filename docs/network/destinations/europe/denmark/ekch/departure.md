# EKCH — Copenhagen/Kastrup · Departure Page

**EKCH / CPH** · Copenhagen (Kastrup), Denmark · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Denmark (Naviair)-derived

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [EKCH Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **04L/22R or 04R/22L** (preferential parallels, wind-dependent); **12/30** only when preferential-runway crosswind exceeds 15 kt or preferential runways otherwise unavailable |
| Config logic | Preferential-runway system mandates 04L/22R and 04R/22L "to the greatest extent possible" for jets/heavy props; 12/30 is the crosswind exception, not a routine alternate |
| Transition altitude | 5,000 ft MSL — verify no local override on current chart 🟧 |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | Coordinated (ACD); A-CDM/ANI-Airport DPI feed to EUROCONTROL Network Manager 🟧 |
| De-icing on departure | Available — three dedicated pads (TWY A/B/V), season inferred Oct–Apr |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From the Terminal 2/3 concourse or CPH Go (Pier F), Ground/Apron routes toward the assigned departure runway (04L/22R or 04R/22L main pairs, or 12/30 for a crosswind-triggered departure); confirm the exact taxi with Apron/Ground on the day.
- **Hot spots / tight taxiways:** 🟧 No text-labelled "Hot Spot" entries were found in the reachable AIP extract — likely a graphical Aerodrome Chart feature. The clearest identified ground-complexity point is the **RWY 12/30 crossing**, which Tower must explicitly clear for any taxi flow moving between the eastern and western parts of the aerodrome, regardless of whether 12/30 is active for takeoff/landing.
- **Runway crossings / read-back-required points:** Expect explicit crossing instructions at RWY 12/30 for any departure routed to or crossing it.
- **Low-vis taxi caveats:** SMGCS/low-vis taxi routing would be expected consistent with the field's CAT II/III capability; follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Preferential-runway system: 04L/22R and 04R/22L used "to the greatest extent possible" for jets and props ≥11,000 kg MTOM; the reciprocal direction within each pair is selected by wind.
- **By departure direction:** RWY 12/30 is reserved for crosswind conditions exceeding **15 kt** on the preferential parallels, or when the preferential runways are otherwise unavailable (friction/RWYCC below 5, weather below minima, disabled aircraft, runway works) — not a routine directional alternate.
- **Noise / preferential-runway program:** RWY 22L/22R/30 departures follow fixed-track-then-turn noise routings — e.g., RWY 22L departures fly runway track to a fix ~2.0 DME KAS before turning; RWY 22R and RWY 30 departures follow analogous fixed-track segments before their initial turn. Departures crossing published noise-sector boundaries are subject to investigation.
- **Interaction with arrivals:** Departures off the preferential parallels interact with the continuous arrival stream on the reciprocal/adjacent parallel; RWY 12/30 departures interact with the crossing traffic pattern described in §2.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed to exact current-AIRAC designator suffix 🟧 | 04L/22R, 04R/22L, 12/30 | RNP departure procedures published alongside conventional SIDs — verify RNP/gradient equipage per SID on the current chart | Pull the live current-AIRAC SID list before use. A community chart index names fixes **BETUD, KOPEX, LANGO, NEXEN, SALLO/SIMEG, GOLGA** as associated with departure routings — not independently confirmed to current chart titles |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** The fixed-track-then-turn structure on 22L/22R/30 departures (§3) functions as the field's noise-abatement logic; no single mandated fleet-wide NADP1/2 designation confirmed this pass. 🟧
- **Early turn / altitude constraints:** Published per SID (e.g., the ~2.0 DME KAS turn point on 22L/22R departures) — verify constraints on the current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat, sea-level terrain — no significant close-in terrain obstacle identified. The Øresund lies immediately east of the field; no specific bridge/obstacle procedure was confirmed in the reachable AIP text.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** LVP would be expected consistent with the field's CAT II (04L) / CAT III (22L) infrastructure; specific LVTO RVR minima not confirmed this pass. 🟧
- **De-icing:** **Three dedicated pads/taxiways — TWY A, TWY B, TWY V** — each with a distinct ATC channel and stop-marking/stop-light system; post-deice, taxi to the illuminated stop line and await ground-crew signal before calling ATC for taxi clearance. Season inferred Oct–Apr, not AIP-quoted. See [OM E — Cold Weather Operations](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Clearance Delivery **119.905** (H24); departure clearance requested at TOBT −30 min.
- **Frequency sequence:** **Delivery 119.905 → Apron 121.905 (pushback/start/taxi) → Tower 119.355 (departure position) → Departure 120.255/124.980 → Copenhagen Approach 119.805/118.455.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** Coordinated via **Airport Coordination Denmark (ACD)**; Copenhagen's A-CDM/ANI-Airport status feeds DPI messaging to EUROCONTROL's Network Manager, which can influence CTOT calculation. Comply with any assigned CTOT. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 04L/22R (3,600 m) and 04R/22L (3,300 m) are non-limiting for any K Global Category L type; RWY 12/30 (2,800 m physical, LDA reduced by displacement) is likewise ample for its restricted crosswind role.
- **Density altitude / temperature:** Non-issue at 17 ft, temperate maritime climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Winter snow/de-icing season is the relevant seasonal consideration (§7); no specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [OM B — Fleet Capability Matrix](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty for our Category L type at EKCH.

---

## 10. Gotchas

- **RWY 12/30 is a restricted-use crosswind runway** — do not expect it as a routine departure runway; it activates specifically above a 15 kt crosswind trigger on the preferential parallels or when they're otherwise unavailable.
- **RWY 12/30 crossing clearance is mandatory** for taxi flows transiting it — expect an explicit ATC instruction on the day.
- **Fixed-track-then-turn noise departures on 22L/22R/30** — do not assume an early turn; fly the published track to the noise-sector turn point.
- **Night-period (2300–0600) jet takeoffs require advance CPH noise approval** — a late-day delay risks running into this regime without the required approval; build buffer into the last rotation.
- **De-icing pad assignment is via the specific taxiway channel (TWY A/B/V)** — confirm the correct pad/channel for the assigned departure in winter ops.
- **A documented July–August wood-pigeon feeding migration crosses RWY 04L/22R** — expect ATIS bird-activity remarks and active wildlife control in season.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima / exact figures.
- Start-up/push-back procedure detail (cross-bleed/APU notification).
- NADP preference/designation — fixed-track noise routing confirmed, formal NADP not confirmed.
- LVTO RVR minima and follow-me/SMGCS specifics.
- EOSID/engine-out procedure detail per runway.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. RWY 12/30 crossing status and bird-activity remarks), CTOT/ATFM, de-icing status/pad assignment. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP Denmark (Naviair), AD 2-EKCH** — https://aim.naviair.dk/media/files/5f0a31y3ymq/EK_AD_2_EKCH_en.pdf (retrieved 2026-07-26). *Noise-abatement fixed-track departure routings, ATC frequencies, de-icing pad procedure.*
- VATSIM Scandinavia — EKCH reference — https://wiki.vatsim-scandinavia.org/books/danish-airports-charts/page/ekch-copenhagenkastrup (retrieved 2026-07-26). *SID-associated fix-name cross-check; network-sim document, not regulatory.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Denmark (Naviair); K Global fields from live VAMSYS; 4-page pack. |
