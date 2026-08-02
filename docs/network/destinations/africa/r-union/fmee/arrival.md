# FMEE — La Réunion-Roland Garros · Arrival Page

**FMEE / RUN** · Sainte-Marie, Réunion (French DOM) · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — French SIA eAIP-derived

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [FMEE Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | No published preferential rule; **RWY 12 limited to 10 kt tailwind component** |
| Usual approach | **ILS CAT I** (RWY 14 only); RNP/VOR on RWY 12/30 |
| Config logic | Wind-driven; RWY 30/32 landings fly a **right-hand circuit** |
| Transition level | By QNH; TA published as **12,000 ft** |
| LVP trigger | Not separately tabulated in AD 2 🟧 |
| Missed-approach driver | **Terrain** — extreme island interior close inland |

---

## 2. STAR / transition selection

- **STARs (names only):** RNAV and conventional STAR sets published for RWY 12/14 and RWY 30; individual names not itemised in the reachable AD 2 text extract — pull the current-AIRAC chart list at planning. 🟧
- **Selection by arrival direction / runway:** Determined by Approach per traffic direction and wind; **RWY 12's 10 kt tailwind limit** will drive a runway change if exceeded.
- **Transition to approach:** RNAV STAR to ILS (RWY 14) or RNP/VOR (RWY 12/30) — confirm current chart for the transition point.
- **Speed / flow constraints on the STAR:** Standard 250 KIAS < FL100; verify current chart for local constraints. 🟧

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Plan against TA 12,000 ft; confirm TL/first-usable level locally. 🟧
- **Speed control:** 250 KIAS < FL100 (ICAO standard).
- **Altitude constraints:** Per the charted STAR — pointer only, verify current chart. 🟧
- **Energy traps:** A late change onto RWY 14 (the only ILS runway) from a planned RWY 12/30 RNP/VOR approach is a real approach-type change — brief both before descent if the wind is marginal for RWY 12's tailwind limit.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 12 | RNP (incl. RNP AR Y, RNP Z), LOC B, VPT B | **VSS-penetration flag** on RNP Z (LNAV/LNAV-VNAV) and RNP AR Y (RNP 0.3) lines | Verify current chart 🟧 |
| 14 | **ILS CAT I** (LOC SD 110.3 / GP 335), RNP (FNA RNP Y AR, FNA RNP Z), RNAV, VOR | Only ILS-served runway; **PAPI/GP not harmonised** — fly ILS as primary | Verify current chart 🟧 |
| 30 | RNP, VOR | **VSS-penetration flag** on both RNP (LNAV/LNAV-VNAV) and VOR lines | Verify current chart 🟧 |
| 32 | — | No published approach identified in the reachable extract | Verify current chart 🟧 |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟥 Réunion's interior rises to **Piton des Neiges (~3,069 m/10,069 ft)** and the active **Piton de la Fournaise (~2,632 m/8,635 ft)** within a short distance of the coast — see [Briefing §3.1](index.md). Fly the charted approach precisely; do not shortcut visually toward high ground.
- **Specific threats:** **RWY 14's PAPI and ILS glidepath are not harmonised** — treat the ILS as the primary reference on that runway, not the visual glideslope. Several RNP approaches on RWY 12/14/30 carry a **VSS-penetration flag** affecting specific minima lines (LNAV/LNAV-VNAV or VOR) — confirm the exact affected line on the current chart before selecting minima.
- **Airspace / traffic:** LA REUNION CTR (Class D) with ATS provided within the TMA **except where radio coverage is poor/unavailable** — a real gap near high terrain; maintain heightened self-awareness in those areas.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** The island's extreme interior relief means any missed approach must be flown exactly as charted — brief the published track, heading and climb gradient against the terrain before commencing, not after a go-around is called.
- **Re-sequencing environment:** Confirm current traffic/config with Approach; a missed approach on RWY 14 (the only ILS runway) may require re-planning toward an RNP/VOR approach on another runway if weather is marginal.
- **Go-around traps:** RWY 12's tailwind limit and RWY 14's PAPI/GP non-harmonisation both carry over into a go-around decision — don't let a marginal visual reference on RWY 14 delay a timely go-around call.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** RWY 12 — 3,080 m; RWY 30 — 3,080 m; RWY 14 — 2,550 m; **RWY 32 — 2,195 m** (notably short against its 2,550 m TORA). See [Briefing §7](index.md) for the full declared-distance table.
- **Braking / vacate:** Not separately published — standard vacate per Ground/Tower instruction.
- **Runway-excursion watch:** 🟧 **RWY 12 has a hard 10 kt tailwind limit**; **RWY 32's short LDA** should be checked against type performance before accepting that runway. RWY 12's RESA is an EMAS-shaped arrestor bed rather than a full-length RESA.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Stand-specific per the published compatibility matrix (see [Briefing §13](index.md)); confirm with Ground/Tower.
- **Hot spots / tight taxiways:** 🟥 **TWY B and TWY M closed to A380**; **TWY F/G are GA-scale only (7.5 m)**. Runway turn-around areas are speed/turning-radius limited (10 kt / 80% max).
- **Stand/gate notes:** A339 (or equivalent K Global widebody) is compatible with several numbered stands per the published matrix — confirm the exact assignment with handling; see [Dispatch §3](dispatch.md).

---

## 9. Arrival frequency sequence

- **Sequence:** Approach (119.400 or 127.200) → Tower (118.400) → Ground (121.900) — see [Briefing §8](index.md). VDF/Gonio homing service is available on multiple frequencies if needed.
- **Approach/Departure control:** **ROLAND GARROS Approach**, H24; confirm the assigned frequency (119.400 south of R 264 SDG, or 127.200) on initial contact.

---

## 10. Gotchas

- **RWY 14's PAPI and ILS glidepath are not harmonised** — a long-body crew flying the visual reference alone could be materially off the instrument glidepath; brief the ILS as primary.
- **RWY 12's 10 kt tailwind limit** — a hard limit, not advisory; confirm current wind before accepting RWY 12.
- **RWY 32's LDA (2,195 m) is much shorter than its TORA (2,550 m)** — a runway-change onto 32 changes the performance picture materially.
- Extreme close-in terrain — no shortcut visual approaches over high ground; fly the chart.
- **A380/AN124 movements can pause all other ground movement** — check the day's schedule before a tight arrival/turn plan.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- LVP trigger conditions; exact STAR names; RWY 32 published approach (none identified in the reachable extract).
- Take-off/landing minima for the RNP AR approaches on RWY 12/14 (RNP 0.3 line flagged for VSS penetration).
- Rapid-exit/vacate taxiway data (not identified in the reachable extract).

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. LOC/GP 14), ATIS config, cyclone-season TC advisory (RSMC La Réunion). Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **French SIA eAIP, AIP RUN, AD 2 FMEE**, AIRAC eff. 11 JUN 2026 — https://www.sia.aviation-civile.gouv.fr/media/dvd/eAIP_11_JUN_2026/RUN/AIRAC-2026-06-11/html/eAIP/FR-AD-2.FMEE-fr-FR.html (retrieved 2026-07-26). *Approaches, navaids, declared distances, ATS airspace, VSS penetration table.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from the French SIA eAIP and live VAMSYS fields; new 4-page pack replacing the 23-line stub. |
