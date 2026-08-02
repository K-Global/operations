# EDDM — Munich (Franz Josef Strauß) · Departure Page

**EDDM / MUC** · Freising, Bavaria, Germany · Europe
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [EDDM Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **08L/26R** (Northern) for north-bound traffic; **08R/26L** (Southern) for south-bound traffic and cargo-apron departures |
| Config logic | Direction-of-flight split, not wind-limited the way a single-runway field is (both runways independent); physical 08-vs-26 direction is wind-dependent |
| Transition altitude | **5,000 ft**; initial clearance always "climb via SID to FL070" |
| Take-off minima | Not confirmed in reachable sources — verify current AIRAC 🟧 |
| CTOT / flow regime | Slot-coordinated (Level 3) + PPR for non-scheduled/business aviation |
| De-icing on departure | Available — dedicated coordinator frequency 121.990, seasonal |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Two-phase taxi — first to a numbered entry (N1–N4 north, on bridges; S1–S8 south), then handed to Ground for the remainder to the assigned runway. Cargo-apron (901–907) departures are normally routed south (08R/26L) to minimise taxi distance.
- **Hot spots / tight taxiways:** 🟥 Colour-coded (orange/blue) restricted lines on taxiways **W1, C3, E1, D3, D6 and E3**, with wingspan-banded limits (30 m / 36 m / 52 m / 65 m / 80 m / >80 m classes) — confirm eligibility before using a colour-coded line for taxi/pushback.
- **Runway crossings / read-back-required points:** **HIRO (High-Intensity Runway Operations)** intersection-departure procedures require prompt compliance with taxi/take-off clearances at published intersections — expect an intersection departure to be assigned without prior request.
- **Low-vis taxi caveats:** SMGCS/low-vis taxi routing applies consistent with the field's CAT II/III environment; follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Both runways are fully independent (widely spaced, not closely-spaced) — physical 08-vs-26 direction in use is wind-dependent, but this does not constrain which runway (northern/southern) is assigned, since that split is direction-of-flight driven.
- **By departure direction:** North-bound traffic generally departs the **Northern Runway (08L/26R)**; south-bound traffic and cargo departs the **Southern Runway (08R/26L)**.
- **Noise / preferential-runway program:** WTC H/J departures off **26L via OTT** require noise-protection **"W"-suffix SIDs** between 2200–0600 local. **B747-class** departures are barred from the northern runway (08L/26R) 2200–0600 (not applicable to the current K Global fleet).
- **Interaction with arrivals:** Both runways can run simultaneous independent operations; HIRO intersection-departure sequencing is the main interaction point with sustained high traffic density.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| ALG (Allgäu), BIBAG, KIRDI, MERSI, MIQ (Mike), OBAXA, ROTAX, TULSI, TURBU, VAVOR | 08L/26R/08R/26L (runway-specific designators, e.g. 2Q/2E/3S/4N) | No unusual gradient — field not elevation-limited. All: "climb via SID to FL070" 🟧 | Verify current-AIRAC designator/runway pairing before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Initial climb clearance is always **"climb via SID to FL070"** regardless of runway; 250 KIAS below FL100 (standard) plus any TMA-specific restriction per chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed in reachable sources beyond the "W"-suffix SID requirement for WTC H/J off 26L via OTT (2200–0600 local). 🟧
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat Bavarian plain — no close-in high terrain. The Alps rise ~50–60 NM south, well outside standard departure corridors; relevant only to regional diversion planning, not to a normal EOSID.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** LVP consistent with CAT II/III capability (ILS approved to CAT IIIb on all four runway ends per VATSIM SOP citing AIP); exact LVTO RVR minima not confirmed this pass. 🟧
- **De-icing:** Dedicated coordinator frequency **121.990**; significant winter demand given the humid-continental snow climatology — confirm pad assignment on the day. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** München Delivery **121.730** (H24, assumed) — issues a **combined enroute + start-up clearance**.
- **Frequency sequence:** **Delivery 121.730 → Apron (Vorfeld 1/2/3) 121.780/121.710/121.930 (push-back) → Ground North/South 121.980/121.830 → Tower North/South 118.705/120.505 → Director/Radar 118.825/131.225/120.775 (post-SID hand-off ~123.905 north / ~127.955 south).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** Slot-coordinated (Level 3) + PPR for non-scheduled/business aviation; comply with any assigned CTOT/EDCT-equivalent. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Both runways (4,000 m) non-limiting for any K Global type even hot/heavy.
- **Density altitude / temperature:** Moderate elevation (1,487 ft) — not hot-and-high; non-issue.
- **Contamination / wet-runway:** Frequent snowfall/persistent snow cover in winter is the relevant seasonal consideration; no specific braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — A339`](../../../../../fleet/a339/index.md) for the fleet's long-haul type baseline — no field-length or field-elevation performance penalty at EDDM.

---

## 10. Gotchas

- **HIRO intersection departures** may be assigned without prior request — be ready to comply promptly with taxi/take-off clearances at published intersections.
- **B747-class barred from the northern runway 2200–0600** — not a current K Global fleet concern but a genuine type-specific rule to be aware of.
- **WTC H/J departures off 26L via OTT require "W"-suffix SIDs 2200–0600** — confirm SID suffix before requesting.
- **Reverse thrust is rarely required** on the 4,000 m runways by design — brief accordingly for noise, but budget the longer taxi-in that results.
- **Föhn wind** can shift temperature/wind rapidly even in winter — brief the TAF trend group, not a static forecast.
- **Engine run-ups after 23:00 require prior ATC approval.**

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names, designators and RNP/gradient specifics per runway.
- Take-off minima exact figures.
- Start-up/push-back procedure detail beyond the combined enroute+start-up clearance.
- NADP preference / specifics beyond the "W"-suffix SID requirement.
- LVTO RVR minima and follow-me/SMGCS specifics.
- EOSID/engine-out procedure detail per runway.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. HIRO intersection availability), CTOT/ATFM, de-icing status/pad assignment. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here. See <../../../_Templates/_Sources.md> for the tier hierarchy.*

- OpenNav — EDDM chart index (SID/obstacle chart titles) — https://opennav.com/airport/EDDM (retrieved 2026-07-25).
- VATSIM Germany Knowledgebase — "SOPs FIR München" / "Departing from Munich" (see Briefing page for full citations). *HIRO procedure, SID/runway assignment logic, taxi/apron procedures, W-suffix SID and B747 night restriction.*
- Wikipedia — Munich Airport — https://en.wikipedia.org/wiki/Munich_Airport (retrieved 2026-07-25). *Night-flight restriction detail.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Built from DFS eAIP + Briefing; folded to 4-page pack. |
