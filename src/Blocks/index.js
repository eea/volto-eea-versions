import codeSVG from '@plone/volto/icons/code.svg';
import AllVersions from './AllVersions';
import LatestVersion from './LatestVersion';
import BlockSettingsSchema from '@plone/volto/components/manage/Blocks/Block/Schema';

const applyConfig = (config) => {
  config.blocks.blocksConfig.eea_latest_version = {
    id: 'eea_latest_version',
    title: 'Latest version',
    icon: codeSVG,
    group: 'common',
    view: LatestVersion,
    schema: BlockSettingsSchema,
    restricted: false,
    mostUsed: false,
    blockHasOwnFocusManagement: false,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
  };

  config.blocks.blocksConfig.eea_versions = {
    id: 'eea_versions',
    title: 'Versions',
    icon: codeSVG,
    group: 'common',
    view: AllVersions,
    schema: BlockSettingsSchema,
    restricted: false,
    mostUsed: false,
    blockHasOwnFocusManagement: false,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
  };

  return config;
};

export default applyConfig;
