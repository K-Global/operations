# OENG — Nejran · Arrival Page

**OENG / EAM** · Najran, Najran Province, Saudi Arabia · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [OENG Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. **This field carries an active regional NOTAM-closure/security watch-item — see Briefing §2/§5.** Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | 06 or 24 — wind-driven, no published preferential rule |
| Usual approach | ILS CAT I (two variants) / VOR RWY 06; VOR (three variants) RWY 24 |
| Config logic | Wind-driven; RWY 06 favoured when the ILS is operationally desirable; asymmetric circuit design |
| Transition level | By QNH — verify current chart 🟧 |
| LVP trigger | Not confirmed this pass 🟧 |
| Missed-approach driver | Terrain-awareness (indirect signal from the multi-variant approach set) and airspace-hours transition |

---

## 2. STAR / transition selection

- **STARs (names only):** **STAR RWY 06-24** is AIP-published as a single combined chart covering both runway directions — verify current-AIRAC track/altitude detail at planning. 🟧
- **Selection by arrival direction / runway:** Not independently confirmed beyond the combined STAR chart.
- **Transition to approach:** Confirm current radar/procedural vectoring arrangement; note the field's control status changes by time of day (Tower 03:00–19:00 UTC, AFIS advisory 19:00–03:00 UTC).
- **Speed / flow constraints on the STAR:** Below 10,000 ft, AIP-published limit of 200 KT in the traffic circuit / 250 KT elsewhere.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Not independently confirmed — plan against the current chart.
- **Speed control:** 200/250 KT limits below 10,000 ft per §2; confirm any further local override on current chart.
- **Altitude constraints:** Not independently detailed this pass beyond the combined STAR chart reference — verify current AIRAC.
- **Energy traps:** Field elevation (3,983 ft, the highest in this pack) means a materially shallower-than-sea-level descent profile — factor into ToD planning, particularly on a hot day.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 06 | ILS Z or LOC (INEJ), ILS Y (INEJ), VOR | CAT I | Verify current chart — two distinct ILS chart variants |
| 24 | VOR Z, VOR X, VOR Y | No precision approach | Verify current chart — three distinct VOR chart variants |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟧 No AIP obstacle-table entries returned this pass, but the **unusually rich multi-variant approach set on both runways** (two ILS variants RWY 06, three VOR variants RWY 24) is a strong indirect signal of terrain-constrained procedure design typical of Saudi highland-border fields — cross-ref [Briefing §3.1](index.md). Verify current MSA/area chart before use.
- **Specific threats:** RWY 24's complete absence of a precision approach is the main runway-selection threat in marginal weather. The field's control-service transition (Tower vs AFIS) by time of day is a secondary situational-awareness item.
- **Airspace / traffic:** Class D CTR (SFC–8,500 ft, 03:00–19:00 UTC only) reverting to Class G/ATZ outside those hours — cross-ref [Briefing §3.2](index.md) for the field's overriding regional security/closure consideration.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not independently detailed this pass — the multi-variant approach design suggests terrain-driven missed-approach routing on at least some procedures; verify current chart.
- **Re-sequencing environment:** Single-runway field; a missed approach re-enters the same arrival stream, under Tower or AFIS advisory depending on time of day.
- **Go-around traps:** None specifically identified beyond the general terrain-awareness note.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 3,050 m both directions (no displaced threshold) — cross-ref [Briefing §7](index.md).
- **Braking / vacate:** No rapid-exit taxiway data published; standard vacate via TWY A/B/C/D. Note both runway ends carry a stopway published as "other surface" rather than asphalt.
- **Runway-excursion watch:** No tailwind-tendency pattern identified this pass; the −0.34%/+0.34% longitudinal grade (steeper than most fields in this pack) is a minor factor. 🟧

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Via TWY A/B/C/D to Apron 1 or Apron 2; confirm with Ground on the day.
- **Hot spots / tight taxiways:** None flagged in reachable AIP data — cross-ref [Briefing §13](index.md). 🟩
- **Stand/gate notes:** No K Global stand assignment (not in VAMSYS) — cross-ref [Dispatch §3](dispatch.md).

---

## 9. Arrival frequency sequence

- **Sequence:** Tower/AFIS (118.500, service level depends on time of day) → Ground (121.900) — reference [Briefing §8](index.md).
- **Approach/Departure control:** No dedicated separate Approach frequency published beyond the combined Tower/AFIS facility — confirm current arrangement on the day. 🟧

---

## 10. Gotchas

- 🟥 **Confirm whether Tower or AFIS-only service applies** at the planned arrival time (03:00–19:00 UTC = Tower/Class D; outside = AFIS/Class G) — a genuine change in the traffic-management environment, not a formality.
- 🟧 **RWY 24 has no precision approach** — plan for VOR minima if RWY 24 is in use, and note three distinct chart variants exist for that runway.
- 🟧 **Field elevation (3,983 ft, the highest in this pack)** materially shifts standard sea-level ToD/energy assumptions — brief accordingly, especially on a hot day.
- 🟥 **Field carries an active regional NOTAM-closure/security watch-item and an AIP-acknowledged undefined southern border** — confirm current status before planning any arrival at this field (Briefing §2/§5).

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- **Field closure/security status** — highest-priority item; re-confirm live.
- STAR RWY 06-24 exact track/altitude detail, LVP trigger, transition level, top-of-descent guidance, rapid-exit taxiway data — none confirmed from a primary chart this pass.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config, ground-delay/flow status, and the field's current open/closed status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **SANS/GACA eAIP Kingdom of Saudi Arabia, AD 2 OENG — Nejran**, AIRAC AMDT cycle retrieved (2026-01-23 amendment series) — https://aimss.sans.com.sa/assets/FileManagerFiles/AIP%20AMDT%2009_26_2026_01_23/eAIP/AD%202%20OENG%20NEJRAN-en-GB.html (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SANS/GACA AIP (GACA); K Global fields not in VAMSYS (flagged); 4-page pack. |
