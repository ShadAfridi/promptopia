(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[178],{711:function(e,t,s){Promise.resolve().then(s.bind(s,3006))},3006:function(e,t,s){"use strict";s.r(t);var r=s(9268),a=s(4751),i=s(6008),n=s(2290),l=s(6006);let o=()=>{var e;let{data:t}=(0,a.useSession)(),[s,o]=(0,l.useState)([]),c=(0,i.useRouter)();(0,l.useEffect)(()=>{var e;let s=async()=>{var e;let s=await fetch("/api/users/".concat(null==t?void 0:null===(e=t.user)||void 0===e?void 0:e.id,"/posts")),r=await s.json();o(r)};(null==t?void 0:null===(e=t.user)||void 0===e?void 0:e.id)&&s()},[null==t?void 0:null===(e=t.user)||void 0===e?void 0:e.id]);let d=e=>{c.push("/update-prompt?id=".concat(e._id))},u=async e=>{let t=confirm("Are you sure you want to delete this prompt?");if(t)try{var r;await fetch("/api/prompt/".concat(null===(r=e._id)||void 0===r?void 0:r.toString()),{method:"DELETE"});let t=s.filter(t=>t._id!==e._id);o(t)}catch(e){console.log(e)}};return(0,r.jsx)(n.Z,{name:"My",desc:"Welcome to your personalized profile page",data:s,handleEdit:d,handleDelete:u})};t.default=o},2290:function(e,t,s){"use strict";var r=s(9268),a=s(4058);let i=e=>{let{name:t,desc:s,data:i,handleEdit:n,handleDelete:l}=e;return(0,r.jsxs)("section",{className:"w-full",children:[(0,r.jsx)("h1",{className:"head_text text-left",children:(0,r.jsxs)("span",{className:"blue_gradient",children:[t," Profile"]})}),(0,r.jsx)("p",{className:"desc text-left",children:s}),(0,r.jsx)("div",{className:"mt-10 prompt_layout",children:i.map(e=>(0,r.jsx)(a.Z,{post:e,handleEdit:()=>n&&n(e),handleDelete:()=>l&&l(e)},e._id))})]})};t.Z=i},4058:function(e,t,s){"use strict";var r=s(9268),a=s(4751),i=s(6394),n=s.n(i),l=s(6008),o=s(6006);let c=e=>{let{post:t,handleTagClick:s,handleEdit:i,handleDelete:c}=e,[d,u]=(0,o.useState)(""),{data:p}=(0,a.useSession)(),m=(0,l.usePathname)(),h=(0,l.useRouter)(),f=()=>{if(t.creator._id===(null==p?void 0:p.user.id))return h.push("/profile");h.push("/profile/".concat(t.creator._id,"?name=").concat(t.creator.username))},x=()=>{u(t.prompt),navigator.clipboard.writeText(t.prompt),setTimeout(()=>u(""),3e3)};return(0,r.jsxs)("div",{className:"prompt_card",children:[(0,r.jsxs)("div",{className:"flex justify-between items-start gap-5",children:[(0,r.jsxs)("div",{className:"flex-1 flex justify-start items-center gap-3 cursor-pointer",onClick:f,children:[(0,r.jsx)(n(),{src:t.creator.image,alt:"user_image",width:40,height:40,className:"rounded-full object-contain"}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("h3",{className:"font-satoshi font-semibold text-gray-900",children:t.creator.username}),(0,r.jsx)("p",{className:"font-inter text-sm text-gray-500",children:t.creator.email})]})]}),(0,r.jsx)("div",{className:"copy_btn",onClick:()=>x(),children:(0,r.jsx)(n(),{src:d===t.prompt?"/assets/icons/tick.svg":"/assets/icons/copy.svg",alt:"copy_btn",width:12,height:12})})]}),(0,r.jsx)("p",{className:"my-4 font-satoshi text-sm text-gray-700",children:t.prompt}),(0,r.jsxs)("p",{className:"font-inter text-sm blue_gradient cursor-pointer",onClick:()=>s&&s(t.tag),children:["#",t.tag]}),(null==p?void 0:p.user.id)===t.creator._id&&"/profile"===m&&(0,r.jsxs)("div",{className:"mt-5 flex-center gap-4 border-t  border-gray-100 pt-3",children:[(0,r.jsx)("p",{className:"font-inter text-sm green_gradient cursor-pointer",onClick:i,children:"Edit"}),(0,r.jsx)("p",{className:"font-inter text-sm orange_gradient cursor-pointer",onClick:c,children:"Delete"})]})]})};t.Z=c},6008:function(e,t,s){e.exports=s(167)}},function(e){e.O(0,[751,394,667,139,744],function(){return e(e.s=711)}),_N_E=e.O()}]);