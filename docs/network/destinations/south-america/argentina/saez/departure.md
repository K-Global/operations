# SAEZ — Ezeiza Intl/Ministro Pistarini · Departure Page

**SAEZ / EZE** · Buenos Aires (Ezeiza), Argentina · South America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — ANAC/EANA AIP not reachable this pass; built from tier-4 public sources

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [SAEZ Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Not published / verify — expect wind-driven selection between the 11/29 and 17/35 pairs; RWY 35's displaced threshold does not reduce take-off distance (see [SAEZ — Briefing](index.md) §7) 🟧 |
| Config logic | Wind-driven; no published noise-preferential rule found 🟧 |
| Transition altitude | Not published / verify 🟧 |
| Take-off minima | Published — verify current chart 🟧 |
| CTOT / flow regime | Not confirmed — treat as unverified 🟧 |
| De-icing on departure | Not confirmed; winter fog/low visibility is the dominant seasonal concern rather than icing 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not published in reachable sources — confirm with Ground/ATC on the day. 🟧
- **Hot spots / tight taxiways:** Not confirmed in reachable sources this pass. 🟧
- **Runway crossings / read-back-required points:** Not confirmed in reachable sources. 🟧
- **Low-vis taxi caveats:** SMGCS/low-visibility taxi routing should be expected given the field's winter fog exposure; specific procedure not confirmed this pass — verify locally. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Expect wind-driven runway selection between the two non-parallel runway pairs (11/29, 17/35); no published preferential-runway rule found. 🟧
- **By departure direction:** Not confirmed in reachable sources. 🟧
- **Noise / preferential-runway program:** Not confirmed in reachable sources. 🟧
- **Interaction with arrivals:** Confirm dependent/independent configuration with ATC on the day — cross-ref [SAEZ — Briefing](index.md) §3.2 on the shared Buenos Aires (SAEZ/SABE) traffic picture.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not published / verify | All | Not confirmed 🟧 | Pull the current-AIRAC SID list at planning |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Standard 250 KIAS < FL100 (ICAO norm) assumed absent a published local override — verify current chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed in reachable sources. 🟧
- **Early turn / altitude constraints:** Not confirmed — verify chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources. 🟧
- **Close-in / distant obstacles:** None identified — flat Pampas terrain, consistent with [SAEZ — Briefing](index.md) §3.1. 🟩
- **Special DP / obstacle DP:** Not confirmed — verify on chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Reported CAT II/III capability at the field is consistent with the winter fog exposure, but LVTO minima/RVR figures are **not primary-confirmed** — verify current chart. 🟧
- **De-icing:** Not confirmed in reachable sources; not the field's dominant winter hazard (fog/low visibility is) — verify locally. 🟧

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Combined with Ground per the tier-4 frequency snapshot (121.75) — cross-ref [SAEZ — Briefing](index.md) §8.
- **Frequency sequence:** Delivery/Ground (121.75) → Tower (118.6) → Departure/Ezeiza Approach (119.9) — per [SAEZ — Briefing](index.md) §8; treat as a possibly incomplete tier-4 snapshot.
- **CTOT / slot handling:** Not confirmed in reachable sources — verify at planning. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Non-limiting on 11/29 (3,300 m) for K Global widebody types at sea level; RWY 35's TORA is unaffected by its displaced threshold (displacement affects landing distance only), but confirm current AIP figures. 🟧
- **Density altitude / temperature:** Sea-level, non-hot-and-high field — no density-altitude performance penalty expected.
- **Contamination / wet-runway:** Not confirmed — winter (May–Aug) rain/fog season may bring wet-runway braking-action considerations; verify NOTAM/METAR at planning. 🟧
- **Link to OM B:** See [OM B — Fleet Capability Matrix](../../../../../fleet/capability-matrix.md) — no type-specific field-length limitation identified.

---

## 10. Gotchas

- RWY 35's displaced threshold is a **landing** consideration only — do not mistake it for a reduced take-off distance available on that runway (see [SAEZ — Briefing](index.md) §7).
- Winter (May–Aug) radiation fog can form with limited notice — confirm current LVP/taxi-routing status before push-back in season.
- No confirmed hot spots or taxiway wingspan restrictions this pass — treat the ground layout as unconfirmed until verified locally.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- SID names, climb-gradient/RNP requirements and take-off minima — not obtained in this research pass.
- Stand→runway taxi routing, hot spots and low-vis taxi procedure — not confirmed.
- Transition altitude and CTOT/flow-control regime — not confirmed.
- LVTO minima/RVR figures and de-icing provisioning — not confirmed.
- Engine-out/obstacle DP existence — not confirmed.
- VATSIM cross-check — no dedicated VATSIM vACC/division airport SOP for SAEZ was located and cross-checked this pass.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/SAEZ/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *Runway/frequency tier-4 baseline.*
- Wikipedia — "Ministro Pistarini International Airport" — https://en.wikipedia.org/wiki/Ministro_Pistarini_International_Airport (retrieved 2026-07-26).
- Companion OM C file: [SAEZ — Briefing](index.md).
- Companion OM E file: [Low Visibility Operations](../../../../../flight-ops/low-visibility-operations.md).
- **ANAC/EANA AIP (AD 2 SAEZ)** — primary source of record; not reachable in this research pass.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
