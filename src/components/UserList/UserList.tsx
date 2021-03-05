import React from 'react';
import * as style from './UserList.styles'
import { ClickFunction } from '@interfaces/Functions';

type User = {
  username: string
  emoji: string
  becoins: string | number
}

type UserListProps = {
  users: User [],
  title?: string,
  showRank?: boolean,
  showAction?: boolean,
  handleAction: ClickFunction,
  actionText?: string
};

const UserList : React.FC<UserListProps> = ({
  users = [],
  title = 'Jogadores',
  showRank = false,
  showAction = true,
  handleAction,
  actionText = 'Iniciar partida'
}) => {

  const getSorted = () => {
    return [...users].sort((a: any, b: any) => {
      if (a.becoins > b.becoins) return -1;
      if (a.becoins < b.becoins) return 1;
      return 0
    })
  }

  return (
    <style.Side>
      <h5>{title}</h5>
      <style.Users>
        {getSorted().map((user: any, i: number) =>
          <style.User key={user.username}>
            {showRank &&<>
              <b>{user.becoins}</b> <span>{i + 1}°</span>
            </>} {String.fromCodePoint(parseInt(user.emoji, 16))} {user.username}
          </style.User>
        )}
      </style.Users>

      {showAction && <style.Button onClick={handleAction}>{actionText}</style.Button>}
    </style.Side>
  )
};

export default UserList;