const getBookmarkListOfUser = async (userId: string) => {};

const addPostToBookmarkList = async (
  userId: string,
  postId: string,
  addToBookmarkListName: string,
) => {};

const removePostFromBookmarkList = async (
  userId: string,
  postId: string,
  removeFromBookmarkListName: string,
) => {};

export const bookmarkService = {
  getBookmarkListOfUser,
  addPostToBookmarkList,
  removePostFromBookmarkList,
};
