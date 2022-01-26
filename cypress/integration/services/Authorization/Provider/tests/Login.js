import * as PostLogin from '../../../../../support/requests/PostLogin'

context('Autorization - Login' , () => {
    it('Realizar login', () => {
         PostLogin.Login().should((response) => {
             expect(response.status).to.eq(200);
         })
    });
});