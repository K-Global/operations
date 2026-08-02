# EDDV — Hannover · Departure Page

**EDDV / HAJ** · Langenhagen (Hannover), Germany · Europe
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [EDDV Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **09L/27R** (main scheduled-traffic runway); wind-dependent — do not expect the short/unlit **09C/27C** to be assigned to a K Global type 🟧 |
| Config logic | Wind-dependent; three-runway layout under Hannover Tower/Ground with Director/Approach feeding Bremen Radar |
| Transition altitude | 5,000 ft (German nationwide standard) — verify no local override on current chart |
| Take-off minima | Not confirmed — verify current AIRAC 🟧 |
| CTOT / flow regime | No formal slot-coordination regime confirmed for Hannover (unlike EDDB) — verify on the OFP 🟧 |
| De-icing on departure | Expected available; procedure/frequency not confirmed 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From Terminals A/B/C (or D in peak periods), Ground routes toward the assigned departure runway — confirm the exact taxi with Ground on the day. Be explicit about avoiding any routing that would place a K Global type on the short/unlit centre runway (09C/27C).
- **Hot spots / tight taxiways:** 🟥 No specific documented hotspot found in reachable sources beyond the general three-runway/short-unlit-centre-runway awareness item — confirm the active/assigned runway explicitly before taxi, and never assume the centre runway is available to a scheduled-jet type.
- **Runway crossings / read-back-required points:** Not confirmed — expect standard crossing/hold-short instructions given the three-runway layout. 🟧
- **Low-vis taxi caveats:** SMGCS/low-vis taxi routing applies consistent with the field's confirmed CAT II/III environment; follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Wind-dependent; **09L/27R is the main scheduled-traffic runway** — the secondary 09R/27L is available as an alternate; the short, unlit 09C/27C is not expected to be assigned to scheduled commercial types.
- **By departure direction:** Not confirmed from reachable sources — no directional-preference logic identified beyond the general 09/27 wind-driven config.
- **Noise / preferential-runway program:** Not itemised in reachable sources beyond the noise-certificate-based night restriction (see Briefing §12) — confirm current NAP status if published.
- **Interaction with arrivals:** Traffic sequencing among the three-runway layout under Hannover Tower/Bremen Radar is the operative consideration — confirm the active runway assignment explicitly rather than assuming 09L/27R by default.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 09L/27R (main) | No unusual gradient expected at 183 ft elevation; confirm standard RNAV-1 SID equipage on current chart | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; standard ICAO/SERA speed limits apply below FL100 (250 KIAS) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not itemised in reachable sources beyond the noise-certificate-based night restriction (Briefing §12) — no fleet-wide NADP preference confirmed. 🟧
- **Early turn / altitude constraints:** Not confirmed — verify current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** No significant terrain exists in the vicinity — flat North German Plain around Langenhagen; CFIT/obstacle exposure is low (see Briefing §3.1).
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** LVP applies consistent with the field's confirmed CAT II/III capability (via ATIS LVP remark); specific LVTO RVR minima not confirmed this pass. 🟧
- **De-icing:** Standard German winter climate — de-icing facilities expected available; specific pad/procedure/frequency not confirmed. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not separately confirmed as a distinct frequency — may be combined with Ground; verify locally. 🟧
- **Frequency sequence:** **Ground 121.955 (H24 assumed) → Tower 120.405 (H24 assumed; a second tower-labelled frequency 120.18 appears in tier-4 data, purpose not confirmed) → Director 119.6 (H24 assumed) → Bremen Radar (Bremen ACC, EDWW) 131.325 or 132.33 — discrepancy, not resolved.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** No formal slot-coordination regime confirmed for Hannover in reachable sources — verify on the OFP whether any EUROCONTROL ATFM/CTOT regulation applies. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Main runway 09L/27R (12,434 ft) is ample for any K Global type; the short 09C/27C (2,548 ft, unlit) is not a scheduled-traffic runway and never a departure option for a K Global type.
- **Density altitude / temperature:** Non-issue at 183 ft, sea-level–adjacent lowland climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Winter snow/slush/ice is the relevant seasonal consideration at this latitude; no specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — narrow-body short/medium-haul types are the expected equipment on this domestic German field; no field-length or field-elevation performance penalty identified.

---

## 10. Gotchas

- **Three parallel runways — the centre runway (09C/27C) is short (2,548 ft) and unlit** — never expect or plan a departure from it for a K Global type.
- **Displaced thresholds on the main runway both ends (09L +984 ft / 27R +984 ft)** — use the correct usable distance, not the physical runway length.
- **No dedicated Bremen FIR/EDWW airspace brief exists in OM C** 🟧 — the field is under Bremen ACC, not Langen; do not assume Langen-area procedures apply. See [Briefing §3.2](index.md) and the general [Europe area brief](../../../../airspace/europe.md) for continental-corridor context only.
- **Bremen Radar frequency discrepancy** (131.325 vs 132.33, two tier-4 sources) — confirm on current chart rather than assuming either value.
- **No hard curfew, but a noise-certificate-based restriction applies broadly 2200/2300–0600 local** — do not assume unrestricted late-night departures without confirming current parameters.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics.
- Take-off minima / DVA exact figures.
- Start-up/push-back procedure detail.
- EOSID/engine-out procedure detail per runway.
- LVTO RVR minima.
- Bremen Radar frequency discrepancy (§8) — confirm the current value.
- Whether any formal slot/CTOT regime applies to Hannover.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. current runway-in-use), CTOT/ATFM (if any), de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — Hannover Airport (EDDV) frequencies/runways — https://ourairports.com/airports/EDDV/pilot-info.html , https://ourairports.com/airports/EDDV/frequencies.html (retrieved 2026-07-25).
- VATSIM Germany Knowledgebase — EDDV Hannover Airport (Bremen FIR/EDWW) — https://knowledgebase.vatsim-germany.org/books/sops-fir-bremen/chapter/eddv-hannover-airport (retrieved 2026-07-25).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Built from DFS eAIP-derived Briefing + live VAMSYS; new page, part of the fold to a 4-page pack. |
