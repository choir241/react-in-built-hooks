import type { IPost } from "../components/Post";

export function postReducer(state: IPost[], action) {
  switch (action.type) {
    case "liked": {
        const test = state.map((post: IPost) => {
            if (post.id === action.post.id) {
              return action.post
            } else {
              return post;
            }
          });
          return test;
    }
    case "added": {
      return [
        ...state,
        {
          id: action.id,
          author: action.author,
          content: action.content,
          media: action.media,
          likes: action.likes,
        },
      ];
    }
    case "edited": {
      return state.map((post: IPost) => {
        if (post.id === action.post.id) {
          return action.post;
        } else {
          return post;
        }
      });
    }
    case "deleted": {

     return state.filter((post: IPost) => post.id !== action.postId);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
