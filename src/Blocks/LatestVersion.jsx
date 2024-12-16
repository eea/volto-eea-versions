import React from 'react';
import { withEEAVersions } from './withEEAVersions';

const LatestVersion = (props) => {
  const version = props.versions?.newer_versions?.items[0];
  const pathname = props.pathname || props.path || '';
  const isEdit =
    pathname.indexOf('/edit') > -1 || pathname.indexOf('/add') > -1;
  if (isEdit && !version) {
    return <p>Latest version block edit</p>;
  }
  return version ? (
    <p className="report-latest-version">
      <strong>Latest version of this report:</strong>
      <a href={version['@id']} className="eea-versions-list-link">
        {version.title}
      </a>
    </p>
  ) : (
    ''
  );
};

export default withEEAVersions(LatestVersion);
