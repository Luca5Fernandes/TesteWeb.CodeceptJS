Feature('login');

Scenario('Login com sucesso',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/');
    I.click('Login')
    I.waitForText('Login',10)
    I.fillField('#user','lucasfernandes122@gmail.com')
    I.fillField('#password','123456')
    I.click('#btnLogin')
    I.waitForText('Login realizado',3)

}).tag('@Suceso')

Scenario('Tentando Logar digitando apenas o email',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/');
    I.click('Login')
    I.waitForText('Login',10)
    I.fillField('#user','lucasfernandes122@gmail.com')
    I.fillField('#password','')
    I.click('#btnLogin')
    I.waitForText('Senha inválida.',3)

}).tag('@Falha')

Scenario('Tentando logar sem digitar email e senha',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/');
    I.click('Login')
    I.waitForText('Login',10)
    I.fillField('#user','')
    I.fillField('#password','')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.',3)

}).tag('@Falha')

Scenario('Tentando Logar digitando apenas a senha',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/');
    I.click('Login')
    I.waitForText('Login',10)
    I.fillField('#user','')
    I.fillField('#password','123456')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.',3)  

}).tag('@Falha')
