(this["webpackJsonpreact-challenges-website"]=this["webpackJsonpreact-challenges-website"]||[]).push([[0],{51:function(e,t,r){},78:function(e,t,r){"use strict";r.r(t);var s=r(1),n=r.n(s),o=r(40),a=r.n(o),c=(r(51),function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,79)).then((function(t){var r=t.getCLS,s=t.getFID,n=t.getFCP,o=t.getLCP,a=t.getTTFB;r(e),s(e),n(e),o(e),a(e)}))}),i=r(13),l=r(2),d=r(41),m=r(23),u=r.p+"static/media/react-logo.07cb26b0.png",h=r(0),j={filter:function(e){var t=e.x,r=e.y;return e.image.get(t,r).b>50},color:function(e){e.x,e.y,e.image;return"#61dafb"},radius:function(){return 1.5*Math.random()+.5},mass:function(){return 40},friction:function(){return.15},initialPosition:function(e){var t=e.canvasDimensions;return new m.a(t.width/2,t.height/2)}},b=function(e,t){return m.c.disturbance(e,t,50)};var x,g=r(5),p=["App Store","Keychain Access","Activity Monitor","Automator","Audio MIDI setup","Apple Inc.","Bluetooth File Exchange","Battery","Google Chrome","Chess","Docker","Dock and Menu","Displays","Dictionary","Disk Utility","Desktop and Screensaver","Date & Time","Finder","Font Book","FaceTime","Family Sharing","Google Chrome","Grapher","Home","Help Viewer","iTerm","Image Capture","iMovie","Keynote","Keyboard","Launchpad","Mail","Messages","Storage Management","Maps","Notes","Numbers","Network Utility","Networks","iOS App Installer","Preview","Photos","Photo Booth","QuickTime Player","Reminders","Recents","System Preferences","Safari","Slack","Siri"].sort(),w=function(e){var t=e.value,r=e.onChange,s=e.hasResults;return Object(h.jsxs)("div",{className:["flex","bg-gray-800","opacity-75","pl-2","pr-2","pt-1","pb-1","mt-52","w-2/5","backdrop-filter","backdrop-blur-sm","shadow-2xl",s?"rounded-t-xl":"rounded-xl"].join(" "),children:[Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 mt-auto mb-auto ml-2 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"white",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),Object(h.jsx)("input",{value:t,autoFocus:!0,onChange:r,placeholder:"Spotlight Search",className:"top-5 bg-gray-800 backdrop-filter backdrop-blur-sm opacity-75 text-4xl font-light text-white outline-none"})]})},f=function(e){var t=e.suggestions,r=e.onClick;return Object(h.jsx)("ul",{className:"w-2/5 p-3 rounded-b-2xl bg-opacity-75 bg-gray-800 max-h-96 overflow-scroll backdrop-filter backdrop-blur-sm shadow-2xl",children:t.map((function(e,t){return Object(h.jsx)("li",{onClick:function(){r(e)},className:"text-white hover:bg-blue-500 cursor-pointer mt-1 rounded-sm pl-2 pr-2",children:e},t)}))})},v=r.p+"static/media/background.7b57e1c7.jpg",O=function(){var e=Object(s.useState)(""),t=Object(g.a)(e,2),r=t[0],n=t[1],o=Object(s.useState)([]),a=Object(g.a)(o,2),c=a[0],i=a[1];return Object(h.jsxs)("div",{className:"h-screen bg-cover bg-no-repeat flex flex-col items-center",style:{backgroundImage:"url(".concat(v,")")},children:[Object(h.jsx)(w,{value:r,onChange:function(e){n(e.target.value),function(e){0===e.length?i([]):i(p.filter((function(t){return t.toLowerCase().includes(e.toLowerCase())})))}(e.target.value)},hasResults:c.length>0}),c.length>0&&Object(h.jsx)(f,{suggestions:c,onClick:function(e){n(e),i([])}})]})},k=r(15),N=r(46),y=r(17),D=function(e){var t=e.addTodo;return Object(h.jsx)(y.d,{initialValues:{title:"",description:""},validate:function(e){if(!e.title)return{title:"Title is required"}},onSubmit:function(e,r){var s=r.resetForm;t(e.title,e.description),s()},className:"sticky top-20 shadow-lg",children:Object(h.jsxs)(y.c,{autoComplete:"off",children:[Object(h.jsxs)("div",{className:"flex my-1",children:[Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mt-1 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"#BDBDBD",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})}),Object(h.jsxs)("div",{className:"w-full",children:[Object(h.jsx)(y.b,{name:"title",type:"text",placeholder:"What do you need to remember?",className:"w-full font-semibold outline-none text-xl px-2 rounded-lg"}),Object(h.jsx)(y.a,{name:"title",component:"div",className:"text-xs text-red-500 px-2 font-semibold"})]})]}),Object(h.jsxs)("div",{className:"relative",children:[Object(h.jsx)(y.b,{name:"description",type:"textarea",placeholder:"Enter your description",className:"bg-yellow-50 rounded-2xl p-2 w-full h-20 outline-none text-sm text-gray-700 font-medium shadow-lg"}),Object(h.jsx)("button",{type:"submit",className:"z-10 absolute bottom-0 right-0 py-1 px-2 rounded-md shadow-md text-white m-2 transition duration-200 hover:scale-125 bg-yellow-500 hover:bg-yellow-600 font-semibold text-sm",children:Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})})})]})]})})},L=function(e){var t=e.id,r=e.title,s=e.description,n=e.completed,o=e.completedTodo,a=e.removeTodo;return Object(h.jsxs)("div",{className:["flex","justify-between","bg-gray-50","rounded-lg","py-2","px-5","my-2","transition","duration-200","hover:scale-105","hover:bg-gray-100","hover:inner-shadow-gray-100","shadow-sm",n?"opacity-60":"opacity-100"].join(" "),children:[Object(h.jsxs)("div",{className:"flex cursor-pointer",children:[Object(h.jsx)("input",{type:"checkbox",checked:n,onChange:function(){return o(t)},className:"h-4 w-4 cursor-pointer mr-2 mt-1"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{className:[n?"line-through":"",n?"text-gray-400":"text-black","font-bold","text-lg"].join(" "),children:r}),Object(h.jsx)("p",{className:[n?"text-gray-300":"text-gray-700","text-xs"].join(" "),children:s})]})]}),Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 my-auto cursor-pointer transition duration-200 hover:scale-110",fill:"none",viewBox:"0 0 24 24",stroke:"#BDBDBD",onClick:function(){return a(t)},children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})]})},C=function(){var e=Object(s.useState)([]),t=Object(g.a)(e,2),r=t[0],n=t[1];return Object(h.jsxs)("div",{className:"w-full sm:w-9/12 lg:w-7/12 mx-auto my-20",children:[Object(h.jsx)(D,{addTodo:function(e,t){return function(e,t){n([].concat(Object(N.a)(r),[{id:"todo__".concat(Math.random().toString().substr(2)),title:e,description:t,completed:!1}]))}(e,t)}}),Object(h.jsx)("br",{}),r.map((function(e){return Object(h.jsx)(L,{id:e.id,title:e.title,description:e.description,completed:e.completed,completedTodo:function(e){return function(e){n((function(t){return t.map((function(t){return t.id===e?Object(k.a)(Object(k.a)({},t),{},{completed:!t.completed}):t}))}))}(e)},removeTodo:function(e){return function(e){n((function(t){return t.filter((function(t){return t.id!==e}))}))}(e)}},e.id)}))]})},M=r.p+"static/media/apple.ce9fd4bf.svg",B=r.p+"static/media/battery.908c84d6.svg",S=function(){var e=new Date;return"".concat(e.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",day:"2-digit",month:"short",weekday:"short"}))},W=function(){return Object(h.jsxs)("nav",{className:"flex w-full backdrop-blur-2xl bg-black bg-opacity-20 text-white text-sm font-medium items-center justify-between",children:[Object(h.jsxs)("div",{className:"flex items-center",children:[Object(h.jsx)("img",{src:M,alt:"Apple Logo",className:"w-8 h-6 ml-1 -mr-1 cursor-default hover:bg-white hover:bg-opacity-25 py-0.5 rounded-sm"}),Object(h.jsx)("p",{className:"px-2 rounded-xm font-bold cursor-default hover:bg-white hover:bg-opacity-25 py-0.5 rounded-sm",children:"System Preferences"}),["Edit","View","Window","Help"].map((function(e,t){return Object(h.jsx)("p",{className:"px-2 cursor-default hover:bg-white hover:bg-opacity-25 py-0.5 rounded-sm",children:e},t)}))]}),Object(h.jsxs)("div",{className:"flex items-center",children:[Object(h.jsxs)("div",{className:"flex items-center px-2 cursor-default hover:bg-white hover:bg-opacity-25 rounded-sm",children:[Object(h.jsx)("p",{className:"text-xs font-medium",children:"100%"}),Object(h.jsx)("img",{src:B,alt:"Battery Icon",className:"w-8 h-6"})]}),Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-8 px-2 cursor-default hover:bg-white hover:bg-opacity-25 py-0.5 rounded-sm",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"})}),Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-8 cursor-default hover:bg-white hover:bg-opacity-25 py-0.5 rounded-sm px-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),Object(h.jsx)("div",{className:"cursor-default hover:bg-white hover:bg-opacity-25 py-0.5 rounded-sm px-2 mr-1",children:S()})]})]})},H=function(e){var t=e.children;return Object(h.jsxs)("div",{className:"bg-gray-100 rounded-lg w-1/2 m-auto shadow-lg relative top-20 dark:bg-dark-outerBody dark:border-gray-600 border",children:[Object(h.jsx)("div",{className:"flex items-center dark:bg-dark-title",children:Object(h.jsxs)("div",{className:"flex w-full p-1 items-center",children:[Object(h.jsx)("div",{className:"h-3 w-3 rounded-full bg-red-500 mx-1 text-xs flex items-center justify-center text-red-500 hover:text-black cursor-default font-semibold",children:"x"}),Object(h.jsx)("div",{className:"h-3 w-3 rounded-full bg-yellow-400 mx-1 text-xs flex items-center justify-center text-yellow-400 hover:text-black cursor-default font-semibold",children:"-"}),Object(h.jsx)("div",{className:"h-3 w-3 rounded-full bg-gray-500 mx-1"}),Object(h.jsxs)("div",{className:"flex items-center mx-2 text-black dark:text-gray-100",children:[Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-7 w-7 mx-1 hover:bg-gray-300 transfition duration-200 rounded-md p-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-7 w-7 mx-1 p-1",fill:"none",viewBox:"0 0 24 24",stroke:"#BDBDBD",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]}),Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-7 w-7 hover:bg-gray-300 transfition duration-200 rounded-md p-1 text-gray-500 dark:text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})}),Object(h.jsx)("p",{className:"font-bold text-gray-600 text-sm cursor-default mx-1 dark:text-white",children:"Desktop & Screen Saver"}),Object(h.jsx)("div",{className:"flex items-center mr-0.5 rounded-sm justify-end flex-1",children:Object(h.jsxs)("div",{className:"flex items-center rounded-sm py-0.5 px-1 border border-gray-400 dark:border-gray-600 dark:text-gray-500",children:[Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),Object(h.jsx)("input",{className:"rounded-r-sm outline-none bg-gray-100 text-xs font-medium dark:bg-dark-title dark:text-white",placeholder:"Search"})]})})]})}),Object(h.jsxs)("div",{className:"flex items-center top-12 justify-center absolute w-full text-xs font-medium cursor-default",children:[Object(h.jsx)("div",{className:"rounded-l-md px-2 bg-white border-l border-t border-b border-gray-300 py-0.5 dark:text-white dark:bg-dark-dropDowns dark:border-gray-600",children:"Desktop"}),Object(h.jsx)("div",{className:"rounded-r-md px-2 bg-gray-200 border-r border-t border-b border-gray-300 py-0.5 dark:text-white dark:bg-dark-innerBody dark:border-gray-600",children:"Screen Saver"})]}),Object(h.jsx)("div",{className:"rounded-md mx-4 mt-6 p-5 bg-gray-200 dark:bg-dark-innerBody",children:t}),Object(h.jsx)("br",{})]})},I=function(){return Object(h.jsxs)("div",{className:"bg-white w-5/12 text-xs font-medium dark:bg-dark-outerBody dark:text-gray-200",children:[Object(h.jsxs)("div",{className:"flex items-center cursor-default",children:[Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-3 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"#777777",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M19 9l-7 7-7-7"})}),"Apple"]}),Object(h.jsxs)("div",{className:"ml-4",children:[Object(h.jsxs)("div",{className:"flex items-center cursor-default",children:[Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-1",fill:"#008cf7",viewBox:"0 0 24 24",stroke:"#008cf7",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"})}),"Desktop Pictures"]}),Object(h.jsxs)("div",{className:"flex items-center cursor-default",children:[Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-1",fill:"#f7b500",viewBox:"0 0 24 24",stroke:"#f7b500",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"})}),"Colors"]})]}),Object(h.jsxs)("div",{className:"flex items-center cursor-default",children:[Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-3 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"#777777",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M19 9l-7 7-7-7"})}),"Photos"]}),Object(h.jsxs)("div",{className:"ml-4",children:[Object(h.jsxs)("div",{className:"flex items-center cursor-default",children:[Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"#777777",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})}),"Favorites"]}),Object(h.jsxs)("div",{className:"flex items-center cursor-default",children:[Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"#777777",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),"People"]}),Object(h.jsxs)("div",{className:"flex items-center cursor-default",children:[Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"#777777",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"})}),"Shared"]}),Object(h.jsxs)("div",{className:"flex items-center cursor-default",children:[Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"#777777",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})}),"Albums"]})]}),Object(h.jsxs)("div",{className:"flex items-center cursor-default",children:[Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-3 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"#777777",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M19 9l-7 7-7-7"})}),"Folders"]}),Object(h.jsx)("div",{className:"ml-4",children:Object(h.jsxs)("div",{className:"flex items-center cursor-default",children:[Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-1",fill:"#008cf7",viewBox:"0 0 24 24",stroke:"#008cf7",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"})}),"Pictures"]})}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]})},E=function(e){var t=e.wallpaper,r=e.wallpapers,s=e.onWallpaperChange;return Object(h.jsxs)(H,{children:[Object(h.jsxs)("div",{className:"flex items-center",children:[Object(h.jsx)("img",{src:t,alt:"Wallpaper preview",className:"cover h-20 w-32 p-2 border-white border rounded-lg bg-gray-300 dark:bg-dark-innerBody dark:border-gray-600"}),Object(h.jsx)("div",{className:"flex items-center justify-between",children:Object(h.jsxs)("div",{className:"text-sm bg-white rounded-md pl-1 pr-0.5 flex items-center shadow-md ml-5 font-medium dark:bg-dark-dropDowns dark:text-white",children:[Object(h.jsx)("p",{className:"w-40",children:"Fill Screen"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-2 w-3 text-white bg-blue-500 rounded-t-sm px-0.5 cursor-default",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M5 15l7-7 7 7"})}),Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-2 w-3 text-white bg-blue-500 rounded-b-sm px-0.5 cursor-default",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M19 9l-7 7-7-7"})})]})]})})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"flex bg-white w-full dark:bg-dark-outerBody",children:[Object(h.jsx)(I,{}),Object(h.jsx)("div",{className:"border border-gray-300 flex flex-wrap justfy-start w-full pt-1 pb-2 pl-1 dark:border-gray-600",children:r.map((function(e,t){return Object(h.jsx)("img",{src:e,alt:"Wallpaper Thumbnail",className:"cover w-13 h-16 mt-1 mx-1",onClick:function(){return s(e)}},t)}))})]}),Object(h.jsx)("div",{className:"flex mt-2",children:Object(h.jsxs)("div",{className:"flex bg-white text-sm rounded-md shadow-md border border-gray-300 cursor-default dark:bg-dark-title dark:border-gray-600 dark:text-white",children:[Object(h.jsx)("p",{className:"px-2 border-r border-gray-300 dark:border-gray-600",children:"+"}),Object(h.jsx)("p",{className:"px-2",children:"-"})]})})]})},P=r.p+"static/media/loki.493d0f99.jpg",F=r.p+"static/media/batman.6737fc34.jpg",T=r.p+"static/media/interstellar.c6e05e4d.jpg",z=function(){var e=[P,F,T],t=Object(s.useState)(e[0]),r=Object(g.a)(t,2),n=r[0],o=r[1];return Object(h.jsxs)("div",{className:"w-screen h-screen bg-cover",style:{backgroundImage:"url(".concat(n,")")},children:[Object(h.jsx)(W,{}),Object(h.jsx)(E,{wallpapers:e,wallpaper:n,onWallpaperChange:o})]})},R=r(44),V=r.n(R),A=r(45),U=function(e){var t=e.exportData,r=Object(s.useState)(!1),n=Object(g.a)(r,2),o=n[0],a=n[1];return Object(h.jsxs)("div",{className:"relative inline-block mx-5",children:[Object(h.jsxs)("button",{className:"flex p-2 border-2 border-gray-200 rounded-md shadow-md text-blue-900 bg-white font-bold transform duration-200 hover:scale-105 hover:bg-blue-50",onClick:function(){return a((function(e){return!e}))},children:[Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})}),"Export"]}),o&&Object(h.jsx)("div",{className:"absolute bg-white shadow-md rounded-lg w-36 h-10 flex items-center justify-center hover:bg-blue-100 font-semibold text-gray-500",children:Object(h.jsx)(A.CSVLink,{data:t,children:"Export as .csv"})})]})},G=function(e){e.value;var t=e.onChange,r=e.exportData;return Object(h.jsxs)("div",{className:"flex justify-between bg-gray-50 p-2 rounded-2xl mb-5 w-full sticky top-5 z-20",children:[Object(h.jsxs)("div",{className:"flex bg-white border-gray-200 rounded-xl shadow-lg px-3 w-full",children:[Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-blue-900 my-auto mr-2 cursor-pointer",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),Object(h.jsx)("input",{autoFocus:!0,placeholder:"Search by name, gender, or email",onChange:t,className:"outline-none text-sm w-full"})]}),Object(h.jsx)(U,{exportData:r})]})},_=function(e){var t,r=e.name,s=e.gender,n=e.dob,o=e.email,a=e.picture,c=e.selected,i=e.onClick;return Object(h.jsxs)("tr",{onClick:i,className:["cursor-pointer","transform","duration-200",c?"hover:bg-green-200":"hover:bg-gray-100","hover:scale-105",c?["scale-105","bg-green-100"].join(" "):""].join(" "),children:[Object(h.jsx)("td",{className:"p-2",children:Object(h.jsxs)("div",{className:"flex items-center",children:[Object(h.jsx)("img",{src:a,alt:r,className:"h-10 w-12 rounded-full py-1 px-2"})," ",Object(h.jsx)("p",{children:r})]})}),Object(h.jsx)("td",{className:"p-2",children:s}),Object(h.jsx)("td",{className:"p-2",children:(t=n,t.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}))}),Object(h.jsx)("td",{className:"p-2",children:o})]})};!function(e){e[e.UP=0]="UP",e[e.DOWN=1]="DOWN",e[e.HIDDEN=2]="HIDDEN"}(x||(x={}));var J=function(){var e=Object(s.useState)([]),t=Object(g.a)(e,2),r=t[0],n=t[1],o=Object(s.useState)(""),a=Object(g.a)(o,2),c=a[0],i=a[1],l=Object(s.useState)({name:x.DOWN,gender:x.HIDDEN,dob:x.HIDDEN,email:x.HIDDEN}),d=Object(g.a)(l,2),m=d[0],u=d[1],j=function(e){return function(e,t){return t.name!==x.HIDDEN?e.sort((function(e,r){return t.name===x.DOWN?e.name<r.name?-1:1:e.name>r.name?-1:1})):t.gender!==x.HIDDEN?e.sort((function(e,r){return t.gender===x.DOWN?e.gender<r.gender?-1:1:e.gender>r.gender?-1:1})):t.email!==x.HIDDEN?e.sort((function(e,r){return t.email===x.DOWN?e.email<r.email?-1:1:e.email>r.email?-1:1})):t.dob!==x.HIDDEN?e.sort((function(e,r){return t.dob===x.DOWN?new Date(e.dob)<new Date(r.dob)?-1:1:new Date(e.dob)>new Date(r.dob)?-1:1})):void 0}(r.filter((function(t){return JSON.stringify(Object.values(t)).toLowerCase().includes(e.toLowerCase())})),m)};Object(s.useEffect)((function(){V.a.get("https://randomuser.me/api?results=500").then((function(e){n(e.data.results.map((function(e){return{name:"".concat(e.name.title,". ").concat(e.name.first," ").concat(e.name.last),gender:e.gender,dob:e.dob.date,email:e.email,picture:e.picture.thumbnail,selected:!1}})))}))}),[]);return Object(h.jsxs)("div",{className:"flex flex-col justify-center mx-20",children:[Object(h.jsx)(G,{onChange:function(e){i(e.target.value)},value:c,exportData:function(e){var t=j(e);return t.some((function(e){return e.selected}))?t.filter((function(e){return!0===e.selected})).map((function(e){return{name:e.name,gender:e.gender,dob:new Date(e.dob).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),email:e.email}})):t.map((function(e){return{name:e.name,gender:e.gender,dob:new Date(e.dob).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),email:e.email}}))}(c)}),Object(h.jsxs)("table",{children:[Object(h.jsx)("thead",{className:"bg-gray-300 mb-5 rounded-full sticky top-20 z-10",children:["Name","Gender","DOB","Email"].map((function(e){return function(e){var t="".concat(e.toLowerCase()),r=m[t];return Object(h.jsx)("th",{onClick:function(){r=r===x.HIDDEN||r===x.UP?x.DOWN:x.UP;var e={name:x.HIDDEN,gender:x.HIDDEN,dob:x.HIDDEN,email:x.HIDDEN};"name"===t?e.name=r:"email"===t?e.email=r:"dob"===t?e.dob=r:e.gender=r,u(Object(k.a)({},e))},children:Object(h.jsxs)("div",{className:"flex items-center cursor-pointer py-3 px-10",children:[Object(h.jsx)("p",{className:["font-bold","transform","duration-200","hover:scale-125","hover:text-black",r!==x.HIDDEN?"text-black":"text-gray-500"].join(" "),children:e}),r===x.UP?Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 11l5-5m0 0l5 5m-5-5v12"})}):r===x.DOWN?Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 13l-5 5m0 0l-5-5m5 5V6"})}):Object(h.jsx)("div",{})," "]})},e)}(e)}))}),Object(h.jsx)("tbody",{children:j(c).map((function(e){return Object(h.jsx)(_,{name:e.name,gender:e.gender,email:e.email,dob:new Date(e.dob),picture:e.picture,selected:e.selected,onClick:function(){return n((function(t){return t.map((function(t){return e.name===t.name?Object(k.a)(Object(k.a)({},t),{},{selected:!t.selected}):t}))}))}},"".concat(e.name,"__").concat(Math.random().toString().substr(2)))}))})]})]})};a.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(i.a,{children:Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{exact:!0,path:"/React-Challenges/",component:function(){var e=Object(d.a)(),t=e.innerWidth,r=e.innerHeight;return Object(h.jsxs)("div",{className:"relative h-screen w-screen",children:[Object(h.jsx)(m.b,{className:"absolute z-10",src:u,width:Number(t),height:Number(r),scale:.6,entropy:15,maxParticles:5e3,particleOptions:j,mouseMoveForce:b,touchMoveForce:b,backgroundColor:"#191D1F"}),Object(h.jsx)("h1",{className:"absolute top-20 text-white z-20 text-6xl font-bold w-screen text-center cursor-default opacity-50 hover:opacity-100 transition duration-500 uppercase",children:"React Challenges"}),Object(h.jsxs)("div",{className:"absolute z-20 flex bottom-20 text-white justify-between items-center w-full px-10",children:[Object(h.jsx)(i.b,{className:"navigator",to:"/React-Challenges/spotlight-search",children:"Spotlight Search"}),Object(h.jsx)(i.b,{className:"navigator",to:"/React-Challenges/formik-todo",children:"Formik Todo"}),Object(h.jsx)(i.b,{className:"navigator",to:"/React-Challenges/darktheme-toggle",children:"Dark Theme Toggle"}),Object(h.jsx)(i.b,{className:"navigator",to:"/React-Challenges/randomuserapi-table",children:"Random User API Table"})]})]})}}),Object(h.jsx)(l.a,{path:"/React-Challenges/spotlight-search",component:O}),Object(h.jsx)(l.a,{path:"/React-Challenges/formik-todo",component:C}),Object(h.jsx)(l.a,{path:"/React-Challenges/darktheme-toggle",component:z}),Object(h.jsx)(l.a,{path:"/React-Challenges/randomuserapi-table",component:J})]})})}),document.getElementById("root")),c()}},[[78,1,2]]]);
//# sourceMappingURL=main.c6b4beb1.chunk.js.map