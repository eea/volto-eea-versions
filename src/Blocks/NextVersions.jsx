import React from 'react';
import { withEEAVersions } from './withEEAVersions';

const NextVersions = (props) => {
  const version = props.versions?.newer_versions?.items[0];
  return version ? (
    <div>
      <p>
        <strong>Latest version of this report:</strong>
        <a href={version['@id']} className="eea-versions-list-link">
          {version.title}
        </a>
      </p>
      <ul className="eea-versions">
        {nextVersions.map((version) => (
          <li key={version['@id']} className="eea-versions-list-item">
            <a href={version['@id']} className="eea-versions-list-link">
              {version.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    ''
  );
};

export default withEEAVersions(NextVersions);
