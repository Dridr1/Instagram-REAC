export default function Stories(){
    const storiesNomes = ["9gag","meowed","barked","nathanwpylestrangeplanet","wawawicomics","respondeai","filomoderna","memeriagourmet"];

    return(
        <div class="stories">
        {storiesNomes.map(nome => {
            let img = `assets/img/${nome}.svg`
            return(
                <div class="story">
                    <div class="imagem">
                        <img src={img} />
                    </div>
                    <div class="usuario">
                        {nome}
                    </div>
                </div>
            );
        })}
            <Setinha/>
        </div>
    );
}

function Setinha(){
    return(
        <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    );
}