(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{141:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(146),u=n(147);t.default=function(){return r.a.createElement(u.a,null,r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.Link,{to:"/"},"Go back to the homepage"))}},145:function(e,t,n){var a;e.exports=(a=n(149))&&a.default||a},146:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),u=n.n(i),o=n(144),c=n.n(o);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var l=n(27);n.d(t,"waitForRouteChange",function(){return l.c});var s=n(145),d=n.n(s);n.d(t,"PageRenderer",function(){return d.a});var p=n(38);n.d(t,"parsePath",function(){return p.a});var f=r.a.createContext({}),m=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},147:function(e,t,n){"use strict";var a=n(148),r=n(0),i=n.n(r),u=n(4),o=n.n(u),c=n(152),l=n.n(c),s=n(146),d=(n(150),function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"2994927498",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement("div",null,t))},data:a})});d.propTypes={children:o.a.node.isRequired},t.a=d},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Donte Hightower"}}}}},149:function(e,t,n){"use strict";n.r(t);n(39);var a=n(0),r=n.n(a),i=n(4),u=n.n(i),o=n(52),c=n(1),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};l.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=l},150:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-page-2-js-3995bf3bd553e8090090.js.map