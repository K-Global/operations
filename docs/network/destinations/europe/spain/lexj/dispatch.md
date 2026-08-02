# LEXJ — Seve Ballesteros-Santander · Dispatch Page

**LEXJ / SDR** · Maliaño, Cantabria, Spain · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP España-derived

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [LEXJ Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination / alternate** `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | Single passenger terminal — no multi-terminal split |
| Widebody stands available | 🟧 Higher-code-letter (D/E) ops via dedicated procedure; default **PRKG 10** (combined PRKG 12-13 possible) — no dedicated widebody boarding-bridge stand confirmed |
| Slot regime | Not confirmed as formally IATA-coordinated in reachable AIP text 🟧 |
| Curfew | No hard curfew found; field is **not H24** — published hours with PPR 2h extension 🟧 |
| Primary handling agent | South Europe Ground Services (commercial + GA, regulated tariff) |
| Fuel supplier(s) | EXOLUM (Jet A-1, 100LL) |
| Customs / PoE for pax | **Yes** — HR AD, except scheduled commercial flights (which have different notification rules) 🟧 |
| De-icing | 🟧 Handling-agent-provided hot water/glycol at stand — operating-hours table separately lists "No" as a scheduled service; reconcile before relying on it |

---

## 2. Terminals & concourses

- **Terminal layout:** Single passenger terminal; no domestic/international physical split confirmed beyond standard Schengen processing.
- **Our operation uses:** The single terminal; higher-code-letter (D/E) aircraft default to **PRKG 10** per the field's dedicated operating procedure.
- **International arrivals / CBP-equivalent hall:** Standard Schengen/non-Schengen split; customs hours are HR AD (not H24), with an advance-notification requirement (1 hour to the Airport Operations Centre, CEOPS) for most non-scheduled-commercial operations before filing the flight plan.
- **Notes:** No hotel facilities at the field; restaurant, bus/taxi/car-hire transport, and tourist information are available. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code D/E) stands:** 🟧 No dedicated widebody boarding-bridge stand confirmed. Higher-code-letter operations (referenced against an A330-200) use a **dedicated published procedure**: default parking **PRKG 10**, with combined use of PRKG 12-13 possible (a "SÍGAME"/follow-me reference point is provided for nose-wheel positioning in that case).
- **Stands NOT usable by our types:** General Aviation apron positions (PRKG 14-22) require chocking/anchoring and are not configured for Code D/E.
- **Remote / hardstand positions:** PRKG 10 (and combined PRKG 12-13) function as the de-facto remote/hardstand solution for higher-code-letter traffic — bussing implications not confirmed. 🟧
- **Contact vs remote for our arrivals:** Expect a remote-style stand assignment (PRKG 10) for any Code D/E arrival; confirm with handling before the inbound leg.
- **Ground-movement stand caveats:** Mandatory oversteer at several named turns applies to higher-code-letter aircraft — see [Briefing §13](index.md) and the Departure/Arrival taxi sections.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** Not confirmed as formally IATA-coordinated for scheduled commercial ops in reachable AIP text. 🟧 Non-scheduled-commercial and most GA operations require **1-hour advance notification** to CEOPS before filing the flight plan.
- **Curfew / night restriction:** No hard movement curfew found; the field is **not H24** — published operating hours (V: 0430-2100, I: 0530-2200) with a PPR-2h extension window. 🟧
- **CTOT / flow control:** Not independently confirmed for this field's ATFM exposure. 🟧
- **Commercial impact:** The binding commercial constraints here are the **absence of a confirmed widebody stand/gate solution** beyond the dedicated PRKG 10 procedure, and the field's **non-H24 operating hours**, which narrow the usable daily window for a late-running rotation.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** **South Europe Ground Services SL** — regulated-tariff basic and complementary ramp services for commercial and general aviation. **United Aviation Services SL** serves general aviation only (aircraft <10 t MTOW or <20 seats). Handling is mandatory for all operations (including non-commercial) where passengers/crew access the terminal, with limited exemptions.
- **Typical turnaround time for our type:** 🟧 **Not confirmed** — VAMSYS mirror does not publish a taxi-in/taxi-out time for this field (§1); build turnaround planning conservatively pending confirmation.
- **Services:** Push-back not applicable (all stands autonomous/self-manoeuvring); GPU/water/lav/catering services expected via the named handling agent.
- **Turnaround risk items:** The **unresolved widebody stand/gate solution** (§3), the field's **non-H24 hours**, and the **RWY 29 wind-shear phenomenon** (Briefing §3.4, which can force an approach/config change with knock-on turnaround delay) are the standing turnaround-risk items.

---

## 6. Load factors & seasonality

- **Demand peaks:** Not independently modelled for the K Global operation. 🟧
- **Day-of-week / seasonal pattern:** Not independently sourced for LEXJ — treat as standard regional-Spain business/leisure mix pending network-schedule confirmation. 🟧
- **Cargo / belly capacity:** Cargo-handling facilities confirmed present in the AIP; not independently sized. 🟧
- **Connection banks:** Not applicable as a non-base destination/alternate field; cross-ref the route register for our schedule's inbound/outbound timing.

---

## 7. Fuel

- **Supplier / into-plane:** **EXOLUM** — confirmed Jet A-1 and 100LL supplier.
- **Uplift availability & hours:** Tied to AD operating hours (V: 0400-2150, I: 0500-2250, extendable) — **not H24**. 🟧
- **Price / tankering angle:** Not independently sourced this pass — assess relative price/tankering at planning. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration specific to this near-sea-level, coastal field.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — single terminal, standard Schengen/non-Schengen processing.
- **CBP-equivalent / immigration hours:** **HR AD** (tied to airport operating hours) — **not H24**, except scheduled commercial flights which follow a different, less restrictive notification path. 🟧
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per nationality; for non-Schengen routings, category-2 passenger-escort handling is required to the passport-control area.
- **Late/overnight/diversion caveat:** 🟥 With the airport **not operating H24**, a late/off-hours arrival requires PPR coordination in advance where the flight is not a scheduled-commercial operation — do not plan on unconditional off-hours access.

---

## 9. De-icing provisioning & season

- **Availability:** 🟧 **Reconcile before relying on it.** The AIP handling-services table (item 4) describes hot water/glycol de-icing units provided by the handling agent at the stand; the operating-hours table (item 3) separately lists **"De-icing: No"** as a scheduled airport service. Treat de-icing as an ad-hoc handling-agent arrangement, not a standing airport-operated pad service.
- **Season:** Snow-plan period 1 December to 31 March; equipment includes a urea spreader and snowplough.
- **Provisioning:** Handling-agent-operated, hot water and glycol units, applied at the parking stand.
- **Commercial impact:** With no dedicated de-icing pad and a reconciliation needed on service availability, winter operations should confirm de-icing capability with the handling agent **before** scheduling a cold-weather rotation into this field. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** 🟥 **AIP-documented wind shear/turbulence on the RWY 29 approach** (S-SW wind 190-220° ≥20 kt, gusts >30 kt) is the field's defining reliability threat — see [Briefing §3.4](index.md).
- **Ground-delay / flow-program exposure:** Not independently quantified for LEXJ. 🟧
- **On-time reliability picture:** The **RWY 29 wind-shear phenomenon** and the field's **non-H24 hours** are the two most likely schedule-integrity risks. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not confirmed in reachable public sources. 🟧
- **Curfew infringement consequence:** No hard curfew found; the operative constraint is the **non-H24 operating-hours/PPR regime** rather than a noise-driven movement ban.
- **Scheduling guardrails:** Build buffer so a normal operational delay does not push arrival/departure outside published hours without a PPR already in place; treat the RWY 29 wind-shear phenomenon as a real go/no-go decision point on gale-force S-SW wind days, not merely a comfort caution.

---

## Open items (🟧 — confirm against AIP / operator data)

- VAMSYS aerodrome category and taxi-in/taxi-out times — currently unset/unpublished.
- Formal slot-coordination level (if any) for scheduled commercial operations.
- Confirmed widebody stand/gate solution beyond the PRKG 10 default procedure.
- De-icing service status reconciliation (facilities table vs operating-hours table conflict).
- Fuel price/tankering signal relative to network alternates.
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation, current PPOAM/wind-shear advisory status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- AIP España (ENAIRE eAIP) — AD 2-LEXJ, items 3-9, 20 — https://aip.enaire.es/AIP/contenido_AIP/AD/AD2/LEXJ/LE_AD_2_LEXJ_en.pdf (retrieved 2026-07-26). Operating hours, handling agents, fuel supplier, de-icing provisioning, higher-code-letter-aircraft stand procedure.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP España (ENAIRE); K Global fields from live VAMSYS; 4-page pack. |
