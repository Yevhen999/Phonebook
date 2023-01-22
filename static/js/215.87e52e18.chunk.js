"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[215],{5215:function(e,a,t){t.r(a),t.d(a,{default:function(){return R}});var r=t(2791),n=t(9434),s=t(6907),c=t(4558),i="ContactsItem_listItem__5AWn7",o="ContactsItem_contactIcon__C5rZe",l=t(4852),m=t(3400),d=t(653),u=t(3044),x=t(6259),h=t(7247),_=t(8619),f=t(184),p=function(e){var a=e.id,t=e.name,r=e.number,s=(0,n.I0)();return(0,f.jsxs)(l.ZP,{className:i,secondaryAction:(0,f.jsx)(m.Z,{edge:"end","aria-label":"delete",onClick:function(){s((0,c.GK)(a))},children:(0,f.jsx)(h.Z,{})}),children:[(0,f.jsx)(d.Z,{children:(0,f.jsx)(u.Z,{children:(0,f.jsx)(_.Z,{className:o})})}),(0,f.jsx)(x.Z,{primary:t,secondary:r})]})},j=t(493),b=function(e){var a=e.items;return(0,f.jsx)(j.Z,{children:a.map((function(e){var a=e.id,t=e.name,r=e.number;return(0,f.jsx)(p,{id:a,name:t,number:r},a)}))})},v=t(4554),N=t(3500),F=t(3978),y="Filter_title__pSkfx",Z="Filter_textFieldWrapper__ah-5J",g=function(e){var a=e.filter,t=(0,n.I0)();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h2",{className:y,children:"Contacts"}),(0,f.jsx)(v.Z,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:(0,f.jsx)("div",{className:Z,children:(0,f.jsx)(N.Z,{id:"standard-search",label:"Find contacts by name",type:"search",variant:"standard",value:a,onChange:function(e){return t((0,F.M)(e.target.value))}})})})]})},C=function(e){return e.contacts.contacts},I=function(e){return e.contacts.isLoading},k=function(e){return e.filter.filter},w=t(7762),A=t(5984),D=t(5705),L="FormData_form__UkWuB",q="FormData_labelWrapperName__xtyq-",P="FormData_labelWrapperNumber__khQLL",W="FormData_formLabelName__gGPI6",z="FormData_formLabelNumber__X4Fyp",J="FormData_formInputName__6cssI",S="FormData_formInputNumber__3POoe",B="FormData_btnSubmit__feP85",M=t(2797),T=M.Ry().shape({name:M.Z_().min(2,"Too short").required(""),number:M.Z_().length(9,"Format: xxx-xx-xx").required("")}),G=function(){var e=(0,n.I0)(),a=(0,n.v9)(C),t=(0,A.x0)(5),r=(0,A.x0)(5);return(0,f.jsx)(D.J9,{initialValues:{name:"",number:""},onSubmit:function(t,r){var n,s=r.resetForm,i=(0,w.Z)(a);try{for(i.s();!(n=i.n()).done;){if(n.value.name.toLowerCase()===t.name.toLowerCase())return void alert("".concat(t.name," is already in contacts"))}}catch(o){i.e(o)}finally{i.f()}e((0,c.uK)(t)),s()},validationSchema:T,children:(0,f.jsxs)(D.l0,{className:L,children:[(0,f.jsxs)("div",{className:q,children:[(0,f.jsx)("label",{className:W,htmlFor:t,children:"Name"}),(0,f.jsx)(D.gN,{className:J,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,id:t,placeholder:"John Doe"})]}),(0,f.jsxs)("div",{className:P,children:[(0,f.jsx)("label",{className:z,htmlFor:r,children:"Number"}),(0,f.jsx)(D.gN,{className:S,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,id:r,placeholder:"xxx-xx-xx"})]}),(0,f.jsx)("button",{className:B,type:"submit",children:"Add contact"})]})})},K=(0,t(6916).P1)([C,k],(function(e,a){var t=a.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(t)}))})),R=function(){var e=(0,n.I0)(),a=(0,n.v9)(I);(0,r.useEffect)((function(){e((0,c.yF)())}),[e]);var t=(0,n.v9)(C),i=(0,n.v9)(k),o=(0,n.v9)(K);return(0,f.jsxs)(s.B6,{children:[(0,f.jsx)(s.ql,{children:(0,f.jsx)("title",{children:"Your contacts"})}),(0,f.jsx)("div",{children:a&&"Request in progress..."}),(0,f.jsx)(G,{}),t.length>0?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(g,{filter:i}),(0,f.jsx)(b,{items:o})]}):(0,f.jsx)("p",{style:{textAlign:"center"},children:"There are no contacts"})]})}}}]);
//# sourceMappingURL=215.87e52e18.chunk.js.map