///<reference types= "cypress"/>

const senha = require('../../payloads/mudarsenha.json')

function MudarEndereco(){
    return cy.api({
        method: 'POST' ,
        url: 'https://prestadores.hml.tempoassist.cloud/task/v1/tasks/validation/password',
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiZjI4NjVlZDAtZDg0Yi01YzYwLWI0YWYtYWUyMmNiNTlkN2NkIiwiaWQiOiI2MWNjYjM5NDFhOGRhMzBhZDUwZWU4YWIiLCJ0eXBlIjoicHJvdmlkZXIiLCJpYXQiOjE2NDA4MDUyNjh9.HvY2v9XN45phWQjbDFkgXAuEeDTmmOfMZxlQd7GKBRA'
        },

        body: senha
    })
}
export {MudarEndereco};