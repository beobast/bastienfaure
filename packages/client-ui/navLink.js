const tpt = Template.navLink;

tpt.events({
    'click': () => Dispatch('NAVLINK', { 'text': Template.instance().data.text }) 
});
