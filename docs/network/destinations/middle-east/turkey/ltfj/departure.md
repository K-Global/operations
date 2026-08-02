# LTFJ — İstanbul Sabiha Gökçen Intl · Departure Page

**LTFJ / SAW** · Pendik/Kurtköy, İstanbul, Türkiye · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — DHMİ AIP-derived

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LTFJ Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **RWY 06** preferred (06L or 06R) per the Preferential Runway System, wind/braking-action permitting |
| Config logic | Wind/braking-action/weather-driven Preferential Runway System (PRS); default preference RWY 06 for take-off |
| Transition altitude | 12,000 ft |
| Take-off minima | Published — verify current chart 🟧 |
| CTOT / flow regime | Scheduled service gated by DHMİ SLOT Coordination Center allocation rather than a classic CTOT/ATFM program 🟧 |
| De-icing on departure | 🟥 **Available — Code C only** (max B737-900/A321) — **not usable for a K Global widebody** |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Extensive lettered taxiway system (A–V plus sub-taxiways) connecting the passenger apron, cargo apron and General Aviation apron to both runway pairs; specific stand-to-runway routing not itemised in reachable sources — confirm with Ground on the day.
- **Hot spots / tight taxiways:** 🟥 **MRO and stands 301–308 areas are not visible from Tower** — taxiing, push-back and towing there are under **pilot responsibility**. TWY F4 carries a noted slope caution (AD 2.20 item U). Confirm current AIRAC hot-spot markings.
- **Runway crossings / read-back-required points:** Not individually confirmed; two parallel runways (06L/24R and 06R/24L) imply crossing sequencing between the passenger/cargo apron complex and either runway — confirm with ATC.
- **Low-vis taxi caveats:** Mode-S-capable A-SMGCS (Advanced Surface Movement Guidance and Control System) is in use; pilots must ensure Mode-S transponder signals are transmitting continuously from push-back/taxi request until fully parked. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Preferential Runway System favours **RWY 06 for take-off**, subject to dry-runway tailwind ≤10 kt / wet-runway tailwind ≤5 kt, braking action "good-good-good," no wind-shear/thunderstorm/heavy-rain affecting the preferred runway, and LVP not in progress. Pilots unable to comply must notify ATC at start-up-clearance request and may be subject to delay >30 min notified by ATC.
- **By departure direction:** Not confirmed in reachable sources beyond the PRS logic above.
- **Noise / preferential-runway program:** RWY 06 preference is itself partly noise-driven per the published PRS criteria (local meteorological conditions, environmental restrictions, noise control all cited as ATC decision factors).
- **Interaction with arrivals:** Separation standard: departing aircraft on straight-in approach traffic may be cleared for take-off until the arriving aircraft reaches 5 NM from touchdown (may be increased by Tower per type/performance/weather); landing-traffic separation is 8 NM if departing traffic exists, 5 NM if not (per the 2015–16-cycle local regulations; re-verify against current AIRAC). 🟧

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| GNSS-based RNAV SIDs terminating at MARMA, GOLDO, VADEN, IBLAL, MAKOL, MOPIN, PIMAV, EDASA, ERSEN, TUDBU | 06/24 (both pairs) | P-RNAV required 🟧 | Sourced to the 2015–16-cycle local regulations; re-verify current-AIRAC SID names/gradients before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Not independently confirmed this pass; standard initial climb/speed schedule expected.
- **Noise-abatement departure procedure (NADP):** Aircraft compliant with ICAO Annex 16 Chapter 3/4 apply **NADP-2**; Chapter-2-category aircraft apply **NADP-1** only, both until passing 3,000 ft (per the 2015–16-cycle local regulations; re-verify against current AIRAC). 🟧
- **Early turn / altitude constraints:** Not confirmed — verify on current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources this pass. 🟥
- **Close-in / distant obstacles:** No close-in high terrain identified in reachable sources (35 km SE of İstanbul on the Asian side) — cross-ref [Briefing §3.1](index.md). Not independently cross-checked against a current obstacle chart. 🟧
- **Special DP / obstacle DP:** Not confirmed — verify on chart.

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed in reachable sources — verify current chart. 🟧
- **De-icing:** 🟥 **Code C only** (max B737-900/A321) — a K Global widebody cannot be de-iced at LTFJ. Entry/exit per ATC instruction only; Follow-Me support for non-standard-side access. Confirm an alternative plan before winter-season departures.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Gökçen Delivery (122.625 MHz, main) via the **DCL (Departure Clearance) system** by default — if DCL is unavailable, contact Clearance Delivery reporting callsign + stand position + ATIS information code — cross-ref [Briefing §8](index.md).
- **Frequency sequence:** Delivery (DCL/122.625) → Ground (121.750 main) → Tower (118.800 main) → Departure (Yeşilköy APP, sector SAG, or Gökçen TWR when required/transferred) — reference the field's actual frequencies in [Briefing §8](index.md).
- **CTOT / slot handling:** Scheduled service is gated by DHMİ SLOT Coordination Center allocation rather than a classic CTOT/ATFM program; under independent parallel departure operations, ATC may change the assigned runway/SID even during push-back/start-up for capacity reasons. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** New RWY 06R/24L (3,540 m, wide-body capable) is non-limiting for our Code E types; original RWY 06L/24R (3,000 m) should be checked per type/weight/route.
- **Density altitude / temperature:** Near sea-level (312 ft) — not a hot-and-high field; reference temperature 28 °C is unremarkable.
- **Contamination / wet-runway:** Not independently confirmed this pass; de-icing provisioning implies a recognised winter season.
- **Link to OM B:** No type-specific performance penalty identified on 06R/24L. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 10. Gotchas

- **De-icing is Code C only** — do not plan a widebody winter departure at LTFJ without an alternative de-icing arrangement; this is the single sharpest operational gotcha at this field for our fleet.
- **MRO and stands 301–308 are not visible from Tower** — taxiing/push-back/towing there is under pilot responsibility; extra vigilance required.
- **RWY 06 is preferentially assigned by ATC** but is subject to override criteria (tailwind, braking action, wind-shear/weather, LVP) — confirm the actual assigned runway on ATIS rather than assuming RWY 06.
- **DCL (Departure Clearance) system is default** — have a voice-clearance fallback plan (Clearance Delivery 122.625 MHz) ready in case of DCL system difficulty.
- **A-SMGCS with Mode-S** — ensure transponder Mode-S signal is set correctly from push-back/taxi request through full parking; incorrect transponder state can affect ground-guidance system tracking.
- **Reverse-thrust power-back is forbidden** — standard push-back procedures are mandatory for all stands except the de-icing apron and stand 14A-15A.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names/gradients — the RNAV waypoint set found is sourced to a 2015–16-cycle document.
- Take-off minima and LVTO procedure.
- Engine-out / emergency-turn procedure.
- Landing/departing traffic separation minima — sourced to the 2015–16-cycle document, re-verify current.
- Named taxiway hot spots beyond MRO/301–308 and TWY F4.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/slot status via DHMİ SLOT Coordination Center, de-icing status (Code-C-only capacity). Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **DHMİ AIP Türkiye, AD 2 LTFJ** (current AIRAC extract, cycles through AMDT 04/26) — https://dhmi.gov.tr/AIPDocuments/LT_AD_2_LTFJ_en.pdf (retrieved 2026-07-26).
- DHMİ AIP Türkiye, AD 2 LTFJ (2015–2016 legacy cycle, PRS/NADP/SID-waypoint/separation detail) — https://silo.tips/download/ad-2-ltfj-1-turkey-12-nov-15-ltfj-ad-21-aerodrome-location-indicator-and-name-lt (retrieved 2026-07-26). **Superseded cycle — flagged 🟧 where used.**

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS (not yet reconciled for this field); 4-page pack. |
