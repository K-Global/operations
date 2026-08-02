# YSSY — Kingsford Smith · Departure Page

**YSSY / SYD** · Mascot, Sydney, New South Wales, Australia · Oceania
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Australia-derived, K Global base build

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [YSSY Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **16R** (S/W/NW departures + International terminal) · **16L** (N/E departures) · **34L** (W/NW + non-jet S + International terminal) · **34R** (N + jet S) — LTOP-mode/wind dependent |
| Config logic | Wind- and noise-driven under the **Long Term Operating Plan (LTOP)** runway-rotation scheme (§3) |
| Transition altitude | Not confirmed this pass — verify current chart 🟧 |
| Take-off minima | RVR ≥125 m (RWY 16R/34L, 16L/34R); RVR ≥350 m (RWY 07/25) — CASA-approved operators |
| CTOT / flow regime | Sydney Slot Management Scheme (ACL); A-CDM with mandatory TOBT; GDP Inbound run on demand |
| De-icing on departure | Not confirmed — temperate coastal climate makes routine provisioning unlikely 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Default Ground routing: **TWY B northbound, TWY C southbound, TWY B10 eastbound** between TWY C and RWY 16L/34R, **TWY L westbound** between RWY 16L/34R and TWY B; confirm the exact taxi with Ground/Coordinator on the day.
- **Hot spots / tight taxiways:** 🟥 Numerous AIP-published **wingspan-restricted turns and intersections** — 36 m max-wingspan intersection departures from TWY B3/B4/B10 on RWY 16R/34L; turns at TWY B4/C/G/DOM2 restricted to 36 m wingspan; caution taxiing larger-than-B737/A320 aircraft on TWY B between B3 and RWY 07/25 or on TWY A (insufficient wingtip clearance if another large aircraft holds short behind). **A340-600, A380-800, A350-1000, B777-300 and B747-8** (our A388/B748/A35K/B77W types) follow specific mandated taxi routes — obtain the current Aircraft Operating Restrictions document from the Aerodrome Operator.
- **Runway crossings / read-back-required points:** RWY 07/25 crosses RWY 16R/34L with a marked Pattern A hold point and stop-bar lighting; expect explicit crossing instructions.
- **Low-vis taxi caveats:** During LVP, A-SMGCS monitors the manoeuvring area; if unserviceable, ATC further restricts movement and may implement position-reporting procedures. A380 aircraft have specific LVP taxi restrictions (departure from TWY A1/A6 only when operating RWY 16R/34L; TWY F not available for intersection departure; no towed A380 crossing of RWY 16R/34L). 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Governed by the **Long Term Operating Plan (LTOP)** — a published set of 10 runway-rotation modes designed to maximise movements over water/non-residential land and rotate residual community noise exposure through the day, subject to traffic and weather.
- **By departure direction:** Published departure-runway assignment: **RWY 16R** for departures to S/W/NW and all departures from the International terminal; **RWY 16L** for departures to N/E; **RWY 34L** for departures to W/NW, non-jets to the S, and International-terminal departures; **RWY 34R** for departures to the N and jets to the S. Aircraft operationally requiring RWY 16R/34L or 07/25 must notify ATC at clearance delivery.
- **Noise / preferential-runway program:** LTOP mode selection is the primary noise-preference mechanism; jet departures to the south may be assigned RWY 16L for traffic-management purposes even outside the default logic above.
- **Interaction with arrivals:** Aircraft up to and including A330/B787/B772 may be offered arrival on either parallel (16L/R or 34L/R) at clearance-delivery stage; **PRM (Precision Runway Monitor) operations** apply for simultaneous independent approaches to the closely-spaced parallels when nominated on the ATIS — expect priority sequencing changes for PRM-capable vs non-capable traffic.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 07/16L/16R/25/34L/34R | Not confirmed this pass — verify RNP/gradient on current chart | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below 10,000 ft AMSL when not on a SID/STAR/vector (AIP-confirmed).
- **Noise-abatement departure procedure (NADP):** Governed by LTOP mode selection rather than a single mandated NADP found in reachable sources this pass. 🟧
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat coastal site — no significant close-in terrain. Man-made obstacles noted in the AIP: a 223 ft AMSL telecommunications tower 2.28 NM west of ARP, and a transient cargo-container-train infringement of the RWY 25 approach/RWY 07 takeoff surfaces (max 15 ft AGL) — neither is a departure-path concern for a normal climb-out.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** RVR ≥125 m (RWY 16R/34L, 16L/34R); RVR ≥350 m (RWY 07/25), for CASA-approved operators. LVP preparation begins at 2,000 m visibility; full implementation at/below 800 m visibility or cloud base ≤600 ft BKN/OVC. All aircraft must depart from the full length of the assigned runway during LVP (no intersection departures).
- **De-icing:** Not confirmed in reachable sources — Sydney's temperate coastal climate makes routine de-icing provisioning unlikely to be a significant factor; verify locally before ruling out entirely. 🟧

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** **Sydney Delivery (ACD) 133.8**.
- **Frequency sequence:** **Delivery 133.8 → Sydney Coordinator 127.6 (pushback/start/engine-run coordination) → Ground (SMC) 121.7 (E of RWY 16R/34L) or 126.5 (W of RWY 16R/34L) → Tower 120.5 (RWY 16R/34L, 07/25) or 124.7 (RWY 16L/34R) → Sydney Departures North 123.0 or South 129.7 → Sydney Approach North 124.4 or South 128.3.** Note the distinctive two-step start sequence: aircraft with ground power contact **Coordinator first**, then are instructed to stand by for Ground — do not contact Ground directly until instructed. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** Comply with the **Sydney Slot Management Scheme (ACL)** slot and any A-CDM Target Off-Blocks Time (TOBT); GDP Inbound may apply reciprocal constraints from origin fields feeding YSSY.

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 16R/34L (3,962 m) is non-limiting for any K Global type; RWY 16L/34R (2,438 m) and RWY 07/25 (2,530 m) are non-limiting for typical departure weights but are governed by the fleet-specific taxi-restriction document for our largest types (A388/B748/A35K/B77W).
- **Density altitude / temperature:** Non-issue at 21 ft, temperate coastal climate — no hot-and-high penalty.
- **Contamination / wet-runway:** No specific contamination/braking-action data confirmed this pass; East Coast Lows can bring heavy rain. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty at YSSY for any K Global type; the operative planning consideration is the fleet-specific taxi-restriction/routing requirement for our largest types, not aircraft performance.

---

## 10. Gotchas

- **Contact Sydney Coordinator (127.6) first for pushback/start, not Ground directly** — a distinctive local procedure; Ground will initiate contact once compliant with ATFM.
- **Intersection departures by jet aircraft on RWY 34L are not permitted** (except medical-priority flights).
- **36 m wingspan restrictions apply at several named taxiway intersections** (TWY B3/B4/B10, TWY C, TWY G, TWY DOM2) — verify before routing a widebody through them.
- **A388/B748/A35K/B77W follow mandated fleet-specific taxi routes** — obtain the current Aircraft Operating Restrictions document from the Aerodrome Operator before a first movement.
- **PRM operations may change departure sequencing priority** when nominated on the ATIS — non-PRM-capable traffic may see reduced priority.
- **Hard curfew 2300–0600** — a late-day departure delay risks being prohibited outright once the shoulder-period exemption criteria cannot be met; build buffer into the last rotation.
- **80 movements/hour cap** applies at all hours, not just at night — a peak-bank schedule slip can itself become a flow-control event independent of the curfew.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names, RNP/gradient specifics per runway.
- Transition altitude confirmation.
- NADP preference/noise-abatement departure detail (governed by LTOP mode, specific NADP not confirmed).
- De-icing availability/procedure (likely not applicable; not independently confirmed).
- EOSID/engine-out procedure detail per runway.
- Contamination/braking-action data for wet-runway conditions.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, PRM-ops status), CTOT/ATFM, curfew shoulder-period exemption status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP Australia (Airservices Australia) — AD 2 YSSY, Aerodrome Facilities (FAC) chart**, effective 09 Jul 2026 — https://www.crc.id.au/xplane/charts/ERSA-2026-JUL-09/Sydney-Kingsford%20Smith%20(YSSY)%20FAC.pdf (retrieved 2026-07-26). *Departure-runway assignment logic, taxiway restrictions, LVP procedures, frequency sequence, start/pushback procedure.*
- Department of Infrastructure, Transport, Regional Development, Communications, Sport and the Arts / SACF — "The Long Term Operating Plan (LTOP)" — https://sacf.infrastructure.gov.au/ltop (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Australia (Airservices); K Global fields from live VAMSYS; 4-page pack. |
