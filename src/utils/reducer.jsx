import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";

const reducer = (state, action) => {
  //   if (action.type === "SET_LOADING") {
  //     const { isLoading } = state;
  //     return { ...state, isLoading: true };
  //   }
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };

    case SET_STORIES:
      return {
        ...state,
        hits: action.payload.hits,
        totalPages: action.payload.pagesTotal,
        isLoading: false,
      };
    case REMOVE_STORY:
      const newHits = state.hits.filter(
        results => results.objectID !== action.payload
      );
      return {
        ...state,
        hits: newHits,
      };
    case HANDLE_SEARCH:
      return {
        ...state,
        query: action.payload,
        page: 0,
      };
    case HANDLE_PAGE:
      if (action.payload === "decrease") {
        let prevPage = state.page - 1;
        if (prevPage < 0) {
          prevPage = state.totalPages - 1;
        }
        return {
          ...state,
          page: prevPage,
        };
      }
      if (action.payload === "increase") {
        let nextPage = state.page + 1;
        if (nextPage > state.totalPages - 1) {
          nextPage = 0;
        }
        return { ...state, page: nextPage };

        // return { ...state, page: state.page + 1 };
      }
    default:
      throw new Error(`no matching "${action.type}" action type`);
  }
};
export { reducer };
