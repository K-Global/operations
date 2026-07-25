<!--
================================================================================
  K Global — OM B FLEET · FLEET CAPABILITY MATRIX
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# OM B — Fleet Capability Matrix

**One authoritative map of every fleet type to its operational capabilities** · resolves the per-type placeholders carried in the OM E procedure docs and the airframe packs
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me — the one principle this document turns on: TYPE CAPABILITY is not OPERATOR APPROVAL.**
>
> - **Type capability** 🟩 = what the airframe is certified or able to do, independent of who flies it. Public and factual: *"the A350 is EDTO-capable to 370 min"*, *"the type is CAT IIIB fail-operational autoland capable"*, *"the type is RNP AR APCH capable"*. Every such value here traces to a public source in §Sources.
> - **Operator approval** 🟧 = a K Global operational decision or OpsSpec value: the EDTO diversion (rule) time actually authorised and used, the LVO minima flown, whether RNP AR is operationally authorised, whether a steep approach is operationally approved. **These are NOT type facts.** Cells not yet approved are marked **🟧 [operator — VERIFY]** and are deliberately left blank pending operator/VAMSYS confirmation — a blank beats a guess, this document never invents an approved minima or diversion time. **OpsSpec batch 1 (2026-07-25)** has now set the widebody-twin/narrowbody-twin EDTO rule times, the RNP AR (RNP 0.3) and full RNP APCH authorisations, and the LVO (CAT IIIB/CAT I) minima — these cells are now 🟩 tagged `[K Global OpsSpec 2026-07-25]`. The quad EDTO cells, the B77F EDTO cell, and the steep-approach approval remain 🟧 pending further OpsSpec batches.
>
> A type can be *capable* of something the operator has *not approved* (e.g. a type certified to 370 min flown under a 180-min operator rule), and — for adequate-aerodrome planning — a capability can apply to an aircraft even where classic ETOPS never did (see EDTO note below). Read every cell with the type/operator split in mind.
>
> Not a substitute for the aircraft's own AFM/FCOM or the operator's OpsSpec. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal/confirmed.

---

## How to read this document

- **Four tables, one fleet.** The mainline fleet is split across Tables A–D (identity/EDTO, navigation/approach, LVO/steep, wake/hot-high/RFF) purely so no single table is too wide to read. Every table is keyed on the **ICAO type designator** — join across tables on that column.
- **Flags are per-cell.** 🟩 = confirmed type fact from a public source. 🟧 = either an operator decision (not a type fact) **or** a value inferred rather than confirmed from a primary list — the per-column notes say which.
- **"Type max diversion capability"** is the certified beyond-180 ceiling for the airframe, **not** what K Global flies. The rule time flown is the adjacent 🟧 operator column.
- **Deferred / other types** (Concorde, MD-11F, E-jets, CRJ, Dash 8, ATR, Saab, Gulfstream, Falcon, PC-12, ACJ) sit in a **secondary indicative table** and are 🟧 throughout — they are noted for completeness, not yet researched to the mainline standard.
- **Airframe packs and OM E docs should reference this matrix**, not restate it. When a per-type figure is needed in a Dispatch/Intro file or an OM E §applicability table, cite this document rather than duplicating the value (single source of truth; no drift).

---

## Table A — Identity & EDTO / ETOPS

| ICAO | Type | Body | Engines (count) | EDTO applicability | Type max diversion capability (public) | Operator-approved rule time |
|---|---|---|---|---|---|---|
| `BCS3` | A220-300 | Narrowbody | 2 × PW1500G | Twin — classic ETOPS applies 🟩 | ETOPS up to **180 min** 🟩 | **120 min** (narrowbody twin) 🟩 [K Global OpsSpec 2026-07-25] |
| `A319` | A319-100 | Narrowbody | 2 (CFM56 / V2500) | Twin — classic ETOPS applies 🟩 | ETOPS up to **180 min** 🟩 | **120 min** (narrowbody twin) 🟩 [K Global OpsSpec 2026-07-25] |
| `A320` | A320-200 | Narrowbody | 2 (CFM56 / V2500) | Twin — classic ETOPS applies 🟩 | ETOPS up to **180 min** 🟩 | **120 min** (narrowbody twin) 🟩 [K Global OpsSpec 2026-07-25] |
| `A21N` | A321neo (neo/LR/XLR) | Narrowbody | 2 (LEAP-1A / PW1100G) | Twin — classic ETOPS applies 🟩 | ETOPS up to **180 min** 🟩 | **120 min** (narrowbody twin) 🟩 [K Global OpsSpec 2026-07-25] |
| `A339` | A330-900neo | Widebody | 2 × Trent 7000 | Twin — classic ETOPS applies 🟩 | **beyond 180 → up to 285 min** 🟩 | **180 min** (widebody twin) 🟩 [K Global OpsSpec 2026-07-25] |
| `A346` | A340-600 | Widebody | **4** × Trent 500 | Quad — not ETOPS-limited; **EDTO adequate-aerodrome concept applies (2+ engines)** 🟩 | No ETOPS diversion-time limit as a quad; EDTO planning applies 🟩 | 🟧 [operator — VERIFY] (quad — ICAO EDTO adequate-aerodrome concept, no ETOPS diversion limit) |
| `A359` | A350-900 | Widebody | 2 × Trent XWB-84 | Twin — classic ETOPS applies 🟩 | **beyond 180 → up to 370 min** 🟩 | **180 min** (widebody twin) 🟩 [K Global OpsSpec 2026-07-25] |
| `A35K` | A350-1000 | Widebody | 2 × Trent XWB-97 | Twin — classic ETOPS applies 🟩 | **up to 370 min** (XWB family) 🟩 | **180 min** (widebody twin) 🟩 [K Global OpsSpec 2026-07-25] |
| `A388` | A380-800 | Widebody | **4** (Trent 900 / GP7200) | Quad — not ETOPS-limited; **EDTO adequate-aerodrome concept applies (2+ engines)** 🟩 | No ETOPS diversion-time limit as a quad; EDTO planning applies 🟩 | 🟧 [operator — VERIFY] (quad — ICAO EDTO adequate-aerodrome concept, no ETOPS diversion limit) |
| `B738` | 737-800 | Narrowbody | 2 × CFM56-7B | Twin — classic ETOPS applies 🟩 | ETOPS up to **180 min** (up to 207 with approval) 🟩 | **120 min** (narrowbody twin) 🟩 [K Global OpsSpec 2026-07-25] |
| `B748` | 747-8 (8i / 8F) | Widebody | **4** × GEnx-2B | Quad — not ETOPS-limited; **EDTO adequate-aerodrome concept applies (2+ engines)** 🟩 | No ETOPS diversion-time limit as a quad; EDTO planning applies 🟩 | 🟧 [operator — VERIFY] (quad — ICAO EDTO adequate-aerodrome concept, no ETOPS diversion limit) |
| `B77W` | 777-300ER | Widebody | 2 × GE90-115B | Twin — classic ETOPS applies 🟩 | **up to 330 min** (GE90) 🟩 | **180 min** (widebody twin) 🟩 [K Global OpsSpec 2026-07-25] |
| `B77F` | 777F | Widebody (Freighter) | 2 × GE90-110B1 | Twin — classic ETOPS applies 🟩 | **up to 330 min** (GE90) 🟩 | 🟧 [operator — VERIFY] (not in OpsSpec batch 1 — confirm before assuming a rule time) |
| `B789` | 787-9 | Widebody | 2 (Trent 1000 / GEnx-1B) | Twin — classic ETOPS applies 🟩 | **up to 330 min** 🟩 | **180 min** (widebody twin) 🟩 [K Global OpsSpec 2026-07-25] |

**EDTO vs ETOPS — the distinction that matters for the quads.** Classic **ETOPS** is a twin-engine construct (a max distance/time from an adequate aerodrome on one engine inoperative). **ICAO EDTO (Extended Diversion Time Operations, Annex 6)** is the broader framework and its adequate-aerodrome / threshold-time concept **applies to aeroplanes with two or more engines** — so the A346, A388 and B748 quads are *not* exempt from EDTO planning even though they carry no twin-style ETOPS diversion-time limit. The "type max diversion capability" column for the quads therefore reads "no ETOPS limit" while EDTO adequate-aerodrome planning still applies. See `../OM E Operations/ETOPS-EDTO Procedures.md`.

## Table B — RVSM & PBN / RNP

| ICAO | RVSM (type) | RNP APCH — LNAV / LNAV-VNAV / LPV | RNP AR APCH capable (type) | RNP 4 / 2 / 1, RNAV | Operator RNP AR authorisation | Operator RNP APCH authorisation |
|---|---|---|---|---|---|---|
| `BCS3` | 🟩 capable | LNAV 🟩 · LNAV-VNAV 🟩 · LPV 🟧 (SBAS, config-dependent) | 🟩 capable | 🟩 capable | **Authorised to RNP 0.3** 🟩 [K Global OpsSpec 2026-07-25] | **Full — LNAV / LNAV-VNAV / LPV** where SBAS-equipped 🟩 [K Global OpsSpec 2026-07-25] |
| `A319` | 🟩 capable | LNAV 🟩 · LNAV-VNAV 🟩 · LPV 🟧 (config-dependent) | 🟩 capable | 🟩 capable | **Authorised to RNP 0.3** 🟩 [K Global OpsSpec 2026-07-25] | **Full — LNAV / LNAV-VNAV / LPV** where SBAS-equipped 🟩 [K Global OpsSpec 2026-07-25] |
| `A320` | 🟩 capable | LNAV 🟩 · LNAV-VNAV 🟩 · LPV 🟧 (config-dependent) | 🟩 capable | 🟩 capable | **Authorised to RNP 0.3** 🟩 [K Global OpsSpec 2026-07-25] | **Full — LNAV / LNAV-VNAV / LPV** where SBAS-equipped 🟩 [K Global OpsSpec 2026-07-25] |
| `A21N` | 🟩 capable | LNAV 🟩 · LNAV-VNAV 🟩 · LPV 🟧 (SBAS, config-dependent) | 🟩 capable | 🟩 capable | **Authorised to RNP 0.3** 🟩 [K Global OpsSpec 2026-07-25] | **Full — LNAV / LNAV-VNAV / LPV** where SBAS-equipped 🟩 [K Global OpsSpec 2026-07-25] |
| `A339` | 🟩 capable | LNAV 🟩 · LNAV-VNAV 🟩 · LPV 🟧 (config-dependent) | 🟩 capable | 🟩 capable | **Authorised to RNP 0.3** 🟩 [K Global OpsSpec 2026-07-25] | **Full — LNAV / LNAV-VNAV / LPV** where SBAS-equipped 🟩 [K Global OpsSpec 2026-07-25] |
| `A346` | 🟩 capable | LNAV 🟩 · LNAV-VNAV 🟩 · LPV 🟧 | 🟩 capable | 🟩 capable | **Authorised to RNP 0.3** 🟩 [K Global OpsSpec 2026-07-25] | **Full — LNAV / LNAV-VNAV / LPV** where SBAS-equipped 🟩 [K Global OpsSpec 2026-07-25] |
| `A359` | 🟩 capable | LNAV 🟩 · LNAV-VNAV 🟩 · LPV 🟧 (config-dependent) | 🟩 capable | 🟩 capable | **Authorised to RNP 0.3** 🟩 [K Global OpsSpec 2026-07-25] | **Full — LNAV / LNAV-VNAV / LPV** where SBAS-equipped 🟩 [K Global OpsSpec 2026-07-25] |
| `A35K` | 🟩 capable | LNAV 🟩 · LNAV-VNAV 🟩 · LPV 🟧 (config-dependent) | 🟩 capable | 🟩 capable | **Authorised to RNP 0.3** 🟩 [K Global OpsSpec 2026-07-25] | **Full — LNAV / LNAV-VNAV / LPV** where SBAS-equipped 🟩 [K Global OpsSpec 2026-07-25] |
| `A388` | 🟩 capable | LNAV 🟩 · LNAV-VNAV 🟩 · LPV 🟧 | 🟩 capable | 🟩 capable | **Authorised to RNP 0.3** 🟩 [K Global OpsSpec 2026-07-25] | **Full — LNAV / LNAV-VNAV / LPV** where SBAS-equipped 🟩 [K Global OpsSpec 2026-07-25] |
| `B738` | 🟩 capable | LNAV 🟩 · LNAV-VNAV 🟩 · LPV 🟧 (SBAS option) | 🟩 capable (SAAAR) | 🟩 capable | **Authorised to RNP 0.3** 🟩 [K Global OpsSpec 2026-07-25] | **Full — LNAV / LNAV-VNAV / LPV** where SBAS-equipped 🟩 [K Global OpsSpec 2026-07-25] |
| `B748` | 🟩 capable | LNAV 🟩 · LNAV-VNAV 🟩 · LPV 🟧 | 🟩 capable | 🟩 capable | **Authorised to RNP 0.3** 🟩 [K Global OpsSpec 2026-07-25] | **Full — LNAV / LNAV-VNAV / LPV** where SBAS-equipped 🟩 [K Global OpsSpec 2026-07-25] |
| `B77W` | 🟩 capable | LNAV 🟩 · LNAV-VNAV 🟩 · LPV 🟧 (config-dependent) | 🟩 capable | 🟩 capable | **Authorised to RNP 0.3** 🟩 [K Global OpsSpec 2026-07-25] | **Full — LNAV / LNAV-VNAV / LPV** where SBAS-equipped 🟩 [K Global OpsSpec 2026-07-25] |
| `B77F` | 🟩 capable | LNAV 🟩 · LNAV-VNAV 🟩 · LPV 🟧 | 🟩 capable | 🟩 capable | **Authorised to RNP 0.3** 🟩 [K Global OpsSpec 2026-07-25] | **Full — LNAV / LNAV-VNAV / LPV** where SBAS-equipped 🟩 [K Global OpsSpec 2026-07-25] |
| `B789` | 🟩 capable | LNAV 🟩 · LNAV-VNAV 🟩 · LPV 🟧 (config-dependent) | 🟩 capable | 🟩 capable | **Authorised to RNP 0.3** 🟩 [K Global OpsSpec 2026-07-25] | **Full — LNAV / LNAV-VNAV / LPV** where SBAS-equipped 🟩 [K Global OpsSpec 2026-07-25] |

**Note on LPV / RNP AR.** LNAV and LNAV-VNAV RNP APCH is baseline across the modern fleet 🟩. **LPV** requires an SBAS (satellite-based augmentation) receiver and is fit/config-dependent per airframe — the airframe-fit fact stays 🟧 (verify per tail), but **operator authorisation** now covers full RNP APCH (LNAV / LNAV-VNAV / LPV where SBAS-equipped) 🟩 [K Global OpsSpec 2026-07-25]. **RNP AR APCH** *capability* is a type fact for all mainline types listed 🟩, and the **operational authorisation** to fly RNP AR is now set — **authorised to RNP 0.3** for RNP-AR-capable types, administered as a **per-field authorisation list** (fields added as routes require), where appropriate 🟩 [K Global OpsSpec 2026-07-25]. See `../OM E Operations/PBN and RNP Operations.md` and `../OM E Operations/RVSM Operations.md`.

**Note on operator RVSM approval & oceanic PBN.** **Operator RVSM operational approval is now set — all mainline types (Table A/B) are RVSM-approved** 🟩 [K Global OpsSpec 2026-07-25] (RVSM *capability* itself was already a confirmed type fact for every type in this table). **Oceanic/remote PBN — RNP 4 + RNAV 10 (RNP 10) are operator-authorised for capable widebodies** 🟩 [K Global OpsSpec 2026-07-25] (A339, A346, A359, A35K, A388, B748, B77W, B77F, B789 — the oceanic-capable widebody set; narrowbody twins are not normally flown oceanic). The individual **approved-airframe list** (RVSM) and the **RNP AR authorised-field list** remain separate operator/maintenance records, not restated here — see `../OM E Operations/RVSM Operations.md` and `../OM E Operations/PBN and RNP Operations.md`, which remain the system of record for the NAT HLA, CPDLC/ADS-C (FANS) and PBCS (RCP240/RSP180) operator approvals set in the same OpsSpec batch (no dedicated column in this matrix for those three).

## Table C — LVO (Low Visibility) & Steep Approach

| ICAO | Lowest autoland / approach capability (type) | Operator LVO minima | Steep approach — type certified? | Operator steep-approach approval |
|---|---|---|---|---|
| `BCS3` | **CAT III** autoland (EASA-approved) 🟩 | **CAT IIIB** (fail-operational) 🟩 [K Global OpsSpec 2026-07-25] | **No** (A220-300 not steep-certified; A220-**100** is) 🟩 | 🟧 [operator — VERIFY] (deferred — see §Open items) |
| `A319` | **CAT IIIB** fail-operational (type) 🟩 | **CAT IIIB** (fail-operational) 🟩 [K Global OpsSpec 2026-07-25] | **No** (standard A319) 🟩 | 🟧 [operator — VERIFY] (deferred — see §Open items) |
| `A320` | **CAT IIIB** fail-operational (type) 🟩 | **CAT IIIB** (fail-operational) 🟩 [K Global OpsSpec 2026-07-25] | **No** 🟩 | 🟧 [operator — VERIFY] (deferred — see §Open items) |
| `A21N` | **CAT IIIB** fail-operational (type) 🟩 | **CAT IIIB** (fail-operational) 🟩 [K Global OpsSpec 2026-07-25] | **No** 🟩 | 🟧 [operator — VERIFY] (deferred — see §Open items) |
| `A339` | **CAT IIIB** fail-operational (type) 🟩 | **CAT IIIB** (fail-operational) 🟩 [K Global OpsSpec 2026-07-25] | **No** (widebody) 🟩 | 🟧 [operator — VERIFY] (deferred — see §Open items) |
| `A346` | **CAT IIIB** fail-operational (type) 🟩 | **CAT IIIB** (fail-operational) 🟩 [K Global OpsSpec 2026-07-25] | **No** (widebody) 🟩 | 🟧 [operator — VERIFY] (deferred — see §Open items) |
| `A359` | **CAT IIIB** fail-operational (type) 🟩 | **CAT IIIB** (fail-operational) 🟩 [K Global OpsSpec 2026-07-25] | **No** (widebody) 🟩 | 🟧 [operator — VERIFY] (deferred — see §Open items) |
| `A35K` | **CAT IIIB** fail-operational (type) 🟩 | **CAT IIIB** (fail-operational) 🟩 [K Global OpsSpec 2026-07-25] | **No** (widebody) 🟩 | 🟧 [operator — VERIFY] (deferred — see §Open items) |
| `A388` | **CAT IIIB** fail-operational (type) 🟩 | **CAT IIIB** (fail-operational) 🟩 [K Global OpsSpec 2026-07-25] | **No** (widebody) 🟩 | 🟧 [operator — VERIFY] (deferred — see §Open items) |
| `B738` | **CAT IIIB** (fail-operational / HUD-dependent config) 🟩 | **CAT I** (fail-operational status not confirmed for delivered config) 🟩 [K Global OpsSpec 2026-07-25] | **No** 🟩 | 🟧 [operator — VERIFY] (deferred — see §Open items) |
| `B748` | **CAT IIIB** fail-operational (type) 🟩 | **CAT IIIB** (fail-operational) 🟩 [K Global OpsSpec 2026-07-25] | **No** (widebody) 🟩 | 🟧 [operator — VERIFY] (deferred — see §Open items) |
| `B77W` | **CAT IIIB** fail-operational (type) 🟩 | **CAT IIIB** (fail-operational) 🟩 [K Global OpsSpec 2026-07-25] | **No** (widebody) 🟩 | 🟧 [operator — VERIFY] (deferred — see §Open items) |
| `B77F` | **CAT IIIB** fail-operational (type) 🟩 | **CAT IIIB** (fail-operational) 🟩 [K Global OpsSpec 2026-07-25] | **No** (widebody) 🟩 | 🟧 [operator — VERIFY] (deferred — see §Open items) |
| `B789` | **CAT IIIB** fail-operational (type) 🟩 | **CAT IIIB** (fail-operational) 🟩 [K Global OpsSpec 2026-07-25] | **No** (widebody) 🟩 | 🟧 [operator — VERIFY] (deferred — see §Open items) |

**Note on LVO / steep.** The autoland column states the type's **lowest certified** capability (the airframe's fail-operational/fail-passive autoland level). The **operator LVO minima** are now set 🟩 [K Global OpsSpec 2026-07-25]: **CAT IIIB** where the type is fail-operational (most widebodies + BCS3 + the narrowbody twins), **CAT I** where the type's fail-operational status is not confirmed for the delivered config (B738 — HUD-dependent). The **approved LVTO minimum RVR is 125 m** fleet-wide 🟩 [K Global OpsSpec 2026-07-25]. **Autoland-use policy — 🟩 [K Global OpsSpec 2026-07-25]:** autoland is permitted for currency practice at suitable CAT I (or better) fields and mandatory in CAT III — see `../OM E Operations/Low Visibility Operations.md`. **Steep approach:** no mainline K Global type on this list is steep-approach certified as delivered — the classic steep-approach airframes (A318, A220-**100**, E190-E2/E195-E2, BAe 146/RJ) are not in the mainline fleet, and the A220-**300** (`BCS3`) is specifically *not* steep-certified. **Operator steep-approach approval remains deferred** 🟧 — the LCY/steep-field solution will be based on the **Embraer E190/E195** (fleet update expected within weeks); several business-jet types in the wider fleet (Falcon 7X, Challenger/Legacy-class, Gulfstream) are also commonly LCY/steep-approach certified and remain an option. No current mainline type is steep-approach certified. Revisit when the E-jet packs are built / the fleet is updated. See `../OM E Operations/Steep Approach Operations.md`.

## Table D — Wake category, Hot-and-high, RFF/ARFF

| ICAO | RECAT-EU (A–F) | ICAO wake (L/M/H/J) | Hot-and-high sensitivity (brief) | RFF/ARFF category (by length) |
|---|---|---|---|---|
| `BCS3` | **D** Upper Medium 🟧 (inferred) | **M** Medium 🟩 | Low — geared-turbofan thrust margin good at altitude/temp 🟩 | **Cat 6** (38.7 m) 🟩 |
| `A319` | **D** Upper Medium 🟩 | **M** Medium 🟩 | Low — light for its thrust; performs well hot/high 🟩 | **Cat 6** (33.84 m) 🟩 |
| `A320` | **D** Upper Medium 🟩 | **M** Medium 🟩 | Low–moderate — neo/thrust variant dependent 🟧 | **Cat 6** (37.57 m) 🟩 |
| `A21N` | **D** Upper Medium 🟩 | **M** Medium 🟩 | Moderate — heavier LR/XLR loads penalise hot/high TOW 🟧 | **Cat 7** (44.51 m) 🟩 |
| `A339` | **B** Upper Heavy 🟩 | **H** Heavy 🟩 | Moderate — twin; thrust-limited TO at high-elevation hubs (FAOR/HAAB/NBO) 🟧 | **Cat 9** (63.66 m) 🟩 |
| `A346` | **B** Upper Heavy 🟩 | **H** Heavy 🟩 | **High** — quad, historically thrust-limited; notable hot/high payload penalty 🟧 | **Cat 9** (75.36 m) 🟩 |
| `A359` | **B** Upper Heavy 🟩 | **H** Heavy 🟩 | Moderate — strong XWB thrust, good field/altitude performance 🟩 | **Cat 9** (66.80 m) 🟩 |
| `A35K` | **B** Upper Heavy 🟩 | **H** Heavy 🟩 | Moderate — high MTOW offsets strong thrust 🟧 | **Cat 9** (73.79 m) 🟩 |
| `A388` | **A** Super 🟩 | **J** Super 🟩 | Moderate–high — very heavy; long field + hot/high penalty 🟧 | **Cat 10** (72.72 m; fuselage width >7 m → up-category) 🟩 |
| `B738` | **D** Upper Medium 🟩 | **M** Medium 🟩 | Moderate — CFM56 thrust-limited at high/hot fields at high TOW 🟧 | **Cat 7** (39.5 m) 🟩 |
| `B748` | **B** Upper Heavy 🟩 | **H** Heavy 🟩 | Moderate–high — quad, very heavy; long field/hot-high penalty 🟧 | **Cat 10** (76.3 m) 🟩 |
| `B77W` | **B** Upper Heavy 🟩 | **H** Heavy 🟩 | Moderate — GE90 high thrust helps, but high MTOW 🟧 | **Cat 9** (73.9 m) 🟩 |
| `B77F` | **B** Upper Heavy 🟩 | **H** Heavy 🟩 | Moderate — high freight TOW drives hot/high penalty 🟧 | **Cat 9** (63.7 m) 🟩 |
| `B789` | **B** Upper Heavy 🟩 | **H** Heavy 🟩 | Low–moderate — strong thrust-to-weight, good field performance 🟩 | **Cat 9** (62.8 m) 🟩 |

**Note on wake / RFF.** **RECAT-EU** is the EUROCONTROL/EASA six-category (A Super → F Light) scheme; **ICAO wake** is the legacy L/M/H plus J (Super) scheme — both are stated because ATC separation and flight-plan Field 9 use them respectively. All values are from the EASA/EUROCONTROL assignment list except the `BCS3` RECAT letter, which is **inferred** to Upper Medium (D) and flagged 🟧 pending confirmation against the current assignment table. **RFF/ARFF** category is the ICAO Annex 14 aerodrome fire category derived from **overall length** (Cat 6 = 28–<39 m, Cat 7 = 39–<49 m, Cat 8 = 49–<61 m, Cat 9 = 61–<76 m, Cat 10 = 76–<90 m), with an up-category where fuselage width exceeds the band maximum (the A388 case). See `../OM E Operations/Wake Turbulence Separation.md`.

---

## Secondary table — deferred / other types (indicative only)

These types are operated per the Fleet Index but are **not yet researched to the mainline standard** — every value below is **🟧 indicative** and must be confirmed before use. Notable known type facts are noted where they help (e.g. steep-approach airframes).

| ICAO | Type | Body | Engines | EDTO / notable | RECAT-EU / ICAO wake | Steep certified? | Notes |
|---|---|---|---|---|---|---|---|
| `CONC` | Concorde | Widebody (SST) | 4 | 🟧 legacy; supersonic ops out of scope | 🟧 / H 🟧 | 🟧 | Historic type; capability data indicative 🟧 |
| `MD11` | MD-11F | Widebody (Freighter) | **3** (tri) | Tri — EDTO adequate-aerodrome concept applies (2+ eng) 🟧 | 🟧 B / H 🟧 | No 🟧 | Trijet freighter 🟧 |
| `E190` | E190 | Narrowbody | 2 | Twin; ETOPS-capable 🟧 | 🟧 D / M 🟧 | E190-E2 yes; **E190 (E1) no** 🟧 | Regional jet 🟧 |
| `E195` | E195 | Narrowbody | 2 | Twin 🟧 | 🟧 D / M 🟧 | E195-E2 yes; E1 no 🟧 | Regional jet 🟧 |
| `E70`/`E75` | E170 / E175 | Narrowbody | 2 | Twin 🟧 | 🟧 D-E / M 🟧 | No 🟧 | Regional jet 🟧 |
| `E145` | ERJ-145 | Narrowbody | 2 | Twin 🟧 | 🟧 E / M 🟧 | No 🟧 | Regional jet 🟧 |
| `E35L` | Legacy 650 | Narrowbody (bizjet) | 2 | Twin 🟧 | 🟧 E / M 🟧 | No 🟧 | Business jet 🟧 |
| `CRJ7`/`CRJ9` | CRJ700 / 900 | Narrowbody | 2 | Twin 🟧 | 🟧 E / M 🟧 | No 🟧 | Regional jet 🟧 |
| `CRJ2` | CRJ-200 | Narrowbody | 2 | Twin 🟧 | 🟧 E / M 🟧 | No 🟧 | Regional jet 🟧 |
| `CL30` | Challenger 300 | Narrowbody (bizjet) | 2 | Twin 🟧 | 🟧 F-E / M-L 🟧 | No 🟧 | Business jet 🟧 |
| `DH8D` | Dash 8 Q400 | Turboprop | 2 (turboprop) | Twin 🟧 | 🟧 E / M 🟧 | No 🟧 | Regional turboprop 🟧 |
| `AT76`/`AT46` | ATR 72 / 42-600 | Turboprop | 2 (turboprop) | Twin 🟧 | 🟧 E-F / M-L 🟧 | No 🟧 | Regional turboprop 🟧 |
| `SF34` | Saab 340B | Turboprop | 2 (turboprop) | Twin 🟧 | 🟧 F / L 🟧 | No 🟧 | Regional turboprop 🟧 |
| `GLF6`/`GLF5` | G650ER / G550 | Narrowbody (bizjet) | 2 | Twin; long-range bizjet 🟧 | 🟧 F-E / M-L 🟧 | No 🟧 | Business jet 🟧 |
| `FA7X` | Falcon 7X | Narrowbody (bizjet) | **3** (tri) | Tri 🟧 | 🟧 F / M-L 🟧 | 🟧 (steep-approach capable variants exist) | Business jet 🟧 |
| `PC12` | PC-12 | Single turboprop | **1** | Single-engine; EDTO n/a 🟧 | 🟧 F / L 🟧 | No 🟧 | Single-turboprop 🟧 |
| `A339`/`A319`/`A321` (ACJ) | ACJ330neo / ACJ319 / ACJ321 (VIP) | Widebody / Narrowbody | 2 | As base type 🟧 | as base type 🟧 | as base type 🟧 | VIP variants inherit base-type capability 🟧 |

---

## Cross-references

This matrix is the per-type capability source for the OM E procedure docs and the airframe packs. Relevant OM E docs (each of which carries per-type applicability tables that should now cite this matrix rather than restate values):

- ETOPS/EDTO — `../OM E Operations/ETOPS-EDTO Procedures.md` (Table A)
- PBN / RNP — `../OM E Operations/PBN and RNP Operations.md` (Table B)
- RVSM — `../OM E Operations/RVSM Operations.md` (Table B)
- Low Visibility Operations — `../OM E Operations/Low Visibility Operations.md` (Table C)
- Steep Approach — `../OM E Operations/Steep Approach Operations.md` (Table C)
- High-Elevation Aerodrome Operations — `../OM E Operations/High-Elevation Aerodrome Operations.md` (Table D, hot-and-high)
- Short / Limited Runway Operations — `../OM E Operations/Short and Limited Runway Operations.md`
- Wake Turbulence Separation — `../OM E Operations/Wake Turbulence Separation.md` (Table D)
- Polar & High-Latitude Operations — `../OM E Operations/Polar and High-Latitude Operations.md`
- Datalink & Oceanic Procedures — `../OM E Operations/Datalink and Oceanic Procedures.md`

Fleet composition & tail counts: [Fleet Index](index.md). Airframe packs (Intro / Dispatch): the per-type packs and the per-type packs — packs should reference this matrix for capability values instead of restating them. First full worked example: the A339 pack (the [A339](a339/index.md) pack).

## Open items

- **Remaining 🟧 [operator — VERIFY] cells** — OpsSpec batch 1 (2026-07-25) resolved the EDTO rule time (widebody/narrowbody twins), RNP AR authorisation (RNP 0.3), RNP APCH full authorisation, and LVO minima (CAT IIIB/CAT I). OpsSpec batch 2 (2026-07-25) resolved RVSM operator approval (all mainline types), oceanic RNP 4 + RNAV 10/RNP 10 (capable widebodies), NAT HLA, CPDLC/ADS-C (FANS), PBCS (RCP240/RSP180), cold-temperature correction policy, flex/derate takeoff policy, MMEL baseline and autoland-use policy. Still open: the **quad EDTO rule time** (A346/A388/B748 — ICAO EDTO adequate-aerodrome concept, no ETOPS diversion limit, so no rule-time value applies), the **B77F EDTO rule time** (not in batch 1), and **operator steep-approach approval** (remains deferred — the LCY/steep-field solution will be based on the Embraer E190/E195, fleet update expected within weeks; business-jet types such as Falcon 7X/Challenger-Legacy-class/Gulfstream also noted as an option; no mainline type is steep-approach certified; revisit when the E-jet packs are built / the fleet is updated). These are operator decisions, not type facts; do not populate by inference.
- **`BCS3` RECAT-EU letter** — inferred Upper Medium (D); confirm against the current EASA/EUROCONTROL assignment list.
- **LPV column** — SBAS fit is airframe-config-dependent across the fleet; confirm which tails carry SBAS receivers before asserting LPV per type.
- **A339 RFF category reconciliation** — this matrix computes **Cat 9** from the 63.66 m length (ICAO 61–<76 m band); the A339 Intro snapshot currently reads "Cat 8". Reconcile the two (Cat 9 is the length-derived value).
- **B738 / B77W LVO fail-operational detail** — CAT IIIB fit can be HUD- or dual-channel-dependent per airframe; confirm the delivered configuration.
- **Deferred-type table** — every value is indicative 🟧; research to mainline standard when those airframe packs are built out.

---

## Sources & References
*Public URLs only. Retrieved 2026-07-25. Subscription/OEM/in-sim material may inform content but is never cited here.*

- EASA — Assignment of ICAO aircraft types to RECAT-EU wake turbulence categories — https://www.easa.europa.eu/en/assignment-icao-aircraft-types-recat-eu-wake-turbulence-categories
- EUROCONTROL — RECAT-EU European Wake Turbulence Categorisation and Separation Minima — https://www.eurocontrol.int/publication/european-wake-turbulence-categorisation-and-separation-minima-approach-and-departure
- SKYbrary — RECAT: Wake Turbulence Re-categorisation — https://skybrary.aero/articles/recat-wake-turbulence-re-categorisation
- Airbus — EASA certifies A330neo for "beyond 180 minutes" ETOPS (up to 285 min) — https://www.airbus.com/en/newsroom/press-releases/2019-01-easa-certifies-a330neo-for-beyond-180-minutes-etops
- EASA — EASA certifies Airbus A350 XWB for up to 370-minute ETOPS — https://www.easa.europa.eu/en/newsroom-and-events/news/easa-certifies-airbus-a350-xwb-370-minute-etops
- Boeing — Boeing Receives 330-Minute ETOPS Certification for 787s — https://boeing.mediaroom.com/2014-05-28-Boeing-Receives-330-Minute-ETOPS-Certification-for-787s
- Boeing — Boeing to Offer up to 330-Minute ETOPS on 777 — https://boeing.mediaroom.com/2011-12-12-Boeing-to-Offer-up-to-330-Minute-ETOPS-on-777
- Boeing — 777-300ER Performs 330-Minute ETOPS Flight — https://boeing.mediaroom.com/2003-10-15-Boeing-777-300ER-Performs-330-Minute-ETOPS-Flight
- ICAO — ETOPS & EDTO technical awareness (Annex 6 EDTO; 2+ engine applicability) — https://www.icao.int/sites/default/files/WACAF/MeetingDocs/2025/Seminar%20on%20Aircraft/AI_SPECIFIC_APPROVAL-2025-ETOPS-EDTO_Part1_v1_0_OPT.pdf
- EASA — NPA 2023-03 Extended Diversion Time Operations (EDTO) — https://www.easa.europa.eu/en/document-library/notices-of-proposed-amendment/npa-2023-03
- Aviation Today — EASA Approves Airbus A220 for CAT III Autoland Operations — https://www.aviationtoday.com/2018/12/05/easa-approves-airbus-a220-cat-iii-autoland-operations/
- Simple Flying — Which Aircraft Can Land At London City Airport? (steep-approach airframes; A220-100 vs -300) — https://simpleflying.com/london-city-airport-approved-aircraft/
- SKYbrary — Aircraft type designators / dimensions reference (lengths for RFF categorisation) — https://skybrary.aero/
- Wikipedia — Airbus A220, A320neo family, A330neo, A340-600, A350 XWB, A380; Boeing 737-800, 747-8, 777, 787 (type dimensions, engines, ETOPS milestones) — https://en.wikipedia.org/wiki/Airbus_A220

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial build — capability-vs-approval framework; Tables A–D for 14 mainline ICAO types (BCS3, A319, A320, A21N, A339, A346, A359, A35K, A388, B738, B748, B77W, B77F, B789); secondary indicative table for deferred types; per-column notes, cross-refs, open items, public sources. |
| v0.2 | 2026-07-25 | OpsSpec batch 1: operator-approval values set (EDTO 180/120, LVO CAT IIIB/I, LVTO 125m, RNP AR 0.3, RNP APCH+LPV, contingency 5%/ERA, final reserve 30 min, tankering case-by-case; steep approach deferred). |
| v0.3 | 2026-07-25 | OpsSpec batch 2: operator approvals set (RVSM all mainline, oceanic RNP4+RNP10, NAT HLA, CPDLC/ADS-C FANS, PBCS, cold-temp correction crew+FMS, flex/derate takeoff, MMEL baseline, autoland currency, RNP-AR per-field). |
