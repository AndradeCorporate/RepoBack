///<reference types= "cypress"/>


const user = require('../../../payloads/users.json')
function Login(){
    return cy.api({
        method: 'POST' ,
        url: 'session',
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/json'
        }, 

        body: user
    })
}
export {Login};