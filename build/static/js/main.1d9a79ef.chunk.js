(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,function(e,t,n){e.exports={form:"Checkout_form__3BU_U",control:"Checkout_control__13ne0",actions:"Checkout_actions__YMcGQ",submit:"Checkout_submit__AQWnx",invalid:"Checkout_invalid__2abtY"}},,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2EWoy",total:"Cart_total__3sRFV",actions:"Cart_actions__1RtDH","button--alt":"Cart_button--alt__3wNnu",button:"Cart_button__10kV4",userId:"Cart_userId__1wsXE"}},,,,function(e,t,n){e.exports={header:"Header_header__tsV2t","main-image":"Header_main-image__2-_kz",logo:"Header_logo__1WJYf",nav:"Header_nav__3eAsz",nav_link:"Header_nav_link__3CJlz"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__IlAYC",summary:"CartItem_summary__2nNba",price:"CartItem_price__3FMca",amount:"CartItem_amount__2MI3l",actions:"CartItem_actions__1Ejfr"}},function(e,t,n){e.exports={orderDetails:"SearchBox_orderDetails__3Grmv",appear:"SearchBox_appear__3iXi3",searchBoxContainer:"SearchBox_searchBoxContainer__3Xcou",searchBox:"SearchBox_searchBox__1hawq",button:"SearchBox_button__1vDhs",invalid:"SearchBox_invalid__2IGQ3"}},function(e,t,n){e.exports={orderDetailsContainer:"OrderDetails_orderDetailsContainer__1OYBp",userInfo:"OrderDetails_userInfo__2PkLT",orderDetails:"OrderDetails_orderDetails__30_zI",orderNotFound:"OrderDetails_orderNotFound__3RLIc"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__2xP8f",icon:"HeaderCartButton_icon__2e_1L",badge:"HeaderCartButton_badge__3Aa7c",bump:"HeaderCartButton_bump__uPwhy"}},function(e,t,n){e.exports={meal:"MealItem_meal__3YHsm",description:"MealItem_description__TZ8XB",price:"MealItem_price__1x5IP"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__1dQLc","meals-appear":"AvailableMeals_meals-appear__2MKyM",MealsLoading:"AvailableMeals_MealsLoading__1ifpD",MealsError:"AvailableMeals_MealsError__1tYzN"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__bte58",modal:"Modal_modal__17dl7","slide-down":"Modal_slide-down__37k8k"}},,,function(e,t,n){e.exports={summary:"MealsSummary_summary__1xLlS"}},function(e,t,n){e.exports={card:"Card_card__ohS4l"}},function(e,t,n){e.exports={input:"Input_input__1DmnG"}},function(e,t,n){e.exports={form:"MealItemForm_form__o9-GJ"}},function(e,t,n){e.exports={table:"ItemsTable_table__3F4DD"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(16),a=n.n(c),r=n(3),s=n(23),i=n(7),o=n(1),l=n.n(o),d=l.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),j=n(0),u={items:[],totalAmount:0},b=function(e,t){if("ADD"===t.type){var n,c=e.totalAmount+t.item.price*t.item.amount,a=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[a];if(r){var o=Object(i.a)(Object(i.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(s.a)(e.items))[a]=o}else n=e.items.concat(t.item);return{items:n,totalAmount:c}}if("REMOVE"===t.type){var l,d=e.items.findIndex((function(e){return e.id===t.id})),j=e.items[d],b=e.totalAmount-j.price;if(1===j.amount)l=e.items.filter((function(e){return e.id!==t.id}));else{var m=Object(i.a)(Object(i.a)({},j),{},{amount:j.amount-1});(l=Object(s.a)(e.items))[d]=m}return{items:l,totalAmount:b}}return t.type,u},m=function(e){var t=Object(o.useReducer)(b,u),n=Object(r.a)(t,2),c=n[0],a=n[1],s={items:c.items,totalAmount:c.totalAmount,addItem:function(e){a({type:"ADD",item:e})},removeItem:function(e){a({type:"REMOVE",id:e})},clearCart:function(){a({type:"CLEAR"})}};return Object(j.jsx)(d.Provider,{value:s,children:e.children})},O=n(6),h=(n(34),n(24)),x=n.n(h),f=function(){return Object(j.jsxs)("section",{className:x.a.summary,children:[Object(j.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(j.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(j.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},p=n(9),_=n.n(p),v=n(11),C=n(25),N=n.n(C),g=function(e){return Object(j.jsx)("div",{className:"".concat(N.a.card," ").concat(e.className," "),children:e.children})},y=n(26),I=n.n(y),k=l.a.forwardRef((function(e,t){return Object(j.jsxs)("div",{className:I.a.input,children:[Object(j.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(j.jsx)("input",Object(i.a)({ref:t},e.input))]})})),S=n(27),A=n.n(S),D=function(e){var t=Object(o.useState)(!0),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(o.useRef)();return Object(j.jsxs)("form",{className:A.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,c=+n;0===n.trim().length||c<1||c>5?a(!1):e.onAddToCart(c)},children:[Object(j.jsx)(k,{ref:s,label:"Amount",input:{id:"amount",type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(j.jsx)("button",{children:"+ Add"}),!c&&Object(j.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},w=n(19),M=n.n(w),F=function(e){var t=Object(o.useContext)(d),n="$".concat(e.price);return Object(j.jsxs)("li",{className:M.a.meal,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:e.name}),Object(j.jsx)("div",{className:M.a.description,children:e.description}),Object(j.jsx)("div",{className:M.a.price,children:n})]}),Object(j.jsx)("div",{children:Object(j.jsx)(D,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},B=n(20),E=n.n(B),H=function(){var e=Object(o.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(o.useState)(!0),s=Object(r.a)(a,2),i=s[0],l=s[1],d=Object(o.useState)(),u=Object(r.a)(d,2),b=u[0],m=u[1];if(Object(o.useEffect)((function(){var e=function(){var e=Object(v.a)(_.a.mark((function e(){var t,n,a,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fancy-meals-default-rtdb.europe-west1.firebasedatabase.app/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something went wrong!");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,a=[],n)a.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});c(a),l(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){l(!1),m(e.message)}))}),[]),i)return Object(j.jsx)("section",{className:E.a.MealsLoading,children:Object(j.jsx)("p",{children:"Loading..."})});if(b)return Object(j.jsx)("section",{className:E.a.MealsError,children:Object(j.jsx)("p",{children:b})});var O=n.map((function(e){return Object(j.jsx)(F,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(j.jsx)("section",{className:E.a.meals,children:Object(j.jsx)(g,{children:Object(j.jsx)("ul",{children:O})})})},P=function(){return Object(j.jsxs)("main",{children:[Object(j.jsx)(f,{}),Object(j.jsx)(H,{})]})};var R=function(){return Object(j.jsx)(P,{})},Y=function(){return Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(j.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},L=n(18),T=n.n(L),z=function(e){var t=Object(o.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(o.useContext)(d).items,i=s.reduce((function(e,t){return e+t.amount}),0),l="".concat(T.a.button," ").concat(c?T.a.bump:"");return Object(o.useEffect)((function(){if(0!==s.length){a(!0);var e=setTimeout((function(){a(!1)}),300);return function(){clearTimeout(e)}}}),[s]),Object(j.jsxs)("button",{className:l,onClick:e.onClick,children:[Object(j.jsx)("span",{className:T.a.icon,children:Object(j.jsx)(Y,{})}),Object(j.jsx)("span",{children:"Your Cart"}),Object(j.jsx)("span",{className:T.a.badge,children:i})]})},V=(n.p,n(12)),J=n.n(V),G=function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("header",{className:J.a.header,children:[Object(j.jsx)(O.b,{to:"/",className:J.a.logo,children:"FANCY MEALS"}),Object(j.jsxs)("div",{className:J.a.nav,children:[Object(j.jsx)(O.b,{to:"/order/",className:J.a.nav_link,children:"Check Order"}),Object(j.jsx)(O.b,{to:"/",className:J.a.nav_link,children:"Menu"}),Object(j.jsx)(z,{onClick:e.onShowCart})]})]})})},$=n(21),Q=n.n($),X=function(e){return Object(j.jsx)("div",{className:Q.a.backdrop,onClick:e.onClose})},W=function(e){return Object(j.jsx)("div",{className:Q.a.modal,children:Object(j.jsx)("div",{className:Q.a.content,children:e.children})})},q=document.getElementById("overlays"),U=function(e){return Object(j.jsxs)(o.Fragment,{children:[a.a.createPortal(Object(j.jsx)(X,{onClose:e.onClose}),q),a.a.createPortal(Object(j.jsx)(W,{children:e.children}),q)]})},K=n(13),Z=n.n(K),ee=function(e){var t="$".concat(e.price.toFixed(2));return Object(j.jsxs)("li",{className:Z.a["cart-item"],children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:e.name}),Object(j.jsxs)("div",{className:Z.a.summary,children:[Object(j.jsx)("span",{className:Z.a.price,children:t}),Object(j.jsxs)("span",{className:Z.a.amount,children:["x ",e.amount]})]})]}),Object(j.jsxs)("div",{className:Z.a.actions,children:[Object(j.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(j.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},te=n(8),ne=n.n(te),ce=n(5),ae=n.n(ce),re=function(e){return""===e.trim()},se=function(e){var t=Object(o.useState)({name:!0,street:!0,city:!0,postalCode:!0}),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(o.useRef)(),i=Object(o.useRef)(),l=Object(o.useRef)(),d=Object(o.useRef)(),u="".concat(ae.a.control," ").concat(c.name?"":ae.a.invalid),b="".concat(ae.a.control," ").concat(c.street?"":ae.a.invalid),m="".concat(ae.a.control," ").concat(c.postalCode?"":ae.a.invalid),O="".concat(ae.a.control," ").concat(c.city?"":ae.a.invalid);return Object(j.jsxs)("form",{className:ae.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,c=i.current.value,r=l.current.value,o=d.current.value,j=!re(n),u=!re(c),b=!re(o),m=5===r.trim().length;a({name:j,street:u,city:b,postalCode:m}),j&&u&&b&&m&&e.onConfirm({name:n,street:c,city:o,postalCode:r})},children:[Object(j.jsxs)("div",{className:u,children:[Object(j.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(j.jsx)("input",{type:"text",id:"name",ref:s}),!c.name&&Object(j.jsx)("p",{children:"Please enter a valid name!"})]}),Object(j.jsxs)("div",{className:b,children:[Object(j.jsx)("label",{htmlFor:"street",children:"Street"}),Object(j.jsx)("input",{type:"text",id:"street",ref:i}),!c.street&&Object(j.jsx)("p",{children:"Please enter a valid street!"})]}),Object(j.jsxs)("div",{className:m,children:[Object(j.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(j.jsx)("input",{type:"text",id:"postal",ref:l}),!c.postalCode&&Object(j.jsx)("p",{children:"Please enter a valid postal code (5 characters long)!"})]}),Object(j.jsxs)("div",{className:O,children:[Object(j.jsx)("label",{htmlFor:"city",children:"City"}),Object(j.jsx)("input",{type:"text",id:"city",ref:d}),!c.city&&Object(j.jsx)("p",{children:"Please enter a valid city!"})]}),Object(j.jsxs)("div",{className:ae.a.actions,children:[Object(j.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(j.jsx)("button",{className:ae.a.submit,children:"Confirm"})]})]})},ie=new Date,oe=ie.getFullYear()+"-"+(ie.getMonth()+1)+"-"+ie.getDate()+" "+(ie.getHours()+":"+ie.getMinutes()+":"+ie.getSeconds()),le=function(e){var t=Object(o.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(o.useState)(!1),u=Object(r.a)(s,2),b=u[0],m=u[1],h=Object(o.useState)(!1),x=Object(r.a)(h,2),f=x[0],p=x[1],C=Object(o.useState)(""),N=Object(r.a)(C,2),g=N[0],y=N[1],I=Object(o.useContext)(d),k="$".concat(I.totalAmount.toFixed(2)),S=I.items.length>0,A=function(e){I.removeItem(e)},D=function(e){I.addItem(e=Object(i.a)(Object(i.a)({},e),{},{amount:1}))},w=function(){var e=Object(v.a)(_.a.mark((function e(t){var n,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,fetch("https://fancy-meals-default-rtdb.europe-west1.firebasedatabase.app/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:I.items,total:I.totalAmount.toFixed(2),createAt:oe})});case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,m(!1),p(!0),y(c.name),console.log(c),I.clearCart();case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=Object(j.jsx)("ul",{className:ne.a["cart-items"],children:I.items.map((function(e){return Object(j.jsx)(ee,{name:e.name,amount:e.amount,price:e.price,onRemove:A.bind(null,e.id),onAdd:D.bind(null,e)},e.id)}))}),F=Object(j.jsxs)("div",{className:ne.a.actions,children:[Object(j.jsx)("button",{className:ne.a["button--alt"],onClick:e.onClose,children:"Close"}),S&&Object(j.jsx)("button",{className:ne.a.button,onClick:function(){a(!0)},children:"Order"})]}),B=Object(j.jsxs)(l.a.Fragment,{children:[M,Object(j.jsxs)("div",{className:ne.a.total,children:[Object(j.jsx)("span",{children:"Total Amount"}),Object(j.jsx)("span",{children:k})]}),c&&Object(j.jsx)(se,{onConfirm:w,onCancel:e.onClose}),!c&&F]}),E=Object(j.jsx)("p",{children:"Sending order data..."}),H=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:ne.a.userId,children:[Object(j.jsx)("p",{children:"Successfully sent the order!"}),Object(j.jsxs)("p",{children:['Your Order ID is: "',g,'"']}),Object(j.jsxs)("div",{children:["Check Order's Detail"," ",Object(j.jsx)(O.b,{className:ne.a.link,to:"/order/".concat(g),children:"Here"})]})]}),Object(j.jsx)("div",{className:ne.a.actions,children:Object(j.jsx)("button",{className:ne.a.button,onClick:e.onClose,children:"Close"})})]});return Object(j.jsxs)(U,{onClose:e.onClose,children:[!b&&!f&&B,b&&E,!b&&f&&H]})},de=n(2),je=n(14),ue=n.n(je),be=function(){var e=Object(o.useState)(""),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(o.useState)(!0),s=Object(r.a)(a,2),i=s[0],l=s[1],d=Object(o.useRef)(),u=Object(de.f)();return Object(j.jsx)("div",{className:ue.a.orderDetails,children:Object(j.jsx)(g,{className:ue.a.searchBoxContainer,children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Enter Your Order ID"}),Object(j.jsxs)("div",{className:"".concat(ue.a.searchBox," ").concat(i?"":ue.a.invalid," "),children:[Object(j.jsx)("label",{htmlFor:"orderId",children:"Order ID:"}),Object(j.jsx)("input",{type:"text",id:"orderId",ref:d,onChange:function(){c(d.current.value)}}),!i&&Object(j.jsx)("p",{style:{color:"red"},children:"Please Enter Valid ID"})]}),Object(j.jsx)("button",{className:ue.a.button,onClick:function(){if(""===n.trim())return l(!1),void console.log(i);l(!0),u("/order/".concat(n))},children:"Search"})]})})})},me=function(){return Object(j.jsx)(be,{})},Oe=n(28),he=n.n(Oe),xe=function(e){return Object(j.jsx)("div",{className:he.a.table,children:Object(j.jsxs)("table",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Name"}),Object(j.jsx)("th",{children:"Amount"}),Object(j.jsx)("th",{children:"Price"})]}),e.items.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.name}),Object(j.jsx)("td",{children:e.amount}),Object(j.jsxs)("td",{children:["$ ",e.price]})]})})),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Total:"}),Object(j.jsx)("td",{children:" "}),Object(j.jsxs)("td",{children:["$ ",e.total]})]})]})})},fe=n(15),pe=n.n(fe),_e=function(){var e=Object(de.g)().id,t=Object(de.f)(),n=Object(o.useState)({}),c=Object(r.a)(n,2),a=c[0],s=c[1],i=Object(o.useState)(!1),l=Object(r.a)(i,2),d=l[0],u=l[1],b=a.createAt,m=void 0===b?"":b,O=a.total,h=void 0===O?"":O,x=a.orderedItems,f=void 0===x?[]:x,p=a.user,C=void 0===p?{}:p,N=Object(o.useState)(!1),y=Object(r.a)(N,2),I=y[0],k=y[1],S=Object(o.useState)(!1),A=Object(r.a)(S,2),D=(A[0],A[1]);Object(o.useEffect)((function(){var t=function(){var t=Object(v.a)(_.a.mark((function t(){var n,c;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return k(!0),t.next=3,fetch("https://fancy-meals-default-rtdb.europe-west1.firebasedatabase.app/orders/".concat(e,".json"));case 3:return null===(n=t.sent)&&(console.log(n),D("Cannot Find Order")),t.next=7,n.json();case 7:if(null!==(c=t.sent)){t.next=12;break}return u(!0),k(!1),t.abrupt("return");case 12:s(c),k(!1);case 14:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();try{t(),console.log("its go here")}catch(n){throw new Error(n.message)}}),[e]);var w=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("h1",{children:["Order ID: ",e]}),Object(j.jsxs)("div",{className:pe.a.orderDetails,children:[Object(j.jsxs)("div",{className:pe.a.userInfo,children:[Object(j.jsx)("h2",{children:"Deliver Info: "}),Object(j.jsxs)("div",{children:[Object(j.jsx)("strong",{children:"Name:"})," ",C.name]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("strong",{children:"City:"})," ",C.city]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("strong",{children:"Postal Code:"})," ",C.postalCode]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("strong",{children:"Street:"})," ",C.street]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("strong",{children:"Order At:"})," ",m]})]}),Object(j.jsxs)("div",{className:pe.a.orderItems,children:[Object(j.jsx)("h2",{children:"Order Info:"}),Object(j.jsx)(xe,{items:f,total:h})]})]})]}),M=Object(j.jsxs)("div",{className:pe.a.orderNotFound,children:[Object(j.jsx)("p",{children:"Order Not Found"}),Object(j.jsx)("button",{onClick:function(){return t("/order")},children:"Try Again"})]});return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:pe.a.orderDetailsContainer,children:Object(j.jsxs)(g,{children:[I&&Object(j.jsx)("p",{style:{textAlign:"center"},children:"Loading..."}),d&&!I&&M,!d&&!I&&w]})})})},ve=function(){return Object(j.jsx)(_e,{})},Ce=function(){var e=Object(o.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"body-container",children:[Object(j.jsx)(G,{onShowCart:function(){c(!0)}}),n&&Object(j.jsx)(le,{onClose:function(){c(!1)}}),Object(j.jsxs)(de.c,{children:[Object(j.jsx)(de.a,{path:"/",element:Object(j.jsx)(R,{})}),Object(j.jsx)(de.a,{path:"/order/",element:Object(j.jsx)(me,{})}),Object(j.jsx)(de.a,{path:"/order/:id",element:Object(j.jsx)(ve,{})})]})]})})};a.a.render(Object(j.jsx)(O.a,{children:Object(j.jsx)(m,{children:Object(j.jsx)(Ce,{})})}),document.getElementById("root"))}],[[36,1,2]]]);
//# sourceMappingURL=main.1d9a79ef.chunk.js.map