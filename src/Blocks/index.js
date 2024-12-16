import codeSVG from '@plone/volto/icons/code.svg';
import NextVersions from './NextVersions';
import PreviousVersions from './PreviousVersions';
import AllVersions from './AllVersions';
import BlockSettingsSchema from '@plone/volto/components/manage/Blocks/Block/Schema';
import LatestVersion from 'addons/volto-eea-versions/src/Blocks/LatestVersion';

const applyConfig = (config) => {
  config.blocks.blocksConfig.report_next_versions = {
    id: 'report_next_versions',
    title: 'Report newer versions',
    icon: codeSVG,
    group: 'common',
    view: NextVersions,
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

  config.blocks.blocksConfig.report_previous_versions = {
    id: 'report_previous_versions',
    title: 'Report older versions',
    icon: codeSVG,
    group: 'common',
    view: PreviousVersions,
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
