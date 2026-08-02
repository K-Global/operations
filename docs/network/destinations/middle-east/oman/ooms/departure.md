# OOMS — Muscat Intl · Departure Page

**OOMS / MCT** · Seeb, Muscat, Oman · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [OOMS Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Not published — presumed wind-driven between the **08L/26R** and **08R/26L** parallel pair 🟧 |
| Config logic | Wind-driven (presumed); no published preferential-runway rule found |
| Transition altitude | Not confirmed in reachable sources 🟧 |
| Take-off minima | Not published / verify 🟧 |
| CTOT / flow regime | None found in reachable sources — treated as none 🟧 |
| De-icing on departure | **NIL** — arid climate, not required 🟩 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not detailed in reachable sources — confirm the assigned taxi routing with Ground/Apron on the day. 🟧
- **Hot spots / tight taxiways:** None confirmed in reachable sources this pass. 🟧
- **Runway crossings / read-back-required points:** Not detailed. 🟧
- **Low-vis taxi caveats:** Given the field's confirmed **CAT II** low-visibility approach capability (§Briefing §9), a corresponding low-visibility taxi/SMGCS procedure plausibly exists but was not confirmed in reachable sources. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Not published — presumed wind-driven selection between the two parallel-runway pairs (08L/26R north, 08R/26L south). 🟧
- **By departure direction:** Not confirmed. 🟧
- **Noise / preferential-runway program:** No departure-noise-routing procedure found. The one sourced noise item at this field applies to **arrivals** on RWY 08L (idle-reverse recommendation, 1600–0200 UTC) — see [Briefing §12](index.md) — not a departure consideration. 🟧
- **Interaction with arrivals:** Both runways are full-length parallel pairs (no perpendicular crossing runway as at some other Gulf/European hubs) — dependent/independent parallel-operations logic not confirmed in reachable sources. 🟧

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| VUSET / SEVLA / MUSRU / EMURU / IZK family | 08L | Not confirmed 🟧 | Tier-4 procedure-name cross-check only — not independently AIP-confirmed |
| VUSET / SODEB / SEVLA / MUSARU (RNAV/GNSS) family | 26R | Not confirmed 🟧 | Tier-4 procedure-name cross-check only |
| MUSRU / EMURU / IZK / IVETO / DAPOK family | 26R | Not confirmed 🟧 | Tier-4 procedure-name cross-check only |
| VUSET / SODEB / SEVLA / MSURU / EMURU (RNAV/GNSS) family | 08L | Not confirmed 🟧 | Tier-4 procedure-name cross-check only |

*Pull the live current-AIRAC SID list and exact runway/transition assignment before use — the names above are a tier-4 cross-check, not a primary-source confirmation.*

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Standard 250 KIAS below FL100 (ICAO norm) assumed — confirm current chart. 🟧
- **Noise-abatement departure procedure (NADP):** No NADP preference found in reachable sources. 🟧
- **Early turn / altitude constraints:** Not confirmed — verify on the current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** The AIP's own comm-failure guidance cites **terrain south of the RWY 08L/26R extended centreline** as a reason to hold position discipline on an IMC intercept — the same general-area terrain awareness is worth carrying into any engine-out/EOSID planning south of the field. See [Briefing §3.1](index.md). 🟧
- **Special DP / obstacle DP:** Not confirmed — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed in reachable sources; the field's confirmed CAT II ILS implies a corresponding LVP regime exists, but exact LVTO RVR minima were not obtained. 🟧
- **De-icing:** **NIL** — arid desert climate; not applicable. 🟩

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Muscat Clearance **125.575** (hours not confirmed).
- **Frequency sequence:** **Muscat Clearance 125.575 → Muscat Ground (SMC) 121.800 (primary) / 127.875 (secondary), or "North Ground" 121.875 (tier-4, unconfirmed) → Muscat Tower 118.825 (primary, 2019 AIP cycle — 🟧 a 2026 tier-4 cross-check instead shows 118.4, verify current chart) → Muscat Approach/Radar 121.200.** Take the assigned frequency and confirm current chart. (Frequencies from [Briefing §8](index.md).)
- **CTOT / slot handling:** No CTOT/ATFM regime confirmed for OOMS — treated as none. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Both runway pairs (4,000 m / 4,080 m) are non-limiting for any K Global type. 🟩
- **Density altitude / temperature:** Field is sea-level (48 ft) — not hot-and-high by elevation, but **extreme summer ambient heat** (commonly 40–45°C+, Jun–Sep) is still a performance-margin caution on the hottest days. 🟧
- **Contamination / wet-runway:** Arid climate — routine runway contamination is not a seasonal factor; rare intense-rainfall events (e.g. tropical-system remnants) are possible but not a regular planning driver. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty identified for any K Global type at OOMS.

---

## 10. Gotchas

- **Displaced thresholds on both runways** (26R: 162 m; 08R: 419 m) — relevant to takeoff distance available from the non-standard end as well as landing distance; confirm current declared distances.
- **Traffic-circuit direction differs by runway** (26R right-hand, 08L left-hand) — relevant to any circling/visual departure contingency.
- **Terrain south of the RWY 08L/26R extended centreline** is an AIP-cited caution — carry the same position-awareness discipline into departure/EOSID planning as for arrival.
- **ILS is CAT II, not CAT III** — do not plan a CAT III-dependent contingency at this field.
- **Tower frequency has a source discrepancy** (118.825 vs. 118.4) — confirm the current chart before relying on either figure.
- **72-hour PPR applies to non-scheduled/private flights** — not relevant to scheduled K Global service, but a reminder that ad hoc/charter sectors here need lead time.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names, runway assignment and RNP/gradient specifics.
- Take-off minima / DVA exact figures.
- Preferential-runway/config-selection logic.
- Start-up/push-back procedure detail beyond the apron chocks/fire-cover requirement.
- LVTO RVR minima and SMGCS/low-vis taxi specifics.
- EOSID/engine-out procedure detail per runway.
- Standard taxi routes and hot spots.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM (if any), live shamal/dust advisories, GNSS-interference advisories. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **Oman PACA AIP, AD 2.OOMS** (AMDT 2-19, eff. 10 Oct 2019) — communications, apron/start-up requirements, comm-failure/terrain guidance — https://uniforce-sog.org/wp-content/uploads/2024/06/OOMS-CHART-AIP.pdf (retrieved 2026-07-26).
- PilotNav — SID/STAR name cross-check (tier-4) — https://www.pilotnav.com/airport/OOMS (retrieved 2026-07-26).
- OurAirports — frequency/runway cross-check — https://ourairports.com/airports/OOMS/frequencies.html , /runways.html (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
