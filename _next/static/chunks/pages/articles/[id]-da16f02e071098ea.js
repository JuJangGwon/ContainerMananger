(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[977],{5661:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/[id]",function(){return a(9182)}])},4657:function(e,s,a){"use strict";var t=a(9428),c=a(9828);let r=(0,c.ad)(t.Z.firebaseApp);s.Z=r},9428:function(e,s,a){"use strict";var t=a(3977);let c=(0,t.ZF)({apiKey:"AIzaSyBpkpKvdRHjnFoUjWZZV1-0MKNJv7FQ8_E",authDomain:"mylittleassist-2c973.firebaseapp.com",databaseURL:"https://mylittleassist-2c973-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"mylittleassist-2c973",storageBucket:"mylittleassist-2c973.appspot.com",messagingSenderId:'"122162507510",',appId:"1:122162507510:web:667acf03228af27f2806d7",measurementId:"G-1369KTXEC0"});s.Z=c},7148:function(e,s,a){"use strict";a.d(s,{Z:function(){return n}});var t=a(5893),c=a(1664),r=a.n(c),l=a(1163);function n(){return(0,l.useRouter)(),(0,t.jsx)("body",{className:"bg-gray-300",children:(0,t.jsxs)("div",{className:"sidebar lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900 h-screen",children:[(0,t.jsx)("div",{className:"text-gray-100 text-xl",children:(0,t.jsxs)("div",{className:"p-2.5 mt-1 flex items-center",children:[(0,t.jsx)("h1",{className:"font-bold text-gray-200 text-[15px] ml-3",children:"컨테이너 관리시스템"}),(0,t.jsx)("i",{className:"bi bi-x cursor-pointer ml-28 lg:hidden",onclick:"openSidebar()"})]})}),(0,t.jsx)(r(),{href:"/home",children:(0,t.jsxs)("div",{className:"p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white",children:[(0,t.jsx)("i",{className:"bi bi-house-door-fill"}),(0,t.jsx)("span",{className:"text-[15px] ml-4 text-gray-200 font-bold",children:"Home"})]})}),(0,t.jsx)(r(),{href:"/",children:(0,t.jsxs)("div",{className:"p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white",children:[(0,t.jsx)("i",{className:"bi bi-house-door-fill"}),(0,t.jsx)("span",{className:"text-[15px] ml-4 text-gray-200 font-bold",children:"컨테이너 리스트"})]})}),(0,t.jsx)(r(),{href:"/ContainerEdit",children:(0,t.jsx)("div",{className:"text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold",id:"submenu",children:(0,t.jsx)("h1",{className:"cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1",children:"컨테이너 추가하기"})})}),(0,t.jsx)(r(),{href:"/calanendar",children:(0,t.jsxs)("div",{className:"p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white",children:[(0,t.jsx)("i",{className:"bi bi-bookmark-fill"}),(0,t.jsx)("span",{className:"text-[15px] ml-4 text-gray-200 font-bold",children:"캘린더 "})]})}),(0,t.jsx)("div",{className:"my-4 bg-gray-600 h-[1px]"}),(0,t.jsx)(r(),{href:"/loginpage",children:(0,t.jsxs)("div",{className:"p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white",children:[(0,t.jsx)("i",{className:"bi bi-bookmark-fill"}),(0,t.jsx)("span",{className:"text-[15px] ml-4 text-gray-200 font-bold",children:"로그인 "})]})})]})})}},9182:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return g}});var t=a(5893),c=a(6465),r=a.n(c),l=a(1163),n=a(7294),d=a(4657),i=a(9828),x=a(6650),o=a(5675),b=a.n(o);function f(e){let{setState:s,Id:c}=e,[l,x]=(0,n.useState)(""),[o,b]=(0,n.useState)(""),[f,j]=(0,n.useState)(),[h,u]=(0,n.useState)(),[m,p]=(0,n.useState)(""),[g,N]=(0,n.useState)(""),[v,y]=(0,n.useState)(""),[w,S]=(0,n.useState)(""),[k,C]=(0,n.useState)(""),[E,D]=(0,n.useState)(""),[Z,_]=(0,n.useState)(""),[z,U]=(0,n.useState)(""),[I,J]=(0,n.useState)(),L=async e=>{e.preventDefault();let t=(0,i.JU)(d.Z,"articles","".concat(c));s(!1),x(l),b(o),j(f),u(h),p(m),N(g),y(v),S(w),C(k),D(E),_(Z),U(z),J(I);let r=[],n=[],L=new Date(f)-1;for(var T=0;T<Number(m);T++){var M=new Date(f);M.setMonth(M.getMonth()+T);var F=a(381);let e=F(M).format("YYYY-MM-DD");console.log(e),r.push(e),n.push(!1)}let H=await (0,i.ET)((0,i.hJ)(d.Z,"lent"),{rentCompany:l,rentManager:o,rentStartDay:f,rentEndDay:h,rentPriod:m,rentfee:g,rentSignday:v,rentWhere:w,shipmentFee:k,rentHomewhere:E,rentHometel:Z,rentManagerTel:z,tips:I,ContainerID:c,rentDay:r,SignDay:n,final_signDay:L,text:""}),K=H.id;console.log(K),console.log(t),await (0,i.r7)(t,{renting:K})};return(0,t.jsxs)("div",{className:"jsx-9793e13707306fac container",children:[(0,t.jsxs)("form",{onSubmit:e=>(e.preventDefault(),!1),className:"jsx-9793e13707306fac",children:[(0,t.jsx)("button",{onClick:function(){s(!1)},className:"jsx-9793e13707306fac ",children:" X "}),(0,t.jsxs)("div",{className:"jsx-9793e13707306fac propertys",children:[(0,t.jsx)("label",{for:"rentCompany",className:"jsx-9793e13707306fac",children:" 임대업체  "}),(0,t.jsx)("input",{id:"rentCompany",value:l,onChange:e=>x(e.target.value),className:"jsx-9793e13707306fac"})]}),(0,t.jsxs)("div",{className:"jsx-9793e13707306fac propertys",children:[(0,t.jsx)("label",{for:"standard",className:"jsx-9793e13707306fac",children:" 임대관리자 "}),(0,t.jsx)("input",{id:"standard",value:o,onChange:e=>b(e.target.value),className:"jsx-9793e13707306fac"})]}),(0,t.jsxs)("div",{className:"jsx-9793e13707306fac propertys flex",children:[(0,t.jsx)("label",{for:"standard",className:"jsx-9793e13707306fac",children:" 임대기간 "}),(0,t.jsxs)("div",{className:"jsx-9793e13707306fac gap-5 flex",children:[(0,t.jsx)("input",{type:"date",id:"date",value:f,onChange:e=>j(e.target.value),className:"jsx-9793e13707306fac"}),(0,t.jsx)("h1",{className:"jsx-9793e13707306fac",children:" ~ "}),(0,t.jsx)("input",{type:"date",id:"date",value:h,onChange:e=>u(e.target.value),className:"jsx-9793e13707306fac"}),(0,t.jsx)("input",{id:"month",onChange:e=>p(e.target.value),value:m,className:"jsx-9793e13707306fac"}),(0,t.jsx)("label",{for:"month",className:"jsx-9793e13707306fac",children:" 개월 "})]})]}),(0,t.jsxs)("div",{className:"jsx-9793e13707306fac propertys",children:[(0,t.jsx)("label",{for:"standard",className:"jsx-9793e13707306fac",children:" 임대료 "}),(0,t.jsx)("input",{id:"standard",value:g,onChange:e=>N(e.target.value),className:"jsx-9793e13707306fac"})]}),(0,t.jsxs)("div",{className:"jsx-9793e13707306fac propertys",children:[(0,t.jsx)("label",{for:"standard",className:"jsx-9793e13707306fac",children:" 임대료 정산일 "}),(0,t.jsx)("input",{id:"standard",value:v,onChange:e=>y(e.target.value),className:"jsx-9793e13707306fac"})]}),(0,t.jsxs)("div",{className:"jsx-9793e13707306fac propertys",children:[(0,t.jsx)("label",{for:"standard",className:"jsx-9793e13707306fac",children:" 임대위치 "}),(0,t.jsx)("input",{id:"standard",value:w,onChange:e=>S(e.target.value),className:"jsx-9793e13707306fac"})]}),(0,t.jsxs)("div",{className:"jsx-9793e13707306fac propertys",children:[(0,t.jsx)("label",{for:"standard",className:"jsx-9793e13707306fac",children:" 운반비 "}),(0,t.jsx)("input",{id:"standard",value:k,onChange:e=>C(e.target.value),className:"jsx-9793e13707306fac"})]}),(0,t.jsxs)("div",{className:"jsx-9793e13707306fac propertys",children:[(0,t.jsx)("label",{for:"standard",className:"jsx-9793e13707306fac",children:" 임대업체 주소 "}),(0,t.jsx)("input",{id:"standard",value:E,onChange:e=>D(e.target.value),className:"jsx-9793e13707306fac"})]}),(0,t.jsxs)("div",{className:"jsx-9793e13707306fac propertys",children:[(0,t.jsx)("label",{for:"standard",className:"jsx-9793e13707306fac",children:" 임대업체 연락처 "}),(0,t.jsx)("input",{id:"standard",value:Z,onChange:e=>_(e.target.value),className:"jsx-9793e13707306fac"})]}),(0,t.jsxs)("div",{className:"jsx-9793e13707306fac propertys",children:[(0,t.jsx)("label",{for:"standard",className:"jsx-9793e13707306fac",children:" 임대관리자 연락처 "}),(0,t.jsx)("input",{id:"standard",value:z,onChange:e=>U(e.target.value),className:"jsx-9793e13707306fac"})]}),(0,t.jsxs)("div",{className:"jsx-9793e13707306fac propertys",children:[(0,t.jsx)("label",{for:"standard",className:"jsx-9793e13707306fac",children:" 사업자등록증 "}),(0,t.jsx)("input",{id:"standard",className:"jsx-9793e13707306fac"})]}),(0,t.jsxs)("div",{className:"jsx-9793e13707306fac propertys",children:[(0,t.jsx)("label",{for:"tips",className:"jsx-9793e13707306fac",children:" 특이사항 "}),(0,t.jsx)("input",{id:"tips",onChange:e=>J(e.target.value),className:"jsx-9793e13707306fac"})]}),(0,t.jsx)("button",{onClick:L,className:"jsx-9793e13707306fac",children:" 제출 "})]}),(0,t.jsx)(r(),{id:"9793e13707306fac",children:".container.jsx-9793e13707306fac{width:1e3px;height:600px;position:absolute;z-index:999;background-color:white;border:1px solid black;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}"})]})}function j(e){let{Id:s,rent:a,rentid:c}=e,[l,x]=(0,n.useState)(""),[o,b]=(0,n.useState)(""),[j,h]=(0,n.useState)(),[u,m]=(0,n.useState)(),[p,g]=(0,n.useState)(""),[N,v]=(0,n.useState)(""),[y,w]=(0,n.useState)(""),[S,k]=(0,n.useState)(""),[C,E]=(0,n.useState)(""),[D,Z]=(0,n.useState)(""),[_,z]=(0,n.useState)(""),[U,I]=(0,n.useState)(""),[J,L]=(0,n.useState)([]),[T,M]=(0,n.useState)(),[F,H]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{"NULL"!==s&&(0,i.QT)((0,i.JU)(d.Z,"lent",c)).then(e=>{let s=e.data();x(s.rentCompany),b(s.rentManager),h(s.rentStartDay),m(s.rentEndDay),g(s.rentPriod),v(s.rentfee),w(s.rentSignday),k(s.rentWhere),E(s.shipmentFee),Z(s.rentHomewhere),z(s.rentHometel),I(s.rentManagerTel)})},[]),(0,t.jsxs)("div",{className:"jsx-816c6779f4bf114c",children:[F&&(0,t.jsx)(f,{setState:H,Id:s}),(0,t.jsx)("div",{className:"jsx-816c6779f4bf114c",children:!a&&(0,t.jsx)("button",{onClick:function(){H(!0),console.log(F)},className:"jsx-816c6779f4bf114c bbb bg-white border-2 border-black hover:bg-gray-200",children:"임대 정보 기입하기"})}),a&&(0,t.jsxs)("table",{className:"jsx-816c6779f4bf114c bg-white",children:[(0,t.jsxs)("tr",{className:"jsx-816c6779f4bf114c",children:[(0,t.jsx)("th",{className:"jsx-816c6779f4bf114c",children:"임대업체"}),(0,t.jsx)("td",{className:"jsx-816c6779f4bf114c",children:l}),(0,t.jsx)("th",{className:"jsx-816c6779f4bf114c",children:"임대관리자"}),(0,t.jsx)("td",{className:"jsx-816c6779f4bf114c",children:o})]}),(0,t.jsxs)("tr",{className:"jsx-816c6779f4bf114c",children:[(0,t.jsx)("th",{className:"jsx-816c6779f4bf114c",children:"임대업체 연락처"}),(0,t.jsx)("td",{className:"jsx-816c6779f4bf114c",children:_}),(0,t.jsx)("th",{className:"jsx-816c6779f4bf114c",children:"임대관리자 연락처"}),(0,t.jsx)("td",{className:"jsx-816c6779f4bf114c",children:U})]}),(0,t.jsxs)("tr",{className:"jsx-816c6779f4bf114c",children:[(0,t.jsx)("th",{className:"jsx-816c6779f4bf114c",children:"임대기간"}),(0,t.jsxs)("td",{className:"jsx-816c6779f4bf114c",children:[j," ~ ",u]}),(0,t.jsx)("th",{className:"jsx-816c6779f4bf114c",children:"임대계약기간"}),(0,t.jsxs)("td",{className:"jsx-816c6779f4bf114c",children:[p,"개월"]})]}),(0,t.jsxs)("tr",{className:"jsx-816c6779f4bf114c",children:[(0,t.jsx)("th",{className:"jsx-816c6779f4bf114c",children:"임대료"}),(0,t.jsxs)("td",{className:"jsx-816c6779f4bf114c",children:[N,"만원"]}),(0,t.jsx)("th",{className:"jsx-816c6779f4bf114c",children:"결제일"}),(0,t.jsxs)("td",{className:"jsx-816c6779f4bf114c",children:["매월 ",y,"일"]})]}),(0,t.jsxs)("tr",{className:"jsx-816c6779f4bf114c",children:[(0,t.jsx)("th",{className:"jsx-816c6779f4bf114c",children:"임대 장소"}),(0,t.jsx)("td",{className:"jsx-816c6779f4bf114c",children:S}),(0,t.jsx)("th",{className:"jsx-816c6779f4bf114c",children:"운반비 결제방식"}),(0,t.jsx)("td",{className:"jsx-816c6779f4bf114c",children:C})]})]}),(0,t.jsx)(r(),{id:"816c6779f4bf114c",children:".bbb.jsx-816c6779f4bf114c{width:580px;height:200px}tr.jsx-816c6779f4bf114c{text-align:left}th.jsx-816c6779f4bf114c{width:150px}td.jsx-816c6779f4bf114c{width:250px}table.jsx-816c6779f4bf114c{width:100%;border:1px solid#444;border-collapse:collapse}th.jsx-816c6779f4bf114c,td.jsx-816c6779f4bf114c{border:1px solid#444;padding:10px}"})]})}function h(e){let{data:s,opts:a}=e,[c,l]=(0,n.useState)(""),[d,i]=(0,n.useState)(""),[x,o]=(0,n.useState)(""),[b,f]=(0,n.useState)(""),[j,h]=(0,n.useState)(),[u,m]=(0,n.useState)(""),[p,g]=(0,n.useState)(""),[N,v]=(0,n.useState)([]);var y=["에어컨","냉난방기","바닥 전기판넬","스틸 도출배관","불연재합판","바닥철판"," 철재환풍기","아크누전기"];return(0,n.useEffect)(()=>{console.log(s),l(s.standard),i(s.nickname),o(s.madeday),f(s.madecompany),m(s.purpose);var e="";N.map((s,a)=>{e+=s+"  "})},[s]),(0,n.useEffect)(()=>{console.log(s),l(s.standard),i(s.nickname),o(s.madeday),f(s.madecompany),m(s.purpose);var e="";N.map((s,a)=>{e+=s+"   "}),g(e)},[N]),(0,n.useEffect)(()=>{if(console.log(a),null!=a){for(var e=0;e<8;e++)if(!0===a[e]){let s=y[e];v(e=>[...e,s]),console.log(y[e])}}},[a]),(0,t.jsxs)("div",{className:"jsx-d9cf31198ee4baea",children:[(0,t.jsxs)("table",{className:"jsx-d9cf31198ee4baea",children:[(0,t.jsxs)("tr",{className:"jsx-d9cf31198ee4baea",children:[(0,t.jsx)("th",{className:"jsx-d9cf31198ee4baea",children:"컨테이너 별명"}),(0,t.jsx)("td",{className:"jsx-d9cf31198ee4baea",children:d}),(0,t.jsx)("th",{className:"jsx-d9cf31198ee4baea",children:"컨테이너 보관위치"}),(0,t.jsx)("td",{className:"jsx-d9cf31198ee4baea",children:c})]}),(0,t.jsxs)("tr",{className:"jsx-d9cf31198ee4baea",children:[(0,t.jsx)("th",{className:"jsx-d9cf31198ee4baea",children:"컨테이너 용도"}),(0,t.jsx)("td",{className:"jsx-d9cf31198ee4baea",children:u}),(0,t.jsx)("th",{className:"jsx-d9cf31198ee4baea",children:"컨테이너 규격"}),(0,t.jsx)("td",{className:"jsx-d9cf31198ee4baea",children:c})]}),(0,t.jsxs)("tr",{className:"jsx-d9cf31198ee4baea",children:[(0,t.jsx)("th",{className:"jsx-d9cf31198ee4baea",children:"컨테이너 제작회사"}),(0,t.jsx)("td",{className:"jsx-d9cf31198ee4baea",children:b}),(0,t.jsx)("th",{className:"jsx-d9cf31198ee4baea",children:"컨테이너 제작일"}),(0,t.jsx)("td",{className:"jsx-d9cf31198ee4baea",children:x})]}),(0,t.jsxs)("tr",{className:"jsx-d9cf31198ee4baea",children:[(0,t.jsx)("th",{className:"jsx-d9cf31198ee4baea",children:"컨테이너 옵선"}),(0,t.jsx)("td",{colspan:"3",className:"jsx-d9cf31198ee4baea",children:p})]})]}),(0,t.jsx)(r(),{id:"d9cf31198ee4baea",children:"tr.jsx-d9cf31198ee4baea{text-align:left}th.jsx-d9cf31198ee4baea{width:150px}td.jsx-d9cf31198ee4baea{width:250px}table.jsx-d9cf31198ee4baea{width:100%;border:1px solid#444;border-collapse:collapse}th.jsx-d9cf31198ee4baea,td.jsx-d9cf31198ee4baea{border:1px solid#444;padding:10px}"})]})}function u(e){let{Id:s,data:a,rent:c,rentid:l}=e,[x,o]=(0,n.useState)([]),[b,j]=(0,n.useState)([!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]),[h,u]=(0,n.useState)(0),[m,p]=(0,n.useState)(!1),[g,N]=(0,n.useState)([]);var v=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];let y=async()=>{let e=(0,i.JU)(d.Z,"lent","".concat(l));await (0,i.r7)(e,{SignDay:b})};function w(){let e=new Date;for(var s=0;s<h;s++)if(!0==b[s])v[s]=2;else{let a=new Date(x[s]);a>=e?v[s]=1:v[s]=3}N(v)}(0,n.useEffect)(()=>{},[g]),(0,n.useEffect)(()=>{w()},[b]),(0,n.useEffect)(()=>{"NULL"!==s&&(0,i.QT)((0,i.JU)(d.Z,"lent",l)).then(e=>{let s=e.data();o(s.rentDay),j(s.SignDay),u(Number(s.rentPriod))})},[]);let S=e=>{let s=e.target.id,a=b;switch(a[s]=!a[s],g[s]){case 1:case 3:e.target.className+=" btn btn-green";break;case 2:e.target.className+=" btn btn-red"}j(a),w(),y(),console.log(a)};return(0,t.jsxs)("div",{className:"jsx-46c8cd0bbab24b28",children:[m&&(0,t.jsx)(f,{setState:p,Id:s}),(0,t.jsx)("div",{className:"jsx-46c8cd0bbab24b28",children:!c&&(0,t.jsx)("button",{onClick:function(){p(!0)},className:"jsx-46c8cd0bbab24b28 bbb bg-white border-2 border-black hover:bg-gray-200",children:"임대 정보 기입하기"})}),c&&(0,t.jsxs)("div",{className:"jsx-46c8cd0bbab24b28 w-128 h-60 border-2 border-black bg-white",children:[(0,t.jsx)("div",{className:"jsx-46c8cd0bbab24b28",children:(0,t.jsx)("p",{className:"jsx-46c8cd0bbab24b28",children:"결제현황"})}),(0,t.jsx)("div",{className:"jsx-46c8cd0bbab24b28 grid grid-cols-5",children:x.map((e,s)=>(0,t.jsx)("div",{className:"jsx-46c8cd0bbab24b28 w-32 h-16",children:(0,t.jsx)("div",{className:"jsx-46c8cd0bbab24b28  w-32 h-12",children:(0,t.jsx)("button",{id:s,onClick:S,className:"jsx-46c8cd0bbab24b28 "+((1===g[s]?"btn btn-gray":2===g[s]?"btn btn-green":"btn btn-red")||""),children:x[s]})})}))})]}),(0,t.jsx)(r(),{id:"46c8cd0bbab24b28",children:'.btn.jsx-46c8cd0bbab24b28{position:relative;border:none;display:inline-block;padding:10px 20px;-webkit-border-radius:15px;-moz-border-radius:15px;border-radius:15px;font-family:"paybooc-Light",sans-serif;-webkit-box-shadow:0 15px 35px rgba(0,0,0,.2);-moz-box-shadow:0 15px 35px rgba(0,0,0,.2);box-shadow:0 15px 35px rgba(0,0,0,.2);text-decoration:none;font-weight:600;-webkit-transition:.25s;-moz-transition:.25s;-o-transition:.25s;transition:.25s}.btn-red.jsx-46c8cd0bbab24b28{background-color:#ff5f2e;color:#e1eef6}.btn-green.jsx-46c8cd0bbab24b28{background:-webkit-linear-gradient(left,rgba(129,230,217,1)0%,rgba(79,209,197,1)100%);background:-moz-linear-gradient(left,rgba(129,230,217,1)0%,rgba(79,209,197,1)100%);background:-o-linear-gradient(left,rgba(129,230,217,1)0%,rgba(79,209,197,1)100%);background:linear-gradient(90deg,rgba(129,230,217,1)0%,rgba(79,209,197,1)100%);-webkit-border-radius:1e3px;-moz-border-radius:1e3px;border-radius:1e3px;color:darkslategray;cursor:pointer;-webkit-box-shadow:12px 12px 24px rgba(79,209,197,.64);-moz-box-shadow:12px 12px 24px rgba(79,209,197,.64);box-shadow:12px 12px 24px rgba(79,209,197,.64);font-weight:700;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;transition:.3s}.   btn-gray {background-color:#a3a1a1;color:#e3dede}.bbb.jsx-46c8cd0bbab24b28{width:580px;height:200px}'})]})}var m=a(7148);function p(e){let{data:s}=e,[a,c]=(0,n.useState)("");return(0,n.useEffect)(()=>{},[]),(0,t.jsxs)("div",{children:[(0,t.jsx)("input",{className:"align-top w-96 h-48 bg-white border-2 border-gray",value:a,onChange:function(e){c(e.target.value)}}),(0,t.jsx)("button",{onClick:function(){(0,i.r7)((0,i.JU)(d.Z,"rent"),{text:a})},children:"저장하기"})]})}function g(){let e=(0,l.useRouter)(),[s,a]=(0,n.useState)([]),[c,o]=(0,n.useState)(),[f,g]=(0,n.useState)(!0),[N,v]=(0,n.useState)(!1),[y,w]=(0,n.useState)(!1),[S,k]=(0,n.useState)(!1),[C,E]=(0,n.useState)(),[D,Z]=(0,n.useState)(!1),[_,z]=(0,n.useState)([]),[U,I]=(0,n.useState)([]),[J,L]=(0,n.useState)(0),[T,M]=(0,n.useState)([]),[F,H]=(0,n.useState)(1);return(0,n.useEffect)(()=>{console.log(T)},[T]),(0,n.useEffect)(()=>{let e=async()=>{if(L(s.length),0!==s.length){let a=(0,x.cF)();for(var e=0;e<s.length;e++){let t=(0,x.iH)(a,"images/".concat(s[e]));await (0,x.Jt)(t).then(e=>{I(s=>[...s,e])})}}};e()},[s]),(0,n.useEffect)(()=>{o(C)},[C]),(0,n.useEffect)(()=>{console.log(s),console.log(c)},[c]),(0,n.useEffect)(()=>{(0,i.QT)((0,i.JU)(d.Z,"articles",e.query.id)).then(e=>{let s=e.data();console.log(s),z(s),a(s.uuidarray),E(s.renting),"NULL"!==s.renting&&Z(!0)})},[]),(0,t.jsxs)("div",{className:"jsx-ac189c39be048de0 flex gap-3",children:[(0,t.jsx)(m.Z,{}),(0,t.jsxs)("div",{className:"jsx-ac189c39be048de0 cc bg-gray-100",children:[(0,t.jsx)("div",{className:"jsx-ac189c39be048de0 bg-gray-100 h-12 flex justify-between",children:(0,t.jsx)("p",{className:"jsx-ac189c39be048de0 font-bold text-2xl",children:"등록 컨테이너정보"})}),(0,t.jsx)("div",{className:"jsx-ac189c39be048de0 my-2 bg-gray-600 h-[1px]"}),(0,t.jsx)("div",{className:"jsx-ac189c39be048de0 justify-center flex",children:(0,t.jsx)("div",{className:"jsx-ac189c39be048de0 rounded-lg w-96 h-96 relative",children:(0,t.jsx)(b(),{unoptimized:!0,alt:"text",layout:"fill",src:U[0]})})}),(0,t.jsxs)("div",{className:"jsx-ac189c39be048de0",children:[(0,t.jsxs)("div",{className:"jsx-ac189c39be048de0 flex",children:[(0,t.jsx)("button",{onClick:function(){g(!0),v(!1),w(!1),k(!1)},className:"jsx-ac189c39be048de0 border-2 border-gray w-36 h-12 bg-white focus:bg-slate-300 focus:font-bold",children:"컨테이너 정보"}),(0,t.jsx)("button",{onClick:function(){g(!1),v(!0),w(!1),k(!1)},className:"jsx-ac189c39be048de0 border-2 border-gray w-36 h-12 bg-white focus:bg-slate-300 focus:font-bold",children:"임대 정보"}),(0,t.jsx)("button",{onClick:function(){g(!1),v(!1),w(!0),k(!1)},className:"jsx-ac189c39be048de0 border-2 border-gray w-36 h-12 bg-white focus:bg-slate-300 focus:font-bold",children:"결제 정보"}),(0,t.jsx)("button",{onClick:function(){g(!1),v(!1),w(!1),k(!0)},className:"jsx-ac189c39be048de0 border-2 border-gray w-36 h-12 bg-white focus:bg-slate-300 focus:font-bold",children:"기타 사항"})]}),f&&(0,t.jsx)(h,{data:_,opts:_.opt}),N&&(0,t.jsx)(j,{rent:D,Id:e.query.id,rentid:C}),y&&(0,t.jsx)(u,{data:_,Id:e.query.id,rentid:C,rent:D}),S&&(0,t.jsx)(p,{data:_})]})]}),(0,t.jsx)("hr",{className:"jsx-ac189c39be048de0"}),(0,t.jsx)(r(),{id:"ac189c39be048de0",children:".cc.jsx-ac189c39be048de0{width:800px}"})]})}}},function(e){e.O(0,[16,885,523,637,650,675,774,888,179],function(){return e(e.s=5661)}),_N_E=e.O()}]);