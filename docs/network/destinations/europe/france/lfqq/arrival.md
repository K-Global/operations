# LFQQ — Lille-Lesquin · Arrival Page

**LFQQ / LIL** · Lille, Hauts-de-France, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LFQQ Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **RWY 26** (west-facing configuration, preferred) |
| Usual approach | ILS/LOC (RWY 26, CAT II); RNP available both runways; VOR available both runways |
| Config logic | Wind/minima/noise-driven; Tower selects the runway-in-use |
| Transition level | FL060 (1013 < QNH ≤ 1048) or FL070 (977 ≤ QNH ≤ 1012); TA 5,000 ft 🟧 (network-reference sourced) |
| LVP trigger | RVR ≤550 m and/or ceiling ≤200 ft 🟧 — RWY 26 approaches then CAT II/III |
| Missed-approach driver | Airspace/traffic re-sequencing within the Lille TMA's subdivided sectors, not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** ABB, BNE, CIV, CMB, MATIX, TRACA, VERMA, SULEX, OSLID series, runway/IAF-specific (IAF LEQ for the common arrival STARs; ERNOD/EKRIK for RWY 08; ASBAR/OSLID for RWY 26) — 🟧 sourced to a network reference, not the primary AIP; pull the current-AIRAC STAR list at planning.
- **Selection by arrival direction / runway:** West-facing configuration (land on RWY 26) is preferred; RWY 08 and the crossing pair (02/20) are used when wind/traffic dictate. Lille Approach assigns the STAR-to-runway transition for the active configuration.
- **Transition to approach:** Expect a STAR-to-ILS (RWY 26) or STAR-to-RNP (either runway) transition with radar vectors onto final in the preferred configuration; verify the charted transition.
- **Speed / flow constraints on the STAR:** Published STAR crossing altitudes (2,000–3,000 ft at the relevant IAFs per the network reference) are pointers only — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR IAF crossing constraints (2,000–3,000 ft, §2) are pointers — fly the charted altitudes.
- **Energy traps:** Late runway/config changes ahead of a wind shift, and the field's genuinely short RWY 02/20 (1,580 m) if assigned unexpectedly, are the main energy/planning traps at this field.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 08 | RNP Z (preferred) | 🟧 Names/notes sourced to a network reference | verify current chart |
| 08 | RNP Y / VOR Z / VOR Y | | verify current chart |
| 26 | ILS/LOC Z (preferred) | **CAT II** 🟧; LVP procedure implies CAT II/III capability in practice | verify current chart |
| 26 | ILS/LOC Y / RNP / VOR | | verify current chart |

- **LVP triggers:** RVR ≤550 m and/or ceiling ≤200 ft 🟧 (network-reference sourced, not independently AIP-confirmed). Under LVP: RWY 26 approaches operate CAT II/III, RWY 08 LVTO applies, TWY T3/T4 become unusable, and TWY P5 is reserved for Parking E access only.

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat Flanders-plain farmland at 157 ft AMSL — no close-in high terrain relevant to any arrival path.
- **Specific threats:** 🟧 **RWY 26's displaced threshold** reduces LDA to 2,545 m against a 2,825 m runway length — do not assume the full runway is available to land on. Visual approaches are prohibited weekends/public holidays and nightly 2100–0500, which removes a category of energy/traffic-management risk but means an unplanned late-notice visual approach outside those windows should not be assumed available.
- **Airspace / traffic:** 🟧 Moderate-density regional TMA with a single combined Approach/Departure position (no separate Departure controller) — brief for possible extended vectoring during simultaneous arrival/departure activity, and note the FIR-assignment caveat in [Briefing §18](index.md).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat plain) — fly the published missed approach and verify climb-gradient/turn constraints on the current chart.
- **Re-sequencing environment:** A go-around returns you to a moderate-density regional TMA under a single combined Approach/Departure position — expect vectoring and possible holding before re-sequencing, especially during a low-visibility event when the field is also running LVP taxi restrictions.
- **Go-around traps:** Awareness of the active runway configuration (26 preferred vs the reciprocal/crossing pair) during the miss; the P5 hot-spot taxiway crossing remains a ground-workload factor on any subsequent approach requiring a runway change.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** RWY 08 — 2,825 m; **RWY 26 — 2,545 m** (280 m displaced threshold); RWY 02/20 — 1,580 m each. The 2,825 m/2,545 m pair is ample for typical Category-R narrowbody/regional operations; RWY 02/20 is limiting for larger types.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground on the day. 🟧
- **Runway-excursion watch:** 🟧 RWY 26's displaced threshold is the primary excursion-relevant fact to brief; no specific contamination/braking-action data confirmed for the winter low-cloud/fog season.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing, taxi in to **Parking B** via the P2–P5/T2–T5/V1–V5 taxiway system per Ground assignment; VAMSYS mirror gives a planning taxi-in time of **6 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟥 **Published AIP hot spot** on the taxiway leading to RWY 02/20 near holding point **P5** — taxi with vigilance, especially after landing on the crossing runway pair or during a runway-configuration change. See [Briefing §13](index.md).
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — gangway clusters at B08/B09/B11/B12; non-gangway narrowbody/regional positions elsewhere on Parking B.

---

## 9. Arrival frequency sequence

- **Sequence:** **Lille Approach (120.275/126.475/134.825, sector-specific, or 126.480 single-frequency per a network reference) → Lille Tower (118.55/118.555) → Lille Ground (121.85/121.855).** Take the assigned frequency and confirm current chart. (Frequencies from [Briefing §8](index.md).)
- **Approach/Departure control:** **Lille Approach** combines the approach **and** departure function — there is no separate Departure position at this field. Handoff to/from **Paris ACC (LFFF)** per the network-document corroboration used to build this pack; not independently confirmed against the primary AIP FIR/UIR description (see [Briefing §18](index.md)). 🟧

---

## 10. Gotchas

- **RWY 26's displaced threshold reduces LDA to 2,545 m** — do not plan on the full 2,825 m runway length for landing distance.
- **Published hot spot near taxiway holding point P5** (RWY 02/20 access) — expect crossing instructions and read-back-heavy handling near this point on taxi-in.
- **Visual approaches are prohibited weekends/public holidays and nightly 2100–0500** — do not plan on a late-notice visual approach outside standard hours.
- **Winter RFF downgrade (CAT 7→CAT 5, 2200–0500, Nov–Mar)** — verify current RFF NOTAM status before planning an overnight winter arrival.
- **RWY 02/20 is materially shorter (1,580 m)** — if assigned unexpectedly, confirm performance margin for the type before committing to the approach.
- **A current network reference designates the 02/20 runway pair as 01/19** — verify the current runway designator on the live AIRAC chart before planning (see [Briefing §18](index.md)).

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- ILS 26 sub-category (CAT II vs III) confirmation.
- Exact LVP/CAT trigger RVR values from a primary AIP table.
- Rapid-exit taxiway/vacate detail.
- FIR/UIR assignment (Paris LFFF vs Reims LFEE) from a primary AIP ENR source.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. the P5 hot-spot area and current RFF level), ATIS config/wind trend. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **SIA France eAIP, AD 2 LFQQ** (extract, amendment dates 2012–2015) — runway/declared-distance data, communications, navaids — https://beardsell.com/flying/Italy_2015/Fairoaks-LeTouquet/LFQQ-lille-text.pdf (retrieved 2026-07-26).
- IVAO France Documentation — "LFQQ - Lille Lesquin" (AIRAC 2603) — https://wiki.ivao.fr/books/manex-aeroports-civils/page/lfqq-lille-lesquin (retrieved 2026-07-26). *STAR/approach names, LVP parameters, ATC handoff structure — network sim document, not regulatory.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
