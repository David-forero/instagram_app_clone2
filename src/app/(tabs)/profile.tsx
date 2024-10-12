import { Image, Text, TextInput, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import Button from "~/src/components/Button";

const ProfileScreen = () => {
  const [image, setImage] = useState<string | null>(null);
  const [username, setUserName] = useState("");

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View className="p-3 flex-1">
      {image ? (
        <Image
          className="w-52 aspect-square rounded-full self-center bg-slate-300"
          source={{
            uri: image,
          }}
        />
      ) : (
        <View className="w-52 aspect-square rounded-full self-center bg-slate-300" />
      )}

      <Text
        className="text-blue-500 font-semibold m-5 text-center"
        onPress={pickImage}
      >
        Change
      </Text>

      {/* FORM */}
      <Text className="mb-2 text-gray-500 font-semibold">Username</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUserName}
        className="border border-gray-300 p-3 rounded-md"
      />



     <View className="gap-2 mt-auto">
     <Button
        title="Update profile"
      />
       <Button
        title="Sign out"
      />
     </View>
    </View>
  );
};

export default ProfileScreen;
