import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, AtSign, Bot, Layers3, Mail, MapPin, PenTool, Sparkles } from 'lucide-react';
import './styles.css';

const projects = [
  {
    title: 'AI Fashion Identity System',
    type: 'AI Visual / Brand Direction',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1800&q=85',
  },
  {
    title: 'Future Lab Campaign',
    type: 'Visual Campaign / Key Visual',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1800&q=85',
  },
  {
    title: 'Minimal Tech Brand Refresh',
    type: 'Brand Identity / System Design',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1800&q=85',
  },
];

const strengths = [
  {
    icon: PenTool,
    title: '视觉系统设计',
    text: '从品牌气质、版式秩序到视觉资产延展，建立稳定且可持续复用的设计语言。',
  },
  {
    icon: Bot,
    title: 'AI 创意工作流',
    text: '将 AI 图像生成、概念推演与后期精修融入项目流程，提升探索效率和画面完成度。',
  },
  {
    icon: Layers3,
    title: '品牌策略落地',
    text: '把抽象定位转译为标识、色彩、材质、传播画面和线上体验中的一致表达。',
  },
  {
    icon: Sparkles,
    title: '高级感画面控制',
    text: '擅长暗色体系、克制构图、光影层次和科技质感，兼顾审美判断与商业可用性。',
  },
];

const stats = [
  ['06+', '年设计经验'],
  ['40+', '商业项目'],
  ['12+', '品牌系统'],
  ['AI', '设计工作流'],
];

function App() {
  return (
    <main>
      <section className="hero" id="home">
        <video
          className="heroVideo"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&w=2200&q=85"
        >
          <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
        <div className="grain" />
        <nav className="nav shell">
          <a className="brand" href="#home">DESIGNER</a>
          <div className="navLinks" aria-label="主导航">
            <a href="#about">经历</a>
            <a href="#work">项目</a>
            <a href="#strength">优势</a>
            <a href="#contact">联系</a>
          </div>
          <a className="contactButton" href="mailto:hello@example.com">
            联系我
            <ArrowUpRight size={18} strokeWidth={1.8} />
          </a>
        </nav>
        <div className="heroContent shell">
          <p className="eyebrow">VISUAL DESIGNER / AI DESIGNER / BRAND DESIGNER</p>
          <h1>用克制的视觉秩序，构建面向未来的品牌体验。</h1>
          <div className="heroMeta">
            <span>Shanghai / Remote</span>
            <span>Brand Identity</span>
            <span>AI Visual System</span>
          </div>
        </div>
      </section>

      <section className="about shell section" id="about">
        <div className="portraitWrap">
          <img
            className="portrait"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85"
            alt="设计师肖像"
          />
        </div>
        <div className="aboutText">
          <p className="sectionKicker">PROFILE</p>
          <h2>视觉设计师，专注品牌系统、AI 视觉与高级感商业画面。</h2>
          <p>
            我将品牌策略、视觉美学与 AI 创意流程结合，擅长为科技、时尚、生活方式和新消费品牌建立具有识别度的视觉表达。
            目前这版内容为基础占位，后续可根据你的真实简历替换经历、数据、客户类型和项目描述。
          </p>
          <div className="infoGrid">
            <a href="mailto:hello@example.com"><Mail size={18} /> hello@example.com</a>
            <a href="https://www.behance.net/" target="_blank" rel="noreferrer"><AtSign size={18} /> Behance / Portfolio</a>
            <span><MapPin size={18} /> China / Global Remote</span>
          </div>
          <div className="stats">
            {stats.map(([value, label]) => (
              <div className="stat" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell" id="work">
        <div className="sectionHeader">
          <p className="sectionKicker">SELECTED WORK</p>
          <h2>精选项目</h2>
        </div>
        <div className="projectGrid">
          {projects.map((project) => (
            <article className="projectCard" key={project.title}>
              <img src={project.image} alt={project.title} />
              <div className="projectOverlay">
                <span>{project.type}</span>
                <h3>{project.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell" id="strength">
        <div className="sectionHeader">
          <p className="sectionKicker">CAPABILITY</p>
          <h2>个人优势</h2>
        </div>
        <div className="strengthGrid">
          {strengths.map(({ icon: Icon, title, text }) => (
            <article className="strengthCard" key={title}>
              <Icon size={30} strokeWidth={1.4} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contactFinal" id="contact">
        <div className="shell contactInner">
          <p className="sectionKicker">CONTACT</p>
          <h2>期待与你一起创造更具识别度的视觉系统。</h2>
          <a className="bigMail" href="mailto:hello@example.com">
            hello@example.com
            <ArrowUpRight size={36} strokeWidth={1.4} />
          </a>
          <div className="footerLine">
            <span>Available for brand identity, AI visual, campaign design.</span>
            <span>© 2026 Portfolio</span>
          </div>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
