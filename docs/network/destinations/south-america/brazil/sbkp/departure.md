# SBKP — Viracopos International · Departure Page

**SBKP / VCP** · Campinas, São Paulo, Brazil · South America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Brasil (DECEA)-derived

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [SBKP Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Single runway 15/33 — direction selected by wind 🟧 |
| Config logic | Wind-driven; N/A parallel-runway logic (single runway) |
| Transition altitude | Not confirmed 🟧 |
| Take-off minima | Not confirmed 🟧 |
| CTOT / flow regime | No slot regime confirmed 🟩 |
| De-icing on departure | **NIL expected** — subtropical highland climate |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not confirmed — confirm exact taxi routing with Ground/Apron on the day, from the passenger terminal to the active runway direction (15 or 33). 🟧
- **Hot spots / tight taxiways:** Not confirmed in reachable sources; expect mixed pax/cargo/freighter ground traffic given the field's cargo-hub role. 🟧
- **Runway crossings / read-back-required points:** Not confirmed. 🟧
- **Low-vis taxi caveats:** Winter (Jun–Aug) plateau fog/stratus risk mirrors SBGR; SMGCS/follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Single runway (15/33) — direction selected purely by wind; no parallel-runway config logic applies.
- **By departure direction:** Not confirmed. 🟧
- **Noise / preferential-runway program:** Not confirmed in reachable sources. 🟧
- **Interaction with arrivals:** As a single-runway field, departures and arrivals share the same runway sequentially — no simultaneous-parallel-ops consideration, but sequencing/spacing on the one runway is the operative traffic factor. Broader São Paulo TMA traffic (GRU/CGH) may also be a factor — see [Briefing §3.2](index.md).

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 15 / 33 | Brazil operates a national RNAV/PBN SID network `[South America Airspace briefing]` — exact gradient/equipage not confirmed for SBKP | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed in reachable sources. 🟧
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** No specific close-in terrain identified for SBKP in reachable research (Briefing §3.1) — the field sits on the same broad Paulista plateau as SBGR without a specifically flagged obstacle in this pass.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed in reachable sources; winter (Jun–Aug) plateau fog/stratus is the plausible trigger, mirroring SBGR. 🟧
- **De-icing:** **NIL expected** — subtropical highland climate, no de-icing infrastructure or season established.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not confirmed in reachable sources — no clearance-delivery frequency was found in the public register. 🟧
- **Frequency sequence:** **Ground 121.900 → Tower 118.250 → Campinas Approach 121.400.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8; ATIS/Delivery frequencies not confirmed — a genuine gap, flagged.)
- **CTOT / slot handling:** No slot regime confirmed for SBKP. 🟩

---

## 9. Performance watch-items for our types

- **Field-length / weight:** The single 3,240 m runway is non-limiting for any K Global type — the field has hosted intercontinental widebody jets since 1960.
- **Density altitude / temperature:** Same moderate-elevation consideration as SBGR (2,170 ft) — not classic hot-and-high, but worth a performance check on the hottest summer afternoons for the heaviest departures.
- **Contamination / wet-runway:** Wet-season (Nov–Mar) heavy rain is the relevant seasonal consideration; no specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty for any K Global type at SBKP.

---

## 10. Gotchas

- **Single runway, no parallel** — any disabled aircraft or runway obstruction closes the entire field for departures as well as arrivals; there is no redundancy to shift to.
- **RWY 33 threshold displaced 91 m** — relevant primarily to landing LDA (Arrival page), but confirm which distances apply in a rejected-takeoff scenario.
- **Mixed pax/cargo/freighter traffic** shares the single runway — expect sequencing with a different traffic mix than a pure-passenger hub.
- **ATIS/clearance-delivery frequency not confirmed** — a genuine information gap; confirm locally before relying on a specific frequency.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names, take-off minima, and ATIS/clearance-delivery frequency.
- Standard taxi routings and any named hot spots.
- NADP preference; EOSID/engine-out procedure detail.
- Second-runway project status (would materially change this page's single-runway assumptions if built).

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting — critical on this single-runway field), CTOT/flow status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **DECEA / AISWEB — AIP Brasil, aerodrome page AD 2 SBKP** — https://aisweb.decea.mil.br/?i=aerodromos&codigo=SBKP (JS-rendered frameset; not readable to a direct fetch this pass) (attempted 2026-07-26).
- OurAirports — https://ourairports.com/airports/SBKP/frequencies.html (retrieved 2026-07-26).
- Wikipedia — "Viracopos–Campinas International Airport" — https://en.wikipedia.org/wiki/Viracopos-Campinas_International_Airport (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Brasil (DECEA); K Global fields from live VAMSYS; 4-page pack. |
