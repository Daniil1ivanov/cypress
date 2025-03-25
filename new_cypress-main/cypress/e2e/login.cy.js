describe('Проверка авторизации', function () {

    it('Правильный логин и пароль', function () {
         cy.visit('https://login.qa.studio/'); // Зайти на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // Ввести правильный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввести правильный пароль
         cy.get('#loginButton').click(); // кликнуть войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверить нужный текст
         cy.get('#messageHeader').should('be.visible'); //  Проверить текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //  Проверить наличие кнопки крестик
    })
    it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цвета кнопки
        cy.get('#forgotEmailButton').click(); // Кликнуть на забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввести почту 
        cy.get('#restoreEmailButton').click(); // Кликнуть отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверить нужный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //  Проверить наличие кнопки крестик
   })
   it('Правильный логин и неправильный пароль', function () {
    cy.visit('https://login.qa.studio/'); // Зайти на сайт
    cy.get('#mail').type('german@dolnikov.ru'); // Ввести правильный логин
    cy.get('#pass').type('iLoveqastudio7'); // Ввести неправильный пароль
    cy.get('#loginButton').click(); // кликнуть войти
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверить нужный текст
    cy.get('#messageHeader').should('be.visible'); //  Проверить текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //  Проверить наличие кнопки крестик
})
it('Неправильный логин и правильный пароль', function () {
    cy.visit('https://login.qa.studio/'); // Зайти на сайт
    cy.get('#mail').type('german@dolnikovss.ru'); // Ввести неправильный логин
    cy.get('#pass').type('iLoveqastudio1'); // Ввести правильный пароль
    cy.get('#loginButton').click(); // кликнуть войти
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверить нужный текст
    cy.get('#messageHeader').should('be.visible'); //  Проверить текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //  Проверить наличие кнопки крестик
})
it('Проверка валидации', function () {
    cy.visit('https://login.qa.studio/'); // Зайти на сайт
    cy.get('#mail').type('germandolnikovss.ru'); // Ввести логин без @
    cy.get('#pass').type('iLoveqastudio1'); // Ввести правильный пароль
    cy.get('#loginButton').click(); // кликнуть войти
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверить нужный текст
    cy.get('#messageHeader').should('be.visible'); //  Проверить текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //  Проверить наличие кнопки крестик
})
it('Проверка на приведение к строчным буквам в логине', function () {
    cy.visit('https://login.qa.studio/'); // Зайти на сайт
    cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввести логин
    cy.get('#pass').type('iLoveqastudio1'); // Ввести правильный пароль
    cy.get('#loginButton').click(); // кликнуть войти
    cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверить нужный текст
    cy.get('#messageHeader').should('be.visible'); //  Проверить текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //  Проверить наличие кнопки крестик
})
 }) 