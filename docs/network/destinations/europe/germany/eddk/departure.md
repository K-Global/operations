# EDDK — Cologne/Bonn · Departure Page

**EDDK / CGN** · Köln / Bonn, North Rhine-Westphalia, Germany · Europe
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [EDDK Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **13L/31R** (long parallel, primary for scheduled/cargo jets) 🟧 — confirm current designators, see §10/Briefing §18 |
| Config logic | Not confirmed — likely wind-driven given three runway options (06/24, 13L/31R, 13R/31L); verify current AIP/NOTAM |
| Transition altitude | Not confirmed for EDDK specifically 🟧 |
| Take-off minima | Not confirmed — verify current AIRAC 🟧 |
| CTOT / flow regime | Not confirmed for EDDK specifically; **24h cargo-hub profile means overnight slot availability should not be assumed identical to a curfewed field** 🟧 |
| De-icing on departure | Availability/procedure not confirmed; expect a requirement in Central European winter conditions 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not confirmed from reachable sources — confirm the exact taxi with Ground on the day. Note the airport's layout spans three runways (06/24, 13L/31R, 13R/31L) and a mixed cargo-freighter/passenger ramp environment.
- **Hot spots / tight taxiways:** 🟧 None identified from reachable sources — verify current AIP/NOTAM hot-spot chart before taxi, particularly given the overnight freighter-bank traffic that can make the ramp environment busier than daytime intuition suggests.
- **Runway crossings / read-back-required points:** Not confirmed — expect standard crossing/hold-short instructions given the three-runway layout. 🟧
- **Low-vis taxi caveats:** SMGCS/low-vis taxi routing would apply if the reported CAT III capability on the long parallel is confirmed; follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Not confirmed — likely wind-driven given three runway options; verify on current AIP/NOTAM.
- **By departure direction:** Not confirmed from reachable sources.
- **Noise / preferential-runway program:** Not confirmed from reachable sources. Given the airport's role as a 24h freighter hub, some form of noise-management framework is plausible but not documented here — verify with the airport operator/AIP.
- **Interaction with arrivals:** Traffic sequencing among the three runways, and against the **overnight cargo freighter bank** (FedEx Express, UPS Airlines), is the operative consideration — expect materially busier overnight traffic than the daytime passenger profile suggests.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 13L/31R (long parallel, primary) | No unusual gradient expected at this near-sea-level field; confirm standard RNAV SID equipage on current chart | Pull the live current-AIRAC SID list before use; **confirm current runway designators** (§10) |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; standard ICAO/EU 250 KIAS below FL100 — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed from reachable sources. 🟧
- **Early turn / altitude constraints:** Not confirmed — verify current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** No close-in high terrain — low Rhine basin bordered by the flat-to-gently-rolling Wahner Heide heathland/nature reserve (see Briefing §3.1); Wahner Heide wildlife activity is plausible but not independently confirmed. 🟧
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** If the reported CAT III capability on the long parallel runway is confirmed, standard LVP trigger conditions would apply — specific LVTO RVR minima not confirmed this pass. 🟧
- **De-icing:** Availability/procedure not confirmed — expect a requirement in Central European winter conditions given the field's radiation-fog/icing exposure. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Köln/Bonn Delivery **121.855** (🟧 H24 assumed).
- **Frequency sequence:** **Delivery 121.855 → Ground 121.73 (Rollkontrolle) → Tower 124.98 (Turm) → Approach/Director 121.05 (role not independently confirmed) → Langen Radar (Langen ACC, EDGG) 118.75 (H24).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** Slot-coordination status not confirmed for EDDK specifically — the 24h cargo-hub profile means overnight slot availability should not be assumed identical to a curfewed field; confirm on the current OFP/AIP. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** **13L/31R** (3,815 m/12,516 ft) is ample for our A319/narrowbody operation; the two shorter runways (06/24, 13R/31L) are secondary/GA-weighted and not expected departure options for a K Global type.
- **Density altitude / temperature:** Non-issue at 302 ft, temperate climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Winter radiation fog/low stratus and occasional snow/icing are the standing seasonal considerations (Briefing §3.4/§14); no specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — A319 Dispatch`](../../../../../fleet/a319/dispatch.md) — no field-specific performance or stand limitation identified for the A319 at EDDK.

---

## 10. Gotchas

- **Runway-designator discrepancy** 🟧 — current tier-4 data shows the long parallel pair as **13L/31R and 13R/31L**; older reference material shows **14L/32R and 14R/32L**, consistent with a magnetic-variation runway renumbering. Confirm the live designators against the current AIP/NOTAM and any in-sim scenery before flight-planning — see [Briefing §4/§18](index.md).
- **No night curfew — 24h cargo-hub operation.** Do not assume a quiet overnight ramp; FedEx Express and UPS Airlines both bank freighters through EDDK overnight, and this can raise ground/taxi workload materially versus the daytime passenger profile.
- **Declared distances (TORA/TODA/ASDA/LDA) and RFF category are unconfirmed** — do not assume the physical runway lengths equal usable declared distances.
- **Wahner Heide nature reserve** borders the airport — wildlife activity in the vicinity is plausible; not independently confirmed from a NOTAM/AIP source.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics.
- **Confirm current runway designators (13L/31R/13R/31L vs 14L/32R/14R/32L)** before any departure briefing.
- Take-off minima / DVA exact figures.
- Start-up/push-back procedure detail, particularly given the mixed cargo-freighter/passenger ramp.
- Slot-coordination status and any CTOT/ATFM exposure.
- LVTO RVR minima and de-icing procedure detail.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. current runway-designator status), CTOT/ATFM (if any), de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — Cologne Bonn Airport (CGN, EDDK) — https://ourairports.com/airports/EDDK/runways.html , /frequencies.html (retrieved 2026-07-25).
- Wikipedia — Cologne Bonn Airport — https://en.wikipedia.org/wiki/Cologne_Bonn_Airport (retrieved 2026-07-25). *24-hour operating status; FedEx Express/UPS Airlines hub status.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Built from DFS eAIP-derived Briefing (tier-4 corroboration) + live VAMSYS; new page, part of the fold to a 4-page pack. |
