# LEBB — Bilbao · Departure Page

**LEBB / BIO** · Loiu, Biscay (Basque Country), Spain · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP España-derived

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LEBB Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **12 or 30** (main pair); RWY 10/28 preferred for VFR only — no dominant IFR config confirmed 🟧 |
| Config logic | Wind-driven; verify current ATIS/METAR trend — no published preferential-runway rule found this pass |
| Transition altitude | 1,850 m / 6,000 ft (CTR upper limit) — verify TA/TL split on current chart 🟧 |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | A-CDM (A-DPI/C-DPI) message exchange with NMOC; standard EUROCONTROL ATFM exposure 🟧 |
| De-icing on departure | Available — de-icing apron (Code C), PRKG 111 (Code E), PRKG 14 (alternate); Code D/E de-ice at own stand |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Code E departures exit the apron via **TWY A2** (from PRKG 6A) or **TWY A1** (from PRKG 111), taxi via TWY T, then to the runway-holding position — RWY 12/30 via holding point K1 (subject to the special RWY 30 displaced-threshold procedure below) or RWY 28 back-track only up to A321/B737 size.
- **Hot spots / tight taxiways:** 🟥 Several curved taxiway sections require **mandatory oversteer by Code E aircraft** — RWY12-C2, C2-T1, T1-C2, C2-RWY30, C6-T6, T6-C6, plus the T3/T4-A2 gate transitions — because wheel clearance to the taxiway edge is under 4 m. **TWY C1 is capped at Code C maximum, TWY S1 at Code A maximum.**
- **Runway crossings / read-back-required points:** Due to RWY 30's 460 m displaced threshold, a departure taxiing from holding point **K1** toward THR 30 penetrates the approach obstacle-limitation surface — **K1 is a runway-access point requiring explicit ATC clearance to cross.** Aircraft under 7.60 m height may instead hold at TWY C2; aircraft under 9.65 m height may hold at TWY C1 — confirm which applies to the assigned type.
- **Low-vis taxi caveats:** 🟧 During LVP, stop bars and intermediate holding-position lights are activated when RVR ≤ 1,000 m; only essential radio-equipped vehicles are permitted in the manoeuvring area. Follow taxi-out instructions precisely and verify TWY centre-line lights turn fully green (not green-yellow) before proceeding.

---

## 3. Runway / SID selection logic

- **By wind / config:** No published preferential-runway rule found in reachable AIP text — confirm current ATIS/wind trend at planning.
- **By departure direction:** Not confirmed in reachable sources this pass. 🟧
- **Noise / preferential-runway program:** RWY 10/28 is preferred for **VFR** operations; no equivalent IFR noise-preference rule confirmed.
- **Interaction with arrivals:** Simultaneous parallel-runway VFR/IFR use is authorised **only in VMC** at the neighbouring joint field convention seen regionally — confirm the specific LEBB dependent/independent runway-use rule with ATC on the day. 🟧

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 12 / 30 / 10 / 28 | Not confirmed this pass | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** No fixed-wing NADP detail confirmed in reachable sources; helicopter-specific overflight-avoidance rules exist (Erandio, Sondika, Loiu, Zamudio, Derio — see Briefing §12) but do not apply to fixed-wing SIDs. 🟧
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart; the surrounding hilly terrain (Briefing §3.1) makes early-turn/altitude discipline particularly important here.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** 🟥 The field is **surrounded by Basque hills**; Mount Oiz (site of the 1985 Iberia 610 CFIT accident, on the arrival side) underlines the terrain seriousness of this field generally. Quantify specific departure-path obstacles from the current departure/area chart before flying an engine-out profile here.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** RWY 30 is confirmed **usable for takeoff in low-visibility conditions**; LVP trigger is any transmissometer RVR < 550 m, or visibility < 800 m if transmissometers are unserviceable. Cancelled when all transmissometers show RVR > 1,000 m with a firm improving trend. See [`OM E — Low Visibility Operations`](../../../../../flight-ops/low-visibility-operations.md).
- **De-icing:** De-icing apron (Code C max), **PRKG 111** (Code E), **PRKG 14** (alternate, including during LVP when the main de-icing apron is not usable). Code D/E aircraft de-ice at their own parking stand. Handling agent must request de-icing authorisation via SITA (BIOOOYA) or e-mail, reporting aircraft ID, type and ETA to the de-icing point.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Request start-up and taxi from **Bilbao GMC** on the appropriate frequency, or via **DCL** (data-link clearance) — see AIP ENR 1.5 §3 for the RCD/CLD/CDA message procedure. Voice always prevails over data link if there is any discrepancy.
- **Frequency sequence:** **Bilbao GMC 121.705 → Bilbao TWR 118.500 (note: ATIS will advise if TWR/GMC share 118.500) → Bilbao APP 127.450 (128.580 back-up).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** Bilbao exchanges A-DPI/C-DPI messages with NMOC as part of European A-CDM; the target take-off time (TTOT) is calculated from actual off-block time (AOBT), not filed EOBT — expect any pre-assigned CTOT to hold once the A-DPI is sent. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 12/30 (2,540-2,600 m, each with a displaced threshold reducing usable landing distance — not a takeoff-length factor) is workable for narrowbody/regional types; confirm current weight-and-balance performance for any K Global widebody planned here given the field's short-for-Code-E runway length and the taxiway/stand restrictions in §2. 🟧
- **Density altitude / temperature:** Non-issue at 136 ft, temperate Atlantic climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Winter snow-plan season (1 Dec-31 Mar) is the relevant seasonal consideration; no specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — confirm field-length margin for the assigned type; note the **no-widebody-back-track** rule on every runway (§10).

---

## 10. Gotchas

- **No widebody back-track on any runway** — RWY 28 back-track capped at CRJ900-size; RWY 12/30 back-track authorised only occasionally, by day, in ideal VMC, and capped at A321/B737-size. Do not plan a back-track departure for a Code E type.
- **RWY 30's displaced threshold makes holding point K1 a runway-access point** requiring explicit ATC clearance to cross — do not treat it as a routine holding position.
- **Multiple taxiway sections require mandatory oversteer for Code E aircraft** — brief the specific curved sections before pushing back.
- **PAPI RWY 12/30 is not usable for Code E aircraft** — this affects the return/visual-reference picture on an aborted-takeoff or circling scenario, not just arrivals.
- **Engine tests above idle power are forbidden 0000-0600 LT.**
- **Surrounding hilly terrain** — maintain altitude/climb-gradient discipline on any non-standard or engine-out departure profile.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima exact figures.
- Preferential-runway/config logic by wind (not found in reachable AIP text).
- EOSID/engine-out procedure detail per runway.
- Departure-path obstacle quantification (bearings/distances) beyond the general "surrounded by hills" characterisation.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. holding point K1 and PAPI status), CTOT/ATFM, de-icing status/pad assignment. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- AIP España (ENAIRE eAIP) — AD 2-LEBB, items 9, 12, 13, 18, 20, 22 — mirrored via https://ops.group/blog/wp-content/uploads/2025/07/LEBB-AIP.pdf (retrieved 2026-07-26). Taxi procedures, holding-point K1 special procedure, LVP, DCL/A-CDM detail, engine-test restriction.
- Wikipedia — "Bilbao Airport" — https://en.wikipedia.org/wiki/Bilbao_Airport (retrieved 2026-07-26). Terrain/accident-history corroboration.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP España (ENAIRE); K Global fields from live VAMSYS; 4-page pack. |
