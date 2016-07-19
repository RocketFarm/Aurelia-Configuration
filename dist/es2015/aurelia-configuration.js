import { Configure } from './configure';

export function configure(aurelia, configCallback) {
    let instance = aurelia.container.get(Configure);

    if (configCallback !== undefined && typeof configCallback === 'function') {
        configCallback(instance);
    }

    return new Promise((resolve, reject) => {
        instance.loadConfig().then(() => resolve()).catch(() => {
            reject(new Error('Configuration file could not be loaded'));
        });
    });
}

export { Configure };