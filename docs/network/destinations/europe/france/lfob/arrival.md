# LFOB — Beauvais-Tillé · Arrival Page

**LFOB / BVA** · Beauvais, Hauts-de-France, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LFOB Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **12 or 30** — whichever the wind favours; single runway, no reciprocal alternative |
| Usual approach | **ILS RWY 12** (CAT I/III, ident BVT) or **ILS RWY 30** (CAT I only, ident BI), per active runway |
| Config logic | Wind-driven only — no traffic/noise-preference alternative to weigh |
| Transition level | By QNH (1013.2 hPa standard); transition altitude 5,000 ft AMSL — verify current chart 🟧 |
| LVP trigger | Northern-France fog/low-cloud; **CAT III mitigation exists only on RWY 12** — RWY 30 caps at CAT I 🟥 |
| Missed-approach driver | No parallel runway for re-sequencing; single-runway environment |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** All TMA Paris sectors are stated to provide RNAV STARs serving Beauvais arrivals; individual STAR names not confirmed in reachable sources — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Beauvais Approach assigns the STAR-to-runway transition for whichever runway (12 or 30) the wind favours on the day.
- **Transition to approach:** Expect a radar-vectored transition onto the ILS for the active runway; verify the charted transition.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate.
- **Speed control:** 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** A late runway/config change driven by a wind shift is the main energy trap at this single-runway field — there is no "other side" to fall back on if the wind swings; brief the contingency early.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 12 | ILS (BVT) | **CAT I and CAT III**; **CAT II prohibited** 🟥 | verify current chart |
| 30 | ILS (BI) | **CAT I only** 🟧 | verify current chart |

- **LVP triggers:** Fog/low-cloud events are the routine trigger. Because CAT III capability exists **only on RWY 12**, a low-visibility event with wind favouring RWY 30 caps the field's effective approach minima at CAT I — plan a holding/diversion contingency for that scenario specifically. Exact RVR/trigger figures not confirmed this pass. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟥 AIP France documents an **irregular terrain step-profile within the radio-altimeter coverage area** approximately 300 m upstream of the RWY 12 threshold. Radio-altimeter indications can change unusually fast (roughly 230 ft to 100 ft RA) through this zone — the AIP requires operators to confirm pilots are briefed on this effect. Treat as a standing crew-awareness item on any RWY 12 arrival, particularly relevant to CAT III/autoland approaches. Cross-ref [Briefing §3.1](index.md).
- **Specific threats:** No closely-spaced-parallel or offset/converging-approach geometry (single runway). Documented **wildlife/bird-strike hazard**, including active falconry-based bird control on the field — maintain a normal bird-strike scan on approach.
- **Airspace / traffic:** 🟩 Moderate density under radar-controlled **Beauvais Approach** (Class D CTR) within TMA Paris — materially simpler than a major multi-runway hub environment.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** No specific terrain-driven missed-approach constraint identified beyond the RWY 12 radio-altimeter/terrain-profile note (§5), which is an approach-phase, not missed-approach, item — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around returns the aircraft to a single-runway sequencing environment with no parallel runway to divert traffic onto — expect vectoring and possible holding, especially during a winter fog event with reduced-rate arrivals.
- **Go-around traps:** Awareness that RWY 30's CAT-I-only status may constrain a re-attempt option if the field is near CAT I minima and wind still favours RWY 30.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** RWY 12 **2,385 m** (displaced threshold); RWY 30 **2,429 m** (full length, no displacement) — cross-ref [Briefing §7](index.md). Workable for narrowbody LCC-class types but a genuine single-runway, no-alternative-length case; mind the RWY 12 displacement specifically.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Tower/Ground on the day. 🟧
- **Runway-excursion watch:** 🟧 No runway-choice flexibility exists for wind — accept the published crosswind component as briefed; winter contamination/braking-action consideration applies in the Oct–May de-icing season (on-request provisioning, not pad-based — see [Briefing §14](index.md)).

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on the active runway, taxi in to the single terminal apron via taxiways N/W/R/T per Tower/Ground assignment; VAMSYS taxi-in time is **not set (n/a)** for this field.
- **Hot spots / tight taxiways:** 🟩 None specifically AIP-flagged as complex/caution junctions — a materially simpler taxi-in environment than a multi-runway hub. TWY A/P and the grass TWY H (day-only, wingspan <15 m) are light-aircraft-only and not relevant to our taxi-in routing.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — 12 numbered narrowbody-rated stands, no widebody-class positions.

---

## 9. Arrival frequency sequence

- **Sequence:** **Beauvais Approach 121.400 (aux)/123.985 (8.33, sector WEST/EAST) → Beauvais Tower 121.400/123.985 (aux) → ground coordination via Beauvais Ops 131.540.** Take the assigned frequency and confirm current chart. (Frequencies from [Briefing §8](index.md).)
- **Approach/Departure control:** **Beauvais Approach** provides permanent radar service within CTR/TMA Beauvais; handoff to/from **Paris FIR (LFFF)**, worked by DSNA, en route. 🟧 No dedicated Paris (LFFF) FIR brief exists yet in this tree — see the [Europe area brief](../../../../airspace/europe.md) and Briefing §18.

---

## 10. Gotchas

- **No runway choice on arrival** — whichever the wind favours (12 or 30) is the only option; there is no parallel or crosswind-favoured alternative.
- **RWY 30 is CAT I only** — do not expect CAT III capability if the wind favours RWY 30 in low visibility.
- **CAT II approaches are prohibited on RWY 12** — the field skips directly from CAT I to CAT III.
- **RWY 12's radio altimeter shows unusually fast height changes near the threshold** (documented irregular terrain step-profile) — briefed crew-awareness item, not a chart anomaly.
- **RWY 12 displaced threshold** — LDA is 2,385 m, not the full 2,429 m.
- **Hard night curfew 0000–0500** — a delayed arrival cannot legally land in this window; plan buffer well ahead of the restricted 2200–0000/0500–0700 tier too.
- **Field is not H24** — confirm current ATS-hours-extension status before planning an edge-of-window arrival.
- **Documented wildlife/bird-strike hazard**, including falconry-based bird control in use on the field.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- CAT III/CAT I RVR trigger values.
- Rapid-exit taxiway/vacate detail.
- Approach/Departure control sector-specific frequency assignment (AIRAC-dependent).

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. RFF-category watch status), ATIS config/wind trend, current AUP/UUP or RAD status in the Paris FIR. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP France, AD 2 LFOB** (AIRAC AMDT 02/25, eff. 20 Feb 2025) — approach/navaid index, runway/declared-distance data, communications, terrain-profile note — compiled/mirrored via DIRCAM MIAC1, https://www.dircam.dsae.defense.gouv.fr/images/Stories/Doc/MIAC1/miac1_beauvais_lfob.pdf (retrieved 2026-07-26).
- Wikipedia — "Beauvais–Tillé Airport" — https://en.wikipedia.org/wiki/Beauvais%E2%80%93Till%C3%A9_Airport (retrieved 2026-07-26). *CAT III RWY 12 / CAT I RWY 30 corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
