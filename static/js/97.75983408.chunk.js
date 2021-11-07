(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[97],{2836:function(e,a,t){"use strict";t.r(a);var r=t(20),n=t(48),l=t.n(n),i=t(67),o=t(26),c=t(17),s=t(1),m=t.n(s),u=t(1469),d=t(1446),p=t(1468),b=t(521),h=t(1541),g=t(1441),v=t(1411),y=t(116),E=t(2121),f=t(2787),C=t(2789),x=t(4),N=t(1410),B=["palette"],O=Object(N.a)((function(e){e.palette,Object(c.a)(e,B);return{dropZone:{transition:"all 350ms ease-in-out",border:"2px dashed rgba(var(--body),0.3)","&:hover":{background:"rgba(var(--body), 0.2) !important"}}}})),q=f.b().shape({name:f.c().required("Name is required"),price:f.a().required("Price is required"),category:f.c().required("Category is required"),quantity:f.a().required("Quantity is required")}),P={name:"",sku:"",price:"",category:"",quantity:""},j=["Electronics","Clothes","Toys","Books","Utensils"];a.default=function(){var e=Object(s.useState)([]),a=Object(o.a)(e,2),t=a[0],n=a[1],c=Object(C.a)({accept:"image/*"}),f=c.getRootProps,N=c.getInputProps,B=c.isDragActive,k=c.acceptedFiles,A=O(),S=function(){var e=Object(i.a)(l.a.mark((function e(a,t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.isSubmitting,console.log(a);case 2:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){n(k)}),[k]),m.a.createElement("div",{className:"m-sm-30"},m.a.createElement("div",{className:"mb-sm-30"},m.a.createElement(y.b,{routeSegments:[{name:"Pages",path:"/pages"},{name:"Add new Coin"}]})),m.a.createElement(u.a,{elevation:3},m.a.createElement("div",{className:"flex p-4"},m.a.createElement("h4",{className:"m-0"},"Add new Coin")),m.a.createElement(d.a,{className:"mb-6"}),m.a.createElement(E.b,{initialValues:P,onSubmit:S,enableReinitialize:!0,validationSchema:q},(function(e){var a,n=e.values,l=e.errors,i=e.touched,o=e.handleChange,c=e.handleBlur,s=e.handleSubmit;e.isSubmitting,e.setSubmitting,e.setFieldValue;return m.a.createElement("form",{className:"px-4",onSubmit:s},m.a.createElement(p.a,{container:!0,spacing:3},m.a.createElement(p.a,{item:!0,sm:6,xs:12},m.a.createElement(b.a,{className:"mb-4",name:"name",label:"Name",variant:"outlined",size:"small",fullWidth:!0,onBlur:c,onChange:o,value:n.name||"",error:Boolean(i.name&&l.name),helperText:i.name&&l.name}),m.a.createElement(b.a,{className:"mb-4",name:"description",label:"Description",variant:"outlined",size:"small",fullWidth:!0,multiline:!0,onBlur:c,onChange:o,value:n.description||"",error:Boolean(i.description&&l.description),helperText:i.description&&l.description}),m.a.createElement(b.a,{className:"mb-4",name:"category",label:"Category",variant:"outlined",size:"small",fullWidth:!0,select:!0,onBlur:c,onChange:o,value:n.category||"",error:Boolean(i.category&&l.category),helperText:i.category&&l.category},j.sort().map((function(e){return m.a.createElement(h.a,{value:e,key:e},e)}))),m.a.createElement("div",Object.assign({className:Object(x.default)((a={"border-radius-4 h-160 w-full flex justify-center items-center cursor-pointer mb-4":!0},Object(r.a)(a,A.dropZone,!0),Object(r.a)(a,"bg-light-gray",!B),Object(r.a)(a,"bg-gray",B),a))},f()),m.a.createElement("input",N()),m.a.createElement("div",{className:"flex-column items-center"},m.a.createElement(g.a,{className:" text-48"},"publish"),t.length?m.a.createElement("span",null,t.length," images were selected"):m.a.createElement("span",null,"Drop product images")))),m.a.createElement(p.a,{item:!0,sm:6,xs:12},m.a.createElement(b.a,{className:"mb-4",name:"productCode",label:"Product Code",variant:"outlined",size:"small",fullWidth:!0,onBlur:c,onChange:o,value:n.productCode||"",error:Boolean(i.productCode&&l.productCode),helperText:i.productCode&&l.productCode}),m.a.createElement(b.a,{className:"mb-4",name:"sku",label:"SKU",variant:"outlined",size:"small",fullWidth:!0,onBlur:c,onChange:o,value:n.sku||"",error:Boolean(i.sku&&l.sku),helperText:i.sku&&l.sku}),m.a.createElement(b.a,{className:"mb-4",name:"price",label:"Price",variant:"outlined",size:"small",type:"number",fullWidth:!0,onBlur:c,onChange:o,value:n.price||"",error:Boolean(i.price&&l.price),helperText:i.price&&l.price}),m.a.createElement(b.a,{className:"mb-4",name:"salePrice",label:"Sale Price",variant:"outlined",size:"small",type:"number",fullWidth:!0,onBlur:c,onChange:o,value:n.salePrice||"",error:Boolean(i.salePrice&&l.salePrice),helperText:i.salePrice&&l.salePrice}),m.a.createElement(b.a,{className:"mb-4",name:"quantity",label:"Quantity",variant:"outlined",size:"small",type:"number",fullWidth:!0,onBlur:c,onChange:o,value:n.quantity||"",error:Boolean(i.quantity&&l.quantity),helperText:i.quantity&&l.quantity}),m.a.createElement(b.a,{className:"mb-4",name:"minOrderAmount",label:"Minimum Order Amount",variant:"outlined",size:"small",type:"number",fullWidth:!0,onBlur:c,onChange:o,value:n.minOrderAmount||"",error:Boolean(i.minOrderAmount&&l.minOrderAmount),helperText:i.minOrderAmount&&l.minOrderAmount}))),m.a.createElement(v.a,{className:"mb-4 px-12",variant:"contained",color:"primary",type:"submit"},"Add Product"))}))))}}}]);
//# sourceMappingURL=97.75983408.chunk.js.map