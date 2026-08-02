# OLBA — Rafic Hariri Intl · Departure Page

**OLBA / BEY** · Beirut, Lebanon · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for X-Plane 11, not a chart. Companion to the [OLBA Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. **Pull the current Beirut (OLBB) FIR NOTAM/airspace-status picture before every departure — see §Open items and the [Middle East airspace brief](../../../../airspace/middle-east.md).** Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Wind-dependent between the 03/21 and 16/34 concrete pair; RWY 17/35 (original 1954 asphalt runway) rarely used |
| Config logic | Wind-driven; exact preferential criteria not confirmed 🟧 |
| Transition altitude | Not published / verify 🟧 |
| Take-off minima | A dedicated chart is indexed for the field; content not reachable this pass 🟧 |
| CTOT / flow regime | None identified — no ATFM/CTOT programme confirmed for the FIR 🟧 |
| De-icing on departure | Not confirmed either way; low-probability given climate 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not confirmed in reachable sources — confirm the assigned taxi routing with Ground on the day.
- **Hot spots / tight taxiways:** Not published / verify. 🟧
- **Runway crossings / read-back-required points:** Not confirmed. 🟧
- **Low-vis taxi caveats:** Not published / verify. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Selection between the 03/21 and 16/34 concrete pair is wind-driven; exact criteria not confirmed in reachable sources. 🟧
- **By departure direction:** SID assignment is direction-specific per the published SID/runway table (§4) — RWY 17/21 and RWY 34/35 each carry their own SID set, and RWY 03 has a distinct single-runway SID set.
- **Noise / preferential-runway program:** Not published / verify. 🟧
- **Interaction with arrivals:** Not confirmed — RWY 17/35 (rarely used) is unlikely to interact heavily with the active 03/21 or 16/34 arrival stream, but this is inferred, not sourced. 🟧

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| BOD 1 | 17, 21 | Not confirmed 🟧 | Named for the BOD locator NDB |
| BOD 2 | 34, 35 | Not confirmed 🟧 | |
| KALDE 2D | 17, 21 | Not confirmed 🟧 | Named for the KAD (KALDE) VOR/DME |
| KALDE 1E | 03 | Not confirmed 🟧 | |
| KALDE 2F | 34, 35 | Not confirmed 🟧 | |
| LATEB 1D | 17, 21 | Not confirmed 🟧 | |
| LATEB 1E | 03 | Not confirmed 🟧 | |
| LATEB 2F | 34, 35 | Not confirmed 🟧 | |
| LEBOR 1D | 17, 21 | Not confirmed 🟧 | |
| LEBOR 1E | 03 | Not confirmed 🟧 | A network-sim reference describes the LEBOR-series routing as transiting close over high interior terrain in northern Lebanon — treat as a pointer only; fly the charted altitudes and verify current AIRAC. |
| LEBOR 2F | 34, 35 | Not confirmed 🟧 | |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (ICAO norm) — confirm current chart. 🟧
- **Noise-abatement departure procedure (NADP):** Not published / verify. 🟧
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart, particularly for any SID routing toward the Mount Lebanon range (see [Briefing §3.1](index.md)).

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not published / verify. 🟧
- **Close-in / distant obstacles:** The Mount Lebanon range (Sannine ~2,628 m/8,622 ft, ~19 NM ESE) rises close to the field's east side — apply the operator/type EOSID for the assigned runway and brief the terrain to the east regardless of published procedure detail. 🟥
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not published / verify. 🟧
- **De-icing:** Not confirmed either way in reachable sources; Mediterranean coastal climate makes this a low-probability requirement. 🟧

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not separately published — confirm with Ground/Tower on initial contact (see [Briefing §8](index.md)).
- **Frequency sequence:** **Ground 121.900 → Tower 118.900 → Approach 120.300 → Beirut ACC 119.300.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8; note the unresolved Tower-frequency discrepancy flagged there.)
- **CTOT / slot handling:** No CTOT/ATFM programme identified for the Beirut (OLBB) FIR in reachable sources; no slot coordination reported required. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 03/21 (3,800 m) and RWY 16/34 (3,395 m) are non-limiting for any K Global type; RWY 17/35 (3,250 m, original 1954 asphalt runway, rarely used) is likewise non-limiting where used.
- **Density altitude / temperature:** Non-issue at 85 ft, coastal Mediterranean climate — no hot-and-high penalty.
- **Contamination / wet-runway:** No seasonal contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty identified for any K Global type at this field.

---

## 10. Gotchas

- **High terrain (Mount Lebanon range) lies close to the east** — brief this on every departure regardless of assigned SID; do not turn early toward rising ground.
- **RWY 17/35 is the original 1954 asphalt runway and is rarely used** — expect a different surface/friction profile and confirm current serviceability/NOTAM status if ever assigned.
- **Circling is not authorised east and south of the field** (published chart restriction, relevant if a departure abort/return is ever required) — see [Briefing §3.1](index.md).
- **Pull the current Beirut (OLBB) FIR NOTAM/airspace-status picture before every departure** — the regional airspace situation is documented as variable and NOTAM-driven; see the [Middle East airspace brief](../../../../airspace/middle-east.md).
- A 2024 public user report claims the Tower frequency differs from the charted 118.900 (122.700) — confirm the active frequency on ATIS/current chart before calling for start-up.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID RNP/gradient specifics per runway.
- Take-off minima exact figures (a dedicated chart is indexed but not reachable this pass).
- Transition altitude.
- Start-up/push-back procedure detail for scheduled commercial service.
- NADP/noise-abatement routing, if any.
- LVTO RVR minima and low-vis taxi/SMGCS specifics.
- EOSID/engine-out procedure detail per runway.
- Taxi routing and hot-spot detail (none confirmed this pass).
- **Current Beirut (OLBB) FIR NOTAM/airspace-status picture** — live, re-verify at every planning cycle per the standing caution.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, FIR/airspace-status), CTOT/ATFM (if any materialises), de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP Lebanon, AD 2.OLBA-73 — ILS RWY 16** (Directorate General of Civil Aviation, AIRAC AMDT NR 1/2021, eff. 25 Mar 2021) — mirrored via https://lb.ivao.aero/wp-content/uploads/2024/01/AD-2.OLBA-73-ILS-RWY-16.pdf (retrieved 2026-07-26). *Frequencies, transition level, circling restriction.*
- Navigraph — OLBA public chart-index page (chart **names only**) — https://navigraph.com/airport/OLBA/Beirut-Rafic-Hariri-International (retrieved 2026-07-26). *SID name/runway assignment.*
- OLBA (Optimal Lebanese Business Aviation) — private ground-handling operator's public "Lebanon AIP" reference page — https://www.olba.aero/AIP.php (retrieved 2026-07-26). *Tier-4; SID/runway cross-check.*
- IVAO Lebanon — "Lebanese Airports" (OLBA overview) — https://lb.ivao.aero/lebanese-airports/ (retrieved 2026-07-26). *Network-sim reference, not regulatory — LEBOR-series terrain-proximity note.*
- Wikipedia — "Mount Sannine" — https://en.wikipedia.org/wiki/Mount_Sannine (retrieved 2026-07-26). *Terrain elevation/location.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
