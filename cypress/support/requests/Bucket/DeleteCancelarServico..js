///<reference types= "cypress"/>

const notification = require('../../payloads/notification.json')
const cancelar = notification.Cancelado

function ServicoFinalizado(){
    return cy.api({
        method: 'DELETE' ,
        url: 'https://prestadores.hml.tempoassist.cloud/broker/v1/tasks/cancel/123?=&=',
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOGQxM2NhZjNjZjUzMGRiZTVkNzU4MiIsInV1aWQiOiIyNDcwNWVjZi1iNzg4LTUzMmUtYTM4Zi04ZGNmNjFhMTM1MDAiLCJ0eXBlIjoiaW50ZWdyYXRpb24iLCJpYXQiOjE2MzY2MzU1OTR9.-khNU98leuTuaK6GAzjRce03an77_3Q0W4Bm7tWUDPc'
        },

        body: cancelar
    })
}
export {ServicoFinalizado};