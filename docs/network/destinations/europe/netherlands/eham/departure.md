# EHAM — Amsterdam/Schiphol · Departure Page

**EHAM / AMS** · Haarlemmermeer, Noord-Holland, Netherlands · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Netherlands (LVNL eAIP)-derived

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [EHAM Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **No fixed runway** — wind/noise-driven; **Polderbaan (36L)** primary in northerly wind, **Kaagbaan (24)** primary in southerly wind; **Zwanenburgbaan (18C)** / **Aalsmeerbaan (18L)** added as peak-departure secondaries — confirm via ATIS |
| Config logic | Full wind/noise-driven Preferential Runway System — see Briefing §3.2/§10/§11 |
| Transition altitude | Not independently confirmed this pass 🟧 |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | Slot-coordinated Level 3; night slot-restriction window 2200–0600 (2100–0500 winter) |
| De-icing on departure | Assumed available given field scale/climate; not independently confirmed this pass 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From a Pier E/F/G widebody stand, Ground/Apron routes toward the assigned departure runway per the active combination (Polderbaan, Kaagbaan, Zwanenburgbaan or Aalsmeerbaan) — confirm the exact taxi with Ground on the day; the Ground frequency itself is split by runway group (Briefing §8).
- **Hot spots / tight taxiways:** Not individually confirmed in reachable sources this pass — a six-runway field with frequent configuration changes carries elevated ground-routing complexity generically; verify current AIP/chart hot-spot annotations before taxi. 🟧
- **Runway crossings / read-back-required points:** Expect explicit crossing/hold-short instructions when routing to a runway on the far side of the airfield from the assigned stand (e.g. Polderbaan is the most distant runway from the terminal complex) — taxi time to Polderbaan is notably longer than to the closer runways.
- **Low-vis taxi caveats:** SMGCS/low-vis taxi routing applies in winter fog/low-cloud conditions consistent with the field's CAT III environment; follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Prevailing **northerly wind** → departures primary **Polderbaan (36L)**, secondary **Zwanenburgbaan (18C)** at peak. Prevailing **southerly wind** → departures primary **Kaagbaan (24)**, secondary **Aalsmeerbaan (18L)** at peak. Confirm the active combination via ATIS/ATC — do not assume a default.
- **By departure direction:** Not independently confirmed this pass beyond the wind-driven combination logic above — verify per-SID routing on the current chart. 🟧
- **Noise / preferential-runway program:** The runway-selection logic itself **is** the noise-abatement program (Briefing §3.2/§10/§11) — Polderbaan and Aalsmeerbaan are structured as effectively one-way (departure-favoured) ends specifically to route traffic over the least populated corridors.
- **Interaction with arrivals:** Departures off Polderbaan (36L) interact with the reciprocal Polderbaan arrival stream (18R) only in the sense that the runway swaps role with wind; departures off Kaagbaan/Zwanenburgbaan/Aalsmeerbaan interact with the concurrent arrival runway(s) assigned under the active combination — expect a busy, continuously coordinated six-runway environment.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 36L / 24 / 18C / 18L (per active combination) | Verify RNP/gradient requirement per SID on current chart | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart. 🟧
- **Noise-abatement departure procedure (NADP):** The field's structural noise mitigation is the runway-selection logic itself (§3); no specific fleet-wide NADP1/2 preference confirmed this pass. 🟧
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat Dutch polder land; no significant close-in terrain or obstacle identified in reachable sources for any departure runway.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** LVP applies consistent with the field's winter fog/low-cloud risk and CAT III infrastructure on six of the twelve runway ends; specific LVTO RVR minima not confirmed this pass. 🟧
- **De-icing:** Not independently confirmed in reachable sources this pass — a North Sea hub of this scale and winter climate is assumed to carry dedicated de-icing infrastructure; verify locally. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Schiphol Delivery **121.980** (clearance/start-up, VFR only) / **121.590** (H24).
- **Frequency sequence:** **Delivery 121.980/121.590 → Planner 121.655/121.590 (outbound planning) → Ground 121.560/121.705/121.805/121.905 (runway-group-specific, per Briefing §8) → Tower 119.230/118.105/118.280/135.110 (runway-group-specific) → Schiphol Approach/Departure 119.055/118.080/312.375/121.205.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** **IATA Level 3 slot-coordinated**; domestic IFR flights must comply with CTOT from the Network Manager per the AIP's local regulations. `[LVNL eAIP AD 2.EHAM 2.20]` Comply with any assigned CTOT/EDCT-equivalent.

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Non-limiting for any K Global type on the main runways (Polderbaan 3,800 m, Kaagbaan/Buitenveldertbaan/Aalsmeerbaan 3,400–3,453 m, Zwanenburgbaan 3,300 m). The Oostbaan (2,020 m) is not normally assigned to scheduled widebody departures.
- **Density altitude / temperature:** Non-issue at -11 ft, North Sea maritime climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Winter frontal weather (rain, occasional snow) is the relevant seasonal consideration; no specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty for any K Global type at EHAM.

---

## 10. Gotchas

- **No fixed departure runway** — the active combination is wind/noise-driven and changes through the day; always confirm via ATIS rather than assuming a default.
- **Polderbaan (36L) and Aalsmeerbaan (18L) are the departure-favoured directions** on their respective runways — their reciprocal ends (18R, 36R) are the normal landing directions, not the reverse.
- **Ground and Tower frequencies are split by runway group** — confirm the correct frequency for the assigned runway before taxi/take-off.
- **Polderbaan is the most distant runway from the terminal complex** — build extra taxi time into the plan when it is the assigned departure runway.
- **Night slot-restriction window 2200–0600 (2100–0500 winter)** is hard — a late-day departure delay risks missing the applicable slot window; build buffer into the last rotation.
- **Field elevation is -11 ft** — below-sea-level altimetry bookkeeping, not a performance factor, but worth a moment's mental-model check.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names, RNP/gradient specifics and take-off minima per runway.
- Transition altitude.
- Start-up/push-back procedure detail.
- NADP preference (if any beyond the structural runway-selection logic).
- LVTO RVR minima and follow-me/SMGCS specifics.
- EOSID/engine-out procedure detail per runway.
- De-icing infrastructure and pad assignment logic.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, active runway combination), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **LVNL eAIP (AIP Netherlands), AD 2.EHAM 2.18/2.20**, AIRAC AMDT 05-2026, effective 2026-05-14 — https://eaip.lvnl.nl/ (retrieved 2026-07-26). *Communications, local aerodrome regulations.*
- Schiphol — "Noise and runway combinations" — https://www.schiphol.nl/en/schiphol-as-a-neighbour/noise-and-runway-combinations/ (retrieved 2026-07-26). *Wind-dependent departure-runway pairing.*
- LVNL — "Current runway usage at Schiphol" — https://en.lvnl.nl/local-community/current-runway-usage-at-schiphol (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Netherlands (LVNL); K Global fields from live VAMSYS; 4-page pack. |
