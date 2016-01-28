/* global FlowRouter, Dispatch, Actions */

const routes = [
    { 'route': '/', 'action': () => Dispatch(Actions.setSpace('home')) }
    , { 'route': '/articles', 'action': () => Dispatch(Actions.setSpace('articles')) }
    , { 'route': '/notes', 'action': () => Dispatch(Actions.setSpace('notes')) }
    , { 'route': '/videos', 'action': () => Dispatch(Actions.setSpace('videos')) }
    , { 'route': '/liens', 'action': () => Dispatch(Actions.setSpace('links')) }
    , { 'route': '/contact', 'action': () => Dispatch(Actions.setSpace('contact')) }
    , { 'route': '/articles/:slug', 'action': p => Dispatch(Actions.setArticle(p.slug)) }
];

routes.forEach(r => FlowRouter.route(r.route, { 'action': r.action }));
