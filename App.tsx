import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

import { DashboardScreen } from "./src/screens/DashboardScreen";
import { ShoppingListScreen } from "./src/screens/ShoppingListScreen";
import { CatalogScreen } from "./src/screens/CatalogScreen";
import { HistoryScreen } from "./src/screens/HistoryScreen";
import { colors } from "./src/theme/colors";

export type RootTabParamList = {
  Dashboard: undefined;
  Lista: undefined;
  Cadastros: undefined;
  Historico: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerStyle: {
            backgroundColor: colors.surface
          },
          headerTitleStyle: {
            color: colors.text,
            fontWeight: "700"
          },
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.muted,
          tabBarStyle: {
            backgroundColor: colors.surface,
            borderTopColor: colors.border,
            height: 64,
            paddingBottom: 8,
            paddingTop: 8
          },
          tabBarIcon: ({ color, size }) => {
            const icons: Record<keyof RootTabParamList, keyof typeof Ionicons.glyphMap> = {
              Dashboard: "stats-chart",
              Lista: "basket",
              Cadastros: "albums",
              Historico: "time"
            };

            return <Ionicons name={icons[route.name]} color={color} size={size} />;
          }
        })}
      >
        <Tab.Screen name="Dashboard" component={DashboardScreen} options={{ title: "Início" }} />
        <Tab.Screen name="Lista" component={ShoppingListScreen} options={{ title: "Lista" }} />
        <Tab.Screen name="Cadastros" component={CatalogScreen} options={{ title: "Cadastros" }} />
        <Tab.Screen name="Historico" component={HistoryScreen} options={{ title: "Histórico" }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
