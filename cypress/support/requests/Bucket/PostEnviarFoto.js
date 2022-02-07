///<reference types= "cypress"/>

const bucket = require('../../payloads/mudarendereço.json')

function EnviarFoto(){
    return cy.api({
        method: 'POST' ,
        url: 'https://prestadores.hml.tempoassist.cloud/bucket/v1/checklist/photo',
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/json',
        },

        body: bucket
    })
}
export {EnviarFoto};