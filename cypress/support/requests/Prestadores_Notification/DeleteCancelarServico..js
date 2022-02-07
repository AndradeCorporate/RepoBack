///<reference types= "cypress"/>

const notification = require('../../payloads/notification.json')
const cancelar = notification.Cancelado

function ServicoFinalizado(){
    return cy.api({
        method: 'DELETE' ,
        url: 'https://prestadores.hml.tempoassist.cloud/notification/v1/task/cancel',
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/json',
        },

        body: cancelar
    })
}
export {ServicoFinalizado};