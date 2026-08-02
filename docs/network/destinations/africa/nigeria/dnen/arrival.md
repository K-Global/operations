# DNEN — Akanu Ibiam · Arrival Page

**DNEN / ENU** · Enugu, Enugu State, Nigeria · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [DNEN Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. **Runway length (and therefore usable LDA) is an unresolved, safety-critical open item — see the Briefing §7/§18.** Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Not published / verify — single runway 08/26 🟧 |
| Usual approach | Reported ILS (ident IEN, 108.3) — runway end unconfirmed 🟧 |
| Config logic | Not published / verify 🟧 |
| Transition level | Not published / verify 🟧 |
| LVP trigger | Not published / verify 🟧 |
| Missed-approach driver | Not terrain-driven; confirm interaction with co-located military helicopter traffic |

---

## 2. STAR / transition selection

- **STARs (names only):** Not published / verify. 🟧
- **Selection by arrival direction / runway:** Not published / verify. 🟧
- **Transition to approach:** Not published / verify. 🟧
- **Speed / flow constraints on the STAR:** Standard 250 KIAS below FL100 expected — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard planning rule-of-thumb; no field-specific constraint identified.
- **Speed control:** 250 KIAS below FL100 (ICAO norm) — confirm no local override.
- **Altitude constraints:** Not published / verify. 🟧
- **Energy traps:** Rainy-season heavy showers (Apr–Oct) are the main energy-management consideration; no terrain-driven trap identified.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 08/26 | Reported ILS (IEN, 108.3) — runway end unconfirmed | Not confirmed 🟧 | No chart-sourced minima obtained this pass — verify current AIRAC |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** No specific close-in high-terrain hazard identified — rolling plateau terrain around Enugu, the highest-elevation field of the four in this build; cross-ref [DNEN Briefing](index.md) §3.1. 🟩
- **Specific threats:** 🟧 Co-located Nigerian Air Force base with helicopter training units — expect rotary-wing traffic near the field; confirm segregation/procedures via current chart and NOTAM. ITCZ-season (Apr–Oct) heavy rain/embedded CB and harmattan dust (Nov–Mar, more pronounced here than the coastal fields) are the weather threats.
- **Airspace / traffic:** Mixed civil/military traffic environment — cross-ref [DNEN Briefing](index.md) §3.2.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** No specific driver identified.
- **Re-sequencing environment:** Confirm interaction with military helicopter operations on any go-around.
- **Go-around traps:** None specifically identified beyond the joint civil/military traffic consideration.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 🟥 **Unresolved — do not assume either the 2,402 m or 3,000 m published runway-length figure represents usable LDA without AIP confirmation.** Cross-ref [DNEN Briefing](index.md) §7/§18.
- **Braking / vacate:** Not published / verify. 🟧
- **Runway-excursion watch:** 🟥 Given the unresolved length figure, treat this field conservatively for landing-distance margin until the AIP is confirmed; wet-runway braking action in the Apr–Oct rainy season is an additional watch item.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not published / verify. 🟧
- **Hot spots / tight taxiways:** 🟧 Possible shared infrastructure with the co-located Air Force base — cross-ref [DNEN Briefing](index.md) §13.
- **Stand/gate notes:** Cross-ref [DNEN Dispatch](dispatch.md) §3.

---

## 9. Arrival frequency sequence

- **Sequence:** **Enugu Approach (123.30)** → **Enugu Tower (123.30, combined)** → Ground (not confirmed) — reference [DNEN Briefing](index.md) §8.
- **Approach/Departure control:** Combined with Tower on a single frequency per tier-4 source — not independently confirmed. 🟧

---

## 10. Gotchas

- 🟥 **Runway length/LDA is unresolved between sources (2,402 m vs 3,000 m)** — do not commit to a landing-distance margin without AIP confirmation.
- Joint civil/military aerodrome — expect helicopter/military traffic on frequency and near the field.
- No confirmed approach-procedure minima — pull the current-AIRAC chart before planning any low-vis arrival.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- 🟥 Runway length/LDA (2,402 m vs 3,000 m) — priority item.
- STARs, approach minima, transition level, LVP trigger, taxi-in routing, military-traffic procedures, approach-control facility — none confirmed in reachable sources.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, military activity), ATIS config, ground-delay/flow status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- SkyVector — DNEN / Enugu/Akanu Ibiam Airport — https://skyvector.com/airport/DNEN/Enugu-Akanu-Ibiam-Airport (retrieved 2026-07-26). *Runway/frequency data.*
- OurAirports — https://ourairports.com/airports/DNEN/runways.html (retrieved 2026-07-26). *Conflicting runway-length figure.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Nigeria (NCAA); K Global fields from live VAMSYS; 4-page pack. Runway-length source conflict flagged as priority open item. |
