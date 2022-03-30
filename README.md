<img src="https://user-images.githubusercontent.com/31222514/160580699-d782fd3f-4e09-4d92-895c-d9867302e145.svg" width="15%" alt="Redux logo">

# Redux-thunks

<img width="50%" alt="architecture of redux - overview" src="https://user-images.githubusercontent.com/31222514/160870591-c2282f52-9453-4bb1-be99-66032a9009fc.png">

<img src="./public/middleware.gif" width="50%" alt="process of redux"/>

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
