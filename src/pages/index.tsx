import Head from "next/head";
import logoImg from "../../public/logo.svg";
import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
export default function Home() {
  return (
    <>
      <Head>
        <title>SujeitoPizza - Faça seu login</title>
      </Head>
      <div className={styles.containerCenteer}>
        <Image src={logoImg} alt="Logo Sujeito Pizarria" />
        <div className={styles.login}>
          <form>
            <Input placeholder="Digite seu e-mail" type="text" />
            <Input placeholder="Digite sua senha" type="password" />
            <Button type="submit" loading={true}>
              Cadastrar
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
