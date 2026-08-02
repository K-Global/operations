# EGPH — Edinburgh · Departure Page

**EGPH / EDI** · Edinburgh (Ingliston), Lothian, Scotland, United Kingdom · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [EGPH Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **06 or 24** — wind-driven, no crosswind alternative on the field |
| Config logic | Single-runway field; runway-in-use is purely wind-driven (general climatology would favour RWY 24 more often — inference, not a sourced split) 🟧 |
| Transition altitude | 6,000 ft |
| Take-off minima | Published per AIP — exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | ACL-coordinated (§4); DCL EOBT timings apply (winter -25 min, summer -22 to -25 min) |
| De-icing on departure | Available H24 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not confirmed in detail from reachable sources — confirm the assigned taxi route with Ground on the day, from the single terminal's stand/pier to the active end of RWY 06/24. 🟧
- **Hot spots / tight taxiways:** None identified in the reachable AIP extract this pass. 🟧
- **Runway crossings / read-back-required points:** Single runway, no crossing runway on the field — crossing-instruction complexity is low relative to a multi-runway field, but confirm any published taxiway hot spot on the current chart.
- **Low-vis taxi caveats:** The field's CAT II/III capability implies low-visibility taxi procedures are in place; SMGCS-type routing/follow-me availability not independently confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Single runway 06/24 with **no crosswind alternative** — the assigned runway is purely a function of the reported/forecast wind, and a crosswind limit here is a genuine go/no-go item, not a theoretical one.
- **By departure direction:** RWY 06 departs to the ENE; RWY 24 departs to the WSW. No published departure-direction preference beyond wind.
- **Noise / preferential-runway program:** Named **Noise Preferential Routes (NPRs)** apply by departure runway/route — **Talla, St Abbs/Newcastle, GRICE, GOSAM** (names only; fly the charted current-AIRAC routing and follow ATC instruction — the detailed track/turn instructions are not transcribed here).
- **Interaction with arrivals:** Single-runway field — departures and arrivals share the same runway, so runway-direction changes affect both simultaneously; sequencing complexity is lower than a multi-runway hub but a runway-direction swap (wind shift) affects the whole operation at once.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 06 / 24 | Not confirmed — verify RNP/gradient on current chart | Pull the live current-AIRAC SID list before use. Named NPRs (Talla, St Abbs/Newcastle, GRICE, GOSAM) apply by name only — see §3. |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC instruction; 250 KIAS below FL100 (UK/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed as a specific mandated NADP1/2 variant in reachable sources — the field's noise-abatement approach is expressed primarily through the named NPRs and the visual-approach/reverse-thrust night rules (see Briefing §12). 🟧
- **Early turn / altitude constraints:** Published per SID/NPR — not transcribed here; verify constraints on the current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** No close-in high terrain identified at the field itself; the **Pentland Hills** (up to ~579 m at Scald Law) lie roughly 10–15 km to the south — a distant feature, not independently cross-checked against the current obstacle/EOSID chart. See [Briefing §3.1](index.md). 🟧
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed this pass — the field's CAT II/III authorisation on both runway ends implies a developed low-vis capability; specific LVTO RVR minima not confirmed. 🟧
- **De-icing:** **Available H24** per AIP. Fluid type, pad location(s) and throughput not confirmed in reachable sources. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** **Datalink departure clearance (DCL)** available (ARINC 623-2/Eurocae ED 85-A compliant) — winter EOBT-25 min, summer EOBT-22 to -25 min depending on time of day. Voice clearance via **Edinburgh Delivery 121.980** (Mon–Fri/Sat/Sun 0600–2200/0500–2100 UTC; outside these hours contact Tower 118.705).
- **Frequency sequence:** **Delivery 121.980 (HX, or Tower 118.705 outside Delivery hours) → Ground 121.755 (same hours as Delivery) → Tower 118.705 (H24) → Edinburgh Approach/Radar 121.205 (H24) / 128.980 (H24, as directed).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** Every flight (except GA/military) requires prior CEO (EAL) approval and prior ACL notification — see [Briefing §5](index.md)/[Dispatch §4](dispatch.md). Comply with any assigned CTOT/EDCT-equivalent per current ATFM guidance.

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 06/24 (2,556 m, TORA 2,556 m / 2,553 m) is generally non-limiting for narrowbody/regional Code C types; a **Code E widebody at high takeoff weight should be checked against the current-cycle field-length/weight chart** — the 213 m threshold displacement each end reduces LDA (2,344/2,347 m) but does not itself reduce the take-off run available. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).
- **Density altitude / temperature:** Non-issue at 136 ft, temperate maritime climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Scottish winter icing/snow season is the relevant seasonal consideration (§7); no specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — check any Code E/F type against the 2,556 m runway and its displaced-threshold figures before planning a widebody departure at high weight.

---

## 10. Gotchas

- **Single runway, no crosswind alternative** — a crosswind limit is a genuine go/no-go factor here, not theoretical.
- **Both thresholds inset 213 m** — full-length TORA is available for take-off, but do not confuse this with the shorter LDA figures used for landing planning.
- **Intersection take-offs are shorter** — Bravo1 (RWY 06) and Charlie1 (RWY 24) each publish a materially reduced TORA/TODA/ASDA versus a full-length departure; confirm which is assigned.
- **Handling agent mandatory, PPR required due to limited parking space** — do not plan an ad-hoc departure without confirmed handling/ACL clearance.
- **DCL EOBT timing differs by season** — winter -25 min, summer -22 to -25 min depending on time of day; brief the correct window.
- **Code E/F aircraft must vacate at the runway end (via A1 or D1) only** — unless escorted by a follow-me vehicle; do not assume an early high-speed turnoff is available for a widebody.
- **Large bird population, active shell-cracker deterrents in use** — brief an elevated bird-strike watch on the take-off roll and initial climb.
- **Reverse thrust/pitch use is discouraged 2300–0600** "for environmental reasons" — a soft guideline, not a hard restriction, but brief it.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names, RNP/gradient specifics per runway, and full NPR track/turn detail.
- Take-off minima exact figures.
- Stand → runway taxi routing detail and any hot spots.
- NADP preference (if any is mandated for this field).
- LVTO RVR minima, SMGCS/low-vis taxi and follow-me specifics.
- EOSID/engine-out procedure detail per runway.
- De-icing pad location(s)/fluid type/season months.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/navaid/lighting, bird activity), CTOT/ATFM status, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **UK NATS eAIP — AIP United Kingdom, AD 2 EGPH**, AIRAC effective 2020-10-08 — https://www.aurora.nats.co.uk/htmlAIP/Publications/2020-10-08-AIRAC/html/eAIP/EG-AD-2.EGPH-en-GB.html (retrieved 2026-07-26). *Runway/declared distances, DCL/EOBT timing, NPR names, communications.*
- OurAirports — https://ourairports.com/airports/EGPH/ (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from UK AIP (NATS AIS); K Global fields from live VAMSYS; 4-page pack. |
