# LEMG — Málaga-Costa del Sol · Dispatch Page

**LEMG / AGP** · Málaga, Andalusia, Spain · Europe
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — AIP España (ENAIRE)-derived

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [LEMG Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Leisure destination** — Costa del Sol gateway `[VAMSYS mirror 2026-07-25]` |
| Terminals in use for us | T2 ("Pablo Ruiz Picasso," 1991) and T3 (2010); T1 is GA-only/closed to scheduled public use |
| Widebody stands available | Code E/F operations procedurally anticipated (self-reporting requirement); detailed stand-by-stand count not confirmed 🟧 |
| Slot regime | **Fully slot-coordinated** — AECFA coordination, CEOPS AGP operations centre 🟥 |
| Curfew | No blanket jet curfew corroborated in primary AIP text; secondary-sourced 2300–0700 restriction unconfirmed 🟧 |
| Primary handling agent | Not individually confirmed; H24 ground handling confirmed generally 🟧 |
| Fuel supplier(s) | Not individually confirmed; H24 availability confirmed per AIP |
| Customs / PoE for pax | **Yes** — H24 |
| De-icing | Not typically required (Mediterranean coastal climate); availability not confirmed 🟧 |

---

## 2. Terminals & concourses

- **Terminal layout:** Three terminal buildings — **T1** (GA/non-scheduled use only), **T2 "Pablo Ruiz Picasso"** (opened 1991), **T3** (opened 2010). Piers: **Pier B** (13 gates, non-Schengen), **Pier C** (10 gates, non-Schengen with Schengen flex capability), **Pier D** (20 gates, Schengen). 164 check-in desks, 48 gates total (26 with airbridges) `[Wikipedia]`.
- **Our operation uses:** EasyJet checks in at T2; all other carriers (the network's likely gate assignment) at T3 — confirm current-day gate/pier assignment with handling.
- **International arrivals / CBP-equivalent hall:** Split across Pier B/C (non-Schengen) and Pier D (Schengen) — confirm the specific pier for the assigned gate.
- **Notes:** Málaga is a very high-volume seasonal leisure gateway (~26.76 M passengers in 2025) — expect peak-season (Jul/Aug, ~2.9 M pax each) terminal/stand congestion. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** AIP requires Code E/F pilots (wingspan ≥52 m) to self-report on first ATC contact — Code E/F ops are procedurally anticipated, but a detailed stand-by-stand capacity list (unlike Alicante's itemised PRKG table) was not located. 🟧
- **Stands NOT usable by our types:** **A350-1000 (A35K) — the aerodrome itself is not available for this type** per the AIP; do not plan A35K into any stand here.
- **Remote / hardstand positions:** Not itemised in reachable sources. 🟧
- **Contact vs remote for our arrivals:** Not confirmed; expect a mix given very high seasonal traffic volume. 🟧
- **Ground-movement stand caveats:** **Single taxiway link from the RWY12/30 side to the terminal apron** is a recognised throughput/complexity constraint — see [Briefing §13](index.md).

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** 🟥 **Fully slot-coordinated** — AECFA is the coordination body, **CEOPS AGP** the operations centre. No flight without an assigned slot; aircraft with cruise speed <200 kt may be delayed.
- **Curfew / night restriction:** No blanket jet curfew corroborated in the primary AIP text pulled this pass. Piston-engine restriction applies (VFR 0800–2200 LT, IFR 0800–1600 LT; night VFR only 0100–0500 LT for schools/training) — not relevant to jet ops. A secondary source described "restricted operations 2300–0700" — **not corroborated in the primary AIP extract**, flag pending confirmation. 🟧
- **CTOT / flow control:** Slot-coordinated regime implies standard EUROCONTROL ATFM/CTOT exposure during peak banks — not independently quantified for LEMG. 🟧
- **Commercial impact:** The slot-coordination regime makes on-time pushback a real network consideration; the mountain-turbulence weather signature (Terral/Levante/Poniente) is the field's dominant irregular-ops driver rather than the curfew question.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not individually confirmed in reachable public sources; H24 ground handling confirmed generally per AIP. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 10 min / taxi-out 12 min** for planning purposes `[VAMSYS mirror 2026-07-25]`.
- **Services:** Standard leisure-gateway services expected (push-back, GPU/PCA, water/lav, catering, cabin clean); H24 fuel and ground handling confirmed.
- **Turnaround risk items:** Peak-season (Jul/Aug) stand/gate congestion, the single-taxiway-link complexity on the RWY12/30 side, and Terral/Levante/Poniente-driven weather delays.

---

## 6. Load factors & seasonality

- **Demand peaks:** Very pronounced summer leisure peak — **26.76 M passengers in 2025** (+7.4% YoY vs 24.92 M in 2024); 4th-busiest airport in Spain, busiest in Andalusia (~80% of the region's international traffic). Busiest months July/August (~2.9 M passengers each); quietest January/February `[Wikipedia; 2025 industry traffic reporting]`.
- **Day-of-week / seasonal pattern:** Leisure-skewed weekly shape typical of a beach-holiday gateway; not independently quantified for LEMG specifically. 🟧
- **Cargo / belly capacity:** Not a significant cargo gateway; belly-cargo uplift not confirmed. 🟧
- **Connection banks:** Point-to-point leisure traffic predominates; not a connecting hub for K Global. Base carriers include **Ryanair** (8.45 M pax/32% share, based), **Vueling** (3.23 M/12%), and a **seasonal** easyJet base (2.64 M/10%); Air Europa and Norwegian also base aircraft here `[Wikipedia]`.

---

## 7. Fuel

- **Supplier / into-plane:** Not individually confirmed in reachable public sources. 🟧
- **Uplift availability & hours:** **H24** confirmed per AIP. 🟩
- **Price / tankering angle:** No LEMG-specific price signal found — assess relative to base/hub pricing at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration relevant to this short-haul Mediterranean leisure destination.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — Pier B/C (non-Schengen) and Pier D (Schengen).
- **CBP-equivalent / immigration hours:** **H24** `[AIP España AD 2-LEMG]`.
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per pier assignment (§2).
- **Late/overnight/diversion caveat:** No blanket curfew identified; H24 customs coverage reduces late/overnight PoE risk relative to fields with restricted desk hours. 🟩

---

## 9. De-icing provisioning & season

- **Availability:** Not typically required at this Mediterranean coastal field; specific pad/gate provisioning not confirmed. 🟧
- **Season:** Not applicable in normal years.
- **Provisioning:** Not confirmed. 🟧
- **Commercial impact:** Negligible under normal climatology.

---

## 10. Typical delays / reliability

- **Signature delay driver:** **Terral/mountain-wave turbulence and Levante/Poniente wind events** — widely discussed as producing an above-average go-around/diversion rate at this field (not officially quantified). Peak-season (Jul/Aug) congestion and the single-taxiway-link complexity on the RWY12/30 side are secondary drivers.
- **Ground-delay / flow-program exposure:** Slot-coordinated regime plus high seasonal volume implies real EUROCONTROL flow-management exposure in peak/adverse conditions — not independently quantified. 🟧
- **On-time reliability picture:** Not independently sourced this pass. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not confirmed in reachable sources. Aena operates 7 fixed + 2 mobile Noise Measurement Terminals around the airport perimeter as part of its environmental noise-monitoring programme. 🟧
- **Curfew infringement consequence:** Not applicable pending confirmation of any actual curfew — no blanket restriction corroborated in the primary AIP text.
- **Scheduling guardrails:** Given the slot-coordination regime and the mountain-turbulence weather signature, build weather-contingency buffer into schedules touching LEMG rather than relying on a curfew-driven guardrail.

---

## Open items (🟧 — confirm against AIP / operator data)

- Night noise-restriction claim (2300–0700, secondary-sourced) — not corroborated in the primary AIP.
- Handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Detailed Code E/F stand-by-stand capacity.
- Noise-charge regime specifics.
- Day-of-week/seasonal load pattern and any belly-cargo capacity specific to the K Global operation.
- Quantified windshear/go-around-frequency statistic for the Terral/Levante/Poniente wind signature.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **AIP España (ENAIRE), AD 2-LEMG**, current AIRAC — https://aip.enaire.es/aip/contenido_AIP/AD/AD2/LEMG/LE_AD_2_LEMG_en.pdf (retrieved 2026-07-26).
- Wikipedia — "Málaga Airport" — https://en.wikipedia.org/wiki/M%C3%A1laga_Airport (retrieved 2026-07-26). *Terminal/pier structure, traffic and base-carrier figures.*
- Aena — Málaga noise-monitoring system — https://www.aena.es/en/corporative/environment-sustainability/noise/noise-monitoring-systems/malaga-costa-del-sol.html (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Built from AIP España (ENAIRE); K Global fields from live VAMSYS; 4-page pack. |
