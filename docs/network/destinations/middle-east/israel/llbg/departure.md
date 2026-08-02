# LLBG — Ben Gurion · Departure Page

**LLBG / TLV** · Tel Aviv (Lod), Israel · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for X-Plane 11, not a chart. Companion to the [LLBG Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **RWY 26** preferred (tailwind ≤5 kt); reciprocal/other runways per wind and traffic |
| Config logic | Wind/tailwind-limit driven; RWY 26 default unless tailwind exceeds 5 kt |
| Transition altitude | Referenced to AIP ENR 1.4 — not confirmed this pass 🟧 |
| Take-off minima | Published per AIP (category-dependent, RVR/lighting-based) — exact figures not reproduced here; verify current chart 🟧 |
| CTOT / flow regime | Fully coordinated slot; pushback/taxi clearance issued ≤10 min before CTOT |
| De-icing on departure | **NIL** — no de-icing facilities |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From the Terminal 3/apron N/J/L stand areas, Ground routes toward the assigned departure runway per the day's configuration — confirm the exact taxi with Ground/Apron.
- **Hot spots / tight taxiways:** 🟥 **Taxilane H is wingspan-restricted to a maximum of 36 m** — a real constraint only for a larger-than-Category-L type; not limiting for a standard Category L departure.
- **Runway crossings / read-back-required points:** Aircraft must cross an active runway only on Tower frequency and only with specific authorisation — do not cross without it `[Israel AIP AD 2 LLBG 2.20]`.
- **Low-vis taxi caveats:** 🟧 Apron-area taxiways are **not equipped with centre-line lights**, and taxiway guide lines may not be visible in low visibility `[Israel AIP AD 2 LLBG 2.22]`. Follow-me service may be requested but is **not provided below 100 m visibility**.

---

## 3. Runway / SID selection logic

- **By wind / config:** **RWY 26 is the preferred departure runway**, assigned provided the tailwind component does not exceed 5 kt; RWY 26 may still be assigned with a greater tailwind component **by pilot request**, with priority given to aircraft already in the runway configuration in use `[Israel AIP AD 2 LLBG 2.22]`.
- **By departure direction:** Preferential departure routes are direction-specific — **SUVAS** (westbound), **DAFNA/MERVA** (northwest-bound, alternating on a weekly EOBT-based schedule), **SALAM** (toward Amman FIR), **TOMAL (J10)** (southbound); **NAT, ORLEV, PIDET, RIPUD** are ATC-assigned only `[Israel AIP AD 2 LLBG 2.22]`.
- **Noise / preferential-runway program:** All jet aircraft fly **NADP-1** (see §5) regardless of weight; SID routings are themselves designed to minimise overflight of densely populated areas.
- **Interaction with arrivals:** RWY 12 is the preferred arrival runway (tailwind ≤10 kt dry/≤5 kt wet) while RWY 26 is the preferred departure runway — in the common wind regime these are **not** the same runway, so expect an active mixed-runway configuration; RWY 30/21 are used preferentially for arrivals at high traffic volume.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| SALAM | 08, 12, 26, 30 | Not detailed — verify chart | Toward Amman FIR |
| TOMAL (J10) | 08, 12, 26, 30 | Not detailed — verify chart | Southbound |
| SUVAS | 08, 12, 21, 26, 30 | Not detailed — verify chart | Westbound (RWY 21 variant: SUVAS 1G) |
| DAFNA | 08, 12, 26, 30 | Not detailed — verify chart | Northwest-bound; time-window assigned (EOBT-based) |
| MERVA | 08, 12, 26, 30 | Not detailed — verify chart | Northwest-bound alternate to DAFNA; time-window assigned |
| IVONA / RAPIV | 08 | Not detailed — verify chart | RWY 08-specific |
| NAT | 03, 08, 12, 21 | Not detailed — verify chart | |
| ORLEV / PIDET / RIPUD | 12, 26, 30 | Not detailed — verify chart | **ATC-assigned only** |

*Source: Israel CAAI eAIP, AD 2 LLBG 2.22/2.24 chart index (retrieved 2026-07-26). SID names and applicable runways only — no gradient/altitude-constraint data reproduced; pull the live current-AIRAC chart before use.*

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; initial climbing speed to the noise-abatement initiation point is not less than **V2 + 10 kt** (or as limited by body angle) `[Israel AIP AD 2 LLBG 2.21]`.
- **Noise-abatement departure procedure (NADP):** **NADP-1** applies to all jet aircraft irrespective of weight — take-off thrust/flap to a published power-reduction altitude (not lower than **950 ft QNH**), then climb at V2+10 kt to a published acceleration altitude (**3,150 ft QNH**, or 3,000 ft QNH if ATC-restricted) before normal acceleration and flap/slat retraction `[Israel AIP AD 2 LLBG 2.21]`. Fly the operator SOP NADP-1 profile consistent with these AIP-published altitude gates; verify against the current chart.
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat coastal plain — no significant close-in terrain identified for any departure runway (Briefing §3.1). Bird activity is the standing low-level hazard on climb-out (Briefing §3.1/§4).
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Take-off minima are published per AIP by aircraft category (RVR/lighting-dependent) — exact figures not reproduced here; verify current AIRAC chart. LVP is triggered at RVR <800 m or visibility <1200 m, with **RWY 26 the preferred departure runway** in that regime `[Israel AIP AD 2 LLBG 2.22]`. 🟧 No CAT III capability backs this up (Briefing §3.4/§5) — expect increased separation and delay under LVP.
- **De-icing:** **NIL** — no de-icing facilities at the field.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Ben-Gurion Clearance, frequency as published by ATIS (121.550); datalink clearance (DCL) available. Contact 15 minutes before start-up (Briefing §8/§11).
- **Frequency sequence:** **Clearance (121.550, DCL) → Ground East 121.950 / Ground West 121.750 → Tower 134.600 (Tower Departure) → Ben-Gurion Approach/Departure 120.500 (primary) → Tel Aviv (LLLL) FIR handoff per current AIRAC.** Take the assigned frequency and confirm current chart (frequencies from Briefing §8).
- **CTOT / slot handling:** **Fully coordinated slot regime** — pushback/taxi clearance issued not later than 10 minutes before CTOT; aircraft cleared for pushback is expected to vacate the stand within 2 minutes of approval `[Israel AIP AD 2 LLBG 2.20]`.

---

## 9. Performance watch-items for our types

- **Field-length / weight:** All three runway pairs are non-limiting for a K Global Category L operation; note RWY 08's TORA (3,600 m) is noise-abatement-reduced versus its 4,062 m physical/TODA/ASDA figures (Briefing §7) — do not assume full-pavement takeoff distance on RWY 08.
- **Density altitude / temperature:** Non-issue at 134 ft in a Mediterranean climate — no hot-and-high penalty; reference August temperature 31.9°C is unremarkable for performance planning.
- **Contamination / wet-runway:** No winter contamination/de-icing season at this field; wet-runway tailwind limits are explicitly tighter (RWY 26 departure ≤5 kt tailwind) than a typical dry-runway allowance.
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty identified for any K Global type at LLBG.

---

## 10. Gotchas

- **RWY 03 has no published instrument approach** and is not a normal IFR arrival option — confirm intended use is consistent with current AIRAC before assuming any runway is interchangeable.
- **RWY 26's 600 m displaced threshold** and **RWY 30's 75 m displaced threshold** affect landing distance, not takeoff distance directly, but crews rotating through both roles in a turn should brief the correct figure for each leg.
- **Taxilane H's 36 m wingspan restriction** is a real constraint only if a larger-than-Category-L type is ever assigned — verify stand/taxi assignment.
- **Apron-area taxiway centre-line lighting is absent** — a genuine low-visibility taxi caution; guide lines may not be visible in poor visibility.
- **Layered night-time takeoff restrictions differ by runway** (RWY 30 vs the others) — do not assume a uniform curfew window across all runways.
- **Standing reminder:** confirm current NOTAMs and regional airspace-status bulletins before every departure (Briefing §3.2/§4) — this is a live, NOTAM-driven picture that changes without notice.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima exact figures (category-dependent RVR/lighting table).
- LVTO RVR minima detail and follow-me/SMGCS specifics.
- EOSID/engine-out procedure detail per runway.
- Exact IATA slot-coordination level.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, current regional airspace-status/NOTAM picture (Briefing §3.2). Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **Israel CAAI eAIP, AD 2 LLBG** — AIRAC cycle effective 2023-06-15 (retrieved 2026-07-26) — https://e-aip.azurefd.net/2023-06-15-AIRAC/html/eAIP/LL-AD-2.LLBG-en-GB.html . *SID index, preferential runway/route logic, NADP-1 profile, local traffic regulations, LVP.*
- See the [Briefing page](index.md) for full ARP/runway/comms/navaid citations.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
