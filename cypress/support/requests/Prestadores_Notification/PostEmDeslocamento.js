///<reference types= "cypress"/>

const notification = require('../../payloads/notification.json')
const deslocamento = notification.Deslocamento

function EmDeslocamento(){
    return cy.api({
        method: 'POST' ,
        url: 'https://prestadores.hml.tempoassist.cloud/notification/v1/task/going',
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/json',
        },

        body: deslocamento
    })
}
export {EmDeslocamento};