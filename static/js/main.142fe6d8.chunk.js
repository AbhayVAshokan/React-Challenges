(this["webpackJsonpspotlight-search"]=this["webpackJsonpspotlight-search"]||[]).push([[0],{11:function(e,t,o){"use strict";o.r(t);var n=o(1),r=o.n(n),a=o(4),s=o.n(a),i=(o(9),o(3)),c=["App Store","Keychain Access","Activity Monitor","Automator","Audio MIDI setup","Apple Inc.","Bluetooth File Exchange","Battery","Google Chrome","Chess","Docker","Dock and Menu","Displays","Dictionary","Disk Utility","Desktop and Screensaver","Date & Time","Finder","Font Book","FaceTime","Family Sharing","Google Chrome","Grapher","Home","Help Viewer","iTerm","Image Capture","iMovie","Keynote","Keyboard","Launchpad","Mail","Messages","Storage Management","Maps","Notes","Numbers","Network Utility","Networks","iOS App Installer","Preview","Photos","Photo Booth","QuickTime Player","Reminders","Recents","System Preferences","Safari","Slack","Siri"].sort(),l=o(0),u=function(e){var t=e.value,o=e.onChange,n=e.hasResults;return Object(l.jsxs)("div",{className:["flex","bg-gray-800","opacity-75","pl-2","pr-2","pt-1","pb-1","mt-52","w-2/5","backdrop-filter","backdrop-blur-sm","shadow-2xl",n?"rounded-t-xl":"rounded-xl"].join(" "),children:[Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 mt-auto mb-auto ml-2 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"white",children:Object(l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),Object(l.jsx)("input",{value:t,autoFocus:!0,onChange:o,placeholder:"Spotlight Search",className:"top-5 bg-gray-800 backdrop-filter backdrop-blur-sm opacity-75 text-4xl font-light text-white outline-none"})]})},h=function(e){var t=e.suggestions,o=e.onClick;return Object(l.jsx)("ul",{className:"w-2/5 p-3 rounded-b-2xl bg-opacity-75 bg-gray-800 max-h-96 overflow-scroll backdrop-filter backdrop-blur-sm shadow-2xl",children:t.map((function(e,t){return Object(l.jsx)("li",{onClick:function(){o(e)},className:"text-white hover:bg-blue-500 cursor-pointer mt-1 rounded-sm pl-2 pr-2",children:e},t)}))})},p=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),o=t[0],r=t[1],a=Object(n.useState)([]),s=Object(i.a)(a,2),p=s[0],g=s[1];return Object(l.jsxs)("div",{className:"h-screen bg-background bg-cover bg-no-repeat flex flex-col items-center",children:[Object(l.jsx)(u,{value:o,onChange:function(e){r(e.target.value),function(e){0===e.length?g([]):g(c.filter((function(t){return t.toLowerCase().includes(e.toLowerCase())})))}(e.target.value)},hasResults:p.length>0}),p.length>0&&Object(l.jsx)(h,{suggestions:p,onClick:function(e){r(e),g([])}})]})},g=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,12)).then((function(t){var o=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;o(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),g()},9:function(e,t,o){}},[[11,1,2]]]);
//# sourceMappingURL=main.142fe6d8.chunk.js.map