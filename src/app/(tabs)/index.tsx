import { useEffect, useState } from 'react';
import { Alert, FlatList, LogBox } from 'react-native';
import posts from '~/assets/data/posts.json';
import PostListItem from '~/src/components/PostListItem';
import { supabase } from '~/src/lib/superbase';
import { useAuth } from '../providers/AuthProvider';


export default function HomeScreen() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { user }: any = useAuth();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    let { data, error }: any = await supabase
      .from('posts')
      .select('*, user:profiles(*), my_likes:likes(*), likes(count)')
      // .eq('id', 49) // show only my posts
      .eq('my_likes.user_id', user.id)
      .order('created_at', { ascending: false });

    if (error) {
      Alert.alert('Something went wrong');
      console.log(error);
      
    }
    // console.log(JSON.stringify(data, null, 2));
    setPosts(data);
    setLoading(false);
  };

  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostListItem post={item} />}
      contentContainerStyle={{
        gap: 10,
        maxWidth: 512,
        alignSelf: 'center',
        width: '100%',
      }}
      showsVerticalScrollIndicator={false}
      onRefresh={fetchPosts}
      refreshing={loading}
    />
  );
}