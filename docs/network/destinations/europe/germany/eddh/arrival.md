# EDDH — Hamburg · Arrival Page

**EDDH / HAM** · Hamburg, Germany · Europe
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [EDDH Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Wind-dependent, constrained by the crossing-runway geometry — only a compatible combination of **05/23** or **15/33** is active at a time 🟧 |
| Usual approach | ILS on 05; **ILS CAT II/III on 23** (principal low-visibility approach); 15/33 approach suite not confirmed |
| Config logic | Wind-driven; the two pairs physically cross so only one compatible combination is active at a time |
| Transition level | By QNH; TL **FL60**, or **FL70 when QNH < 1013 hPa**, ATC-assigned — verify no local override on current chart 🟧 |
| LVP trigger | Autumn/winter North Sea radiation/advection fog and low stratus; CAT II/III on RWY 23 is the standing mitigation — exact RVR trigger not confirmed 🟧 |
| Missed-approach driver | Airspace/traffic (re-sequencing into a crossing-runway pattern), not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Depends on the active runway combination (05/23 or 15/33); Hamburg Director assigns the STAR-to-runway transition for the active configuration.
- **Transition to approach:** Expect an RNAV-STAR-to-ILS transition with radar vectors onto final for RWY 23 (CAT II/III); verify the charted transition for all ends.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** Late runway/config changes ahead of a frontal wind shift (the two crossing pairs are not always interchangeable at short notice) and winter fog-driven re-sequencing are the main energy traps at this field.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 05 | ILS (IHHE) | CAT status not confirmed 🟧 | verify current chart |
| 23 | ILS (IHHW) | **CAT II/III** — principal low-visibility approach 🟩 | verify current chart |
| 15 / 33 | Not confirmed — RNAV/RNP expected | 🟧 verify current AIRAC | verify current chart |

- **LVP triggers:** Autumn/winter radiation/advection fog and low stratus is the routine EDDH trigger — CAT II/III capability on RWY 23 is the standing mitigation. Exact RVR trigger and ILS sub-category not confirmed this pass. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat North German Plain at 53 ft MSL, close to the Elbe estuary lowlands — no close-in high terrain relevant to any arrival path.
- **Specific threats:** 🟥 **Crossing-runway geometry (05/23 × 15/33)** — only a compatible combination is active at a time; any go-around or config change re-inserts traffic into a crossing-runway pattern. Gusty frontal winds are a seasonal factor.
- **Airspace / traffic:** 🟧 Busy scheduled/charter hub under **Hamburg Director feeding Bremen Radar (Bremen ACC, EDWW)** — **not Langen**. No dedicated Bremen FIR/EDWW airspace brief exists yet in OM C; the general Europe brief `../../../../Airspace/General/Europe.md` covers the Langen/Karlsruhe corridor only and does **not** cover this sector — flagged as a genuine library gap 🟧 (see [Briefing §3.2](index.md)).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat plain) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around re-inserts the aircraft into the crossing-runway traffic pattern under Hamburg Director/Bremen Radar — expect vectoring and possible holding before re-sequencing.
- **Go-around traps:** Runway-combination awareness (05/23 vs 15/33) during the miss; do not assume the same combination will be offered for the next attempt if wind is shifting.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 05 ≈2,952 m / 9,685 ft (derived); 23 ≈3,094 m / 10,151 ft (derived); 15 3,666 m / 12,028 ft (no displacement); 33 ≈3,220 m / 10,564 ft (derived) — see [Briefing §7](index.md) for full table; LDA figures marked "derived" are calculated (full length − displacement), not sourced directly. 🟧
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground on the day. 🟧
- **Runway-excursion watch:** 🟧 Displaced thresholds are meaningful on three of four ends (up to 1,464 ft on RWY 33) — always fly the correct LDA, not the physical runway length; winter contamination (snow/slush/ice) is a seasonal braking-action consideration.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Confirm with Ground on the day; routing depends on the active runway combination and is shaped by the crossing-runway geometry. VAMSYS mirror gives a planning taxi-in time of **12 min** `[VAMSYS mirror 2026-07-25]`.
- **Hot spots / tight taxiways:** 🟥 **Runway-crossing coordination at the taxiway intersection near G/B3** (crossing RWY 15/33) — do not cross without an explicit ATC release.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — stand adequacy for the K Global fleet not independently confirmed; terminal/pier for our operation not confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Bremen Radar (Bremen ACC, EDWW) 134.25 → Hamburg Director 118.2 → Hamburg Tower/Turm 121.28 → Hamburg Ground/Rollkontrolle 121.805 → Hamburg Apron/Vorfeld 121.705.** Take the assigned frequency and confirm current chart. (Frequencies from [Briefing §8](index.md); all tier-4 sourced, treat as unconfirmed pending current-AIRAC cross-check.)
- **Approach/Departure control:** **Hamburg Director** (feeding Bremen Radar/Bremen ACC EDWW) is the facility for Hamburg's terminal approach — **not Langen**. No dedicated Bremen FIR/EDWW airspace brief exists yet in OM C to link here; reference the general Europe brief `../../../../Airspace/General/Europe.md` for the (non-covering) continental corridor context only. 🟧

---

## 10. Gotchas

- **Crossing-runway configuration (05/23 × 15/33)** — never assume a crossing release is included in a taxi clearance; brief for a possible hold at the G/B3 intersection.
- **CAT II/III is on RWY 23 only** — do not assume equivalent low-visibility capability on RWY 05 or the 15/33 pair.
- **Field is under Bremen Radar (Bremen ACC, EDWW), not Langen** — do not default to Langen-area sector/frequency assumptions.
- **Hard night curfew 2300–0600 local, no extensions** — a delayed arrival must not be planned to land after 2300; treat any schedule slipping toward the curfew as a diversion-risk trigger.
- **Config swap (05/23 ↔ 15/33) driven by a wind shift** can bring a late runway change — watch the ATIS wind trend.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- ILS sub-category (05, and 15/33 suite) confirmation.
- Exact LVP/CAT II/III trigger RVR values.
- Rapid-exit taxiway/vacate detail.
- Current taxi-in routing and gate assignment.
- **Bremen FIR (EDWW) airspace brief does not yet exist in OM C** — genuine library gap, do not link a non-existent file pending a dedicated build.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. CAT II/III equipment status and runway-crossing status at G/B3), ATIS config/wind trend. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — Hamburg Helmut Schmidt Airport (EDDH) runways & frequencies — https://ourairports.com/airports/EDDH/runways.html , https://ourairports.com/airports/EDDH/frequencies.html (retrieved 2026-07-25).
- VATSIM Germany Knowledgebase — EDDH Hamburg Airport (Bremen FIR/EDWW) — https://knowledgebase.vatsim-germany.org/books/airports-bremen-fir-edww/chapter/eddh-hamburg-airport (retrieved 2026-07-25). *Bremen FIR/Bremen Radar control structure, runway-crossing coordination procedure at G/B3.*
- VATSIM Germany navigation chart index (chart-title reference only) — https://nav.vatsim-germany.org/files/edww/charts/eddh/public/EDDH_IAC_ILS_RWY23.pdf — *chart title corroborates ILS CAT II/III capability on RWY 23.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Built from DFS eAIP + Briefing; folded to 4-page pack. |
