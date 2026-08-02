# LEVC — Valencia · Dispatch Page

**LEVC / VLC** · Manises, Valencian Community, Spain · Europe
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — AIP España (ENAIRE)-derived

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [LEVC Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Leisure/business destination** `[VAMSYS mirror 2026-07-25]` |
| Terminals in use for us | Single terminal, built in three connected stages; gates 1–22 |
| Widebody stands available | AIP-published Code E/F procedure — PRKG 25/27 (Code F), PRKG 23/24/25/27/29 (Code E) |
| Slot regime | Not confirmed — no standing IATA Level 2/3 coordination found 🟧 |
| Curfew | No absolute curfew; active night noise-abatement regime (2300–0700 LT) 🟧 |
| Primary handling agent | Not confirmed in reachable sources 🟧 |
| Fuel supplier(s) | Not confirmed 🟧 |
| Customs / PoE for pax | **Yes** — gates 1–4 non-Schengen; hours tied to AD operating hours ("HR AD") |
| De-icing | Not typically required (Mediterranean coastal climate); not confirmed 🟧 |

---

## 2. Terminals & concourses

- **Terminal layout:** Single terminal built in three directly-connected stages. Landside check-in areas: **1–12** (newest, airport metro station beneath it), **13–42** (oldest main building), **43–56** (largest annex, most airlines). A single central security area leads airside to **gates 1–22**, with **gates 1–4 designated non-Schengen**. Gates 12–22 form a separate regional-terminal hall (opened for the 2007 America's Cup) offering walk-boarding, mainly for Iberia Regional/LCC traffic; some gates have jet bridges, others do not `[Wikipedia]`.
- **Our operation uses:** Standard gate assignment per Aena/handling; confirm Schengen/non-Schengen routing against the gate 1–4 split.
- **International arrivals / CBP-equivalent hall:** Within the single terminal, tied to the gate 1–4 non-Schengen pier.
- **Notes:** Metrovalencia lines 3/5 connect the airport station to the city centre (~15 min) — relevant for crew/pax logistics, not operational. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** 🟩 AIP-published, real capability — **PRKG 25 and PRKG 27** (Code F), **PRKG 23/24/25/27/29** (Code E), each with defined push-back/taxi routings (VLCOPS-1008). B767-400/MD-11 (Code D-IV) get special oversteering procedures.
- **Stands NOT usable by our types:** Narrowbody-oriented stands outside the PRKG list above are not sized for Code E/F.
- **Remote / hardstand positions:** Not itemised in reachable sources beyond the Code E/F PRKG list. 🟧
- **Contact vs remote for our arrivals:** Not confirmed. 🟧
- **Ground-movement stand caveats:** Defined push-back/taxi routings exist for the Code E/F stands (VLCOPS-1008) — confirm current procedure with handling. See [Briefing §13](index.md).

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** Not confirmed in reachable sources — no explicit IATA Level 2/3 designation found; treat as unconfirmed pending VAMSYS/Aena confirmation. 🟧
- **Curfew / night restriction:** No absolute curfew; an active noise-abatement regime applies — "night" = **2300–0700 LT**, reverse thrust from idle prohibited at night except for safety, visual aids may be switched off 0000–0400 LT if no traffic expected. Monitored via the **SIRVAL** noise-monitoring network (10 terminals across Valencia, Manises, Xirivella, Quart de Poblet, Mislata, Aldaia, Ribarroja de Turia). 🟧
- **CTOT / flow control:** Not independently confirmed; treat standard EUROCONTROL ATFM practice as a baseline assumption. 🟧
- **Commercial impact:** The **autumn Gota Fría/DANA flood risk** (§Briefing §3.4) is a far bigger commercial-disruption driver at this field than any curfew/slot constraint — the 30 Oct 2024 event alone produced ~30 diversions and 49 cancellations.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not confirmed in reachable public sources. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 10 min / taxi-out 12 min** for planning purposes `[VAMSYS mirror 2026-07-25]`.
- **Services:** Standard leisure/business-gateway services expected (push-back, GPU/PCA, water/lav, catering, cabin clean); not individually itemised in reachable sources.
- **Turnaround risk items:** Autumn DANA/Gota Fría flood risk is the dominant irregular-ops driver; SIRVAL noise-regime compliance (reverse-thrust-from-idle restriction at night) is a secondary operational consideration.

---

## 6. Load factors & seasonality

- **Demand peaks:** ~10.8 M passengers, ~87,500 movements — 10th-busiest airport in Spain `[Wikipedia]`. Main base of Iberia's regional carrier **Air Nostrum**; Ryanair has operated a base since 2011 (after opening in 2007, closing Nov 2008 in a subsidy dispute, and reopening 2011).
- **Day-of-week / seasonal pattern:** Business/leisure mixed character typical of a regional-capital gateway; not independently quantified for LEVC specifically. 🟧
- **Cargo / belly capacity:** Not confirmed as a significant cargo gateway. 🟧
- **Connection banks:** Air Nostrum regional-connection traffic is relevant to the wider Spanish network but not to K Global's own schedule; not a K Global connecting hub.

---

## 7. Fuel

- **Supplier / into-plane:** Not confirmed in reachable public sources. 🟧
- **Uplift availability & hours:** Not independently confirmed. 🟧
- **Price / tankering angle:** No LEVC-specific price signal found — assess relative to base/hub pricing at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration relevant to this short-haul Mediterranean destination.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — **gates 1–4 are the non-Schengen pier**.
- **CBP-equivalent / immigration hours:** Tied to **"HR AD"** (airport operating hours), not a fixed H24 statement. 🟧
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per the gate 1–4 split.
- **Late/overnight/diversion caveat:** With customs hours tied to AD operating hours rather than confirmed H24, a late/overnight arrival carries more PoE-staffing risk here than at an H24 field — confirm current hours at planning. 🟧

---

## 9. De-icing provisioning & season

- **Availability:** Not typically required at this mild Mediterranean-coastal field; specific provisioning not confirmed. 🟧
- **Season:** Not applicable in normal years.
- **Provisioning:** Not confirmed. 🟧
- **Commercial impact:** Negligible under normal climatology — the field's real seasonal commercial risk is the autumn DANA/Gota Fría flood exposure, not winter de-icing.

---

## 10. Typical delays / reliability

- **Signature delay driver:** **Autumn Gota Fría/DANA torrential-rain events** — demonstrated field-closing severity (30 Oct 2024: runway/apron flooded, ~30 diversions, 49 cancellations, overnight suspension). This is the dominant reliability risk at LEVC, far outweighing routine congestion.
- **Ground-delay / flow-program exposure:** Not independently quantified outside the DANA-season risk window. 🟧
- **On-time reliability picture:** Good outside the autumn DANA window based on available traffic/character data; materially degraded during active Gota Fría events. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not confirmed in reachable sources beyond the SIRVAL monitoring network's existence. 🟧
- **Curfew infringement consequence:** Not applicable — no absolute curfew identified; the night noise-abatement regime (reverse-thrust-from-idle restriction) is a procedural constraint rather than a movement ban.
- **Scheduling guardrails:** Build autumn-season contingency buffer/alternate planning around the DANA/Gota Fría risk window (Oct–Nov) as the field's primary scheduling guardrail.

---

## Open items (🟧 — confirm against AIP / operator data)

- Slot-coordination level for LEVC.
- Handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Fuel into-plane provider and uplift hours.
- Exact customs/immigration operating hours ("HR AD" — the underlying AD hours themselves not independently obtained).
- Noise-charge regime specifics.
- Day-of-week/seasonal load pattern and any belly-cargo capacity specific to the K Global operation.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation, and — during the autumn window — active DANA/Gota Fría advisories and runway/apron flooding NOTAMs. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **AIP España (ENAIRE), AD 2-LEVC**, current AIRAC — https://aip.enaire.es/AIP/contenido_AIP/AD/AD2/LEVC/LE_AD_2_LEVC_en.html (retrieved 2026-07-26).
- Wikipedia — "Valencia Airport" — https://en.wikipedia.org/wiki/Valencia_Airport (retrieved 2026-07-26). *Terminal structure, Ryanair base history, traffic figures.*
- AeroTime — "Storm floods Valencia airport, disrupts nearly 80 flights" — https://www.aerotime.aero/articles/storm-floods-valencia-airport-disrupts-nearly-80-flights (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Built from AIP España (ENAIRE); K Global fields from live VAMSYS; 4-page pack. |
