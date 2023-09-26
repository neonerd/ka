export const startTextTemplate = `<p>začněte zmáčknutím jednoho z tlačítek</p>`

export const introTextTemplate = `<p>Jste pedagožstvo / pedagožka / pedagog.</p>
<p>Jste součástí pedagogického sboru.</p>
<p>Vyberte si čtyři pojmy, které se stanou jádrem vašeho manifesta vzdělávání.</p>
`

export const outroTextTemplate = `
<p>Vaše manifesto #456 se tiskne.</p>
`

export const questionTextTemplate = (c: string, q: string) => {
    return `<p class="heading"><strong>${c}</strong></p><p>${q}</p>`
}