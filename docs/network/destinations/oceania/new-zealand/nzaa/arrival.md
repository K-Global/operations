# NZAA — Auckland Intl · Arrival Page

**NZAA / AKL** · Māngere, Auckland, New Zealand · Oceania
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [NZAA Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **05R or 23L** — the only runway pair; wind/traffic-driven selection |
| Usual approach | ILS CAT I (05R) or ILS CAT II/III (23L) |
| Config logic | No fixed preferential direction; ATC selects per wind and single-runway traffic flow |
| Transition level | By QNH; transition altitude 13,000 ft — verify current chart 🟧 |
| LVP trigger | CAT II/III capability on 23L is the standing mitigation; exact RVR trigger not confirmed this pass 🟧 |
| Missed-approach driver | Single-runway traffic re-sequencing, not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Domestic STARs are not restricted for assignment. International **night noise-abatement STARs** include **ARADI, BASIV, TAZEY, LUNBI** (feeding RWY 23L, transitions via ELNOS/SALAG/UPLAR/PEBLU/VELMO) and **RIKDI** (feeding RWY 05R, with numerous named transitions including KALAG, AGREX, TARIB, ELPAK, AGEDU, IDSEM, DABAS, AKLOM, OLBEX). These are not mandatory during high traffic volumes. 🟧
- **Selection by arrival direction / runway:** Auckland Approach (Auckland TMA) assigns the STAR/config for the active runway; no fixed preferential direction is published — see [Briefing §10](index.md).
- **Transition to approach:** RNP/RNAV-to-ILS transition with radar vectors onto final expected; verify the charted transition.
- **Speed / flow constraints on the STAR:** Minimum 150 kt IAS to 5 NM on final unless otherwise assigned; advise ATC if unable.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate.
- **Speed control:** 150 kt IAS minimum to 5 NM final unless otherwise approved/assigned.
- **Altitude constraints:** Key STAR crossing constraints are pointers only — fly the charted altitudes.
- **Energy traps:** Late runway/config changes (05R↔23L ahead of a wind shift) on the single runway pair are the main energy trap; single-runway sequencing can also compress the descent during a busy bank.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 05R | ILS (IAA) | **CAT I** 🟩 | verify current chart |
| 23L | ILS (IMG) | **CAT II/III** — the field's low-visibility runway 🟩 | verify current chart |

- **LVP triggers:** CAT II/III on 23L is the standing low-visibility mitigation for this field; exact RVR/trigger figures not confirmed this pass. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat Māngere isthmus at 23 ft AMSL — no close-in high terrain relevant to any arrival path.
- **Specific threats:** 🟧 **Single-runway traffic density** is the field's defining operational hazard rather than terrain or weather — expect re-sequencing/vectoring during peak banks. **Wading-bird activity** (Oystercatchers and others) transits the runway near TWY A8/A9 and the RWY 05R threshold, tidal-cycle-linked — check ATIS for peak-activity notification.
- **Airspace / traffic:** 🟧 Auckland Approach (Auckland TMA) sequences all traffic — international, domestic, GA and helicopter — onto the single runway pair; VFR traffic is kept clear of the Instrument Sector during any approach.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not applicable — flat isthmus, no terrain driver.
- **Re-sequencing environment:** A go-around returns you to a single-runway, high-density sequencing environment — **divergent missed-approach design** keeps the miss track clear of departure traffic, but expect vectoring/holding before re-sequencing.
- **Go-around traps:** Traffic-density awareness during the miss; confirm current runway assignment has not changed if re-sequenced after a wind shift.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 05R **3,292 m**; 23L **3,292 m** (exit TWY A10) — ample for any K Global widebody under normal (non-WIP) operations. 🟧 **Verify current "Runway WIP" rehabilitation status by NOTAM** — historic reduced-length figures under displaced-threshold operations are materially more limiting.
- **Braking / vacate:** RWY 23L in use → vacate at A4, A6 or A8; RWY 05R in use → vacate at A7, A5 or A3 (rapid/high-speed exits).
- **Runway-excursion watch:** 🟧 No contamination/braking-action data confirmed this pass; standard wet-runway planning applies in this temperate maritime climate.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing, taxi in via the assigned high-speed exit per Ground/Apron; VAMSYS mirror gives a planning taxi-in time of **13 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟧 Rapid-exit taxiways feed directly onto TWY A — Ground manages conflicting-traffic sequencing here. **Code F (A380/B747-8) aircraft cannot use rapid exits A4–A7** and may not use TWY B between B2–B6 — expect a different vacate/taxi routing if operating a Code F rotation.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — Code F contact stands 10, 15, 16, 17, 18; Code F remote stands 19, 74, 75, 78, 79.

---

## 9. Arrival frequency sequence

- **Sequence:** **Auckland Control (Oceanic Radar 123.9/134.0 or Raglan Sector 126.0/120.5, as applicable) → Auckland Approach (Auckland TMA) 124.3/129.6/129.5 → Auckland Tower 118.7/120.95 → Auckland Ground 121.9 → Auckland Apron 123.0 (HO, international apron).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Auckland Approach (Auckland TMA)** is the facility for Auckland's terminal approach; see the [Oceania — SW Pacific & Tasman airspace brief](../../../../airspace/oceania.md) for the NZZC domestic / Auckland Oceanic (NZZO) structure. 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **Single runway (05R/23L)** — no parallel runway to absorb disruption; brief for extended vectoring/holding if the field is saturated or the runway is temporarily unavailable.
- **Recurring Monday 0130–0430 local maintenance closure** — do not plan an arrival into this window.
- **Wading-bird activity near TWY A8/A9 and the RWY 05R threshold** — most acute around high tide; check the ATIS advisory.
- **"Runway WIP" rehabilitation programme** — verify current status; displaced thresholds materially reduce LDA when active.
- **Config swap (05R↔23L) driven by a wind shift** — watch the ATIS wind trend on the single runway pair.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- Exact LVP/CAT II-III trigger RVR values.
- Rapid-exit taxiway/vacate detail beyond the Code F restrictions noted.
- Current runway-WIP rehabilitation status and its declared-distance impact.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, current WIP status), ATIS config/wind trend and bird-activity advisory. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP New Zealand, AD 2 NZAA 2.12/2.13/2.17/2.22/2.23** (extract carrying effective dates 2016–2018) — runway/declared-distance data, TA, flight procedures, bird-hazard data — mirrored via https://pdf4pro.com/cdn/nzaaad-2-2-aerodrome-geographical-and-administration-55b69d.pdf (retrieved 2026-07-26).
- **AIP New Zealand GEN 3.7-2** — ILS/navaid idents and frequencies — https://fyi.org.nz/request/22244/response/83943/attach/8/GEN%203.7.pdf (retrieved 2026-07-26).
- **VATNZ — NZAA Auckland SOP** — https://sops.vatnz.net/aerodromes/Class-C/nzaa/ (retrieved 2026-07-26). *Network-sim; divergent-missed-approach design, Code F taxi restrictions cross-checked here.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP New Zealand; K Global fields from live VAMSYS; 4-page pack. |
