# Ugwiyeon Lee (Lyul Lee) · 이우귀연

### Chemical Engineering Software Developer

[English](../../README.md) · [한국어](README.ko.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [हिन्दी](README.hi.md)

[研究ホームページ](https://lyullee.github.io/) · [GitHub](https://github.com/lyullee) · [Google Scholar](https://scholar.google.com/citations?user=WZn0QQwAAAAJ) · [主メール](mailto:lyullee@gmail.com) · [補助メール](mailto:lyullee@kgs.or.kr)

## 自己紹介

韓国ガス安全公社に所属する Ugwiyeon Lee（이우귀연、Lyul Lee）です。化学工学、プロセス安全、計算研究の接点で科学ソフトウェアを開発しています。水素設備の動的モデル、放出源・液体水素プール・拡散・火災、文書に基づく安全支援、原子スケールの水素エネルギー、量子計算手法を扱います。物理仮定、質量・エネルギー収支、数値収束、独立実験との比較、データの来歴を重視し、実装検証と物理的妥当性、古典計算と実機QPU測定を区別します。

アンモニア供給スクリーニング、動的PSA/VPSA分離、時系列の熱曝露・感度解析にも研究を広げています。

プロセス異常監視、人間信頼性、リスクベース検査、バイオメタンTEAと部分環境会計にも研究を拡張しています。

> 英語版メインREADMEをもとにした各言語向けガイドです。25プロジェクトの目的・機能・根拠の範囲を要約しています。詳細は英語版と各リポジトリをご参照ください。確認日：2026-10-26。今回の更新では検証計算を独立に再実行していません。

## プロジェクト

### [hydrogen-station-sim](https://github.com/lyullee/hydrogen-station-sim)

貯蔵、3段圧縮機、カスケード、充填、安全ロジックを結ぶ水素ステーションの物理ベース動的ツインです。FastAPI、3D監視、82のHAZOPタグ、故障訓練とSAGA/HyRAM+連携を提供します。検知器には仮想代理が含まれ、構成要素評価は全ループの現場検証や認証制御器を意味しません。

### [lh2dt_models](https://github.com/lyullee/lh2dt_models)

熱力学状態と質量・エネルギー流で液体水素タンク、配管、弁、ポンプ、気化器を組み立てるPythonライブラリです。定常・動的ネットワーク、センサー/HART観測、公開ベンチマークを備えます。検証は構成要素ごとで、配布名lh2dt_modelsとlh2dt importをサポートします。

### [prism](https://github.com/lyullee/prism)

PRISMはプロセス状態、HAZOP偏差、文献に基づく起因事象頻度、放出履歴、拡散、条件付きリスクを接続します。独立モデルと追跡可能な台帳を用い、測定値と予測値を区別します。prism-riskとCLI prismを提供しますが、完全な施設QRAや規制認証ではありません。

### [prism-dynasense](https://github.com/lyullee/prism-dynasense)

PRISM-DynaSenseは加圧水素放出、遅延着火、上流隔離、下流残留放出、熱曝露を時系列で計算するローカル研究ツールです。PRISM熱用量/probitとSALibの直接モデルSobol解析で、生標本・収束診断・ハッシュ・オフライン画面を出力します。画面は結果ビューアで入力変更はJSON/CLIです。単一物質・シナリオの条件付き影響であり年間施設リスクや実験検証ではありません。

### [ammonia-supply-risk](https://github.com/lyullee/ammonia-supply-risk)

アンモニア供給系のPythonスクリーニングツールです。10材料の不確かな損傷代理指標、材料・溶接・環境・検査の条件付き係数、単一起因頻度の相互排他的保護経路への配分を扱います。7出力のSobol結果は保存要約でAPIによる再計算ではありません。材料順位は実測年間漏洩率ではなく、完全な拡散・影響・施設QRAも提供しません。

### [psa-dyna](https://github.com/lyullee/psa-dyna)

PSA-Dynaは1次元非等温多成分PSA/VPSA動的モデルです。有限体積吸着床、Ergun流動、競争吸着/LDF、気固壁エネルギー、圧縮性弁、多塔多段、チェックポイント/CSSを備えます。Wang単塔破過曲線の図レベル比較は規定ゲートを通過しましたが循環VPSA・産業設計の検証は別です。DWSIM平均FEED/PRODUCT/TAIL契約は実装済みで自動出力承認は閉じています。

### [process-monitoring-toolkit](https://github.com/lyullee/process-monitoring-toolkit)

プロセス信号を異常スコア・故障根拠・監視イベントへ変換するPython研究基盤です。規則、統計、機械学習、時系列・グラフモデル、CoolProp残差を共通信号契約、独立校正、有効性マスク、警報方針で統合します。72構成、117ローカル試験、31探索ベンチマークを区別し、異常を根本原因や事故頻度、他施設での有効性と同一視しません。

### [human-reliability-toolkit](https://github.com/lyullee/human-reliability-toolkit)

タスク文脈、人間の遂行根拠、エラー・応答時間とプロセスリスクを結ぶPythonモデルです。タスクDAG、ベイズ計数更新、SPAR-H/HEART/CREAM/IDHEAS参照、回復・依存性、FTA/ETAを提供します。7数値源の1,334記録には観測数・方法成分・係数が含まれ、独立測定1,334件ではありません。SACADAは原子力訓練シミュレータの根拠で、化学プラントHEPや年間頻度の検証ではありません。

0.5.0では現場収集様式、独立タスク分母照合、固定HEP予測評価と12の運用拡張を追加しました。5,617の臨床検体機会は別の成功/不適合集計で、産業人間エラー測定や既存カタログには加えません。不利な時系列校正結果も保存します。

### [api581-risk-analysis](https://github.com/lyullee/api581-risk-analysis)

API-RP-581リスクベース検査計算を独立作成した非公式Python実装です。配布api581-engine、import api581で損傷・頻度・検査・放出・影響・リスク・計画を型付けし、任意SLABxと別API 520機能を備えます。509計算登録と861出典区間のソフトウェア検証は第三者認証ではありません。APIの提携・承認はなく規格原文を除外し、独自部分はApache-2.0です。

### [adm1-tea-lca](https://github.com/lyullee/adm1-tea-lca)

草サイレージ・牛スラリーのバイオメタンADM1研究を実行可能な記録として保存します。34状態積分、再構成TEA、部分GHG会計、有限格子/Pareto・頑健性・感度を接続します。5軽量試験と小規模実行は実験検証や歴史的完全再現ではなく、環境出力も完全LCAや検証済み製品フットプリントではありません。肥料クレジット過大評価の可能性を明示します。

### [process-risk-consequence-toolkit](https://github.com/lyullee/process-risk-consequence-toolkit)

独立作成の影響スクリーニング・重ガス研究ツールです。23の型付き計算でソース、受動拡散、火災/爆発、曝露、条件付きリスクを扱い、Python/CLI/任意HTTPと根拠レシートを提供します。SLABx履歴と等温・固定幅・鉛直混合1D結合層は別経路です。PyPIと任意SLABx 1.0.8は公開待ちでdenseをPyPIだけでは導入できません。独自部分はApache-2.0でCCPS/AIChE承認・現場認証はありません。

### [saga-py](https://github.com/lyullee/saga-py)

韓国のガス基準・法令・HAZOP向けPython/FastAPI知識支援サービスです。独立チャット、韓英対応、根拠確認とツイン会話・選択センサーAPIを備えます。文書回答には適法なローカル資料と認証情報が必要で、実設備を制御しません。

### [saga-sts](https://github.com/lyullee/saga-sts)

初期のJava 21/Spring Boot版SAGAを独立保存しています。Tika、Lucene/Nori、pgvector、Spring AI、Ollamaで検索・会話とHAZOP/LPG機能を構成します。非公開文書・索引は含まず、APIと実行環境が異なるためSAGA-PYを直接置換できません。

### [slabx](https://github.com/lyullee/slabx)

SLAB重ガス拡散モデルのPython再実装です。蒸発プール、水平・上昇噴流、瞬時放出、plume–puff遷移を扱い、液滴・地面伝熱・実流体拡張を再現経路と分離します。Fortran比較と38の現場・風洞試験評価を記録し、一部の観測資料は別途必要です。

### [slabx-lh2](https://github.com/lyullee/slabx-lh2)

SLABxに液体水素ソース物理と適用性診断を追加します。極低温相変化、地面相互作用、浮力経路、水の三重点以下の処理を扱います。論文構成はFFIの7試験・210記録で、別の研究入力と手順が必要であり210独立実験ではありません。

### [degadisx](https://github.com/lyullee/degadisx)

EPA DEGADIS 2.1の熱力学・数値経路を維持したPython実装です。定常・非定常の地表放出、加圧噴流、入力デッキ、SourceLedger引き渡しを提供します。未解決の液相分率を拒否し、DEGALIのLH₂研究拡張を含みません。

### [degali](https://github.com/lyullee/degali)

DEGADIS互換経路からフラッシュ、浮力、空気の凝縮・凍結、地面相互作用を研究します。EPA/Fortran、PRESLHY、FFI/DNV評価ではピーク値と時間平均を区別します。Alpha段階で3D・障害物拡張の閉鎖式と収束に限界があり、現場妥当性や規制適合を保証しません。

### [lh2poolx](https://github.com/lyullee/lh2poolx)

指定時間窓の準定常LH₂プール蒸発ソース項を計算します。放出・圧力・宣言した沈着率、または観測したプール面積から、フラッシュと地面伝導・限界熱流束を扱います。未知の衝突面積、沈着率、過渡的液体在庫は予測しません。

### [DynamicLH2PoolX](https://github.com/lyullee/DynamicLH2PoolX)

水平面に到達したDeclaredInflowから軸対称液層の拡がり、蒸発、在庫と質量収支を計算します。限定Stage C範囲で保存・細分化とJUEL/HSE比較を記録します。噴流衝突、斜面、障害物、大気拡散は範囲外で、HSE全膨張・収縮軌道の再現も主張しません。

### [pifira](https://github.com/lyullee/pifira)

LPGタンクの圧力上昇と壁温から熱入力、有効火炎接触面積、熱流束を逆解析します。LH₂オルト・パラ熱力学、組成診断、文献反応速度とHEOSノズルも提供します。検証の原典と限界を記録し、実験データ自体は再配布しません。

### [lh2-psv-tno-risk](https://github.com/lyullee/lh2-psv-tno-risk)

LH₂タンクの自己加圧、PSV開閉・放出、フラッシュ・出口熱状態とTNO火災・拡散指標を結ぶ研究記録です。公開結果の読込、条件付きリスク面積、経路分類、図の再生成を提供します。上流タンク/TNO全ソルバーや認証済みPSV設計ツールではありません。

### [hydrogen-local-energetics](https://github.com/lyullee/hydrogen-local-energetics)

水素の局所エネルギーと格子支配移動性の再現アーカイブです。Quantum ESPRESSO入出力32組、MACE-OMat-0/CHGNet配列、分析、擬ポテンシャル、チェックサムを含みます。外部重みなしで図を再生成できますがCHGNet NEB専用生成スクリプトは未保存です。

### [qsafety-qae](https://github.com/lyullee/qsafety-qae)

有限混合の安全・信頼性確率で厳密加重計算、Monte Carlo、理想的最尤QAEを比較します。NumPyコア、CSV/CLI、Qiskit・Grover・Aer検証と任意IBM実行を提供します。同一オラクル問い合わせ予算での理想結果は実機の量子優位ではありません。

### [psa-qae-resource-audit](https://github.com/lyullee/psa-qae-resource-audit)

圧力整合的な水素PSA・膜分離と再生余裕を確率事象と量子資源監査に接続します。公開holdout、積分器/DWSIM照合、10ビット算術オラクル資源を記録します。IBMの7量子ビット・2ビット縮約事象の64入力試験はcoherent QAEや全算術回路ではなく、最終統合装置の実験検証は未完です。

### [nbcp-magnetocaloric-quantum-spectral-flow](https://github.com/lyullee/nbcp-magnetocaloric-quantum-spectral-flow)

Na₂BaCo(PO₄)₂の相互作用、試料形状、モデル不確実性が極低温冷却判断へ与える影響を研究します。公開データ、N=12/N=18クラスター、Python/Octave照合の後に量子spectral-flowを評価します。IBM 6量子ビット試験はエントロピー補正の符号のみ合格し、大きさの定量性、バルク解、量子優位は主張しません。

## 連絡先と研究利用

**主メール: [lyullee@gmail.com](mailto:lyullee@gmail.com)** · 補助メール: [lyullee@kgs.or.kr](mailto:lyullee@kgs.or.kr) · [Google Scholar](https://scholar.google.com/citations?user=WZn0QQwAAAAJ)

研究協力、水素安全モデル、科学ソフトウェアに関するご連絡を歓迎します。利用前に各リポジトリのライセンス、引用情報・DOI、データ方針と検証範囲をご確認ください。この紹介は安全上の結果を独立に認証するものではありません。
