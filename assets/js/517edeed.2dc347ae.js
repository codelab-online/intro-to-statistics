"use strict";(self.webpackChunkintro_to_statistics=self.webpackChunkintro_to_statistics||[]).push([[582],{3905:(a,e,t)=>{t.d(e,{Zo:()=>o,kt:()=>k});var s=t(7294);function n(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,s)}return t}function m(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){n(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,s,n=function(a,e){if(null==a)return{};var t,s,n={},r=Object.keys(a);for(s=0;s<r.length;s++)t=r[s],e.indexOf(t)>=0||(n[t]=a[t]);return n}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(s=0;s<r.length;s++)t=r[s],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(n[t]=a[t])}return n}var l=s.createContext({}),i=function(a){var e=s.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):m(m({},e),a)),t},o=function(a){var e=i(a.components);return s.createElement(l.Provider,{value:e},a.children)},c="mdxType",N={inlineCode:"code",wrapper:function(a){var e=a.children;return s.createElement(s.Fragment,{},e)}},u=s.forwardRef((function(a,e){var t=a.components,n=a.mdxType,r=a.originalType,l=a.parentName,o=p(a,["components","mdxType","originalType","parentName"]),c=i(t),u=n,k=c["".concat(l,".").concat(u)]||c[u]||N[u]||r;return t?s.createElement(k,m(m({ref:e},o),{},{components:t})):s.createElement(k,m({ref:e},o))}));function k(a,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof a||n){var r=t.length,m=new Array(r);m[0]=u;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=a,p[c]="string"==typeof a?a:n,m[1]=p;for(var i=2;i<r;i++)m[i]=t[i];return s.createElement.apply(null,m)}return s.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4391:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>m,default:()=>N,frontMatter:()=>r,metadata:()=>p,toc:()=>i});var s=t(7462),n=(t(7294),t(3905));const r={sidebar_position:6},m="Descriptive Statistics",p={unversionedId:"descriptive-statistics",id:"descriptive-statistics",title:"Descriptive Statistics",description:"Tukey Five-Number Summaries",source:"@site/docs/descriptive-statistics.mdx",sourceDirName:".",slug:"/descriptive-statistics",permalink:"/descriptive-statistics",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Probability Distributions",permalink:"/probability-distributions"},next:{title:"Statistical Inference",permalink:"/statistical-inference"}},l={},i=[{value:"Tukey Five-Number Summaries",id:"tukey-five-number-summaries",level:2},{value:"IQR (Inter-Quartile Range)",id:"iqr-inter-quartile-range",level:2},{value:"Boxplot",id:"boxplot",level:2},{value:"Aggregate",id:"aggregate",level:2},{value:"Sample Standard Deviation",id:"sample-standard-deviation",level:2}],o={toc:i},c="wrapper";function N(a){let{components:e,...r}=a;return(0,n.kt)(c,(0,s.Z)({},o,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"descriptive-statistics"},"Descriptive Statistics"),(0,n.kt)("h2",{id:"tukey-five-number-summaries"},"Tukey Five-Number Summaries"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Description: Returns Tukey's five number summary (minimum, lower-hinge, median, upper-hinge, maximum) for the input data."),(0,n.kt)("li",{parentName:"ul"},"Usage:  ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-R"},"fivenum(x, na.rm = TRUE)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Arguments:  ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"x"),": numeric, maybe including NAs and ",(0,n.kt)("span",{parentName:"li",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mo",{parentName:"mrow"},"\xb1"),(0,n.kt)("mo",{parentName:"mrow"},"\xb1"),(0,n.kt)("mi",{parentName:"mrow"},"I"),(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mi",{parentName:"mrow"},"f")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\pm\xb1Inf")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"\xb1"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"\xb1"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"I"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"))))),"s."),(0,n.kt)("li",{parentName:"ul"},"na.rm : logical; if TRUE, all NA and NaNs are dropped, before the statistics are computed.  "))),(0,n.kt)("li",{parentName:"ul"},"Value",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A numeric vector of length 5 containing the summary information. See ",(0,n.kt)("inlineCode",{parentName:"li"},"boxplot.stats")," for more details.")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-R"},'# Load the file\nmucus <- read.csv("MucusCells(1).csv")\n\nsummary(mucus)\n     Cells          Group          \n Min.   : 8.00   Length:20         \n 1st Qu.:10.00   Class :character  \n Median :12.50   Mode  :character  \n Mean   :12.75                     \n 3rd Qu.:15.25                     \n Max.   :18.00  \n\nhead(mucus)\n  Cells     Group\n1    16 Untreated\n2    17 Untreated\n3    13   Exposed\n4    18 Untreated\n5    11 Untreated\n6    15   Exposed\n\n# Get the five number stats\nfivenum(mucus$Cells)\n#    0 % 25 % 50 % 75 % 100 %\n[1]  8.0 10.0 12.5 15.5 18.0\n')),(0,n.kt)("h2",{id:"iqr-inter-quartile-range"},"IQR (Inter-Quartile Range)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Description: computes interquartile range of the x values."),(0,n.kt)("li",{parentName:"ul"},"Usage:  ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-R"},"IQR(x, na.rm = FALSE, type = 7)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Arguments",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"x")," :\t a numeric vector."),(0,n.kt)("li",{parentName:"ul"},"na.rm\t: logical. Should missing values be removed?"),(0,n.kt)("li",{parentName:"ul"},"type : an integer selecting one of the many quantile algorithms, see quantile."))),(0,n.kt)("li",{parentName:"ul"},"Details : Note that this function computes the quartiles using the quantile function rather than following Tukey's recommendations, i.e., IQR(x) = quantile(x, 3/4) - quantile(x, 1/4)."),(0,n.kt)("li",{parentName:"ul"},"For normally N(m,1)N(m,1) distributed XX, the expected value of IQR(X) is 2*qnorm(3/4) = 1.3490, i.e., for a normal-consistent estimate of the standard deviation, use IQR(x) / 1.349.  ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-R"},"IQR(mucus$Cells)\n[1] 5.5\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Return value depends on the algorithm used."),"  "),(0,n.kt)("h2",{id:"boxplot"},"Boxplot"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Description: Produce box-and-whisker plot(s) of the given (grouped) values."),(0,n.kt)("li",{parentName:"ul"},"Usage:  ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-R"},'boxplot(x, ...)\n\n## S3 method for class \'formula\'\nboxplot(formula, data = NULL, ..., subset, na.action = NULL,\n        xlab = mklab(y_var = horizontal),\n        ylab = mklab(y_var =!horizontal),\n        add = FALSE, ann = !add, horizontal = FALSE,\n        drop = FALSE, sep = ".", lex.order = FALSE)\n\n## Default S3 method:\nboxplot(x, ..., range = 1.5, width = NULL, varwidth = FALSE,\n        notch = FALSE, outline = TRUE, names, plot = TRUE,\n        border = par("fg"), col = "lightgray", log = "",\n        pars = list(boxwex = 0.8, staplewex = 0.5, outwex = 0.5),\n         ann = !add, horizontal = FALSE, add = FALSE, at = NULL)\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Arguments",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"formula: a formula, such as y ~ grp, where y is a numeric vector of data values to be split into groups according to the grouping variable grp (usually a factor). Note that ~ g1 + g2 is equivalent to g1:g2."),(0,n.kt)("li",{parentName:"ul"},"data: a data.frame (or list) from which the variables in formula should be taken."),(0,n.kt)("li",{parentName:"ul"},"subset: an optional vector specifying a subset of observations to be used for plotting."),(0,n.kt)("li",{parentName:"ul"},"na.action: a function which indicates what should happen when the data contain NAs. The default is to ignore missing values in either the response or the group."),(0,n.kt)("li",{parentName:"ul"},"xlab, ylab:  x- and y-axis annotation, since R 3.6.0 with a non-empty default. Can be suppressed by ann=FALSE."),(0,n.kt)("li",{parentName:"ul"},"ann: logical indicating if axes should be annotated (by xlab and ylab).  ")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-R"},"boxplot(Cells ~ Group, mucus)\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Mucus Cell Box Plot",src:t(2499).Z,width:"480",height:"480"}),(0,n.kt)("sup",{parentName:"p",id:"fnref-1"},(0,n.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,n.kt)("h2",{id:"aggregate"},"Aggregate"),(0,n.kt)("p",null,"Compute Summary Statistics of Data Subsets"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Description: Splits the data into subsets, computes summary statistics for each, and returns the result in a convenient form."),(0,n.kt)("li",{parentName:"ul"},"Usage:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-R"},"aggregate(x, ...)\n\n## Default S3 method:\naggregate(x, ...)\n\n## S3 method for class 'data.frame'\naggregate(x, by, FUN, ..., simplify = TRUE, drop = TRUE)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Arguments",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"x: an R object. For the formula method a formula, such as y ~ x or cbind(y1, y2) ~ x1 + x2, where the y variables are numeric data to be split into groups according to the grouping x variables (usually factors)."),(0,n.kt)("li",{parentName:"ul"},"by: a list of grouping elements, each as long as the variables in the data frame x. The elements are coerced to factors before use."),(0,n.kt)("li",{parentName:"ul"},"FUN: a function to compute the summary statistics which can be applied to all data subsets.")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-R"},"# Aggregate Means by Group\naggregate(Cells ~ Group, mucus, mean)\n      Group Cells\n1   Exposed  11.0\n2 Untreated  14.5\n\n# Aggregate SD by Group\naggregate(Cells ~ Group, mucus, sd)\n      Group    Cells\n1   Exposed 2.309401\n2 Untreated 2.798809\n")),(0,n.kt)("h2",{id:"sample-standard-deviation"},"Sample Standard Deviation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"s")," is the sample standard deviation, ",(0,n.kt)("inlineCode",{parentName:"li"},"n")," is the sample size.   ")),(0,n.kt)("div",{className:"math math-display"},(0,n.kt)("span",{parentName:"div",className:"katex-display"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mtable",{parentName:"semantics",rowspacing:"0.25em",columnalign:"right left",columnspacing:"0em"},(0,n.kt)("mtr",{parentName:"mtable"},(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,n.kt)("mi",{parentName:"mstyle"},"s"))),(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,n.kt)("mrow",{parentName:"mstyle"},(0,n.kt)("mrow",{parentName:"mrow"}),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("msqrt",{parentName:"mrow"},(0,n.kt)("mfrac",{parentName:"msqrt"},(0,n.kt)("mrow",{parentName:"mfrac"},(0,n.kt)("mo",{parentName:"mrow"},"\u2211"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"x"),(0,n.kt)("mi",{parentName:"msub"},"j")),(0,n.kt)("mo",{parentName:"mrow"},"\u2212"),(0,n.kt)("mover",{parentName:"mrow",accent:"true"},(0,n.kt)("mi",{parentName:"mover"},"x"),(0,n.kt)("mo",{parentName:"mover",stretchy:"true"},"\u203e")),(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mo",{parentName:"msup",stretchy:"false"},")"),(0,n.kt)("mn",{parentName:"msup"},"2"))),(0,n.kt)("mrow",{parentName:"mfrac"},(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mo",{parentName:"mrow"},"\u2212"),(0,n.kt)("mn",{parentName:"mrow"},"1"))))))))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\begin{align*} s &= \\sqrt{\\frac{\\sum (x_j - \\overline{x})^2}{n-1}} \\end{align*}")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"2.74em",verticalAlign:"-1.12em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mtable"},(0,n.kt)("span",{parentName:"span",className:"col-align-r"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.62em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3.62em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.6627em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"s")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.12em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"col-align-l"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.62em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3.62em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.6627em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"}),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mord sqrt"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.6627em"}},(0,n.kt)("span",{parentName:"span",className:"svg-align",style:{top:"-4.4em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"4.4em"}}),(0,n.kt)("span",{parentName:"span",className:"mord",style:{paddingLeft:"1em"}},(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,n.kt)("span",{parentName:"span",className:"mfrac"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.427em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.314em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"1"))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,n.kt)("span",{parentName:"span",style:{top:"-3.677em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mop op-symbol small-op",style:{position:"relative",top:"0em"}},"\u2211"),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.05724em"}},"j")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mord overline"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6306em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.5506em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"overline-line",style:{borderBottomWidth:"0.04em"}})))))),(0,n.kt)("span",{parentName:"span",className:"mclose"},(0,n.kt)("span",{parentName:"span",className:"mclose"},")"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7401em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.989em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2"))))))))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7693em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.6227em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"4.4em"}}),(0,n.kt)("span",{parentName:"span",className:"hide-tail",style:{minWidth:"1.02em",height:"2.48em"}},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"2.48em",viewBox:"0 0 400000 2592",preserveAspectRatio:"xMinYMin slice"},(0,n.kt)("path",{parentName:"svg",d:"M424,2478\nc-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514\nc0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20\ns-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121\ns209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081\nl0 -0c4,-6.7,10,-10,18,-10 H400000\nv40H1014.6\ns-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185\nc-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2z M1001 80\nh400000v40h-400000z"}))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7773em"}},(0,n.kt)("span",{parentName:"span"})))))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.12em"}},(0,n.kt)("span",{parentName:"span"})))))))))))),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("sup",{parentName:"p",id:"fnref-1"},(0,n.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," ",(0,n.kt)("a",{parentName:"p",href:"https://r-coder.com/save-plot-r/#Save_as_image"},"https://r-coder.com/save-plot-r/#Save_as_image")))}N.isMDXComponent=!0},2499:(a,e,t)=>{t.d(e,{Z:()=>s});const s=t.p+"assets/images/mucus_boxplot-5a46461cb5711dcfad187dcb2276f71c.jpeg"}}]);