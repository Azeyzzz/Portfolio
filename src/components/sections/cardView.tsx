function triggerCardAlert(cardName: string) {
  alert(cardName);
}

export default function ShowCardComponent() {
  return (
    <button
      onClick={() => triggerCardAlert("hi")}
      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded cursor-pointer transition-colors"
    >
      Professional Experience
    </button>
  );
}
