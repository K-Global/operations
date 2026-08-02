# ESSA — Stockholm Arlanda · Departure Page

**ESSA / ARN** · Sigtuna, Stockholm County, Sweden · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — LFV AIP-derived, K Global build

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [ESSA Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **01L/19R or 01R/19L** (independent parallel pair, wind-dependent); **08/26 only at peak hours** |
| Config logic | Independent parallel operations on the N-S pair; crosswind runway 08/26 activated only for capacity/environmental reasons at peak times |
| Transition altitude | 5,000 ft AMSL (Arlanda CTR) — not independently re-confirmed this pass 🟧 |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | Mandatory slot allocation for essentially all flights; EUROCONTROL ATFM/CTOT expected in peak/adverse conditions 🟧 |
| De-icing on departure | Available — **runway-dependent routing** (remote Apron M for 01R/19L; near-terminal for 01L/19R and 08/26) |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From the assigned terminal (most likely Terminal 5), Ground/Apron routes toward the assigned departure runway; **taxiway bridges** connect the terminal complex to RWY 01R/19L specifically — confirm the exact taxi with Apron/Ground on the day.
- **Hot spots / tight taxiways:** 🟧 Not confirmed by name; AIP-noted constraints include: arriving/departing aircraft must not use an exit taxiway requiring a turn >90°; taxi/tow prohibited between apron entries ZF–ZG, ZH–ZK, ZL–ZN; max wingspan 24 m on Apron S between SA–SC; jet-blast restriction on Apron F when another aircraft is parked behind.
- **Runway crossings / read-back-required points:** A departure routed via the taxiway-bridge area to RWY 01R/19L should expect explicit crossing/hold-short instructions; confirm current routing.
- **Low-vis taxi caveats:** Mandatory marshalling applies for RVR <550 m (night) / <300 m (day) specifically on **Apron FA Pier A and Apron CD Terminal 3** (aprons without taxi-guidance lighting) per the AIP. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** 01L/19R and 01R/19L are true independent parallel runways and can run simultaneous operations, including in IMC; runway selection between the pair is wind-dependent. **RWY 08/26 is activated only during peak hours** for capacity/environmental reasons — not a routine option.
- **By departure direction:** Not independently confirmed by direction this pass. 🟧
- **Noise / preferential-runway program:** No named NADP confirmed in reachable sources; RWY 08/26's peak-hour-only restriction is the clearest documented noise/environmental operating constraint. 🟧
- **Interaction with arrivals:** 01L/19R and 01R/19L are designed for independent simultaneous operation, minimising arrival/departure dependency between the pair; confirm current mixed-mode practice with ATC/current AIRAC when 08/26 is active.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable public sources 🟧 | 01L / 19R / 01R / 19L / 08 / 26 | AIP references FMS/RNAV SID procedures; non-RNAV aircraft must add "REQ NFMS" to a datalink clearance request | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed in reachable sources. 🟧
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat, low-lying, forested Uppland terrain — no significant close-in high terrain identified; the forest cover itself is a relevant off-airport-landing consideration, as demonstrated by the 1991 Gottröra accident's successful forced landing in a forest clearing following a dual engine failure shortly after takeoff (see Briefing §3.2).
- **Special DP / obstacle DP:** Not confirmed — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** LVP applies consistent with the field's CAT III infrastructure on 01L/01R/19L; specific LVTO RVR minima not confirmed this pass. 🟧
- **De-icing:** **Runway-dependent** — a departure via **RWY 01R/19L** de-ices at **remote Apron M (positions M5–M9)** on frequency **131.425 "Arlanda Apron"**, with mandatory continuous Ground-frequency monitoring and a yellow illuminated stop line, requesting taxi clearance from Ground once complete; a departure via **RWY 01L/19R or RWY 08/26** de-ices at the stand or a designated spot near the terminal (Terminal 2 area) before push-back. Confirm the correct routing for the assigned departure runway. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Arlanda Clearance Delivery **121.825** (H24); datalink DCL available EOBT-25 to EOBT+10 min, RTF clearance always supersedes.
- **Frequency sequence:** **Delivery 121.825 → Ground 121.700/121.925/121.975 → Tower 118.500 (01L/19R) / 125.125 (01R/19L) / 128.725 (08/26) → TMC Stockholm Control (Approach) 123.750.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** Mandatory slot allocation for essentially all flights; comply with any assigned CTOT/EDCT-equivalent. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 01L/19R (3,301 m) is non-limiting for any K Global type; RWY 01R/19L and 08/26 (2,500 m each) are likewise ample for typical operations.
- **Density altitude / temperature:** Non-issue at 137 ft, temperate climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Winter snow/ice season is the relevant seasonal consideration; clear-ice cold-soak risk on the airframe (not the runway) is the field's most significant documented hazard (§3.4 Briefing) — brief pre-departure wing inspection discipline.
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty for any K Global type at ESSA.

---

## 10. Gotchas

- **CAT III is not available on every runway** — confirm the assigned runway's actual ILS category before relying on autoland capability (01L/01R/19L have it; 19R/26 do not; 08 has no confirmed glidepath at all).
- **RWY 08/26 is peak-hour-only** — do not expect it as a routine departure option.
- **De-icing location depends on the assigned departure runway** — 01R/19L departures route to the remote Apron M, adding taxi/coordination time versus a near-terminal de-ice for 01L/19R or 08/26.
- **Clear-ice cold-soak risk is real and field-specific** — the 1991 Gottröra dual-engine-failure accident traces directly to ice shed from cold-soaked wings; brief pre-departure wing inspection seriously in winter.
- **Mandatory slot compliance** — the near-universal slot regime makes on-time pushback a real commercial/operational discipline at this field, not just a courtesy.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima / DVA exact figures.
- Transition altitude confirmation against current AIRAC.
- EOSID/engine-out procedure detail per runway.
- Taxiway hot spots by ID.
- NADP preference/name.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status/apron assignment. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **LFV AIP Sweden, AD 2 ESSA** (2012–2014 cycle extract; current cycle confirmed live at AMDT 4/2026 via https://aro.lfv.se) — SID/comms/de-icing/ground-ops remarks — https://opennav.com/pdf/ESSA/ES_AD_2_ESSA_en.pdf (retrieved 2026-07-26).
- Wikipedia — "Scandinavian Airlines Flight 751" — https://en.wikipedia.org/wiki/Scandinavian_Airlines_Flight_751 (retrieved 2026-07-26). *1991 Gottröra accident — cold-soak/clear-ice hazard, forested terrain off-airport.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from LFV AIP; K Global fields from live VAMSYS; 4-page pack. |
