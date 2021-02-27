import React from 'react';
import * as style from './WaitBox.styles'

type User = {
  username: string
}

type WaitBoxProps = {
  users: User []
};


const WaitBox : React.FC<WaitBoxProps> = ({
  users = []
}) => {
  return (
    <style.WaitBox>
      <style.Side>
        <h5>Jogadores</h5>
        <style.Users>
          {users.map((user, i) =>
            <style.User key={user.username}>
              <b>500 🐝</b> <span>{i + 1}°</span> {user.username}
            </style.User>
          )}
        </style.Users>

        <style.Button>Iniciar partida</style.Button>
      </style.Side>
      <style.Config>
          <h4><b>Bee't</b> in you!</h4>
          <p>Todos os jogadores começam com 500 <b>beecoins</b> e a cada 
            rodada é necessário apostar 10, 20 ou 30 dessas moedas. 
            O jogador que tiver mais 
            moedas acumuladas no final do jogo ganha.</p>
          <style.Button>Copiar link de convite</style.Button>
      </style.Config>
    </style.WaitBox>
  )
};

export default WaitBox;