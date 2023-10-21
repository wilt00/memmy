import { SwipeableActionParams } from '@helpers/swipeableActions/swipeableActions';

export const replyOption = ({
  commentId,
  postId,
  replyId,
  navigation,
}: SwipeableActionParams): void => {
  navigation.push('Reply', { commentId, postId, replyId });
};
