# LIMF — Torino/Caselle · Departure Page

**LIMF / TRN** · Caselle Torinese, Piedmont, Italy · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LIMF Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **RWY 36** (preferential runway, wind permitting — §3); RWY 18 used when wind/braking action dictates otherwise |
| Config logic | Wind-driven: RWY 36 preferred while tailwind component stays ≤7 kt (dry) / ≤5 kt (wet); noise consideration also limits RWY 18 use to ATC requirement |
| Transition altitude | Reported 6,000 ft in chart-derived material — not confirmed from a primary AIP table this pass 🟧 |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | IATA Level 3 slot-coordinated (Assoclearance); EUROCONTROL ATFM/CTOT expected in peak/adverse conditions 🟧 |
| De-icing on departure | Availability/season not confirmed this pass — assume Central European season (roughly Oct–Apr) pending confirmation 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From the Main Apron or Kilo Apron, Ground/Tower routes toward the assigned departure runway (36 preferential, or 18 when required); confirm the exact taxi routing with Ground/Tower on the day.
- **Hot spots / tight taxiways:** 🟥 A charted ground hot spot ("HS1") exists at the field — exact location not resolved from this research pass, verify current aerodrome chart. A taxiway reported limited to ICAO Code A/B aircraft (not relevant to K Global types) also exists in the ramp area — be aware when following ground routing near it. Reported taxilane wingspan limits on the Main Apron (on the order of 36–38 m) are narrower than full Code E — confirm before any large Code E movement. 🟧
- **Runway crossings / read-back-required points:** Not independently confirmed for this single-runway field beyond standard runway-entry/crossing read-back practice.
- **Low-vis taxi caveats:** SMGCS/low-vis taxi routing would apply consistent with the field's Po Valley fog exposure and CAT II/III RWY 36 environment; follow-me assistance is reported mandatory during Low Visibility Procedures for movements to/from certain aprons — confirm current requirement. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** **RWY 36 is the preferential runway** for take-off and landing, used while the tailwind component does not exceed 7 kt (dry runway) or 5 kt (wet runway); the criterion is not applied if the tailwind exceeds those limits or braking action is reported "poor," in which case RWY 18 is used instead.
- **By departure direction:** RWY 18 (southbound) departures are additionally constrained by a **noise-abatement limitation** — use of RWY 18 is limited to ATC requirement specifically to reduce noise over the neighbourhood south of the airport; pilots may request it for weather/technical/safety reasons, subject to possible delay.
- **Noise / preferential-runway program:** See Briefing §12 — RWY 18 use is noise-limited by design; RWY 36 is the default in normal wind conditions.
- **Interaction with arrivals:** Single-runway field — departures and arrivals share the same runway; sequencing is a straightforward single-runway flow rather than a dependent-parallel scenario, but that also means a runway-blocking event (disabled aircraft, wildlife strike, etc.) stops all movements, both directions.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| SIRLO-, TOP-, ASTIG-, ABESI-, CANNE-, IXUSA-, GEN- and KUKEV-named SIDs/transitions (not verified against a primary AIP table) 🟧 | 18 / 36 | Chart-derived material references minimum climb gradients on the order of 5–8% for some RNAV departure routings — materially steeper than a standard 3.3% gradient; verify exact current-chart gradient/equipage requirement before planning a loaded departure | Pull the live current-AIRAC SID list before use — names above are not primary-AIP-confirmed this pass |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; standard 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** No specific NADP1/2 designation confirmed in reachable sources; the field's principal noise-abatement lever is the **RWY 18 ATC-requirement-only limitation** (§3) rather than a published climb-profile NADP. 🟧
- **Early turn / altitude constraints:** Published per SID — the elevated minimum-climb-gradient requirement noted in §4 implies early-segment altitude constraints on at least some RNAV departures; verify on the current chart, particularly given the close-in Alpine terrain to the north/west (Briefing §3.1).

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway, with particular attention to terrain on any departure routed toward the north/west quadrant. 🟧
- **Close-in / distant obstacles:** The field's single most significant obstacle consideration is **terrain**, not close-in structures — MSA rises sharply toward the north and west (Briefing §3.1), with named peaks including Rocciamelone (3,538 m) and Gran Paradiso (4,061 m) in that quadrant. An engine-out departure routed toward high ground must respect the charted EOSID/obstacle-clearance track, not a shortcut.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** LVP would apply consistent with the field's Po Valley fog exposure; reported (chart-derived, not primary-AIP-confirmed) activation trigger is RVR 550 m at the touchdown zone or ceiling below 200 ft in the approach sector — exact current LVTO RVR minima not confirmed this pass. 🟧
- **De-icing:** Availability, pad/gate location, fluid type and season not confirmed from a primary source this pass — assume a Central European season (roughly Oct–Apr) pending confirmation. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md). 🟧

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not separately confirmed from Ground; expect clearance via Torino Ground/Tower — verify current local procedure. 🟧
- **Frequency sequence:** **Torino Ground 121.700 (historically HX 0600–2200 LT) → Torino Tower 118.500 (H24) → Approach (historically "Torino Approach" 121.100/129.275, cross-checked as possibly now provided by Milano Radar 129.275/125.275) → Milano ACC (LIMM) en route.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.) 🟧
- **CTOT / slot handling:** **IATA Level 3 slot-coordinated** (Assoclearance); EUROCONTROL ATFM/CTOT regulation expected in peak/adverse conditions. Comply with any assigned CTOT/EDCT-equivalent. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 36 (2,948 m LDA, 3,300 m TORA) and RWY 18 (2,574 m LDA, 3,300 m TORA) are non-limiting for take-off for typical narrowbody/widebody weights at this stage length; confirm against the specific type in OM B, particularly for a max-weight long-haul departure off either runway.
- **Density altitude / temperature:** Non-issue at 989 ft, temperate climate — no hot-and-high or high-elevation performance penalty at this field.
- **Contamination / wet-runway:** Winter/de-icing-season braking-action consideration applies (§7); the preferential-runway tailwind criterion is itself wind-and-surface-condition dependent (§3) — a wet or contaminated runway changes the applicable tailwind limit and may force a runway change.
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-elevation performance penalty for any K Global type at LIMF; the operative departure planning considerations are the elevated RNAV departure climb gradient (§4) and Alpine-proximity terrain (§6), not runway length or density altitude.

---

## 10. Gotchas

- **Single runway (18/36)** — a runway-blocking event stops all movements in both directions; there is no parallel/alternate runway on-field.
- **RWY 36 is preferential but RWY 18 use is noise-limited to ATC requirement** — do not assume RWY 18 is freely available even in a tailwind-neutral case; expect ATC to hold to RWY 36 where practical.
- **Elevated minimum climb gradients reported on some RNAV departures (5–8%)** — verify the exact current-chart gradient and aircraft performance margin before accepting a loaded departure on an affected SID.
- **Terrain rises sharply to the north/west** — an engine-out or emergency-turn departure toward that quadrant must fly the charted obstacle-clearance track, not a shortcut.
- **Charted magnetic anomaly zone** — cross-check compass/heading indications during any heading-based departure segment.
- **Night movement restriction 23:00–06:00 local** — a late-day departure delay risks falling into the restricted window without qualifying for one of the published exceptions (Briefing §5/§12) — build buffer into the last rotation.
- **Joint civil/military field** — expect test-flight/military traffic mixed into the departure sequence.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and exact RNP/gradient specifics per runway.
- Take-off minima / exact LVTO RVR figures.
- Clearance-delivery procedure detail (frequency/position if distinct from Ground).
- De-icing availability, pad location and season.
- EOSID/engine-out procedure detail per runway.
- Current approach-control provider/frequency (historically Torino Approach; possibly reassigned to Milano ACC/Radar).

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, especially the RWY 36 ILS — the field's only precision-approach direction), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP Italia (ENAV), AD 2 LIMF** (reachable extract, 2008–2009-era amendment dates) — mirrored via https://www.yumpu.com/it/document/view/15905390/1-limf-torino-caselle (retrieved 2026-07-26). Preferential-runway logic, communications, RWY 18 noise limitation.
- SkyVector — https://skyvector.com/airport/LIMF/Torino-Caselle-Airport (retrieved 2026-07-26). *Runway/frequency cross-check; approach-control reassignment comment.*
- OurAirports — https://ourairports.com/airports/LIMF/ (retrieved 2026-07-26). *General cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Italia (ENAV); K Global fields from live VAMSYS; 4-page pack. |
