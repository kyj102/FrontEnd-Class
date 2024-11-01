let initialState = { contactList: [], keyword: "" };

const reducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch(type) {
    case "ADD_CONTACT":
      state.contactList.push({
        name: payload.name,
        phoneNumber: payload.phoneNumber,
      });
      break;
    case "SEARCH":
      state.keyword = payload.keyword;
      break;
  };
  return {...state};
};

export default reducer;