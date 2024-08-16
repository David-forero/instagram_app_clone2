import { View, FlatList } from 'react-native';
import posts from '~/assets/data/posts.json';
import PostListItem from '~/src/components/PostListItem';


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