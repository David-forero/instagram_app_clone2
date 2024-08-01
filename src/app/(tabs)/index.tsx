import { Image, Text, View, FlatList } from 'react-native';
import PostListItem from '~/src/components/PostListItem';
import posts from '~/assets/data/posts.json';


export default function HomeScreen() {
  return (
    <View className='bg-white'>
      <FlatList
        data={posts}
        renderItem={({item}) => <PostListItem post={item} />}
        contentContainerStyle={{gap: 10}}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}