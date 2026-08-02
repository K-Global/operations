# EGLL — Heathrow · Departure Page

**EGLL / LHR** · Hillingdon, Greater London, United Kingdom · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [EGLL Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Whichever runway holds the **departing role** under the active segregated-mode configuration — 09R or 27L in easterly/westerly config respectively (or the reciprocal per the daily 15:00 westerly-only alternation) |
| Config logic | Segregated mode: one runway landing, the other departing; westerly-preferred; daily role-swap at 15:00 local **only in westerly ops** — easterly ops keep 09R permanently as the departure runway |
| Transition altitude | 🟧 Not independently confirmed for EGLL this pass (see Briefing §10) |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | Slot-coordinated Level 3 (ACL); EUROCONTROL ATFM/CTOT expected in peak/adverse conditions 🟧 |
| De-icing on departure | Available — "by arrangement with handling agent"; no dedicated pad locations confirmed |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From the assigned terminal, Ground/Director routes toward whichever runway holds the departing role under the active segregated-mode configuration; confirm the exact taxi with Ground on the day. Ground taxiway widths of 23 m / 30 m / 37 m (concrete and asphalt) are published `[UK AIP AD 2.8]`.
- **Hot spots / tight taxiways:** 🟧 No named ICAO hot-spot designators were confirmed in the AIP extract reached this pass. Heathrow's general reputation for a tight, complex ground layout (partly a legacy of the original six-runway "hexagram" configuration) is well documented generically — treat with elevated ground-taxi vigilance pending a confirmed hot-spot list.
- **Runway crossings / read-back-required points:** Expect explicit crossing/hold-short instructions when routing between the two runway/taxiway systems, particularly given the segregated-mode role split.
- **Low-vis taxi caveats:** SMGCS/low-vis taxi routing applies in autumn/winter fog conditions consistent with the field's CAT III environment; follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Prevailing south-westerly wind drives the **westerly-preferred** configuration (departures to the west); the easterly reciprocal is used when wind dictates.
- **By departure direction:** Under the active segregated-mode configuration, only one runway carries all departures at a given time — confirm which runway (09R/27L or 09L/27R reciprocal) holds the departing role from ATIS/clearance delivery.
- **Noise / preferential-runway program:** Noise Preferential Routes apply generically to departures; specific routing/name detail not confirmed this pass. 🟧
- **Interaction with arrivals:** The **segregated-mode** structure means departures never share the active departure runway with landing traffic; however, during **easterly ops**, departures off **09R** interact with **OCK (Ockham)**-stack arrival traffic and historically require a **non-standard departure procedure** to deconflict — confirm current procedure on the chart.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 09L / 27R / 09R / 27L | Verify RNP/gradient requirement on current chart | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (UK/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed this pass — Heathrow applies Noise Preferential Routes to all departures as standard practice; specific NADP1/2 preference not itemised in sources reached. 🟧
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart, particularly the non-standard 09R easterly-ops departure interaction with OCK-stack arrivals noted above.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat London Basin — no significant terrain. **Numerous cranes and buildings are charted as obstacles near the field** (AIP AD 2.10 lists dozens of entries; several cranes are lit red, one at 571 ft AMSL / ~469 ft AGL) reflecting ongoing London-area construction — treat as a live NOTAM-watch item every cycle, not a fixed hazard picture.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** LVP applies consistent with the field's autumn/winter fog risk and CAT III stop-bar infrastructure; specific LVTO RVR minima not confirmed this pass. 🟧
- **De-icing:** "By arrangement with handling agent" per AIP AD 2.4 — no dedicated remote pad locations confirmed. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Heathrow Delivery — frequency not independently confirmed this pass (Briefing §8). 🟧
- **Frequency sequence:** **Delivery → Ground → Tower → Director** — take the assigned frequency and confirm current chart (frequencies from Briefing §8, flagged tier-4/unconfirmed pending AIP AD 2.18 cross-check).
- **CTOT / slot handling:** **IATA Level 3 slot-coordinated** (ACL); EUROCONTROL ATFM/CTOT regulation expected in peak/adverse conditions. Comply with any assigned CTOT/EDCT-equivalent. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Both runway pairs (3,901 m / 3,658 m) are non-limiting for any K Global type. Reduced LDAs (§7 of Briefing) apply to landing only, not departure.
- **Density altitude / temperature:** Non-issue at 83 ft, temperate climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Winter fog/inversion and occasional snow are the relevant seasonal considerations; no specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty for any K Global type at EGLL.

---

## 10. Gotchas

- **Segregated-mode operation** — only one runway is ever departing at a time; confirm the active configuration and role assignment before taxi.
- **Easterly ops keep 09R permanently as the departure runway** (no daily role-swap, unlike westerly ops' 15:00 alternation) — do not assume the runway-role pattern default to westerly logic.
- **09R departures in easterly ops interact with OCK-stack arrivals** — a historically non-standard departure procedure applies; confirm on the current chart.
- **Numerous lit/unlit cranes and buildings near the field** — treat as a live NOTAM item, not a static hazard picture, given ongoing London-area construction.
- **Ground layout has a reputation for complexity** (legacy six-runway "hexagram" origins) — no confirmed named hot spots this pass, but taxi with elevated vigilance.
- **Night restricted period ≈2300–0400 is a hard constraint** — a late-day departure delay risks the movement being barred outright; build buffer into the last rotation.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima / exact figures.
- Clearance delivery and full ATC frequency set (AIP AD 2.18 not reached this pass).
- NADP preference and noise-routing detail.
- LVTO RVR minima.
- EOSID/engine-out procedure detail per runway.
- Named ground-movement hot spots.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. crane/obstacle status), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **UK AIP (NATS AIS), AD 2‑EGLL**, AIRAC cycle effective 2022‑06‑16 — https://www.aurora.nats.co.uk/htmlAIP/Publications/2022-06-16-AIRAC/html/eAIP/EG-AD-2.EGLL-en-GB.html (retrieved 2026-07-26). *Runway/taxiway data, obstacles.*
- Wikipedia — "Heathrow arrival stacks" — https://en.wikipedia.org/wiki/Heathrow_holding_stack (retrieved 2026-07-26). *OCK-stack/09R departure interaction.*
- Wikipedia — "Cranford Agreement" — https://en.wikipedia.org/wiki/Cranford_Agreement (retrieved 2026-07-26). *Easterly-ops runway-role logic.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from UK AIP (NATS AIS); K Global fields from live VAMSYS; 4-page pack. |
