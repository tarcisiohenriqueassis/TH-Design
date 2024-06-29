import style from "../Footer/style.module.css";

import Image from "next/image";
import Link from "next/link";

import Logo from "@/../public/favicon.ico";
import Facebook from "@/../public/facebook.png";
import Linkedin from "@/../public/linkedin.png";
import Dribble from "@/../public/dribble.png";
import Behance from "@/../public/behance.png";
import Twitter from "@/../public/twitter.png";
import GooglePlus from "@/../public/google-plus.png";

import Header from "../Header/Header";

export default function Footer(props){
    return(
        <footer className={style.footer}>
            <div className={style.logoFooter}>
            <Image src={Logo} alt="Circulo de cores" width={25} height={25} />
            <h3>Th-Design</h3>
            </div>
            <div className={style.containerParagrafo}>
                {props.children}
            </div>
        <div className={style.containerRedesSocias}>
                <Link href={props.link} target="Blank"><Image src={Facebook} width={50} height={50}/></Link>
                <Link href={props.link} target="Blank"><Image src={Twitter} width={50} height={50}/></Link>
                <Link href={props.link} target="Blank"><Image src={Linkedin} width={50} height={50}/></Link>
                <Link href={props.link} target="Blank"><Image src={Behance} width={50} height={50}/></Link>
                <Link href={props.link} target="Blank"><Image src={Dribble} width={50} height={50}/></Link>
                <Link href={props.link} target="Blank"><Image src={GooglePlus} width={50} height={50}/></Link>
            </div>
            <span>Copyright 2024 <Link className={style.linkDesenvolvedor} href={props.linkDesenvolvedor}>{props.nomeDesenvolvedor}</Link></span>
        </footer>
    )
}