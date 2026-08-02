# LFBZ — Biarritz Pays Basque · Departure Page

**LFBZ / BIQ** · Biarritz-Bayonne-Anglet, Pyrénées-Atlantiques, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LFBZ Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **09** preferential at night (~2000–0700 local, conditions permitting); otherwise wind-driven |
| Config logic | Wind-driven by day; **RWY 09 preferred for night take-offs** as a noise-abatement measure |
| Transition altitude | **5,000 ft** |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | Not confirmed — general EUROCONTROL ATFM practice assumed 🟧 |
| De-icing on departure | Not confirmed in reachable extract — verify locally 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** **TWY N** runs parallel to the runway connecting terminal areas; **TWY S1** connects the runway to parking area K. Confirm the exact taxi with Ground on the day.
- **Hot spots / tight taxiways:** 🟥 **TWY N1 and S1 are prohibited at night**, and prohibited by day below **RVR 800 m**; **TWY N1 is usable only by aircraft with wingspan < 18.5 m and main-gear track < 6 m**. Aircraft with **MTOW > 37 t must use the runway-end turnaround pads** for a U-turn.
- **Runway crossings / read-back-required points:** Not individually detailed — single-runway field, expect standard Ground/Tower instructions.
- **Low-vis taxi caveats:** 🟧 Coastal sea-fog can develop within minutes — confirm current RVR against the TWY N1/S1 800 m threshold before planning that routing.

---

## 3. Runway / SID selection logic

- **By wind / config:** Wind-driven by day, no specific crosswind/tailwind criteria confirmed for LFBZ this pass. 🟧
- **By departure direction:** **RWY 09 is preferential for take-offs at night** — primary-AIP cycle (2011) states 1900–0600 local (winter +1 hr); current (2026) operational reference states approximately **2000–0700 local**, "whenever conditions permit." Treat the current reference as operative and confirm against live AIRAC. 🟧
- **Noise / preferential-runway program:** Jets: take-off power to 1,500 ft at V2+10; climb power per noise-abatement procedures at V2+10 from 1,500–3,000 ft; no restriction above 3,000 ft.
- **Interaction with arrivals:** Biarritz Approche has **no dedicated Départ position** — the same controller manages both inbound and outbound traffic below FL145; expect integrated sequencing rather than segregated departure handling.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| DONOS, SOSTO, SOVOS, SSN, VAVIX (RNAV, suffix 3D) | 09 | RNAV1/GNSS sensor only | Current (2026) operational reference; cross-checked against 2011 primary-AIP fix names 🟧 |
| DONOS, SSN, VAVIX (conventional, suffix 3E) | 09 | Conventional, on request | |
| DONOS, SOVOS, SSN, VAVIX (RNAV, suffix 3F) | 27 | RNAV1/GNSS sensor only | |
| DONOS, SSN, VAVIX (conventional, suffix 3W) | 27 | Conventional, on request | |

*Omnidirectional-departure ATS gradients (where no specific SID applies): RWY 09 climb 4.2–4.5% to 1.9 NM BTZ; RWY 27 climb 5.8–6% to 2.6 NM BTZ; HIG-bound departures 9.2% (off 27) / 5% (off 09). Report any inability to meet a specified gradient to Approach at start-up.*

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Jets — take-off power to 1,500 ft AAL at V2+10.
- **Noise-abatement departure procedure (NADP):** Climb power per published noise-abatement procedures from 1,500 ft, still at V2+10, up to 3,000 ft AAL; no restriction thereafter.
- **Early turn / altitude constraints:** Omnidirectional-departure guidance is valid **only in the sector north of the field** (radial 251°–102° BTZ) given the significant terrain to the south — see [Briefing §3.1](index.md). Do not plan an early southerly turn as a default contingency.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway, with explicit awareness of the southern terrain. 🟧
- **Close-in / distant obstacles:** 🟥 **Significant relief immediately south of the aerodrome** (Pyrenean foothills) is the defining obstacle consideration at this field — the AIP's own omnidirectional-departure guidance excludes the southern sector for this reason. Cross-ref [Briefing §3.1](index.md).
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart, with particular attention to any terrain-driven minimum-climb-gradient requirement south of the field. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed this pass — verify current chart. LVP trigger per current operational reference is **RVR < 800 m or ceiling < 200 ft**; note this is a materially higher (less restrictive) RVR threshold than the CAT III fields elsewhere in the network, consistent with RWY 27 being CAT I only. 🟧
- **De-icing:** Not confirmed in the reachable extract — verify locally. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not individually detailed — confirm process with Ground on the day.
- **Frequency sequence:** **Biarritz Sol (Ground) 121.950 → Biarritz Tour (Tower) 118.700 → Biarritz Approche 125.600.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8 — consistent between primary and current-reference sources.)
- **CTOT / slot handling:** No slot-coordination level confirmed for LFBZ — general EUROCONTROL ATFM/CTOT practice assumed. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 2,250 m (with a 205 m displaced threshold on RWY 09 affecting landing, not take-off, distance) is adequate for K Global Category S operations; not limiting.
- **Density altitude / temperature:** Non-issue at 245 ft, temperate coastal climate — no hot-and-high penalty.
- **Contamination / wet-runway:** De-icing availability/season not confirmed this pass — build a conservative winter buffer pending confirmation. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty identified for K Global Category S equipment at LFBZ.

---

## 10. Gotchas

- **Never plan a southerly departure contingency** — significant terrain begins immediately south of the field, and the AIP's own omnidirectional-departure guidance excludes that sector.
- **RWY 09 is the preferential night-departure runway** (~2000–0700 local, conditions permitting) — do not default to RWY 27 for a late/early rotation without checking the current preferential-runway guidance.
- **Coastal fog can develop within minutes** — a departure planned in clear conditions can face a rapidly changing LVTO picture; check trend/TAF immediately before push.
- **TWY N1/S1 are night-closed and RVR-800m-gated by day** — confirm an alternative routing if the assigned stand normally routes via those taxiways.
- **Omnidirectional-departure ATS gradients are steep** (up to 9.2% toward HIG off RWY 27) — report any inability to comply to Approach at the start-up clearance request, don't discover it airborne.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway (cross-checked between 2011 primary chart and 2026 operational reference, not independently re-verified against the very latest cycle).
- Take-off minima / LVTO RVR minima exact figures.
- Preferential night-departure window (1900–0600 primary-AIP vs ~2000–0700 current reference — discrepancy not reconciled).
- EOSID/engine-out procedure detail per runway, with terrain-awareness emphasis.
- De-icing availability/season.

> **Live data — pull at planning:** wx/METAR/TAF (esp. fog trend), NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **SIA France eAIP-derived AD 2 LFBZ chart extract** (SID charts, general rules text), cycle 2010–2011 — http://www.jpair.fr/ateliers_pratiques/initiation_aeroclub/bastia_biarritz/1303_AD-2.LFBZ_3.pdf (retrieved 2026-07-26).
- **IVAO France Division — Airport Operations Manual, LFBZ**, updated 2026-07-09 (AIRAC 2607) — https://wiki.ivao.fr/books/manex-aeroports-civils/page/lfbz-biarritz-pays-basque (retrieved 2026-07-26). *Network-simulation document, not regulatory — used for current cross-check only.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
