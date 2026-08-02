# EDDS — Stuttgart · Departure Page

**EDDS / STR** · Stuttgart, Baden-Württemberg, Germany · Europe
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [EDDS Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **07 or 25** — single runway, direction of use is wind-driven |
| Config logic | Wind-driven only — no multi-runway configuration choice exists |
| Transition altitude | 🟧 Not confirmed for EDDS specifically — confirm on current AIP |
| Take-off minima | 🟧 Not confirmed |
| CTOT / flow regime | **Level 3 fully slot-coordinated** — confirm slot allocation with the airport coordinator before planning any movement outside a pre-agreed schedule 🟥 |
| De-icing on departure | **Available** — dedicated MISC/de-icing frequency 121.63 published (OpenAIP) |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** 🟧 Not confirmed from reachable sources — confirm with Ground on the day. Single-runway layout simplifies routing relative to multi-runway fields.
- **Hot spots / tight taxiways:** 🟧 None identified from reachable sources — verify current AIP/NOTAM hot-spot chart.
- **Runway crossings / read-back-required points:** 🟧 Not confirmed — single runway is unlikely to require a runway crossing for standard stand-to-runway taxi.
- **Low-vis taxi caveats:** 🟧 SMGCS/follow-me availability not confirmed; if the reported CAT III ILS capability is confirmed on the current AIRAC, expect a corresponding low-vis taxi procedure.

---

## 3. Runway / SID selection logic

- **By wind / config:** Single runway 07/25 — direction of use is purely wind-driven; no preferential-runway *choice* exists as at a multi-runway field.
- **By departure direction:** 🟧 Not confirmed from reachable sources — pull from current AIRAC.
- **Noise / preferential-runway program:** 🟧 Not confirmed in procedural detail; expect a published NAP given the field's long-running local noise-abatement/political profile (Briefing §12).
- **Interaction with arrivals:** Single-runway field — departures and arrivals share the one runway under the **Stuttgart Director** sequencing function; expect tighter sequencing discipline than at a multi-runway field.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 07 / 25 | No unusual gradient expected — not a hot-and-high field; confirm standard RNAV SID equipage on current chart | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** 🟧 Not confirmed in procedural detail from reachable sources.
- **Early turn / altitude constraints:** 🟧 Not confirmed — the plateau-edge terrain drop-off (Briefing §3.1) is **not** a climb-gradient driver since terrain falls away from the field rather than rising toward it.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** 🟧 Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway.
- **Close-in / distant obstacles:** No close-in rising obstacle identified — the **Filder-plateau** terrain drops away from the field toward the Neckar valley/Stuttgart basin and the Swabian Jura lies further south (cross-ref [Briefing §3.1](index.md)); this is a missed-approach/visual-segment awareness item rather than a departure climb-gradient constraint.
- **Special DP / obstacle DP:** 🟧 Not confirmed — verify on current chart.

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** 🟧 If the reported CAT III capability is confirmed, standard LVP trigger conditions would apply — not independently confirmed this build.
- **De-icing:** **Confirmed available** — dedicated MISC/de-icing frequency 121.63 (OpenAIP); expect routine use in Central European winter conditions given the plateau's wind/weather exposure. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Stuttgart Delivery **121.915** (🟧 H24 assumed).
- **Frequency sequence:** **Delivery 121.915 → Ground 118.605 → Tower 118.805/119.065 → Director 119.85 / Langen Radar Approach 119.2.** Take the assigned frequency and confirm current chart. (Frequencies from [Briefing §8](index.md).)
- **CTOT / slot handling:** **IATA Level 3 slot-coordinated** — confirm slot allocation with the airport coordinator before planning any movement outside a pre-agreed schedule; this is a harder constraint than at a non-coordinated field. 🟥

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 3,345 m (10,974 ft) is ample for our narrowbody types (currently A319 on the EDDF–EDDS spoke) — non-limiting.
- **Density altitude / temperature:** 1,276 ft elevation is **not** hot-and-high — no density-altitude performance driver.
- **Contamination / wet-runway:** Winter fog/icing on the wind-exposed plateau is the relevant seasonal consideration (§7); no specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — A319 Dispatch`](../../../../../fleet/a319/dispatch.md) — no field-length or field-elevation performance penalty for the A319 at EDDS.

---

## 10. Gotchas

- **Single runway, no crosswind alternative** — a runway-surface event or strong crosswind closes the field entirely; there is no on-field backup.
- **RWY 07 threshold displaced 300 m (984 ft)** — not a departure-distance constraint (TORA/TODA are typically measured from the physical threshold for takeoff), but confirm on current AIP before assuming a figure.
- **Level 3 fully coordinated** — a missed slot has real network consequences; confirm allocation before any off-schedule movement.
- **Night-operation restrictions in force** — build buffer into the day's last EDDS rotation so a normal delay does not push a departure into the restricted window.
- **Plateau wind exposure** — the field is more wind-exposed than the sheltered Stuttgart basin below; factor this into crosswind planning on the single runway.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics.
- Take-off minima / transition altitude exact figures.
- Start-up/push-back procedure detail.
- NADP preference and noise-abatement departure procedure detail.
- LVTO RVR minima and follow-me/SMGCS specifics.
- EOSID/engine-out procedure detail.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — Stuttgart Airport (STR, EDDS) — https://ourairports.com/airports/EDDS/ , /runways.html , /frequencies.html (retrieved 2026-07-25).
- OpenAIP — Airport Stuttgart — https://www.openaip.net/data/airports/62614ab25e9ded5710445959 (retrieved 2026-07-25). *De-icing/MISC frequency.*
- See [EDDS Briefing](index.md) Sources & References for the full source list.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Built from DFS eAIP + Briefing; folded to 4-page pack. |
