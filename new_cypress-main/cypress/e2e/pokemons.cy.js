describe('Автотест для покемоноов', function () {

    it('Покупка нового аватара для своего тренера', function () {
         cy.visit('https://pokemonbattle.ru'); // Зайти на сайт
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // Ввести правильный логин
         cy.get('#password').type('USER_PASSWORD'); // Ввести правильный пароль
         cy.get('.auth__button').click(); // кликнуть войти
         cy.wait(1000) // подождать 1 сек
         cy.get('.header__container > .header__id').click(); // кликнуть ID тренера
         cy.wait(10000) // подождать 10 сек
         cy.get('[href="/shop"]').click(); // кликнуть на смену аватар
         cy.get('.available > button').first().click({ force: true }); // кликнул купить
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4000001234567899'); // Ввести номер карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('0726'); // Ввести дату
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // Ввести номер cvv
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Bocman'); // Ввести имя
         cy.get('.pay-btn').click(); // кликнуть оплатить
         cy.get('#cardnumber').type('56456'); // Ввести код из СМС
         cy.get('.payment__submit-button').click(); // кликнуть отправить
         cy.get('.payment__success1').contains('Покупка прошла успешно'); // Проверить нужный текст
         cy.get('.payment__success1').should('be.visible'); //  Проверить наличие кнопки крестик
     })
 }) 

