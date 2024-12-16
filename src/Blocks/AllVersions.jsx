import React from 'react';
import { withEEAVersions } from './withEEAVersions';

const AllVersions = (props) => {
  const olderVersions = props.versions?.older_versions?.items || [];
  const newerVersions = props.versions?.newer_versions?.items || [];
  const properties = props.properties || {};
  const title = properties.title || '';
  const effective = properties.effective || '';

  const pathname = props.pathname || props.path || '';
  const isEdit =
    pathname.indexOf('/edit') > -1 || pathname.indexOf('/add') > -1;
  if (isEdit && (olderVersions.length === 0 || newerVersions.length === 0)) {
    return <p>All versions block edit</p>;
  }
  return (
    <ul className="eea-versions">
      {newerVersions?.length > 0 &&
        newerVersions.map((version) => (
          <li key={version['@id']} className="eea-versions-list-item">
            <a href={version['@id']} className="eea-versions-list-link">
              {version.title}
            </a>
          </li>
        ))}
      <li>{`(current) ${title} ${effective ? ' - ' + effective : ''}`}</li>
      {olderVersions?.length > 0 &&
        olderVersions.map((version) => (
          <li key={version['@id']} className="eea-versions-list-item">
            <a href={version['@id']} className="eea-versions-list-link">
              {version.title}
            </a>
          </li>
        ))}
    </ul>
  );
};

export default withEEAVersions(AllVersions);
