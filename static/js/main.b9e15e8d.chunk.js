(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(2),l=n.n(r),i=n(3),o=n(4),s=n(6),b=n(5),u=(n(12),function(e){var t=e.tabs,n=e.onTabSelected,a=e.selectedTab;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"tabs"},t.map((function(e){return c.a.createElement("button",{key:e.id,type:"button",className:"buttonTab",onClick:function(){n(e.id)}},e.title)}))),c.a.createElement("p",{className:"content"},t.find((function(e){return e.id===a})).content))}),d=(n(13),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),m=function(e){Object(s.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={selectedTab:d[0]},e.onTabSelected=function(t){var n=d.find((function(e){return e.id===t}));e.setState({selectedTab:n})},e}return Object(o.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Selected tab is\xa0",this.state.selectedTab.title),c.a.createElement(u,{tabs:d,selectedTab:this.state.selectedTab.id,onTabSelected:this.onTabSelected}))}}]),n}(c.a.Component);l.a.render(c.a.createElement(m,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.b9e15e8d.chunk.js.map