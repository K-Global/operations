# LEAL — Alicante-Elche Miguel Hernández · Arrival Page

**LEAL / ALC** · Alicante, Valencian Community, Spain · Europe
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — AIP España (ENAIRE)-derived

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LEAL Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **RWY10** (onshore/easterly wind) or **RWY28** (offshore/westerly wind) |
| Usual approach | **ILS CAT I on RWY10**; **VOR only (via POLOP) on RWY28** — no ILS on this end |
| Config logic | Wind-driven; single runway used bidirectionally |
| Transition level | Not confirmed this pass 🟧 |
| LVP trigger | 🟥 **No CAT II/III capability** — RWY10 CAT I only, RWY28 no ILS at all |
| Missed-approach driver | Low-to-moderate terrain inland/west; RWY28 missed approach tracks toward the sea |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** **RWY10** (onshore/easterly wind, ILS CAT I) is the preferred/precision runway; **RWY28** (offshore/westerly wind) is VOR-approach only via the offshore **POLOP** fix.
- **Transition to approach:** Radar vectors from **Valencia Control** onto the appropriate approach for the active runway; verify the charted transition.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate.
- **Speed control:** 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** Late runway/config changes driven by a shifting Levante (easterly) wind are the main energy trap here — a change from RWY10 to RWY28 late in the approach means dropping from an ILS to a VOR-only approach with materially different minima and profile.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 10 | ILS (IAT) | **CAT I only** — the field's sole precision approach 🟩 | verify current chart |
| 28 | VOR (via POLOP) | **No ILS/LOC on this end** — VOR approach only, offshore fix 🟥 | verify current chart |

- **LVP triggers:** No CAT II/III infrastructure exists at LEAL — a wind favouring RWY28 combined with low visibility is the field's principal low-vis risk scenario; plan alternates accordingly. 🟥

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 Low-to-moderate terrain inland/west of the field; not a significant threat to normal arrival paths. Verify the current MSA ring as routine practice.
- **Specific threats:** 🟧 The **RWY10/RWY28 ILS/VOR asymmetry** is the standout specific threat — a westerly-wind, low-visibility arrival has materially less precision-approach margin than an easterly-wind arrival. Gusty Levante-wind crosswind conditions are a secondary consideration.
- **Airspace / traffic:** 🟩 Moderate-to-high seasonal density under **Valencia Control**; expect vectoring/sequencing during summer peak banks.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not a significant driver at this field — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** Single-runway field — a go-around re-enters the sequence behind other traffic on the same runway; expect vectoring during peak-season congestion.
- **Go-around traps:** On the RWY28 VOR approach, the missed approach tracks generally seaward — maintain positive terrain/track awareness per the charted procedure.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** Both RWY10 and RWY28 — **3,000 m**, no displaced thresholds published. Ample for any K Global type.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Tower on the day. 🟧
- **Runway-excursion watch:** 🟧 No displaced thresholds; the standing caution is gusty crosswind exposure during Levante-wind episodes rather than a contamination/braking-action issue.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on the assigned runway, taxi in per Alicante TWR (combined tower/ground) assignment; VAMSYS mirror gives a planning taxi-in time of **10 min** `[VAMSYS mirror 2026-07-25]`.
- **Hot spots / tight taxiways:** 🟧 **A346, A35K and B77W restricted to TWY C8 only.** No formally charted hot-spot list located in reachable sources. Stand nose-orientation convention flips with the active runway.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — Code E routine at PRKG 200/2/4C; Code F (incl. A380) at PRKG 2 by prior coordination.

---

## 9. Arrival frequency sequence

- **Sequence:** **Valencia Control (Approach) 118.800 / 119.075 → Alicante TWR 118.155 (H24) → (Ground — combined with TWR, no separate frequency published).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Valencia Control** provides approach for LEAL; en-route is presumed **Barcelona ACC (LECB)** — see [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) 🟧, no dedicated Spanish FIR brief exists in-library yet.

---

## 10. Gotchas

- **RWY28 has no ILS/LOC** — a shift to a westerly wind late in the arrival means a VOR-only approach with higher minima than RWY10's ILS; do not assume ILS guidance is available on both ends.
- **Levante (easterly) wind episodes** can bring gusty crosswind conditions with limited notice — watch the ATIS wind trend closely.
- **Summer peak-season congestion** — expect extended vectoring/sequencing during the Costa Blanca high season.
- **A346, A35K and B77W taxi restriction (TWY C8 only)** remains relevant on arrival taxi-in for these types.
- **No CAT II/III infrastructure** — a marginal-visibility arrival with an unfavourable wind for RWY10 is a real diversion-risk trigger, not a routine event.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- Transition level.
- Rapid-exit taxiway/vacate detail.
- Formally charted taxiway hot spots (existence not confirmed either way).

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. the single ILS on RWY10), ATIS config/wind trend. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP España (ENAIRE), AD 2-LEAL**, current AIRAC — https://aip.enaire.es/AIP/contenido_AIP/AD/AD2/LEAL/LE_AD_2_LEAL_en.html (retrieved 2026-07-26). *STAR/IAP index, runway/declared-distance data, communications.*
- PPRuNe forum thread on LEAL RWY10/28 approach selection — https://www.pprune.org/archive/index.php/t-339152.html (retrieved 2026-07-26). *Tier-4 operational corroboration only.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Built from AIP España (ENAIRE); K Global fields from live VAMSYS; 4-page pack. |
