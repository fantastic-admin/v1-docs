import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.a70be969.js";const l="/v1-docs/basic-layout-default.png",o="/v1-docs/basic-layout-header.png",e="/v1-docs/basic-layout-without-main-sidebar.png",t="/v1-docs/layout_1.gif",c="/v1-docs/layout_2.gif",r="/v1-docs/layout_3.gif",i="/v1-docs/layout_4.gif",A=JSON.parse('{"title":"布局","description":"","frontmatter":{},"headers":[],"relativePath":"guide/layout.md","filePath":"guide/layout.md"}'),E={name:"guide/layout.md"},d=p('<h1 id="布局" tabindex="-1">布局 <a class="header-anchor" href="#布局" aria-label="Permalink to &quot;布局&quot;">​</a></h1><p>通过两处设置可实现 3 套不同的页面布局，分别是<strong>双侧边栏布局</strong>、<strong>单侧边栏布局</strong>、<strong>头部导航布局</strong>。</p><h2 id="双侧边栏布局" tabindex="-1">双侧边栏布局 <a class="header-anchor" href="#双侧边栏布局" aria-label="Permalink to &quot;双侧边栏布局&quot;">​</a></h2><p>项目默认显示<strong>双侧边栏布局</strong>，即区分主导航和次导航，展示效果如下：</p><p><img src="'+l+'" alt=""></p><h2 id="头部导航布局" tabindex="-1">头部导航布局 <a class="header-anchor" href="#头部导航布局" aria-label="Permalink to &quot;头部导航布局&quot;">​</a></h2><p><strong>头部导航布局</strong>只需在 <code>/src/setting.js</code> 设置 <code>showHeader: true</code> 即可，展示效果如下：</p><p><img src="'+o+`" alt=""></p><h2 id="单侧边栏布局" tabindex="-1">单侧边栏布局 <a class="header-anchor" href="#单侧边栏布局" aria-label="Permalink to &quot;单侧边栏布局&quot;">​</a></h2><p>如果要调整为<strong>单侧边栏布局</strong>，则需要到 <code>/src/router/index.js</code> 路由配置文件里找到下面这段代码，并注释掉高亮部分代码。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 当 children 不为空的主导航只有一项时，则隐藏</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> asyncRoutes </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            title: </span><span style="color:#9ECBFF;">&#39;默认&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            icon: </span><span style="color:#9ECBFF;">&#39;sidebar-default&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            MultilevelMenuExample,</span></span>
<span class="line"><span style="color:#E1E4E8;">            BreadcrumbExample,</span></span>
<span class="line"><span style="color:#E1E4E8;">            KeepAliveExample,</span></span>
<span class="line"><span style="color:#E1E4E8;">            ComponentExample,</span></span>
<span class="line"><span style="color:#E1E4E8;">            PermissionExample</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            title: </span><span style="color:#9ECBFF;">&#39;其它&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            icon: </span><span style="color:#9ECBFF;">&#39;sidebar-other&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        children: [</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// ExTernalLinkExample</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 当 children 不为空的主导航只有一项时，则隐藏</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> asyncRoutes </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        meta: {</span></span>
<span class="line"><span style="color:#24292E;">            title: </span><span style="color:#032F62;">&#39;默认&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            icon: </span><span style="color:#032F62;">&#39;sidebar-default&#39;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        children: [</span></span>
<span class="line"><span style="color:#24292E;">            MultilevelMenuExample,</span></span>
<span class="line"><span style="color:#24292E;">            BreadcrumbExample,</span></span>
<span class="line"><span style="color:#24292E;">            KeepAliveExample,</span></span>
<span class="line"><span style="color:#24292E;">            ComponentExample,</span></span>
<span class="line"><span style="color:#24292E;">            PermissionExample</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        meta: {</span></span>
<span class="line"><span style="color:#24292E;">            title: </span><span style="color:#032F62;">&#39;其它&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            icon: </span><span style="color:#032F62;">&#39;sidebar-other&#39;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        children: [</span></span>
<span class="line highlighted"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// ExTernalLinkExample</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><p>展示效果如下：</p><p><img src="`+e+`" alt=""></p><p><strong>单侧边栏布局</strong>其实就是去掉了主导航，当只有一个主导航，或者其它主导航下面都没有次导航的时候，布局就自动切换为<strong>单侧边栏布局</strong>。这种布局适合在功能模块不多的中小型后台系统使用。</p><div class="tip custom-block"><p class="custom-block-title">注意</p><p>同时设置<strong>单侧边栏布局</strong>和<strong>头部导航布局</strong>，在头部区域也不会展示主导航内容。</p></div><h2 id="移动端" tabindex="-1">移动端 <a class="header-anchor" href="#移动端" aria-label="Permalink to &quot;移动端&quot;">​</a></h2><p>本框架兼容移动端，但由于后台系统在开发时可能会引用各类第三方插件，这部分的兼容性需要开发者自行适配。</p><p>当页面宽度小于 <code>992px</code> 时会切换为移动端布局显示，移动端下不支持设置框架布局，以及部分不支持移动端的操作按钮也会进行隐藏，例如“全屏”按钮。</p><div class="tip custom-block"><p class="custom-block-title">建议</p><p>由于后台系统属于生产效率工具，而移动端天生不适合复杂的操作，尤其是遇到一些比较复杂的表单，在移动端上操作是极其“恼火”的。</p><p>依据作者的开发经验，建议移动端后台可以独立开发一套，在功能上进行删减，保留轻量级的管理操作。</p></div><h2 id="扩展" tabindex="-1">扩展 <sup class="pro-badge"></sup> <a class="header-anchor" href="#扩展" aria-label="Permalink to &quot;扩展 &lt;sup class=&quot;pro-badge&quot; /&gt;&quot;">​</a></h2><p>在基础版 3 套页面布局的基础上，专业版扩展了另一维度的 4 套布局，分别是<strong>自适应</strong>、<strong>自适应（有最小宽度）</strong>、<strong>定宽居中</strong>、<strong>定宽居中（有最大宽度）</strong>，可在配置文件中轻松设置。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 布局类型，当设置为非 adaption 时，请去 ./src/assets/styles/resources/layout.scss 里设置 $g-app-width</span></span>
<span class="line"><span style="color:#6A737D;"> * adaption 自适应</span></span>
<span class="line"><span style="color:#6A737D;"> * adaption-min-width 自适应（有最小宽度）</span></span>
<span class="line"><span style="color:#6A737D;"> * center 定宽居中</span></span>
<span class="line"><span style="color:#6A737D;"> * center-max-width 定宽居中（有最大宽度）</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#B392F0;">layout</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;adaption&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 布局类型，当设置为非 adaption 时，请去 ./src/assets/styles/resources/layout.scss 里设置 $g-app-width</span></span>
<span class="line"><span style="color:#6A737D;"> * adaption 自适应</span></span>
<span class="line"><span style="color:#6A737D;"> * adaption-min-width 自适应（有最小宽度）</span></span>
<span class="line"><span style="color:#6A737D;"> * center 定宽居中</span></span>
<span class="line"><span style="color:#6A737D;"> * center-max-width 定宽居中（有最大宽度）</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6F42C1;">layout</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;adaption&#39;</span></span></code></pre></div><p>下面简单演示这 4 套布局的特点（图片平均大小为 2M ，加载可能需要点时间）。</p><p><strong>自适应</strong></p><p><img src="`+t+'" alt=""></p><p><strong>自适应（有最小宽度）</strong></p><p><img src="'+c+'" alt=""></p><p><strong>定宽居中</strong></p><p><img src="'+r+'" alt=""></p><p><strong>定宽居中（有最大宽度）</strong></p><p><img src="'+i+'" alt=""></p><p>将扩展的 4 套布局和基础版原有的 3 套布局进行组合搭配，可实现 12 套布局，如果再搭配默认提供的 5 款主题，<strong>即可实现 60 种界面风格</strong>。</p>',32),y=[d];function g(h,u,m,_,b,v){return a(),n("div",null,y)}const k=s(E,[["render",g]]);export{A as __pageData,k as default};
