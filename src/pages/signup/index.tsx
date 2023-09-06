import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import logoImg from "../../../public/logo.svg";
import styles from "../../../styles/Home.module.scss";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";

export default function SignUp() {
  return (
    <>
      <Head>
        <title>SujeitoPizza - Faça seu cadastro agora</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Sujeito Pizarria" />
        <div className={styles.login}>
          <h1>Criando sua conta</h1>
          <form>
            <Input placeholder="Digite seu nome" type="text" />
            <Input placeholder="Digite seu e-mail" type="text" />
            <Input placeholder="Digite sua senha" type="password" />
            <Button type="submit" loading={false}>
              Cadastrar
            </Button>
          </form>
          <Link href="/" className={styles.text}>
            Já possui uma conta? Faça o login!
          </Link>
        </div>
      </div>
    </>
  );
}
