import React from 'react'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const PgDetailDesc = ({data}) => {
  return (
    <>
    <div className="pgdetail-desc">
          <div className="pgdetail-desc-img">
            <img className="pgimage" src={data.file} alt="pgimg"></img>
          </div>
          <div className="pgdetail-desc-props">
            <div className="pgdetail-desc-address">{data.name},{data.select}</div>
            <ul className="pgdetail-desc-serv">
              <li className="pgdetail-desc-facu">
                <div className="pgdetail-desc-facu-amount">Deposite Amount</div>
                <div>{data.deposite}</div>
              </li>
              <li className="pgdetail-desc-facu">
                <div className="pgdetail-desc-facu-amount">Maintenance</div>
                <div style={{margin:"auto"}}>-</div>
              </li>
              <li className="pgdetail-desc-facu">
                <div className="pgdetail-desc-facu-amount">Notice Period</div>
                <div>1 Month</div>
              </li>
              <li className="pgdetail-desc-facu">
                <div className="pgdetail-desc-facu-amount">Electric  Charges</div>
                <div >-</div>
              </li>
              <li className="pgdetail-desc-facu">
                <div className="pgdetail-desc-facu-amount">Food Available</div>
                <div>{data.nonvegfood ? "Both":"Veg Only"}</div>
              </li>
              <li className="pgdetail-desc-facu">
                <div className="pgdetail-desc-facu-amount">AC Rooms</div>
                <div>{data.ac ? "Available":"N/A"}</div>
              </li>
              <li className="pgdetail-desc-facu">
                <div className="pgdetail-desc-facu-amount">Parking</div>
                <div>{data.parking ? "Available":"N/A"}</div>
              </li>
              <li className="pgdetail-desc-facu">
                <div className="pgdetail-desc-facu-amount">Power BackUp</div>
                <div>{data.powerbachup ? "Available":"N/A"}</div>
              </li>
              <li className="pgdetail-desc-facu">
                <div className="pgdetail-desc-facu-amount">Available For</div>
                <div>{data.gender}</div>
              </li>
              <li className="pgdetail-desc-facu">
                <div className="pgdetail-desc-facu-amount">Preferred Tenants</div>
                <div>All</div>
              </li>
              <li className="pgdetail-desc-facu">
                <div className="pgdetail-desc-facu-amount">TOtal Number Of Bed</div>
                <div>{data.numberbed}</div>
              </li>
              <li className="pgdetail-desc-facu">
                <div className="pgdetail-desc-facu-amount">Operating Since</div>
                <div>2020</div>
              </li>
            </ul>
            <div className="pgdetail-desc-college">
              <div><CheckCircleIcon/><span>Near By {data.nearcollege}</span></div>
            </div>
            <div>
            </div>
          </div>
        </div>
    </>
  )
}

export default PgDetailDesc