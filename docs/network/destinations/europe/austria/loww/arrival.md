# LOWW — Wien-Schwechat · Arrival Page

**LOWW / VIE** · Schwechat, Lower Austria, Austria · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — tier-4 corroborated, primary AIP not yet integrated

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LOWW Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Not published / verify — active runway/direction assigned by Wien Tower/Radar from the crossing pair (**11/29**, **16/34**) per wind/traffic | 🟧 |
| Usual approach | ILS infrastructure exists at the field; runway assignment, CAT category and idents not confirmed | 🟧 |
| Config logic | Wind/traffic-flow driven; no primary-source preferential-runway rule found | 🟧 |
| Transition level | By QNH; transition altitude not published / verify | 🟧 |
| LVP trigger | Not published / verify | 🟧 |
| Missed-approach driver | Airspace/traffic sequencing on the crossing-runway pair, not terrain | 🟩 (terrain) / 🟧 (traffic) |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not published / verify 🟧 — pull the current-AIRAC STAR list at planning.
- **Selection by arrival direction / runway:** Not published / verify — Wien Tower/Radar assigns the active runway/direction from the crossing pair (11/29, 16/34) per wind/traffic; confirm via ATIS. 🟧
- **Transition to approach:** Not published / verify — expect radar vectoring to final under Wien Radar; confirm the charted transition. 🟧
- **Speed / flow constraints on the STAR:** Not published / verify — confirm current chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate once confirmed.
- **Speed control:** 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Not published / verify — fly the charted altitudes.
- **Energy traps:** A late runway/configuration change driven by a wind shift is a plausible energy trap given the crossing-runway (non-parallel) geometry — only one configuration is active at a time, so a change is a full runway-direction swap, not a parallel-to-parallel shift.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 11 | Not published / verify | Not published / verify 🟧 | verify current chart |
| 29 | Not published / verify | Not published / verify 🟧 | verify current chart |
| 16 | Not published / verify | Not published / verify 🟧 | verify current chart |
| 34 | Not published / verify | Not published / verify 🟧 | verify current chart |

- **LVP triggers:** Not published / verify — CAT II/III capability, if any, is not confirmed from a primary source. Central European winter fog/low-stratus is the plausible LVP-relevant seasonal hazard pending confirmation. 🟧 See [OM E — Low Visibility Operations](../../../../../flight-ops/low-visibility-operations.md).

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None identified. Flat Danube/Vienna basin at 600 ft AMSL; nearest higher ground (Vienna Woods, Alps foothills) is well clear of the terminal area. See [Briefing §3.1](index.md).
- **Specific threats:** 🟧 The **crossing (non-parallel) runway geometry** (11/29 × 16/34) means only one runway direction-set is active at a time — brief for dependent sequencing rather than independent parallel streams, particularly during peak Star Alliance hub banks (~234,000 annual movements, 2024).
- **Airspace / traffic:** 🟧 Major hub traffic density under Wien Radar; brief for possible vectoring/sequencing delay, especially in marginal weather. See [Europe airspace brief](../../../../airspace/europe.md) — no dedicated Wien (LOVV) FIR brief exists yet in this network.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat basin) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around returns you to a single-active-configuration crossing-runway environment — expect vectoring/holding pending re-sequencing, especially during a bank or winter weather event.
- **Go-around traps:** Not published / verify — no specific go-around trap confirmed for this field beyond the general crossing-runway sequencing consideration above.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 11/29 and 16/34 report as 3,500 m and 3,600 m respectively (full published length); no displaced-threshold data obtained — treat as a full-length ceiling only pending primary-AIP confirmation. 🟧 Cross-ref [Briefing §7](index.md).
- **Braking / vacate:** Rapid-exit taxiway detail not published / verify. 🟧
- **Runway-excursion watch:** 🟧 No displaced thresholds confirmed; winter-contamination braking-action consideration is a plausible seasonal factor pending confirmation (see Briefing §14).

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not published / verify — confirm with Ground/Apron on the day. VAMSYS mirror gives a planning taxi figure of **14 min or 18 min** (in/out assignment not certain — see [Dispatch §5](dispatch.md)) `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** Not published / verify — no named hot spots confirmed for this field from a primary source. 🟧
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — no confirmed widebody cluster or gate assignment for our operation.

---

## 9. Arrival frequency sequence

- **Sequence:** **Wien Radar 134.675 (additional sectors 118.770 / 125.170 / 129.050 / 136.250 reported) / Wien Director 119.800 → Wien Tower 119.400 (additional positions 121.200 / 123.800 / 124.470 reported) → Wien Ground 121.600 (additional position 121.770 reported).** Take the assigned frequency and confirm current chart. (Frequencies from [Briefing §8](index.md).)
- **Approach/Departure control:** **Wien Radar** is the terminal-approach facility for LOWW; **Wien ACC (LOVV)** hands off en route inbound — see [Europe airspace brief](../../../../airspace/europe.md). 🟧 No dedicated LOVV FIR brief exists yet; exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **Runways 11/29 and 16/34 cross, they do not run parallel** — never expect independent simultaneous arrival streams; only one configuration is active at a time.
- **CAT II/III low-visibility approach capability is not confirmed** — do not assume CAT III minima are available at this field without a current-AIRAC chart check.
- **A planned third runway (11R/29L) is not proceeding** as of late 2025 despite 2018 court approval — do not plan around future added capacity.
- **Config change here is a full runway-direction swap** (not a parallel-to-parallel shift) — watch the ATIS wind trend for a late change.
- **Schengen/non-Schengen terminal split** (Concourses D, G non-Schengen) has minimum-connect-time implications for connecting itineraries through this field.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and approach minima per runway.
- CAT II/III capability, runway assignment, and ILS idents/frequencies.
- Exact LVP/CAT trigger conditions.
- Rapid-exit taxiway/vacate detail.
- Taxi-in routing and gate assignment for our operation.
- Named hot spots / tight taxiways.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config/wind trend, current AUP/UUP or RAD status in the Wien (LOVV) FIR. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here. See Sources for the tier hierarchy.*

- OurAirports — Vienna International Airport — https://ourairports.com/airports/LOWW/ , /runways.html , /frequencies.html (retrieved 2026-07-26).
- SkyVector — LOWW / Wien Schwechat Airport — https://skyvector.com/airport/LOWW (retrieved 2026-07-26). *Runway data, extended frequency list.*
- SKYbrary Aviation Safety — Vienna International/Schwechat (LOWW) — https://www.skybrary.aero/airports/loww (retrieved 2026-07-26). *Runway table.*
- Wikipedia — "Vienna International Airport" — https://en.wikipedia.org/wiki/Vienna_International_Airport (retrieved 2026-07-26). *Terminal split, traffic statistics, third-runway status.*

*Austro Control (Austria's state AIP/eAIP) was not accessible in a usable form for this build — see the LOWW Briefing page for the full primary-source caveat.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
