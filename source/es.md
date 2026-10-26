# Ugwiyeon Lee (Lyul Lee) · 이우귀연

### Chemical Engineering Software Developer

[English](../../README.md) · [한국어](README.ko.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [हिन्दी](README.hi.md)

[Sitio de investigación](https://lyullee.github.io/) · [GitHub](https://github.com/lyullee) · [Google Scholar](https://scholar.google.com/citations?user=WZn0QQwAAAAJ) · [Correo principal](mailto:lyullee@gmail.com) · [Correo secundario](mailto:lyullee@kgs.or.kr)

## Sobre mí

Soy Ugwiyeon Lee (이우귀연, Lyul Lee), de Korea Gas Safety Corporation, en la República de Corea. Desarrollo software científico en la intersección de la ingeniería química, la seguridad de procesos y la investigación computacional. Trabajo con equipos de hidrógeno, términos fuente, charcos de hidrógeno líquido, dispersión e incendios, asistentes documentales, energética atómica del hidrógeno y métodos cuánticos. Priorizo supuestos físicos explícitos, balances de masa y energía, convergencia, comparación experimental independiente y procedencia de datos. Distingo la verificación del software, la validación física y las mediciones en hardware cuántico.

También trabajo en cribado de suministro de amoníaco, separación dinámica PSA/VPSA y exposición térmica transitoria con análisis de sensibilidad.

Mis herramientas incluyen también monitoreo de procesos, fiabilidad humana, inspección basada en riesgo y TEA/contabilidad ambiental parcial del biometano.

> Guía localizada del README principal en inglés: objetivos, funciones y límites de la evidencia de los 25 proyectos. Los detalles técnicos están en la versión inglesa y en cada repositorio. Revisión: 2026-10-26; no se repitieron de forma independiente los cálculos de validación para esta actualización.

## Proyectos

### [hydrogen-station-sim](https://github.com/lyullee/hydrogen-station-sim)

Prototipo físico de gemelo digital de una estación de hidrógeno: almacenamiento, compresor de tres etapas, cascada, repostaje y lógica de seguridad. FastAPI, vista 3D, 82 etiquetas HAZOP, fallos e integración SAGA/HyRAM+; algunos detectores son representaciones virtuales. Las pruebas de componentes no equivalen a validación integral en campo ni a control certificado.

### [lh2dt_models](https://github.com/lyullee/lh2dt_models)

Biblioteca Python de equipos LH₂ componibles con estados termodinámicos y flujos de masa/energía: tanques, tuberías, válvulas, bombas y vaporizadores. Redes estacionarias/dinámicas, observaciones de sensores/HART y referencias públicas. Validación por componente; distribución lh2dt_models e importación lh2dt también disponible.

### [prism](https://github.com/lyullee/prism)

PRISM conecta estado del proceso, desviaciones HAZOP, frecuencias bibliográficas, historiales de liberación, dispersión y riesgo condicional. Usa proveedores de modelos independientes y un registro que distingue mediciones de predicciones. El paquete prism-risk y la CLI prism no implican una QRA completa ni certificación regulatoria.

### [prism-dynasense](https://github.com/lyullee/prism-dynasense)

PRISM-DynaSense calcula localmente liberación de hidrógeno presurizado, ignición retardada, aislamiento aguas arriba, descarga residual aguas abajo y exposición térmica. Combina dosis/probit de PRISM y Sobol directo de SALib con muestras, convergencia, hashes y panel sin conexión. Las entradas cambian mediante JSON/CLI; admite una sustancia y escenario, sin afirmar riesgo anual de instalación ni validación experimental.

### [ammonia-supply-risk](https://github.com/lyullee/ammonia-supply-risk)

Herramientas Python de cribado para suministro de amoníaco: indicadores inciertos de daño de diez materiales, factores de material/soldadura/entorno/inspección y reparto de una frecuencia inicial entre rutas de protección excluyentes. El resumen Sobol de siete salidas está archivado y la API no lo recalcula. Las clasificaciones no son tasas anuales medidas de fuga; no ofrece dispersión, consecuencias o QRA completas.

### [psa-dyna](https://github.com/lyullee/psa-dyna)

PSA-Dyna modela PSA/VPSA dinámica 1D, no isotérmica y multicomponente: volúmenes finitos, Ergun, adsorción competitiva/LDF, energía gas-sólido-pared, válvulas compresibles, múltiples lechos/pasos y reinicio/CSS. La comparación gráfica de ruptura de un lecho de Wang supera los criterios declarados, sin validar ciclos VPSA ni diseño industrial. El contrato DWSIM de corrientes medias FEED/PRODUCT/TAIL está implementado, pero la transferencia automática permanece bloqueada.

### [process-monitoring-toolkit](https://github.com/lyullee/process-monitoring-toolkit)

Marco Python componible que convierte señales de proceso en puntuaciones de anomalía, evidencia de fallo y eventos. Reglas, estadística, aprendizaje, modelos temporales/grafos y residuos CoolProp comparten contratos, calibración independiente y máscaras de validez. Las 72 configuraciones, 117 pruebas locales y 31 ensayos exploratorios no demuestran causa física, frecuencia de accidentes ni eficacia entre plantas.

### [human-reliability-toolkit](https://github.com/lyullee/human-reliability-toolkit)

Modelos Python que conectan tareas, evidencia humana, errores/tiempos de respuesta y riesgo: DAG, actualización bayesiana de conteos, referencias SPAR-H/HEART/CREAM/IDHEAS, recuperación, dependencia y FTA/ETA. Los 1.334 registros de siete fuentes incluyen conteos, componentes y factores, no 1.334 mediciones independientes. SACADA procede de simuladores nucleares; no se afirma calibración HEP química de campo ni frecuencias anuales observadas.

La versión 0.5.0 añade formularios de campo, conciliación independiente de denominadores, evaluación de pronósticos HEP congelados y doce extensiones operativas. Las 5.617 oportunidades clínicas forman un agregado separado de éxito/no conformidad, sin atribución humana industrial; se conserva un resultado temporal de calibración desfavorable.

### [api581-risk-analysis](https://github.com/lyullee/api581-risk-analysis)

Implementación Python independiente y no oficial de inspección basada en riesgo API-RP-581. Paquete api581-engine/import api581 con daño, frecuencia, inspección, liberación, consecuencias, riesgo y planificación; SLABx opcional y API 520 separado. Los 509 cálculos y 861 referencias son evidencia de software, no certificación externa. Sin respaldo API ni redistribución de normas; contenido original Apache-2.0.

### [adm1-tea-lca](https://github.com/lyullee/adm1-tea-lca)

Archivo ejecutable de investigación ADM1 de biometano a partir de ensilado de hierba y purín bovino. Integra 34 estados, TEA reconstruida, balance parcial de GEI y análisis de malla finita/Pareto, robustez y sensibilidad. Cinco pruebas ligeras y una pequeña demostración no validan experimentos ni reproducción histórica completa. No es ACV completa ni huella verificada; el crédito de fertilizante puede sobreestimarse.

### [process-risk-consequence-toolkit](https://github.com/lyullee/process-risk-consequence-toolkit)

Herramienta independiente de cribado de consecuencias e investigación de gases densos. Sus 23 cálculos tipados cubren fuentes, dispersión pasiva, fuego/explosión, exposición y riesgo condicional, con Python/CLI/HTTP opcional y recibos trazables. Los historiales SLABx y la capa 1D isotérmica de ancho fijo y mezcla vertical son rutas separadas. El paquete base 0.1.0 está publicado en PyPI y el proyecto original documenta comprobaciones de instalación limpia. SLABx 1.0.8 sigue sin publicarse allí; dense no se instala solo con PyPI. Apache-2.0, sin respaldo CCPS/AIChE ni certificación de campo.

### [saga-py](https://github.com/lyullee/saga-py)

Asistente Python/FastAPI para normas coreanas de gas, legislación y HAZOP. Ofrece conversación documental, coreano/inglés, verificación de evidencias y API de conversación/análisis de sensores del gemelo. Requiere corpus local legítimo y credenciales para respuestas documentadas; no controla equipos físicos.

### [saga-sts](https://github.com/lyullee/saga-sts)

Versión anterior de SAGA en Java 21/Spring Boot, conservada de forma independiente. Tika, Lucene/Nori, pgvector, Spring AI y Ollama integran búsqueda, conversación y módulos HAZOP/LPG. Excluye documentos e índices privados; sus API y entorno no sustituyen directamente a SAGA-PY.

### [slabx](https://github.com/lyullee/slabx)

Reimplementación Python de SLAB: charcos evaporantes, chorros horizontales/ascendentes, liberaciones instantáneas y transición de pluma a nube. Separa extensiones opcionales de gotas, transferencia al suelo y propiedades reales del recorrido histórico. Documenta comparación Fortran y 38 ensayos de campo/túnel; algunas observaciones se obtienen por separado.

### [slabx-lh2](https://github.com/lyullee/slabx-lh2)

Añade física de fuentes LH₂ y diagnóstico de aplicabilidad al núcleo SLABx: fases criogénicas, suelo, flotabilidad y agua bajo el punto triple. La configuración del estudio usa siete ensayos FFI y 210 registros, con entradas y flujo de investigación específicos. No son 210 experimentos independientes.

### [degadisx](https://github.com/lyullee/degadisx)

Reimplementación Python de EPA DEGADIS 2.1 que conserva sus métodos termodinámicos y numéricos históricos. Liberaciones estacionarias/transitorias a nivel del suelo, chorros presurizados, entradas y transferencia SourceLedger. Rechaza fracciones líquidas sin resolver y excluye las extensiones LH₂ de DEGALI.

### [degali](https://github.com/lyullee/degali)

Modelo LH₂ basado en compatibilidad DEGADIS para flash, flotabilidad, condensación/congelación del aire y suelo. Las evaluaciones EPA/Fortran, PRESLHY y FFI/DNV separan picos y promedios temporales. Software alfa con límites de cierre y convergencia en extensiones 3D/obstáculos; no acredita validación de campo ni aptitud regulatoria.

### [lh2poolx](https://github.com/lyullee/lh2poolx)

Término fuente cuasiestacionario de evaporación de un charco LH₂ durante una ventana declarada. Usa liberación/presión/fracción depositada declarada o huella observada, con flash, conducción y límite de flujo crítico. No predice impactos desconocidos, fracciones depositadas desconocidas ni inventario transitorio.

### [DynamicLH2PoolX](https://github.com/lyullee/DynamicLH2PoolX)

Calcula extensión axisimétrica, evaporación, inventario y balance de masa desde un DeclaredInflow ya llegado a una superficie horizontal. Alcance Stage C restringido con conservación, refinamiento y comparaciones JUEL/HSE. Excluye impacto de chorros, pendientes, obstáculos y dispersión atmosférica; no reproduce toda la trayectoria de expansión/retracción HSE.

### [pifira](https://github.com/lyullee/pifira)

Análisis inverso del calor recibido, área efectiva de contacto de llama y flujo térmico mediante presión y temperatura de pared de tanques LPG. Incluye termodinámica orto–para LH₂, controles de composición, cinéticas publicadas y cierre de tobera HEOS. Documenta fuentes y límites, sin redistribuir datos experimentales.

### [lh2-psv-tno-risk](https://github.com/lyullee/lh2-psv-tno-risk)

Archivo que enlaza autopresurización LH₂, apertura/cierre PSV, descarga, estado flash/térmico e indicadores de incendio/dispersión alineados con TNO. Incluye lectura de resultados, área de riesgo condicional, clasificación y regeneración de figuras. No contiene todos los solvers previos/TNO ni un dimensionamiento PSV certificado.

### [hydrogen-local-energetics](https://github.com/lyullee/hydrogen-local-energetics)

Archivo reproducible de energética local del hidrógeno y movilidad controlada por la red cristalina. Contiene 32 pares Quantum ESPRESSO, matrices MACE-OMat-0/CHGNet, análisis, pseudopotenciales y sumas de comprobación. Regenera figuras sin pesos externos; no se conservó el script dedicado de generación CHGNet NEB.

### [qsafety-qae](https://github.com/lyullee/qsafety-qae)

Compara probabilidades ponderadas exactas, Monte Carlo y QAE ideal de máxima verosimilitud en mezclas finitas de seguridad/fiabilidad. Núcleo NumPy, CSV/CLI, validación Qiskit/Grover/Aer y ejecución IBM opcional. Los presupuestos equivalentes de consultas no convierten resultados ideales en ventaja cuántica del hardware.

### [psa-qae-resource-audit](https://github.com/lyullee/psa-qae-resource-audit)

Conecta PSA/membranas de hidrógeno, presión consistente y reserva de regeneración con un evento probabilístico y auditoría de recursos cuánticos. Incluye holdouts públicos, integradores/DWSIM y oráculo aritmético de diez bits. El ensayo IBM de siete cúbits y reducción a dos bits cubre 64 entradas base, no QAE coherente ni aritmética completa; falta la validación del aparato integrado.

### [nbcp-magnetocaloric-quantum-spectral-flow](https://github.com/lyullee/nbcp-magnetocaloric-quantum-spectral-flow)

Estudia interacciones, forma de muestra e incertidumbre de Na₂BaCo(PO₄)₂ para decisiones de refrigeración subkelvin. Datos públicos, clústeres N=12/N=18 y controles Python/Octave preceden al flujo espectral cuántico. El ensayo IBM de seis cúbits valida el signo de corrección entrópica, no su magnitud cuantitativa; no afirma una solución macroscópica ni ventaja cuántica.

## Contacto y uso científico

**Correo principal: [lyullee@gmail.com](mailto:lyullee@gmail.com)** · Correo secundario: [lyullee@kgs.or.kr](mailto:lyullee@kgs.or.kr) · [Google Scholar](https://scholar.google.com/citations?user=WZn0QQwAAAAJ)

Para colaborar en investigación, modelado de seguridad del hidrógeno o software científico, puede contactarme. Antes de reutilizar, revise la licencia, las citas/DOI, la política de datos y el alcance de validación de cada repositorio. Este perfil no certifica de forma independiente los resultados de seguridad.
