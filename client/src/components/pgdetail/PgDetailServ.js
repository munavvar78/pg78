import React from 'react'
import WifiIcon from '@mui/icons-material/Wifi';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import PersonIcon from '@mui/icons-material/Person';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import { FaTransgender, FaTshirt, FaWifi } from 'react-icons/fa';
import {GiHotMeal, GiMeal} from 'react-icons/gi';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import CelebrationIcon from '@mui/icons-material/Celebration';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

// import CleaningServices from '@mui/icons-material/CleaningServices';

const PgDetailServ = ({data}) => {
  return (
    <div>
    <div className='pgdetail-desc-amenitites'>
        <h2>Comman Area and Amenities</h2>
            <ul className='pgdetail-desc-list'>
                <li className='pgdetail-desc-list-style'>
                    <div className='pgdetail-desc-amentities'>
                    <WifiIcon style={{fontSize:"50px"}}/>
                    <span className='props'>WIFI</span>
                    </div>
                    <div className='pgdetail-desc-check'>
                    {data.wifi ? <CheckCircleOutlineIcon/> : <HighlightOffIcon/>}
                    </div>
                </li>               
                <li className='pgdetail-desc-list-style'>
                    <div className='pgdetail-desc-amentities'>
                    <BatteryFullIcon style={{fontSize:"50px"}}/>
                    <span className='props'>Power BackUp</span>
                    </div>
                    <div className='pgdetail-desc-check'>
                    {data.powerbackup ? <CheckCircleOutlineIcon/> : <HighlightOffIcon/>}
                    </div>
                </li>               
                <li className='pgdetail-desc-list-style'>
                    <div className='pgdetail-desc-amentities'>
                    <CleaningServicesIcon style={{fontSize:"50px"}}/><span className='props'>Room Services</span>
                    </div>
                    <div className='pgdetail-desc-check'>
                    {data.roomcleaning ? <CheckCircleOutlineIcon/> : <HighlightOffIcon/>}
                    </div>
                </li>               
                <li className='pgdetail-desc-list-style'>
                    <div className='pgdetail-desc-amentities'>
                    <LocalParkingIcon style={{fontSize:"50px"}}/>
                    <span className='props'>Parking</span>
                    </div>
                    <div className='pgdetail-desc-check'>
                    {data.parking ? <CheckCircleOutlineIcon/> : <HighlightOffIcon/>}
                    </div>
                </li>               
                <li className='pgdetail-desc-list-style'>
                    <div className='pgdetail-desc-amentities'>
                    <FaTshirt style={{fontSize:"50px"}}/><span className='props'>Laundry</span>
                    </div>
                    <div className='pgdetail-desc-check'>
                    {data.wifi ? <CheckCircleOutlineIcon/> : <HighlightOffIcon/>}
                    </div>
                </li>               
                <li className='pgdetail-desc-list-style'>
                    <div className='pgdetail-desc-amentities'>
                    <PersonIcon style={{fontSize:"50px"}}/>
                    <span className='props'>Reception</span>
                    </div>
                    <div className='pgdetail-desc-check'>
                    {data.reception ? <CheckCircleOutlineIcon/> : <HighlightOffIcon/>}
                    </div>
                </li>               
            </ul>
            <div>
           
            </div>
    </div>
    <div className='pgdetail-desc-amenitites'>
        <h2>Food And Kitchen</h2>
            <ul className='pgdetail-desc-list'>
                <li className='pgdetail-desc-list-style'>
                    <div className='pgdetail-desc-amentities'>
                    <GiMeal style={{fontSize:"50px"}}/>
                    <span className='props'>Food Available</span>
                    </div>
                    <div className='pgdetail-desc-check'>
                    {data.foodavailable ? <CheckCircleOutlineIcon/> : <HighlightOffIcon/>}
                    </div>
                </li>               
                <li className='pgdetail-desc-list-style'>
                    <div className='pgdetail-desc-amentities'>
                    <GiHotMeal style={{fontSize:"50px"}}/>
                    <span className='props'>{data.nonvegfood ? "Veg/NonVeg":"Veg Only"}</span>
                    </div>
                    <div className='pgdetail-desc-check'>
                    {data.powerbackup ? <CheckCircleOutlineIcon/> : <HighlightOffIcon/>}
                    </div>
                </li>               
                <li className='pgdetail-desc-list-style'>
                    <div className='pgdetail-desc-amentities'>
                    <RestaurantIcon style={{fontSize:"50px"}}/><span className='props'>Food Charges</span>
                    </div>
                    <div className='pgdetail-desc-check'>
                    {data.foodcharges ? <CheckCircleOutlineIcon/> : <HighlightOffIcon/>}
                    </div>
                </li>                            
            </ul>
    </div>
    <div className='pgdetail-desc-amenitites'>
        <h2>Other Charges</h2>
            <ul className='pgdetail-desc-list'>
                <li className='pgdetail-desc-list-style'>
                    <div className='pgdetail-desc-amentities'>
                    <AccountBalanceWalletIcon style={{fontSize:"50px"}}/>
                    <span className='props'>Deposite Amount</span>
                    </div>
                    <div className='pgdetail-desc-check'>
                   ₹{data.deposite }
                    </div>
                </li>               
                <li className='pgdetail-desc-list-style'>
                    <div className='pgdetail-desc-amentities'>
                    <FaTshirt style={{fontSize:"50px"}}/>
                    <span className='props'>Laundry</span>
                    </div>
                    <div className='pgdetail-desc-check'>
                    {data.wifi ? <CheckCircleOutlineIcon/> : <HighlightOffIcon/>}
                    </div>
                </li>                                          
            </ul>
    </div>
    <div className='pgdetail-desc-amenitites'>
        <h2>House Rules</h2>
            <ul className='pgdetail-desc-list'>
                <li className='pgdetail-desc-list-style'>
                    <div className='pgdetail-desc-amentities'>
                    <CalendarTodayIcon style={{fontSize:"50px"}}/>
                    <span className='props'>Notice Period</span>
                    </div>
                    <div className='pgdetail-desc-check'>
                    {data.noticeperiod ? <CheckCircleOutlineIcon/> : <HighlightOffIcon/>}
                    </div>
                </li>               
                <li className='pgdetail-desc-list-style'>
                    <div className='pgdetail-desc-amentities'>
                    <PersonIcon style={{fontSize:"50px"}}/>
                    <span className='props'>Visitor Entry</span>
                    </div>
                    <div className='pgdetail-desc-check'>
                    {data.visitorentry ? <CheckCircleOutlineIcon/> : <HighlightOffIcon/>}
                    </div>
                </li>               
                <li className='pgdetail-desc-list-style'>
                    <div className='pgdetail-desc-amentities'>
                    <RestaurantIcon style={{fontSize:"50px"}}/><span className='props'>Non VegFood</span>
                    </div>
                    <div className='pgdetail-desc-check'>
                    {data.nonvegfood ? <CheckCircleOutlineIcon/> : <HighlightOffIcon/>}
                    </div>
                </li>                            
                <li className='pgdetail-desc-list-style'>
                    <div className='pgdetail-desc-amentities'>
                    <FaTransgender style={{fontSize:"50px"}}/><span className='props'>Opposite Gender</span>
                    </div>
                    <div className='pgdetail-desc-check'>
                    {data.oppositegender ? <CheckCircleOutlineIcon/> : <HighlightOffIcon/>}
                    </div>
                </li>                            
                <li className='pgdetail-desc-list-style'>
                    <div className='pgdetail-desc-amentities'>
                    <SmokingRoomsIcon style={{fontSize:"50px"}}/><span className='props'>Smoking</span>
                    </div>
                    <div className='pgdetail-desc-check'>
                    {data.smoking ? <CheckCircleOutlineIcon/> : <HighlightOffIcon/>}
                    </div>
                </li>                            
                <li className='pgdetail-desc-list-style'>
                    <div className='pgdetail-desc-amentities'>
                    <InvertColorsIcon style={{fontSize:"50px"}}/><span className='props'>Drinking</span>
                    </div>
                    <div className='pgdetail-desc-check'>
                    {data.drinking ? <CheckCircleOutlineIcon/> : <HighlightOffIcon/>}
                    </div>
                </li>                            
                <li className='pgdetail-desc-list-style'>
                    <div className='pgdetail-desc-amentities'>
                    <MusicNoteIcon style={{fontSize:"50px"}}/><span className='props'>Loud Music</span>
                    </div>
                    <div className='pgdetail-desc-check'>
                    {data.loudmusic ? <CheckCircleOutlineIcon/> : <HighlightOffIcon/>}
                    </div>
                </li>                            
                <li className='pgdetail-desc-list-style'>
                    <div className='pgdetail-desc-amentities'>
                    <CelebrationIcon style={{fontSize:"50px"}}/><span className='props'>Party</span>
                    </div>
                    <div className='pgdetail-desc-check'>
                    {data.party ? <CheckCircleOutlineIcon/> : <HighlightOffIcon/>}
                    </div>
                </li>                            
            </ul>
    </div>
    </div>
    )
}

export default PgDetailServ