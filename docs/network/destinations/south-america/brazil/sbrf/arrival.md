# SBRF — Guararapes-Gilberto Freyre Int · Arrival Page

**SBRF / REC** · Recife, Pernambuco, Brazil · South America

**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [SBRF Briefing](index.md), Dispatch and Departure pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Not published — single runway 18/36, wind-dependent |
| Usual approach | Not confirmed this pass — verify current AIRAC 🟧 |
| Config logic | Wind-driven (single runway) |
| Transition level | Not published / verify 🟧 |
| LVP trigger | Not published / verify 🟧 |
| Missed-approach driver | Close-in low terrain (historical) — see §5/§6 |

---

## 2. STAR / transition selection

- **STARs (names only):** Not confirmed this pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Not published — single runway, direction by wind.
- **Transition to approach:** Not confirmed.
- **Speed / flow constraints on the STAR:** Standard 250 KIAS <FL100 assumed; verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard rule-of-thumb planning; no field-specific override identified.
- **Speed control:** Standard ICAO speed schedule assumed.
- **Altitude constraints:** Not published — verify current chart, particularly on the final segment given the close-in terrain history noted below.
- **Energy traps:** None specific identified beyond standard close-in-terrain awareness (§5).

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 18 | Not confirmed this pass 🟧 | Not confirmed | Verify current chart |
| 36 | Not confirmed this pass 🟧 | Not confirmed | Verify current chart |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟧 The immediate field environment is flat coastal ground, but **low hills close to the final approach path** (within a few km) were implicated in a **1961 CFIT accident** — a Panair do Brasil DC-7C on a night approach struck an 84 m hill ~2.7 km from the runway while flying low and outside the normal pattern (45 of 88 aboard killed). Modern IFR obstacle-clearance criteria account for terrain of this scale and no current restriction was found, but **fly the charted vertical profile precisely on the final segment** — cross-ref [SBRF Briefing](index.md) §3.1.
- **Specific threats:** None else identified — single runway, no closely-spaced parallels or offset-approach concern.
- **Airspace / traffic:** Recife FIR (SBRE), standard domestic-Brazil control, CINDACTA III headquartered locally — cross-ref [South America — Airspace Briefing](../../../../airspace/south-america.md) and [SBRF Briefing](index.md) §3.2.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Given the close-in low-terrain history, follow the charted missed-approach procedure precisely — not chart-verified this pass. 🟧
- **Re-sequencing environment:** Single-runway field; expect standard re-sequencing into Tower's pattern; note co-location with Recife Air Force Base.
- **Go-around traps:** None else identified.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 3,007 m (tier-4 current figure) both directions; a secondary source cites 3,300 m — figure disputed, see [SBRF Briefing](index.md) §7/§18. No displaced threshold reported. Confirm current AIP figure before treating as audit-grade. 🟧
- **Braking / vacate:** Not confirmed — rapid-exit taxiway data not obtained this pass.
- **Runway-excursion watch:** Rainy-season (Apr–Aug) wet-runway braking-action degradation — not quantified. 🟧

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not confirmed — single terminal apron; confirm with Ground on the day.
- **Hot spots / tight taxiways:** None identified in reachable sources. 🟧
- **Stand/gate notes:** Cross-ref [SBRF Dispatch](dispatch.md) §3.

---

## 9. Arrival frequency sequence

- **Sequence:** Approach (119.100) → Tower (122.800) → Ground (121.850) `[OurAirports, tier-4, undated]` 🟧 — cross-ref [SBRF Briefing](index.md) §8.
- **Approach/Departure control:** Recife Approach — sector/procedure-specific frequencies not confirmed this pass. 🟧

---

## 10. Gotchas

- Close-in low terrain near the final approach path — historical CFIT precedent (1961); fly the charted vertical profile precisely, especially on a visual or non-precision approach.
- Single runway — no reciprocal-direction flexibility; factor into go-around/diversion planning.
- Runway length disputed between tier-4 sources — do not rely on either figure without an AIP cross-check.
- K Global VAMSYS category is unset for this field — confirm before crewing/scheduling.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Approach names/minima, STAR names, transition level, LVP trigger — none confirmed from a primary source this pass.
- Exact bearing/distance/elevation of the close-in terrain relative to the final approach course — described qualitatively from a 1961 accident report only.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config, ground-delay/flow status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/SBRF/frequencies.html , /runways.html , /closest-navaids.html (retrieved 2026-07-26).
- Wikipedia — "Recife/Guararapes–Gilberto Freyre International Airport" — https://en.wikipedia.org/wiki/Recife/Guararapes%E2%80%93Gilberto_Freyre_International_Airport (retrieved 2026-07-26). *1961 accident context for §5/§6.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Brasil (DECEA); K Global fields from live VAMSYS; 4-page pack. |
