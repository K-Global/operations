# YPPH — Perth Intl · Departure Page

**YPPH / PER** · Perth, Western Australia, Australia · Oceania
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Australia-derived, K Global build

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [YPPH Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **03/21** (main pair, ILS-equipped); **06/24** (secondary crosswind pair) |
| Config logic | Wind-driven between the two runway pairs |
| Transition altitude | Not confirmed this pass — verify current chart 🟧 |
| Take-off minima | RVR ≥75 m (RWY 21, localiser-guided); RVR ≥125 m (RWY 03); RVR ≥350 m (RWY 06/24) |
| CTOT / flow regime | IATA slot (COG) + A-CDM/TOBT; GDP-A applies to arrivals, not departures |
| De-icing on departure | Not confirmed — mild climate makes routine provisioning unlikely 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Confirm exact taxi routing with Ground/Delivery on the day; the field is in an active construction period around the third runway (03R/21L) adjacent to Terminal 1 — expect possible taxiway/apron reconfiguration during the build.
- **Hot spots / tight taxiways:** 🟥 **TWY J1 and TWY A** (runway-incursion hot spot — aircraft slow to vacate RWY 24 after misidentifying the exit; intersection complexity; holding points distant from the runway); **TWY C, N and S** (intersection complexity, distant holding points). **RWY 06 line-up from TWY V** is a published misaligned-takeoff hot spot (wider-than-expected runway end, no centreline lights) — verify correct centreline alignment before applying takeoff power.
- **Runway crossings / read-back-required points:** Not individually itemised beyond the hot spots above; confirm with ATC on the day.
- **Low-vis taxi caveats:** During RVR conditions below 350 m, TWY A6, A7, C6, P, N and H3 are **not available**; approved taxi exits are TWY A9, C9, A11, C11 and D. TWY W between TWY C and RWY 06/24 is available only in RV ≥350 m. Instrumented RVR is provided for RWY 03/21; ATC provides manual runway-visibility assessments if RVR instrumentation fails or RWY 03/21 is unavailable.

---

## 3. Runway / SID selection logic

- **By wind / config:** Selection is wind-driven between the RWY 03/21 main pair and the RWY 06/24 secondary pair; RWY 21 is the default low-visibility runway (only one runway nominated during LVP).
- **By departure direction:** Not individually published beyond wind-based selection in reachable sources this pass. 🟧
- **Noise / preferential-runway program:** Noise Abatement Procedures apply per AIP DAP; specific routing not confirmed this pass. 🟧
- **Interaction with arrivals:** By day, ATC may apply a reduced 2,400 m runway-occupancy separation standard on RWY 03/21 for successive arrivals, permitting two aircraft to occupy the runway simultaneously — be aware of tighter-than-expected runway occupancy when departing into an active arrival stream.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 03/06/21/24 | Verify RNP/gradient on current chart, particularly for the easterly terrain noted in Briefing §3.1 | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below 10,000 ft AMSL when not on a SID/STAR/vector (AIP-confirmed).
- **Noise-abatement departure procedure (NADP):** Not confirmed in reachable sources this pass — verify per AIP DAP. 🟧
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart, particularly given the AIP's noted terrain infringement of the Obstacle Limitation Surface east of the field (Briefing §3.1).

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** The AIP notes the Obstacle Limitation Surface is **"extensively infringed by terrain east of the aerodrome"** for both runway pairs — corroborated by the public Darling Scarp/Perth Hills terrain feature ~20–25 km east. This is the field's one genuine departure-obstacle consideration; verify the current terrain/obstacle chart before planning an eastbound departure or engine-out track. 🟧 Additional man-made obstacles are published: an antenna (144 ft AMSL, 0.78 NM from ARP), a crane (639 ft AMSL, infringing the outer horizontal surface by 85 ft), and several lit towers (control tower 328 ft AMSL, power towers to 1,654 ft AMSL) — none close enough to affect a normal departure track.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart, particularly given the easterly terrain note above. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** RVR ≥75 m (RWY 21, localiser-guided); RVR ≥125 m (RWY 03); RVR ≥350 m (RWY 06/24) — CASA-approved operators. No intersection departures permitted during any LVP. Preparations for LVP commence when weather prevents visual monitoring of the manoeuvring area by ATC; full implementation required at cloud ceiling ≤300 ft or takeoff visibility below 550 m RV/RVR.
- **De-icing:** Not confirmed in reachable sources — Perth's mild climate makes routine de-icing provisioning unlikely to be a significant factor; verify locally before ruling out entirely. 🟧

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** **Perth Delivery (ACD) 118.55** for departures from Perth Airport; **Perth Centre 135.25** for departures from HLS/ALA within Perth CTR, RAAF Pearce Aerodrome (when deactivated), or IFR/VFR-by-night departures ex Jandakot direct into Perth CTA/CTR.
- **Frequency sequence:** **Delivery 118.55 → Ground (SMC) 121.7 (W of RWY 03/21) or 122.2 (E of RWY 03/21) → Tower 127.4 → Departures 118.7.** Aircraft with ground power contact Delivery ready for pushback/start and stand by for Ground once ATFM-compliant; aircraft without ground power start at own discretion and advise Delivery when complete. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** Comply with the assigned **IATA slot (COG)** and **A-CDM Target Off-Blocks Time (TOBT)**; GDP-A applies primarily to inbound flow management rather than departures.

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 03/21 (3,444 m) is non-limiting for any K Global type; RWY 06/24 (2,163 m) is non-limiting for typical departure weights but shorter — plan carefully for a heavy long-haul departure if assigned this pair.
- **Density altitude / temperature:** Non-issue at 67 ft, Mediterranean-type climate — no hot-and-high penalty; summer heat is moderate relative to true hot-and-high fields.
- **Contamination / wet-runway:** No specific contamination/braking-action data confirmed this pass; mild, drier climate makes this a lower-probability consideration than at temperate/high-latitude fields. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty at YPPH for any K Global type; the operative planning consideration is the field's isolation (long-range fuel/alternate planning) rather than local aircraft performance.

---

## 10. Gotchas

- **RWY 06 has no centreline lights and a wider-than-expected runway end** — a published misaligned-takeoff hot spot when lining up from TWY V; verify correct centreline alignment before applying takeoff power.
- **No intersection departures permitted at any time.**
- **TWY A6, A7, C6, P, N and H3 are unavailable in RVR/RV below 350 m** — confirm the correct low-vis taxi exit (A9/C9/A11/C11/D) before a low-vis departure.
- **The Obstacle Limitation Surface is AIP-flagged as "extensively infringed by terrain east of the aerodrome"** — brief the eastern departure/climb profile with this in mind, even though the terrain is not extreme.
- **A380 taxi routing via TWY A/A9/A11/D is contingent on TWY C serviceability** — confirm current status before planning an A380 departure.
- **Third-runway (03R/21L) construction is active near Terminal 1** — expect possible taxiway/apron NOTAM activity during the build period.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names, RNP/gradient specifics per runway (particularly given the easterly terrain note).
- Transition altitude confirmation.
- Noise-abatement departure procedure (NADP) detail.
- De-icing availability/procedure (likely not applicable; not independently confirmed).
- EOSID/engine-out procedure detail per runway.
- Departure-direction runway-selection logic beyond wind-based pairing.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, third-runway construction status), CTOT/ATFM, LVP/RVR status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP Australia (Airservices Australia) — AD 2 YPPH, Aerodrome Facilities (FAC) chart**, effective 09 Jul 2026 — https://www.crc.id.au/xplane/charts/ERSA-2026-JUL-09/Perth%20(YPPH)%20FAC.pdf (retrieved 2026-07-26). *Departure minima, taxiway hot spots, LVP procedures, frequency sequence, obstacle/terrain notes.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Australia (Airservices); K Global fields from live VAMSYS; 4-page pack. |
