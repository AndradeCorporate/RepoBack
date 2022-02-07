///<reference types= "cypress"/>

function Checklist(){
    return cy.api({
        method: 'GET' ,
        url: 'https://prestadores.hml.tempoassist.cloud/task/v1/task/checklist?type=finish_auto',
        failOnStatusCode: false,
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiZjI4NjVlZDAtZDg0Yi01YzYwLWI0YWYtYWUyMmNiNTlkN2NkIiwiaWQiOiI2MWNjYjM5NDFhOGRhMzBhZDUwZWU4YWIiLCJ0eXBlIjoicHJvdmlkZXIiLCJpYXQiOjE2NDA4MDUyNjh9.HvY2v9XN45phWQjbDFkgXAuEeDTmmOfMZxlQd7GKBRA'
        }
    })
}
export {Checklist};