import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, BadgeCheck, CalendarClock, ClipboardList, Factory, Leaf, ShieldCheck, UserCheck, UsersRound } from 'lucide-react';
import './styles.css';

const auditStats = [
  ['128', '全年累计客户审核'],
  ['96.8%', '客户审核通过率'],
  ['342', '问题项累计关闭'],
  ['17', '高风险事项跟踪'],
];

const publisherFields = [
  ['缺失项描述', '客户来访发现 EHS 培训签到记录与现场人员名单不一致，部分新进员工缺少最近一次 CSR/COC 培训证明。'],
  ['客户 COC 条款', 'Labor & Human Rights / Training and Communication / Supplier Responsibility Standard'],
  ['问题等级', 'Core Violation'],
  ['责任人 DRI', 'EHS 负责人 · 张伟'],
  ['整改完成日期', '2026-07-30'],
];

const csrCards = [
  {
    title: '人权与劳工权益',
    text: '覆盖工作时间、薪酬福利、自由择业、反歧视与员工沟通机制。',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1500&q=85',
  },
  {
    title: '环境管理',
    text: '跟踪能源、水资源、废弃物、排放与改善项目，支持年度目标闭环。',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1500&q=85',
  },
  {
    title: '职业健康安全',
    text: '识别生产现场风险，推动隐患整改、培训记录和应急演练数字化。',
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1500&q=85',
  },
  {
    title: '供应商管理体系',
    text: '沉淀客户准则、审核资料、整改证据和跨部门协同进度。',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1500&q=85',
  },
];

function App() {
  return (
    <main>
      <section className="hero" id="home">
        <video className="heroVideo" autoPlay muted loop playsInline>
          <source src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        <div className="techBackdrop" />
        <div className="heroShade" />
        <nav className="nav shell">
          <a className="brand" href="#home">立臻责任供应链</a>
          <div className="navLinks" aria-label="主导航">
            <a href="#visit">来访缺失</a>
            <a href="#audit">审核数据</a>
            <a href="#csr">CSR 管理</a>
          </div>
          <a className="yearPill" href="#audit">2026 年度总览</a>
        </nav>
        <div className="heroCenter shell">
          <p>Corporate Social Responsibility</p>
          <h1>以人为本 合规运行</h1>
          <h2>让立臻的每次审核都有据可循，让责任、环境与人权承诺贯穿供应链日常。</h2>
        </div>
        <div className="heroCaption shell">
          <span>Human Rights</span>
          <span>Environmental Stewardship</span>
          <span>Responsible Supply Chain</span>
        </div>
      </section>

      <section className="visitSection panelSection" id="visit">
        <div className="shell splitLayout">
          <div className="sectionCopy">
            <p className="kicker">CUSTOMER VISIT</p>
            <h2>客户来访缺失项目</h2>
            <p>
              集中管理客户来访期间发现的缺失项、责任部门、整改证据与关闭时效，让每一次接待后的改善都有清晰路径。
            </p>
          </div>
          <a className="visitPortal" href="#visit-finding" aria-label="进入客户来访缺失项目看板">
            <div className="portalTop">
              <ClipboardList size={34} strokeWidth={1.5} />
              <span>进入看板</span>
            </div>
            <strong>Visit Finding Tracker</strong>
            <p>24 个待关闭项目 · 7 个高优先级 · 平均关闭周期 12 天</p>
            <div className="portalFooter">
              <span>点击跳转</span>
              <ArrowRight size={26} strokeWidth={1.4} />
            </div>
          </a>
        </div>
      </section>

      <section className="findingSection" id="visit-finding">
        <div className="shell">
          <div className="sectionHeader findingHeader">
            <div>
              <p className="kicker">VISIT FINDING TRACKER</p>
              <h2>客户来访缺失项目处理</h2>
            </div>
            <p>发布者定义问题边界与客户条款，责任单位提交原因分析、改善措施和预防措施，形成可追踪的闭环记录。</p>
          </div>
          <div className="findingGrid">
            <article className="workspaceCard publisherPanel">
              <div className="workspaceTitle">
                <ClipboardList size={30} strokeWidth={1.5} />
                <div>
                  <span>Publisher Console</span>
                  <h3>发布者后台</h3>
                </div>
              </div>
              <div className="fieldStack">
                {publisherFields.map(([label, value]) => (
                  <div className="fieldRow" key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
              <div className="statusLine">
                <span className="severityTag">Core Violation</span>
                <span>待责任单位提交 RCA / CA / PA</span>
              </div>
            </article>

            <article className="workspaceCard ownerPanel">
              <div className="workspaceTitle">
                <UserCheck size={30} strokeWidth={1.5} />
                <div>
                  <span>Responsible Unit</span>
                  <h3>责任单位界面</h3>
                </div>
              </div>
              <div className="ownerSummary">
                <div><span>责任 DRI</span><strong>EHS 负责人 · 张伟</strong></div>
                <div><span>完成日期</span><strong>2026-07-30</strong></div>
                <div><span>问题等级</span><strong>Core Violation</strong></div>
              </div>
              <label className="textAreaField">
                <span>根本原因分析</span>
                <textarea placeholder="请输入根本原因，例如：培训资料同步机制缺失、跨部门入职信息传递不及时..." />
              </label>
              <label className="textAreaField">
                <span>改善措施</span>
                <textarea placeholder="请输入立即改善措施，例如：补齐培训记录、重新组织未覆盖人员培训、上传证据..." />
              </label>
              <label className="textAreaField">
                <span>预防措施</span>
                <textarea placeholder="请输入长期预防措施，例如：建立月度名单校验、系统提醒、责任人复核机制..." />
              </label>
              <div className="formActions">
                <button type="button">保存草稿</button>
                <button type="button" className="primaryAction">提交整改</button>
              </div>
            </article>
          </div>
          <div className="timelineStrip">
            <div><BadgeCheck size={22} /><span>问题发布</span></div>
            <div><UserCheck size={22} /><span>责任单位分析</span></div>
            <div><CalendarClock size={22} /><span>整改到期跟踪</span></div>
            <div><ShieldCheck size={22} /><span>证据复核关闭</span></div>
          </div>
        </div>
      </section>

      <section className="auditSection panelSection" id="audit">
        <div className="shell">
          <div className="sectionHeader">
            <div>
              <p className="kicker">AUDIT PERFORMANCE</p>
              <h2>全年客户审核概览</h2>
            </div>
            <p>以数据监控客户审核频次、通过率和问题关闭质量，支持管理层快速判断 CSR 风险趋势。</p>
          </div>
          <div className="metricGrid">
            {auditStats.map(([value, label]) => (
              <article className="metricCard" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </article>
            ))}
          </div>
          <div className="auditInsight">
            <div>
              <BadgeCheck size={34} strokeWidth={1.4} />
              <h3>审核表现稳定</h3>
              <p>关键客户审核通过率维持在高位，问题项关闭节奏可追踪，高风险事项纳入专项复盘。</p>
            </div>
            <div className="progressStack">
              <span style={{ width: '96.8%' }}>通过率 96.8%</span>
              <span style={{ width: '78%' }}>准时关闭率 78%</span>
              <span style={{ width: '64%' }}>预防措施完成率 64%</span>
            </div>
          </div>
        </div>
      </section>

      <section className="csrSection" id="csr">
        <div className="shell">
          <div className="sectionHeader csrHeader">
            <div>
              <p className="kicker">CSR MANAGEMENT</p>
              <h2>CSR 合规管理</h2>
            </div>
            <p>围绕人员、环境、安全与供应链责任，建立可展示、可追踪、可复盘的管理内容。</p>
          </div>
          <div className="csrGrid">
            {csrCards.map((card, index) => (
              <article className={`csrCard card${index + 1}`} key={card.title}>
                <img src={card.image} alt={card.title} />
                <div className="cardOverlay">
                  {index === 0 && <UsersRound size={28} strokeWidth={1.5} />}
                  {index === 1 && <Leaf size={28} strokeWidth={1.5} />}
                  {index === 2 && <ShieldCheck size={28} strokeWidth={1.5} />}
                  {index === 3 && <Factory size={28} strokeWidth={1.5} />}
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
