export const startTextTemplate = `<p>vítej</p>
<p>začni zmáčknutím jednoho z tlačítek</p>`

export const introTextTemplate = `<p>Jsi pedagožstvo / pedagožka / pedagog.</p>
<p>Jsi součástí pedagogického sboru.</p>
<p>Vyběr jsi pět pojmu, které budou rozvíjet tvuj přístup ke vzdělávání.</p>
<p>Těchto pět pojmu bude tvým manifestem.</p>
`

export const outroTextTemplate = `<p>Díky.</p>
<p>Tvé manifesto se tiskne.</p>
<p>Seber si ho sebou domu, nebo ho někam vyvěš.</p>`

export const questionTextTemplate = (c: string, q: string) => {
    return `<p class="heading"><strong>${c}</strong></p><p>${q}</p>`
}