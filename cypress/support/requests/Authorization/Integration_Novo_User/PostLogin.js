///<reference types= "cypress"/>


const user = require('../../../payloads/usersintegration.json')

function LoginIntegration(){
    return cy.api({
        method: 'POST' ,
        url: 'https://prestadores.hml.tempoassist.cloud/authorization/v1/integration/session',
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/json'
        }, 

        body: user
    })
}
export {LoginIntegration};