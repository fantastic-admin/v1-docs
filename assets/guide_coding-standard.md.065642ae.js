import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.a70be969.js";const E=JSON.parse('{"title":"代码规范","description":"","frontmatter":{},"headers":[],"relativePath":"guide/coding-standard.md","filePath":"guide/coding-standard.md"}'),l={name:"guide/coding-standard.md"},p=n(`<h1 id="代码规范" tabindex="-1">代码规范 <a class="header-anchor" href="#代码规范" aria-label="Permalink to &quot;代码规范&quot;">​</a></h1><h2 id="准备" tabindex="-1">准备 <a class="header-anchor" href="#准备" aria-label="Permalink to &quot;准备&quot;">​</a></h2><p>代码规范主要基于 ESLint 和 stylelint 运行，所以为保证代码风格统一，请统一使用 <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">VS Code</a> 做为开发工具，并安装以下扩展：</p><ul><li><a href="https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig" target="_blank" rel="noreferrer">EditorConfig for VS Code</a></li><li><a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" target="_blank" rel="noreferrer">ESLint</a></li><li><a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank" rel="noreferrer">Vetur</a></li><li><a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank" rel="noreferrer">Prettier - Code formatter</a></li><li><a href="https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint" target="_blank" rel="noreferrer">stylelint</a> 安装完后需切换到 v0.87.6 版本，最新版无法使用</li></ul><p>安装完后在 <code>settings.json</code> 中增加如下配置：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#9ECBFF;">&quot;editor.codeActionsOnSave&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">&quot;source.fixAll.eslint&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">&quot;source.fixAll.stylelint&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#032F62;">&quot;editor.codeActionsOnSave&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">&quot;source.fixAll.eslint&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">&quot;source.fixAll.stylelint&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>完成以上配置，并确保项目已安装好依赖，便可查看最终效果：在保存代码时，会自动对当前文件进行代码格式化操作。</p><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><p>配置文件主要有 3 处，分别为 IDE 配置（<code>.editorconfig</code>）、ESLint 配置（<code>.eslintrc.js</code> 和 <code>.eslintignore</code>）、StyleLint 配置（<code>.stylelintrc</code> 和 <code>.stylelintignore</code>）。</p><p>以代码缩进举例，框架默认是以 4 空格进行缩进，如果要调整为 2 空格，则需要在 <code>.editorconfig</code> 里修改：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">indent_size = 2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">indent_size = 2</span></span></code></pre></div><p>在 <code>.eslintrc.js</code> 里修改：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&#39;indent&#39;: [2, 2, {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;SwitchCase&#39;: 1</span></span>
<span class="line"><span style="color:#e1e4e8;">}],</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">...</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&#39;vue/html-indent&#39;: [2, 2],</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">...</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&#39;vue/script-indent&#39;: [2, 2, {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;switchCase&#39;: 1</span></span>
<span class="line"><span style="color:#e1e4e8;">}]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&#39;indent&#39;: [2, 2, {</span></span>
<span class="line"><span style="color:#24292e;">    &#39;SwitchCase&#39;: 1</span></span>
<span class="line"><span style="color:#24292e;">}],</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">...</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&#39;vue/html-indent&#39;: [2, 2],</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">...</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&#39;vue/script-indent&#39;: [2, 2, {</span></span>
<span class="line"><span style="color:#24292e;">    &#39;switchCase&#39;: 1</span></span>
<span class="line"><span style="color:#24292e;">}]</span></span></code></pre></div><p>在 <code>.stylelintrc</code> 里修改：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&quot;indentation&quot;: 2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&quot;indentation&quot;: 2</span></span></code></pre></div><p>修改完毕后，再分别执行下面两句命令：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">lint</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stylelint</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">lint</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stylelint</span></span></code></pre></div><p>该操作会将代码进行一次格式校验，如果规则支持自动修复，则会将不符合规则的代码自动进行格式化。以上面的例子，当缩进规则调整后，我们无需手动去每个文件调整，通过命令可以自动应用新的缩进规则。</p>`,18),o=[p];function t(c,i,r,d,y,u){return a(),e("div",null,o)}const g=s(l,[["render",t]]);export{E as __pageData,g as default};
