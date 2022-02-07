///<reference types= "cypress"/>

const notification = require('../../payloads/notification.json')
const novoservico = notification.NovoServico

function NovoServico(){
    return cy.api({
        method: 'POST' ,
        url: 'https://prestadores.hml.tempoassist.cloud/notification/v1/task/arrived',
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/json',
        },

        body: novoservico
    })
}
export {NovoServico};