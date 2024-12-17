import React from 'react';
import { withEEAVersions } from './withEEAVersions';
import { formattedDate } from './helpers';

const AllVersions = (props) => {
  const olderVersions = props.versions?.older_versions?.items || [];
  const newerVersions = props.versions?.newer_versions?.items || [];
  const properties = props.properties || {};
  const title = properties.title || '';
  const effective = properties.effective || '';
  const currentEffective = formattedDate(effective);
  const pathname = props.pathname || props.path || '';
  const isEdit =
    pathname.endsWith('/edit') ||
    pathname.endsWith('/add') ||
    pathname.endsWith('/layout');
  if (isEdit && (olderVersions.length === 0 || newerVersions.length === 0)) {
    return <p>All versions block edit</p>;
  }
  return (
    <ul className="eea-versions">
      {newerVersions?.length > 0 &&
        newerVersions.map((version) => (
          <li key={version['@id']} className="eea-versions-list-item">
            <a href={version['@id']} className="eea-versions-list-link">
              {version.title} {formattedDate(version.effective)}
            </a>
          </li>
        ))}
      <li>{`(current) ${title} ${currentEffective}`}</li>
      {olderVersions?.length > 0 &&
        olderVersions.map((version) => (
          <li key={version['@id']} className="eea-versions-list-item">
            <a href={version['@id']} className="eea-versions-list-link">
              {version.title} {formattedDate(version.effective)}
            </a>
          </li>
        ))}
    </ul>
  );
};

export default withEEAVersions(AllVersions);
