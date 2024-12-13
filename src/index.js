import eeaVersions from './reducers';
import installVersionsBlocks from './blocks';
const applyConfig = (config) => {
  config.addonReducers = {
    ...(config.addonReducers || {}),
    eeaVersions,
  };

  return installVersionsBlocks(config);
};

export default applyConfig;
