import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.a70be969.js";const p="/v1-docs/breadcrumb1.gif",o="/v1-docs/breadcrumb2.gif",e="/v1-docs/router.png",m=JSON.parse('{"title":"路由","description":"","frontmatter":{},"headers":[],"relativePath":"guide/router.md","filePath":"guide/router.md"}'),t={name:"guide/router.md"},c=l(`<h1 id="路由" tabindex="-1">路由 <a class="header-anchor" href="#路由" aria-label="Permalink to &quot;路由&quot;">​</a></h1><h2 id="配置项" tabindex="-1">配置项 <a class="header-anchor" href="#配置项" aria-label="Permalink to &quot;配置项&quot;">​</a></h2><p>框架的核心是通过路由自动生成对应导航，所以除了路由的基本配置，还需要了解框架提供了哪些配置项，其中<strong>高亮部分为专业版扩充配置项</strong>，基础版不具备该特性：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 所有的导航配置项均放在路由的 meta 对象中</span></span>
<span class="line"><span style="color:#B392F0;">meta</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 该路由在侧边栏导航和面包屑导航中展示的标题</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;新闻列表&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// 国际化 key ，如果设置的 key 不存在则以显示 title</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">i18n</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 侧边栏导航中显示的图标，图标使用 &lt;svg-icon /&gt; 组件展示</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 专业版支持使用 ElementUI Icon 和 RemixIcon ，如下：</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// icon: &#39;el-icon-star-on&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// icon: &#39;ri-star-fill&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">icon</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;news&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// 侧边栏导航中激活时显示的图标，图标使用 &lt;svg-icon /&gt; 组件展示</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 支持使用 ElementUI Icon 和 RemixIcon ，如下：</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// activeIcon: &#39;el-icon-star-on&#39;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// activeIcon: &#39;ri-star-fill&#39;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">activeIcon</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 该路由进入的权限，支持多个权限叠加，只要满足一个，即可进入</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果用户没有该权限，则该路由不会在侧边栏导航中展示</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">auth</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;news.browse&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;news.edit&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 该路由是否在侧边栏导航中展示，如编辑页面 /edit/:id ，默认为 true</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">sidebar</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 该路由是否在面包屑导航中展示，默认为 true</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">breadcrumb</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 当路由设置了该属性，则会高亮相对应的侧边栏，一般会搭配 sidebar: false 一起使用</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 例如从新闻列表进入新闻详情页，由于新闻详情页路由不在侧边栏导航中展示，这时你如果想高亮新闻列表的路由，就可以进行如下设置</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">activeMenu</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;/news/list&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 导航标记，支持 boolean,number,string 三种类型</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// boolean 类型展示形式为点，当值为 false 时隐藏</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// number 类型展示形式为文本，当值小于等于 0 时隐藏</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// string 类型展示形式为文本，当值为空时隐藏</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果标记需要动态更新，请设置为函数形式，并传入外部变量，例如搭配 vuex 一起使用</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// badge: () =&gt; store.state.global.number</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">badge</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 内嵌网页链接，如果要开启内嵌网页，component 需要设置为框架提供的 layoue/iframe.vue</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">link</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 该路由是否显示底部版权信息，比全局设置里的 showCopyright 优先级高，不设置则继承全局里的设置</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">copyright</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 该路由是否需要空出距离底部距离，默认无需设置</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 当使用类似 FixedActionBar 这类通过 position: fixed 固定在底部的组件或 DOM 时，需要手动设置，目的是为了防止页面底部可能被遮挡</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">paddingBottom</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;80px&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 所有的导航配置项均放在路由的 meta 对象中</span></span>
<span class="line"><span style="color:#6F42C1;">meta</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 该路由在侧边栏导航和面包屑导航中展示的标题</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;新闻列表&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// 国际化 key ，如果设置的 key 不存在则以显示 title</span></span>
<span class="line highlighted"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">i18n</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 侧边栏导航中显示的图标，图标使用 &lt;svg-icon /&gt; 组件展示</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 专业版支持使用 ElementUI Icon 和 RemixIcon ，如下：</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// icon: &#39;el-icon-star-on&#39;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// icon: &#39;ri-star-fill&#39;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">icon</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;news&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// 侧边栏导航中激活时显示的图标，图标使用 &lt;svg-icon /&gt; 组件展示</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 支持使用 ElementUI Icon 和 RemixIcon ，如下：</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// activeIcon: &#39;el-icon-star-on&#39;</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// activeIcon: &#39;ri-star-fill&#39;</span></span>
<span class="line highlighted"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">activeIcon</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 该路由进入的权限，支持多个权限叠加，只要满足一个，即可进入</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果用户没有该权限，则该路由不会在侧边栏导航中展示</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">auth</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&#39;news.browse&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;news.edit&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 该路由是否在侧边栏导航中展示，如编辑页面 /edit/:id ，默认为 true</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">sidebar</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 该路由是否在面包屑导航中展示，默认为 true</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">breadcrumb</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 当路由设置了该属性，则会高亮相对应的侧边栏，一般会搭配 sidebar: false 一起使用</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 例如从新闻列表进入新闻详情页，由于新闻详情页路由不在侧边栏导航中展示，这时你如果想高亮新闻列表的路由，就可以进行如下设置</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">activeMenu</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;/news/list&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 导航标记，支持 boolean,number,string 三种类型</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// boolean 类型展示形式为点，当值为 false 时隐藏</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// number 类型展示形式为文本，当值小于等于 0 时隐藏</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// string 类型展示形式为文本，当值为空时隐藏</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果标记需要动态更新，请设置为函数形式，并传入外部变量，例如搭配 vuex 一起使用</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// badge: () =&gt; store.state.global.number</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">badge</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 内嵌网页链接，如果要开启内嵌网页，component 需要设置为框架提供的 layoue/iframe.vue</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">link</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 该路由是否显示底部版权信息，比全局设置里的 showCopyright 优先级高，不设置则继承全局里的设置</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">copyright</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 该路由是否需要空出距离底部距离，默认无需设置</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 当使用类似 FixedActionBar 这类通过 position: fixed 固定在底部的组件或 DOM 时，需要手动设置，目的是为了防止页面底部可能被遮挡</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">paddingBottom</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;80px&#39;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Layout </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/layout&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    path: </span><span style="color:#9ECBFF;">&#39;/banner&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    component: Layout,</span></span>
<span class="line"><span style="color:#E1E4E8;">    redirect: </span><span style="color:#9ECBFF;">&#39;/banner/list&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;banner&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&#39;Banner 管理&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        icon: </span><span style="color:#9ECBFF;">&#39;banner&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        auth: [</span><span style="color:#9ECBFF;">&#39;banner.browse&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            path: </span><span style="color:#9ECBFF;">&#39;detail&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            name: </span><span style="color:#9ECBFF;">&#39;bannerCreate&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#6A737D;">/* webpackChunkName: &#39;banner&#39; */</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/views/banner/detail&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">            meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&#39;新增 Banner&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                auth: [</span><span style="color:#9ECBFF;">&#39;banner.create&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            path: </span><span style="color:#9ECBFF;">&#39;list&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            name: </span><span style="color:#9ECBFF;">&#39;bannerList&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#6A737D;">/* webpackChunkName: &#39;banner&#39; */</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/views/banner/list&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">            meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&#39;Banner 列表&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                auth: [</span><span style="color:#9ECBFF;">&#39;banner.browse&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            path: </span><span style="color:#9ECBFF;">&#39;detail/:id&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            name: </span><span style="color:#9ECBFF;">&#39;bannerEdit&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#6A737D;">/* webpackChunkName: &#39;banner&#39; */</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/views/banner/detail&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">            meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&#39;编辑 Banner&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                auth: [</span><span style="color:#9ECBFF;">&#39;banner.edit&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">                sidebar: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                activeMenu: </span><span style="color:#9ECBFF;">&#39;/banner/list&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Layout </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/layout&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    path: </span><span style="color:#032F62;">&#39;/banner&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    component: Layout,</span></span>
<span class="line"><span style="color:#24292E;">    redirect: </span><span style="color:#032F62;">&#39;/banner/list&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;banner&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    meta: {</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&#39;Banner 管理&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        icon: </span><span style="color:#032F62;">&#39;banner&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        auth: [</span><span style="color:#032F62;">&#39;banner.browse&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    children: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            path: </span><span style="color:#032F62;">&#39;detail&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            name: </span><span style="color:#032F62;">&#39;bannerCreate&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">import</span><span style="color:#24292E;">(</span><span style="color:#6A737D;">/* webpackChunkName: &#39;banner&#39; */</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/views/banner/detail&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">            meta: {</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&#39;新增 Banner&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                auth: [</span><span style="color:#032F62;">&#39;banner.create&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            path: </span><span style="color:#032F62;">&#39;list&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            name: </span><span style="color:#032F62;">&#39;bannerList&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">import</span><span style="color:#24292E;">(</span><span style="color:#6A737D;">/* webpackChunkName: &#39;banner&#39; */</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/views/banner/list&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">            meta: {</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&#39;Banner 列表&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                auth: [</span><span style="color:#032F62;">&#39;banner.browse&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            path: </span><span style="color:#032F62;">&#39;detail/:id&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            name: </span><span style="color:#032F62;">&#39;bannerEdit&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">import</span><span style="color:#24292E;">(</span><span style="color:#6A737D;">/* webpackChunkName: &#39;banner&#39; */</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/views/banner/detail&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">            meta: {</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&#39;编辑 Banner&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                auth: [</span><span style="color:#032F62;">&#39;banner.edit&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">                sidebar: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                activeMenu: </span><span style="color:#032F62;">&#39;/banner/list&#39;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>展示效果如下：</p><p><img src="`+p+'" alt=""></p><h2 id="小技巧" tabindex="-1">小技巧 <a class="header-anchor" href="#小技巧" aria-label="Permalink to &quot;小技巧&quot;">​</a></h2><p>客户总是有自己的想法，例如我司就曾遇到过这样的需求，在不改变侧边栏导航结构的前提下，面包屑导航希望能变成这样：</p><p><img src="'+o+`" alt=""></p><p>其实根据图中的效果，可以确定路由需要有三层，剩下就是通过配置项去控制侧边栏导航和面包屑导航是否展示。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Layout </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/layout&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> EmptyLayout </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/layout/empty&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    path: </span><span style="color:#9ECBFF;">&#39;/banner&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    component: Layout,</span></span>
<span class="line"><span style="color:#E1E4E8;">    redirect: </span><span style="color:#9ECBFF;">&#39;/banner/list&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;banner&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&#39;Banner 管理&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        icon: </span><span style="color:#9ECBFF;">&#39;banner&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        auth: [</span><span style="color:#9ECBFF;">&#39;banner.browse&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            path: </span><span style="color:#9ECBFF;">&#39;detail&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            redirect: </span><span style="color:#9ECBFF;">&#39;/banner/list/detail&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&#39;新增 Banner&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                auth: [</span><span style="color:#9ECBFF;">&#39;banner.create&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            path: </span><span style="color:#9ECBFF;">&#39;list&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            name: </span><span style="color:#9ECBFF;">&#39;bannerList&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            component: EmptyLayout,</span></span>
<span class="line"><span style="color:#E1E4E8;">            redirect: </span><span style="color:#9ECBFF;">&#39;/banner/list&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&#39;Banner 列表&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                auth: [</span><span style="color:#9ECBFF;">&#39;banner.browse&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    path: </span><span style="color:#9ECBFF;">&#39;detail&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    name: </span><span style="color:#9ECBFF;">&#39;bannerCreate&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#6A737D;">/* webpackChunkName: &#39;banner&#39; */</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/views/banner/detail&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">                    meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        title: </span><span style="color:#9ECBFF;">&#39;新增 Banner&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        auth: [</span><span style="color:#9ECBFF;">&#39;banner.create&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">                        sidebar: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        activeMenu: </span><span style="color:#9ECBFF;">&#39;/banner/detail&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    }</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    path: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    name: </span><span style="color:#9ECBFF;">&#39;bannerList&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#6A737D;">/* webpackChunkName: &#39;banner&#39; */</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/views/banner/list&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">                    meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        title: </span><span style="color:#9ECBFF;">&#39;Banner 列表&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        auth: [</span><span style="color:#9ECBFF;">&#39;banner.browse&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">                        sidebar: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        breadcrumb: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">                    }</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    path: </span><span style="color:#9ECBFF;">&#39;detail/:id&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    name: </span><span style="color:#9ECBFF;">&#39;bannerEdit&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#6A737D;">/* webpackChunkName: &#39;banner&#39; */</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/views/banner/detail&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">                    meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        title: </span><span style="color:#9ECBFF;">&#39;编辑 Banner&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        auth: [</span><span style="color:#9ECBFF;">&#39;banner.edit&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">                        sidebar: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        activeMenu: </span><span style="color:#9ECBFF;">&#39;/banner/list&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    }</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            ]</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Layout </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/layout&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> EmptyLayout </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/layout/empty&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    path: </span><span style="color:#032F62;">&#39;/banner&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    component: Layout,</span></span>
<span class="line"><span style="color:#24292E;">    redirect: </span><span style="color:#032F62;">&#39;/banner/list&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;banner&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    meta: {</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&#39;Banner 管理&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        icon: </span><span style="color:#032F62;">&#39;banner&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        auth: [</span><span style="color:#032F62;">&#39;banner.browse&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    children: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            path: </span><span style="color:#032F62;">&#39;detail&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            redirect: </span><span style="color:#032F62;">&#39;/banner/list/detail&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            meta: {</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&#39;新增 Banner&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                auth: [</span><span style="color:#032F62;">&#39;banner.create&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            path: </span><span style="color:#032F62;">&#39;list&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            name: </span><span style="color:#032F62;">&#39;bannerList&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            component: EmptyLayout,</span></span>
<span class="line"><span style="color:#24292E;">            redirect: </span><span style="color:#032F62;">&#39;/banner/list&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            meta: {</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&#39;Banner 列表&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                auth: [</span><span style="color:#032F62;">&#39;banner.browse&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            children: [</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    path: </span><span style="color:#032F62;">&#39;detail&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    name: </span><span style="color:#032F62;">&#39;bannerCreate&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">import</span><span style="color:#24292E;">(</span><span style="color:#6A737D;">/* webpackChunkName: &#39;banner&#39; */</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/views/banner/detail&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">                    meta: {</span></span>
<span class="line"><span style="color:#24292E;">                        title: </span><span style="color:#032F62;">&#39;新增 Banner&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        auth: [</span><span style="color:#032F62;">&#39;banner.create&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">                        sidebar: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        activeMenu: </span><span style="color:#032F62;">&#39;/banner/detail&#39;</span></span>
<span class="line"><span style="color:#24292E;">                    }</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    path: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    name: </span><span style="color:#032F62;">&#39;bannerList&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">import</span><span style="color:#24292E;">(</span><span style="color:#6A737D;">/* webpackChunkName: &#39;banner&#39; */</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/views/banner/list&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">                    meta: {</span></span>
<span class="line"><span style="color:#24292E;">                        title: </span><span style="color:#032F62;">&#39;Banner 列表&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        auth: [</span><span style="color:#032F62;">&#39;banner.browse&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">                        sidebar: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        breadcrumb: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">                    }</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    path: </span><span style="color:#032F62;">&#39;detail/:id&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    name: </span><span style="color:#032F62;">&#39;bannerEdit&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">import</span><span style="color:#24292E;">(</span><span style="color:#6A737D;">/* webpackChunkName: &#39;banner&#39; */</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/views/banner/detail&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">                    meta: {</span></span>
<span class="line"><span style="color:#24292E;">                        title: </span><span style="color:#032F62;">&#39;编辑 Banner&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        auth: [</span><span style="color:#032F62;">&#39;banner.edit&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">                        sidebar: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        activeMenu: </span><span style="color:#032F62;">&#39;/banner/list&#39;</span></span>
<span class="line"><span style="color:#24292E;">                    }</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            ]</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="嵌套路由" tabindex="-1">嵌套路由 <a class="header-anchor" href="#嵌套路由" aria-label="Permalink to &quot;嵌套路由&quot;">​</a></h2><p>上面的扩展例子里，引用了一个 <code>EmptyLayout</code> 组件，查看代码可以看到这是一个空白的 layout 页面。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">RouterView</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">RouterView</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>为什么需要这个呢？因为嵌套路由生成出来的导航栏目也是嵌套结构的，但导航栏目里的模块页面一般是不需要嵌套的，所以除了顶级路由需要设置 <code>component: Layout</code> ，嵌套有 <code>children</code> 属性的子项路由，均可设置 <code>component: EmptyLayout</code> 。当然如果你的页面确实有嵌套展示的需求，可不按照这种方式操作。</p><h2 id="全局前置守卫" tabindex="-1">全局前置守卫 <a class="header-anchor" href="#全局前置守卫" aria-label="Permalink to &quot;全局前置守卫&quot;">​</a></h2><p>路由的前置导航守卫是框架实现路由跳转的核心，在前置守卫里会接管侧边栏导航路由生成、页面标题设置、无效路由跳转404页面等处理。所以理解框架的前置守卫处理逻辑，对业务开发或框架二次开发有很大帮助。</p><p><img src="`+e+'" alt=""></p>',20),r=[c];function E(y,i,F,h,d,b){return n(),a("div",null,r)}const u=s(t,[["render",E]]);export{m as __pageData,u as default};
