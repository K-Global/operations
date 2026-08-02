# OEAB — Abha · Departure Page

**OEAB / AHB** · Abha, Saudi Arabia · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [OEAB Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

> 🟥 **This is the K Global network's highest-elevation departure field. Apply [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) in full before dispatch.**

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **13 or 31** — single runway, direction per wind |
| Config logic | Wind-driven; single runway |
| Transition altitude | 13,000 ft |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | No slot-coordination regime identified in normal circumstances; **conflict-zone NOTAM closure risk supersedes all other planning — verify live** 🟥 |
| De-icing on departure | **NIL** — not provided, despite winter-cold profile |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Confirm exact taxi with Ground/Apron on the day; taxiways A/A1/A2, asphalt, PCN 58/F/A/W/T.
- **Hot spots / tight taxiways:** None specifically named in the reachable AIP extract.
- **Runway crossings / read-back-required points:** Not specifically identified.
- **Low-vis taxi caveats:** "The City of Fog" — mountain cloud/mist is a routine local condition; the AIP's low-vis procedure (one movement at a time when TWR cannot observe ground movement) applies. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Single runway (13/31); direction assigned per wind by Abha Tower/Approach.
- **By departure direction:** No specific directional preference beyond wind.
- **Noise / preferential-runway program:** Not published in reachable sources. 🟧
- **Interaction with arrivals:** Circuit coordination required with neighbouring **Khamis Mushait (OEKM)** military field (~9 NM) — right-hand circuits for RWY 13 (left-hand only if coordinated with Abha Approach), left-hand for RWY 31 (right-hand only if coordinated with Abha Approach **and** Khamis Tower).

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed by name this pass — the AIP publishes explicit runway-heading climb procedures rather than named RNAV SIDs in the extract reviewed 🟧 | 13 / 31 | 🟥 **Mandatory minimum climb gradient 5.5% (334 ft/NM) — "if unable to comply, procedure not authorized"** | See §5 |

---

## 5. Initial climb, speed & noise-abatement departure

- 🟥 **RWY 13:** climb runway heading to **9,000 ft**, then proceed via flight-planned route. **Minimum climb gradient 5.5% (334 ft/NM) up to 9,000 ft — "if unable to comply, procedure not authorized."**
- 🟥 **RWY 31:** climb runway heading to **10,500 ft**, then proceed via flight-planned route. **Minimum climb gradient 5.5% (334 ft/NM) up to 10,500 ft — same "not authorized if unable" clause.**
- **Noise-abatement departure procedure (NADP):** Not published in reachable sources. 🟧
- **Early turn / altitude constraints:** As stated above — climb runway heading to the specified altitude before any turn; verify current chart for any refinement.

*Source: GACA/SANS eAIP AD 2.19/2.22.2/2.22.6 (retrieved 2026-07-26). This is a hard performance gate, not an advisory note — confirm current-type climb performance meets or exceeds 334 ft/NM at the planned weight/temperature before dispatch.*

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway, with particular attention to the surrounding Sarawat/Asir terrain. 🟥
- **Close-in / distant obstacles:** The field sits atop a high mountain plateau; the western escarpment drops toward the Tihamah coastal plain. No AIP obstacle table entries were found in the reachable extract (AD 2.10 returned NIL) — this should **not** be read as "no terrain nearby," but rather reflects the AIP's convention of listing only obstacles penetrating specific near-field surfaces. See [Briefing §3.1](index.md).
- **Special DP / obstacle DP:** The mandatory climb-gradient procedures in §5 function as the field's obstacle-departure procedure — verify on current chart for any additional detail.

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Low-vis procedure applies when TWR cannot observe ground movement — one movement at a time; specific LVTO RVR minima not confirmed this pass. 🟧
- **De-icing:** **NIL** — not provided, despite a genuine winter-cold/possible-frost profile at this elevation (nighttime 3–7°C, Dec–Feb, possible frost near Al-Soudah). 🟥 Independently assess icing risk against current METAR/TAF before a winter departure — no on-field mitigation exists.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** No discrete Clearance Delivery frequency was found in the retrieved AIP extract — likely handled on Ground/Tower; confirm locally. 🟧
- **Frequency sequence:** **Ground Control 121.700 → Abha Tower 118.100 → Abha Approach 124.500 (Upper primary)/125.800 (Upper standby)/130.500 (Lower).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** No slot-coordination regime identified in normal circumstances; **conflict-zone NOTAM closure is the dominant flow-control event at this field when active** — verify live status before departure planning. 🟥

---

## 9. Performance watch-items for our types

- 🟥 **Field-length / weight:** 3,350 m is generous in absolute terms, but **hot-and-high density altitude combined with the mandatory 5.5%/334 ft/NM climb gradient is a genuine dual performance constraint** — confirm current-type takeoff-weight performance for the assigned runway direction and current temperature before dispatch. This may force a payload/fuel restriction on hot days even though the runway itself is not length-limiting.
- 🟥 **Density altitude / temperature:** 6,858 ft elevation with a 33°C AIP reference temperature — this is the highest-elevation, most hot-and-high-critical field in the K Global Saudi network. Apply [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) in full.
- **Contamination / wet-runway:** Not a routine seasonal factor; monsoon-influenced rain in season (spring/mid-summer) is a plausible but not independently quantified consideration.
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — run a specific takeoff-performance calculation for the assigned type against this field's elevation/reference-temperature/gradient combination; do not treat this as a generic-airport dispatch.

---

## 10. Gotchas

- 🟥 **Mandatory 5.5% (334 ft/NM) minimum climb gradient on both runway directions** — "procedure not authorized" if unable to comply; verify current-type performance before dispatch.
- 🟥 **Runway is 13/31, not 16/34** — use 13/31 throughout.
- **Hot-and-high performance is the defining planning concern at this field** — the highest elevation in the K Global Saudi network by a wide margin.
- **No de-icing capability** despite a genuine winter-cold/possible-frost profile — assess independently.
- **"City of Fog"** — routine mountain cloud/mist; expect the low-vis one-movement-at-a-time procedure in season.
- Circuit coordination required with neighbouring **Khamis Mushait (OEKM)** military field.
- 🟥 **Conflict-zone NOTAM closure risk supersedes all other planning** — verify live status before departure.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- 🟥 **Current NOTAM/closure status — mandatory live re-check.**
- Named SID designators, if any exist beyond the runway-heading climb procedures documented here.
- Take-off minima exact figures.
- EOSID/engine-out procedure detail.
- Formal density-altitude/type-performance calculation — not run this pass; run before any scheduled dispatch.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, **aerodrome-closure status — mandatory**), current Middle East conflict-zone/overflight bulletins. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **GACA/SANS eAIP, AD 2 OEAB**, AIRAC AMDT 09/26 — https://aimss.sans.com.sa/assets/FileManagerFiles/AIP%20AMDT%2009_26_2026_01_23/eAIP/AD%202%20OEAB%20ABHA-en-GB.html (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Saudi Arabia (GACA); K Global fields from live VAMSYS; 4-page pack. |
