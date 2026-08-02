# TISX — Henry E Rohlsen · Departure Page

**TISX / STX** · Christiansted/Kingshill, U.S. Virgin Islands · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [TISX Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. Departure procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **RWY 10** preferred when wind allows (only end with ILS/MALSR); RWY 28 the reciprocal |
| Config logic | No formal published rule; prevailing easterly trade wind favours RWY 10 |
| Transition altitude | Not independently confirmed — standard US TA (18,000 ft / FL180) assumed 🟧 |
| Take-off minima | Published per the FAA Chart Supplement takeoff-minimums page; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | None found — no ATFM/EDCT program identified |
| De-icing on departure | **NIL** — sea-level tropical field |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not published for a field this size in reachable sources — confirm taxi routing with Ground on the day.
- **Hot spots / tight taxiways:** None identified in reachable sources for TISX specifically.
- **Runway crossings / read-back-required points:** Not published.
- **Low-vis taxi caveats:** Not published — VAMSYS taxi-out planning figure is **8 min** `[VAMSYS mirror 2026-07-26]`.

---

## 3. Runway / SID selection logic

- **By wind / config:** RWY 10 (ILS/LOC + RNAV(GPS), MALSR) is the de facto preferred departure runway when wind allows, aligning into the prevailing easterly trade wind; RWY 28 (RNAV-only on the arrival side, non-precision) is the reciprocal for departures when wind dictates.
- **By departure direction:** Not further differentiated in reachable sources.
- **Noise / preferential-runway program:** None published for TISX (contrast with TIST's published noise-sensitive-area note) — treat as **NIL/not published**. 🟧
- **Interaction with arrivals:** Single-runway field — departures and arrivals share the same 10/28 strip; sequencing is a Tower/San Juan CERAP function, not a parallel-runway consideration.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| HAMILTON NINE | 10 / 28 (verify chart) | Not confirmed 🟧 | Departure procedure (ODP) — pull current-AIRAC chart |
| SNOOZ FIVE | 10 / 28 (verify chart) | Not confirmed 🟧 | Departure procedure (ODP) — pull current-AIRAC chart |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per assigned procedure/ATC; standard 250 KIAS below 10,000 ft MSL (US domestic norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** None published for TISX in reachable sources. 🟧
- **Early turn / altitude constraints:** Published per the HAMILTON NINE/SNOOZ FIVE charts — verify on the current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** A charted **217 ft building sits 5,330 ft from the runway, 800 ft right of centreline**, associated with the RWY 28 end — relevant primarily to the RWY 28 approach but worth noting for any RWY 28 departure/EO planning too.
- **Special DP / obstacle DP:** Not confirmed beyond the named HAMILTON NINE/SNOOZ FIVE procedures — verify on chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed in reachable sources. 🟧
- **De-icing:** **NIL** — sea-level tropical field.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** No dedicated delivery frequency found; Tower (118.6/239.3) or San Juan CERAP (128.65, or phone 787-253-8664/8665) handles clearance depending on whether the Tower is open (0700–2200).
- **Frequency sequence:** **Ground 121.7 (0700–2200) → Tower 118.6/239.3 (0700–2200) → San Juan CERAP 128.65/279.6 (approach/departure, H24).** Take the assigned frequency and confirm current chart. (Frequencies from [Briefing §8](index.md).)
- **CTOT / slot handling:** None found — no ATFM/EDCT applicability identified for this field.

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 10,004 ft is **non-limiting** for any K Global type on either runway. Pavement-strength figures (S-100/D-175/ST-300, plus an unreconciled PCN/PCR value) are **not** confirmed as adequate for widebody weights despite the field's documented 747-capable history — verify independently before any widebody departure at high weight (see [Briefing §7/§17](index.md)). 🟧
- **Density altitude / temperature:** Non-issue at 74 ft, tropical sea-level field.
- **Contamination / wet-runway:** Tropical convective-shower contamination is the relevant seasonal consideration; no specific braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length performance penalty for any K Global type at TISX; the open question is pavement strength, not length.

---

## 10. Gotchas

- **RWY 28 is the weaker end** for any use — non-precision RNAV(GPS)-only on arrival, displaced threshold, and a known obstacle — factor this into runway-selection judgement even for a departure-only consideration.
- **Tower closes at 2200 and reopens at 0700** — after hours, expect San Juan CERAP for clearance by phone/frequency, and **pilot-activated lighting via CTAF** (MALSR RWY 10 / HIRL RWY 10-28, 2300–0700).
- **ARFF unavailable 2300–0500** — a real risk-acceptance item for any departure inside that window.
- **No published noise-abatement or preferential-runway rule** — runway selection is a wind/capability judgement call (favour RWY 10), not a charted noise procedure.
- **Hurricane season (Jun–Nov)** — build schedule contingency; this is the field's dominant seasonal operational risk.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID/ODP (HAMILTON NINE, SNOOZ FIVE) gradient/RNP specifics.
- Take-off minima exact figures.
- Engine-out/EOSID procedure detail.
- Start-up/push-back/ground procedure detail.
- Pavement-strength/PCN verification for any widebody departure.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/navaid/lighting, ARFF-hours status), tropical-cyclone advisories. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **FAA AIP Part 3 AD 2.0 Virgin Islands (TISX)** — https://www.faa.gov/air_traffic/publications/atpubs/aip_html/part3_ad_2.0_virgin_islands.html (retrieved 2026-07-26).
- **SkyVector — STX/TISX** (FAA data effective 2026-07-09) — https://skyvector.com/airport/STX/Henry-E-Rohlsen-Airport (retrieved 2026-07-26). *DP chart index (HAMILTON NINE, SNOOZ FIVE), obstacle data, frequencies.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national/territory AIP; K Global fields from live VAMSYS; 4-page pack. |
