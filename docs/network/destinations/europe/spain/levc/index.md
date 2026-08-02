# LEVC — Valencia · Airport Briefing

**LEVC / VLC** · Manises, Valencian Community, Spain · Europe
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — AIP España (ENAIRE)-derived

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the AIP España (ENAIRE) AD 2-LEVC plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 39°29′21″N 000°28′51″W (39.48916, -0.48096) `[AIP España AD 2-LEVC]` |
| Field elevation | **73 m / 240 ft AMSL** |
| Mag variation | 1° E (2020 epoch); annual change 7.5′ E |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST) |
| Runway(s) | **12/30**, **3,215 × 45 m**, asphalt 🟧 (current AIP; supersedes an older/stale 2,700 m figure seen on some third-party aggregators — treat 3,215 m as authoritative pending a fresh cross-check). A former runway **04/22** (1,644 × 45 m) is **CLOSED** — no ILS, has a helipad at the SW end |
| Preferential runway | Wind-dependent; single runway used bidirectionally |
| Longest LDA | 3,215 m (RWY12); **2,915 m on RWY30** (300 m displaced threshold) |
| Approaches | **ILS CAT I both ends** — RWY12 (ident VLN), RWY30 (ident IVC); RNAV(RNP) LPV/LNAV approaches also published both ends |
| RFF category | **CAT 7 continuous**; CAT 8/9 available exceptionally with **≥15 days' prior request** |
| Control type | **Radar** — Valencia TWR/APP on the field; en-route **Barcelona ACC (LECB)** — confirmed via Barcelona Control sector documentation showing the Valencia TMA under LECB_W_CTR, see [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) 🟧 (no dedicated Spanish FIR brief exists in-library yet) |
| Elevation class | Near sea-level (240 ft) — **not** hot-and-high; flat coastal plain |
| Special-airport status | Not operator-categorised; standing brief items are the **displaced RWY30 threshold** and the field's **autumn Gota Fría/DANA flood exposure** — see §5 |
| Customs / PoE | **Yes** — hours tied to AD operating hours (not fixed H24), gates 1–4 non-Schengen |
| K Global category | **S** `[VAMSYS mirror 2026-07-25]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-25]` |
| Company preferred alternates | **LEMD, LEBL** `[VAMSYS mirror 2026-07-25]` |
| Taxi-in / taxi-out (VAMSYS) | **10 min / 12 min** `[VAMSYS mirror 2026-07-25]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat coastal plain — no significant close-in terrain relevant to arrival/departure/missed-approach paths. |
| Runway length vs fleet perf | 🟩 | 3,215 m is ample for any K Global type; RWY30's displaced threshold (LDA 2,915 m) is non-limiting for normal arrival weights. |
| Approach availability / minima | 🟩 | ILS CAT I confirmed both ends, plus RNP LPV/LNAV — a symmetric, well-equipped single-runway field relative to LEAL/LEMG. |
| Airspace / traffic / control | 🟩 | Confirmed **Barcelona ACC (LECB)** territory — consistent with the network's general east-coast airspace assumption; own dedicated Valencia TWR/APP unit. |
| Weather / seasonal hazard | 🟥 | **Gota Fría/DANA** autumn torrential-rain events are a genuine, severe operational hazard — the 30 Oct 2024 event flooded the runway/apron, forcing ~30 diversions and 49 cancellations with operations suspended overnight. |
| Curfew / slots / hours | 🟧 | No absolute curfew, but an active **noise-abatement regime** applies (night = 2300–0700 LT; reverse-thrust-from-idle restricted at night; visual aids may be switched off 0000–0400 LT if no traffic expected). |
| RFF category vs our types | 🟩 | CAT 7 continuous, above any K Global type's requirement; CAT 8/9 available with 15 days' notice if ever needed. |
| Fuel availability | 🟧 | Not independently confirmed hours/supplier beyond general availability assumption. |
| Customs / handling / security | 🟧 | Confirmed Port of Entry with a non-Schengen pier (gates 1–4); exact desk hours tied to "HR AD" (airport operating hours) rather than a fixed H24 statement. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
LEVC sits at 240 ft AMSL on the flat Valencian coastal plain, 8 km west of Valencia city in Manises. There is no close-in high terrain relevant to any arrival, departure or missed-approach path — a non-issue field for terrain; verify the MSA ring as routine practice.

### 3.2 Airborne conflict / traffic 🟩
Valencia is the 10th-busiest airport in Spain (~10.8 M passengers, ~87,500 movements) `[Wikipedia]`. **Valencia TWR/Valencia APP** are dedicated local units; en-route is confirmed **Barcelona ACC (LECB)** — the Valencia TMA sits under **LECB_W_CTR** per Barcelona Control sector documentation, consistent with the network's general east-coast airspace assumption. See the general [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) for regional context 🟧, no dedicated Spanish FIR brief exists in-library yet.

### 3.3 Runway excursion 🟧
Single active runway 12/30, 3,215 × 45 m. **RWY30 carries a 300 m displaced threshold** (LDA 2,915 m vs 3,215 m TORA/TODA/ASDA) — non-limiting for normal arrival weights but a figure to carry correctly in performance planning. The former runway 04/22 (1,644 × 45 m) is permanently closed with no ILS, retained only as a helipad at the SW end — not usable for fixed-wing operations under any circumstance.

### 3.4 Weather threat 🟥
The defining hazard at LEVC is the **Gota Fría / DANA** phenomenon — an autumn cold upper-level low interacting with warm, moisture-laden Mediterranean air to produce torrential, often catastrophic rainfall (typically Oct–Nov). This is not a theoretical risk: on **30 October 2024**, a DANA event **flooded the runway and apron**, forcing roughly **30 diversions and 49 cancellations**, with operations suspended and only resumed the following day `[AeroTime; aeroTELEGRAPH, 2024]`. The **Llevant** (easterly sea) wind is the moisture-supply mechanism behind these events. This is a genuinely severe, field-specific seasonal threat — brief it accordingly during the autumn window.

### 3.5 Operational considerations 🟧
LEVC is a well-equipped, symmetric single-runway field (ILS CAT I both ends, RNP LPV/LNAV both ends) relative to its Costa Blanca/Costa del Sol neighbours in this network — the standing planning items are the **RWY30 displaced threshold**, the **active night noise-abatement regime** (SIRVAL monitoring network, §12), and above all the **autumn DANA/Gota Fría flood risk**, which has demonstrated field-closing severity within recent memory.

---

## 4. Cautions & Warnings

- **Autumn Gota Fría/DANA events can flood the runway/apron and force a field-wide suspension** — the 30 Oct 2024 event is a live, recent precedent (30 diversions, 49 cancellations, overnight suspension). Treat any autumn heavy-precipitation forecast for the Valencia region as a serious go/no-go factor.
- **RWY30 has a 300 m displaced threshold** (LDA 2,915 m vs the 3,215 m full runway length) — confirm this figure is correctly applied in landing performance planning.
- **The former RWY04/22 is permanently closed** (no ILS; SW-end helipad only) — do not consider it as a fixed-wing option under any circumstance.
- **Night noise-abatement regime** — reverse thrust from idle is prohibited at night except for safety reasons; visual aids may be switched off 0000–0400 LT if no traffic is expected.
- **Gates 1–4 are the non-Schengen pier** — confirm gate assignment against Schengen/non-Schengen routing needs.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport"; the standing brief items are the **RWY30 displaced threshold** and the **autumn DANA flood exposure**. 🟧
- **Crew-qualification gate:** None specific identified; standard line-qualified crew. Brief the Gota Fría/DANA seasonal risk ahead of autumn operations. 🟧
- **Operating restrictions / bans:** No RNP AR ban or circling restriction found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard EU/Schengen arrival; no special state permit required. 🟩
- **Operations notes:** ANSP — **ENAIRE**; airport operator — **Aena**.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not independently confirmed as a blanket H24 statement — Valencia TWR/APP/Delivery/Ground frequencies published without an explicit hours qualifier in the reachable extract | 🟧 |
| AD operating hours | "HR AD" referenced for customs (below) implies a defined operating-hours envelope rather than confirmed H24 — not independently obtained this pass | 🟧 |
| Night / curfew restrictions | No absolute curfew; active noise-abatement regime — "night" = 2300–0700 LT, reverse-thrust-from-idle restricted at night except for safety, visual aids may be switched off 0000–0400 LT if no traffic expected | 🟧 |
| RFF category | **CAT 7 continuous**; CAT 8/9 exceptional with ≥15 days' prior request | 🟩 |
| Fuel | Not independently confirmed supplier/hours | 🟧 |
| PCN | Main runway **119/F/A/W/T**, with local zones **84/F/A/W/T** and **134/F/A/W/T** near the thresholds | 🟩 |
| Customs | Hours = **HR AD** (airport operating hours), not fixed H24 | 🟧 |
| Handling / FBO | Not confirmed in reachable sources | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 12 | 3,215 × 45 m | Asphalt / PCN 119/F/A/W/T (local zones 84 and 134/F/A/W/T near thresholds) | 3,215 m | 3,215 m | 3,215 m | 3,215 m | ILS CAT I (VLN); intersection departures published (T4, T3, H6, T2) |
| 30 | 3,215 × 45 m | Same physical runway | 3,215 m | 3,215 m | 3,215 m | **2,915 m** | **300 m displaced threshold**; ILS CAT I (IVC); intersection departures published (H2, H3, T2) |
| 04/22 (CLOSED) | 1,644 × 45 m | Asphalt, not lighted | — | — | — | — | **Permanently closed** — no ILS; helipad at SW end only |

*Source: AIP España AD 2-LEVC, current AIRAC (retrieved 2026-07-26). All distances in metres. The 3,215 m runway-12/30 length supersedes an older/stale 2,700 m figure found on some third-party aggregators.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Valencia Información | 121.080 | — | D-ATIS also provisioned |
| Delivery | Valencia CLR | 123.580 | — | Clearance delivery |
| Ground | Valencia GMC | 121.880 | — | |
| Tower | Valencia TWR | 118.555 (backup 125.480; emerg 121.500/243.000) | — | |
| Approach | Valencia APP | 120.100 (APP/L) · 124.750 (APP/H) · 119.075 (backup) · 363.550 (mil) | — | |
| Centre / FIR | **Barcelona ACC (LECB)** | Per current AIRAC | H24 | Valencia TMA confirmed under LECB_W_CTR sector — see [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) 🟧, no dedicated Spanish FIR brief exists in-library |

*Source: AIP España AD 2-LEVC (retrieved 2026-07-26); FIR/ACC placement corroborated via Barcelona Control (IVAO ES) sector documentation and AvDelphi LECB zone reference.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| DVOR/DME | VLC | 116.100 / CH108X | — | Terminal-area |
| NDB | SGO | 356.000 kHz | — | |
| ILS RWY12 | VLN | 111.500 / ILS-DME CH52X | — | **CAT I** |
| ILS RWY30 | IVC | 110.100, GP 334.400 / ILS-DME CH38X | — | **CAT I** |

*RNAV(RNP) LPV/LNAV approaches also published both ends. Source: AIP España AD 2-LEVC (retrieved 2026-07-26).*

---

## 10. Arrival

- **Transition altitude / level:** Not confirmed this pass — verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Wind-driven; single runway used bidirectionally, both ends equally equipped (ILS CAT I + RNP LPV/LNAV).
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 12 | ILS CAT I (VLN); RNP (LPV/LNAV) | Not confirmed 🟧 | Not confirmed 🟧 | |
| 30 | ILS CAT I (IVC); RNP (LPV/LNAV) | Not confirmed 🟧 | Not confirmed 🟧 | **300 m displaced threshold — mind the reduced LDA (2,915 m)** |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Not confirmed in detail — CAT I infrastructure both ends is a baseline; no CAT II/III found. 🟧
- **Missed approach watch-items:** Flat terrain — not a driver. The operative missed-approach concern is re-sequencing and, in autumn, potential DANA-driven weather deviation/diversion.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed this pass. 🟧
- **Take-off minima:** Not confirmed this pass. 🟧
- **Start-up / push-back:** Valencia GMC (121.880) handles ground movement; specific cross-bleed/APU notification procedure not confirmed. 🟧
- **ATC slot / CTOT & clearance:** No standing slot-coordination level confirmed for LEVC in reachable sources — treat as unconfirmed pending VAMSYS/Aena confirmation. 🟧
- **De-icing:** Not typically required at this Mediterranean coastal field; availability not confirmed. 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Active regime — "night" = **2300–0700 LT**. Reverse thrust from idle is **prohibited at night** except for safety reasons. Between **0000–0400 LT**, visual aids may be switched off if no traffic is expected.
- **Night noise / dB limits:** Monitored via the **SIRVAL** noise-monitoring system, covering Valencia, **Manises, Xirivella, Quart de Poblet**, Mislata, Aldaia and Ribarroja de Turia (10 monitoring terminals).
- **Engine run-up restrictions:** Not confirmed. 🟧
- **Reverse thrust / idle-reverse policy:** See night restriction above; daytime policy not otherwise confirmed. 🟧

---

## 13. Ground operations

- **Stands for our types:** 🟧 AIP publishes a dedicated **"Operation for code letter/type E or F aircraft (B748 or A124)"** procedure — **PRKG 25 and PRKG 27** (Code F) plus **PRKG 23/24/25/27/29** (Code E), each with defined push-back/taxi routings (VLCOPS-1008). B767-400 and MD-11 (Code D-IV) also get special oversteering procedures. **This confirms real, AIP-published Code E/F capability at LEVC**, not merely theoretical.
- **Push-back:** Defined routings exist per the Code E/F procedure above; mandatory-vs-self-manoeuvre policy for other code letters not confirmed. 🟧
- **Standard taxi routes:** Confirm with Ground on the day; expect routing per the assigned runway direction.
- **Hot spots / tight taxiways:** None formally itemised in reachable sources beyond the Code E/F oversteering procedure. 🟧
- **Follow-me:** Availability not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Mediterranean (Köppen Csa) — hot dry summers, mild winters. **Llevant** (easterly sea wind) brings humidity.
- **Seasonal hazards:** **Gota Fría/DANA** autumn torrential-rain events (Oct–Nov) are the field's defining and demonstrated-severe seasonal hazard — see §3.4/§4 for the 30 Oct 2024 precedent. General Mediterranean-coast fog/sea-breeze phenomena also apply, without a quantified airport-specific climatology found this pass.
- **Local effects:** Coastal-plain field; no notable terrain-driven local wind effect (unlike LEMG).

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET — during the autumn window, pay particular attention to any DANA/Gota Fría advisory. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway/apron flooding status (autumn DANA risk), navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Leisure/tourist destination in the network — **VAMSYS category S, not a base**.
- **Nearest suitable alternates:** Company preferred alternates **[LEMD](../lemd/index.md)** (Madrid), **[LEBL](../lebl/index.md)** (Barcelona) `[VAMSYS mirror 2026-07-25]` — confirm suitability, runway/RFF adequacy and current minima per leg. During the autumn DANA window, treat inland alternates as materially more relevant than usual given the risk of coastal-field flooding.
- **Fuel-uplift notes:** Not independently confirmed supplier/hours. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length (3,215 m) non-limiting for any K Global type. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). Code E/F is AIP-published and real (§13), unlike a purely theoretical allowance.

---

## 17. Fleet-specific notes (optional)

- LEVC has AIP-published, real Code E/F handling (dedicated PRKG 23/24/25/27/29 procedures, B748/A124-referenced) — a materially stronger widebody-handling footprint than a purely narrowbody leisure field. Historical long-haul service has included Delta's seasonal VLC–JFK (2009–2012, Boeing 757) and Air Transat's seasonal Montreal service (from June 2025). See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type reference — no field-length or field-elevation performance penalty applies to any K Global type here.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- Blanket ATS/airport operating-hours statement — not obtained as an explicit H24 line this pass.
- Transition altitude/level, take-off minima, exact SID/STAR names — not obtained this pass.
- Slot-coordination level for LEVC — not confirmed.
- Fuel supplier(s) and into-plane hours — not confirmed.
- Handling agent(s) and detailed hot-spot/taxiway data.
- The 3,215 m runway-12/30 length (current AIP) vs the older/stale 2,700 m figure seen on some third-party aggregators — flagged as resolved in favour of the AIP figure, but worth a fresh cross-check on next update.
- Engine run-up restriction and daytime reverse-thrust policy.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **AIP España (ENAIRE), AD 2-LEVC**, current AIRAC — https://aip.enaire.es/AIP/contenido_AIP/AD/AD2/LEVC/LE_AD_2_LEVC_en.html (retrieved 2026-07-26). *ARP/elevation/mag-var, runway/declared distances/PCN, ATC frequencies, navaids/ILS, RFF category, noise-abatement regime, Code E/F procedures.*
- OurAirports — https://ourairports.com/airports/LEVC/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *Cross-check (note: its 2,700 m runway-length figure is superseded by the current AIP's 3,215 m).*
- Wikipedia — "Valencia Airport" — https://en.wikipedia.org/wiki/Valencia_Airport (retrieved 2026-07-26). *Terminal/gate structure, Ryanair base history, traffic figures.*
- AeroTime — "Storm floods Valencia airport, disrupts nearly 80 flights" — https://www.aerotime.aero/articles/storm-floods-valencia-airport-disrupts-nearly-80-flights (retrieved 2026-07-26). *30 Oct 2024 DANA event.*
- aeroTELEGRAPH — "Gota Fría setzt Flughafen Valencia unter Wasser" — https://www.aerotelegraph.com/gota-fria-setzt-flughafen-valencia-unter-wasser (retrieved 2026-07-26). *Corroboration of the 2024 DANA event.*
- IVAO España — Barcelona Control (LECB) sector documentation — https://wiki.es.ivao.aero/books/lecb-barcelona/page/barcelona-control-lecb-ctr-barcelona-radar-palma-radar-valencia-radar (retrieved 2026-07-26). *Network-sim documentation, corroboration only — used to confirm the Valencia TMA sits under LECB_W_CTR.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Built from AIP España (ENAIRE); K Global fields from live VAMSYS; 4-page pack. |
