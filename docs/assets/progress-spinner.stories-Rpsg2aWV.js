import{t}from"./index-iqhZMf16.js";import{_ as p}from"./index-Xvf_JYRr.js";import"./registry-EgEQwbXk.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";import"./index-yF1zloRw.js";import"./index-eucXA0ea.js";/* empty css             */import"./render-tag-_0PNNh6Y.js";const i=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-progress-spinner
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.1.0
    </span>
</h1>

\`\`\`marko
<ebay-progress-spinner size="large" aria-label="busy" />
\`\`\`

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/progress-ebay-progress-spinner)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/progress-ebay-progress-spinner)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-progress-spinner/examples)
`,c=r=>({input:{...r,renderBody:r.renderBody?a=>{a.html(r.renderBody)}:null}}),x={title:"progress/ebay-progress-spinner",component:p,parameters:{docs:{description:{component:i}}},argTypes:{size:{options:["small","large"],control:{type:"select"},description:'size of spinner - can be "small", "large". default is small '},ariaLabel:{control:{type:"text"},description:"Description for accessibility"}}},e=c.bind({});e.args={ariaLabel:"loading"};e.parameters={docs:{source:{code:'<ebay-progress-spinner aria-label="Busy"/>'}}};e.parameters={docs:{source:{code:t("ebay-progress-spinner",e.args)}}};var s,o,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const B=["Loading"];export{e as Loading,B as __namedExportsOrder,x as default};
