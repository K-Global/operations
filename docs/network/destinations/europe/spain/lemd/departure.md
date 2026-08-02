# LEMD — Adolfo Suárez Madrid-Barajas · Departure Page

**LEMD / MAD** · Madrid, Spain · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LEMD Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **36L / 36R** by day in the preferential North configuration (0700–2300 LT); **14L / 14R** in the non-preferential South configuration; **36L only** in the night-preferential North config (2300–0700 LT), **14L only** non-preferential |
| Config logic | Wind/time-of-day driven **segregated North/South configuration**; changeover threshold ~10 kt tailwind gust / 20 kt crosswind (considered from 7 kt tailwind) |
| Transition altitude | 3,962 m / 13,000 ft MSL — verify no local override on current chart 🟧 |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | Full **A-CDM/FAM** (EUROCONTROL) — TOBT/EOBT currency mandatory; slot-coordination level not independently confirmed 🟧 |
| De-icing on departure | Available — dedicated ATC frequencies for RWY 36L/36R, handling-agent-provided, season per snow plan (1 Nov–31 Mar) |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Extensive published standard routes exist by stand/ramp and active configuration (AIP España AD 2-LEMD 2.20/2.21) — routing differs materially between the T1-2-3 apron and the T4/T4S apron; confirm the exact taxi with Ground/Apron (SDP) on the day.
- **Hot spots / tight taxiways:** 🟥 A dense network of **Code-letter-restricted taxiways** with simultaneous-occupancy conflict rules — e.g. TWY Z2/Z4 cannot both hold a Code E aircraft at once; TWY EB1 wingspan-limited to 58 m if TWY EC1 holds an A380-class aircraft; Code F aircraft (and A346/A35K/B77W/B764) must oversteer at all turns on several taxiways. Expect a workload-heavy taxi on any Code E/F movement.
- **Runway crossings / read-back-required points:** Aircraft of Code letter F may not use runway-holding positions LC/LD for RWY 14R — confirm assigned holding point on initial taxi clearance.
- **Low-vis taxi caveats:** The standard T4-apron ATC-SDP transfer-point procedure is explicitly **suspended when LVP is active** or the Winter Plan is in force — expect direct ATC/SDP instruction rather than the default silent-transfer procedure in those conditions. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** **Segregated North/South configuration.** Preferential North (0700–2300 LT): departures **36L/36R**; non-preferential South: departures **14L/14R**. Night (2300–0700 LT) narrows to **36L** (preferential North) or **14L** (non-preferential South) only.
- **By departure direction:** Runway assignment is purely a function of the active segregated configuration, not destination-direction routing at the runway-selection level — the SID itself carries the directional routing.
- **Noise / preferential-runway program:** The segregated North/South preferential-configuration logic (§20.6 of the AIP) **is** the field's noise-management mechanism; no separately named NADP was found in reachable sources. 🟧
- **Interaction with arrivals:** Departures off 36L/36R interact with the concurrent 32L/32R arrival stream (North config) on an independent-parallel, not crossing, basis; departures off 14L/14R interact with the 18L/18R arrival stream (South config) likewise. The runway system is fully segregated by role — no shared-runway arrival/departure conflict exists at LEMD, unlike a mixed-mode field.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 36L / 36R / 14L / 14R | Aircraft unable to comply with RNAV1 must report on first Clearance contact | Contingency ODP **LEMD1N** (north) / **LEMD1W** (west) exists for use if Madrid APP contact cannot be established after departure — pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; the initial altitude corresponds to the published SID. 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** No separately named NADP confirmed; the segregated-runway preferential-configuration system (§3) is the primary noise-management mechanism at LEMD. 🟧
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart. If Madrid APP contact cannot be established by 1,000 ft AGL, remain on Barajas TWR frequency and execute the contingency ODP (LEMD1N/LEMD1W) if applicable, awaiting instructions.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat Meseta plateau at the field itself — no significant close-in terrain on any of the four departure runways. The Sistema Central (Guadarrama range, peaks ~2,400 m) lies well north and is a distant, not close-in, consideration.
- **Special DP / obstacle DP:** Not confirmed in reachable sources beyond the contingency ODP (LEMD1N/LEMD1W) noted in §4/§5 — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** LVP procedures apply; specific LVTO RVR minima not confirmed this pass. Note the standard ATC-SDP silent-transfer taxi procedure is explicitly suspended when LVP is active (§2). 🟧
- **De-icing:** Dedicated ATC frequencies — **RWY 36L: 123.330 MHz**, **RWY 36R: 130.255 MHz** — de-icing service itself is handling-agent-provided (not a dedicated airport remote pad). Season per the published snow plan (1 Nov–31 Mar). See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Madrid Clearances — **130.080 MHz** (traffic routing via RBO/PINAR/NANDO) or **130.355 MHz** (via SIE/ZMR/BARDI/CCS/VTB); DCL datalink clearance available.
- **Frequency sequence:** **Clearances (130.080/130.355) → Apron/SDP (121.705/121.855/123.005/123.255, per ramp/side) → Ground/GMC (121.630/121.755/121.980/123.155) → Tower (118.080/118.155/118.680/118.980, per active runway pairing) → Madrid APP (per assigned sector — Dep W 124.230 or Dep E 131.175).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** Full **A-CDM/FAM** — request start-up between TOBT-5 and TSAT+5 (or EOBT-30 to EOBT+15 in non-CDM mode); an inactive/stale flight plan risks automatic FAM suspension requiring a fresh TOBT/EOBT and re-sequencing. Comply with any assigned CTOT (ADT in the CLD datalink message). 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 36L/36R (3,500/4,179 m) and 14L/14R (3,500/3,988 m) are non-limiting for any K Global type.
- **Density altitude / temperature:** The 1,998 ft field elevation combined with a 34°C reference temperature is a genuine, if modest, hot-summer-afternoon performance-derate input — not classic hot-and-high, but worth a weight/temperature check on peak-summer departures. 🟧
- **Contamination / wet-runway:** Winter snow-plan season (1 Nov–31 Mar) is the relevant seasonal consideration (§7); GRF runway-condition reporting applies year-round.
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length performance penalty for any K Global type at LEMD; the elevation/temperature combination is the only non-trivial performance input.

---

## 10. Gotchas

- **Every departure runway is takeoff-only** (14L, 14R, 36L, 36R) — never expect or request a landing clearance on these.
- **Segregated configuration changes the active departure runway wholesale** (North vs. South) — do not assume yesterday's runway assignment; check ATIS.
- **A-CDM/TOBT accuracy is not optional** — a stale flight plan can be automatically suspended by the EUROCONTROL FAM system, forcing a full re-sequence.
- **Powerback (reverse-thrust stand exit) is prohibited** — plan for towed or self-taxi exit per stand type.
- **Remote-ramp (Ramp 5/6) departures require electric-tractor towing with engines off** — factor this into pre-departure sequencing at those stands.
- **Code F aircraft must oversteer at numerous named taxiway turns** and may not use holding positions LC/LD for RWY 14R — brief the correct alternate holding point.
- **Contingency ODP (LEMD1N/LEMD1W)** applies if Madrid APP contact is lost after departure — remain on Tower frequency and await instructions rather than free-lancing a climb.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima / exact LVTO RVR figures.
- Slot-coordination level and CTOT/ATFM specifics for LEMD.
- EOSID/engine-out procedure detail per runway.
- Confirmed NADP (if any) beyond the segregated-configuration noise-management logic.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP España (ENAIRE eAIP), AD 2-LEMD 2.18/2.20/2.21** — AIRAC AMDT 408/26, eff. 09-JUL-26 — https://aip.enaire.es/aip/contenido_AIP/AD/AD2/LEMD/LE_AD_2_LEMD_en.pdf (retrieved 2026-07-26). *Preferential configuration, A-CDM/start-up procedure, taxiway restrictions, communications.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP España (ENAIRE); K Global fields from live VAMSYS; 4-page pack. |
