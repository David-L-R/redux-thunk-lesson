# Redux-thunks

- Create async actions

```javascript
export const fetch = async (dispatch, getState) => {
  const response = await axios.get(<link>);

  dispatch({
    type: SET_DATA,
    payload: response.data,
  });
};
```

- Create async actions using parameters

<img src="./public/middleware.gif" width="50%"/>
