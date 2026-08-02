# EGGD — Bristol · Departure Page

**EGGD / BRS** · Bristol (Lulsgate Bottom), North Somerset, England, United Kingdom · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [EGGD Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **09 or 27** — wind-driven, single runway |
| Config logic | Single-runway field; runway-in-use is purely wind-driven; no published utilisation split found 🟧 |
| Transition altitude | 6,000 ft |
| Take-off minima | Published per AIP — exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | Level 3 night coordination 2200–0600 (Summer only); PPR-based, not a general CTOT/ATFM program confirmed |
| De-icing on departure | Available H24 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Named **B787/A330 routes**: RWY 09 departure via Taxiway Z→G, entering the runway at GX; RWY 27 departure via Taxiway Z→A, entering at AX. Minimum-power taxi is specifically instructed from stands 19/20 to line up RWY 27 via holding point AX.
- **Hot spots / tight taxiways:** 🟥 **No aircraft over 36 m wingspan class transitions are formally labelled "Hot Spot" in the reachable extract**, but minimum main-gear pavement-edge clearance is tight for A330-class aircraft at several taxiway/runway transitions (as low as **3.0 m at GX from runway, 3.1 m at GX onto runway, 3.3 m at BX from runway, 4.0–4.1 m at AX**) — treat these as functional hot-spot cautions. Taxiways D, F, G and Z also carry longitudinal-gradient notes up to ~2.65%.
- **Runway crossings / read-back-required points:** Single runway, no crossing runway on the field.
- **Low-vis taxi caveats:** Stop bars at AX, BX, DX, FX, GX, HX, JX (H24) plus G2, G3, Z1, Z2; follow-me provided when IRVR is 300 m or less. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Single runway 09/27 — the assigned runway is a function of the reported/forecast wind; note the asymmetric windshear/turbulence caution (strong SE favours but also cautions RWY 09; strong W favours but also cautions RWY 27) — see Briefing §3.4.
- **By departure direction:** RWY 09 departs ENE; RWY 27 departs WSW. A specific **left-turn departure off RWY 09 climbs straight ahead to 1 NM DME** before turning, to avoid Felton Village.
- **Noise / preferential-runway program:** Named **Noise Preferential Routes** apply to departures >5,700 kg MCW: RWY 09 — climb ahead to IBON 5.4 NM (IBTS 4.7 NM) DME, no lower than 3,000 ft QNH before turning; RWY 27 — climb ahead to IBTS 5.2 NM (IBON 4.5 NM) DME, no lower than 3,000 ft QNH before turning. Obligations cease above 4,000 ft QNH.
- **Interaction with arrivals:** Single-runway field — departures and arrivals share the same runway; a runway-direction swap affects the whole operation at once.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| BCN 1X / 1Z | 09 / 27 | Not confirmed — verify RNP/gradient on current chart 🟧 | Pull the live current-AIRAC SID list before use |
| BADIM 1X / WOTAN 1Z | 09 / 27 | Not confirmed 🟧 | |
| EXMOR 1X / 1Z | 09 / 27 | Not confirmed 🟧 | |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC instruction; 250 KIAS below FL100 (UK/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed as a specific mandated NADP1/2 variant in reachable sources — the field's noise-abatement approach is expressed through the named NPRs above (§3). 🟧
- **Early turn / altitude constraints:** RWY 09 left-turn departures must climb straight ahead to 1 NM DME before turning (Felton Village avoidance); both runways' NPRs require 3,000 ft QNH minimum before the post-NPR turn. Verify current chart for full detail.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** A hill with church tower/radio masts (~888 ft elevation, lit) lies ~2 NM NE of the ARP; a mobile-phone mast (~750 ft, lit) is close-in; a radio mast (~1,158 ft, unlit) lies south; a TV mast (~1,963 ft, lit) lies further south. None cross-checked against the current EOSID/obstacle chart this pass. See [Briefing §3.1](index.md). 🟧
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed this pass. Note RWY 09's low-vis capability is asymmetrically weaker (I/T/1, IRVR ≥550 m) than RWY 27 (CAT III) — brief accordingly. 🟧
- **De-icing:** **Available H24**; mechanical/chemical, runway de-iced/anti-iced with KFOR/NAAC. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** **Bristol Delivery 121.930**, available as directed by ATC (DOC 2 NM/GND).
- **Frequency sequence:** **Delivery 121.930 → Tower 133.850 (H24) → Bristol Radar 125.650 (H24, APP) / Bristol Director 136.080 (as directed).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** No general ATFM/CTOT program confirmed for this field; the operative constraint is the **Level 3 night-coordination/PPR regime 2200–0600 (Summer only)** — see [Briefing §5](index.md)/[Dispatch §4](dispatch.md). Engine runs require an authorisation code from Airside Operations.

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 09/27 (2,011 m) is generally workable for narrowbody/regional Code C types; a **Code E widebody at high takeoff weight should be checked against the current-cycle field-length/weight chart**, particularly given RWY 27's ~130 m threshold displacement (LDA-relevant, not TORA-relevant for take-off). See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).
- **Density altitude / temperature:** Non-issue at 622 ft, temperate maritime climate — no hot-and-high penalty, though the field's hilltop exposure drives a real wind/turbulence consideration instead (Briefing §3.4).
- **Contamination / wet-runway:** Standard UK winter icing/snow season; no specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — check any Code E type against the 2,011 m runway and the named B787/A330 taxi-route guidance before planning a widebody departure at high weight.

---

## 10. Gotchas

- **AIP-explicit windshear/turbulence caution** on strong SE (RWY 09) / strong W (RWY 27) winds — brief before every strong-wind departure.
- **B787 and A330 aircraft cannot backtrack** on this field's taxi routes — plan the full-length entry accordingly.
- **Tight main-gear pavement-edge clearances** at several taxiway/runway transitions for A330-class aircraft (as low as 3.0 m) — taxi at appropriate speed and awareness.
- **RWY 09 left-turn departures must climb straight ahead to 1 NM DME** before turning — Felton Village noise avoidance.
- **Minimum-power taxi instruction** applies from stands 19/20 to line up RWY 27 via AX.
- **Level 3 night coordination (2200–0600, Summer only) requires PPR** — do not plan an unscheduled night departure without confirmed slot status.
- **Racing pigeon activity is evident year-round, especially April–October** — brief an elevated bird-strike watch on the take-off roll and initial climb.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names, RNP/gradient specifics per runway.
- Take-off minima exact figures.
- EOSID/engine-out procedure detail per runway.
- LVTO RVR minima.
- NADP preference (if any is mandated for this field).

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/navaid/lighting, bird activity), CTOT/PPR status, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **UK NATS eAIP — AIP United Kingdom, AD 2 EGGD**, AIRAC effective 2020-10-08 — https://www.aurora.nats.co.uk/htmlAIP/Publications/2020-10-08-AIRAC/html/eAIP/EG-AD-2.EGGD-en-GB.html (retrieved 2026-07-26). *Runway/declared distances, taxi routes, NPR names, communications.*
- OurAirports — https://ourairports.com/airports/EGGD/ (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from UK AIP (NATS AIS); K Global fields from live VAMSYS; 4-page pack. |
