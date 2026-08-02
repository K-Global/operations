# KRNO — Reno-Tahoe International · Arrival Page

**KRNO / RNO** · Reno, Nevada, United States · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — LVP trigger conditions and current ILS 35L DME/FMG TACAN NOTAM status unverified/perishable.

> **Read-me:** Tactical arrival aid for X-Plane 11, not a chart. Companion to the [KRNO Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **17R/35L** (longest, ILS + MALSR) preferred when wind allows; no formal preferential-runway program published |
| Usual approach | ILS X/Y/Z OR LOC RWY 17R (I-RNO 110.90) or ILS OR LOC RWY 35L (I-AGY 109.90, **DME reported U/S per OFP NOTAM**) |
| Config logic | Wind-driven; no published preferential logic |
| Transition level | FL180 (US-wide standard) |
| LVP trigger | Not published in sources checked — verify current chart 🟧 |
| Missed-approach driver | **Terrain** — close-in high ground on most quadrants (not airspace density) |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** ANAHO TWO, DNGLE ONE (RNAV), EELZA FOUR (RNAV), KLUBS ONE (RNAV), ORRCA ONE (RNAV), RYANN TWO, SCOLA ONE (RNAV), TARVR TWO (RNAV), WADOL FOUR (RNAV), WINRZ ONE (RNAV).
- **Selection by arrival direction / runway:** Not detailed by direction in reachable sources — NORCAL assigns the STAR-to-approach transition for the active runway.
- **Transition to approach:** Expect an RNAV-STAR-to-ILS/RNAV transition with radar vectors onto the 17R or 35L final in the primary configuration; verify the charted transition.
- **Speed / flow constraints on the STAR:** 250 KIAS below FL100 (US standard); published STAR speed/altitude gates are pointers only — verify current chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard ~3:1 baseline; the terrain-ringed MSA environment (§5) means a **conservative, early TOD is preferable to a late high-energy descent** into the Truckee Meadows bowl.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes; do not descend below MSA early given the surrounding high ground.
- **Energy traps:** Late runway change between 17R/35L and the shorter 17L/35R or 08/26 crosswind runway would materially change the landing-distance/density-altitude picture — confirm runway assignment early, not on short final.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 35L | ILS OR LOC RWY 35L | CAT I (MALSR), LOC I-AGY 109.90. **DME reported U/S per OFP NOTAM** 🟥 | verify current chart |
| 35L | RNAV (RNP) W/Z RWY 35L | RNP AR — confirm authorisation 🟧 | verify current chart |
| 35L | RNAV (GPS) X/Y RWY 35L | | verify current chart |
| 17R | ILS X/Y/Z OR LOC RWY 17R | CAT I (MALSR), LOC I-RNO 110.90 🟩 | verify current chart |
| 17R | RNAV (RNP) Y/Z RWY 17R | RNP AR — confirm authorisation 🟧 | verify current chart |
| 17R | RNAV (GPS) X RWY 17R / LOC Y RWY 17R | | verify current chart |
| 17L | RNAV (RNP) Y/Z RWY 17L | RNP AR — confirm authorisation 🟧 | verify current chart |
| 17L | RNAV (GPS) X RWY 17L | No ILS this end | verify current chart |
| 35R | RNAV (RNP) W/Z RWY 35R | RNP AR — confirm authorisation 🟧 | verify current chart |
| 35R | RNAV (GPS) X/Y RWY 35R | No ILS this end | verify current chart |
| — | VOR-D / TACAN-F | TACAN — **FMG AZM reported U/S per OFP NOTAM** 🟥 | Area-type — verify serving runway(s) |
| 08/26 | None published in sources checked | Crosswind/shorter runway | verify current AIRAC |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟥 **Peavine Peak (8,269 ft) ~9 NM WNW; Mount Rose (10,785 ft) ~12 NM SSW; broader Sierra Nevada crest further west; charted obstacle 243 ft AGL, 8,050 ft from RWY 35L threshold, 1,500 ft right of centreline (37:1 ratio to the displaced threshold)** — a close-in penetrator on the main precision runway. Read the MSA ring/obstacle table on the current chart; do not descend below MSA or a charted step-down early. Cross-ref Briefing §3.1 and [High-Elevation Aerodrome Operations](../../../../../flight-ops/high-elevation-aerodrome-operations.md) (OM E).
- **Specific threats:** RNAV (RNP) W/Y/Z approaches are FAA **RNP AR** procedures — do not plan to fly these unless fleet/crew RNP AR authorisation is confirmed; plan around ILS/LOC or RNAV (GPS) otherwise. **ILS RWY 35L DME and FMG TACAN AZM are both reported U/S per the OFP NOTAM** at time of this build — confirm current status before relying on either.
- **Airspace / traffic:** Radar Class C (NORCAL Approach); FAA remarks flag **intensive glider/soaring activity up to 18,000 ft** in the vicinity and **30–50 NM south during mountain-wave conditions** — an unusual VFR conflict layer for a Class C field, particularly on strong-wind days.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** This is the primary missed-approach driver at KRNO (not traffic/airspace) — brief the published missed-approach track and climb gradient before every approach; do not assume a shallow standard climb clears terrain given the close-in high ground on most quadrants.
- **Re-sequencing environment:** Radar Class C with NORCAL — re-sequencing after a miss is airspace-routine, but the terrain-driven climb-out remains the primary crew workload item.
- **Go-around traps:** Mountain-wave turbulence and strong gusty winds (Briefing §3.4) can complicate a go-around; hot-and-high density altitude reduces the achievable climb gradient on the miss — factor this into the go-around performance assumption, not just the approach.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway (mind displaced thresholds — Briefing §7):** 17R **10,001 ft** (1,000 ft displaced thr), 35L **10,011 ft** (990 ft displaced thr), 17L/35R **9,000 ft** (no displaced threshold), 08 **5,854 ft**, 26 **6,102 ft**.
- **Braking / vacate:** No rapid-exit/high-speed-turnoff detail published for KRNO — plan a standard vacate and confirm with Ground.
- **Runway-excursion watch:** 🟧 Hot-and-high density altitude raises true groundspeed at touchdown for a given IAS, **extending the effective landing roll versus a sea-level field** — factor this into landing-distance assessments, especially on the shorter 17L/35R (9,000 ft) and 08/26 (6,102 ft). Waterfowl hazard flagged "all quadrants, all seasons," concentrated NW of RWY 17R and east of RWY 17L.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not detailed in reachable sources; **VAMSYS taxi-in time is 8 min** (Dispatch §1) — confirm actual routing with Ground on the day.
- **Hot spots / tight taxiways:** 🟥 **Twy C between Twy L and Twy D — closed to air carrier aircraft / restricted to ≤100,000 lb. Twy A between north Twy B and Twy D — closed to wingspan >149 ft. Twy M and Twy J (east of RWY 17L/35R) — closed to air carrier aircraft.** Cross-ref Briefing §13 and [Departure](departure.md) §2.
- **Stand/gate notes:** Stand/apron assignment not published — cross-ref [Dispatch](dispatch.md) §3.

---

## 9. Arrival frequency sequence

- **Sequence:** **NORCAL Approach 119.2 (radials 036–225 / RWY 17L,17R) or 126.3 (radials 226–035 / RWY 26,35L,35R) / 279.55 / 353.9 → Reno Tower 118.7/257.8 → Reno Ground 121.9/348.6.** (Frequencies from Briefing §8; take the assigned frequency and confirm current chart.)
- **Approach/Departure control:** NORCAL TRACON; sector/radial split as above — verify current chart. Oakland ARTCC overlying en route. 🟧

---

## 10. Gotchas

- **Terrain is the defining missed-approach hazard here, not traffic** — brief the MAP climb gradient every time, regardless of how routine the approach looks on radar.
- **ILS RWY 35L DME and FMG TACAN AZM both carry OFP NOTAM U/S status** at time of writing — confirm current status; do not assume full precision-navaid availability.
- **RNP AR-only approaches (RNAV RNP W/Y/Z) are not usable without confirmed authorisation** — default to ILS/LOC or RNAV (GPS) unless authorisation is verified.
- **Glider/soaring traffic to 18,000 ft and 30–50 NM south** on wave-condition days — an unusual VFR layer for a Class C arrival.
- **Hot-and-high extends the landing roll versus a sea-level field** — do not use a generic sea-level landing-distance assumption, especially on the shorter runways.
- **Waterfowl concentrated NW of 17R and east of 17L** — factor into the approach/rollout scan.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- LVP trigger conditions — not published in sources checked.
- Current ILS RWY 35L DME and FMG TACAN AZM NOTAM status — perishable, re-check at planning (Briefing §15).
- Circling approach minima/NA status per runway end.
- Rapid-exit/high-speed-turnoff taxiway detail and standard taxi-in routing.
- RNP AR fleet/crew authorisation status — internal policy decision, not a public-source item.

> **Live data — pull at planning:** wx/METAR/TAF/TREND (esp. mountain-wave/turbulence AIRMETs), NOTAM (ILS 35L DME, FMG TACAN AZM, runway/taxiway/navaid/lighting), ATIS config. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- FAA Chart Supplement / d-TPP data for KRNO, AIRAC cycle 2607, eff. 2026-07-09 — as mirrored by SkyVector — https://skyvector.com/airport/RNO/Reno-Tahoe-International-Airport (retrieved 2026-07-25). *STAR/IAP index, runway/declared-distance data — also underlies the [KRNO Briefing](index.md) §7/§9/§10.*
- **FAA IAP charts (d-TPP cycle 2606), aeronav.faa.gov** — ILS RWY 35L and 17R component idents/frequencies (retrieved 2026-07-25) — see Briefing §9 for full citation.
- AirNav — KRNO — https://www.airnav.com/airport/KRNO (retrieved 2026-07-25). *Communications frequencies.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from FAA sources + Briefing; folded to 4-page pack. Terrain/CFIT emphasis carried forward as the defining arrival/missed-approach hazard; RNP AR and NOTAM-U/S navaid cautions cross-referenced. LVP triggers and current NOTAM status remain open/perishable. |
