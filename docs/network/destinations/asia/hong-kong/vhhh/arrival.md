# VHHH — Hong Kong International · Arrival Page

**VHHH / HKG** · Chek Lap Kok, Lantau, Hong Kong SAR · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [VHHH Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **North (07L/25R)** primary under the segregated-mode concept; **South (07R/25L)** also used (mixed mode) |
| Usual approach | ILS on all three runways — **category not uniform**: CAT III (07L, 25C), CAT II (07C, 07R, 25L), CAT I (25R); RNP Y available to the 25-direction runways on request 🟧 |
| Config logic | Segregated mode (North = arrivals) is the default; monsoon-driven wind sets 07- vs 25-configuration |
| Transition level | **FL110** reported by a VATSIM vACC cross-check 🟧 — verify against the primary AIP's QNH-dependent table |
| LVP trigger | CAT II/III-equipped runway ends; exact trigger conditions/RVR not confirmed 🟧 |
| Missed-approach driver | Lantau terrain to the south, plus dense triple-parallel/Pearl River Delta traffic re-sequencing |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** A family of RNAV STARs is flown for the 07-configuration, feeding the **LIMES** IAF, and a corresponding family for the 25-configuration, feeding the **RIVMI** IAF; a further Golf-suffixed set connects to the **RNP Y** approach on the 25-direction runways, available **on request only** 🟧 (VATSIM vACC cross-check — pull the live current-AIRAC STAR names/minima before use).
- **Selection by arrival direction / runway:** The 07-configuration STARs feed LIMES; the 25-configuration STARs feed RIVMI. Hong Kong Approach assigns the STAR-to-runway transition for the active configuration.
- **Transition to approach:** A published holding pattern exists at each IAF (LIMES for 07s, RIVMI for 25s) to be joined if no approach clearance has been issued — do not proceed beyond the IAF without an ATC clearance 🟧 (network-sim cross-check — verify current chart).
- **Speed / flow constraints on the STAR:** Terminal Transition Routes are reported to carry an FL260 restriction at named enroute fixes 🟧 (network-sim cross-check — verify current chart); expect additional flow-speed control given the high-density Pearl River Delta environment.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning to meet the first STAR altitude gate; monsoon-season convective weather or a nearby tropical cyclone can compress arrival sequencing — brief an early-descent contingency.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 (ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** A late runway/configuration change on a monsoon wind shift (07↔25), and holding/resequencing during a typhoon-outer-band or heavy-monsoon-rain event, are the main energy traps at this field.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 07L | ILS | **CAT III** 🟩 | verify current chart |
| 25R | ILS | **CAT I** 🟧 | verify current chart |
| 07C | ILS | **CAT II** 🟧 | verify current chart |
| 25C | ILS | **CAT III** 🟩 | verify current chart |
| 07R | ILS | **CAT II** 🟧 | verify current chart |
| 25L | ILS; RNP Y (on request, Golf STAR) 🟧 | **CAT II** 🟧 | verify current chart |

- **LVP triggers:** CAT II/III-equipped runway ends provide the low-visibility capability; the South Runway's proximity to Lantau windshear (§5) can compound low-vis handling on that runway specifically. Exact RVR trigger values not confirmed this pass. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟥 **Lantau Island** high ground (peaks ~1,000 m/3,280 ft, valleys ~400 m/1,300 ft) sits close south of the field. Hong Kong Observatory-documented terrain-induced windshear is most pronounced on **southerly/southeasterly** flow and is closest to the **South Runway (07R/25L)** — cross-ref [Briefing §3.1](index.md).
- **Specific threats:** 🟥 Quantified windshear exposure (~**1 in 500** landing/departing flights per HKO) and turbulence (~**1 in 2,500**) — among the best-documented terrain-windshear environments in the network; wake-turbulence consideration during independent/dependent parallel operations across the three runways.
- **Airspace / traffic:** 🟥 Dense, multi-FIR Pearl River Delta terminal environment (Hong Kong/Macau/Shenzhen/Guangzhou); **three near-identical runway designators** raise a genuine runway-confusion risk — cross-ref [Hong Kong (VHHK) FIR brief](../../../../airspace/fir/asia/hong-kong-vhhk.md).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Lantau high ground to the south is the standing consideration on a missed approach — fly the published MAP, verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around re-enters a dense triple-parallel/Pearl River Delta radar environment — expect extended vectoring and possible holding before re-sequencing, particularly during a typhoon-outer-band or monsoon-convective event.
- **Go-around traps:** Windshear/turbulence-triggered go-around risk is materially higher here than most fields in the network given the quantified exposure above — brief the windshear-escape manoeuvre as a standing item, not an exception.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 07L/25R **3,626 m**; 07C/25C **3,629 m**; 07R **3,640 m**; 25L **3,800 m** (the only runway end published without a displaced threshold) `[CAD AIP AD 2 VHHH 2.13]` — all ample for any K Global widebody type.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Apron on the day. 🟧 All runways are grooved full-length with a 240 × 150 m RESA at each end.
- **Runway-excursion watch:** 🟧 Five of the six runway ends carry a displaced threshold (160–174 m) — confirm the correct LDA, not the full published runway length, in performance planning. Monsoon-season heavy rain is the relevant contamination/braking-action consideration.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on the assigned North or South runway, taxi in via the A–K taxiway network to the Midfield Concourse or Terminal 1 per Ground/Apron assignment; VAMSYS mirror gives a planning taxi-in time of **15 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟥 **Sky Bridge** underpass over Taxilane B7 near Stand N12/R16 (28 m height clearance); several bridge-taxiway junctions (H/V, V/V4, V4/W, W/H, W/TXL W2, S/H, T/H, D/E) noted in the AIP as not available for straight-section use — taxi with vigilance.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — Midfield Concourse/T1 widebody clusters; the Terminal 2 reopening (2026) gate assignment for our operation is not yet confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Hong Kong (VHHK) ACC → Hong Kong Approach 119.1 (H24) → Hong Kong Tower 118.2/118.4 (AMC South)/118.7 (AMC North) (H24) → Hong Kong Ground 121.6/121.875/122.125/122.55/122.6 (H24).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Hong Kong Approach/Departure** (CAD); sector/STAR-specific assignment is AIRAC-dependent — verify current chart. 🟧

---

## 10. Gotchas

- **Lantau terrain-induced windshear/turbulence is a quantified, year-round threat**, worst on southerly/southeasterly flow — brief the escape manoeuvre every approach in season.
- **Three near-identical runway designators** — confirm the assigned runway explicitly, every time.
- **ILS category is NOT uniform by runway end** — verify the correct CAT for the assigned runway before committing to a low-visibility approach.
- **Segregated-mode default (North = arrivals) can change to single/mixed-runway mode** for maintenance — do not assume without an ATC/ATIS confirmation.
- **Typhoon Signal No. 8 or above grounds all flights outright** — a late-notice T8 can force a diversion decision well before the field is physically unreachable.
- **Sky Bridge underpass (28 m clearance)** — mind ground clearance on any taxi routing near Stand N12/R16.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- Transition level confirmation against the primary AIP's QNH-dependent table (FL110 is a network-sim cross-check figure).
- RNP Y approach exact runway coverage and procedure name.
- Exact LVP/CAT trigger RVR values.
- Rapid-exit taxiway/vacate detail.
- Current post-Terminal-2-reopening taxi-in routing and gate assignment.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. CAT II/III equipment status per runway), ATIS config/wind trend, current tropical cyclone signal status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **CAD Hong Kong eAIP, AD 2 VHHH** (cycle valid from 11 Jun 2026, published 2026-04-16) — runway/declared-distance data, ILS category per runway end, communications, obstacle chart — https://www.ais.gov.hk/eaip_20260611/2026-06-11-000000/html/eAIP/VH-AD-2-VHHH-en-US.html (retrieved 2026-07-26).
- Hong Kong Observatory — "Terrain-induced Windshear & Turbulence over the Hong Kong International Airport" — https://www.hko.gov.hk/en/education/aviation-and-marine/aviation/00457-terraininduced-windshear-turbulence-over-the-hong-kong-international-airport.html (retrieved 2026-07-26). *Windshear/turbulence frequency statistics and mechanism.*
- Hong Kong Observatory — "Windshear and Turbulence Warning Service" — https://www.hko.gov.hk/en/aviat/amt/windshear_warning.htm (retrieved 2026-07-26).
- **VATSIM Hong Kong vACC — VHHH Pilot Briefing** (Release 2601) — https://vathk.com/pdf/PB_VHHH_2601.pdf (retrieved 2026-07-26). *Network-sim cross-check of STAR families, IAFs, transition level, RNP Y availability — flagged 🟧 wherever used as the sole source; not regulatory.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
