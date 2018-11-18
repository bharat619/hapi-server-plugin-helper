/**
 *
 * @param {Server} serverInstance Instance of server
 * @param {Array} pluginList Array of plugins
 * @param {Array} optionList Array of options
 *
 *
 *
 * Using the traditional for loop, since .map or .forEach
 * are non blocking ooperations and promises wont be resolved
 * in them.
 *
 * Alternatively bluebird can be used, but just to avoid the
 * additional dependency, traditional for loop shall work in
 * this case.
 */

const registerPlugins = async (serverInstance, pluginList, optionList) => {
  for (let i in pluginList) {
    try {
      await serverInstance.register({
        plugin: pluginList[i],
        options: optionList[i]
      });
      i++;
    } catch (err) {
      console.log(err);
    }
  }
  return serverInstance;
};
module.exports = registerPlugins;
