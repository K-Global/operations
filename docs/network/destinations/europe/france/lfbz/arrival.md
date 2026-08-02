# LFBZ — Biarritz Pays Basque · Arrival Page

**LFBZ / BIQ** · Biarritz-Bayonne-Anglet, Pyrénées-Atlantiques, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LFBZ Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **27** preferential (field's only ILS/CAT I direction) |
| Usual approach | **ILS RWY 27** (BZ, 111.35); RWY 09 by RNAV(GNSS) or VOR only |
| Config logic | RWY 27 preferential for arrivals; RWY 09 used when wind dictates |
| Transition level | By QNH; **transition altitude 5,000 ft** |
| LVP trigger | **RVR < 800 m or ceiling < 200 ft** (current operational reference) 🟧 |
| Missed-approach driver | **Terrain to the south** — not traffic density |

---

## 2. STAR / transition selection

- **STARs (names only — current per IVAO France operational reference, AIRAC 2607):** RWY 09 — **DONOS 3R, MAGEC 3R, SOVOS 3R, SSN 3R** (RNAV); **MAGEC 3M, SOVOS 3M** (conventional). RWY 27 — **DONOS 3S, MAGEC 3S, SOVOS 3S** (RNAV); **DONOS 3V, MAGEC 3V, SOVOS 3V** (conventional). 🟧 Cross-checked against a 2011 primary-AIP STAR chart set using related fix names; not independently re-verified against the very latest AIRAC — pull the live procedure list at planning.
- **Selection by arrival direction / runway:** **RWY 27 is preferential** because it is the field's only ILS/precision direction; RWY 09 is used when wind dictates, with RNAV(GNSS) or VOR guidance only.
- **Transition to approach:** BTZ VOR-DME serves as the primary IAF/holding reference for both directions; expect radar-assisted transition from Biarritz Approche.
- **Speed / flow constraints on the STAR:** IAS caps in the 200–220 kt range apply on several IAF holding/racetrack patterns per the primary-AIP chart set — pointer only, verify current chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR/IAF altitude gate.
- **Speed control:** 250 KIAS below FL100 (EU/ICAO norm); IAS caps of 200–220 kt apply on some holding patterns — verify current chart.
- **Altitude constraints:** Key STAR/IAF crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** A wind shift forcing a late change from RWY 27 (ILS) to RWY 09 (RNAV/VOR only) removes precision guidance late in the arrival — brief this contingency explicitly given the field has only one precision-approach direction.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 09 | RNAV (GNSS) RWY 09; VOR RWY 09 (BTZ) | No ILS/NDB; non-precision only 🟧 | verify current chart |
| 27 | ILS RWY 27 (BZ, 111.35); RNAV (GNSS) RWY 27; NDB RWY 27 (BZ); VOR RWY 27 (BTZ) | **CAT I only** 🟩 — no CAT II/III infrastructure | verify current chart |

- **LVP triggers:** **RVR < 800 m or ceiling < 200 ft** per current operational reference — a materially higher (less restrictive) threshold than the CAT III fields elsewhere in the network, consistent with RWY 27 being CAT I only. 🟧 Not independently confirmed from a primary table this pass.

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟥 **Significant relief immediately south of the aerodrome** (Pyrenean foothills) — the field's defining approach hazard. The AIP's own procedural guidance (omnidirectional-departure sector restriction) is a direct acknowledgement of this terrain; treat any approach or missed-approach contingency toward the south with explicit terrain awareness. Cross-ref [Briefing §3.1](index.md).
- **Specific threats:** 🟥 **Coastal sea-fog can develop within minutes** — brief a realistic go-around/diversion contingency rather than assuming a marginal-visibility approach will remain flyable. Visual approaches must join the runway final track early (3 NM from BTZ on RWY 09, 2 NM from BTZ on RWY 27) as a noise-mitigation requirement, not a discretionary choice.
- **Airspace / traffic:** 🟧 Biarritz Approche has **no dedicated Départ position** (combined arrival/departure control below FL145); occasional San Sebastian (LESO, Spain)-bound traffic transits the Biarritz TMA/CTR under a Bordeaux(LFBB)/Madrid(LECM) letter of agreement — maintain traffic awareness even without guaranteed radio contact with that traffic.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** 🟥 **This is the primary missed-approach concern at LFBZ.** Fly the published MAP track and climb gradient precisely — do not improvise a turn toward the high ground south of the field. Verify the current chart's climb-gradient/turn constraints before every arrival.
- **Re-sequencing environment:** Biarritz Approche manages both arrivals and departures on the same position below FL145 — expect integrated re-sequencing rather than a dedicated arrival stream.
- **Go-around traps:** A go-around off RWY 09 (no ILS) is flown without precision guidance; a go-around off RWY 27 retains ILS reference. In either case, the terrain constraint (§5) is the dominant consideration, not traffic density.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** RWY 09 **2,045 m** (205 m displaced threshold); RWY 27 **2,230 m** — cross-ref [Briefing §7](index.md). Adequate for K Global Category S operations on either direction.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground on the day. 🟧
- **Runway-excursion watch:** 🟧 No specific contamination/braking-action data confirmed this pass; the RWY 09 displaced threshold is the one declared-distance nuance to apply correctly (do not use the full 2,250 m physical length as the landing distance available).

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing, taxi in via **TWY N** (parallel to the runway, connecting terminal areas); VAMSYS mirror gives a planning taxi-in time of **6 min** `[VAMSYS mirror 2026-07-26]` — the shortest in this regional cluster.
- **Hot spots / tight taxiways:** 🟥 **TWY N1 and S1 are prohibited at night** and prohibited by day below **RVR 800 m**; **TWY N1 is usable only by aircraft with wingspan < 18.5 m and main-gear track < 6 m** — confirm an alternate routing if fog conditions or the hour would otherwise route via these taxiways.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — Aire Charlie (commercial aviation) is the expected area for K Global Category S arrivals; not individually confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Biarritz Approche 125.600 → Biarritz Tour (Tower) 118.700 → Biarritz Sol (Ground) 121.950.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8 — consistent between primary and current-reference sources.)
- **Approach/Departure control:** **Biarritz Approche** (DSNA) provides the combined arrival/departure service below FL145; **Bordeaux ACC (LFBB)** hands off en route inbound — no dedicated OM C FIR brief exists yet, see [Europe Airspace Briefing](../../../../airspace/europe.md). 🟧

---

## 10. Gotchas

- **Terrain south of the field is the defining arrival hazard** — never improvise a southerly go-around/hold; fly the published MAP precisely.
- **RWY 09 has no precision approach** — a late wind-driven config change away from RWY 27 removes ILS guidance; brief this contingency before every arrival.
- **Coastal fog can arrive within minutes** — carry a realistic diversion posture rather than committing early to a marginal-visibility approach.
- **RWY 09's 205 m displaced threshold** reduces LDA to 2,045 m — do not apply the full physical runway length.
- **Visual-approach join points are noise-driven and mandatory** (3 NM BTZ on 09, 2 NM BTZ on 27) — plan the visual pattern to meet these, not a later join.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- LVP RVR/ceiling trigger confirmed from a primary table.
- Rapid-exit taxiway/vacate detail.
- Stand/gate assignment for K Global arrivals (Aire Charlie).
- Magnetic-variation discrepancy noted in the Briefing (§18) relevant to any manually-flown heading reference.

> **Live data — pull at planning:** wx/METAR/TAF/TREND (esp. fog trend), NOTAM (runway/approach/navaid/lighting), ATIS config/wind trend. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **SIA France eAIP-derived AD 2 LFBZ chart extract** (IAC 01–08, STAR charts), cycle 2011–2013 — http://www.jpair.fr/ateliers_pratiques/initiation_aeroclub/bastia_biarritz/1303_AD-2.LFBZ_2.pdf and _3.pdf (retrieved 2026-07-26).
- **IVAO France Division — Airport Operations Manual, LFBZ**, updated 2026-07-09 (AIRAC 2607) — https://wiki.ivao.fr/books/manex-aeroports-civils/page/lfbz-biarritz-pays-basque (retrieved 2026-07-26). *Network-simulation document, not regulatory — used for current cross-check only.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
