/* global FlowRouter, Dispatch, Actions */

const routes = [
    { 'route': '/', 'action': () => FlowRouter.go('/notes') }
    , { 'route': '/login', 'action': () => Dispatch(Actions.setSpace('Login')) }
    , { 'route': '/notes', 'action': () => Dispatch(Actions.setSpace('Notes')) }
    , { 'route': '/videos', 'action': () => Dispatch(Actions.setSpace('Vidéos')) }
    , { 'route': '/notes/:slug', 'action': p => Dispatch(Actions.setNote(p.slug)) }
    , { 'route': '/brouillons', 'action': () => Dispatch(Actions.setSpace('Brouillons')) }
    , { 'route': '/brouillons/:slug', 'action': p => Dispatch(Actions.setNote(p.slug)) }
    , { 'route': '/admin', 'action': () => Dispatch(Actions.setSpace('Admin')) }
];

routes.forEach(r => FlowRouter.route(r.route, { 'action': r.action }));
