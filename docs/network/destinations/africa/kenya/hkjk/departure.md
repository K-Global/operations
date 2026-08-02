# HKJK — Jomo Kenyatta International · Departure Page

**HKJK / NBO** · Embakasi, Nairobi, Kenya · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional (primary eAIP verification pending)

> **Read-me:** Tactical departure aid for X-Plane 11, not a chart. Companion to the [HKJK Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **06/24** — single runway, wind-dependent |
| Config logic | Wind-dependent; 06 is the ILS/preferred IMC runway but either end is used for departure by wind |
| Transition altitude | 9,000 ft (Jeppesen, corroborated) |
| Take-off minima | Published per chart — not confirmed this pass 🟧 |
| CTOT / flow regime | **Slot-coordinated, SCR Level 3** — slot required; no formal ATFM/CTOT programme confirmed 🟧 |
| De-icing on departure | N/A |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From the international apron, Ground/Tower routes to the active end of 06/24 (single runway, no parallel) — confirm exact taxi with Tower on the day (start-up/taxi handled via Tower 118.7, per Briefing §8).
- **Hot spots / tight taxiways:** Not captured in reachable sources — verify locally. 🟧
- **Runway crossings / read-back-required points:** None expected — single runway, no crossing taxiway published in reachable sources.
- **Low-vis taxi caveats:** Not confirmed — verify SMGCS/follow-me availability locally. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Wind-dependent selection between 06 and 24; **06 is the only ILS-equipped end**, generally favoured in IMC, but the active runway for departure follows the prevailing wind like any single-runway field.
- **By departure direction:** Not a factor beyond the 06/24 orientation itself — confirm current-AIRAC SID assignment per runway end.
- **Noise / preferential-runway program:** Jeppesen notes "SIDs include minimum noise routings" (Briefing §12) — no further detail confirmed. 🟧
- **Interaction with arrivals:** Single runway — departures and arrivals share the one runway system; expect sequencing delay at busy banks (see Dispatch §10).

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| ATUDU, STONY, ANTUK, APLOG, NAKAT, PARIN, NAVEX, APNOM, IBRAT, EVATO, GABSO, KAMAS, LOTAS, NAK, IMSAN, LADAN, KIDUM, IBSUL, NAKURU 🟧 | 06 / 24 | RNAV and conventional variants; confirm RNP capability and any charted climb gradient — **important given the surrounding high terrain and 5,330 ft field elevation** | Pull the current-AIRAC SID list before use (Briefing §11) |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 as standard — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Jeppesen notes minimum-noise SID routings; no fleet-wide NADP1/2 preference confirmed. 🟧
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart, with particular attention to terrain-driven early-turn restrictions (Ngong Hills SW, Aberdares/Mt Kenya N/NE — see Briefing §3.1).

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway, factoring the high-terrain surroundings. 🟧
- **Close-in / distant obstacles:** **Ngong Hills** SW, **Aberdare Range**/**Mt Kenya** N/NE, and "MUA HILL" noted on the radar-minima chart — see [Briefing §3.1](index.md). Area MEA is FL100; honour MSA on any non-standard climb.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart, particularly for an engine-out scenario given the surrounding terrain. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed in reachable sources — verify current chart. 🟧
- **De-icing:** N/A — non-issue at this equatorial, high-elevation station (temperatures do not support icing conditions).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** No separate Delivery frequency confirmed — start-up and taxi clearance handled via **Nairobi Tower 118.700** (Briefing §8). 🟧
- **Frequency sequence:** **Tower 118.700 (start-up/taxi/take-off) → Nairobi Radar 122.300 (sec. 124.100) / Nairobi Approach 119.700.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** **Slot-coordinated, SCR Level 3** — slot required; no formal ATFM/CTOT programme independently confirmed. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 06/24 (4,117 m) is non-limiting for any K Global type even at high density altitude; declared distances remain unpublished/provisional (Briefing §7) — do not treat the long physical runway as a substitute for a verified performance number.
- **Density altitude / temperature:** 🟥 **Hot-and-high field (5,330 ft)** — this is the dominant performance consideration at HKJK. Check take-off weight, climb-gradient compliance over the surrounding terrain, and V-speeds against the actual OAT/density altitude for every departure, especially on a warm afternoon.
- **Contamination / wet-runway:** Long-rains (Mar–May) and short-rains (Oct–Dec) bring heavy showers — factor wet-runway braking action in season (Briefing §14); no published contamination-specific data.
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) and [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) for the hot-and-high performance methodology applied at this field.

---

## 10. Gotchas

- **Hot-and-high field (5,330 ft)** — density-altitude take-off performance and climb-gradient margins are the standing planning risk here, not runway length.
- **Single runway (06/24)** — no parallel or crossing runway; expect sequencing delay at busy banks and plan accordingly.
- **High terrain close-in** (Ngong Hills SW; Aberdares/Mt Kenya N/NE) — brief the SID's terrain-avoidance climb gradient, especially on an engine-out contingency.
- **Slot-coordinated (SCR Level 3)** — confirm the slot before planning; handling is mandatory.
- **Visual right-base RWY 06 fuel-tank clearance note** (≥1.5 NM from THR 06) is an arrival item but is a useful situational-awareness cue for ground/departure crews working the same runway environment (Briefing §4).

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names, RNP/gradient specifics and take-off minima.
- Delivery/Ground separate frequencies (currently folded into Tower).
- EOSID/engine-out procedure detail given the surrounding high terrain.
- LVTO minima and noise-abatement departure procedure detail.
- CTOT/ATFM applicability beyond the slot-coordination requirement.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/navaid/lighting, esp. NL ILS RWY 06), CTOT/slot status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **Kenya KCAA eAIP** — https://eaip.kcaa.or.ke/ — login-gated; AD 2.HKJK not reached (retrieved 2026-06-26). Primary verification PENDING.
- Jeppesen JeppView trip kit, HKJK, data cycle 07-2023 (expired) — SID names, TA, noise notes (retrieved 2026-06-26). *Secondary.*
- AC-U-KWIK — slot-coordination (SCR Level 3) (retrieved 2026-06-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
