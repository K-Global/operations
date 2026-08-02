# LFPG — Paris Charles de Gaulle · Departure Page

**LFPG / CDG** · Roissy-en-France, Île-de-France, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LFPG Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **Inner doublet only — 08R/26L and 09L/27R** (whichever pair matches the active east/west orientation) — **never** the outer/landing doublet |
| Config logic | ATC/DSNA flow sets the active compass orientation (east "08/09" vs west "26/27"); within either orientation the inner doublet is always the departure pair |
| Transition altitude | Reported as 4,000 ft by an independent public reference — not confirmed against a primary AIP table 🟧 |
| Take-off minima | Published per AIP — exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | IATA Level 3 slot-coordinated (COHOR); EUROCONTROL ATFM/CTOT expected in peak/adverse conditions 🟧 |
| De-icing on departure | Availability/season/provisioning not confirmed this pass 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From the assigned terminal, Ground/Apron routes toward the inner/departure doublet (08R/26L or 09L/27R per the active configuration); confirm the exact taxi with Apron/Ground on the day. Aircraft vacating an inner-doublet runway have taxi priority over aircraft taxiing on the first taxiway parallel to that runway, unless instructed otherwise (e.g. **Tango taxiway** on the southern/08-26 runway pair) — expect to hold if a landing aircraft is vacating ahead of your taxi-out.
- **Hot spots / tight taxiways:** 🟥 Intermediate takeoff points **Q6, D1, D2, R1, T1, T2** carry a **wake-turbulence delay risk** from inbound traffic on the adjacent parallel runway — notify Delivery if planning to depart from one of these. **TJ1/TJ2/TJ3** (Terminal 2G / "Juliett" stand area) are a named taxiway-excursion caution zone for smaller-gauge types — use the oversteering technique through these points if operating a type on the affected list.
- **Runway crossings / read-back-required points:** Terminal 2's apron/manoeuvring-area boundary is marked by intermediate holding points (e.g. **Stop TE1**, **Middle 1–4**, the **FedEx apron** point) — crews must stop at these points without a clearance to continue; this is where anti-collision responsibility transfers from ATC to the flight crew.
- **Low-vis taxi caveats:** SMGCS/low-vis taxi routing applies in winter fog conditions consistent with the field's CAT III environment on the landing doublet; follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** DSNA sets the active east ("08/09") or west ("26/27") compass orientation based on wind/traffic flow; the **inner doublet (08R/26L, 09L/27R) is always the departure pair** regardless of which orientation is active.
- **By departure direction:** Not independently sourced by specific heading/sector this pass; departure procedures are reportedly organised into North/East/South/West sectors. 🟧
- **Noise / preferential-runway program:** Standard noise-abatement departure procedure applies; specific named routing not confirmed this pass. 🟧
- **Interaction with arrivals:** Departures off the inner doublet run continuously alongside the outer/landing doublet's arrival stream under the segregated dependent-parallel configuration; localizer-to-departure-runway spacing is under 3 NM, which is why arrivals require 1,000 ft vertical separation when closing — this proximity is a standing factor in ATC's sequencing of both streams. **Do not request a runway change** — DSNA's departure-manager tooling optimises the global sequence, and a late crew-requested change is explicitly flagged by the ANSP as a threat to both pilot and controller.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Historically referenced: **NURMO, ATREX, OPALE, AGOPA, ERIXU/ERIKU, LATRA, OKASI, PILUL** 🟧 | Inner/departure doublet (08R/26L, 09L/27R) | Not confirmed this pass — verify RNP/gradient on current chart | **Not confirmed against the current AIRAC — pull the live current-AIRAC SID list before use** |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Standard 250 KIAS below FL100 unless ATC requests an increase for spacing; after the noise-abatement departure procedure, accelerate promptly to 250 kt to avoid the following aircraft catching up on the initial departure track — advise ATC immediately if unable.
- **Noise-abatement departure procedure (NADP):** Named procedure/preference not confirmed this pass. 🟧
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart. Be aware that a low climb speed (high gradient) does **not** guarantee a shorter track — ATC optimises each aircraft's trajectory against the global traffic picture, not per-flight track-mileage.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat Île-de-France plateau — no significant close-in terrain/obstacle consideration confirmed this pass.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed this pass — verify on current chart. LVP triggers are winter-fog-driven and primarily affect the landing doublet's CAT III operation (see [Briefing §3.4](index.md)); LVTO minima on the departure doublet not independently sourced. 🟧
- **De-icing:** Availability, pad location(s) and season not confirmed this pass 🟧 — a de-icing-pad entry/exit clearance requirement and a de-icing stop bar are confirmed operational features; collision risk with de-icing trucks is a named local threat item. See <../../../../../OM E Operations/Cold Weather Operations.md>.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Paris CDG Delivery — position-dependent frequency (126.650 / 121.730 / 121.840) — take the assigned frequency (see [Briefing §8](index.md)).
- **Frequency sequence:** **Delivery → Ground → Tower → (post-takeoff) Departure.** 🟥 **After takeoff, Tower does not issue the departure frequency** — crews must pre-select it before line-up and wait for the explicit instruction to change; never change frequency on your own initiative. Confirm exact frequencies against the current chart, since position/sector splits were not fully resolved this pass (see Briefing §8/§18).
- **CTOT / slot handling:** **IATA Level 3 slot-coordinated** (COHOR); EUROCONTROL ATFM/CTOT regulation expected in peak/adverse conditions. Comply with any assigned CTOT/EDCT-equivalent. 🟧 Push-back clearance is valid for **one minute only** — re-confirm if push does not commence promptly.

---

## 9. Performance watch-items for our types

- **Field-length / weight:** The inner/departure doublet (2,700 m) is the shorter of the field's two runway pairs by roughly 1,400–1,500 m against the landing doublet — non-limiting for typical K Global departure weights but the tighter of the four runways; verify max-structural-weight departure performance per type before planning a maximum-payload long-haul departure. **Never plan a departure from the outer/landing doublet (08L/26R, 09R/27L)** — it carries no scheduled departure role.
- **Density altitude / temperature:** Non-issue at 392 ft, temperate climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Winter season is the relevant consideration; no specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See <../../../../../OM B Fleet/Fleet Capability Matrix.md> — the inner/departure doublet's 2,700 m length is the one figure worth checking for a heavy-weight widebody departure; otherwise no field-elevation performance penalty for any K Global type at LFPG.

---

## 10. Gotchas

- **The inner doublet (08R/26L, 09L/27R) is the only departure pair — never expect or plan a departure from the outer/landing doublet (08L/26R, 09R/27L).**
- **Never request a runway change** — flagged by the ANSP itself as a threat to both pilot and controller; DSNA's automated tools are optimising the whole traffic picture, not your flight alone.
- **After takeoff, the departure frequency is not handed off by Tower** — pre-select it and wait for the explicit change instruction.
- **Push-back clearance expires after one minute** — do not assume it remains valid if push is delayed.
- **Taking off from intermediate taxiways Q6, D1, D2, R1, T1 or T2 can incur a wake-turbulence delay** from inbound traffic on the adjacent parallel runway — notify Delivery in advance.
- **TJ1/TJ2/TJ3 (Terminal 2G) require the oversteering technique** for the affected smaller-gauge type list — a taxiway-excursion risk area if not flown correctly.
- **No hard curfew, but a night-quota/slot mechanism applies** — a late-day departure delay risks landing you (at the destination, or here on a return leg) inside a quota-restricted window without an allocated slot; this is a schedule-integrity issue, not merely a fee risk (see Dispatch §4).

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names, transitions and RNP/gradient specifics per runway.
- Take-off minima / DVA exact figures.
- NADP name/preference — not confirmed.
- LVTO minima and follow-me/SMGCS specifics.
- EOSID/engine-out procedure detail per runway.
- De-icing pad location(s), provisioning and season.
- Exact Tower/Ground/Delivery frequency-to-position/sector mapping.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. active runway-doublet assignment), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **SIA France eAIP, AD 2 LFPG** — https://www.sia.aviation-civile.gouv.fr/ (retrieved 2026-07-26). *Not extractable to raw fetch this pass — see Briefing page for access note.*
- French Ministry for Ecology (ecologie.gouv.fr) — "LFPG/Paris-Charles de Gaulle/CDG" local-safety-team threat brief — https://www.ecologie.gouv.fr/sites/default/files/documents/CDG_en.pdf (retrieved 2026-07-26). *Departure/taxi threat items — wake-turbulence intermediate taxiways, push-back validity, "no runway change" guidance, de-icing/stop-bar procedure.*
- DGAC/DSNA — "Runway Incursion Prevention Measures at Paris-Charles de Gaulle Airport," ICAO EUR Runway Safety Seminar, Sep 2005 — mirrored via https://silo.tips/download/runway-incursion-prevention-measures-at-paris-charles-de-gaulle-airport (retrieved 2026-07-26). *Taxi-priority rule ("Tango taxiway"), segregated-doublet geometry/history.*
- Learn ATC — LFPG aerodrome reference — https://www.learn-atc.com/tools/aerodrome/LFPG (retrieved 2026-07-26). *ATC frequency cross-check.*
- ATC Network — "Triple, Parallel, Independent PBN/ILS Approach Procedures Commissioned at Paris-CDG & Le Bourget Airports" — https://www.atc-network.com/atc-news/dsna/triple-parallel-independent-pbnils-approach-procedures-commissionned-at-paris-cdg-le-bourget-airports (retrieved 2026-07-26). *Departure-sector organisation, historically-referenced SID/fix names.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
