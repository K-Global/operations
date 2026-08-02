# OEJN — King Abdulaziz Intl · Arrival Page

**OEJN / JED** · Jeddah, Saudi Arabia · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [OEJN Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | One of 16C/34C, 16L/34R, 16R/34L per wind/traffic |
| Usual approach | ILS CAT I on the assigned runway; RNP and VOR also available all six ends |
| Config logic | Wind-driven; all three parallels available in either direction |
| Transition level | By QNH; TA 13,000 ft |
| LVP trigger | Not applicable — no CAT II/III capability published; standard CAT I minima |
| Missed-approach driver | Airspace/traffic density (Hajj/Umrah-driven surge), not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Four RNAV STAR base names — **VEMEM, MISAM, MUVOL, NOMDA** — each with runway-specific suffixed variants across all six runway ends. `[GACA eAIP AD 2.22.2.3]`
- **Selection by arrival direction / runway:** Jeddah Control assigns the STAR-to-runway transition for the active configuration.
- **Transition to approach:** Expect an RNAV-STAR-to-ILS transition with radar vectors onto final; verify the charted transition.
- **Speed / flow constraints on the STAR:** Published gates are pointers only — verify chart; 250 KIAS below FL100 is the norm.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate. Hajj-season traffic density may compress the descent/approach sequence.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** Correct-ILS-selection awareness on the three-parallel set is the standing crew-awareness item; Hajj-peak-week traffic density can extend vectoring.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 16C | ILS or LOC (IJDC), RNP, VOR | CAT I 🟩 | verify current chart |
| 34C | ILS or LOC (IJDW), RNP, VOR | CAT I 🟩 | verify current chart |
| 16L | ILS or LOC (IDFJ), RNP, VOR | CAT I 🟩 | verify current chart |
| 34R | ILS or LOC (IEAL), RNP, VOR | CAT I 🟩 | verify current chart |
| 16R | ILS or LOC (IJDD), RNP, VOR | CAT I 🟩; LOC unusable inside THR | verify current chart |
| 34L | ILS or LOC (IJDL), RNP, VOR | CAT I 🟩 | verify current chart |

- **LVP triggers:** Not applicable — no CAT II/III capability published; plan CAT I minima only.

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat Red Sea coastal plain at 49 ft — no CFIT-relevant terrain.
- **Specific threats:** 🟥 **Three parallel runways with simultaneous ILS operation** — the AIP specifically cautions crews to verify the correct ILS for the assigned runway. **Flash-flood-driven convective weather** in season can bring wind-shear/microburst risk near the field — see Briefing §14.
- **Airspace / traffic:** 🟥 Saudi Arabia's busiest airport, with a very high traffic density driven by the Hajj/Umrah gateway role — expect extended vectoring/holding during peak season and around active weather.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat coastal plain) — fly the published MAP and verify climb-gradient/turn on the current chart. Named holds **RADKI, IMDAP, ULULU, ALVON, ALTUN** are tied to specific runway ends.
- **Re-sequencing environment:** A go-around during Hajj-peak-week traffic drops back into a genuinely high-density environment — expect extended vectoring/holding.
- **Go-around traps:** Correct-runway/ILS awareness on the three-parallel set remains relevant during any re-approach.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 16C/34C, 16L/34R **4,000 m**; 16R/34L **3,800 m** — no displaced thresholds found; both figures are ample for any K Global widebody.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Apron on the day. 🟧
- **Runway-excursion watch:** 🟧 No displaced thresholds; watch for standing water on the runway/apron during active flash-flood-season rain events.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing, taxi in to **Terminal 1** or the **Hajj Terminal** per Ground/Apron assignment; VAMSYS mirror gives a planning taxi-in time of **12 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** None specifically named in the reachable AIP extract; taxi with the same parallel-runway awareness described in §5.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — Apron 7 is the field's Code F-rated cluster; standard aprons carry Code E as the ceiling.

---

## 9. Arrival frequency sequence

- **Sequence:** **Jeddah Control 119.100 (CTA-East)/125.450 (CTA-West) → Jeddah Final 123.800/124.000 → Jeddah Tower 118.200 (West)/118.500 (East) → Jeddah Ground Control 121.600/121.700/121.900.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Jeddah Control** serves the field's terminal approach; Jeddah itself hosts the **Jeddah FIR (OEJD)** — see [Middle East airspace brief](../../../../airspace/middle-east.md). 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **Three parallel runways with simultaneous ILS operation** — verify the correct ILS is tuned/selected for the assigned runway; the AIP itself flags this explicitly.
- **No CAT II/III capability** — do not plan on autoland/low-vis minima at this field; CAT I only.
- **Flash flooding / convective weather in season** — check current conditions before descent into an active weather cell near the field.
- **Hajj/Umrah surge traffic density** — expect extended vectoring/holding during peak weeks.
- **Overflight of Jeddah city below 5,000 ft AGL is prohibited** — expect ATC to manage arrival tracks around this constraint.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Exact approach minima per runway (current AIRAC).
- Rapid-exit taxiway/vacate detail.
- Current terminal/gate assignment for our operation.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. ramp-flooding status), ATIS config, current Hajj/Umrah calendar surge status, current Middle East conflict-zone/overflight bulletins. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **GACA/SANS eAIP, AD 2 OEJN**, AIRAC AMDT 05/24 — https://aimss.sans.com.sa/assets/FileManagerFiles/AIP%20AMDT%2005_24_2024_08_22/eAIP/AD%202%20OEJN%20JEDDAH%20-%20KING%20ABDULAZIZ%20INTERNATIONAL-en-GB.html (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Saudi Arabia (GACA); K Global fields from live VAMSYS; 4-page pack. |
