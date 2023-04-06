import * as React from 'react';

export const App = () => {
  return (
    <>
      <div id='test_frame' className='frame'>
        <span>Test Functions</span>
        <div id='test_buttons_a'>
          <button id='add_1' className='na-button na-button-red'>
            Add 1
          </button>
          <button id='add_10' className='na-button na-button-red'>
            Add 10
          </button>
          <button id='add_100' className='na-button na-button-red'>
            Add 100
          </button>
          <button id='add_1000' className='na-button na-button-red'>
            Add 1000
          </button>
          <div style={{ width: '1rem' }}></div>
          <button id='all_online' className='na-button'>
            All Online
          </button>
          <button id='all_offline' className='na-button'>
            All Offline
          </button>
          <button id='random_online' className='na-button'>
            Random Online/Offline
          </button>
          <div style={{ width: '1rem' }}></div>
          <button id='filter_none' className='na-button na-button-green'>
            Filter: None
          </button>
          <button id='filter_na' className='na-button na-button-green'>
            Filter: NA
          </button>
          <button id='filter_tmb' className='na-button na-button-green'>
            Filter: TMB
          </button>
        </div>
        <div id='test_buttons_b'>
          <button id='all_update' className='na-button'>
            Update All
          </button>
          <button id='first_10_update' className='na-button'>
            Update First 10
          </button>
          <button id='first_100_update' className='na-button'>
            Update First 100
          </button>
          <button id='random_update_50' className='na-button'>
            Update Random 50%
          </button>
          <button id='random_update_2' className='na-button'>
            Update Random 2%
          </button>
          <div style={{ width: '1rem' }}></div>
          <button id='sort_uid' className='na-button na-button-green'>
            Sort By UID
          </button>
          <button id='sort_address' className='na-button na-button-green'>
            Sort By Address
          </button>
          <button id='sort_manufacturer' className='na-button na-button-green'>
            Sort By Manufacturer
          </button>
        </div>
      </div>
      <div id='list_frame' className='frame'>
        {/* <span>
          RDM Device List ({`${FILTER_VISIBLE_COUNT}/${DEVICE_COUNT}`} |{' '}
          {`${FILTER_MODE}`} | {`${SORT_MODE}`})
        </span> */}

        <div id='rdm_device_list'>
          <table className='na-table' style={{ width: '100%' }}>
            <tr className='rdm-list-header na-table-header'>
              <th style={{ minWidth: '1rem', maxWidth: '1rem' }}></th>
              <th style={{ minWidth: '6rem', maxWidth: '6rem' }}>UID</th>
              <th style={{ minWidth: '12rem' }}>LABEL</th>
              <th style={{ minWidth: '8rem' }}>MANUFACTURER</th>
              <th style={{ minWidth: '12rem' }}>MODEL</th>
              <th style={{ minWidth: '12rem' }}>MODE</th>
              <th style={{ minWidth: '6rem' }}>ADDRESS</th>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};
