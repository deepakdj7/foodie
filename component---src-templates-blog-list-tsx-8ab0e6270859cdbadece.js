(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{K392:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return s}));var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),i=a("Bl7J"),o=a("vrFN"),c=a("p3AD");t.default=function(e){var t=e.data,a=e.location,n=e.pageContext,s=t.site.siteMetadata.title,m=t.allMarkdownRemark.edges,u=n.currentPage,d=1===u,p=u===n.numPages,g=u-1==1?"/":(u-1).toString(),f=(u+1).toString();return l.a.createElement(i.a,{location:a,title:s,image:"default.jpg"},l.a.createElement(o.a,{title:"All posts"}),m.map((function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return l.a.createElement("article",{className:"list-article",key:t.fields.slug},l.a.createElement("header",null,l.a.createElement("h3",{style:{marginBottom:Object(c.a)(1/4)}},l.a.createElement(r.Link,{style:{boxShadow:"none"},to:t.fields.slug},a)),l.a.createElement("small",null,t.frontmatter.date)),l.a.createElement("section",null,l.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}})))})),l.a.createElement("nav",null,l.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},l.a.createElement("li",null,!d&&l.a.createElement(r.Link,{to:g,rel:"prev"},"← Previous Page")),l.a.createElement("li",null,!p&&l.a.createElement(r.Link,{to:f,rel:"next"},"Next Page →")))))};var s="2792959403"}}]);
//# sourceMappingURL=component---src-templates-blog-list-tsx-8ab0e6270859cdbadece.js.map