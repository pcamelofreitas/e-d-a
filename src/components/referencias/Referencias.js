import { Button } from "react-bootstrap";
import { useState } from "react";

export const Historico = ({ goToRef }) => {
  return (
    <div>
      <h1>Histórico</h1>
      <img alt="x" src="https://svgsilh.com/svg/2027035.svg" height={250} />
      <p>
        Estes são tempos dificeis em Kallamehr. Nem bem a soberana, Lady
        Carolina, recuperou-se da morte de seu marido, foi jogada em uma guerra
        com o estado rival de comercio, Alkemis. Depois de uma batalha marítima,
        onde muitasvidas foram perdidas, parecia que Kallamehr iria se impor.
        Porém havia ainda mais por vir. Rumores se espalharam sobre exércitos
        avançados nas fronteiras ao norte. Era dito que Bei-Han, um vizinho nada
        amigável, preparava uma invasão. Agindo com decisão, Lady Carolina
        ordenou que seus exércitos fossem para o norte. As passagens das
        montanhas na fronteira poderiam ser defendidas facilmente. Entretanto se
        fosse permitido que os exercitos de Bei-Han chegassem às grandes
        planíces de Kallamehr, eles causariam incomensuráveis danos.
      </p>
      <Button variant="dark" onClick={() => goToRef(0)}>
        Início
      </Button>
    </div>
  );
};

export const Inicio = ({ goToRef }) => {
  return (
    <div>
      <h1>Início</h1>
      <p>
        Você chega a Kallamehr quando as últimas tropas estão partindo. Você se
        vê em meio a uma cidade estranhamente deserta. A vida continua, mas sem
        os muitos guerreiros brilhantes vestidos que costumavam desfilar
        orgulhosamente pelas ruas de kallamehr. sem os soldados, os criminosos
        atacam. Você tranca a porta do seu quarto à noite e dorme com a espada
        ao lado de sua cama.
      </p>
      <p>
        Algumas semanas se passam. Então, uma manhã, um mensageiro de olhos
        arregalados entra na cidade, gritando incoerentes avisos de invasão
        vinda do leste. Menos de uma hora depois que ele desaparece dentro do
        palácio, um servo lhe traz uma carta com o selo da Casa de Rangor. É uma
        convocação para comparecer diante da própria Lady Carolina! Parece que
        sua fama de aventureiro chegou até os ouvidos dela, e nesses dias negros
        a Lady necessita de guerreiros destemidos.
      </p>
      <p>
        Quando chega ao palácio, você se vê em meio a dez outros aventureiros.
        Muitos são conhecidos de vista, mas uma, Sophia de Blacksand, é bem
        conhecida, pois já viveu aventuras com ela em mais de uma ocasião. Antes
        que tenham tempo de cumprimentarem-se, ou se apresentarem, um servo os
        leva para dentro. Você entra em uma câmara de audiência para encontra
        cinco nobres atrás de uma imensa mesa de madeira negra. No centro dela
        está Lady Carolina, resplandecente com as jóias cerimoniais, a Espada de
        Serviço à sua frente sobre a mesa. À sua esquerda está seu primo,
        Madhaerios, um homem gordo com um tique nervoso no nariz. Depois dele
        senta-se Dunyazad de Ikhtiyan, uma pequena mulher que tem a reputação de
        ser a pessoa mais rica da província de Kallamehr. À direita de Carolina
        está Sige, a Silenciosa, uma imponente mulher de linhagem antiga, e
        Asiah Albudur, a Juiza de rosto severo. Você está realmente diante das
        cinco pessoas mais importantes de Kallamehr!
      </p>

      <p>
        Você se curva, e Carolina explica a situação rapidamente. Com o exército
        tantos quilometros ao norte, Kallamehr está desprotegida. Agora um
        mensageiro chega das regiões leste dizendo que os vilarejos foram
        encontrados desertos. Parece que um exercito está avançando para a
        cidade pelo leste, devem ser atacantes bárbaros da Ilha Kulak. Um
        batedor precisou ser enviado imediatamente para trazer de volta metade
        do exército de Kallamehr. Enquanto isso a cidade precisa ser defendida
        de algum modo. Carolina explica que seu leal campeão, Ramedes, o
        Invencível, está fora na região sul, em busca de uma fabulosa relíquia.
        Ela os cumprimenta por sua recomnhecida bravura e pede que a ajudem, e
        assim consigam a gratidão de toda a província, assumindo a defesa da
        cidade. Vocês podem estar em pequeno número, mas isso certamente não os
        tornará mais gloriosos?
      </p>
      <Button variant="dark" onClick={() => goToRef(1)}>
        Começar
      </Button>
    </div>
  );
};

export const Ref1 = ({ goToRef }) => {
  return (
    <div>
      <div className="row d-inline text-center">
        <div className="col vh-75">
          <h2 className="f1">Referência 1</h2>
          <img alt="imagem-da-sec" src="" height="250px" />
          <p>
            Como você pode recusar tal apelo? Os outros dez são rápidos em se
            oferecer para a missão, e sua voz se junta aos outros, jurando
            fidelidade a Lady Carolina. Essa é sua chance de se tornar mais que
            um aventureiro, você será um verdadeiro herói de lendas! Você ouve
            os quatros nobres falarem de seus planos. Um de vocês precisa
            cavalgar para as passagens norte e chamar o exército, outro deve
            seguir para leste para investigar os invasores. O resto deve
            permanecer em Kallamehr e usar de toda sua inteligência e
            iventividade para preparar uma defesa. O que você vai fazer.
          </p>
          <h4>Voluntariar-se para:</h4>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-around ">
          <Button variant="dark" onClick={() => goToRef(92)}>
            Vonluntariar-se Para Cavalgar para o norte até o exército?
          </Button>
          <Button variant="dark" onClick={() => goToRef(104)}>
            Vonluntariar-se para investigar no leste?
          </Button>
          <Button variant="dark" onClick={() => goToRef(288)}>
            Ficar para defender a cidade?
          </Button>
        </div>
      </div>
    </div>
  );
};

export const Ref2 = ({ goToRef }) => {
  return (
    <div>
      <div className="row d-inline text-center">
        <div className="col vh-75">
          <h2 className="f1">Referência 2</h2>
          <img alt="imagem-da-sec" src="" height="250px" />
          <p>
            Segurando a grudenta mão de Mema, você anda até seu cavalo. Você
            deve entregá-la em segurança a eus pais e ela lhe diz que conhece o
            caminho para a vila. É retornar r elo caminho que voce já fez, mas
            deixá-la desprotegida não seria uma aõtude de herói. Enquanto isso
            ela ainda estã coberta de time verde.
          </p>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-around ">
          <Button variant="dark" onClick={() => goToRef(170)}>
            Lavá-la
          </Button>
          <Button variant="dark" onClick={() => goToRef(396)}>
            Não lavá-la
          </Button>
        </div>
      </div>
    </div>
  );
};

export const Ref3 = ({ goToRef }) => {
  return (
    <div>
      <div className="row d-inline text-center">
        <div className="col vh-75">
          <h2 className="f1">Referência 3</h2>
          <img alt="imagem-da-sec" src="" height="250px" />
          <p>
            Sob seus pés a superfície do cristal comeca a endurecer e levantar.
            Mais Ectovultos passam guinchando e você chega à beira da cratera.
            Olhando pra baixo, você vé uma depressão em forma de tigela, formada
            por veios de rocha lisos com sulcos regulares. Um brilho quente se
            irradia da areia dourada que se espalha no centro. Se desejar descer
            até a cratera, vá para 103. Se preferir esperar e ver se algo
            acontece, vá para 330.
          </p>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-around ">
          <Button variant="dark" onClick={() => goToRef(103)}>
            Descer até a cratera
          </Button>
          <Button variant="dark" onClick={() => goToRef(330)}>
            Esperar e ver se algo acontece
          </Button>
        </div>
      </div>
    </div>
  );
};

export const Ref4 = ({ goToRef }) => {
  return (
    <div>
      <div className="row d-inline text-center">
        <div className="col vh-75">
          <h2 className="f1">Referência 4</h2>
          <img alt="imagem-da-sec" src="" height="250px" />
          <p>
            Fourga é o deus do orgulho, e seus sacerdotes aqui em Hasrah
            certamente o têm em abundância. O velho que permite sua entrada no
            templo o olha de cima a baixo friamente, sem dizer nada. Você é
            levado até o Sacerdote Supremo, um venerável homem velho e enrugado
            que o olha com desgosto. "Então o cachorr solitário se atreve a mais
            uma vez sujar nossos portais com sua presença!" Ele grunhe com uma
            voz surpreendentemente forte para alguém de tal idade. "Talvez vocé
            queira esvaziar sua mochila para nós?"
          </p>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-around ">
          <Button variant="dark" onClick={() => goToRef(15)}>
            Esvaziar a mochila
          </Button>
          <Button variant="dark" onClick={() => goToRef(390)}>
            Recusar-se
          </Button>
        </div>
      </div>
    </div>
  );
};

export const Ref5 = ({ goToRef, testeSorte, sortudo }) => {
  const [dispplayButton, setDisplayButton] = useState(false);

  const onTesteSorte = () => {
    testeSorte();
    setDisplayButton(true);
  };
  return (
    <div>
      <div className="row d-inline text-center">
        <div className="col vh-75">
          <h2 className="f1">Referência 5</h2>
          <img alt="imagem-da-sec" src="" height="250px" />
          <p>
            Você cavalga para o norte entre as montanhas, abrindo caminho
            cuidadosamente entre a grama esbranquiçada e ouriçada. Não há
            trilhas por aqui e a grama esconde buracos e raízes. Sem guia ou
            indicações, não há jeito de você saber se está viajando na direção
            certa, então confia nos seus instintos e mantém o sol a sua esquerda
            todo o tempo. Finalmente você chega a um pico e observa o
            melancolico platô. A grama é rala e seu coração se confrange ante a
            visão da planície não cultivada que se estende até o horizonte.
            Então você vê algo, bem longe em meio à planície. Esfregando os
            olhos, você fixa um pequeno ponto, talvez uma cabana ou outra
            construção. Você esporeia sua montaria para descer a colina e
            algumas horas de cavalgada depois esta à beira da planície. Você
            percebe alarmado que o vento está aumentando. Sem vegetação, o solo
            da planicie está seco e arenoso, e rodopia a sua volta, obscurecendo
            sua visão. Seu cavalo reage aterrorizado e você cai na areia, o pé
            direito ainda preso no estribo.
          </p>
          <div>
            <Button
              variant="dark"
              onClick={onTesteSorte}
              disabled={dispplayButton}
            >
              Teste sua Sorte
            </Button>
          </div>
        </div>
      </div>
      <div>
        {dispplayButton ? (
          <div>
            <Button
              onClick={() => goToRef(54)}
              disabled={sortudo}
              variant="dark"
            >
              Sortudo
            </Button>
            <Button
              onClick={() => goToRef(77)}
              disabled={!sortudo}
              variant="dark"
            >
              Azarado
            </Button>
          </div>
        ) : (
          <p>teste sua sorte para prosseguir</p>
        )}
      </div>
    </div>
  );
};
//batalha
export const Ref6 = ({ goToRef }) => {
  return (
    <div>
      <div className="row d-inline text-center">
        <div className="col vh-75">
          <h2 className="f1">Referência 6</h2>
          <img alt="imagem-da-sec" src="" height="250px" />
          <p>
            Quanto voce avança para ataca-lo, o Tróll arranca a pequena árvore
            de um buraco e usa-a como porrete.
          </p>
          <p>Troll habilidade 9 Energia 9</p>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-around ">
          <Button variant="dark" onClick={() => goToRef(207)}>
            Você venceu
          </Button>
        </div>
      </div>
    </div>
  );
};

export const Ref7 = ({ goToRef }) => {
  return (
    <div>
      <div className="row d-inline text-center">
        <div className="col vh-75">
          <h2 className="f1">Referência 7</h2>
          <img alt="imagem-da-sec" src="" height="250px" />
          <p>
            Você estä começando a achar que vai passar o resto da vida em cima
            de uma sela. O tempo está estranhamente úmido para esta época do ano
            e os ocasionais sopros de vento do leste trazem pouco de conforto:
            eles são carregados de um cheiro fétido e doentemente adocicado. A
            estrada segue em meio a pedras maciças e uma escarpa dentada se
            eleva à sua esquerda. À sua frente, outro assentamento se ergue
            entre as imensas rochas. Estranhamente não há fumaça alguma. Quando
            se aproxima nota värios objetos jogados na estrada: sapatos; arcos e
            ferramentas. Vocé desmonta e entra com cautela na vila, encontrando
            uma rua desolada, vazia de gente e cheia de destroços. De um dos
            prédios à sua direita você pode ouvir um suave bater.
          </p>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-around ">
          <Button variant="dark" onClick={() => goToRef(349)}>
            Seguir até o ruído?
          </Button>
          <Button variant="dark" onClick={() => goToRef(128)}>
            Investigar os prédios a sua esquerda?
          </Button>
          <Button variant="dark" onClick={() => goToRef(22)}>
            Sair rapido da vila e seguir em frente
          </Button>
        </div>
      </div>
    </div>
  );
};
//excluir-item
export const Ref8 = ({ goToRef }) => {
  return (
    <div>
      <div className="row d-inline text-center">
        <div className="col vh-75">
          <h2 className="f1">Referência 8</h2>
          <img alt="imagem-da-sec" src="" height="250px" />
          <p>
            Você abre o medalhão de Sige e tira as ervas. Vocë as enfia na boca
            e treme diante do gosto picante, mas é recompensado por um calor que
            o invade. Anote que comes as ervas.
          </p>
          <Button>Comeu as ervas</Button>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-around ">
          <Button variant="dark" onClick={() => goToRef(87)}>
            Examinar os itens espalhados?
          </Button>
          <Button variant="dark" onClick={() => goToRef(116)}>
            Seguir em meio a névoa?
          </Button>
        </div>
      </div>
    </div>
  );
};

export const Ref9 = ({ goToRef }) => {
  return (
    <div>
      <div className="row d-inline text-center">
        <div className="col vh-75">
          <h2 className="f1">Referência 9</h2>
          <img alt="imagem-da-sec" src="" height="250px" />
          <p>
            Você cai imediatamente no sono e sonha com uma figura vestida de
            negro perto de sua cama. Seu rosto se aproxima de você e afasta seu
            capuz para revelar as feições arredondadas do hospedeiro. Então ele
            levanta as garras e arranca a fachada de pele. Sob a máscara, Sophia
            de Blacksand se inclina sobre você. Então suas feições também são
            arrancadas, revelando o olhar duro de seu par! As garras agem de
            novo e de novo, revelando Madhaerios, Carolina, Dunyazad e
            incotáveis outros rostos tirados de sua memória. Finalmente eles
            param. Então a última máscara é arrancada. Seu próprio rosto o
            encara.
          </p>
          <Button>Risque uma caixa do tempo</Button>
        </div>
      </div>
      <div className="d-flex justify-content-around ">
        <Button variant="dark" onClick={() => goToRef(28)}>
          Avançar
        </Button>
      </div>
    </div>
  );
};

export const Ref10 = ({ goToRef }) => {
  return (
    <div>
      <div className="row d-inline text-center">
        <div className="col vh-75">
          <h2 className="f1">Referência 10</h2>
          <img alt="imagem-da-sec" src="" height="250px" />
          <p>
            Enquanto vecê está sem ar, Ramedes rosna e flexiona os grandes
            ombros. <em>"Eu não posso compreender"</em> ele diz, balançando a
            cabeça.
            <em>
              "Três meses atrás eu fui enviado em uma viagem por minha senhora,
              uma missão para recuperar uma importante relíquia. Superei perigos
              além das palavras para encontrar o artefato... e minha recompensa?
              Drogado, espancado e abandonado àquela criatura por algum
              pretendente covarde. Pelo amor de Castis, já escondi bem meu
              prêmio. Agora devo enlregá-lo à Lady Carolina."
            </em>
            Em choque você percebe que Ramedes não sabe da morte da Dama. Você
            explica delicadamente a verdade. Ele aperta as mãos e solta um
            grito. <em>"Eu farei minha vingança!"</em>, sibila,{" "}
            <em>“e a farei agora!”</em> Ele pula em pé e abre caminho para fora
            da câmara, agarrando uma tocha da parede para iluminar o caminho na
            passagem escura. Você o segue para fora do prédio e para o pátio,
            onde ele segue pelos depósitos de água perto dos está- bulos. Ele
            enfia a mão dentro d'água e puxa uma algibeira de couro.{" "}
            <em>“Acredito que posso confiar em você”</em>, ele diz, jogando a
            bolsa sobre você.
            <em>
              “Seguirei agora para achar o traidor que assassinou minha Dama.
              Guarde bem isso e, se eu morrer. Entregue-o ao novo govemante de
              Kallamehr ”
            </em>{" "}
            Ele gira a tocha flamejante sobre a cabeça e corre para o portão da
            fortaleza.
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-around ">
        <Button variant="dark" onClick={() => goToRef(224)}>
          Seguir Ramedes
        </Button>
        <Button variant="dark" onClick={() => goToRef(359)}>
          Se esconder nos estábulos e esperar para ver o que acontece.
        </Button>
      </div>
    </div>
  );
};

export const Ref11 = ({ goToRef }) => {
  return (
    <div>
      <div className="row d-inline text-center">
        <div className="col vh-75">
          <h2 className="f1">Referência 11</h2>
          <img alt="imagem-da-sec" src="" height="250px" />
          <p>
            Você rasga um pedaço de sua calça e coloca as fo lhas sobre ele.
            Cortando um pequeno pedaço de pau de uma árvore próxima, você enrola
            o tecido cheio de folhas em volta de uma das pontas e aperta bem.
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-around ">
        <Button variant="dark" onClick={() => goToRef(34)}>
          Se decidir então acender a tocha Jheera
        </Button>
        <Button variant="dark" onClick={() => goToRef(368)}>
          Cavalgar para encontrar o exército com ela apagada
        </Button>
      </div>
    </div>
  );
};

export const Ref12 = ({ goToRef, ene, setEne }) => {
  const [displayButton, setDisplayButton] = useState(false);

  const onLostEnergy = () => {
    setEne(ene - 1);
    setDisplayButton(true);
  };
  return (
    <div>
      <div className="row d-inline text-center">
        <div className="col vh-75">
          <h2 className="f1">Referência 12</h2>
          <img alt="imagem-da-sec" src="" height="250px" />
          <p>
            Você segue em direção ao coração da floresta. As árvores parecem
            mais proximas, escondendo a luz do sob. O chão da Floresta está
            acarpetado por folhas apodrecidas e você ie vó fazendo um progresso
            moderado em meio a esse terreno difícil. A atmosfera está pesada e
            úmida e você começa a ofegar devido ao esforço. Andar nesse tempo é
            exaustivo.
            <Button
              variant="dark"
              onClick={onLostEnergy}
              disabled={!displayButton}
            >
              Perca 1 ponto de Energia enquanto as horas passam.
            </Button>{" "}
            Finalmente você chega a uma encruzilhada.
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-around ">
        <Button
          variant="dark"
          onClick={() => goToRef(366)}
          disabled={displayButton}
        >
          Seguir pelo caminho da esquerda
        </Button>
        <Button
          variant="dark"
          onClick={() => goToRef(273)}
          disabled={displayButton}
        >
          Seguir pelo caminho da direita.
        </Button>
      </div>
    </div>
  );
};

export const Ref13 = ({ goToRef }) => {
  return (
    <div>
      <div className="row d-inline text-center">
        <div className="col vh-75">
          <h2 className="f1">Referência 13</h2>
          <img alt="imagem-da-sec" src="" height="250px" />
          <p>.......</p>
        </div>
      </div>
      <div className="d-flex justify-content-around ">
        <Button variant="dark" onClick={() => goToRef(366)}>
          Seguir pelo caminho da esquerda
        </Button>
        <Button variant="dark" onClick={() => goToRef(273)}>
          Seguir pelo caminho da direita.
        </Button>
      </div>
    </div>
  );
};

export const Ref23 = ({ goToRef }) => {
  return (
    <div>
      <div className="row d-inline text-center">
        <div className="col vh-75">
          <h2 className="f1">Referência 23</h2>
          <img alt="imagem-da-sec" src="" height="250px" />
          <p>
            Colocando no bolso o fragmento, você ouve atentamente as sugestões
            de Dunyazad para que fique nas estradas. Embora elas o façam dar uma
            pequena volta, serão mais rápidas do que uma cavalgada pelo campo.
            Quando você deixa a mesa e está sozinho examina o pedaço de papel.
            Está escrito:
            <em>"Cuidado - você é observado por centenas de olhos"</em>
          </p>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-around ">
          <Button variant="dark" onClick={() => goToRef(140)}>
            Avançar
          </Button>
        </div>
      </div>
    </div>
  );
};

export const Ref81 = ({ goToRef }) => {
  return (
    <div>
      <h1>Referência 81</h1>
      <p>
        Quando sua montaria cai no chão, você salta da sela. Embora pouse
        pesadamente, você não se machuca. Infelizmente o mesmo não pode ser dito
        de sua égua. Uma de suas patas dianteira está torcida. Ela claudica até
        você e acaricia seu rosto, como se desculpando. Ela nçao pode ser
        montada, então você deve levá-la até a próxima vila e conseguir outro
        cavalo.
      </p>
      <Button variant="dark" onClick={() => goToRef(155)}>
        Ir para vila
      </Button>
    </div>
  );
};

export const Ref92 = ({ goToRef, testeSorte, sortudo }) => {
  const [dispplayButton, setDisplayButton] = useState(false);

  const onTesteSorte = () => {
    testeSorte();
    setDisplayButton(true);
  };

  return (
    <div>
      <h1>Referência 92</h1>
      <p>
        Antes que parta, Lady Carolina lhe dá um pergaminho selado para entregar
        a Yunan, comandante de seu exército. Ela lhe deseja a Sorte de Castis em
        sua missão e lhe diz para escolher o melhor garanhão de seus estábulos.
        Logo você está galopando para fora de Kallamehr. Risque uma caixa do
        tempo. Você já viajou vários quilômetros e está pensando em parar para
        um gole de cerveja de sua garrafa quando seu cavalo tropeça
        repentinamente.
      </p>

      <Button variant="dark" onClick={onTesteSorte} disabled={dispplayButton}>
        Teste sua Sorte
      </Button>

      {dispplayButton ? (
        <div>
          <Button onClick={() => goToRef(81)} disabled={sortudo} variant="dark">
            Sortudo
          </Button>
          <Button
            onClick={() => goToRef(192)}
            disabled={!sortudo}
            variant="dark"
          >
            Azarado
          </Button>
        </div>
      ) : (
        <p>teste sua sorte para prosseguir</p>
      )}
    </div>
  );
};

export const Ref104 = ({ goToRef }) => {
  return (
    <div>
      <div className="row d-inline text-center">
        <div className="col vh-75">
          <h2 className="f1">Referência 104</h2>
          <img alt="imagem-da-sec" src="" height="250px" />
          <p>
            Você está sentádo à mesa com os cinco nobres, fazendo uma bela
            refeição para fortificar-se antes de entregar seu relatório final.
            Eles são cuidados por seus prórpios servos, enquanto Carolina
            designou um de seus pajens para cuidar de você. Madhaerios o alerta
            sobre tomar atitudes em cautela. "É muito importante que você volte
            para nos contar sobre a natureza da ameaça para que possamos saber
            como nos defender contra ela", ele explica. Enquanto Dunyazad esté
            no meio de seus conselhos para descansar no Tmeplo de Fourga, você
            sente um leve toque em sua perna. Você olha à volta e vê um pajem
            esperando para levá-lo embora. Olhando seu colo, você encontra um
            fragmento de papel. A página deve ter caído enquanto ele enchia de
            novo seu copo.
          </p>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-around ">
          <Button variant="dark" onClick={() => goToRef(264)}>
            Ler o Papel imediatamente
          </Button>
          <Button variant="dark" onClick={() => goToRef(23)}>
            Guardar para ler mais tarde
          </Button>
        </div>
      </div>
    </div>
  );
};

export const Ref140 = ({ goToRef, addItemHandler }) => {
  const [disable, setDisable] = useState(false);
  const onItemClick = () => {
    addItemHandler("Medalhão de Sige");
    setDisable(true);
  };
  return (
    <div>
      <div className="row d-inline text-center">
        <div className="col vh-75">
          <h2 className="f1">Referência 140</h2>
          <img alt="imagem-da-sec" src="" height="250px" />
          <p>
            Você é levado diretamente aos estábulos para escolher seu cavalo.
            Enquanto está se preparando para partir, a alta Sige se aproxima.
            Sua voz é baixa, quase inaudível, e você entende por que ela é
            chamada de "a Silenciosa". Ela lhe diz que tem um valioso item
            mágico que o ajudará em sua jornada e lhe trará a sorte dos deuses.
            É um medalhão com ervas raras; se usado no pescoço ele removerá
            qualquer necessidade de sono. Ele lhe é entregue pelo servo de Sige,
            uma criatura pobremente deformada que claudica lentamente e usa um
            capuz, sem dúvida para esconder seu horrível rosto. Sige lhe deseja
            baixinho uma jornada frutífera e segura. Juntando suas coisas, você
            se apressa para o pátio. Sem tempo para cerimônias, você monta seu
            cavalo e abre caminho em meio à multidão no portão. Uma rápida
            passagem pelo Caminho de Flint o leva ao Grande Portão de Kallamehr.
          </p>
          <Button onClick={onItemClick} disabled={disable} variant="dark">
            Adquirur Medalhão de Sige
          </Button>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-around ">
          <Button variant="dark" onClick={() => goToRef(329)}>
            Continuar
          </Button>
        </div>
      </div>
    </div>
  );
};
export const Ref155 = ({ goToRef }) => {
  return (
    <div>
      <div className="row d-inline text-center">
        <div className="col vh-75">
          <h2 className="f1">Referência 155</h2>
          <img alt="imagem-da-sec" src="" height="250px" />

          <p>
            Andar até a próxima viila lhe toma boa parte da tarde. Pot agoraz
            você pensa, quem quer que tenha sido enviado como batedõr ao leste
            está quilômetros a sua frente, mesmo você tendo saído de Kallamehr
            antes deles. Quando finalmente alcança o vilarejo, e tratado com
            respeito. O ancião da vila reconhece o selo no pergaminho que você
            carrega e rapidamente lhe fornece o mais rápido cavalo da vila. Logo
            você está cavalgando pela estrada, tentando compensar algum tempo
            que perdeu. O sol está a meio caminho do seu encontro com a terra e
            as sombras se alargam sobre o caminho à sua volta, quando você vê um
            pacote na estrada à sua frente.
          </p>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-around ">
          <Button variant="dark" onClick={() => goToRef(301)}>
            Ignora-lo e continuar galopando
          </Button>
          <Button variant="dark" onClick={() => goToRef(249)}>
            Parar para examina-lo
          </Button>
        </div>
      </div>
    </div>
  );
};

export const Ref192 = ({ goToRef, setEne, ene }) => {
  const [displayButton, setDisplayButton] = useState(false);
  const onPerderEnergia = () => {
    setEne(ene - 2);
    setDisplayButton(true);
  };

  return (
    <div>
      <h1>Referência 192</h1>
      <p>
        Quando seu cavalo cai pra frente, você salta da sela, mas seu pé fica
        preso no estribo e você bate no chão. Você solta o pé e fica arrasado ao
        descobrir que a bela égua que escolheu agora está ferida. Não pode
        continuar sua jornada com ela, mas precisa procurar um novo cavalo.
      </p>
      <Button onClick={onPerderEnergia} disabled={displayButton} variant="dark">
        Perca 2 pontos de ENERGIA
      </Button>
      {displayButton ? (
        <div>
          <Button variant="dark" onClick={() => goToRef(155)}>
            Continuar
          </Button>
        </div>
      ) : (
        <p>Clique em perder energia para continuar</p>
      )}
    </div>
  );
};

export const Ref234 = ({ goToRef }) => {
  return (
    <div>
      <div className="row d-inline text-center">
        <div className="col vh-75">
          <h2 className="f1">Referência 268</h2>
          <img alt="imagem-da-sec" src="" height="250px" />
          <p>
            Um pouco mais à frente no caminho você entra em uma pequena
            clareira. No centro dela pode ver um pequeno monte de terra solta
            com uma abertura perfeitamente circular logo acima do nível do chão.
            Dela sai a mão negra de um homem, arranhando o solo solto como se
            tentando se agarrar. Quando você se aproxima, percebe que a cor é
            causada pela quantidade de formigas sobre ela.
          </p>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-around ">
          <Button variant="dark" onClick={() => goToRef(300)}>
            Correr ao socorro do homem, e tentar salvá-lo.
          </Button>
          <Button variant="dark" onClick={() => goToRef(211)}>
            Não se arriscar
          </Button>
        </div>
      </div>
    </div>
  );
};

export const Ref288 = ({ goToRef }) => {
  return (
    <div>
      <div className="row d-inline text-center">
        <div className="col vh-75">
          <h2 className="f1">Referência 288</h2>
          <img alt="imagem-da-sec-espelho" src="" height="250px" />
          <p>
            As poderosas muralhas que pareciam tão seguras quando você
            atravessou os portões da cidade, parecem menos fortes pelo lado de
            dentro. Uma cidade assustada está escondida por trás delas e olhando
            pela janela você sente o medo das pessoas. Virando-se, você se
            encotra encarando seu reflexo em um espelho ornamentado do outro
            lado. No que você se meteu? Você pode ser um herói, mas não
            significa que não pode ficar com medo. Você focaliza sua imagem no
            espelho, percebendo um reflexo distorcido da janela escura. De
            repente você está na escuridão, a não ser por um fraco velho brilho
            vermelho. Há um arranhar na janela, mas você é incapaz de desviar os
            olhos do espelho. Uma figura descolorida e horrivelmente assustadora
            arrasta-se pela abertura. Mais dedos retorcidos e mãos agarram o
            peitoril da janela atrás dele enquanto se arrasta pra você.
          </p>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-around ">
          <Button variant="dark" onClick={() => goToRef(174)}>
            Você grita e gira o corpo pra enfrentar o terror
          </Button>
        </div>
      </div>
    </div>
  );
};

export const Ref329 = ({ goToRef, setTempo, tempo, items }) => {
  const [disable, setDisable] = useState(false);
  const onButtonClick = () => {
    setTempo(tempo + 1);
    setDisable(true);
  };

  return (
    <div>
      <div className="row d-inline text-center">
        <div className="col vh-75">
          <h2 className="f1">Referência 329</h2>
          <img alt="imagem-da-sec" src="" height="250px" />
          <p>
            Você cavalga até a noite cair. Embora esteja ansioso paracontinuar,
            seu cavalo está cansado e seria perigoso continuar no escuro. Você
            desmonta e se prepara para a noite ao relento.
          </p>
          <Button variant="dark" onClick={onButtonClick} disabled={disable}>
            Risque uma caixa de tempo.
          </Button>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-around ">
          {items.includes("Medalhão de Sige") ? (
            <Button
              variant="dark"
              onClick={() => goToRef(63)}
              disabled={!disable}
            >
              Se tiver o medlhão de Sige
            </Button>
          ) : (
            <Button
              variant="dark"
              onClick={() => goToRef(367)}
              disabled={!disable}
            >
              Se não o tiver
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
