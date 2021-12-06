export default function Posts(){
  const postsContent = [
    {user: "meowed", postImg: "gato-telefone", likedBy: "respondeai", numLikes: "101.523"},
    {user: "barked", postImg: "dog", likedBy: "adorable_animals", numLikes: "99.159"}
  ];

    return(
        <div class="posts">
            {postsContent.map(post => {
              const ProfileImg = `assets/img/${post.user}.svg`;
              const PostImg = `assets/img/${post.postImg}.svg`;
              const likeBy = `assets/img/${post.likedBy}.svg`;

              return(
                  <div class="post">
                    <div class="topo">
                      <div class="usuario">
                        <img src={ProfileImg} />
                        {post.user}
                      </div>
                      <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                      </div>
                    </div>

                    <div class="conteudo">
                      <img src={PostImg} />
                    </div>

                    <div class="fundo">
                      <div class="acoes">
                        <div>
                          <ion-icon name="heart-outline"></ion-icon>
                          <ion-icon name="chatbubble-outline"></ion-icon>
                          <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                          <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                      </div>

                      <div class="curtidas">
                        <img src={likeBy} />
                        <div class="texto">
                          Curtido por <strong>{post.likedBy}</strong> e <strong>outras ${post.numLikes} pessoas</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                  );
              })};
        </div>
    );
}