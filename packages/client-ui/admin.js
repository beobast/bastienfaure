/* global Template, Accounts, R */

Template.admin.events({
    'click button': (evt, tpt) => {
        const oldPassword = tpt.$('#old-password').val();
        const newPassword = tpt.$('#new-password').val();
        const newPasswordAgain = tpt.$('#new-password-again').val();
        tpt.$('input').val('');
        if (!R.equals(newPassword, newPasswordAgain)) {
            alert('Passwords must be equal');
        }
        else {
            Accounts.changePassword(oldPassword, newPassword, error => {
                alert(error ? error : 'Passwor changed successfully');
            });
        }
    }
});
