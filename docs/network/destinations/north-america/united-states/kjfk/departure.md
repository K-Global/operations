# KJFK — John F Kennedy International · Departure Page

**KJFK / JFK** · Queens, New York City, New York, United States · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [KJFK Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | No single default — wind, demand and the converging RWY 13R/22L dependency jointly drive the config; N90/JFK Tower assign the active runway(s) |
| Config logic | Wind/traffic/dependent-operations driven across four possible runways (04L, 04R, 13L/R, 22L/R, 31L/R) — not a simple two-runway reciprocal choice |
| Transition altitude | 18,000 ft MSL (US standard) — verify no local override on current chart |
| Take-off minima | Not itemised in reachable extract — verify current AIRAC 🟧 |
| CTOT / flow regime | **FAA-Order scheduling cap (81/hour, 0600–2259 local)**; EDCT/ground-delay common in practice given N90 airspace density 🟥 |
| De-icing on departure | Assumed seasonal availability (Northeast-US winter climate); provisioning not confirmed 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** JFK's taxiway system is extensive (the "Bay" taxiways plus the central A/B/K/J complex) and historically associated with long taxi times — reflected in the VAMSYS 22-minute taxi-out planning figure. Confirm the exact routing with Ground on the day; routing will differ materially depending on which of the two intersecting runway pairs (04/22 vs 13/31) is active for departure.
- **Hot spots / tight taxiways:** 🟥 **Official Chart Supplement Hot Spot HS1 — Twy K/Twy J complex intersection, close proximity to RWY 04L and RWY 31L** `[FAA Chart Supplement NE vol, cycle eff. 2026-03-19–2026-05-14]` — re-verify against the current cycle. The AIP separately reports **RWY 31R holding-position markings at the RWY 4L/22R junction obscured (SE side)** and **RWY 13L holding-position markings at the same junction obscured (NW side)**. **Bldg 73 apron ramp is closed to wingspan >171 ft except under tow** (captures the A330-900neo — confirm alternate routing with Ramp/Ground). **Twy A between Twy NA and Twy NB carries a 17 kt/20 mph speed restriction that names the A330 explicitly.** **Aircraft may not stop on either the Twy A or Twy B bridges.**
- **Runway crossings / read-back-required points:** Given the intersecting non-parallel runway layout, expect runway-crossing instructions between the two pairs more often than at a simple parallel-runway field — read back every crossing clearance precisely.
- **Low-vis taxi caveats:** SMGCS/low-vis taxi routing applies in reduced-visibility conditions; follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** No single preferential runway is published in reachable sources; N90/Tower select the active configuration from among 04L, 04R, 13L, 13R, 22L, 22R, 31L, 31R based on wind, demand and the converging RWY 13R/22L dependency (Briefing §3.2). Pull the current ATIS configuration at planning — do not assume a "usual" runway.
- **By departure direction:** Eastbound/oceanic departures and westbound/transcontinental departures are radar-vectored from whichever runway is active onto the appropriate SID transition; the field's geometry means the departure runway is not necessarily aligned with the great-circle track.
- **Noise / preferential-runway program:** Historic secondary-source material references a RWY 22R noise-abatement climb (the "Kennedy Climb," intercepting the JFK R-232) and a steep post-departure turn off RWY 31L to reduce noise over Canarsie — **neither is confirmed as a currently charted/named procedure** in this build pass; do not assume either survives on the current AIRAC without verification. 🟧
- **Interaction with arrivals:** Departures interact with the dependent/converging arrival stream between RWY 13R and RWY 22L (Briefing §3.2) — expect sequencing and possible runway-crossing delay tied to the arrival flow on the intersecting pair.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| KENNEDY FIVE | Multiple | Conventional (non-RNAV) | Long-standing basic vector SID |
| SKORR FIVE (RNAV) | Multiple | RNAV — likely RNP-1 equipage 🟧 | |
| DEEZZ FIVE (RNAV) | Multiple | RNAV — likely RNP-1 equipage 🟧 | |

*Historic conventional SIDs (BETTE-, GREKI-, HAPIE-, MERIT-series) are reported retired/replaced by the RNAV procedures above in secondary sources — **do not assume any historic SID name is current** without checking the day's chart. 🟧 No unusual (hot-and-high-style) climb gradients expected at sea level.*

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (US standard) and Class B speed constraints within the JFK Class B — confirm current chart.
- **Noise-abatement departure procedure (NADP):** JFK is a noise-sensitive airport (restrictions/queries line 212-435-3782, normal business hours); a specific current NADP1/2 preference is not published in reachable sources — apply operator-standard NADP and any charted noise routing. Historic RWY 22R/31L noise-routing references exist but are not confirmed current (§3). 🟧
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart, particularly given the historic steep-turn reputation of departures off the 13/31 pair.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics found in reachable sources — apply the operator/type EOSID for the assigned runway. Sea-level, bay-fill field with low close-in obstacle exposure. 🟧
- **Close-in / distant obstacles:** No close-in high terrain (Briefing §3.1). The reported low-level VFR traffic corridor and para-sail/banner-towing activity along the shoreline south of the field (Briefing §4) are traffic/obstacle-adjacent considerations for an engine-out routing over that area, rather than terrain. 🟩 terrain / 🟧 traffic-density caveat.
- **Special DP / obstacle DP:** Not itemised in reachable sources — obtain any DVA/ODP figures from the current AIRAC chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not itemised in reachable extract — verify current chart. 🟧
- **De-icing:** Assumed seasonal availability given the Northeast-US winter/nor'easter climate; specific pad/gate provisioning, fluid type and holdover-time detail not confirmed in reachable sources this pass — see [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md). 🟧

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** JFK Clearance/Pre-Taxi Clearance **135.05** (24h); secondary UHF split on 348.6 (Briefing §8).
- **Frequency sequence:** **Clearance 135.05 → Ground 121.9 (South 121.65) → Tower (119.1 for RWY 04R/22L & 13L/31R, or 123.9 for RWY 04L/22R & 13R/31L, per assigned runway) → JFK Approach/Departure 125.7.** (Frequencies from Briefing §8; confirm current chart and assigned runway pair before using the Tower frequency.)
- **CTOT / slot handling:** JFK is FAA-Order scheduled (81 ops/hour cap, §Dispatch §4) rather than tactically slot-metered per movement, but EDCT/ground-delay holds are common in practice given N90 airspace density — read back and comply with any assigned CTOT/EDCT. 🟧 **Ramp metering** (contact Ramp Control prior to pushback, 1200–1500Z and 1900–0300Z daily) also applies during peak banks (Briefing §11).

---

## 9. Performance watch-items for our types

- **Field-length / weight:** All eight runway ends (8,400 ft or longer) are non-limiting for the A330-900 at normal weights — field length is not a performance driver at this fleet type.
- **Density altitude / temperature:** Non-issue at 13 ft MSL — no hot-and-high penalty.
- **Contamination / wet-runway:** Winter nor'easter snow/ice and routine Northeast-US rain are seasonal braking-action considerations; confirm current runway condition/RCC on the OFP and ATIS.
- **Link to OM B:** A330-900neo — no field-elevation or length penalty here; the real fleet-relevant items are the **Bldg 73 wingspan restriction** and the **Twy A speed restriction naming the A330** (§2 above; see also [Fleet Capability Matrix](../../../../../fleet/capability-matrix.md)).

---

## 10. Gotchas

- **JFK has two intersecting, non-parallel runway pairs, not a single reciprocal pair** — do not assume the "obvious" wind-favoured runway will be assigned; converging-ops rules between RWY 13R and RWY 22L can drive an unexpected config.
- **Bldg 73 ramp wingspan restriction (>171 ft, except under tow) captures the A330-900neo** — confirm ground routing with Ramp/Ground before pushback.
- **Twy A between Twy NA/NB carries a 17 kt speed cap that names the A330 explicitly** — do not taxi this segment at normal speed.
- **Ramp metering applies during published peak-bank windows (1200–1500Z, 1900–0300Z daily)** — call Ramp Control before pushback in those windows, not just Ground/Tower.
- **RWY 31R and RWY 13L holding-position markings at the RWY 4L/22R junction are reported obscured** — the same complex central area as official Hot Spot HS1 (Twy K/Twy J) — extra vigilance taxiing/holding through this area.
- **No single "usual" departure runway** — pull the current ATIS configuration; do not plan from a template runway assumption.
- **Historic RWY 22R/31L noise-abatement procedures are not confirmed current** — do not brief them as charted fact without checking the day's SID.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Take-off minima / DVA / ODP exact figures — not in reachable extract.
- Current SID edition numbers and RNP/gradient/equipage requirements per procedure.
- NADP preference and current status of the historic RWY 22R/31L noise routings.
- LVTO minima and follow-me/SMGCS specifics.
- De-icing pad/gate provisioning detail.
- Exact CTOT/EDCT practice at JFK beyond the published 81/hour scheduling cap.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. the Twy Z/Y and Twy D closures noted in the Briefing), EDCT/GDP/CTOT, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **FAA Aeronautical Information Publication (AIP), Part 3, AD 2.0 — New York (KJFK)** — communications, general remarks (ramp metering, wingspan/speed restrictions, obscured holding-position markings, taxiway closures) — https://www.faa.gov/air_traffic/publications/atpubs/aip_html/part3_ad_2.0_new_york.html (retrieved 2026-07-26).
- FAA — Chart Supplement Northeast (NE) volume, Airport Hot Spots, cycle effective 19 Mar 2026 – 14 May 2026 — https://aeronav.faa.gov/afd/19Mar2026/ne_hotspot.pdf (retrieved 2026-07-26).
- FlightAware / GlobalAir procedure indices — KENNEDY FIVE, SKORR FIVE (RNAV), DEEZZ FIVE (RNAV) departure names; retired BETTE/GREKI/HAPIE/MERIT-series SIDs — https://www.flightaware.com/resources/airport/KJFK/procedures (retrieved 2026-07-26). *Tier-4 name corroboration only — verify current chart.*
- AirNavRadar — "Battling Bad Weather & Windshear on the Canarsie Approach to JFK Runway 13L" — https://www.airnavradar.com/blog/battling-bad-weather-windshear-on-the-canarsie-approach-to-jfk-runway-13l (retrieved 2026-07-26). *Secondary corroboration of historic RWY 13/31 procedural character.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from FAA sources; K Global fields from live VAMSYS; 4-page pack. |
