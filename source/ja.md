# Ugwiyeon Lee (Lyul Lee) · 이우귀연

### Chemical Engineering Software Developer

[English](../../README.md) · [한국어](README.ko.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [हिन्दी](README.hi.md)

[研究ホームページ](https://lyullee.github.io/) · [GitHub](https://github.com/lyullee) · [Google Scholar](https://scholar.google.com/citations?user=WZn0QQwAAAAJ) · [主メール](mailto:lyullee@gmail.com) · [補助メール](mailto:lyullee@kgs.or.kr)

## 自己紹介

韓国ガス安全公社に所属する Ugwiyeon Lee（이우귀연、Lyul Lee）です。化学工学、プロセス安全、計算研究の接点で科学ソフトウェアを開発しています。水素設備の動的モデル、放出源・液体水素プール・拡散・火災、文書に基づく安全支援、原子スケールの水素エネルギー、量子計算手法を扱います。物理仮定、質量・エネルギー収支、数値収束、独立実験との比較、データの来歴を重視し、実装検証と物理的妥当性、古典計算と実機QPU測定を区別します。

アンモニア供給スクリーニング、動的PSA/VPSA分離、時系列の熱曝露・感度解析にも研究を広げています。

プロセス異常監視、人間信頼性、リスクベース検査、バイオメタンTEAと部分環境会計にも研究を拡張しています。

> 英語版メインREADMEをもとにした各言語向けガイドです。32プロジェクトの目的・機能・根拠の範囲を要約しています。詳細は英語版と各リポジトリをご参照ください。確認日：2026-11-11。今回の更新では検証計算を独立に再実行していません。

## プロジェクト

### [monitoring-diagnostics-toolkit](https://github.com/lyullee/monitoring-diagnostics-toolkit)

SI 単位を明示した温度・圧力・流量・在庫・位置センサーによる設備別 Python 監視です。質量・熱収支、抵抗、膜透過率、正常性能残差、因果的警報に有効性・判定理由・出典を付します。CLI の 11 診断種別に加え、Python API と任意の版固定プロジェクト接続を提供します。

- Python 3.11+、NumPy コア、import 名 `equipment_diagnostics`、独自コード MIT。研究用 Alpha 0.17.1 のソースと Zenodo 記録は公開済みで、[PyPI 0.17.1](https://pypi.org/project/monitoring-diagnostics-toolkit/0.17.1/) と [GitHub リリース](https://github.com/lyullee/monitoring-diagnostics-toolkit/releases/tag/v0.17.1)も公開済みです。上流の新規導入パッケージ動作確認は、新たな実測故障検証とは区別されます。生データ・外部エンジン・学習プロファイルは別途必要です。
- [根拠と限界](https://github.com/lyullee/monitoring-diagnostics-toolkit/blob/main/README.md#evidence-and-current-applicability)：上流はソフトウェア・物理試験 286 件と限定的なオブジェクト接続 7 件を報告しており、ここでは再実行していません。警報は故障確率や確定原因ではありません。再利用した熱ポンプ評価の改善はセッション間 0.3 K 差に依存し、正常記録の合成 ±0.3 K オフセットで 99.28% の警報が発生しました。故障特異性・独立設備への転移・複数モジュールの実測故障正解は未解決で、普遍的精度や認証安全運転を主張しません。

[Zenodo 0.17.1](https://doi.org/10.5281/zenodo.23993237)

### [plantdesign-toolkit](https://github.com/lyullee/plantdesign-toolkit)

67 の明示的な計算手法でプロセスプラント設計、機器スクリーニング、経済評価、環境会計を支援する研究用 Alpha です。Python SDK・CLI・ローカル JSON HTTP API は SQLite 履歴、計算グラフ、シナリオ、再利用を提供し、任意の DWSIM エンジンは別途導入します。

- Python 3.11+、import 名 `plantdesign`、GPL-3.0-only。DWSIM 由来モデルの必須表示を保持します。0.11.0 は公開済みで、通常の計算器に第三者ランタイム依存はありません。
- [検証記録](https://github.com/lyullee/plantdesign-toolkit/blob/main/docs/VERIFICATION.md)は Windows/Ubuntu・Python 3.11/3.12 の 364 試験と導入済み全 67 手法の検査を報告しており、ここでは再実行していません。44 分類群は追加の計算器ではありません。例示価格・係数・因子は仮定値で、出典付き案件データ、詳細物理設計、完全な環境境界が必要です。設計承認、完全な LCA、許認可、投資・現場適格性を示しません。

[PyPI 0.11.0](https://pypi.org/project/plantdesign-toolkit/0.11.0/) · [GitHub](https://github.com/lyullee/plantdesign-toolkit/releases/tag/v0.11.0) · [Zenodo DOI](https://doi.org/10.5281/zenodo.23954849)

### [rotorvibe](https://github.com/lyullee/rotorvibe)

回転機械向けの組み合わせ可能な Python 振動解析です。校正波形から FFT/PSD・包絡線スペクトル、軸受特性周波数、条件を限定した正常基準、検討可能な故障候補を生成します。NumPy API のプロバイダー・段階・結果受信先は交換可能で、ローカルダッシュボードは任意です。

- Python 3.11+、独自コード MIT、研究用 Alpha 0.1.0a5 は公開済みです。生データと装置別の学習プロファイルは別途取得し、規格限界値は呼出側が提供します。
- [根拠と限界](https://github.com/lyullee/rotorvibe/blob/main/README.md#evidence-retain-the-failures)：99.82% は同じ装置・軸受・故障程度の故障データ限定で、新たな正常試験はありません。新軸受・独立装置への転移は失敗し、厳格な API は新規 580 窓すべてを保留しました。ゼロ誤警報率、現場診断、残存寿命予測、自動停止権限の根拠にはなりません。公開検査は過去の非公開 547 件と区別され、ここでは再実行していません。

[PyPI 0.1.0a5](https://pypi.org/project/rotorvibe/0.1.0a5/) · [GitHub](https://github.com/lyullee/rotorvibe/releases/tag/v0.1.0a5) · [Zenodo 0.1.0a5](https://doi.org/10.5281/zenodo.23941252)
- **0.1.0a5 更新：**プロファイル・数値・判定契約の強化、取得品質と条件別正常校正、実測速度による角度実験、有界キュー、段階・受信先別の結果コピー、版固定の任意プロセス監視接続、ハッシュ付きプロファイル、電力保存 PSD 履歴、レビュー済み呼出側ルールを追加しました。寿命推定は実験利用の明示選択が必要です。上流の導入済み wheel 選択試験は 224 件で、新たな実測分類や現場寿命の適格性を示しません。48 kHz・4 チャネルのバーストでは 250 ms 遅延予算を 17 回超えました。[リリース記録](https://github.com/lyullee/rotorvibe/blob/main/docs/RELEASE_0_1_0a5.md)を参照してください。

### [pipeline-safety-toolkit](https://github.com/lyullee/pipeline-safety-toolkit)

流動・熱力学・構造応答・損傷・計測・リスク交換を結ぶ配管工学研究ツールです。単位、時計、出典、交換可能なプロバイダーの契約を明示します。

- Python 3.12+、独自コード MIT、import 名 `pipeline_integrity`。[PyPI 0.1.0a1](https://pypi.org/project/pipeline-safety-toolkit/0.1.0a1/) と [Zenodo 記録](https://doi.org/10.5281/zenodo.23899127)は公開済みです。外部エンジン・データには別途条件があります。223 手法・304 API は独立検証済みソルバー数ではありません。
- [記録された根拠](https://github.com/lyullee/pipeline-safety-toolkit/blob/main/research/public_validation_status.json)：限定領域の独立物理試験プロファイルは 198/223 手法、25 手法が未完了で、実測適合性の失敗 4 件が残ります。導入済み wheel の公開部分集合は 276 件合格を報告しますが、全体のスタイル指摘は未解決です。ここでは再実行しておらず、現場安全や規格認証の根拠にはなりません。

### [h2physics](https://github.com/lyullee/h2physics)

水素の製造・貯蔵・移送・安全研究向けの組み合わせ可能な Python 物理モデルです。熱力学、機器と有限移送、水素化物・吸着、電気化学・分離、透過・拡散、放出履歴と施設インターフェースを扱い、Python オブジェクト・関数・配列で係数や供給モデルを交換できます。

- SI 単位、物質・相、エネルギー基準、時刻の整合を明示します。CoolProp、Cantera、LH2DT、PSA-Dyna、HyRAM+ などの任意エンジンは別途導入とライセンス確認が必要です。82 のカタログ項目と検証の 78 主題群は独立方程式数でも完全な物理的適格性の証明でもありません。
- 選定した入力・計算・境界・接続・回帰検査と、有効透過係数、正規化水素化物反応曲線、PEM 電圧、ノズル流量の条件付きホールドアウト比較を記録しています。異なる誤差指標は統合できず、ノズルの平均相対誤差は約 29.8% です。全体の物理的適格性は未確立で、一部の正常接続は未完了です。本プロフィールでは計算を再実行していません。
- [GitHub 0.2.0 Alpha](https://github.com/lyullee/h2physics/releases/tag/v0.2.0)  は wheel とソースを公開済みで、[PyPI 0.2.0](https://pypi.org/project/h2physics/0.2.0/) と [Zenodo DOI](https://doi.org/10.5281/zenodo.23889027) のソフトウェア記録も公開されました。レジストリと DOI メタデータを確認しました。導入検査は元リポジトリの記録で、本プロフィールでは再実行していません。Python 3.12+、独自コードは Apache-2.0。外部観測・エンジン・参考文献は配布物から除外されます。[比較報告](https://github.com/lyullee/h2physics/blob/main/docs/PHYSICAL_VALIDATION_CAMPAIGN.md)と[公開状況](https://github.com/lyullee/h2physics/blob/main/docs/PUBLICATION_STATUS.md)を参照してください。

- **公開済みの拡張：**[0.2.0 の拡張](https://github.com/lyullee/h2physics/blob/main/docs/ENHANCEMENTS_20261102.md)では、室内蓄積と点火遅延別の条件付きピーク、FA/DDT スクリーニング、機械的膨張と弱い波動荷重、線形構造応答、熱サイクル・エクセルギー、固体酸化還元平衡、電極指標、結合型静的触媒式再結合器（PAR）を追加しています。公開済みの 0.2.0 配布物に含まれます。任意のプロバイダーは別途必要です。上流では、インストール済み wheel の検査を含む、実行環境をまたいだ重複なしの重点検査 139 件の完了を報告しています。別の広範な再実行では環境・成果物の問題による 61 件の失敗が残っています。これは限定的なソフトウェア検査であり、新たな実験的検証や施設の適格性を示すものではなく、ここでは再実行していません。

### [hydrogen-station-sim](https://github.com/lyullee/hydrogen-station-sim)

貯蔵、3段圧縮機、カスケード、充填、安全ロジックを結ぶ水素ステーションの物理ベース動的ツインです。FastAPI、3D監視、82のHAZOPタグ、故障訓練とSAGA/HyRAM+連携を提供します。検知器には仮想代理が含まれ、構成要素評価は全ループの現場検証や認証制御器を意味しません。

0.1.3 はウェブ監視画面と遠隔操作画面を Python パッケージに同梱し、模擬消火、散水表示、ベント流量計測、修理後の復旧、3D 表示のリセットを更新しました。GitHub の記録では対象を絞ったソフトウェア検査に合格しています。 [GitHub 0.1.3](https://github.com/lyullee/hydrogen-station-sim/releases/tag/v0.1.3) · [PyPI 0.1.3](https://pypi.org/project/hydrogen-station-sim/0.1.3/)

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

独立作成の影響スクリーニング・重ガス研究ツールです。23の型付き計算でソース、受動拡散、火災/爆発、曝露、条件付きリスクを扱い、Python/CLI/任意HTTPと根拠レシートを提供します。SLABx履歴と等温・固定幅・鉛直混合1D結合層は別経路です。基本パッケージ0.1.0はPyPI公開済みで、上流に新環境の導入確認を記録しています。任意SLABx 1.0.8は未公開のためdenseはPyPIだけでは導入できません。独自部分はApache-2.0でCCPS/AIChE承認・現場認証はありません。

### [saga-py](https://github.com/lyullee/saga-py)

韓国のガス基準・法令・HAZOP向けPython/FastAPI知識支援サービスです。独立チャット、韓英対応、根拠確認とツイン会話・選択センサーAPIを備えます。文書回答には適法なローカル資料と認証情報が必要で、実設備を制御しません。

2.0.2 はシミュレーター 0.1.3 からの直接分析に対応し、現在の火炎検知、保持された警報、信号品質を区別します。両リリースとも外部へのウェブ要求を HTTP(S) に制限し、XML 解析を強化しました。SAGA-PY のリリース記録ではソフトウェアテスト 205 件が合格し、1 件がスキップされています。 [GitHub 2.0.2](https://github.com/lyullee/saga-py/releases/tag/v2.0.2)

### [saga-sts](https://github.com/lyullee/saga-sts)

初期のJava 21/Spring Boot版SAGAを独立保存しています。Tika、Lucene/Nori、pgvector、Spring AI、Ollamaで検索・会話とHAZOP/LPG機能を構成します。非公開文書・索引は含まず、APIと実行環境が異なるためSAGA-PYを直接置換できません。

### [plumeswift](https://github.com/lyullee/plumeswift)

地形・障害物周辺の三次元風場とラグランジュ型ガス漏洩拡散を組み立てる Python 研究ツールです。乱流・積分・境界・収集を選択でき、QES v2.3.1 を参照した実験的な液体水素平衡物性と浮力・抗力結合を含みます。

- 旧 QESx は PlumeSwift 0.1.0a4 に改名し、PyPI・GitHub・Zenodo で公開済みです。Python 3.11+、モジュール/CLI は `plumeswift`。QES 由来コードは GPL-3.0-only、glibc 由来の数値部品は LGPL-2.1-or-later で、上流・第三者の表示を保持します。加速・熱力学・GIS/GPU・可視化は互換環境を要する任意機能です。
- 同梱の合成 LH₂ 例と任意のオフライン三次元濃度表示を提供します。FFI 手順は利用者が用意した公式報告書から実測値をローカルで読み取り、報告書と実測センサー記録はソフトウェア配布に含みません。
- [記録された根拠](https://github.com/lyullee/plumeswift/blob/main/docs/DEVELOPMENT.md)：FFI の七条件・210 センサーで Python 逐次・並列経路の濃度と質量収支が一致しました。実測濃度 RMSE は 1.9843 パーセントポイントで、実測平均 4 vol% 以上の九センサーのうち二つを捕捉しました。ここでは再実行していません。上流全機能の移植は未完了で、報告された計時の出力処理量も異なります。

[PyPI 0.1.0a4](https://pypi.org/project/plumeswift/0.1.0a4/) · [GitHub 0.1.0a4](https://github.com/lyullee/plumeswift/releases/tag/v0.1.0a4) · [Zenodo DOI](https://doi.org/10.5281/zenodo.24079156)

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

### [materials-corrosion-toolkit](https://github.com/lyullee/materials-corrosion-toolkit)

材料・腐食・電気化学・拡散・構造健全性・製作/溶接・検査の独立 Python モジュールです。入力・単位・根拠・結果状態を厳格な契約で扱います。

- Python 3.11+、独自コード MIT、import 名 `matintegrity`。ソースの研究用 Alpha 版は 0.1.0a1 で、[PyPI 0.1.0a1](https://pypi.org/project/materials-corrosion-toolkit/0.1.0a1/)・[GitHub リリース](https://github.com/lyullee/materials-corrosion-toolkit/releases/tag/v0.1.0a1)・[Zenodo 記録](https://doi.org/10.5281/zenodo.23899598)は公開済みで、レジストリでの公開と DOI メタデータを確認しました。任意の科学計算・物性プロバイダーと外部データには別途導入・権利確認が必要です。
- [記録された限界](https://github.com/lyullee/materials-corrosion-toolkit/blob/main/docs/RELEASE_STATUS_KO.md)：登録 757 API はデータ・ワークフローも含み、核心計算は 63 群です。監査対象の核心 API は 230/232 件が計算完了、2 件は外部根拠待ちです。導入済み wheel の数値検査 59 件合格とは別に、Ruff 指摘 885 件と全 API の例示網羅検査 1 件が未解決です。集計は重複し、独立物理検証数ではありません。自動設計承認、決定論的損傷からの故障確率、現場適格性を主張せず、ここでは再実行していません。

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
