# LOWW — Wien-Schwechat · Departure Page

**LOWW / VIE** · Schwechat, Lower Austria, Austria · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — tier-4 corroborated, primary AIP not yet integrated

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LOWW Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Not published / verify — active runway/direction assigned by Wien Tower/Radar from the crossing pair (**11/29**, **16/34**) per wind/traffic | 🟧 |
| Config logic | Wind/traffic-flow driven; no primary-source preferential-runway rule found | 🟧 |
| Transition altitude | Not published / verify | 🟧 |
| Take-off minima | Not published / verify | 🟧 |
| CTOT / flow regime | Vienna is understood to be an IATA-coordinated hub; exact regime not confirmed | 🟧 |
| De-icing on departure | Not published / verify — Central European winter season assumed (typ. Oct–Apr) | 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not published / verify — confirm the exact taxi routing with Ground/Apron on the day. 🟧
- **Hot spots / tight taxiways:** No named hot spots or wingspan-limited taxiways confirmed from a primary source for this field. 🟧
- **Runway crossings / read-back-required points:** Not published / verify. Given the **crossing (non-parallel) runway geometry** (11/29 × 16/34), expect the possibility of runway-crossing instructions between the two runway axes depending on the active configuration and stand location — confirm on the day.
- **Low-vis taxi caveats:** SMGCS/low-vis taxi routing and follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Not published / verify — Wien Tower/Radar assigns the active runway/direction from the crossing pair per wind and traffic; confirm current configuration via ATIS. 🟧
- **By departure direction:** Not published / verify. 🟧
- **Noise / preferential-runway program:** Not published / verify. 🟧
- **Interaction with arrivals:** Because the two runways **cross rather than run parallel**, departures and arrivals on the active configuration are inherently sequenced through a single dependent system rather than independent streams — brief accordingly.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not published / verify 🟧 | 11 / 29 / 16 / 34 | Not published / verify | Pull the live current-AIRAC SID list before use — see [OM E — PBN and RNP Operations](../../../../../flight-ops/pbn-and-rnp-operations.md) |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not published / verify. 🟧
- **Early turn / altitude constraints:** Not published / verify — confirm on the current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not published / verify — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat Danube/Vienna basin at 600 ft AMSL — no significant close-in terrain identified; nearest higher ground (Vienna Woods/Alps foothills) is well clear of the field. See [Briefing §3.1](index.md).
- **Special DP / obstacle DP:** Not published / verify. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not published / verify — CAT II/III capability at this field is not confirmed from a primary source (see [Briefing §9](index.md)). 🟧 See also [OM E — Low Visibility Operations](../../../../../flight-ops/low-visibility-operations.md).
- **De-icing:** Availability, pad location and season not published / verify — plan for a Central European winter de-icing season (typ. Oct–Apr) pending confirmation. See [OM E — Cold Weather Operations](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Wien Delivery / Wien Clearance, 122.125 (see [Briefing §8](index.md)).
- **Frequency sequence:** **Wien Delivery 122.125 → Wien Ground 121.600 (additional position 121.770 reported) → Wien Tower 119.400 (additional positions 121.200 / 123.800 / 124.470 reported) → Wien Radar 134.675 (additional sectors 118.770 / 125.170 / 129.050 / 136.250 reported).** Take the assigned frequency and confirm current chart.
- **CTOT / slot handling:** Vienna is understood to be an IATA-coordinated hub; exact CTOT/ATFM handling not confirmed from a primary source. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Both runways (3,500 m and 3,600 m) are non-limiting for any K Global type expected on this route.
- **Density altitude / temperature:** Non-issue at 600 ft, temperate climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Winter snow/icing is the plausible seasonal consideration pending confirmation of braking-action reporting. 🟧
- **Link to OM B:** See [OM B — Fleet Capability Matrix](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty identified for any K Global type at LOWW.

---

## 10. Gotchas

- **Runways 11/29 and 16/34 cross, they do not run parallel** — do not plan on independent simultaneous departure/arrival streams.
- **CAT II/III low-visibility departure capability is not confirmed** — do not assume LVTO minima below standard CAT I without a current-AIRAC chart check.
- **A planned third runway (11R/29L) is not proceeding** as of late 2025 — do not plan around future added capacity at this field.
- **De-icing pad locations, hot spots and taxi routing are all unconfirmed** — confirm with Ground/Apron on the day, especially in winter.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima / transition altitude.
- Start-up/push-back procedure detail.
- NADP/noise-abatement departure procedure.
- LVTO RVR minima and follow-me/SMGCS specifics.
- EOSID/engine-out procedure detail per runway.
- Named hot spots and taxi-routing detail.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here. See Sources for the tier hierarchy.*

- OurAirports — Vienna International Airport — https://ourairports.com/airports/LOWW/ , /frequencies.html (retrieved 2026-07-26). *ATC frequencies.*
- SkyVector — LOWW / Wien Schwechat Airport — https://skyvector.com/airport/LOWW (retrieved 2026-07-26). *Extended ATC frequency list, runway headings.*
- Wikipedia — "Vienna International Airport" — https://en.wikipedia.org/wiki/Vienna_International_Airport (retrieved 2026-07-26). *Third-runway approval and non-proceed decision.*

*Austro Control (Austria's state AIP/eAIP) was not accessible in a usable form for this build — see the LOWW Briefing page for the full primary-source caveat.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
