(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{107:function(e,t,s){"use strict";s.r(t);var n=s(2),r=s(31),c=s(32),a=s(34),i=s(33),o=s(1),u=s.n(o),l=s(95),j=s.n(l),b=s(29),p=s(96),f=s.n(p),d=s(97),O=s.n(d),h=s(0),m=function(e){return Object(h.jsxs)("div",{className:O.a.item,children:[Object(h.jsx)("img",{src:"https://www.byrdie.com/thmb/kAXw1ZXSfixyaiIjLt0tVfRzhhs=/843x1024/filters:fill(auto,1)/GettyImages-1035308964-5d15a77127854247b5c841d339a546c0.jpeg",alt:""}),Object(h.jsx)("div",{className:O.a.message,children:e.message}),Object(h.jsx)("div",{children:Object(h.jsxs)("span",{children:[Object(h.jsx)("button",{className:O.a.likeButton,children:"Like"}),e.likes]})})]})},x=s(25),v=s(15),_=Object(v.b)((function(e){return{}}),(function(e){return{addPost:function(t){var s=Object(b.a)(t);e(s)}}}))((function(e){return Object(h.jsx)(x.b,{onSubmit:function(t){e.addPost(t.post)},validate:function(e){var t={};return e.post&&0===e.post&&(t.post="Enter a valid email"),t},render:function(e){var t=e.handleSubmit;return Object(h.jsxs)("form",{onSubmit:t,children:[Object(h.jsx)(x.a,{name:"post",render:function(e){var t=e.input,s=e.meta;return Object(h.jsxs)("div",{children:[Object(h.jsx)("textarea",Object(n.a)({placeholder:"Enter your post"},t)),s.touched&&s.error&&Object(h.jsx)("span",{children:s.error})]})}}),Object(h.jsx)("button",{type:"submit",children:"Post"})]})}})})),g=function(e){var t=e.postsData.map((function(e){return Object(h.jsx)(m,{message:e.message,likes:e.likesCounter})}));e.newPostData;return console.log(e),console.log("render"),Object(h.jsxs)("div",{className:f.a.postsBlock,children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"My posts"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:Object(h.jsx)(_,{})}),Object(h.jsx)("div",{})]})]}),Object(h.jsx)("div",{className:f.a.posts,children:t.reverse()})]})},P=s(39),w=s(98),N=s.n(w),k=s(18),M=function(e){var t=Object(o.useState)(!1),s=Object(P.a)(t,2),n=s[0],r=s[1],c=function(){r(!0)},a=Object(o.useState)(e.status),i=Object(P.a)(a,2),u=i[0],l=i[1];return Object(o.useEffect)((function(){l(e.status)}),[e.status]),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:e.isOwner&&n&&Object(h.jsx)("input",{onChange:function(e){l(e.currentTarget.value)},value:u,autoFocus:!0,onBlur:function(){r(!1),e.updateStatus(u)}})}),Object(h.jsx)("div",{children:!n&&Object(h.jsx)("div",{children:Object(h.jsx)("span",{onClick:e.isOwner&&c,children:u})||Object(h.jsx)("span",{onClick:e.isOwner&&c,children:"Enter your status..."})})})]})},S=s(23),y=s(99),I=s.n(y),C=function(e){return Object(h.jsx)("div",{className:I.a.form,children:Object(h.jsx)(x.b,{onSubmit:function(t){console.log(t),t.LookingForAJobDescription="null",e.saveProfile(t),e.deactivateEditMode(!1)},validate:function(e){return{}},render:function(t){var s=t.handleSubmit;return Object(h.jsxs)("form",{onSubmit:s,children:[Object(h.jsx)(x.a,{name:"fullName",render:function(e){var t=e.input,s=e.meta;return Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{className:I.a.label,children:"Full Name"}),Object(h.jsx)("input",Object(n.a)(Object(n.a)({className:I.a.input},t),{},{placeholder:"Full Name"})),s.touched&&s.error&&Object(h.jsx)("span",{children:s.error})]})}}),Object(h.jsx)(x.a,{name:"AboutMe",render:function(e){var t=e.input,s=e.meta;return Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{className:I.a.label,children:"About me"}),Object(h.jsx)("textarea",Object(n.a)(Object(n.a)({className:I.a.input},t),{},{placeholder:"About me"})),s.touched&&s.error&&Object(h.jsx)("span",{children:s.error})]})}}),Object(h.jsx)(x.a,{name:"lookingForAJob",type:"checkbox",render:function(e){var t=e.input,s=e.meta;return Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{className:I.a.label,children:"Looking for a job"}),Object(h.jsx)("input",Object(n.a)(Object(n.a)({type:"checkbox",className:I.a.input},t),{},{placeholder:"Website"})),s.touched&&s.error&&Object(h.jsx)("span",{children:s.error})]})}}),Object(h.jsxs)("div",{children:["Contacts:",Object.keys(e.profile.contacts).map((function(e){return Object(h.jsx)(x.a,{name:"contacts.".concat(e),render:function(t){var s=t.input,r=t.meta;return Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{className:I.a.label,children:e}),Object(h.jsx)("textarea",Object(n.a)(Object(n.a)({className:I.a.input},s),{},{placeholder:e})),r.touched&&r.error&&Object(h.jsx)("span",{children:r.error})]})}})}))]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",children:"Save"})})]})}})})},A=(s(100),function(e){var t=e.contactsTitle,s=e.contactsValue,n=Object(o.useState)(!1),r=Object(P.a)(n,2),c=r[0],a=r[1],i=function(e){a(e)};switch(t){case"facebook":return Object(h.jsx)("a",{href:s,children:Object(h.jsx)("img",{onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)},className:c?N.a.iconsHover:N.a.icons,src:"https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png"})});case"github":return Object(h.jsx)("a",{href:s,onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)},children:Object(h.jsx)("img",{className:c?N.a.iconsHover:N.a.icons,src:"https://icons-for-free.com/iconfiles/png/512/part+1+github-1320568339880199515.png"})});case"instagram":return Object(h.jsx)("a",{href:s,onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)},children:Object(h.jsx)("img",{className:c?N.a.iconsHover:N.a.icons,src:"https://cdn-icons-png.flaticon.com/512/174/174855.png",alt:""})});case"twitter":return Object(h.jsx)("a",{href:s,onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)},children:Object(h.jsx)("img",{className:c?N.a.iconsHover:N.a.icons,src:"https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png",alt:""})});case"youtube":return Object(h.jsx)("a",{href:s,onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)},children:Object(h.jsx)("img",{className:c?N.a.iconsHover:N.a.icons,src:"https://cliply.co/wp-content/uploads/2019/04/371903520_SOCIAL_ICONS_YOUTUBE.png",alt:""})})}}),E=function(e){var t=e.profile,s=e.isOwner,n=e.activateEditMode;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:N.a.contacts,children:[Object.keys(t.contacts).filter((function(e){return"mainLink"!==e&&"vk"!==e&&"website"!==e})).map((function(e){if(t.contacts[e])return Object(h.jsx)(A,{contactsTitle:e,contactsValue:t.contacts[e]},e)})),s&&Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:n,children:"Edit"})})]})})},U=function(e){var t=Object(o.useState)(!1),s=Object(P.a)(t,2),n=s[0],r=s[1],c=Object(o.useState)(!1),a=Object(P.a)(c,2),i=a[0],u=a[1];if(!e.profile)return Object(h.jsx)(k.a,{});return Object(h.jsxs)("div",{className:N.a.wrapper,children:[Object(h.jsx)("img",{onClick:function(e){u(!0)},className:e.isOwner?N.a.ownerUserPic:N.a.userPic,src:e.profile.photos.large||S.a}),e.isOwner&&i&&Object(h.jsx)("div",{children:Object(h.jsx)("input",{className:N.a.updateUserPicButton,type:"file",onChange:function(t){t.target.files.length&&e.saveNewMainPic(t.target.files[0]),u(!1)}})}),Object(h.jsxs)("div",{className:N.a.nameAndStatus,children:[Object(h.jsx)("div",{className:N.a.fullName,children:e.profile.fullName}),Object(h.jsx)("div",{className:N.a.status,children:Object(h.jsx)(M,{status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner})})]}),Object(h.jsx)("div",{className:N.a.aboutMe,children:e.profile.aboutMe}),n?Object(h.jsx)(C,{initialValues:e.profile,profile:e.profile,saveProfile:e.saveProfile,deactivateEditMode:function(){r(!1)}}):Object(h.jsx)(E,{profile:e.profile,isOwner:e.isOwner,activateEditMode:function(){r(!0)}})]})},D=Object(v.b)((function(e){return{postsData:e.profilePage.postsData}}),(function(e){return{addPost:function(){e(Object(b.a)())}}}))(g),L=function(e){return Object(h.jsxs)("div",{className:j.a.content,children:[" ",Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:j.a.mainPic,src:"https://www.artmajeur.com/medias/hd/n/o/nottrott/artwork/10805254_large-abstract-painting-958.jpg"})}),Object(h.jsx)(U,{saveProfile:e.saveProfile,isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,saveNewMainPic:e.saveNewMainPic}),Object(h.jsx)(D,{})]})},F=(s(43),s(4)),B=(s(7),s(94)),H=s(26),J=s(20),V=function(e){Object(a.a)(s,e);var t=Object(i.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"refreshComponent",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authUserId),this.props.getUserProfile(e),this.props.getUserStatus(e),this.props.getAuthUserPhoto()}},{key:"componentDidMount",value:function(){this.refreshComponent()}},{key:"componentDidUpdate",value:function(e,t){this.props.match.params.userId!=e.match.params.userId&&this.refreshComponent()}},{key:"render",value:function(){return Object(h.jsx)(L,Object(n.a)(Object(n.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,saveProfile:this.props.saveProfile,updateStatus:this.props.updateStatus,saveNewMainPic:this.props.saveNewMainPic}))}}]),s}(u.a.Component);t.default=Object(H.c)(Object(v.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authUserId:e.auth.userId}}),{getUserProfile:b.c,getUserStatus:b.d,updateStatus:b.g,saveNewMainPic:b.e,saveProfile:b.f,getAuthUserPhoto:J.c}),F.g,B.a)(V)},94:function(e,t,s){"use strict";s.d(t,"a",(function(){return f}));var n=s(2),r=s(31),c=s(32),a=s(34),i=s(33),o=s(1),u=s.n(o),l=s(15),j=s(4),b=s(0),p=function(e){return{isAuth:e.auth.isAuth}},f=function(e){var t=function(t){Object(a.a)(o,t);var s=Object(i.a)(o);function o(){return Object(r.a)(this,o),s.apply(this,arguments)}return Object(c.a)(o,[{key:"render",value:function(){return this.props.isAuth?Object(b.jsx)(e,Object(n.a)({},this.props)):Object(b.jsx)(j.a,{to:"/login"})}}]),o}(u.a.Component);return Object(l.b)(p)(t)}},95:function(e,t,s){e.exports={content:"Profile_content__2wLDD",mainPic:"Profile_mainPic__3Krzy"}},96:function(e,t,s){e.exports={postsBlock:"MyPosts_postsBlock__2ifKf",posts:"MyPosts_posts__3tZ1c"}},97:function(e,t,s){e.exports={item:"Post_item__ihtu9",likeButton:"Post_likeButton__iek-s",message:"Post_message__3raFK"}},98:function(e,t,s){e.exports={wrapper:"ProfileInfo_wrapper__3boPV",fullName:"ProfileInfo_fullName__2p--3",userPic:"ProfileInfo_userPic__Ne5H0",ownerUserPic:"ProfileInfo_ownerUserPic__1pnfC",aboutMe:"ProfileInfo_aboutMe__1mww3",contacts:"ProfileInfo_contacts__3y62P",status:"ProfileInfo_status__2G3BZ",icons:"ProfileInfo_icons__1w1-r",iconsHover:"ProfileInfo_iconsHover__3-scH",nameAndStatus:"ProfileInfo_nameAndStatus__29SDJ"}},99:function(e,t,s){e.exports={form:"ProfileDataForm_form__3_Fge",label:"ProfileDataForm_label__1PG5L",input:"ProfileDataForm_input__2FqNM"}}}]);
//# sourceMappingURL=3.7bd066f3.chunk.js.map