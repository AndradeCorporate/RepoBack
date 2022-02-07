///<reference types= "cypress"/>


const user = require('../../../payloads/usersintegration.json')

function CreateUser(){
    return cy.api({
        method: 'POST' ,
        url: 'https://prestadores.hml.tempoassist.cloud/authorization/v1/integration/users',
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/json'
        }, 

        body: user
    })
}
export {CreateUser};