# OJAQ — King Hussein Intl · Dispatch Page

**OJAQ / AQJ** · Aqaba, Jordan · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [OJAQ Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination** — not a base; **not currently categorised in VAMSYS** `[VAMSYS mirror 2026-07-26]` 🟧 |
| Terminals in use for us | Single small terminal (~28,000 sq ft / ~2,600 m²) — the field's only passenger building |
| Widebody stands available | 🟧 Not confirmed by primary AIP; VATSIM cross-check reports one "heavy" gate (stand 7) plus additional heavy stands at a "Charlie" apron — treat as unconfirmed |
| Slot regime | None found — 🟧 treat as uncoordinated pending confirmation |
| Curfew | **None found** 🟧 |
| Primary handling agent | Not individually confirmed 🟧 |
| Fuel supplier(s) | Jet A-1 only, H24, historical capacity 120–156 tonnes across AIP cycles |
| Customs / PoE for pax | **Yes** — H24 `[CARC AIP AD 2 OJAQ 2.3]` |
| De-icing | **Nil** — not provisioned; not required by this warm-climate coastal field |

---

## 2. Terminals & concourses

- **Terminal layout:** A single small terminal (~28,000 sq ft / ~2,600 m²) with a stated capacity of ~1.5M passengers/year — one departure gate/baggage carousel historically, since expanded to a small number of check-in desks and gates. Actual annual traffic (~300,000 passengers, ~3,000 aircraft movements per Wikipedia) runs well under design capacity.
- **Our operation uses:** The single terminal serves all traffic; no concourse split exists at this scale of field.
- **International arrivals / CBP-equivalent hall:** Single small international arrivals area within the terminal; H24 customs/immigration.
- **Notes:** 🟧 This is a materially smaller-scale facility than OJAI — the terminal "can cope when there is one aircraft to be handled" but can become congested with simultaneous turnarounds (per Wikipedia); plan ground-handling expectations accordingly.

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** 🟧 Not confirmed by the primary AIP (which describes only named aprons — Apron 1 89×425 m, Cargo Apron 198×600 m, Aero Sports Apron — without a numbered stand table). VATSIM Jordan vACC cross-check reports a numbered passenger apron (stands 1–7, stand 7 the sole "heavy" gate) plus additional heavy positions at a "Charlie" apron and an 8-stand Cargo Apron — treat as unconfirmed pending a current AIP/chart cross-check.
- **Stands NOT usable by our types:** Not individually documented; the field's overall small scale (single ~1.5M pax/year terminal) is the operative capacity constraint rather than specific stand exclusions.
- **Remote / hardstand positions:** Not confirmed. 🟧
- **Contact vs remote for our arrivals:** Not confirmed — assume a single-stand or limited-stand contact/remote mix given the field's scale. 🟧
- **Ground-movement stand caveats:** No AIP-flagged taxiway hot spots were found for this field — see [Briefing §13](index.md).

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** No slot-coordination regime found — treat as **uncoordinated / Level 1** pending confirmation. 🟧
- **Curfew / night restriction:** **None found.** AD operating hours (administration, ATS, customs, fuelling, handling, security) are stated H24, though Tower control specifically runs 0400–1800 per the 2011/2012 AIP cycle with combined APP/TWR/SMC control on the Approach frequency overnight (§Briefing §6/§8) — a position-structure nuance, not a curfew.
- **CTOT / flow control:** No ATFM/CTOT programme identified; traffic volume (~3,000 movements/year) makes this an unlikely constraint. 🟧
- **Commercial impact:** No curfew or confirmed slot regime — the operative planning constraints here are the single-runway/no-crosswind-alternative layout and the field's small handling scale, not time-of-day restriction.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not individually confirmed in reachable public sources. 🟧
- **Typical turnaround time for our type:** 🟧 **Not published / verify** — no VAMSYS taxi-time or turnaround figure supplied for this field; confirm at planning.
- **Services:** Cargo-handling confirmed available H24; fuelling H24 (Jet A-1 only); **no hangar or repair facilities for visiting aircraft** `[CARC AIP AD 2 OJAQ 2.4]`.
- **Turnaround risk items:** The single-runway/no-crosswind-alternative layout (a wind-limited day removes all runway-orientation flexibility), the small terminal's limited simultaneous-turnaround capacity, and the lack of on-field repair/hangar support are the main risk items.

---

## 6. Load factors & seasonality

- **Demand peaks:** Aqaba is a Red Sea leisure/tourism destination and the gateway airport for Wadi Rum and southern Petra access — plausible leisure-season demand driver, not independently quantified for the K Global operation. 🟧
- **Day-of-week / seasonal pattern:** Not independently sourced. 🟧
- **Cargo / belly capacity:** A dedicated Cargo Apron (198 × 600 m, opened 2005) and cargo-handling facilities exist; belly-cargo demand not independently quantified.
- **Connection banks:** As a destination (not a base), OJAQ's schedule is set by the network route register — cross-ref the route register.

---

## 7. Fuel

- **Supplier / into-plane:** Jet A-1 only; specific into-plane provider not individually named in reachable sources. 🟧
- **Uplift availability & hours:** **H24**; historical capacity figures of 120 tonnes (2007 cycle) rising to 156 tonnes (2011 cycle) — current capacity not re-verified. 🟧
- **Price / tankering angle:** Not independently benchmarked this pass. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration at this warm coastal-desert field — if anything, extreme summer heat (ref. temp 40.1°C) is the thermal consideration, not freeze.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — single small international arrivals area.
- **CBP-equivalent / immigration hours:** **H24** `[CARC AIP AD 2 OJAQ 2.3]`. 🟩
- **Pre-clearance / visa-transit notes:** Standard Jordanian visa-on-arrival/entry rules per nationality; no pre-clearance programme.
- **Late/overnight/diversion caveat:** With H24 customs and no curfew, late/overnight arrivals are not a structural constraint, though the field's small handling scale (single terminal, no repair/hangar facilities) is a secondary consideration for an unplanned diversion inbound. 🟧

---

## 9. De-icing provisioning & season

- **Availability:** **Nil** `[CARC AIP AD 2 OJAQ 2.3/2.4]` — no de-icing facility provisioned. 🟩 (expected, given the warm coastal-desert climate)
- **Season:** Not applicable — this field has no meaningful de-icing season.
- **Provisioning:** N/A.
- **Commercial impact:** None — de-icing is not a factor at this field.

---

## 10. Typical delays / reliability

- **Signature delay driver:** Seasonal southerly sandstorms off the Red Sea (from Egypt) are the field's most likely recurring weather-driven delay factor; otherwise the field is described as rarely weather-closed. 🟧
- **Ground-delay / flow-program exposure:** Not confirmed; no ATFM/CTOT programme identified, and traffic volume is low. 🟧
- **On-time reliability picture:** The single-runway/no-crosswind-alternative layout is the main structural reliability risk — a crosswind event on the active runway direction has no orientation workaround. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** No noise abatement procedure or noise-charge regime found (`NIL` per AIP AD 2.21). 🟩
- **Curfew infringement consequence:** Not applicable — no curfew identified.
- **Scheduling guardrails:** With no curfew/slot constraint, the main scheduling guardrail at OJAQ is the single-runway crosswind exposure (§Briefing §3.3) rather than time-of-day risk.

---

## Open items (🟧 — confirm against AIP / operator data)

- **K Global VAMSYS category** — not currently categorised; confirm before assuming any operator category or planning figure.
- **Taxi-in/taxi-out times** — not published for this field; confirm at planning.
- Ground handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Widebody/Code E stand availability and count — not confirmed against the primary AIP (see Briefing §13/§18).
- Fuel into-plane provider and current uplift capacity (historical figures of 120–156 tonnes not re-verified).
- Day-of-week/seasonal demand pattern and belly-cargo capacity specific to the K Global operation.

> **Live data — pull at planning:** fuel price, any slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation, current regional conflict-zone/GNSS-interference NOTAMs. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **Jordan CARC AIP, AD 2 OJAQ** (base cycle AMDT 46/2007, amended through AMDT 66/2012) — https://carc.gov.jo/pdf/AD2_OJAQ.pdf and https://khiaops.com/aac/attachments/article/121/052812AD2%20OJAQ.pdf (retrieved 2026-07-26).
- Wikipedia — "King Hussein International Airport" — https://en.wikipedia.org/wiki/King_Hussein_International_Airport (retrieved 2026-07-26). *Terminal scale/capacity, traffic volume, cargo terminal history.*
- VATSIM Jordan vACC — "Pilot Briefing: Aqaba King Hussein Airport [OJAQ]" (2024) — https://jordan.vatsim.me/wp-content/uploads/2024/02/jovacc-ojaq-briefing-2024.pdf (retrieved 2026-07-26). *Network-sim document — stand/apron cross-check only.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
