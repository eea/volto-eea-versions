import React from 'react';
import { withEEAVersions } from './withEEAVersions';

const PreviousVersions = (props) => {
  const previousVersions = props.versions?.older_versions?.items || [];
  return (
    previousVersions?.length > 0 && (
      <div>
        <h4>Previous versions</h4>
        <ul className="eea-versions">
          {previousVersions.map((version) => (
            <li key={version['@id']} className="eea-versions-list-item">
              <a href={version['@id']} className="eea-versions-list-link">
                {version.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default withEEAVersions(PreviousVersions);
