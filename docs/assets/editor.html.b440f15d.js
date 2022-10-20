import{_ as p,r as o,o as l,c as i,a as n,b as e,e as a,d as s}from"./app.039f348c.js";const r={},c=a('<h1 id="m-editor" tabindex="-1"><a class="header-anchor" href="#m-editor" aria-hidden="true">#</a> m-editor</h1><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h2><h3 id="modelvalue" tabindex="-1"><a class="header-anchor" href="#modelvalue" aria-hidden="true">#</a> modelValue</h3>',3),u=n("strong",null,"\u7C7B\u578B\uFF1A",-1),d=s(),k={href:"https://github.com/Tencent/tmagic-editor/blob/master/packages/schema/src/index.ts",target:"_blank",rel:"noopener noreferrer"},v=s("MApp"),h=s("[]"),m=n("li",null,[n("p",null,[n("strong",null,"\u9ED8\u8BA4\u503C\uFF1A"),s(" {}")])],-1),g=n("li",null,[n("p",null,[n("strong",null,"\u8BE6\u60C5\uFF1A")]),n("p",null,"\u9875\u9762\u521D\u59CB\u503C")],-1),b=n("li",null,[n("p",null,[n("strong",null,"\u793A\u4F8B\uFF1A")])],-1),_=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;app&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;app_1&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;page&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;page_1&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;text_1&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u6587\u672C&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="componentgrouplist" tabindex="-1"><a class="header-anchor" href="#componentgrouplist" aria-hidden="true">#</a> componentGroupList</h3>`,2),y=n("strong",null,"\u7C7B\u578B\uFF1A",-1),f=s(),x={href:"https://github.com/Tencent/tmagic-editor/blob/master/packages/editor/src/type.ts",target:"_blank",rel:"noopener noreferrer"},j=s("ComponentGroup"),w=s("[]"),T=n("li",null,[n("p",null,[n("strong",null,"\u9ED8\u8BA4\u503C\uFF1A"),s(" []")])],-1),L=n("li",null,[n("p",null,[n("strong",null,"\u8BE6\u60C5\uFF1A")]),n("p",null,"\u5DE6\u4FA7\u9762\u677F\u4E2D\u7684\u7EC4\u4EF6\u5217\u8868")],-1),M=n("li",null,[n("p",null,[n("strong",null,"\u793A\u4F8B\uFF1A")])],-1),H=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> FolderOpened<span class="token punctuation">,</span> SwitchButton<span class="token punctuation">,</span> Tickets <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/icons-vue&#39;</span><span class="token punctuation">;</span>

<span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u5BB9\u5668&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> FolderOpened<span class="token punctuation">,</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u7EC4&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;container&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u57FA\u7840\u7EC4\u4EF6&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> Tickets<span class="token punctuation">,</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u6587\u672C&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> SwitchButton<span class="token punctuation">,</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u6309\u94AE&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;button&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),C={class:"custom-container tip"},D=n("p",{class:"custom-container-title"},"TIP",-1),z=s("icon\u4F7F\u7528\u7684\u662F"),N={href:"https://element-plus.org/zh-CN/component/icon.html",target:"_blank",rel:"noopener noreferrer"},P=s("element-plus icon"),E=a(`<p>\u4E5F\u53EF\u76F4\u63A5\u4F7F\u7528url\uFF0C\u4F8B\u5982</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;https://vfiles.gtimg.cn/vupload/20220614/9cc3091655207317835.png&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),V=a('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\u6B64\u914D\u7F6E\u4EC5\u5728<a href="#sidebar">sidebar</a>\u4E2D\u914D\u7F6E\u4E86&#39;component-list&#39;\u65F6\u6709\u6548</p></div><h3 id="sidebar" tabindex="-1"><a class="header-anchor" href="#sidebar" aria-hidden="true">#</a> sidebar</h3>',2),I=n("strong",null,"\u7C7B\u578B\uFF1A",-1),O=s(),S={href:"https://github.com/Tencent/tmagic-editor/blob/master/packages/editor/src/type.ts",target:"_blank",rel:"noopener noreferrer"},B=s("SideBarData"),A=n("li",null,[n("p",null,[n("strong",null,"\u9ED8\u8BA4\u503C\uFF1A"),s(" { type: 'tabs', status: '\u7EC4\u4EF6', items: ['component-list', 'layer'] }")])],-1),F=n("li",null,[n("p",null,[n("strong",null,"\u8BE6\u60C5\uFF1A")]),n("p",null,"\u5DE6\u4FA7\u9762\u677F\uFF0C\u76EE\u524D\u53EA\u652F\u6301type: 'tabs';"),n("p",null,"component-list\u7684text\u4E3A'\u7EC4\u4EF6'")],-1),R=n("li",null,[n("p",null,[n("strong",null,"\u793A\u4F8B\uFF1A")])],-1),G=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> List <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/icons-vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ModListPanel <span class="token keyword">from</span> <span class="token string">&#39;../components/sidebars/ModListPanel.vue&#39;</span><span class="token punctuation">;</span>

<span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;tabs&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;\u7EC4\u4EF6&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;component-list&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;layer&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;component&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> List<span class="token punctuation">,</span>
      <span class="token literal-property property">component</span><span class="token operator">:</span> ModListPanel<span class="token punctuation">,</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u6A21\u5757&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),W={class:"custom-container tip"},U=n("p",{class:"custom-container-title"},"TIP",-1),q=s("icon\u4F7F\u7528\u7684\u662F"),J={href:"https://element-plus.org/zh-CN/component/icon.html",target:"_blank",rel:"noopener noreferrer"},K=s("element-plus icon"),Q=a(`<p>\u4E5F\u53EF\u76F4\u63A5\u4F7F\u7528url\uFF0C\u4F8B\u5982</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;https://vfiles.gtimg.cn/vupload/20220614/9cc3091655207317835.png&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),X=n("h3",{id:"menu",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#menu","aria-hidden":"true"},"#"),s(" menu")],-1),Y=n("strong",null,"\u7C7B\u578B\uFF1A",-1),Z=s(),$={href:"https://github.com/Tencent/tmagic-editor/blob/master/packages/editor/src/type.ts",target:"_blank",rel:"noopener noreferrer"},nn=s("MenuBarData"),sn=a("<li><p><strong>\u9ED8\u8BA4\u503C\uFF1A</strong> { left: [], center: [], right: [] }</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p><p>\u9876\u90E8\u5DE5\u5177\u680F</p><p>\u7CFB\u7EDF\u63D0\u4F9B\u4E86\u51E0\u4E2A\u5E38\u7528\u529F\u80FD\uFF1A &#39;/&#39; | &#39;delete&#39; | &#39;undo&#39; | &#39;redo&#39; | &#39;zoom-in&#39; | &#39;zoom-out&#39; | &#39;zoom&#39;</p><p>&#39;/&#39;: \u5206\u9694\u7B26</p><p>&#39;delete&#39;: \u5220\u9664\u6309\u94AE</p><p>&#39;undo&#39;: \u64A4\u9500\u6309\u94AE</p><p>&#39;redo&#39;: \u6062\u590D\u6309\u94AE</p><p>&#39;zoom-in&#39;: \u653E\u5927\u6309\u94AE</p><p>&#39;zoom-out&#39;: \u7F29\u5C0F\u6309\u94AE</p><p>&#39;zoom&#39;: \u7F29\u653E</p></li><li><p><strong>\u793A\u4F8B\uFF1A</strong></p></li>",3),an=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> toRaw <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ArrowLeft<span class="token punctuation">,</span> Coin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/icons-vue&#39;</span><span class="token punctuation">;</span>

<span class="token punctuation">{</span>
  <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;button&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> ArrowLeft<span class="token punctuation">,</span>
      <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token string">&#39;\u8FD4\u56DE&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;.temp&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;delete&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;undo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;redo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;zoom&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;button&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u4FDD\u5B58&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> Coin<span class="token punctuation">,</span>
      <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token function-variable function">handler</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> editorService <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">toRaw</span><span class="token punctuation">(</span>editorService<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),tn={class:"custom-container tip"},en=n("p",{class:"custom-container-title"},"TIP",-1),pn=s("icon\u4F7F\u7528\u7684\u662F"),on={href:"https://element-plus.org/zh-CN/component/icon.html",target:"_blank",rel:"noopener noreferrer"},ln=s("element-plus icon"),rn=a(`<p>\u4E5F\u53EF\u76F4\u63A5\u4F7F\u7528url\uFF0C\u4F8B\u5982</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;https://vfiles.gtimg.cn/vupload/20220614/9cc3091655207317835.png&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),cn=a(`<h3 id="render" tabindex="-1"><a class="header-anchor" href="#render" aria-hidden="true">#</a> render</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> Function</p></li><li><p><strong>\u9ED8\u8BA4\u503C\uFF1A</strong> undefined</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p><p>\u4E2D\u95F4\u5DE5\u4F5C\u533A\u57DF\u4E2D\u753B\u5E03\u6E32\u67D3\u7684\u5185\u5BB9\uFF0C\u901A\u5E38\u662F\u901A\u8FC7\u89E3\u6790<a href="#modelValue">modelValue</a>\u6765\u6E32\u67D3\u51FADOM\uFF0Creturn\u7684DOM\u7ED3\u6784\u9700\u8981\u6709\u4E00\u4E2A\u6839\u8282\u70B9\u3002</p></li><li><p><strong>\u793A\u4F8B\uFF1A</strong></p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token parameter">renderer</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> renderer<span class="token punctuation">.</span>contentWindow<span class="token punctuation">.</span>document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="runtimeurl" tabindex="-1"><a class="header-anchor" href="#runtimeurl" aria-hidden="true">#</a> runtimeUrl</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> string</p></li><li><p><strong>\u9ED8\u8BA4\u503C\uFF1A</strong> undefined</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p><p>runtime \u7684HTML\u5730\u5740\uFF0C\u53EF\u4EE5\u662F\u4E00\u4E2AHTTP\u5730\u5740\uFF0C\u5982\u679C\u548C\u7F16\u8F91\u5668\u4E0D\u540C\u57DF\uFF0C\u9700\u8981\u8BBE\u7F6E\u8DE8\u57DF\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u76F8\u5BF9\u6216\u7EDD\u5BF9\u8DEF\u5F84</p></li></ul><h3 id="propsconfigs" tabindex="-1"><a class="header-anchor" href="#propsconfigs" aria-hidden="true">#</a> propsConfigs</h3>`,6),un=n("strong",null,"\u7C7B\u578B\uFF1A",-1),dn=s(" { [type: string]: "),kn={href:"https://github.com/Tencent/tmagic-editor/blob/master/packages/form/src/schema.ts",target:"_blank",rel:"noopener noreferrer"},vn=s("FormConfig"),hn=s(" }"),mn=n("li",null,[n("p",null,[n("strong",null,"\u9ED8\u8BA4\u503C\uFF1A"),s(" {}")])],-1),gn=n("li",null,[n("p",null,[n("strong",null,"\u8BE6\u60C5\uFF1A")]),n("p",null,"\u7EC4\u4EF6\u7684\u5C5E\u6027\u914D\u7F6E\u8868\u5355\u7684dsl")],-1),bn=n("li",null,[n("p",null,[n("strong",null,"\u793A\u4F8B\uFF1A")])],-1),_n=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u6587\u672C&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;multiple&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u591A\u884C\u6587\u672C&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;switch&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">button</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u6587\u672C&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="propsvalues" tabindex="-1"><a class="header-anchor" href="#propsvalues" aria-hidden="true">#</a> propsValues</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> { [type: string]: Object }</p></li><li><p><strong>\u9ED8\u8BA4\u503C\uFF1A</strong> {}</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p><p>\u6DFB\u52A0\u7EC4\u4EF6\u65F6\u7684\u9ED8\u8BA4\u503C</p></li><li><p><strong>\u793A\u4F8B\uFF1A</strong></p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u6587\u672C&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">multiple</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">button</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u6309\u94AE&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="moveableoptions" tabindex="-1"><a class="header-anchor" href="#moveableoptions" aria-hidden="true">#</a> moveableOptions</h3>`,5),yn=n("strong",null,"\u7C7B\u578B\uFF1A",-1),fn=s(" ((core: StageCore) => MoveableOptions) | "),xn={href:"https://daybrush.com/moveable/release/latest/doc/",target:"_blank",rel:"noopener noreferrer"},jn=s("MoveableOptions"),wn=n("li",null,[n("p",null,[n("strong",null,"\u9ED8\u8BA4\u503C\uFF1A"),s(" {}")])],-1),Tn=n("p",null,[n("strong",null,"\u8BE6\u60C5\uFF1A")],-1),Ln=s("\u753B\u5E03\u4E2D\u7684\u9009\u4E2D\u6846\u914D\u7F6E\u9009\u9879\uFF0C\u4F7F\u7528\u7684\u662F"),Mn={href:"https://github.com/daybrush/moveable",target:"_blank",rel:"noopener noreferrer"},Hn=s("moveable"),Cn=s("\u7B2C\u4E09\u65B9\u5E93"),Dn=a('<h3 id="stagerect" tabindex="-1"><a class="header-anchor" href="#stagerect" aria-hidden="true">#</a> stageRect</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> { width: number; height: number }</p></li><li><p><strong>\u9ED8\u8BA4\u503C\uFF1A</strong> { width: 375, height: 817 }</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p><p>\u753B\u5E03\u7684\u5927\u5C0F\u914D\u7F6E</p></li></ul><h3 id="autoscrollintoview" tabindex="-1"><a class="header-anchor" href="#autoscrollintoview" aria-hidden="true">#</a> autoScrollIntoView</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> boolean</p></li><li><p><strong>\u9ED8\u8BA4\u503C\uFF1A</strong> undefined</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p></li></ul><p>\u9009\u4E2D\u7EC4\u4EF6\u65F6\uFF0C\u662F\u5426\u81EA\u52A8\u6EDA\u52A8\u8BE5\u7EC4\u4EF6\u5230\u53EF\u89C6\u533A\u57DF</p><h3 id="updatedragel" tabindex="-1"><a class="header-anchor" href="#updatedragel" aria-hidden="true">#</a> updateDragEl</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> (el: HTMLDivElement, target: HTMLElement) =&gt; void;</p></li><li><p><strong>\u9ED8\u8BA4\u503C\uFF1A</strong> undefined</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p></li></ul><p>\u5F53\u9009\u4E2D\u6846\u4E0E\u7EC4\u4EF6\u4E0D\u8D34\u5408\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6B64\u65B9\u6CD5\u8FDB\u884C\u8C03\u6574</p><h3 id="iscontainer" tabindex="-1"><a class="header-anchor" href="#iscontainer" aria-hidden="true">#</a> isContainer</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> (el: HTMLDivElement) =&gt; boolean | Promise&lt;boolean&gt;;</p></li><li><p><strong>\u9ED8\u8BA4\u503C\uFF1A</strong> (el: HTMLElement) =&gt; el.classList.contains(&#39;magic-ui-container&#39;)</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p></li></ul><p>\u5F53\u7EC4\u4EF6\u62D6\u52A8\u8FC7\u7A0B\u4E2D\u505C\u7559\u5728\u753B\u5E03\u4E0A\u8D85\u8FC7 <a href="#containerHighlightDuration">containerHighlightDuration</a> \u65F6\u957F\u65F6\uFF0C\u8BC6\u522B\u5F53\u524D\u662F\u5426\u6709\u5BB9\u5668</p><h3 id="containerhighlightduration" tabindex="-1"><a class="header-anchor" href="#containerhighlightduration" aria-hidden="true">#</a> containerHighlightDuration</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> number;</p></li><li><p><strong>\u9ED8\u8BA4\u503C\uFF1A</strong> 800\uFF08\u5355\u4F4D\u4E3Ams\uFF09</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p></li></ul><p>\u5F53\u7EC4\u4EF6\u62D6\u52A8\u8FC7\u7A0B\u4E2D\u505C\u7559\u5728\u753B\u5E03\u4E0A\u8D85\u8FC7 <a href="#containerHighlightDuration">containerHighlightDuration</a> \u65F6\u957F\u65F6\uFF0C\u8BC6\u522B\u5F53\u524D\u662F\u5426\u6709\u5BB9\u5668</p><h3 id="containerhighlightclassname" tabindex="-1"><a class="header-anchor" href="#containerhighlightclassname" aria-hidden="true">#</a> containerHighlightClassName</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> string;</p></li><li><p><strong>\u9ED8\u8BA4\u503C\uFF1A</strong> &#39;tmagic-stage-container-highlight&#39;</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p></li></ul><p>\u8BC6\u522B\u5230\u5BB9\u5668\u540E\uFF0C\u4F1A\u7ED9\u5176dom\u4E0A\u6DFB\u52A0\u7684class</p><h3 id="containerhighlighttype" tabindex="-1"><a class="header-anchor" href="#containerhighlighttype" aria-hidden="true">#</a> containerHighlightType</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> &#39;default&#39; | &#39;alt&#39; | &#39;&#39;;</p></li><li><p><strong>\u9ED8\u8BA4\u503C\uFF1A</strong> &#39;default&#39;</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p></li></ul><p>\u542F\u52A8\u65B9\u5F0F</p><p>default: \u505C\u7559\u5728\u753B\u5E03\u4E0A\u542F\u52A8\u8BC6\u522B</p><p>alt: \u6309\u4F4Falt\u952E\u542F\u52A8\u8BC6\u522B</p><p>\u5176\u4ED6\u503C\uFF1A\u4E0D\u542F\u52A8</p><h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> slots</h2><h3 id="nav" tabindex="-1"><a class="header-anchor" href="#nav" aria-hidden="true">#</a> nav</h3><ul><li><strong>\u8BE6\u60C5\uFF1A</strong> \u5DE5\u5177\u680F</li></ul><h3 id="sidebar-1" tabindex="-1"><a class="header-anchor" href="#sidebar-1" aria-hidden="true">#</a> sidebar</h3><ul><li><strong>\u8BE6\u60C5\uFF1A</strong> \u5DE6\u4FA7\u680F</li></ul><h3 id="workspace" tabindex="-1"><a class="header-anchor" href="#workspace" aria-hidden="true">#</a> workspace</h3><ul><li><strong>\u8BE6\u60C5\uFF1A</strong> \u4E2D\u95F4\u5DE5\u4F5C\u533A\u57DF</li></ul><h3 id="workspace-content" tabindex="-1"><a class="header-anchor" href="#workspace-content" aria-hidden="true">#</a> workspace-content</h3><ul><li><strong>\u8BE6\u60C5\uFF1A</strong> \u4E2D\u95F4\u5DE5\u4F5C\u533A\u57DF\u5185\u90E8</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u5728\u6CA1\u6709 workspace slots \u7684\u65F6\u5019\u624D\u53EF\u4EE5\u7528</p></div><h3 id="propspanel" tabindex="-1"><a class="header-anchor" href="#propspanel" aria-hidden="true">#</a> propsPanel</h3><ul><li><strong>\u8BE6\u60C5\uFF1A</strong> \u5C5E\u6027\u9762\u677F</li></ul>',35);function zn(Nn,Pn){const t=o("ExternalLinkIcon");return l(),i("div",null,[c,n("ul",null,[n("li",null,[n("p",null,[u,d,n("a",k,[v,e(t)]),h])]),m,g,b]),_,n("ul",null,[n("li",null,[n("p",null,[y,f,n("a",x,[j,e(t)]),w])]),T,L,M]),H,n("div",C,[D,n("p",null,[z,n("a",N,[P,e(t)])]),E]),V,n("ul",null,[n("li",null,[n("p",null,[I,O,n("a",S,[B,e(t)])])]),A,F,R]),G,n("div",W,[U,n("p",null,[q,n("a",J,[K,e(t)])]),Q]),X,n("ul",null,[n("li",null,[n("p",null,[Y,Z,n("a",$,[nn,e(t)])])]),sn]),an,n("div",tn,[en,n("p",null,[pn,n("a",on,[ln,e(t)])]),rn]),cn,n("ul",null,[n("li",null,[n("p",null,[un,dn,n("a",kn,[vn,e(t)]),hn])]),mn,gn,bn]),_n,n("ul",null,[n("li",null,[n("p",null,[yn,fn,n("a",xn,[jn,e(t)])])]),wn,n("li",null,[Tn,n("p",null,[Ln,n("a",Mn,[Hn,e(t)]),Cn])])]),Dn])}const Vn=p(r,[["render",zn],["__file","editor.html.vue"]]);export{Vn as default};
