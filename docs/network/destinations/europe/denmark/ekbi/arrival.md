# EKBI — Billund · Arrival Page

**EKBI / BLL** · Billund, Jutland, Denmark · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Denmark (Naviair)-derived

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [EKBI Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **09 or 27** — wind-selected; no parallel/crosswind alternate |
| Usual approach | ILS/LOC on the assigned end — **CAT II/III both ends**; RNP also published |
| Config logic | Purely wind-driven between the two runway directions |
| Transition level | Not independently confirmed to a specific figure this pass 🟧 |
| LVP trigger | CAT II/III infrastructure both ends supports low-vis ops; exact RVR/trigger figures not confirmed this pass 🟧 |
| Missed-approach driver | Airspace/traffic re-sequencing without a charted STAR structure, and windshear potential on the RWY 27 approach in severe frontal weather — not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** **None published.** A community reference confirms: "There are no STARs in Billund. Expect direct to ILS fix or vectors." — corroborated by the absence of any STAR chart in the AIP's own chart index.
- **Selection by arrival direction / runway:** Billund Approach assigns a direct-to-fix routing or radar vectors to the ILS for the active runway; no charted STAR transition exists.
- **Transition to approach:** Expect vectors direct to the ILS/LOC final approach fix rather than an RNAV-STAR transition.
- **Speed / flow constraints on the STAR:** Not applicable — no STAR exists; comply with ATC speed instructions and 250 KIAS below FL100 (EU/ICAO norm).

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; without a charted STAR, expect earlier ATC descent/vector instructions rather than a fixed profile.
- **Speed control:** 250 KIAS below FL100 (EU/ICAO norm); comply with vectoring speed instructions.
- **Altitude constraints:** No charted STAR altitude ladder — comply with ATC-assigned levels during vectoring.
- **Energy traps:** A vectored (non-STAR) arrival into a single-runway field with a possible late runway-direction change (wind-driven) is the main energy trap here — maintain flexibility for a late runway swap.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 09 | ILS or LOC Z / Y (CAT I/II/III); RNP | **CAT II/III capable** 🟧 | verify current chart |
| 27 | ILS or LOC Z / Y (CAT I/II/III); RNP | **CAT II/III capable** 🟧; historical windshear case documented (Briefing §3.4) | verify current chart |

- **LVP triggers:** CAT II/III infrastructure on both ends is the standing low-visibility capability; exact RVR/trigger figures not confirmed this pass. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat Jutland terrain; the AIP's obstacle table shows only a single hazardous obstacle field-wide (an antenna, 391 ft elevation/148 ft AGL), well clear of normal approach paths.
- **Specific threats:** 🟧 **RWY 27 has a documented historical windshear event** during severe North Sea frontal weather (Danish AAIB report, 3 December 1999 — a Copenhagen-bound flight diverted to Billund and encountered a windshear warning on the RWY 27 approach before a successful second-attempt landing). Two active glider areas within the TMA/CTR (Karlskov and Vandel lines) are a traffic-awareness item, particularly for VFR-adjacent operations.
- **Airspace / traffic:** 🟧 Billund Approach/Tower operate H24; expect vectoring rather than a charted STAR transition, especially in marginal weather.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat field, single hazardous obstacle well clear of approach paths) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around returns you to a vectored (non-STAR) re-sequencing environment under Billund Approach; without a charted arrival structure, expect ATC-driven re-vectoring rather than a published missed-approach-to-STAR transition.
- **Go-around traps:** Windshear potential on the RWY 27 approach in severe frontal weather (§5) is the field's specific documented go-around trigger scenario; be alert to a possible runway-direction change if conditions are wind-shift-driven.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** Both **09 and 27: 2,951 m** (from the 3,101 m physical runway with a ~150 m displaced threshold each end) — ample for any K Global Category R type.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Tower/Handling on the day. 🟧
- **Runway-excursion watch:** 🟧 Displaced thresholds both ends — mind the 2,951 m usable LDA versus the 3,101 m physical length; winter-contamination braking-action consideration applies in the AIP-dated de-icing season (1 Oct – 30 Apr).

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on the assigned runway end, taxi in to **Apron North** (passenger terminal) via taxiways A/B/C or the secondary J/K/S and D/F/N routings per Ground/Handling assignment; VAMSYS mirror gives a planning taxi-in time of **6 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** No text-labelled "Hot Spot" entries found in the reachable AIP extract; the field's single-runway/single-taxiway-system layout is comparatively simple relative to a multi-runway hub. 🟧
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — Apron North for passenger traffic; total stand/gate count not independently confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Billund Approach (127.580) → Billund Arrival (119.255) → Billund Tower (119.005, arrival position) → Marshaller (131.505) / Handling (131.905).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Billund Approach** is the terminal facility; **Copenhagen ACC — Copenhagen FIR (EKDK)** provides multi-radar track service en route, for which no dedicated FIR brief exists in this library yet — see [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) 🟧 (general continental reference only, not EKDK-specific).

---

## 10. Gotchas

- **No parallel or crosswind runway exists** — a strong-crosswind day has no runway-orientation escape; treat forecast severe-crosswind conditions as a real diversion-planning factor.
- **No charted STAR** — expect a direct-to-fix or vectored arrival; maintain fix/holding-point awareness rather than relying on a charted transition.
- **RWY 27 has a documented historical windshear event** in severe North Sea frontal weather — brief accordingly on forecast severe/frontal conditions.
- **Displaced thresholds both ends (~150 m)** — confirm the 2,951 m usable LDA before committing to a short-field landing assumption.
- **Two active glider areas within the TMA/CTR** — confirm activity status via ATIS/ATC.
- **Substantial dedicated cargo operation shares the single runway** — factor overall movement density into arrival-sequencing expectations, particularly around freighter peak periods.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Exact approach minima per runway/chart variant (Z vs Y).
- Exact LVP/CAT II/III trigger RVR values.
- Rapid-exit taxiway/vacate detail.
- Transition level exact figure.
- Current taxi-in routing and gate assignment for our operation.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. CAT II/III equipment status and glider-area activity), ATIS config/wind trend. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP Denmark (Naviair), AD 2-EKBI** — https://aim.naviair.dk/media/files/3ju3arpdevq/EK_AD_2_EKBI_en.pdf (retrieved 2026-07-26). *Runway/declared-distance data, ATC frequencies, navaids, glider-area procedure.*
- VATSIM Scandinavia — EKBI reference — https://wiki.vatsim-scandinavia.org/books/danish-airports-charts/page/ekbi-billund-airport (retrieved 2026-07-26). *STAR-absence and runway-selection cross-check; network-sim document, not regulatory.*
- SKYbrary — Danish AAIB report HCL 70/99 (Boeing 737-500, 3 Dec 1999, Billund diversion) — https://skybrary.aero/sites/default/files/bookshelf/317.pdf (retrieved 2026-07-26). *RWY 27 historical windshear case.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Denmark (Naviair); K Global fields from live VAMSYS; 4-page pack. |
