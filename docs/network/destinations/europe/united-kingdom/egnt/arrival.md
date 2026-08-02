# EGNT — Newcastle · Arrival Page

**EGNT / NCL** · Woolsington, Newcastle-upon-Tyne, England, United Kingdom · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [EGNT Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **07 or 25** — single runway, wind-driven; no published preferential-runway rule found |
| Usual approach | **ILS RWY07 (INC) or ILS RWY25 (INWC)**, both published CAT III (sub-category not confirmed) |
| Config logic | Wind-driven; brief both named weather hazards regardless of active end (§5) |
| Transition level | By QNH; transition altitude 6,000 ft — verify current chart 🟧 |
| LVP trigger | CAT II/III authorised both runways subject to serviceability; CAT II/III holding points RWY07 = A2, RWY25 = D3 or D2; exact RVR trigger not confirmed 🟧 |
| Missed-approach driver | No significant terrain factor identified — the named weather hazards (§5) and traffic/wind sequencing are the operative drivers, not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** 🟧 Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning.
- **Selection by arrival direction / runway:** Single runway, wind-driven direction of use; no published preferential-runway logic found. Newcastle Approach/Radar (124.380, H24) and Director (125.830, as directed) manage the transition to final.
- **Transition to approach:** Expect radar vectors to final for the assigned runway; verify the charted transition on the current AIRAC.
- **Speed / flow constraints on the STAR:** Standard 250 KIAS below FL100 (UK/ICAO norm); published speed/altitude gates are pointers only — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate (not independently confirmed this pass). 🟧
- **Speed control:** 250 KIAS below FL100; STAR speed gates not confirmed this pass.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** 🟥 The field's own AIP text describes a specific, quantified energy-management trap on **RWY07**: during a high-to-low pressure transition, wind aloft can be southerly/south-westerly while the surface wind still favours RWY07 — producing a combination of **being held high, a tailwind during descent, and engine anti-ice required through cloud (icing risk)**, with a rushed approach the likely outcome. A sea breeze from solar heating over land can produce the same effect. Brief this explicitly whenever a pressure transition or strong sea-breeze day is forecast — see [Briefing §3.4](index.md).

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 07 | ILS (INC) | **CAT III** (sub-category not confirmed) 🟧; note RWY07 lighting-removal programme (two luminaires removed 510 m from threshold) as a low-vis-capability caution | verify current chart |
| 25 | ILS (INWC) | **CAT III** (sub-category not confirmed) 🟧 | verify current chart |

- **LVP triggers:** CAT II/III operations authorised on both runways subject to serviceability; CAT II/III holding points RWY07 = A2, RWY25 = D3 or D2. Exact RVR/LVP trigger figures not confirmed this pass. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 No close-in high terrain identified in the reachable AIP extract this pass — see [Briefing §3.1](index.md). Not a CFIT-significant field on the data available; verify MSA ring on current chart as routine practice.
- **Specific threats:** 🟥 Two named, AIP-quantified hazards apply directly to the approach:
  - **RWY25, wind 160°–190°:** expect **wind disturbance and possible negative gradient** on approach — a named, sourced hazard, brief explicitly whenever RWY25 is active in this wind sector.
  - **RWY07, pressure-transition rushed-approach risk:** see §3 above — being held high, tailwind during descent, icing/anti-ice requirement, and a sea-breeze variant of the same effect.
  - **Bird hazard:** a nature reserve lies north of the NT NDB, **1.2 NM from the RWY25 touchdown zone**, plus woodland north of the aerodrome perimeter — an active, sourced bird-strike risk concentrated on the RWY25 approach.
  - **CAT I localiser fluctuation** possible if the preceding landing aircraft vacates near the runway end — a live-traffic-sequencing caution.
- **Airspace / traffic:** EGNT sits in **London FIR (EGTT)**; no dedicated FIR brief exists yet in this network for London FIR (see [Briefing §3.2/§18](index.md)) — general context via the [Europe area brief](../../../../airspace/europe.md) 🟧. Newcastle CTR (Class D) and a 2.5 NM/2,000 ft AAL ATZ apply at the field.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not a terrain-driven field (§5) — fly the published missed approach and verify climb-gradient/turn on the current chart. 🟧
- **Re-sequencing environment:** Single-runway field — a go-around re-enters the same runway's arrival/departure sequence under Newcastle Approach/Radar/Director; expect vectoring for re-sequencing per tactical ATC instruction.
- **Go-around traps:** A go-around off RWY25 in the 160°–190° wind sector should anticipate the same wind-disturbance/negative-gradient characteristics described for the approach (§3/§5) persisting into the initial missed-approach climb — brief accordingly.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** RWY07 **2,209 m**; RWY25 **2,124 m** — both reduced from the runway's physical/TORA length purely by displaced thresholds (RWY07 121 m, RWY25 138 m); see [Briefing §7](index.md). Confirm landing-distance performance per type/weight against these reduced figures, not the physical 2,330 m length.
- **Braking / vacate:** Runway is described in the AIP as **grooved for its full length**. A turn pad exists 50 m before the RWY25 threshold, usable to B757 size, with an explicit caution to **use it with caution at night**. Rapid-exit taxiway detail otherwise not confirmed this pass. 🟧
- **Runway-excursion watch:** 🟧 Displaced thresholds reduce usable LDA on both runways — this is the standing runway-excursion planning consideration here, more than a tailwind/contamination pattern; confirm the reduced LDA is used in the landing-distance calculation, not the physical length.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Confirm exact taxi-in routing with Ground/Apron on the day; not itemised route-by-route in the reachable AIP extract this pass. 🟧
- **Hot spots / tight taxiways:** 🟥 **Code E and higher aircraft (except the Boeing 787-8) must not use the angled Taxiway B/C (Hold CW) turnoffs** to vacate the runway after landing — plan an alternative vacate point for Code E types other than the B787-8. **Ground-movement wingspan restrictions** also apply on taxi-in: Holding Point D2 max 36 m, Taxiway E max 17 m, Taxiway F max 27.5 m. **Soft grass verges / limited load-bearing erosion strips** run along runway/taxiway edges — a taxiing caution.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — **Stand 30** (diagonal across Stand 9) is the field's sourced widebody-capable position (B747/A330-300/B777-300-size); **Stand 31** (diagonal across Stand 1) is for smaller narrowbody types.

---

## 9. Arrival frequency sequence

- **Sequence:** **Newcastle Approach/Radar 124.380 (H24) → Newcastle Director 125.830 (as directed by ATC) → Newcastle Tower 119.705 (H24) → Newcastle Ground 121.730 (as directed by ATC, aerodrome-surface only).** Take the assigned frequency and confirm current chart. (Frequencies from [Briefing §8](index.md).)
- **Approach/Departure control:** **Newcastle Approach/Director/Radar** on the field; the field sits in **London FIR (EGTT)** — no dedicated FIR brief exists yet in this network (see [Briefing §3.2/§18](index.md)). 🟧 Exact sector/frequency assignment beyond the published table is AIRAC-dependent.

---

## 10. Gotchas

- **RWY25, wind 160°–190°: expect wind disturbance and possible negative gradient** — a named, quantified AIP hazard, not a generic caution.
- **RWY07, pressure-transition rushed-approach risk** — being held high, tailwind during descent, anti-ice/icing risk, and a sea-breeze variant of the same effect; brief this explicitly on the relevant weather pattern.
- **Both LDAs are reduced by displaced thresholds** (RWY07 2,209 m, RWY25 2,124 m vs 2,330 m physical) — use the reduced figure in landing-distance calculations.
- **Code E+ aircraft (except B787-8) must not use the angled Taxiway B/C turnoffs** to vacate — plan the alternative vacate point before landing.
- **Bird hazard concentrated on the RWY25 approach** (nature reserve + woodland, 1.2 NM from touchdown zone).
- **CAT I localiser fluctuation possible** if the preceding aircraft vacates near the runway end — a live-sequencing caution.
- **RWY25 turn pad usable to B757 size — use with caution at night.**
- **A commonly cited night curfew is tier-4 sourced only this pass** — do not assume a hard post-curfew diversion requirement without further verification (see Briefing §18).

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- ILS sub-category (II/IIIA/IIIB/IIIC) confirmation on both runway ends.
- Exact LVP/CAT III trigger RVR values.
- Rapid-exit taxiway/vacate detail beyond the RWY25 turn pad.
- Current taxi-in routing by runway → terminal/stand.
- MSA/terrain table — confirm on current chart before treating §5 CFIT assessment as more than first-pass.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. RWY07 lighting-removal-programme status), ATIS config/wind trend, PPR/slot confirmation status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **UK NATS eAIP, AD 2 EGNT**, AIRAC effective 2026-05-14 — https://www.aurora.nats.co.uk/htmlAIP/Publications/2026-05-14-AIRAC/html/eAIP/EG-AD-2.EGNT-en-GB.html (retrieved 2026-07-26). *Runway/declared-distance data, communications, navaids, wind/pressure-transition hazard text, bird-hazard note, ground-movement restrictions, CAT II/III holding points.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from UK AIP (NATS AIS); K Global fields from live VAMSYS; 4-page pack. |
