import React from 'react';
import * as style from './ShareInviteLink.styles'

type ShareInviteLinkProps = {
  token: string,
  show: boolean
} 

const ShareInviteLink : React.FC<ShareInviteLinkProps> = ({
  token,
  show
}) => {
  if (!show) return null;

  return (
    <style.Content>
      <h4><b>Bee't</b> in you!</h4>
      <p>Todos os jogadores começam com 500 <b>beecoins</b> e a cada 
        rodada é necessário apostar 10, 20 ou 30 dessas moedas. 
        O jogador que tiver mais 
        moedas acumuladas no final do jogo ganha.</p>
      <style.Button>Copiar link de convite</style.Button>
    </style.Content>
  )
};

export default ShareInviteLink;