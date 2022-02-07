///<reference types= "cypress"/>

const bucket = require('../../../payloads/privatetasks.json')
const create = bucket.CreateServico

function CriarServico(){
    return cy.api({
        method: 'DELETE' ,
        url: 'https://prestadores.hml.tempoassist.cloud/broker/v1/tasks',
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/json',
        },

        body: create
    })
}
export {CriarServico};