import { GET_EEA_VERSIONS } from './constants';

/**
 * EEA Versions reducer.
 * @function eea-versions
 * @param {Object} state Current state.
 * @param {Object} action Action to be handled.
 * @returns {Object} New state.
 */
export default function rawdata(state = {}, action = {}) {
  let { result, url } = action;

  switch (action.type) {
    case `${GET_EEA_VERSIONS}_PENDING`:
      return {
        ...state,
        [url]: {
          ...state[url],
          loading: true,
          loaded: false,
          error: undefined,
        },
      };
    case `${GET_EEA_VERSIONS}_SUCCESS`:
      return {
        ...state,
        [url]: {
          ...state[url],
          loading: false,
          loaded: true,
          error: undefined,
          data: result,
        },
      };
    case `${GET_EEA_VERSIONS}_FAIL`:
      return {
        ...state,
        [url]: {
          ...state[url],
          loading: false,
          loaded: false,
          error: action.error,
        },
      };
    default:
      break;
  }
  return state;
}
