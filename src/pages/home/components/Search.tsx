export default function Search({
  setSearchKey
}: {
  setSearchKey: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
  const onChangeEvent = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKey(e.target.value);
  };

  return (
    <div className='p-4 h-20 w-full flex items-center justify-end gap-5'>
      <input
        type='text'
        className='h-10 w-[200px] border-[1px] rounded placeholder:text-center outline-none px-4'
        placeholder='Search'
        onChange={onChangeEvent}
      />
      <button
        type='button'
        className='lg:p-3 text-[12px] p-2 w-[200px] bg-green-secondary hover:cursor-pointer text-white poppins-bold rounded'
        onClick={() => {
          return window.alert('Currently Not Allowed');
        }}
      >
        Add New Policy
      </button>
    </div>
  );
}
