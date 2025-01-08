import { Stack } from "expo-router";
import { Provider as ReduxProvider } from "react-redux";
import * as SplashScreen from "expo-splash-screen";

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import store from "@/core/stores/store";
import "@/global.css";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Mantém a tela de carregamento visível enquanto o aplicativo carrega
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, setLoaded] = useState(false);

  // Carrega as configurações iniciais
  const prepare = async () => {
    let list = await AsyncStorage.getItem("items");

    // Caso não tenha uma lista salva no AsyncStorage, carrega os items de um arquivo
    if (list == null) {
      list = require("@/core/metadata/initial-items.json");
      await AsyncStorage.setItem("items", JSON.stringify(list));
    }
  };

  useEffect(() => {
    prepare().then(() => setLoaded(true));
  }, []);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hide();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GluestackUIProvider mode="light">
      <ReduxProvider store={store}>
        <Stack screenOptions={{ headerShown: false }} />
      </ReduxProvider>
    </GluestackUIProvider>
  );
}
