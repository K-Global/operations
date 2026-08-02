# Wake Turbulence Separation — OM E Procedure

**Scope:** Location-agnostic procedure policy for **wake turbulence** — the physics of wing-tip vortices; the ICAO wake categories (**Light / Medium / Heavy / Super**) and the **RECAT-EU** re-categorisation (categories **A–F**); radar and time-based separation minima on departure and arrival; en-route/oceanic wake mitigation (the RVSM 1,000 ft vertical + lateral-offset / **SLOP**); encounter recognition and recovery; and where K Global's fleet sits (A388 = **Super** generator; B748/B77W = **Heavy**; A339 = **Heavy**). This file *defines* the method; ATC applies the minima and the aircraft FCOM holds the recovery — separation clearances and live spacing are **pulled from ATC**, not stored here.
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — public-source-verified (ICAO Doc 4444 PANS-ATM / EUROCONTROL RECAT-EU / EASA type assignment / FAA JO 7110.65 / SKYbrary); per-type RECAT-EU + ICAO wake letters now wired to the **Fleet Capability Matrix** (`../OM B Fleet/Fleet Capability Matrix.md`, Table D) — confirmed type facts except BCS3 RECAT-EU D (inferred 🟧).

> **Read-me — regime & scoping (read first):** This is an **OM E Operations** procedure (method/policy), **not** an ATC manual or the FCOM recovery drill. It states the *concepts* and K Global standing policy; **the applicable separation minima are applied by ATC** for the airspace/scheme in use, and the **encounter-recovery technique comes from the type FCOM/QRH**. Which RECAT-EU letter each K Global type carries is sourced from the **Fleet Capability Matrix** (`../OM B Fleet/Fleet Capability Matrix.md`, Table D), which traces to the **EASA "assignment of ICAO aircraft types to RECAT-EU" list** — the per-type letters below are now confirmed type facts (only BCS3 remains 🟧 inferred). Flag legend: 🟥 hard requirement/hazard · 🟧 caution/unverified/type-specific · 🟩 normal. Sim context: X-Plane 11 / SimBrief dispatch.

---

## 1. Snapshot

| Field | Value |
|---|---|
| What wake is | Two counter-rotating **wing-tip vortices** trailing every aircraft in flight, strongest when **heavy, clean (low speed), and slow** (i.e. at high angle of attack — takeoff/approach). They sink ~**300–500 ft** below the flight path and drift with the wind; they decay over time/distance |
| ICAO categories | **L (Light)** ≤ 7 t · **M (Medium)** 7–136 t · **H (Heavy)** ≥ 136 t · **J (Super)** — currently the **A380-800** (and A225). Filed on the flight plan (Item 9) as **L/M/H/J** |
| RECAT-EU categories | A six-band split of Heavy/Medium into **A (Super)** · **B (Upper Heavy)** · **C (Lower Heavy)** · **D (Upper Medium)** · **E (Lower Medium)** · **F (Light)**, by MTOW **and** wingspan — finer, more efficient spacing than the four ICAO bands |
| Where our fleet sits 🟩 | Per the **Fleet Capability Matrix** (`../OM B Fleet/Fleet Capability Matrix.md`, Table D — type fact): **A388 = Super — ICAO J / RECAT-EU A** (max generator); **B748 / B77W / B77F / A346 / A339 / A359 / A35K / B789 = Heavy — ICAO H / RECAT-EU B (Upper Heavy)**; **A21N / A320 / A319 / B738 = Medium — ICAO M / RECAT-EU D (Upper Medium)**; **BCS3 (A220-300) = Medium — ICAO M / RECAT-EU D 🟧 (D inferred, pending EASA-list confirmation)**. Full per-type table in §4 |
| Separation basis | Wake minima depend on the **leader** category and the **follower** category (a bigger gap the lighter the follower behind the heavier the leader). Applied as **radar distance** or, when radar spacing is not available, **time** on departure/arrival |
| En-route / oceanic mitigation | 🟥 In cruise, **RVSM 1,000 ft** vertical keeps followers above the sinking wake; the residual same-level, same-track wake is mitigated by **lateral offset — SLOP** (up to ~2 NM right of centreline) in oceanic/remote airspace |
| Encounter | Sudden **roll** (the dominant hazard), yaw, pitch, sink or a sharp jolt — usually brief. **Recovery: reduce bank/level the wings with prompt coordinated inputs, add power as needed, exit the wake** (climb/turn away from where it sinks); avoid over-controlling |
| Standing policy | 🟥 Respect ATC wake separation; when giving/accepting visual or reduced separation, factor the wake pair; on approach **stay at or above** the leader's path and note its touchdown/rotate point; report any encounter (PIREP) |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Wake physics & behaviour | 🟩 | Sourced (SKYbrary Wake Turbulence). Strongest heavy/clean/slow; vortices sink 300–500 ft, drift with wind, decay with time/distance; hazard is mostly induced **roll**. |
| ICAO L/M/H/J categories | 🟩 | ICAO Doc 4444 / Annex 2 filing (Item 9 L/M/H/J). Super (J) currently the A380 (and An-225). |
| RECAT-EU A–F | 🟩 | EUROCONTROL RECAT-EU: six bands by MTOW + wingspan; A=Super, B=Upper Heavy, C=Lower Heavy, D=Upper Medium, E=Lower Medium, F=Light. |
| Fleet category placement | 🟩 | Per-type RECAT-EU + ICAO wake letters now sourced from the **Fleet Capability Matrix** (`../OM B Fleet/Fleet Capability Matrix.md`, Table D), traced to the EASA assignment list. Only **BCS3 RECAT-EU D remains 🟧 (inferred)**; all other letters are confirmed type facts (§4). |
| Departure/arrival minima (distance/time) | 🟧 | Concept sourced (Doc 4444 / FAA 7110.65 / RECAT-EU tables). Exact NM/min values depend on the scheme in force at the airport/airspace — ATC applies them; do not hard-code numbers here. |
| En-route/oceanic (RVSM + SLOP) | 🟥 | 1,000 ft RVSM keeps followers above sinking wake; SLOP lateral offset mitigates same-level same-track wake — ties to RVSM and Datalink/Oceanic docs. |
| Encounter recovery | 🟧 | Level wings/reduce bank, power as needed, exit; **exact technique per type FCOM** (Airbus protections vs Boeing) — verify. |

---

## 3. Wake physics

- **Origin — 🟩:** lift creates higher pressure below the wing and lower pressure above; at the tips the air rolls up into two **counter-rotating trailing vortices**. Every aircraft generating lift trails them.
- **When strongest — 🟥:** vortex strength scales with **weight ÷ (airspeed × wingspan)** — so wake is worst when the generator is **Heavy, Clean and Slow** (high angle of attack). That is exactly the **takeoff, initial climb, approach and landing** regime — hence separation is applied there.
- **Behaviour — 🟧:**
  - The vortex pair **sinks ~300–500 ft** below the generator's flight path and then levels off; a follower **at or above** the leader's path is largely protected.
  - Vortices **drift with the wind** — a light crosswind can hold one vortex over the runway or drift it onto a parallel/adjacent path; a light quartering tailwind is a classic trap on approach.
  - They **decay with time and distance** and break up faster in turbulence/ground effect — which is why **time**-based minima exist where radar spacing is unavailable.
- **The hazard — 🟥:** the dominant effect on an encountering aircraft is a sudden **induced roll** (can exceed available roll authority for a much smaller follower), plus yaw, pitch, sink and structural jolt. Most severe **close and low**, where there is little height to recover.

---

## 4. Categories — ICAO & RECAT-EU

- **ICAO wake categories — 🟩:** grouped by **maximum certificated take-off mass (MTOM)** and filed on the flight plan (Item 9):

  | ICAO cat | Filed | MTOM | Examples |
  |---|---|---|---|
  | **Super** | **J** | special (very large) | **A380-800**, An-225 |
  | **Heavy** | **H** | ≥ 136 000 kg | A330/A340/A350, B747/B777/B787 |
  | **Medium** | **M** | 7 000–136 000 kg | A320/A321, B737, A220, E-Jets |
  | **Light** | **L** | ≤ 7 000 kg | light GA/business turboprops |

- **RECAT-EU (A–F) — 🟩:** EUROCONTROL's re-categorisation splits Heavy and Medium into upper/lower bands using **MTOW *and* wingspan**, giving six categories and safely tighter spacing (more capacity) than the four ICAO bands:

  | RECAT-EU | Name | Sense |
  |---|---|---|
  | **A** | Super Heavy | the largest generators (A380) |
  | **B** | Upper Heavy | large heavies (B747-8, B777, A340-600…) |
  | **C** | Lower Heavy | smaller heavies |
  | **D** | Upper Medium | large mediums |
  | **E** | Lower Medium | small mediums |
  | **F** | Light | light |

  RECAT-EU is now reflected in ICAO's enhanced wake-turbulence-group separation minima (Doc 4444 amendment). Which scheme applies is **airport/airspace-specific** — ATC applies the one in force.
- **K Global fleet placement — 🟩 (type fact, per the Fleet Capability Matrix `../OM B Fleet/Fleet Capability Matrix.md`, Table D):** these are the per-type wake categories carried in the matrix (single source of truth — do not restate values elsewhere; cite the matrix):

  | ICAO type | RECAT-EU (A–F) | ICAO wake (Item 9) |
  |---|---|---|
  | **A388** (A380-800) | **A** — Super | **J** |
  | **A339** (A330-900) | **B** — Upper Heavy | **H** |
  | **A346** (A340-600) | **B** — Upper Heavy | **H** |
  | **A359** (A350-900) | **B** — Upper Heavy | **H** |
  | **A35K** (A350-1000) | **B** — Upper Heavy | **H** |
  | **B748** (747-8) | **B** — Upper Heavy | **H** |
  | **B77W** (777-300ER) | **B** — Upper Heavy | **H** |
  | **B77F** (777F) | **B** — Upper Heavy | **H** |
  | **B789** (787-9) | **B** — Upper Heavy | **H** |
  | **A319** (A319-100) | **D** — Upper Medium | **M** |
  | **A320** (A320-200) | **D** — Upper Medium | **M** |
  | **A21N** (A321neo) | **D** — Upper Medium | **M** |
  | **B738** (737-800) | **D** — Upper Medium | **M** |
  | **BCS3** (A220-300) | **D** — Upper Medium 🟧 (inferred) | **M** |

  - **A388 (A380-800) → Super — ICAO J / RECAT-EU A.** The maximum wake **generator**; everything behind it gets the largest spacing.
  - The matrix **resolves the earlier "RECAT-EU B or C" ambiguity** for the wide-body twins (A339 / A359 / A35K / B789 / B77F): all are placed **B — Upper Heavy** on the EASA assignment, alongside B748 / B77W / A346.
  - The narrowbodies (A319 / A320 / A21N / B738) are **D — Upper Medium / ICAO M**.
  - 🟧 Only the **BCS3 (A220-300) RECAT-EU letter remains 🟧** — the matrix infers **D (Upper Medium)** pending confirmation against the current EASA/EUROCONTROL assignment list. All other letters are confirmed type facts. Record the confirmed letters in the airframe packs, but cite the matrix rather than duplicating values.

---

## 5. Separation minima — departure & arrival

- **Principle — 🟥:** wake separation is applied by ATC based on the **leader's** category and the **follower's** category — the spacing grows the **lighter the follower behind the heavier the leader** (a Medium/Light behind a Super/Heavy gets the most). A same-or-heavier follower behind a lighter leader gets **no** wake requirement (only the standard radar minimum).
- **Radar (distance) minima — 🟧:** where radar spacing applies (most terminal areas), a **distance in NM** is applied between successive arrivals/departures. The exact NM values depend on whether the airport uses **ICAO** or **RECAT-EU / ICAO wake-group** tables — ATC applies the scheme in force; the crew's job is to **maintain the assigned spacing** and not close it up. Do not hard-code numbers in this doc — they are scheme- and pair-specific and updated by the ANSP.
- **Time minima — 🟧:** where radar spacing is not available (non-radar, single-runway sequencing, or when a follower departs/lands from an intermediate runway point), a **time** minimum (minutes) is used instead — e.g. an **extra minute** for the classic wake pairs (Heavy/Medium/Light behind Super or Heavy, from an intermediate point or a displaced/intersection departure). Respect any ATC-issued time gap and "caution wake turbulence."
- **Crew responsibilities — 🟥:**
  - **On departure behind a heavier type:** consider **delaying rotation** to lift off **beyond** the leader's rotation point and stay **above** its climb path; be alert for a wake-induced roll after liftoff.
  - **On approach behind a heavier type:** stay **at or above** the leader's glidepath, note its **touchdown point** and plan to **land beyond** it, and be ready for drift of the wake in a light crosswind.
  - **Accepting visual separation / "own separation":** when a crew accepts visual or reduced spacing, the **wake responsibility transfers to the crew** — factor the pair and decline/increase spacing if the wake risk is real.
  - **Report** any wake encounter (PIREP) so ATC and following traffic are warned.

---

## 6. En-route & oceanic wake mitigation

- **RVSM vertical — 🟥:** in cruise, **RVSM 1,000 ft** vertical separation places a follower **above** the sinking wake of same-track traffic 1,000 ft below (wake sinks, so the lower aircraft is the generator to watch). This is the primary en-route wake mitigation — see `./RVSM Operations.md`.
- **Same-level, same-track wake & SLOP — 🟥:** two aircraft at the **same level on the same oceanic track** are the residual risk. The mitigation is **lateral offset — the Strategic Lateral Offset Procedure (SLOP)** — flying **on centreline or up to ~1–2 NM right of it** so a following aircraft is not directly in the leader's descending wake (and as a defence against opposite-direction/navigation-error risk). SLOP is standard in oceanic/remote airspace — see `./Datalink and Oceanic Procedures.md`.
- **Wake-induced level bust caution — 🟧:** an encounter at cruise can cause a brief altitude excursion; hold level, avoid over-correcting, and report. In RVSM, a **wake climb/turn away** to exit is done with minimum, deliberate inputs to protect the tight vertical spacing.

---

## 7. Encounter recognition & recovery

- **Recognition — 🟧:** a **sudden uncommanded roll** (the primary cue), possibly with yaw, pitch change, sink, a sharp jolt or rapid load change — typically **brief** as you pass through the vortex. Most likely **behind and below** a heavier leader, on approach/departure or crossing a track in cruise.
- **Recovery — 🟥 (technique per type FCOM):**
  1. **Level the wings / reduce bank** with prompt, coordinated aileron/rudder — this is the priority, since roll is the hazard.
  2. **Add power** as needed to arrest sink/regain energy.
  3. **Exit the wake** — climb and/or turn away from where the wake sinks/drifts (usually up and toward the upwind side).
  4. **Do not over-control** — inputs opposite the roll, but avoid large reversals that could overstress or induce PIO; respect the type's protections/limits.
  5. If low on approach and the encounter is significant → **go around.**
- **Type note — 🟧:** exact handling differs (Airbus flight-envelope protections vs Boeing conventional); fly the **type FCOM/QRH** recovery. Record any encounter for reporting.

---

## Cross-references

- **RVSM Operations (OM E)** — the 1,000 ft vertical that is the primary en-route wake mitigation, and the tight-vertical discipline during a wake-induced excursion: `./RVSM Operations.md`
- **Datalink & Oceanic Procedures (OM E)** — SLOP (lateral offset) as the same-level oceanic wake mitigation, and track/level assignment: `./Datalink and Oceanic Procedures.md`
- **Adverse Weather & Windshear (OM E)** — the other low-level "invisible" upset hazard and its recovery: `./Adverse Weather and Windshear.md`
- **Fleet Capability Matrix (OM B)** — the per-type source of truth for RECAT-EU + ICAO wake category (Table D); cite it rather than restating the letters: `../OM B Fleet/Fleet Capability Matrix.md`
- **Fleet Index** — for confirming each type's body class and wake category placement: `../OM B Fleet/Fleet Index.md`
- **Airframe packs** — record the confirmed ICAO/RECAT-EU category per type: `../OM B Fleet/OM B Airbus/A388/A388.md` (Super), `../OM B Fleet/OM B Boeing/B748/B748.md` (Heavy), `../OM B Fleet/OM B Airbus/A339/A339.md` (Heavy)
- **Airspace briefs** — oceanic SLOP/RVSM application context: `../OM C Routes and Destinations/Airspace/General/North Atlantic.md` 🟧 (confirm brief exists) · `../OM C Routes and Destinations/Airspace/General/Arctic.md`

---

## Open items (🟧 — confirm)

- **RECAT-EU letter per K Global type** — RESOLVED for all mainline types via the **Fleet Capability Matrix** (§4 / Table D): A388=A, the wide-body heavies (B748/B77W/B77F/A346/A339/A359/A35K/B789)=B, the narrowbodies (A21N/A320/A319/B738)=D. Only **BCS3=D remains 🟧 (inferred)** pending confirmation against the current EASA assignment list.
- **Applicable separation scheme by airport/airspace** — whether K Global's hubs use ICAO, RECAT-EU or the ICAO wake-group minima; ATC applies it, but note the scheme in the airport/airspace briefs.
- **Type encounter-recovery technique** — the exact FCOM/QRH wake-recovery/upset technique per fleet type (Airbus protections vs Boeing).
- **A339 RECAT-EU band** — RESOLVED: the Fleet Capability Matrix places the A339 at **B (Upper Heavy) / ICAO H** (Table D), settling the earlier "B vs C" question.
- **Cross-ref siblings** — confirm the NAT airspace brief exists.

---

## Sources & References
*Public URLs only. Cite origin + retrieved dates. ATC separation values in force and subscription material (FCOM/QRH, SimBrief) may inform content but are not stored or listed here.*

- **ICAO Doc 4444 — PANS-ATM (Procedures for Air Navigation Services — Air Traffic Management)** — wake categories, separation minima on departure/arrival, the enhanced wake-turbulence-group amendment (ICAO not freely hosted; via SKYbrary) — https://skybrary.aero/articles/wake-turbulence (retrieved 2026-07-25).
- **EUROCONTROL — European Wake Turbulence Categorisation and Separation Minima on Approach and Departure (RECAT-EU)** — the A–F categories by MTOW + wingspan and the distance/time minima — https://www.eurocontrol.int/publication/european-wake-turbulence-categorisation-and-separation-minima-approach-and-departure (retrieved 2026-07-25).
- **EASA — Assignment of ICAO aircraft types to RECAT-EU wake turbulence categories** — the authoritative per-type category list — https://www.easa.europa.eu/en/assignment-icao-aircraft-types-recat-eu-wake-turbulence-categories (retrieved 2026-07-25).
- **SKYbrary — Wake Turbulence** — physics (heavy/clean/slow, sink 300–500 ft, drift/decay), induced-roll hazard, recognition & recovery — https://skybrary.aero/articles/wake-turbulence (retrieved 2026-07-25).
- **SKYbrary — RECAT (Wake Turbulence Re-categorisation)** — RECAT-EU scheme, category split, integration into ICAO minima — https://skybrary.aero/articles/recat-wake-turbulence-re-categorisation (retrieved 2026-07-25).
- **SKYbrary — Mitigation of Wake Turbulence Hazard** — crew responsibilities on departure/approach, visual-separation transfer, en-route/oceanic mitigation — https://skybrary.aero/articles/mitigation-wake-turbulence-hazard (retrieved 2026-07-25).
- **FAA JO 7110.65 — Air Traffic Control (wake turbulence separation)** — US application of wake separation (distance/time), "caution wake turbulence" — via SKYbrary: https://skybrary.aero/articles/wake-turbulence (retrieved 2026-07-25) 🟧 confirm direct FAA URL.
- **SKYbrary / ICAO — Strategic Lateral Offset Procedures (SLOP)** — lateral offset (≤2 NM right) as same-level oceanic wake/collision mitigation — https://skybrary.aero/articles/strategic-lateral-offset-procedure-slop (retrieved 2026-07-25).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1.1 | 2026-07-25 | Wired per-type capability facts to the Fleet Capability Matrix (operator-approval values remain pending OpsSpec). Filled the per-type RECAT-EU + ICAO wake table from matrix Table D (A388=A/J; wide-body heavies B748/B77W/B77F/A346/A339/A359/A35K/B789=B/H; narrowbodies A319/A320/A21N/B738=D/M; BCS3=D 🟧 inferred/M), resolving the earlier "B or C" and "D/E" hedges; replaced the indicative-verify placement with matrix-cited type facts. |
| v0.1 | 2026-07-25 | Initial draft. Fourth of four OM E — Operations procedure docs in this batch (naturally shorter). Covers wake physics (heavy/clean/slow, sink 300–500 ft, drift/decay, induced-roll hazard), ICAO L/M/H/J and RECAT-EU A–F categories, K Global fleet placement (A388=Super/RECAT-A, B748/B77W/A346=Heavy/RECAT-B, A339 & other heavies=B/C, narrowbodies=Medium/D-E — indicative, verify on EASA list), departure/arrival radar and time separation minima and crew responsibilities (rotate/land beyond leader, visual-separation transfer), en-route/oceanic mitigation (RVSM 1,000 ft + SLOP lateral offset), and encounter recognition & recovery (level wings, power, exit). Built from ICAO Doc 4444, EUROCONTROL RECAT-EU, EASA type-assignment list, FAA JO 7110.65 and SKYbrary. Cross-linked to RVSM and Datalink/Oceanic OM E docs, Adverse Weather, Fleet Index, airframe packs (A388/B748/A339) and airspace briefs. Per-type RECAT letters, applicable scheme by field, and type recovery technique flagged open. |
