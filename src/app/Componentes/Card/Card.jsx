import style from "../Card/card.module.css";

export default function Card(props){
    return(
            <article className={style.Card}>
               <div className={style.informacoesDataFuncaoEmpresa}>
                <p>{props.data}</p>
                <h3 className={style.tituloCard}>{props.funcao}</h3>
                <p>{props.empresa}</p>
                </div>
                <div className={style.containerDescricaoFuncao}>
                    <p>{props.descricaoFuncao}</p>
                </div>
            </article>
    )
}