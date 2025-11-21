
import Login from "./stacks/login";
import {useEffect } from "react";
import { useRouter } from "expo-router";




export default function Index() {

  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      const isLoggedIn = false; // Simule o estado de autenticação do usuário
      if (isLoggedIn) {
        router.navigate('/tabs/home');
      } else {
        
        return <Login />;
      }
    }, 1000); // Simula um carregamento de 2 segundos

    return () => clearTimeout(timeout);
  }, [router]);

    
    return <Login />;
    

}