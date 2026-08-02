# CYUL — Pierre Elliott Trudeau Intl · Arrival Page

**CYUL / YUL** · Dorval, Montréal, Québec, Canada · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [CYUL Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **06L/24R (North)** — normally the arrival runway; **06R/24L (South)** used as a secondary arrival runway |
| Usual approach | ILS — RWY 06L reported CAT II 🟧; no CAT III at this field |
| Config logic | Preferential Runway Program — West operations (24-config) preferred up to 5 kt tailwind |
| Transition level | By QNH; transition altitude 18,000 ft (Canadian domestic standard) |
| LVP trigger | Winter snow/freezing-rain events reducing visibility below CAT I minima — RWY 06L's reported CAT II capability is the standing mitigation 🟧 (not independently confirmed) |
| Missed-approach driver | Airspace/traffic re-sequencing within Montréal Terminal, not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Per a CZUL (VATSIM vACC) 2024 pilot-briefing cross-check: **LFLER7** (North/Northwest arrivals), **OMBRE2** (Northeast/East arrivals), **CARTR5** (South/Southeast arrivals), **IMPAC4** (Southwest arrivals), **HABBS7** (West arrivals), **ALOET4** (Northwest arrivals) 🟧 — network-sim document, not regulatory; verify names/current status against the live AIRAC before use. Several are open RNAV STARs terminating at a Downwind Termination Waypoint (DTW) rather than a Final Approach Course Fix — if no approach clearance is received prior to the DTW, expect vectors to final; do not turn base toward the arrival runway unless instructed.
- **Selection by arrival direction / runway:** RWY 06L/24R (North) is normally the arrival runway; RWY 06R/24L (South) is used as a secondary arrival runway, particularly when RWY 06L/24R is committed to departure flow or under maintenance.
- **Transition to approach:** Expect a STAR-to-ILS transition with radar vectors onto final from Montréal Terminal; verify the charted transition.
- **Speed / flow constraints on the STAR:** 250 KIAS below 10,000 ft; 200 KIAS within 10 NM/below 3,000 ft AAL near the aerodrome (Canadian domestic norm). Typical speeds reported: **210 kt downwind, 190 kt base, 160 kt final** for IFR traffic (CZUL vACC cross-check) — pointers only, verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate. Step descents are normal — no need to report reaching a cleared altitude before the next instruction (Canadian domestic phraseology norm).
- **Speed control:** STAR speed gates and the domestic 250/200 KIAS structure above — confirm current chart.
- **Altitude constraints:** All charted altitude/speed restrictions must be respected down to and including the last ATC-cleared altitude (do not descend below it without further clearance) — per the CZUL vACC cross-check, consistent with standard Canadian domestic procedure.
- **Energy traps:** Late runway/config changes between the North/South runway pair ahead of a wind shift, and holding/resequencing during heavy-snow events, are the main energy traps at this field.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 06L | ILS | **Reported CAT II** 🟧 (tier-4, not independently confirmed) — normally the arrival runway | verify current chart |
| 24R | ILS 🟧 (category not confirmed) | Reciprocal of 06L | verify current chart |
| 06R/24L | ILS/RNAV 🟧 (names/categories not confirmed) | Secondary arrival runway | verify current chart |

- **LVP triggers:** No CAT III capability at CYUL (contrast with CYYZ) — winter snow/freezing-rain events reducing visibility rely on RWY 06L's reported CAT II capability as the field's best asset. Exact RVR/trigger figures not confirmed this pass. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat St. Lawrence Valley / island-of-Montréal plain at ~118 ft AMSL — no close-in high terrain relevant to any arrival path.
- **Specific threats:** 🟧 With only two active parallel runways (post-RWY-10/28 decommissioning), the traffic geometry is comparatively simple versus a multi-runway CSPO hub; the primary threat is winter-weather-driven — snow/freezing-rain events can force reduced-rate arrivals or a runway-config change. Wake from the adjacent parallel is a standing consideration during simultaneous operations.
- **Airspace / traffic:** 🟩 Montréal Terminal traffic density is materially lower than CYYZ's — still brief for standard vectoring/re-sequencing, especially in marginal weather.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat St. Lawrence Valley plain) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around returns you to Montréal Terminal's arrival/departure flow — expect vectoring and possible holding, particularly during a winter snow event or if the North runway is saturated.
- **Go-around traps:** Awareness of the North/South runway role split (arrivals vs. departures/secondary-arrivals) on the miss; confirm current runway assignment before re-established on the approach.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 06L/24R **3,353 m** · 06R/24L **2,926 m** 🟧 — no displaced-threshold data confirmed this pass; treat as the full paved length pending verification against a primary declared-distance table. Both runways are non-limiting for typical K Global arrival weights; check the shorter runway (06R/24L) per type/weight on hot or contaminated days.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Apron on the day. 🟧
- **Runway-excursion watch:** 🟧 No displaced thresholds confirmed; winter-contamination braking-action consideration applies given the region's heavy snowfall/freezing-rain exposure (see Briefing §14).

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on RWY 06L/24R (or 06R/24L if assigned as a secondary arrival runway), taxi in to the single main terminal per Ground/Apron (**positive ATC control**) assignment; VAMSYS mirror gives a planning taxi-in time of **12 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟥 **South Ramp between gates 47 and 49 is prohibited to aircraft with wingspan ≥ 36 m (118 ft)** — expect routing via **North Ramp** for our widebody equipment. The **former RWY 10/28 is now Taxiway Charlie** and does not require a crossing clearance — confirm current taxiway identifiers rather than relying on legacy scenery/signage (many taxiways off RWY 06L/24R have been renamed).
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — international arrivals typically gates 50–68, US-bound gates 72–89 (vACC-sourced, not independently confirmed against ADM's own gate map).

---

## 9. Arrival frequency sequence

- **Sequence:** **Montréal Terminal/Approach (132.850, North/South split reported 118.900/126.900) → Montréal Tower (119.900, North/South split reported 119.300) → Montréal Ground (121.900, East/West split reported 121.000) → Montréal Apron/Ramp (122.075, East/West split reported).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8; discrepancies flagged 🟧 pending live CFS cross-check.)
- **Approach/Departure control:** **Montréal Terminal** (NAV CANADA) is the facility for Montréal's terminal approach; **Montréal Area Control Centre (CZUL)** hands off en route inbound — see [North America — Airspace](../../../../airspace/north-america.md). 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- 🟥 **The former RWY 10/28 is Taxiway Charlie — it is not an active runway.** Do not expect a runway-crossing clearance; confirm current status if using older scenery/charts.
- 🟥 **South Ramp between gates 47–49 is closed to wingspan ≥ 36 m** — expect North Ramp routing on taxi-in for our widebody equipment.
- **No CAT III capability at CYUL** (contrast with CYYZ) — winter low-vis events rely on RWY 06L's reported CAT II capability; brief a diversion contingency if conditions exceed that.
- **West-operations preference (24-config up to 5 kt tailwind)** — do not assume the 06-config reciprocal is default; check ATIS.
- **Apron under positive ATC control** — all ground movement is by explicit instruction (North/South Ramp, East/West Lane); there is no need to report reaching the gate.
- **Weight-based curfew** — a delayed arrival approaching the **01:00** cutoff for our (>45,000 kg) equipment needs a confirmed ADM exemption; do not plan a schedule that assumes one.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names (LFLER7/OMBRE2/CARTR5/IMPAC4/HABBS7/ALOET4) and exact approach minima per runway.
- ILS category on RWY 06L (reported CAT II, tier-4 only) and on the remaining runway ends.
- Exact LVP trigger conditions (no CAT III at this field).
- Rapid-exit taxiway/vacate detail.
- Current gate assignment for our operation.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting — confirm current Taxiway Charlie status), ATIS config/wind trend, deicing-facility status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **NAV CANADA — Aeronautical Information Publications** — https://www.navcanada.ca/en/aeronautical-information/publications.aspx (retrieved 2026-07-26).
- **CZUL (VATSIM Canada vACC) — CYUL Pilot Briefing, 2024** — https://czul.ca/pdf/CYUL_2024_Pilot_Briefing.pdf (retrieved 2026-07-26). *Network-sim document — STAR names, runway roles, apron control structure, gate allocation.*
- OurAirports — https://ourairports.com/airports/CYUL/runways.html (retrieved 2026-07-26). *Runway-length cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from NAV CANADA (CFS/CAP); K Global fields from live VAMSYS; 4-page pack. |
