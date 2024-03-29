import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.a70be969.js";const F=JSON.parse('{"title":"国际化","description":"","frontmatter":{},"headers":[],"relativePath":"guide/i18n.md","filePath":"guide/i18n.md"}'),p={name:"guide/i18n.md"},o=l(`<h1 id="国际化" tabindex="-1">国际化 <sup class="pro-badge"></sup> <a class="header-anchor" href="#国际化" aria-label="Permalink to &quot;国际化 &lt;sup class=&quot;pro-badge&quot; /&gt;&quot;">​</a></h1><p>框架使用 <a href="http://kazupon.github.io/vue-i18n/zh/" target="_blank" rel="noreferrer">vue-i18n</a> 实现国际化支持。</p><p>专业版默认提供了<strong>简体中文</strong>、<strong>繁体中文</strong>和<strong>英语</strong>三种语言包，在配置里设置 <code>enableI18n: true</code> 可开启语言切换按钮。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>如果你用不到国际化，无需删除任何文件，按照常规开发进行即可，框架已经做好兼容支持。</p></div><h2 id="语言包" tabindex="-1">语言包 <a class="header-anchor" href="#语言包" aria-label="Permalink to &quot;语言包&quot;">​</a></h2><p>语言包存放在 <code>/src/lang/packages/</code> 目录下，因为 Element 本身也有自己的语言包，所以在做国际化支持的时候，框架的语言包文件命名需要和 Element 保持一致，可<a href="https://github.com/ElemeFE/element/tree/dev/src/locale/lang" target="_blank" rel="noreferrer">点击这里</a>查看 Element 的语言包文件。</p><p>新增语言包后需要到 <code>/src/lang/index.js</code> 文件里引用并按照原有配置进行修改，以新增一个日文语言包为例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Vue </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> VueI18n </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue-i18n&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> elementLocaleZhCN </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;element-ui/lib/locale/lang/zh-CN&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> elementLocaleZhTW </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;element-ui/lib/locale/lang/zh-TW&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> elementLocaleEn </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;element-ui/lib/locale/lang/en&#39;</span></span>
<span class="line highlighted"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> elementLocaleJa </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;element-ui/lib/locale/lang/ja&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> localeZhCN </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./packages/zh-CN&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> localeZhTW </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./packages/zh-TW&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> localeEn </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./packages/en&#39;</span></span>
<span class="line highlighted"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> localeJa </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./packages/ja&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> store </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/store&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Vue.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(VueI18n)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">messages</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;zh-CN&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">elementLocaleZhCN,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">localeZhCN</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;zh-TW&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">elementLocaleZhTW,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">localeZhTW</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;en&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">elementLocaleEn,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">localeEn</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;ja&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">elementLocaleJa,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">localeJa</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">...</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Vue </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> VueI18n </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue-i18n&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> elementLocaleZhCN </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;element-ui/lib/locale/lang/zh-CN&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> elementLocaleZhTW </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;element-ui/lib/locale/lang/zh-TW&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> elementLocaleEn </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;element-ui/lib/locale/lang/en&#39;</span></span>
<span class="line highlighted"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> elementLocaleJa </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;element-ui/lib/locale/lang/ja&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> localeZhCN </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./packages/zh-CN&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> localeZhTW </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./packages/zh-TW&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> localeEn </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./packages/en&#39;</span></span>
<span class="line highlighted"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> localeJa </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./packages/ja&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> store </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/store&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Vue.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(VueI18n)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">messages</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;zh-CN&#39;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">elementLocaleZhCN,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">localeZhCN</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;zh-TW&#39;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">elementLocaleZhTW,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">localeZhTW</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;en&#39;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">elementLocaleEn,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">localeEn</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;ja&#39;</span><span style="color:#24292E;">: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">        </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">elementLocaleJa,</span></span>
<span class="line highlighted"><span style="color:#24292E;">        </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">localeJa</span></span>
<span class="line highlighted"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">...</span></span></code></pre></div><h2 id="默认语言" tabindex="-1">默认语言 <a class="header-anchor" href="#默认语言" aria-label="Permalink to &quot;默认语言&quot;">​</a></h2><p>在配置里 <code>defaultLang</code> 可设置默认语言，留空则跟随系统语言。如果设置的默认语言或者系统语言缺少对应的语言包，则以简体中文显示。</p><h2 id="路由部分" tabindex="-1">路由部分 <a class="header-anchor" href="#路由部分" aria-label="Permalink to &quot;路由部分&quot;">​</a></h2><p>以简体中文为例，打开 <code>/src/lang/packages/zh-CN.js</code> 文件可以看到路由相关的配置，在 <code>route</code> 对象里可以扩展需要开启国际化支持的路由。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">    route: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        login: </span><span style="color:#9ECBFF;">&#39;登录&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        dashboard: </span><span style="color:#9ECBFF;">&#39;控制台&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        personal: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            setting: </span><span style="color:#9ECBFF;">&#39;个人设置&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            editpassword: </span><span style="color:#9ECBFF;">&#39;修改密码&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        i18n: </span><span style="color:#9ECBFF;">&#39;国际化&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">    route: {</span></span>
<span class="line"><span style="color:#24292E;">        login: </span><span style="color:#032F62;">&#39;登录&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        dashboard: </span><span style="color:#032F62;">&#39;控制台&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        personal: {</span></span>
<span class="line"><span style="color:#24292E;">            setting: </span><span style="color:#032F62;">&#39;个人设置&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            editpassword: </span><span style="color:#032F62;">&#39;修改密码&#39;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        i18n: </span><span style="color:#032F62;">&#39;国际化&#39;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>光配置好简体中文的还不行，其它语言包文件里也要同步添加。</p><p>当都配置好后，可在路由配置的 <code>meta</code> 对象里设置 <code>i18n</code> 参数，例如：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#B392F0;">meta</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;国际化&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">i18n</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;route.i18n&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">icon</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;ri-earth-line&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">badge</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;NEW&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#6F42C1;">meta</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;国际化&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">i18n</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;route.i18n&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">icon</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;ri-earth-line&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">badge</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;NEW&#39;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>强烈建议开启国际化的时候，<code>title</code> 也还是设置，框架的处理逻辑是：</p><p>先调用当前设置的语言，如果没有再调用默认简体中文的语言，如果还没有，则以显示 <code>title</code> 设置的内容，所以 <code>title</code> 算是个缺省项。</p><h2 id="单页组件部分" tabindex="-1">单页组件部分 <a class="header-anchor" href="#单页组件部分" aria-label="Permalink to &quot;单页组件部分&quot;">​</a></h2><p>如果每个路由对应的页面组件都要做国际化支持，那语言包文件就会变得无比庞大且难以维护，推荐在每个页面组件里使用 <code>&lt;i18n&gt;</code> 自定义块进行语言维护，可打开 <code>/src/views/i18n_example/index.vue</code> 查看示例。</p><h2 id="框架部分" tabindex="-1">框架部分 <a class="header-anchor" href="#框架部分" aria-label="Permalink to &quot;框架部分&quot;">​</a></h2><p>框架自带的部分功能已经支持国际化，以简体中文为例，打开 <code>/src/lang/packages/zh-CN.js</code> 文件可看到 <code>app</code> 对象里的就是框架部分的语言信息，如果需要对框架进行二次开发，请在这里扩展。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    app: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        profile: </span><span style="color:#9ECBFF;">&#39;个人设置&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        login: </span><span style="color:#9ECBFF;">&#39;登录&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        logout: </span><span style="color:#9ECBFF;">&#39;退出登录&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        account: </span><span style="color:#9ECBFF;">&#39;用户名&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        password: </span><span style="color:#9ECBFF;">&#39;密码&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    app: {</span></span>
<span class="line"><span style="color:#24292E;">        profile: </span><span style="color:#032F62;">&#39;个人设置&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        login: </span><span style="color:#032F62;">&#39;登录&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        logout: </span><span style="color:#032F62;">&#39;退出登录&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        account: </span><span style="color:#032F62;">&#39;用户名&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        password: </span><span style="color:#032F62;">&#39;密码&#39;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>框架二次开发请详细阅读 vue-i18n 文档。</p>`,24),e=[o];function c(t,r,E,y,i,h){return n(),a("div",null,e)}const g=s(p,[["render",c]]);export{F as __pageData,g as default};
