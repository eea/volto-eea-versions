import React from 'react';
import { withEEAVersions } from './withEEAVersions';
import { formattedDate } from './helpers';
import { UniversalLink } from '@plone/volto/components';

const propsAreEqual = (prevProps, nextProps) => {
  return prevProps['@id'] === nextProps['@id'];
};

const LatestVersion = (props) => {
  const version = props.versions?.newer_versions?.items[0];
  const pathname = props.pathname || props.path || '';
  const effective = version?.effective || '';
  const formattedEffective = formattedDate(effective);
  const isEdit =
    pathname.endsWith('/edit') ||
    pathname.endsWith('/add') ||
    pathname.endsWith('/layout');
  if (isEdit && !version) {
    return <p>Latest version block edit</p>;
  }
  return version ? (
    <p className="report-latest-version">
      <strong>Latest version of this report: </strong>
      <UniversalLink href={version['@id']} className="eea-versions-list-link">
        {version.title} {formattedEffective}
      </UniversalLink>
    </p>
  ) : (
    ''
  );
};

export default React.memo(withEEAVersions(LatestVersion), propsAreEqual);
