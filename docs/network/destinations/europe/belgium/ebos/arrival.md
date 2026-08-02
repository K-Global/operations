# EBOS — Ostend-Bruges · Arrival Page

**EBOS / OST** · Ostend (Middelkerke), West Flanders, Belgium · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP-verified (skeyes eAIP, AD 2 EBOS, direct retrieval successful this session)

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [EBOS Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. **EBOS is not a field in the K Global VAMSYS network.** Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Night window (21:00–07:00/20:00–06:00): **RWY 08** (crosswind ≤15 kt, tailwind ≤5 kt, traffic permitting); otherwise wind-dependent between 08/26 |
| Usual approach | ILS CAT I both ends (08/26); RNP APCH also published both ends |
| Config logic | AIP-published night runway-swap rule; daytime selection wind/traffic-dependent |
| Transition level | By QNH; transition altitude **4,500 ft AMSL** `[AIP Belgium AD 2 EBOS]` |
| LVP trigger | **Preparation phase** <1,200 m visibility; **operations phase** <600 m RVR; **termination phase** >800 m visibility and improving `[AIP Belgium AD 2 EBOS]` |
| Missed-approach driver | Traffic/procedural, not terrain — see §6 for the field's distinctive 30-minute fallback rule |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** **COA5A** via COA DVOR/ONO NDB, with RNAV1 overlay transitions via **DENUT–OS902–OS901**, **FERDI–OS901**, and **KOK** feeding ONO NDB `[AIP Belgium AD 2 EBOS]`.
- **Selection by arrival direction / runway:** Night window: RWY 08 favoured for landing under the AIP's crosswind/tailwind-triggered swap rule (§1); daytime selection is wind/traffic-dependent, confirmed by ATIS/Tower.
- **Transition to approach:** RNAV transitions to RWY 08 via **AUZON → OS08F → RW08**; to RWY 26 via **NOYON → OS26F → RW26** — both RNP APCH with VPA 3.00° (TCH 52 ft RWY 08 / 51 ft RWY 26) `[AIP Belgium AD 2 EBOS]`.
- **Speed / flow constraints on the STAR:** ONO NDB holding pattern: right turns, inbound track 076°, minimum level 3,000 ft AMSL, **entry speed max 185 KIAS** `[AIP Belgium AD 2 EBOS]`.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning to meet the STAR/transition altitude gates above.
- **Speed control:** 250 KIAS below FL100 (EU/ICAO norm); holding entry capped at 185 KIAS (§2).
- **Altitude constraints:** RNP APCH FAF altitude **2,000 ft** both runway ends (OS08F/OS26F) — verify on current chart.
- **Energy traps:** A late runway-configuration change ahead of the AIP's crosswind/tailwind night-swap trigger (§1) is the main energy trap at this single-runway field.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 08 | ILS or LOC (CAT I); RNP APCH | **Min RVR 550 m** for CAT I ops 🟩 | verify current chart |
| 26 | ILS or LOC (CAT I); NDB; RNP APCH | **Min RVR 550 m** for CAT I ops 🟩 | verify current chart |

- **LVP triggers:** **Preparation phase** below 1,200 m visibility; **operations phase** when RVR falls below 600 m; **termination phase** when visibility exceeds 800 m and improving `[AIP Belgium AD 2 EBOS]`. During LVO with RWY 08 in use, **vacate via Exit A** (Aprons 2/3) or **Exit M** (Apron 1); with RWY 26 in use, **vacate via Exit F** (Aprons 2/3) or **Exit M** (Apron 1).
- **ILS approach constraint:** Aircraft performing an ILS approach **shall not intercept the glide path below 2,000 ft QNH**, and shall not descend below the GP after interception `[AIP Belgium AD 2 EBOS]`.
- **Visual approach constraint:** An aircraft performing a visual approach without ILS/radar assistance shall not descend below **1,500 ft QNH** before intercepting the PAPI slope, nor below it thereafter `[AIP Belgium AD 2 EBOS]`.

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Sea-level coastal field (7 ft); published close-in obstacles at both thresholds are low vegetation/small objects only.
- **Specific threats:** 🟧 **UAS (drone) geographical zones VLL0/1/2 exist within Oostende CTR, and ATC cannot ensure systematic UAS tracking** `[AIP Belgium AD 2 EBOS]` — maintain a heightened visual scan at low level.
- **Airspace / traffic:** 🟩 Class D CTR, single-runway field — comparatively low-complexity terminal environment relative to the Brussels core.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not terrain-driven — this field has a distinctive **published fallback rule**: unless instructed otherwise, follow the missed-approach procedure charted on AD 2.EBOS-IAC. If an aircraft does not succeed in landing within the **30 minutes normally allowed** for approach and landing, it shall **leave Oostende CTR/TMA on track 045° MAG below 1,650 ft QNH** and land at the first suitable aerodrome where weather permits a visual approach and landing `[AIP Belgium AD 2 EBOS]`. 🟥
- **Re-sequencing environment:** Single-runway, Class D field — comparatively low re-sequencing complexity.
- **Go-around traps:** IFR flights flying a visual approach shall use the missed-approach segment of the IAP as communicated via ATIS.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** RWY 08 **2,900 m**; RWY 26 **2,785 m** (Briefing §7) — both ample for any K Global type at normal arrival weights.
- **Braking / vacate:** During LVO: RWY 08 in use → vacate via **Exit A** (Aprons 2/3) or **Exit M** (Apron 1); RWY 26 in use → vacate via **Exit F** (Aprons 2/3) or **Exit M** (Apron 1) `[AIP Belgium AD 2 EBOS]`.
- **Runway-excursion watch:** 🟧 Explicit AIP caution: **"RWY strip soft after heavy rain"** — brief for reduced-braking-action/excursion risk in wet conditions.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** **B777-300-class aircraft taxiing to/from Apron 2 via TWY K shall always route via TWY C2** `[AIP Belgium AD 2 EBOS]`. Aircraft taxi to stand on engine power on Aprons 1 and 2.
- **Hot spots / tight taxiways:** A dedicated Hot Spots appendix is published on the AD 2.EBOS-ADC charts — consult the current chart; not transcribed here per governance. 🟧
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — Apron 2 stands 230–233 have no push-back (self-manoeuvring only, max span 43 m). Follow-me available (no follow-me on Apron 1 unless requested).

---

## 9. Arrival frequency sequence

- **Sequence:** **Oostende Approach 120.600 (primary) / 266.075 → Oostende Tower 118.180 (primary, 8.33 kHz) → Oostende Ground 121.980 (8.33 kHz).** Emergency 121.500/243.000; supplementary 127.330 (8.33 kHz) available throughout. Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8, AIP-sourced.)
- **Approach/Departure control:** **skeyes** provides Oostende Approach; the field sits in **Brussels FIR (EBBU)**, which has no dedicated OM C FIR brief — see [Europe (Continental) Airspace briefing](../../../../airspace/europe.md). 🟧

---

## 10. Gotchas

- **Distinctive 30-minute holding/fallback rule** — if not landed within 30 minutes of the normal allowance, leave Oostende CTR/TMA on track 045° MAG below 1,650 ft QNH and divert to the first suitable field with visual conditions. Brief this specific procedure — it is unusual relative to a standard missed-approach/diversion decision tree.
- **Night runway-swap logic** — RWY 08 favoured for landing 21:00–07:00 (20:00–06:00) under specific crosswind/tailwind conditions; do not assume a fixed landing runway.
- **UAS (drone) zones exist within the CTR and are not systematically tracked** — maintain a heightened visual scan at low level.
- **"RWY strip soft after heavy rain"** — an explicit AIP caution; factor into braking-action expectations after wet weather.
- **Reverse thrust is idle-power only except for safety**, with excessive reverse-thrust use specifically discouraged 22:00–05:00 (21:00–04:00) — consider a long landing instead if conditions permit.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Named taxiway hot spots (AD 2.EBOS-ADC Hot Spots appendix) — consult current chart.
- Seasonal fog/wind climatology specific to this coastal field — not detailed in the reachable AIP extract.
- QC formula/table full detail (Briefing §18).

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. post-heavy-rain runway condition), ATIS config/wind trend, current EBR17/UAS-zone status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP Belgium (skeyes eAIP), AD 2 EBOS** — https://ops.skeyes.be/html/belgocontrol_static/eaip/eAIP_Main/html/eAIP/EB-AD-2.EBOS-en-GB.html (retrieved 2026-07-26). *Primary source for all data in this page.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Belgium (skeyes); K Global fields from live VAMSYS (EBOS not in network — flagged); 4-page pack. |
