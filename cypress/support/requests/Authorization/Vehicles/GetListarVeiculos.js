///<reference types= "cypress"/>

function ListarVeiculos(){
    return cy.api({
        method: 'GET' ,
        url: 'https://prestadores.hml.tempoassist.cloud/authorization/v1/vehicles',
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiZjI4NjVlZDAtZDg0Yi01YzYwLWI0YWYtYWUyMmNiNTlkN2NkIiwiaWQiOiI2MWNjYjM5NDFhOGRhMzBhZDUwZWU4YWIiLCJ0eXBlIjoicHJvdmlkZXIiLCJpYXQiOjE2NDA4MDUyNjh9.HvY2v9XN45phWQjbDFkgXAuEeDTmmOfMZxlQd7GKBRA'
        },
    })
}
export {ListarVeiculos};