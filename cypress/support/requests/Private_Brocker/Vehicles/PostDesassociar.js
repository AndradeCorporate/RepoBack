///<reference types= "cypress"/>

const Vehicles = require('../../../payloads/brockervehicles.json')
const desassociar = Vehicles.Desassociar

function DesassociarVeiculo(){
    return cy.api({
        method: 'POST',
        url: 'https://prestadores.hml.tempoassist.cloud/broker/v1/vehicles/association',
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMjNhOTQzNDktNjYyZi01OGFkLTliMjItOTY5ZjY0ZmZmNTJmIiwiaWQiOiI2MWZlYTU4ZTQ5NzlmMzAwMTEyMzU1ZWMiLCJ0eXBlIjoicHJvdmlkZXIiLCJpYXQiOjE2NDQwNzg0Nzh9.6LKTLvXFDCLko1P-P52P2Qjrwqor8Dq99cbDd1p554M',
        },

        body: desassociar
    })
}
export {AssociarVeiculo};