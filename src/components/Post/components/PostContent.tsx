import React from 'react';
import {
  usePostBody,
  usePostLink,
  usePostLinkType,
} from '@src/state/post/postStore';
import { useRoute } from '@react-navigation/core';
import { View } from 'tamagui';
import ViewerImage from '@components/Common/ImageViewer/ViewerImage';
import Markdown from '@components/Common/Markdown/Markdown';

function PostContent(): React.JSX.Element {
  const { postId } = useRoute<any>().params;

  const postLinkType = usePostLinkType(postId);
  const postBody = usePostBody(postId);
  const postLink = usePostLink(postId);

  return (
    <View>
      {postLinkType === 'image' && (
        <View marginVertical="$3">
          <ViewerImage source={postLink!} />
        </View>
      )}
      {postBody != null && (
        <View marginHorizontal="$3" marginVertical="$3">
          <Markdown>{postBody}</Markdown>
        </View>
      )}
    </View>
  );
}

export default React.memo(PostContent);
