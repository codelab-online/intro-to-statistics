"use strict";(self.webpackChunkintro_to_statistics=self.webpackChunkintro_to_statistics||[]).push([[416],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,f=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6377:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},i="Home page : Introduction",l={unversionedId:"introduction/intro",id:"introduction/intro",title:"Home page : Introduction",description:"The Language of Hypothesis Testing",source:"@site/docs/introduction/intro.md",sourceDirName:"introduction",slug:"/introduction/intro",permalink:"/introduction/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Statistics - Basics",permalink:"/category/statistics---basics"},next:{title:"Randomness and Probability Theory",permalink:"/randomness-and-probability"}},s={},p=[{value:"The Language of Hypothesis Testing",id:"the-language-of-hypothesis-testing",level:2},{value:"The concept of p-value",id:"the-concept-of-p-value",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"home-page--introduction"},"Home page : Introduction"),(0,r.kt)("h1",{id:"hypothesis-testing"},"Hypothesis Testing"),(0,r.kt)("h2",{id:"the-language-of-hypothesis-testing"},"The Language of Hypothesis Testing"),(0,r.kt)("p",null,"Two types of Hypotheses."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Null hypothesis (H0)",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"* Usually a statement of \u201cno effect\u201d. Also, refer to the status quo (no change from the past, the old standard still correct).  \n* Either reject or do not reject H0  \n* For example, In our caffeinated drink example, the null hypothesis is as follows:\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"H0: the population mean increase in pulse rate is the same for caffeinated and decaffeinated drinkers among young adults (or caffeinated drinks has no effect on pulse rate among young adults)"))),(0,r.kt)("li",{parentName:"ul"},"Alternative hypothesis (H1)",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"* Usually a statement of \u201can effect\u201d. \n* Also refers challenges to the status quo (something new is now occurring compared to the past).\n* If we reject H0 we conclude there is sufficient evidence to accept the alternative hypothesis. In our caffeinated drink example, the alternative hypothesis is as follows.\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"H1: the population mean increase in pulse rate is higher for caffeinated drinkers among young adults (or caffeinated drinks increase the pulse rate among young adults)")))),(0,r.kt)("h2",{id:"the-concept-of-p-value"},"The concept of p-value"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We use the concept of p-value to reject or do not reject the null hypothesis."),(0,r.kt)("li",{parentName:"ul"},"This p-value is always reported in scientific papers that use hypothesis testing."),(0,r.kt)("li",{parentName:"ul"},"p-value is mostly denoted by p.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If p-value is small, we reject the null hypothesis and conclude that we have evidence to accept the alternative hypothesis."),(0,r.kt)("li",{parentName:"ul"},"If p-value is large, we do not reject the null hypothesis and conclude that we do not have evidence to accept the alternative hypothesis."))),(0,r.kt)("li",{parentName:"ul"},"The strength of evidence against the null hypothesis is determined by the magnitude\nof the p-value.  ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"p-value"),(0,r.kt)("th",{parentName:"tr",align:null},"Interpretation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"p<0.01"),(0,r.kt)("td",{parentName:"tr",align:null},"strong evidence against H0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"0.01\u2264p<0.05"),(0,r.kt)("td",{parentName:"tr",align:null},"moderate evidence against H0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"0.05\u2264p<0.1"),(0,r.kt)("td",{parentName:"tr",align:null},"weak evidence against H0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"p\u22650.1"),(0,r.kt)("td",{parentName:"tr",align:null},"no evidence against H0")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The commonly used threshold is 0.05. If we find p < 0.05, then we say that the results are significant at 5% level of significance. "),(0,r.kt)("li",{parentName:"ul"},"You will see in scientific journal articles ",(0,r.kt)("em",{parentName:"li"},"\u201ctheresults were found to be significant (p < 0.05)\u201d"),".")))}d.isMDXComponent=!0}}]);