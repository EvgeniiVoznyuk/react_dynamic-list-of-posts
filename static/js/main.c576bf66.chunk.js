(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),s=n.n(c),u=n(3),o=(n(12),n(13),n(1)),i=n.n(o),l=n(2),m=function(){var e=Object(l.a)(i.a.mark((function e(t,n){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://mate-api.herokuapp.com").concat(t),n);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("".concat(a.status," - ").concat(a.statusText));case 5:return e.next=7,a.json();case 7:return r=e.sent,e.abrupt("return",r.data);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/posts");case 2:return n=e.sent,e.abrupt("return",t?n.filter((function(e){return e.userId===t})):n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/posts/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=n(4),b=n.n(d),v=function(e){var t=e.userId,n=e.title,a=e.id,c=e.selectedPostId,s=e.selectPostId;return r.a.createElement("li",{className:"PostsList__item"},r.a.createElement("div",null,r.a.createElement("b",null,"[User #",t,"]:"," "),n),r.a.createElement("button",{onClick:function(){return s(a)},type:"button",className:b()("PostsList__button button",{"button--is-active":a===c})},a===c?"Close":"Open"))},h=(n(15),function(e){var t=e.selectedUserId,n=e.selectPostId,c=e.selectedPostId,s=Object(a.useState)([]),o=Object(u.a)(s,2),m=o[0],f=o[1];Object(a.useEffect)((function(){d()}),[t]);var d=function(){var e=Object(l.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t);case 2:n=e.sent,f(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"PostsList"},r.a.createElement("h2",null,"Posts:"),r.a.createElement("ul",{className:"PostsList__list"},m.map((function(e){return r.a.createElement(v,Object.assign({key:e.id},e,{selectedPostId:c,selectPostId:n}))}))))}),E=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/comments");case 2:return n=e.sent,e.abrupt("return",n.filter((function(e){return e.postId===t&&e.body})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(l.a)(i.a.mark((function e(t,n,a,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(c={postId:t,name:n,email:a,body:r},m("/comments",{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(c)})));case 1:case"end":return e.stop()}var c}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),O=function(e){return t="/comments/".concat(e),m(t,{method:"DELETE"});var t},j=(n(16),function(e){var t=e.postId,n=e.updateComments,c=Object(a.useState)(""),s=Object(u.a)(c,2),o=s[0],m=s[1],p=Object(a.useState)(""),f=Object(u.a)(p,2),d=f[0],b=f[1],v=Object(a.useState)(""),h=Object(u.a)(v,2),E=h[0],O=h[1],j=function(){var e=Object(l.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),o&&d.includes("@")&&E){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,_(t,o,d,E);case 5:n(),O("");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{className:"NewCommentForm",onSubmit:j},r.a.createElement("div",{className:"form-field"},r.a.createElement("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:o,onChange:function(e){return m(e.target.value)}})),r.a.createElement("div",{className:"form-field"},r.a.createElement("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:d,onChange:function(e){return b(e.target.value)}})),r.a.createElement("div",{className:"form-field"},r.a.createElement("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:E,onChange:function(e){return O(e.target.value)}})),r.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button"},"Add a comment"))}),w=function(e){var t=e.comments,n=e.updateComments,a=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:n();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("ul",{className:"PostDetails__list"},t.map((function(e){return r.a.createElement("li",{className:"PostDetails__list-item",key:e.id},r.a.createElement("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return a(e.id)}},"X"),r.a.createElement("p",null,e.body))})))},y=(n(17),function(e){var t=e.selectedPostId,n=Object(a.useState)({}),c=Object(u.a)(n,2),s=c[0],o=c[1],m=Object(a.useState)([]),p=Object(u.a)(m,2),d=p[0],v=p[1],h=Object(a.useState)(!1),_=Object(u.a)(h,2),O=_[0],y=_[1];Object(a.useEffect)((function(){N(),x()}),[t]);var N=function(){var e=Object(l.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:n=e.sent,o(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(l.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t);case 2:n=e.sent,v(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"PostDetails"},r.a.createElement("h2",null,"Post details:"),r.a.createElement("section",{className:"PostDetails__post"},r.a.createElement("p",null,s.body)),r.a.createElement("section",{className:"PostDetails__comments"},d.length?r.a.createElement("button",{type:"button",className:b()({button:!0,"PostDetails__remove-button":O}),onClick:function(){return y(!O)}},"".concat(O?"Hide":"Show"," ").concat(d.length," comments")):r.a.createElement("p",null,"No comments here yet"),O&&r.a.createElement(w,{comments:d,updateComments:x})),r.a.createElement("section",null,r.a.createElement("div",{className:"PostDetails__form-wrapper"},r.a.createElement(j,{postId:t,updateComments:x}))))}),N=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/users");case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(e){var t=e.changeHandler,n=e.selectedUser,c=Object(a.useState)([]),s=Object(u.a)(c,2),o=s[0],m=s[1];Object(a.useEffect)((function(){p()}),[]);var p=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,m(t.slice(0,9));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("header",{className:"App__header"},r.a.createElement("label",null,"Select a user: \xa0",r.a.createElement("select",{value:n,onChange:t,className:"App__user-selector"},r.a.createElement("option",{value:"0"},"All users"),o.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)})))))},P=function(){var e=Object(a.useState)(0),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(0),o=Object(u.a)(s,2),i=o[0],l=o[1];return r.a.createElement("div",{className:"App"},r.a.createElement(x,{changeHandler:function(e){c(+e.target.value)},selectedUser:n}),r.a.createElement("main",{className:"App__main"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(h,{selectedUserId:n,selectPostId:function(e){l(e===i?0:e)},selectedPostId:i})),r.a.createElement("div",{className:"App__content"},!!i&&r.a.createElement(y,{selectedPostId:i}))))};s.a.render(r.a.createElement(P,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.c576bf66.chunk.js.map