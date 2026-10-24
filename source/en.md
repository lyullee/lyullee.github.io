# Ugwiyeon Lee (Lyul Lee)

### Chemical Engineering Software Developer

**Connecting hydrogen safety, physical models, and reproducible scientific software.**

[English](README.md) · [Korean](docs/i18n/README.ko.md) · [简体中文](docs/i18n/README.zh-CN.md) · [日本語](docs/i18n/README.ja.md) · [Français](docs/i18n/README.fr.md) · [Deutsch](docs/i18n/README.de.md) · [Español](docs/i18n/README.es.md) · [हिन्दी](docs/i18n/README.hi.md)

[GitHub](https://github.com/lyullee) · [Google Scholar](https://scholar.google.com/citations?user=WZn0QQwAAAAJ) · [Primary email](mailto:lyullee@gmail.com) · [Secondary email](mailto:lyullee@kgs.or.kr)

## About me

I am **Ugwiyeon Lee (Lyul Lee)**, affiliated with **Korea Gas Safety Corporation** in the Republic of Korea. I develop scientific software at the intersection of chemical engineering, process safety, and computational research. My work turns physical models and research evidence into tools whose assumptions, inputs, and limitations can be inspected.

My public portfolio spans several scales: dynamic hydrogen-refuelling equipment, liquid-hydrogen networks and PSA/VPSA separation; ammonia supply-system screening; release, pool, dispersion, and fire analysis; document-grounded safety assistants; atomistic hydrogen energetics; and quantum-computing methods for probability estimation and cryogenic-materials research. I connect these areas through explicit model contracts and reproducibility records rather than treating a calculated number as a complete engineering conclusion.

I focus on **traceable scientific computing**: mass and energy accounting, numerical convergence, comparison with reference implementations, independent experimental checks, and versioned data provenance. I distinguish software verification from physical validation, historical model reproduction from new extensions, and simulator results from real-device measurements. Where the evidence is incomplete, I aim to make that boundary visible.

## Project guide

This profile covers **20 public projects**, grouped by purpose. The profile repository itself is the twenty-first public repository at the review date. Project descriptions follow their public documentation; their validation results have not been independently rerun for this profile update.

| Area | Projects |
| --- | --- |
| Process simulation and risk integration | hydrogen-station-sim · lh2dt_models · prism · prism-dynasense · psa-dyna |
| Safety knowledge systems | saga-py · saga-sts |
| Release sources and dispersion | slabx · slabx-lh2 · degadisx · degali · lh2poolx · DynamicLH2PoolX |
| Fire and storage-tank analysis | pifira · lh2-psv-tno-risk |
| Ammonia supply-system screening | ammonia-supply-risk |
| Materials and quantum methods | hydrogen-local-energetics · qsafety-qae · psa-qae-resource-audit · nbcp-magnetocaloric-quantum-spectral-flow |

## Process simulation and risk integration

### [hydrogen-station-sim](https://github.com/lyullee/hydrogen-station-sim)

A physics-based hydrogen-refuelling-station digital-twin prototype that connects equipment dynamics, fueling, faults, safety logic, and monitoring.

- **Capabilities:** storage mass, energy and wall-temperature dynamics; a three-stage compressor with intercooling; three-bank cascade dispatch; valves, precooling and hose inventory; normal control and independent safety logic.
- **Interface and integration:** FastAPI simulation jobs, 3D monitoring, trends and incident exercises; outputs for 82 HAZOP sensor tags; SAGA-PY explanation APIs and a HyRAM+ consequence bridge.
- **Evidence boundary:** component and public-data evaluations are documented separately. Gas-detector tags include virtual zone proxies. This is a modelling and training prototype, not a certified physical controller or a claim of full-loop field validation.

### [lh2dt_models](https://github.com/lyullee/lh2dt_models)

Composable, first-principles liquid-hydrogen equipment and process-network models for Python. Explicit thermodynamic states and mass/energy flows let researchers connect replaceable components into steady or dynamic networks.

- **Capabilities:** storage tanks, cryogenic heat transfer, valves, pipes, vaporizers, reliquefiers, pumps, compressors, vent stacks and instrumentation.
- **Architecture:** property packages, two-port components, links, networks and a sensor/HART observation layer; public-reference benchmarks, observation-loading and blind-validation documentation.
- **Use:** engineering studies, digital-twin prototyping and model-in-the-loop work. The distribution is `lh2dt_models`, with `lh2dt` and `lh2dt_models` import namespaces. Validation remains specific to each component and benchmark.

### [prism](https://github.com/lyullee/prism)

**Process Risk Integration and Scenario Modeling** connects process state, HAZOP deviations, literature-based initiating frequencies, equipment release histories, dispersion and conditional facility-risk views.

- **Capabilities:** scenario orchestration and a traceable ledger for operating mode, input origin, frequency evidence, release history, weather, ignition, population, protection and consequence output.
- **Architecture:** process and consequence models remain independent providers. Measured and predicted states are distinguished; missing accident-source information is not silently inferred from normal operating flow.
- **Use and limits:** the `prism-risk` package provides the `prism` CLI, standard-mode templates and public LH₂ backend documentation. A completed calculation chain is not proof of a complete facility QRA or regulatory certification.

### [prism-dynasense](https://github.com/lyullee/prism-dynasense)

A local research application for time-dependent hydrogen-release and thermal-exposure screening, using PRISM dose/probit functions and direct-model Sobol sensitivity analysis.

- **Calculation:** pressurized gas release, delayed ignition, upstream isolation, residual downstream release, and point-source radiation within a declared assessment horizon.
- **Outputs:** an offline dashboard, time histories, raw sensitivity samples, convergence diagnostics, input/dependency hashes, and PNG/SVG figures.
- **Boundary:** one supported substance and scenario in v0.1.0. Conditional harm probabilities and sensitivity indices do not establish annual facility risk or experimental validation. The exported dashboard displays results; inputs are changed through JSON and the CLI.

### [psa-dyna](https://github.com/lyullee/psa-dyna)

**PSA-Dyna** is a physics-based, one-dimensional, non-isothermal, multicomponent PSA/VPSA model. It resolves adsorption fronts, pressure equalisation, thermal waves and valve switching, then prepares cycle-average process streams only when the applicable numerical and evidence gates permit release.

- **Physics and numerics:** finite-volume packed beds, Ergun pressure-flow closure, competitive dual-site Langmuir equilibrium and LDF kinetics, gas/solid/wall energy balances, compressible valves, and optional Peng–Robinson properties. Multiple beds and cycle schedules, stiff integration, sparse Jacobian structure and checkpoint/restart support numerical research.
- **Evidence:** the [public validation summary](https://github.com/lyullee/psa-dyna/blob/main/validation/validation_summary.json) reports that the Wang single-bed breakthrough figure comparison passes the declared composition, temperature, mesh, time-step and conservation gates. This does not validate cyclic four-bed VPSA or an industrial PSA design; the S-015 candidate remains a numerical design screen, and the Boer biogas cycle track remains blocked by apparatus-response identification.
- **Process integration:** a guarded DWSIM contract carries cycle-average `FEED`, `PRODUCT` and `TAIL` streams with thermodynamic state, enthalpy and provenance. The interface is implemented, but automatic DWSIM release and industrial-design qualification remain closed. A single completed cycle is not cyclic steady state.
- **Relationship:** a reusable dynamic separation model, distinct from the `psa-qae-resource-audit` archive of a particular engineering probability event and hardware probe. See the [physics](https://github.com/lyullee/psa-dyna/blob/main/docs/physics.md), [validation](https://github.com/lyullee/psa-dyna/blob/main/docs/validation.md) and [DWSIM bridge](https://github.com/lyullee/psa-dyna/blob/main/docs/dwsim-bridge.md) documentation.

## Safety knowledge systems

### [saga-py](https://github.com/lyullee/saga-py)

A Python/FastAPI assistant for Korean gas standards, law and HAZOP analysis, supporting standalone document-grounded chat and dedicated station-conversation and selected-sensor APIs.

- **Capabilities:** document indexing and retrieval, evidence validation, term aliases, and Korean/English operation. Korean regulatory retrieval and English NREL/HIAD libraries use distinct language paths.
- **Integration:** provides an advisory explanation layer for calculated process and sensor context from the independent hydrogen-station simulator.
- **Requirements and limits:** grounded answers require a lawful local document corpus and provider credentials. The public release excludes private PDFs and indexes. Outputs support analysis and training; they do not control physical equipment or replace official regulations.

### [saga-sts](https://github.com/lyullee/saga-sts)

The earlier Java/Spring Boot SAGA implementation, preserved as a separate source repository for reproducibility and further development.

- **Stack:** Java 21, Spring Boot, Spring AI, Apache Tika, Lucene/Nori Korean retrieval, PostgreSQL/pgvector and Ollama, with HAZOP/LPG modules and a web interface.
- **Contents:** source, tests, Gradle wrapper, dictionaries and a PDF.js viewer. Private documents, databases and indexes are excluded.
- **Relationship:** its runtime and APIs differ from SAGA-PY; it is not a drop-in replacement or a validated live-station safety controller.

## Release sources and atmospheric dispersion

### [slabx](https://github.com/lyullee/slabx)

A Python reimplementation of the SLAB dense-gas dispersion model, with inspectable inputs, coefficients and concentration post-processing.

- **Capabilities:** evaporating pools, horizontal and rising vertical jets, instantaneous releases, and the original plume-to-puff transition.
- **Extensions:** optional rainout, finite-rate evaporation, added mass, ground heat transfer and real-fluid properties are separated from the reproduction path.
- **Evidence:** compared with the original Fortran and evaluated against 38 field and wind-tunnel trials. Some observation data must be obtained separately; applicability follows the documented physical assumptions and benchmark conditions.

### [slabx-lh2](https://github.com/lyullee/slabx-lh2)

Liquid-hydrogen source physics and applicability diagnostics built around the SLABx plume/puff core, intended for rapid scenario screening within stated limits.

- **Capabilities:** cryogenic source handoff, thermodynamic extensions, ground interaction and routing checks; documents solid–vapour water treatment below the triple point and fusion-enthalpy corrections.
- **Evidence:** the current paper configuration uses seven FFI tests and 210 records. Those records are not 210 independent experiments, and reproducing them requires a separate research workflow and inputs.
- **Relationship:** complements the base `slabx` model and offers an optional LH2PoolX adapter. Package, archive and research configurations must be distinguished when reproducing results.

### [degadisx](https://github.com/lyullee/degadisx)

A Python reimplementation of EPA DEGADIS 2.1 that deliberately retains the legacy thermodynamic and numerical route.

- **Capabilities:** steady/transient ground-level releases, pressurised jets, input-deck readers and jet-touchdown handoff to the ground model.
- **Source contract:** `SourceLedger` and `SourceState` preserve resolved source-plane mass flows, area and time history. Unresolved liquid fractions are rejected; upstream flash, deposition and pool physics must be supplied separately.
- **Evidence and scope:** reproduction checks use the EPA reference distribution and benchmark listings. DEGALI research extensions are excluded; an optional pool adapter does not change the original dispersion physics.

### [degali](https://github.com/lyullee/degali)

**Dense Gas Dispersion for Liquid Hydrogen** combines a verified DEGADIS compatibility path with opt-in cryogenic-hydrogen research extensions.

- **Capabilities:** steady/transient dispersion, receptor dose, jet-to-ground workflows, flashing, buoyant trajectories, air condensation/freezing, component enthalpy and ground interaction.
- **Evidence:** EPA/Fortran checks and PRESLHY/FFI-DNV assessments are recorded in separate evidence lanes. Peak and time-mean concentration operators are not merged into one accuracy score.
- **Status:** alpha research software. Experimental 3D and obstacle-related numerical work has explicit conservation, closure and convergence limits; numerical checks do not constitute independent field validation or regulatory qualification.

### [lh2poolx](https://github.com/lyullee/lh2poolx)

An evidence-qualified, quasi-steady LH₂ pool source term for a declared time window, supplying upstream inputs to dispersion calculations.

- **Two routes:** a release/pressure/declared-deposition calculation, or conditional evaporation from an observed or declared pool footprint.
- **Physics:** isenthalpic flash, liquid reaching the ground, conduction-limited evaporation with a critical-heat-flux cap, and an equilibrium-area balance.
- **Boundary:** does not predict unknown impact footprints, deposition fractions or transient pool inventory. Source assumptions, route, version and status must accompany the result.

### [DynamicLH2PoolX](https://github.com/lyullee/DynamicLH2PoolX)

A time-dependent model of LH₂ spreading and evaporation after a declared liquid inflow has reached a horizontal surface.

- **Capabilities:** axisymmetric shallow-layer spreading, wet-contact evaporation, liquid inventory and an auditable mass balance, driven by an explicit `DeclaredInflow` history.
- **Evidence:** restricted Stage C component checks include conservation/refinement studies and JUEL/HSE comparisons. The full HSE expansion/retraction trajectory is not claimed as reproduced.
- **Boundary:** jet impact, splashing, slopes, drains, barriers, complex terrain and atmospheric dispersion are outside the qualified scope. The historical quasi-steady path is retained; substituting dynamic results into earlier FFI work requires a separate coupling study.

## Fire and storage-tank analysis

### [pifira](https://github.com/lyullee/pifira)

A toolkit for pressure-based inverse fire heat-input and effective-area analysis, with evidence-gated LH₂ thermodynamic utilities.

- **LPG workflow:** infer heat input from closed-vessel pressure rise before relief, estimate effective flame-contact angle/height/area, and calculate heat flux using pressure and wall-temperature histories.
- **LH₂ workflow:** ortho–para thermodynamics, state-point and pathwise composition screens, published conversion kinetics and a CoolProp HEOS nozzle closure.
- **Evidence:** original validation sources and comparison limits are documented. Experimental and validation datasets are not redistributed in the repository or package.

### [lh2-psv-tno-risk](https://github.com/lyullee/lh2-psv-tno-risk)

A research record and lightweight post-processing package linking LH₂ tank self-pressurisation, pressure-relief venting and conditional consequence indicators.

- **Calculation chain:** heat ingress → self-pressurisation → binary PSV opening/closing and vent history → flash/outlet thermal state → TNO-aligned jet-fire and dispersion routing indicators.
- **Public tools:** load published results, calculate flash-equivalent mass and conditional risk area, classify dispersion routes and regenerate five manuscript figures from saved ledgers.
- **Boundary:** the complete upstream tank and internal TNO solvers are not redistributed. This is a citable research/post-processing record, not a design-certified PSV sizing tool.

## Ammonia supply-system screening

### [ammonia-supply-risk](https://github.com/lyullee/ammonia-supply-risk)

A compact Python package publishing the reproducible core screening examples from an ammonia supply-system study.

- **Capabilities:** uncertain damage-proxy comparisons for ten materials, explicitly declared material/weld/environment/inspection multipliers, and allocation of one initiating frequency across mutually exclusive protection paths.
- **Reproduction:** seeded NumPy sampling, evidence qualifications and source identifiers, existing API tests, and an archived seven-output Sobol summary.
- **Boundary:** material rankings are conditional proxies, not observed annual leak rates. Calibrated frequencies need exposure/failure/inspection evidence; the package does not contain a complete ammonia source, dispersion, consequence, or facility-QRA solver.

## Materials and quantum methods

### [hydrogen-local-energetics](https://github.com/lyullee/hydrogen-local-energetics)

A reproducibility archive for local hydrogen energetics and lattice-controlled mobility, connecting DFT and machine-learning-potential outputs to traceable analysis.

- **Contents:** 32 Quantum ESPRESSO input/output pairs, archived MACE-OMat-0 and CHGNet arrays, analysis tables, figure scripts and the exact pseudopotentials used.
- **Reproduction:** figures use archived tables and arrays without requiring external model weights. Registries and checksums identify model and pseudopotential provenance.
- **Limit:** the dedicated CHGNet NEB generation script was not retained. Archived paths, barriers, cell definitions and method records support inspection, but figure regeneration is distinct from rerunning every original calculation.

### [qsafety-qae](https://github.com/lyullee/qsafety-qae)

A research package for quantum amplitude estimation on finite-mixture safety and reliability probability models.

- **Capabilities:** exact weighted probabilities, classical Monte Carlo and ideal maximum-likelihood QAE comparisons at equivalent oracle-query budgets; Qiskit state preparation, Grover checks and Aer simulation.
- **Reproduction:** a NumPy-only core, CSV/CLI interface and optional circuit/IBM dependencies let examples run without a QPU.
- **Boundary:** the probability model, estimator, circuit validation and opt-in hardware execution remain separate. Ideal-estimator results are not a demonstration of hardware quantum advantage.

### [psa-qae-resource-audit](https://github.com/lyullee/psa-qae-resource-audit)

A versioned research archive connecting pressure-consistent hydrogen PSA/membrane operation and regeneration reserve to a constrained probability event and quantum-oracle resource audit. It is not an installable dynamic PSA application; `psa-dyna` provides the separate dynamic-model implementation.

- **Engineering evidence:** corrected process topology, public experimental holdouts, independent integrator checks and DWSIM cross-checks; process performance and probability-discretisation errors are reported separately.
- **Quantum audit:** resource accounting for the final ten-bit arithmetic oracle and an IBM Kingston test of a seven-qubit Boolean circuit representing the same event at two-bit resolution.
- **Inspection and artifacts:** begin with [EXECUTION_BOUNDARIES.md](https://github.com/lyullee/psa-qae-resource-audit/blob/main/EXECUTION_BOUNDARIES.md) and the consolidated evidence. Inspecting archived counts does not require a new QPU submission; historical scripts can retain workstation-specific dependencies.
- **Boundary:** the hardware test covers all 64 basis inputs, not coherent QAE or the full arithmetic oracle. Manuscripts, results, circuits, raw counts and checksums are provided; synchronized validation of the final integrated apparatus remains outstanding.

### [nbcp-magnetocaloric-quantum-spectral-flow](https://github.com/lyullee/nbcp-magnetocaloric-quantum-spectral-flow)

A public-data study of how model uncertainty in the quantum refrigerant Na₂BaCo(PO₄)₂ changes sub-kelvin cooling decisions, followed by resource-gated quantum spectral-flow tests.

- **Physics and engineering:** dipolar, bond-dependent and interlayer interactions, sample shape, public experimental evidence, multimodel analysis and N=12/N=18 finite-cluster transfer checks.
- **Quantum methods:** low-energy entropy estimation, physics-informed state preparation and a complete six-qubit IBM Kingston method benchmark.
- **Evidence boundary:** hardware resolves the entropy-correction sign but fails quantitative-magnitude qualification. Finite-cluster results are not a bulk solution and no quantum advantage is claimed. Source manifests, derived data, Python/Octave checks, figures and manuscripts are public.

## How the projects connect

These are research relationships and intended information flows. Each actual coupling needs its own compatible versions, resolved source state and applicability checks.

```text
Standards / law / HAZOP ──► SAGA-PY ◄── hydrogen-station-sim
                           advisory     dynamic process + sensors

LH₂ equipment/network state ── lh2dt_models
                 │
Declared, resolved release history
                 ├── quasi-steady pool ── lh2poolx
                 └── dynamic ground pool ─ DynamicLH2PoolX
                 │
Resolved source-plane state
                 ├── SLAB family ─────── slabx / slabx-lh2
                 └── DEGADIS family ──── degadisx / degali
                 │
Scenarios + frequencies + consequences ── PRISM
Time-dependent release + sensitivity ──── PRISM-DynaSense
Ammonia material/path screening ───────── ammonia-supply-risk

Dynamic separation ─────── psa-dyna (guarded DWSIM contract)
Fire / tank analysis ───── pifira / lh2-psv-tno-risk
Atomistic hydrogen ─────── hydrogen-local-energetics
Probability methods ────── qsafety-qae / psa-qae-resource-audit
Magnetic refrigeration ─── nbcp-magnetocaloric-quantum-spectral-flow
```

## Tools and research practice

| Area | Tools and methods used across the public projects |
| --- | --- |
| Scientific computing | Python, NumPy, SciPy, CoolProp, finite volumes, stiff integration, mass/energy balances |
| Sensitivity and uncertainty | SALib Sobol analysis, seeded sampling, convergence diagnostics |
| Services and retrieval | FastAPI, Java, Spring Boot, Spring AI, Lucene/Nori, PostgreSQL/pgvector |
| Materials | Quantum ESPRESSO, DFT, archived MACE-OMat-0 and CHGNet analysis |
| Quantum computing | Qiskit, Aer, IBM Quantum, QAE, circuit-resource accounting |
| Verification and reproducibility | pytest, Fortran comparisons, experimental holdouts, convergence studies, manifests and checksums |
| Independent cross-checks | DWSIM, alternative integrators, Octave |

## Contact and research use

For research collaboration, hydrogen-safety modelling or scientific-software discussions: **Primary email: [lyullee@gmail.com](mailto:lyullee@gmail.com)** · Secondary email: [lyullee@kgs.or.kr](mailto:lyullee@kgs.or.kr). See [Google Scholar](https://scholar.google.com/citations?user=WZn0QQwAAAAJ) for the linked research profile.

Consult each repository's licence, citation metadata/DOI, data policy and validation record before reuse. The descriptions here preserve the repositories' stated research boundaries; they do not independently certify safety-related outputs.

<sub>Public-repository review: 2026-10-24 · 20 projects + this profile repository.</sub>
