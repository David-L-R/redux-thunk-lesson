const initialState = {
  loading: false,
  users: [],
};

export default function feedSliceReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    default: {
      return state;
    }
  }
}
