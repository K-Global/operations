# LFRS — Nantes Atlantique · Arrival Page

**LFRS / NTE** · Bouguenais (Nantes), Pays de la Loire, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LFRS Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **RWY 03** preferred (until a 5 kt tailwind component is reached); **RWY 21** otherwise |
| Usual approach | **ILS CAT III (RWY 03)**; **RNP Y or RNP Z (AR) on RWY 21 — no ILS on that end** |
| Config logic | Noise-abatement RWY 03 preference, not purely wind-driven — see §2 |
| Transition level | By QNH, calculated by Nantes Approche; transition altitude 5,000 ft |
| LVP trigger | Not published / verify exact RVR figures — TWY B/E unusable in LVP, further taxiway restriction at RVR < 150 m 🟧 |
| Missed-approach driver | Airspace/traffic and the RWY 21 mandatory ATC position-report requirement — not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not published in the reachable source extract — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** **RWY 03 is preferred until a 5 kt tailwind component is reached** — a noise-abatement preference (not purely a wind-limit rule); RWY 21 is used otherwise. Nantes Approche assigns the STAR-to-runway transition for the active configuration.
- **Transition to approach:** RWY 03 — RNAV/radar-vectored transition to the ILS CAT III. RWY 21 — transition to RNP Y or RNP Z (AR); the latter requires prior operator/crew/aircraft RNP AR authorisation (see [Briefing §5](index.md)). 🟥
- **Speed / flow constraints on the STAR:** Standard 250 KIAS below FL100 (EU/ICAO norm) — pointer only, verify current chart. 🟧

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning to meet the first STAR/approach altitude gate; no LFRS-specific TOD rule-of-thumb sourced this pass.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 — pointer, verify chart. 🟧
- **Altitude constraints:** Key STAR/approach crossing constraints are pointers — fly the charted altitudes. 🟧
- **Energy traps:** A late runway-direction change (03↔21 ahead of a wind shift past the 5 kt tailwind threshold) is the field's most relevant energy trap — it also changes the approach-aid picture entirely (CAT III ILS vs. no-ILS RNP-only), not merely the landing direction.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 03 | ILS (LOC ident NT, 109.9; GP 333.8, 3.0°) | **CAT III** 🟩 — the field's precision-capable runway; full approach lighting (900 m, LIH) | verify current chart |
| 21 | RNP Y | Non-precision RNP; must comply with chart instructions to avoid overflying Nantes city centre; **mandatory ATC position report required** (see current IAC chart); non-precision approach lighting only (420 m, LIH) | verify current chart |
| 21 | RNP Z (AR) | 🟥 **Authorization Required** — specific operator/crew/aircraft approval needed before use; same noise-avoidance/position-report requirement applies | verify current chart |

- **PAPI:** RWY 03 — 3.0°/5.2%, MEHT 61 ft. RWY 21 — 3.1°/5.4%, MEHT 60 ft.
- **LVP triggers:** Exact RVR trigger figures not published in the reachable extract. 🟧 In LVP, **TWY B and E are not usable**; when RVR < 150 m, only TWY A, R1, R2, C, RC, R3, D, RD, R4, R5, F are usable (see [Departure §2](departure.md)).

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 No significant close-in high terrain expected — low-lying coastal Loire-estuary field at 90 ft AMSL. 🟧 Not independently cross-checked against a published obstacle/MSA chart this pass — see [Briefing §3.1](index.md).
- **Specific threats:** 🟥 **The runway is curved and there is no visibility of the opposite threshold from either end** — a genuine situational-awareness caution on final approach and landing, not merely a taxi-phase concern. **RWY 21 has no ILS** — a crew without current RNP AR authorisation is effectively limited to the RNP Y procedure or must divert to RWY 03 conditions; this is a real approach-availability constraint, not a formality. RWY 21 also carries a displaced threshold reducing usable LDA to 2,591 m (vs. RWY 03's full 2,853 m).
- **Airspace / traffic:** 🟧 Class D CTR under Nantes Approche radar, multiple sub-sectors (aux/NA/NB/RS/LU) — moderate-to-busy regional TMA; sits under **Brest ACC (LFRR)**, for which no dedicated K Global FIR brief exists — see the general [Europe airspace briefing](../../../../airspace/europe.md) and [Briefing §3.2](index.md).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not terrain-driven (low-lying coastal field) — fly the published missed approach and verify climb-gradient/turn constraints on the current chart. 🟧
- **Re-sequencing environment:** A go-around returns the aircraft into the Nantes Approche sector structure for re-sequencing; specific holding/vectoring detail not confirmed in the reachable extract. 🟧
- **Go-around traps:** On a RWY 21 approach, remember the **mandatory ATC position-report requirement** applies to the approach itself (see current IAC chart) — a go-around does not remove the need to have complied with that reporting requirement up to the point of the miss. The curved-runway/no-opposite-threshold-visibility geometry (§5) is also relevant to a late go-around decision near the flare.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** **RWY 03 — 2,853 m** (no displaced threshold). **RWY 21 — 2,591 m**, reduced by a displaced threshold (DTHR elevation 83 ft vs. THR elevation 87 ft). Do not plan RWY 21 landing distance against the runway's nominal 2,853 m length.
- **Braking / vacate:** Preferential runway vacating — **RWY 21 via TWY B**; **RWY 03** should preferentially vacate via **TWY C, D or E** to avoid infringing the localizer critical area. No rapid-exit/high-speed-turnoff taxiway individually named in the reachable extract. 🟧
- **Runway-excursion watch:** 🟥 The runway's **published non-uniform longitudinal/transverse slope profile** (longitudinal slope exceeding 1.25% along the runway and 0.8% in the first/last quarters; transverse slope exceeding 2.5% in the first/last quarter of the strip and occasionally exceeding 5% on the first 3 m) is a genuine, AIP-sourced surface/geometry caution for landing roll and braking-distance margin planning — combined with **RESA sizing that differs by end** (90 × 90 m at RWY 03, 190 × 90 m at RWY 21) and the reduced RWY 21 LDA, this should shape a conservative landing-distance margin, particularly on RWY 21.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing, vacate per the preferential logic above (RWY 21 via TWY B; RWY 03 via C/D/E) and taxi to the assigned stand per Ground/Tower; VAMSYS mirror gives a planning taxi-in time of **6 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟥 **TWY RD is limited to aircraft with wingspan < 36 m; TWY D and E are limited to aircraft with main-gear outer width (OMGWS) < 9 m.** **No takeoff is possible from TWY C or D** (relevant to crossing/ground-movement awareness even though this is a landing-phase note). **A340-200/300** must keep outer engines at idle for the entire taxi phase. See [Briefing §13](index.md).
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — **Stand 5A** (widebody-reserved, limit taxi speed on TWY RC for the final turn) and **Stand 18A** (B757-200, requires adapted taxi speed and "oversteering" technique for the last turn) are the only individually named stands. Stand entry requires marshaller assistance or an ATC-directed centreline hold if no marshaller is present; parking is generally nose-in. **Follow-me is mandatory for stand KILO 1 when RVR < 350 m.**

---

## 9. Arrival frequency sequence

- **Sequence:** **Nantes Approche** (119.400 aux below FL115 / 119.535 above FL115 Sector LU / 120.130 Sectors NA1-4 / 121.215 aux above FL115 / 124.250 Sectors NB1-5 / 124.430 Sectors RS1-4 — sector-specific) **→ Nantes Tower 118.655 (HO) → Nantes Ground 121.655 (HO).** Take the assigned frequency and confirm current chart. (Frequencies from [Briefing §8](index.md).)
- **Approach/Departure control:** **Nantes Approche** provides radar surveillance, vectoring and flight-information/alert services within the Nantes TMA; the field sits under **Brest ACC (LFRR)** for wider FIR context, for which no dedicated K Global FIR brief currently exists — see the general [Europe airspace briefing](../../../../airspace/europe.md). 🟧

---

## 10. Gotchas

- **The runway is curved with no visibility of the opposite threshold from either end** — do not assume a clear sightline on final or during the landing roll; this is a standing situational-awareness caution at this field.
- **RWY 21 has no ILS** — an uncurrent-RNP-AR crew flying an approach in low visibility with a tailwind under 5 kt on RWY 03's reciprocal has a materially reduced approach-availability picture; plan for RWY 03 as the default low-vis option.
- **RWY 21 LDA is reduced to 2,591 m** by a displaced threshold — do not plan landing distance against the runway's nominal length for that direction.
- **Published runway slope irregularities** (longitudinal and transverse, including up to 5% transverse on the first 3 m of the strip in places) are a genuine AIP-sourced landing-roll/braking-margin caution, particularly on RWY 21 where RESA is larger (190 × 90 m vs. 90 × 90 m) — a signal the geometry there warrants extra margin.
- **RWY 21 arrivals require a mandatory ATC position report** per the current IAC chart, in addition to the standard noise-avoidance routing to avoid Nantes city centre — do not treat this as optional.
- **Hard curfew 0000–0600** — a delayed arrival that would land in this window is prohibited outright, with only two narrow, Ministerially-gated exceptions; do not plan a schedule that relies on a post-curfew landing.
- **Config swap (03↔21) driven by a wind shift past the 5 kt tailwind threshold** can bring a late runway change with a completely different approach-aid picture (CAT III ILS vs. no-ILS RNP) — watch the ATIS wind trend closely.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- Exact LVP/RVR trigger values for the field (taxiway-usability thresholds are sourced; the field's own LVP declaration trigger is not).
- Rapid-exit taxiway/vacate detail beyond the preferential-vacating rule.
- Missed-approach holding/re-sequencing detail.
- Terrain/obstacle cross-check for the CFIT 🟩 assessment.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. RWY 03 ILS status given RWY 21 has no ILS), ATIS config/wind trend (given the 5 kt tailwind runway-preference threshold), current AUP/UUP or RAD status in the Brest FIR. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **SIA France eAIP — AD 2 LFRS**, AIRAC cycle eff. 09 JUL 2026 (retrieved 2026-07-26) — https://www.sia.aviation-civile.gouv.fr/ (eAIP France portal; AD 2 LFRS section within the current AIRAC package). Primary source for runway/declared-distance data, navaids/approach-lighting, communications, noise-abatement arrival routing (AD 2 LFRS.21), and taxiway restrictions.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
