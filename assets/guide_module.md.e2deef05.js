import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.a70be969.js";const p="/v1-docs/module1.gif",o="/v1-docs/module2.gif",m=JSON.parse('{"title":"标准模块","description":"","frontmatter":{},"headers":[],"relativePath":"guide/module.md","filePath":"guide/module.md"}'),e={name:"guide/module.md"},t=l(`<h1 id="标准模块" tabindex="-1">标准模块 <sup class="pro-badge"></sup> <a class="header-anchor" href="#标准模块" aria-label="Permalink to &quot;标准模块 &lt;sup class=&quot;pro-badge&quot; /&gt;&quot;">​</a></h1><h2 id="用法说明" tabindex="-1">用法说明 <a class="header-anchor" href="#用法说明" aria-label="Permalink to &quot;用法说明&quot;">​</a></h2><p>在《<a href="./plop.html">快速生成文件</a>》里说到，通过 <code>yarn new</code> 指令可以生成一个标准模块，那标准模块是什么样一个标准呢？那就实际生成一个模块来看一下。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">? 请选择需要创建的模式： module - 创建标准模块（包含列表页&amp;详情页）</span></span>
<span class="line"><span style="color:#e1e4e8;">? 请选择模块创建目录 src/views</span></span>
<span class="line"><span style="color:#e1e4e8;">? 请输入模块名 test</span></span>
<span class="line"><span style="color:#e1e4e8;">? 请输入模块中文名称 测试模块</span></span>
<span class="line"><span style="color:#e1e4e8;">√  ++ \\src\\views\\test\\list.vue</span></span>
<span class="line"><span style="color:#e1e4e8;">√  ++ \\src\\views\\test\\detail.vue</span></span>
<span class="line"><span style="color:#e1e4e8;">√  ++ \\src\\views\\test\\components\\DetailForm\\index.vue</span></span>
<span class="line"><span style="color:#e1e4e8;">√  ++ \\src\\views\\test\\components\\FormDialog\\index.vue</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">? 请选择需要创建的模式： module - 创建标准模块（包含列表页&amp;详情页）</span></span>
<span class="line"><span style="color:#24292e;">? 请选择模块创建目录 src/views</span></span>
<span class="line"><span style="color:#24292e;">? 请输入模块名 test</span></span>
<span class="line"><span style="color:#24292e;">? 请输入模块中文名称 测试模块</span></span>
<span class="line"><span style="color:#24292e;">√  ++ \\src\\views\\test\\list.vue</span></span>
<span class="line"><span style="color:#24292e;">√  ++ \\src\\views\\test\\detail.vue</span></span>
<span class="line"><span style="color:#24292e;">√  ++ \\src\\views\\test\\components\\DetailForm\\index.vue</span></span>
<span class="line"><span style="color:#24292e;">√  ++ \\src\\views\\test\\components\\FormDialog\\index.vue</span></span></code></pre></div><p>通过一步步的提示设置，现在已经创建好了一个测试模块，先去路由里配置一下，看看实际页面上展示效果如何。</p><p>首先在 <code>/src/router/modules/</code> 目录下新建一个 <code>test.js</code> 文件</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Layout </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/layout&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    path: </span><span style="color:#9ECBFF;">&#39;/test&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    component: Layout,</span></span>
<span class="line"><span style="color:#E1E4E8;">    redirect: </span><span style="color:#9ECBFF;">&#39;/test/list&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;test&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&#39;测试模块&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            path: </span><span style="color:#9ECBFF;">&#39;list&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            name: </span><span style="color:#9ECBFF;">&#39;testList&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#6A737D;">/* webpackChunkName: &#39;test&#39; */</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/views/test/list&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">            meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&#39;列表&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            path: </span><span style="color:#9ECBFF;">&#39;detail&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            name: </span><span style="color:#9ECBFF;">&#39;testDetail&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#6A737D;">/* webpackChunkName: &#39;test&#39; */</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/views/test/detail&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">            meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&#39;详情&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                sidebar: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                activeMenu: </span><span style="color:#9ECBFF;">&#39;/test/list&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Layout </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/layout&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    path: </span><span style="color:#032F62;">&#39;/test&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    component: Layout,</span></span>
<span class="line"><span style="color:#24292E;">    redirect: </span><span style="color:#032F62;">&#39;/test/list&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;test&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    meta: {</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&#39;测试模块&#39;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    children: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            path: </span><span style="color:#032F62;">&#39;list&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            name: </span><span style="color:#032F62;">&#39;testList&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">import</span><span style="color:#24292E;">(</span><span style="color:#6A737D;">/* webpackChunkName: &#39;test&#39; */</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/views/test/list&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">            meta: {</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&#39;列表&#39;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            path: </span><span style="color:#032F62;">&#39;detail&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            name: </span><span style="color:#032F62;">&#39;testDetail&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">import</span><span style="color:#24292E;">(</span><span style="color:#6A737D;">/* webpackChunkName: &#39;test&#39; */</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/views/test/detail&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">            meta: {</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&#39;详情&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                sidebar: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                activeMenu: </span><span style="color:#032F62;">&#39;/test/list&#39;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>然后到 <code>/src/router/index.js</code> 文件里加上这个路由配置文件的引用。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line highlighted"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Test </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./modules/test&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> asyncRoutes </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            title: </span><span style="color:#9ECBFF;">&#39;演示&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            icon: </span><span style="color:#9ECBFF;">&#39;sidebar-default&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">...</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            Test</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line highlighted"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Test </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./modules/test&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> asyncRoutes </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        meta: {</span></span>
<span class="line"><span style="color:#24292E;">            title: </span><span style="color:#032F62;">&#39;演示&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            icon: </span><span style="color:#032F62;">&#39;sidebar-default&#39;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        children: [</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">...</span></span>
<span class="line highlighted"><span style="color:#24292E;">            Test</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><p>这样就能访问到我们的页面了，但是这时候点击新增按钮是会跳转到 404 页面的，那是因为在 <code>list.vue</code> 文件中，我们需要将详情页路由的 <code>name</code> 替换掉。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">onCreate</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.dialogMode) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$router.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            name: </span><span style="color:#9ECBFF;">&#39;testDetail&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.detailFormDialog.id </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.detailFormDialog.visible </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#B392F0;">onEdit</span><span style="color:#E1E4E8;">(row) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.dialogMode) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$router.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            name: </span><span style="color:#9ECBFF;">&#39;testDetail&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            params: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                id: row.id</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.detailFormDialog.id </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> row.id</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.detailFormDialog.visible </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">onCreate</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.dialogMode) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$router.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">            name: </span><span style="color:#032F62;">&#39;testDetail&#39;</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.detailFormDialog.id </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.detailFormDialog.visible </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#6F42C1;">onEdit</span><span style="color:#24292E;">(row) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.dialogMode) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$router.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">            name: </span><span style="color:#032F62;">&#39;testDetail&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            params: {</span></span>
<span class="line"><span style="color:#24292E;">                id: row.id</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.detailFormDialog.id </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> row.id</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.detailFormDialog.visible </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><img src="`+p+`" alt=""></p><p>这样，我们的一个测试模块就初步创建好了。</p><h2 id="功能介绍" tabindex="-1">功能介绍 <a class="header-anchor" href="#功能介绍" aria-label="Permalink to &quot;功能介绍&quot;">​</a></h2><p>功能部分的介绍主要还是要看代码，先从列表页 <code>list.vue</code> 开始。</p><p>最先看到的是这段 <code>mixins</code> 混入，因为几乎每个列表页都需要翻页功能，所以把翻页相关的东西都存放在 <code>/src/mixins/pagination.js</code> 方便复用。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> paginationMixin </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/mixins/pagination&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">    mixins: [paginationMixin],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> paginationMixin </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/mixins/pagination&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">    mixins: [paginationMixin],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>接着在 <code>data</code> 对象里存放的是标准模块提供的一些配置项和必要数据参数字段，例如你可以开启详情弹框模式，或者开启批量操作栏，这些都在 <code>data</code> 对象里设置即可。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 是否开启详情弹框模式</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        dialogMode: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 详情弹框</span></span>
<span class="line"><span style="color:#E1E4E8;">        detailFormDialog: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            visible: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            id: </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 搜索</span></span>
<span class="line"><span style="color:#E1E4E8;">        search: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            name: </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 批量操作</span></span>
<span class="line"><span style="color:#E1E4E8;">        batch: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            enable: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            selectionDataList: []</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 列表数据</span></span>
<span class="line"><span style="color:#E1E4E8;">        dataList: []</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 是否开启详情弹框模式</span></span>
<span class="line highlighted"><span style="color:#24292E;">        dialogMode: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 详情弹框</span></span>
<span class="line"><span style="color:#24292E;">        detailFormDialog: {</span></span>
<span class="line"><span style="color:#24292E;">            visible: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            id: </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 搜索</span></span>
<span class="line"><span style="color:#24292E;">        search: {</span></span>
<span class="line"><span style="color:#24292E;">            name: </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 批量操作</span></span>
<span class="line"><span style="color:#24292E;">        batch: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">            enable: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            selectionDataList: []</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 列表数据</span></span>
<span class="line"><span style="color:#24292E;">        dataList: []</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><img src="`+o+`" alt=""></p><p>再往下就是页面缓存相关的代码了，记得修改高亮部分代码。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#B392F0;">beforeRouteEnter</span><span style="color:#E1E4E8;">(to, from, next) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 进入页面时，先将当前页面的 name 信息存入 keep-alive 全局状态</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">vm</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">vm.dialogMode) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            vm.$store.</span><span style="color:#B392F0;">commit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;keepAlive/add&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;TestList&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#B392F0;">beforeRouteLeave</span><span style="color:#E1E4E8;">(to, from, next) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.dialogMode) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 因为并不是所有的路由跳转都需要将当前页面进行缓存，例如最常见的情况，从列表页进入详情页，则需要将列表页缓存，而从列表页跳转到其它页面，则不需要将列表页缓存</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 所以下面的代码意思就是，如果目标路由的 name 不在指定的数组内，则将当前页面的 name 从 keep-alive 中删除</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">[</span><span style="color:#9ECBFF;">&#39;testDetail&#39;</span><span style="color:#E1E4E8;">].</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(to.name)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 注意：上面校验的是路由的 name ，下面记录的是当前页面的 name</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$store.</span><span style="color:#B392F0;">commit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;keepAlive/remove&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;TestList&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#B392F0;">mounted</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getDataList</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.dialogMode) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$eventBus.</span><span style="color:#B392F0;">$on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;getDataList&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getDataList</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#B392F0;">beforeDestroy</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.dialogMode) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$eventBus.</span><span style="color:#B392F0;">$off</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;getDataList&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#6F42C1;">beforeRouteEnter</span><span style="color:#24292E;">(to, from, next) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 进入页面时，先将当前页面的 name 信息存入 keep-alive 全局状态</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">(</span><span style="color:#E36209;">vm</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">vm.dialogMode) {</span></span>
<span class="line"><span style="color:#24292E;">            vm.$store.</span><span style="color:#6F42C1;">commit</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;keepAlive/add&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;TestList&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#6F42C1;">beforeRouteLeave</span><span style="color:#24292E;">(to, from, next) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.dialogMode) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 因为并不是所有的路由跳转都需要将当前页面进行缓存，例如最常见的情况，从列表页进入详情页，则需要将列表页缓存，而从列表页跳转到其它页面，则不需要将列表页缓存</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 所以下面的代码意思就是，如果目标路由的 name 不在指定的数组内，则将当前页面的 name 从 keep-alive 中删除</span></span>
<span class="line highlighted"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">[</span><span style="color:#032F62;">&#39;testDetail&#39;</span><span style="color:#24292E;">].</span><span style="color:#6F42C1;">includes</span><span style="color:#24292E;">(to.name)) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 注意：上面校验的是路由的 name ，下面记录的是当前页面的 name</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$store.</span><span style="color:#6F42C1;">commit</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;keepAlive/remove&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;TestList&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#6F42C1;">mounted</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">getDataList</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.dialogMode) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$eventBus.</span><span style="color:#6F42C1;">$on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;getDataList&#39;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">getDataList</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#6F42C1;">beforeDestroy</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.dialogMode) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$eventBus.</span><span style="color:#6F42C1;">$off</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;getDataList&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>再往下就是需要你自己编写业务代码的部分了。</p><p>详情页代码就不贴了，相对比较简单，因为把表单部分单独封装成组件存放在 <code>/src/views/[模块文件夹]/components/DetailForm/index.vue</code> 里了，同样你在 <code>components/</code> 文件夹下还能看到另外一个 <code>FormDialog</code> 的文件夹，这样的用意其实很明显了，目的就是让表单可以复用，<strong>可以通过传统路由跳转的形式进入详情页，也可以通过弹框的形式打开详情页</strong>。</p><p>可能有人会有疑问，为什么不在生成文件的时候直接让我选择用哪种形式，这样生成出来就是哪种，而是在生成好的代码文件里再进行配置？</p><p>这样设计的目的主要有两点：</p><ol><li><strong>方便后期维护</strong>。关于详情页到底是用弹框还是路由跳转的形式，我们的原则是，表单填写项如果比较少，用弹框形式，反之用路由跳转形式，但考虑到需求会变，可能一开始是一个很简单的表单，后期需求一点点增加，变成了一个庞大的表单，这时候要从弹框改成路由跳转，或者从路由跳转改成弹框，都很麻烦。所以方便后期维护，这部分还是做成了两种形式共存，通过配置一键切换。</li><li><strong>跨模块的组件调用</strong>。例如有两个模块，一个用户模块，一个部门模块，用户详情里有一项是选择部门，但是新增用户的时候部门可能还没创建，这时候表单已经填写一半了，如果让用户离开页面去部门模块里创建好再回来新建用户，先不说数据如何缓存的问题，光是操作流被打断，页面跳来跳去就很影响用户体验了。所以这个时候就可以在选择部门后面放一个新增部门的按钮，点击后弹出新增部门的弹框，新增完成后弹框关闭，可以继续在新增用户界面做后续操作。</li></ol><hr><p>当然标准模块也只是框架提供的一个标准，你可以沿用，也可以根据自己的需求指定一套标准，毕竟最终目的都是提高开发效率，同时也确保多人协作开发的时候有个统一标准，不会出现每个人做出来的模块风格都不一样。</p>`,29),c=[t];function r(E,y,i,d,F,h){return n(),a("div",null,c)}const u=s(e,[["render",r]]);export{m as __pageData,u as default};
