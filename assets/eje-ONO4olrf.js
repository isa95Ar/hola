import{t as e}from"./plan-mJ9qtQ-Y.js";var t=e.plan_de_trabajo_facttic_2026_2027,n={A:{hex:`#F1DA1C`,text:`text-brand-yellow`,border:`border-brand-yellow`,dot:`bg-brand-yellow`,cardBorder:`hover:border-brand-yellow`},B:{hex:`#68DE94`,text:`text-brand-green`,border:`border-brand-green`,dot:`bg-brand-green`,cardBorder:`hover:border-brand-green`},C:{hex:`#FF6853`,text:`text-brand-orange`,border:`border-brand-orange`,dot:`bg-brand-orange`,cardBorder:`hover:border-brand-orange`}},r=`/hola/`,i=new URLSearchParams(window.location.search).get(`eje`)?.toUpperCase(),a=t.find(e=>e.eje.startsWith(`EJE ${i}`)),o=document.getElementById(`eje-content`);if(!a)o.innerHTML=`<p class="text-brand-gray text-center">Eje no encontrado.</p>`;else{document.title=`${a.eje} — Plan Facttic`;let e=n[i]??n.A,s=t.indexOf(a),c=t[s-1]??null,l=t[s+1]??null,u=c?.eje.split(` `)[1],d=l?.eje.split(` `)[1],f=a.objetivos.map(t=>`
    <button
      data-id="${t.id}"
      class="group w-full text-left flex items-start gap-4 bg-white/5 ${e.cardBorder} border border-white/10 rounded-xl px-5 py-4 transition-all duration-200 cursor-pointer hover:bg-white/8"
    >
      <span class="mt-0.5 text-xs font-mono font-bold ${e.text} shrink-0 w-6">${t.id}</span>
      <span class="text-white/90 font-medium leading-snug flex-1">${t.objetivo}</span>
      ${t.accionables.length>0?`<span class="shrink-0 mt-0.5 text-xs ${e.text} opacity-0 group-hover:opacity-60 transition-opacity">
            ${t.accionables.length} →
           </span>`:`<svg class="shrink-0 mt-0.5 w-4 h-4 text-brand-red opacity-60" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
             <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/>
           </svg>`}
    </button>
  `).join(``);o.innerHTML=`
    <!-- Header -->
    <div class="space-y-3 border-l-4 ${e.border} pl-5">
      <p class="text-xs font-mono font-bold uppercase tracking-widest ${e.text}">EJE ${i}</p>
      <h1 class="text-2xl font-bold text-white leading-tight">${a.eje.split(` - `).slice(1).join(` - `)}</h1>
      <p class="text-brand-gray text-sm leading-relaxed">${a.descripcion}</p>
      <p class="${e.text} text-sm opacity-50">${a.objetivos.length} objetivos</p>
    </div>

    <!-- Objetivos -->
    <div class="space-y-2">
      ${f}
    </div>

    <!-- Navigation -->
    <div class="flex justify-between pt-6 border-t border-white/10">
      ${c?`<a href="${r}eje.html?eje=${u}" class="flex items-center gap-2 text-sm text-brand-gray hover:text-white transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
            EJE ${u}
           </a>`:`<span></span>`}
      ${l?`<a href="${r}eje.html?eje=${d}" class="flex items-center gap-2 text-sm text-brand-gray hover:text-white transition-colors">
            EJE ${d}
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
           </a>`:`<span></span>`}
    </div>
  `;let p=document.getElementById(`modal`),m=document.getElementById(`modal-backdrop`),h=document.getElementById(`modal-panel`),g=document.getElementById(`modal-bar`),_=document.getElementById(`modal-id`),v=document.getElementById(`modal-title`),y=document.getElementById(`modal-list`),b=document.getElementById(`modal-close`);function x(t){_.textContent=t.id,_.className=`text-xs font-mono font-bold ${e.text}`,v.textContent=t.objetivo,g.style.background=e.hex,t.accionables.length?y.innerHTML=t.accionables.map((t,n)=>{let r=t.plazo?`<span class="inline-flex items-center gap-1.5 text-xs rounded-full px-2.5 py-0.5 border" style="color:${e.hex}; border-color:${e.hex}40; background:${e.hex}12">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            ${t.plazo}
           </span>`:``,i=t.responsable?`<span class="inline-flex items-center gap-1.5 text-xs rounded-full px-2.5 py-0.5 bg-white/6 text-brand-gray border border-white/8">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
            ${t.responsable}
           </span>`:``,a=r||i?`<div class="flex flex-wrap gap-2 pt-1">${r}${i}</div>`:``,o=t.descripcion_detalle?`<p class="text-brand-gray text-xs leading-relaxed">${t.descripcion_detalle}</p>`:``;return`
        <li
          class="space-y-2 rounded-lg border border-white/8 bg-white/4 p-4 opacity-0 translate-y-2 transition-all duration-300"
          style="transition-delay: ${n*70}ms"
        >
          <p class="text-white/90 text-sm font-medium leading-snug">${t.nombre}</p>
          ${o}
          ${a}
        </li>
      `}).join(``):y.innerHTML=`
        <li class="flex items-center gap-3 py-4 px-1 text-brand-red/80">
          <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/>
          </svg>
          <span class="text-sm">Este objetivo no tiene accionables.</span>
        </li>
      `,p.classList.remove(`hidden`),requestAnimationFrame(()=>{m.style.opacity=`1`,h.style.opacity=`1`,h.style.transform=`translateY(0)`,y.querySelectorAll(`li`).forEach(e=>{requestAnimationFrame(()=>{e.style.opacity=`1`,e.style.transform=`translateY(0)`})})}),document.body.style.overflow=`hidden`}function S(){m.style.opacity=`0`,h.style.opacity=`0`,h.style.transform=`translateY(1rem)`,setTimeout(()=>{p.classList.add(`hidden`),document.body.style.overflow=``},300)}o.querySelectorAll(`button[data-id]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=a.objetivos.find(t=>t.id===e.dataset.id);t&&x(t)})}),b.addEventListener(`click`,S),m.addEventListener(`click`,S),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&S()})}