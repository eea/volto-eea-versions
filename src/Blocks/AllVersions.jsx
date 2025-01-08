import React from 'react';
import { withEEAVersions } from './withEEAVersions';
import { formattedDate } from './helpers';
import { UniversalLink } from '@plone/volto/components';

const propsAreEqual = (prevProps, nextProps) => {
  return prevProps['@id'] === nextProps['@id'];
};

const AllVersions = (props) => {
  const olderVersions = props.versions?.older_versions?.items || [];
  const newerVersions = props.versions?.newer_versions?.items || [];
  const hasOlderVersions = olderVersions?.length > 0;
  const hasNewerVersions = newerVersions?.length > 0;
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

  return hasOlderVersions || hasNewerVersions ? (
    <ul className="eea-versions">
      {hasNewerVersions &&
        newerVersions.map((version) => (
          <li key={version['@id']} className="eea-versions-list-item">
            <UniversalLink
              href={version['@id']}
              className="eea-versions-list-link"
            >
              {version.title} {formattedDate(version.effective)}
            </UniversalLink>
          </li>
        ))}
      <li>{`(current) ${title} ${currentEffective}`}</li>
      {hasOlderVersions &&
        olderVersions.map((version) => (
          <li key={version['@id']} className="eea-versions-list-item">
            <UniversalLink
              href={version['@id']}
              className="eea-versions-list-link"
            >
              {version.title} {formattedDate(version.effective)}
            </UniversalLink>
          </li>
        ))}
    </ul>
  ) : null;
};

export default React.memo(withEEAVersions(AllVersions), propsAreEqual);
