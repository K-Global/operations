# RKSI — Incheon Intl · Departure Page

**RKSI / ICN** · Incheon, Incheon Metropolitan City, South Korea · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional (tier-4 public-source corroborated), Asia network build

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [RKSI Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Wind/traffic-dependent across the four-runway field (15L/33R, 15R/33L, 16L/34R, 16R/34L) — reported operational split weights 15R/33L and 16L/34R/16R/34L toward departures, but confirm assigned runway on the day |
| Config logic | Wind-driven, consistent with the field's ~150°/330°-aligned runway pairs and the seasonal NW-winter / SW-summer monsoon flow |
| Transition altitude | Not confirmed this pass — verify current chart 🟧 |
| Take-off minima | Not published / verify 🟧 |
| CTOT / flow regime | Not confirmed — no slot-coordination level found in reachable sources 🟧 |
| De-icing on departure | Available in season (reported Nov–Mar); facility detail not confirmed 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From Terminal 1/Concourse A or Terminal 2, Ground/Apron routes toward the assigned departure runway; confirm the exact taxi with Apron/Ground on the day. Not independently detailed this pass. 🟧
- **Hot spots / tight taxiways:** Not confirmed in reachable sources this pass — verify locally and on the current chart. 🟧
- **Runway crossings / read-back-required points:** Not confirmed — a four-runway field with two closely-aligned runway pairs should be expected to have runway-crossing sequencing; confirm with Ground/Tower on the day.
- **Low-vis taxi caveats:** Winter snow/ice conditions may drive SMGCS-style low-vis taxi routing; not independently confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Wind-driven selection across the 15/33- and 16/34-designated runway pairs, consistent with the seasonal monsoon wind pattern (winter NW flow favouring the 33/34 headings, summer SW flow favouring 15/16); confirm actual config with ATIS/ATC.
- **By departure direction:** Not confirmed — no published preferential-direction logic found this pass. 🟧
- **Noise / preferential-runway program:** Not confirmed in reachable sources. 🟧
- **Interaction with arrivals:** The field's two closely-aligned runway pairs and shared Seoul-TMA traffic with nearby Gimpo (RKSS) drive continuous coordination between arrival and departure streams — see [Briefing §3.2](index.md).

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 15L/33R, 15R/33L, 16L/34R, 16R/34L | Not confirmed — verify RNP/gradient on current chart | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed in reachable sources. 🟧
- **Early turn / altitude constraints:** Not confirmed — verify on the current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** RKSI is built on flat reclaimed land between the former Yeongjong and Yongyu islands — no significant close-in terrain/obstacle identified. 🟩
- **Special DP / obstacle DP:** Not confirmed — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Commonly-reported CAT III infrastructure across all four runways suggests a capable low-visibility environment; specific LVTO RVR minima not confirmed this pass. 🟧
- **De-icing:** Reported available in season (Korean winter, roughly Nov–Mar); exact pad locations/procedure not confirmed from a primary source this pass. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md). 🟧

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Incheon Delivery 121.60 / 121.87 / 269.20 (per Briefing §8, tier-4 sourced).
- **Frequency sequence:** **Delivery 121.60/121.87/269.20 → Apron 121.65/121.67/121.80/122.17/122.22/122.32/123.32/123.57 → Ground 121.70/121.75/121.87/121.92/226.90 → Tower 118.20/118.27/118.80/231.80 → Seoul Departure 121.40/124.80/125.15/353.20.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8; not independently AIP-verified.) 🟧
- **CTOT / slot handling:** No confirmed slot-coordination or CTOT regime found in reachable sources — comply with any assigned flow restriction communicated by ATC/dispatch. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** All four runways (3,750–4,000 m) are non-limiting for any K Global type.
- **Density altitude / temperature:** Non-issue at 23 ft elevation — no hot-and-high penalty.
- **Contamination / wet-runway:** Winter snow/ice (Nov–Mar) is the relevant seasonal consideration (§7); no specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty identified for any K Global type at RKSI.

---

## 10. Gotchas

- **Two runway pairs (15/33 and 16/34) carry different designators despite near-identical published headings** — confirm the exact assigned runway explicitly, don't infer it from heading alone (see Briefing §18).
- **Winter snow/ice season (Nov–Mar)** — confirm de-icing status and expect potential ground-delay exposure on snow days.
- **Shared Seoul TMA with Gimpo (RKSS), ~18 NM away** — expect continuous coordination workload during peak departure banks.
- **Summer monsoon/typhoon season (~Jun–Oct)** can bring sudden convective activity and gusty crosswinds — monitor ATIS trend before pushback.
- **SID names, take-off minima and exact frequency assignment are unconfirmed from a primary source** — treat this page as a planning frame and always fly/verify the current-AIRAC chart.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima / transition altitude.
- Start-up/push-back procedure detail (cross-bleed/APU notification).
- NADP preference and noise-abatement routing, if any.
- LVTO RVR minima and de-icing pad assignment.
- EOSID/engine-out procedure detail per runway.
- Exact current ATC frequency assignment per sector (tier-4 sourced, not AIP-verified).

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP Republic of Korea (Korea Office of Civil Aviation, eAIP portal)** — https://aim.koca.go.kr/eaipPub/Package/2024-03-20-AIRAC/html/eAIP/KR-AD-2.RKSI-en-GB.html (attempted 2026-07-26; portal renders as a script-driven frameset, no content returned to a public fetch this pass).
- SkyVector — https://skyvector.com/airport/RKSI/Incheon-International-Airport (retrieved 2026-07-26). *Runway heading, communications.*
- NASA NTRS — Zhu & Eun, "ICN Deicing Operations Analysis" — https://ntrs.nasa.gov/api/citations/20190000853/downloads/20190000853.pdf (retrieved 2026-07-26). *De-icing season corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
