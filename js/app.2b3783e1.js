(function(){"use strict";var e={9372:function(e,t,a){var i=a(7764),n=a(4108);const s={class:"wrapper"},r={class:"main"},o={class:"card-wrapper"},c=(0,n.QD)("h2",{class:"main-title"},"Today's Highlights",-1),u={class:"box-wrapper"};function l(e,t,a,i,l,d){const p=(0,n.E1)("app-aside"),m=(0,n.E1)("app-navbar"),y=(0,n.E1)("app-card"),h=(0,n.E1)("app-box");return(0,n.Wz)(),(0,n.An)(n.ae,null,[(0,n.K2)(p,{onInformationEvent:d.handleInformation,asideIcon:l.icon,asideTempC:l.tempC,asideTempF:l.tempF,usedTempValue:l.usedTemp,asideDate:new Date(1e3*l.date).getDay(),asideText:l.text,asideRain:l.rain,asideCity:l.city,asideCountry:l.country,countryTime:l.locationTime},null,8,["onInformationEvent","asideIcon","asideTempC","asideTempF","usedTempValue","asideDate","asideText","asideRain","asideCity","asideCountry","countryTime"]),(0,n.QD)("div",s,[(0,n.K2)(m,{onClickC:d.emitMutationC,onClickF:d.emitMutationF,usedTempValue:l.usedTemp,isActiveValueC:l.isActiveC,isActiveValueF:l.isActiveF},null,8,["onClickC","onClickF","usedTempValue","isActiveValueC","isActiveValueF"]),(0,n.QD)("main",r,[(0,n.QD)("div",o,[((0,n.Wz)(!0),(0,n.An)(n.ae,null,(0,n.mi)(l.forecastDays,((e,t)=>((0,n.Wz)(),(0,n.Az)(y,{key:t,dayOfWeek:new Date(1e3*e.date_epoch).getDay(),maxTempC:e.day.maxtemp_c,minTempC:e.day.mintemp_c,maxTempF:e.day.maxtemp_f,minTempF:e.day.mintemp_f,usedTempValue:l.usedTemp,dayIcon:e.day.condition.icon},null,8,["dayOfWeek","maxTempC","minTempC","maxTempF","minTempF","usedTempValue","dayIcon"])))),128))]),c,(0,n.QD)("div",u,[(0,n.K2)(h,{boxValue:Object.entries(l.allBoxValue)},null,8,["boxValue"])])])])],64)}var d=a(9096);const p=e=>((0,n.ED)("data-v-635793c0"),e=e(),(0,n.ii)(),e),m={class:"aside"},y={class:"aside-header"},h={class:"input-border"},v=p((()=>(0,n.QD)("i",{class:"ri-search-line"},null,-1))),T=["disabled"],f=p((()=>(0,n.QD)("i",{class:"ri-crosshair-line"},null,-1))),x=[f],A={class:"aside-body"},b={class:"aside-body__top"},D=["src"],C={key:0,class:"aside-temperature"},W={key:1,class:"aside-temperature"},g={class:"aside-text"},_={class:"aside-text__day"},Q={key:0,class:"aside-text__time"},k={key:1,class:"aside-text__time"},F={class:"aside-body__bottom"},V={class:"condition"},I=p((()=>(0,n.QD)("i",{class:"ri-cloud-line"},null,-1))),w={class:"condition-text"},z={class:"condition"},S=p((()=>(0,n.QD)("i",{class:"ri-rainy-line"},null,-1))),O={class:"condition-text"},M={class:"aside-footer"},j={class:"aside-city"};function B(e,t,a,s,r,o){return(0,n.Wz)(),(0,n.An)("aside",m,[(0,n.QD)("div",y,[(0,n.QD)("div",h,[v,(0,n.wt)((0,n.QD)("input",{class:"search-input",type:"text",placeholder:"Search for places ...","onUpdate:modelValue":t[0]||(t[0]=e=>r.inputText=e),onKeyup:t[1]||(t[1]=(0,i.jj)(((...e)=>o.getTextFromInput&&o.getTextFromInput(...e)),["enter"]))},null,544),[[i.Og,r.inputText]])]),(0,n.QD)("button",{class:"find-location",type:"button",onClick:t[2]||(t[2]=(...e)=>o.getTextFromInput&&o.getTextFromInput(...e)),disabled:!Boolean(r.inputText)},x,8,T)]),(0,n.QD)("div",A,[(0,n.QD)("div",b,[(0,n.QD)("img",{class:"aside-icon",src:a.asideIcon,alt:"Weather icon"},null,8,D),"°C"===a.usedTempValue?((0,n.Wz)(),(0,n.An)("p",C,(0,d.WA)(Math.ceil(a.asideTempC))+(0,d.WA)(a.usedTempValue),1)):(0,n.g1)("",!0),"°F"===a.usedTempValue?((0,n.Wz)(),(0,n.An)("p",W,(0,d.WA)(Math.ceil(a.asideTempF))+(0,d.WA)(a.usedTempValue),1)):(0,n.g1)("",!0),(0,n.QD)("p",g,[(0,n.QD)("span",_,(0,d.WA)(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][a.asideDate]),1),(0,n.mY)(", "),"Tashkent"===a.asideCity?((0,n.Wz)(),(0,n.An)("span",Q,(0,d.WA)(this.currentTime),1)):(0,n.g1)("",!0),"Tashkent"!=a.asideCity?((0,n.Wz)(),(0,n.An)("span",k,(0,d.WA)(a.countryTime),1)):(0,n.g1)("",!0)])]),(0,n.QD)("div",F,[(0,n.QD)("div",V,[I,(0,n.QD)("p",w,(0,d.WA)(a.asideText),1)]),(0,n.QD)("div",z,[S,(0,n.QD)("p",O,"Rain - "+(0,d.WA)(a.asideRain)+"%",1)])])]),(0,n.QD)("div",M,[(0,n.QD)("p",j,(0,d.WA)(a.asideCity)+", "+(0,d.WA)(a.asideCountry),1)])])}var E={props:["asideIcon","asideTempC","asideTempF","usedTempValue","asideDate","asideText","asideRain","asideCity","asideCountry","countryTime"],data(){return{inputText:"",currentTime:""}},mounted(){this.getCurrentTime(),setInterval(this.getCurrentTime,3e4)},methods:{getCurrentTime(){const e=new Date,t=e.getHours().toString().padStart(2,"0"),a=e.getMinutes().toString().padStart(2,"0");this.currentTime=`${t}:${a}`},getTextFromInput(){""!=this.inputText&&(this.$emit("information-event",this.inputText),this.inputText="")}}},K=a(4100);const P=(0,K.c)(E,[["render",B],["__scopeId","data-v-635793c0"]]);var H=P;const R=e=>((0,n.ED)("data-v-698d0d53"),e=e(),(0,n.ii)(),e),Y={class:"navbar"},$=R((()=>(0,n.QD)("div",{class:"navbar-left"},[(0,n.QD)("h1",{class:"navbar-title"},"Weather")],-1))),q={class:"navbar-right"};function N(e,t,a,i,s,r){return(0,n.Wz)(),(0,n.An)("nav",Y,[$,(0,n.QD)("div",q,[(0,n.QD)("button",{class:(0,d.WN)(["navbar-button",{active:a.isActiveValueC}]),onClick:t[0]||(t[0]=(...e)=>a.onClickC&&a.onClickC(...e))}," °C ",2),(0,n.QD)("button",{class:(0,d.WN)(["navbar-button",{active:a.isActiveValueF}]),onClick:t[1]||(t[1]=(...e)=>a.onClickF&&a.onClickF(...e))}," °F ",2)])])}var U={props:["onClickC","onClickF","usedTempValue","isActiveValueC","isActiveValueF"]};const L=(0,K.c)(U,[["render",N],["__scopeId","data-v-698d0d53"]]);var G=L;const J={class:"card"},X={class:"card-title"},Z=["src"],ee={class:"card-temperature"},te={key:0},ae={class:"card-temperature__morning"},ie={class:"card-temperature__evening"},ne={key:1},se={class:"card-temperature__morning"},re={class:"card-temperature__evening"};function oe(e,t,a,i,s,r){return(0,n.Wz)(),(0,n.An)("div",J,[(0,n.QD)("p",X,(0,d.WA)(["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][a.dayOfWeek]),1),(0,n.QD)("img",{class:"card-img",src:a.dayIcon,alt:"Sun"},null,8,Z),(0,n.QD)("p",ee,["°C"===a.usedTempValue?((0,n.Wz)(),(0,n.An)("span",te,[(0,n.QD)("span",ae,(0,d.WA)(Math.ceil(a.maxTempC))+"°",1),(0,n.QD)("span",ie,(0,d.WA)(Math.ceil(a.minTempC))+"°",1)])):(0,n.g1)("",!0),"°F"===a.usedTempValue?((0,n.Wz)(),(0,n.An)("span",ne,[(0,n.QD)("span",se,(0,d.WA)(Math.ceil(a.maxTempF))+"°",1),(0,n.QD)("span",re,(0,d.WA)(Math.ceil(a.minTempF))+"°",1)])):(0,n.g1)("",!0)])])}var ce={props:["dayOfWeek","maxTempC","minTempC","maxTempF","minTempF","usedTempValue","dayIcon"]};const ue=(0,K.c)(ce,[["render",oe],["__scopeId","data-v-4529cc15"]]);var le=ue;const de=e=>((0,n.ED)("data-v-0a06f2ab"),e=e(),(0,n.ii)(),e),pe={class:"box-title"},me={key:0},ye={class:"box-description"},he={key:0},ve={key:1},Te={key:2},fe={key:3},xe={key:4},Ae={key:1,class:"box-description"},be=de((()=>(0,n.QD)("span",{class:"box-description__text"},"km/h",-1))),De={key:2,class:"box-description sun-time"},Ce={class:"sunText"},We=de((()=>(0,n.QD)("span",{class:"sunIcon"},[(0,n.QD)("i",{class:"ri-arrow-up-circle-line"})],-1))),ge={class:"sunText"},_e=de((()=>(0,n.QD)("span",{class:"sunIcon"},[(0,n.QD)("i",{class:"ri-arrow-down-circle-line"})],-1))),Qe={key:3,class:"box-description"},ke=de((()=>(0,n.QD)("span",{class:"box-description__text"},"%",-1))),Fe={key:4,class:"box-description"},Ve=de((()=>(0,n.QD)("span",{class:"box-description__text"},"km",-1))),Ie={key:5,class:"box-description"};function we(e,t,a,i,s,r){return(0,n.Wz)(!0),(0,n.An)(n.ae,null,(0,n.mi)(a.boxValue,((e,t)=>((0,n.Wz)(),(0,n.An)("div",{class:"box",key:t},[(0,n.QD)("p",pe,(0,d.WA)(e[0]),1),0===t?((0,n.Wz)(),(0,n.An)("div",me,[(0,n.QD)("p",ye,(0,d.WA)(e[1]),1),1===e[1]||2===e[1]?((0,n.Wz)(),(0,n.An)("p",he,"Low")):(0,n.g1)("",!0),3===e[1]||4===e[1]||5===e[1]?((0,n.Wz)(),(0,n.An)("p",ve,"Moderate")):(0,n.g1)("",!0),6===e[1]||7===e[1]?((0,n.Wz)(),(0,n.An)("p",Te,"High")):(0,n.g1)("",!0),8===e[1]||9===e[1]||10===e[1]?((0,n.Wz)(),(0,n.An)("p",fe," Very high ")):(0,n.g1)("",!0),e[1]>=11?((0,n.Wz)(),(0,n.An)("p",xe,"Extreme")):(0,n.g1)("",!0)])):(0,n.g1)("",!0),1===t?((0,n.Wz)(),(0,n.An)("p",Ae,[(0,n.mY)((0,d.WA)(e[1]),1),be])):(0,n.g1)("",!0),2===t?((0,n.Wz)(),(0,n.An)("p",De,[(0,n.QD)("span",Ce,[We,(0,n.QD)("span",null,(0,d.WA)(e[1][0]),1)]),(0,n.QD)("span",ge,[_e,(0,n.QD)("span",null,(0,d.WA)(e[1][1]),1)])])):(0,n.g1)("",!0),3===t?((0,n.Wz)(),(0,n.An)("p",Qe,[(0,n.mY)((0,d.WA)(e[1]),1),ke])):(0,n.g1)("",!0),4===t?((0,n.Wz)(),(0,n.An)("p",Fe,[(0,n.mY)((0,d.WA)(e[1]),1),Ve])):(0,n.g1)("",!0),5===t?((0,n.Wz)(),(0,n.An)("p",Ie,(0,d.WA)(e[1]),1)):(0,n.g1)("",!0)])))),128)}var ze={props:["boxValue"]};const Se=(0,K.c)(ze,[["render",we],["__scopeId","data-v-0a06f2ab"]]);var Oe=Se,Me=a(2964),je={name:"App",components:{AppAside:H,AppNavbar:G,AppCard:le,AppBox:Oe},icon:"",tempC:"",tempF:"",date:"",text:"",rain:"",city:"",country:"",forecastDays:null,usedTemp:"",data(){return{receivedInformation:"Tashkent",icon:"",tempC:"",tempF:"",date:"",text:"",rain:"",city:"",country:"",locationTime:null,forecastDays:null,usedTemp:"°C",isActiveC:!0,isActiveF:!1,uvIndex:0,windStatusKph:null,sunriseTime:null,sunsetTime:null,humidityPercent:0,visibilityKm:0,airQualityPm25:0,allBoxValue:{"UV Index":[""],"Wind Status":[""],"Sunrise & Sunset":["",""],Humidity:[""],Visibility:[""],"Air Quality":[""]}}},mounted(){this.getWeather()},methods:{getWeather(){Me.c.get(`http://api.weatherapi.com/v1/forecast.json?key=8b684208e7b74e8592c102618231904&q=${this.receivedInformation}&days=7&aqi=yes&alerts=no`).then((e=>{this.icon=e.data.current.condition.icon,this.tempC=e.data.current.temp_c,this.tempF=e.data.current.temp_f,this.date=e.data.current.last_updated_epoch,this.text=e.data.current.condition.text,this.rain=e.data.forecast.forecastday[0].day.daily_chance_of_rain,this.city=e.data.location.name,this.country=e.data.location.country,this.locationTime=e.data.location.localtime.split(" ")[1],this.forecastDays=e.data.forecast.forecastday,this.uvIndex=e.data.current.uv,this.windStatusKph=e.data.current.wind_kph,this.sunriseTime=e.data.forecast.forecastday[0].astro.sunrise,this.sunsetTime=e.data.forecast.forecastday[0].astro.sunset,this.humidityPercent=e.data.current.humidity,this.visibilityKm=e.data.current.vis_km,this.airQualityPm25=e.data.current.air_quality.pm2_5,this.allBoxValue["UV Index"]=this.uvIndex,this.allBoxValue["Wind Status"]=this.windStatusKph,this.allBoxValue["Sunrise & Sunset"][0]=this.sunriseTime,this.allBoxValue["Sunrise & Sunset"][1]=this.sunsetTime,this.allBoxValue["Humidity"]=this.humidityPercent,this.allBoxValue["Visibility"]=this.visibilityKm,this.allBoxValue["Air Quality"]=this.airQualityPm25,console.log(e)})).catch((e=>{console.log(e)}))},emitMutationC(){this.usedTemp="°C",this.isActiveC=!0,this.isActiveF=!1},emitMutationF(){this.usedTemp="°F",this.isActiveF=!0,this.isActiveC=!1},handleInformation(e){this.receivedInformation=e,this.getWeather()}}};const Be=(0,K.c)(je,[["render",l]]);var Ee=Be;(0,i.W0)(Ee).mount("#app")}},t={};function a(i){var n=t[i];if(void 0!==n)return n.exports;var s=t[i]={exports:{}};return e[i].call(s.exports,s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,i,n,s){if(!i){var r=1/0;for(l=0;l<e.length;l++){i=e[l][0],n=e[l][1],s=e[l][2];for(var o=!0,c=0;c<i.length;c++)(!1&s||r>=s)&&Object.keys(a.O).every((function(e){return a.O[e](i[c])}))?i.splice(c--,1):(o=!1,s<r&&(r=s));if(o){e.splice(l--,1);var u=n();void 0!==u&&(t=u)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[i,n,s]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,s,r=i[0],o=i[1],c=i[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(n in o)a.o(o,n)&&(a.m[n]=o[n]);if(c)var l=c(a)}for(t&&t(i);u<r.length;u++)s=r[u],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(l)},i=self["webpackChunkresponsive_weather_website"]=self["webpackChunkresponsive_weather_website"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=a.O(void 0,[999],(function(){return a(9372)}));i=a.O(i)})();
//# sourceMappingURL=app.2b3783e1.js.map