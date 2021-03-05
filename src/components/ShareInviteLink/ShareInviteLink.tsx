import React from 'react';
import * as style from './ShareInviteLink.styles'

type ShareInviteLinkProps = {
  host: {
    isHost: boolean,
    id: string
  },
  show: boolean
} 

const ShareInviteLink : React.FC<ShareInviteLinkProps> = ({
  host,
  show
}) => {
  if (!show) return null;

  const handleCopy = () => {
    const el = document.createElement('textarea');
    el.value = `${window.location.origin}?hostId=${host.id}`;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }

  return (
    <style.Content>
      <h4><b>Bee't</b> in you!</h4>
      <p>Todos os jogadores começam com 500 <b>beecoins</b> e a cada 
        rodada é necessário apostar 10, 20 ou 30 dessas moedas. 
        O jogador que tiver mais 
        moedas acumuladas no final do jogo ganha.</p>
      <style.Button onClick={handleCopy}>Copiar link de convite</style.Button>
    </style.Content>
  )
};

export default ShareInviteLink;