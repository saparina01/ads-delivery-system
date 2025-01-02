import{a as V,_ as E,r as w,c as I,b as r,w as o,d as i,o as q,e as f,u as D,E as m}from"./index-C1jwx5iw.js";const y="http://localhost:8081/api/auth",L=async p=>{try{return(await V.post(`${y}/register`,p)).data}catch(t){throw t.response.data}},T=async p=>{try{return(await V.post(`${y}/login`,p)).data}catch(t){throw t.response.data}},F={class:"login-register-container"},A={__name:"LoginRegister",setup(p){const t=D(),d=w({username:"",password:""}),n=w({username:"",password:"",confirmPassword:""}),R={username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},h={username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],confirmPassword:[{required:!0,message:"请确认密码",trigger:"blur"},{validator:x,trigger:"blur"}]};function x(a,e,l){e!==n.value.password?l(new Error("两次密码输入不一致")):l()}const C=async()=>{try{const a=await T(d.value);if(a==="用户不存在"||a==="密码错误")m.error(a);else{const[e,l]=a.split(":");m.success("欢迎 "+l),localStorage.setItem("userRole",e),localStorage.setItem("username",l),console.log("用户角色:",e),e==="ADMIN"?await t.push({name:"adminDashboard"}):e==="ADVERTISER"?t.replace({name:"advertiserDashboard"}):await t.push({name:"userDashboard"})}}catch{m.error("登录失败，请稍后再试")}},P=async()=>{try{const a=await L(n.value);a==="用户名已存在"?m.error(a):m.success(a.message),_()}catch{m.error("注册失败，请稍后再试")}},U=()=>{c.value="register"},_=()=>{c.value="login"},c=w("login");return(a,e)=>{const l=i("el-input"),u=i("el-form-item"),g=i("el-button"),b=i("el-form"),v=i("el-tab-pane"),k=i("el-tabs");return q(),I("div",F,[r(k,{modelValue:c.value,"onUpdate:modelValue":e[5]||(e[5]=s=>c.value=s),type:"card"},{default:o(()=>[r(v,{label:"登录",name:"login"},{default:o(()=>[r(b,{model:d.value,rules:R,ref:"loginFormRef","label-width":"100px"},{default:o(()=>[r(u,{label:"用户名",prop:"username"},{default:o(()=>[r(l,{modelValue:d.value.username,"onUpdate:modelValue":e[0]||(e[0]=s=>d.value.username=s),placeholder:"请输入用户名"},null,8,["modelValue"])]),_:1}),r(u,{label:"密码",prop:"password"},{default:o(()=>[r(l,{type:"password",modelValue:d.value.password,"onUpdate:modelValue":e[1]||(e[1]=s=>d.value.password=s),placeholder:"请输入密码"},null,8,["modelValue"])]),_:1}),r(u,null,{default:o(()=>[r(g,{type:"primary",onClick:C},{default:o(()=>e[6]||(e[6]=[f("登录")])),_:1}),r(g,{onClick:U},{default:o(()=>e[7]||(e[7]=[f("没有账号？注册")])),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),r(v,{label:"注册",name:"register"},{default:o(()=>[r(b,{model:n.value,rules:h,ref:"registerFormRef","label-width":"100px"},{default:o(()=>[r(u,{label:"用户名",prop:"username"},{default:o(()=>[r(l,{modelValue:n.value.username,"onUpdate:modelValue":e[2]||(e[2]=s=>n.value.username=s),placeholder:"请输入用户名"},null,8,["modelValue"])]),_:1}),r(u,{label:"密码",prop:"password"},{default:o(()=>[r(l,{type:"password",modelValue:n.value.password,"onUpdate:modelValue":e[3]||(e[3]=s=>n.value.password=s),placeholder:"请输入密码"},null,8,["modelValue"])]),_:1}),r(u,{label:"确认密码",prop:"confirmPassword"},{default:o(()=>[r(l,{type:"password",modelValue:n.value.confirmPassword,"onUpdate:modelValue":e[4]||(e[4]=s=>n.value.confirmPassword=s),placeholder:"请确认密码"},null,8,["modelValue"])]),_:1}),r(u,null,{default:o(()=>[r(g,{type:"primary",onClick:P},{default:o(()=>e[8]||(e[8]=[f("注册")])),_:1}),r(g,{onClick:_},{default:o(()=>e[9]||(e[9]=[f("已有账号？登录")])),_:1})]),_:1})]),_:1},8,["model"])]),_:1})]),_:1},8,["modelValue"])])}}},S=E(A,[["__scopeId","data-v-9f5b0fb1"]]);export{S as default};
