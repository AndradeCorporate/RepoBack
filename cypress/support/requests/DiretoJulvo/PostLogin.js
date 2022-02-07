///<reference types= "cypress"/>


const user = require('../../payloads/diretojulvo.json')

function LoginJulvo(){
    return cy.api({
        method: 'POST' ,
        url: 'https://api.tempoassist.com.br/juvo/mobile/prestador/2.0.0/autenticacao/autenticar/login',
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/json'
        }, 

        body: user
    })
}
export {LoginJulvo};