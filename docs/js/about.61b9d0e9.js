(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{f820:function(t,e,o){"use strict";o.r(e);var n=o("3536"),c=o("f33e"),u={class:"about"},r={style:{border:"1px dashed #333",margin:"10px",padding:"10px"}},s={style:{border:"1px dashed #333",margin:"10px",padding:"10px"}},a=Object(n["j"])("h1",null,"vuex state storeTest：",-1);function l(t,e){return Object(n["r"])(),Object(n["e"])("div",u,[Object(n["j"])("div",r,[Object(n["j"])("h1",null,"state.count is: "+Object(c["E"])(t.state.count),1),Object(n["j"])("h2",null,"state.double is: "+Object(c["E"])(t.state.double),1),Object(n["j"])("h2",null,"count is: "+Object(c["E"])(t.count),1),Object(n["j"])("button",{onClick:e[1]||(e[1]=function(e){return t.increment()})},"add")]),Object(n["j"])("div",s,[a,Object(n["j"])("h1",null,Object(c["E"])(t.storeTest),1),Object(n["j"])("button",{onClick:e[2]||(e[2]=function(e){return t.updateStoreTest()})},"updateStoreTest")]),Object(n["j"])("button",{onClick:e[3]||(e[3]=function(e){return t.goHome()})},"go /home")])}var b=o("ef83"),i=o("a18c"),j=o("4360"),d={setup:function(){var t=Object(n["l"])(),e=t.ctx;console.log(e),console.log(i["a"]);var o=function(){i["a"].push("/home")};console.log(j["a"]);var c=Object(n["d"])((function(){return j["a"].state.storeTest})),u=function(){s.value++,j["a"].commit("setStoreTest","hello world"+s.value),console.log(c.value)},r=Object(b["g"])({count:0,double:Object(n["d"])((function(){return 2*r.count}))}),s=Object(b["h"])(0),a=function(){r.count++,s.value++};return Object(n["B"])((function(){return r.double}),(function(t){console.log("count is ".concat(t))})),{state:r,count:s,increment:a,storeTest:c,updateStoreTest:u,goHome:o}}};d.render=l;e["default"]=d}}]);