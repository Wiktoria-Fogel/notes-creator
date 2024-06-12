import { Image, View } from "react-native";
import { Text, StyleSheet } from "react-native";

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <View style={styles.mainWrapper}>
      <Image
        style={styles.image}
        source={require("../../../assets/notes-icon.png")}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 16,
  },
  image: {
    height: 30,
    width: 30,
    marginRight: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
});
