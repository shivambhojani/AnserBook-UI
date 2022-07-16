import httpClient from "../thunk/interceptor";

const getBookmarkListOfUser = async (userId: string) => {
  return httpClient.get(`/bookmark/getAll/${userId}`).then(response => {
    console.log("User bookmark that I got:", response);
    return response.data;
  });
};

const addPostToBookmarkList = async (
  userId: string,
  postId: string,
  addToBookmarkListName: string,
) => {};

const removePostFromBookmarkList = async (
  userId: string,
  postId: string,
  removeFromBookmarkListName: string,
) => {
  const body = {
    postId,
    bookmarkListName: removeFromBookmarkListName,
  };
  return httpClient.put(`/bookmark/remove/${userId}`, body).then(response => {
    console.log("Response after removing the bookmark:", response);
    return response;
  });
};

export const bookmarkService = {
  getBookmarkListOfUser,
  addPostToBookmarkList,
  removePostFromBookmarkList,
};
