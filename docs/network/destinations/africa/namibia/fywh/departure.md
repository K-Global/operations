# FYWH — Hosea Kutako International · Departure Page

**FYWH / WDH** · Windhoek, Namibia · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — public-source/VAMSYS build, primary AIP not independently reachable this pass

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [FYWH Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name/type only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **08/26** — primary runway, wind-dependent; a secondary 16/34 exists but is not used for our fleet (Briefing §7) |
| Config logic | Wind-dependent; preferential-runway rule not published — verify current chart |
| Transition altitude | Not published / verify 🟧 |
| Take-off minima | Not published — verify current chart 🟧 |
| CTOT / flow regime | None found — no slot-coordination or ATFM/CTOT programme confirmed 🟧 |
| De-icing on departure | **N/A** — hot, semi-arid station |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From the international terminal apron, Ground/Tower routes to the active end of 08/26 (primary runway) — confirm exact taxi with Tower on the day; frequencies per [Briefing §8](index.md).
- **Hot spots / tight taxiways:** Not captured in reachable sources — verify locally. 🟧
- **Runway crossings / read-back-required points:** Not confirmed — the field's secondary runway (16/34) may cross the main taxi system; verify on the current chart before assuming no crossing exists. 🟧
- **Low-vis taxi caveats:** Not confirmed — verify SMGCS/follow-me availability locally. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Wind-dependent selection between 08 and 26; no preferential-runway rule or ILS-runway preference confirmed in reachable sources — confirm current-AIRAC SID assignment per runway end.
- **By departure direction:** Not confirmed — no directional routing preference found.
- **Noise / preferential-runway program:** Not published / verify. 🟧
- **Interaction with arrivals:** Single primary runway (08/26) — departures and arrivals share the one runway system; no published congestion/sequencing issue given the field's modest traffic volumes (Dispatch §10).

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable sources 🟧 | 08 / 26 | Given the field's **hot-and-high regime (5,640 ft)**, treat SID minimum-climb-gradient compliance as the binding item — verify on the current AIRAC chart and confirm the type meets the published gradient at the planned weight/OAT | Pull the current-AIRAC SID list before use (Briefing §11) |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 assumed as standard — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed in reachable sources — no fleet-wide NADP preference published for this field. 🟧
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart; no terrain-driven early-turn restriction independently confirmed for FYWH (Briefing §3.1), but the Khomas Hochland's undulating terrain warrants a standard MSA-conservative brief pending chart verification.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. Given the field's **hot-and-high performance regime**, confirm the OEI escape routing and driftdown/level-off altitude specifically for the day's weight and OAT — see [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) §4. 🟥
- **Close-in / distant obstacles:** No field-specific obstacle bearing/distance table found in reachable sources — the Khomas Hochland plateau terrain is described only generically (Briefing §3.1); verify MSA and obstacle data on the current chart before relying on this description. 🟧
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart, particularly for an engine-out scenario at this hot-and-high field. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed in reachable sources — verify current chart. 🟧
- **De-icing:** **N/A** — non-issue at this hot, semi-arid station.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** No separate Delivery frequency confirmed — start-up/taxi clearance likely handled via Tower/Ground; verify current-AIRAC frequency assignment (Briefing §8). 🟧
- **Frequency sequence:** **Ground/Apron 121.9 → Tower 118.1 → Approach 120.5** (per Briefing §8) — take the assigned frequency and confirm current chart.
- **CTOT / slot handling:** No slot-coordination or ATFM/CTOT programme confirmed ("Slots Required: No" per AC-U-KWIK) — ground handling remains mandatory.

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 08/26 (4,575 m) is not obviously field-length-limiting for our fleet at sea-level-equivalent conditions, but declared distances remain unpublished/provisional (Briefing §7) — do not treat the long physical runway as a substitute for a verified performance number.
- **Density altitude / temperature:** 🟥 **Hot-and-high field (5,640 ft)** — this is the dominant performance consideration at FYWH, and it sits **higher than HKJK (5,330 ft)**. Check take-off weight, climb-gradient compliance and V-speeds against the actual OAT/density altitude for every departure, especially on a warm afternoon in the hot late-dry-season window (Sep–Oct, Briefing §14).
- **Contamination / wet-runway:** Austral-summer rains (≈Nov–Apr) bring afternoon convective showers — factor wet-runway braking action in season (Briefing §14); no published contamination-specific data for FYWH.
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) (Table D, hot-and-high sensitivity) and [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) for the hot-and-high performance methodology applied at this field.

---

## 10. Gotchas

- **Hot-and-high field (5,640 ft) — higher than HKJK** — density-altitude take-off performance and climb-gradient margins are the standing planning risk here, not runway length.
- **Two runways on the field** — the primary 08/26 (4,575 × 45 m) is what we use; the much shorter/narrower 16/34 (1,524 × 30 m) is general-aviation scale — do not confuse charts/hot spots between the two.
- **Company preferred alternates are all cross-country** (FAOR/FBSK/FDSK) — an OEI/driftdown or fuel-critical scenario off this field has no short-hop diversion option; factor this into the engine-out and fuel-planning brief.
- **Declared distances, PCN, SID names and take-off minima are unpublished in reachable sources this pass** — treat every performance figure as needing dispatch-level confirmation, not a chart lookup.
- **ATIS frequency (114.1 MHz) looks anomalous** for a VHF ATIS — verify before relying on it operationally (Briefing §8).

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names, RNP/gradient specifics and take-off minima.
- Delivery/Ground frequency confirmation and exact frequency sequence.
- EOSID/engine-out procedure detail given the field's hot-and-high regime and the cross-country-only alternate picture.
- LVTO minima and noise-abatement departure procedure detail.
- CTOT/ATFM applicability (none found — confirm absence).

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/navaid/lighting), CTOT/slot status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **Namibia Civil Aviation Authority (NCAA)** — AIM Publications index (redirects to home) and Internet Briefing System (login-gated) — https://www.ncaa.com.na/index.php/document-downloads/industrial-documents/aim-publications/aeronautical-information-publication and https://ibs.ncaa.com.na/fwf-ncaa/public/static/home.faces (retrieved 2026-07-26). Primary AD 2 FYWH page NOT reached this pass.
- AC-U-KWIK — https://acukwik.com/Airport-Info/FYWH (retrieved 2026-07-26). *Slots-not-required, RFF Cat 9, runway/PCN data.*
- OurAirports — https://ourairports.com/airports/FYWH/ , /frequencies.html (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
