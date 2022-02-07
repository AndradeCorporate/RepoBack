///<reference types= "cypress"/>


function Health(){
    return cy.api({
        method: 'GET' ,
        url: 'https://prestadores.hml.tempoassist.cloud/notification/health',
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/json'
        }, 

    })
}
export {Health};