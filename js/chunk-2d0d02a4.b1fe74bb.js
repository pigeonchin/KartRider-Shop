(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d02a4"],{"678e":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("loading",{attrs:{active:t.isloading},on:{"update:active":function(s){t.isloading=s}}},[[e("div",{staticClass:"bazzi-loading"})]],2),e("Alert"),e("div",{staticClass:"container py-3"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-8 m-auto"},[e("form",{on:{submit:function(s){return s.preventDefault(),t.payOrder(s)}}},[e("h3",{staticClass:"text-center"},[t._v("訂單資訊")]),e("table",{staticClass:"table"},[t._m(0),e("tbody",t._l(t.order.products,(function(s){return e("tr",{key:s.id},[e("td",{staticClass:"align-middle"},[t._v(t._s(s.product.title))]),e("td",{staticClass:"align-middle"},[t._v(t._s(s.qty)+"/"+t._s(s.product.unit))]),e("td",{staticClass:"align-middle text-right"},[t._v(t._s(s.final_total))])])})),0),e("tfoot",[e("tr",[e("td",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v("總計")]),e("td",{staticClass:"text-right"},[t._v(t._s(t.order.total))])])])]),e("h3",{staticClass:"text-center"},[t._v("聯絡資訊")]),e("table",{staticClass:"table"},[e("tbody",[e("tr",[e("th",{attrs:{width:"100"}},[t._v("Email")]),e("td",[t._v(t._s(t.order.user.email))])]),e("tr",[e("th",[t._v("姓名")]),e("td",[t._v(t._s(t.order.user.name))])]),e("tr",[e("th",[t._v("收件人電話")]),e("td",[t._v(t._s(t.order.user.tel))])]),e("tr",[e("th",[t._v("收件人地址")]),e("td",[t._v(t._s(t.order.user.address))])]),e("tr",[e("th",[t._v("付款狀態")]),e("td",[t.order.is_paid?e("span",{staticClass:"text-success"},[t._v("付款完成")]):e("span",[t._v("尚未付款")])])])])]),!1===t.order.is_paid?e("div",{staticClass:"text-right"},[e("button",{staticClass:"btn btn-danger"},[t._v("確認付款去")])]):t._e()])])]),e("div",{staticClass:"row justify-content-center mt-5"},[e("div",{staticClass:"col-6 d-flex justify-content-center"},[e("router-link",{staticClass:"btn btn-primary",attrs:{to:"/"}},[t._v("回首頁")])],1)])])],1)},r=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("th",[t._v("品名")]),e("th",[t._v("數量")]),e("th",[t._v("單價")])])}],i=e("f688"),n={data:function(){return{orderId:"",order:{user:{}}}},components:{Alert:i["a"]},methods:{getOrder:function(){var t=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("pigeon","/order/").concat(t.orderId);t.isloading=!0,this.$http.get(s).then((function(s){t.order=s.data.order,t.isloading=!1}))},payOrder:function(){var t=this,s=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("pigeon","/pay/").concat(s.orderId);s.isloading=!0,this.$http.post(e).then((function(e){e.data.success?(t.$bus.$emit("message:push",e.data.message,"success"),t.getOrder()):t.$bus.$emit("message:push",e.data.message,"danger"),s.isloading=!1}))}},created:function(){this.orderId=this.$route.params.orderId,this.getOrder()}},d=n,o=e("2877"),c=Object(o["a"])(d,a,r,!1,null,null,null);s["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0d02a4.b1fe74bb.js.map