(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(t,e,a){t.exports={button:"FeedbackOptions_button__1iQ94"}},2:function(t,e,a){t.exports={title:"Statistics_title__2KU6X",stats:"Statistics_stats__18B4k"}},22:function(t,e,a){"use strict";a.r(e);var n=a(1),s=a.n(n),c=a(7),r=a.n(c),i=a(3),o=a(5),l=a(8),b=a(9),j=a(13),d=a(12),u=a(2),h=a.n(u),O=a(0),p=function(t){var e=t.good,a=t.neutral,n=t.bad,s=t.total,c=t.positivePercentage;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{className:h.a.title,children:"Statistics"}),Object(O.jsxs)("p",{className:h.a.stats,children:["Good: ",e]}),Object(O.jsxs)("p",{className:h.a.stats,children:["Neutral: ",a]}),Object(O.jsxs)("p",{className:h.a.stats,children:["Bad: ",n]}),Object(O.jsxs)("p",{className:h.a.stats,children:["Total: ",s]}),Object(O.jsxs)("p",{className:h.a.stats,children:["Positive feedback: ",c,"%"]})]})},f=a(10),m=a.n(f),x=function(t){var e=t.options,a=t.onLeaveFeedback;return Object(O.jsx)(O.Fragment,{children:e.map((function(t){return Object(O.jsx)("button",{className:m.a.button,type:"button",name:t,onClick:a,children:t},t)}))})},v=a(6),g=a.n(v),k=function(t){var e=t.title,a=t.children;return Object(O.jsxs)("div",{className:g.a.section,children:[Object(O.jsx)("p",{className:g.a.title,children:e}),a]})},_=a(11),N=function(t){var e=t.message;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("p",{children:e})})};N.prototypes={message:a.n(_).a.string.isRequired};var y=N,S=function(t){Object(j.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={good:0,neutral:0,bad:0},t.handleClick=function(e){var a=e.currentTarget.name;t.setState((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(i.a)({},a,t.state[a]+1))}))},t}return Object(b.a)(a,[{key:"render",value:function(){var t=this.state,e=t.good,a=t.neutral,n=t.bad,s=function(){return e+a+n};return Object(O.jsxs)(k,{title:"Please leave feedback",children:[Object(O.jsx)(x,{options:Object.keys(this.state),onLeaveFeedback:this.handleClick}),s()>0?Object(O.jsx)(p,{good:e,neutral:a,bad:n,total:s(),positivePercentage:e?Math.round(e/s()*100):0}):Object(O.jsx)(y,{message:"No feedback given"})]})}}]),a}(n.Component);a(21);r.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(S,{})}),document.getElementById("root"))},6:function(t,e,a){t.exports={section:"Section_section__3Xnm_",title:"Section_title__3fs6k"}}},[[22,1,2]]]);
//# sourceMappingURL=main.ef555eb2.chunk.js.map