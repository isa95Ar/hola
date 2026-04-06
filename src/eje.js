import './style.css'
import './loader.js'
import plan from './data/plan.json'

const ejes = plan.plan_de_trabajo_facttic_2026_2027

const ejeColors = {
  A: { text: 'text-brand-yellow', border: 'border-brand-yellow', cardBorder: 'hover:border-brand-yellow' },
  B: { text: 'text-brand-green',  border: 'border-brand-green',  cardBorder: 'hover:border-brand-green'  },
  C: { text: 'text-brand-orange', border: 'border-brand-orange', cardBorder: 'hover:border-brand-orange' },
}

const params = new URLSearchParams(window.location.search)
const key = params.get('eje')?.toUpperCase()
const eje = ejes.find((e) => e.eje.startsWith(`EJE ${key}`))
const container = document.getElementById('eje-content')

if (!eje) {
  container.innerHTML = `<p class="text-brand-gray text-center">Eje no encontrado.</p>`
} else {
  document.title = `${eje.eje} — Plan Facttic`

  const color = ejeColors[key] ?? ejeColors.A
  const idx = ejes.indexOf(eje)
  const prevEje = ejes[idx - 1] ?? null
  const nextEje = ejes[idx + 1] ?? null
  const prevKey = prevEje?.eje.split(' ')[1]
  const nextKey = nextEje?.eje.split(' ')[1]

  const objetivosHtml = eje.objetivos.map((obj) => `
    <a
      href="./objetivo.html?eje=${key}&obj=${obj.id}"
      class="group flex items-start gap-4 bg-white/5 ${color.cardBorder} border border-white/10 rounded-xl px-5 py-4 transition-all hover:bg-white/8"
    >
      <span class="mt-0.5 text-xs font-mono font-bold ${color.text} shrink-0 w-6">${obj.id}</span>
      <span class="text-white/90 font-medium leading-snug flex-1">${obj.objetivo}</span>
      ${obj.accionables.length > 0
        ? `<span class="shrink-0 mt-0.5 text-xs ${color.text} opacity-0 group-hover:opacity-60 transition-opacity">
            ${obj.accionables.length} →
           </span>`
        : `<svg class="shrink-0 mt-0.5 w-4 h-4 text-brand-red opacity-60" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
             <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/>
           </svg>`
      }
    </a>
  `).join('')

  container.innerHTML = `
    <!-- Header -->
    <div class="space-y-3 border-l-4 ${color.border} pl-5">
      <p class="text-xs font-mono font-bold uppercase tracking-widest ${color.text}">EJE ${key}</p>
      <h1 class="text-2xl font-bold text-white leading-tight">${eje.eje.split(' - ').slice(1).join(' - ')}</h1>
      <p class="text-brand-gray text-sm leading-relaxed">${eje.descripcion}</p>
      <p class="${color.text} text-sm opacity-50">${eje.objetivos.length} objetivos</p>
    </div>

    <!-- Objetivos -->
    <div class="space-y-2">
      ${objetivosHtml}
    </div>

    <!-- Navigation -->
    <div class="flex justify-between pt-6 border-t border-white/10">
      ${prevEje
        ? `<a href="./eje.html?eje=${prevKey}" class="flex items-center gap-2 text-sm text-brand-gray hover:text-white transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
            EJE ${prevKey}
           </a>`
        : `<span></span>`
      }
      ${nextEje
        ? `<a href="./eje.html?eje=${nextKey}" class="flex items-center gap-2 text-sm text-brand-gray hover:text-white transition-colors">
            EJE ${nextKey}
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
           </a>`
        : `<span></span>`
      }
    </div>
  `
}
