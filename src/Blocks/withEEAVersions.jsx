import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useDeepCompareEffect from 'use-deep-compare-effect';

import { getBaseUrl } from '@plone/volto/helpers';
import { getEEAVersions } from '../actions';

export function withEEAVersions(WrappedComponent) {
  function memoizedSelector(prev, next) {
    if (!prev || !next) return false;
    return prev['@id'] === next['@id'];
  }

  function Wrapped(props) {
    const { params = {} } = props;
    const pathname = props.pathname || props.path;

    const base_path = getBaseUrl(pathname);

    const dispatch = useDispatch();
    const versions = useSelector((state) => {
      return state.eeaVersions?.data;
    }, memoizedSelector);

    // Only fetch if we don't have the data yet
    useDeepCompareEffect(() => {
      if (!versions) {
        dispatch(getEEAVersions(base_path));
      }
    }, [base_path, params, versions]);

    return <WrappedComponent {...props} versions={versions} />;
  }

  Wrapped.displayName = `WithEEAVersions(${getDisplayName(WrappedComponent)})`;

  return Wrapped;
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
