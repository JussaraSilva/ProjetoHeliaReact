// app/_layout.tsx
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          headerShown: false // ⬅️ Desativa header na tela de índice
        }} 
      />
      <Stack.Screen 
        name="tabs" 
        options={{ 
          headerShown: false // ⬅️ Desativa header no grupo de tabs
        }} 
      />
      <Stack.Screen 
        name="stacks" 
        options={{ 
          headerShown: false // ⬅️ Desativa header no grupo de stacks
        }} 
      />
      {/* Para outras telas específicas, se houver */}
    </Stack>
  );
}