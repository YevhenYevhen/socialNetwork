(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{108:function(e,s,t){"use strict";t.r(s);var a=t(30),n=(t(1),t(93)),i=t.n(n),c=t(10),r=t(0),o=function(e){var s="/dialogs/"+e.id;return Object(r.jsx)("div",{className:i.a.dialog+" "+i.a.active,children:Object(r.jsx)(c.b,{to:s,children:e.name})})},u=function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:i.a.message,children:e.text})})},d=t(2),g=t(25),l=t(15),j=Object(l.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){var t=Object(a.b)(s);e(t)}}}))((function(e){return Object(r.jsx)(g.b,{onSubmit:function(s){e.sendMessage(s.message)},validate:function(e){var s={};return e.message&&0===e.message.length&&(s.message="Enter a valid email"),s},render:function(e){var s=e.handleSubmit;return Object(r.jsxs)("form",{onSubmit:s,children:[Object(r.jsx)(g.a,{name:"message",render:function(e){var s=e.input,t=e.meta;return Object(r.jsxs)("div",{children:[Object(r.jsx)("textarea",Object(d.a)({placeholder:"Enter your message"},s)),t.touched&&t.error&&Object(r.jsx)("span",{children:t.error})]})}}),Object(r.jsx)("button",{type:"submit",children:"Send message"})]})}})})),b=function(e){var s=e.dialogsPage.dialogsData.map((function(e){return Object(r.jsx)(o,{name:e.name,id:e.id})})),t=e.dialogsPage.messagesData.map((function(e){return Object(r.jsx)(u,{text:e.text})}));e.dialogsPage.newMessageData;return Object(r.jsxs)("div",{className:i.a.dialogs,children:[Object(r.jsx)("div",{className:i.a.dialogsItems,children:s}),Object(r.jsxs)("div",{className:i.a.messages,children:[t,Object(r.jsx)("div",{children:Object(r.jsx)(j,{sendMessage:e.sendMessage})})]})]})},m=t(94),O=t(26);s.default=Object(O.c)(Object(l.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e(Object(a.b)(s))}}})),m.a)(b)},93:function(e,s,t){e.exports={dialogs:"Dialogs_dialogs__2xRSA",dialogsItems:"Dialogs_dialogsItems__2sNe2",active:"Dialogs_active__2sQhs",dialog:"Dialogs_dialog__lk_cw",messages:"Dialogs_messages__1w_Up",message:"Dialogs_message__1xIDh",messageInputArea:"Dialogs_messageInputArea__2qcEU"}},94:function(e,s,t){"use strict";t.d(s,"a",(function(){return b}));var a=t(2),n=t(31),i=t(32),c=t(34),r=t(33),o=t(1),u=t.n(o),d=t(15),g=t(4),l=t(0),j=function(e){return{isAuth:e.auth.isAuth}},b=function(e){var s=function(s){Object(c.a)(o,s);var t=Object(r.a)(o);function o(){return Object(n.a)(this,o),t.apply(this,arguments)}return Object(i.a)(o,[{key:"render",value:function(){return this.props.isAuth?Object(l.jsx)(e,Object(a.a)({},this.props)):Object(l.jsx)(g.a,{to:"/login"})}}]),o}(u.a.Component);return Object(d.b)(j)(s)}}}]);
//# sourceMappingURL=5.06646606.chunk.js.map