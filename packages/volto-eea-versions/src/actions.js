/**
 * EEA Versions actions.
 *
 */

import { GET_EEA_VERSIONS } from './constants';

/**
 * Get the context versions
 * @function getEEAVersions
 * @param {string} url Content url.
 * @param {params} params Options for the versions of the context
 * @returns {Object} Get eea versions action
 */
export function getEEAVersions(url, params = {}) {
  const path = `${url}/@eea.versions`;

  return {
    type: GET_EEA_VERSIONS,
    url: path, // api middleware strips request
    request: {
      op: 'get',
      path,
    },
  };
}
