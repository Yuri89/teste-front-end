import FacebookSVG from "../../Assets/svgs/Facebook";
import InstagramSVG from "../../Assets/svgs/Instagram";
import LinkedinSVG from "../../Assets/svgs/Linkedin";
import Logo from "../../Assets/svgs/Logo";
import './style.scss'

export default function Footer() {
    return (
        <footer className="end-page">
            <section>
                <div>
                    <h2>Inscreva-se na nossa newsletter</h2>
                    <span>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</span>
                </div>
                <div>
                    <form>
                        <input type="text" placeholder="Digite seu Nome" />
                        <input type="text" placeholder="Digite seu e-mail" />
                        <button type="submit">INSCREVER</button>
                        <label htmlFor="">
                            <input type="checkbox" name="" id="" />
                            Aceito os termos e condições
                        </label>
                        
                    </form>
                </div>
            </section>
            <section>
                <div>
                    <Logo/>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                    <nav>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <InstagramSVG/>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FacebookSVG/>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <LinkedinSVG/>
                        </a>
                    </nav>
                </div>
                <nav>
                    <div>
                        <h3>Institucional</h3>
                        <ul>
                            <li>Sobre Nós</li>
                            <li>Movimento</li>
                            <li>Trabalhe conosco</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Ajuda</h3>
                        <ul>
                            <li>Suporte</li>
                            <li>Fale Conosco</li>
                            <li>Perguntas Frequentes</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Termos</h3>
                        <ul>
                            <li>Termos e Condições</li>
                            <li>Política de Privacidade</li>
                            <li>Troca e Devolução</li>
                        </ul>
                    </div>
                </nav>
            </section>
            <section><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></section>
        </footer>
    )
}