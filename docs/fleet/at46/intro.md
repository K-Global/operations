<!--
================================================================================
  K Global — AIRFRAME PACK · INTRO  ·  AT46 ATR 42-600
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# AT46 — ATR 42-600 · Intro

**AT46 / ATR-600 series — common type rating with AT76 (ATR 72-600)** · **TURBOPROP** 🟥 · Regional network, short-haul feeder
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Type reference for X-Plane, not a substitute for the aircraft's own documentation. Figures carry provenance tags; verify `[VERIFY]` items before use. **This is a turbine-propeller (turboprop) aircraft, not a jet** 🟥 — power management, propeller handling, icing discipline and cruise-altitude regime differ fundamentally from the mainline/regional-jet packs in this OM B tree; see §6 and the Checklist/QRH for the turboprop-specific items. Capability values (EDTO, RVSM, PBN, LVO, RECAT, RFF) are **not researched to mainline standard** for this type — the Fleet Capability Matrix carries the AT46 in its **secondary/indicative table** only, every cell 🟧. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ICAO type designator | **AT46** |
| Manufacturer model | ATR 42-600 🟩 |
| Manufacturer | **ATR** (Avions de Transport Régional) — Franco-Italian consortium, joint venture of **Airbus** and **Leonardo** 🟩 |
| Family / type rating | ATR 42/72 "-600" series — **common ATR-600 type rating shared with the AT76 (ATR 72-600)** 🟩; the two variants differ mainly in fuselage length/weights, sharing cockpit, systems and engine family — see the [AT76 pack](../at76/index.md) |
| Type-certificate holder | **ATR** — EASA **TCDS A.084** (covers the ATR 42 and ATR 72 family jointly) 🟩 |
| Powerplant | **2 × Pratt & Whitney Canada PW127M** turboprop 🟩 (~2,160 shp per engine, public reference `[VERIFY]`); **PW127XT-M** is standard equipment on new-build ATR 42/72-600 aircraft since late 2022 and is also offered as a retrofit; the higher-rated **PW127XT-L** was certified specifically for the short-take-off-and-landing **ATR 42-600S** derivative (not necessarily this aircraft's fit) 🟧 `[VERIFY — which fit K Global's tails carry — VAMSYS]` |
| Propellers 🟥 | Same **six-blade** Hamilton Standard/Ratier-Figeac propeller family used across the ATR-600 line, variable-pitch, hydromechanically controlled, feather/reverse (beta) capable 🟩 (exact model/diameter for this shorter-fuselage variant `[VERIFY]`) — a defining turboprop-specific system; see §6 and Checklist/QRH |
| Avionics | **Thales** integrated glass cockpit ("Suite 600"), **five LCD displays**, RNP-capable FMS — same avionics family as the AT76 🟩 |
| ICAO code letter | Wingspan 24.57 m — sits just inside the **ICAO Code C** band (24–<36 m) 🟧 `[VERIFY]` (borderline vs Code B; confirm against the aerodrome reference code table) |
| Config (K Global) | Regional network `[VERIFY — VAMSYS]`; seats/cargo not yet broken out per type — aggregate **5 tails** across the ATR group (AT76/AT46), 6 Regional unit (see Fleet Index) `[VERIFY — VAMSYS]` |
| MTOW | **~18,600 kg** 🟩 (public reference) |
| OEW / MZFW / MLW | Not found in the surveyed public sources 🟧 `[VERIFY — EASA TCDS A.084]` |
| Max payload | ~5,450 kg 🟩 (public reference) |
| Fuel capacity | ~4,500 L / ~3,600 kg (Jet A, public reference) 🟧 `[VERIFY]` |
| Seats | Typical **48**; commonly cited range **40–50** across sources depending on configuration 🟩 |
| Service ceiling | **25,000 ft (FL250)** 🟥 — significantly lower than every jet type in the K Global fleet; drives a fundamentally lower cruise regime — see §6 and Dispatch §5 |
| Typical cruise | Max cruise speed **~300 kt / 556 km/h** 🟩 (public reference); cruise altitude normally well below the FL250 ceiling on short sectors |
| Range (rep. payload) | ~716–726 NM (typical payload, public references) 🟧 — figures vary slightly by source; treat as `[VERIFY]` pending a K Global reference OFP |
| Field length | Takeoff **~1,165 m**; landing **~1,126 m** (public reference, source-dependent — other sources cite shorter figures ~1,040 m / ~880 m) 🟧 `[VERIFY]` — short-field capable, a core part of the Regional network's short/thin-runway role |
| ETOPS/EDTO | Not applicable in the classic sense — short-haul regional turboprop, not oceanic/EDTO-planned; see Dispatch §5 |
| RECAT-EU / wake / RFF | **Not in the mainline Fleet Capability Matrix tables** — see the matrix's **secondary/indicative table** (🟧 throughout): RECAT-EU E-F / ICAO wake M-L (indicative); RFF category not tabulated for this type — see §4 |

## 2. Modelling & profile mapping 🟥

The three-way mapping — **no external source records this; it is a K Global decision:**

> **Real type:** AT46 (ATR 42-600, PW127M/XT, Thales glass cockpit) → **SimBrief profile:** AT46 (ATR 42-600) → **Sim model:** **no dedicated ATR 42-600 (or ATR 42 of any sub-variant) product was identified in the public X-Plane 11/12 market** 🟥 `[VERIFY]` — see Sim-Model for the gap and the cross-family workaround under consideration.

Unlike every other pack in this OM B tree, the AT46 currently has **no candidate sim model at all** — not even a mismatched sub-variant. The dispatch profile (SimBrief AT46) still models the correct airframe/engine family and drives the OFP burn, but the Intro §2 sim-model line cannot be populated with any real candidate pending either a market development or a K Global decision to substitute the AT76's -500 candidate with adjusted weights/performance (not a like-for-like fix — see Sim-Model §2 for why this is explicitly a workaround, not a fidelity match). Cross-ref Dispatch §2 (SimBrief setup) and the Sim-Model file for the full gap analysis.

## 3. Role in the network

Regional turboprop feeder aircraft operating in the **Regional** business unit `[VERIFY — VAMSYS]` — the smaller-capacity partner to the AT76 within the shortest-stage, thinnest-route tier of the fleet. Shares the **ATR-600 common type rating with the AT76** (ATR 72-600), giving crew-scheduling flexibility across the two ATR variants; see the [AT76 pack](../at76/index.md) for the larger common-rated sibling, which this pack cross-references throughout given the near-total shared systems/cockpit baseline.

## 4. Dimensions & ground footprint

- Length **22.67 m** (74 ft 5 in); wingspan **24.57 m** (80 ft 7 in, no winglets) 🟩
- **ICAO Code C** (indicative, borderline — §1) — no wingspan-restricted taxiway concerns expected at regional/short-field airports typical of this network.
- **RFF category:** not tabulated in the Fleet Capability Matrix (secondary table carries no RFF column for deferred types). By ICAO Annex 14 length band, the 22.67 m length sits in the **<24 m band → indicative Cat 4/5**, stated here as an **indicative, non-matrix-sourced** estimate only 🟧 `[VERIFY]` — smaller than the AT76's own indicative figure, consistent with the shorter fuselage.
- High-wing, twin-turboprop configuration; single-aisle cabin, forward passenger/service door plus a rear airstair door; retractable tricycle landing gear. Engine nacelles carry the propeller reduction gearboxes; wing/tail leading edges and propeller blades carry the ice-protection system (§6) — same architecture as the AT76.
- **Steep-approach note 🟧 `[VERIFY]`:** some public marketing/overview sources describe the ATR 42-600 as having strong steep-approach/short-field handling; this is **not** the same as a confirmed formal steep-approach certification/approval and has not been assessed by K Global (the Fleet Capability Matrix's steep-approach column does not cover this type). Do not brief this as a confirmed capability without checking EASA TCDS A.084 and any operator approval.
- **Non-pressurised-cabin-altitude ceiling note 🟥:** the FL250 service ceiling (§1) is a structural/pressurisation limit distinct from every jet type in the fleet — plan terrain/weather avoidance and oxygen requirements accordingly; see Dispatch §5 and QRH Ch 9.

## 5. Weights

| | kg |
|---|---|
| OEW | Not found in surveyed public sources 🟧 `[VERIFY — EASA TCDS A.084]` |
| MZFW | Not found in surveyed public sources 🟧 `[VERIFY — EASA TCDS A.084]` |
| MTOW | ~18,600 (public reference) 🟩 |
| MLW | Not found in surveyed public sources 🟧 `[VERIFY — EASA TCDS A.084]` |
| Max payload | ~5,450 🟩 (public reference) |
| Max fuel | ~3,600 (public reference, ~4,500 L Jet A) 🟧 `[VERIFY]` |

K Global operates the ATR 42-600 sub-type `[VERIFY — VAMSYS]`; confirm the exact engine fit (PW127M vs PW127XT-M/-L) and weight variant against EASA TCDS A.084 or the VAMSYS mirror before use in performance planning 🟧 `[VERIFY]`. Note this pack documents the standard ATR 42-600, **not** the short-take-off-and-landing ATR 42-600S derivative (a distinct, further-optimised variant not asserted as part of the K Global fleet) `[VERIFY — VAMSYS]`.

## 6. Performance & turboprop-specific handling 🟥

- **Service ceiling 25,000 ft (FL250)** — a hard structural/pressurisation limit shared with the AT76, not a performance-optimisation choice. Cruise altitudes on this network's short sectors will typically sit well below the ceiling, but crews must recognise FL250 as an absolute cap, unlike the mainline/regional-jet fleet's FL350–410+ ceilings.
- **Power management is torque-based, not N1-based** 🟥 — the PW127M/XT is a free-turbine turboprop: pilots set and monitor **torque (Tq)**, **ITT (inter-turbine temperature)**, **Np (power-turbine/propeller speed)** and **Ng (gas-generator speed)**, not the N1/EPR/thrust-lever-angle logic of a turbofan. Power levers set torque/power; **condition levers** separately govern propeller speed/fuel-flow scheduling (feather, fuel shut-off, and RPM regimes for ground/flight) — identical architecture to the AT76 (see the [AT76 Checklist](../at76/checklist.md) for the shared phase-by-phase flow).
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
| Range vs network Regional sectors | 🟩 | ~716–726 NM structural range comfortably covers the short/thin Regional sector set |
| Service ceiling FL250 | 🟥 | Hard cap — plan terrain/weather clearance and cruise levels accordingly; distinct from every jet type in the fleet |
| ETOPS/EDTO adequacy | 🟧 | Short-haul regional turboprop; not EDTO-planned; matrix marks "Twin" 🟧 indicative only |
| Sim model — none exists | 🟥 | No dedicated ATR 42 X-Plane product (any sub-variant) was identified — this is a harder gap than the AT76's sub-variant mismatch; see Sim-Model |
| Stand / gate compatibility | 🟩 | Code C (borderline) — standard regional-turboprop footprint |
| Steep-approach claim | 🟧 | Some public sources describe strong steep-field handling; not a confirmed formal certification/approval — do not brief as confirmed |
| Modelling fidelity (sim vs real) | 🟥 | No candidate model exists at all — see Sim-Model for the open workaround question |

## 8. Related pack files

**Built:** [Dispatch](dispatch.md) · [Sim-Model](sim-model.md) · [Checklist](checklist.md) · [QRH](qrh.md) · [Livery](livery.md) · [Pack index](index.md)
Common-rated sibling: [AT76 pack](../at76/index.md) · Fleet Index → [overview](../index.md) · [Capability values (secondary/indicative table)](../capability-matrix.md)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — ATR ATR-42-600 (AT46) — https://skybrary.aero/aircraft/at46
- EASA — Type Certificate Data Sheet A.084 (ATR42/ATR72) — https://www.easa.europa.eu/en/document-library/type-certificates
- ATR Aircraft — ATR 42-600 factsheet — https://www.atr-aircraft.com/wp-content/uploads/2020/07/Factsheets_-_ATR_42-600.pdf
- ATR Aircraft — Cockpit / Thales avionics — https://www.atr-aircraft.com/innovation/cockpit/
- ATR Aircraft — PW127XT engine — https://www.atr-aircraft.com/innovation/pw127xt-engine/
- P&WC / Forecast International — PW127XT-L ready for the ATR 42-600S — https://flightplan.forecastinternational.com/2023/10/11/pwcs-pw127xt-l-engine-is-ready-for-the-atr-42-600s/
- AeroCorner — ATR 42-600 — https://aerocorner.com/aircraft/atr-42-600/
- Wikipedia — ATR 42 — https://en.wikipedia.org/wiki/ATR_42
- Wikipedia — Pratt & Whitney Canada PW100/PW150 — https://en.wikipedia.org/wiki/Pratt_%26_Whitney_Canada_PW100

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — built from public ATR/EASA TCDS/SKYbrary/AeroCorner/Wikipedia data; turboprop-specific handling flagged prominently 🟥 (power management, autofeather, prop de-ice, ground beta/reverse, FL250 ceiling); capability values cross-linked to the Fleet Capability Matrix's secondary/indicative table; total absence of a candidate X-Plane sim model flagged 🟥 (harder gap than the AT76's sub-variant mismatch); steep-approach marketing claim flagged as unconfirmed; common ATR-600 type rating with AT76 noted throughout. |
