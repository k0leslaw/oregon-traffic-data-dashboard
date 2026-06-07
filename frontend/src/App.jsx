import './App.css'

function App() {

  return (
    <div className='page-container'>
      <h2>Oregon Traffic Fatalities</h2>
      <div className='top-container'>
        <div className='legend-container'>
          legend
        </div>
        <div className='map-container'>
          map
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
