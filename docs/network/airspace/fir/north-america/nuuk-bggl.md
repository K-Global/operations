# Nuuk FIR (BGGL) — FIR Briefing

**Scope:** single FIR — all of **Greenland's airspace** (~4.25 million km²), containing **Kangerlussuaq (BGSF)** and **Pituffik Space Base (BGTL)**, and forming key North-Atlantic and polar ETOPS/EDTO diversion airspace · **Parent area brief:** [Arctic](../../arctic.md) · oceanic companion brief: [North Atlantic](../../north-atlantic.md) · **Adjacent FIRs:** Reykjavik (BIRD, Isavia) E/NE (upper-airspace delegation north of 63°30′N) · Gander Oceanic (CZQX, NAV CANADA) SW (upper-airspace delegation south of 63°30′N) · Edmonton (CZEG, NAV CANADA) W (see [Edmonton (CZEG)](edmonton-czeg.md)) · New York Oceanic (KZWY, FAA) / Gander Domestic S
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Nuuk FIR is **wholly procedural / non-radar** (with the exception of terminal service at BGSF, currently radar-U/S — see §4) and is **key North-Atlantic and polar ETOPS/EDTO diversion airspace**: BGSF (Kangerlussuaq) is the single most relied-upon Greenland NAT alternate, and both Greenland fields sit inside the standardised polar/high-latitude hazard set — magnetic unreliability, fuel-freeze, sparse diversion coverage and space-weather HF/GNSS degradation — fully detailed in [Arctic](../../arctic.md) (not re-derived here). Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical ATC/FIS instructions. Terminal procedures for the aerodromes inside the FIR (BGSF, BGTL) live in the airport briefings (§9). Live restrictions are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR ident | **BGGL** — Nuuk FIR (renamed from "Sondrestrom FIR" in 2015, following relocation of the COM Centre/RCC/FIC from BGSF to Nuuk); ~**4,246,255 km²** — all of Greenland's airspace |
| Controlling ATSU / ANSP | **Naviair** (Denmark) publishes the Greenland AIP and is the FIR's sovereign ANSP. ATS delivery is split: **FIC Sondrestrom** (lower FIS, procedural) plus local APP/TWR at BGSF; **upper airspace above FL195 north of 63°30′N** is delegated to **Avians/Isavia (Iceland)** as part of the Reykjavik Control Area under a **1976 bilateral agreement** with the Kingdom of Denmark 🟧 (exact division of duties between Naviair and Avians for the lower/terminal layer — confirm current service agreement) |
| Airspace class & vertical limits | **At/above FL55 = Class A controlled; below FL55 = Class G uncontrolled.** Upper split at **FL195 (19,500 ft)**: north of 63°30′N delegated to Reykjavik/Avians as the Reykjavik CTA; south of 63°30′N delegated to Gander — see [Arctic](../../arctic.md) §3 |
| RVSM | 🟥 Applicable **FL290–FL410** (NAT HLA upper levels apply over Greenland) — see OM E §5 and [Arctic](../../arctic.md) §4 |
| PBN environment | **RNAV 10 (RNP 10) or RNP 4** for the HLA/remote portion; RNP APCH at BGSF/BGTL — see OM E §5 and [Arctic](../../arctic.md) §4 |
| Surveillance & datalink | 🟥 **Procedural / non-radar** — BGSF's MSSR (radar) is **unavailable since ~late-2025** (NOTAM-confirmed), procedural separation in force; CPDLC + ADS-C (FANS 1/A) per the NAT DLM applies in the upper airspace — see [Arctic](../../arctic.md) §4 |
| Primary language & comms | 🟥 **HF + SATVOICE** primary (Reykjavik Radio / Naviair-designated HF); VHF only near BGSF/BGGH terminals; English | 
| Key hazard(s) | 🟥 **Greenland icecap terrain (~10,500 ft dome)** driving driftdown planning; 🟥 **fuel-freeze (Jet A-1 −47 °C)**; 🟥 **sparse, widely-spaced diversion coverage** (BGTL is a restricted-access US military field — see §9); 🟥 **space-weather HF blackout/GNSS degradation**; 🟩 magnetic-compass unreliability handled via TRUE/grid nav — full detail in [Arctic](../../arctic.md) §4 & §7 (not re-derived here) |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟥 | Wholly procedural; BGSF terminal radar is currently U/S (procedural separation) — confirm current NOTAM status at planning. |
| Communication coverage & language | 🟥 | Long non-VHF stretches; HF + SATVOICE required; English. |
| Datalink / surveillance requirement | 🟥 | NAT DLM CPDLC+ADS-C applies in the upper airspace; procedural position reports substitute where non-equipped or below the datalink floor — see [Arctic](../../arctic.md) §4. |
| Terrain / MORA / driftdown | 🟥 | **Greenland icecap dome ~10,500 ft** is the binding driftdown constraint — full detail in [Arctic](../../arctic.md) §7 (not re-derived here). |
| Diversion-aerodrome coverage | 🟥 | Very sparse. BGSF is the principal reliable alternate; BGTL is a restricted-access US military installation — confirm civil/PPR access before planning as an alternate. See §9. |
| Special-use airspace (military / danger) | 🟧 | BGTL (Pituffik Space Base) is itself a US Space Force installation under the 1951 Greenland Defense Agreement — treat the field and its immediate area as access-restricted, not a routine SUA hazard to avoid. |
| Equipment / approval (RVSM, PBN, TRUE-track, datalink) | 🟥 | RVSM + NAT HLA approval, RNAV10(RNP10)/RNP4, TRUE-track/grid nav where applicable — all defined in [Arctic](../../arctic.md) §4 and OM E; confirm current-AIRAC route. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** Nuuk FIR (**BGGL**) covers **all of Greenland's airspace**, roughly **4.25 million km²**. It was renamed from "Sondrestrom FIR" effective **1 March 2015**, following the 2014 relocation of the COM Centre, Rescue Coordination Centre and Flight Information Centre from BGSF/Kangerlussuaq to Nuuk (the name persists operationally as **"Sondrestrom Information"** for the FIC callsign). 🟧 (exact current FIC callsign/branding — verify Naviair AIP.)
- **Vertical split:** **At and above FL55, Class A controlled; below FL55, Class G uncontrolled.** The FIR's **upper airspace above FL195 (19,500 ft)** is delegated by bilateral agreement rather than worked by Naviair directly:
  - **North of 63°30′N:** delegated to **Avians/Isavia (Iceland)**, forming part of the **Reykjavik Control Area** — roughly **3.7 million km², ~70% of the Reykjavik CTA** — under a **1976 bilateral agreement** between Iceland and the Kingdom of Denmark.
  - **South of 63°30′N:** delegated to **Gander** (NAV CANADA) — see [Arctic](../../arctic.md) §3.
  - This means a Greenland transit's **upper-airspace controlling authority depends on latitude relative to 63°30′N**, even though the FIR/AIP of record throughout is Naviair's BGGL.
- **Adjacent FIRs (by boundary):**
  - **E/NE — Reykjavik (BIRD, Isavia).** Upper-airspace delegation north of 63°30′N (see above); oceanic companion in [North Atlantic](../../north-atlantic.md).
  - **SW — Gander Oceanic (CZQX, NAV CANADA).** Upper-airspace delegation south of 63°30′N; oceanic NAT-track interface.
  - **S — New York Oceanic (KZWY, FAA) / Gander Domestic.** Southern approaches toward the NAT organised-track system.
  - **W — Edmonton (CZEG, NAV CANADA).** The polar hand-off toward western Canada for eastbound Asia–Europe polar traffic (see [Edmonton (CZEG)](edmonton-czeg.md) §3).
- **Sectorisation:** Naviair/FIC Sondrestrom works the lower FIR as a single procedural unit; the upper-airspace split at 63°30′N is the FIR's only internal sectorisation of transit relevance. 🟧 (any further internal sector detail — verify Naviair AIP ENR 2/6.)

---

## 4. Control & ATSU

- **Lower-airspace ATSU:** 🟥 **FIC Sondrestrom** (Naviair) provides flight-information/advisory service across the FIR below the upper-airspace delegation, procedurally (non-radar).
- **Upper-airspace ATSU:** 🟧 delegated per §3 — **Avians/Isavia** (north of 63°30′N, as Reykjavik CTA) or **Gander** (south of 63°30′N).
- **Terminal ATS at BGSF (Kangerlussuaq):** 🟥 BGSF remains **fully ATC-controlled** (Naviair reconfirmed this in a late-2025 AIC after a proposed downgrade to AFIS was cancelled), but its **MSSR (radar) is unavailable** (NOTAM-confirmed, expected to persist), so **procedural separation** is in force at the terminal as well as enroute. **Suluk APS** (a subsidiary of Avians/Isavia) reportedly provides local APP/TWR service at BGSF under a service arrangement. 🟧 (confirm current provider/contract status — the Naviair/Avians service split at BGSF specifically was not independently re-verified in this pass.)
- **Terminal ATS at BGTL (Pituffik Space Base):** 🟧 as a US Space Force installation, ATS/access arrangements are military-controlled — confirm current civil-access and ATC/AFIS status directly; not asserted here.
- **FIS / FSS:** **FIC Sondrestrom** (Naviair) is the FIR's flight-information callsign.
- **Surveillance basis:** 🟥 procedural (non-radar) throughout, including at BGSF's terminal (radar U/S) — position reports at compulsory points via HF/CPDLC/ADS-C.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in Nuuk FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410**, per the NAT HLA / Canadian high-level RVSM framework extended over the Greenland upper airspace. See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟥 **RNAV 10 (RNP 10) or RNP 4** for the HLA/remote portion; **RNP APCH** at BGSF/BGTL. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md) and [Arctic](../../arctic.md) §4.
- **TRUE-track / grid navigation:** 🟩 not separately re-derived here — see [Arctic](../../arctic.md) §4 for the full magnetic-unreliability, TRUE-north and high-Arctic grid-nav treatment, which applies over Greenland as part of the wider high-latitude-domestic system.
- **Datalink (CPDLC):** 🟥 **CPDLC + ADS-C (FANS 1/A)** per the NAT DLM applies in the upper airspace (subject to the 63°30′N delegation split); HF voice position reporting is the fallback where not equipped/contracted. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md) and [North Atlantic](../../north-atlantic.md) §4.
- **ETOPS/EDTO planning:** 🟥 BGSF is the primary Greenland ETOPS/EDTO-relevant diversion; BGTL's restricted access materially affects its usability as a diversion candidate — see [`OM E — ETOPS-EDTO Procedures`](../../../../flight-ops/etops-edto.md) and §9 below.
- **Transponder / ADS-B:** 🟧 ADS-B coverage/mandate specifics over Greenland not independently verified in this pass; procedural separation is the operative method regardless.

---

## 6. Communications & frequencies

- **HF & SELCAL:** 🟥 primary means of communication across the FIR; **Reykjavik Radio** and/or Naviair-designated HF stations serve the Greenland upper/lower airspace depending on the 63°30′N delegation. Perform a **SELCAL check** after first HF contact — full detail in [Arctic](../../arctic.md) §5 (not re-derived here).
- **SATVOICE:** 🟥 second long-range-comms option; not asserted as mandatory below 80°N (Greenland's landmass lies mostly south of 80°N, with its northern tip and BGTL near ~76°N) — confirm current requirement at planning.
- **VHF:** 🟩 available near the BGSF and BGGH (Nuuk) terminals only; not continuous across the FIR.
- **FIS / lower airspace:** **FIC Sondrestrom** (Naviair).
- **Language:** 🟩 **English**.
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Principal route structure:** Nuuk FIR sits on the **Iceland–Greenland polar/NAT corridor**, feeding the Reykjavik CTA northbound-upper and Gander Oceanic/Domestic southbound-upper depending on the 63°30′N split (§3); westbound traffic continues toward the Edmonton FIR polar-arrival gateway (see [Edmonton (CZEG)](edmonton-czeg.md)).
- **Free Route Airspace:** 🟧 not asserted as an FRA in the European sense; Greenland's procedural regime uses position-report separation on the filed route rather than a free-route construct — confirm current Naviair AIP framing.
- **Major fixes / entry-exit points:** the SimBrief/current-AIRAC route provides the exact string for the FIR transit (planning context, not a clearance). 🟧 (exact current entry/exit fix set — pull on the day.)
- **Hubs & aerodromes inside the FIR:** 🟩 **Kangerlussuaq (BGSF)** — the principal, most reliable Greenland NAT/ETOPS alternate (long 2,800 m runway, comparatively stable weather); **Pituffik Space Base (BGTL)** — the longest runway in Greenland (~3,047 m) but a **restricted-access US Space Force installation**, not a routine civil diversion. **Nuuk (BGGH)** also sits inside the FIR (expanded 2,200 m runway with precision approaches at both ends) but has no OM C brief in this tree.

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟥 the **Greenland icecap dome (Summit) at ~3,210–3,216 m (≈10,500–10,550 ft)** is the FIR's binding terrain constraint; the highest peak, **Gunnbjørn Fjeld at 3,694 m (12,119 ft)**, sits on the east coast. Full detail (incl. grid-MORA guidance) already verified and stored in [Arctic](../../arctic.md) §7 — not re-derived here.
- **Boundary terrain:** none of further operational significance at the FIR's boundaries beyond the icecap itself.
- **Driftdown / depressurisation escape:** plan the engine-out/decompression driftdown profile to **clear the central icecap dome** — this is the limiting terrain for any Greenland-transit segment. See [Arctic](../../arctic.md) §7 and [`OM E — ETOPS-EDTO Procedures`](../../../../flight-ops/etops-edto.md).
- **Cold-temperature altitude corrections:** apply at both BGSF and BGTL — see the airport briefings (§9) and [`OM E — Cold Weather Operations`](../../../../flight-ops/cold-weather-operations.md).

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Kangerlussuaq | **BGSF** | Principal, most reliable Greenland NAT/ETOPS-EDTO alternate — 2,800 m runway, comparatively stable weather; radar U/S, procedural separation in force | [BGSF brief](../../../destinations/north-america/greenland/bgsf/index.md) |
| Pituffik Space Base | **BGTL** | Longest runway in Greenland (~3,047 m); **US Space Force installation under the 1951 Greenland Defense Agreement — restricted civil/military access, not a routine diversion** | [BGTL brief](../../../destinations/north-america/greenland/bgtl/index.md) |

- **Coverage note:** 🟥 **very sparse.** BGSF is the operative reliable alternate for planning; BGTL's military status means it cannot be assumed available without prior coordination/PPR — confirm current civil-access terms in the airport briefing and at planning before relying on it as a diversion. Wider Greenland diversion context (BGGH, BGBW closure, BGQO opening) is tracked in [Arctic](../../arctic.md) §8 and not duplicated here.
- **After-hours cost note:** 🟧 using BGSF outside normal operating hours can incur a substantial standby-services fee (reported ~US$3,000-order-of-magnitude in industry trade reporting); advance notice reduces the cost — confirm current tariff with Naviair/handling agent, not asserted as durable fact here.

---

## 10. Special-use airspace

- **Military TRA / TSA:** 🟥 **BGTL/Pituffik Space Base** is itself the FIR's principal special-status area — a US Space Force installation with restricted access; treat the field (not just its approach environment) as access-controlled.
- **Danger / restricted / prohibited areas:** 🟧 no further Greenland-specific danger/restricted areas identified in this pass; pull live NOTAMs at planning.
- **Overflight-permit / diplomatic considerations:** 🟩 none for a normal transit; Greenland (Kingdom of Denmark) entry/diplomatic matters are handled at the airport level, not the FIR level.

> **SUA currency:** re-check BGTL civil-access/PPR status and current NOTAMs at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Non-radar / procedural contingency:** maintain **position reports at entry, over/approaching each compulsory waypoint, and at exit** via HF/CPDLC/ADS-C throughout the FIR. If unable to obtain a revised clearance, acquire a lateral offset away from the route, apply the standard contingency level change, and broadcast on 121.5 / inter-pilot 123.45 — full procedure detail already verified and stored in [Arctic](../../arctic.md) §10 and [North Atlantic](../../north-atlantic.md) §10 (not re-derived here).
- **Comms-failure:** continue per last received/expected clearance and relay via 121.5/123.45; expect **HF outages during space-weather events** — fall back to SATVOICE/CPDLC.
- **Weather-deviation:** request even for small deviations; if no response, deviate stating "WEATHER DEVIATION REQUIRED" and apply the standard offset/level-change per [Arctic](../../arctic.md) §10.
- **Seasonal hazards (durable):** space-weather HF/GNSS degradation, extreme cold/fuel-freeze, winter darkness/icing/blowing snow — full detail in [Arctic](../../arctic.md) §11 (not re-derived here).

> **Pull at planning (T-2h):** enroute NOTAMs (incl. BGSF radar/MSSR status and BGTL access), SIGMET/AIRMET, space-weather (HF/GNSS) advisories — NOAA SWPC S/R/G scales & D-RAP, and the validated SimBrief route. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Current Naviair/Avians(Isavia) service-provision split for BGSF terminal ATC (Suluk APS role) and for the FIR's lower airspace generally.
- BGSF MSSR/radar restoration status — currently unavailable, confirm current NOTAM before relying on radar service.
- BGTL (Pituffik Space Base) current civil-access, PPR and ATC/AFIS status — treat as restricted until confirmed.
- Exact FIC Sondrestrom current callsign/branding and any further internal FIR sectorisation — verify Naviair AIP ENR 2/6.
- SATVOICE/Iridium requirement specifics for Greenland-transit routings not north of 80°N.
- No OM C airport brief yet for BGGH (Nuuk) — build if planned as an alternate.
- BGSF after-hours standby-services fee — confirm current tariff, not durable fact.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **Naviair — AIP Greenland** — Nuuk FIR (BGGL) structure, Class A ≥ FL55 / Class G below, FIC Sondrestrom — https://aim.naviair.dk (retrieved 2026-07-26).
- **Avians/Isavia ANS — "Greenland upper airspace" (Reykjavik Control Area)** — upper-airspace delegation above FL195 north of 63°30′N (~3.7M km², ~70% of the Reykjavik CTA), 1976 bilateral agreement with the Kingdom of Denmark, Suluk APS subsidiary providing BGSF APP/TWR — https://ans.isavia.is/en/reykjavik-control-area-/greenland-nuuk-fir (retrieved 2026-07-26).
- **OPSGROUP — "Greenland NAT Alternates: Dec 2025 Update"** — BGSF remains fully ATC-controlled (Naviair AIC), MSSR/radar unavailable NOTAM (A1821/25), BGGH capacity/PPR issues, BGBW spring-2026 closure to fixed-wing, BGQO/BGJN new-runway status, after-hours fee note — https://ops.group/blog/greenland-nat-alternates-dec-2025-update/ (retrieved 2026-07-26). *Industry trade-press corroboration; treat operational specifics (fees, PPR) as subject to change — confirm current at planning.*
- **OPSGROUP — "Greenland FIR to change its name"** — Sondrestrom FIR renamed to Nuuk FIR effective 1 March 2015, following COM Centre/RCC/FIC relocation to Nuuk — https://ops.group/blog/greenland-fir-to-change-its-name/ (retrieved 2026-07-26).
- Cross-reference: [Arctic](../../arctic.md) — Sources & References (Isavia eAIP BI-ENR, AIP Canada ENR + NAV CANADA True-North briefing, Naviair AIP, ICAO NAT Doc 007, NOAA SWPC) underpin the icecap-terrain, TRUE-track/grid-nav, fuel-freeze and space-weather facts cited here by cross-link — not re-derived in this brief.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial FIR brief; built from public/AIP sources. |
