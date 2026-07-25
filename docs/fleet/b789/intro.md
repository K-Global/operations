<!--
================================================================================
  K Global — AIRFRAME PACK · INTRO  ·  B789 Boeing 787-9 Dreamliner
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# B789 — Boeing 787-9 Dreamliner · Intro

**B789 / 787 family — common type rating 787 (787-8/-9/-10)** · Long-haul widebody twin, EDTO backbone for thin-to-medium intercontinental trunks
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Type reference for X-Plane 11, not a substitute for the aircraft's own documentation. Figures carry provenance tags; verify `[VERIFY]` items before use. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ICAO type designator | **B789** |
| Family / type rating | 787 family — common type rating **787** (787-8/-9/-10); Boeing FMC/CDU flight deck, LNAV/VNAV `[VERIFY]` |
| Variants operated | Boeing 787-9; one designator, single variant |
| Engines (modelled) | **GEnx-1B or Rolls-Royce Trent 1000** — both offered on the type; K Global fit 🟧 `[VERIFY]` (assumed GEnx-1B pending confirmation) |
| ICAO code letter | **E** — wingspan **60.1 m**, Code E stands/gates only 🟧 |
| Config (K Global) | 315 pax + 25,000 kg belly · 19 tails `[VAMSYS mirror 2026-07-25]` |
| MTOW / MLW / MZFW / OEW | ~254,700 / ~192,800 / ~181,000 / ~128,000 🟧 `[VERIFY]` |
| Max fuel | ~101 t (~126,900 L) 🟧 `[VERIFY]` |
| Service ceiling | ~FL430 🟧 `[VERIFY]` |
| Typical cruise | M0.85 🟧 `[VERIFY]` |
| Range (rep. payload) | ~7,565 NM 🟧 `[VERIFY]` |
| ETOPS/EDTO | EDTO-capable, type certified to **330 min**; K Global approved rule time **180 min** — see Dispatch |
| RFF category required | ICAO **CAT 9** (length 62.8 m → 61–<76 m band) 🟩 — see [Fleet Capability Matrix](../capability-matrix.md) (Table D) |

## 2. Modelling & profile mapping 🟥

The three-way mapping — **no external source records this; it is a K Global decision:**

> **Real type:** B789 (Boeing 787-9 Dreamliner, GEnx-1B / Trent 1000) → **SimBrief profile:** Boeing 787-9 (B789) → **Sim model:** X-Plane 11 — **Magknight 787** (or default Laminar 787) 🟧 `[VERIFY]`

The dispatch profile (SimBrief B789) models the 787-9 airframe and drives the OFP burn. The approved X-Plane 11 flight model is **not yet confirmed** — the candidate is the **Magknight 787**, with the default Laminar Research 787 as fallback. If the tested add-on and the SimBrief engine variant do not match the assumed K Global engine fit (GEnx-1B vs Trent 1000), cruise burn and ceiling realism will differ from the OFP and any burn comparison must account for that. Resolve engine fit and approved model in Sim-Model before this pack is Verified. Cross-ref Dispatch §2 (SimBrief setup) and the Sim-Model file (planned).

## 3. Role in the network
Long-haul widebody twin. Primary role is thin-to-medium intercontinental trunks where a 315-seat twin sizes better than the larger 777/747 widebodies but reaches further than the narrowbody fleet, and where EDTO reach opens transoceanic/transpolar routings. The 787-9's composite airframe and high-efficiency high-bypass turbofans give strong range at low trip cost, making it the network's efficiency workhorse on medium-density long-haul pairs. Based out of the Frankfurt (EDDF) superhub and deployable across the widebody hub set; complements the A339 on the same thin-trunk mission and the larger A359/A35K/B77W/B748 frames on higher-density trunks.

## 4. Dimensions & ground footprint
- Length **62.8 m** (206 ft 1 in); wingspan **60.1 m** (197 ft 3 in); height ~**17.0 m** (55 ft 10 in) 🟧 `[VERIFY]`
- **ICAO Code E** — plans and parks only on Code E-capable stands/taxiways; watch wingspan-restricted taxiways and Code E turn/pushback limits at constrained hubs. 🟧
- Raked-wingtip composite wing (no folding/blended winglet — raked tip); twin-aisle, two main-deck passenger doors per side plus overwing exits; forward and aft lower-deck cargo doors (LD3-container-capable belly) plus bulk hold. GPU/air-start and de-ice footprint per widebody-twin standard; note the 787's largely electrical (no-bleed) architecture affects ground-servicing (electric air conditioning / no engine bleed) 🟧.

## 5. Weights
| | kg |
|---|---|
| OEW | ~128,000 🟧 `[VERIFY]` |
| MZFW | ~181,000 🟧 `[VERIFY]` |
| MTOW | ~254,700 🟧 `[VERIFY]` |
| MLW | ~192,800 🟧 `[VERIFY]` |
| Max fuel | ~101,000 (~126,900 L) 🟧 `[VERIFY]` |

No reference OFP has been flown for this type yet — all weights are public Boeing/type-data figures pending an OFP-verified dispatch and VAMSYS override confirmation.

## 6. Performance
- Service ceiling **~FL430**; typical cruise **M0.85** 🟧 `[VERIFY]`.
- Range ~**7,565 NM** at representative payload 🟧 `[VERIFY]` — comfortably covers the network's intercontinental trunk sectors.
- **Cost index:** default CI per OM E / SimBrief profile — set at dispatch (no OFP-derived CI yet for this type) 🟧.
- **Field length:** ~2,800–3,000 m TO at MTOW, sea-level ISA, dry paved 🟧 `[VERIFY]`.
- **Hot-and-high:** strong thrust-to-weight gives good high-elevation/high-temperature field performance for a widebody; at the network's high hubs (FAOR 5,558 ft, HAAB ~7,600 ft, NBO ~5,300 ft) expect some payload/fuel penalty on the longest legs but less severe than the heavier quads. Assess per-field before scheduling. 🟩 (low–moderate sensitivity — see Matrix Table D).

## 7. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Hot-and-high / field performance | 🟩 | Strong thrust-to-weight; low–moderate sensitivity (Matrix Table D) — confirm penalties per high field |
| Range vs network trunk sectors | 🟩 | ~7,565 NM range covers thin-to-medium intercontinental trunks |
| ETOPS/EDTO adequacy | 🟩 | Type certified 330 min; K Global approved 180 min (widebody twin) — see Dispatch |
| Stand / gate compatibility | 🟧 | Code letter E — confirm Code E stands at all scheduled fields |
| Modelling fidelity (sim vs real) | 🟧 | Approved X-Plane 11 model and engine fit unconfirmed — see Sim-Model |

## 8. Related pack files
**Built (all six):** [Dispatch](dispatch.md) · [Sim-Model](sim-model.md) · [Checklist](checklist.md) · [QRH](qrh.md) · [Livery](livery.md) · [Pack index](index.md) · Fleet Index → [overview](../index.md) · [Capability values](../capability-matrix.md)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Boeing — 787 Dreamliner type page — https://www.boeing.com/commercial/787
- Boeing — 787 Airplane Characteristics for Airport Planning — https://www.boeing.com/content/dam/boeing/boeingdotcom/commercial/airports/acaps/787.pdf
- Boeing — Boeing Receives 330-Minute ETOPS Certification for 787s — https://boeing.mediaroom.com/2014-05-28-Boeing-Receives-330-Minute-ETOPS-Certification-for-787s
- EASA — TCDS EASA.IM.A.115 Boeing 787 — https://www.easa.europa.eu/en/document-library/type-certificates
- SKYbrary — Boeing 787-9 (B789) — https://skybrary.aero/aircraft/b789
- Wikipedia — Boeing 787 Dreamliner — https://en.wikipedia.org/wiki/Boeing_787_Dreamliner
- Wikipedia — General Electric GEnx / Rolls-Royce Trent 1000 — https://en.wikipedia.org/wiki/General_Electric_GEnx

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — built from public Boeing/EASA/SKYbrary data + VAMSYS mirror config + Fleet Capability Matrix (no reference OFP flown yet). |
