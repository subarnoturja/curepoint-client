import { useState } from 'react';
import Error from '../../components/Error/Error';
import Loading from '../../components/Loader/Loading';
import { BASE_URL } from '../../config';
import useGetProfile from '../../hooks/useFetchData'
import Tabs from './Tabs';

const Dashboard = () => {

    const { data, loading, error } = useGetProfile(`${BASE_URL}/doctors/profile/me`)

    const [tab, setTab] = useState('overview');

    return (
        <section>
            <div className="max-w-[1170px] px-5 mx-auto">
            {loading && !error && <Loading />}
            {error && !loading && <Error />}
            {
                !loading && !error && <div className='grid md:grid-cols-3 gap-[30px] md:gap-[50px]'>
                    <Tabs tab={tab} setTab={setTab} />
                </div>
            }
            </div>
        </section>
    );
};

export default Dashboard;