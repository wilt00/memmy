import React from 'react';
import {
  ParamListBase,
  StackNavigationState,
  TypedNavigator,
} from '@react-navigation/core';
import {
  NativeStackNavigationEventMap,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { NativeStackNavigatorProps } from 'react-native-screens/lib/typescript/native-stack/types';
import FeedIndexScreen from '@components/Feed/screens/FeedIndexScreen';
import PostScreen from '@components/Post/screens/PostScreen';
import MainFeed from '@components/Feed/components/MainFeed';
import CommentChainScreen from '@components/Comment/screens/CommentChainScreen';
import ReplyScreen from '@components/Reply/screens/ReplyScreen';

export default function MainScreens(
  stack: TypedNavigator<
    ParamListBase,
    StackNavigationState<ParamListBase>,
    NativeStackNavigationOptions,
    NativeStackNavigationEventMap,
    ({
      id,
      initialRoutename,
      children,
      screenListeners,
      screenOptions,
      ...rest
    }: NativeStackNavigatorProps) => JSX.Element
  >,
): React.JSX.Element {
  return (
    <>
      <stack.Group>
        <stack.Screen
          name="Feed"
          component={FeedIndexScreen}
          options={{
            headerShown: true,
          }}
        />
        <stack.Screen
          name="Post"
          component={PostScreen}
          options={{
            headerShown: true,
          }}
        />
        <stack.Screen
          name="CommentChain"
          component={CommentChainScreen}
          options={{
            headerShown: true,
            headerTitle: 'More Comments',
          }}
        />
        <stack.Screen
          name="Community"
          component={MainFeed}
          options={{
            headerShown: true,
          }}
        />
      </stack.Group>
      <stack.Group
        screenOptions={{
          presentation: 'modal',
        }}
      >
        <stack.Screen
          name="Reply"
          component={ReplyScreen}
          options={{ headerShown: true }}
        />
      </stack.Group>
    </>
  );
}
