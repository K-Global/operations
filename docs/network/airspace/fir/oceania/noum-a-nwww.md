# Nouméa (NWWW) — FIR Briefing

**Scope:** the **New Caledonia airspace sector** (SNA-NC — Service de la Navigation Aérienne Nouvelle-Calédonie, French DGAC/DSNA) — controlled airspace over New Caledonia's Grande Terre and the Loyalty Islands, from the ground to FL245 · **Parent area brief:** [Oceania](../../oceania.md) 🟩 · **Adjacent FIRs:** Nadi (NFFF, Fiji) — the FIR of record this sector sits inside · Brisbane (YBBB, Airservices Australia) — oceanic sector to the W (Coral Sea) · Auckland Oceanic (NZZO, Airways NZ) — S
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me — reconciliation flag, verified this pass:** 🟥 **"Nouméa FIR" is not a distinct ICAO-recognised FIR in the sourcing reachable this pass.** ICAO's own **New Caledonia PBN Plan** states plainly: *"Airspace managed by SNA-NC, the New Caledonia sector, is located inside the [Nadi] FIR (NFFF)... from the ground to flight level FL245."* The controlled sector around Nouméa/La Tontouta is **delegated French-administered airspace inside the Fiji-run Nadi FIR**, not an independent FIR of its own. This matches how the [NWWW airport brief](../../../destinations/oceania/new-caledonia/nwww/index.md) already describes it ("Nouméa/Tontouta sector... handoff to/from Nadi (NFFF) and Brisbane (YBBB) oceanic sectors") — **no change made to that file.** This document is filed under the FIR template, per network convention (VATSIM/IVAO simulate a "NWWW" position and the airport code is commonly used as shorthand for the sector), for consistency with the rest of the Oceania FIR set — but it should be read as **"the New Caledonia sector within Nadi FIR,"** not a peer FIR to Brisbane/Melbourne/Auckland. 🟧 **"Magenta ACC" (from the build brief) could not be corroborated as a real facility name in any reachable source** — Magenta is the historic **domestic** airport at Nouméa (IATA GEA, ICAO NWWM), scheduled to **close in March 2026 with all traffic transferring to La Tontouta** per a November 2025 government announcement; it is not documented as an ATC centre. The controlling authority is **SNA-NC** (French DGAC/DSNA), based in the Nouméa/Tontouta area. See §12.
>
> ⚠️ **Shared-code note (as flagged in the build brief):** **NWWW** is the ICAO code for **La Tontouta International Airport** (the aerodrome) and is also the colloquial/network shorthand for **"the Nouméa sector"** (the airspace). The two are not the same thing — the airport brief covers the aerodrome; this brief covers the surrounding controlled airspace, which is administratively part of Nadi FIR (NFFF). 🟧
>
> Strategic transit reference for the sim, not a chart or clearance. This is a **procedural, no-radar sector** — ATC service is based on strategic separation between instrument flight procedures, not radar vectoring; surveillance is being built out via **ADS-B/WAM** (since 2010, WAM completion targeted 2019). Routings and levels here are planning context — file and fly the SimBrief/current-AIRAC-validated route and comply with tactical ATC clearances. Live restrictions are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / UIR ident | **NWWW** used as sector shorthand; **administratively inside the Nadi FIR (NFFF)**, ground–FL245, per ICAO's New Caledonia PBN Plan. No separate upper FIR/UIR confirmed in reachable sourcing 🟧 |
| Controlling ATSU / ANSP | **SNA-NC** (Service de la Navigation Aérienne Nouvelle-Calédonie), part of the French **DGAC/DSNA** structure; regulator **DGAC** (France) / **Direction de l'Aviation civile en Nouvelle-Calédonie** locally |
| Airspace class & vertical limits | 🟧 Controlled New Caledonia sector from the ground to **FL245** (per ICAO PBN plan); class structure not confirmed this pass — verify against **AIP PAC-N ENR 2.1** |
| RVSM | 🟧 Regional RVSM (**FL290–FL410**) applies to transiting traffic above the New Caledonia sector per the wider SW Pacific/ICAO Pacific RVSM programme — see OM E §5; New Caledonia sector itself tops out at FL245, below the RVSM band |
| PBN environment | 🟩 **RNP-based** (no radar, no DME network — **GNSS is mandatory** for PBN procedures): RNP APCH at all serviced aerodromes, RNP 1 SID/STAR at La Tontouta/Magenta (2018-19 tranche) and the TMA-equipped Loyalty Island fields (2020-21 tranche); a domestic RNP 1/RNP 2 ATS-route network is the 2022-23 objective — see OM E §5 |
| Surveillance & datalink | 🟥 **No primary/secondary radar.** ADS-B deployed since 2010; **Wide Area Multilateration (WAM)** targeted for service ~2019 to enable 10 NM separation; until then, ATC is **procedural** (strategic separation between flight procedures) |
| Primary language & comms | 🟩 **French/English**; VHF ground-air coverage is "very good" per SNA-NC but with **terrain gaps** in places; HF used at the oceanic boundary toward Nadi/Auckland |
| Key hazard(s) | **No-radar procedural control** (navigation-accuracy-dependent separation); **GNSS-sole-means dependency** (no DME backup network); South Pacific **tropical-cyclone season (Nov–Apr)**; single-runway-type isolation at La Tontouta for diversion planning |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟥 | **Procedural — no primary/secondary radar.** Separation is strategic, calculated between instrument flight procedures. ADS-B/WAM build-out is improving surveillance but was not confirmed complete in reachable sourcing. |
| Communication coverage & language | 🟧 | French/English; VHF "very good" per SNA-NC but **terrain can create gaps**; confirm current coverage map at planning. |
| Datalink / surveillance requirement | 🟧 | No CPDLC confirmed at La Tontouta per the airport brief; oceanic legs toward Nadi/Auckland pick up ADS-C/CPDLC (FANS-1/A) once outside the New Caledonia sector — see OM E §5. |
| Terrain / MORA / driftdown | 🟧 | Rolling terrain typical of Grande Terre; **no verified close-in high-terrain/MORA data obtained this pass** — verify against a primary AIP chart (matches the open item already flagged in the NWWW airport brief). |
| Diversion-aerodrome coverage | 🟧 | Sparse — nearest company-preferred alternates are **Nadi (NFFF/NFFN), Fiji**, a genuine oceanic distance away; see the [Oceania area brief](../../oceania.md) §8 for the region-wide diversion picture. |
| Special-use airspace (military / danger) | 🟧 | French military facilities present (Base aérienne 186 at Tontouta); no danger/restricted-area detail confirmed this pass. |
| Equipment / approval (RVSM, PBN, GNSS) | 🟥 | **GNSS is the sole PBN positioning source** (no DME infrastructure) — a genuine equipment/contingency consideration if GNSS is degraded. RNP APCH/RNP 1 procedures defined in OM E; confirm current-AIRAC route/levels. §5. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** the **New Caledonia sector**, managed by **SNA-NC**, covers **Grande Terre (the main island), the Loyalty Islands (Lifou, Maré, Ouvéa, Tiga) and Île des Pins** — French overseas territory in the SW Pacific. Per ICAO's New Caledonia PBN Plan, this sector is **located inside the Nadi FIR (NFFF)**, i.e. it is Fiji-administered airspace of record with air traffic services delegated to France/SNA-NC.
- **Vertical split:** 🟥 the New Caledonia sector is bounded **from the ground to FL245** (per the ICAO PBN plan); traffic above FL245 transitions to the **Nadi FIR's own upper structure / adjacent oceanic FIRs** — this upper-level detail was **not confirmed** in reachable sourcing this pass. Verify against **AIP PAC-N ENR 2.1**.
- **Adjacent FIRs (by boundary):**
  - **Parent — Nadi (NFFF), Fiji.** The New Caledonia sector sits inside Nadi FIR; Nadi is the FIR of record for oceanic clearance/coordination purposes beyond the delegated sector.
  - **W — Brisbane (YBBB), Airservices Australia.** Coral Sea oceanic sector; the [Brisbane FIR brief](brisbane-ybbb.md) and the NWWW airport brief both note the handoff to/from Brisbane oceanic on trans-Tasman/Coral Sea routings.
  - **S — Auckland Oceanic (NZZO), Airways NZ.** South-bound routings toward New Zealand transition through NZZO.
- **Sectorisation:** 🟧 no internal ACC sector breakdown confirmed for the New Caledonia sector in reachable sourcing — treat as a single procedural sector pending AIP verification.

---

## 4. Control & ATSU

- **Controlling authority:** 🟩 **SNA-NC (Service de la Navigation Aérienne Nouvelle-Calédonie)**, the local arm of the French **DGAC/DSNA**, provides ATS for the New Caledonia sector. 🟧 The task brief's "Magenta ACC" naming is **not corroborated** — no source found for a facility by that name; Magenta (NWWM) is the domestic airport, closing March 2026 with traffic moving to La Tontouta.
- **Parent FIR coordination:** 🟩 as a delegated sector inside **Nadi FIR (NFFF)**, oceanic-clearance and boundary coordination for traffic entering/leaving the New Caledonia sector is with **Nadi (Fiji)**, not a standalone New Caledonia oceanic centre.
- **FIS:** SNA-NC provides flight information service across the sector; VHF ground-air contact is described as generally good but with local terrain gaps.
- **Surveillance basis:** 🟥 **no primary/secondary radar** — ADS-B since 2010, **WAM** targeted ~2019 for a 10 NM separation standard; until fully realised, separation is procedural (strategic, between flight procedures).

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in the New Caledonia sector and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟧 the regional Pacific RVSM band (**FL290–FL410**) applies to traffic transiting above the sector; the sector's own ceiling (FL245) sits below the RVSM floor. See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟥 **RNP-based, GNSS-sole-means** — no DME infrastructure supports PBN in New Caledonia, so **GNSS is mandatory** for RNP operations. **RNP APCH** is the approach standard (baro-VNAV; no SBAS available regionally); **RNP 1** SID/STAR at La Tontouta and Magenta; a domestic **RNP 1/RNP 2** ATS-route network is targeted for 2022-23. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **8.33 kHz channel spacing:** 🟧 not confirmed as applicable — standard VHF channel spacing assumed pending AIP verification.
- **Datalink (CPDLC/ADS-C):** 🟧 **not confirmed at La Tontouta** (per the airport brief, "no CPDLC at this field"); ADS-C/CPDLC (FANS-1/A) applies once a flight transitions into the surrounding Nadi/Brisbane/Auckland oceanic structure. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟩 **ADS-B deployed since 2010** as the region's surveillance-modernisation path (ahead of full WAM/radar-equivalent separation); confirm current transponder-equipage requirement at planning.

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** SNA-NC/Tontouta provides ATS for the sector; exact frequencies are AIRAC-dependent — fly the current AIP PAC-N frequencies, not a stored table. The NWWW airport brief already flags an outage NOTAM affecting the A/G facility "Tontouta INFO" (3023/5680 kHz, sfc–FL245) as a live item — pull current NOTAMs at planning, not from this durable brief.
- **Oceanic handoff:** 🟧 **HF/SATVOICE/CPDLC** once transitioning into Nadi/Brisbane/Auckland oceanic sectors beyond the New Caledonia boundary.
- **Language:** 🟩 **French primary, English available** for international IFR traffic.
- **Emergency / guard:** **121.5 MHz** guard; regional South-Pacific air-to-air per the [Oceania area brief](../../oceania.md) §5 (123.45 MHz general oceanic convention — verify locally).

---

## 7. Route structure & entry/exit

- **Domestic network:** 🟧 a conventional-navaid-based ATS route network is retained as backup for non-PBN-equipped aircraft (mainly domestic/inter-island types) alongside the emerging PBN route structure; the 2022-23 PBN plan targets a fully ordered domestic RNP network.
- **International/oceanic routes:** 🟧 international traffic connects via the entry/exit points toward **Nadi (NFFF)**, **Brisbane (YBBB) oceanic**, and **Auckland Oceanic (NZZO)** — the SimBrief/current-AIRAC route provides the exact string; oceanic clearance applies once outside the sector.
- **Major fixes / entry-exit points:** 🟧 not itemised in reachable sourcing this pass — the NWWW airport brief lists a **"POGO" SID/route** connecting La Tontouta and Magenta (NWWM) directly; broader entry/exit fixes toward Nadi/Brisbane/Auckland were not corroborated — verify against AIP PAC-N ENR.
- **Aerodromes inside the sector:** **Nouméa–La Tontouta (NWWW, K Global-served)**, Nouméa–Magenta (NWWM, domestic, **closing March 2026**), Île des Pins, Koné, Koumac, Touho, Belep, Lifou, Ouvéa, Maré, Tiga.

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟧 Grande Terre has a rolling, hilly-to-mountainous spine but **no verified close-in high-terrain/MORA figures were obtained this pass** — this matches the same open item already flagged in the [NWWW airport brief](../../../destinations/oceania/new-caledonia/nwww/index.md) §2. Verify MSA/MORA against a primary AIP chart before relying on it.
- **Boundary terrain:** none of operational significance across the Nadi/Brisbane/Auckland Oceanic boundaries — surrounding areas are oceanic.
- **Driftdown / depressurisation escape:** 🟧 not quantified this pass; the binding constraint for the sector is **sparse diversion coverage** (§9) rather than terrain.
- **Cold-temperature altitude corrections:** not applicable — tropical, sea-level aerodrome environment.

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Nouméa — La Tontouta | **NWWW** | K Global-served hub/destination | [NWWW brief](../../../destinations/oceania/new-caledonia/nwww/index.md) |
| Nadi Intl | **NFFF/NFFN** | Company-preferred alternate (Fiji) | Brief to build 🟧 — see the [Oceania area brief](../../oceania.md) §8 |

- **Coverage note:** 🟥 **sparse** — the nearest company-preferred alternates (Nadi, Fiji) are a genuine oceanic distance from La Tontouta; standard oceanic-alternate planning applies to every leg into/out of this sector (already noted in the NWWW airport brief §"Nearest suitable alternates").

---

## 10. Special-use airspace

- **Military:** 🟧 **Base aérienne 186 "Nouméa"** (French Air and Space Force) is co-located at La Tontouta; military stand/apron restrictions are an active NOTAM item (see the NWWW airport brief) but no broader danger/restricted-area detail was confirmed this pass.
- **Overflight-permit / diplomatic considerations:** 🟩 none identified for normal international ops into New Caledonia (French overseas territory, standard Schengen-adjacent/French customs regime at La Tontouta).
- **Oceanic considerations:** 🟧 no SUA of note in the surrounding oceanic approaches; standard oceanic-clearance discipline applies once outside the sector (§7/§11).

> **SUA currency:** re-check active NOTAM status for the shared military apron/stand restrictions and any AIP PAC-N special-use areas at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** 🟧 no New Caledonia-specific comms-failure procedure confirmed this pass — apply the French/regional AIP PAC-N ENR 1 rule and squawk **7600**; verify at planning.
- **Weather-deviation / in-flight contingency:** 🟧 **procedural (no-radar) environment** — request a revised clearance via the available A/G facility where possible; oceanic deviation procedure applies once in Nadi/Brisbane/Auckland Oceanic airspace. Squawk **7700** and declare for emergencies.
- **Seasonal hazards (durable):**
  - **South Pacific tropical-cyclone season — 🟥 Nov 1–Apr 30 (peak Jan–Mar).** New Caledonia sits within the **RSMC Nadi** area of responsibility — already the lead hazard flagged in the NWWW airport brief §"Seasonal hazards."
  - **GNSS dependency:** with no DME backup network, a GNSS outage/degradation is a materially larger operational event here than in a DME-supported FIR — carry conventional-navaid contingency awareness.

> **Pull at planning (T-2h):** enroute NOTAMs (incl. the standing A/G-facility and RFF-hours NOTAMs already active at La Tontouta), SIGMET/AIRMET, **RSMC Nadi** cyclone bulletins, oceanic-clearance requirements for the Nadi/Brisbane/Auckland legs, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- **Reconciliation — flagged this pass:** "Nouméa FIR" is **not** a distinct ICAO FIR per the ICAO New Caledonia PBN Plan — it is the **New Caledonia sector delegated within Nadi FIR (NFFF)**, ground–FL245. This brief is filed as "Nouméa (NWWW)" for network/template consistency but should be read with that caveat. No change made to the NWWW airport brief, which already frames it correctly.
- **"Magenta ACC" naming — unconfirmed.** No source found for an ATC facility by this name; controlling authority is **SNA-NC**. Correct if a primary AIP source surfaces a different official designation.
- **Airspace class structure and exact upper boundary/handoff** above FL245 — not confirmed; verify against AIP PAC-N ENR 2.1/ENR 2.2.
- **CPDLC availability** at La Tontouta / within the sector — the airport brief states none confirmed; verify current AIP.
- **WAM completion status** (targeted ~2019 per the 2018 ICAO PBN plan) and current separation standard (procedural vs 10 NM WAM-based) — confirm current state, this plan is now several AIRAC cycles old.
- **Nouméa-Magenta (NWWM) closure, March 2026** — confirm current status/impact on the "POGO" SID/route between La Tontouta and Magenta noted in the airport brief.
- **Diversion brief for Nadi (NFFF/NFFN)** not yet built — build given it is the company-preferred alternate.
- Terrain/MORA figures for the sector — not obtained this pass (matches the open item already in the NWWW airport brief).

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **ICAO — "New Caledonia PBN Plan" (V1.0, Dec 2018)** (authoritative statement that the New Caledonia sector, managed by SNA-NC, is located inside the Nadi FIR (NFFF), ground–FL245; procedural/no-radar control; GNSS-sole-means PBN; RNP APCH/RNP1/RNP2 deployment schedule; ADS-B since 2010, WAM ~2019) — https://www.icao.int/safety/pbn/PBNStatePlans/PBN%20plan_New%20Caledonia_V1.0.pdf (retrieved 2026-07-26). Primary source of record for the FIR-delegation fact.
- **This tree — NWWW airport brief** (Nouméa/Tontouta sector description; French DGAC/DSNA ANSP; handoff to/from Nadi (NFFF) and Brisbane (YBBB) oceanic sectors; no CPDLC confirmed; RSMC Nadi cyclone season) — [`NWWW — Briefing.md`](../../../destinations/oceania/new-caledonia/nwww/index.md) (internal cross-check, retrieved 2026-07-26).
- **Voyages d'Affaires — "New Caledonia to transfer all air traffic to Nouméa La Tontouta"** (Nov 2025 announcement: Magenta domestic airport to close, traffic moves to La Tontouta, effective March 2026) — https://www.voyages-d-affaires.com/en/new-caledonia-noumea-la-tontouta (retrieved 2026-07-26). *Tier-4 news corroboration for the Magenta-closure fact; verify against an official DGAC/SNA-NC notice before relying on it operationally.*
- **Wikipedia — "Nouméa Magenta Airport"** (Magenta as the domestic hub, IATA GEA/ICAO NWWM, ~38 km from La Tontouta) — https://en.wikipedia.org/wiki/Noum%C3%A9a_Magenta_Airport (retrieved 2026-07-26). *Tier-4 corroboration.*
- **Fiji Meteorological Service (RSMC Nadi) & Australian BoM — South Pacific tropical-cyclone season** (Nov 1–Apr 30, peak Jan–Mar; New Caledonia within RSMC Nadi AoR) — https://www.met.gov.fj/ and https://www.bom.gov.au/climate/cyclones/south-pacific/ (retrieved 2026-07-26).
- **Oceania area brief cross-reference** — region-wide RVSM/PBCS/oceanic-clearance context, Brisbane/Nadi/Auckland Oceanic adjacency — see [Oceania area brief](../../oceania.md) for citations (not repeated here).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial FIR brief; built from public/AIP sources. Covers the **New Caledonia (Nouméa/Tontouta) sector**, verified via ICAO's own New Caledonia PBN Plan to be **delegated airspace inside the Nadi FIR (NFFF)** (ground–FL245), not a standalone ICAO FIR — filed under this name for network/template consistency, with the caveat recorded prominently. Procedural/no-radar control (ADS-B since 2010, WAM targeted ~2019); GNSS-sole-means PBN (no DME network); RNP APCH/RNP1 deployment schedule; sparse diversion coverage (nearest alternate Nadi, Fiji); South Pacific tropical-cyclone season. **"Magenta ACC" naming flagged as unconfirmed** — controlling authority is SNA-NC (French DGAC/DSNA); Magenta (NWWM) is the domestic airport, closing March 2026 with traffic moving to La Tontouta (tier-4 news source, to reconfirm). Shared-code caveat recorded: NWWW = airport code and informal sector shorthand, not an independent FIR. No changes made to the NWWW airport brief. |
