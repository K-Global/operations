# SBKP — Viracopos International · Arrival Page

**SBKP / VCP** · Campinas, São Paulo, Brazil · South America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Brasil (DECEA)-derived

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [SBKP Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Single runway 15/33 — direction selected by wind 🟧 |
| Usual approach | Not confirmed by name/CAT 🟧 |
| Config logic | Wind-driven; N/A parallel-runway logic (single runway) |
| Transition level | Not confirmed 🟧 |
| LVP trigger | Not confirmed; winter (Jun–Aug) plateau fog/stratus mirrors SBGR, though SBKP's historical closure rate is lower 🟧 |
| Missed-approach driver | Re-sequencing on a single-runway field, not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Not confirmed — Campinas Approach assigns the STAR-to-runway transition for the active wind direction.
- **Transition to approach:** Not confirmed. 🟧
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** Late direction change ahead of a wind shift is a bigger factor here than at a parallel-runway field, since there is only one runway to re-plan onto; a winter fog event can also compress the descent.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 15 | Not confirmed 🟧 | No displacement found 🟩 | verify current chart |
| 33 | Not confirmed 🟧 | Threshold displaced 91 m 🟧 | verify current chart |

- **LVP triggers:** Not confirmed; winter (Jun–Aug) plateau fog/stratus is the plausible trigger, mirroring SBGR ~40 km away, though SBKP's historical closure rate is notably lower (Briefing §3.4). 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟧 No specific close-in terrain identified for SBKP in reachable research — the field sits on the same broad Paulista plateau as SBGR without a specifically flagged obstacle this pass. Read MSA off the current chart.
- **Specific threats:** 🟧 **RWY 33 threshold displaced 91 m** — confirm the correct landing LDA before committing to that direction. As a **single-runway field**, there is no parallel to shift a sequencing/spacing problem to — the operative "specific threat" here is runway availability itself, not a terrain or converging-approach hazard.
- **Airspace / traffic:** 🟧 Mixed pax/cargo/freighter traffic on the one runway, within the broader São Paulo TMA complex (Briefing §3.2).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** No specific terrain driver identified for SBKP — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** On a single-runway field, a go-around means re-joining the sequence for the **same** runway — there is no parallel to divert traffic to while you re-sequence. Expect this to matter more here than at a multi-runway field.
- **Go-around traps:** Mixed traffic-type (pax/cargo/freighter) awareness on the go-around; confirm current wind/config before committing to a second approach.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** RWY 15 ~3,240 m (no displacement found); **RWY 33 landing LDA ≈ 3,149 m** (91 m threshold displacement) — **derived from the displacement figure, not an independently confirmed declared-distance table** 🟧. Both are non-limiting for typical K Global arrival weights.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Apron on the day. 🟧
- **Runway-excursion watch:** 🟧 No SBKP-specific runway-excursion accident found in reachable research; a 2012 landing-gear-collapse incident (mechanical, not excursion) closed the runway for 45 hours — the operative lesson is the field's **single-runway vulnerability** (Briefing §3.5) rather than a specific excursion pattern.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not confirmed — confirm with Ground/Apron on the day; VAMSYS mirror gives a planning taxi-in time of **12 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** Not confirmed in reachable sources; expect mixed pax/cargo/freighter ground traffic given the field's cargo-hub role. 🟧
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — single passenger terminal (phase-1 building opened May 2015); exact current gate assignment not confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Campinas Approach 121.400 → Campinas Tower 118.250 → Campinas Ground 121.900.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Campinas Approach** is the facility for SBKP's terminal approach; **Curitiba (SBCW) FIR / ACC-CW (CINDACTA II)** hands off en route inbound — see [South America Airspace briefing](../../../../airspace/south-america.md). 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **Single runway, no parallel** — a go-around or a runway-status issue means re-joining the sequence for the same runway; there is no fallback.
- **RWY 33 threshold displaced 91 m** — confirm the correct landing LDA before landing in that direction.
- **SBKP is SBGR's designated primary alternate** — if arriving here as a diversion, remember that a runway-blocking event at SBKP itself removes this option entirely for the fleet-wide network, not just for your flight.
- **Winter (Jun–Aug) plateau fog/stratus** risk mirrors SBGR, though SBKP's historical closure rate is notably lower — don't assume it is fog-immune.
- **Mixed pax/cargo/freighter traffic** on the one runway — expect a different sequencing rhythm than a pure-passenger field.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima/CAT per runway.
- Exact declared LDA for RWY 33 (currently derived from the displacement figure, not an official declared-distance table).
- Rapid-exit taxiway/vacate detail and taxi-in routing.
- Second-runway project status.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting — critical on this single-runway field), ATIS config/wind trend. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **DECEA / AISWEB — AIP Brasil, aerodrome page AD 2 SBKP** — https://aisweb.decea.mil.br/?i=aerodromos&codigo=SBKP (JS-rendered frameset; not readable to a direct fetch this pass) (attempted 2026-07-26).
- OurAirports — https://ourairports.com/airports/SBKP/runways.html (retrieved 2026-07-26). *Displaced-threshold figure.*
- Wikipedia — "Viracopos–Campinas International Airport" — https://en.wikipedia.org/wiki/Viracopos-Campinas_International_Airport (retrieved 2026-07-26). *2012 gear-collapse closure, weather-reliability reputation.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Brasil (DECEA); K Global fields from live VAMSYS; 4-page pack. |
