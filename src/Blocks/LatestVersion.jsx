import React from 'react';
import { withEEAVersions } from './withEEAVersions';
import { formatDate } from '@plone/volto/helpers/Utils/Date';

const LatestVersion = (props) => {
  const version = props.versions?.newer_versions?.items[0];
  const pathname = props.pathname || props.path || '';
  const effective = version?.effective || '';
  const formattedEffective =
    version &&
    effective &&
    formatDate({
      date: effective,
      format: {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
      },
      locale: 'en-gb',
    });
  const effectiveDate =
    formattedEffective && formattedEffective ? ' - ' + formattedEffective : '';
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
      <a href={version['@id']} className="eea-versions-list-link">
        {version.title} {effectiveDate}
      </a>
    </p>
  ) : (
    ''
  );
};

export default withEEAVersions(LatestVersion);
