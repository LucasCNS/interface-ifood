import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Text, View, SafeAreaView, Alert, ActivityIndicator } from 'react-native';

import { } from './style';

export default function Principal() {

  const [banners, setBanner] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [restaurantes, setRestaurantes] = useState([]);
  const [loaded, setLoeaded] = useState(false);

  useEffect(()=>{
    
    async function buscaDados(){

      try{
      
        const response = await fetch('https://my-json-server.typicode.com/pablohdev/app-ifood-clone/db')
        const data = await response.json();

        setLoeaded(true);

        setBanner(data.banner_principal);
        setCategorias(data.banner_categorias);
        setRestaurantes(data.banner_restaurantes);
      
      }catch(e){
        
        Alert.alert('Erro ao consultar'+e)
      }
    }

    buscaDados();

  },[]) //Esse array no final é para executar somente uma vez. Se não estivesse aí, seria um loop.

  const ViewHome = (props)=>{
    return(
      <Text>Principal</Text>
    )
  }


  return (
    <>
      <StatusBar style="theme-dark"></StatusBar> 
        <SafeAreaView>  
          {loaded ?(
            <ViewHome/>
          ):
          (
            <View>
              <ActivityIndicator color='#F0001A' size='large' />
            </View>
          )}
        </SafeAreaView>
    </>
  );
}
