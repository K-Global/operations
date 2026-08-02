# LEMI — Región de Murcia International (Corvera) · Arrival Page

**LEMI / RMU** · Corvera, Murcia, Spain · Europe
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — AIP España (ENAIRE)-derived

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LEMI Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **RWY23 strongly preferred** whenever a precision approach is needed (only ILS-equipped end); RWY05 used with a favourable wind and VOR/RNP approach |
| Usual approach | **ILS CAT I on RWY23** (ident IRM); VOR/RNP on RWY05 |
| Config logic | Wind-dependent, but constrained by the RWY05/RWY23 ILS asymmetry |
| Transition level | Not confirmed this pass 🟧 |
| LVP trigger | 🟥 **No LVP capability exists at this field** — a hard limitation, not merely unconfirmed |
| Missed-approach driver | Genuinely higher/more inland terrain (644 ft, hilly semi-arid surroundings) — more terrain-relevant than the network's coastal fields |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** **RWY23** is strongly preferred whenever a precision approach is needed, since it is the field's only ILS-equipped end; RWY05 arrivals rely on VOR/RNP approaches only.
- **Transition to approach:** Radar vectors from **San Javier APP** onto the assigned approach; verify the charted transition.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate — allow for the field's higher elevation (644 ft) relative to the network's coastal fields when planning the final descent segment.
- **Speed control:** 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes; verify against LEMI's hillier local terrain.
- **Energy traps:** A late wind shift favouring RWY05 (VOR/RNP only) over RWY23 (ILS) is the field's principal energy/approach-type trap, materially more significant here than at LEVC given LEMI's confirmed no-LVP status.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 05 | VOR (IAC1 — per AIP, noted as withdrawn/not-applicable per a VSS note 🟧) | No ILS on this end | verify current chart |
| 23 | ILS (IAC2, direct); LOC (IAC3, direct); VOR (IAC4, direct) | **CAT I** 🟩 — the field's sole precision approach | verify current chart |

- **LVP triggers:** 🟥 **No LVP capability exists at LEMI at all** — this is the field's standout, AIP-confirmed limitation. A low-visibility arrival with an unfavourable wind for RWY23 is a serious diversion-risk scenario, not a routine planning nuance.

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟧 Genuinely higher/more inland terrain than the network's coastal fields — 644 ft field elevation amid hilly, semi-arid surroundings, corroborated by the AIP's raptor-heavy bird-hazard profile (golden eagle, Bonelli's eagle, short-toed snake eagle). Verify the current MSA ring; exact terrain-clearance figures were not obtained this pass.
- **Specific threats:** 🟥 The **no-LVP status combined with the RWY05/RWY23 ILS asymmetry** is the field's standout specific threat — more restrictive than any other field in this pack. Regional Saharan dust ("calima") intrusions are a secondary visibility consideration.
- **Airspace / traffic:** 🟧 Low traffic volume under **San Javier APP** (a distinct legacy-named unit, not to be confused with "Valencia APP"); en-route FIR placement presumed Barcelona ACC, not independently confirmed against an authoritative chart.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** More relevant here than at the network's coastal fields, given LEMI's genuinely higher/hillier surroundings — fly the published MAP and verify climb-gradient/turn on the current chart; exact figures not obtained this pass.
- **Re-sequencing environment:** Low traffic volume reduces re-sequencing congestion risk relative to busier fields in this network.
- **Go-around traps:** A go-around from the RWY05 VOR/RNP approach in marginal visibility is a genuinely higher-risk scenario given the field's no-LVP status — treat this combination as a serious operational caution, not a routine event.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** Both RWY05 and RWY23 — **3,000 m**, no displaced thresholds published. Ample for any K Global permitted type (Code E; Code F is barred entirely).
- **Braking / vacate:** One rapid-exit taxiway (RET) is part of the airport's design; exact vacate-point detail not confirmed. 🟧
- **Runway-excursion watch:** 🟧 No displaced thresholds; no specific contamination/braking-action data confirmed this pass.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing, taxi in per Murcia GMC (121.755) assignment; K Global taxi-in timing is 🟧 **not set in VAMSYS** — no planning-time reference exists yet.
- **Hot spots / tight taxiways:** 🟧 **Code E aircraft access the apron solely via TWY F**, with oversteering/entry-exit via A1/C2. **PAPI on RWY23 is explicitly not usable for Code letter E aircraft** — a real visual-reference caution on final approach/landing for that type on that runway.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — Code E provided for; Code F explicitly not permitted.

---

## 9. Arrival frequency sequence

- **Sequence:** **San Javier APP 130.300 (backup 125.025) → Murcia TWR 121.330 → Murcia GMC (Ground) 121.755.** Take the assigned frequency and confirm current chart. Note the historic "San Javier" naming legacy — distinct from any Valencia-area facility. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **San Javier APP** is the dedicated local unit (retaining the identity/frequency of the airport LEMI replaced); en-route FIR placement is presumed **Barcelona ACC (LECB)** per regional documentation listing the former Murcia–San Javier field (LELC) in that jurisdiction — sourced to network-simulation material, not an authoritative ENR chart 🟧. See [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) for regional context only, no dedicated Spanish FIR brief exists in-library yet.

---

## 10. Gotchas

- **No LVP capability at this field** — the single most important arrival-planning fact for LEMI; a marginal-visibility arrival with a wind unfavourable for RWY23 is a genuine diversion-risk scenario.
- **RWY05 has no ILS** — VOR/RNP only; a late wind shift to this runway materially changes the approach picture.
- **PAPI on RWY23 not usable for Code letter E aircraft** — Code E crews need an alternate visual-glidepath reference.
- **LEMI is Spain's least-punctual airport per public reporting** (64.5% on-time departures) — expect and plan for potential schedule slippage.
- **Field is not H24** — a late arrival outside published seasonal hours requires PPR (+1 hr); do not assume routine acceptance outside the operating-hours window.
- **Customs/immigration is PPR-based** — a diversion or unplanned international arrival here carries real PoE-staffing risk.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- Transition level.
- Exact MSA/terrain-clearance values (would require the actual IAC approach charts).
- Rapid-exit taxiway/vacate detail beyond the confirmed single RET.
- IAC1 VOR RWY05 "withdrawn/not applicable" note — sourced to a VSS note in the AD2 text, not independently cross-checked against the chart itself.

> **Live data — pull at planning:** wx/METAR/TAF/TREND (including any calima/dust advisory), NOTAM (runway/approach/navaid/lighting, esp. the single ILS on RWY23), ATIS-equivalent config/wind trend, current PPR/operating-hours status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP España (ENAIRE), AD 2-LEMI**, current AIRAC amendment — https://aip.enaire.es/aip/contenido_AMDT/LE_Amdt_A_2026_05_AD_2_LEMI_en.html (retrieved 2026-07-26). *IAP index, runway/declared-distance data, communications, bird-hazard profile.*
- Wikipedia — "Región de Murcia International Airport" — https://en.wikipedia.org/wiki/Regi%C3%B3n_de_Murcia_International_Airport (retrieved 2026-07-26). *On-time-performance reputation.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Built from AIP España (ENAIRE); K Global fields from live VAMSYS; 4-page pack. |
