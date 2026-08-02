# EGBB — Birmingham · Departure Page

**EGBB / BHX** · Birmingham (Bickenhill, Solihull), England, United Kingdom · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [EGBB Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **RWY 33** (preferred when dry, wind ≤5 KT at the RWY 33 anemometer) 🟧; RWY 15 by ATC request/operational reasons |
| Config logic | Wind/surface-condition driven — single runway, no configuration choice beyond direction |
| Transition altitude | 6,000 ft |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | IATA Level 3 slot-coordinated (ACL); standard UK ATFM expected in regulated periods 🟧 |
| De-icing on departure | Available by arrangement with handling agents, H24 seasonal service |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From Terminal Apron North (Stands 40–60) or South (Stands 1–25), or the Elmdon Apron (501–506), Ground/Delivery routes toward the assigned runway threshold via the lettered taxiway system (A through Y); confirm the exact routing with Ground on the day.
- **Hot spots / tight taxiways:** 🟥 **Taxiway D between D4 and D5 is restricted to 42 m maximum wingspan** — any aircraft exceeding this is routed via Taxiway E instead; confirm assigned routing before push-back. **Taxiways T and U, and Stands 81–86, are closed** Mon–Sat 2300–0700 / Sun 2300–0800 local except under night-flying-policy exemptions — a late-evening departure routed through this area should expect re-routing in that window. Long-wheelbase types should exercise caution on taxiway curves/intersections generally (main-gear-to-pavement-edge clearance may be limited).
- **Runway crossings / read-back-required points:** Category II/III holding points are located at **A2, AL1 and S2**; Category I/II/III holding points at **E1 and F1** — expect ATC to route departures via the appropriate holding point for current visibility conditions.
- **Low-vis taxi caveats:** ATC Low Visibility Procedures apply when CAT II/III conditions are declared (announced via ATIS/RTF); follow-me is available on request via ATC. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** **RWY 33** is preferred for both arrivals and departures when the surface is dry and the mean wind at the RWY 33 anemometer is ≤5 KT; RWY 15 is used when requested by an operator for stated operational reasons or when wind/surface conditions dictate. 🟧 (sourced to a historical AIP cycle cross-check — re-verify current cycle preferential-runway text.)
- **By departure direction:** RNAV1-capable aircraft routing south from RWY 15 can expect **COWLY 2Y, CPT 2Y, DTY 2Y or WCO 2Y** departure clearances; a dedicated **MOSUN** procedure exists for turboprop aircraft joining/leaving MOSUN at FL160 or below.
- **Noise / preferential-runway program:** Published Noise Preferential Routings (NPRs) apply to all departing jet aircraft and any aircraft over 5,700 kg MTWA — routes are structured to avoid the congested areas of Hampton-in-Arden and Balsall Common (SE) and Dorridge, Knowle and Hockley Heath (SW) unless on radar vectors. After take-off, pilots should not initiate any turn below 500 ft QFE.
- **Interaction with arrivals:** Single-runway field — departures and arrivals share the same runway, so sequencing (not parallel-runway independence) governs the interaction; no separate departure runway exists.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| MOSUN procedure | 15 | Turboprop-only; joining/leaving MOSUN at FL160 or below | Named-only; if the aerodrome DME (I-BIR) is unserviceable, an alternate DME HON-referenced routing applies |
| COWLY 2Y / CPT 2Y / DTY 2Y / WCO 2Y | 15 (southbound) | RNAV1 required 🟧 | Issued to RNAV1-capable aircraft routing south; non-RNAV1 aircraft file via the conventional route structure |
| BRUMI-linked routing | 15 | Not confirmed in reachable research pass 🟧 | Referenced in network-sim/secondary sources alongside RWY 15 southbound logic — verify against current AIRAC |

*All names sourced from a mix of current and recent-cycle AIP/secondary material — pull the live current-AIRAC SID list before use.*

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** RWY 15 departures climb straight ahead to 1.5 NM DME I-BIR or 500 ft QFE (whichever is later) before any turn, per the applicable routing table (or 4.5 NM DME HON / 500 ft QFE if the aerodrome DME is unserviceable); RWY 33 departures climb straight ahead to 2 NM DME I-BM or 500 ft QFE (whichever is later) before turning either direction as instructed by ATC (9 NM DME HON if I-BM is unserviceable). Turn direction is chosen, as far as possible, to avoid surrounding built-up areas.
- **Noise-abatement departure procedure (NADP):** Every jet aircraft must achieve at least **500 ft/min rate of climb** after take-off/go-around, at power settings giving progressively decreasing noise below the flight path — a rate-of-climb-based NADP requirement rather than a named NADP1/2 selection. No fleet-wide NADP1-vs-NADP2 mandate confirmed; Birmingham is reported to have trialled a comparison in 2018 with limited conclusions. 🟧
- **Early turn / altitude constraints:** No turn before 500 ft QFE after take-off; specific NPR turn-track constraints depend on the assigned SID/routing table (§3/§4) — verify current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat West Midlands plain — no significant close-in terrain. The approach/take-off obstacle table lists low, expected obstacles (trees, hedges, lamp posts, a gantry, the ILS localizer/monitor structures) in both runway funnels, generally under 90 ft AGL; the wider circling area holds taller masts/pylons/cranes up to roughly 550–640 ft AGL several NM out — see [Briefing §3.1](index.md) for the crane-status caveat. None of this constitutes a close-in CFIT threat, but obstacle-lit status should be NOTAM-checked before a low-visibility departure.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** CAT II/III procedures apply on both runway ends subject to facility serviceability; ATC Low Visibility Procedures are announced via ATIS/RTF when in effect. Exact LVTO RVR minima not confirmed this pass. 🟧
- **De-icing:** Available by arrangement with the handling agents, published H24 as a year-round seasonal service; no dedicated centralised remote pad layout confirmed (unlike some larger hub fields) — confirm current provisioning/location with the handling agent on the day. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** **Birmingham Delivery 121.930** (H24). ATC clearance may be obtained by Voice RTF or Datalink Departure Clearance Service (DCL); do not request clearance/SID information earlier than **EOBT-19 minutes**. Departing aircraft state type, stand number and the code letter of the latest ATIS received; report ready for start with Delivery, then proceed as directed by ATC.
- **Frequency sequence:** **Delivery 121.930 (H24) → Ground 121.805 (on request) → Tower 118.305 (H24) → Birmingham Radar 123.980 (H24) / 131.330 (as directed) or Birmingham Director 131.005 (as directed).** Take the assigned frequency and confirm current chart. (Frequencies from [Briefing §8](index.md).)
- **CTOT / slot handling:** **IATA Level 3 slot-coordinated** (ACL); comply with any assigned CTOT/EDCT-equivalent. Night departures are additionally governed by the Night Quota Allocation local rule (Dispatch §4). 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Both directions of the single runway (declared TORA 3,004 m) are non-limiting for the K Global R-category fleet; note the **displaced thresholds do not affect take-off distance available**, only LDA — no field-length concern on departure.
- **Density altitude / temperature:** Non-issue at 339 ft, temperate UK climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Standard UK winter de-icing season is the relevant seasonal consideration (§7); the AIP separately warns of standing water on the runway edge between Taxiways Foxtrot and Bravo when the surface is reported wet — a runway-edge, not centreline, hazard. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty identified for the K Global R-category fleet at EGBB.

---

## 10. Gotchas

- **Taxiway D between D4 and D5 is wingspan-limited to 42 m** — confirm routing via Taxiway E if the assigned type exceeds this.
- **Self-manoeuvring on Terminal Apron stands is prohibited** without separate Airfield Operations approval — plan for a mandatory push-back/tow.
- **Birmingham does not accept the A340-600** at all (taxiway-curve limitation) — a standing field restriction, not a type K Global currently operates here, but worth knowing.
- **RWY 33 is the default preferred runway** (dry, ≤5 KT) — do not assume RWY 15 without a stated operational reason or contrary wind/surface state. 🟧
- **Taxiways T/U and Stands 81–86 close overnight** (Mon–Sat 2300–0700, Sun 2300–0800 local) — a late-evening departure routed through this area should expect a re-route.
- **No turn below 500 ft QFE after take-off** — a hard NPR/noise-abatement constraint, not just good practice here.
- **Building-induced turbulence/wind shear** is AIP-warned in strong-wind conditions given runway orientation — brief accordingly on a gusty day.
- **Single runway, no redundancy** — any runway-availability event (weather, disabled aircraft, contamination) stops all departures, unlike a multi-runway field.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway (COWLY/CPT/DTY/WCO 2Y and MOSUN procedure sourced to a mix of current and recent-cycle material).
- Take-off minima exact figures.
- Preferential-runway rule (RWY 33 default) — re-verify against the current (2026-03-19) AIRAC cycle text, not fully reachable in this research pass.
- LVTO RVR minima and follow-me/SMGCS specifics.
- EOSID/engine-out procedure detail per runway.
- De-icing pad location/provisioning detail.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. Taxiway D restriction status and Taxiway T/U night-closure status), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **NATS UK eAIP, AD 2 EGBB**, AIRAC effective 2026-03-19 — https://www.aurora.nats.co.uk/htmlAIP/Publications/2026-03-19-AIRAC/html/eAIP/EG-AD-2.EGBB-en-GB.html (retrieved 2026-07-26). *Communications, transition altitude, DCL timing.*
- **NATS UK eAIP, AD 2 EGBB**, AIRAC effective 2022-06-16 (historical cycle cross-check) — https://www.aurora.nats.co.uk/htmlAIP/Publications/2022-06-16-AIRAC/html/eAIP/EG-AD-2.EGBB-en-GB.html (retrieved 2026-07-26). *Taxiway D restriction, ground-movement rules, preferential runway, NPR/departure routing, holding-point locations.*
- IVAO Documentation Library — "Birmingham (EGBB)" local procedures — https://wiki.ivao.aero/en/home/divisions/xu/atc/aerodrome/local-procedure/midlands/egbb (retrieved 2026-07-26). *Network-sim, not regulatory — MOSUN/BRUMI procedure cross-check.*
- VATSIM UK — "EGBB | Birmingham" airfield information — https://www.vatsim.uk/airports/EGBB (retrieved 2026-07-26). *Network-sim, not regulatory — transition altitude/release-point cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from UK AIP (NATS AIS); K Global fields from live VAMSYS; 4-page pack. |
