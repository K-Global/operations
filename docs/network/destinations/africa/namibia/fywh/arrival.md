# FYWH — Hosea Kutako International · Arrival Page

**FYWH / WDH** · Windhoek, Namibia · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — public-source/VAMSYS build, primary AIP not independently reachable this pass

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [FYWH Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name/type only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **08/26** — primary runway, wind-dependent; a secondary 16/34 exists but is not relevant to our fleet (Briefing §7) |
| Usual approach | ILS / RNAV(GNSS) / VOR (types only, per AC-U-KWIK) — exact procedure/runway assignment not confirmed |
| Config logic | Wind-dependent; preferential-runway rule not published — verify current chart |
| Transition level | By QNH; transition altitude not published — verify chart 🟧 |
| LVP trigger | Not confirmed this pass 🟧 |
| Missed-approach driver | Degraded climb gradient under **high density altitude** is the dominant factor; terrain (Khomas Hochland, undulating) is a secondary, unquantified consideration — verify chart |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable sources — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Windhoek Approach (120.5 MHz, Briefing §8) assigns the STAR-to-runway transition for the active end (08 or 26) per wind — radar vs procedural handling not confirmed.
- **Transition to approach:** Not confirmed — expect a standard STAR-to-ILS/RNAV transition; verify the charted transition.
- **Speed / flow constraints on the STAR:** 250 KIAS below FL100 assumed (ICAO norm); charted STAR/IAF speed caps are pointers only — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning to meet the first STAR altitude gate; plan the descent to account for the field elevation of **5,640 ft** — a materially shorter vertical descent window than a sea-level field, similar in kind to (and slightly more compressed than) HKJK's 5,330 ft picture.
- **Speed control:** 250 KIAS below FL100 assumed; charted STAR speed gates are pointers — verify chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes; area MSA/MORA not independently quantified for FYWH this pass (Briefing §3.1).
- **Energy traps:** Late runway-end change (08↔26) ahead of a wind shift; the reduced margin between cruise/STAR altitudes and the 5,640 ft field elevation compresses the normal descent profile — brief an early-descent contingency, especially into a hot afternoon where the aircraft's true descent-path energy is higher for a given IAS.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 08 | ILS / RNAV(GNSS) / VOR (types only) 🟧 | Not confirmed | verify current chart |
| 26 | ILS / RNAV(GNSS) / VOR (types only) 🟧; a single 2009 crowd-sourced comment suggests an ILS at 110.30/258° — **unverified, do not rely on it** (Briefing §9) | Not confirmed | verify current chart |

- **LVP triggers:** Not confirmed this pass — verify current chart. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟧 Windhoek sits on the **Khomas Hochland** plateau with undulating hill terrain around the field; no close-in obstacle bearing/distance table was found in reachable sources for FYWH specifically — see [Briefing §3.1](index.md). Honour MSA and verify the current-AIRAC terrain/obstacle data before treating this as a low-terrain field.
- **Specific threats:** 🟥 The field's **high density altitude (5,640 ft)** is the more material approach threat: higher true groundspeed on a given IAS raises rate-of-descent for a stabilised approach and lengthens the effective landing roll — see [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) §5. Crews should expect a higher ROD/power setting on final than the same IAS would produce at a sea-level field.
- **Airspace / traffic:** 🟧 Windhoek FIR (FYWF); Windhoek Approach published (120.5 MHz); radar vs procedural control not confirmed. Traffic density is modest relative to major African hubs — no published sequencing constraint found.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not independently confirmed for FYWH — fly the published MAP exactly and verify against the current chart and MSA sectors; the Khomas Hochland's undulating terrain (Briefing §3.1) argues for a standard conservative brief pending primary-source terrain data.
- **Re-sequencing environment:** Not confirmed — traffic volumes are modest; no published holding/vectoring pattern found for a go-around.
- **Go-around traps:** 🟥 **High density altitude degrades go-around/missed-approach climb performance** exactly as it degrades take-off climb gradient — factor the actual OAT/density altitude into the missed-approach climb-gradient assessment before every approach, not just the charted gradient. See [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) §5.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** Not published in reachable sources — declared distances remain unconfirmed (Briefing §7); the 4,575 m physical runway (08/26) is not obviously length-limiting for our fleet at sea-level-equivalent conditions, but this has not been verified against a performance calculation for the day's density altitude.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed — confirm with Ground/Tower on the day. 🟧
- **Runway-excursion watch:** 🟧 High density altitude raises true groundspeed on touchdown, lengthening the effective landing roll and raising brake/tyre energy for a given IAS — plan braking accordingly. Austral-summer rains (≈Nov–Apr) may bring wet-runway braking-action considerations in season (Briefing §14); no published contamination data.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on the active end of 08/26, taxi in to the international terminal apron per Tower/Ground assignment; VAMSYS mirror gives a planning taxi-in time of **6 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** Not captured in reachable sources — confirm with Ground/Tower on the day. 🟧
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — international terminal stand assignment not independently confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Windhoek Approach 120.5 → Windhoek Tower 118.1 → Windhoek Apron/Ground 121.9.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Windhoek Approach** is the facility for Windhoek's terminal approach; radar vs procedural control and the Windhoek FIR (FYWF) centre frequency are not confirmed. 🟧

---

## 10. Gotchas

- **Hot-and-high field (5,640 ft) — higher than HKJK's 5,330 ft** — compresses the descent profile versus a sea-level field, raises approach ROD for a given IAS, and degrades go-around climb performance; brief accordingly.
- **Two runways on the field** — 08/26 (primary, 4,575 × 45 m) is what we use; 16/34 (1,524 × 30 m) is general-aviation scale — do not confuse charts/hot spots between the two.
- **ILS/navaid detail is thin in reachable sources** — the only RWY 26 ILS lead is a single 2009 crowd-sourced comment; do not brief it as confirmed.
- **Company preferred alternates are all cross-country** (FAOR/FBSK/FDSK) — a go-around/diversion decision here has no short-hop option; factor this into the missed-approach/diversion brief.
- **Terrain picture is a verification gap, not a known hazard** — the Khomas Hochland's undulating terrain is not independently quantified for FYWH; treat the MSA as the safety net pending chart confirmation.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- ILS ident/frequency confirmation for RWY 26 (only a single, aged crowd-sourced lead found).
- LVP trigger conditions and transition altitude/level.
- Rapid-exit taxiway/vacate detail and LDA figures (currently unpublished).
- Windhoek FIR (FYWF) centre frequency and radar-vs-procedural control confirmation.
- Field-specific terrain/obstacle/MSA data (current description is general regional geography only).

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **Namibia Civil Aviation Authority (NCAA)** — AIM Publications index (redirects to home) and Internet Briefing System (login-gated) — https://www.ncaa.com.na/index.php/document-downloads/industrial-documents/aim-publications/aeronautical-information-publication and https://ibs.ncaa.com.na/fwf-ncaa/public/static/home.faces (retrieved 2026-07-26). Primary AD 2 FYWH page NOT reached this pass.
- AC-U-KWIK — https://acukwik.com/Airport-Info/FYWH (retrieved 2026-07-26). *Approach types, RFF Cat 9.*
- OurAirports — https://ourairports.com/airports/FYWH/ , /closest-navaids.html (retrieved 2026-07-26). *ILS-lead comment (2009, unverified), navaid cross-check.*
- SKYbrary — https://skybrary.aero/airports/fywh (retrieved 2026-07-26). *Runway table, climate classification.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
