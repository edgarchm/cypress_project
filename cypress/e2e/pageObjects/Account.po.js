class AccountPage{
    // pop-up notification
    getWelcomeText(){
        return cy.get('.rewards-welcome');
    };

    getCloseButtonWelcomeWindow(){
        return cy.get('#rewardsWelcomeModal > .modal-dialog > .modal-content > .modal-header > .close');
    };
}
export default AccountPage