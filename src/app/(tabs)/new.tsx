import { Image, Text, View, TextInput, Pressable } from "react-native";
import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import Button from "~/src/components/Button";

const NewScreen = () => {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    if (!image) {
      pickImage();
    }
  }, [image]);

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
    <View className="p-3 items-center flex-1">
      {image ? (
        <Image
          className="w-52 aspect-[3/4] rounded-lg bg-slate-300"
          source={{
            uri: image,
          }}
        />
      ) : (
        <View className="w-52 aspect-[3/4] rounded-lg bg-slate-300" />
      )}

      <Text className="text-blue-500 font-semibold m-5" onPress={pickImage}>
        Change
      </Text>

      <TextInput
        value={caption}
        onChange={(text: any) => setCaption(text)}
        placeholder="What is on your mind"
        className="w-full p-3"
      />

      <View className="mt-auto w-full">
        <Button
          title={"share"}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default NewScreen;
