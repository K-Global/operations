# FKYS — Nsimalen · Departure Page

**FKYS / NSI** · Yaoundé, Centre Region, Cameroon · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [FKYS Briefing](index.md), Dispatch and Arrival pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | 01 or 19 — single runway, wind-selected 🟧 |
| Config logic | Wind-driven (no published preferential rule found) |
| Transition altitude | Not published / verify 🟧 |
| Take-off minima | Not published / verify 🟧 |
| CTOT / flow regime | None found — assumed uncoordinated 🟧 |
| De-icing on departure | NIL |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not published / verify. 🟧
- **Hot spots / tight taxiways:** Not published / verify — no taxiway hot-spot data found in reachable sources. 🟧
- **Runway crossings / read-back-required points:** Not confirmed — single-runway field.
- **Low-vis taxi caveats:** Not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Single runway (01/19) — direction determined by wind, no published preferential-runway program.
- **By departure direction:** Not published / verify. 🟧
- **Noise / preferential-runway program:** None found — likely NIL. 🟧
- **Interaction with arrivals:** Single runway — arrivals and departures share the one strip; sequencing detail not published.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not published / verify | 01/19 | 🟧 Not confirmed — plausible given the surrounding hilly plateau terrain, but no SID inventory found in reachable public sources this pass | — |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Not published / verify — standard ICAO climb/speed schedule assumed. 🟧
- **Noise-abatement departure procedure (NADP):** None found — likely NIL. 🟧
- **Early turn / altitude constraints:** Not published / verify — the surrounding hilly terrain (Briefing §3.1) makes an early climb-gradient or turn constraint plausible; not confirmed. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not published / verify. 🟧
- **Close-in / distant obstacles:** No confirmed close-in obstacle inventory; Yaoundé's undulating plateau setting (Briefing §3.1) warrants verifying the current obstacle/area chart before assuming a clear departure path in all directions. 🟧
- **Special DP / obstacle DP:** Not published / verify. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not published / verify — no confirmed low-visibility capability at this field (Briefing §9/§10). 🟧
- **De-icing:** NIL — tropical field, non-issue. 🟩

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not published / verify — cross-ref [Briefing §8](index.md). 🟧
- **Frequency sequence:** Delivery → Ground → Tower (119.1 MHz, tier-4) → Approach/Departure (121.3 MHz, tier-4) — full Delivery/Ground detail not confirmed.
- **CTOT / slot handling:** None found — assumed uncoordinated. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 🟩 3,400 m runway is generous in length for our fleet, reportedly 747-capable (tier-4 statement) — not confirmed as a limiting factor.
- **Density altitude / temperature:** 🟧 **2,278 ft field elevation** materially reduces the performance margin versus a sea-level field on a hot day — verify current takeoff performance against the [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for a high-weight departure.
- **Contamination / wet-runway:** ITCZ-band seasonal rain is a plausible braking-action consideration in-season; no FKYS-specific wet-runway data found. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-specific field-length/weight/elevation numbers.

---

## 10. Gotchas

- **Single runway, no reciprocal escape** — a disabled aircraft or obstruction on 01/19 stops all movement.
- **Field elevation + hot day** erodes takeoff performance margin more than at the coastal Cameroonian fields — verify current OAT/weight numbers before a high-weight departure.
- **Surrounding hilly plateau terrain** — not confirmed as a close-in obstacle, but do not assume a flat departure environment in every direction; verify the current chart.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- SID inventory, take-off minima, transition altitude, initial-climb/NADP/obstacle-DP detail — none confirmed.
- Full ATC frequency sequence (Delivery/Ground) — only Tower + Approach found.
- Taxiway hot spots and standard taxi routings — not published.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status (N/A here). Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/FKYS/ , /runways.html , /frequencies.html (retrieved 2026-07-26).
- Wikipedia — "Yaoundé Nsimalen International Airport" — https://en.wikipedia.org/wiki/Yaound%C3%A9_Nsimalen_International_Airport (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP/ASECNA; K Global fields from live VAMSYS; 4-page pack. |
