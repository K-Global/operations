# LEBB — Bilbao · Dispatch Page

**LEBB / BIO** · Loiu, Biscay (Basque Country), Spain · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP España-derived

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [LEBB Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination / alternate** `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | Single passenger terminal (Calatrava-designed, opened 2000) — no multi-terminal split |
| Widebody stands available | 🟥 **Two only: PRKG 6A (bridge) and PRKG 111 (remote, autonomous exit)** — no other stand takes Code E |
| Slot regime | Not confirmed as formally IATA-coordinated in reachable AIP text; GA/IFR-VFR traffic at neighbouring LEZG requires PPR — no equivalent LEBB PPR-slot text found for scheduled commercial ops 🟧 |
| Curfew | No hard curfew found in reachable text; field is **not H24** — published hours with PPR extension 🟧 |
| Primary handling agent | Aviapartner / Ground Force (commercial + GA); United Aviation Services and NIS serve GA |
| Fuel supplier(s) | Exolum, SLCA (Jet A-1, 100LL) |
| Customs / PoE for pax | **Yes** — HR AD (not H24) 🟧 |
| De-icing | **Available** — de-icing apron (Code C max), PRKG 111 (Code E), PRKG 14 (alternate); Code D/E de-ice at own stand |

---

## 2. Terminals & concourses

- **Terminal layout:** Single passenger terminal, the Santiago Calatrava-designed "La Paloma" building (opened 19 November 2000), with a north apron/terminal area added the same year; no domestic/international physical split confirmed beyond standard Schengen processing.
- **Our operation uses:** The single terminal; **Code E aircraft board/deplane only via PRKG 6A** (the sole boarding-bridge widebody position) or via PRKG 111 (remote, bussed).
- **International arrivals / CBP-equivalent hall:** Standard Schengen/non-Schengen split within the single terminal; Customs desk hours are HR AD, not H24. 🟧
- **Notes:** The terminal's closed architectural design has been publicly noted (by Aena) as difficult to further enlarge — relevant only as long-range capacity context, not a tactical planning item. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E) stands:** 🟥 **PRKG 6A (bridge) and PRKG 111 (remote) only** — this is the entire Code E stand inventory at LEBB. PAPI on RWY 12/30 is **not usable for Code E aircraft**; plan the approach accordingly (visual glidepath guidance not available at this stand-configuration class).
- **Stands NOT usable by our types:** All other numbered PRKG positions (1-5, 7-9, 11-24, G-series) are configured for narrowbody/Code C or below — do not plan a Code E aircraft onto them; access via GATES B and A1 is **not authorised** for Code E traffic at all.
- **Remote / hardstand positions:** PRKG 111 is the remote/autonomous-exit Code E position; simultaneous push-back between PRKG 6A and PRKG 2 is not authorised when the Code E aircraft is pushing from 6A.
- **Contact vs remote for our arrivals:** Expect either the single bridge position (6A) or a bussed remote stand (111) — confirm allocation with handling before the inbound leg.
- **Ground-movement stand caveats:** Multiple curved taxiway sections around the Code E routing require mandatory oversteer and signalman guidance (wheel clearance under 4 m to the taxiway edge) — see [Briefing §13](index.md) and the Departure/Arrival taxi sections.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** Not confirmed as formally IATA-coordinated for scheduled commercial ops in reachable AIP text. 🟧
- **Curfew / night restriction:** No hard movement curfew found; the field is **not H24** — published operating hours (V: 0445-2130, I: 0545-2230) with a PPR-based extension window. Engine tests above idle are forbidden 0000-0600 LT. 🟧
- **CTOT / flow control:** Bilbao exchanges A-CDM messages (A-DPI/C-DPI) with EUROCONTROL's Network Manager Operations Centre (NMOC) for departing IFR flights — standard European ATFM exposure applies. 🟧
- **Commercial impact:** The binding commercial constraint here is not slots but the **two-stand Code E inventory** (§3) — a schedule that puts two widebody movements on the ground simultaneously will contend for PRKG 6A/111, and the non-H24 operating hours narrow the usable daily window for a late-running rotation.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** **Aviapartner** and **Ground Force** handle both commercial and general aviation; **United Aviation Services** and **NIS (North Incoming Service)** serve general aviation. Handling is **mandatory for all operations, including non-commercial**, except aircraft based at the field. 🟧 (specific agent per our contract not confirmed)
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 10 min / taxi-out 12 min** for planning purposes `[VAMSYS mirror 2026-07-26]`.
- **Services:** Push-back, GPU/PCA, de-icing (hot water/glycol units) and standard ramp services expected from the named handling agents.
- **Turnaround risk items:** The **two-stand Code E inventory** (§3), mandatory oversteer/signalman-guided taxi on several sections, and the field's non-H24 operating hours are the standing turnaround-risk items at this field.

---

## 6. Load factors & seasonality

- **Demand peaks:** Bilbao is the largest airport in the Basque Country and northern Spain by traffic; not independently modelled for the K Global operation specifically. 🟧
- **Day-of-week / seasonal pattern:** Not independently sourced for LEBB — treat as standard regional-Spain business/leisure mix pending network-schedule confirmation. 🟧
- **Cargo / belly capacity:** Field has confirmed cargo-handling facilities (up to 3,000 kg per the AIP handling-services entry) but is a passenger-dominant field overall; confirm belly-cargo plans against payload at planning. 🟧
- **Connection banks:** Not applicable as a non-base destination/alternate field; cross-ref the route register for our schedule's inbound/outbound timing.

---

## 7. Fuel

- **Supplier / into-plane:** **Exolum** and **SLCA** — both confirmed Jet A-1 and 100LL suppliers.
- **Uplift availability & hours:** Tied to airport operating hours (V: 0400-2150, I: 0500-2250, extendable) — **not H24**. 🟧
- **Price / tankering angle:** Not independently sourced this pass — assess relative price/tankering at planning. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration specific to this near-sea-level, temperate field.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — single terminal, standard Schengen/non-Schengen processing.
- **CBP-equivalent / immigration hours:** **HR AD** (tied to airport operating hours) — **not H24**. 🟧
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per nationality; no pre-clearance programme.
- **Late/overnight/diversion caveat:** 🟥 With the airport **not operating H24** and customs on HR AD, a late/off-hours arrival requires **PPR coordination in advance** — do not plan a schedule that assumes unconditional off-hours access.

---

## 9. De-icing provisioning & season

- **Availability:** **Available.** De-icing apron for aircraft up to Code C; **PRKG 111** covers aircraft up to Code E; **PRKG 14** is an alternate for Code C or when the de-icing apron is unusable (notably **during LVP**, when the main de-icing apron is not usable). **Code D/E aircraft de-ice at their own parking stand.** 🟩
- **Season:** Snow-plan period 1 December to 31 March; equipment includes a snowplough blade and potassium-acetate/urea spreaders.
- **Provisioning:** De-icing carried out by handling agents using hot water and glycol units.
- **Commercial impact:** With only two Code E stands and a de-icing-apron restriction during LVP, a winter low-visibility event compounds both the stand and de-icing constraints simultaneously — build schedule buffer accordingly. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** 🟥 **Documented windshear on approach** (Iberia 1456, 2001) and the surrounding hilly terrain are the field's defining reliability threats — see [Briefing §3](index.md).
- **Ground-delay / flow-program exposure:** Standard EUROCONTROL ATFM exposure via A-CDM/NMOC message exchange; not independently quantified for LEBB specifically. 🟧
- **On-time reliability picture:** The **two-stand Code E inventory** is the most likely schedule-integrity risk for a widebody operation — a stand conflict has no fallback position. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not confirmed in reachable public sources. 🟧
- **Curfew infringement consequence:** No hard curfew found; the operative constraint is the **non-H24 operating-hours/PPR regime** rather than a noise-driven movement ban.
- **Scheduling guardrails:** Build buffer so a normal operational delay does not push arrival/departure outside published hours without a PPR already in place; treat the two-stand Code E inventory as the primary schedule-integrity guardrail for a widebody rotation.

---

## Open items (🟧 — confirm against AIP / operator data)

- Formal slot-coordination level (if any) for scheduled commercial operations.
- Specific ground handling agent contracted for our operation and confirmed minimum turnaround time.
- Fuel price/tankering signal relative to network alternates.
- Noise-charge regime and any per-movement dB-based surcharge.
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.
- Whether a third Code E-capable stand is planned/under construction (terminal-capacity commentary suggests the current layout is considered constrained).

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation (PRKG 6A vs 111), current LVP/de-icing-apron status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- AIP España (ENAIRE eAIP) — AD 2-LEBB, items 3-9, 13, 20 — mirrored via https://ops.group/blog/wp-content/uploads/2025/07/LEBB-AIP.pdf (retrieved 2026-07-26). Operating hours, handling agents, fuel suppliers, de-icing provisioning, Code E stand restrictions.
- Wikipedia — "Bilbao Airport" — https://en.wikipedia.org/wiki/Bilbao_Airport (retrieved 2026-07-26). Terminal history, traffic context.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP España (ENAIRE); K Global fields from live VAMSYS; 4-page pack. |
