const initialState = {
  loading: false,
  posts: [],
};

export default function feedSliceReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    default: {
      return state;
    }
  }
}
