import codeSVG from '@plone/volto/icons/code.svg';
import AllVersions from './AllVersions';
import LatestVersion from './LatestVersion';
import BlockSettingsSchema from '@plone/volto/components/manage/Blocks/Block/Schema';

const applyConfig = (config) => {
  config.blocks.blocksConfig.report_latest_version = {
    id: 'report_latest_version',
    title: 'Report latest version',
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

  config.blocks.blocksConfig.report_versions = {
    id: 'report_versions',
    title: 'Report versions',
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
