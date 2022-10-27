import pluginPkg from '../../package.json';

const pluginId = pluginPkg.name.replace(/^@endur-gmbh\/strapi-plugin-/i, '');

export default pluginId;
