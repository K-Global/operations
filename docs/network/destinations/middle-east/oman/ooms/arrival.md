# OOMS — Muscat Intl · Arrival Page

**OOMS / MCT** · Seeb, Muscat, Oman · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [OOMS Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Not published — presumed wind-driven between the **08L/26R** and **08R/26L** parallel pair 🟧 |
| Usual approach | **ILS CAT II** on 08L/26R; approach on 08R/26L exists per current-AIRAC chart index but category/minima not confirmed 🟧 |
| Config logic | Wind-driven (presumed); no published preferential-runway rule found |
| Transition level | Not confirmed — verify current chart 🟧 |
| LVP trigger | CAT II conditions apply; exact RVR trigger not confirmed 🟧 |
| Missed-approach driver | AIP-cited terrain south of the RWY 08L/26R extended centreline (position-awareness item) plus traffic; not a close-in CFIT field |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** RNAV/conventional arrival families named **VUSET, ELIGO, LAKLU, MUSUK, GERAR, TUMET, RADAX**, with **LADBA/MIGMO/NONKA/BUBIL/KANOL** transitions, serve 08L and 26R per a tier-4 procedure-name cross-check — not independently AIP-confirmed this pass. 🟧 Pull the current-AIRAC STAR list at planning.
- **Selection by arrival direction / runway:** Not published — presumed wind-driven between the 08L/26R and 08R/26L parallel pairs. 🟧
- **Transition to approach:** Expect an RNAV-STAR-to-ILS (or RNP/RNAV(GNSS)) transition with Muscat Approach radar vectors onto final; verify the charted transition. 🟧
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 (ICAO norm, assumed) — confirm current chart. 🟧
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes. The published RNP approach final segments to 08L/26R use standard non-precision descent angles (approximately 3.1°) — not a steep-approach field. 🟧
- **Energy traps:** No field-specific energy trap independently sourced beyond general position-awareness south of the 08L/26R extended centreline (§5).

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 08L | ILS (IML) · RNP APCH · RNAV(GNSS) · VOR | **ICAO CAT II** 🟧 | verify current chart |
| 26R | ILS (IMR) · RNP APCH · RNAV(GNSS) · VOR | **ICAO CAT II** 🟧 | verify current chart |
| 08R | ILS or LOC (current-AIRAC chart exists) | Category/minima not confirmed 🟧 | verify current chart |
| 26L | Not confirmed 🟧 | Not confirmed 🟧 | verify current chart |

- **LVP triggers:** CAT II conditions apply on 08L/26R; exact RVR/decision-height minima not confirmed this pass. 🟧 **CAT III is not confirmed at this field** — do not plan on CAT III capability without a current-AIRAC/operator confirmation (see [Briefing §3.5](index.md)).

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟧 Not a close-in mountain-ringed field at the runway itself (48 ft, coastal plain), but the AIP's own comm-failure guidance explicitly cites **terrain south of the RWY 08L/26R extended centreline** and instructs pilots not to proceed through the extended centreline in IMC without positive ATC instruction — cross-ref [Briefing §3.1](index.md).
- **Specific threats:** 🟧 Closely-spaced/parallel-runway operations between the two pairs (exact runway separation not confirmed); pervasive regional **GNSS jamming/spoofing** (see the [Middle East regional airspace brief](../../../../airspace/middle-east.md)) — brief the DME/DME/IRU cross-check and expect possible FMS position anomalies.
- **Airspace / traffic:** 🟧 Radar environment under Muscat Approach (100 NM range); traffic density is moderate relative to the region's mega-hubs (~96,000 movements/year, 2024) — not independently characterised as a high-density terminal environment.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** No published missed-approach terrain constraint beyond the general extended-centreline terrain caution (§5) — fly the published MAP and verify climb-gradient/turn on the current chart. 🟧
- **Re-sequencing environment:** Not independently sourced — expect standard radar re-sequencing under Muscat Approach.
- **Go-around traps:** None specifically sourced; maintain the same position-awareness discipline south of the extended centreline noted above.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** Overall lengths 08L/26R **4,000 m**, 08R/26L **4,080 m** — **26R threshold displaced 162 m** and **08R threshold displaced 419 m** `[OurAirports, retrieved 2026-07-26]`; exact declared LDA from each threshold not obtained from a primary AD 2.24 table this pass. 🟧 Both runways are non-limiting in overall length for any K Global type regardless of the exact declared figure.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources. 🟧
- **Runway-excursion watch:** 🟧 Displaced thresholds on both runways (§Briefing §3.3) — do not assume full-length landing distance from either displaced end without a current declared-distance confirmation.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not detailed in reachable sources; VAMSYS mirror gives a planning taxi-in time of **10 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** Not confirmed in reachable sources this pass. 🟧 A separately reported **"North Ground" 121.875** frequency (tier-4, unconfirmed) suggests a distinct ground-control sector for the newer 08L/26R apron/taxi zone — not independently confirmed.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — single integrated terminal, ~45 gates/boarding bridges, A380/747-8-capable; specific gate assignment for our operation not confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Muscat Approach/Radar 121.200 → Muscat Tower 118.825 (primary, 2019 AIP cycle — 🟧 a 2026 tier-4 cross-check instead shows 118.4, verify current chart) → Muscat Ground (SMC) 121.800 (primary) / 127.875 (secondary), or "North Ground" 121.875 (unconfirmed) → stand.** Take the assigned frequency and confirm current chart. (Frequencies from [Briefing §8](index.md).)
- **Approach/Departure control:** **Muscat Approach/Radar** provides 100 NM radar coverage `[PACA AIP AD 2.22.2, retrieved 2026-07-26]`; the wider **Muscat FIR (OOMM)** hands off en route and also controls a large Arabian Sea oceanic sector on its southern/eastern flank — see the [Middle East regional airspace brief](../../../../airspace/middle-east.md). 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **Terrain south of the RWY 08L/26R extended centreline** is an AIP-cited caution — do not proceed through the extended centreline in IMC without positive ATC instruction.
- **ILS is CAT II, not CAT III** — do not plan a CAT III-dependent arrival contingency at this field.
- **Displaced thresholds on both runways** — confirm current declared LDA before treating either runway's full length as available from the displaced end.
- **Traffic-circuit direction differs by runway** (26R right-hand, 08L left-hand) — relevant to any circling/visual arrival.
- **Tower frequency has a source discrepancy** (118.825 vs. 118.4) — verify the current chart.
- **Regional GNSS jamming/spoofing** is pervasive — brief the DME/DME/IRU cross-check and expect possible FMS position anomalies on the approach.
- **Not a khareef-season field** — unlike [OOSA — Salalah](../oosa/index.md) in southern Oman, OOMS is not affected by the Arabian Sea SW monsoon; do not import Salalah's seasonal low-ceiling/drizzle risk picture to Muscat planning.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- 08R/26L approach category/minima (chart exists, content not retrieved this pass).
- Exact LVP/CAT II trigger RVR values.
- Rapid-exit taxiway/vacate detail.
- Taxi-in routing and gate assignment for our operation.
- Runway-separation distance between the 08L/26R and 08R/26L pairs.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. CAT II equipment status), ATIS config/wind trend, live shamal/dust and GNSS-interference advisories. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **Oman PACA AIP, AD 2.OOMS** (AMDT 2-19, eff. 10 Oct 2019) — ILS/navaid data, radar coverage, comm-failure/terrain guidance — https://uniforce-sog.org/wp-content/uploads/2024/06/OOMS-CHART-AIP.pdf (retrieved 2026-07-26).
- **Oman PACA eAIP** (2026-02-19 cycle) — "ILS or LOC Z RWY 08R" chart index entry — https://aim.caa.gov.om/eAIP_Oman/final/2026-02-19-Non-AIRAC/html/Document/OOMS/ILS%20or%20LOC%20Z%20RWY%2008R.pdf (retrieved 2026-07-26). *Confirms chart existence only; content not retrieved (JS-gated frameset).*
- PilotNav — STAR name cross-check (tier-4) — https://www.pilotnav.com/airport/OOMS (retrieved 2026-07-26).
- OurAirports — runway/frequency cross-check — https://ourairports.com/airports/OOMS/runways.html , /frequencies.html (retrieved 2026-07-26).
- [Middle East regional airspace brief](../../../../airspace/middle-east.md) — Muscat FIR (OOMM) structure, GNSS jamming/spoofing.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
