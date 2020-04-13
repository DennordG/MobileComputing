export const createApiAction = (action, extraProps) => {
  return {
    pending: (payload) => {
      return {
        type: `${action}.PENDING`,
        payload,
      };
    },
    success: (payload) => {
      return {
        type: `${action}.SUCCESS`,
        payload,
      };
    },
    error: (payload) => {
      return {
        type: `${action}.ERROR`,
        payload,
      };
    },
    url: extraProps.url,
    processOnSuccess: extraProps.processOnSuccess,
  };
};

export const fetchData = (apiAction) => {
  return (dispatch) => {
    dispatch(apiAction.pending());
    fetch(apiAction.url)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }

        if (apiAction.processOnSuccess) {
          res = apiAction.processOnSuccess(res);
        }

        dispatch(apiAction.success(res));
        return res;
      })
      .catch((error) => {
        dispatch(apiAction.error(error));
      });
  };
};
