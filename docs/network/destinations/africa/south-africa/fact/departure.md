# FACT — Cape Town Intl · Departure Page

**FACT / CPT** · Cape Town, Western Cape, South Africa · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [FACT Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **01 or 19** — wind-driven, subject to Cape Doctor crosswind limits |
| Config logic | Selected primarily for **crosswind-limit compliance** against the SE "Cape Doctor," not a clean headwind default (§3 Briefing) |
| Transition altitude | 7,500 ft |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | Not confirmed — no ATFM programme found in reachable sources 🟧 |
| De-icing on departure | **NIL** — not required at this field |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From the main aprons (A/B/C), Ground/Apron routes toward the assigned runway (01 or 19) via the standard taxiway network; confirm the exact taxi with Ground/Apron on the day.
- **Hot spots / tight taxiways:** 🟧 **TWY D3/D4** restricted to light/medium aircraft only; **TWY H** is security-gated — establish radio contact with SMC before moving past the gate; **TWY T** lacks appropriate markings/lighting — exercise caution.
- **Runway crossings / read-back-required points:** Stop bars are installed at all taxiway intersections leading onto RWY 01/19, and at TWY C and TWY E; RWY 16/34 (used as a taxiway) is **not** fitted with stop bars at its intersection with 01/19 — brief this asymmetry.
- **Low-vis taxi caveats:** Refer to the aerodrome restricted-visibility chart (AD-05); no specific SMGCS routing detail confirmed in reachable sources. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** 🟥 Runway selection is primarily a **crosswind-limit decision** against the SE Cape Doctor (Sep–Mar, peak Nov–Mar) rather than a simple into-wind choice, since neither 01 nor 19 aligns cleanly with the SE wind vector.
- **By departure direction:** No directional preference beyond wind/crosswind and destination-routing logic.
- **Noise / preferential-runway program:** No jet intersection takeoffs and no engine run-ups 2000–0400; avoid overflying Tygerberg Hospital (3 NM N) when departing RWY 01 or 34.
- **Interaction with arrivals:** RWY 16/34's dual use as a taxiway means departure ground movements may cross or run parallel to it during runway changes — maintain awareness.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| TETAN, KODES, IMSOM, OKTED | 01, 19 (runway-specific variants) | No hot-and-high consideration at this sea-level field; standard gradient — verify current chart | RNAV-equipped aircraft to certain destinations (e.g. FAGC/FAWB/FASK/FAWK, FAGM) follow published RNAV transition routes per AIP §2.22 — verify current AIRAC |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Maximum jet speed and noise-abatement SID procedures apply per AIP ENR 1.5 §9.1; no specific NADP1/2 preference found. 🟧
- **Early turn / altitude constraints:** Published per SID; avoid overflying Tygerberg Hospital (3 NM N) when departing RWY 01 or 34 — verify constraints on the current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** No close-in terrain on the runway centrelines; the **Tygerberg Mountain mast (787 ft AMSL)** and several other masts in the wider area (up to ~330 ft AGL) are noted in the AIP obstacle table — confirm relevance to the assigned SID/EOSID.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed this pass; RWY 01's ILS is published within CAT IIIB tolerances, giving strong low-vis infrastructure, but LVTO-specific RVR minima not sourced. 🟧
- **De-icing:** **NIL** — not required at this field.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Cape Town Clearance Delivery 122.100 MHz, Mon–Fri 0330–1700, Sat 0500–1500, Sun 0500–1700; outside these hours via SMC on 121.9 MHz.
- **Frequency sequence:** **Clearance Delivery 122.100 (or SMC 121.9 outside CD hours) → Ground (SMC) 121.9 → Tower 118.1 → Cape Town Approach 119.7 (Director 124.35 during high traffic).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** Not confirmed — no ATFM programme found in reachable sources for FACT specifically. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 01/19 (3,201 m) is non-limiting for any K Global type at sea-level performance.
- **Density altitude / temperature:** Non-issue at 151 ft, temperate climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Winter (Jun–Aug) frontal-system rain is the relevant seasonal consideration; no specific braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — the operative fleet consideration at FACT is **crosswind-limit compliance**, not field-length or elevation performance.

---

## 10. Gotchas

- **Crosswind, not headwind, is the runway-selection driver in Cape Doctor season** (Sep–Mar, peak Nov–Mar) — check the day's wind against type/crew crosswind limits before committing to 01 or 19.
- **RWY 16/34 is also a taxiway** — maintain ground-movement awareness around it, especially during a runway-configuration change.
- **No stop bars at the RWY 16/34 intersection with RWY 01/19** — an asymmetry versus the fully stop-bar-protected 01/19 taxiway junctions.
- **Avoid overflying Tygerberg Hospital** (3 NM N) departing RWY 01 or 34.
- **High bird activity October–March** — exercise caution on takeoff.
- **TWY H is security-gated** — establish radio contact with SMC before moving past the gate.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and gradient tables per runway.
- Take-off minima exact figures.
- NADP preference (if any).
- EOSID/engine-out procedure detail per runway.
- ATFM/CTOT applicability for FACT.

> **Live data — pull at planning:** wx/METAR/TAF (esp. wind/crosswind), NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM (if applicable). Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP South Africa (ATNS/SACAA), AD 2 FACT** — SID/chart index, communications, taxiway remarks — https://cad.atns.co.za/SmartAIM/EAipPackages/15-OCT-21/2021-10-15-000000/html/eAIP/FA-AD-2-FACT-en-US.html (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP South Africa (ATNS); K Global fields from live VAMSYS; 4-page pack. |
