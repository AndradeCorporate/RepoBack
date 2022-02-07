///<reference types= "cypress"/>


function Health(){
    return cy.api({
        method: 'GET' ,
        url: 'https://prestadores.hml.tempoassist.cloud/authorization/v1/integration/health',
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/json'
        }, 

        body: user
    })
}
export {Health};