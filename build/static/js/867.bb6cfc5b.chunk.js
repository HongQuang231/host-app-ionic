/*! For license information please see 867.bb6cfc5b.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkhost=globalThis.webpackChunkhost||[]).push([[867],{867:(t,e,n)=>{n.r(e),n.d(e,{createSwipeBackGesture:()=>a});var r=n(9384),o=n(9406),s=n(1288);const a=(t,e,n,a,i)=>{const c=t.ownerDocument.defaultView;let h=(0,o.i)(t);const l=t=>h?-t.deltaX:t.deltaX;return(0,s.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:n=>(h=(0,o.i)(t),(t=>{const{startX:e}=t;return h?e>=c.innerWidth-50:e<=50})(n)&&e()),onStart:n,onMove:t=>{const e=l(t)/c.innerWidth;a(e)},onEnd:t=>{const e=l(t),n=c.innerWidth,o=e/n,s=(t=>h?-t.velocityX:t.velocityX)(t),a=s>=0&&(s>.2||e>n/2),u=(a?1-o:o)*n;let d=0;if(u>5){const t=u/Math.abs(s);d=Math.min(t,540)}i(a,o<=0?.01:(0,r.m)(0,o,.9999),d)}})}}}]);
//# sourceMappingURL=867.bb6cfc5b.chunk.js.map