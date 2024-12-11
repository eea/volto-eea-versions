import eeaVersionsReducer from './reducers';
import installVersionsBlocks from './blocks';
const applyConfig = (config) => {
  config.addonReducers = {
    ...(config.addonReducers || {}),
    eeaVersionsReducer,
  };

  return installVersionsBlocks(config);
};

export default applyConfig;
