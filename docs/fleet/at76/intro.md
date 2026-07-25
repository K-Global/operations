<!--
================================================================================
  K Global — AIRFRAME PACK · INTRO  ·  AT76 ATR 72-600
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# AT76 — ATR 72-600 · Intro

**AT76 / ATR-600 series — common type rating with AT46 (ATR 42-600)** · **TURBOPROP** 🟥 · Regional network, short-haul feeder
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Type reference for X-Plane, not a substitute for the aircraft's own documentation. Figures carry provenance tags; verify `[VERIFY]` items before use. **This is a turbine-propeller (turboprop) aircraft, not a jet** 🟥 — power management, propeller handling, icing discipline and cruise-altitude regime differ fundamentally from the mainline/regional-jet packs in this OM B tree; see §6 and the Checklist/QRH for the turboprop-specific items. Capability values (EDTO, RVSM, PBN, LVO, RECAT, RFF) are **not researched to mainline standard** for this type — the Fleet Capability Matrix carries the AT76 in its **secondary/indicative table** only, every cell 🟧. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ICAO type designator | **AT76** |
| Manufacturer model | ATR 72-600 🟩 |
| Manufacturer | **ATR** (Avions de Transport Régional) — Franco-Italian consortium, joint venture of **Airbus** and **Leonardo** 🟩 |
| Family / type rating | ATR 42/72 "-600" series — **common ATR-600 type rating shared with the AT46 (ATR 42-600)** 🟩; the two variants differ mainly in fuselage length/weights, sharing cockpit, systems and engine family |
| Type-certificate holder | **ATR** — EASA **TCDS A.084** (covers the ATR 42 and ATR 72 family jointly) 🟩 |
| Powerplant | **2 × Pratt & Whitney Canada PW127M** turboprop 🟩 (~2,475–2,750 shp per engine depending on source/rating `[VERIFY]`); **PW127XT-M** is standard equipment on new-build ATR 42/72-600 aircraft since late 2022 and is also offered as an in-service retrofit 🟧 `[VERIFY — which fit K Global's tails carry — VAMSYS]` |
| Propellers 🟥 | **6-blade** Hamilton Standard/Ratier-Figeac **568F**, 3.93 m diameter, variable-pitch, hydromechanically controlled, feather/reverse (beta) capable 🟩 — a defining turboprop-specific system; see §6 and Checklist/QRH |
| Avionics | **Thales** integrated glass cockpit ("Suite 600"), **five LCD displays**, AFDX digital network, RNP-capable FMS 🟩 |
| ICAO code letter | Wingspan 27.05 m — falls in the **ICAO Code C** band (24–<36 m) 🟧 `[VERIFY]` (borderline vs Code B; confirm against the aerodrome reference code table) |
| Config (K Global) | Regional network `[VERIFY — VAMSYS]`; seats/cargo not yet broken out per type — aggregate **5 tails** across the ATR group (AT76/AT46), 6 Regional unit (see Fleet Index) `[VERIFY — VAMSYS]` |
| MTOW | **~22,800 kg** 🟩 (some public sources cite ~23,000 kg — variant/weight-option dependent 🟧 `[VERIFY]`) |
| OEW / MZFW / MLW | Not found in the surveyed public sources 🟧 `[VERIFY — EASA TCDS A.084]` |
| Max payload | ~7,500 kg 🟩 (public reference figure) |
| Fuel capacity | Not confirmed for this variant in the surveyed public sources 🟧 `[VERIFY]` |
| Seats | Typical **70** at 30 in pitch; certified up to **78** high-density (EASA-approved 2015) 🟩; range commonly cited **68–78** across sources |
| Service ceiling | **25,000 ft (FL250)** 🟥 — significantly lower than every jet type in the K Global fleet; drives a fundamentally lower cruise regime — see §6 and Dispatch §5 |
| Typical cruise | Max cruise speed **~275–300 kt** 🟩 (source-dependent); cruise altitude normally well below the FL250 ceiling on short sectors |
| Range (rep. payload) | ~825 NM (typical payload, AeroCorner) 🟧 — other sources cite different figures (~750–1,000 NM depending on payload/reserves); treat as `[VERIFY]` pending a K Global reference OFP |
| Field length | Takeoff **~1,333 m**; landing **~914 m** (ISA, sea level, public reference) 🟩 — short-field capable, a core part of the Regional network's short/thin-runway role |
| ETOPS/EDTO | Not applicable in the classic sense — short-haul regional turboprop, not oceanic/EDTO-planned; see Dispatch §5 |
| RECAT-EU / wake / RFF | **Not in the mainline Fleet Capability Matrix tables** — see the matrix's **secondary/indicative table** (🟧 throughout): RECAT-EU E-F / ICAO wake M-L (indicative); RFF category not tabulated for this type — see §4 |

## 2. Modelling & profile mapping 🟥

The three-way mapping — **no external source records this; it is a K Global decision:**

> **Real type:** AT76 (ATR 72-600, PW127M/XT, Thales glass cockpit) → **SimBrief profile:** AT76 (ATR 72-600) → **Sim model:** payware **Aerosoft/McPhat Studios ATR 72-500** for X-Plane 11 🟧 `[VERIFY]` — note this is the earlier **-500** sub-variant (analogue-era cockpit), not a purpose-built **-600** (Thales glass-cockpit) model; see Sim-Model §2 for the sub-type fidelity gap this creates.

The dispatch profile (SimBrief AT76) models the correct airframe/engine family and drives the OFP burn. The candidate X-Plane model is identified in Sim-Model but **not yet formally approved** by K Global management (marked 🟧 `[VERIFY]`) — same open posture as the regional-jet packs pending a decision, **compounded here by a sub-variant (500 vs 600) mismatch that has no clean public-market fix** (see Sim-Model). Any fuel-burn comparison between the SimBrief OFP and the flown model must be validated in Sim-Model before this pack is Verified. Cross-ref Dispatch §2 (SimBrief setup) and the Sim-Model file for the candidate model and its fidelity notes.

## 3. Role in the network

Regional turboprop feeder aircraft operating in the **Regional** business unit `[VERIFY — VAMSYS]` — the shortest-stage, thinnest-route tier of the fleet, below even the CRJ/Embraer regional jets in typical sector length and field-length requirement. Shares the **ATR-600 common type rating with the AT46** (ATR 42-600), giving crew-scheduling flexibility across the two ATR variants; see the [AT46 pack](../at46/index.md) for the smaller common-rated sibling.

## 4. Dimensions & ground footprint

- Length **27.17 m** (89 ft 2 in); wingspan **27.05 m** (88 ft 9 in, no winglets); cabin width 2.57 m, cabin height 1.91 m 🟩
- **ICAO Code C** (indicative, borderline — §1) — no wingspan-restricted taxiway concerns expected at regional/short-field airports typical of this network.
- **RFF category:** not tabulated in the Fleet Capability Matrix (secondary table carries no RFF column for deferred types). By ICAO Annex 14 length band (28–<39 m is Cat 6; this airframe at 27.17 m sits just under that, in the 24–<28 m band → **Cat 5** indicative), stated here as an **indicative, non-matrix-sourced** estimate only 🟧 `[VERIFY]`.
- High-wing, twin-turboprop configuration; single-aisle cabin, one forward passenger/service door plus a rear airstair door; retractable tricycle landing gear. Engine nacelles carry the propeller reduction gearboxes; wing/tail leading edges and propeller blades carry the ice-protection system (§6).
- **Non-pressurised-cabin-altitude ceiling note 🟥:** the FL250 service ceiling (§1) is a structural/pressurisation limit distinct from every jet type in the fleet — plan terrain/weather avoidance and oxygen requirements accordingly; see Dispatch §5 and QRH Ch 9.

## 5. Weights

| | kg |
|---|---|
| OEW | Not found in surveyed public sources 🟧 `[VERIFY — EASA TCDS A.084]` |
| MZFW | Not found in surveyed public sources 🟧 `[VERIFY — EASA TCDS A.084]` |
| MTOW | ~22,800 (public reference) 🟩; some sources ~23,000 🟧 `[VERIFY]` |
| MLW | Not found in surveyed public sources 🟧 `[VERIFY — EASA TCDS A.084]` |
| Max payload | ~7,500 🟩 (public reference) |
| Max fuel | Not confirmed for this variant 🟧 `[VERIFY]` |

K Global operates the ATR 72-600 sub-type `[VERIFY — VAMSYS]`; confirm the exact engine fit (PW127M vs PW127XT-M) and weight variant against EASA TCDS A.084 or the VAMSYS mirror before use in performance planning 🟧 `[VERIFY]`.

## 6. Performance & turboprop-specific handling 🟥

- **Service ceiling 25,000 ft (FL250)** — a hard structural/pressurisation limit, not a performance-optimisation choice. Cruise altitudes on this network's short sectors will typically sit well below the ceiling (commonly FL100–FL200 depending on stage length and terrain/weather), but crews must recognise FL250 as an absolute cap, unlike the mainline/regional-jet fleet's FL350–410+ ceilings.
- **Power management is torque-based, not N1-based** 🟥 — the PW127M/XT is a free-turbine turboprop: pilots set and monitor **torque (Tq)**, **ITT (inter-turbine temperature)**, **Np (power-turbine/propeller speed)** and **Ng (gas-generator speed)**, not the N1/EPR/thrust-lever-angle logic of a turbofan. Power levers set torque/power; **condition levers** separately govern propeller speed/fuel-flow scheduling (feather, fuel shut-off, and RPM regimes for ground/flight) — see Checklist for the phase-by-phase flow.
- **Autofeather 🟥** — an armed system (normally for takeoff/initial climb) that automatically drives a failed/underperforming engine's propeller to the feathered (zero-drag) position above a torque-loss threshold, minimising asymmetric drag at the most critical phase of flight. This has no equivalent on the turbofan types in this fleet — see QRH Ch 1/Ch 2.
- **Propeller de-ice/anti-ice + wing/tail ice protection 🟥** — electrothermal boot/blade heating on the propellers and pneumatic or electrothermal protection on the wing/tail leading edges are a first-order dispatch and in-flight discipline item for a turboprop operating the lower flight levels where airframe icing is most prevalent; see Dispatch §7 and QRH Ch 9.
- **Ground idle / beta / reverse via propeller pitch 🟥** — unlike turbofan thrust reversers, deceleration and ground manoeuvring on this type are achieved by moving the propellers into the **ground-idle/beta range and reverse pitch**, controlled via the power levers below the flight-idle gate. This is a fundamentally different ground-handling technique from every jet type in the fleet — see Checklist (After landing / Shutdown).
- **Lower operating speeds** — VMO/MMO and approach/landing speeds are substantially lower than the jet fleet, consistent with the airframe's short-field, low-altitude regional mission; confirm exact figures per the flown model/OFP `[VERIFY]`.
- **Hot-and-high:** the PW127M/XT family is noted publicly for improved hot-and-high and short-field performance (boost/reserve-takeoff functions) relative to earlier ATR variants, but this has not been assessed by K Global for specific network airports — flag 🟧 pending assessment.

## 7. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Turboprop vs jet handling | 🟥 | Fundamentally different power management, autofeather, prop de-ice and ground-idle/beta/reverse technique — do not brief this type using jet-fleet QRH/Checklist assumptions |
| Hot-and-high / field performance | 🟧 | PW127M/XT boost functions noted publicly; not yet K Global-assessed |
| Range vs network Regional sectors | 🟩 | ~825 NM structural range comfortably covers the short/thin Regional sector set |
| Service ceiling FL250 | 🟥 | Hard cap — plan terrain/weather clearance and cruise levels accordingly; distinct from every jet type in the fleet |
| ETOPS/EDTO adequacy | 🟧 | Short-haul regional turboprop; not EDTO-planned; matrix marks "Twin" 🟧 indicative only |
| Sim sub-type match (500 vs 600) | 🟥 | Candidate model is the ATR 72-**500** (analogue cockpit); the real airframe is the **-600** (Thales glass cockpit) — a genuine, currently unresolved fidelity gap, see Sim-Model |
| Stand / gate compatibility | 🟩 | Code C (borderline) — standard regional-turboprop footprint |
| Modelling fidelity (sim vs real) | 🟧 | Approved X-Plane model not yet confirmed — see Sim-Model |

## 8. Related pack files

**Built:** [Dispatch](dispatch.md) · [Sim-Model](sim-model.md) · [Checklist](checklist.md) · [QRH](qrh.md) · [Livery](livery.md) · [Pack index](index.md)
Common-rated sibling: [AT46 pack](../at46/index.md) · Fleet Index → [overview](../index.md) · [Capability values (secondary/indicative table)](../capability-matrix.md)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — ATR ATR-72-600 (AT76) — https://skybrary.aero/aircraft/at76
- EASA — Type Certificate Data Sheet A.084 (ATR42/ATR72) — https://www.easa.europa.eu/en/document-library/type-certificates
- ATR Aircraft — ATR 72-600 factsheet — https://www.atr-aircraft.com/wp-content/uploads/2020/07/Factsheets_-_ATR_72-600.pdf
- ATR Aircraft — Cockpit / Thales avionics — https://www.atr-aircraft.com/innovation/cockpit/
- ATR Aircraft — PW127XT engine — https://www.atr-aircraft.com/innovation/pw127xt-engine/
- AeroCorner — ATR 72-600 — https://aerocorner.com/aircraft/atr-72-600/
- Thales Group — Thales technologies on board ATR 72-600 — https://www.thalesgroup.com/en/news-centre/insights/civil-aviation/commercial-aviation/thales-technologies-board-atr-72-600
- Wikipedia — ATR 72 — https://en.wikipedia.org/wiki/ATR_72
- Wikipedia — Pratt & Whitney Canada PW100/PW150 — https://en.wikipedia.org/wiki/Pratt_%26_Whitney_Canada_PW100

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — built from public ATR/EASA TCDS/SKYbrary/AeroCorner/Thales/Wikipedia data; turboprop-specific handling flagged prominently 🟥 (power management, autofeather, prop de-ice, ground beta/reverse, FL250 ceiling); capability values cross-linked to the Fleet Capability Matrix's secondary/indicative table; sim sub-type gap (500 vs 600) flagged; common ATR-600 type rating with AT46 noted. |
