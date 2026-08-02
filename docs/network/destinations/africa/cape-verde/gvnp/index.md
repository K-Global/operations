# GVNP — Nelson Mandela International (Praia) · Airport Briefing

**GVNP / RAI** · Praia, Santiago Island, República de Cabo Verde — mid-Atlantic · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — tier-4-verified (ASA/AAC eAIP not reachable this session; cross-checked OurAirports/SkyVector/Wikipedia)

> **Read-me:** Planning aid for the sim, not a chart. GVNP is Cape Verde's **capital-city airport**, on the more mountainous **Santiago Island** (contrast with the low, flat Sal profile at [GVAC](../gvac/index.md)) — a **single-runway** field serving both scheduled international traffic and the K Global network as a regional station/alternate. The primary state AIP (ASA eAIP, GV-AD-2.GVNP) was **not machine-reachable this session** — every figure below is corroborated from public tier-4 sources (OurAirports, SkyVector, Wikipedia) and flagged accordingly; re-verify against the AIP/current AIRAC before operational use. Approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | **N14°56.47′ / W023°29.08′** (14.9412, −23.4847) `[SkyVector]`; OurAirports gives 14.941126, −23.484728 — consistent 🟩 |
| Field elevation | **230 ft / 70 m AMSL** `[OurAirports]` 🟧 — cross-check conflict: SkyVector lists threshold elevations **310 ft (RWY 03) / 325 ft (RWY 21)**, and this file's prior Navigraph-derived stub carried **326 ft**. The ~90–100 ft spread mirrors the geoid-undulation datum offset documented at GVAC (Briefing §7) — **treat 230 ft as provisional pending AIP/current-AIRAC confirmation**, not a resolved conflict. |
| Mag variation | **Not published / verify** 🟧 — no AIP or reachable tier-4 source gives a dated declination figure for GVNP this session |
| Time zone | **UTC −1** (Cape Verde, no DST) — same as GVAC |
| Runway(s) | **03/21 — single runway, 2,100 m × 45 m** (6,890 ft × 148 ft), asphalt `[OurAirports/SkyVector, cross-checked]` |
| Preferential runway | **None published** 🟧 — wind-driven; verify at planning |
| Longest LDA | **~2,100 m on RWY 21** (no displacement reported); **~1,900 m on RWY 03** (2,100 m less the ~200 m displaced threshold) — 🟧 derived, not a sourced declared-distance table |
| Approaches | **No ILS found in reachable sources** 🟧 — expect RNAV (GNSS) / VOR / NDB non-precision procedures only; verify current AIRAC inventory |
| RFF category | **Not published / verify** 🟧 |
| Control type | **Not confirmed** 🟧 — Approach and Tower share a single published frequency (118.20), consistent with a lower-density combined/procedural position; do not assume radar without AIP confirmation |
| Elevation class | Near sea-level — **not** hot-and-high for the field itself; see §3.1 for the island's inland terrain, which is a genuine factor GVAC does not have |
| Special-airport status | **None found** 🟧 — no Cat B/C or crew-qualification designation located in reachable sources |
| Customs / PoE | **Yes** — international airport (Wikipedia: scheduled European/regional international service); hours not confirmed 🟧 |
| K Global aerodrome category | **S** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No — station / alternate** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **GVAC, GVSV** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **5 min / 7 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Field itself sits on a low coastal plain (~230–325 ft by source), but **Santiago Island rises to ~1,394 m (Pico da Antónia) inland** — a real terrain picture GVAC (flat Sal) does not have. No sourced MSA/obstacle table this session — see §3.1. |
| Runway length vs fleet perf | 🟧 | **2,100 m single runway** — non-limiting for K Global narrowbody/regional types; **would be limiting or marginal for a widebody diversion at heavy weight** — a real capability contrast with GVAC's 3,000 m. Confirm against type performance before planning any widebody use. |
| Approach availability / minima | 🟧 | **No ILS found** — non-precision approaches only (RNAV/VOR/NDB), unconfirmed inventory. A materially different, lower-capability picture than GVAC's ILS CAT I. |
| Airspace / traffic / control | 🟧 | Single published APP/TWR frequency (118.20) suggests a modest-density, possibly non-radar position; also sits under the same **Sal Oceanic (GVSC)** FIR as GVAC. Confirm control type at planning. |
| Weather / seasonal hazard | 🟧 | Same archipelago climate signature as GVAC expected — **NE trade wind** and **harmattan dust (Dec–Feb)** — not independently re-sourced for Praia specifically this session; treat as a reasonable regional-reuse assumption per `_Instructions §2.5`, flagged for field-specific confirmation. |
| Curfew / slots / hours | 🟧 | ATS/AD operating hours not confirmed; no slot-coordination status found (contrast with GVAC's IATA Level 3). |
| RFF category vs our types | 🟧 | Not published — verify before planning any widebody movement. |
| Fuel availability | 🟧 | Not confirmed in reachable sources; assumed available given international-airport status. |
| Customs / handling / security | 🟧 | International PoE status confirmed (capital-city international airport); exact desk hours and handling agent not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain  🟧
This is the field's principal **contrast with GVAC**: Sal is a low, flat island; **Santiago Island is genuinely mountainous**, rising to **Pico da Antónia (~1,394 m / ~4,573 ft)** and the **Serra Malagueta** range in the island's interior. GVNP itself sits on the flatter southeastern coastal plain near Praia, so the immediate runway environment is not high terrain — but any arrival/departure routing that swings toward the island's interior (north/northwest) must respect materially higher terrain than anything in the GVAC picture. **No sourced MSA sectors, obstacle list, or terrain chart were available in reachable sources this session** — treat this as an open item (§18) rather than assume a Sal-like benign profile. Verify MSA and terrain clearance on the current AIRAC chart before planning any non-standard arrival/departure.

### 3.2 Airborne conflict / traffic  🟧
Reachable sources show a **single shared frequency (118.20) for both Approach and Tower**, which points to a modest-density, possibly procedural (non-radar) control environment — a lower-capability picture than GVAC's radar-equipped Sal Approach. GVNP sits under the same **Sal Oceanic (GVSC)** FIR (ASA, Cabo Verde) as GVAC — see the [Africa](../../../../airspace/africa.md) regional airspace brief for continental context and the [EUR/SAM Corridor](../../../../airspace/eur-sam-corridor.md) brief for the Sal Oceanic FIR's specific role in the trans-Atlantic corridor. Confirm the current control type and traffic density at planning.

### 3.3 Runway excursion  🟧
**Single runway, 2,100 m × 45 m, asphalt**, with a **displaced threshold on RWY 03** (~200 m / 650–656 ft per OurAirports/SkyVector). No PCN, slope, or RESA figures were found in reachable sources — a genuine gap versus GVAC's fully-sourced runway data. **No published stopway or clearway** was found either; declared distances in §7 are derived from the raw runway length and displacement, not a sourced declared-distance table — verify against the AIP before relying on them for a heavy-weight or contaminated-runway calculation.

### 3.4 Weather threat  🟧
Not independently re-sourced for Praia this session. By archipelago-wide regional reuse (`_Instructions §2.5`) the same two signatures documented at GVAC are a reasonable planning assumption pending field-specific confirmation: the steady **NE trade wind** (crosswind potential on a 03/21-aligned single runway) and **harmattan Saharan dust (roughly Dec–Feb)** reducing visibility region-wide. Santiago's more varied terrain may also introduce local orographic effects (windward/leeward differences, funnelling) that flatter Sal does not experience — flagged as an open item, not assumed.

### 3.5 Operational considerations  🟧
GVNP's role for K Global is as a **regional station and mutual alternate with GVAC and GVSV** (VAMSYS), not an ETOPS ETP alternate in its own right (that role belongs to GVAC/SBFZ on the EDDF–SBGR crossing — see the [GVAC Briefing](../gvac/index.md)). The **shorter single runway (2,100 m vs GVAC's 3,000 m), no confirmed ILS, and no confirmed RFF category** make GVNP a materially lower-capability field than GVAC — plan accordingly, especially for any widebody diversion consideration. Its **K Global category S** (vs GVAC's **R**) is consistent with this narrower-body-oriented picture.

---

## 4. Cautions & Warnings

- 🟧 **No ILS confirmed** — plan for non-precision approaches only until the current AIRAC inventory is verified.
- 🟧 **Santiago Island has real inland terrain (~1,394 m)** — do not assume the flat, benign CFIT picture from GVAC; verify MSA/terrain clearance on the current chart, especially for any non-standard routing toward the island interior.
- 🟧 **RWY 03 has a displaced threshold** (~200 m) — mind the reduced LDA on that end; RWY 21 is unaffected per reachable sources.
- 🟧 **RFF category, PCN and mag variation are all unconfirmed** — do not plan a widebody or heavy-weight movement here without first verifying these against the AIP or current AIRAC.
- 🟧 **Single shared APP/TWR frequency (118.20)** suggests a lower-density, possibly non-radar environment — brief accordingly until control type is confirmed.
- 🟧 **Primary AIP (ASA/AAC eAIP) was not reachable this session** — this entire brief carries a higher-than-usual proportion of tier-4-only figures; treat as provisional and prioritise re-verification before any operational reliance.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / crew-qualification designation: NONE FOUND** 🟧 — no reachable source designates GVNP a Cat B/C or crew-qualification field; treat as "none published" pending AIP confirmation.
- **Slots:** No slot-coordination status found (contrast with GVAC's IATA Level 3) 🟧.
- **Operating restrictions / bans:** None found in reachable sources. 🟧
- **Overflight / entry / permits:** State overflight/landing permits per Cabo Verde apply as at GVAC; confirm on OFP. 🟧
- **Operations notes:** Airport operated under a **Vinci Airports / Cabo Verde Airports S.A. concession** since July 2023 (40-year concession across seven Cabo Verde airports, alongside ANA-Aeroportos de Portugal holding 30%) `[Wikipedia, retrieved 2026-07-26]` — the same operator group as GVAC.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | **Not published / verify** 🟧 |
| AD operating hours | **Not published / verify** 🟧 |
| Night / curfew restrictions | Not found in reachable sources | 🟧 |
| RFF category | **Not published / verify** | 🟧 |
| Fuel | Not confirmed; assumed available given international-airport/scheduled-service status | 🟧 |
| PCN | **Not published / verify** | 🟧 |
| Customs | International PoE confirmed (capital-city airport with scheduled international service); exact hours not confirmed | 🟧 |
| Handling / FBO | Not identified in reachable sources | 🟧 |

*De-icing: not applicable (tropical field, consistent with GVAC).*

---

## 7. Runways & declared distances

**Physical (OurAirports / SkyVector, cross-checked):** single runway **03/21, 2,100 m × 45 m** (6,890 ft × 148 ft), asphalt, hard surface. Runway heading **033°/213°** magnetic. RWY 03 threshold coordinates N14°56.04′/W23°29.26′ (elev. 310 ft per SkyVector); RWY 21 threshold N14°56.99′/W23°28.86′ (elev. 325 ft per SkyVector). **Displaced threshold on RWY 03: ~200 m** (650 ft OurAirports / 656 ft SkyVector — minor rounding difference between sources, not a genuine conflict).

**Derived declared distances (🟧 not a sourced declared-distance table — verify against AIP):**

| RWY | TORA | TODA | ASDA | LDA | Notes |
|---|---:|---:|---:|---:|---|
| **03** | ~2,100 m | ~2,100 m | ~2,100 m | **~1,900 m** | Displaced threshold ~200 m reduces LDA; no clearway/stopway sourced — TORA/TODA/ASDA assumed equal to full length pending AIP confirmation 🟧 |
| **21** | ~2,100 m | ~2,100 m | ~2,100 m | **~2,100 m** | No displacement reported on this end 🟧 |

*No PCN, slope, RESA, or strip-dimension figures were found in reachable sources — a genuine gap versus the GVAC brief. Verify all of §7 against the primary AIP before any performance-limiting calculation.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| Approach | **PRAIA APPROACH** | **118.200** | Not confirmed 🟧 | Shares the Tower frequency — see §3.2 |
| Tower | **PRAIA TOWER** | **118.200** | Not confirmed 🟧 | Same frequency as Approach `[OurAirports/SkyVector]` |
| Emergency | — | **121.500** | — | `[SkyVector]` |
| Delivery / Ground | — | **Not published** 🟧 | — | No discrete frequency found |
| Centre / FIR | **Sal Control** | Per GVAC Briefing §8 (126.400 TMA / 128.300 North / 127.100 South) 🟧 | H24 (GVAC-sourced, not independently re-confirmed for Praia) | **Sal Oceanic (GVSC)** — the FIR covering all of Cabo Verde airspace, including Praia |

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| **VOR/DME** | **SNT** ("Praia") | **116.600** | Not confirmed 🟧 | On/near field (SkyVector: radial 317°/0.2 nm from the ARP) |
| **NDB** | **PRA** ("Praia") | **349 kHz** | Not confirmed 🟧 | Near field (SkyVector: radial 202°/1.0 nm from the ARP) |
| **VOR/DME (Sal, cross-ref)** | **CVS** | 115.300 | H24 | GVAC's on-field VOR, ~112 nm bearing 205° from Praia (SkyVector) — a long-range cross-check aid, not a Praia approach navaid |

**🟧 No ILS was found for either runway end in reachable sources.** Approaches are expected to be non-precision (RNAV GNSS / VOR / NDB) — verify the current-AIRAC inventory before planning; this is an open item (§18), not a confirmed absence.

---

## 10. Arrival

- **Transition altitude / level:** Not published in reachable sources 🟧 — verify current chart.
- **Speed:** Not published; apply standard ICAO 250 KIAS below FL100 as a planning default. 🟧
- **Preferential runway logic:** **None published** 🟧 — wind-driven by default assumption; the runway is 033°/213°, so a standing NE-trade-wind crosswind component is plausible on either end (by regional analogy with GVAC), but not independently confirmed for Praia.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 03 | **Not confirmed** 🟧 | No ILS found; expect RNAV (GNSS)/VOR/NDB non-precision — verify current AIRAC |
| 21 | **Not confirmed** 🟧 | Same — verify current AIRAC |

- **STARs (names only):** Not found in reachable sources — verify current AIRAC inventory. 🟧
- **LVP:** Not published 🟧 — by regional analogy with GVAC, harmattan dust (Dec–Feb) is a plausible low-vis driver; not independently confirmed for Praia.
- **Missed approach watch-items:** 🟧 Given Santiago Island's inland terrain (§3.1), a missed approach that drifts toward the interior needs terrain awareness that a Sal missed approach does not — verify climb-gradient and terrain clearance on the current chart before relying on this brief.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not found in reachable sources — verify current AIRAC. 🟧
- **RNP / climb-gradient requirements:** Not published 🟧 — verify on the plate, particularly given the island's interior terrain.
- **Take-off minima:** Not published 🟧.
- **Start-up / push-back:** Not published; expect marshaller/ATC-guided procedure typical of a modest-density single-runway field. 🟧
- **ATC slot / CTOT & clearance:** No slot-coordination regime found (contrast with GVAC's Level 3). 🟧
- **De-icing:** Not applicable (tropical field).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published 🟧.
- **Night noise / dB limits:** Not published.
- **Engine run-up restrictions:** Not published.
- **Reverse thrust / idle-reverse policy:** Not published.

*As Cape Verde's capital-city airport (unlike isolated-island GVAC), a residential noise-sensitivity regime is plausible — flagged as unconfirmed rather than assumed NIL.*

---

## 13. Ground operations

- **Stands for our types:** Not itemised in reachable sources 🟧 — no stand-suitability matrix, no code-letter data.
- **Push-back:** Not published; assume marshaller-guided as standard practice. 🟧
- **Standard taxi routes:** Not published. 🟧
- **Hot spots / tight taxiways:** Not published. 🟧
- **Follow-me:** Not published. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Not independently re-sourced for Praia this session; by regional reuse, expect the same archipelago-wide **NE trade wind** signature documented at GVAC, subject to field-specific confirmation. 🟧
- **Seasonal hazards:** By regional reuse: **harmattan dust (roughly Dec–Feb)** and Cape Verde's **Atlantic hurricane-genesis season (Aug–Oct)**, as at GVAC — not independently re-confirmed for Praia. 🟧 Santiago's more varied terrain may add local orographic effects not present at flat Sal.
- **Local effects:** Not published; potential windward/leeward terrain effects given the island's interior relief (§3.1) — an open item, not sourced.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, dust/harmattan advisories, TC bulletins in season. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. For this field specifically check: runway/taxiway closures, navaid U/S (especially given the unconfirmed approach inventory), RFF category (unconfirmed baseline), lighting, and any dust-related visibility restrictions. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Regional K Global station / mutual alternate** with GVAC and GVSV `[VAMSYS mirror 2026-07-26]` — not an ETOPS ETP alternate in its own right (that role sits with GVAC/SBFZ; see the [GVAC Briefing §16](../gvac/index.md)).
- **Nearest suitable alternates (VAMSYS):** **GVAC** Sal (~112 nm N, per SkyVector bearing/range) and **GVSV** São Vicente (~145 nm NW, per SkyVector bearing/range) `[VAMSYS mirror 2026-07-26]`. Cross-reference: SkyVector also lists **GVBA** Rabil/Boa Vista (~79 nm NE) as the nearest field with instrument procedures, though it is not in the VAMSYS preferred-alternate set for GVNP.
- **Fuel-uplift notes:** Not confirmed in reachable sources; assumed available given scheduled international service. 🟧
- **Range/perf flags for our fleet:** **2,100 m single runway, no confirmed RFF or PCN** — treat as **more limiting than GVAC** for any widebody consideration; confirm type performance and RFF/PCN before planning a heavy-weight movement. See [`OM B Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No K Global type has a confirmed field-length or RFF constraint documented here — the **RFF category and PCN gaps (§6/§7) must be closed before planning any widebody movement** into GVNP; narrowbody/regional types are not expected to be field-length-limited at 2,100 m (non-precision approach capability notwithstanding). Link: [`OM B Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary AIP (ASA/AAC eAIP, GV-AD-2.GVNP) was not reachable this session** — the majority of this brief rests on tier-4 corroboration; re-verify all safety-critical figures before operational reliance.
- **Field elevation conflict:** 230 ft (OurAirports) vs 310/325 ft thresholds (SkyVector) vs 326 ft (prior Navigraph-derived stub) — unresolved, ~90–100 ft spread.
- **No confirmed ILS, RFF category, PCN, mag variation, ATS/AD hours, slot regime, stand data, taxi routes, or SID/STAR inventory.**
- **Terrain/MSA/obstacle data for Santiago Island's interior** — a genuine TEM gap; the island is materially more mountainous than Sal and this brief could not source a terrain chart or MSA table this session.
- **Control type (radar vs procedural)** inferred only from the shared APP/TWR frequency — not AIP-confirmed.
- **Seasonal weather (§14)** carried over from GVAC by regional reuse, not independently re-sourced for Praia.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **ASA eAIP portal** — https://eaip.asa.cv/ — the GV-AD-2.GVNP page was not machine-reachable this session (as previously noted for GVAC's 2024-04-18 cycle); re-confirm all durable figures there or on current AIRAC at planning. 🟧
- **OurAirports** — https://ourairports.com/airports/GVNP/ and https://ourairports.com/airports/GVNP/runways.html, https://ourairports.com/airports/GVNP/frequencies.html (retrieved 2026-07-26). *ARP, elevation, runway dimensions/displacement, frequencies.*
- **SkyVector** — https://skyvector.com/airport/GVNP (retrieved 2026-07-26). *ARP, threshold elevations/coordinates, runway heading, frequencies, navaids, nearby-airport bearings/ranges.*
- **Wikipedia — "Nelson Mandela International Airport"** — https://en.wikipedia.org/wiki/Nelson_Mandela_International_Airport (retrieved 2026-07-26). *History, opening date, renaming, Vinci Airports concession, international-service confirmation.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Cape Verde; K Global fields from live VAMSYS; 4-page pack. |
