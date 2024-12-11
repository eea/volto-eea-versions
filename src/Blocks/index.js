import codeSVG from '@plone/volto/icons/code.svg';
import NextVersions from './NextVersions';
import PreviousVersions from './PreviousVersions';
import BlockSettingsSchema from '@plone/volto/components/manage/Blocks/Block/Schema';

const applyConfig = (config) => {
  config.blocks.blocksConfig.report_next_versions = {
    id: 'report_next_versions',
    title: 'Next versions',
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

  config.blocks.blocksConfig.report_previous_versions = {
    id: 'report_previous_versions',
    title: 'Previous versions',
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

  return config;
};

export default applyConfig;
