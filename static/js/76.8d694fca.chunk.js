(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[76],{2167:function(e,a,t){"use strict";var r=t(20),l=t(5),i=t(26),n=t(1),s=t.n(n),u=t(120),m=t(1468),o=t(1571),c=t(1412),d=t(1749),p=t(1413),v=t(1411),g=t(1441),b=t(1746),f=t(2092),E=t(2049);a.a=function(){var e=Object(n.useState)({date:new Date}),a=Object(i.a)(e,2),t=a[0],h=a[1];Object(n.useEffect)((function(){return u.ValidatorForm.addValidationRule("isPasswordMatch",(function(e){return console.log(e),e===t.password})),function(){return u.ValidatorForm.removeValidationRule("isPasswordMatch")}}),[t.password]);var q=function(e){e.persist(),h(Object(l.a)(Object(l.a)({},t),{},Object(r.a)({},e.target.name,e.target.value)))},w=t.username,N=t.firstName,C=t.creditCard,x=t.mobile,y=t.password,M=t.confirmPassword,P=t.gender,V=t.date,O=t.email;return s.a.createElement("div",null,s.a.createElement(u.ValidatorForm,{onSubmit:function(e){},onError:function(){return null}},s.a.createElement(m.a,{container:!0,spacing:6},s.a.createElement(m.a,{item:!0,lg:6,md:6,sm:12,xs:12},s.a.createElement(u.TextValidator,{className:"mb-4 w-full",label:"Username (Min length 4, Max length 9)",onChange:q,type:"text",name:"username",value:w||"",validators:["required","minStringLength: 4","maxStringLength: 9"],errorMessages:["this field is required"]}),s.a.createElement(u.TextValidator,{className:"mb-4 w-full",label:"First Name",onChange:q,type:"text",name:"firstName",value:N||"",validators:["required"],errorMessages:["this field is required"]}),s.a.createElement(u.TextValidator,{className:"mb-4 w-full",label:"Email",onChange:q,type:"email",name:"email",value:O||"",validators:["required","isEmail"],errorMessages:["this field is required","email is not valid"]}),s.a.createElement(b.a,{utils:E.a},s.a.createElement(f.a,{className:"mb-4 w-full",margin:"none",id:"mui-pickers-date",label:"Date picker",inputVariant:"standard",type:"text",autoOk:!0,value:V,onChange:function(e){h(Object(l.a)(Object(l.a)({},t),{},{date:e}))},KeyboardButtonProps:{"aria-label":"change date"}})),s.a.createElement(u.TextValidator,{className:"mb-8 w-full",label:"Credit Card",onChange:q,type:"number",name:"creditCard",value:C||"",validators:["required","minStringLength:16","maxStringLength: 16"],errorMessages:["this field is required"]})),s.a.createElement(m.a,{item:!0,lg:6,md:6,sm:12,xs:12},s.a.createElement(u.TextValidator,{className:"mb-4 w-full",label:"Mobile Nubmer",onChange:q,type:"text",name:"mobile",value:x||"",validators:["required"],errorMessages:["this field is required"]}),s.a.createElement(u.TextValidator,{className:"mb-4 w-full",label:"Password",onChange:q,name:"password",type:"password",value:y||"",validators:["required"],errorMessages:["this field is required"]}),s.a.createElement(u.TextValidator,{className:"mb-4 w-full",label:"Confirm Password",onChange:q,name:"confirmPassword",type:"password",value:M||"",validators:["required","isPasswordMatch"],errorMessages:["this field is required","password didn't match"]}),s.a.createElement(o.a,{className:"mb-4",value:P||"",name:"gender",onChange:q,row:!0},s.a.createElement(c.a,{value:"Male",control:s.a.createElement(d.a,{color:"secondary"}),label:"Male",labelPlacement:"end"}),s.a.createElement(c.a,{value:"Female",control:s.a.createElement(d.a,{color:"secondary"}),label:"Female",labelPlacement:"end"}),s.a.createElement(c.a,{value:"Others",control:s.a.createElement(d.a,{color:"secondary"}),label:"Others",labelPlacement:"end"})),s.a.createElement(c.a,{control:s.a.createElement(p.a,null),label:"I have read and agree to the terms of service."}))),s.a.createElement(v.a,{color:"primary",variant:"contained",type:"submit"},s.a.createElement(g.a,null,"send"),s.a.createElement("span",{className:"pl-2 capitalize"},"Submit"))))}},2885:function(e,a,t){"use strict";t.r(a);var r=t(1),l=t.n(r),i=t(2167),n=t(26),s=t(2059),u=t(2061),m=t(2062),o=t(1411),c=t(685);function d(){var e=l.a.useState(0),a=Object(n.a)(e,2),t=a[0],r=a[1],i=["Select master blaster campaign settings","Create an ad group","Create an ad"];return l.a.createElement("div",null,l.a.createElement(s.a,{activeStep:t,alternativeLabel:!0},i.map((function(e){return l.a.createElement(u.a,{key:e},l.a.createElement(m.a,null,e))}))),l.a.createElement("div",null,t===i.length?l.a.createElement("div",null,l.a.createElement(c.a,null,"All steps completed"),l.a.createElement(o.a,{className:"mt-4",variant:"contained",color:"secondary",onClick:function(){r(0)}},"Reset")):l.a.createElement("div",null,l.a.createElement(c.a,null,function(e){switch(e){case 0:return"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non tincidunt velit. Quisque laoreet, lectus id tincidunt fringilla, eros est bibendum felis, sit amet lobortis ante sem non diam. Donec viverra a nisi eu eleifend. Mauris vel leo tempor, commodo felis in, sollicitudin velit. Nullam eu sem id lacus venenatis commodo nec a lacus. Donec in egestas justo. Quisque elementum diam felis. In a ullamcorper leo. In lorem urna, mollis in feugiat sed, aliquet nec diam. Mauris tempus dui at gravida pharetra. Etiam nec lectus metus. In dapibus placerat consequat. Quisque ornare ut lacus ac tempus. Pellentesque sed ornare tellus. Curabitur dictum turpis quam, at feugiat mi elementum a.";case 1:return"Integer euismod dapibus sapien, a interdum augue blandit eget. Donec pellentesque, sapien iaculis dignissim sagittis, risus nulla auctor eros, sed suscipit eros mauris id lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer porttitor mauris egestas consequat molestie. Nam egestas iaculis malesuada. Praesent sagittis venenatis finibus. Praesent porttitor ipsum et sapien cursus, eu mattis augue ornare.";case 2:return"In laoreet, dui vel tristique facilisis, velit dui dictum diam, nec feugiat mi mauris eu nunc. Nullam auctor eget ante ac laoreet. Aliquam et ante ligula. Nam imperdiet augue magna, ac tincidunt neque mollis nec. Sed eu nunc sit amet tellus commodo elementum non sit amet sem. Etiam ipsum nibh, rutrum vel ultrices in, vulputate ac dolor. Morbi dictum lectus id orci dapibus, et faucibus nulla viverra. Nulla consectetur ex vitae pretium vehicula. Quisque varius tempor erat et semper. Vivamus consectetur, eros sit amet ornare facilisis, nulla felis laoreet tortor, sit amet egestas risus ipsum sed eros.";default:return"Aenean arcu ligula, porttitor id neque imperdiet, congue convallis erat. Integer libero sapien, convallis a vulputate vel, pretium vulputate metus. Donec leo justo, viverra ut tempor commodo, laoreet eu velit. Donec vel sem quis velit pharetra elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam in commodo mauris. Ut iaculis ipsum velit."}}(t)),l.a.createElement("div",{className:"pt-4"},l.a.createElement(o.a,{variant:"contained",color:"secondary",disabled:0===t,onClick:function(){r((function(e){return e-1}))}},"Back"),l.a.createElement(o.a,{className:"ml-4",variant:"contained",color:"primary",onClick:function(){r((function(e){return e+1}))}},t===i.length-1?"Finish":"Next")))))}var p=t(116);a.default=function(){return l.a.createElement("div",{className:"m-sm-30"},l.a.createElement("div",{className:"mb-sm-30"},l.a.createElement(p.b,{routeSegments:[{name:"Material",path:"/material"},{name:"Form"}]})),l.a.createElement(p.B,{title:"Simple Form"},l.a.createElement(i.a,null)),l.a.createElement("div",{className:"py-3"}),l.a.createElement(p.B,{title:"stepper form"},l.a.createElement(d,null)))}}}]);
//# sourceMappingURL=76.8d694fca.chunk.js.map