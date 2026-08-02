# LEMI — Región de Murcia International (Corvera) · Dispatch Page

**LEMI / RMU** · Corvera, Murcia, Spain · Europe
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — AIP España (ENAIRE)-derived

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [LEMI Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Leisure destination** — category 🟧 **not yet set in VAMSYS** `[VAMSYS mirror 2026-07-25]` |
| Terminals in use for us | Single terminal, 28,500 m², 9 gates, 25 check-in desks, 4 baggage belts |
| Widebody stands available | **Code E provided for** (dedicated TWY F routing); **Code F explicitly not permitted** |
| Slot regime | Not a classic slot regime — **seasonal, non-H24 operating hours** are the dominant constraint (§4) |
| Curfew | 🟥 Seasonal operating-hours envelope functions as a de facto curfew — see §4 |
| Primary handling agent | Not confirmed in reachable sources 🟧 |
| Fuel supplier(s) | Not confirmed 🟧 |
| Customs / PoE for pax | Yes — **PPR-based**, not routinely staffed 🟥 |
| De-icing | Not confirmed; no dedicated section found 🟧 |

---

## 2. Terminals & concourses

- **Terminal layout:** Single terminal building, **28,500 m²**, with **9 boarding gates**, **25 check-in desks** and **4 baggage-reclaim belts** `[Wikipedia]`.
- **Our operation uses:** Standard gate assignment per Aena/handling on the day; no Schengen/non-Schengen architectural gate split was found in reachable sources — most current traffic is UK/Schengen leisure routes handled via juxtaposed controls rather than a dedicated non-Schengen pier. 🟧
- **International arrivals / CBP-equivalent hall:** Within the single terminal; hours are PPR-based (§8).
- **Notes:** LEMI opened 15 Jan 2019, replacing Murcia–San Javier, after a construction history plagued by financing collapse (contractor Sacyr ran out of funds in 2009) and a seven-year gap between physical completion (2012) and opening (2019) due to contractual disputes; the concession was ultimately withdrawn from the original consortium (Aeromur) and awarded to Aena before opening `[Wikipedia]`. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** 🟧 **Code E is explicitly provided for** — dedicated apron access solely via **TWY F**, with oversteering/entry-exit via **A1/C2** specific to Code E. **Code F operations are explicitly not permitted.**
- **Stands NOT usable by our types:** Any Code F type is excluded from the aerodrome entirely, not merely stand-restricted.
- **Remote / hardstand positions:** 4 holding bays are part of the airport's design; not otherwise itemised as remote parking. 🟧
- **Contact vs remote for our arrivals:** Not confirmed. 🟧
- **Ground-movement stand caveats:** **PAPI on RWY23 is explicitly not usable for Code letter E aircraft** — Code E crews need an alternate visual-glidepath reference on that runway. See [Briefing §13](index.md).

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** Not a classic IATA-level slot regime; the field's **seasonal, non-H24 operating hours** are the dominant scheduling constraint. 🟥
- **Curfew / night restriction:** 🟥 **Summer:** 0530–2030 LT (Mon–Fri + holidays), 0630–2030 LT (Sat/Sun); **PPR +1 hr** outside these hours. **Winter:** 0630–2130 LT (Mon–Fri + holidays), 0730–2130 LT (Sat/Sun); **PPR +1 hr** outside these hours. No separate noise-abatement supplement was located, consistent with a newer, lower-traffic field.
- **CTOT / flow control:** Not confirmed; low traffic volume (7,140 movements in 2024) makes classic ATFM congestion unlikely to be the dominant constraint here. 🟧
- **Commercial impact:** The seasonal operating-hours envelope, combined with PPR-based customs, is the field's real commercial-scheduling guardrail — plan any movement to fall within the published hours, with margin, or file PPR well ahead.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not confirmed in reachable public sources. 🟧
- **Typical turnaround time for our type:** 🟧 **Not set in VAMSYS** — no planning-time reference exists yet; use conservative narrowbody assumptions pending confirmation.
- **Services:** Not individually itemised in reachable sources; standard leisure-gateway services assumed but not confirmed. 🟧
- **Turnaround risk items:** LEMI has been publicly reported as **Spain's least punctual airport**, with only **64.5% on-time departures** per a January 2024 report `[La Opinión de Murcia, via Wikipedia]` — a genuine, sourced reliability caution rather than a generic assumption.

---

## 6. Load factors & seasonality

- **Demand peaks:** Overwhelmingly **UK leisure/LCC-driven** traffic — top routes include Manchester, Gatwick, Stansted, Dublin, Luton, Birmingham and Bristol; carriers include Ryanair, easyJet, TUI fly Belgium, Volotea, Smartwings, Air Arabia and Binter `[Wikipedia]`. 907,668 passengers / 7,140 movements in 2024 (947,438 passengers / 7,640 movements in 2025) — still below Murcia–San Javier's pre-closure 2007 peak of roughly 2 million passengers.
- **Day-of-week / seasonal pattern:** Leisure-skewed weekly shape typical of a UK-charter/LCC destination; not independently quantified for LEMI specifically. 🟧
- **Cargo / belly capacity:** Not confirmed as a significant cargo gateway. 🟧
- **Connection banks:** Point-to-point leisure traffic predominates; not a connecting hub for K Global.

---

## 7. Fuel

- **Supplier / into-plane:** Not confirmed in reachable public sources. 🟧
- **Uplift availability & hours:** Not independently confirmed; tied to the field's seasonal operating-hours envelope at minimum. 🟧
- **Price / tankering angle:** No LEMI-specific price signal found. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1 assumed; no cold-soak/fuel-freeze consideration relevant to this short-haul Mediterranean-region destination.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes.
- **CBP-equivalent / immigration hours:** 🟥 **PPR** (prior permission required) — not routinely staffed, unlike the H24 coverage at LEAL/LEMG or the "HR AD"-tied coverage at LEVC.
- **Pre-clearance / visa-transit notes:** No architectural Schengen/non-Schengen split confirmed; UK routes handled via juxtaposed controls. 🟧
- **Late/overnight/diversion caveat:** 🟥 With customs on PPR and the field itself not running H24, a late/overnight or diversion arrival at LEMI carries materially higher PoE-staffing risk than any other field in this pack — plan well ahead.

---

## 9. De-icing provisioning & season

- **Availability:** Not confirmed; no dedicated de-icing/noise section was located in reachable sources, consistent with a newer, lower-traffic field. 🟧
- **Season:** Not applicable in normal years given the region's climate.
- **Provisioning:** Not confirmed. 🟧
- **Commercial impact:** Negligible under normal climatology.

---

## 10. Typical delays / reliability

- **Signature delay driver:** 🟥 LEMI has been publicly reported as **Spain's least punctual airport** (64.5% on-time departures, Jan 2024 report) — a genuine, sourced reliability concern rather than a generic seasonal-congestion assumption.
- **Ground-delay / flow-program exposure:** Low traffic volume makes classic ATFM/flow-program exposure unlikely to be the dominant driver; the operating-hours/PPR regime is the more material constraint. 🟧
- **On-time reliability picture:** 🟥 Confirmed poor relative to national peers — build schedule buffer accordingly when routing through LEMI.

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not confirmed; no noise-abatement section located. 🟧
- **Curfew infringement consequence:** The seasonal operating-hours envelope (§4) functions as a hard constraint — an unplanned movement outside published hours requires PPR (+1 hr), not a routine allowance.
- **Scheduling guardrails:** Build schedule margin against both the **seasonal operating-hours envelope** and the field's **documented poor on-time performance** — treat both as real commercial risks, not formalities.

---

## Open items (🟧 — confirm against AIP / operator data)

- K Global category not yet set in VAMSYS — highest-priority open item for this field's commercial planning.
- Handling agent(s) contracted for our operation and turnaround time (not set in VAMSYS).
- Fuel into-plane provider and uplift hours.
- Any Schengen/non-Schengen gate architecture.
- Noise-charge regime specifics (none located).
- Day-of-week/seasonal load pattern specific to the K Global operation.

> **Live data — pull at planning:** fuel price, current demand/load, stand allocation, current PPR/operating-hours status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **AIP España (ENAIRE), AD 2-LEMI**, current AIRAC amendment — https://aip.enaire.es/aip/contenido_AMDT/LE_Amdt_A_2026_05_AD_2_LEMI_en.html (retrieved 2026-07-26).
- Wikipedia — "Región de Murcia International Airport" — https://en.wikipedia.org/wiki/Regi%C3%B3n_de_Murcia_International_Airport (retrieved 2026-07-26). *History, traffic figures, on-time-performance reputation, terminal facts.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Built from AIP España (ENAIRE); K Global fields from live VAMSYS; 4-page pack. |
