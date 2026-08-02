# LICC — Fontanarossa · Airport Briefing

**LICC / CTA** · Catania, Sicily, Italy · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from public airport-data cross-references (Wikipedia, OurAirports, OpenNav chart index) and current news reporting on operational events; the ENAV eAIP (AIP Italia) proper is login-gated and was not directly reachable this pass — figures below are the best publicly reachable cross-check and are flagged 🟧 where not primary-AIP-confirmed. Approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs/ASHTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 37°28′00″N / 15°04′00″E (37.4668, 15.0664) `[OurAirports]` — 2.3 NM SW of Catania city |
| Field elevation | **39 ft / 12 m AMSL** `[OurAirports]` |
| Mag variation | 🟧 Not confirmed from a primary table this pass — verify current AIRAC |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **08/26** — single runway, ~2,436 m × 45 m (7,992 × 148 ft), asphalt; both ends carry a **displaced threshold** (RWY 08 ~96 m / RWY 26 ~86 m) `[tier-4, corroborated]` 🟧 |
| Preferential runway | 🟧 Not confirmed — verify wind/ATC criteria on current AIP |
| Longest LDA | 🟧 Not confirmed to metre precision this pass — reduced from full runway length by the displaced thresholds on both ends |
| Approaches | **ILS reported on RWY 08 only** (two chart variants indexed, "ILS-Y" and "ILS-Z"); **RWY 26 has non-precision approaches only** (VOR/NDB variants) per the public chart index — a real runway-direction asymmetry, verify current AIRAC 🟧 |
| RFF category | 🟧 Not confirmed in reachable public sources — verify |
| Control type | **Radar** — Catania Approach/Director; en route under **Roma FIR (LIRR)**, southern-sector operations delegated to **Brindisi ACC (LIBB)** — no Italy-specific FIR brief exists in this library; see [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) 🟧 (scope gap — that brief covers DE/FR/ES/PT, not Italy; flagged §18) |
| Elevation class | Sea-level (39 ft) — **not** hot-and-high; the field's defining hazards are **Mount Etna volcanic-ash exposure** and shared airspace with a nearby NATO air base, not density altitude |
| Special-airport status | 🟥 **Active-volcano proximity** — Mount Etna (current summit ≈3,400 m / ~11,165 ft, height varies with eruptive activity) stands roughly **17–20 NM NNW/N** of the field and is a **recurrently erupting stratovolcano** whose ash plumes have repeatedly closed this airport, most recently as of this build cycle (§3.4, §15). Brief every crew on volcanic-ash awareness before operating here. |
| Customs / PoE | **Yes** — international sections across Terminals A/B/C; exact desk hours not confirmed 🟧 |
| K Global category | **S** `[VAMSYS mirror 2026-07-26]` 🟩 |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **LICJ, LIRF, LIRN** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **10 min / 12 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Sea-level field; no close-in high terrain immediately at the airport itself, but **Mount Etna (~3,400 m)** dominates the region ~17–20 NM NNW/N and the Iblei hills lie to the south — regional terrain awareness matters even though the immediate approach environment is not terrain-constrained like a mountain strip. |
| Runway length vs fleet perf | 🟧 | Single runway ~2,436 m; displaced thresholds both ends reduce usable landing distance somewhat. Non-limiting for narrowbody types at typical weights; confirm current declared distances for any widebody/long-haul use. |
| Approach availability / minima | 🟥 | **RWY 26 has no precision (ILS) approach in the public chart index** — only VOR/NDB non-precision procedures. RWY 08 carries the field's only ILS. This is a real operational asymmetry — a RWY 26-in-use, low-visibility scenario has materially worse approach minima than RWY 08. |
| Airspace / traffic / control | 🟧 | Shares regional airspace with **NAS Sigonella** (~10 NM, Italian/US Navy air station) — military traffic interaction is a standing local-area consideration. |
| Weather / seasonal hazard | 🟥 | **Mount Etna volcanic ash** is the field's signature and recurring hazard — VONA Red alerts and full/partial airport closures happen multiple times per year, most recently within the current operating cycle (§3.4/§15). This is not a rare historical footnote; treat it as an active, standing risk. |
| Curfew / slots / hours | 🟧 | A night restriction is reported in tier-4 sources (approx. 00:00–04:00) but not confirmed against a primary source this pass — treat conservatively. |
| RFF category vs our types | 🟧 | Not confirmed — verify against current AIP. |
| Fuel availability | 🟧 | Jet A-1 assumed available for scheduled commercial ops; hours/supplier not confirmed. |
| Customs / handling / security | 🟧 | International PoE confirmed in principle across three terminals; desk hours and current handler not confirmed. A 2023 terminal fire (see §3.5) is a reminder that this field has had real infrastructure-disruption events. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
LICC itself sits at sea level (39 ft) with no close-in high terrain immediately surrounding the runway — this is **not** a mountain-strip approach in the way Naples-Capodichino is. However, the regional terrain picture matters: **Mount Etna**, Europe's tallest and most active continental volcano (current summit height approximately **3,400 m / ~11,165 ft**, varying with ongoing eruptive activity), dominates the region roughly **17–20 NM to the NNW/N**, and the **Iblei hills** rise to the south. Crews should hold standard regional terrain awareness even though the immediate MSA is not the field's primary hazard — that role belongs to Etna's *ash*, not its rock (§3.4).

### 3.2 Airborne conflict / traffic 🟧
**Naval Air Station Sigonella** (a joint Italian/US Navy air station, ICAO LICZ) lies roughly 10 NM from Catania and shares regional airspace — military and maritime-patrol traffic is a standing local-area consideration. Control is understood to be **Catania Approach/Director** under radar; en route inbound/outbound falls under **Roma FIR (LIRR)** with the southern sector operated by **Brindisi ACC (LIBB)** — see the cross-reference and gap note in §1/§18.

### 3.3 Runway excursion 🟧
Single runway 08/26, approximately 2,436 m; both ends carry a displaced threshold (RWY 08 ≈96 m, RWY 26 ≈86 m per tier-4 corroboration), meaning the usable landing distance is somewhat less than the full runway length on either end. Neither figure is independently AIP-confirmed this pass — verify current declared distances before treating as authoritative.

### 3.4 Weather threat 🟥
**Mount Etna volcanic ash is this field's defining, recurring operational hazard.** Etna is one of the world's most frequently active volcanoes, and its ash plumes have closed Catania airport — fully or by sector — multiple times per year in recent operating history, including a red-level **VONA (Volcano Observatory Notice for Aviation)** alert and multi-day closure within the current operating cycle. The airport operator (**SAC — Società Aeroporto Catania**) has, in past events, closed airspace **by sector** (e.g. the sector south, then south-west, of the volcano) as wind direction shifts the ash plume, rather than always closing the entire field outright — a nuance worth understanding: a closure notice may be partial and direction-dependent, not automatically a full-field NOTAM. **Cross-reference the OM E Volcanic Ash Avoidance procedure** — [`OM E — Volcanic Ash Avoidance`](../../../../../flight-ops/volcanic-ash-avoidance.md) — for the standing K Global avoidance policy, the VAAC/SIGMET/ASHTAM chain, and the encounter concept. **Toulouse VAAC** is the relevant Volcanic Ash Advisory Centre for the Mediterranean/Etna region — brief the current VAA/ASHTAM status at every planning cycle touching this field, not just when a NOTAM is already active.

### 3.5 Operational considerations 🟥
Four durable planning constraints: (1) **Etna ash exposure** (§3.4) — the field's dominant TEM item, demanding an active ash-NOTAM/ASHTAM watch on every rotation, not just a one-time briefing; (2) **RWY 26's approach-minima asymmetry** — no ILS on that end, only non-precision procedures, materially raising the weather-minima bar when RWY 26 is in use; (3) shared regional airspace with **NAS Sigonella** military traffic; and (4) a real precedent for **non-ash infrastructure disruption** — a July 2023 terminal fire suspended all operations for several days with an extended partial-service recovery period, a reminder that this field's resilience to disruption (whether ash, fire, or other cause) should factor into alternate/diversion planning generically.

---

## 4. Cautions & Warnings

- **Mount Etna is an active, frequently erupting volcano ~17–20 NM NNW/N of the field** — volcanic-ash closures are a recurring, not rare, event here. Check current VAA/ASHTAM/VONA status before every rotation.
- **RWY 26 has no ILS** — only non-precision (VOR/NDB) approaches are indexed for that runway direction. A RWY-26-in-use, low-visibility scenario is materially more constrained than RWY 08.
- **Both runway ends carry a displaced threshold** — do not assume the full published runway length is usable landing distance.
- **NAS Sigonella (joint Italian/US Navy air station) is close by (~10 NM)** — expect possible military/maritime-patrol traffic interaction in the local area.
- **This field has a real precedent for non-ash disruption** (2023 terminal fire, multi-day suspension) — do not assume Etna is the only credible disruption scenario when planning diversion/alternate coverage.
- **Ash closures may be sector-based and wind-direction-dependent** rather than always a blanket full-field NOTAM — read the specific NOTAM/ASHTAM text carefully rather than assuming "closed" or "open" as a binary.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are **volcanic-ash awareness** and the **RWY 26 non-precision-only approach environment**. 🟥
- **Crew-qualification gate:** No specific CAT II/III or captain-only restriction confirmed — but crews should be current on the K Global Volcanic Ash Avoidance procedure ([`OM E — Volcanic Ash Avoidance`](../../../../../flight-ops/volcanic-ash-avoidance.md)) before operating to this field. 🟧
- **Operating restrictions / bans:** A night restriction is reported in tier-4 sources (~00:00–04:00) but not confirmed against a primary source. No RNP AR ban or circling restriction confirmed either way. 🟧
- **Overflight / entry / permits:** Standard EU/Schengen international arrival; no special state permit identified beyond standard ash-NOTAM compliance. 🟩
- **Operations notes:** Airport operator — **SAC (Società Aeroporto Catania S.p.A.)**, which also manages Comiso Airport as a designated ash-season diversion field for this region.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not confirmed — verify current AIP | 🟧 |
| AD operating hours | Reported 24 h nominal availability; a night restriction (~00:00–04:00) is reported in tier-4 sources but not primary-confirmed | 🟧 |
| Night / curfew restrictions | 🟧 Approx. 00:00–04:00 reported, not confirmed against a primary source — treat conservatively | 🟧 |
| RFF category | Not confirmed | 🟧 |
| Fuel | Jet A-1 assumed available for scheduled ops; supplier/hours not confirmed | 🟧 |
| PCN | Not confirmed | 🟧 |
| Customs | International PoE across three terminals; exact hours not confirmed | 🟧 |
| Handling / FBO | Not individually confirmed in reachable public sources | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 08 | ~2,436 × 45 m | Asphalt · PCN not confirmed | Not confirmed 🟧 | Not confirmed 🟧 | Not confirmed 🟧 | Not confirmed 🟧 | Displaced threshold ≈96 m reported (tier-4) — reduces usable LDA versus full length; verify current AIRAC |
| 26 | ~2,436 × 45 m | Asphalt · PCN not confirmed | Not confirmed 🟧 | Not confirmed 🟧 | Not confirmed 🟧 | Not confirmed 🟧 | Displaced threshold ≈86 m reported (tier-4); **no ILS this end** — non-precision approaches only |

*Source: tier-4 cross-reference (airport-data aggregator; runway length/width/threshold-displacement figures), not independently confirmed against the ENAV eAIP (login-gated, not reached this pass). All figures 🟧 pending primary-AIP confirmation — do not treat as dispatch-grade until verified.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Catania ATIS | 127.675 | Not confirmed | 🟧 |
| Ground | Catania Ground | 129.725 | Not confirmed | 🟧 |
| Tower | Catania Tower | 118.700 | Not confirmed | 🟧 |
| Approach | Catania Approach / "Catania Radar" | 119.250 | Not confirmed | 🟧 |
| Approach (Director) | Catania Director | 120.800 | Not confirmed | 🟧 |
| Centre / FIR | Roma FIR (LIRR) / Brindisi ACC (LIBB), southern sector | Per current AIRAC | — | No Italy FIR brief in-library — see [Europe Airspace Briefing](../../../../airspace/europe.md) 🟧 (scope gap, §18) |

*Source: OurAirports frequency listing, https://ourairports.com/airports/LICC/frequencies.html (retrieved 2026-07-26) — tier-4, crowd-sourced; treat all frequencies as 🟧 pending a live-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| On-field navaid | CTF (Catania) | Not confirmed | — | Type (VOR/NDB) and frequency not confirmed this pass 🟧 |
| Regional navaid | NSY (Sigonella) | Not confirmed | — | Associated with NAS Sigonella 🟧 |
| Regional waypoint/navaid | SIG (Sigonella) | Not confirmed | — | 🟧 |
| ILS RWY 08 | Not confirmed (two chart variants indexed: "ILS-Y", "ILS-Z") | Not confirmed | H24 (assumed) | Sub-category, ident, frequency not confirmed 🟧 |
| RWY 26 | — no ILS — | — | — | Non-precision (VOR/NDB) approaches only per public chart index — a real operational asymmetry, verify current AIRAC 🟧 |

*Source: OpenNav airport/chart index, https://opennav.com/airport/LICC (retrieved 2026-07-26) — names/chart-index only, tier-4, and the indexed charts carry dated 2008–2014 amendment cycles — clearly superseded; the **presence/absence pattern** (ILS only on RWY 08) is the useful signal, not the specific chart content, which must be re-pulled current-AIRAC before any operational use.*

---

## 10. Arrival

- **Transition altitude / level:** Not confirmed — verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Not confirmed — single runway, wind-driven; verify current AIP.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 08 | ILS (reported, name not confirmed) | The field's only precision approach — verify current chart name/minima |
| 26 | VOR / NDB (non-precision, names not confirmed) | **No ILS this end** — materially higher weather minima than RWY 08; verify current chart |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Not confirmed — given RWY 26 has no ILS, a low-visibility event coinciding with a RWY-26-favouring wind is a genuine operational constraint; verify current minima and have a diversion plan ready. 🟥
- **Missed approach watch-items:** Regional terrain (Etna NNW/N, Iblei hills S) and shared airspace with NAS Sigonella traffic are the relevant considerations; fly the published missed approach and climb gradient exactly.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed this pass — verify on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Not confirmed — verify current AIP. 🟧
- **Start-up / push-back:** Not confirmed in reachable sources. 🟧
- **ATC slot / CTOT & clearance:** Not confirmed — treat as standard EU flow-management exposure pending confirmation. 🟧
- **De-icing:** Not confirmed — Mediterranean/Sicilian coastal field at 39 ft; minimal/seasonal need expected at most. 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed in reachable sources. 🟧
- **Night noise / dB limits:** Not confirmed. 🟧
- **Engine run-up restrictions:** Not confirmed. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed. 🟧
- **Volcanic-ash environmental note:** Distinct from conventional noise/environmental items — ash deposition on the ramp/movement areas can itself become an operational (not just environmental) concern during/after an eruptive event; expect ramp-sweeping/closure NOTAMs to follow an ash event even after airspace reopens.

---

## 13. Ground operations

- **Stands for our types:** Not confirmed — three terminals (A, B, C) serve the field; Terminal C is reported to be used exclusively by one carrier's operation historically, which may or may not be relevant to K Global stand assignment. 🟧
- **Push-back:** Not confirmed. 🟧
- **Standard taxi routes:** Not confirmed — verify with Ground/Apron on the day.
- **Hot spots / tight taxiways:** Not confirmed from a primary source this pass. 🟧
- **Follow-me:** Not confirmed. 🟧
- **Ash-event ground note:** After a volcanic-ash event, expect ramp/taxiway ash-sweeping activity and possible closures of specific movement-area sections even once flight operations resume — treat any post-event NOTAM literally rather than assuming a full return to normal ground ops immediately.

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Mediterranean coastal Sicilian climate — mild wet winters, hot dry summers; no field-specific prevailing-wind figure confirmed this pass. 🟧
- **Seasonal hazards:** 🟥 **Volcanic ash from Mount Etna is the field's dominant, recurring hazard** and is **not confined to a single season** — Etna's eruptive activity has produced ash-related closures across multiple months of the year in recent operating history. No conventional fog/thunderstorm-frequency statistic was found in reachable sources this pass — treat as general regional climatology pending AIP confirmation, but treat the ash threat as the standing, active item regardless of season.
- **Local effects:** Not quantified in reachable sources this pass. 🟧

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, **and current Volcanic Ash Advisory (VAA)/ASHTAM/VONA status for Etna from Toulouse VAAC** — see [`OM E — Volcanic Ash Avoidance`](../../../../../flight-ops/volcanic-ash-avoidance.md). Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check specifically: **current Etna VONA colour-code alert level and any ASHTAM/Volcanic Ash SIGMET affecting Catania airspace** (full or sector-based closures are both possible — read the NOTAM text carefully, not just the closed/open status), runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM. Source: official AIS / OFP NOTAM block; Toulouse VAAC products per [`OM E — Volcanic Ash Avoidance`](../../../../../flight-ops/volcanic-ash-avoidance.md).

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / origin field within the K Global South-Italy network; **not** a base.
- **Nearest suitable alternates:** Company preferred alternates **LICJ** (Palermo), [**LIRF**](../lirf/index.md) (Rome Fiumicino), [**LIRN**](../lirn/index.md) (Naples) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg. **Note:** during an active Etna ash event, the volcanic plume can affect regional airspace broadly — do not assume a nearby Sicilian/South-Italian alternate is automatically clear of ash; check the current VAA polygon before nominating an alternate. SAC (the operator) also manages **Comiso Airport** as a historical ash-season diversion point for this region — not itself a K Global preferred alternate, noted for regional context only. 🟧
- **Fuel-uplift notes:** Jet A-1 assumed available for scheduled commercial ops; supplier/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length (~2,436 m) non-limiting for narrowbody operations at typical weights; confirm against current declared distances for any widebody/long-haul use. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No widebody-specific stand or performance constraint identified in reachable sources. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type reference; the operative planning consideration at this field is **volcanic-ash exposure** (§3.4, §14, §15) rather than aircraft performance — this applies fleet-wide, not to a specific type.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **ENAV eAIP (AIP Italia) access** — the primary state source is login-gated; this brief relies on public tier-4 cross-references. Re-verify against the primary AIP when access is available.
- **Declared distances (TORA/TODA/ASDA/LDA per runway)** — not obtained from a primary/operator source this pass; only overall runway length and threshold-displacement figures were found, tier-4.
- **RWY 26 non-precision-only approach status** — inferred from a public chart-index pattern (ILS charts indexed only for RWY 08); not independently confirmed as still current — re-verify, as this materially affects low-visibility planning.
- **No Italy-specific FIR brief exists in this library** — linked to the general [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md), which does **not** cover Italian FIRs. Roma FIR (LIRR) / Brindisi ACC (LIBB) context is asserted per task brief, not independently sourced this pass.
- **ATC frequencies** — sourced to OurAirports (tier-4, crowd-sourced); not cross-checked against current AIRAC.
- **Navaid idents/frequencies, SIDs/STARs, take-off minima, transition altitude, RFF category, PCN** — none independently confirmed from a primary table this pass.
- **Night restriction window (~00:00–04:00)** — tier-4 only, not primary-confirmed.
- **Current Etna VONA/ASHTAM status** — inherently perishable; whatever is current at the time of this build is **not** recorded here — always pull live (§14/§15).
- **VATSIM cross-check** — not performed this pass; no vACC SOP located for LICC.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- Wikipedia — "Catania–Fontanarossa Airport" — https://en.wikipedia.org/wiki/Catania%E2%80%93Fontanarossa_Airport (retrieved 2026-07-26). *Traffic statistics, terminal structure, 2023 fire, recurring Etna ash-closure pattern.*
- OurAirports — https://ourairports.com/airports/LICC/ and /frequencies.html (retrieved 2026-07-26). *ARP/elevation/frequency cross-check, tier-4.*
- OpenNav — https://opennav.com/airport/LICC (retrieved 2026-07-26). *Chart index (SID/STAR/approach names by runway) and nearby-navaid names, tier-4; charts dated 2008–2014, superseded.*
- Wikipedia — "Mount Etna" — https://en.wikipedia.org/wiki/Mount_Etna (retrieved 2026-07-26). *Current summit elevation, eruptive activity.*
- Euronews — "Catania Airport suspends flights following volcanic activity at Mount Etna" — https://www.euronews.com/travel/2026/07/06/catania-airport-suspends-flights-following-volcanic-activity-at-mount-etna (retrieved 2026-07-26). *Current-cycle VONA red-alert closure event, sector-based closure practice.*
- VAAC Toulouse — https://vaac.meteo.fr/volcanoes/etna/ (retrieved 2026-07-26). *Confirms Toulouse VAAC as the responsible advisory centre for Etna.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Italia (ENAV); K Global fields from live VAMSYS; 4-page pack. |
