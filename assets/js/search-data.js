// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "dropdown-projects",
              title: "Projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/";
              },
            },{id: "dropdown-publications",
              title: "Publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/publications/";
              },
            },{id: "dropdown-notes",
              title: "Notes",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/notes/";
              },
            },{id: "dropdown-科研项目",
              title: "科研项目",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/";
              },
            },{id: "dropdown-论文发表",
              title: "论文发表",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/publications/";
              },
            },{id: "dropdown-过程思考",
              title: "过程思考",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/notes/";
              },
            },{id: "dropdown-applied-projects",
              title: "Applied Projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/#applied";
              },
            },{id: "dropdown-awards",
              title: "Awards",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/awards/";
              },
            },{id: "dropdown-updates",
              title: "Updates",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/comp-news/";
              },
            },{id: "dropdown-应用项目",
              title: "应用项目",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/#applied";
              },
            },{id: "dropdown-获得奖项",
              title: "获得奖项",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/awards/";
              },
            },{id: "dropdown-比赛动态",
              title: "比赛动态",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/comp-news/";
              },
            },{id: "dropdown-news",
              title: "News",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/life-news/";
              },
            },{id: "dropdown-bookshelf",
              title: "Bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-opinions",
              title: "Opinions",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/opinions/";
              },
            },{id: "dropdown-动态",
              title: "动态",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/life-news/";
              },
            },{id: "dropdown-书架",
              title: "书架",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-观点",
              title: "观点",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/opinions/";
              },
            },{id: "post-dual-bound-search-中-lb-数值收紧与-opt-的脱耦",
        
          title: "Dual-Bound Search 中 LB 数值收紧与 #opt 的脱耦",
        
        description: "在 ECAI 2025 基线 Dual-Deep / Dual-Fast 上插入 Ant-Q 后，relative gap 普遍下降 23.7%–31.2% (Deep)，但 #opt 与 #min 几乎不动。这一现象不是 bug，而来自 Dual-Bound Search 框架中 LB 与 UB 之间唯一的耦合通道：硬证明规则。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/lb-ub-coupling-mwds/";
          
        },
      },{id: "post-从代数几何到-maxsat-求解-研究兴趣转向的若干背景",
        
          title: "从代数几何到 MaxSAT 求解：研究兴趣转向的若干背景",
        
        description: "记录一段研究兴趣的转向过程：从最初的代数几何 / Galois cohomology 偏好，到目前的组合优化与 MaxSAT 求解。这种转向并非取代关系，而是观察到 closed system 与 open system 在研究反馈结构上的不同后所做的方向调整。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/why-i-switched-from-pure-math-to-maxsat/";
          
        },
      },{id: "post-在结构规则的-mwds-实例上-ant-q-探索带来的负迁移",
        
          title: "在结构规则的 MWDS 实例上 Ant-Q 探索带来的负迁移",
        
        description: "Ant-Q 在大多数 MWDS 实例上能改善贪心 LB 排序的质量，但在 unit disk graph 一类几何规则的实例上，引入探索反而扰动了贪心已经接近最优的序，导致 #opt 与 gap 的双重退化。本文形式化讨论这一负迁移的来源，并给出 phase-aware 关闭策略的设计。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/antq-v1-uniform-rl-not-free-lunch/";
          
        },
      },{id: "post-diversesat-作为-source-problem-从-bmc-与冗余路径设计的两个归约",
        
          title: "DiverseSAT 作为 source problem：从 BMC 与冗余路径设计的两个归约",
        
        description: "Diverse SAT 不是 enumeration 的另一种形式，而是若干下游应用的统一上游问题。本文从 bounded model checking 与冗余 s-t 路径设计两个例子，说明把它表述为 &#39;k 个最大化差异的满足解&#39; 而非 &#39;k 个 SAT 解&#39; 的必要性。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/diversity-as-a-source-problem/";
          
        },
      },{id: "post-pairef-auto-的-lp-公式拒绝一个已知公平的-allocation-lemma-2-在-partial-access-下的过度收紧",
        
          title: "PairEF-auto 的 LP 公式拒绝一个已知公平的 allocation：Lemma 2 在 partial-access 下的过度收紧",
        
        description: "在多资源公平分配的 meta-type 设定下，由 Lemma 2 推出的线性 EF 充分条件，会拒绝一个 DRF-MT 自身产生的 envy-free 分配。本文形式化地说明这一现象，并讨论替代的 cutting-plane 方案。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/unb-mt-why-lemma-2-is-too-loose/";
          
        },
      },{id: "post-bin-encoding-中负数变量与-partial-product-的一个被忽略的细节",
        
          title: "BIN encoding 中负数变量与 partial-product 的一个被忽略的细节",
        
        description: "把整数变量按二进制位编入 SAT 时，partial-product 形式的乘法在变量取值有负下界时不能直接使用。本文说明这一问题在 QPLIB 一类 instance 上的具体表现，并给出基于 Booth recoding 的修正。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/nlip-encoding-first-mistake/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-handbook-of-satisfiability-2nd-edition",
          title: 'Handbook of Satisfiability (2nd Edition)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/handbook_of_satisfiability/";
            },},{id: "books-combinatorial-optimization-polyhedra-and-efficiency",
          title: 'Combinatorial Optimization — Polyhedra and Efficiency',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/combinatorial_optimization/";
            },},{id: "news-目前已累计-12-项竞赛奖项-包括全国大学生计算机能力挑战赛一等奖-华教杯全国大学生数学竞赛一等奖-以及-acm-icpc-区域赛铜牌等",
          title: '目前已累计 12 项竞赛奖项，包括全国大学生计算机能力挑战赛一等奖、华教杯全国大学生数学竞赛一等奖，以及 ACM-ICPC 区域赛铜牌等。',
          description: "",
          section: "News",},{id: "news-完成-nlip-maxsat-benchmark-过滤管线-覆盖-qplib-nl-smt-lib-csplib-xcsp-五个来源库-得到-137-个-qplib-实例与-2591-个-smt-lib-实例-作为后续编码评测的主数据集",
          title: '完成 NLIP → MaxSAT benchmark 过滤管线，覆盖 QPLIB、NL、SMT-LIB、CSPlib、XCSP 五个来源库，得到 137 个 QPLIB 实例与 2591...',
          description: "",
          section: "News",},{id: "news-开始整理-unb-mt-在-drf-mt-ijcai-2021-的-meta-type-设定下-打破每轮统一-y-的限制-并考察这种差异化是否能在保持核心公平性约束的同时提升社会福利",
          title: '开始整理 UNB-MT：在 DRF-MT (IJCAI 2021) 的 meta-type 设定下，打破每轮统一 $y$ 的限制，并考察这种差异化是否能在保持核心公平性约束的同时提升社会福利。',
          description: "",
          section: "News",},{id: "news-diversesat-的期刊版正在准备投稿-jair-新增实验覆盖-7-个-benchmark-家族-289-个-instance-并系统比较-dw-iw-两类编码与三种搜索策略",
          title: 'DiverseSAT 的期刊版正在准备投稿 JAIR。新增实验覆盖 7 个 benchmark 家族、289 个 instance，并系统比较 DW / IW 两类编码与三种搜索策略。...',
          description: "",
          section: "News",},{id: "news-mwds-项目阶段性更新-在-ecai-2025-baseline-上接入-ant-q-插件后-deep-v6-在两套测试集上的-row-averaged-lb-gap-下降-23-7-31-2-fast-v19-下降-6-9-9-9-项目记录见-antqo-for-mwds",
          title: 'MWDS 项目阶段性更新：在 ECAI 2025 baseline 上接入 Ant-Q 插件后，Deep-v6 在两套测试集上的 row-averaged LB-gap 下降 23.7%–31.2%，Fast-v19...',
          description: "",
          section: "News",},{id: "projects-antqo-for-mwds",
          title: 'AntQO for MWDS',
          description: "在 Dual-Bound Search 框架的下界端引入轻量 Ant-Q 模块，收紧 MWDS 的 LB",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_mwds/";
            },},{id: "projects-diversesat",
          title: 'DiverseSAT',
          description: "通过阈值编码寻找 $k$ 个差异最大化的 SAT 满足解",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_diversesat/";
            },},{id: "projects-nlip-via-maxsat",
          title: 'NLIP via MaxSAT',
          description: "把非线性整数规划编码到加权 MaxSAT",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_nlip/";
            },},{id: "projects-unb-mt",
          title: 'UNB-MT',
          description: "在 DRF-MT 之上以 meta-type 维度差异化 dominant share 的扩展机制",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_fairmt/";
            },},{id: "projects-mathrag",
          title: 'MathRAG',
          description: "检索增强的分步数学问题求解系统",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_mathrag/";
            },},{id: "projects-昆明咖啡外卖市场",
          title: '昆明咖啡外卖市场',
          description: "三平台竞争格局下新入局商户的生存策略（美团 / 饿了么 / 京东秒送）",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_meituan/";
            },},{id: "projects-正念冥想-可穿戴",
          title: '正念冥想 × 可穿戴',
          description: "用 EEG 可穿戴设备量化正念冥想对大学生心理健康的干预效果",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_mindfulness/";
            },},{id: "projects-供应链最小费用流",
          title: '供应链最小费用流',
          description: "用最小费用网络流做供需分配",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_mincostflow/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6C%7A%6C@%6D%61%69%6C.%79%6E%75.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ZhenglingYangli", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
