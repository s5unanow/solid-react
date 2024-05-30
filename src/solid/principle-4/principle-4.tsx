type Item = {
  id: string;
  name: string;
  quantity: number
}

type ItemCardProps = Item;

export const ItemCard = ({ id, name, quantity }: ItemCardProps) => {
  return <>
  <div>Name: {name}</div>
  <div>Quantity: {quantity}</div>
  <ItemButtons id={id} />
  </>
}

type ItemButtonsProps = Pick<ItemCardProps, 'id'>

const ItemButtons = ({ id }: ItemButtonsProps) => {
  const increase = () => fetch(`increase/${id}`);
  const decrease = () => fetch(`decrease/${id}`);

  return <>
  <button onClick={increase}>Increase Amount</button>
  <button onClick={decrease}>Decrease Amount</button>
  </>
}