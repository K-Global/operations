# NWWW — Nouméa La Tontouta · Departure Page

**NWWW / NOU** · Païta, near Nouméa, New Caledonia · Oceania
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional, primary AIP not directly reachable this pass

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [NWWW Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **RWY 11** (preferred, both directions of traffic); **RWY 29** when tailwind on 11 exceeds ~10 kt (~5 kt wet) |
| Config logic | Reciprocal-runway operation; RWY 11 preferred given precision-approach infrastructure, no published wind limit for RWY 11 itself |
| Transition altitude | 11,000 ft |
| Take-off minima | Not confirmed in reachable sources 🟧 |
| CTOT / flow regime | None identified |
| De-icing on departure | Not applicable — tropical climate |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Taxiways **B, C and W** connect the civil apron and are Code E-capable (up to A339/B77W-class); taxiways **G and T** serve the military apron, Code C-capable (up to CN235/A400M-class).
- **Hot spots / tight taxiways:** 🟥 **Backtracking can take 2–3 minutes** given taxiways B/C sit over a kilometre from both runway thresholds — factor into sequencing/release timing. Category A/B aircraft and B738/A320-class types may turn around at an intermediate runway point (marked turn-pad/"raquette" at each threshold, limited to 10 km/h); all other types must backtrack the full runway length.
- **Runway crossings / read-back-required points:** Standard hold-short/backtrack coordination with Tontouta Ground applies; confirm with Ground on the day.
- **Low-vis taxi caveats:** Not confirmed in reachable sources. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** **RWY 11 is preferred for both arrivals and departures**, with no published wind limitation for that runway in the primary reference located; operational practice (VATPAC) switches both to **RWY 29** when tailwind on RWY 11 exceeds ~10 kt, or ~5 kt with a wet runway.
- **By departure direction:** Procedural SIDs are runway-suffixed — **"3E" (RWY 11) / "3W" (RWY 29)** — to the same named waypoints (GOPRA, LTO, NISAS, ONIBA, POXAK, SCUBA, TEPAM, VIRAR); a dedicated **POGO** SID serves NWWM (Nouméa Magenta)-bound traffic.
- **Noise / preferential-runway program:** Not confirmed in reachable sources beyond the reciprocal-operation logic above. 🟧
- **Interaction with arrivals:** Tontouta has no dedicated Departures ATC position — a single Approach controller manages both arrivals and departures alongside the SIV, so departure release is coordinated directly against inbound traffic.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| GOPRA 3E / 3W | 11 / 29 | LTO vertical-passage constraint ~7,000 ft 🟧 | Conventional procedural SID |
| LTO 3E / 3W | 11 / 29 | LTO vertical-passage constraint ~7,000 ft 🟧 | |
| NISAS 3E / 3W | 11 / 29 | Minimum altitude at NISAS ~3,000 ft 🟧 | |
| ONIBA 3E / 3W | 11 / 29 | — | |
| POXAK 3E / 3W | 11 / 29 | Minimum altitude at POXAK ~3,000 ft 🟧 | |
| SCUBA 3E / 3W | 11 / 29 | Minimum altitude at SCUBA ~3,000 ft 🟧 | |
| TEPAM 3E / 3W | 11 / 29 | Minimum altitude at TEPAM ~3,000 ft 🟧 | |
| VIRAR 3E / 3W | 11 / 29 | Minimum altitude at VIRAR ~3,000 ft 🟧 | |
| POGO | 11 / 29 | Transitions to NWWM STAR at GIRAD 🟧 | For traffic destined to Nouméa Magenta (NWWM) |
| Omnidirectional departure | 11 / 29 | — | For aircraft unable to accept a procedural SID |

*Names/logic per IVAO France (tier-4, network-sim) — pull the live current-AIRAC SID list and gradient tables before use. The runway-suffix convention ("3E"/"3W") means the runway in use can be omitted from the clearance readback once the waypoint SID is assigned.*

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per assigned procedural SID; visual departures are permitted when ceiling ≥7,000 ft and visibility ≥5 km up to the sector minimum safe altitude (~6,900 ft).
- **Noise-abatement departure procedure (NADP):** Not confirmed in reachable sources. 🟧
- **Early turn / altitude constraints:** RWY 11 omnidirectional departure — climb runway heading to 2.9 NM LTO, then turn right (RM 198°); at 3,900 ft proceed direct, climbing to the en-route minimum safe altitude. RWY 29 omnidirectional — climb runway heading to 4,000 ft, then proceed direct. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** No verified close-in terrain/obstacle data obtained this pass (Briefing §3.1) — consult the current AIRAC obstacle/area chart rather than relying on this brief.
- **Special DP / obstacle DP:** Not confirmed in reachable sources. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed in reachable sources — verify current chart. 🟧
- **De-icing:** Not applicable — tropical Pacific-island climate.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Tontouta Ground **121.700** issues taxi/departure clearances (no dedicated Delivery position identified).
- **Frequency sequence:** **Ground 121.700 → Tower 118.100 → Approach ("Tontouta Information") 119.700.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8; tier-4 network-sim sourced.)
- **CTOT / slot handling:** No formal slot/CTOT regime identified; the standard assignable level from Tower to Approach for a departure is **the lower of 6,000 ft and the requested flight level**, per network-sim coordination convention. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 3,250 m TORA/TODA/ASDA is non-limiting for any K Global type likely on this Pacific route.
- **Density altitude / temperature:** Non-issue at 51 ft, tropical maritime climate — no hot-and-high penalty, though standard tropical-temperature performance planning applies.
- **Contamination / wet-runway:** No specific contamination/braking-action data confirmed this pass; the reciprocal-runway wet-tailwind trigger (~5 kt, §3) is the relevant local wind/wet consideration. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty identified for any K Global type at NWWW.

---

## 10. Gotchas

- **RWY 29 has no ILS** — if departing RWY 29 in marginal weather, remember the arrival side has no precision backup on that end either (relevant for any same-day return planning).
- **Backtracking takes 2–3 minutes** on this single-runway field — build this into release-sequencing expectations, especially during a busy bank.
- **No CPDLC at Tontouta** — voice procedures apply throughout; do not expect datalink service.
- **Reciprocal-runway wind-trigger** (~10 kt tailwind dry / ~5 kt wet) can flip both arrivals and departures to RWY 29 with comparatively short notice — watch the ATIS.
- **B777-300 turn-back and A380 "ZEC" push-back procedures** are specific and non-standard — confirm with handling/Ground before a Code F rotation.
- **South Pacific cyclone season (Nov–Apr)** is the field's dominant seasonal disruption risk — see [Briefing §14](index.md).

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names, gradients and RNP requirements per runway.
- Take-off minima exact figures.
- EOSID/engine-out procedure detail.
- LVTO minima (relevant given RWY 29 has no ILS).
- Primary-AIP confirmation of all network-sim-sourced procedural detail above.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting — especially RWY 11 ILS status, given RWY 29 has no backup), cyclone/tropical-system advisories. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **IVAO France — NWWW operating manual** (MANEX Aéroports Civils, AIRAC cycle 2607) — https://wiki.ivao.fr/books/manex-aeroports-civils/page/nwww-noumea-la-tontouta (retrieved 2026-07-26). *Network-sim; SID/omnidirectional-departure and taxi detail cross-checked here.*
- **VATPAC — NWWW SOP** — https://sops.vatpac.org/pacific/New-Caledonia/La-Tontouta/ (retrieved 2026-07-26). *Network-sim; reciprocal-runway wind-trigger, backtracking, SID selection logic cross-checked here.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from cross-checked tier-4 sources pending primary French SIA AIP verification; K Global fields from live VAMSYS; 4-page pack. |
