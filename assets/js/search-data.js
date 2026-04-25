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
                window.location.href = "/zh/projects/";
              },
            },{id: "dropdown-论文发表",
              title: "论文发表",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/zh/publications/";
              },
            },{id: "dropdown-过程思考",
              title: "过程思考",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/zh/notes/";
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
                window.location.href = "/zh/projects/#applied";
              },
            },{id: "dropdown-获得奖项",
              title: "获得奖项",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/zh/awards/";
              },
            },{id: "dropdown-比赛动态",
              title: "比赛动态",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/zh/comp-news/";
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
                window.location.href = "/zh/life-news/";
              },
            },{id: "dropdown-书架",
              title: "书架",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/zh/books/";
              },
            },{id: "dropdown-观点",
              title: "观点",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/zh/opinions/";
              },
            },{id: "post-why-tightening-the-lower-bound-did-not-shrink-opt-on-mwds",
        
          title: "Why tightening the lower bound did not shrink #opt on MWDS",
        
        description: "A phenomenon-driven analysis of the LB → UB coupling bottleneck in Dual-Bound Search, using the Ant-Q plug-in as the lens.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/lb-ub-coupling-mwds/";
          
        },
      },{id: "post-diversity-as-a-source-problem-two-applications-that-need-k-diverse-sat-models",
        
          title: "Diversity as a source problem: two applications that need $k$ diverse SAT models...",
        
        description: "Why finding $k$ maximally different satisfying assignments is not a toy. Two concrete applications from bounded model checking and robust network design.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/diversity-as-a-source-problem/";
          
        },
      },{id: "post-why-a-linear-ef-sufficient-condition-is-too-loose-under-partial-access",
        
          title: "Why a linear EF sufficient condition is too loose under partial access",
        
        description: "An honest post-mortem of PairEF-auto. DRF-MT&#39;s own allocation — the 23× y-ratio with zero envy — violates our LP-based EF constraints.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/unb-mt-why-lemma-2-is-too-loose/";
          
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
          description: "A Lightweight Ant-Colony + Q-Learning Plug-in that Tightens Lower Bounds in Dual-Bound Search",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_mwds/";
            },},{id: "projects-diversesat",
          title: 'DiverseSAT',
          description: "Finding $k$ Maximally Diverse Satisfying Assignments via Threshold Encodings",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_diversesat/";
            },},{id: "projects-nlip-via-maxsat",
          title: 'NLIP via MaxSAT',
          description: "Encoding Non-linear Integer Programs into Weighted MaxSAT",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_nlip/";
            },},{id: "projects-unb-mt-beyond-drf-mt",
          title: 'UNB-MT — Beyond DRF-MT',
          description: "Group-Level Differentiation for Fair and Efficient Multi-Resource Allocation under Meta-Type Accessibility",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_fairmt/";
            },},{id: "projects-mathrag",
          title: 'MathRAG',
          description: "Retrieval-Augmented Step-wise Mathematical Problem Solving",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_mathrag/";
            },},{id: "projects-kunming-coffee-delivery-market",
          title: 'Kunming Coffee-Delivery Market',
          description: "Survival Strategies for New Entrants under a Tri-Platform Competitive Landscape (Meituan / Ele.me / JD Miaosong)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_meituan/";
            },},{id: "projects-mindfulness-wearables",
          title: 'Mindfulness × Wearables',
          description: "Quantifying the Effect of Mindfulness Meditation on College Student Mental Health via EEG Wearables",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_mindfulness/";
            },},{id: "projects-min-cost-flow-for-supply-chain",
          title: 'Min-Cost Flow for Supply Chain',
          description: "Graph-theoretic Supply-Demand Allocation Using Minimum-Cost Network Flow",
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
