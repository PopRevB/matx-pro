(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[79],{1760:function(e,t,a){"use strict";var n=a(3),r=a(6),i=a(1),c=(a(0),a(4)),o=a(685),l=a(9),s=a(131),m=i.forwardRef((function(e,t){var a=e.children,l=e.classes,m=e.className,d=e.component,u=void 0===d?"div":d,p=e.disablePointerEvents,f=void 0!==p&&p,v=e.disableTypography,b=void 0!==v&&v,E=e.position,h=e.variant,g=Object(r.a)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),y=Object(s.b)()||{},j=h;return h&&y.variant,y&&!j&&(j=y.variant),i.createElement(s.a.Provider,{value:null},i.createElement(u,Object(n.a)({className:Object(c.default)(l.root,m,f&&l.disablePointerEvents,y.hiddenLabel&&l.hiddenLabel,"filled"===j&&l.filled,{start:l.positionStart,end:l.positionEnd}[E],"dense"===y.margin&&l.marginDense),ref:t},g),"string"!==typeof a||b?a:i.createElement(o.a,{color:"textSecondary"},a)))}));t.a=Object(l.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(m)},2827:function(e,t,a){"use strict";a.r(t);var n=a(26),r=a(1),i=a.n(r),c=a(1468),o=a(1469),l=a(1382),s=a(521),m=a(1760),d=a(687),u=a(1441),p=a(1411),f=a(60),v=a(63),b=a(225);t.default=function(){var e=Object(r.useState)(!1),t=Object(n.a)(e,2),a=t[0],E=t[1],h=Object(r.useState)(""),g=Object(n.a)(h,2),y=g[0],j=g[1],O=Object(b.d)((function(e){return e.scrumboard})).boardList,x=void 0===O?[]:O,N=Object(b.c)();Object(r.useEffect)((function(){N(Object(v.v)())}),[N]);var w=function(e){E(e)},k=function(e){"Enter"!==e.key||e.shiftKey?j(e.target.value):S()},S=function(){var e=y.trim();""!==e&&(N(Object(v.r)(e)),j(""))};return i.a.createElement("div",{className:"m-sm-30"},i.a.createElement(c.a,{container:!0,spacing:2},x.map((function(e){return i.a.createElement(c.a,{key:e.id,item:!0,lg:3,md:3,sm:12,xs:12},i.a.createElement(f.a,{to:"/scrum-board/".concat(e.id)},i.a.createElement(o.a,{className:"p-6 cursor-pointer h-152",elevation:3},i.a.createElement("h5",{className:"whitespace-pre-wrap capitalize m-0 font-medium"},e.title))))})),i.a.createElement(c.a,{item:!0,lg:3,md:3,sm:12,xs:12},a?i.a.createElement(l.a,{onClickAway:function(){return w(!1)}},i.a.createElement(o.a,{className:"p-6 h-152 w-288",elevation:3},i.a.createElement(s.a,{size:"small",onChange:k,onKeyDown:k,className:"mb-3",variant:"outlined",label:"Board Title",value:y,autoFocus:!0,fullWidth:!0,InputProps:{endAdornment:i.a.createElement(m.a,{position:"end"},i.a.createElement(d.a,{size:"small",onClick:function(){return w(!1)}},i.a.createElement(u.a,{fontSize:"small"},"clear")))}}),i.a.createElement("div",{className:"flex justify-end"},i.a.createElement(p.a,{onClick:S,variant:"contained",color:"primary"},"Add")))):i.a.createElement(o.a,{onClick:function(){return w(!0)},className:"p-6 flex items-center justify-center cursor-pointer h-150px",elevation:3},i.a.createElement("div",{className:"text-primary text-center font-medium"},i.a.createElement("h1",{className:"m-0 text-primary font-normal"},"+"),i.a.createElement("div",null,"Create New Board"))))))}}}]);
//# sourceMappingURL=79.ab9d4347.chunk.js.map