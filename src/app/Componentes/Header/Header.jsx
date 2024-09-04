
import Image from "next/image";

import style from"./header.module.css";

export default function Header(props){

    return(
        <header className={style.header}>
        <div className={style.containerTitulo}>
            <Image src={props.Logo} alt="Circulo de cores" width={25} height={25} />
        <h1>Th-Design</h1>
        </div>
        <div className={style.containerBtn}>     
            <button onClick={props.onClick}>
                <Image className={style.Imagem} src={props.IconTema} alt={props.TipoTema} title={props.TipoTema} width={30} height={30}/>
            </button>
        </div>
        </header>
    )
}
