"use client"
import React,{ useState } from "react";
import Image from "next/image";

import style from"./style.module.css";

import Sol from "../../../../public/sun.png";
import Lua from "../../../../public/moon.png";


export default function Header(){

    const TemaDark =style.temaDark;
    const TemaLigth=style.temaLigth;

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

    return(
        <header className={backgroundTema}>
        <div className={style.containerTitulo}>
        <h1>M.</h1>
        </div>
        <div className={style.containerBtn}>     
            <button onClick={MudaTemaIcon}>
                <Image className={style.Imagem} src={icontema} alt={tipoTema} title={tipoTema} width={30} height={30}/>
            </button>
        </div>
        </header>
    )
}