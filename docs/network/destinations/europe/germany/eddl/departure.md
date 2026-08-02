# EDDL — Düsseldorf International · Departure Page

**EDDL / DUS** · Lohausen, Düsseldorf, North Rhine-Westphalia, Germany · Europe
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [EDDL Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **05R/23L** (main/southern) — segregated-parallel high-traffic ops always depart south |
| Config logic | Single-runway ops use the main runway for all movements; at high traffic, segregated ops fix departures south (05R/23L) and arrivals north (05L/23R) |
| Transition altitude | **5,000 ft** — verify no local override on current chart 🟧 |
| Take-off minima | Not confirmed in reachable sources — verify current AIRAC 🟧 |
| CTOT / flow regime | Slot-coordinated; start-up-to-clearance runs 10–15 min (05-ops) to 15–20 min (23-ops) per SOP 🟧 |
| De-icing on departure | Available — East (23-ops) / West (05-ops) areas, coordinator freq 135.225 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Taxiway **M** runs toward the active runway's holding point; taxiways **P1–P4** connect the apron to M. Ground is split East/West with checkpoint-based hand-off, coordinated as early as possible to avoid unnecessary stops.
- **Hot spots / tight taxiways:** 🟥 The **apron-to-taxiway-M intersections (P1–P4)** are the most common ground conflict points; the holding point at **L9** is reported as congested during 05-ops. Wingspan-banded mutual restrictions: **Twy P1/L5** (max A330/A343-class when a B744/B777/A350-class aircraft occupies the other); **Twy M and T/T1 between P1–L9** (A310/B757-class max when an A380 occupies the other, parallel taxi ≤65 m wingspan); **Twy M/T at L3** (Code C max); **Twy L1/L2** (Code E max, overtaking limited to A330/A343-class).
- **Runway crossings / read-back-required points:** A documented exception permits early-right-turning SIDs off 23L to depart without waiting for a landing on the parallel runway, under specific sighting/no-wake-turbulence conditions — expect explicit ATC coordination for this.
- **Low-vis taxi caveats:** At RVR < 350 m, taxiway **K and L5** between RWY 05R and taxiway M are closed, and aircraft may not vacate 05R via L8 or 23L via L3 — this affects both arrival vacate and any low-vis departure taxi routing. Follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Single-runway ops use the **main runway (05R/23L)** for all movements regardless of direction; the closely-spaced pair (<760 m apart) cannot support independent parallel departures.
- **By departure direction:** At high traffic, **segregated parallel operation** fixes departures on the main/southern runway (05R/23L) regardless of the arrival-runway assignment.
- **Noise / preferential-runway program:** Standard noise-routing SIDs apply; the **MODRU/NETEX** routing and military-airspace timing constraint (§4) are the notable operational features.
- **Interaction with arrivals:** Departures share the main runway with arrivals under single-runway ops; under segregated ops, departures are isolated to the southern runway while arrivals use the shorter northern runway (except the A380, which always lands south) — wake-turbulence separation between the closely-spaced pair must be maintained at all times.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| COL (Cola), GMH (Germinghausen), KUMIK, LMA, MEVEL, MODRU, NETEX, NVO (Nörvenich), NUDGO, SONEB, DODEN | 05R/23L (designators T and Z primary) | **MODRU #K** requires 9.5% climb gradient and RF-leg capability, prior coordination 🟥 | **NETEX** available only 2200–0600 and weekends/holidays (EBBU FIR military-airspace activation) |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID; 250 KIAS below FL100 (standard) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed in reachable sources beyond the standard noise-routing SIDs. 🟧
- **Early turn / altitude constraints:** The early-right-turn exception off 23L (§2) and the MODRU #K 9.5% gradient/RF-leg requirement (§4) are the notable published constraints — verify on current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat Rhine-valley lowland — no significant close-in high terrain identified.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed in reachable sources this pass. 🟧 At RVR < 350 m, taxiway K and L5 (between RWY 05R and taxiway M) are closed and specific vacate restrictions apply (§2) — treat as a low-vis ground-routing planning factor.
- **De-icing:** Two dedicated areas — **East** (used during 23-ops) and **West** (used during 05-ops), coordinator frequency **135.225**, per-position code-letter limits from Code C to Code F. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Düsseldorf Delivery **121.780** (also 121.775 "CLD" listed by one source; possible DEL/CLD split — verify) — issues a **combined enroute + start-up clearance**.
- **Frequency sequence:** **Delivery 121.780 → Ground/Rollkontrolle 121.905 (East/West split) → Tower/Turm 118.305 → Approach (DLA)/Feeder (DLAT) ~128.650/~128.555.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** Slot-coordinated field; per operational SOP, average time from start-up approval to take-off clearance runs **10–15 min (05-ops)** to **15–20 min (23-ops)** — broadly consistent with the K Global taxi-out planning figure (16 min). 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Main runway (05R/23L, declared LDA/TORA 2,696 m) is non-limiting for narrow-body and most widebody types in the current fleet; the shorter/restricted runway (05L/23R, 2,700 m) is not normally assigned for departure of our types.
- **Density altitude / temperature:** Low elevation (147 ft) — non-issue.
- **Contamination / wet-runway:** Regional NW-European frontal weather (rain, occasional winter fog/low cloud, seasonal snow plausible) — no EDDL-specific braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — A339`](../../../../../fleet/a339/index.md) for the fleet's long-haul type baseline — non-limiting on the main runway; note the Twy P1/L5 mutual wide-body restriction for ground routing.

---

## 10. Gotchas

- **The two runways are less than 760 m apart** — this is NOT an independent-parallel field; expect segregated operation at high traffic, not simultaneous independent departures.
- **MODRU #K SID requires 9.5% climb gradient, RF-leg capability, and prior coordination** — request only when able to comply.
- **NETEX SID is night/weekend-only** (2200–0600, weekends/holidays) due to military airspace activation in the EBBU FIR — do not expect it on a weekday daytime departure.
- **Heavy aircraft must push onto taxiway T or P4 only** (not into the terminal bays) — confirm push-back direction with Ground.
- **Holding point L9 is reported congested during 05-ops** — anticipate a queue.
- **At RVR < 350 m, taxiway K/L5 are closed** and vacate routing changes — factor into low-vis ground planning even for a departure taxi.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID designators/runway pairing beyond the T/Z primary note.
- Take-off minima exact figures.
- NADP preference/specifics.
- LVTO RVR minima and follow-me/SMGCS specifics.
- EOSID/engine-out procedure detail per runway.
- Exact CTOT/ATFM practice for EDDL.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. active configuration and MODRU #K/NETEX availability), CTOT/ATFM, de-icing status/area assignment. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here. See <../../../_Templates/_Sources.md> for the tier hierarchy.*

- OpenNav — EDDL chart index (SID/obstacle chart titles) — https://opennav.com/airport/EDDL (retrieved 2026-07-25).
- VATSIM Germany Knowledgebase — "SOPs FIR Langen — EDDL Düsseldorf Airport" Delivery/Ground/Tower/Approach pages (see Briefing page for full citations). *SID/climb-gradient requirements, start-up-to-clearance timing, taxiway hot-spot/push-back detail, low-vis taxiway closures.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Built from DFS eAIP + Briefing; folded to 4-page pack. |
