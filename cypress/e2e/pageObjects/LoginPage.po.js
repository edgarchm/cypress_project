class LoginPage
{
    getUsername(){
        return cy.get('#login-form-email');
    };

    getPassword(){
        return cy.get('#login-form-password');
    };

    getLogInHeader(){
        return cy.get('.nav-link.active')
    };

    getNewCustomersHeader(){
        return cy.get('div[class="col-sm-12 col-md-12 col-lg-4 center"] h3[class="card-header track-order-header"]')
    };

    getLogInButton(){
        return cy.get('.btn.btn-block.btn-primary.checkout-button');
    };

    getCreateAccountButton(){
        return cy.get('a[class="registration"]')
    };

    getLoginTitle(){
        return cy.get('body.chatbotMobileView:nth-child(2) div.page:nth-child(39) div.container.login-page:nth-child(6) div.row.justify-content-center.equal-height div.col-sm-12.col-md-12.col-lg-4.left:nth-child(1) div.card div.card-body div.login-form-nav ul.nav.nav-tabs.nav-fill li.nav-item:nth-child(1) > a.nav-link.active');
    }

    getInvalidCredentialsMessage(){
        return cy.get('.alert.alert-danger');
    };

    getNewCustTitle(){
        return cy.get('body.chatbotMobileView:nth-child(2) div.page:nth-child(39) div.container.login-page:nth-child(6) div.row.justify-content-center.equal-height div.col-sm-12.col-md-12.col-lg-4.center:nth-child(2) div.card > h3.card-header.track-order-header');
    };

    getCheckOrderStatusTitle(){
        return cy.get('body.chatbotMobileView:nth-child(2) div.page:nth-child(39) div.container.login-page:nth-child(6) div.row.justify-content-center.equal-height div.col-sm-12.col-md-12.col-lg-4.center:nth-child(2) div.card div.card-body div.form-group:nth-child(4) a.registration > button.btn.btn-block.btn-primary');
    };

    getSeeOrderButton(){
        return cy.get('body.chatbotMobileView:nth-child(2) div.page:nth-child(39) div.container.login-page:nth-child(6) div.row.justify-content-center.equal-height div.col-sm-12.col-md-12.col-lg-4.right:nth-child(3) div.card form.trackorder div.card-body div.form-group:nth-child(7) > button.btn.btn-block.btn-primary');
    };

    getErrorMessage(){
        return cy.get('.alert');
    };
}
export default LoginPage;