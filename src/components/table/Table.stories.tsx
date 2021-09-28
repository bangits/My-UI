import { withKnobs } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import Table from './Table';

export default {
  component: Table,
  decorators: [withKnobs],
  title: 'components/Table/Table'
};

export const Default = () => {
  const [table, setTable] = useState({});

  const data = React.useMemo(
    () => [
      {
        col1: (
          <img
            src='https://pnimg.net/w/articles/0/5e9/e84f2a9851.png'
            alt='beach'
            style={{ borderRadius: '2px', width: '20px', height: '20px' }}
          />
        ),
        col2: 'ID1',
        col3: 'ID7654321',
        col4: '60Burning Hot',
        col5: 'EGT',
        col6: 'Slots',
        col7: 'Mobile, Desktop',
        col8: '24/09/2021 12:00:56 AM',
        col9: 'Active'
      },
      {
        col1: (
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8naCH2wzUHSoovJfnc_GMpWkQe1ihzVmb23Jp0xu-U-XM0UwxHKR2-IaHVHEgfPoOVhE&usqp=CAU'
            alt='beach'
            style={{ borderRadius: '2px', width: '20px', height: '20px' }}
          />
        ),
        col2: 'ID2',
        col3: 'ID7654321',
        col4: '30Burning Hot',
        col5: 'EGT',
        col6: 'Blots',
        col7: 'Mobile, Desktop',
        col8: '24/09/2021 12:00:88 AM',
        col9: 'Active'
      },
      {
        col1: (
          <img
            src='https://www.casinowow.com/media/uploads/Shining-Crown-Icon-190x190.png'
            alt='beach'
            style={{ borderRadius: '2px', width: '20px', height: '20px' }}
          />
        ),
        col2: 'ID3',
        col3: 'ID7654321',
        col4: '10Burning Hot',
        col5: 'EGT',
        col6: 'Lots',
        col7: 'Mobile, Desktop',
        col8: '24/09/2021 12:00:44 AM',
        col9: 'Active'
      },
      {
        col1: (
          <img
            src='https://cdn.softswiss.net/i/s3/egt/40SuperHot.png'
            alt='beach'
            style={{ borderRadius: '2px', width: '20px', height: '20px' }}
          />
        ),
        col2: 'ID4',
        col3: 'ID7654321',
        col4: '50Burning Hot',
        col5: 'EGT',
        col6: 'Alfa',
        col7: 'Mobile, Desktop',
        col8: '24/09/2021 12:00:25 AM',
        col9: 'Active'
      }
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'ICON',
        accessor: 'col1'
      },
      {
        Header: 'GAME ID',
        accessor: 'col2'
      },
      {
        Header: 'EXTERNAL ID',
        accessor: 'col3'
      },
      {
        Header: 'GAME NAME',
        accessor: 'col4'
      },
      {
        Header: 'PROVIDER ID',
        accessor: 'col5'
      },
      {
        Header: 'CATEGORY',
        accessor: 'col6'
      },
      {
        Header: 'VERSION',
        accessor: 'col7'
      },
      {
        Header: 'RELEASE DATE AND TIME',
        accessor: 'col8'
      },
      {
        Header: 'USER STATUS',
        accessor: 'col9'
      }
    ],
    []
  );

  const fetch = (...args) => {
    setTable({ ...args });
    return {
      ...args
    };
  };

  return <Table data={data} fetch={fetch} columns={columns} />;
};
