import React from 'react';
import { withEEAVersions } from './withEEAVersions';

const LatestVersion = (props) => {
  const version = props.versions?.newer_versions?.items[0];
  return version ? (
    <div>
      <p>
        <strong>Latest version of this report:</strong>
        <a href={version['@id']} className="eea-versions-list-link">
          {version.title}
        </a>
      </p>
    </div>
  ) : (
    ''
  );
};

export default withEEAVersions(LatestVersion);
