# A05 — Qualification Requirements · OM A

Licences and ratings in the VATSIM context, type ratings mapped to the K Global fleet, area/route and aerodrome competence, recency, and special-operations qualification.

**Version** v1.0 · **Updated** 2026-07-25 · **Status** Verified

> Flag legend: 🟥 restriction/hazard/hard requirement · 🟧 caution/unverified/to-ratify · 🟩 normal.

## Scope

- What "licence and rating" means for a VATSIM operation, and the network ratings K Global recognises.
- Type ratings mapped to the K Global fleet (which types share a rating).
- Rank and pilot-categorisation scheme (modelled on a major full-service network group — ratified 2026-07-25).
- Area/route and aerodrome competence — Category A/B/C aerodromes, briefing requirements, emergency aerodromes.
- Recency and currency.
- Special-operations qualification (LVO/CAT II-III, RNP AR, ETOPS/EDTO, steep approach) and where the training that delivers it lives.

---

## 1. Licences and ratings in the VATSIM context — stated honestly

K Global pilots hold **no real airman's licence**, and the manual does not pretend they do. The framework K Global recognises is:

- **VATSIM network membership and pilot rating.** 🟩 An active VATSIM account is the entry qualification. VATSIM's own progressive **pilot ratings** (basic through advanced, earned through its pilot-training programme) are the nearest network analogue to licence/rating currency, and K Global recognises them as evidence of airmanship. They are encouraged but are not, by themselves, a per-type authority.
- **K Global type checkout.** The airline's own competence standard for a type is what authorises a pilot to fly it on the line (see §2–§3). This is administered internally and — for the mainline fleet — is intended to be delivered and recorded through the training syllabi in **OM D** (🟧 not yet built).
- **The real-world reference frame.** Where this chapter maps types to ratings or defines special-ops qualifications, it does so against the **ICAO Annex 1 / EASA Part-FCL** structure for realism. This is a modelling reference, not a claim that pilots hold Part-FCL licences. 🟩

Where real regulation would require a medical certificate, K Global substitutes the fitness-to-fly self-declaration in [`A06 — Crew Health, Fatigue and Flight-Time Limitations.md`](a06-crew-health-fatigue-and-flight-time-limitations.md).

## 2. Type ratings — the K Global fleet

Real flight crews are rated on a **type** (or a group of types the regulator treats as one rating). K Global models the same discipline: a pilot is checked out and current on a **rating group**, and types that share a real-world common type rating are treated together for checkout, recency and substitution. The table below maps the K Global mainline fleet to its rating groups, following the EASA Part-FCL type-rating structure (a type flown by K Global inherits the rating group its real airframe sits in). 🟩

| Rating group (Part-FCL basis) | K Global types in the group (ICAO) | Note |
|---|---|---|
| **A320 family** | `A319`, `A320`, `A21N` (A321neo/LR/XLR) | One common rating spans A318/A319/A320/A321 incl. neo — the K Global narrowbody Airbus fleet is a single rating group. 🟩 |
| **A330 / A350** | `A339` (A330-900neo), `A359` (A350-900), `A35K` (A350-1000) | The Part-FCL list groups A330 and A350 under a **common rating** — K Global's A330neo and A350 fleet share one rating group (differences/variant training applies between families). 🟩 |
| **A340** | `A346` (A340-600) | Separate rating — the A340 is its own group, not part of the A330/A350 rating. 🟩 |
| **A380** | `A388` (A380-800) | Separate, standalone rating. 🟩 |
| **A220 (BD-500)** | `BCS3` (A220-300) | Separate, standalone rating (BD-500). 🟩 |
| **B737** | `B738` (737-800) | The 737-300→900 and MAX share a rating; the 737-800 sits in this group. (The 737-100/-200 are a separate legacy rating — not in the fleet.) 🟩 |
| **B747-400** | `B748` (747-8i / 8F) | The 747-400 and 747-8 share a common rating. 🟩 |
| **B777 / B787** | `B77W` (777-300ER), `B77F` (777F), `B789` (787-9) | The Part-FCL list groups the **777 and 787 under a common rating** — K Global's 777 and 787 fleet is a single rating group (differences training between families). 🟩 |

**Deferred / other types.** Regional jets (E-jets — one rating spanning E170/175/190/195 and the E2s), turboprops (Dash 8, ATR, Saab), business jets (Gulfstream, Falcon, Challenger/Legacy, PC-12) and the Concorde/MD-11F historic and freighter types each carry their own rating group; these are indicative pending their airframe packs and are flagged 🟧 in the Fleet Capability Matrix secondary table. See [the relevant OM section](../fleet/capability-matrix.md).

**Substitution.** A route may be flown by any type **within the same rating group** where the airframe is suitable for the sector; substitution across rating groups is not a type-rating matter and is governed by fleet/route policy, not this chapter. 🟩

## 3. Rank and pilot categorisation — modelled on a major full-service network group 🟩 ratified 2026-07-25

K Global mirrors a **major full-service network group** flight-deck career structure. The scheme below is **ratified 2026-07-25** — the hour and sector thresholds are the approved defaults (tunable later by management), and are re-expressed here so the structure is legible.

**Rank ladder** 🟩 ratified 2026-07-25

| Rank | Flight-deck role | Indicative gate (ratified default) |
|---|---|---|
| **First Officer (FO)** | Co-pilot; entry rank on joining | Awarded on joining |
| **Senior First Officer (SFO)** | Experienced co-pilot | Continuous active service + logged hours |
| **Captain (CPT)** | Commander | Active service + hours + sectors + command course + Category A |
| **Senior / Training Captain** | Commander; line-training and standards | By appointment on merit |

**Pilot categorisation** 🟩 ratified 2026-07-25 — every pilot carries a category that expresses command-readiness:

- **Category A** — meets all requirements for command, subject to completing the command course.
- **Category B** — has not yet met the criteria for command.
- **Category C** — restricted from command progression for disciplinary or other reasons.

Category is managed by the relevant fleet manager. The command course itself and the syllabus behind each rank sit in **OM D** (🟧 not yet built). The whole scheme — ladder, gates and categorisation — is **ratified 2026-07-25 🟩** (approved defaults, tunable later).

## 4. Area / route and aerodrome competence

K Global requires every pilot to be **adequately briefed for each sector** before operating it — into, out of, or over the relevant area. Briefing material is held in the route-information manual: area briefs, FIR briefs and per-aerodrome briefs in . The area brief is studied before flight in the relevant airspace; the aerodrome brief, where one exists, before flight into or out of that field. 🟩

### 4.1 Aerodrome categories

Aerodromes are classified by the additional competence they demand. 🟩

- **Category A — unrestricted.** A field meeting all of: an approved instrument approach procedure; at least one runway free of a performance-limited take-off/landing procedure; published circling minima not above 1,000 ft above aerodrome level; and night-operations capability. No special briefing beyond the normal sector brief.
- **Category B — restricted.** A field that does not meet all Category A criteria, or that demands extra consideration — non-standard approach aids or patterns, unusual local weather, unusual performance limitations, or significant obstacles/layout/lighting factors. 🟧 Before operating to a Category B field the Commander **self-briefs on the specific field** and its considerations.
- **Category C — restricted, additional.** 🟥 A field demanding consideration beyond Category B. Before operating to a Category C field the Commander should have prior familiarity — as an observer, or through guidance from the training organisation — before flying it as Commander.

The list of which fields are Category B/C for K Global is maintained with the route-information material; challenging-field designations feed the co-pilot handling limits in [`A04 — Crew Composition.md`](a04-crew-composition.md) §6. 🟧

### 4.2 Emergency (diversion) aerodromes

Where a sector overflies large areas with sparse diversion options — oceanic, polar, or otherwise remote — the availability of emergency diversion aerodromes is a competence item, not just a planning one. 🟥 The Commander is responsible for being adequately briefed on the emergency diversion aerodromes relevant to the sector. These are identified in the route-information manual and interact with ETOPS/EDTO and polar planning — see [the relevant OM section](../flight-ops/etops-edto.md) and [the relevant OM section](../flight-ops/polar.md).

## 5. Recency and currency

🟩 ratified 2026-07-25 — K Global models the standard recency disciplines, adapted to a network operation:

- **Type recency.** A pilot maintains currency on a rating group by flying it. A pilot who has not operated a rating group for an extended period should re-familiarise before returning to the line on it (the reactivation detail — hours/sectors to re-current — sits with the rank scheme in §3, ratified 2026-07-25 as the approved default).
- **Recent experience.** The real-world "recent take-offs and landings" and night/instrument recency disciplines are modelled as good practice; because filed sectors on the platform are the log of record ([`A04`](a04-crew-composition.md) §7), currency is evidenced by recent filed activity on the type.
- **Command course / line check.** Progression to command and the associated line check are training events delivered under **OM D** (🟧 not yet built).

The exact recency thresholds are **ratified 2026-07-25 🟩** with the rank/categorisation scheme (approved defaults, tunable later).

## 6. Special-operations qualification

Some operations require a **specific authorisation** over and above a type rating. K Global models these as distinct qualifications; the **operator's authorisation status** for each (what minima/limits are actually approved) is set in the Fleet Capability Matrix, the **procedure** lives in OM E, and the **training** that delivers the qualification lives in **OM D** (🟧 not yet built).

| Special operation | K Global operator status (matrix) | Procedure (OM E) | Training (OM D) |
|---|---|---|---|
| **Low-visibility ops — CAT II/III & LVTO** | 🟩 CAT IIIB where type fail-operational; CAT I where not; LVTO to 125 m RVR | Low Visibility Operations | 🟧 OM D |
| **RNP AR APCH** | 🟩 Authorised to RNP 0.3 (per-field authorisation list) | PBN and RNP Operations | 🟧 OM D |
| **ETOPS / EDTO** | 🟩 Rule times set per type (180 min widebody twins, 120 min narrowbody twins; EDTO adequate-aerodrome for quads — concept, not a gap) · 🟧 B77F freighter rule-time still an open matrix cell | [the relevant OM section](../flight-ops/etops-edto.md) | 🟧 OM D |
| **Steep approach** | 🟧 Deferred — no current mainline type steep-certified; awaiting E-jet/fleet update | Steep Approach Operations | 🟧 OM D |

Two disciplines to keep straight (per the Fleet Capability Matrix read-me): a **type capability** is what the airframe can do; an **operator authorisation** is what K Global permits its pilots to fly. A pilot may only exercise a special operation where **both** the type is capable **and** the operator authorises it **and** the pilot holds the qualification. The per-type capability values are in [the relevant OM section](../fleet/capability-matrix.md); the qualification itself is delivered and recorded in **OM D**.

---

## Cross-references

- [`A04 — Crew Composition.md`](a04-crew-composition.md) — co-pilot handling limits, challenging-field interaction
- [`A06 — Crew Health, Fatigue and Flight-Time Limitations.md`](a06-crew-health-fatigue-and-flight-time-limitations.md) — fitness-to-fly (medical substitute)
- [the relevant OM section](../fleet/capability-matrix.md) — per-type capability & operator authorisations
-  — area/FIR/aerodrome briefs; Category B/C list
- OM E special-ops procedures — LVO, PBN/RNP, ETOPS/EDTO, Steep Approach (linked in §6)
- **OM D** — type/recurrent/command/special-ops training syllabi (🟧 not yet built)

## Sources & References
*Public URLs only. Retrieved 2026-07-25.*

- EASA — Easy Access Rules for Aircrew (Regulation (EU) No 1178/2011, Part-FCL — type ratings, FCL.700/FCL.010) — https://www.easa.europa.eu/en/document-library/easy-access-rules/easy-access-rules-aircrew-regulation-eu-no-11782011
- EASA — Type rating and licence endorsement list, flight crew (aeroplanes) — https://www.easa.europa.eu/en/downloads/type-ratings-and-licence-endorsement-lists
- ICAO — Annex 1, Personnel Licensing — https://www.icao.int/safety/airnavigation/Pages/annexes-booklets.aspx
- EASA — Easy Access Rules for Air Operations (Part-ORO/Part-SPA — special approvals: LVO, PBN/RNP AR, EDTO, steep approach) — https://www.easa.europa.eu/en/document-library/easy-access-rules/easy-access-rules-air-operations
- VATSIM — Pilot ratings & training — https://vatsim.net/docs/policy/pilot-ratings

## Change Log

| Version | Date | Change |
|---|---|---|
| v1.0 | 2026-07-25 | Ratifications applied (A01 appointments, A03 safety policy, A04 co-pilot limits, A05 rank/categorisation, A06 flight-hours); real-world airline references neutralised per governance §1.8; QA nits swept. Promoted to Verified. |
| v0.1 | 2026-07-25 | Initial draft — re-expressed from source SOP/policy + type ratings, re-based to K Global; rank/qual scheme flagged for ratification; training detail deferred to OM D. |
