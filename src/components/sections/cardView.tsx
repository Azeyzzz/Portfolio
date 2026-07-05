type ShowCard = {
  cardName: string;
};
export default function ShowCard({ cardName }: ShowCard) {
  function handleClick() {
    alert(cardName);
  }

  return <button onClick={handleClick}>{cardName}</button>;
}
