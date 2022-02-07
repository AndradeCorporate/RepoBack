///<reference types= "cypress"/>

const notification = require('../../payloads/notification.json')
const local = notification.Local

function ChegouNoLocal(){
    return cy.api({
        method: 'POST' ,
        url: 'https://prestadores.hml.tempoassist.cloud/notification/v1/task/arrived',
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/json',
        },

        body: local
    })
}
export {ChegouNoLocal};