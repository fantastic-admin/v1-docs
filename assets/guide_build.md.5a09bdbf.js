import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.a70be969.js";const F=JSON.parse('{"title":"构建","description":"","frontmatter":{},"headers":[],"relativePath":"guide/build.md","filePath":"guide/build.md"}'),p={name:"guide/build.md"},o=l(`<h1 id="构建" tabindex="-1">构建 <a class="header-anchor" href="#构建" aria-label="Permalink to &quot;构建&quot;">​</a></h1><p>当项目开发完毕，只需运行以下命令就可以打包整个项目：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 打包测试环境</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build:test</span></span>
<span class="line"><span style="color:#6A737D;"># or</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build:test</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 打包正式环境</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build</span></span>
<span class="line"><span style="color:#6A737D;"># or</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 打包测试环境</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build:test</span></span>
<span class="line"><span style="color:#6A737D;"># or</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build:test</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 打包正式环境</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build</span></span>
<span class="line"><span style="color:#6A737D;"># or</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build</span></span></code></pre></div><p>构建打包成功之后，会在根目录生成 <code>dist</code> 文件夹（测试环境打包出的文件夹为 <code>dist-test</code> ），里面就是构建打包好的文件。</p>`,4),e=[o];function t(c,r,i,y,d,E){return n(),a("div",null,e)}const _=s(p,[["render",t]]);export{F as __pageData,_ as default};
