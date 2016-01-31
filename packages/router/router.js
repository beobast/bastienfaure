/* global FlowRouter, Dispatch, Actions */

const routes = [
    // { 'route': '/', 'action': () => Dispatch(Actions.setSpace('notes')) }
    { 'route': '/', 'action': () => FlowRouter.go('/notes') }
    , { 'route': '/notes', 'action': () => Dispatch(Actions.setSpace('notes')) }
    , { 'route': '/videos', 'action': () => Dispatch(Actions.setSpace('videos')) }
    , { 'route': '/notes/:slug', 'action': p => Dispatch(Actions.setNote(p.slug)) }
];

routes.forEach(r => FlowRouter.route(r.route, { 'action': r.action }));
