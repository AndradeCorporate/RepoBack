///<reference types= "cypress"/>


const gps = require('../../../payloads/gps.json')
const GPS = gps.GPS

function Login(){
    return cy.api({
        method: 'POST' ,
        url: 'https://prestadores.hml.tempoassist.cloud/authorization/v1/session',
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': '[{"key":"Authorization","value":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiZjI4NjVlZDAtZDg0Yi01YzYwLWI0YWYtYWUyMmNiNTlkN2NkIiwiaWQiOiI2MWNjYjM5NDFhOGRhMzBhZDUwZWU4YWIiLCJ0eXBlIjoicHJvdmlkZXIiLCJpYXQiOjE2NDA4MDUyNjh9.HvY2v9XN45phWQjbDFkgXAuEeDTmmOfMZxlQd7GKBRA"}]'
        }, 

        body: GPS
    })
}
export {Login};