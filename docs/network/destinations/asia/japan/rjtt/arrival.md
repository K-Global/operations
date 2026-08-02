# RJTT — Tokyo Haneda · Arrival Page

**RJTT / HND** · Ota City, Tokyo, Japan · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [RJTT Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **North Wind (~60%):** 34L (A) and 34R (C) · **South Wind (~40%):** 22 (B) and 23 (D), primarily via the LDA approach |
| Usual approach | ILS on the assigned parallel under north wind; **LDA** (offset localizer, visual manoeuvring segment) primary under south wind, ILS reserved for poor-weather noise-abatement cases |
| Config logic | Wind-driven 4-runway/2-configuration system, further split by arrival direction (north vs south) — see [Briefing §3.2](index.md) |
| Transition level | Not confirmed this pass — verify current chart 🟧 |
| LVP trigger | Tokyo Bay sea fog/low cloud, most common on winter mornings, can develop quickly 🟧 (exact RVR trigger not confirmed) |
| Missed-approach driver | Airspace/traffic density and the documented D-Runway-missed/A-Runway-departure conflict under south wind — not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in this research pass — RJTT's RNAV STARs are reported as long and typically flown in full for noise reasons (little to no shortcutting); pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Under the dominant configuration, **domestic traffic arriving from the north (~30%)** and **international traffic from routes such as Trans-Siberia/NOPAC** are assigned to the **C-Runway** (34R north-wind / 23 south-wind, via D); **domestic traffic from the south (~70%)** and **international traffic from South-East Asia** are assigned to the **A-Runway** (34L north-wind) or **B-Runway** (22 south-wind) — this direction-based split keeps converging arrival tracks apart, crossing at a minimum 1,000 ft vertical separation where the south-wind B/D arrival paths cross.
- **Transition to approach:** Expect an RNAV-STAR-to-ILS or RNAV-STAR-to-LDA transition with radar vectors onto final; **RNAV1/RNAV5 certification is mandatory** for all RJTT arrivals (Briefing §5).
- **Speed / flow constraints on the STAR:** Standard 250 KIAS below FL100 applies in the terminal area; published procedural speeds of **180 KIAS at 10 DME reducing to 160 KIAS at 5 DME** apply on most ILS finals (16L/16R/34L/34R/22/23 families), and **170 KIAS from ~9.2–10.2 NM from threshold** on the noise-reduction RNP 16L/16R approaches — comply unless ATC advises otherwise.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate. RJTT's long, fully-flown RNAV STARs (§2) reduce the likelihood of a late shortcut compressing the profile, but configuration changes ahead of a wind shift can still compress the descent — brief an early-descent contingency.
- **Speed control:** STAR speed gates plus the procedural-speed table at §2; 250 KIAS below FL100 (JCAB-wide practice) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes; no overflight of Metropolitan Tokyo or Chiba Prefecture below prescribed floors (Briefing §5/§12).
- **Energy traps:** A late configuration/runway change driven by a wind shift is the primary energy trap at this field, given how completely the runway assignment, approach type (ILS vs LDA) and direction-split logic change between north- and south-wind operations (Briefing §3.2). Strong-wind conditions also bring pronounced low-level turbulence/shear around 1,000 ft AGL — bug up speed and stabilise early.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 16L | ILS (IOC) | Displaced THR (390 m); CAT not confirmed 🟧 | verify current chart |
| 34R | ILS (ITC) | Displaced THR (360 m); CAT not confirmed 🟧 | verify current chart |
| 16R | ILS (ITA); RNP (noise-reduction) | Displaced THR (480 m); RNP mandatory-readiness 0600–1000 UTC southerly/good wx 🟧 | verify current chart |
| 34L | ILS (IHA) | No displacement; CAT not confirmed 🟧 | verify current chart |
| 04 | — none — | Landing-usable (LDA published, 2,500 m) but **visual/RNAV only — no electronic aid** | verify current chart |
| 22 | ILS (IAD); LDA (IKL, offset toward Chiba) | LDA primary in south wind; ILS reserved for poor weather; LDA has **no glidepath — visual manoeuvring turn past the MAPt** (3.4–3.8 NM from THR) | verify current chart |
| 05 | — none — | **Never a landing runway** | n/a |
| 23 | ILS (ITD, 2° offset); LDA (ITL, offset toward Chiba) | LDA primary in south wind; ILS reserved for poor weather; LDA has **no glidepath — visual manoeuvring turn past the MAPt** | verify current chart |

- **LVP triggers:** Tokyo Bay sea fog/low cloud, most common on winter mornings; ILS sub-category (II/III) not confirmed from a primary table this pass. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat, reclaimed-land/Tokyo-Bay site at 21 ft AMSL — no close-in high terrain relevant to any arrival path (see [Briefing §3.1](index.md)).
- **Specific threats:** 🟥 The **LDA approach to the B/D runways has no glidepath** — after capturing the offset localizer (which points toward Chiba City, not the runway) and descending at a constant rate over the missed-approach point (3.4–3.8 NM from threshold), the crew makes a **left turn as a visual manoeuvre** to land — this visual segment is the field's standout approach-specific hazard and demands full crew currency and briefing. A **Charted Visual Approach (CVA)** to the A/C runways under good-weather north-wind operations is flown as **independent parallel approaches within 1 NM of each other**, with pilots responsible for visual separation and wake-turbulence avoidance — see [`OM E — Wake Turbulence Separation`](../../../../../flight-ops/wake-turbulence-separation.md).
- **Airspace / traffic:** 🟥 Very high density under Tokyo Approach/Radar — one of the most structurally complex single-airport traffic pictures in the network (Briefing §3.2); brief for re-sequencing and extended vectoring, especially during a configuration change or in marginal weather.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat, over-water site) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around drops you back into a dense, configuration-dependent traffic picture. JCAB's own operational-procedures material specifically documents a **D-Runway missed-approach / A-Runway-departure conflict** under south-wind operations — expect ATC to manage this actively; brief the possibility of extended vectoring or holding, especially during a winter fog event.
- **Go-around traps:** The LDA approach's visual manoeuvring segment (§5) makes a go-around off that approach a distinct workload spike versus a standard ILS miss — brief it specifically, not generically.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 16L **2,970 m** (390 m displaced) · 34R **3,000 m** (360 m displaced) · 16R **2,520 m** (480 m displaced) · 34L **3,000 m** (no displacement) · 04 **2,500 m** · 22 **2,500 m** · 05 **not usable for landing** · 23 **2,500 m**. Brief the usable landing length for the assigned runway, not the physical runway length (Briefing §3.3/§7).
- **Braking / vacate:** The AIP publishes a full "Speedy Turn-Off" exit-taxiway table by runway — **34L:** A10 (1,500 m, T1/T2) or A12 (2,000 m); L10 (1,320 m)/L12 (1,800 m, T3/N Area)/L13 (2,080 m). **16R:** A5 (1,530 m, T1/T2) or A2 (2,040 m); L5 (1,500 m, T3/N Area). **34R:** C9 (1,290 m)/C10 (1,670 m)/C11 (2,120 m). **16L:** C7 (1,390 m)/C6 (1,710 m)/C4 (2,000 m). **22:** B8/B6/B4/B3 (except N Area) or T8/T6/T4/T3 (for N Area), 1,050–2,030 m. **23:** D5 (1,500 m)/D3 (1,800 m). Plan the vacate exit in the approach briefing rather than aiming for an earlier exit and missing it. All four runway pairs are fully grooved — a positive wet-runway braking factor.
- **Runway-excursion watch:** 🟧 Three runway ends carry a displaced threshold (16L 390 m, 34R 360 m, 16R 480 m) — brief the correct usable length. At least one runway end carries an EMAS arresting bed (~84.5 m × 62.8 m); the specific end was not reliably parsed from the retrieved extract — verify.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on the assigned runway per the active configuration, taxi in to the domestic terminals (T1/T2, located between the A- and C-Runways) or the international terminal (T3, west of the A-Runway) per Ground assignment; VAMSYS mirror gives a planning taxi-in time of **15 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟥 **International (T3) arrivals must cross the A-Runway** to reach the terminal — a standing, AIP-acknowledged hazard-crossing point, especially active during a concurrent A-Runway arrival/departure bank (see [Briefing §3.2/§13](index.md)).
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — Terminal 3's international piers are the natural widebody cluster; exact gate assignment for a K Global operation not yet confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Tokyo Radar/Approach (sector-specific, primary 119.1/124.0/126.5 MHz families) → Tokyo Tower (118.1 MHz primary) → Tokyo Ground (118.225/121.625/121.7/121.975/122.075 MHz).** Take the assigned frequency and confirm current chart. (Frequencies from [Briefing §8](index.md).)
- **Approach/Departure control:** **Tokyo Approach/Radar** (JCAB) is the facility for Haneda's terminal approach; **Tokyo ACC** within the Fukuoka FIR (RJJJ) hands off en route inbound — see the [Tokyo (RJJJ) FIR brief](../../../../airspace/fir/asia/tokyo-rjjj.md). 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **RWY 05 is never a landing runway** — declared LDA "not usable for landing"; do not expect it as an arrival option under any configuration. **RWY 04 has no published approach** (visual/RNAV only).
- **The LDA approach's visual manoeuvring segment (offset localizer pointed toward Chiba, no glidepath, left turn past the MAPt)** is the field's standout approach-specific workload item — brief it specifically before a south-wind arrival.
- **A late configuration/runway change driven by a wind shift** rewrites the entire arrival picture (runway, approach type, direction-split) — watch the ATIS wind trend closely.
- **International (T3) taxi-in crosses the A-Runway** — a standing ground-workload factor even on a routine arrival.
- **RNP RWY16L/16R mandatory-readiness window (0600–1000 UTC, southerly wind, good weather)** — be prepared to fly it; report inability at initial contact with Tokyo Approach.
- **Tokyo Bay sea fog can develop and change quickly**, especially on winter mornings — brief a holding/diversion contingency in season.
- **Strong-wind approaches bring pronounced low-level turbulence/shear (~1,000 ft AGL)** — bug up speed and stabilise early.
- **Independent parallel CVA approaches (A/C runways, good-weather north wind) run within 1 NM of each other** — maintain vigilant visual separation and wake awareness.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- ILS sub-category (II/III) confirmation.
- Exact LVP/CAT trigger RVR values and transition level.
- EMAS-equipped runway end — not reliably identified from the retrieved extract.
- Current gate/pier assignment for a K Global scheduled arrival across T2/T3.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, especially GBAS's restricted 1400–2100 UTC service hours), ATIS config/wind trend, current runway-configuration status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **JCAB AIP Japan, AD 2 RJTT** — mirrored via https://nagodede.github.io/aip/japan/documents/RJTT_full.pdf (retrieved 2026-07-26). Runway/declared-distance data, navaid table, procedural speeds, exit-taxiway ("Speedy Turn-Off") table, communications.
- Japan Civil Aviation Bureau / airport-slot coordination secretariat — "Operational Procedures at Tokyo International Airport (Haneda)" — https://www.schedule-coordination.jp/archives/arc_hnd/2010/operational_procedure_at_hnd.pdf (retrieved 2026-07-26). LDA approach design/visual-manoeuvring description, CVA description, arrival direction-split logic, hazard-crossing points.
- OPSGROUP — "Japan BizAv Ops: Haneda, Narita, and Nagoya Explained", 2026-01-13 — https://ops.group/blog/japan-bizav-ops-haneda-narita-and-nagoya-explained/ (retrieved 2026-07-26). Long-STAR/no-shortcut corroboration, strong-wind turbulence reporting, runway-assignment-by-noise corroboration.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
