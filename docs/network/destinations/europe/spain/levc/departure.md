# LEVC — Valencia · Departure Page

**LEVC / VLC** · Manises, Valencian Community, Spain · Europe
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — AIP España (ENAIRE)-derived

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LEVC Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **RWY12 or RWY30** — wind-driven, single runway used bidirectionally |
| Config logic | Wind-driven; symmetric ILS CAT I/RNP infrastructure both ends |
| Transition altitude | Not confirmed this pass 🟧 |
| Take-off minima | Not confirmed this pass 🟧 |
| CTOT / flow regime | Not confirmed — no standing slot-coordination identified 🟧 |
| De-icing on departure | Not typically required; NIL/rare assumption, not confirmed 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From the terminal stands (including the AIP-published Code E/F PRKG 23/24/25/27/29 procedures), Valencia GMC (121.880) routes traffic to the assigned runway; confirm exact taxi with Ground on the day.
- **Hot spots / tight taxiways:** None formally itemised in reachable sources beyond the Code E/F oversteering procedures (VLCOPS-1008) for B767-400/MD-11 (Code D-IV) and PRKG 25/27 (Code F). 🟧
- **Runway crossings / read-back-required points:** Not itemised in reachable sources — expect standard read-back discipline.
- **Low-vis taxi caveats:** Not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Wind-driven; both runway ends carry equivalent ILS CAT I + RNP LPV/LNAV infrastructure, so runway selection is a straightforward wind-favour decision without an approach-capability asymmetry (unlike LEAL/LEMG).
- **By departure direction:** Not otherwise differentiated.
- **Noise / preferential-runway program:** Active night noise-abatement regime applies (Briefing §12) — reverse thrust from idle prohibited at night except for safety; no specific preferential-runway-by-time-of-day rule found. 🟧
- **Interaction with arrivals:** Single-runway field — departures and arrivals share the active runway; standard sequencing applies.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 12 / 30 | Not confirmed 🟧 | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed by name; the field's night noise-abatement regime (2300–0700 LT, reverse-thrust-from-idle restriction) is the confirmed operational constraint. 🟧
- **Early turn / altitude constraints:** Not confirmed — verify current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat coastal plain — no significant close-in terrain/obstacle factor identified.
- **Special DP / obstacle DP:** Not confirmed — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed this pass. 🟧 CAT I infrastructure both ends is the confirmed baseline; no CAT II/III found.
- **De-icing:** Not typically required; NIL/rare assumption for this mild Mediterranean-coastal field, not independently confirmed. 🟧

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Valencia CLR **123.580**.
- **Frequency sequence:** **Clearance 123.580 → Ground (GMC) 121.880 → Valencia TWR 118.555 (backup 125.480) → Valencia APP 120.100 (APP/L) / 124.750 (APP/H).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** Not confirmed — no standing slot-coordination identified for LEVC; comply with any assigned CTOT/EDCT-equivalent if issued. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 3,215 m is non-limiting for any K Global narrowbody or widebody type; the AIP-published Code E/F PRKG procedure confirms the field is designed to handle these types.
- **Density altitude / temperature:** Non-issue at 240 ft, temperate Mediterranean climate — no hot-and-high penalty.
- **Contamination / wet-runway:** No specific contamination/braking-action data confirmed this pass; the field's real wet-weather risk is the autumn **DANA/Gota Fría** flood scenario rather than routine contamination (see Briefing §3.4 — a go/no-go event, not a braking-action nuance). 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty for any K Global type at LEVC.

---

## 10. Gotchas

- **RWY30 has a 300 m displaced threshold** (LDA 2,915 m) — relevant to takeoff distance-available planning if departing from an intersection near that end; confirm current intersection-departure data.
- **Night noise-abatement regime** — reverse thrust from idle is prohibited at night except for safety; plan the landing/braking technique accordingly on a late arrival that will subsequently depart.
- **Autumn Gota Fría/DANA risk** — a severe-weather advisory for the Valencia region in Oct–Nov should be treated as a serious go/no-go factor, not routine weather.
- **The former RWY04/22 is permanently closed** — never consider it as a fixed-wing departure option.
- **No formally confirmed slot-coordination level** — do not assume a CTOT regime is absent without checking current NOTAMs/ATFM status.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Transition altitude and take-off minima exact figures.
- NADP preference/name beyond the confirmed night noise-abatement regime.
- EOSID/engine-out procedure detail per runway.
- Slot-coordination level and CTOT/ATFM specifics for LEVC.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, especially any DANA/Gota Fría-related closure or flooding advisory in autumn), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP España (ENAIRE), AD 2-LEVC**, current AIRAC — https://aip.enaire.es/AIP/contenido_AIP/AD/AD2/LEVC/LE_AD_2_LEVC_en.html (retrieved 2026-07-26). *Runway/taxiway data, communications, Code E/F procedures, noise-abatement regime.*
- AeroTime — "Storm floods Valencia airport, disrupts nearly 80 flights" — https://www.aerotime.aero/articles/storm-floods-valencia-airport-disrupts-nearly-80-flights (retrieved 2026-07-26). *30 Oct 2024 DANA event.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Built from AIP España (ENAIRE); K Global fields from live VAMSYS; 4-page pack. |
