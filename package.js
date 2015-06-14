Package.describe({
    name: 'socialize:server-presence',
    summary: 'Scalable server presence',
    version: '0.1.0',
    git: ''
});

Package.onUse(function(api) {
    api.versionsFrom('1.0.2.1');
    api.use(['mongo', 'underscore'], 'server');
    api.addFiles('server-presence.js', 'server');

    api.export('ServerPresence', 'server');
});