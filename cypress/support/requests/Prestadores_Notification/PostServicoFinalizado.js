///<reference types= "cypress"/>

const notification = require('../../payloads/notification.json')
const finalizado = notification.ServicoFinalizado

function ServicoFinalizado(){
    return cy.api({
        method: 'POST' ,
        url: 'https://prestadores.hml.tempoassist.cloud/notification/v1/task/finished',
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/json',
        },

        body: finalizado
    })
}
export {ServicoFinalizado};