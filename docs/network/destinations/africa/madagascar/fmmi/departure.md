# FMMI — Ivato · Departure Page

**FMMI / TNR** · Ivato, Antananarivo, Madagascar · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional (primary AIP not reachable this pass; tier-4-derived)

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [FMMI Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version. Primary-source data (ACM Madagascar AIP) was not reachable this research pass — figures below are tier-4-derived or general and flagged accordingly. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Single runway 11/29 — config is wind-driven by definition; no preferential rule confirmed |
| Config logic | Wind-driven |
| Transition altitude | Not confirmed this pass 🟧 |
| Take-off minima | Not confirmed this pass 🟧 |
| CTOT / flow regime | Not confirmed — unlikely at this scale of field |
| De-icing on departure | Not confirmed — do not assume NIL at this elevation 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not confirmed this pass — confirm with Ground/Tower on the day. 🟧
- **Hot spots / tight taxiways:** Not confirmed this pass. 🟧
- **Runway crossings / read-back-required points:** Not applicable — single runway.
- **Low-vis taxi caveats:** Not confirmed — cool-season morning mist/fog is plausible at this elevation; brief accordingly. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Single runway (11/29) — the operative runway is whichever end the wind favours; no published preferential rule confirmed.
- **By departure direction:** Not confirmed this pass. 🟧
- **Noise / preferential-runway program:** Not confirmed this pass. 🟧
- **Interaction with arrivals:** Single runway — no dependent-parallel consideration; sequencing detail not confirmed this pass.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed this pass | 11 | **High-elevation field — expect a real climb-gradient consideration on any published SID** 🟥 | Verify current chart |
| Not confirmed this pass | 29 | Same high-elevation consideration applies 🟥 | Verify current chart |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Standard ICAO 250 KIAS < FL100 assumed pending confirmation.
- **Noise-abatement departure procedure (NADP):** Not confirmed this pass. 🟧
- **Early turn / altitude constraints:** Not confirmed this pass — verify current chart before planning an early turn.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed this pass. 🟧
- **Close-in / distant obstacles:** Field sits on Madagascar's central highlands plateau; Antananarivo is built across hilly terrain and the surrounding highlands roll higher still — see [Briefing §3.1](index.md). Exact obstacle/terrain figures **not confirmed this pass**; read the current area chart before relying on any escape-route assumption.
- **Special DP / obstacle DP:** Not confirmed this pass. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed this pass. 🟧
- **De-icing:** Not confirmed — do not assume NIL given the field's elevation and cool-season night/early-morning temperatures. 🟧

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not confirmed this pass beyond the single reported Tower frequency (120.1 MHz) — see [Briefing §8](index.md). 🟧
- **Frequency sequence:** Not confirmed this pass — likely Ground/Delivery → Tower given a field of this scale, but no primary confirmation. 🟧
- **CTOT / slot handling:** Not confirmed — unlikely at this scale of field.

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Single 3,100 m runway — likely non-limiting in isolation for our fleet, but confirm against the combined high-elevation/temperature performance case (below).
- **Density altitude / temperature:** 🟥 **This is the defining performance consideration at FMMI.** Field elevation is 4,198 ft — plan every departure as a density-altitude case, especially in the warm season (≈ Nov–Apr) when afternoon temperatures are highest.
- **Contamination / wet-runway:** Not confirmed this pass; treat warm-season convective rain as a standard wet-runway planning input.
- **Link to OM B:** See [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) and OM B for type-specific high-elevation performance figures.

---

## 10. Gotchas

- **High-elevation field (4,198 ft)** — do not plan this departure like the sea-level fields (FIMP/FMEE/FSIA) in this network; density altitude is a real factor.
- Central-highlands/hilly terrain around the field — no confirmed escape-route data this pass; read the current chart rather than assuming a clear sector.
- Cool-season morning mist/fog is plausible at this elevation — check current METAR/TAF trend before an early departure.
- Single runway — no reciprocal fallback if the assigned runway becomes unusable.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary AIP not reachable this pass** — SID names, climb gradients, take-off minima, frequency sequence, engine-out/obstacle DP detail all need confirmation.
- De-icing availability/provisioning.
- Exact terrain/obstacle data around the field.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/navaid/lighting), current OAT for density-altitude planning. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/FMMI/ (retrieved 2026-07-26). *Tier-4 cross-check; runway/frequency data only.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from tier-4 public sources (ACM Madagascar primary AIP not reachable this pass); live VAMSYS fields; new 4-page pack replacing the 23-line stub. |
