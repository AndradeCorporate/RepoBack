///<reference types= "cypress"/>

const checklist = require('../../../../payloads/checklist.json')
const CriarChecklist = checklist.CriarChecklist

function CreateChecklist(){
    return cy.api({
        method: 'POST' ,
        url: 'https://prestadores.hml.tempoassist.cloud/task/v1/task/checklist/',
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiZjI4NjVlZDAtZDg0Yi01YzYwLWI0YWYtYWUyMmNiNTlkN2NkIiwiaWQiOiI2MWNjYjM5NDFhOGRhMzBhZDUwZWU4YWIiLCJ0eXBlIjoicHJvdmlkZXIiLCJpYXQiOjE2NDA4MDUyNjh9.HvY2v9XN45phWQjbDFkgXAuEeDTmmOfMZxlQd7GKBRA'
        }, 

        body: CriarChecklist
    })
}
export {CreateChecklist};