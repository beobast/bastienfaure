Template.navLink.events({
    'click': () => Dispatch('NAVLINK', { 'template': Template.instance().data.value }) 
});
