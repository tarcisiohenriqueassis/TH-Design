import style from "../ExperienciasDeTrabalho/style.module.css";

export default function Experiencias(){
    return(
        <div className={style.containerGlobalExperiencias}>
            <section className={style.containerTextoApresentacao}>
                <h2>Experiências De Trabalho <br /> <span>-</span></h2>
                <p> Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
                    Sites e Marketing Digital, nos empenhamos diariamente para entregar
                    resultados que tragam impacto aos nossos clientes.</p>
            </section>
            <section className={style.containerCard}>

            </section>
        </div>
    )
}