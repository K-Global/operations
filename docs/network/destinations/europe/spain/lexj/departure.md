# LEXJ — Seve Ballesteros-Santander · Departure Page

**LEXJ / SDR** · Maliaño, Cantabria, Spain · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP España-derived

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LEXJ Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **11 or 29** — single runway, no displaced threshold either end |
| Config logic | Wind-driven; RWY 29 approach (not departure) is the one explicitly cautioned direction (§3, Briefing §3.4) |
| Transition altitude | 1,850 m / 6,000 ft (CTR upper limit) — verify TA/TL split on current chart 🟧 |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | Not independently confirmed for this field's ATFM exposure 🟧 |
| De-icing on departure | 🟧 Handling-agent hot water/glycol at stand — reconcile against the operating-hours table's "No" entry before relying on it |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** RWY 29-in-use: departures exit the apron via **GATE A**, generally taxiing via **TWY T1 and Y1**. RWY 11-in-use: departures exit via **GATE B**, generally taxiing via **TWY T3 and Y4 or Y3**. Gate assignment can be varied by the movement-area supervision service for operational reasons (e.g. an aircraft blocking the assigned gate access road, stand allocation, aircraft type).
- **Hot spots / tight taxiways:** 🟥 **The parallel taxiway does not reach either runway threshold**, so it is normally necessary to **taxi along the runway itself** to reach the departure end — aircraft must be ready for immediate take-off upon lining up; if unable to comply, notify ATC before reaching the runway-holding positions at Y-1, Y-2 or T-3. Simultaneous use of the runway and its parallel taxiway is **incompatible when a Code E aircraft is involved**.
- **Runway crossings / read-back-required points:** All surface movements of aircraft, towed aircraft, personnel and vehicles in the manoeuvring area require prior ATC clearance.
- **Low-vis taxi caveats:** 🟧 **No LVP exists at this field** — the Movement-Area Operational Standstill Procedure (PPOAM 550) applies instead: taxiing of only one aircraft at a time is authorised in the manoeuvring area when RVR is between 550-800 m, and operations in the movement area come to a full standstill below RVR 550 m.

---

## 3. Runway / SID selection logic

- **By wind / config:** Wind-driven; the AIP's one explicit preferential-direction rule concerns the RWY 29 **approach**, not departure — no published departure-direction preference beyond standard wind selection.
- **By departure direction:** Not confirmed in reachable sources this pass. 🟧
- **Noise / preferential-runway program:** No fixed-wing NAP/NADP detail confirmed. 🟧
- **Interaction with arrivals:** Given the field's procedural/limited-surveillance environment (Briefing §3.2), expect ATC to sequence departures and arrivals conservatively, particularly when the Solórzano radar feed is degraded.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 11 / 29 | Not confirmed this pass | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** No fixed-wing NADP detail confirmed in reachable sources. 🟧
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** No significant close-in high terrain identified for this coastal field (Briefing §3.1) — terrain is not the primary departure-path concern here; the field's signature hazard (wind shear) is an **arrival-side** phenomenon on RWY 29, not a departure consideration.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not independently confirmed this pass; note that **no LVP exists** at this field (§2) — a low-visibility departure would proceed under the PPOAM 550 ground-movement framework rather than a standard LVP regime. Verify current-AIRAC LVTO minima. 🟧
- **De-icing:** 🟧 Handling-agent-provided hot water/glycol at the parking stand — no dedicated de-icing pad; reconcile against the operating-hours table's "No" scheduled-service entry (Briefing §11) before planning a winter departure here. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Request start-up/push-back from ATC on the appropriate frequency; the aircraft must be ready to start up immediately, or within a maximum of 5 minutes of the request.
- **Frequency sequence:** **Santander TWR 118.375 (APP function) / 118.105 (TWR function) / 121.705 (GMC function).** Santander operates a **combined APP/TWR position** — take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** Not independently confirmed for this field's ATFM exposure. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** The single 2,320 m runway (no displaced threshold either end) is workable for narrowbody/regional types; for any K Global widebody, confirm current weight-and-balance performance against this length and against the dedicated higher-code-letter operating procedure (Briefing §13). 🟧
- **Density altitude / temperature:** Non-issue at 16 ft, temperate coastal climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Winter snow-plan season (1 Dec-31 Mar) is the relevant seasonal consideration; no specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — confirm field-length margin and the higher-code-letter procedure for the assigned type.

---

## 10. Gotchas

- **Taxiway does not reach the runway thresholds** — expect to backtaxi/taxi along the runway itself to the departure end; be ready for immediate takeoff upon lining up, or notify ATC before the holding position.
- **No LVP at this field** — PPOAM 550 substitutes and is materially more restrictive for ground movement (single-aircraft taxiing 550-800 m RVR; full standstill below 550 m).
- **Combined APP/TWR position** — do not expect a separate approach-control frequency/facility.
- **Higher-code-letter (D/E) aircraft require oversteering at several named turns** on any ground movement, including departure taxi from PRKG 10.
- **De-icing service status is ambiguous** in the published AIP (facilities table vs operating-hours table) — confirm with handling before a winter departure.
- **Gull activity mid-June to mid-September** — a real bird-strike consideration on the runway during the takeoff roll in season.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima exact figures.
- LVTO minima under the PPOAM 550 framework.
- EOSID/engine-out procedure detail per runway.
- De-icing service status reconciliation.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, current PPOAM/RVR status, bird-activity NOTAMs in season. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- AIP España (ENAIRE eAIP) — AD 2-LEXJ, items 12, 18, 20, 22 — https://aip.enaire.es/AIP/contenido_AIP/AD/AD2/LEXJ/LE_AD_2_LEXJ_en.pdf (retrieved 2026-07-26). Taxi procedures, minimum-runway-occupancy-time rule, PPOAM 550, higher-code-letter procedure.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP España (ENAIRE); K Global fields from live VAMSYS; 4-page pack. |
