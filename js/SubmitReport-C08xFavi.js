import{f as l,a as V,b as c,d,_ as i}from"./common-BNKVqjpR.js";import"./vendor-Jz-U8a5Z.js";const m=""+new URL("../assets/1-DnPioQn1.jpg",import.meta.url).href,p=""+new URL("../assets/3-dILWj01a.jpg",import.meta.url).href,A=""+new URL("../assets/light-close-D4hDwAMn.png",import.meta.url).href,g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAwtJREFUWEftlk1IVFEUx//3vSEDKbdBHyhIC6EQS6g2KdImisA+VhK+N0qrZuY8NWnltCrSmfscWgTie30uWlhhUOBGgwhJIslw00KL3EYifdnMnHij44yj82ZeTrnpLe+7957f+Z+PewQ2+RObbB//Af6qArGYVRMI6NNuYV4DIOVAA+A76jE3bhNps7lnpLTfATxNpJ/Ld98qACntHoDDHo2DmTsNwx9ZC2AxgDEivbFIgKUDQOKKF4h4vGyiq+v815IBuBG7gfX328eTSdRn9qTUnAXErfQakbbKuZwQFJbMDUBKaxRAg7t6iUai9rH0npICxGL3ticS3+syAMoowJMAU0aBjHFnraQAm54D/wRASqsOELVCcA0zDjDzuKoqU8kknhJpX7IhpLReMosXhqFd8lSG+arANO2rzDAA3pJ7ITPPCMEGUdtjLyVcdA5IaQ0BaF66XISB+HMnmzOdM93AuIXIfz8fhJR2ZXbXLArANK0TzHgCYGJxkZu6u/0LuQYiEeuIovADQOxKJJKVnZ1tH9ZpzY8AriXSq4ouw97eO+U+X3wSQLWiiL3BoPY+n3emaREzogAeEumn10nKVJ8g0lccL6iAadr1zPyKWQwZhnamUHxN05pjhkqk7ygJgJSDrYCwAXQT6dcLAUhpDwN8EhBVuS9kulN6UiAaHewQQvQJwadCIf9wIYBo1IoKAVIU5WAw2Po6pyy9h6Cvzz6mqjwihLgWCmmXCwE4tQ/g8Pz8r/Jw+MK3DQNEItZuRcFHAFNE+n73x8gZZtRRZrwxDD3rTVg6VUwIZpbrfOX5XDbYDLBj3HW4kNJ6C2AfIEYAOErkfNzqLLiUYSrhYgC2uXhqqWqiJxBo/5TeE43erQYWbwohmgqEaAHgAJF/xcE1M2E4bG+tqIgfWv8ipRkQFwH8BDAHpEKzB8BOAGWACADxqXwQ8/O+8XBY+5H93/NUHIlYLYqCswAcb8sBfAbEs2QSNzo6tPFCSZr73zPA6qweaMiebrwad/ZvCOBPDJZUgf8ApVDgNzLahjBqsrnoAAAAAElFTkSuQmCC",E={class:"Report"},N={class:"f16"},h={class:"content"},w={class:"row"},_={class:"l-row"},B={class:"textarea-ctn"},C={class:"text-num"},k={class:"upload-photo"},f=["src"],v=Vue.defineComponent({name:"SubmitReport",__name:"SubmitReport",setup(D){const n=VueRouter.useRoute(),e=Vue.reactive({type:"色情低俗",mode:"video",desc:"",photos:[]});Vue.onMounted(()=>{e.type=n.query.type,e.mode=n.query.mode});async function s(){V(),await c(500),d(),e.photos.push(new URL(Object.assign({"../../assets/img/poster/1.jpg":m,"../../assets/img/poster/3.jpg":p})[`../../assets/img/poster/${e.photos.length}.jpg`],import.meta.url).href)}return(x,t)=>{const r=Vue.resolveComponent("BaseHeader"),a=Vue.resolveComponent("dy-button");return Vue.openBlock(),Vue.createElementBlock("div",E,[Vue.createVNode(r,null,{center:Vue.withCtx(()=>[Vue.createElementVNode("span",N,[e.mode==="video"?(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,{key:0},[Vue.createTextVNode("视频")],64)):Vue.createCommentVNode("",!0),e.mode==="music"?(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,{key:1},[Vue.createTextVNode("音乐")],64)):Vue.createCommentVNode("",!0),e.mode==="chat"?(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,{key:2},[Vue.createTextVNode("私信")],64)):Vue.createCommentVNode("",!0),t[2]||(t[2]=Vue.createTextVNode("举报"))])]),_:1}),Vue.createElementVNode("div",h,[t[6]||(t[6]=Vue.createElementVNode("div",{class:"title"},[Vue.createElementVNode("span",null,"你的举报将在12小时内受理，若举报成功会第一时间告知处理结果，请尽量提交完整的举报描述及材料")],-1)),Vue.createElementVNode("div",w,[Vue.createElementVNode("span",null," 举报理由："+Vue.toDisplayString(e.type),1)]),Vue.createElementVNode("div",_,[t[3]||(t[3]=Vue.createElementVNode("div",{class:"notice"},"举报描述(选填)",-1)),Vue.createElementVNode("div",B,[Vue.withDirectives(Vue.createElementVNode("textarea",{name:"",id:"",cols:"30",rows:"10","onUpdate:modelValue":t[0]||(t[0]=o=>e.desc=o),placeholder:"详细描述举报理由"},null,512),[[Vue.vModelText,e.desc]])]),Vue.createElementVNode("div",C,Vue.toDisplayString(e.desc.length)+"/200",1)]),Vue.createElementVNode("div",k,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(e.photos,(o,u)=>(Vue.openBlock(),Vue.createElementBlock("div",{class:"photo-wrapper",key:u},[Vue.createElementVNode("img",{class:"photo",src:o,alt:""},null,8,f),Vue.createElementVNode("img",{class:"close",src:A,alt:"",onClick:t[1]||(t[1]=y=>e.photos.pop())})]))),128)),e.photos.length!==4?(Vue.openBlock(),Vue.createElementBlock("div",{key:0,class:"upload",onClick:s},[t[4]||(t[4]=Vue.createElementVNode("img",{src:g,alt:""},null,-1)),Vue.createElementVNode("span",null,Vue.toDisplayString(e.photos.length)+"/4",1)])):Vue.createCommentVNode("",!0)]),Vue.createVNode(a,{type:"primary",onClick:Vue.unref(l)},{default:Vue.withCtx(()=>t[5]||(t[5]=[Vue.createTextVNode("提交")])),_:1},8,["onClick"])])])}}}),b=i(v,[["__scopeId","data-v-08e9fafe"]]);export{b as default};
