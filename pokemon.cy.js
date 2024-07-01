describe('Покупка аватара и покемона премиум', function () {

    it('покупка аватара', function () {
         cy.visit('https://pokemonbattle.ru/login');
         cy.get('input[type="email"]').type('USER_NAME');      
        cy.get('input[type="password"]').type('USER_PASWORD');
        cy.get('button[type="submit"]').click();
        cy.get('.header__btns > :nth-child(4)').click();
        cy.get('.available > button').first().click(); 
        cy.get('.credit').type('4620869113632996'); 
        cy.get('.k_input_ccv').type('125'); 
        cy.get('.k_input_date').type('1225');
        cy.get('.k_input_name').type('Enokentii'); 
        cy.get('.pay-btn').click(); 
        cy.get('#cardnumber').type('56456'); 
        cy.get('.payment__submit-button').click();      
        cy.contains('Покупка прошла успешно').should('be.visible');
        cy.get('.payment__adv').click(); 
        cy.get('.header__container > .header__id').click(); 
        cy.get('.k_premium_button_fix').click(); 
        cy.get('.auth__input').type('52');
        cy.get('.auth__form > .button_to_down > .profile__button').click(); 
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996'); 
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225'); 
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); 
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Inokentii'); 
        cy.get('.pay-btn').click(); 
        cy.get('#cardnumber').type('56456'); 
        cy.get('.payment__submit-button').click(); 
        cy.get('.payment__adv').click(); 
                  

     })
 }) 