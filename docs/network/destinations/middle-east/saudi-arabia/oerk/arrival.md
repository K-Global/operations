# OERK — King Khaled Intl · Arrival Page

**OERK / RUH** · Riyadh, Saudi Arabia · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [OERK Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | One of 15L/15R/33L/33R per wind/traffic |
| Usual approach | ILS CAT I on the assigned runway; RNP also available all four ends |
| Config logic | Wind-driven; both parallel pairs available in either direction |
| Transition level | By QNH; TA 13,000 ft |
| LVP trigger | Not applicable — no CAT II/III capability published; standard CAT I minima |
| Missed-approach driver | Airspace/traffic re-sequencing, not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** A single combined RNAV STAR chart covers all four runway ends, plus a separate RNAV Arrival Transition chart — exact designators not extracted this pass. 🟧
- **Selection by arrival direction / runway:** Riyadh Approach assigns the STAR-to-runway transition for the active configuration.
- **Transition to approach:** Expect an RNAV-STAR-to-ILS transition with radar vectors onto final; verify the charted transition.
- **Speed / flow constraints on the STAR:** Published gates are pointers only — verify chart; 250 KIAS below FL100 is the Class C TMA norm.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** No field-specific energy trap identified beyond standard radar-vectored arrivals; the AIP's caution about correct-ILS selection on the closely-spaced parallels is the main crew-awareness item on the approach.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 15L | ILS or LOC (IELF), RNP | CAT I 🟩 | verify current chart |
| 33R | ILS or LOC (IKIA), RNP | CAT I 🟩 | verify current chart |
| 15R | ILS or LOC (ITIH), RNP, VOR | CAT I 🟩 | verify current chart |
| 33L | ILS or LOC (IFAT), RNP | CAT I 🟩; no VOR chart found in the reachable index 🟧 | verify current chart |

- **LVP triggers:** Not applicable — no CAT II/III capability published at this field; plan CAT I minima only.

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat Najd plateau at 2,053 ft — no close-in high terrain relevant to any arrival path.
- **Specific threats:** 🟧 **Two closely-spaced parallel runway pairs with simultaneous ILS operation** — the AIP specifically cautions crews to verify the correct ILS for the assigned runway is selected. Confirm current chart for any parallel-approach monitoring requirement.
- **Airspace / traffic:** 🟩 Growing but not saturated traffic under Riyadh Approach/Final — a genuine hub, not among the region's most congested terminal environments.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat plateau) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** Standard radar re-sequencing under Riyadh Approach; not a chronically saturated environment.
- **Go-around traps:** Correct-runway/ILS awareness on the parallel set remains relevant during any re-approach.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 4,205 m on all four ends — ample for any K Global widebody, no displaced thresholds found.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Apron on the day. 🟧
- **Runway-excursion watch:** 🟩 No displaced thresholds; no seasonal contamination factor at this desert field.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Confirm current terminal assignment with Ground/Apron given the reported 2026 terminal reallocation (see [Dispatch §2](dispatch.md)); VAMSYS mirror gives a planning taxi-in time of **14 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟧 **Taxiway H3** obstruction flagged in the retrieved AIP cycle — verify current NOTAM status.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — widebody-capable infrastructure inferred, terminal assignment for our operation not yet confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Riyadh Approach 120.000/128.500 → Riyadh Final 119.750/120.600 → King Khaled Tower 118.600 (East)/118.800 (West) → King Khaled Ground 121.600.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Riyadh Approach** is the facility for the field's terminal approach; see [Middle East airspace brief](../../../../airspace/middle-east.md) for the Jeddah FIR (OEJD) context. 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **Two closely-spaced parallel runway pairs with simultaneous ILS operation** — verify the correct ILS is tuned/selected for the assigned runway; the AIP itself flags this explicitly.
- **No CAT II/III capability** — do not plan on autoland/low-vis minima at this field; CAT I only.
- **Overflight of Riyadh city is restricted** — expect ATC to manage arrival tracks around this constraint.
- **Spring dust storms/shamal** can reduce visibility with limited notice — check SIGMET/dust advisories before arrival in season.
- **Taxiway H3 obstruction** — verify current NOTAM status before taxi-in through that area.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- Rapid-exit taxiway/vacate detail.
- Current terminal/gate assignment given the reported 2026 reallocation.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. TWY H3), ATIS config, current Middle East conflict-zone/overflight bulletins. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **GACA/SANS eAIP, AD 2 OERK**, AIRAC AMDT 05/24 — https://aimss.sans.com.sa/assets/FileManagerFiles/AIP%20AMDT%2005_24_2024_08_22/eAIP/AD%202%20OERK%20RIYADH%20-%20KING%20KHALED%20INTERNATIONAL-en-GB.html (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Saudi Arabia (GACA); K Global fields from live VAMSYS; 4-page pack. |
