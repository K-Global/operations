# EKBI — Billund · Departure Page

**EKBI / BLL** · Billund, Jutland, Denmark · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Denmark (Naviair)-derived

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [EKBI Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **09 or 27** — wind-selected; no parallel/crosswind alternate |
| Config logic | Purely wind-driven between the two directions of the single runway; a community reference notes RWY 09 departure/RWY 27 landing may be selected together in a direct-crosswind wind state to shorten taxi time |
| Transition altitude | Not independently confirmed to a specific figure this pass 🟧 |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | Level 3 coordinated (ACD); no dedicated ATFM/CTOT AIP section found 🟧 |
| De-icing on departure | Available — Apron North pad, season 1 Oct – 30 Apr (AIP-dated) |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From Apron North, Ground/Handling routes toward the assigned runway end (09 or 27) via taxiways A/B/C (main connections) or J/K/S and D/F/N (secondary routings); confirm the exact taxi with Handling on the day.
- **Hot spots / tight taxiways:** No text-labelled "Hot Spot" entries were found in the reachable AIP extract. The field's single-runway, single-set-of-parallel-taxiway layout is comparatively simple relative to a multi-runway hub — no cross-runway crossing complexity exists here. 🟧
- **Runway crossings / read-back-required points:** Not applicable — single runway, no crossing runway to transit.
- **Low-vis taxi caveats:** SMGCS/low-vis taxi routing would be expected consistent with the field's CAT II/III capability; follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** No parallel/crosswind runway exists — selection between RWY 09 and RWY 27 is purely wind-driven.
- **By departure direction:** A community reference notes that in a direct-crosswind wind state, RWY 09 may be selected for departure while RWY 27 is used for landing (or vice versa) specifically to minimise taxi time — an operational nuance rather than a formal AIP rule. 🟧
- **Noise / preferential-runway program:** No dedicated fixed-track noise-departure procedure was confirmed in reachable sources; the general night-period (2300–0600) advance-approval requirement is the field's primary noise-related departure constraint (§8/Briefing §12).
- **Interaction with arrivals:** Single-runway field — departures and arrivals share the same runway sequentially; no interaction with a second runway's traffic stream.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| **P-RNAV SID** (3 charts per runway) | 09 / 27 | P-RNAV equipage expected — verify gradient on current chart | Alternate SIDs **ASKOV**, **GOKIM** may be issued at ATC discretion if unable to fly P-RNAV |

- Flight-plan termination points for international flights include **RERPA, INTET, ABINO, RIDSI, ALS, MIKRO, BAMPI**, with compulsory post-BAMPI routings on specific airways per the AIP — verify current designators on the chart. Domestic flights to the Copenhagen-area fields (EKCH/EKRK/EKRN) are required to route via **ABINO** per a community reference. 🟧

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** No dedicated NADP1/2 designation or fixed-track noise routing confirmed in reachable sources for this field. 🟧
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat Jutland terrain — the AIP's obstacle table lists only a single hazardous obstacle field-wide (an antenna, 391 ft elevation/148 ft AGL), well clear of normal departure paths.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** LVP would be expected consistent with the field's CAT II/III infrastructure on both ends; specific LVTO RVR minima not confirmed this pass. 🟧
- **De-icing:** De-icing pad on **Apron North** (Densiphalt, PCN 90/F/C/W/T); season **1 October – 30 April** (AIP-dated). Request via Billund Handling (131.905), supervised on "Billund De-icing North" (131.805, HO). Apron South de-icing available only by prior arrangement. See [OM E — Cold Weather Operations](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Clearance available from EOBT −30 min; coordinate via Billund Handling (131.905) or Tower as assigned.
- **Frequency sequence:** **Handling 131.905 (start/taxi coordination) → Marshaller 131.505 (ramp) → Tower (departure) 129.505 → Billund Approach 127.580.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** **Level 3 coordinated via Airport Coordination Denmark (ACD)** — all aircraft above 3,500 kg MTOM require slot coordination. No dedicated ATFM/CTOT AIP section was found; standard EUROCONTROL practice assumed for a coordinated field. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 3,101 m (2,951 m LDA-equivalent usable length from the displaced thresholds) is non-limiting for any K Global Category R type.
- **Density altitude / temperature:** Non-issue at 246 ft, temperate maritime climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Winter de-icing season (1 Oct–30 Apr) is the relevant seasonal consideration (§7); no specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [OM B — Fleet Capability Matrix](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty for our Category R type at EKBI. The single-runway/no-crosswind-alternate constraint (Briefing §3.4) is the operative planning consideration, not aircraft performance.

---

## 10. Gotchas

- **No parallel or crosswind runway exists** — a strong-crosswind day has no runway-orientation escape; treat forecast severe-crosswind conditions as a real go/no-go planning factor.
- **RWY 27 has a documented historical windshear event** during severe North Sea frontal weather (Briefing §3.4) — treat forecast severe-wind/frontal conditions with particular caution.
- **No STARs / limited fixed noise-routing structure** — expect vectors rather than a charted noise-abatement departure track.
- **Night-period (2300–0600) takeoffs require advance Billund Airport approval** — a late-day delay risks running into this regime without the required approval; build buffer into the last rotation.
- **Two active glider areas within the TMA/CTR (Karlskov and Vandel lines)** — confirm activity status via ATIS/ATC before assuming unrestricted departure climb-out.
- **Substantial dedicated cargo operation shares the single runway** — factor overall movement density into departure-sequencing expectations, particularly around freighter peak periods.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID designator suffixes and RNP/gradient specifics.
- Take-off minima / exact figures.
- Transition altitude exact figure.
- NADP designation / fixed noise-routing detail (none confirmed).
- LVTO RVR minima and follow-me/SMGCS specifics.
- EOSID/engine-out procedure detail per runway.
- CTOT/ATFM-specific procedure for EKBI.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. glider-area activity), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP Denmark (Naviair), AD 2-EKBI** — https://aim.naviair.dk/media/files/3ju3arpdevq/EK_AD_2_EKBI_en.pdf (retrieved 2026-07-26). *SID index, flight-plan termination points, ATC frequencies, de-icing procedure, slot coordination.*
- VATSIM Scandinavia — EKBI reference — https://wiki.vatsim-scandinavia.org/books/danish-airports-charts/page/ekbi-billund-airport (retrieved 2026-07-26). *Runway-selection nuance and ABINO routing cross-check; network-sim document, not regulatory.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Denmark (Naviair); K Global fields from live VAMSYS; 4-page pack. |
