(self.webpackChunk=self.webpackChunk||[]).push([[442],{82157:function(t,i,e){"use strict";e.r(i),e.d(i,{default:function(){return d}});var a=e(9083),r=e.n(a),n=e(83048),l={nav:"nav___drfL_"},o=e(15042),u=e(34200),c={page:"page___NqReM",content:"content___n26HC"},s=e(36071);function p(f){var h=f.children;return(0,s.jsx)("div",{className:c.page,children:(0,s.jsx)("div",{className:c.content,children:h})})}var y=e(49721),v=[{label:(0,s.jsx)("span",{style:{fontSize:"1.5rem",fontWeight:"normal"},children:y.name}),key:"aboutme"},{label:"Publications",key:"publications"},{label:"Awards",key:"awards"},{label:"Services",key:"services"},{label:"CV",key:"cv"}].filter(function(f){return y.showBar.includes(f.key)});function d(){var f=(0,u.useState)("AboutMe"),h=r()(f,2),b=h[0],A=h[1],m=function(x){A(x.key),n.m8.push("/".concat(x.key))};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Z,{rootClassName:l.nav,onClick:m,selectedKeys:[b],mode:"horizontal",items:v}),(0,s.jsx)(p,{children:(0,s.jsx)(n.j3,{})})]})}},82596:function(t){function i(e,a){(a==null||a>e.length)&&(a=e.length);for(var r=0,n=new Array(a);r<a;r++)n[r]=e[r];return n}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},95778:function(t){function i(e){if(Array.isArray(e))return e}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},78314:function(t){function i(e,a){var r=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,l,o,u,c=[],s=!0,p=!1;try{if(o=(r=r.call(e)).next,a===0){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=o.call(r)).done)&&(c.push(n.value),c.length!==a);s=!0);}catch(y){p=!0,l=y}finally{try{if(!s&&r.return!=null&&(u=r.return(),Object(u)!==u))return}finally{if(p)throw l}}return c}}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},69626:function(t){function i(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},9083:function(t,i,e){var a=e(95778),r=e(78314),n=e(30443),l=e(69626);function o(u,c){return a(u)||r(u,c)||n(u,c)||l()}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},30443:function(t,i,e){var a=e(82596);function r(n,l){if(n){if(typeof n=="string")return a(n,l);var o=Object.prototype.toString.call(n).slice(8,-1);if(o==="Object"&&n.constructor&&(o=n.constructor.name),o==="Map"||o==="Set")return Array.from(n);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return a(n,l)}}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},49721:function(t){"use strict";t.exports=JSON.parse('{"name":"Boyin Tan","location":"ShenZhen, China","email":"BoyinTan1221@gmail.com","github":"https://github.com/shuaijiumei","twitter":"https://twitter.com/BoyinTan","googleScholar":"https://scholar.google.com/citations?user=3z3z3z4AAAAJ&hl=en","showBar":["aboutme","publications","awards","services","cv"]}')}}]);
