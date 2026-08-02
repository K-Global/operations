# EGGW — Luton · Arrival Page

**EGGW / LTN** · Luton, Bedfordshire, United Kingdom · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [EGGW Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **07 or 25** — single runway, wind-driven selection |
| Usual approach | ILS (I-LTN on RWY 07, I-LJ on RWY 25), Category III capability confirmed |
| Config logic | Wind-driven single-runway operation; no parallel/alternate runway |
| Transition level | By QNH; transition altitude 🟧 not confirmed in the AIP sections reached this pass |
| LVP trigger | CAT II/III capability confirmed on both runway ends; exact RVR trigger not confirmed this pass 🟧 |
| Missed-approach driver | **Rising terrain / hill-edge siting to the west**, not airspace/traffic density — distinct from the flat-lowland EGLL/EGKK profile |

---

## 2. STAR / transition selection

- **STARs / holding fixes (names only — verify current AIRAC):** **ABBOT** (Terminal Holding facility **shared with Stansted/Cambridge arrivals** — cross-field traffic awareness required) and **ZAGZO** (Luton-only Terminal Holding facility); reporting point **BIGLI** used for arrivals from the north/northeast under coordination with London Military `[UK AIP AD 2.21/2.22]`. Pull the current-AIRAC STAR list at planning.
- **Selection by arrival direction / runway:** Wind-driven single-runway selection; Luton Radar assigns the holding-fix-to-runway transition.
- **Transition to approach:** Expect a holding-fix-to-ILS transition with radar vectors onto final; verify the charted transition.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart. **CDA is mandatory** for jets/props >5,700 kg from 5,000 ft QNH with no level segment exceeding 2.5 NM `[UK AIP AD 2.21]`.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the mandatory CDA profile from 5,000 ft QNH.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 (UK/ICAO norm) — confirm current chart. CDA compliance (no level segment >2.5 NM) is a mandatory noise-abatement requirement here, not merely best practice.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes; the CDA-from-5,000-ft-QNH profile is a distinctive, mandatory feature at this field.
- **Energy traps:** The **rising terrain to the west and the runway's own hill-edge siting** are the field's distinctive energy/terrain-awareness trap — brief this specifically, it is not present at the flat-lowland EGLL/EGKK profile. Sharing the **ABBOT** hold with Stansted/Cambridge traffic is a secondary cross-field-awareness item.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 07 | ILS (I-LTN, 109.150) | Category III capability confirmed; AIP-flagged "possible light distraction on approach" 🟧 | verify current chart |
| 25 | ILS (I-LJ, 109.150) | Category III capability confirmed; displaced threshold, reduced LDA 2,080 m 🟧 | verify current chart |

- **LVP triggers:** CAT II/III capability confirmed on both runway ends per AIP AD 2.20 §3; exact RVR/trigger figures not confirmed this pass. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟧 EGGW sits at 527 ft AMSL at the NE edge of the **Chiltern Hills**, with a **~40 m (130 ft) drop-off at the runway's western end** `[Wikipedia, tier-4]` and AIP-confirmed obstacles (trees 523–555 ft, masts to ~722 ft lit red) near the field `[UK AIP AD 2.10]`. Not a major CFIT driver at normal instrument-approach altitudes, but a genuine local terrain-awareness item — distinct from the flat-lowland EGLL/EGKK profile. The AIP itself carries a specific, named caution: **"Possible light distraction on approach to Runway 07."**
- **Specific threats:** 🟧 Single-runway field — no closely-spaced-parallel or offset/converging-approach threat exists here (unlike EGLL/EGKK). The main specific threat is the rising terrain noted above.
- **Airspace / traffic:** 🟧 The **ABBOT** holding fix is shared with Stansted/Cambridge arrivals — maintain cross-field traffic awareness distinct from the purely Luton-local **ZAGZO** hold.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** 🟧 Unlike EGLL/EGKK, **terrain is a genuine consideration here** — the rising ground to the north/northeast and the runway's own hill-edge siting should factor into the missed-approach climb-gradient/turn brief; verify current chart.
- **Re-sequencing environment:** Single-runway field with shared (ABBOT) and local (ZAGZO) holding — expect vectoring/holding on a go-around, with cross-field traffic awareness at ABBOT.
- **Go-around traps:** Terrain awareness on the miss is the primary trap here, more so than at the flat-lowland EGLL/EGKK fields.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** RWY 07 **2,162 m** (no displacement); RWY 25 **2,080 m** (82 m displaced threshold) `[UK AIP AD 2.12/2.13]` — non-limiting for K Global's Category S fleet at typical arrival weights, but comparatively short for a London-area field generally.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Tower on the day. 🟧
- **Runway-excursion watch:** 🟧 Displaced-threshold LDA reduction on RWY 25 is the primary factor; winter-contamination braking-action consideration applies in the de-icing season; the comparatively short overall runway length is a standing generic watch-item for larger/heavier types.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on the active runway, taxi in to the single terminal per Ground assignment; VAMSYS mirror gives a planning taxi-in time of **12 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟥 **Holding Point Hotel 1** — unusual taxiway/runway-entry alignment, caution when queuing (area immediately west of H1 is not a holding area); **Taxiway Echo 1** — no widebody transit; **Hold A4E** — not usable by aircraft larger than 737-800/BBJ/A321 `[UK AIP AD 2.8/2.20]`.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — widebody Follow-Me mandatory via Taxiway Bravo 8; specific gate assignment for our operation not confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Luton Radar (129.550 H24 / 132.050 when directed) → Luton Director (128.750, when directed) → Luton Tower (132.555 primary, H24) → Luton Ground (121.755, 0600–2300 local).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Luton Radar** is the facility for Luton's terminal approach; **London (EGTT)** hands off en route inbound — **no dedicated EGTT FIR brief exists yet in this library**; see [Europe airspace briefing](../../../../airspace/europe.md) for continental context. 🟧

---

## 10. Gotchas

- **Rising terrain to the west and the runway's own hill-edge siting** — a genuine terrain-awareness item distinct from the flat-lowland EGLL/EGKK profile; brief specifically.
- **RWY 25 threshold displaced 82 m** — brief the reduced LDA (2,080 m).
- **AIP-published caution: "Possible light distraction on approach to Runway 07"** — a named, charted hazard specific to this field.
- **ABBOT hold is shared with Stansted/Cambridge traffic** — maintain cross-field awareness distinct from the Luton-only ZAGZO hold.
- **Mandatory CDA from 5,000 ft QNH** with no level segment >2.5 NM — a stricter noise-abatement requirement than a generic "best practice" CDA.
- **0545–0700 scheduled-arrivals-only window** — an early-scheduled or unscheduled-early arrival will be refused; plan tightly to this local rule, distinct from anything at EGLL/EGKK.
- **Taxiway Echo 1 has no widebody transit** — confirm current type/taxi plan on arrival if operating anything larger than Category S.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Transition altitude/level.
- ILS sub-category (IIIA/IIIB/IIIC) confirmation.
- Exact LVP/CAT trigger RVR values.
- Rapid-exit taxiway/vacate detail.
- "Barton Hills" as the specific named high ground — not independently confirmed by name this pass; the ~40 m drop-off and AIP obstacle data are confirmed, the hill name is not.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. mast/obstacle status), ATIS config/wind trend, current arrival-window compliance. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **UK AIP (NATS AIS), AD 2‑EGGW**, AIRAC cycle effective 2022‑06‑16 — https://www.aurora.nats.co.uk/htmlAIP/Publications/2022-06-16-AIRAC/html/eAIP/EG-AD-2.EGGW-en-GB.html (retrieved 2026-07-26). *Declared distances, navaids, obstacles, holding fixes, noise abatement/CDA requirement.*
- Wikipedia — "Luton Airport" — https://en.wikipedia.org/wiki/Luton_Airport (retrieved 2026-07-26). *Hill-edge siting.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from UK AIP (NATS AIS); K Global fields from live VAMSYS; 4-page pack. |
