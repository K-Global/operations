# Steep Approach Operations — OM E Procedure

**Scope:** Location-agnostic procedure policy for **steep approaches** — a glidepath steeper than the standard ~3° (steep = **≥4.5°**, e.g. **London City EGLC 5.5°**) requiring specific aircraft certification/approval and crew qualification. Covers the definition, the **certification/approval** requirement and which K Global types hold it 🟧, configuration/speed/energy management, autoland/autopilot limits, go-around gradient, crew qualification & currency, and representative fields. This file *defines* the method; the airport brief and airframe pack *apply* it, and approach charts/minima are **pulled at planning** — none stored here.
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — public-source-verified (EASA CS-AWO / CS-25 & steep-approach guidance / UK CAA / SKYbrary / London City public performance material); the per-type **certification** fact is now wired to the **Fleet Capability Matrix** (`../OM B Fleet/Fleet Capability Matrix.md`, Table C — no mainline type steep-certified); any future **operator** steep-approach approval stays 🟧 (OpsSpec).

> **Read-me — regime & scoping (read first):** This is an **OM E Operations** procedure (method/policy), **not** an approach chart, an aircraft approval certificate, or an SOP. It states the *concepts* and K Global standing policy; the **actual approved steep-approach angle, configuration, VREF additive, autopilot/autoland limits and go-around data come from the type AFM/FCOM and the operator approval**, applied by qualified crew. Which K Global types are **certified/approved** for steep approach is **not confirmed in the manager data** and is flagged 🟧 `[VERIFY]` — do not fly a steep approach in a type without confirming its approval. Approach plates and aerodrome minima are **pulled at planning**, never cached here. Flag legend: 🟥 hard requirement/hazard · 🟧 caution/unverified/type-specific · 🟩 normal. Sim context: X-Plane 11 / SimBrief dispatch.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Standard vs steep | Standard glidepath ≈ **3°**. A **steep approach** is a glidepath **≥4.5°**; London City **EGLC = 5.5°** is the archetype. Steeper path → higher rate of descent at a given groundspeed and a smaller energy margin |
| Certification required | 🟥 A steep approach may only be flown by an aircraft **certificated/approved for the specific steep angle** (demonstrated controllable landing on a steep glidepath) **and** with an **operator approval** and **qualified crew**. Not all types are eligible |
| Which K Global types 🟩 | Per the **Fleet Capability Matrix** (`../OM B Fleet/Fleet Capability Matrix.md`, Table C — type fact): **no mainline K Global type is steep-approach certified as delivered.** The classic steep-approach airframes (A318, A220-**100**, E190-E2/E195-E2, BAe 146/RJ) are **not in the mainline fleet**; the A220-**300** (`BCS3`) is specifically *not* steep-certified (only the -100 is), and the standard A319/A320/A321neo are not the steep variants. **Large widebodies are not EGLC-eligible** on size/performance. **Operator steep-approach approval deferred** 🟧 — the LCY / steep-field solution will be based on the **Embraer E190/E195** (fleet update expected within weeks). Note several business-jet types in the wider fleet (e.g. Falcon 7X, Challenger/Legacy-class, Gulfstream) are also commonly LCY/steep-approach certified and remain an option. No current mainline type is steep-approach certified. Revisit when the E-jet packs are built / the fleet is updated |
| Descent rate | At 5.5° a typical approach groundspeed gives a rate of descent well above the ~700–800 fpm of a 3° path (order **~1,000+ fpm** 🟧 speed-dependent) — energy and stabilised-approach discipline are critical |
| Configuration | 🟧 Steep approaches use a **more drag-configured** setup (full/steep-approach flap, gear down early, often **speedbrake/spoiler use permitted** or a dedicated steep-approach mode) to hold the path at a stable speed without excess energy — per the AFM |
| Autopilot / autoland | 🟧 Typically flown **manually** from a defined point; **autoland is generally not approved** at steep-angle fields, and coupled-approach/autopilot minimum engage heights differ — verify per type/field |
| Go-around gradient | 🟥 Steep-approach fields are often obstacle-rich; the **missed-approach climb gradient** may exceed the standard 2.5% and must be met at landing weight — a performance-limiting item |
| Crew qualification | 🟥 Requires **specific training and currency** (steep-approach type/route qualification, recency), not a normal line approach |
| Representative fields | **London City (EGLC) 5.5°**; other steep/constrained fields (e.g. terrain-boxed approaches of the Innsbruck/LOWI type) use special approach procedures and, in some cases, steep segments — treat each on its published procedure |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Steep-approach definition (≥4.5°) | 🟩 | Sourced (EASA/UK CAA/SKYbrary). Angles of 4.5° and above are "steep" and require specific approval; EGLC 5.5° is the reference. |
| Aircraft certification requirement | 🟥 | EASA CS-25/CS-AWO steep-approach special condition; the manufacturer must demonstrate a controllable landing at the steep angle. Type/variant-specific. |
| Which K Global types certified | 🟩 | Per the Fleet Capability Matrix (Table C): **no mainline type is steep-approach certified.** The steep variants (A318, A220-**100**, E190-E2/E195-E2) are not in the fleet — the A220-**300** (BCS3) is specifically not steep-certified; widebodies excluded from EGLC. **Operator** steep-approach approval remains **deferred** 🟧 — the LCY/steep-field solution will be based on the Embraer E190/E195 (fleet update expected within weeks); reviewed again under OpsSpec batch 2 (2026-07-25) — not the matrix. |
| Configuration / speed / energy | 🟧 | Method sourced; the actual config (steep-approach flap, speedbrake permission, VREF additive) is AFM-specific — verify. |
| Autopilot / autoland limits | 🟧 | Autoland generally not available at EGLC-type fields; coupled-approach limits and manual-from-point vary by type/field — verify. |
| Go-around gradient | 🟥 | Obstacle-rich sites raise the required missed-approach gradient above the standard; must be met at landing weight (performance-limiting). |
| Crew qualification & currency | 🟥 | Specific steep-approach training and recency required; not a standard approach qualification. |

---

## 3. Definition & where it applies

- **Standard vs steep — 🟩:** the normal ILS/PAPI glidepath is about **3°** (2.5–3.5° band). A **steep approach** is any published glidepath of **4.5° or steeper**. The defining example is **London City (EGLC)**, whose ILS glidepath is **5.5°** — driven by a city-centre location, surrounding tall structures/noise-abatement, and a short runway.
- **Why it is demanding — 🟥:** for the same groundspeed, doubling the path angle roughly doubles the rate of descent, so a 5.5° approach descends far faster than a 3° one and sits closer to the **high-energy/float** boundary on one side and the **high-sink** boundary on the other. There is little margin to absorb a fast/high condition, and the flare/touchdown is firmer and later. This is why steep approaches demand certification, drag-configuration and specific training.
- **Where it applies:** primarily **London City (EGLC, 5.5°)**; a handful of other aerodromes publish steep or near-steep glidepaths for terrain/noise reasons. Terrain-boxed fields of the **Innsbruck (LOWI)** type use special (often RNP/circling) approach procedures with steep or high-descent segments and their own crew qualification — handle each on its **published procedure and any special-aerodrome requirement**, not by a generic rule.

---

## 4. Aircraft certification & K Global fleet eligibility

- **Certification requirement — 🟥:** an aircraft may only fly a steep approach if it is **certificated for the specific steep glidepath angle**. The manufacturer demonstrates (under **EASA CS-25 / CS-AWO** steep-approach provisions, or the FAA equivalent) that the type can be **safely and controllably landed** on the steep path, including approach speed, drag configuration, flare/landing distance and the **all-engine and one-engine-inoperative go-around** from the steep segment. The result is an **AFM steep-approach supplement** stating the approved angle, configuration and any speed/weight limits.
- **Operator approval — 🟥:** beyond the airframe certificate, the **operator** must hold approval and the crews must be **qualified** (§6). Airframe-certified ≠ automatically flyable on the line without the operator/crew piece.
- **K Global fleet eligibility — 🟩 (type fact, per the Fleet Capability Matrix `../OM B Fleet/Fleet Capability Matrix.md`, Table C):**
  - **No mainline K Global type is steep-approach certified as delivered.** The matrix records "Steep approach — type certified? = **No**" for every mainline type (BCS3, A319, A320, A21N, A339, A346, A359, A35K, A388, B738, B748, B77W, B77F, B789).
  - The real-world steep-approach (EGLC 5.5°) clearances belong to airframes that are **variant-specific and not in the mainline fleet**: the **A318** and **A220-100** (the A220-**300** / `BCS3` we operate is *not* steep-certified — the matrix flags this specifically), and the **E190-E2 / E195-E2**. Standard A319/A320/A321neo are not the steep variants. So there is **no current in-fleet candidate** to line up for EGLC.
  - 🟥 **Large widebodies (A339/A359/A35K/A346/A388, B77W/B789/B748) are not EGLC-eligible** on size/performance grounds; do not plan steep-field service with them. Their relevance to this doc is limited to any terrain-boxed field with a steep *segment* on a published procedure.
  - **Operator approval — 🟧 DEFERRED:** operator steep-approach approval is **deferred**; the LCY / steep-field solution will be based on the **Embraer E190/E195** (fleet update expected within weeks). Note several business-jet types in the wider fleet (e.g. Falcon 7X, Challenger/Legacy-class, Gulfstream) are also commonly LCY/steep-approach certified and remain an option. No current mainline type is steep-approach certified. Revisit when the E-jet packs are built / the fleet is updated. `[K Global OpsSpec 2026-07-25 — deferred]`

---

## 5. Configuration, energy & automation

- **Drag configuration — 🟧:** steep approaches are flown **fully configured early** — gear down, **landing/steep-approach flap**, and (where the AFM permits) **speedbrake/spoiler deployed** or a dedicated **steep-approach mode** — so the aircraft holds the steeper path at a stable target speed without accelerating. The point is to have **enough drag to descend steeply at approach speed** while retaining go-around capability.
- **Speed & energy — 🟥:** fly the **approved approach speed / VREF additive** exactly; steep approaches are unforgiving of excess speed (float/long-landing) and of low speed (high sink, hard touchdown). Maintain a **stabilised approach** to the field's gate; K Global's stabilised-approach criteria apply, tightened for the steeper path — any deviation → **go around**.
- **Rate of descent — 🟧:** expect a high ROD (order ~1,000+ fpm at typical EGLC speeds, speed-dependent). EGPWS/"SINK RATE" logic and any excessive-descent alerting may need the steep-approach provisions — verify the type behaviour so genuine alerts are respected (see `./Adverse Weather and Windshear.md` §8) 🟧.
- **Automation limits — 🟧:** steep-angle fields are typically flown **manually from a defined point** on final; **autoland is generally not approved**, and the minimum autopilot/coupled-approach engage/disconnect heights differ from a normal approach. Verify the coupled-approach limits and the manual-from-point altitude per type/field before flight.
- **Landing & rollout:** the flare is later/firmer and the touchdown zone tighter; combine with any **short-runway** stopping policy (`./Short and Limited Runway Operations.md`) and, in poor visibility, the **Low Visibility** policy — noting that steep fields usually have **higher minima** and no low-vis autoland.

---

## 6. Go-around, crew qualification & currency

- **Go-around gradient — 🟥:** steep-approach fields are often **obstacle- and terrain-constrained**, so the published **missed-approach climb gradient can exceed the standard 2.5%**. This must be met at the actual **landing weight** (and on the OEI case) — a **performance-limiting** item that may cap landing weight at the field. Check it at planning; brief the go-around, including the early clean-up/turn if the missed approach demands it.
- **Crew qualification — 🟥:** steep approaches require **specific training** (ground + sim, the steep-approach technique, energy management, go-around) and, for some fields, an **aerodrome/route competence** and possibly a Captain-only or restricted-crew rule. Flying a steep approach without the qualification is prohibited.
- **Currency/recency — 🟥:** a **recency requirement** applies (a defined interval or number of steep approaches); lapsed currency requires re-qualification before line use. Track currency per crew.
- **Weather & limits — 🟧:** steep fields commonly carry **higher approach minima**, **tighter crosswind/tailwind limits** and often **no low-visibility/autoland capability** — apply the field's published limits, which are more restrictive than a normal approach.

---

## Cross-references

- **Short & Limited Runway Operations (OM E)** — steep fields are usually short too; the stopping/landing-distance case pairs directly with the steep-approach technique: `./Short and Limited Runway Operations.md`
- **Low Visibility Operations (OM E)** — steep fields typically have higher minima and no autoland; the interaction of steep + low-vis policy: `./Low Visibility Operations.md`
- **Adverse Weather & Windshear (OM E)** — high-ROD/EGPWS "SINK RATE" behaviour and gust/shear on a steep final: `./Adverse Weather and Windshear.md`
- **Fleet Capability Matrix (OM B)** — the per-type **steep-approach certification** fact (Table C: no mainline type certified; A220-300 specifically not); the **operator** steep-approach approval is the adjacent 🟧 column (OpsSpec, not the matrix). Cite it rather than restating per-type values: `../OM B Fleet/Fleet Capability Matrix.md`
- **Airframe packs (steep-approach capability)** — the per-type approval, approved angle, configuration and VREF additive live in the airframe Dispatch/Intro; verify eligibility here: `../OM B Fleet/OM B Airbus/BCS3/BCS3.md`, `../OM B Fleet/OM B Airbus/A21N/A21N.md`, plus the (deferred) E-Jet packs 🟧
- **Fleet Index** — fleet composition and body class to screen widebody ineligibility: `../OM B Fleet/Fleet Index.md`
- **Airport briefs (steep fields)** — London City and any steep-segment fields carry the field-specific procedure, minima and limits in their §14/approach sections: `../OM C Routes and Destinations/Airports/…`

---

## Open items (🟧 — confirm)

- **Steep-approach certification per K Global type** — RESOLVED via the Fleet Capability Matrix (Table C): **no mainline type is steep-approach certified** (the A220-300/BCS3 is specifically not; the steep variants A318/A220-100/E-Jet-E2 are not in the fleet). The **operator** steep-approach approval was reviewed again under OpsSpec batch 2 (2026-07-25) and remains **DEFERRED** — the LCY / steep-field solution will be based on the **Embraer E190/E195** (fleet update expected within weeks); several business-jet types in the wider fleet (Falcon 7X, Challenger/Legacy-class, Gulfstream) are also commonly LCY/steep-approach certified and remain an option. No current mainline type is steep-approach certified. Revisit when the E-jet packs are built / the fleet is updated.
- **Configuration & VREF additive** — the approved steep-approach config (flap setting, speedbrake permission, steep-approach mode) and speed additive per type.
- **Automation limits** — coupled-approach/autopilot minimum heights and confirmation that autoland is not approved at the relevant steep fields, per type.
- **Go-around gradient data** — the actual published missed-approach gradients and resulting landing-weight limits for EGLC (and any other steep field K Global serves).
- **Crew qualification & currency scheme** — the training syllabus, recency interval and any Captain-only/aerodrome-competence rule for steep approaches.
- **Which steep fields K Global serves** — confirm the network actually includes EGLC (or other steep fields) with an eligible type; otherwise this doc is capability-only.

---

## Sources & References
*Public URLs only. Cite origin + retrieved dates. Approach charts, aerodrome minima and subscription material (AFM/FCOM, SimBrief) may inform content but are not stored or listed here.*

- **EASA CS-AWO / CS-25 (steep-approach special condition)** — airworthiness basis for demonstrating a controllable landing on a steep glidepath; the AFM steep-approach supplement — via EASA document library: https://www.easa.europa.eu/en/document-library/certification-specifications (retrieved 2026-07-25) 🟧 confirm exact CS-AWO steep-approach paragraph.
- **UK CAA — Steep Approach Approval: Compliance Statement and Checklist** — operator/airframe approval requirements for steep approaches — https://www.caa.co.uk/publication/download/17304 (retrieved 2026-07-25).
- **SKYbrary — Steep Approach** — definition (≥4.5°), certification and technique overview — https://skybrary.aero/articles/steep-approach (retrieved 2026-07-25) 🟧 confirm article slug.
- **Guinness World Records — steepest glide slope for an international airport (London City ILS 5.5°, 1,508 m runway)** — public reference for the EGLC 5.5°/runway figures — https://www.guinnessworldrecords.com/world-records/774812-steepest-glide-slope-for-an-international-airport (retrieved 2026-07-25).
- **FlightGlobal — "E195-E2 secures steep-approach clearance for London City airport"** — example of type/variant-specific EGLC certification (and the earlier E190-E2 clearance) — https://www.flightglobal.com/air-transport/e195-e2-secures-steep-approach-clearance-for-london-city-airport/155779.article (retrieved 2026-07-25).
- **Simple Flying — "What are the steep approach rules that dictate operations at London City airport?" / "Which airports require steep approach certification?"** — public summary of the ≥4.5° rule, EGLC 5.5°, and certified-type list — https://simpleflying.com/london-city-airport-steep-approach-rules-guide/ (retrieved 2026-07-25).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1.3 | 2026-07-25 | OpsSpec batch 2: operator approvals set (RVSM all mainline, oceanic RNP4+RNP10, NAT HLA, CPDLC/ADS-C FANS, PBCS, cold-temp correction crew+FMS, flex/derate takeoff, MMEL baseline, autoland currency, RNP-AR per-field). Refined the steep-approach deferred note: the LCY/steep-field solution will be based on the Embraer E190/E195 (fleet update expected within weeks); business-jet types (Falcon 7X, Challenger/Legacy-class, Gulfstream) noted as a remaining option; approval stays deferred/🟧. |
| v0.1.2 | 2026-07-25 | OpsSpec batch 1: operator-approval values set (EDTO 180/120, LVO CAT IIIB/I, LVTO 125m, RNP AR 0.3, RNP APCH+LPV, contingency 5%/ERA, final reserve 30 min, tankering case-by-case; steep approach deferred). Operator steep-approach approval explicitly reviewed and DEFERRED pending an LCY/steep-field network decision; realistic LCY-capable candidates noted (E190/E195 deferred fleet, or A220-100 vs the A220-300/BCS3 operated). |
| v0.1.1 | 2026-07-25 | Wired per-type capability facts to the Fleet Capability Matrix (operator-approval values remain pending OpsSpec). Filled the type-certification fact from matrix Table C — **no mainline type is steep-approach certified** (the A220-300/BCS3 specifically not; steep variants A318/A220-100/E-Jet-E2 not in fleet), correcting the earlier "candidates to verify" framing; operator steep-approach approval held 🟧 (moot for present fleet, OpsSpec not the matrix). |
| v0.1 | 2026-07-25 | Initial draft. Third of four OM E — Operations procedure docs in this batch (naturally shorter). Defines steep approach (≥4.5°, EGLC 5.5°), the aircraft certification (EASA CS-AWO/CS-25) + operator approval + crew-qualification requirement, K Global fleet eligibility (🟧 `[VERIFY]` — A220/A32x/E-Jet candidates; widebodies excluded from EGLC), configuration/speed/energy management, autopilot/autoland limits, go-around gradient (obstacle-rich, performance-limiting), and crew qualification/currency, with representative fields (EGLC, Innsbruck-type). Built from EASA CS-AWO/CS-25, UK CAA steep-approach checklist, SKYbrary and London City public material. Cross-linked to Short & Limited Runway, Low Visibility, Adverse Weather, the BCS3/A21N airframe packs and Fleet Index. Per-type approval, config/VREF additive, automation limits and go-around data flagged open. |
