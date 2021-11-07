(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[14],{1488:function(e,t,a){"use strict";var n=a(1),r=n.createContext();t.a=r},1506:function(e,t,a){"use strict";var n=a(1),r=n.createContext();t.a=r},1542:function(e,t,a){"use strict";var n=a(6),r=a(3),c=a(1),o=(a(0),a(4)),i=a(9),l=a(1506),s=c.forwardRef((function(e,t){var a=e.classes,i=e.className,s=e.component,d=void 0===s?"table":s,u=e.padding,p=void 0===u?"default":u,m=e.size,f=void 0===m?"medium":m,b=e.stickyHeader,g=void 0!==b&&b,v=Object(n.a)(e,["classes","className","component","padding","size","stickyHeader"]),h=c.useMemo((function(){return{padding:p,size:f,stickyHeader:g}}),[p,f,g]);return c.createElement(l.a.Provider,{value:h},c.createElement(d,Object(r.a)({role:"table"===d?null:"table",ref:t,className:Object(o.default)(a.root,i,g&&a.stickyHeader)},v)))}));t.a=Object(i.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(r.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(s)},1543:function(e,t,a){"use strict";var n=a(3),r=a(6),c=a(1),o=(a(0),a(4)),i=a(9),l=a(1488),s=a(34),d=c.forwardRef((function(e,t){var a=e.classes,i=e.className,s=e.component,d=void 0===s?"tr":s,u=e.hover,p=void 0!==u&&u,m=e.selected,f=void 0!==m&&m,b=Object(r.a)(e,["classes","className","component","hover","selected"]),g=c.useContext(l.a);return c.createElement(d,Object(n.a)({ref:t,className:Object(o.default)(a.root,i,g&&{head:a.head,footer:a.footer}[g.variant],p&&a.hover,f&&a.selected),role:"tr"===d?null:"row"},b))}));t.a=Object(i.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(s.d)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},1544:function(e,t,a){"use strict";var n=a(3),r=a(6),c=a(1),o=(a(0),a(4)),i=a(9),l=a(1488),s={variant:"body"},d=c.forwardRef((function(e,t){var a=e.classes,i=e.className,d=e.component,u=void 0===d?"tbody":d,p=Object(r.a)(e,["classes","className","component"]);return c.createElement(l.a.Provider,{value:s},c.createElement(u,Object(n.a)({className:Object(o.default)(a.root,i),ref:t,role:"tbody"===u?null:"rowgroup"},p)))}));t.a=Object(i.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(d)},1593:function(e,t,a){"use strict";var n=a(6),r=a(3),c=a(1),o=(a(0),a(4)),i=a(9),l=a(14),s=a(34),d=a(1506),u=a(1488),p=c.forwardRef((function(e,t){var a,i,s=e.align,p=void 0===s?"inherit":s,m=e.classes,f=e.className,b=e.component,g=e.padding,v=e.scope,h=e.size,y=e.sortDirection,O=e.variant,j=Object(n.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),x=c.useContext(d.a),N=c.useContext(u.a),E=N&&"head"===N.variant;b?(i=b,a=E?"columnheader":"cell"):i=E?"th":"td";var k=v;!k&&E&&(k="col");var w=g||(x&&x.padding?x.padding:"default"),C=h||(x&&x.size?x.size:"medium"),z=O||N&&N.variant,R=null;return y&&(R="asc"===y?"ascending":"descending"),c.createElement(i,Object(r.a)({ref:t,className:Object(o.default)(m.root,m[z],f,"inherit"!==p&&m["align".concat(Object(l.a)(p))],"default"!==w&&m["padding".concat(Object(l.a)(w))],"medium"!==C&&m["size".concat(Object(l.a)(C))],"head"===z&&x&&x.stickyHeader&&m.stickyHeader),"aria-sort":R,role:a,scope:k},j))}));t.a=Object(i.a)((function(e){return{root:Object(r.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(s.i)(Object(s.d)(e.palette.divider,1),.88):Object(s.a)(Object(s.d)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(p)},1642:function(e,t,a){"use strict";var n=a(3),r=a(6),c=a(1),o=(a(0),a(4)),i=a(9),l=a(1488),s={variant:"head"},d=c.forwardRef((function(e,t){var a=e.classes,i=e.className,d=e.component,u=void 0===d?"thead":d,p=Object(r.a)(e,["classes","className","component"]);return c.createElement(l.a.Provider,{value:s},c.createElement(u,Object(n.a)({className:Object(o.default)(a.root,i),ref:t,role:"thead"===u?null:"rowgroup"},p)))}));t.a=Object(i.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(d)},2142:function(e,t,a){"use strict";a.d(t,"c",(function(){return c})),a.d(t,"d",(function(){return o})),a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return l})),a.d(t,"e",(function(){return s}));var n=a(28),r=a.n(n),c=function(){return r.a.get("/api/invoices/all")},o=function(e){return r.a.get("/api/invoices",{data:e})},i=function(e){return r.a.post("/api/invoices/delete",e)},l=function(e){return r.a.post("/api/invoices/add",e)},s=function(e){return r.a.post("/api/invoices/update",e)}},2816:function(e,t,a){"use strict";a.r(t);var n=a(26),r=a(1),c=a.n(r),o=a(1411),i=a(1469),l=a(1542),s=a(1642),d=a(1543),u=a(1593),p=a(1544),m=a(2142),f=a(53),b=a(60),g=a(116),v=a(4);t.default=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),a=t[0],h=t[1],y=Object(r.useState)(null),O=Object(n.a)(y,2),j=O[0],x=O[1],N=Object(r.useState)(!1),E=Object(n.a)(N,2),k=E[0],w=E[1],C=Object(r.useState)(!0),z=Object(n.a)(C,2),R=z[0],A=z[1],H=Object(f.g)();Object(r.useEffect)((function(){return Object(m.c)().then((function(e){R&&h(e.data)})),function(){return A(!1)}}),[R]);return c.a.createElement("div",{className:"m-sm-30"},c.a.createElement(b.a,{to:"/invoice/add"},c.a.createElement(o.a,{className:"mb-4",variant:"contained",color:"primary"},"Add Invoice")),c.a.createElement(i.a,{elevation:6,className:"w-full overflow-auto"},c.a.createElement(l.a,{className:"min-w-750"},c.a.createElement(s.a,null,c.a.createElement(d.a,null,c.a.createElement(u.a,{className:"pl-sm-24"},"Order No."),c.a.createElement(u.a,{className:"px-0"},"Bill From"),c.a.createElement(u.a,{className:"px-0"},"Bill To"),c.a.createElement(u.a,{className:"px-0"},"Status"),c.a.createElement(u.a,{className:"px-0"},"Actions"))),c.a.createElement(p.a,null,a.map((function(e,t){return c.a.createElement(d.a,{key:e.id},c.a.createElement(u.a,{className:"pl-sm-24 capitalize",align:"left"},e.orderNo),c.a.createElement(u.a,{className:"pl-0 capitalize",align:"left"},e.seller.name),c.a.createElement(u.a,{className:"pl-0 capitalize",align:"left"},e.buyer.name),c.a.createElement(u.a,{className:"pl-0 capitalize"},c.a.createElement("small",{className:Object(v.default)({"border-radius-4  text-white px-2 py-2px":!0,"bg-primary":"delivered"===e.status,"bg-secondary":"processing"===e.status,"bg-error":"pending"===e.status})},e.status)),c.a.createElement(u.a,{className:"pl-0"},c.a.createElement(o.a,{color:"primary",className:"mr-2",onClick:function(){return t=e.id,void H.push("/invoice/".concat(t));var t}},"Open"),c.a.createElement(o.a,{color:"secondary",onClick:function(){return function(e){x(e),w(!0)}(e)}},"Delete")))}))))),c.a.createElement(g.f,{open:k,onConfirmDialogClose:function(){w(!1)},onYesClick:function(){Object(m.b)(j).then((function(e){R&&(h(e.data),w(!1))}))},text:"Are you sure to delete?"}))}}}]);
//# sourceMappingURL=14.1358ac42.chunk.js.map