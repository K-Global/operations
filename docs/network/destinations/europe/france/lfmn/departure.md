# LFMN — Nice-Côte d'Azur · Departure Page

**LFMN / NCE** · Nice, Alpes-Maritimes, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — SIA France eAIP-derived

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LFMN Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **04R** in the dominant 04-configuration (departures also possible from 22L in the reciprocal configuration) |
| Config logic | Wind/noise-driven; ATC tolerates tailwind beyond the ICAO 5 kt guideline to favour the 04-configuration and avoid frequent runway swaps |
| Transition altitude | 5,000 ft; transition level calculated by Nice Approach |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | Not confirmed — no slot-coordination level found in reachable sources 🟧 |
| De-icing on departure | 🟥 **Not available** — no de-icing service exists at this airport under any circumstances |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** RWY 04L/22R is served by taxiways A1, B1, C1, F1, EG, G1, H1, J1; RWY 04R/22L is served by W3, Q3, A3 (closed for departure at night), B3, EB, EF (exit-only from 04R/22L), EY, HG. Confirm the exact taxi assignment with Ground on the day.
- **Hot spots / tight taxiways:** 🟥 Taxiways **north of TWY U** carry reduced separation margins — speed limited to 17 kt on straight portions and 10 kt on curved portions, with an over-steering technique recommended for aircraft with wingspan greater than 36 m. **TWY U** is marked with oblique green bands specifically to prevent confusion with the parallel RWY 04L/22R on approach. The **Y/H2 taxiway junction is prohibited for Code D, E and F aircraft**. The AIP explicitly flags **short taxi distances from certain stands to the RWY 04L/22R holding points as a runway-incursion risk**, given the field's staggered/"inverted" pair operation (a departure crosses the landing runway before reaching its own take-off threshold) — expect reinforced phraseology and illuminated markings at these intersections.
- **Runway crossings / read-back-required points:** An explicit ATC clearance is required to cross or enter RWY 04L/22R at any point; absent that clearance, stop before the holding-position markings (AIP 20.3.4). In ILS conditions, Code D/E/F crossings of the northern runway are routed via TWY C1; departing aircraft from the southern runway cross preferentially via TWY A1 (or TWY C1 when the ILS procedure is in service).
- **Low-vis taxi caveats:** The field is equipped with a Mode-S multilateration-based surface-movement system (SMGCS-supporting); transponder-selection procedures apply throughout ground movement (AIP 20.6). No stop bars are installed except at TWY A3 — maintain heightened vigilance at holding points in low visibility. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** The **04-configuration** (departure 04R) is dominant; ATC is noted to tolerate tailwind beyond the ICAO 5 kt recommendation specifically to favour 04L/04R operation and avoid frequent configuration changes (IFALPA). ATIS notification of a configuration change is sometimes delayed — confirm the current runway-in-use rather than assuming the briefed config.
- **By departure direction:** Both 04 and 22 departures take an **initial turn south over the sea**; a northbound SID must cross the coastline at or above FL70 (noise-abatement requirement).
- **Noise / preferential-runway program:** Departures apply **NADP1 technique up to 3,000 ft**. This is a strictly enforced regime — non-compliant trajectories are subject to review and potential ACNUSA infringement fines (up to €40,000). See [Briefing §12](index.md).
- **Interaction with arrivals:** The staggered/"inverted" runway-pair operation means a departure from the offset runway (04R/22L) crosses the landing runway (04L/22R) before reaching its own threshold — the reverse of the more conventional arrangement — creating recognised runway-incursion risk given short stand-to-holding-point distances.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| BADOD, BASIP, BODRU, EPOLO, IRMAR, LANKO, LONSU, OKTET, PERUS, RUBAS, RUBIT, SODRI, TURIL, VAREK 🟧 | 04L/R and 22R/L (runway-specific suffixes) | All published departure/arrival RNAV procedures require RNAV-1 (GNSS) navigation; announce "Non-RNAV" if not equipped, for radar vectoring instead | Names sourced to an IVAO France network-sim reference document, not independently confirmed against the current SIA AIRAC chart — pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Initial turn south over the sea on both runway ends; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** **NADP1 technique applied up to 3,000 ft** on all departures (DGAC environmental briefing) — this is the mandated regime, not merely a recommendation.
- **Early turn / altitude constraints:** A northbound SID must cross the coastline at or above **FL70**. Departure/missed-approach paths on the 04-end require a **very early turn toward the sea due to close-in terrain** — brief this explicitly, it is not a generic noise preference but a terrain-driven requirement.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources this pass — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** The Alpes-Maritimes Prealps rise close to the coastal plain immediately north/northwest of the field — this is the direct reason both the 04 and 22 departure/missed-approach paths require a very early turn toward the sea. No precise closest-obstacle bearing/distance was sourced from an obstacle chart this pass — see [Briefing §18](index.md).
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** LFMN has **no CAT II/III capability** at all (both LOC 04L and LOC 04R are AIP-noted as not supporting CAT II/III training or automatic landing) — treat any low-visibility takeoff planning as CAT I-equivalent infrastructure only; specific LVTO RVR minima not confirmed this pass. 🟧
- **De-icing:** 🟥 **Not provided under any circumstances** (AIP AD 2.3 §11; no de-icing facilities listed in AD 2.4 §4). See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md) for contingency/diversion planning if freezing conditions are ever forecast for a scheduled departure.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Nice Prévol / Nice Delivery **121.780 MHz** (H24).
- **Frequency sequence:** **Delivery 121.780 → Ground 121.705 (H24) → Tower 118.700 (IFR/VFR aerodrome circuit, H24) / 122.380 (VFR transit SA–EA & helicopters) / 123.150 (auxiliary) → Nice Approach — departure sectors 130.830 (ND1/ND2) or the sector-specific frequency assigned.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** No slot-coordination level or CTOT/ATFM specifics were confirmed for LFMN in reachable sources this pass — do not assume an uncoordinated/no-flow-control field without verification. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 04R (2,963 m TORA) and RWY 04L (2,628 m TORA, displaced threshold to 2,538 m LDA — not a departure-limiting factor) are both non-limiting for the narrow-body/regional types typical of this Category M station. Intersection departures are available (see [Briefing §7](index.md)) but confirm the correct declared distance for the assigned intersection — TWY A3 is **not usable for a night-time departure from RWY 04R**.
- **Density altitude / temperature:** Non-issue at 12 ft elevation; note the AIP's **29°C reference temperature** as a summer-performance planning input rather than a density-altitude/hot-and-high concern.
- **Contamination / wet-runway:** Mediterranean climate — winter contamination is rare but not impossible; **no de-icing service exists** if it occurs (§7). Braking-action data not confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty expected for K Global's typical narrow-body/regional equipment at this field.

---

## 10. Gotchas

- **No CAT II/III capability at all** — LFMN is a CAT I-only field for both approach and any low-visibility takeoff planning.
- **No de-icing service under any circumstances** — a forecast of freezing conditions is a planning-stop event, not a delay-and-wait situation.
- **Staggered/"inverted" runway-pair operation** — a departure from 04R/22L crosses the landing runway (04L/22R) before its own threshold; AIP-flagged incursion risk given short stand-to-holding-point distances.
- **NADP1 to 3,000 ft is mandated, not optional** — noise-abatement non-compliance risks an ACNUSA infringement fine up to €40,000.
- **Very early turn toward the sea is a terrain requirement, not a noise nicety** — the Alpes-Maritimes Prealps rise close north of the field.
- **ATIS configuration-change notification can lag** — confirm the current runway-in-use with ATC rather than assuming the briefed configuration remains valid.
- **TWY A3 is closed for a RWY 04R departure at night** — plan the alternate intersection/taxi routing in advance for a night movement.
- **Tailwind beyond the ICAO 5 kt guideline is routinely tolerated by ATC** on the dominant 04-configuration — brief for a firmer take-off performance margin than the raw wind component might suggest.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima / LVTO RVR exact figures.
- CTOT/slot-coordination regime for LFMN (none confirmed found).
- EOSID/engine-out procedure detail per runway.
- Follow-me/SMGCS low-visibility taxi routing detail.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. TWY A3 night-closure status and the reduced-margin taxiways north of TWY U), CTOT/ATFM if applicable, current noise-abatement NOTAM traffic. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **SIA France eAIP, AD 2 LFMN** (AIRAC effective 2026-06-11) — https://www.sia.aviation-civile.gouv.fr/media/dvd/eAIP_11_JUN_2026/FRANCE/AIRAC-2026-06-11/html/eAIP/FR-AD-2.LFMN-fr-FR.html (retrieved 2026-07-26). *Declared distances, communications, local traffic regulations (taxiway hot spots, runway-crossing rules, transponder procedure), de-icing status.*
- DGAC / DSNA — "Environmental Briefing Nice-Côte d'Azur" — https://www.dca-gops.com/wp-content/uploads/2023/12/Environmental-briefing-v5.pdf (retrieved 2026-07-26). *NADP/coastline-crossing/noise-abatement departure detail.*
- IFALPA — Safety Bulletin 25SAB01, "Operations at Nice (NCE/LFMN) Airport" — https://www.ifalpa.org/wp-content/uploads/2025/12/25sab01-operations-at-nice-airport.pdf (retrieved 2026-07-26). *ATC tailwind-tolerance/config-change behaviour, terrain-driven early-turn requirement.*
- IVAO France — "LFMN Nice Côte d'Azur," MANEX Aéroports Civils (AIRAC cycle 2607) — https://wiki.ivao.fr/books/manex-aeroports-civils/page/lfmn-nice-cote-dazur (retrieved 2026-07-26). *Network-sim document, not regulatory — SID name list, frequency-sequence cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
