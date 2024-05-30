type ButtonProps = {
  title: string;
  onClick: () => void;
}

export const Button = ({ title, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{title}</button>
}

type AvatarButtonProps = {
  title: string;
  onClick: () => void;
  avatarUrl: string;
}

export const AvatarButton = ({ title, onClick, avatarUrl }: AvatarButtonProps) => {
  const handleClick = () => {
    updateUserInfo();
    onClick();
  }

  return (
    <>
      <img src={avatarUrl} />
      <button onClick={handleClick}>{title}</button>
    </>
  )
}

const updateUserInfo = () => {
  fetch('update-user')
}
