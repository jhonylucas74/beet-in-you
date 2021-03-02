import React from 'react';
import * as style from './UserList.styles'
import { ClickFunction } from '@interfaces/Functions';

type User = {
  username: string
  emoji: string
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
  return (
    <style.Side>
      <h5>{title}</h5>
      <style.Users>
        {users.map((user, i) =>
          <style.User key={user.username}>
            {showRank &&<>
              <b>500</b> <span>{i + 1}°</span>
            </>} {user.emoji} {user.username}
          </style.User>
        )}
      </style.Users>

      {showAction && <style.Button onClick={handleAction}>{actionText}</style.Button>}
    </style.Side>
  )
};

export default UserList;