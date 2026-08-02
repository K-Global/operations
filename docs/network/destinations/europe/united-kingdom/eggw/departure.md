# EGGW — Luton · Departure Page

**EGGW / LTN** · Luton, Bedfordshire, United Kingdom · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [EGGW Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **07 or 25** — single runway, wind-driven selection |
| Config logic | Wind-driven single-runway operation; no parallel/alternate runway |
| Transition altitude | 🟧 Not confirmed in the AIP sections reached this pass |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | Slot-coordinated Level 3 (ACL); all flights require a slot allocation |
| De-icing on departure | Available — "by arrangement with handling companies" |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From the single terminal, Ground routes toward the active runway (07 or 25) via Taxiways A/B/C/D/F/H/K (23 m wide asphalt); confirm the exact taxi with Ground on the day.
- **Hot spots / tight taxiways:** 🟥 **Holding Point Hotel 1** — "unusual alignment of the taxiway and runway entry point," caution when queuing; the area immediately west of H1 is explicitly **not** a holding area. **Taxiway Echo 1** — 19 m wide concrete, exceeds the 1.5% slope guideline at 1.7%; **no widebody transit** in either direction, maximum size B757/A321 under power. **Hold A4E** — not usable by aircraft larger than 737-800/BBJ/A321; eastbound via A4 only `[UK AIP AD 2.8/2.20]`.
- **Runway crossings / read-back-required points:** Confirm with Ground/Tower for the active runway configuration; no specific crossing-hazard detail beyond the H1/A4E cautions above was confirmed this pass.
- **Low-vis taxi caveats:** SMGCS/low-vis taxi routing applies consistent with the field's CAT II/III capability; follow-me is **mandatory for widebody aircraft via Taxiway Bravo 8** `[UK AIP AD 2.20]`; general follow-me availability for other types not itemised. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Single runway 07/25 — wind-driven selection with no parallel option.
- **By departure direction:** Confirmed Noise Preferential Routeings (NPRs) differ by runway/direction — see §4 below.
- **Noise / preferential-runway program:** **NPRs are mandatory for all departing jets and aircraft >5,700 kg** — obligation ceases at 3,000 ft QNH (day) / 4,000 ft QNH (night) for conventional SIDs, 4,000 ft QNH for RNAV1 SIDs; track deviations outside the published "Lateral Swathe" incur a nominal fine `[UK AIP AD 2.21]`.
- **Interaction with arrivals:** Single-runway field — departures and arrivals share the one active runway sequentially; expect ATC to interleave departures within the arrival stream.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID / NPR (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| **OLNEY Kilo / Juliet** | 25 | Conventional NPR — verify gradient on current chart | AIP AD 2.21 §5 confirmed designator |
| **Compton Papa** | 25 | Conventional NPR | AIP AD 2.21 §5 confirmed designator |
| **Non-RNAV MATCH/Detling Mike** | 25 | Conventional NPR | AIP AD 2.21 §5 confirmed designator |
| **RNAV MATCH/Detling** | 25 | RNAV1 SID — 4,000 ft QNH NPR ceiling | AIP AD 2.21 §5 confirmed designator |
| **OLNEY Sierra** | 07 | Conventional NPR | AIP AD 2.21 §5 confirmed designator |
| **Compton Uniform / Victor** | 07 | Conventional NPR | AIP AD 2.21 §5 confirmed designator |
| **MATCH/Detling Tango** | 07 | Conventional NPR | AIP AD 2.21 §5 confirmed designator |

*These designators are confirmed from the primary UK AIP AD 2‑EGGW §5 table (AIRAC cycle effective 2022‑06‑16) — a genuinely rare case of primary-sourced SID/NPR names in this build. Still fly only the current-AIRAC chart version; do not use the above as a substitute for the current chart's routing/gradient detail.*

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (UK/ICAO norm) — confirm current chart. RWY 25 conventional NPRs (OLNEY Kilo/Juliet) include a published initial-climb structure (e.g. "climb straight ahead to 500 ft AAL, turn left to intercept BNN VOR R032°...") — verify on current chart, do not fly from this summary.
- **Noise-abatement departure procedure (NADP):** Not itemised beyond the NPR structure in §4 — the NPR obligation (3,000/4,000 ft QNH ceiling) functions as the field's primary noise-abatement departure control. 🟧
- **Early turn / altitude constraints:** Published per NPR (§4) — verify constraints on the current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** **Trees at 523–555 ft elevation (up to ~74 ft AGL)** near the RWY 25 approach; **masts to 721–722 ft elevation (165–168 ft AGL, lit red)** and a TV mast at 698 ft in the circling area/aerodrome vicinity `[UK AIP AD 2.10]`. The field's hill-edge siting (~40 m drop-off at the runway's western end, per Wikipedia) is a genuine local obstacle/terrain consideration distinct from the flat-lowland EGLL/EGKK profile.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** LVP applies consistent with the field's confirmed CAT II/III capability on both runway ends; specific LVTO RVR minima not confirmed this pass. 🟧
- **De-icing:** "By arrangement with handling companies," H24 per the operational-hours table `[UK AIP AD 2.3/2.7]`. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Luton Delivery **121.885** (when directed by ATC) `[UK AIP AD 2.18]`.
- **Frequency sequence:** **Delivery 121.885 → Ground 121.755 (0600–2300 local) → Tower 132.555 (primary, H24) → Luton Radar 129.550 (H24)/132.050 (when directed) → Luton Director 128.750 (when directed).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** **IATA Level 3 slot-coordinated** (ACL) — all flights require a slot allocation, including ad-hoc requests via the ACL online-coordination portal `[UK AIP AD 2.20]`.

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Single runway 2,162 m is **non-limiting for K Global's Category S fleet** at typical departure weights, but is comparatively short for a London-area field generally — confirm performance margin for the specific type/weight combination. See [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md).
- **Density altitude / temperature:** Field elevation 527 ft is modest but the highest of the three UK fields in this pack — non-issue for density altitude at typical temperatures, but a factor to include in performance-margin calculations at the margin.
- **Contamination / wet-runway:** Winter weather is the relevant seasonal consideration; no specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — confirm current-weight performance margin for any type larger than the routine Category S fleet before scheduling into EGGW.

---

## 10. Gotchas

- **Rising terrain / hill-edge siting to the west of the runway** — distinct from the flat profile at EGLL/EGKK; the field's ~40 m western drop-off and charted obstacles (trees, masts) warrant genuine attention.
- **RWY 25 threshold displaced 82 m** — brief the reduced ASDA/LDA, not the full runway length.
- **Taxiway Echo 1 has no widebody transit in either direction** — confirm current type/taxi plan before scheduling anything beyond B757/A321 size.
- **Widebody Follow-Me is mandatory via Taxiway Bravo 8** — plan accordingly if a larger type is ever scheduled.
- **NPR compliance is mandatory** — track deviations outside the "Lateral Swathe" incur a nominal fine; fly the charted NPR precisely.
- **Luton's own night noise/QC scheme is stricter and structurally different from the Heathrow/Gatwick/Stansted DfT scheme** — do not assume the same numeric limits; the 0545 early-arrival restriction is a distinctive Luton feature with no direct EGLL/EGKK equivalent.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Transition altitude/level.
- Take-off minima / exact figures.
- LVTO RVR minima.
- EOSID/engine-out procedure detail per runway.
- Current-AIRAC re-verification of the confirmed AD 2.21 NPR designators (§4) against the live chart.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. mast/obstacle status), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **UK AIP (NATS AIS), AD 2‑EGGW**, AIRAC cycle effective 2022‑06‑16 — https://www.aurora.nats.co.uk/htmlAIP/Publications/2022-06-16-AIRAC/html/eAIP/EG-AD-2.EGGW-en-GB.html (retrieved 2026-07-26). *Taxiway/hot-spot data, NPR/SID designator table, communications, obstacles.*
- Wikipedia — "Luton Airport" — https://en.wikipedia.org/wiki/Luton_Airport (retrieved 2026-07-26). *Hill-edge siting.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from UK AIP (NATS AIS); K Global fields from live VAMSYS; 4-page pack. |
