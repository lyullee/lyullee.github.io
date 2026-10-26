# Ugwiyeon Lee (Lyul Lee) · 이우귀연

### Chemical Engineering Software Developer

[English](../../README.md) · [한국어](README.ko.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [हिन्दी](README.hi.md)

[研究主页](https://lyullee.github.io/) · [GitHub](https://github.com/lyullee) · [Google Scholar](https://scholar.google.com/citations?user=WZn0QQwAAAAJ) · [主要邮箱](mailto:lyullee@gmail.com) · [备用邮箱](mailto:lyullee@kgs.or.kr)

## 关于我

我是韩国燃气安全公社的 Ugwiyeon Lee（이우귀연，Lyul Lee）。我在化学工程、过程安全与计算研究的交叉领域开发科学软件，研究范围包括氢能设备动态模型、泄漏源项、液氢液池、扩散与火灾分析、基于文档的安全助手、原子尺度氢能量学以及量子计算方法。我重视明确的物理假设、质量与能量守恒、数值收敛、独立实验比较和数据溯源，并区分软件验证、物理有效性验证、经典基线与真实量子硬件测量。

研究还扩展到氨供应筛查、动态PSA/VPSA分离过程以及随时间变化的热暴露与敏感性分析。

近期工具还扩展到过程异常监测、人因可靠性、风险检验及生物甲烷TEA与部分环境核算。

> 本页是英文主 README 的本地化项目指南，概述25个项目的目标、功能和证据边界。详细技术信息请参阅英文主页和各项目仓库。审查日期：2026-10-26；此次简介更新未独立重新运行验证计算。

## 项目

### [hydrogen-station-sim](https://github.com/lyullee/hydrogen-station-sim)

物理驱动的加氢站数字孪生原型，连接储存、三级压缩机、级联供气、加注与安全逻辑。提供FastAPI、3D监控、82个HAZOP标签、故障演练及SAGA/HyRAM+接口；气体检测标签包含虚拟区域代理。组件评估不等于全回路现场验证，也不是认证控制器。

### [lh2dt_models](https://github.com/lyullee/lh2dt_models)

用热力学状态及质量、能量流组合液氢储罐、管道、阀门、泵和汽化器的Python库。支持稳态/动态网络、传感器/HART观测及公开基准。验证按组件划定；发行名为lh2dt_models，同时支持lh2dt导入。

### [prism](https://github.com/lyullee/prism)

PRISM连接过程状态、HAZOP偏差、文献初始事件频率、释放历程、扩散和条件风险。独立模型通过可追溯台账交接，并区分测量与预测输入。提供prism-risk软件包和prism命令行，但完整计算链并不代表完整设施QRA或监管认证。

### [prism-dynasense](https://github.com/lyullee/prism-dynasense)

PRISM-DynaSense是本地研究工具，计算加压氢气释放、延迟点火、上游隔离、下游残余释放和热暴露。结合PRISM热剂量/probit函数与SALib直接模型Sobol分析，导出原始样本、收敛诊断、哈希和离线仪表板。仪表板只读，需修改JSON并重新运行CLI；单一物质与情景的条件影响并非年设施风险或实验验证。

### [ammonia-supply-risk](https://github.com/lyullee/ammonia-supply-risk)

用于氨供应系统的Python筛查工具：比较10种材料的不确定损伤代理值，应用材料/焊接/环境/检查乘数，并将一次初始事件频率分配到互斥保护路径。七项输出的Sobol数据是归档摘要，API不重新计算。材料排名不是实测年泄漏率，也不是完整的氨扩散、后果或设施QRA模型。

### [psa-dyna](https://github.com/lyullee/psa-dyna)

PSA-Dyna是一维非等温多组分PSA/VPSA动态模型，包含有限体积床层、Ergun流动、竞争吸附/LDF动力学、气固壁能量、可压缩阀、多床多步骤及检查点/CSS。Wang单床穿透曲线的图级比较通过了声明门槛，但不验证循环VPSA或工业设计。DWSIM平均FEED/PRODUCT/TAIL接口已实现，自动放行仍关闭。

### [process-monitoring-toolkit](https://github.com/lyullee/process-monitoring-toolkit)

将过程信号转化为异常分数、故障证据和监测事件的模块化Python框架。规则、统计、机器学习、时序/图神经模型和CoolProp残差共享信号契约、独立校准、有效性掩码与报警策略。公开记录区分72种配置、117项本地测试和31次探索基准；异常不等于根因、事故频率或跨工厂有效性。

### [human-reliability-toolkit](https://github.com/lyullee/human-reliability-toolkit)

连接任务情境、人因证据、错误/响应时间和过程风险的Python模型。包含任务DAG、贝叶斯计数更新、SPAR-H/HEART/CREAM/IDHEAS参考、恢复/依赖及FTA/ETA。七个数值来源的1,334条记录含观测计数、方法组件与乘数，并非1,334次独立测量。SACADA来自核电培训模拟器，不证明化工现场HEP或年度错误频率。

0.5.0新增现场采集表、独立任务分母核对、冻结HEP预测评估及12项运行扩展。5,617次临床样本机会是单独的成功/不符合汇总，不属于工业人误测量或既有目录；保留不利的时间校准结果。

### [api581-risk-analysis](https://github.com/lyullee/api581-risk-analysis)

独立编写的非官方API-RP-581风险检验Python实现，发行名api581-engine、导入名api581。类型化计算覆盖损伤、频率、检验、释放、后果、风险和规划，附可选SLABx及独立API 520工具。509项注册和861条源章节记录体现软件验证，并非第三方认证。无API背书，标准原文不分发；原创内容为Apache-2.0。

### [adm1-tea-lca](https://github.com/lyullee/adm1-tea-lca)

保存草青贮/牛粪浆生物甲烷ADM1研究的可执行记录。连接34状态积分、重建TEA、部分温室气体核算及有限网格/Pareto、稳健性和敏感性分析。五项轻量测试和小型演示不等于实验验证或完整历史重现；环境输出并非完整LCA或已验证产品足迹，肥料抵扣可能被高估。

### [process-risk-consequence-toolkit](https://github.com/lyullee/process-risk-consequence-toolkit)

独立编写的后果筛查与重气研究工具。23项类型化计算覆盖源项、被动扩散、火灾/爆炸、暴露和条件风险，提供Python/CLI/可选HTTP及证据收据。SLABx历程与等温、固定宽度、垂直混合的一维耦合层是独立路径。基础包0.1.0已在PyPI发布，上游记录包含新环境安装检查；可选SLABx 1.0.8仍未上架，dense不能仅靠PyPI安装。原创内容为Apache-2.0，无CCPS/AIChE背书或现场认证。

### [saga-py](https://github.com/lyullee/saga-py)

面向韩国燃气标准、法规和HAZOP的Python/FastAPI知识助手。支持独立文档对话、韩英操作、证据校验及数字孪生对话/选定传感器接口。基于文档的回答需要合法本地语料及服务密钥，不控制真实设备。

### [saga-sts](https://github.com/lyullee/saga-sts)

独立保存的早期Java 21/Spring Boot版SAGA。整合Tika、Lucene/Nori、pgvector、Spring AI和Ollama进行文档检索与HAZOP/LPG分析。不含私有文档或索引；其运行环境与API不能直接替代SAGA-PY。

### [slabx](https://github.com/lyullee/slabx)

SLAB重气扩散模型的Python重实现，支持蒸发池、水平/上升射流、瞬时释放及羽流到烟团转换。可选液滴、地面传热和真实流体扩展与原版复现路径分离。记录了Fortran比较及38个现场/风洞试验评估；部分观测数据须另行获取。

### [slabx-lh2](https://github.com/lyullee/slabx-lh2)

在SLABx核心上增加液氢源项物理和适用性诊断，处理低温相变、地面相互作用、浮力路径及水三相点以下热物性。论文配置采用7个FFI试验的210条记录，需要独立研究流程和输入，并非210次独立实验。

### [degadisx](https://github.com/lyullee/degadisx)

保留EPA DEGADIS 2.1原有热力学和数值路径的Python实现。支持稳态/瞬态地面释放、加压射流、输入文件及SourceLedger交接。拒绝未解析液相比例，不包含DEGALI的液氢研究扩展。

### [degali](https://github.com/lyullee/degali)

基于DEGADIS兼容路径研究液氢闪蒸、浮力、空气凝结/冻结和地面作用。分开记录EPA/Fortran及PRESLHY、FFI/DNV评估中的峰值与时间平均结果。属于Alpha研究软件，3D/障碍物扩展具有闭合和收敛限制，不代表现场或监管资格。

### [lh2poolx](https://github.com/lyullee/lh2poolx)

计算指定时间窗内准稳态液氢池的蒸发源项。可输入释放量、压力和声明沉积比例，或观测池面范围；包括闪蒸、地面导热及临界热通量限制。不预测未知撞击范围、沉积比例或瞬态液体库存。

### [DynamicLH2PoolX](https://github.com/lyullee/DynamicLH2PoolX)

根据已到达水平面的DeclaredInflow历程计算轴对称液层铺展、蒸发、液体库存和质量守恒。有限Stage C范围内记录了守恒/网格检查及JUEL/HSE比较。不涵盖射流撞击、坡面、障碍物或大气扩散，也未声称复现HSE完整胀缩轨迹。

### [pifira](https://github.com/lyullee/pifira)

根据LPG储罐升压与壁温反演热输入、有效火焰接触面积和热通量。另提供液氢正仲氢热力学、组分筛查、文献动力学和HEOS喷嘴工具。列明验证原始出处与比较限制，不再分发实验数据。

### [lh2-psv-tno-risk](https://github.com/lyullee/lh2-psv-tno-risk)

连接液氢储罐自增压、PSV开闭与排放、闪蒸/出口热状态及TNO火灾和扩散指标的研究档案。提供结果读取、条件风险面积、路径分类和图形重建。不是完整上游储罐/TNO求解器或经认证的PSV设计工具。

### [hydrogen-local-energetics](https://github.com/lyullee/hydrogen-local-energetics)

局域氢能量学与晶格控制迁移率的复现档案。包含32对Quantum ESPRESSO输入输出、MACE-OMat-0/CHGNet数组、分析、赝势及校验和。无需外部模型权重即可重绘图形，但专用CHGNet NEB生成脚本未保存。

### [qsafety-qae](https://github.com/lyullee/qsafety-qae)

对有限混合安全/可靠性概率比较精确加权计算、Monte Carlo和理想最大似然QAE。提供NumPy核心、CSV/CLI、Qiskit/Grover/Aer验证和可选IBM运行。相同预言机查询预算下的理想结果不代表硬件量子优势。

### [psa-qae-resource-audit](https://github.com/lyullee/psa-qae-resource-audit)

将压力一致的氢PSA/膜分离与再生储备连接到概率事件和量子资源审计。包含公开留出实验、积分器/DWSIM交叉检查及10位算术预言机资源。IBM七量子位的两位缩减事件覆盖64个基态输入，并非相干QAE或完整算术电路；最终集成装置实验仍待开展。

### [nbcp-magnetocaloric-quantum-spectral-flow](https://github.com/lyullee/nbcp-magnetocaloric-quantum-spectral-flow)

研究Na₂BaCo(PO₄)₂的相互作用、样品形状和模型不确定性对亚开尔文制冷决策的影响。结合公开数据、N=12/N=18有限簇及Python/Octave检查，再测试量子谱流方法。IBM六量子位测试通过熵修正符号判定，但未通过定量幅值判定，不声称体相解或量子优势。

## 联系与研究使用

**主要邮箱: [lyullee@gmail.com](mailto:lyullee@gmail.com)** · 备用邮箱: [lyullee@kgs.or.kr](mailto:lyullee@kgs.or.kr) · [Google Scholar](https://scholar.google.com/citations?user=WZn0QQwAAAAJ)

欢迎就科研合作、氢安全建模和科学软件联系我。使用前请查阅各仓库的许可证、引用信息/DOI、数据政策与验证范围。本简介不对安全相关结果作独立认证。
