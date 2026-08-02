# EBLG — Liège · Departure Page

**EBLG / LGG** · Grâce-Hollogne, Liège Province (Wallonia), Belgium · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — tier-4 corroborated, primary AIP direct retrieval unsuccessful this pass

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [EBLG Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Not confirmed this session; main pair 05R/23L (3,690 m) or secondary 05L/23R (2,340 m) |
| Config logic | Wind-driven, presumed (simple two-runway layout); no preferential/noise-driven scheme identified |
| Transition altitude | 4,500 ft AMSL (Belgium national value, inferred from EBOS AIP — see Briefing §10) 🟧 |
| Take-off minima | Not published/verify 🟧 |
| CTOT / flow regime | **No curfew/slot regime**; standard ATFM exposure presumed low given traffic density 🟧 |
| De-icing on departure | Assumed available in season; pad/procedure not confirmed 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not confirmed this session — confirm the exact taxi with Apron/Ground on the day. VAMSYS mirror gives a planning taxi-out time of **8 min** `[VAMSYS mirror 2026-07-26]`, notably short relative to Brussels. 🟧
- **Hot spots / tight taxiways:** Not confirmed this session. 🟧
- **Runway crossings / read-back-required points:** Not confirmed. 🟧
- **Low-vis taxi caveats:** Not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Two-runway layout (05L/23R and 05R/23L, both on the same 05/23 orientation) — selection presumed wind-driven; not confirmed from a primary source this session. 🟧
- **By departure direction:** Not confirmed. 🟧
- **Noise / preferential-runway program:** **None identified** — consistent with the field's unrestricted-noise 24/7 cargo-hub operating model (Briefing §12). 🟩
- **Interaction with arrivals:** Not confirmed; traffic density is comparatively low given the cargo-dominant, currently-no-scheduled-passenger-service traffic mix.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 05L / 23R / 05R / 23L | Standard EU PBN (RNAV 5 enroute / RNP 1 terminal) expected — verify on current chart | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** **None identified** — consistent with the field's no-noise-restriction operating model. 🟩
- **Early turn / altitude constraints:** Published per SID — verify on the current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Not independently confirmed this session; the field sits on a plateau at 659 ft with the Ardennes proper further south/southeast — verify the MSA/obstacle chart at planning. 🟧
- **Special DP / obstacle DP:** Not confirmed — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed this pass. 🟧
- **De-icing:** Assumed available in season; exact pad locations/procedure not confirmed. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Liège Delivery **121.91** (H24 presumed).
- **Frequency sequence:** **Delivery 121.91 → Ground 121.91/121.93 (source values conflict slightly, confirm at planning) → Tower 118.13 → Approach 119.28 → Brussels FIR (EBBU) en route.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8, tier-4 sourced.)
- **CTOT / slot handling:** No curfew/slot regime identified; standard ATFM practice presumed low-impact given traffic density. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Main runway (05R/23L, 3,690 m) is non-limiting for any K Global type even after the approximate displaced-threshold deduction (Briefing §7). The secondary runway (05L/23R, 2,340 m) is shorter — check against type/weight if assigned.
- **Density altitude / temperature:** Field elevation 659 ft, temperate climate — no meaningful hot-and-high penalty, though marginally higher than the Belgian coastal/Brabant fields.
- **Contamination / wet-runway:** Winter snow/ice season is the relevant seasonal consideration; no specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty for K Global types on the main runway.

---

## 10. Gotchas

- **No curfew, but do not assume a quiet overnight field** — Liège runs genuine 24/7 freighter traffic; brief for active night-ramp/taxi activity at any hour.
- **Secondary runway (05L/23R) is notably shorter (2,340 m)** than the main pair — confirm suitability if assigned.
- **Field elevation (659 ft) is higher than the Belgian coastal/Brabant fields** — a minor but real difference from EBBR/EBOS performance planning baselines.
- **VAMSYS taxi times are notably short (6/8 min)** relative to Brussels — consistent with a smaller, less congested field; do not pad turn-times as if this were a major hub.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima / DVA exact figures.
- Start-up/push-back procedure detail.
- LVTO RVR minima and taxi hot-spot detail.
- EOSID/engine-out procedure detail per runway.
- Primary AIP direct retrieval unsuccessful this session — re-verify all figures (see Briefing §18).

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP Belgium (skeyes eAIP), AD 2 EBLG** — https://ops.skeyes.be/html/belgocontrol_static/eaip/eAIP_Main/html/eAIP/EB-AD-2.EBLG-en-GB.html — primary source of record; direct retrieval unsuccessful this session.
- OurAirports / SkyVector / Air Cargo Week / TIACA — see Briefing page for full citations.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Belgium (skeyes); K Global fields from live VAMSYS; 4-page pack. |
