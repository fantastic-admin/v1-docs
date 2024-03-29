import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.a70be969.js";const h=JSON.parse('{"title":"主题","description":"","frontmatter":{},"headers":[],"relativePath":"guide/theme.md","filePath":"guide/theme.md"}'),p={name:"guide/theme.md"},o=l(`<h1 id="主题" tabindex="-1">主题 <a class="header-anchor" href="#主题" aria-label="Permalink to &quot;主题&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">注意</p><p>专业版整体重构了主题的实现方式，阅读时请区分。</p></div><h2 id="基础版" tabindex="-1">基础版 <a class="header-anchor" href="#基础版" aria-label="Permalink to &quot;基础版&quot;">​</a></h2><p>基础版只提供一套主题，但可自行修改关键颜色变量，实现主题自定义，相关代码在 <code>/src/assets/styles/resources/variables.scss</code> 里。</p><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 应用背景色</span></span>
<span class="line"><span style="color:#FFAB70;">$g-app-bg</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#fff</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 主区域背景色</span></span>
<span class="line"><span style="color:#FFAB70;">$g-main-bg</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#f5f7f9</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 头部背景色</span></span>
<span class="line"><span style="color:#FFAB70;">$g-header-bg</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#736477</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 头部导航文字颜色</span></span>
<span class="line"><span style="color:#FFAB70;">$g-header-menu-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#fff</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 头部导航选中颜色</span></span>
<span class="line"><span style="color:#FFAB70;">$g-header-menu-active-bg</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">lighten</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">$g-header-bg</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 主侧边栏背景色</span></span>
<span class="line"><span style="color:#FFAB70;">$g-main-sidebar-bg</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#736477</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 主侧边栏文字颜色</span></span>
<span class="line"><span style="color:#FFAB70;">$g-main-sidebar-menu-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#fff</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 主侧边栏菜单选中背景色</span></span>
<span class="line"><span style="color:#FFAB70;">$g-main-sidebar-menu-active-bg</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">lighten</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">$g-main-sidebar-bg</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 次侧边栏背景色</span></span>
<span class="line"><span style="color:#FFAB70;">$g-sub-sidebar-bg</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#ddcdcd</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 次侧边栏菜单文字颜色</span></span>
<span class="line"><span style="color:#FFAB70;">$g-sub-sidebar-menu-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#89768f</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 次侧边栏菜单文字选中颜色</span></span>
<span class="line"><span style="color:#FFAB70;">$g-sub-sidebar-menu-active-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">darken</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">$g-sub-sidebar-menu-color</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// 次侧边栏菜单选中背景色</span></span>
<span class="line"><span style="color:#FFAB70;">$g-sub-sidebar-menu-active-bg</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#b5a5a5</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 应用背景色</span></span>
<span class="line"><span style="color:#E36209;">$g-app-bg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#fff</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 主区域背景色</span></span>
<span class="line"><span style="color:#E36209;">$g-main-bg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#f5f7f9</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 头部背景色</span></span>
<span class="line"><span style="color:#E36209;">$g-header-bg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#736477</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 头部导航文字颜色</span></span>
<span class="line"><span style="color:#E36209;">$g-header-menu-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#fff</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 头部导航选中颜色</span></span>
<span class="line"><span style="color:#E36209;">$g-header-menu-active-bg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">lighten</span><span style="color:#24292E;">(</span><span style="color:#E36209;">$g-header-bg</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 主侧边栏背景色</span></span>
<span class="line"><span style="color:#E36209;">$g-main-sidebar-bg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#736477</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 主侧边栏文字颜色</span></span>
<span class="line"><span style="color:#E36209;">$g-main-sidebar-menu-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#fff</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 主侧边栏菜单选中背景色</span></span>
<span class="line"><span style="color:#E36209;">$g-main-sidebar-menu-active-bg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">lighten</span><span style="color:#24292E;">(</span><span style="color:#E36209;">$g-main-sidebar-bg</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 次侧边栏背景色</span></span>
<span class="line"><span style="color:#E36209;">$g-sub-sidebar-bg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#ddcdcd</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 次侧边栏菜单文字颜色</span></span>
<span class="line"><span style="color:#E36209;">$g-sub-sidebar-menu-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#89768f</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 次侧边栏菜单文字选中颜色</span></span>
<span class="line"><span style="color:#E36209;">$g-sub-sidebar-menu-active-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">darken</span><span style="color:#24292E;">(</span><span style="color:#E36209;">$g-sub-sidebar-menu-color</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// 次侧边栏菜单选中背景色</span></span>
<span class="line"><span style="color:#E36209;">$g-sub-sidebar-menu-active-bg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#b5a5a5</span><span style="color:#24292E;">;</span></span></code></pre></div><p>该文件里你还可对布局的宽高进行调整。</p><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 头部宽度（默认自适应宽度，可固定宽度，固定宽度后为居中显示）</span></span>
<span class="line"><span style="color:#FFAB70;">$g-header-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 头部高度</span></span>
<span class="line"><span style="color:#FFAB70;">$g-header-height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">70</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 面包屑高度（同时也是侧边栏Logo区域的高度）</span></span>
<span class="line"><span style="color:#FFAB70;">$g-breadcrumb-height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">50</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 侧边栏宽度</span></span>
<span class="line"><span style="color:#FFAB70;">$g-main-sidebar-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">60</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#FFAB70;">$g-sub-sidebar-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">220</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#FFAB70;">$g-sidebar-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--real-sidebar-width</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 头部宽度（默认自适应宽度，可固定宽度，固定宽度后为居中显示）</span></span>
<span class="line"><span style="color:#E36209;">$g-header-width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 头部高度</span></span>
<span class="line"><span style="color:#E36209;">$g-header-height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">70</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 面包屑高度（同时也是侧边栏Logo区域的高度）</span></span>
<span class="line"><span style="color:#E36209;">$g-breadcrumb-height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">50</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 侧边栏宽度</span></span>
<span class="line"><span style="color:#E36209;">$g-main-sidebar-width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">60</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#E36209;">$g-sub-sidebar-width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">220</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#E36209;">$g-sidebar-width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--real-sidebar-width</span><span style="color:#24292E;">);</span></span></code></pre></div><h2 id="专业版" tabindex="-1">专业版 <a class="header-anchor" href="#专业版" aria-label="Permalink to &quot;专业版&quot;">​</a></h2><p>框架提供了 5 款主题，在配置文件中就可轻松切换。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 主题，默认提供 5 款</span></span>
<span class="line"><span style="color:#6A737D;"> * default 默认</span></span>
<span class="line"><span style="color:#6A737D;"> * vue-cli Vue CLI 风格</span></span>
<span class="line"><span style="color:#6A737D;"> * gitee 码云风格</span></span>
<span class="line"><span style="color:#6A737D;"> * freshness 清新</span></span>
<span class="line"><span style="color:#6A737D;"> * elegant 素雅</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#B392F0;">theme</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;default&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 主题，默认提供 5 款</span></span>
<span class="line"><span style="color:#6A737D;"> * default 默认</span></span>
<span class="line"><span style="color:#6A737D;"> * vue-cli Vue CLI 风格</span></span>
<span class="line"><span style="color:#6A737D;"> * gitee 码云风格</span></span>
<span class="line"><span style="color:#6A737D;"> * freshness 清新</span></span>
<span class="line"><span style="color:#6A737D;"> * elegant 素雅</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6F42C1;">theme</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;default&#39;</span></span></code></pre></div><p>如果框架提供的主题风格满足不了你的需求，你还可以自定义新的主题，和基础版不同的是，专业版主题相关代码在 <code>/src/assets/styles/resources/themes.scss</code> 里。由于代码比较多，下面只截取部分。</p><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#FFAB70;">$themes</span><span style="color:#E1E4E8;">: (</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">default</span><span style="color:#E1E4E8;">: (</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 主区域背景色</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">g-main-bg</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#f0f2f5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 【头部】</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 头部背景色</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">g-header-bg</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#222b45</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 头部导航文字颜色</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">g-header-menu-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#ccc</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 头部导航文字选中颜色</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">g-header-menu-active-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#fff</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 头部导航选中背景色</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">g-header-menu-active-bg</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#334067</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        ...</span></span>
<span class="line"><span style="color:#E1E4E8;">    ),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">vue-cli</span><span style="color:#E1E4E8;">: (</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 主区域背景色</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">g-main-bg</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#f0f2f5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 【头部】</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 头部背景色</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">g-header-bg</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#1d2935</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 头部导航文字颜色</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">g-header-menu-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#fff</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 头部导航文字选中颜色</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">g-header-menu-active-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#42b983</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 头部导航选中背景色</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">g-header-menu-active-bg</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#1f3039</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        ...</span></span>
<span class="line"><span style="color:#E1E4E8;">    ),</span></span>
<span class="line"><span style="color:#E1E4E8;">    ...</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#E36209;">$themes</span><span style="color:#24292E;">: (</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">default</span><span style="color:#24292E;">: (</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 主区域背景色</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">g-main-bg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#f0f2f5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 【头部】</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 头部背景色</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">g-header-bg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#222b45</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 头部导航文字颜色</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">g-header-menu-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#ccc</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 头部导航文字选中颜色</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">g-header-menu-active-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#fff</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 头部导航选中背景色</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">g-header-menu-active-bg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#334067</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        ...</span></span>
<span class="line"><span style="color:#24292E;">    ),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">vue-cli</span><span style="color:#24292E;">: (</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 主区域背景色</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">g-main-bg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#f0f2f5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 【头部】</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 头部背景色</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">g-header-bg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#1d2935</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 头部导航文字颜色</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">g-header-menu-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#fff</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 头部导航文字选中颜色</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">g-header-menu-active-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#42b983</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 头部导航选中背景色</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">g-header-menu-active-bg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#1f3039</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        ...</span></span>
<span class="line"><span style="color:#24292E;">    ),</span></span>
<span class="line"><span style="color:#24292E;">    ...</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">...</span></span></code></pre></div><p>可以看到，所有主题都存放在 <code>$themes</code> 这个变量里，所以如果想创建一个新主题，你可以按照 <code>default</code> 复制一份，其中 <code>new-theme</code> 就是主题的名称，里面主题的配色可以自行修改。</p><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#FFAB70;">$themes</span><span style="color:#E1E4E8;">: (</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">default</span><span style="color:#E1E4E8;">: (</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 主区域背景色</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">g-main-bg</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#f0f2f5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 【头部】</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 头部背景色</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">g-header-bg</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#222b45</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 头部导航文字颜色</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">g-header-menu-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#ccc</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 头部导航文字选中颜色</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">g-header-menu-active-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#fff</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 头部导航选中背景色</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">g-header-menu-active-bg</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#334067</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        ...</span></span>
<span class="line"><span style="color:#E1E4E8;">    ),</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">new-theme</span><span style="color:#E1E4E8;">: (</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 主区域背景色</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">g-main-bg</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#f0f2f5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 【头部】</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 头部背景色</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">g-header-bg</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#1d2935</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 头部导航文字颜色</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">g-header-menu-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#fff</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 头部导航文字选中颜色</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">g-header-menu-active-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#42b983</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 头部导航选中背景色</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">g-header-menu-active-bg</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#1f3039</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        ...</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    ),</span></span>
<span class="line"><span style="color:#E1E4E8;">    ...</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#E36209;">$themes</span><span style="color:#24292E;">: (</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">default</span><span style="color:#24292E;">: (</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 主区域背景色</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">g-main-bg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#f0f2f5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 【头部】</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 头部背景色</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">g-header-bg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#222b45</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 头部导航文字颜色</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">g-header-menu-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#ccc</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 头部导航文字选中颜色</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">g-header-menu-active-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#fff</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 头部导航选中背景色</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">g-header-menu-active-bg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#334067</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        ...</span></span>
<span class="line"><span style="color:#24292E;">    ),</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#005CC5;">new-theme</span><span style="color:#24292E;">: (</span></span>
<span class="line highlighted"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 主区域背景色</span></span>
<span class="line highlighted"><span style="color:#24292E;">        </span><span style="color:#005CC5;">g-main-bg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#f0f2f5</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 【头部】</span></span>
<span class="line highlighted"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 头部背景色</span></span>
<span class="line highlighted"><span style="color:#24292E;">        </span><span style="color:#005CC5;">g-header-bg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#1d2935</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 头部导航文字颜色</span></span>
<span class="line highlighted"><span style="color:#24292E;">        </span><span style="color:#005CC5;">g-header-menu-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#fff</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 头部导航文字选中颜色</span></span>
<span class="line highlighted"><span style="color:#24292E;">        </span><span style="color:#005CC5;">g-header-menu-active-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#42b983</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 头部导航选中背景色</span></span>
<span class="line highlighted"><span style="color:#24292E;">        </span><span style="color:#005CC5;">g-header-menu-active-bg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#1f3039</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">        ...</span></span>
<span class="line highlighted"><span style="color:#24292E;">    ),</span></span>
<span class="line"><span style="color:#24292E;">    ...</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre></div><p>布局相关的部分宽高变量存放在 <code>/src/assets/styles/resources/layout.scss</code> 文件中。</p><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 这是一个复合变量</span></span>
<span class="line"><span style="color:#6A737D;">// 当布局设置为 adaption-min-width 时，它代表 最小宽度</span></span>
<span class="line"><span style="color:#6A737D;">// 当布局设置为 center 时，它代表 固定宽度</span></span>
<span class="line"><span style="color:#6A737D;">// 当布局设置为 center-max-width 时，它代表 最大宽度</span></span>
<span class="line"><span style="color:#FFAB70;">$g-app-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1400</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 头部宽度（默认自适应宽度，可固定宽度，固定宽度后为居中显示）</span></span>
<span class="line"><span style="color:#FFAB70;">$g-header-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 头部高度</span></span>
<span class="line"><span style="color:#FFAB70;">$g-header-height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">70</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 面包屑高度（同时也是侧边栏Logo区域的高度）</span></span>
<span class="line"><span style="color:#FFAB70;">$g-breadcrumb-height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">50</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 标签栏高度</span></span>
<span class="line"><span style="color:#FFAB70;">$g-tabbar-height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">40</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 侧边栏宽度</span></span>
<span class="line"><span style="color:#FFAB70;">$g-main-sidebar-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">60</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#FFAB70;">$g-sub-sidebar-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">220</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 这是一个复合变量</span></span>
<span class="line"><span style="color:#6A737D;">// 当布局设置为 adaption-min-width 时，它代表 最小宽度</span></span>
<span class="line"><span style="color:#6A737D;">// 当布局设置为 center 时，它代表 固定宽度</span></span>
<span class="line"><span style="color:#6A737D;">// 当布局设置为 center-max-width 时，它代表 最大宽度</span></span>
<span class="line"><span style="color:#E36209;">$g-app-width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1400</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 头部宽度（默认自适应宽度，可固定宽度，固定宽度后为居中显示）</span></span>
<span class="line"><span style="color:#E36209;">$g-header-width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 头部高度</span></span>
<span class="line"><span style="color:#E36209;">$g-header-height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">70</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 面包屑高度（同时也是侧边栏Logo区域的高度）</span></span>
<span class="line"><span style="color:#E36209;">$g-breadcrumb-height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">50</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 标签栏高度</span></span>
<span class="line"><span style="color:#E36209;">$g-tabbar-height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">40</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 侧边栏宽度</span></span>
<span class="line"><span style="color:#E36209;">$g-main-sidebar-width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">60</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#E36209;">$g-sub-sidebar-width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">220</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span></code></pre></div>`,16),e=[o];function c(t,r,y,E,i,d){return n(),a("div",null,e)}const F=s(p,[["render",c]]);export{h as __pageData,F as default};
