# EDDN — Nuremberg · Departure Page

**EDDN / NUE** · Nuremberg, Bavaria, Germany · Europe
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [EDDN Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **10 or 28** — single runway, direction of use is wind-driven |
| Config logic | Wind-driven only — no multi-runway configuration choice exists |
| Transition altitude | 🟧 Not confirmed — confirm on current AIP |
| Take-off minima | 🟧 Not confirmed |
| CTOT / flow regime | 🟧 Not confirmed — smaller regional field, less likely to be tightly slot-constrained than EDDS, but not verified |
| De-icing on departure | 🟧 Not confirmed — expect a winter requirement given the region's climate |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** 🟧 Not confirmed from reachable sources — confirm with Ground on the day.
- **Hot spots / tight taxiways:** 🟧 None identified from reachable sources.
- **Runway crossings / read-back-required points:** 🟧 Not confirmed — single runway is unlikely to require a runway crossing for standard stand-to-runway taxi.
- **Low-vis taxi caveats:** 🟧 Not confirmed.

---

## 3. Runway / SID selection logic

- **By wind / config:** Single runway 10/28 — direction of use is purely wind-driven; no preferential-runway *choice* exists as at a multi-runway field.
- **By departure direction:** 🟧 Not confirmed from reachable sources — pull from current AIRAC.
- **Noise / preferential-runway program:** 🟧 Procedural detail not confirmed, but the underlying noise-abatement sensitivity is well documented (Briefing §3.5/§12 — Erlangen Lord Mayor complaint over night flights).
- **Interaction with arrivals:** Single-runway field — departures and arrivals share the one runway, worked by **München Radar** for the approach/departure phase (Briefing §3.2/§18 — not Langen FIR).

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 10 / 28 | No unusual gradient expected at this modest elevation — confirm standard RNAV SID equipage on current chart | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** 🟧 Not confirmed in procedural detail; the field's active noise-abatement controversy over scheduled night passenger flights (Briefing §3.5) makes a published NAP likely.
- **Early turn / altitude constraints:** 🟧 Not confirmed.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** 🟧 Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway.
- **Close-in / distant obstacles:** 🟩 No close-in high terrain identified (Briefing §3.1) — modest elevation (1,046 ft), not a CFIT-significant field.
- **Special DP / obstacle DP:** 🟧 Not confirmed — verify on current chart.

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** 🟧 Not confirmed — ILS presence/category itself is not independently confirmed for EDDN (Briefing §9).
- **De-icing:** 🟧 Not confirmed — expect a winter requirement given the region's climate. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** 🟧 Not separately listed in reachable sources — confirm on current chart; likely combined with Ground/Tower at this field size.
- **Frequency sequence:** **Ground 121.76 → Tower 118.305 → Nürnberg Director 119.475 → München Radar 129.525.** Take the assigned frequency and confirm current chart. (Frequencies from [Briefing §8](index.md).) Note the hand-off is to **München Radar**, not Langen — see Briefing §3.2/§18. 🟧
- **CTOT / slot handling:** 🟧 Slot-coordination status not confirmed for EDDN.

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 2,700 m (8,858 ft) accommodates current widebody/cargo real-world traffic (incl. Boeing 747, Antonov An-124) and is non-limiting for our narrowbody/regional-jet fleet; **the A388 (A380) is explicitly excluded regardless of length** (Briefing §5/§17) — this is a licensing restriction, not a runway-length one.
- **Density altitude / temperature:** 1,046 ft elevation is **not** hot-and-high — no density-altitude performance driver.
- **Contamination / wet-runway:** Winter fog/icing is the relevant seasonal consideration; no specific contamination/braking-action data confirmed. 🟧
- **Link to OM B:** See [`OM B — A388 Dispatch`](../../../../../fleet/a388/dispatch.md) for the hard A380 exclusion at this field; no other type-specific performance penalty identified.

---

## 10. Gotchas

- **A388 (A380) is explicitly not licensed at EDDN** — a hard exclusion, not a performance limitation; never plan an A388 movement here without independent AIP re-confirmation.
- **Single runway, no crosswind alternative** — the January 2010 737-800 take-off-roll excursion is a real, if dated, precedent for the excursion risk on this runway.
- **Approach/departure worked by München Radar, not Langen** — brief the correct FIR context; no dedicated München FIR brief exists yet in this network.
- **No hard curfew, but genuinely noise-sensitive at night** — do not assume a quiet overnight ramp, and be aware of the Erlangen noise-abatement controversy around scheduled night passenger flights.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics.
- Take-off minima / transition altitude exact figures.
- Clearance-delivery frequency (not separately confirmed).
- CTOT/slot-coordination status.
- NADP preference and noise-abatement departure procedure detail.
- De-icing availability/provisioning detail.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM (if applicable), de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — Nuremberg Airport (NUE, EDDN) — https://ourairports.com/airports/EDDN/ , /runways.html , /frequencies.html (retrieved 2026-07-25).
- Wikipedia — Nuremberg Airport — https://en.wikipedia.org/wiki/Nuremberg_Airport (retrieved 2026-07-25). *2010 runway-excursion incident; A380 non-licensing.*
- See [EDDN Briefing](index.md) Sources & References for the full source list.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Built from DFS eAIP + Briefing; folded to 4-page pack. |
