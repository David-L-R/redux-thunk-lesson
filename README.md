<img src="https://user-images.githubusercontent.com/31222514/160580699-d782fd3f-4e09-4d92-895c-d9867302e145.svg" width="15%" alt="Redux logo">

# Redux-thunks

<img src="./public/middleware.gif" width="50%"/>

- Create async actions

```javascript
export const fetch = async (dispatch, getState) => {
  dispatch({
     type: START_LOADING
  });
  
  // fetch data
  const response = await axios.get(config.API_URL);

  dispatch({
    type: SET_DATA,
    payload: response.data,
  });
};
```

- Create async actions using parameters

```javascript
export const fetch = (id) => {
  return async function thunk(dispatch, getState) {
    
    dispatch({
      type: START_LOADING
    });
    
    const response = await axios.get(`${config.API_URL}/${id}`);

   dispatch({
      type: SET_DATA,
      payload: response.data
    });
  };
};
```
