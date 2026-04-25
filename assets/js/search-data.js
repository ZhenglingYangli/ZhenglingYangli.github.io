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
            },{id: "post-lb-紧了-30-opt-却没动-我才明白指标不是同质的",
        
          title: "LB 紧了 30%，#opt 却没动 —— 我才明白指标不是同质的",
        
        description: "AntQO 在 ECAI-2025 基线上的一个困惑：把 Ant-Q 插进 LB 端之后，relative gap 一路下跌（Deep 上 −23.7% 至 −31.2%），但 #opt / #min 却几乎不动。一开始我以为是 bug，后来才意识到这是 Dual-Bound Search 框架的结构性属性。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/lb-ub-coupling-mwds/";
          
        },
      },{id: "post-为什么我从纯数学转向了-maxsat-求解",
        
          title: "为什么我从纯数学转向了 MaxSAT 求解",
        
        description: "本科第一年我一直以为我会做几何 / 数论。一年后我决定把研究主线挪到 SAT/MaxSAT 上。这是我对自己的一份解释。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/why-i-switched-from-pure-math-to-maxsat/";
          
        },
      },{id: "post-antqo-v1-我以为-rl-加了稳赚不赔-结果在-udg-上掉了点",
        
          title: "AntQO v1：我以为 RL 加了稳赚不赔，结果在 UDG 上掉了点",
        
        description: "Ant-Q 在大多数 MWDS 实例上都能找到比贪心更好的下界。但在 UDG（unit disk graph）这种结构很规则的实例上，探索反而把好序列扰乱掉了。这个负结果让我学会了一件事：探索是有成本的。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/antq-v1-uniform-rl-not-free-lunch/";
          
        },
      },{id: "post-diversesat-不是奇怪的-toy-但我花了一年才能这么讲",
        
          title: "DiverseSAT 不是奇怪的 toy —— 但我花了一年才能这么讲",
        
        description: "曾经一个 reviewer 写：&#39;k 个最大化差异的满足解，这是一个真问题吗？&#39;当时我觉得他没读懂；后来我意识到他读得很懂，是我没把动机讲清楚。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/diversity-as-a-source-problem/";
          
        },
      },{id: "post-我花了一个月相信一个-lemma-是对的-最后是它把我害了",
        
          title: "我花了一个月相信一个 Lemma 是对的，最后是它把我害了",
        
        description: "PairEF-auto 的死亡复盘：当一个已知公平的 published allocation 违反我自己的充分条件时，错的几乎一定是我，不是 published 的算法。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/unb-mt-why-lemma-2-is-too-loose/";
          
        },
      },{id: "post-我交给老师的第一份-nlip-编码方案是错的-关于-unsigned-vs-signed-的本科生-1a-错误",
        
          title: "我交给老师的第一份 NLIP 编码方案是错的（关于 unsigned vs signed 的本科生 1A 错误）",
        
        description: "把 x*y 编进 SAT 听起来很简单：把变量按二进制位拼起来做 partial-product，再 carry。我是这么写的，第一个 instance 就给出了错答案。",
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
            },},{id: "news-12-competition-awards-accumulated-so-far-including-1st-prizes-at-the-national-collegiate-computer-challenge-nat-l-gold-huajiao-cup-math-modeling-nat-l-gold-and-a-bronze-medal-at-acm-icpc-regional",
          title: '12 competition awards accumulated so far, including 1st prizes at the National Collegiate...',
          description: "",
          section: "News",},{id: "news-built-the-nlip-maxsat-benchmark-filter-pipeline-covering-five-source-libraries-qplib-nl-smt-lib-csplib-xcsp-producing-a-clean-benchmark-of-137-qplib-and-2591-smt-lib-instances-for-systematic-evaluation",
          title: 'Built the NLIP → MaxSAT benchmark filter pipeline covering five source libraries (QPLIB,...',
          description: "",
          section: "News",},{id: "news-started-working-on-unb-mt-an-extension-of-drf-mt-ijcai-2021-that-breaks-the-within-round-y-uniformity-of-dominant-resource-fairness-under-meta-types",
          title: 'Started working on UNB-MT, an extension of DRF-MT (IJCAI 2021) that breaks the...',
          description: "",
          section: "News",},{id: "news-the-diversesat-journal-submission-is-now-under-preparation-for-jair-new-experiments-cover-289-instances-across-7-families-with-dw-iw-encodings-and-three-search-strategies",
          title: 'The DiverseSAT journal submission is now under preparation for JAIR. New experiments cover...',
          description: "",
          section: "News",},{id: "news-latest-milestone-on-the-mwds-project-deep-v6-and-fast-v19-ant-q-plug-ins-on-the-ecai-2025-baselines-reduce-the-row-averaged-lb-gap-by-23-7-31-2-on-deep-and-6-9-9-9-on-fast-across-two-test-suites-report-here",
          title: 'Latest milestone on the MWDS project: Deep-v6 and Fast-v19 (Ant-Q plug-ins on the...',
          description: "",
          section: "News",},{id: "projects-ant-q-for-mwds",
          title: 'Ant-Q for MWDS',
          description: "用一个轻量的 Ant-Q（ACO + Q-Learning）插件，收紧 Dual-Bound Search 在 MWDS 上的下界",
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
            },},{id: "projects-unb-mt-在-drf-mt-之上",
          title: 'UNB-MT —— 在 DRF-MT 之上',
          description: "多资源公平分配中按组差异化提升社会福利的尝试",
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
