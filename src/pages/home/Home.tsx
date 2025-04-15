import { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import CardList, { ICardList } from './components/CardList';
import Header from './components/Header';
import Tables, { PoliciesListProps } from './components/Tables';
import { fetchInsuranceList } from '../../Api';
import Search from './components/Search';

interface IInsurancePoliciesListProps {
  rows: PoliciesListProps[];
  totalPolicies: number;
  totalPolicyTypes: number;
  totalCurrentPolicies: number;
}

export default function Home() {
  const [policies, setPolicies] = useState<IInsurancePoliciesListProps>();
  const [searchKey, setSearchKey] = useState<string>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isMenu, setMenu] = useState<boolean>(false);

  const fetchPolicies = async () => {
    try {
      setLoading(true);
      const data = await fetchInsuranceList();

      const result = data.data as IInsurancePoliciesListProps;

      setPolicies(result);
      setLoading(false);
    } catch (error) {
      console.log('failed to fetch API Data', error);
    }
  };

  useEffect(() => {
    fetchPolicies();
  }, []);

  const cardList: ICardList[] = [
    {
      text: 'Total Current Policies',
      count: policies?.totalCurrentPolicies ?? 0
    },
    {
      text: 'Total Policies',
      count: policies?.totalPolicies ?? 0
    },
    {
      text: 'Total Policy Types',
      count: policies?.totalPolicyTypes ?? 0
    }
  ];

  return (
    <div className='flex bg-[#f6f6f6]  lg:h-screen lg:gap-5 items-center lg:px-3'>
      <Sidebar isMenu={isMenu} setMenu={setMenu} />
      <div className='lg:w-7xl lg:h-full p-5 min-w-2xs'>
        <div className='lg:h-full lg:w-full flex flex-col gap-7'>
          <Header setMenu={setMenu} />

          <CardList cards={cardList} />

          <Search setSearchKey={setSearchKey} />

          <Tables data={policies?.rows || []} searchKey={searchKey} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}
