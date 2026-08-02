# KLAX — Los Angeles International · Arrival Page

**KLAX / LAX** · Los Angeles, California, United States · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [KLAX Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **24R/25L** in Normal ("west") ops — the dominant configuration essentially year-round; **06L/07R** in East ops (wind ≥10 kt easterly); **RWY 06R only** for noise-abatement single-runway ops (0000–0630 local) |
| Usual approach | **ILS RWY 24R (CAT II–III)** and **ILS RWY 25L (CAT II–III)** in Normal ops; ILS OR LOC / RNAV (RNP)/(GPS) on the reciprocal ends in East ops or as a secondary option |
| Config logic | Prevailing onshore westerly wind drives Normal ops; Santa Ana/offshore easterly wind ≥10 kt drives East ops; 0000–0630 local funnels all arrivals onto RWY 06R alone |
| Transition level | FL180 (by QNH; US standard) — verify current chart |
| LVP trigger | Coastal marine-layer stratus/fog dropping ceiling/visibility below CAT I minima; CAT II/III capability on 24R and 25L 🟧 |
| Missed-approach driver | Airspace density / closely-spaced parallels within each complex (not terrain) |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** ANJLL FOUR (RNAV), BASET FIVE, BAYST ONE (RNAV), BIGBR THREE (RNAV), BOGET TWO (RNAV), BRUEN TWO (RNAV), DIRBY TWO (RNAV), GOATZ TWO (RNAV), HLYWD ONE (RNAV), HUULL TWO (RNAV), IRNMN TWO (RNAV), KIMMO THREE, LEENA EIGHT, **MDNYT TWO (RNAV)** *(for use only between midnight and 0630 local)*, MOORPARK FOUR, OCEAN THREE, OLAAA TWO (RNAV), RYDRR TWO (RNAV), SADDE EIGHT, SEAVU TWO, SNSTT TWO (RNAV), VISTA THREE, WAYVE ONE (RNAV), ZUUMA FOUR (RNAV).
- **Selection by arrival direction / runway:** Northeast/east/southeast arrivals typically route via ANJLL FOUR, BIGBR THREE, BRUEN TWO, HLYWD ONE, MDNYT TWO, OLAAA TWO or VISTA THREE depending on direction and time of day; northwest arrivals via LEENA EIGHT or SADDE EIGHT; MDNYT TWO is specifically reserved for the midnight–0630 noise-abatement/over-ocean arrival window feeding RWY 06R. SoCal TRACON (Southern California TRACON) assigns the STAR-to-runway transition for the active configuration.
- **Transition to approach:** Expect an RNAV-STAR-to-ILS transition with radar vectors onto the 24R/25L (Normal ops) or 06L/07R (East ops) final; verify the charted transition.
- **Speed / flow constraints on the STAR:** RNAV STARs carry published speed/altitude gates — pointer only, verify chart; expect additional flow speed control given LAX's extremely high traffic density.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard ≈3:1; plan TOD to meet the first STAR altitude gate. Marine-layer holding or a configuration-change vector can compress the descent — brief an early-descent contingency.
- **Speed control:** STAR speed gates, 250 KIAS below FL100, and LAX Class B speed limits within the surface area — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** A late runway/configuration change (Normal ↔ East ops, or the shift into the 0000–0630 single-runway plan) and holding-then-repositioning during marine-layer flow are the main energy traps. 🟧

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 24R | ILS OR LOC 24R, **ILS 24R (CAT II–III)**, RNAV (RNP) Z 24R, RNAV (GPS) Y 24R | Full CAT II/III (ALSF-2) — primary Normal-ops low-vis runway (north complex) 🟩 | verify current chart; ident/freq not extractable |
| 25L | ILS OR LOC 25L, **ILS 25L (CAT II–III)**, RNAV (RNP) Z 25L, RNAV (GPS) Y 25L | Full CAT II/III (ALSF-2) — primary Normal-ops low-vis runway (south complex) 🟩 | verify current chart; ident/freq not extractable |
| 06L | ILS OR LOC 06L, RNAV (RNP) Z 06L, RNAV (GPS) Y 06L | CAT I 🟧 — East-ops primary arrival | ident/freq not extractable |
| 07R | ILS OR LOC 07R, RNAV (RNP) Z 07R, RNAV (GPS) Y 07R | CAT I 🟧 — East-ops primary arrival | ident/freq not extractable |
| 06R | ILS OR LOC 06R, RNAV (RNP) Z 06R, RNAV (GPS) Y 06R | CAT I 🟧 — sole arrival runway 0000–0630 local | ident/freq not extractable |
| 24L | ILS OR LOC 24L, RNAV (RNP) Z 24L, RNAV (GPS) Y 24L | CAT I 🟧 — secondary Normal-ops option | ident/freq not extractable |
| 07L | ILS OR LOC 07L, RNAV (RNP) Z 07L, RNAV (GPS) Y 07L | CAT I 🟧 — secondary option | ident/freq not extractable |
| 25R | ILS OR LOC 25R, RNAV (RNP) Z 25R, RNAV (GPS) Y 25R | CAT I 🟧 — secondary option | ident/freq not extractable |

- **LVP triggers:** Coastal marine-layer stratus/fog (strongest May–Jul) dropping ceiling/visibility below CAT I minima at the field — the routine LAX trigger. CAT II/III capability is on **24R and 25L only**.

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 Low. Coastal-plain field at 127 ft MSL; most finals track over the LA Basin or the Pacific. Distant terrain (Santa Monica Mountains, ≈2,800 ft peaks, 15+ NM north) is clear of the standard 24/25/06/07 approach corridors but relevant to a vectored missed approach turning inland (Briefing §3.1).
- **Specific threats:** 🟥 **Closely-spaced parallel runway pairs within each complex** (north ≈700 ft, south ≈800 ft apart 🟧) — the defining threat, directly reflected in the FAA's published **HS1** hot spot (RWY 24L at Twys V, W, Y — short distance between parallel runways; after landing 24R, manage taxi speed and expect to hold short of 24L). Wake from the adjacent parallel runway is a standing consideration on every arrival.
- **Airspace / traffic:** Class B, SoCal-TRACON-vectored, one of the busiest airspace environments in the US. High-density arrival environment; brief for re-sequencing and possible extended vectoring during marine-layer or configuration-change periods.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver — most missed-approach paths climb over the LA Basin or ocean, clear of the Santa Monica Mountains. Fly the published MAP; verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around drops you back into an extremely high-density Class B environment with closely-spaced parallel traffic on the adjacent runway — expect extended vectoring and possible holding before re-sequencing, particularly during marine-layer-degraded conditions.
- **Go-around traps:** Wake/configuration awareness on the closely-spaced parallels during the miss; maintain a heightened traffic scan even under radar/TCAS.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway (mind displaced thresholds — Briefing §7):** 24R **8,926 ft** (no displacement), 25L **11,095 ft** (no displacement), 24L **9,483 ft** (801 ft displaced thr), 07L **11,259 ft** (832 ft displaced thr). The south-complex pair (07L/25R, 07R/25L) is ample for any K Global type; brief the **displaced-threshold LDA where one applies**, not the physical runway length.
- **Braking / vacate:** All runways are grooved; plan the vacate to minimise runway occupancy given the extremely high-density flow. Confirm rapid-exit taxiway assignment with Tower/Ground on the day.
- **Runway-excursion watch:** 🟧 Displaced thresholds apply on 07L/25R (south) and 06R/24L (north); 07R/25L and 06L/24R (in the un-displaced direction) do not carry one. A configuration change (Normal ↔ East ops) can leave a tailwind on the previously-into-wind runway — check ATIS wind trend.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing 24R/25L (Normal ops), taxi in toward the **Tom Bradley International Terminal (TBIT)** via the Central Terminal Area crossfield taxiways (Taxiway C13, Taxiway R) per Ground; LAX ATCT-published named routes (North/South/Coastal Route) may apply depending on the landing runway. 🟧 Confirm actual routing with Ground on the day.
- **Hot spots / tight taxiways:** 🟥 **HS1** (RWY 24L at Twys V, W, Y — manage taxi speed after landing 24R, expect hold short of 24L); **HS2** (RWY 25L at Twy F — do not cross without authorization); **HS3** (Twy F from Twy A — surface incident risk, do not proceed without ATC clearance). Separately: **Twy D (D7/D8)** closed to wingspan >157 ft; wingspan **>214 ft** must contact LAX Airside Ops; length **>240 ft** prohibited on Twy C7/C8/C9.
- **Stand/gate notes:** TBIT West Gates (201–225) and original concourse (130–159) — see Dispatch §3.

---

## 9. Arrival frequency sequence

- **Sequence:** **SoCal Approach (Southern California TRACON) 124.3/124.5/124.9/128.5 (sector-specific) → Los Angeles Tower 120.95 (South complex)/133.9 (North complex) → Los Angeles Ground 121.4 (West)/121.65 (North complex)/121.75 (South complex).** (Frequencies from Briefing §8; take the assigned frequency and confirm current chart.)
- **Approach/Departure control:** Southern California TRACON — the busiest TRACON in the United States, based in San Diego; frequency assignment is sector/STAR-specific — verify current chart. Los Angeles ARTCC (ZLA) handles en route inbound; see [North America area brief](../../../../airspace/north-america.md). 🟧

---

## 10. Gotchas

- **Confirm the active runway configuration on ATIS before top-of-descent** — Normal ops (land 24R/25L), East ops (land 06L/07R, wind ≥10 kt easterly), and the 0000–0630 single-runway plan (land RWY 06R only) are materially different arrival pictures, and the STAR/approach assignment changes with it.
- **HS1 — after landing RWY 24R, manage taxi speed and expect to hold short of RWY 24L** at Twys V/W/Y — only ≈700 ft separates the north-complex runways.
- **Marine-layer fog can be below CAT I minima at the field while inland LA is clear** — brief the CAT II/III (24R/25L) plan and a holding/diversion contingency, especially May–Jul mornings.
- **Only 24R and 25L carry CAT II/III capability** — do not plan a low-vis approach to 24L, 06L/R or 07L/R without confirming a configuration change first.
- **A configuration change ahead of a Santa Ana wind event** (Normal ops → East ops) can introduce a late runway change — watch the ATIS.
- **KSNA and KBUR (company preferred alternates) share the same LA-Basin marine-layer weather system** on the worst mornings — factor this into alternate planning rather than assuming independence.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Exact approach minima and ILS component idents/frequencies for all eight runway ends — not text-extractable from reachable free sources; verify on the current AIRAC chart.
- Closely-spaced parallel runway separation distances (≈700 ft north / ≈800 ft south) — tier-4 corroborated, not an official LAWA/FAA engineering figure.
- Current runway-configuration/NOTAM status (Normal/East/noise-abatement) — inherently perishable, re-check at planning.
- LVP exact trigger conditions and full SoCal Approach sector/frequency map — not confirmed in reachable sources this pass.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS configuration/wind trend, flow-management status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **FAA Chart Supplement (d-TPP), Southwest volume, AIRAC cycle 2607, eff. 2026-07-09** — STAR/IAP index, runway/declared-distance/displaced-threshold data, communications, remarks (Hot Spot references, over-ocean noise-abatement note) — mirrored via SkyVector, https://skyvector.com/airport/KLAX (retrieved 2026-07-26).
- AirNav — KLAX — https://www.airnav.com/airport/KLAX (retrieved 2026-07-26). *Runway/LDA figures and Approach/Tower/Ground frequencies; ILS approaches published only as chart-title references (idents/freqs not extractable).*
- FAA — Airport Diagrams / Airport Hot Spots (Southwest chart supplement region) — https://www.aopa.org/ustprocs/20251002/SW-3/lax_hot_spot.pdf (retrieved 2026-07-26). *HS1–HS3 descriptions.*
- **Los Angeles ARTCC (ZLA) — VATSIM division** — https://laartcc.org/airport/KLAX (retrieved 2026-07-26). *Network-sim doc, **not regulatory** — corroborates the Normal/East/noise-abatement runway-configuration logic (land 24R/25L Normal; 06L/07R East; 06R only 0000–0630) used in the runway/approach selection logic here; content matched the FAA Chart Supplement data on every point checked.*
- LinkedIn — "LAX Arrival Runway Assignments" (aviation-industry commentary) — https://www.linkedin.com/pulse/lax-arrival-runway-assignments-jason-herman-cam (retrieved 2026-07-26). *Tier-4 corroboration of closely-spaced-parallel separation figures and inboard/outboard runway-use logic.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from FAA sources; K Global fields from live VAMSYS; 4-page pack. |
