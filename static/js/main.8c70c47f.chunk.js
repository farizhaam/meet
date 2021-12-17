(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{191:function(e,t,n){},193:function(e,t,n){},195:function(e,t,n){},213:function(e,t,n){},350:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(63),c=n.n(o),s=(n(191),n(25)),i=n.n(s),l=n(50),u=n(22),d=n(28),h=n(23),f=n(24),p=n(353),m=n(354),v=n(358),b=n(177),g=n(178),j=n(74),w=n(182),O=(n(193),n(360)),x=n(2),y=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={collapsed:!0},e.handleClick=function(){!0===e.state.collapsed?e.setState({collapsed:!1}):e.setState({collapsed:!0})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.event;return Object(x.jsxs)("div",{className:"event",children:[Object(x.jsx)("h2",{className:"summary",children:e.summary}),Object(x.jsxs)("p",{className:"start-date",children:[e.start.dateTime," (",e.start.timeZone,")"]}),Object(x.jsxs)("p",{className:"end-date",children:[e.end.dateTime," (",e.end.timeZone,")"]}),Object(x.jsx)("p",{className:"location",children:e.location}),Object(x.jsx)(O.a,{variant:"primary",className:"toggle-details",onClick:this.handleClick,children:"Toggle details"}),!1===this.state.collapsed&&Object(x.jsx)("p",{className:"info-details",children:e.description})]})}}]),n}(a.Component),k=y,S=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(x.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(x.jsx)("li",{children:Object(x.jsx)(k,{event:e})},e.id)}))})}}]),n}(a.Component),T=S,N=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(d.a)(n,[{key:"render",value:function(){return Object(x.jsx)("div",{className:"Alert",children:Object(x.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),C=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(N),E=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="orange",a}return n}(N),W=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(N),Z=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;if(0!==e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1})).length)return e.setState({query:n,suggestions:[],showSuggestions:!1,infoText:""});e.setState({query:n,infoText:"We cannot find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{className:"CitySearch",children:[Object(x.jsx)("input",{type:"text",className:"city",placeholder:"e.g. Berlin",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(x.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(x.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(x.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(x.jsx)("b",{children:"See all cities"})})]}),Object(x.jsx)(C,{text:this.state.infoText})]})}}]),n}(a.Component),I=Z,A=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;n<=0||n>32?e.setState({infoText:"Select number from 1 to 32"}):e.setState({numberOfEvents:n,infoText:""})},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"numberOfEvents",children:[Object(x.jsx)("input",{type:"number",className:"event-num",value:this.state.numberOfEvents,onChange:this.handleInputChanged}),Object(x.jsx)(W,{text:this.state.infoText})]})}}]),n}(a.Component),L=A;n(195);var M=function(e){return e.showWelcomeScreen?Object(x.jsxs)("div",{className:"WelcomeScreen",children:[Object(x.jsx)("h1",{children:"Welcome to the Meet app"}),Object(x.jsx)("h4",{children:" Log in to see upcoming events around the world for full-stack developers "}),Object(x.jsx)("div",{className:"button_cont",align:"center",children:Object(x.jsxs)("div",{class:"google-btn",children:[Object(x.jsx)("div",{class:"google-icon-wrapper",children:Object(x.jsx)("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(x.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"btn-text",children:Object(x.jsx)("b",{children:"Sign in with google"})})]})}),Object(x.jsx)("a",{href:"https://farizhaam.github.io/meet/privacy.html",rel:"nofollow noopener",children:"Privacy policy "})]}):null},q=n(181),B=n(114),D=n.n(B),J=n(93),U=n.n(J),R=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],_=(n(213),function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),F=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},z=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://9peepl53nb.execute-api.eu-central-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(e){var t=e.map((function(e){return e.location}));return Object(q.a)(new Set(t))},G=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(U.a.start(),!window.location.href.startsWith("http://localhost")){e.next=3;break}return e.abrupt("return",R);case 3:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),U.a.done(),console.log(t),e.abrupt("return",t?JSON.parse(t).events:[]);case 8:return e.next=11,H();case 11:if(!(n=e.sent)){e.next=21;break}return F(),a="https://9peepl53nb.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/".concat(n),e.next=17,D.a.get(a);case 17:return(r=e.sent).data&&(o=P(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),U.a.done(),e.abrupt("return",r.data.events);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,_(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,D.a.get("https://9peepl53nb.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,c=o.data.authUrl,e.abrupt("return",window.location.href=c);case 20:return e.abrupt("return",r&&z(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],currentLocation:"all",numberOfEvents:32,showWelcomeScreen:void 0},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e.updateEvents=function(t,n){G().then((function(a){var r=("all"===t?a:a.filter((function(e){return e.location===t}))).slice(0,n);e.setState({events:r,currentLocation:t})}))},e.updateEventsNumber=function(t){var n=parseInt(t.target.value);e.setState({numberOfEvents:n}),e.updateEvents(e.state.currentLocation,e.state.numberOfEvents)},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,_(t);case 4:if(!e.sent.error){e.next=8;break}e.t0=!1,e.next=9;break;case 8:e.t0=!0;case 9:n=e.t0,a=new URLSearchParams(window.location.search),r=a.get("code"),this.setState({showWelcomeScreen:!(r||n)}),(r||n)&&this.mounted&&G().then((function(e){o.mounted&&o.setState({events:e,locations:P(e)}),navigator.onLine?o.setState({warningText:""}):(o.setState({warningText:"Network error, the events you are viewing may be out of date. To make sure you are viewing the latest information, make sure you are connected to the internet"}),console.log("offline mode"))}));case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return void 0===this.state.showWelcomeScreen?Object(x.jsx)("div",{className:"App"}):Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("h1",{className:"app-title",children:"Meet App"}),Object(x.jsx)("h4",{className:"choose-city",children:"Choose your nearest city"}),Object(x.jsx)(I,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(x.jsx)("p",{className:"event-numbers",children:"Number of events to display"}),Object(x.jsx)(L,{numberOfEvents:this.state.numberOfEvents,updateEventsNumber:this.updateEventsNumber}),Object(x.jsx)("h4",{children:"Events in each city"}),Object(x.jsx)(p.a,{height:400,children:Object(x.jsxs)(m.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(x.jsx)(v.a,{}),Object(x.jsx)(b.a,{type:"category",dataKey:"city",name:"city"}),Object(x.jsx)(g.a,{allowDecimals:!1,type:"number",dataKey:"number",name:"number of events"}),Object(x.jsx)(j.a,{cursor:{strokeDasharray:"3 3"}}),Object(x.jsx)(w.a,{data:this.getData(),fill:"#8884d8"})]})}),Object(x.jsx)(T,{events:this.state.events}),Object(x.jsx)(E,{text:this.state.warningText}),Object(x.jsx)(M,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){H()}})]})}}]),n}(a.Component),V=Y,K=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function X(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,361)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))},$=n(179);c.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(V,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");K?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):X(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):X(t,e)}))}}(),Q(),$.config("a63b9ddff7b8476ead054b3ad405cc81").install()}},[[350,1,2]]]);
//# sourceMappingURL=main.8c70c47f.chunk.js.map