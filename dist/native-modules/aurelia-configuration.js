import { Configure } from './configure';

export function configure(aurelia, configCallback) {
    var instance = aurelia.container.get(Configure);

    if (configCallback !== undefined && typeof configCallback === 'function') {
        configCallback(instance);
    }

    return new Promise(function (resolve, reject) {
        instance.loadConfig().then(function () {
            return resolve();
        }).catch(function () {
            reject(new Error('Configuration file could not be loaded'));
        });
    });
}

export { Configure };