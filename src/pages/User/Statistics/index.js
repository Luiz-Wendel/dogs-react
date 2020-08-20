import React from 'react';

// API
import { STATS_GET } from '../../../api';

// Custom Hooks
import useFetch from '../../../hooks/useFetch';

// Components
import Head from '../../../components/Head';
import Loading from '../../../components/Loading';
import Error from '../../../components/Error';
import StatisticGraphs from '../../../components/StatisticsGraphs';

const Statistics = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }

    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <div>
        <Head title="Statistics" />
        <StatisticGraphs data={data} />
      </div>
    );
  else return null;
};

export default Statistics;
