# EKCH — Copenhagen/Kastrup · Arrival Page

**EKCH / CPH** · Copenhagen (Kastrup), Denmark · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Denmark (Naviair)-derived

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [EKCH Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **04L/22R or 04R/22L** (preferential parallels, wind-dependent); **12/30** for landing when preferential-runway crosswind exceeds 15 kt (RWY 30 may also be used for landing without that trigger) |
| Usual approach | ILS on the assigned parallel — **CAT III on 22L**, CAT II on 04L, CAT I elsewhere; RNP published every runway end |
| Config logic | Preferential-runway system, wind-dependent between 04-side and 22-side |
| Transition level | By QNH; transition altitude 5,000 ft MSL — verify current chart 🟧 |
| LVP trigger | CAT II/III infrastructure on 04L/22L supports low-vis ops; exact RVR/trigger figures not confirmed this pass 🟧 |
| Missed-approach driver | Airspace/traffic re-sequencing (Copenhagen Approach radar environment), not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** A community chart index names five arrival/holding fixes — **TESPI, TUDLO, MONAK, TIDVU, ERNOV** — each with a published holding pattern, consistent with a five-direction arrival structure into Copenhagen Approach. Exact current-AIRAC STAR designator suffixes not confirmed this pass — pull the live list at planning. 🟧
- **Selection by arrival direction / runway:** Copenhagen Approach assigns the STAR-to-runway transition for the active preferential-runway configuration (04-side or 22-side).
- **Transition to approach:** Expect an RNAV-STAR-to-ILS transition with radar vectors onto final; verify the charted transition.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** A late runway/config change (04-side ↔ 22-side, or a crosswind-triggered swap onto 12/30) ahead of a wind shift is the main energy trap at this field.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 04L | ILS; RNP | **CAT II** 🟧 | verify current chart |
| 22R | ILS; RNP | CAT I 🟩 | verify current chart; THR displaced 600 m |
| 04R | ILS; RNP | CAT I 🟩 | verify current chart |
| 22L | ILS; RNP | **CAT III** — field's lowest minima 🟧 | verify current chart |
| 12 | ILS; RNP | CAT I 🟩 | verify current chart; crosswind/restricted-use runway; THR displaced 705 m |
| 30 | ILS; RNP | CAT I 🟩 | verify current chart; crosswind/restricted-use runway; THR displaced 270 m; landing generally permitted |

- **LVP triggers:** CAT II (04L) / CAT III (22L) infrastructure is the standing low-visibility capability; exact RVR/trigger figures not confirmed this pass. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Sea-level (17 ft), flat surrounding terrain — no close-in high terrain relevant to any arrival path.
- **Specific threats:** 🟧 Parallel operations on 04L/22R and 04R/22L with a crossing third runway (12/30) sustain a busy Nordic-hub traffic environment; wake from the adjacent parallel is a standing consideration during simultaneous/dependent operations. A documented **July–August wood-pigeon feeding migration crosses RWY 04L/22R** — expect ATIS bird-activity remarks in season.
- **Airspace / traffic:** 🟧 Busy terminal environment under **Copenhagen Approach**; brief for re-sequencing and vectoring, especially during banks or marginal weather.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat, sea-level field) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around returns you to the Copenhagen Approach radar environment, with the RWY 12/30 crossing traffic pattern remaining a ground-workload factor even on a runway not itself involved in the miss.
- **Go-around traps:** Traffic/config awareness on the parallel set during the miss; be alert to a possible runway-configuration change if the go-around is wind-driven.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 04L **3,600 m** (no displacement); 22R **3,000 m** (600 m displaced threshold); 04R/22L **3,300 m** (no displacement noted); 12 **2,095 m** (705 m displaced threshold); 30 **2,530 m** (270 m displaced threshold). The main parallel pairs are ample for any K Global Category L type; the crosswind runway's reduced LDA is non-limiting for its restricted role.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Apron on the day. 🟧
- **Runway-excursion watch:** 🟧 Displaced thresholds on 22R/12/30 — mind the correct usable LDA per runway; winter-contamination braking-action consideration applies in the de-icing season (see Briefing §14).

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on the assigned parallel, taxi in to the Terminal 2/3 concourse or CPH Go (Pier F) per Ground/Apron assignment; VAMSYS mirror gives a planning taxi-in time of **14 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟧 No text-labelled "Hot Spot" entries found in the reachable AIP extract; the clearest identified ground-complexity point is the **RWY 12/30 crossing**, requiring an explicit ATC crossing clearance on the taxi-in routing where relevant.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — pier/gate assignment for our operation not independently confirmed this pass.

---

## 9. Arrival frequency sequence

- **Sequence:** **Copenhagen Approach (119.805/118.455) → Kastrup Final (120.205) → Kastrup Tower (118.105 arrival position) → Kastrup Apron (121.630 arrival / 121.905 taxi).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Copenhagen Approach** is the facility for Copenhagen's terminal approach; en route inbound is handled by **Copenhagen ACC — Copenhagen FIR (EKDK)**, for which no dedicated FIR brief exists in this library yet — see [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) 🟧 (general continental reference only, not EKDK-specific).

---

## 10. Gotchas

- **RWY 12/30 is a restricted-use crosswind runway** — do not expect it as a routine arrival option; it activates above a 15 kt crosswind trigger on the preferential parallels (RWY 30 landing is also permitted without that trigger).
- **RWY 12/30 crossing traffic** remains a ground-workload factor on taxi-in even when 12/30 is not itself the landing runway.
- **Config swap (04-side ↔ 22-side, or onto 12/30) driven by a wind shift** can bring a late runway change — watch the ATIS wind trend.
- **Displaced thresholds on 22R, 12 and 30** — confirm the correct usable LDA before committing to a short-field landing assumption.
- **A documented July–August wood-pigeon migration crosses RWY 04L/22R** — expect ATIS bird-activity remarks and active wildlife control in season.
- **Night-period (2300–0600) noise-quota regime** applies to jet/heavy-prop takeoffs, not landings — a delayed arrival is not itself restricted by this regime, unlike fields with a hard curfew.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- Exact LVP/CAT II/III trigger RVR values.
- Rapid-exit taxiway/vacate detail.
- Current taxi-in routing and gate/pier assignment for our operation.
- Taxiway "Hot Spot" locations — not found in text extract, likely graphical-chart-only.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. CAT II/III equipment status and bird-activity remarks), ATIS config/wind trend. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP Denmark (Naviair), AD 2-EKCH** — https://aim.naviair.dk/media/files/5f0a31y3ymq/EK_AD_2_EKCH_en.pdf (retrieved 2026-07-26). *Runway/declared-distance data, ATC frequencies, navaids, bird-hazard note, preferential-runway logic.*
- VATSIM Scandinavia — EKCH reference — https://wiki.vatsim-scandinavia.org/books/danish-airports-charts/page/ekch-copenhagenkastrup (retrieved 2026-07-26). *STAR/holding-fix cross-check; network-sim document, not regulatory.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Denmark (Naviair); K Global fields from live VAMSYS; 4-page pack. |
