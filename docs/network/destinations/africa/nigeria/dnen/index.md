# DNEN — Akanu Ibiam · Airport Briefing

**DNEN / ENU** · Enugu, Enugu State, Nigeria · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional, tier-4-derived (AIP Nigeria AD 2 not reachable this pass)

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from public tier-4 sources (SkyVector, OurAirports, Wikipedia) cross-checked against each other — the AIP Nigeria (NCAA/NAMA) AD 2 entry for DNEN was not reachable in this research pass; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. **The runway-length figure carries an unresolved source conflict — see §7/§18, treat as safety-critical open item.** Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N6°28.42′ / E7°33.53′ (≈6.4737, 7.5588) `[SkyVector]` — OurAirports 6.4737,7.5605; Wikipedia 6.4739,7.5611 (consistent) |
| Field elevation | **466 ft** `[OurAirports/Wikipedia, matches given anchor]` — 🟧 SkyVector shows threshold elevations of 514 ft (RWY 08) / 448 ft (RWY 26), a notably different figure; see §18 |
| Mag variation | Not published / verify 🟧 — no AIP-sourced figure obtained this pass |
| Time zone | UTC+1 (WAT — no DST observed) |
| Runway(s) | **08/26** — 🟥 **length unresolved: OurAirports states 2,402 m (7,879 ft); SkyVector states 3,000 m (9,843 ft)**. A ~600 m spread is safety-critical — do not use either figure for performance planning without an AIP/current-AIRAC cross-check. See §7/§18. |
| Preferential runway | Not published / verify 🟧 |
| Longest LDA | Not separately published — do not assume either candidate runway length without AIP confirmation 🟥 |
| Approaches | **ILS (ident IEN, 108.3)** reported on field (tier-4) — serving runway end not confirmed 🟧 |
| RFF category | Not published / verify 🟧 |
| Control type | **Combined TWR/APP on a single frequency (123.30)** per tier-4 source — suggests a lower-complexity procedural environment; not independently confirmed |
| Elevation class | Highest of the four fields in this build (466–514 ft) — still **not** hot-and-high |
| Special-airport status | 🟧 **Joint civil/military aerodrome** — co-located Nigerian Air Force base (Emene) — see §5 |
| Customs / PoE | **Yes** — international airport designation; customs-tagged; Ethiopian Airlines Addis Ababa service reported (2025) as the current international route | 
| K Global category | **Not categorised in VAMSYS** 🟧 |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **DNAA (Abuja), FGSL (Malabo), FKKD (Douala)** — cross-border/unbuilt, plain-text only |
| Taxi-in / taxi-out (VAMSYS) | **Not set** 🟧 |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Rolling southeastern-Nigeria plateau terrain around Enugu; no immediately close-in high peaks identified, but elevation (466–514 ft) is the highest of the four fields in this build — confirm local terrain/obstacle picture. |
| Runway length vs fleet perf | 🟥 | **Unresolved source conflict — 2,402 m vs 3,000 m.** This is the single most important open item in this pack; do not plan against either figure without AIP/current-AIRAC confirmation. |
| Approach availability / minima | 🟧 | Reported ILS (ident IEN, 108.3) — serving runway end and category not confirmed. |
| Airspace / traffic / control | 🟧 | Kano FIR (DNKK/NAMA); co-located Nigerian Air Force base adds military-traffic/helicopter mix — see §3.2/§3.5. |
| Weather / seasonal hazard | 🟧 | ITCZ rainy-season convection (roughly Apr–Oct) and harmattan dust (Nov–Mar, more pronounced here than the coastal fields given the more interior/northerly location within the south) — see §14. |
| Curfew / slots / hours | 🟧 | AD operating hours / ATS hours not confirmed. |
| RFF category vs our types | 🟧 | Not published / verify. |
| Fuel availability | 🟧 | Not confirmed in reachable sources. |
| Customs / handling / security | 🟧 | International designation confirmed (Ethiopian Airlines service reported 2025); desk hours not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
DNEN sits at approximately 466 ft AMSL (or up to 514 ft per one source — see §18) on the rolling plateau terrain around Enugu — the highest elevation of the four fields in this build, though still far short of hot-and-high thresholds. No specific close-in high-terrain hazard was identified in reachable sources; confirm the MSA ring on the current chart.

### 3.2 Airborne conflict / traffic 🟧
Regional field under **Kano ACC (DNKK)** — see the [Kano (DNKK) FIR brief](../../../../airspace/fir/africa/kano-dnkk.md) and the [Africa airspace brief](../../../../airspace/africa.md). **DNEN is a joint-use aerodrome co-located with a Nigerian Air Force base at Emene**, reportedly hosting helicopter combat-training and communications units and an international helicopter flying school — expect a mixed civil/military and rotary/fixed-wing traffic environment, which is not typical of the other three fields in this build. Confirm current military-activity NOTAMs at planning.

### 3.3 Runway excursion 🟥
**The runway-length figure itself is unresolved between two public sources (2,402 m vs 3,000 m — see §7)** — this bears directly on excursion-risk assessment (stopway/overrun margin) and must be resolved against the AIP or a current-AIRAC chart before this field is used operationally. Do not assume either figure represents the conservative case.

### 3.4 Weather threat 🟧
Southeastern-Nigeria interior/plateau climate: **ITCZ convective/rainy season (roughly Apr–Oct)** — heavy rain, embedded/towering CB; **harmattan dust (Nov–Mar)** — likely more pronounced here than at the three coastal fields in this build, given the more interior location, though not independently quantified. See §14.

### 3.5 Operational considerations 🟧
The field closed for major renovation/expansion in **February 2010** and reopened in **December 2010**, with further construction phases completed afterward — infrastructure is post-renovation but the exact current-day configuration (including the runway-length question in §3.3) is not independently confirmed. The co-located Air Force base (§3.2) is a standing joint-use consideration distinct from the other three fields.

---

## 4. Cautions & Warnings

- 🟥 **Runway length is an unresolved, safety-critical open item (2,402 m vs 3,000 m)** — do not commit a performance plan to either figure without AIP/current-AIRAC confirmation.
- **Joint civil/military aerodrome** — co-located Nigerian Air Force base with helicopter training units; expect military/rotary traffic in the circuit and on frequency.
- **Elevation also carries a source conflict** (466 ft vs threshold-specific 514/448 ft) — immaterial to hot-and-high classification but should be resolved alongside the runway-length question.
- No confirmed navaid outage/obstacle history found — pull current NOTAMs at planning (§15).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised in reachable sources; **not categorised in VAMSYS**. The joint civil/military status (§3.2) is the standing crew-briefing item. 🟧
- **Crew-qualification gate:** None identified — standard-field assumption pending confirmation.
- **Operating restrictions / bans:** None identified in reachable sources — not confirmed as absent. Military-activity restrictions plausible given the co-located Air Force base; confirm via NOTAM. 🟧
- **Overflight / entry / permits:** Standard Nigerian domestic/international entry; DNEN holds international-airport designation with at least one confirmed international route (Ethiopian Airlines, Addis Ababa, reported 2025). 🟧
- **Operations notes:** Owner/operator — **Federal Airports Authority of Nigeria (FAAN)**; co-located Nigerian Air Force units (helicopter combat-training group, communications group, base services group, international helicopter flying school) at Emene. ANSP/ATS provider not independently confirmed (assume NAMA under Kano FIR).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify | 🟧 |
| AD operating hours | Not published / verify | 🟧 |
| Night / curfew restrictions | Not published / verify | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Not published / verify | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | International designation confirmed; hours not confirmed | 🟧 |
| Handling / FBO | Not published / verify | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 08 | 🟥 **2,402 m (OurAirports) vs 3,000 m (SkyVector)** — unresolved; width 45 m agreed | Paved (asphalt), lighted; PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | THR elevation 514 ft (SkyVector) vs field elevation 466 ft (OurAirports/Wikipedia); heading 082° |
| 26 | 🟥 **2,402 m (OurAirports) vs 3,000 m (SkyVector)** — unresolved; width 45 m agreed | Paved (asphalt), lighted; PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | THR elevation 448 ft (SkyVector); heading 262° |

*Source: OurAirports (2,402 m / 7,879 ft, retrieved 2026-07-26) vs SkyVector (3,000 m / 9,843 ft, retrieved 2026-07-26) — a ~600 m discrepancy that could not be resolved against a primary AIP source in this pass. Given DNEN's "large_airport" classification, international-route service and co-located Air Force base, the longer (3,000 m) figure is plausible, but **this must not be treated as confirmed** — verify against AIP Nigeria AD 2 or a current-AIRAC chart before any performance-critical use. No declared-distance (TORA/TODA/ASDA/LDA) table found in reachable sources.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Not published / verify | — | — | 🟧 |
| Delivery | Not published / verify | — | — | 🟧 |
| Ground | Not published / verify | — | — | 🟧 |
| Tower | Enugu Tower | 123.30 | Not published 🟧 | `[SkyVector]` |
| Approach | Enugu Approach | 123.30 | Not published 🟧 | Combined with Tower on the same frequency per SkyVector — not independently confirmed |
| Centre / FIR | Kano ACC (DNKK) | Per current AIRAC | H24 (assumed) | See [Kano (DNKK) FIR brief](../../../../airspace/fir/africa/kano-dnkk.md) |

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR | ENG (Enugu) | 115.70 | Not published 🟧 | On field (~2.6 NM) `[SkyVector]` |
| ILS | IEN | 108.3 | Not published 🟧 | Serving runway end not confirmed `[OurAirports]` |

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override.
- **Preferential runway logic:** Not published / verify. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 08/26 | Reported ILS (IEN, 108.3) — runway end unconfirmed | Not published | Not published | Verify on current AIRAC; treat as unconfirmed 🟧 |

- **STARs (names only):** Not published / verify. 🟧
- **LVP:** Not published / verify. 🟧
- **Missed approach watch-items:** No specific terrain driver identified; confirm interaction with co-located military helicopter traffic on the missed-approach path.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not published / verify. 🟧
- **RNP / climb-gradient requirements:** Not published / verify. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md). 🟧
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not published / verify. 🟧
- **ATC slot / CTOT & clearance:** No slot/CTOT regime identified for this field class.
- **De-icing:** NIL — not a factor at this near-equatorial field.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify. 🟧
- **Night noise / dB limits:** Not published / verify. 🟧
- **Engine run-up restrictions:** Not published / verify. 🟧
- **Reverse thrust / idle-reverse policy:** Not published / verify. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not published / verify. 🟧
- **Push-back:** Not published / verify. 🟧
- **Standard taxi routes:** Not published / verify — expect shared taxiway/apron infrastructure with the co-located Air Force base; confirm segregation of civil/military movement areas. 🟧
- **Hot spots / tight taxiways:** Not published / verify. 🟧
- **Follow-me:** Not published / verify. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Southeastern-Nigeria interior/plateau climate around Enugu.
- **Seasonal hazards:** **ITCZ convective/rainy season (roughly Apr–Oct)** — heavy rain, embedded/towering CB; **harmattan dust (Nov–Mar)** — likely more pronounced here than at the three coastal fields in this build given the more interior location. See the [Africa airspace brief](../../../../airspace/africa.md) §11.
- **Local effects:** None specifically identified beyond the general regional pattern.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, **military-activity restrictions (co-located Air Force base)**, conflict-zone bulletins. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Not yet defined — not categorised in VAMSYS; candidate regional destination pending network integration. 🟧
- **Nearest suitable alternates:** **DNAA** (Abuja, Nigeria), **FGSL** (Malabo, Equatorial Guinea), **FKKD** (Douala, Cameroon) `[VAMSYS mirror 2026-07-26]` — DNAA not yet built as an OM C folder pack; FGSL/FKKD are cross-border; plain-ICAO reference only. Confirm suitability, runway/RFF adequacy, overflight-permit lead-time (FGSL/FKKD) and current minima per leg.
- **Fuel-uplift notes:** Not published / verify. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** 🟥 **Do not select a type against this field's runway length until the 2,402 m vs 3,000 m conflict is resolved** — see [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md) and [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No fleet-specific consideration can be responsibly stated until the runway-length conflict (§7/§18) is resolved. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- 🟥 **PRIORITY — Runway length unresolved:** OurAirports states 2,402 m (7,879 ft); SkyVector states 3,000 m (9,843 ft) for RWY 08/26. A ~600 m spread is safety-critical. **Do not use either figure for a performance-critical decision until resolved against AIP Nigeria AD 2 or a current-AIRAC chart.**
- 🟧 **Field elevation spread:** 466 ft (OurAirports/Wikipedia, matches the given anchor) vs threshold-specific 514 ft (RWY08)/448 ft (RWY26) per SkyVector — resolve alongside the runway-length question.
- **AIP Nigeria (NCAA/NAMA) AD 2 for DNEN not reached this pass** — all other figures below are tier-4-sourced; re-verify at next update.
- **ILS ident IEN (108.3)** — serving runway end and category not confirmed.
- **Declared distances (TORA/TODA/ASDA/LDA), PCN, mag variation, ATS/AD hours, curfew, fuel, RFF category, stand count, taxi routing, hot spots, SIDs/STARs, take-off minima, NAP** — none confirmed in reachable sources.
- **Military-activity NOTAM picture** (co-located Air Force base) not pulled this pass — pull at planning.
- **VATSIM cross-check** — no VATSIM Nigeria vACC/division airport SOP found for DNEN this pass.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- SkyVector — DNEN / Enugu/Akanu Ibiam Airport — https://skyvector.com/airport/DNEN/Enugu-Akanu-Ibiam-Airport (retrieved 2026-07-26). *ARP, elevation, runway dimensions/headings, navaids, ATC frequencies.*
- OurAirports — https://ourairports.com/airports/DNEN/ and /runways.html and /frequencies.html (retrieved 2026-07-26). *Cross-check ARP/elevation/runway; ILS/VOR idents; customs tag.*
- Wikipedia — "Akanu Ibiam International Airport" — https://en.wikipedia.org/wiki/Akanu_Ibiam_International_Airport (retrieved 2026-07-26). *History (2010 closure/reopening), co-located Air Force base, ownership (FAAN), international-service (Ethiopian Airlines), passenger statistics.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Nigeria (NCAA); K Global fields from live VAMSYS; 4-page pack. Runway-length source conflict flagged as priority open item. |
