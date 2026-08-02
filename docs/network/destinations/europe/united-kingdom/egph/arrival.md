# EGPH — Edinburgh · Arrival Page

**EGPH / EDI** · Edinburgh (Ingliston), Lothian, Scotland, United Kingdom · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [EGPH Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **06 or 24** — wind-driven, no crosswind alternative on the field |
| Usual approach | **ILS CAT III** on the assigned runway end (IVG on 06, ITH on 24) |
| Config logic | Wind-driven; single runway means the whole field flips direction on a wind shift |
| Transition level | By QNH; transition altitude 6,000 ft — verify current chart 🟧 |
| LVP trigger | CAT II/III authorised both runway ends subject to serviceability and ATC low-vis procedures; exact RVR trigger not confirmed 🟧 |
| Missed-approach driver | Traffic/weather-driven; terrain (Pentland Hills, distant) not confirmed as the driver |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Runway-in-use is wind-driven (no crosswind alternative); Edinburgh Approach/Radar assigns the STAR-to-runway transition for the active direction.
- **Transition to approach:** Expect radar vectors onto the ILS given radar-controlled approach; verify the charted transition.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart; standard 250 KIAS below FL100 applies absent a local override.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR/vector altitude gate.
- **Speed control:** 250 KIAS below FL100 (UK/ICAO norm) — confirm current chart; Edinburgh CTR (Class D, SFC–6,000 ft) speed discipline applies inside the 10 NM ring.
- **Altitude constraints:** Key crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** A **late runway-direction change** (06↔24) driven by a wind shift is the main energy trap at this single-runway field — watch the ATIS wind trend closely. The **2230–0630 all-IFR-visual-approach ban** (Briefing §12) means a night arrival must be flown and briefed as an ILS approach from the outset, even in clear conditions — do not plan a late-notice visual.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 06 | ILS (IVG) | **CAT III** 🟩; localiser not for use below 3,000 ft AGL outside 17 NM 🟥; GP extended range to 15 NM, not for use below 2,200 ft at that range 🟥 | verify current chart |
| 24 | ILS (ITH) | **CAT III** 🟩; same localiser/GP range-altitude caveats 🟥 | verify current chart |

- **LVP triggers:** CAT II/III authorised on both runway ends subject to serviceability and ATC low-vis procedures; exact RVR trigger figures not confirmed this pass. 🟧 **All IFR arrivals 2230–0630 (2130–0530) must fly the ILS regardless of visibility** — this is a standing ATC rule, not a weather-triggered LVP.

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟧 Lowland coastal field; the **Pentland Hills** (up to ~579 m at Scald Law) lie roughly 10–15 km to the south — a distant feature, not independently cross-checked against the current MSA/obstacle chart. Cross-ref [Briefing §3.1](index.md).
- **Specific threats:** 🟥 **Single runway with no crosswind alternative** — a crosswind exceedance forces a diversion, not a runway change. 🟥 **Large bird population around the aerodrome, with active shell-cracker deterrents in use** — brief an elevated bird-strike watch, particularly at low level on final. 🟥 The **2230–0630 all-IFR-visual-approach ban** is itself a specific, hard threat-management item: never plan a night visual approach in that window.
- **Airspace / traffic:** 🟧 Radar-controlled Class D CTR (10 NM, SFC–6,000 ft) and ATZ; field sits in **Scottish FIR (EGPX)**, for which **no dedicated FIR brief yet exists in this network** — see [Briefing §3.2/§18](index.md) and the [Europe area brief](../../../../airspace/europe.md) for regional context.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not confirmed as the primary missed-approach driver at this lowland field; the distant Pentland Hills (§5) have not been cross-checked against the current MAP/obstacle chart — fly the published MAP and verify climb-gradient/turn on the current chart. 🟧
- **Re-sequencing environment:** Single-runway field — a go-around drops the aircraft back into the same runway's sequencing flow; expect vectoring/holding under Edinburgh Approach/Radar pending re-sequencing.
- **Go-around traps:** Crosswind gust handling on the single runway, and the standing bird-strike watch-item (§5), are the two most field-specific go-around considerations here.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** **RWY 06 — 2,344 m; RWY 24 — 2,347 m.** Both thresholds are inset/displaced 213 m from the physical runway ends, which is why LDA is measurably shorter than the full 2,556 m runway length or the published TORA figures — cross-ref [Briefing §7](index.md). This is non-limiting for narrowbody/regional types but should be checked against the current-cycle landing-distance chart for any Code E widebody at higher landing weight.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources. **Code E/F aircraft must vacate the runway at the runway end (via TWY A1 or D1) unless escorted by a follow-me vehicle** — do not plan on an earlier high-speed turnoff for a widebody. 🟧
- **Runway-excursion watch:** 🟧 Displaced thresholds reduce the landing-distance margin on both directions; the field's **crosswind exposure with no runway alternative** is the dominant excursion-risk factor, compounded by winter contamination/braking-action in the Scottish icing season (see Briefing §14).

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not confirmed in detail from reachable sources — confirm the assigned taxi-in route with Ground on the day; VAMSYS mirror gives a planning taxi-in time of **12 min** `[VAMSYS mirror 2026-07-26]`. 🟧
- **Hot spots / tight taxiways:** None identified in the reachable AIP extract this pass. 🟧
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — the AIP's direct statement that **"stand availability is extremely limited, particularly at night and for large wide-bodied aircraft"** is the standing consideration on taxi-in for any widebody arrival; confirm gate assignment with handling before landing if not already confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Edinburgh Approach/Radar 121.205 (H24) / 128.980 (H24, as directed) → Edinburgh Tower 118.705 (H24) → Edinburgh Ground 121.755 (Mon–Fri/Sat/Sun 0600–2200/0500–2100 UTC; outside these hours contact Tower).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Edinburgh Approach/Edinburgh Radar** is the terminal facility; the field sits in **Scottish FIR (EGPX)** for en-route handoff, for which no dedicated FIR brief yet exists in this network (Briefing §18). 🟧 Exact sector/frequency assignment is AIRAC-dependent — verify current chart.

---

## 10. Gotchas

- **Single runway, no crosswind alternative** — a crosswind exceedance means diversion, not a runway swap; check the wind component early.
- **Both thresholds inset 213 m** — LDA (2,344/2,347 m) is meaningfully shorter than the full 2,556 m runway or published TORA; do not confuse the two when checking landing performance.
- **All IFR visual approaches are banned 2230–0630** — brief and fly the ILS from the outset for any night arrival, even in clear conditions.
- **Large bird population, active shell-cracker deterrents in use** — maintain a heightened bird-strike watch, especially at low level.
- **"Stand availability is extremely limited, particularly at night and for large wide-bodied aircraft"** (direct AIP statement) — confirm gate assignment for any widebody arrival, especially an overnight one.
- **Code E/F aircraft vacate only at the runway end (A1/D1)** unless escorted by a follow-me vehicle — do not expect an early turnoff.
- **Localiser/glidepath range-altitude limits** — localiser not below 3,000 ft AGL outside 17 NM; glidepath extended range to 15 NM not usable below 2,200 ft at that range — brief before flying an extended-range ILS capture.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- ILS sub-category (IIIA/IIIB) confirmation.
- Exact LVP/CAT III trigger RVR values.
- Rapid-exit taxiway/vacate detail.
- Taxi-in routing and typical gate assignment for our operation.
- Terrain/MSA cross-check against the current MAP/obstacle chart (Pentland Hills bearing/distance).

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, bird-activity), ATIS config/wind trend, current UK NATS flow-management status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **UK NATS eAIP — AIP United Kingdom, AD 2 EGPH**, AIRAC effective 2020-10-08 — https://www.aurora.nats.co.uk/htmlAIP/Publications/2020-10-08-AIRAC/html/eAIP/EG-AD-2.EGPH-en-GB.html (retrieved 2026-07-26). *Runway/declared distances, ILS/navaid data, communications.*
- OurAirports — https://ourairports.com/airports/EGPH/ (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from UK AIP (NATS AIS); K Global fields from live VAMSYS; 4-page pack. |
