"use client"
import React,{ useState } from "react";
//Estilos useState
import style from "@/app/Componentes/Header/header.module.css"
//Estilo Page.js
import styles from "./page.module.css";
//Componentes
import Header from "./Componentes/Header/Header";
import Banner from "../app/Componentes/Banner/Banner";
import Experiencias from "./Componentes/ExperienciasDeTrabalho/Experiencia";
import Card from "@/app/Componentes/Card/Card";
import Footer from "./Componentes/Footer/Footer";
//Imagens
import Sol from "../../public/sun.png";
import Lua from "../../public/moon.png";
import Logo from "../../public/favicon.ico";

export default function Home() {
//Temas Dark e Light componentes
  const TemaDark = styles.themeDark;
  const TemaLigth = styles.themeLigth;

  const [icontema, setIcontema] = useState(Lua);
  const [tipoTema, setTipoTema] = useState("Noite");
  const [backgroundTema, setBackgroundTema] = useState(TemaLigth)
  
  function MudaTemaIcon(){

      if(tipoTema == "Noite"){
          setIcontema(Sol)
          setTipoTema("Dia")
          setBackgroundTema(TemaDark)
      }
  else{
          setIcontema(Lua)
          setTipoTema("Noite")
          setBackgroundTema(TemaLigth)
      }
  }

  return (
    <main className={backgroundTema}>
      <Header Logo={Logo} onClick={MudaTemaIcon} IconTema={icontema} TipoTema={tipoTema}/>
      <Banner/>
      <Experiencias/>
      <div className={styles.containerCard }>
        <Card data="JUNHO 2012 - 2016" funcao="Web Designer" empresa="Pied Piper StartUp." descricaoFuncao="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"/>
        <Card data="AGOSTO 2016 - 2019" funcao="Product Designer" empresa="E Corp." descricaoFuncao="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"/>
        <Card data= "FEVEREIRO 2019 - 2021" funcao="Digital Consulting" empresa= "Arasaka Inc." descricaoFuncao="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"/>
      </div>
      <Footer link="WWw.google.com.br" linkDesenvolvedor="https://www.linkedin.com/in/tarcisiohenriqueassis/" nomeDesenvolvedor="Tarcisio H">
        <p>
        Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
        ferramentas e tecnologias personalizadas.
        </p>
      </Footer>
    </main>
  );
}
