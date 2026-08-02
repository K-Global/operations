# LPPT — Humberto Delgado · Arrival Page

**LPPT / LIS** · Lisbon, Portugal · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Portugal-derived

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LPPT Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **02 or 20** — single physical runway, wind-dependent config; no crosswind runway remains |
| Usual approach | ILS CAT III on the assigned runway end |
| Config logic | Wind-driven; expect the config to hold through frontal wind shifts rather than switch for crosswind relief (Briefing §3.4) |
| Transition level | By QNH; transition altitude 4,000 ft — verify current chart 🟧 |
| LVP trigger | RWY 20 — RVR TDZ ≤550 m or cloud base ≤200 ft; RWY 02 — RVR TDZ ≤800 m or cloud base ≤200 ft |
| Missed-approach driver | Airspace/traffic density (single-runway, capacity-constrained field), not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** RNAV STARs using a **Point Merge System (PMS)** — merge point **PESEX** feeds RWY 02, **UPKAT** feeds RWY 20 (effective 16 May 2024).
- **Selection by arrival direction / runway:** Lisboa Approach assigns the STAR/merge point for the active runway configuration; both directions funnel through the PMS structure ahead of the ILS.
- **Transition to approach:** Descend via Mach transition to 280 KIAS on the STAR; expect vectoring from the PMS merge point onto the ILS.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart; expect additional flow speed control given the field's capacity-constrained single-runway environment.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR/PMS altitude gate.
- **Speed control:** STAR speed gates (Mach to 280 KIAS) and 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR/PMS crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** Late runway/config changes ahead of a frontal wind shift, and extended vectoring/holding during single-runway sequencing pressure, are the main energy traps at this field.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 02 | ILS (ILI) | **CAT III**; LVP trigger RVR TDZ ≤800 m or CBH ≤200 ft 🟩 | verify current chart |
| 20 | ILS (ILB) | **CAT III**; LVP trigger RVR TDZ ≤550 m or CBH ≤200 ft 🟩 | verify current chart; **THR displaced 499 m — LDA 3,207 m**, not the full 3,707 m physical length |

- **LVP triggers:** See table above — RWY 20 has the lower (more permissive) RVR trigger. ILS sub-category confirmed CAT III on both ends per the AIP navaid table.

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat Tagus estuary coastal plain at 355 ft AMSL — no close-in high terrain relevant to any arrival path.
- **Specific threats:** 🟥 **No crosswind runway remains** (17/35 permanently closed) — autumn–winter frontal passages bring crosswind/windshear conditions that must be flown on RWY 02/20 with no reciprocal-runway relief. Single-runway sequencing density is a standing consideration.
- **Airspace / traffic:** 🟥 Field operates at/near capacity on a single runway; PMS manages the merge but expect extended vectoring in busy periods or marginal weather.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat coastal plain) — fly the published MAP and verify climb-gradient/turn on the current chart. Note RWY 02's departure-side obstacle profile (Briefing §3.5) is a general field characteristic, though the missed-approach gradient itself (up to 3.5% to 2,000 ft on RWY 02) should be verified on the current chart.
- **Re-sequencing environment:** A go-around on this single-runway field drops directly back into the PMS-managed arrival stream with no parallel runway to absorb it — expect vectoring/holding before re-sequencing, especially during a capacity-constrained peak period.
- **Go-around traps:** Traffic/config awareness during the miss; no independent runway exists to de-conflict a simultaneous departure and go-around.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** RWY 02 **3,617 m** (THR displaced 90 m); RWY 20 **3,207 m** (THR displaced **499 m** — a large bite out of the 3,707 m physical length). Neither is limiting for K Global types at typical landing weights, but do not assume full-length distance on RWY 20 in particular.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Tower on the day. 🟧
- **Runway-excursion watch:** 🟧 With no crosswind runway remaining, crosswind/gust-driven excursion risk on RWY 02/20 is a real seasonal consideration in the autumn–winter frontal-passage window (Briefing §3.4).

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing, taxi in to the assigned terminal stand per Ground/Tower assignment; VAMSYS mirror gives a planning taxi-in time of **14 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟧 Areas not visible from the Tower include Apron 10/11 stands 104–108/114–117 and various positions across Aprons 20/30/40/41/42/50 — see [Briefing §13](index.md). Stop bars and runway-incursion alarm sensors protect the CAT II/III holding-position taxiways.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — stand-by-code-letter map not fully confirmed; wingspan-restricted apron notes exist for Apron 50 (>65 m via TWY M2) and Apron 14 (>58 m, reduced clearance).

---

## 9. Arrival frequency sequence

- **Sequence:** **Lisboa Approach (119.105/119.555/120.355/233.975/363.300, H24) or Lisboa Control/Arrival (123.980/119.555/120.355/282.700/233.975 · 125.130/119.555/120.355, HO) → Lisboa Tower (118.105/118.505/279.000/121.500/243.000, mixed H24/HX) → Lisboa Ground (121.755/118.505, 07:00–23:00).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Lisboa Approach** is the facility for Lisbon's terminal approach; **Lisboa ACC (LPPC)** hands off en route inbound — see [Europe airspace briefing](../../../../airspace/europe.md) (no dedicated FIR brief exists in this library). 🟧

---

## 10. Gotchas

- **No crosswind runway remains** — brief the crosswind/windshear case conservatively during autumn–winter frontal passages; there is no reciprocal-runway relief available.
- **RWY 20's threshold is displaced 499 m** (LDA 3,207 m) — a genuinely large displacement; do not assume full-length landing distance.
- **Field operates at/near capacity** — expect vectoring/holding as routine, especially in marginal weather or during a peak bank.
- **Config swap (02↔20) driven by a wind shift** can bring a late runway change — watch the ATIS wind trend closely given the field's single-runway/no-crosswind-option environment.
- **Hard night curfew 00:00–06:00** — a delayed arrival risks running into the curfew window; do not plan a schedule that relies on a very late landing.
- **PMS arrival structure (effective 16 May 2024)** is a comparatively recent procedure — confirm current familiarity if not routinely flown.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Exact transition level (only TA 4,000 ft confirmed).
- Exact LVP/CAT III trigger RVR values beyond the TDZ figures above (sub-100 m or CBH refinements).
- Rapid-exit taxiway/vacate detail.
- Current stand/gate assignment for our operation on taxi-in.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. CAT III equipment status), ATIS config/wind trend. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP Portugal (NAV Portugal eAIP), AD 2 LPPT**, valid from 11 Jun 2026 — https://ais.nav.pt/wp-content/uploads/AIS_Files/eAIP_Current/eAIP_Online/eAIP/html/eAIP/LP-AD-2.LPPT-en-PT.html (retrieved 2026-07-26). *STAR/IAP index, declared distances, communications.*
- VATSIM Forum — "New Procedures: Point Merge System at LPPT (WEF 16MAY2024)" — https://forum.vatsim.net/t/new-procedures-point-merge-system-at-lppt-wef-16may2024/5595 (retrieved 2026-07-26). *PMS procedure corroboration — network-sim source, not regulatory.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Portugal (NAV); K Global fields from live VAMSYS; 4-page pack. |
