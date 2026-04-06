import{t as e}from"./plan-mJ9qtQ-Y.js";var t=e.plan_de_trabajo_facttic_2026_2027,n=[{border:`border-brand-yellow`,text:`text-brand-yellow`,count:`bg-brand-yellow`},{border:`border-brand-green`,text:`text-brand-green`,count:`bg-brand-green`},{border:`border-brand-orange`,text:`text-brand-orange`,count:`bg-brand-orange`}],r=`/hola/`,i=document.getElementById(`steps-list`);i.innerHTML=t.map((e,t)=>{let i=n[t%n.length],a=e.eje.split(` `)[1],[,...o]=e.eje.split(` - `),s=o.join(` - `);return`
    <a
      href="${r}eje.html?eje=${a}"
      class="group flex items-center justify-between border-l-4 ${i.border} bg-white/5 hover:bg-white/10 rounded-r-xl px-6 py-5 transition-all"
    >
      <div class="flex items-center gap-4">
        <span class="${i.text} text-sm font-mono font-bold w-6 text-center">EJE ${a}</span>
        <span class="font-medium text-white">${s}</span>
      </div>
      <div class="flex items-center gap-3">
        <span class="text-xs ${i.text} opacity-60">${e.objetivos.length} objetivos</span>
        <svg class="w-4 h-4 text-brand-gray group-hover:text-white transition-colors shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
        </svg>
      </div>
    </a>
  `}).join(``);