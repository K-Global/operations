# RKSI — Incheon Intl · Arrival Page

**RKSI / ICN** · Incheon, Incheon Metropolitan City, South Korea · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional (tier-4 public-source corroborated), Asia network build

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [RKSI Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Wind/traffic-dependent across the four-runway field (15L/33R, 15R/33L, 16L/34R, 16R/34L) — reported operational split weights 15L/33R toward arrivals, but confirm assigned runway on the day |
| Usual approach | ILS, commonly reported CAT III-capable on all four runways — sub-category not confirmed |
| Config logic | Wind-driven, consistent with the seasonal NW-winter / SW-summer monsoon flow over the ~150°/330°-aligned runway pairs |
| Transition level | Not confirmed this pass — verify current chart 🟧 |
| LVP trigger | Winter snow/low-visibility events plausibly drive LVP use given the field's commonly-reported CAT III infrastructure; exact trigger not confirmed 🟧 |
| Missed-approach driver | Airspace/traffic density (shared Seoul TMA with Gimpo RKSS), not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Not confirmed — Seoul Approach assigns the STAR-to-runway transition for the active configuration; confirm the day's config with ATIS.
- **Transition to approach:** Expect an RNAV-STAR-to-ILS transition with radar vectors onto final; verify the charted transition. 🟧
- **Speed / flow constraints on the STAR:** Not confirmed — expect flow speed control given the field's high-density, shared-TMA environment.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate.
- **Speed control:** 250 KIAS below FL100 (ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes. Not independently confirmed this pass. 🟧
- **Energy traps:** Late runway/config changes ahead of a wind shift (between the 15/33 and 16/34 pairs), and possible re-sequencing during winter snow events or typhoon-season weather, are the main plausible energy traps at this field.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 15L/33R | ILS, commonly reported CAT III | Sub-category not confirmed 🟧 | verify current chart |
| 15R/33L | ILS, commonly reported CAT III | Sub-category not confirmed 🟧 | verify current chart |
| 16L/34R | ILS, commonly reported CAT III | Sub-category not confirmed 🟧 | verify current chart |
| 16R/34L | ILS, commonly reported CAT III | Sub-category not confirmed 🟧 | verify current chart |

- **LVP triggers:** Winter snow/low-visibility events are the plausible RKSI trigger, consistent with the field's commonly-reported CAT III infrastructure; exact RVR trigger and sub-category (IIIa/IIIb) not confirmed from a primary table this pass. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. RKSI is built on flat reclaimed land between the former Yeongjong and Yongyu islands — no close-in high terrain relevant to any arrival path.
- **Specific threats:** 🟧 Two closely-aligned runway pairs (15/33 and 16/34) sustain continuous parallel-adjacent traffic; winter snow/ice events can force reduced-rate arrivals. Wake-turbulence consideration applies during simultaneous/dependent operations across the runway set, as at any dense multi-runway hub — not independently RKSI-quantified this pass.
- **Airspace / traffic:** 🟧 High density under **Seoul Approach**, sharing the greater Seoul TMA with **Gimpo (RKSS)** ~18 NM away — brief for possible re-sequencing and extended vectoring, especially in marginal winter weather. See [Asia Airspace Brief](../../../../airspace/asia.md).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat reclaimed-land site) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around returns you to a dense, shared-TMA radar environment — expect possible vectoring/holding before re-sequencing, especially during a winter snow event or peak bank.
- **Go-around traps:** Runway/config awareness across the two closely-aligned runway pairs during the miss; not independently detailed beyond this general caution.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** Overall runway lengths 3,750 m (15L/33R, 15R/33L, 16R/34L) and 4,000 m (16L/34R); exact LDA/displaced-threshold figures **not published in reachable sources** — see Briefing §7/§18. 🟧 Overall lengths are ample for any K Global widebody arrival weight.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Apron on the day. 🟧
- **Runway-excursion watch:** 🟧 Winter-contamination braking-action consideration applies in the Nov–Mar season (see Briefing §14); no displaced-threshold data confirmed.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing, taxi in to **Terminal 1/Concourse A** or **Terminal 2** per Ground/Apron assignment; VAMSYS mirror gives a planning taxi-in time of **18 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** Not confirmed in reachable sources this pass — taxi with standard vigilance across the four-runway, high-density field pending chart-level confirmation. 🟧
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — Terminal 1/Concourse A widely reported A380-capable; Terminal 2 stand mix not independently confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Seoul Approach (119.05/119.10/119.75/120.80/121.35/124.20/124.70/293.30) → Incheon Tower (118.20/118.27/118.80/231.80) → Incheon Ground (121.70/121.75/121.87/121.92/226.90) → Incheon Apron (121.65/121.67/121.80/122.17/122.22/122.32/123.32/123.57).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8; tier-4 sourced, not AIP-verified.) 🟧
- **Approach/Departure control:** **Seoul Approach** is the terminal facility for Incheon; the **Incheon (RKRR)** FIR hands off en route inbound — see [Asia Airspace Brief](../../../../airspace/asia.md). 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **Confirm the exact assigned runway** — the 15/33- and 16/34-designated pairs are near-identical in published heading; do not assume one over the other.
- **Winter snow/ice events can reduce arrival rate quickly** — brief a holding/diversion contingency in season.
- **Shared Seoul TMA with Gimpo (RKSS)** sustains continuous high traffic density — expect vectoring/holding, especially in marginal weather or during a bank.
- **Config swap (15/33 ↔ 16/34) driven by a wind shift** can bring a late runway change — watch the ATIS wind trend.
- **Summer typhoon-season weather (~Jun–Oct)** can bring sudden convective activity affecting the approach — monitor SIGMET/TAF at planning.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- ILS sub-category (IIIa/IIIb) confirmation.
- Exact LVP/CAT III trigger RVR values.
- Rapid-exit taxiway/vacate detail and hot spots.
- Exact current ATC frequency assignment per sector (tier-4 sourced, not AIP-verified).
- Displaced-threshold/LDA figures per runway.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config/wind trend, current regional advisories per the [Asia Airspace Brief](../../../../airspace/asia.md). Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP Republic of Korea (Korea Office of Civil Aviation, eAIP portal)** — https://aim.koca.go.kr/eaipPub/Package/2024-03-20-AIRAC/html/eAIP/KR-AD-2.RKSI-en-GB.html (attempted 2026-07-26; portal renders as a script-driven frameset, no content returned to a public fetch this pass).
- SkyVector — https://skyvector.com/airport/RKSI/Incheon-International-Airport (retrieved 2026-07-26). *Runway heading/coordinate detail, communications.*
- OurAirports — https://ourairports.com/airports/RKSI/runways.html (retrieved 2026-07-26). *Runway dimension cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
