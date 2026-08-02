# LPPR — Francisco Sá Carneiro · Arrival Page

**LPPR / OPO** · Porto, Portugal · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Portugal-derived

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LPPR Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **17 or 35** — single runway, wind-dependent config |
| Usual approach | 🟧 **ILS CAT II on RWY 17** (corrected from a commonly assumed CAT III); RWY 35 — DVOR/RNP, no confirmed ILS |
| Config logic | Wind-driven; standard single-runway selection |
| Transition level | By QNH; transition altitude 4,000 ft — verify current chart 🟧 |
| LVP trigger | TDZ RVR ≤550 m or cloud base ≤200 ft |
| Missed-approach driver | 🟧 East/northeast obstacle cluster (Briefing §3.1) is the field's one genuine terrain-adjacent consideration — not airspace/traffic congestion as at LPPT |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** RNAV STARs only (no conventional STARs published) — RWY 17: ABLEG3M, ABLEG3T, ASPOR3T, ELGIX3T, ASMOV3M, MALIS5T, PESUL4T, UBANI3M; RWY 35: ABLEG6C, ASMOV3A, ASPOR6A, ASPOR6C, INKIT6C, MALIS5C, PESUL6C, UBANI3A.
- **Selection by arrival direction / runway:** Porto Approach assigns the STAR/transition for the active runway configuration; holding fixes exist at ADNOV (RWY 17) and AKULU (RWY 35) for radio-comms-failure/holding contingencies.
- **Transition to approach:** Expect an RNAV-STAR-to-ILS transition on RWY 17 (CAT II); RWY 35 arrivals transition to a DVOR/RNP approach — verify the charted transition for the assigned runway.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate.
- **Speed control:** 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes, noting the east/northeast obstacle cluster (§5) on the corresponding sector.
- **Energy traps:** Late runway/config changes ahead of a wind shift, and the field's genuine low-visibility exposure (RWY 17 LVP trigger at RVR TDZ ≤550 m) are the main energy/planning traps at this field.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 17 | ILS (PR); RNP Y; RNP Z (LPV only) | 🟧 **CAT II** (AIP-confirmed — corrects a commonly assumed CAT III); LVP trigger RVR TDZ ≤550 m or CBH ≤200 ft | verify current chart |
| 35 | DVOR; RNP | 🟧 No ILS confirmed in reachable AIP text — Precision Approach CAT I lighting is installed, implying a precision capability not captured in this extract's navaid table | verify current chart |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟧 A charted obstacle cluster exists to the **east/northeast** of the field — towers up to 137 m elevation, a tree at 196 m elevation (the field's single highest charted obstacle), and a natural highpoint (63 m) close to the aerodrome. Not a dominant CFIT profile, but a real departure from a "flat field, no issue" assumption — cross-check the current obstacle/MSA chart.
- **Specific threats:** 🟧 **RWY 17's ILS is CAT II, not CAT III** — confirm crew/aircraft currency matches the actual published capability before planning a low-vis arrival. RWY 35 has no confirmed ILS — plan a DVOR/RNP approach there instead.
- **Airspace / traffic:** 🟩 Lower traffic density than LPPT; standard radar-controlled operation under Porto Approach.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** The east/northeast obstacle cluster (§5) is the field's one genuine terrain-adjacent missed-approach consideration — verify the published climb-gradient/turn on the current chart rather than assuming a flat-field profile.
- **Re-sequencing environment:** Lower-density field than LPPT; standard re-sequencing expected on a go-around.
- **Go-around traps:** Confirm the missed-approach track clears the charted obstacle cluster; do not assume an unobstructed climb-out on every heading.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** RWY 17 **3,180 m** (THR displaced 300 m); RWY 35 **3,330 m** (THR displaced 150 m). Neither is limiting for K Global types at typical landing weights, but both carry substantial permanent displacement from the 3,480 m physical length.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Tower on the day. 🟧
- **Runway-excursion watch:** 🟧 No specific contamination/braking-action data confirmed this pass; standard Atlantic frontal-passage wind/rain consideration applies.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing, taxi in to the assigned terminal stand per Ground/Tower assignment; VAMSYS mirror gives a planning taxi-in time of **12 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟥 **TWY A3 is not available for Code E aircraft.** Areas not visible from the Tower: first 1,500 m of RWY 17, last 1,500 m of RWY 35, right base leg RWY 35, and stands S08–S12/S30–S35 plus Apron taxiways S1/S3 — see [Briefing §13](index.md).
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — stand-by-code-letter map not fully confirmed; individual INS-checkpoint notes show critical-aircraft types up to A380 (stand S72) and B77L (stand S42).

---

## 9. Arrival frequency sequence

- **Sequence:** **Porto Approach (120.910/127.155, HO) or Porto Control/Information (120.430/127.155 · 118.855, HO) → Porto Tower (118.005/118.855, H24) → Porto Ground (121.040/118.855, broadcast by ATIS).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Porto Approach** is the facility for Porto's terminal approach; **Lisboa ACC (LPPC)** hands off en route inbound — see [Europe airspace briefing](../../../../airspace/europe.md) (no dedicated FIR brief exists in this library). 🟧

---

## 10. Gotchas

- **RWY 17's ILS is CAT II, not the commonly assumed CAT III** — verify current published category and crew/aircraft minima before relying on this field's low-vis capability.
- **RWY 35 has no confirmed ILS** — plan the DVOR/RNP approach there and verify on the current chart.
- **East/northeast obstacle cluster** — do not assume a flat-field profile on the missed approach; cross-check the obstacle/MSA chart.
- **TWY A3 is not available for Code E aircraft** on taxi-in.
- **Daily bird activity (gulls) crossing the field east–west** at dawn/dusk — maintain a heightened visual scan during those windows despite gas-cannon/scarecrow mitigation.
- **Grass-cutting operations Tue–Sat 00:00–05:00** along the runway strip, under Tower control — a routine ground-activity item to be aware of on a night arrival.
- **Hard night curfew 00:00–06:00** — a delayed arrival risks running into the curfew window.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- RWY 35 ILS ident/frequency (not found despite CAT I precision lighting being installed).
- Exact transition level (only TA 4,000 ft confirmed).
- Rapid-exit taxiway/vacate detail.
- Current stand/gate assignment for our operation on taxi-in.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. ILS category status and bird-activity NOTAMs), ATIS config/wind trend. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP Portugal (NAV Portugal eAIP), AD 2 LPPR**, valid from 14 May 2026 — https://ais.nav.pt/wp-content/uploads/AIS_Files/eAIP_Current/eAIP_Online/eAIP/html/eAIP/LP-AD-2.LPPR-en-PT.html (retrieved 2026-07-26). *STAR/IAP index, declared distances, obstacle table, communications.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Portugal (NAV); K Global fields from live VAMSYS; 4-page pack. |
