# OBBI — Bahrain Intl · Departure Page

**OBBI / BAH** · Manama / Muharraq Island, Bahrain · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for X-Plane 11, not a chart. Companion to the [OBBI Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **12L or 30R** (wind-dependent) — 🟥 **12R/30L currently unavailable per the sourced AIP cycle, verify current status** |
| Config logic | Wind-driven; both ends of the main pair are equally equipped (ILS CAT II) |
| Transition altitude | 13,000 ft |
| Take-off minima | No take-off permitted below **350 m RVR** (hard floor) 🟧 exact DVA/take-off-minima table beyond this floor not confirmed |
| CTOT / flow regime | None identified — no slot/ATFM regime found for OBBI |
| De-icing on departure | **NIL** — not required in this climate |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From Main Apron A/B/C (stands 7–28), Ground/Apron routes via the A-series taxiways (A1–A9) toward the assigned holding position — **A1** for a 12L departure under LVP, **H** for a 30R departure under LVP; confirm the exact routing with Ground/Apron on the day.
- **Hot spots / tight taxiways:** 🟥 **TWY Alpha between A1 and A2 is closed to all movement (including vehicles) whenever a Code F aircraft is landing or departing** on the main runway — ATC will hold traffic at TWY Lima (Western Apron A), TWY Kilo (Western Apron B) or abeam TWY Mike (east of Alpha 2) accordingly. **TWY B1** carries special night-ops conditions (CAT-EYE reflectors only, continuously-lit stop-bar, mandatory follow-me).
- **Runway crossings / read-back-required points:** Stop bars are manually controlled by Tower and must not be crossed without explicit ATC clearance; ASMGCS (Mode-S multilateration) is in use for surface movement guidance.
- **Low-vis taxi caveats:** 🟧 Under LVP, the runway itself must not be used as a taxi/towing route except to exit; crossing from TWYs B1/B2 across the runway is not permitted during LVP. Follow-me availability for low-vis taxi beyond TWY B1 not separately confirmed.

---

## 3. Runway / SID selection logic

- **By wind / config:** Both runway ends (12L and 30R) carry ILS CAT II and equivalent ground infrastructure — selection is wind-driven with no strong published noise-preferential bias.
- **By departure direction:** Not independently sourced as a directional preference beyond wind; both directions are radar-vectored (§4).
- **Noise / preferential-runway program:** No published NADP or preferential-runway noise program beyond the general **80° no-fly arc** (180°–260° radials of the BHR VOR, over the main Bahrain islands) applicable to both arrivals and departures, and the **reverse-thrust/engine-run-up restrictions 2100–0300** (§Briefing §12).
- **Interaction with arrivals:** With **RWY 12R/30L currently unavailable**, all departures and arrivals share the single 12L/30R pair — expect sequencing/spacing consideration not present at a field with an independent parallel.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| No named RNAV SID found 🟧 | 12L / 30R | Departures published as **radar-vectored** ("Departure Chart (RADAR)" for both 12L and 30R in the reachable chart index) | Pull the live current-AIRAC chart index to confirm no named SID has since been published |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per ATC radar vectors; 250 KIAS below FL100 (ICAO norm) — not independently OBBI-sourced this pass. 🟧
- **Noise-abatement departure procedure (NADP):** No published NADP found; the standing noise constraint is the **80° no-fly arc** over the main Bahrain islands (§3) and the 2100–0300 reverse-thrust/engine-run-up restrictions.
- **Early turn / altitude constraints:** Per ATC radar vector and the charted Departure Chart (RADAR) for the assigned runway — verify on current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat reclaimed island — no significant close-in terrain. Numerous low obstacles (lampposts, comms masts) are charted in the take-off funnels of all four runway ends (mostly under ~20 m/65 ft); further out, the **Manama Financial Harbour towers (~266–267 m/874–875 ft AMSL)** lie roughly 2–3 NM SE of the field but are charted in the **circling area**, not the straight-out take-off path — cross-ref [Briefing §3.1](index.md).
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** LVP is declared whenever RVR ≤ 1,000 m or the manoeuvring area is not fully visible from the tower; **no take-off permitted below 350 m RVR** (hard floor). LVP departure procedure requires holding position **H (30R)** or **A1 (12L)**; **intersection departures are not authorised during LVP**. On receipt of take-off clearance, be ready to commence the take-off roll without delay, and notify ATC immediately of any non-compliance. See [`OM E — Low Visibility Operations`](../../../../../flight-ops/low-visibility-operations.md).
- **De-icing:** **NIL** — not required in this climate.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Bahrain Delivery **121.90 MHz** (H24); **PreFANS data-link DCL** (ACARS, addr. OBBI) also available — request en-route clearance between TOBT‑30 and TOBT‑10, transmitting the parking stand, and maintain continuous air-ground watch on Bahrain Delivery throughout the DCL process. VFR departures also contact Bahrain Delivery for departure instructions.
- **Frequency sequence:** **Delivery 121.90 → Ground (SMC) 121.85 → Tower 118.5 (alt. 296.025) → Approach (TAR) 127.85 (alt. 234.95).** Take the assigned frequency and confirm current chart. (Frequencies from [Briefing §8](index.md).) 🟧 A tier-4 source shows Ground at 121.675 MHz — AIP figure (121.85) used here.
- **CTOT / slot handling:** No slot/ATFM/CTOT regime identified for OBBI in reachable sources. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 12L/30R (3,964 m) is non-limiting for any K Global Code E/F type. RWY 12R/30L (2,530 m) is **currently unavailable** — do not plan a departure from it pending re-verification.
- **Density altitude / temperature:** Sea-level field (8 ft), but the AIP's own **38 °C reference temperature** is a genuine summer performance caution — build appropriate margin on hot-day departures even though the field is not geographically "hot-and-high."
- **Contamination / wet-runway:** No de-icing/winter-contamination consideration in this climate; standard wet-runway braking-action awareness applies during shamal/rain events.
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty for any K Global type at OBBI's current 12L/30R dimensions.

---

## 10. Gotchas

- **RWY 12R/30L is carried as "currently not available" in the sourced AIP cycle** — never plan or expect a departure from this runway pair without re-verifying current status.
- **No take-off is permitted below 350 m RVR** — a hard floor, not a soft minimum.
- **A Code F landing/departure on the main runway closes TWY Alpha between A1 and A2 to all movement** — expect ATC holds at Lima, Kilo or abeam Mike.
- **The 80° arc between the 180° and 260° radials of the BHR VOR (over the main Bahrain islands) is a no-fly arc** for departures unless deemed operationally essential and kept clear of land or vectored clear by Bahrain Approach.
- **Reverse thrust above idle and engine run-ups above ground idle are restricted 2100–0300** — plan ground checks and any post-arrival engine work outside this window where possible.
- **Departures here are radar-vectored, not named-SID** in the reachable chart index — do not expect an RNAV SID; follow ATC vectors per the Departure Chart (RADAR).
- **The regional conflict-zone/GNSS-jamming picture is a live planning input** — Bahrain (OBBB) FIR has been named in an EASA CZIB "avoid at all levels" advisory and experienced outright airspace closures in 2026; re-check at planning (see the [Middle East airspace brief](../../../../airspace/middle-east.md)).

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- **RWY 12R/30L current availability status** — see [Briefing §18](index.md).
- Whether any named RNAV SID has since been published (radar-vectored departures only found this pass).
- Take-off minima/DVA detail beyond the 350 m RVR hard floor.
- EOSID/engine-out procedure detail per runway.
- Ground-frequency discrepancy (AIP 121.85 MHz vs a tier-4 source's 121.675 MHz).
- CTOT/ATFM applicability (none found — confirm absence).

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. RWY 12R/30L status), CTOT/ATFM if any, current CZIB/conflict-zone and Bahrain-airspace open/closed state. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **Bahrain CAA — AIP, AD 2 OBBI**, AIRAC cycle eff. 2024-03-21 — SID/chart index, communications, local aerodrome regulations, LVP procedures — https://aim.mtt.gov.bh/eAIP/2024-03-21-AIRAC/html/eAIP/OB-AD-2.OBBI-en-BH.html (retrieved 2026-07-26).
- OurAirports — https://ourairports.com/airports/OBBI/frequencies.html (retrieved 2026-07-26). *Ground-frequency cross-check.*
- **Companion OM C file:** [Middle East airspace brief](../../../../airspace/middle-east.md) — conflict-zone/GNSS-jamming context.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
