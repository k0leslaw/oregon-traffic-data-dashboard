import { useState, useEffect } from 'react'

import Map from './components/Map/Map'

import './App.css'

function App() {
  const [mockCountyData, setMockCountyData] = useState([
    { COUNTY_NAME: "BAKER", bucket_A: 1, bucket_B: 1 },
    { COUNTY_NAME: "MULTNOMAH", bucket_A: 3, bucket_B: 3 },
    { COUNTY_NAME: "LANE", bucket_A: 1, bucket_B: 3 },
    { COUNTY_NAME: "MARION", bucket_A: 2, bucket_B: 2 },
    { COUNTY_NAME: "DESCHUTES", bucket_A: 3, bucket_B: 1 },
  ]);

  return (
    <div className='page-container'>
      <h2>Oregon Traffic Fatalities</h2>
      <div className='top-container'>
        <div className='legend-container'>
          legend
        </div>
        <div className='map-container'>
          <Map countyData={mockCountyData} />
        </div>
        <div className='filters-container'>
          filters
        </div>
      </div>
      <div className='bottom-container'>
        <div className='type-gc graphic-container'>
          type
        </div>
        <div className='bubble-gc graphic-container'>
          bubble
        </div>
        <div className='uncertainty-gc graphic-container'>
          uncertainty
        </div>
      </div>
    </div>
  )
}

export default App
