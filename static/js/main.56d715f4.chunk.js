(this["webpackJsonpreact-table"]=this["webpackJsonpreact-table"]||[]).push([[0],{16:function(e,a,t){e.exports={radioBtn__label:"RadioButton_radioBtn__label__2xTyS",radioBtn__input:"RadioButton_radioBtn__input__2jKem"}},17:function(e,a,t){e.exports={radioBlock__radio:"Thead_radioBlock__radio__1M25P",reactTable:"Thead_reactTable__3YLCt",th:"Thead_th__2HBrK",th_sorted:"Thead_th_sorted__4Ct2u",th_sorted_up:"Thead_th_sorted_up__D0lUi"}},18:function(e,a,t){e.exports={dashboard:"Dashboard_dashboard__WJsgH",dashboard__desc:"Dashboard_dashboard__desc__1z3NI"}},30:function(e,a,t){e.exports={dashboardTabs:"DashboardTabs_dashboardTabs__2W9QN"}},31:function(e,a,t){e.exports={input:"Input_input__2Ygb3"}},32:function(e,a,t){e.exports={reactTable:"Table_reactTable__3S01z"}},6:function(e,a,t){e.exports={dashboardHead:"DashboardHead_dashboardHead__30rZL",info:"DashboardHead_info__3iNCq",info__btn:"DashboardHead_info__btn__3SmsD",info__btn_upgrade:"DashboardHead_info__btn_upgrade__2I9RZ"}},62:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var r=t(0),s=t.n(r),n=t(13),o=t.n(n),c=t(5),l=t(15),d=t(14),i=t.n(d);var b=async()=>await i.a.get("https://run.mocky.io/v3/89fc52ab-d270-4226-878a-b81315b6849d");const j=Object(l.b)({name:"data",initialState:{data:[],isLoading:!1,isLoaded:!1,error:null,globalFilter:"all"},reducers:{getDataStart:e=>{e.isLoading=!0},getDataSuccess:(e,a)=>{let{payload:t}=a;e.data=t,e.isLoading=!1,e.isLoaded=!0},getDataFailure:(e,a)=>{let{payload:t}=a;e.error=t,e.isLoading=!1},setFilter:(e,a)=>{let{payload:t}=a;e.globalFilter=t}}}),{getDataStart:O,getDataSuccess:u,getDataFailure:p}=j.actions,{setFilter:h}=j.actions,m=e=>e.data,y=e=>{const{data:a,globalFilter:t}=e.data;let r;switch(t){case"even":r=a.filter(((e,a)=>a%2!==0));break;case"odd":r=a.filter(((e,a)=>a%2===0));break;default:return a}return r};var g=j;var f=Object(l.a)({reducer:{data:g.reducer}}),x=t(1);const v=Object(r.createContext)({}),z=e=>{let{children:a}=e;const[t,s]=Object(r.useState)("analyze");return Object(x.jsx)(v.Provider,{value:{currentScreen:t,setCurrentScreen:s},children:a})},w=()=>Object(r.useContext)(v);var T=t(4),A=t.n(T),L=t.p+"static/media/logo@2x.4bb4d4cf.png",Z=t.p+"static/media/logo@3x.0940a3ce.png",k=t.p+"static/media/help-circle.bb0b5ccc.svg",C=t(6),E=t.n(C);var N=()=>Object(x.jsxs)("div",{className:E.a.dashboardHead,children:[Object(x.jsx)("img",{className:E.a.dashboardHead__logo,src:"data:image/png;base64,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",srcSet:"".concat(L," 2x, ").concat(Z," 3x"),alt:"Dashboard"}),Object(x.jsxs)("div",{className:A()(E.a.dashboardHead__info,E.a.info),children:[Object(x.jsxs)("button",{className:E.a.info__btn,children:[Object(x.jsx)("span",{children:"Help"}),Object(x.jsx)("img",{src:k,alt:"?"})]}),Object(x.jsx)("button",{className:A()(E.a.info__btn,E.a.info__btn_upgrade),children:Object(x.jsx)("span",{children:"upgrade"})}),Object(x.jsx)("img",{src:"data:image/png;base64,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",alt:"",className:E.a.info__ava})]})]}),P=t(16),I=t.n(P);var S=e=>{let{name:a}=e;const{setCurrentScreen:t}=w();return Object(x.jsxs)("div",{className:I.a.radioBtn,children:[Object(x.jsx)("input",{type:"radio",id:a,name:"tabs",defaultChecked:"Analyze"===a,className:I.a.radioBtn__input,onChange:()=>t((()=>a.toLocaleLowerCase()))}),Object(x.jsx)("label",{htmlFor:a,className:I.a.radioBtn__label,children:a})]})},G=t(30),W=t.n(G);const R=["Analyze","My campaigns","Configure"];var M,B=()=>Object(x.jsx)("div",{className:W.a.dashboardTabs,children:R.map((e=>Object(x.jsx)(S,{name:e},e)))}),H=t(2),D=t(9),Q=t.n(D);const J=["title","titleId"];function X(){return X=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},X.apply(this,arguments)}function U(e,a){if(null==e)return{};var t,r,s=function(e,a){if(null==e)return{};var t,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}function Y(e,a){let{title:t,titleId:s}=e,n=U(e,J);return r.createElement("svg",X({width:28,height:28,viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:a,"aria-labelledby":s},n),t?r.createElement("title",{id:s},t):null,M||(M=r.createElement("path",{d:"M20 5H8V9H20V5ZM21 14C20.7348 14 20.4804 13.8946 20.2929 13.7071C20.1054 13.5196 20 13.2652 20 13C20 12.7348 20.1054 12.4804 20.2929 12.2929C20.4804 12.1054 20.7348 12 21 12C21.2652 12 21.5196 12.1054 21.7071 12.2929C21.8946 12.4804 22 12.7348 22 13C22 13.2652 21.8946 13.5196 21.7071 13.7071C21.5196 13.8946 21.2652 14 21 14ZM18 21H10V16H18V21ZM21 10H7C6.20435 10 5.44129 10.3161 4.87868 10.8787C4.31607 11.4413 4 12.2044 4 13V19H8V23H20V19H24V13C24 12.2044 23.6839 11.4413 23.1213 10.8787C22.5587 10.3161 21.7956 10 21 10Z",fill:"#78909C"})))}const V=r.forwardRef(Y);var F;t.p;const K=["title","titleId"];function _(){return _=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},_.apply(this,arguments)}function q(e,a){if(null==e)return{};var t,r,s=function(e,a){if(null==e)return{};var t,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}function $(e,a){let{title:t,titleId:s}=e,n=q(e,K);return r.createElement("svg",_({width:28,height:28,viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:a,"aria-labelledby":s},n),t?r.createElement("title",{id:s},t):null,F||(F=r.createElement("path",{d:"M15 4V7.03C18.39 7.52 21 10.42 21 13.95C21 14.85 20.82 15.7 20.5 16.49L23.12 18.02C23.68 16.78 24 15.4 24 13.95C24 8.77 20.05 4.5 15 4ZM14 20.95C12.1435 20.95 10.363 20.2125 9.05025 18.8997C7.7375 17.587 7 15.8065 7 13.95C7 10.42 9.61 7.52 13 7.03V4C7.94 4.5 4 8.76 4 13.95C4 16.6022 5.05357 19.1457 6.92893 21.0211C7.85752 21.9497 8.95991 22.6863 10.1732 23.1888C11.3864 23.6913 12.6868 23.95 14 23.95C17.3 23.95 20.23 22.34 22.05 19.86L19.45 18.33C18.17 19.95 16.21 20.95 14 20.95Z",fill:"#78909C"})))}const ee=r.forwardRef($);var ae;t.p;const te=["title","titleId"];function re(){return re=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},re.apply(this,arguments)}function se(e,a){if(null==e)return{};var t,r,s=function(e,a){if(null==e)return{};var t,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}function ne(e,a){let{title:t,titleId:s}=e,n=se(e,te);return r.createElement("svg",re({width:28,height:28,viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:a,"aria-labelledby":s},n),t?r.createElement("title",{id:s},t):null,ae||(ae=r.createElement("path",{d:"M21.78 4L26 8.22L10.44 23.8L2 15.35L6.22 11.13L10.44 15.35L21.78 4ZM21.78 6.8L10.44 18.16L6.22 13.99L4.81 15.35L10.44 20.97L23.19 8.22L21.78 6.8Z",fill:"#78909C"})))}const oe=r.forwardRef(ne);t.p;var ce=e=>{let{type:a,name:t,desc:r,className:s}=e;const n=Object(c.b)();return Object(x.jsxs)("label",{className:A()(s,Q.a.radio),children:[Object(x.jsx)("input",{onChange:()=>{n(h(a))},id:a,defaultChecked:"all"===a,name:"radio-filter",type:"radio",className:Q.a.radio__input}),Object(x.jsxs)("div",{className:Q.a.radio__wrap,children:["all"===a&&Object(x.jsx)(V,{}),"even"===a&&Object(x.jsx)(ee,{}),"odd"===a&&Object(x.jsx)(oe,{}),Object(x.jsxs)("div",{className:Q.a.radio__name,children:[Object(x.jsx)("p",{children:t}),Object(x.jsx)("p",{children:r})]})]})]})},le=t(10),de=t.p+"static/media/print.112b8b8c.svg",ie=t.p+"static/media/download.ece3d8a7.svg",be=t(7),je=t.n(be);var Oe=()=>Object(x.jsxs)("div",{className:je.a.tablePreview,children:[Object(x.jsx)("h4",{className:je.a.tablePreview__title,children:"Dashboard"}),Object(x.jsxs)("div",{className:je.a.pseudo,children:[Object(x.jsx)("p",{className:je.a.pseudo__date,children:"Aug 21, 2021 \xb7 Sep 21 2021"}),Object(x.jsx)("button",{className:je.a.pseudo__btn,children:Object(x.jsx)("img",{src:de,alt:""})}),Object(x.jsx)("button",{className:je.a.pseudo__btn,children:Object(x.jsx)("img",{src:ie,alt:""})})]})]}),ue=t(31),pe=t.n(ue);var he=e=>{let{column:{filterValue:a,setFilter:t,id:r}}=e;const s="name"===r;return Object(x.jsx)("input",{className:pe.a.input,onChange:e=>t(e.target.value),id:"input".concat(r),value:a||"",name:"radio-filter",type:s?"text":"number",placeholder:s?"Search...":""})},me=t(17),ye=t.n(me);var ge=e=>{let{headerGroups:a}=e;return Object(x.jsx)("thead",{children:a.map(((e,a)=>Object(r.createElement)("tr",Object(H.a)(Object(H.a)({},e.getHeaderGroupProps()),{},{key:"headerGroup".concat(a)}),e.headers.map(((e,a)=>Object(r.createElement)("th",Object(H.a)(Object(H.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{key:"column".concat(a),className:A()(ye.a.th,{[ye.a.th_sorted]:e.isSorted,[ye.a.th_sorted_up]:e.isSortedDesc})}),e.render("Header")))))))})};var fe=e=>{let{rows:a,getTableBodyProps:t,headerGroups:s,prepareRow:n}=e;return Object(x.jsxs)("tbody",Object(H.a)(Object(H.a)({},t()),{},{children:[!a.length&&Object(x.jsx)("tr",{children:Object(x.jsx)("td",{colSpan:s[0].headers.length,children:"no matches"})}),a.map(((e,a)=>(n(e),Object(r.createElement)("tr",Object(H.a)(Object(H.a)({},e.getRowProps()),{},{key:"row".concat(a)}),e.cells.map(((e,a)=>Object(r.createElement)("td",Object(H.a)(Object(H.a)({},e.getCellProps()),{},{key:"cell".concat(a)}),e.render("Cell"))))))))]}))};var xe=e=>{let{footerGroups:a}=e;return Object(x.jsx)("tfoot",{children:a.map(((e,a)=>Object(r.createElement)("tr",Object(H.a)(Object(H.a)({},e.getFooterGroupProps()),{},{key:"footerGroup".concat(a)}),e.headers.map(((e,a)=>Object(r.createElement)("td",Object(H.a)(Object(H.a)({},e.getFooterProps()),{},{key:"tfoot".concat(a)}),e.render("Filter")))))))})},ve=t(32),ze=t.n(ve);var we=()=>{const e=Object(c.c)(y),a=Object(r.useMemo)((()=>[{Header:"Data",accessor:"name"},{Header:"Summary1",accessor:"summary1"},{Header:"Summary2",accessor:"summary2"},{Header:"Summary3",accessor:"summary3"},{Header:"Summary4",accessor:"summary4"},{Header:"Summary5",accessor:"summary5"}]),[]),t=Object(r.useMemo)((()=>({Filter:he})),[]),{getTableProps:s,getTableBodyProps:n,headerGroups:o,footerGroups:l,rows:d,prepareRow:i}=Object(le.useTable)({columns:a,defaultColumn:t,data:e},le.useFilters,le.useGlobalFilter,le.useSortBy);return Object(x.jsxs)("div",{children:[Object(x.jsx)(Oe,{}),Object(x.jsxs)("table",Object(H.a)(Object(H.a)({},s()),{},{className:ze.a.reactTable,children:[Object(x.jsx)(ge,{headerGroups:o}),Object(x.jsx)(fe,{rows:d,prepareRow:i,getTableBodyProps:n,headerGroups:o}),Object(x.jsx)(xe,{footerGroups:l})]}))]})},Te=t.p+"static/media/plus-circle.79adf319.svg",Ae=t(8),Le=t.n(Ae);var Ze=()=>{const e=Object(r.useMemo)((()=>[{type:"even",name:"Even rows of data",desc:"Display rows 2,4,6 etc"},{type:"odd",name:"Odd rows of data",desc:"Display rows 1,3,5 etc"},{type:"all",name:"All data",desc:"Display all data"}]),[]);return Object(x.jsxs)("section",{className:Le.a.reactTableSect,children:[Object(x.jsxs)("div",{className:A()(Le.a.reactTableSect__radioBlock,Le.a.radioBlock),children:[Object(x.jsxs)("button",{className:Le.a.radioBlock__btn,children:[Object(x.jsx)("img",{src:Te,alt:"add"}),Object(x.jsx)("span",{children:"Create new"})]}),e.map((e=>Object(x.jsx)(ce,Object(H.a)({className:Le.a.radioBlock__radio},e),e.type)))]}),Object(x.jsx)(we,{})]})},ke=t(18),Ce=t.n(ke);var Ee=()=>{const{currentScreen:e}=w();return Object(x.jsxs)("div",{className:Ce.a.dashboard,children:[Object(x.jsx)(N,{}),Object(x.jsx)(B,{}),"analyze"===e&&Object(x.jsx)(Ze,{}),"my campaigns"===e&&Object(x.jsx)("p",{className:Ce.a.dashboard__desc,children:"My campaigns"}),"configure"===e&&Object(x.jsx)("p",{className:Ce.a.dashboard__desc,children:"Configure"})]})};var Ne=()=>{const e=Object(c.b)(),a=Object(c.c)(m),{error:t,isLoading:s,isLoaded:n}=a;return Object(r.useEffect)((()=>{e((async e=>{e(O());try{const a=await b();e(u(a.data))}catch(t){e(p({error:(a=t,i.a.isAxiosError(a)?a.message:"unknow erorr")}))}var a}))}),[]),Object(x.jsxs)(x.Fragment,{children:[t&&Object(x.jsx)("p",{children:"Oh no, there was an error"}),s&&Object(x.jsx)("p",{children:"Loading..."}),n&&Object(x.jsx)(z,{children:Object(x.jsx)(Ee,{})})]})};t(62);o.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(c.a,{store:f,children:Object(x.jsx)(Ne,{})})}),document.getElementById("root"))},7:function(e,a,t){e.exports={tablePreview:"TablePreview_tablePreview__1au9I",tablePreview__title:"TablePreview_tablePreview__title__YTweF",pseudo:"TablePreview_pseudo__3WAXa",pseudo__date:"TablePreview_pseudo__date__1cZND",pseudo__btn:"TablePreview_pseudo__btn__25QnE"}},8:function(e,a,t){e.exports={reactTableSect:"DashboardTable_reactTableSect__30CMt",reactTableSect__radioBlock:"DashboardTable_reactTableSect__radioBlock__31o9y",radioBlock__btn:"DashboardTable_radioBlock__btn__KQ-QP",radioBlock__radio:"DashboardTable_radioBlock__radio__2270z"}},9:function(e,a,t){e.exports={radio:"Radio_radio__AljKL",radio__input:"Radio_radio__input__1IRzb",radio__wrap:"Radio_radio__wrap__3vjQU",radio__name:"Radio_radio__name__2cHqK"}}},[[63,1,2]]]);