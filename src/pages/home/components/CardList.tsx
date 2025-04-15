export interface ICardList {
  text: string;
  count: number;
}

function Card({ text, count }: ICardList) {
  return (
    <div className='w-[360px] min-h-[128px] bg-white p-4 flex flex-col gap-3'>
      <p className='lg:text-xl poppins-bold text-black'>{count}</p>
      <p className='text-gray-500 lg:text-[16px] text-sm'>{text}</p>
    </div>
  );
}

export default function CardList({ cards }: { cards: ICardList[] }) {
  return (
    <div className='flex p-3 items-center gap-10 justify-center'>
      {cards.map(c => {
        return <Card text={c.text} count={c.count} key={c.text} />;
      })}
    </div>
  );
}
