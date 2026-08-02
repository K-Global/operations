# LFML — Marseille-Provence · Dispatch Page

**LFML / MRS** · Marignane, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — SIA France eAIP-derived

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [LFML Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination / spoke field** `[VAMSYS mirror 2026-07-26]` |
| Aerodrome category | **R** `[VAMSYS mirror 2026-07-26]` |
| Base | **No** `[VAMSYS mirror 2026-07-26]` |
| Preferred alternates | **LFMN, LEBL, LIMC** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out | **12 min / 14 min** `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | Historic **Terminal 1** (Hall A — international; Hall B — domestic/national) is the main international-traffic terminal; **Terminal 2** is dedicated low-cost 🟧 |
| Widebody stands available | Code E access to the runway thresholds only via TWY G3 (RWY 13 side) / TWY G4 (RWY 31 side); specific widebody stand count/cluster not confirmed in reachable sources 🟧 |
| Slot regime | Not confirmed — no evidence of IATA Level 2/3 coordination found in reachable sources 🟧 |
| Curfew | **None found** (no blanket curfew); a **night noise regime 2200–0600L** restricts non-compliant aircraft 🟧 |
| Primary handling agent | Not individually confirmed for K Global's operation — multiple ground handlers operate on-field (see §5) 🟧 |
| Fuel supplier(s) | Two independent Jet A-1 suppliers on-field (Shell-branded and Total/BP-branded) |
| Customs / PoE for pax | **Yes — H24** |
| De-icing | **Available H24, in season** |

---

## 2. Terminals & concourses

- **Terminal layout:** **Terminal 1 Hall A** — the original, historic terminal (rebuilt 1961), the principal hall for international scheduled service. **Terminal 1 Hall B** — built in the 1990s, handles domestic/national scheduled service. **Terminal 2** — opened 2006, dedicated to low-cost carriers, entirely separate from Terminal 1. A "Cœur d'aéroport" modernisation programme for the historic Terminal 1 has been reported (architect-led redesign) — status/timeline not confirmed 🟧.
- **Our operation uses:** Terminal 1 Hall A is the expected terminal for K Global's international scheduled service pattern, consistent with its historic role as the field's main international hall — confirm current gate/hall assignment with handling before finalising a stand plan. 🟧
- **International arrivals / CBP-equivalent hall:** International arrivals clear passport control in Terminal 1 Hall A; customs/immigration operates H24 (§Briefing §6).
- **Notes:** 🟧 The historic Terminal 1 modernisation programme, if under way, may affect gate/stand assignment during the life of this brief — confirm current layout with handling.

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Code E aircraft (wingspan ≤65 m — B777-300ER/-200, A340 family, A330 family, B747-300/-400 per the AIP's own reference list) access the runway thresholds only via **TWY G3** (13-side) or **TWY G4** (31-side); specific widebody stand numbers/clusters not confirmed in reachable sources. 🟧
- **Stands NOT usable by our types:** TWY H1–H4 are restricted to a named specialist operator's activities and to the pelicandrome (Sécurité Civile firefighting helicopter base) — day-only, visibility ≥1,200 m, and size-limited (H4 restricted to ~9 m wingspan aircraft, excluding a couple of named exceptions). TWY F3/F7 are day-only, visibility ≥1,200 m, and generally limited to ≤24 m wingspan (with named business-jet/turboprop exceptions) — not usable for K Global mainline equipment.
- **Remote / hardstand positions:** Several remote stands (25D, 30A, 30D, 40A, 40D) **require a mandatory push-back start**. General remote-parking availability/bussing implications not further detailed in reachable sources. 🟧
- **Contact vs remote for our arrivals:** Not confirmed — verify current stand allocation with handling. 🟧
- **Ground-movement stand caveats:** Stands 71–78 have a documented apron slope (generally <1.0–1.9%, with a gutter at stands 74/75 producing locally >2% slopes near the nosewheel) — relevant to parking-brake/chock procedure. TWY G1/L4 have a reduced wingtip clearance margin requiring reduced speed. See [Briefing §13](index.md) and the Departure/Arrival taxi sections.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** Not confirmed — no evidence of IATA Level 2/3 coordination found for LFML in reachable sources; treat as non-coordinated pending verification. 🟧
- **Curfew / night restriction:** No blanket movement curfew found. A **night noise regime (2200–0600 local)** prohibits landing, or leaving the stand for takeoff, for turbojets certified to Chapter 3 with a cumulative noise margin under 10 EPNdB, and turboprops (Chapter 2/3/5) with a cumulative margin under 8 EPNdB. Non-compliance risks an ACNUSA administrative fine (up to €40,000 for a legal entity). Modern K Global types are expected to be comfortably compliant, but **per-type verification has not been completed** — confirm against [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). 🟧
- **CTOT / flow control:** No LFML-specific CTOT/ATFM regime confirmed; standard EUROCONTROL Network Manager flow measures may still apply during regional weather (esp. Mistral) or capacity events. 🟧
- **Commercial impact:** Absent a confirmed slot regime, the main scheduling guardrail at this field is the **night noise window** — build buffer to avoid a late-day delay pushing a landing or departure into the 2200–0600 restricted period if the assigned type's compliance is not yet confirmed.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Multiple ground handlers operate on the field, including a national-carrier handling desk (own + assisted airlines), at least one independent commercial ground handler, an independent commercial/cargo/general-aviation handler, and a further airport-services provider; a dedicated general-aviation FBO is also present. The specific handler contracted for K Global's operation is not confirmed in reachable public sources. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 12 min / taxi-out 14 min** for planning purposes `[VAMSYS mirror 2026-07-26]` — build the gate turn around these plus standard service times for the assigned type.
- **Services:** Push-back, GPU, water/lav, catering and cabin services expected as standard commercial-airport provision; de-icing available in season (§9).
- **Turnaround risk items:** Mandatory push-back start from several remote stands, apron-slope caution at certain stands (§3), and de-icing-pad/equipment throughput in winter (§9) are the principal turnaround-risk items identified.

---

## 6. Load factors & seasonality

- **Demand peaks:** Not independently sourced for K Global's specific operation; the field generally sees a strong seasonal (summer/Mediterranean leisure) and event-driven demand pattern typical of a major regional French airport. 🟧
- **Day-of-week / seasonal pattern:** Not independently sourced — treat as standard Western European regional-hub leisure/business mix pending network-schedule confirmation. 🟧
- **Cargo / belly capacity:** The airport's cargo handling facilities are described only generically ("modern handling facilities") in the reachable AIP extract; no cargo-volume or belly-capacity detail confirmed. 🟧
- **Connection banks:** Not applicable — LFML is not a K Global base; connection-bank timing is set at the network's hub fields, not here.

---

## 7. Fuel

- **Supplier / into-plane:** Two independent Jet A-1 suppliers operate on-field, one via a modern refuelling installation with roughly 560 m³ Jet A-1 storage (flow ~1,000 L/min) and a smaller 100LL facility for general aviation, the other via a larger installation with roughly 2,300 m³ Jet A-1 storage (flow ~1,000–2,170 L/min).
- **Uplift availability & hours:** Jet A-1 confirmed **H24**.
- **Price / tankering angle:** No LFML-specific price signal sourced this pass — assess tankering economics against the network base and preferred alternates at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration specific to this near-sea-level Mediterranean field.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — international arrivals hall in Terminal 1 Hall A.
- **CBP-equivalent / immigration hours:** **H24** confirmed per AIP.
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per nationality; no pre-clearance programme at LFML.
- **Late/overnight/diversion caveat:** Customs/immigration is confirmed H24, so late/overnight arrivals are not constrained by desk hours; the **night noise regime** (§4) is the more relevant late-operations constraint at this field. 🟧

---

## 9. De-icing provisioning & season

- **Availability:** **Available H24** in season. 🟩
- **Season:** Not separately confirmed for LFML's specific de-icing season window (Mediterranean climate implies a shorter/lighter season than northern-European fields) — treat as a winter-months consideration pending confirmation. 🟧
- **Provisioning:** Two ground-handling operators run dedicated de-icing rigs on-field: one with Type I (50/50 mix, ~12,000 L stock) and Type IV (100%, ~1,000 L stock) fluids, a second with its own Type I (~6,000 L) and Type IV (~6,000 L) stocks. Airport-side winter equipment includes multiple snow-clearance blade trucks, loaders and sweepers plus dedicated ice/de-icing-agent spreaders (total agent reserve ~40,000 L), with a published runway-clearance priority order (main runway 13L/31R cleared first). GRF (Global Reporting Format) runway-condition reporting operates H24.
- **Commercial impact:** De-icing-pad/equipment throughput and the Mistral's own wind/gust exposure (rather than fog or heavy snow, which are comparatively rare at this Mediterranean field) are the more likely seasonal delay-risk drivers. See [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** The **Mistral wind** — its onset can force a runway-configuration change and, when strong, constrains RWY 31L takeoffs (crosswind >12 kt on a wet runway) — is the field's most distinctive delay/diversion-risk driver, ahead of the Mediterranean climate's otherwise comparatively benign fog/precipitation profile.
- **Ground-delay / flow-program exposure:** No LFML-specific ATFM/ground-delay statistic sourced this pass; expect standard EUROCONTROL flow measures during regional Mistral events or peak-season demand. 🟧
- **On-time reliability picture:** Mistral episodes (most frequent winter/spring) carry the highest schedule-risk exposure at this field; general Mediterranean climate otherwise favours reliable VMC operations. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** A noise-abatement ministerial order (3 May 2012) governs the night restriction described in §4; specific noise-charge/surcharge schedule not confirmed in reachable sources. 🟧
- **Curfew infringement consequence:** Non-compliant aircraft operating within the 2200–0600L window risk an ACNUSA administrative fine (up to €40,000 for a legal entity) rather than a simple charge — treat the night noise regime as a **hard restriction**, not a priced option, pending confirmed type compliance (§4).
- **Scheduling guardrails:** Build buffer into the last rotation of the day so a normal operational delay does not push a landing or departure into the 2200–0600 window until K Global fleet-wide noise-margin compliance is confirmed; treat any Mistral forecast as a config-change/delay-risk trigger for both inbound and outbound legs.

---

## Open items (🟧 — confirm against AIP / operator data)

- Current terminal/gate assignment for K Global's operation (Terminal 1 Hall A assumed).
- Widebody stand count/cluster and contact-vs-remote allocation for our arrivals.
- Slot-coordination status (assumed non-coordinated).
- Ground handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Fuel price/tankering signal specific to this field.
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.
- De-icing season window (exact months) for this Mediterranean field.
- Night-noise-regime per-type EPNdB compliance for the K Global fleet.
- Noise-charge/surcharge schedule detail.
- "Cœur d'aéroport" Terminal 1 renovation programme status/timeline.

> **Live data — pull at planning:** fuel price, slot/CTOT file (if any), current ATFM/ground-delay program, current demand/load, stand allocation, current Mistral/wind-related NOTAMs or AIRMETs. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **SIA France eAIP, AIP FRANCE AD 2 LFML** (AIRAC cycle effective 11 Jun 2026) — https://www.sia.aviation-civile.gouv.fr/media/dvd/eAIP_11_JUN_2026/FRANCE/AIRAC-2026-06-11/html/eAIP/FR-AD-2.LFML-fr-FR.html (retrieved 2026-07-26). *Handling/fuel/de-icing facilities, customs hours, noise-abatement/night-restriction regime, taxiway restrictions, apron-slope data.*
- Wikipedia (FR) — "Aéroport de Marseille Provence" — https://fr.wikipedia.org/wiki/Aéroport_de_Marseille_Provence (retrieved 2026-07-26). *Terminal history/layout, "Cœur d'aéroport" renovation note.*
- Wikipedia (EN) — "Marseille Provence Airport" — https://en.wikipedia.org/wiki/Marseille_Provence_Airport (retrieved 2026-07-26). *General background, traffic statistics.*
- IVAO France Division — "LFML - Marseille Provence" (MANEX Aéroports Civils) — https://wiki.ivao.fr/books/manex-aeroports-civils/page/lfml-marseille-provence (retrieved 2026-07-26). **Network-sim document, not regulatory** — runway/taxiway cross-check only.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
