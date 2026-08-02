# EGPF — Glasgow · Departure Page

**EGPF / GLA** · Glasgow (Paisley), Renfrewshire, Scotland, United Kingdom · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [EGPF Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **05 or 23** — single runway, wind-driven direction of use |
| Config logic | No published preferential-runway rule found in the reachable extract; direction of use is wind-driven 🟧 |
| Transition altitude | **6,000 ft** (Glasgow QNH) |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | Not confirmed — no slot-coordination level identified 🟧 |
| De-icing on departure | **Available H24** |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From a West Pier stand (incl. Stand 30), Ground routes toward the assigned runway threshold per the runway-in-use/CAT-status logic in [Briefing §13](index.md). For **Code F (A380) departures specifically**: with **RWY23 in use** and **CAT I** conditions, taxi via **A** to hold **A2**, then line up via **A1** (**no right turns at this intersection** — runway width 45 m, no turning area); with **RWY05 in use**, taxi via **G** to hold **G2**, then depart via **G1**. Under **CAT II/III**, Code F aircraft hold at **A3/G2** regardless of runway direction. Confirm the exact taxi with Ground/Tower on the day.
- **Hot spots / tight taxiways:** 🟥 Taxiway link **C1** is restricted to aircraft **≤30,000 kg MTWA** entering/exiting RWY05/23 — never route a Code C/D/E/F aircraft via C1. A **reduced taxiway centreline-to-object clearance of 47.5 m** applies along Alpha1-to-ATC-Tower, ATC-Tower-to-Golf2, and Golf2-to-Golf1 to accommodate Code F wingspan — expect active ground-vehicle control (red-light road-holding) during any Code F taxi.
- **Runway crossings / read-back-required points:** Expect explicit crossing/hold-short instructions around the Stand 30/Code F hold points (A2/A3/G2) and at the C1 weight-restriction boundary.
- **Low-vis taxi caveats:** SMGCS/low-vis taxi routing would be expected consistent with the field's CAT III LVO capability; follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Single runway 05/23 — direction of use is wind-driven; no published preferential-runway rule identified in the reachable extract.
- **By departure direction:** Not applicable — single-runway field, no directional SID split beyond the active runway end.
- **Noise / preferential-runway program:** Standard climb profile applies on **either runway, day or night** — climb to **1,500 ft QFE**, then a minimum **500 fpm** climb gradient to **3,000 ft QFE**. See [Briefing §12](index.md).
- **Interaction with arrivals:** Single runway — departures and arrivals share the same runway end in the active configuration; sequencing is a straightforward single-runway flow rather than a parallel/crossing-runway interaction.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 05 / 23 | Initial climb to 6,000 ft (Glasgow QNH) per the noise-abatement climb profile — verify RNP/gradient specifics on current chart | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Standard climb profile, either runway, day or night — **1,500 ft QFE**, then a minimum **500 fpm** climb gradient to **3,000 ft QFE**; 250 KIAS below FL100 (UK/ICAO norm) thereafter — confirm current chart for any local override.
- **Noise-abatement departure procedure (NADP):** No specific NADP1/NADP2 designation confirmed in the reachable extract beyond the standard climb profile above. 🟧
- **Early turn / altitude constraints:** Not confirmed this pass — verify any published early-turn constraint on the current SID chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** No quantified close-in obstacle identified in the reachable AIP extract; general regional geography (Kilpatrick Hills N/NE, Renfrewshire uplands S) is noted in [Briefing §3.1](index.md) but not confirmed as SID-relevant — verify the current chart's obstacle/MSA data.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** LVP would be expected consistent with the CAT III LLZ/GP designation on both runway ends; specific LVTO RVR minima not confirmed this pass. 🟧
- **De-icing:** **Available H24** per the AD 2 EGPF operating-hours table; pad-vs-gate provisioning, fluid type and season not itemised in the reachable extract. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md). 🟧

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not separately published in the reachable extract — confirm whether delivery is integrated with Ground or Tower at this field size. 🟧
- **Frequency sequence:** **Ground 121.705 (seasonal hours — Winter 0630–2130, Summer 0530–2030 local; may close tactically, closures on ATIS) → Tower 118.805 (H24) → Glasgow Approach/Radar 119.100 (H24, primary; 125.250/128.755 as directed).** Take the assigned frequency and confirm current chart. (Frequencies from [Briefing §8](index.md).)
- **CTOT / slot handling:** No slot-coordination level identified for this field — do not assume a Level 1 (non-coordinated) status without verification; comply with any assigned CTOT/EDCT-equivalent if issued. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY05 (TORA 2,658 m) and RWY23 (TORA 2,661 m) are non-limiting for narrowbody types; a Code E/F departure requiring the **full length of RWY23** must back-track and turn within the dedicated **92 m × 61 m extension entered at Bravo1** — **no 180° turn is permitted on RWY05/23 for Code E/F aircraft under any circumstances**.
- **Density altitude / temperature:** Non-issue at 26 ft, temperate maritime climate — no hot-and-high penalty.
- **Contamination / wet-runway:** The RWY23 threshold-to-Link-F section carries a published **fast-drying capability** following 2017 resurfacing; no other contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). For a Code F (A388) departure, see [`OM B — A388 Dispatch`](../../../../../fleet/a388/dispatch.md) and confirm **RFF Category A10 has been arranged in advance** — A10 is not standing cover at this field.

---

## 10. Gotchas

- **RWY23 has a displaced threshold** — the LDA (2,356 m) is well short of TODA (3,090 m); irrelevant for a takeoff-distance calculation but a reminder the runway end is asymmetric — do not confuse takeoff and landing distance figures for this end.
- **Code E/F aircraft can never turn 180° on RWY05/23** — a full-length RWY23 departure means back-track via Bravo1 into the dedicated 92 m × 61 m extension, not a runway-end U-turn.
- **Taxiway link C1 is capped at 30,000 kg MTWA** — never plan a widebody push/taxi through C1.
- **Stand 30's Code F hold-point assignment changes with both runway-in-use and CAT status** — do not apply a fixed mental model; confirm the current configuration before taxi.
- **Ground frequency (121.705) is seasonal and may close tactically** — do not assume it is live outside its published hours; a closure will be broadcast on ATIS.
- **Seasonal wildlife (geese/swans, Sept–Apr, flocks 100+, up to 500 ft)** — brief bird-strike awareness specifically for a departure/initial-climb profile in this window.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics.
- Take-off minima exact figures.
- Clearance delivery frequency/procedure (possibly integrated with Ground/Tower).
- EOSID/engine-out procedure detail.
- LVTO RVR minima.
- De-icing pad/gate provisioning, fluid type and seasonal window.
- Slot-coordination level / CTOT regime confirmation.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. Stand 30/Code F safeguarding status and C1/Bravo1 restrictions), CTOT/ATFM, de-icing status, current bird-hazard NOTAMs in season. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **UK NATS eAIP — AD 2 EGPF**, AIRAC effective 2022-06-16 — https://www.aurora.nats.co.uk/htmlAIP/Publications/2022-06-16-AIRAC/html/eAIP/EG-AD-2.EGPF-en-GB.html (retrieved 2026-07-26). *Runway/declared distances, AD 2.20 local aerodrome regulations (Code F stand-safeguarding, C1/Bravo1), AD 2.21 noise-abatement climb profile, communications.*
- VATSIM UK — Glasgow (EGPF) airport reference — https://www.vatsim.uk/airports/EGPF (retrieved 2026-07-26). *Network-sim, not regulatory — 6,000 ft initial-climb corroboration, exit-taxiway list.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from UK AIP (NATS AIS); K Global fields from live VAMSYS; 4-page pack. |
