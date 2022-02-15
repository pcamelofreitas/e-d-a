const Ref1 =({goToRef})=>{
    return(
        <div>
            <div className='row d-inline text-center'>
                <div  className='col vh-75'>
                    <h2 className='f1'>1</h2>
                    <img alt="imagem-da-sec" src=""height="250px"/>
                    <p>
                        Como você pode recusar tal apelo?
                        Os outros dez são rápidos em se oferecer para a missão, e sua voz se junta aos outros, jurando fidelidade a Lady Carolina.
                        Essa é sua chance de se tornar mais que um aventureiro, você será um verdadeiro herói de lendas!
                        Você ouve os quatros nobres falarem de seus planos.
                        Um de vocês precisa cavalgar para as passagens norte e chamar o exército, outro deve seguir para leste para investigar os invasores.
                        O resto deve permanecer em Kallamehr e usar de toda sua inteligência e iventividade para preparar uma defesa.
                        O que você vai fazer.
                        Voluntariar-se para
                    </p>
                </div>
            </div>
            <div>
            <div className='d-flex justify-content-around '>
                    <button onClick={goToRef(92)}>Vonluntariar-se Para Cavalgar para o norte até o exército?</button>
                    <button onClick={goToRef(104)}>Vonluntariar-se para investigar no leste?</button>
                    <button onClick={goToRef(288)}>Ficar para defender a cidade?</button>
                 </div>
            </div> 
        </div>
    )
}
export default Ref1;


// {
//     ref: 1,
//     img:'',
//     texto:
//       `Como você pode recusar tal apelo?
//       Os outros dez são rápidos em se oferecer para a missão, e sua voz se junta aos outros, jurando fidelidade a Lady Carolina.
//       Essa é sua chance de se tornar mais que um aventureiro, você será um verdadeiro herói de lendas!
//       Você ouve os quatros nobres falarem de seus planos.
//       Um de vocês precisa cavalgar para as passagens norte e chamar o exército, outro deve seguir para leste para investigar os invasores.
//       O resto deve permanecer em Kallamehr e usar de toda sua inteligência e iventividade para preparar uma defesa.
//       O que você vai fazer.
//       Voluntariar-se para
//       `,
//     btns: [
//       {
//         irpara: 92,
//         funcao: goToRef(92),
//         texto: 'Vonluntariar-se Para Cavalgar para o norte até o exército?'
//       },
//       {
//         irpara: 104,
//         funcao: goToRef(104),
//         texto: 'Vonluntariar-se para investigar no leste?'
//       },
//       {
//         irpara: 288,
//         funcao: goToRef(288),
//         texto: 'Ficar para defender a cidade?'
//       }
//     ]
//   }