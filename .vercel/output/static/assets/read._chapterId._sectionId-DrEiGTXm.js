import{i as e,n as t,t as n}from"./jsx-runtime-Cltr0gcK.js";import{n as r}from"./dist-YoanIjz8.js";import{t as i}from"./link-CdvnX98W.js";import{a}from"./preload-helper-D3mKGaoc.js";import{t as o}from"./createLucideIcon-CSACGEBt.js";import{t as s}from"./bookmark-DBSXUDq5.js";import{t as c}from"./chevron-left-BhQCqCfo.js";import{a as l,s as u,u as d}from"./dist-D2WW3Qn-.js";import{t as f}from"./button-B_XmZjgp.js";import{A as p,N as m,S as h,t as g}from"./index-B016fzkb.js";var _=o(`type`,[[`polyline`,{points:`4 7 4 4 20 4 20 7`,key:`1nosan`}],[`line`,{x1:`9`,x2:`15`,y1:`20`,y2:`20`,key:`swin9y`}],[`line`,{x1:`12`,x2:`12`,y1:`4`,y2:`20`,key:`1tx1rr`}]]),v=e(t()),y=n();function b(e){let t=``,n=[],r=null,i=()=>{n.length&&(t+=`<div class="${r===`check`?`check-box`:`info-box`}"><b>${r===`check`?`Check that you understand`:`In this chapter`}</b><ul>${n.map(e=>`<li>${u(e)}</li>`).join(``)}</ul></div>`,n=[],r=null)};return e.forEach(e=>{if(e.t===`infohead`)i(),r=`info`;else if(e.t===`checkhead`)i(),r=`check`;else if(e.t===`info`||e.t===`check`)n.push(e.x);else{i();let n=e.x;n.length<72&&!/[.:;,?!)]$/.test(n)&&!/^[a-z]/.test(n)?t+=`<h3>${u(n)}</h3>`:t+=`<p>${d(u(n))}</p>`}}),i(),t}function x(){let{chapterId:e,sectionId:t}=g.useParams(),n=Number(e),o=Number(t),u=m(n),d=u?.sections[o],x=a(),S=h(e=>e.markSectionRead),C=h(e=>e.setLastRead),w=h(e=>e.markChapterDone),T=h(e=>e.toggleBookmark),E=h(e=>e.bookmarks),D=h(e=>e.readerSize),O=h(e=>e.setReaderSize),k=`${n}.${o}`,A=E.includes(k);(0,v.useEffect)(()=>{u&&d&&(S(k),C(n,o))},[k,u,d,n,o,S,C]);let j=(0,v.useMemo)(()=>d?b(d.blocks):``,[d]);if(!u||!d)return(0,y.jsx)(`p`,{className:`text-muted`,children:`Section not found.`});let M=p(n),N=D===`sm`?`text-[15px]`:D===`lg`?`text-[19px]`:`text-[17px]`;return(0,y.jsxs)(`article`,{className:`space-y-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,y.jsxs)(i,{to:`/read/$chapterId`,params:{chapterId:String(n)},className:`inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-ink`,children:[(0,y.jsx)(c,{className:`size-4`}),`Chapter `,n]}),(0,y.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,y.jsx)(f,{variant:`ghost`,size:`icon`,"aria-label":`Cycle type size`,onClick:()=>O(D===`sm`?`md`:D===`md`?`lg`:`sm`),children:(0,y.jsx)(_,{className:`size-4`})}),(0,y.jsx)(f,{variant:`ghost`,size:`icon`,"aria-label":A?`Remove bookmark`:`Bookmark section`,onClick:()=>T(k),children:(0,y.jsx)(s,{className:l(`size-4`,A&&`fill-crimson text-crimson`)})})]})]}),(0,y.jsxs)(`header`,{children:[(0,y.jsx)(`p`,{className:`text-[11px] font-semibold tracking-[0.18em] text-muted uppercase`,children:u.title}),(0,y.jsx)(`h1`,{className:`mt-1 font-display text-3xl font-semibold`,children:d.title})]}),(0,y.jsx)(`div`,{className:l(`reader`,N),dangerouslySetInnerHTML:{__html:j}}),(0,y.jsxs)(`div`,{className:`rounded-xl bg-paper-2 p-5 shadow-card`,children:[(0,y.jsx)(`h2`,{className:`font-display text-lg font-semibold`,children:`Key facts`}),(0,y.jsxs)(`p`,{className:`mt-1 text-sm text-ink-soft`,children:[M.length,` flashcards cover chapter `,n,`. Reviewing right after reading is the fastest way to lock facts in.`]}),(0,y.jsx)(f,{asChild:!0,variant:`crimson`,className:`mt-3`,children:(0,y.jsx)(i,{to:`/cards`,search:{chapter:n},children:`Study this chapter’s cards`})})]}),(0,y.jsxs)(`div`,{className:`flex gap-2`,children:[o>0&&(0,y.jsx)(f,{variant:`outline`,className:`flex-1`,onClick:()=>void x({to:`/read/$chapterId/$sectionId`,params:{chapterId:String(n),sectionId:String(o-1)}}),children:`Previous`}),o<u.sections.length-1?(0,y.jsx)(f,{className:`flex-1`,onClick:()=>void x({to:`/read/$chapterId/$sectionId`,params:{chapterId:String(n),sectionId:String(o+1)}}),children:`Next section`}):(0,y.jsx)(f,{className:`flex-1`,onClick:()=>{w(n),r(`Chapter ${n} complete`),x({to:`/read`})},children:`Finish chapter`})]}),(0,y.jsx)(`style`,{children:`
        .reader p { margin: 0.85em 0; color: var(--ink); line-height: 1.65; }
        .reader h3 {
          font-family: var(--font-display);
          font-size: 1.05em;
          font-weight: 600;
          margin: 1.4em 0 0.4em;
          padding-left: 0.7em;
          border-left: 3px solid var(--crimson);
        }
        .info-box, .check-box {
          border-radius: 14px;
          padding: 14px 16px;
          margin: 1.1em 0;
        }
        .info-box { background: color-mix(in oklab, var(--navy) 6%, transparent); }
        .check-box { background: color-mix(in oklab, var(--crimson) 7%, transparent); }
        .info-box b, .check-box b {
          display: block;
          margin-bottom: 6px;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .check-box b { color: var(--crimson); }
        .info-box ul, .check-box ul { margin: 0; padding-left: 1.15em; }
        .info-box li, .check-box li { margin: 0.25em 0; }
      `})]})}export{x as component};