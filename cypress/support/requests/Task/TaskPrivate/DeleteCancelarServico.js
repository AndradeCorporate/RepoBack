///<reference types= "cypress"/>

function CancelarServico(){
    return cy.api({
        method: 'DELETE' ,
        url: 'https://prestadores.hml.tempoassist.cloud/task/v1/tasks/cancel/61701d6566cc1e37b61646d3',
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/json',
        }, 

    })
}
export {CancelarServico};