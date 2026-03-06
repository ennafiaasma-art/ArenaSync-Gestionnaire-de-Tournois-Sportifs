
import Header from './components/Header'
import Input from './components/Input';
import StatusBadg from './components/StatusBadg';

import TournamentCard from './components/TournamentCard';


function App() {
  return (
 <div>
    <Header/>
    <Input/>
    <StatusBadg status="Pending"/>
    <div className="p-10">
      <TournamentCard />
    </div>
   
   

    
 </div>
    

  )



}



export default App;

