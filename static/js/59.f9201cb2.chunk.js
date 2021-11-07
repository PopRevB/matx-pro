(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[59],{1541:function(e,t,a){"use strict";var n=a(6),r=a(35),c=a(3),i=a(1),o=(a(0),a(4)),s=a(9),l=a(1641),d=i.forwardRef((function(e,t){var a,r=e.classes,s=e.className,d=e.component,m=void 0===d?"li":d,u=e.disableGutters,b=void 0!==u&&u,p=e.ListItemClasses,h=e.role,f=void 0===h?"menuitem":h,g=e.selected,v=e.tabIndex,E=Object(n.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(a=void 0!==v?v:-1),i.createElement(l.a,Object(c.a)({button:!0,role:f,tabIndex:a,component:m,selected:g,disableGutters:b,classes:Object(c.a)({dense:r.dense},p),className:Object(o.default)(r.root,s,g&&r.selected,!b&&r.gutters),ref:t},E))}));t.a=Object(s.a)((function(e){return{root:Object(c.a)({},e.typography.body1,Object(r.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(c.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(d)},1641:function(e,t,a){"use strict";var n=a(3),r=a(6),c=a(1),i=(a(0),a(4)),o=a(9),s=a(676),l=a(221),d=a(33),m=a(407),u=a(30),b="undefined"===typeof window?c.useEffect:c.useLayoutEffect,p=c.forwardRef((function(e,t){var a=e.alignItems,o=void 0===a?"center":a,p=e.autoFocus,h=void 0!==p&&p,f=e.button,g=void 0!==f&&f,v=e.children,E=e.classes,x=e.className,j=e.component,y=e.ContainerComponent,O=void 0===y?"li":y,C=e.ContainerProps,N=(C=void 0===C?{}:C).className,w=Object(r.a)(C,["className"]),k=e.dense,S=void 0!==k&&k,I=e.disabled,R=void 0!==I&&I,L=e.disableGutters,M=void 0!==L&&L,z=e.divider,V=void 0!==z&&z,T=e.focusVisibleClassName,D=e.selected,$=void 0!==D&&D,F=Object(r.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),U=c.useContext(m.a),_={dense:S||U.dense||!1,alignItems:o},B=c.useRef(null);b((function(){h&&B.current&&B.current.focus()}),[h]);var H=c.Children.toArray(v),A=H.length&&Object(l.a)(H[H.length-1],["ListItemSecondaryAction"]),G=c.useCallback((function(e){B.current=u.findDOMNode(e)}),[]),W=Object(d.a)(G,t),P=Object(n.a)({className:Object(i.default)(E.root,x,_.dense&&E.dense,!M&&E.gutters,V&&E.divider,R&&E.disabled,g&&E.button,"center"!==o&&E.alignItemsFlexStart,A&&E.secondaryAction,$&&E.selected),disabled:R},F),J=j||"li";return g&&(P.component=j||"div",P.focusVisibleClassName=Object(i.default)(E.focusVisible,T),J=s.a),A?(J=P.component||j?J:"div","li"===O&&("li"===J?J="div":"li"===P.component&&(P.component="div")),c.createElement(m.a.Provider,{value:_},c.createElement(O,Object(n.a)({className:Object(i.default)(E.container,N),ref:W},w),c.createElement(J,P,H),H.pop()))):c.createElement(m.a.Provider,{value:_},c.createElement(J,Object(n.a)({ref:W},P),H))}));t.a=Object(o.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(p)},1745:function(e,t,a){"use strict";var n=a(6),r=a(3),c=a(1),i=(a(0),a(4)),o=a(9),s=a(676),l=a(14),d=c.forwardRef((function(e,t){var a=e.children,o=e.classes,d=e.className,m=e.color,u=void 0===m?"default":m,b=e.component,p=void 0===b?"button":b,h=e.disabled,f=void 0!==h&&h,g=e.disableFocusRipple,v=void 0!==g&&g,E=e.focusVisibleClassName,x=e.size,j=void 0===x?"large":x,y=e.variant,O=void 0===y?"round":y,C=Object(n.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return c.createElement(s.a,Object(r.a)({className:Object(i.default)(o.root,d,"round"!==O&&o.extended,"large"!==j&&o["size".concat(Object(l.a)(j))],f&&o.disabled,{primary:o.primary,secondary:o.secondary,inherit:o.colorInherit}[u]),component:p,disabled:f,focusRipple:!v,focusVisibleClassName:Object(i.default)(o.focusVisible,E),ref:t},C),c.createElement("span",{className:o.label},a))}));t.a=Object(o.a)((function(e){return{root:Object(r.a)({},e.typography.button,{boxSizing:"border-box",minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground},textDecoration:"none"},"&$focusVisible":{boxShadow:e.shadows[6]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},secondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}}),{name:"MuiFab"})(d)},2862:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a(5),c=a(26),i=a(1),o=a.n(i),s=a(1373),l=a(1469),d=a(116),m=a(28),u=a.n(m),b=function(e){return u.a.get("/api/chat/contacts",{data:e})},p=function(e){return u.a.post("/api/chat/add",e)},h=a(17),f=a(416),g=a.n(f),v=a(1446),E=a(2790),x=a(1410),j=a(4),y=["palette"],O=Object(x.a)((function(e){e.palette,Object(h.a)(e,y);return{chatSidenav:{borderRight:"1px solid rgba(0, 0, 0, 0.08)",height:450}}})),C=function(e){var t=e.currentUser,a=e.contactList,n=void 0===a?[]:a,r=e.recentContactList,c=void 0===r?[]:r,i=e.handleContactClick,s=O();return o.a.createElement("div",{className:Object(j.default)("bg-default",s.chatSidenav)},o.a.createElement("div",{className:"chat-sidenav__topbar flex items-center h-56 px-4 bg-primary"},o.a.createElement(d.c,{src:t.avatar,status:t.status}),o.a.createElement("h5",{className:"ml-4 whitespace-pre mb-0 font-medium text-18 text-white"},t.name)),o.a.createElement(g.a,{className:"relative h-full"},c.map((function(e,t){return o.a.createElement("div",{onClick:function(){return i(e.id)},key:t,className:"flex items-center p-4 cursor-pointer  gray-on-hover"},o.a.createElement(d.c,{src:e.avatar,status:e.status}),o.a.createElement("div",{className:"pl-4"},o.a.createElement("p",{className:"m-0"},e.name),o.a.createElement("p",{className:"m-0 text-muted"},Object(E.a)(new Date(e.lastChatTime).getTime(),"MMMM dd, yyyy"))))})),o.a.createElement(v.a,null),n.map((function(e,t){return o.a.createElement("div",{onClick:function(){return i(e.id)},key:t,className:"flex items-center px-4 py-1 cursor-pointer  gray-on-hover"},o.a.createElement(d.c,{src:e.avatar,status:e.status}),o.a.createElement("div",{className:"pl-4"},o.a.createElement("p",null,e.name)))}))))},N=a(1472),w=a(687),k=a(1441),S=a(1541),I=a(521),R=a(1745),L=["palette"],M=Object(x.a)((function(e){e.palette,Object(h.a)(e,L);return{icon:{fontSize:"4rem"}}})),z=function(){var e=M();return o.a.createElement("div",{className:"h-220 w-220 rounded elevation-z6 bg-default flex justify-center items-center"},o.a.createElement(k.a,{className:e.icon,color:"primary"},"chat"))},V=a(132),T=a(18),D=a.n(T),$=["palette"],F=Object(x.a)((function(e){e.palette,Object(h.a)(e,$);return{chatContainer:{background:"rgba(0, 0, 0, 0.05)",height:450}}})),U=function(e){var t=e.id,a=e.toggleSidenav,n=e.currentChatRoom,r=e.opponentUser,s=e.messageList,l=void 0===s?[]:s,m=e.handleMessageSend,u=Object(i.useState)(""),b=Object(c.a)(u,2),p=b[0],h=b[1],f=F();return o.a.createElement("div",{className:Object(j.default)("flex-column relative",f.chatContainer)},o.a.createElement("div",{className:"chat-container__topbar flex items-center justify-between p-1 bg-primary"},o.a.createElement("div",{className:"flex items-center"},o.a.createElement(N.a,{mdUp:!0},o.a.createElement(w.a,{onClick:a},o.a.createElement(k.a,{className:"text-white"},"short_text"))),o.a.createElement(N.a,{smDown:!0},o.a.createElement("div",{className:"pl-3"})),r&&o.a.createElement(i.Fragment,null,o.a.createElement(d.c,{src:r.avatar,status:r.status}),o.a.createElement("h5",{className:"ml-4 whitespace-pre mb-0 font-medium text-18 text-white"},r.name))),o.a.createElement(d.p,{menuButton:o.a.createElement(w.a,null,o.a.createElement(k.a,{className:"text-white"},"more_vert"))},o.a.createElement(S.a,{className:"flex items-center"},o.a.createElement(k.a,{className:"mr-4"},"account_circle")," Contact"),o.a.createElement(S.a,{className:"flex items-center"},o.a.createElement(k.a,{className:"mr-4"},"volume_mute")," Mute"),o.a.createElement(S.a,{className:"flex items-center"},o.a.createElement(k.a,{className:"mr-4"},"delete")," Clear Chat"))),o.a.createElement(g.a,{className:"chat-message-list flex-grow relative",id:"chat-message-list"},""===n&&o.a.createElement("div",{className:"flex-column justify-center items-center h-full"},o.a.createElement(z,null),o.a.createElement("p",null,"Select a contact")),l.map((function(e,a){return o.a.createElement("div",{className:"flex items-start px-4 py-3",key:D.a.generate()},o.a.createElement(d.c,{src:e.avatar,status:e.status}),o.a.createElement("div",{className:"ml-4"},o.a.createElement("p",{className:"text-muted m-0 mb-2"},e.name),o.a.createElement("div",{className:Object(j.default)({"px-4 py-2 mb-2 border-radius-4 bg-paper":!0,"bg-primary text-white":t===e.contactId})},o.a.createElement("span",{className:"whitespace-pre-wrap"},e.text)),o.a.createElement("small",{className:"text-muted mb-0"},Object(V.d)(new Date(e.time))," ago")))}))),o.a.createElement(v.a,null),""!==n&&o.a.createElement("div",{className:"flex items-center px-4 py-2"},o.a.createElement(I.a,{label:"Type your message here*",value:p,onChange:function(e){return h(e.target.value)},onKeyUp:function(e){if("Enter"===e.key&&!e.shiftKey){var t=p.trim();""!==t&&m(t),h("")}},fullWidth:!0,multiline:!0,rows:1,variant:"outlined"}),o.a.createElement("div",null,o.a.createElement(R.a,{onClick:function(){""!==p.trim()&&m(p),h("")},color:"primary",className:"ml-4"},o.a.createElement(k.a,null,"send")))))},_=a(61);t.default=function(){var e=document.querySelector("#chat-message-list"),t=Object(i.useState)(!0),a=Object(c.a)(t,2),m=a[0],h=a[1],f=Object(i.useState)({id:"7863a6802ez0e277a0f98534"}),g=Object(c.a)(f,2),v=g[0],E=g[1],x=Object(i.useState)(null),j=Object(c.a)(x,2),y=j[0],O=j[1],N=Object(i.useState)(""),w=Object(c.a)(N,2),k=w[0],S=w[1],I=Object(i.useState)([]),R=Object(c.a)(I,2),L=R[0],M=R[1],z=Object(i.useState)([]),V=Object(c.a)(z,2),T=V[0],D=V[1],$=Object(i.useState)([]),F=Object(c.a)($,2),B=F[0],H=F[1],A=Object(i.useRef)(v),G=Object(_.a)(),W=Object(s.a)(G.breakpoints.down("sm")),P=Object(i.useCallback)((function(){(function(e){return u.a.get("/api/chat/contacts/recent",{data:e})})(A.current.id).then((function(e){D(e.data)}))}),[]);Object(i.useEffect)((function(){var e,t=A.current.id;b(t).then((function(e){h(W),E(Object(r.a)({},e.data))})),(e=v.id,u.a.get("/api/chat/contacts/all",{data:e})).then((function(e){return M(e.data)})),P()}),[W,v.id,P]);var J=function(){e&&e.scrollTo({top:e.scrollHeight,behavior:"smooth"})},K=function(){h(!m)};return o.a.createElement("div",{className:"m-sm-30"},o.a.createElement("div",{className:"mb-sm-30"},o.a.createElement(d.b,{routeSegments:[{name:"Chat"}]})),o.a.createElement(l.a,{elevation:6},o.a.createElement(d.t,null,o.a.createElement(d.s,{width:"230px",open:m,toggleSidenav:K},o.a.createElement(C,{currentUser:v,contactList:L,recentContactList:T,handleContactClick:function(e){W&&K(),b(e).then((function(e){var t=e.data;O(Object(r.a)({},t))})),function(e,t){return u.a.get("/api/chat/chat-room",{data:{currentUser:e,contactId:t}})}(v.id,e).then((function(e){var t=e.data,a=t.chatId,n=t.messageList,r=t.recentListUpdated;S(a),H(n),J(),r&&P()}))}})),o.a.createElement(d.u,null,o.a.createElement(U,{id:null===v||void 0===v?void 0:v.id,opponentUser:y,messageList:B,currentChatRoom:k,handleMessageSend:function(e){var t=v.id;""!==k&&(p({chatId:k,text:e,contactId:t,time:new Date}).then((function(e){H(Object(n.a)(e.data)),J()})),setTimeout((function(){p({chatId:k,text:"Hi, I'm ".concat(y.name,". Your imaginary friend."),contactId:y.id,time:new Date}).then((function(e){H(Object(n.a)(e.data)),J()}))}),750))},toggleSidenav:K})))))}}}]);
//# sourceMappingURL=59.f9201cb2.chunk.js.map