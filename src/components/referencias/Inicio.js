import { Button } from "react-bootstrap";

export const Inicio = ({ goToRef }) => {
  return (
    <div>
      <h1>Início</h1>
      <img alt="inicio_imagem" src="../imagens/inicio.png" />
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
