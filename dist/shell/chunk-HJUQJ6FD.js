var m=Object.defineProperty,n=Object.defineProperties;var o=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var g=(c,a,b)=>a in c?m(c,a,{enumerable:!0,configurable:!0,writable:!0,value:b}):c[a]=b,r=(c,a)=>{for(var b in a||={})p.call(a,b)&&g(c,b,a[b]);if(i)for(var b of i(a))q.call(a,b)&&g(c,b,a[b]);return c},s=(c,a)=>n(c,o(a));var t=(c,a,b)=>(g(c,typeof a!="symbol"?a+"":a,b),b);var u=(c,a,b)=>new Promise((j,h)=>{var k=d=>{try{e(b.next(d))}catch(f){h(f)}},l=d=>{try{e(b.throw(d))}catch(f){h(f)}},e=d=>d.done?j(d.value):Promise.resolve(d.value).then(k,l);e((b=b.apply(c,a)).next())});export{r as a,s as b,t as c,u as d};
