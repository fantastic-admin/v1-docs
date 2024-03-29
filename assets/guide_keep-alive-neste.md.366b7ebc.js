import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.a70be969.js";const l="/v1-docs/keep-alive1.gif",e="/v1-docs/keep-alive2.gif",m=JSON.parse('{"title":"多级页面缓存","description":"","frontmatter":{},"headers":[],"relativePath":"guide/keep-alive-neste.md","filePath":"guide/keep-alive-neste.md"}'),o={name:"guide/keep-alive-neste.md"},c=p(`<h1 id="多级页面缓存" tabindex="-1">多级页面缓存 <a class="header-anchor" href="#多级页面缓存" aria-label="Permalink to &quot;多级页面缓存&quot;">​</a></h1><p>因为路由直接影响侧边栏导航菜单，所以为了实现多级侧边栏导航菜单，就需要将路由配置成多级嵌套的形式。一旦超过两级，达到三级甚至更多级，就需要增加一个空布局页面（Empty.vue）用来给 component 使用。此时就出现了一个问题，因为 keep-alive 是在 Layout 上处理的，所以超过两级以上的路由需要做页面缓存会出现各种各样奇怪的 bug 。</p><p>在思考并解决这个问题之前，我们先来看下页面大致结构：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">+------------------------------+</span></span>
<span class="line"><span style="color:#e1e4e8;">| Layout                       |</span></span>
<span class="line"><span style="color:#e1e4e8;">|  +------------------------+  |</span></span>
<span class="line"><span style="color:#e1e4e8;">|  | Empty                  |  |</span></span>
<span class="line"><span style="color:#e1e4e8;">|  |  +------------------+  |  |</span></span>
<span class="line"><span style="color:#e1e4e8;">|  |  | Page             |  |  |</span></span>
<span class="line"><span style="color:#e1e4e8;">|  |  +------------------+  |  |</span></span>
<span class="line"><span style="color:#e1e4e8;">|  +------------------------+  |</span></span>
<span class="line"><span style="color:#e1e4e8;">+------------------------------+</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">+------------------------------+</span></span>
<span class="line"><span style="color:#24292e;">| Layout                       |</span></span>
<span class="line"><span style="color:#24292e;">|  +------------------------+  |</span></span>
<span class="line"><span style="color:#24292e;">|  | Empty                  |  |</span></span>
<span class="line"><span style="color:#24292e;">|  |  +------------------+  |  |</span></span>
<span class="line"><span style="color:#24292e;">|  |  | Page             |  |  |</span></span>
<span class="line"><span style="color:#24292e;">|  |  +------------------+  |  |</span></span>
<span class="line"><span style="color:#24292e;">|  +------------------------+  |</span></span>
<span class="line"><span style="color:#24292e;">+------------------------------+</span></span></code></pre></div><p>首先 keep-alive 是在 Layout 上进行处理，如果不缓存 Empty ，则 Empty 下面的页面将无法被缓存，如果缓存 Empty ，又会导致 Empty 里面的所有页面都被缓存，无法按需清除，相信接触过的同学肯定感同身受其中的大坑。</p><p><img src="`+l+`" alt=""></p><p>就如上面这张图一样，即便将 tab 标签页关闭后，再次打开缓存还是存在。</p><p>框架的解决思路很简单，既然缓存二级路由是没问题，而超过二级的中间层级页面本身也是没太大意义的，那就将路由直接处理成二级，这样页面显示也就是二级的结构。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">+------------------------------+                +------------------------------+</span></span>
<span class="line"><span style="color:#e1e4e8;">| Layout                       |                | Layout.vue                   |</span></span>
<span class="line"><span style="color:#e1e4e8;">|  +------------------------+  |                |  +------------------------+  |</span></span>
<span class="line"><span style="color:#e1e4e8;">|  | Empty                  |  |  +----------&gt;  |  | Page                   |  |</span></span>
<span class="line"><span style="color:#e1e4e8;">|  |  +------------------+  |  |                |  |                        |  |</span></span>
<span class="line"><span style="color:#e1e4e8;">|  |  | Page             |  |  |                |  |                        |  |</span></span>
<span class="line"><span style="color:#e1e4e8;">|  |  +------------------+  |  |                |  |                        |  |</span></span>
<span class="line"><span style="color:#e1e4e8;">|  +------------------------+  |                |  +------------------------+  |</span></span>
<span class="line"><span style="color:#e1e4e8;">+------------------------------+                +------------------------------+</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">+------------------------------+                +------------------------------+</span></span>
<span class="line"><span style="color:#24292e;">| Layout                       |                | Layout.vue                   |</span></span>
<span class="line"><span style="color:#24292e;">|  +------------------------+  |                |  +------------------------+  |</span></span>
<span class="line"><span style="color:#24292e;">|  | Empty                  |  |  +----------&gt;  |  | Page                   |  |</span></span>
<span class="line"><span style="color:#24292e;">|  |  +------------------+  |  |                |  |                        |  |</span></span>
<span class="line"><span style="color:#24292e;">|  |  | Page             |  |  |                |  |                        |  |</span></span>
<span class="line"><span style="color:#24292e;">|  |  +------------------+  |  |                |  |                        |  |</span></span>
<span class="line"><span style="color:#24292e;">|  +------------------------+  |                |  +------------------------+  |</span></span>
<span class="line"><span style="color:#24292e;">+------------------------------+                +------------------------------+</span></span></code></pre></div><p>这里路由配置还是保持多级嵌套的形式，而这个配置并非最终注册使用的路由，仅仅是提供侧边栏导航菜单使用，同时会再生成一份用于动态注册路由的数据，图例如果没看明白的话，可以看下面两组数据。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 原始数据（用于侧边栏导航菜单）</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">path</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;/users&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">meta</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;用户管理&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">children</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            path: </span><span style="color:#9ECBFF;">&#39;clients&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&#39;客户管理&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    path: </span><span style="color:#9ECBFF;">&#39;list&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        title: </span><span style="color:#9ECBFF;">&#39;客户列表&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    }</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    path: </span><span style="color:#9ECBFF;">&#39;detail&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        title: </span><span style="color:#9ECBFF;">&#39;客户详情&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    }</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            ]</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 处理后数据（用于动态注册路由，框架会自动处理）</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">path</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;/users&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">meta</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;用户管理&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">children</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            path: </span><span style="color:#9ECBFF;">&#39;clients/list&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&#39;客户列表&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            path: </span><span style="color:#9ECBFF;">&#39;clients/detail&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&#39;客户详情&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 原始数据（用于侧边栏导航菜单）</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">path</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;/users&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">meta</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;用户管理&#39;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">children</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            path: </span><span style="color:#032F62;">&#39;clients&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            meta: {</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&#39;客户管理&#39;</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            children: [</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    path: </span><span style="color:#032F62;">&#39;list&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    meta: {</span></span>
<span class="line"><span style="color:#24292E;">                        title: </span><span style="color:#032F62;">&#39;客户列表&#39;</span></span>
<span class="line"><span style="color:#24292E;">                    }</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    path: </span><span style="color:#032F62;">&#39;detail&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    meta: {</span></span>
<span class="line"><span style="color:#24292E;">                        title: </span><span style="color:#032F62;">&#39;客户详情&#39;</span></span>
<span class="line"><span style="color:#24292E;">                    }</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            ]</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 处理后数据（用于动态注册路由，框架会自动处理）</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">path</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;/users&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">meta</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;用户管理&#39;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">children</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            path: </span><span style="color:#032F62;">&#39;clients/list&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            meta: {</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&#39;客户列表&#39;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            path: </span><span style="color:#032F62;">&#39;clients/detail&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            meta: {</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&#39;客户详情&#39;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>通过一个递归函数就可以处理好路由的数据，但这还不够，因为还需要处理面包屑导航。</p><p>原有的面包屑导航是通过 <code>$route.matched</code> 可以获取到嵌套路由每一层级的信息，而当路由被处理成两级后，也就无法通过 <code>$route.matched</code> 进行显示了，所以在处理路由数据的同时，也需要处理面包屑导航的信息。大致最终会处理成这样：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">path</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;/users&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">meta</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;用户管理&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">children</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            path: </span><span style="color:#9ECBFF;">&#39;clients/list&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&#39;客户列表&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                breadCrumb: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                    { path: </span><span style="color:#9ECBFF;">&#39;/users&#39;</span><span style="color:#E1E4E8;">, title: </span><span style="color:#9ECBFF;">&#39;用户管理&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">                    { path: </span><span style="color:#9ECBFF;">&#39;clients&#39;</span><span style="color:#E1E4E8;">, title: </span><span style="color:#9ECBFF;">&#39;客户管理&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">                    { path: </span><span style="color:#9ECBFF;">&#39;list&#39;</span><span style="color:#E1E4E8;">, title: </span><span style="color:#9ECBFF;">&#39;客户列表&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">                ]</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            path: </span><span style="color:#9ECBFF;">&#39;clients/detail&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&#39;客户详情&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                breadCrumb: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                    { path: </span><span style="color:#9ECBFF;">&#39;/users&#39;</span><span style="color:#E1E4E8;">, title: </span><span style="color:#9ECBFF;">&#39;用户管理&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">                    { path: </span><span style="color:#9ECBFF;">&#39;clients&#39;</span><span style="color:#E1E4E8;">, title: </span><span style="color:#9ECBFF;">&#39;客户管理&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">                    { path: </span><span style="color:#9ECBFF;">&#39;detail&#39;</span><span style="color:#E1E4E8;">, title: </span><span style="color:#9ECBFF;">&#39;客户详情&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">                ]</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">path</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;/users&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">meta</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;用户管理&#39;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">children</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            path: </span><span style="color:#032F62;">&#39;clients/list&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            meta: {</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&#39;客户列表&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                breadCrumb: [</span></span>
<span class="line"><span style="color:#24292E;">                    { path: </span><span style="color:#032F62;">&#39;/users&#39;</span><span style="color:#24292E;">, title: </span><span style="color:#032F62;">&#39;用户管理&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">                    { path: </span><span style="color:#032F62;">&#39;clients&#39;</span><span style="color:#24292E;">, title: </span><span style="color:#032F62;">&#39;客户管理&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">                    { path: </span><span style="color:#032F62;">&#39;list&#39;</span><span style="color:#24292E;">, title: </span><span style="color:#032F62;">&#39;客户列表&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">                ]</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            path: </span><span style="color:#032F62;">&#39;clients/detail&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            meta: {</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&#39;客户详情&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                breadCrumb: [</span></span>
<span class="line"><span style="color:#24292E;">                    { path: </span><span style="color:#032F62;">&#39;/users&#39;</span><span style="color:#24292E;">, title: </span><span style="color:#032F62;">&#39;用户管理&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">                    { path: </span><span style="color:#032F62;">&#39;clients&#39;</span><span style="color:#24292E;">, title: </span><span style="color:#032F62;">&#39;客户管理&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">                    { path: </span><span style="color:#032F62;">&#39;detail&#39;</span><span style="color:#24292E;">, title: </span><span style="color:#032F62;">&#39;客户详情&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">                ]</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>这样一来，通过 <code>$route.meta.breadcrumb</code> 就可以获取任意某个路由的完整面包屑导航信息了。最终效果如下：</p><p><img src="`+e+'" alt=""></p><p>通过图片可以看到，这种方案也还是有一定的限制，就是路由被处理成二级后，多级嵌套关系不存在了，也就是不能在 Empty 里写任何代码，因为都会被忽略掉，只保留顶级和最深层的底级两个路由。</p><p>当然通过实际情况考虑，这种限制并没有大问题，因为在后台系统里，本身模块相对独立，即便侧边栏导航菜单是嵌套层级关系的，在右侧内容展示区域，几乎都是独立模块展示，无需嵌套。</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>以上是介绍了框架对多级嵌套路由如何做缓存做了一个详尽的解释，在使用上其实并不需要关系内部逻辑，通过修改 settings.js 文件里的 <code>enableFlatRoutes: true</code> 就可以开启扁平化路由的功能，三级或超过三级的路由都会处理成二级路由。</p><p>当然不开启这个设置也是可以的，即路由配置的多少嵌套层级，页面也是对应的嵌套层级。</p>',21),t=[c];function E(r,y,i,F,d,h){return n(),a("div",null,t)}const C=s(o,[["render",E]]);export{m as __pageData,C as default};
