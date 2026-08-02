# EDDB — Berlin Brandenburg · Arrival Page

**EDDB / BER** · Berlin/Schönefeld, Germany · Europe
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [EDDB Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. **Runway designators changed 2024-10-03 due to magnetic drift — this page uses the current designators (06L/24R, 06R/24L); see the Briefing §3.2/§18.** Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **06L/24R** (north pair) or **06R/24L** (south pair) — parking-position-based allocation, two **independent parallels** 🟧 |
| Usual approach | **ILS CAT II/III** confirmed on at least the 24R end by chart-title reference (pre-rename "25R"); full per-runway suite not confirmed |
| Config logic | Parking-position/wind-driven; not a crossing-runway field (unlike EDDH) |
| Transition level | By QNH; TA **5,000 ft** / TL **FL60**, or **FL70 when QNH < 1013 hPa** — verify no local override on current chart 🟧 |
| LVP trigger | Winter continental-influenced fog/low stratus; CAT II/III capability on at least the 24R end is the standing mitigation — exact RVR trigger not confirmed 🟧 |
| Missed-approach driver | Not terrain — re-sequencing into a dual-independent-parallel pattern |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning; confirm it reflects the **2024-10-03 runway redesignation**. 🟧
- **Selection by arrival direction / runway:** North-apron stands (Apron 1-4/A/E/GAT, D01-D03) generally route to **06L/24R**; south-apron stands (Apron B/C, D04-22) generally route to **06R/24L**. ATC may deviate from this as required (see [Briefing §10](index.md)).
- **Transition to approach:** Expect an RNAV-STAR-to-ILS transition with radar vectors onto final for the 24R end (CAT II/III); verify the charted transition for all ends.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** Winter fog-driven re-sequencing and a late north/south-pair runway reassignment ahead of a parking-position change are the main energy traps at this field.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 24R (ex-25R) | ILS | **CAT II/III** — confirmed by chart-title reference only 🟩 | verify current chart |
| 06L / 06R / 24L | Not confirmed | 🟧 verify current AIRAC | verify current chart |

- **LVP triggers:** Winter continental-influenced fog/low stratus is the routine BER trigger — CAT II/III capability on at least the 24R end is the standing mitigation. Exact RVR trigger and ILS sub-category not confirmed this pass. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat Brandenburg plain at 157 ft MSL, south-east of Berlin — no close-in high terrain relevant to any arrival path.
- **Specific threats:** 🟧 **Two independent parallel runways** (not crossing) support simultaneous arrival/departure streams — generally lower conflict workload than EDDH's crossing-runway geometry; winter fog/low-stratus events remain the standing weather threat.
- **Airspace / traffic:** 🟧 Berlin Tower, split Nord/Süd, feeding **Bremen Radar (Bremen ACC, EDWW)** — **not Langen**. No dedicated Bremen FIR/EDWW airspace brief exists yet in OM C; the general Europe brief `../../../../Airspace/General/Europe.md` covers the Langen/Karlsruhe corridor only and does **not** cover this sector — flagged as a genuine library gap 🟧 (see [Briefing §3.2](index.md)).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat plain) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around re-inserts the aircraft into the dual-independent-parallel pattern under Berlin Tower (Nord/Süd)/Bremen Radar — expect vectoring before re-sequencing, especially during a winter fog event.
- **Go-around traps:** North/south-pair awareness during the miss; confirm current runway allocation before re-attempting.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 06L ≈3,304 m / 10,840 ft (derived); 24R ≈3,300 m / 10,827 ft (derived); 06R/24L 4,000 m / 13,123 ft (no displacement) — see [Briefing §7](index.md) for full table; LDA figures marked "derived" are calculated (full length − displacement), not sourced directly. 🟧
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground on the day. 🟧
- **Runway-excursion watch:** 🟧 Displaced thresholds apply to the north pair only (06L +970 ft / 24R +985 ft) — always fly the correct LDA; winter contamination (snow/slush/ice) is a seasonal braking-action consideration.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** North-apron stands generally correspond to arrivals on **06L/24R**; south-apron stands to **06R/24L**. VAMSYS mirror gives a planning taxi-in time of **14 min** `[VAMSYS mirror 2026-07-25]`.
- **Hot spots / tight taxiways:** 🟥 **Documented pushback hotspot near taxi lane N1** (Apron 3, stands 40/41/42) — a pushback tug may temporarily not be fully clear of the apron safety line at these adjacent stands; taxi with vigilance through this area on the inbound roll to stand.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — VDGS-guided stands on Aprons B/C and parts of A/E; widebody allocation for our operation not yet confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Bremen Radar (Bremen ACC, EDWW), frequency not confirmed for BER specifically → Berlin Tower (Nord) 120.03 [06L/24R] or Tower (Süd) 118.805 [06R/24L] → Berlin Ground 129.505.** Take the assigned frequency and confirm current chart. (Frequencies from [Briefing §8](index.md); all tier-4 sourced, treat as unconfirmed pending current-AIRAC cross-check.)
- **Approach/Departure control:** **Bremen Radar** (Bremen ACC, EDWW) is the facility for Berlin's terminal approach — **not Langen**. No dedicated Bremen FIR/EDWW airspace brief exists yet in OM C to link here; reference the general Europe brief `../../../../Airspace/General/Europe.md` for the (non-covering) continental corridor context only. 🟧

---

## 10. Gotchas

- **Runway designators changed 2024-10-03** (07L/25R → 06L/24R; 07R/25L → 06R/24L) due to magnetic drift — confirm any older reference material or chart is not being used unknowingly.
- **CAT II/III confirmed only by chart-title reference on the 24R end** — do not assume equivalent low-visibility capability elsewhere without verifying the current chart.
- **Field is under Bremen Radar (Bremen ACC, EDWW), not Langen** — do not default to Langen-area sector/frequency assumptions.
- **Documented pushback hotspot near taxi lane N1** (Apron 3, stands 40/41/42) remains a ground-workload factor on taxi-in.
- **Slot-coordinated airport** — a delayed arrival should be assessed against the assigned CTOT/slot rather than a fixed curfew hour (unlike EDDH).

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway — confirm they reflect the 2024-10-03 redesignation.
- ILS sub-category (IIIA/IIIB) confirmation; approach suite on 06L/06R/24L.
- Exact LVP/CAT II/III trigger RVR values.
- Rapid-exit taxiway/vacate detail.
- Current taxi-in routing and gate assignment.
- Bremen Radar frequency specific to BER (not confirmed in reachable sources).
- **Bremen FIR (EDWW) airspace brief does not yet exist in OM C** — genuine library gap, do not link a non-existent file pending a dedicated build.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. CAT II/III equipment status and N1 pushback area), ATIS config, current CTOT/slot status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — Berlin Brandenburg Airport (EDDB) runways & frequencies — https://ourairports.com/airports/EDDB/runways.html , https://ourairports.com/airports/EDDB/frequencies.html (retrieved 2026-07-25).
- VATSIM Germany Knowledgebase — EDDB Berlin/Brandenburg — https://knowledgebase.vatsim-germany.org/books/airports-bremen-fir-edww/chapter/eddb-berlinbrandenburg/export/html (retrieved 2026-07-25). *Bremen FIR/ACC control structure, parking-position-based preferential runway logic, N1 pushback hotspot.*
- Aviation24.be — "Berlin Brandenburg Airport to rename runways due to shifts in Earth's magnetic field" — https://www.aviation24.be/airports/berlin/berlin-brandenburg-airport-to-rename-runways-due-to-shifts-in-earths-magnetic-field/ (retrieved 2026-07-25). *2024-10-03 redesignation.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Built from DFS eAIP + Briefing; folded to 4-page pack. |
