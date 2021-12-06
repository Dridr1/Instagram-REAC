export default function Sidebar(){
    return(
        <div class="sidebar">
            <Usuario userName="catanacomics" userFullName="Catana" />
            <Sugestoes />
            <Links/>
            <Copyright/>
        </div>
    )
}

function Usuario(props){
    const userImg = `assets/img/${props.userName}.svg`
    return(
        <div class="usuario">
            <img src={userImg}/>
            <div class="texto">
                <strong>{props.userName}</strong>
                {props.userFullName}
            </div>
        </div>
    )
}

function Sugestoes(){
    const sugestoes = [
        {user: "bad.vibes.memes", reason: "Segue você"},
        {user: "chibirdart", reason: "Segue você"},
        {user: "razoesparaacreditar", reason: "Novo no Instagram"},
        {user: "adorable_animals", reason: "Segue você"},
        {user: "smallcutecats", reason: "Segue você"}
    ];
    return(
        <div class="sugestoes">
            <SugestoesTop texto="Sugestões para você" opcaoTexto="Ver Tudo" />
            {sugestoes.map(sugestao => {
                const img = `assets/img/${sugestao.user}.svg`
                return(
                    <div class="sugestao">
                    <div class="usuario">
                        <img src={img} />
                        <div class="texto">
                        <div class="nome">{sugestao.user}</div>
                        <div class="razao">{sugestao.reason}</div>
                        </div>
                    </div>

                    <div class="seguir">Seguir</div>
                    </div>
                )
            })}
        </div>
    )
}

function SugestoesTop(props){
    return(
        <div class="titulo">
            {props.texto}
            <div>{props.opcaoTexto}</div>
        </div>
    )
}

function Links(){
    return(
        <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>
    )
}

function Copyright(){
    return(
        <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    )
}