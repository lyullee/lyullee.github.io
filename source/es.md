# Ugwiyeon Lee · 이우귀연

### Chemical Engineering Software Developer

[English](../../README.md) · [한국어](README.ko.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [हिन्दी](README.hi.md)

[GitHub](https://github.com/lyullee) · [Google Scholar](https://scholar.google.com/citations?user=WZn0QQwAAAAJ) · [Email](mailto:lyullee@kgs.or.kr)

## Sobre mí

Soy Ugwiyeon Lee (이우귀연, Lyul Lee), de Korea Gas Safety Corporation, en la República de Corea. Desarrollo software científico en la intersección de la ingeniería química, la seguridad de procesos y la investigación computacional. Trabajo con equipos de hidrógeno, términos fuente, charcos de hidrógeno líquido, dispersión e incendios, asistentes documentales, energética atómica del hidrógeno y métodos cuánticos. Priorizo supuestos físicos explícitos, balances de masa y energía, convergencia, comparación experimental independiente y procedencia de datos. Distingo la verificación del software, la validación física y las mediciones en hardware cuántico.

También trabajo en cribado de suministro de amoníaco, separación dinámica PSA/VPSA y exposición térmica transitoria con análisis de sensibilidad.

> Guía localizada del README principal en inglés: objetivos, funciones y límites de la evidencia de los 20 proyectos. Los detalles técnicos están en la versión inglesa y en cada repositorio. Revisión: 2026-10-24; no se repitieron de forma independiente los cálculos de validación para esta actualización.

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

**[lyullee@kgs.or.kr](mailto:lyullee@kgs.or.kr)** · [Google Scholar](https://scholar.google.com/citations?user=WZn0QQwAAAAJ)

Para colaborar en investigación, modelado de seguridad del hidrógeno o software científico, puede contactarme. Antes de reutilizar, revise la licencia, las citas/DOI, la política de datos y el alcance de validación de cada repositorio. Este perfil no certifica de forma independiente los resultados de seguridad.
