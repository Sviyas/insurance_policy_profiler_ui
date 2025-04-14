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

  const fetchPolicies = async () => {
    try {
      const data = await fetchInsuranceList();

      const result = data.data as IInsurancePoliciesListProps;

      setPolicies(result);
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
    <div className='flex bg-[#f6f6f6] h-screen gap-5 items-center px-3'>
      <Sidebar />
      <div className='w-7xl h-full p-5'>
        <div className='h-full w-full flex flex-col gap-7'>
          <Header />

          <CardList cards={cardList} />

          <Search setSearchKey={setSearchKey} />

          <Tables data={policies?.rows || []} searchKey={searchKey} />
        </div>
      </div>
    </div>
  );
}
