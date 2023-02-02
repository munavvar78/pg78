import React from 'react'
import './block1.css'
const Block1 = () => {
  return (
    <div className='blockheader'>
        <div className='top'>
         <div className='topdiv'><h1>WhY Book My PG?</h1>
         <p>
          Our aim to develop website which can help <br></br>
          student to find their PG according to their<br></br>
          near college
         </p>
         </div>
         <div className='whypg'>
          <ul>
            <li className='why-pgo-property'>
              <div className='why-pgo-property-image'>
                <img src="https://www.gopgo.in/assets/new_look/homeWhypgoPocket-e020c49d048a091e3391aa8401d362dd38593ce1dabd7964c3d997261f7e4511.png" alt='paisa'></img>
              </div>
              <div className='why-pgo-property-detail'>
                <h3>Easier on the Pocket</h3>
                <p>No commuting to multiple locations, no brokerage fee,<br></br> no hidden costs because you deserve the best.</p>
              </div>
            </li>
            <li className='why-pgo-property'>
              <div className='why-pgo-property-image'>
                <img src="https://www.gopgo.in/assets/new_look/homeWhypgoSafe-ffe96efb8b6d6fc4a166441eb4a11ee35e76f2e689635267ecdd26de9dc03f54.png" alt='paisa'></img>
              </div>
              <div className='why-pgo-property-detail'>
                <h3>Easier on the Pocket</h3>
                <p>No commuting to multiple locations, no brokerage fee,<br></br> no hidden costs because you deserve the best.</p>
              </div>
            </li>
            <li className='why-pgo-property'>
              <div className='why-pgo-property-image'>
                <img src="https://www.gopgo.in/assets/new_look/homeWhypgoProperties-50f128fd04e79bbedffee03dac20cafabb5909463e73ead566dbe8067912f88f.png" alt='paisa'></img>
              </div>
              <div className='why-pgo-property-detail'>
                <h3>Easier on the Pocket</h3>
                <p>No commuting to multiple locations, no brokerage fee,<br></br> no hidden costs because you deserve the best.</p>
              </div>
            </li>
          </ul>
         </div>

        </div>
    </div>
  )
}

export default Block1