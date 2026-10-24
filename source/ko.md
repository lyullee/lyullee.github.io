# Ugwiyeon Lee · 이우귀연

### Chemical Engineering Software Developer

[English](../../README.md) · [한국어](README.ko.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [हिन्दी](README.hi.md)

[GitHub](https://github.com/lyullee) · [Google Scholar](https://scholar.google.com/citations?user=WZn0QQwAAAAJ) · [Email](mailto:lyullee@kgs.or.kr)

## 소개

저는 한국가스안전공사 소속 이우귀연(Ugwiyeon Lee, Lyul Lee)입니다. 화학공학·공정안전·전산 연구의 접점에서 과학 소프트웨어를 개발합니다. 수소 설비 동특성, 누출원·풀·확산·화재, 문서 기반 안전 지식, 원자 규모 수소 물성 및 양자계산 방법을 연구합니다. 물리적 가정, 질량·에너지 수지, 수치 수렴, 독립 실험 비교와 데이터 출처를 명확히 남기는 것을 중요하게 생각합니다. 구현 검증과 물리 검증, 고전 계산과 실제 QPU 결과를 구분합니다.

수소 설비 외에도 암모니아 공급계통 스크리닝, 동적 PSA/VPSA 분리공정과 시간별 열 노출·민감도 분석으로 연구 범위를 확장하고 있습니다.

> 이 페이지는 영어 메인 README의 현지화된 프로젝트 안내입니다. 20개 프로젝트의 목적·기능·근거 범위를 요약하며 상세 기술 설명은 영어 메인과 각 저장소에서 확인할 수 있습니다. 검토일: 2026-10-24. 이번 프로필 수정에서 검증 계산을 독립적으로 재실행하지 않았습니다.

## 프로젝트

### [hydrogen-station-sim](https://github.com/lyullee/hydrogen-station-sim)

수소충전소의 저장·3단 압축기·캐스케이드·충전·안전 로직을 연결하는 물리 기반 디지털 트윈입니다. FastAPI, 3D 화면, 82개 HAZOP 태그, 고장 훈련과 SAGA/HyRAM+ 연계를 제공하며, 가스검지기에는 가상 프록시가 포함됩니다. 구성요소 평가와 전체 현장 루프 검증을 구분하는 연구·교육용 프로토타입입니다.

### [lh2dt_models](https://github.com/lyullee/lh2dt_models)

열역학 상태와 질량·에너지 흐름으로 액체수소 탱크·배관·밸브·펌프·기화기 등을 조립하는 Python 장치·네트워크 라이브러리입니다. 정상·동적 해석, 센서/HART 관측과 공개 벤치마크를 제공합니다. 검증 범위는 구성요소별이며 배포명 lh2dt_models와 import명 lh2dt를 함께 지원합니다.

### [prism](https://github.com/lyullee/prism)

Process Risk Integration and Scenario Modeling은 공정 상태·HAZOP 편차·문헌 빈도·시간별 방출·확산·조건부 위험을 연결합니다. 독립 모델 공급자를 사용하고 측정·예측 입력, 근거와 결과를 원장으로 추적합니다. prism-risk/CLI prism을 제공하지만 완전한 시설 QRA나 인허가 인증을 뜻하지 않습니다.

### [prism-dynasense](https://github.com/lyullee/prism-dynasense)

PRISM-DynaSense는 가압 수소 방출→지연 점화→상류 격리→하류 잔류 방출→열 노출을 시간에 따라 계산하는 로컬 연구 도구입니다. PRISM 열량·probit 함수와 SALib 직접 모델 Sobol 분석을 결합해 원시 표본·수렴 진단·해시·오프라인 대시보드를 내보냅니다. 대시보드는 결과 뷰어이며 입력은 JSON/CLI로 변경합니다. 단일 물질·시나리오의 조건부 영향 계산으로 연간 시설 위험이나 실험 검증을 뜻하지 않습니다.

### [ammonia-supply-risk](https://github.com/lyullee/ammonia-supply-risk)

암모니아 공급계통 연구의 Python 스크리닝 도구입니다. 10개 재료의 불확실 손상 대리점수, 재료·용접·환경·검사 조건부 배수와 하나의 초기사건 빈도를 상호 배타적 보호 경로에 배분하는 계산을 제공합니다. 7개 출력의 Sobol 결과는 보관 요약이며 API가 재계산하지 않습니다. 재료 순위는 실측 연간 누출률이 아니며 완전한 암모니아 확산·영향·시설 QRA 모델도 아닙니다.

### [psa-dyna](https://github.com/lyullee/psa-dyna)

PSA-Dyna는 1차원 비등온 다성분 PSA/VPSA 동적 모델입니다. 유한체적 흡착층, Ergun 유동, 경쟁 흡착·LDF 속도, 기체/고체/벽 에너지, 압축성 밸브, 다중 흡착탑·단계와 checkpoint/CSS를 제공합니다. Wang 단일탑 파과 곡선의 그림 수준 비교는 선언된 게이트를 통과했지만 순환 VPSA·산업 설계 검증은 별개입니다. DWSIM 평균 FEED/PRODUCT/TAIL 계약은 구현됐으나 자동 전달 승인은 닫혀 있습니다.

### [saga-py](https://github.com/lyullee/saga-py)

국내 가스 기준·법규·HAZOP 문서를 검색하는 Python/FastAPI 안전 지식 서비스입니다. 독립 채팅, 한영 지원, 근거 검증과 디지털 트윈 대화·선택 센서 API를 제공합니다. 문서 기반 답변에는 합법적으로 확보한 자체 문서와 제공자 키가 필요하며 실제 장치를 제어하지 않습니다.

### [saga-sts](https://github.com/lyullee/saga-sts)

Java 21/Spring Boot 기반 SAGA 초기 구현을 독립 보존합니다. Tika, Lucene/Nori, pgvector, Spring AI와 Ollama로 문서 검색·대화 및 HAZOP/LPG 기능을 구성합니다. 비공개 문서·인덱스는 제외하며 SAGA-PY와 API·런타임이 달라 바로 대체할 수 없습니다.

### [slabx](https://github.com/lyullee/slabx)

SLAB 고밀도 가스 확산 모델을 Python으로 재구현했습니다. 증발 풀·수평/수직 제트·순간 방출·plume–puff 전이와 선택적 열전달·액적·실유체 확장을 제공합니다. 원본 Fortran 비교 및 현장·풍동 시험 38개 평가를 문서화하며 관측 데이터 일부는 별도 확보해야 합니다.

### [slabx-lh2](https://github.com/lyullee/slabx-lh2)

SLABx 코어에 액체수소 소스 물리와 적용성 진단을 추가합니다. 극저온 상변화·지면 상호작용·부력 경로와 삼중점 이하 수분 처리를 다룹니다. 논문 구성은 FFI 7시험·210기록으로, 패키지 설치 외에 연구 입력·워크플로가 필요하고 210개 독립 실험을 의미하지 않습니다.

### [degadisx](https://github.com/lyullee/degadisx)

EPA DEGADIS 2.1의 기존 열역학·수치 경로를 유지한 Python 재현 구현입니다. 정상·비정상 지면 방출, 가압 제트와 입력 덱, SourceLedger 소스 전달을 제공합니다. 미해결 액상 분율을 거부하며 DEGALI의 LH₂ 연구 확장은 포함하지 않습니다.

### [degali](https://github.com/lyullee/degali)

DEGADIS 호환 경로를 바탕으로 플래싱·부력·공기 응축/동결·지면 상호작용을 연구합니다. EPA/Fortran 및 PRESLHY·FFI/DNV 평가에서 피크와 시간평균 결과를 구분합니다. Alpha 단계로 3D·장애물 확장의 폐쇄·수렴 한계를 명시하며 현장 검증이나 규제 적합성을 보장하지 않습니다.

### [lh2poolx](https://github.com/lyullee/lh2poolx)

선언한 시간 구간의 준정상 액체수소 풀 증발 소스항을 계산합니다. 방출·압력·침착 분율 경로 또는 관측 footprint 경로에 플래시·지면 전도·열유속 제한을 적용합니다. 충돌 면적·미지 침착률·시간별 풀 재고를 예측하는 모델은 아닙니다.

### [DynamicLH2PoolX](https://github.com/lyullee/DynamicLH2PoolX)

지면에 도달한 DeclaredInflow 이력으로 축대칭 액층 퍼짐·증발·액체 재고·질량수지를 계산합니다. 제한된 Stage C 범위에서 보존·수렴과 JUEL/HSE 비교를 기록합니다. 제트 충돌·경사·장애물·대기 확산은 범위 밖이며 HSE 전체 팽창·수축 궤적을 재현했다는 주장은 하지 않습니다.

### [pifira](https://github.com/lyullee/pifira)

LPG 탱크 압력 상승과 벽 온도에서 열유입·유효 화염 접촉면적·열유속을 역해석합니다. LH₂ 오르토–파라 열역학, 조성 진단, 문헌 반응속도와 HEOS 노즐 유틸리티도 제공합니다. 원본 검증 출처와 한계를 기록하며 실험 데이터 자체는 재배포하지 않습니다.

### [lh2-psv-tno-risk](https://github.com/lyullee/lh2-psv-tno-risk)

액체수소 탱크의 자체가압→PSV 개폐·방출→플래시·벤트 열상태→TNO 기반 화재·확산 지표를 연결한 연구 아카이브입니다. 공개 결과 읽기·조건부 위험면적·경로 분류와 그림 재생성을 제공합니다. 상류 탱크·내부 TNO 전체 솔버나 인증된 PSV 설계 도구는 아닙니다.

### [hydrogen-local-energetics](https://github.com/lyullee/hydrogen-local-energetics)

수소 국소 에너지와 격자 지배 이동성의 재현 자료입니다. Quantum ESPRESSO 32개 입출력 쌍, MACE-OMat-0/CHGNet 배열·분석·그림·의사퍼텐셜과 체크섬을 제공합니다. 외부 모델 가중치 없이 그림을 재현하지만 CHGNet NEB 생성 전용 스크립트는 보존되지 않았습니다.

### [qsafety-qae](https://github.com/lyullee/qsafety-qae)

유한 혼합 안전·신뢰성 확률에서 정확 가중합·Monte Carlo·이상적 최대우도 QAE를 비교합니다. NumPy 코어, CSV/CLI, Qiskit·Grover·Aer 검증과 선택적 IBM 실행을 제공합니다. 같은 오라클 질의 예산을 비교하며 이상적 결과를 하드웨어 양자 우위와 구분합니다.

### [psa-qae-resource-audit](https://github.com/lyullee/psa-qae-resource-audit)

수소 PSA/막 공정의 압력 일관성과 재생 여유를 확률 사건·양자 자원 감사에 연결합니다. 공개 holdout·적분기·DWSIM 비교와 10비트 오라클 자원을 기록합니다. IBM 7큐비트·2비트 축소 사건의 64입력 시험은 coherent QAE나 전체 산술 회로 실행이 아니며 통합 장치 실험은 남은 과제입니다.

### [nbcp-magnetocaloric-quantum-spectral-flow](https://github.com/lyullee/nbcp-magnetocaloric-quantum-spectral-flow)

Na₂BaCo(PO₄)₂ 자기냉각 소재의 상호작용·시료 형상·모델 불확실성이 극저온 냉각 판단에 미치는 영향을 연구합니다. 공개 데이터, N=12/N=18 클러스터와 Python/Octave 비교 후 양자 spectral-flow를 평가합니다. IBM 6큐비트 시험은 엔트로피 보정 부호만 통과했으며 크기 정량 검증·벌크 해·양자 우위를 주장하지 않습니다.

## 연락 및 연구 활용

**[lyullee@kgs.or.kr](mailto:lyullee@kgs.or.kr)** · [Google Scholar](https://scholar.google.com/citations?user=WZn0QQwAAAAJ)

연구 협업 및 과학 소프트웨어 관련 연락을 환영합니다. 재사용 전 각 저장소의 라이선스, 인용 정보/DOI, 데이터 정책과 검증 범위를 확인해 주세요. 연구용 안전 결과를 독립적으로 인증하는 프로필은 아닙니다.
