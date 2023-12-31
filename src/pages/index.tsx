import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import logoImg from "../../public/logo.svg";
import styles from "../../styles/Home.module.scss";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";

export default function Home() {
  return (
    <>
      <Head>
        <title>SujeitoPizza - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Sujeito Pizarria" />
        <div className={styles.login}>
          <form>
            <Input placeholder="Digite seu e-mail" type="text" />
            <Input placeholder="Digite sua senha" type="password" />
            <Button type="submit" loading={false}>
              Acessar
            </Button>
          </form>
          <Link href="/signup" className={styles.text}>
           Não possui uma conta? Cadastre-se
          </Link>
        </div>
      </div>
    </>
  );
}
