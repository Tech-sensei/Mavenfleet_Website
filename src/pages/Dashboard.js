import '../Admin.css'
import Sidebar from '../components/Sidebar/Sidebar';
import MainDash from '../components/MainDash/MainDash';

function Dashboard() {

    return (
        <div className="App">
            <div className='AppGlass-left'>
                <Sidebar />
            </div>
            <div className="AppGlass">
                <MainDash />
            </div>
        </div>

    );

}

export default Dashboard;