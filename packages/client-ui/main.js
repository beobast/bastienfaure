const tpt = Template.body;

tpt.helpers({
    'title': () => State.get('appBarTitle')
    , 'tpt': () => ({ 'template': State.get('currentTemplate') })
});
