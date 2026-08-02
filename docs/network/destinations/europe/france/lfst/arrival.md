# LFST — Strasbourg Entzheim · Arrival Page

**LFST / SXB** · Strasbourg (Entzheim), Bas-Rhin, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LFST Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **05 or 23** — wind/ATC-determined; no published preferential-runway rule found |
| Usual approach | ILS CAT I (ENT) on RWY 05; ILS CAT II/III (STZ) on RWY 23 — runway/approach assignment is wind/ATC-determined |
| Config logic | Not explicitly published as a wind rule; RWY 23's CAT II/III capability makes it the field's LVP runway 🟧 |
| Transition level | By QNH (altimeter setting 1013.2 hPa above TA/TL); transition altitude **7,000 ft AMSL (fixed)**; TL for the Strasbourg TMA calculated by Strasbourg APP |
| LVP trigger | **RVR ≤ 800 m or ceiling ≤ 200 ft** — RWY 23 only; ends when RVR > 800 m and ceiling > 200 ft and improving 🟧 |
| Missed-approach driver | Not terrain (flat Alsace plain) — radio-failure procedure reports to IAF ANDLO (RWY05) or SAV (RWY23); see §6 |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not published / verify 🟧 — pull the current-AIRAC STAR list at planning.
- **Selection by arrival direction / runway:** No published preferential-runway rule was found — Strasbourg APP assigns the runway/approach (RWY 05 ILS CAT I or RWY 23 ILS CAT II/III) based on wind and traffic. Confirm ATIS.
- **Transition to approach:** Expect vectoring from Strasbourg Approche onto the assigned ILS; exact STAR-to-ILS transition not confirmed this pass. 🟧
- **Speed / flow constraints on the STAR:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart. 🟧

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Not published / verify — standard descent-profile planning to meet the transition-level/first approach gate. 🟧
- **Speed control:** 250 KIAS below FL100 (EU/ICAO norm); TA 7,000 ft AMSL fixed. Confirm current chart.
- **Altitude constraints:** Not published / verify — pointer only, fly the charted altitudes. 🟧
- **Energy traps:** A late runway change between RWY 05 and RWY 23 (driven by a wind shift, or by an LVP onset that pushes the assignment to RWY 23) is the standout energy/config trap at this field, given the two runways carry materially different approach capability.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 05 | ILS CAT I (ENT) | **CAT I only** — basic (non-precision-category) approach lighting; PAPI 3.5°/6.1°, MEHT 52 ft 🟧 | Not published / verify |
| 23 | ILS CAT II/III (STZ) | **CAT II/III** — 900 m CAT II/III-grade approach lighting (LIH) and CAT III-grade centreline lighting; PAPI 3.0°/5.2°, MEHT 58 ft; LVP triggers at RVR ≤ 800 m / ceiling ≤ 200 ft 🟧 | Not published / verify |

- **LVP triggers:** RVR ≤ 800 m or ceiling ≤ 200 ft on RWY 23 (the field's only LVP-capable runway); ends when RVR > 800 m and ceiling > 200 ft and improving. During LVP, **TWY F and G are closed**, and TWY P, E, H, K, M, N carry centreline lighting and remain usable for vacating. Stop bars: permanent at F and G, controllable at E and H. ATC transmits RVR on first contact and at every change; ATIS broadcasts LVP status.

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat Alsace plain at 505 ft AMSL — no close-in high terrain relevant to any arrival path. Cross-ref [Briefing §3.1](index.md).
- **Specific threats:** 🟧 The **RWY05-non-precision / RWY23-CAT-III asymmetry** is the standout approach-selection threat — never assume low-vis capability on RWY 05. Gliding/paramotor activity in the CTR "1.1 Brumath" sub-part and adjacent TMA sub-parts can be active (Class D→G reclassification, sunrise-30 min to sunset+30 min, announced via ATIS) — a VFR-mixing consideration during daylight arrivals.
- **Airspace / traffic:** 🟧 Multi-part CTR/TMA structure with a sector delegated to/from Stuttgart APP near the German border; LFST sits under **Reims ACC (LFEE)** — see [Europe airspace brief](../../../../airspace/europe.md) (no dedicated K Global FIR brief for Reims/LFEE exists yet — flagged gap). Cross-ref [Briefing §3.2](index.md).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not a factor — flat Alsace plain. Fly the published missed approach and verify climb-gradient/turn on the current chart. 🟧
- **Re-sequencing environment:** Not individually detailed; Strasbourg Approche manages sequencing on the single runway pair.
- **Go-around traps:** On **radio failure**, report to IAF **ANDLO** (after an RWY 05 procedure) or **SAV** (after an RWY 23 procedure) at the last acknowledged assigned level, or the highest holding level if none acknowledged; hold until the latest of HAP (if acknowledged), ETA, or arrival-in-hold + 8 minutes; then descend to **5,500 ft QNH** (RWY 05 procedure) or **7,000 ft QNH** (RWY 23 procedure) in the hold before flying the approach. After a missed approach following radio failure, exit the TMA via the charted departure **BERUG 8M** (after an RWY 05 procedure) or **POGOL 7H/8H** (after an RWY 23 procedure), climbing to FL090 and seeking VMC — name only, verify current chart.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** RWY 05 and RWY 23 both **2,400 m** — no displaced thresholds; RESA 240 × 90 m concrete stopway both ends. Cross-ref [Briefing §7](index.md).
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in the source extract — confirm with Ground/Tower on the day. During LVP, runway vacating is via the **runway end only**. 🟧
- **Runway-excursion watch:** 🟧 No displaced thresholds; symmetric LDA both ends. De-icing is provided for winter contamination — season/provisioning detail not confirmed this pass.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Aircraft with wingspan > 36 m must taxi via **TWY K (Apron A)** or **TWY N (Apron B)** — except VIP State flights using stand A52 with FOLLOW-ME. Exact terminal/stand assignment not confirmed this pass. 🟧
- **Hot spots / tight taxiways:** 🟥 **TWY F and G closed to wingspan > 52 m; TWY M and Q closed to wingspan > 36 m; TWY Q restricted to landing-gear track width < 9 m.** The service road between stands A28 and B1 cannot be used to bypass **TWY P3**. **TWY F and G close automatically whenever LVP is in progress** — expect a different vacate/taxi-in routing during a CAT III event on RWY 23. Cross-ref [Briefing §13](index.md).
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — stand/terminal assignment not confirmed this pass.

---

## 9. Arrival frequency sequence

- **Sequence:** **Strasbourg Approche (118.185 aux / 119.580 Sector East / 120.410 Sector West / 132.215 above FL115 Sector SU / 133.100 aux / 134.575 below FL115 Sector SC) → Strasbourg Tower 119.250 (H24) → Strasbourg (TWR) Ground 121.805 (H24).** Take the assigned sector frequency and confirm current chart. (Frequencies from [Briefing §8](index.md).)
- **Approach/Departure control:** **Strasbourg Approche** handles the terminal area; LFST sits under **Reims ACC (LFEE)** en route, with a CTR/TMA sector delegated to/from **Stuttgart APP** near the German border. 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **RWY 05 has no low-visibility capability** — basic (non-precision-category) approach lighting only; RWY 23 (STZ) is the field's sole CAT II/III runway.
- **A late runway/config change between RWY 05 and RWY 23** carries a real approach-capability step-change, not just a heading change — watch the ATIS wind trend and any LVP onset.
- **TWY F and G close automatically whenever LVP is in progress** — brief an alternate vacate/taxi-in routing before a CAT III arrival on RWY 23.
- **Gliding/paramotor activity** can be active in the CTR "1.1 Brumath" sub-part and adjacent TMA sub-parts during daylight hours (Class D→G reclassification, announced via ATIS) — maintain a heightened traffic scan on a VMC arrival.
- **The hard noise curfew (landings prohibited 2300–0500, winter LT)** means a delayed arrival close to the window has real diversion/permit consequences — do not plan a schedule that relies on a post-curfew landing.
- **Radio-failure routing is runway-specific** — report to ANDLO (RWY05) or SAV (RWY23), descend to 5,500 ft QNH or 7,000 ft QNH respectively in the hold, and exit via BERUG 8M or POGOL 7H/8H if a missed approach follows.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- Preferential/wind-based runway-in-use logic.
- Rapid-exit taxiway/vacate detail.
- Terminal/stand assignment for our operation.
- Exact sector/frequency assignment for Strasbourg Approche and the Stuttgart-delegated sector (AIRAC-dependent).
- Seasonal fog/climatology statistics underlying the RWY23 CAT II/III LVP regime.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. CAT II/III equipment status and TWY F/G status), ATIS config/wind trend, LF-R199 Neuhof and gliding-reclassification status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **SIA France eAIP — AD 2 LFST**, eff. 14 MAY 2026, AIRAC 09 JUL 2026 (retrieved 2026-07-26) — https://www.sia.aviation-civile.gouv.fr/. *Navaids, LVP triggers, radio-failure procedure, communications, CTR/TMA structure, taxiway restrictions.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
