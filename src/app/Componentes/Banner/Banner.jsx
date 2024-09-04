import Image from "next/image";

import style from "../Banner/banner.module.css";

import HomemBanner from "@/../public/banner.png";

export default function Banner(){
    return(
        <section className={style.section}>
            <article className={style.containerImagem}>
                <Image className={style.Imagem} src={HomemBanner} alt="Banner"/>
            </article>
            <article className={style.containerTextos}>
                <span>BRANDING / UI / UX / TECNOLOGIA</span>
                <h2> Agência de Branding <br /><strong>e design digital</strong></h2>
            </article>
        </section>
    )
}