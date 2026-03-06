
import Header from './components/Header'
import Input from './components/Input';
import StatusBadge from './components/StatusBadg';

import TournamentCard from './components/TournamentCard';


function App() {
  return (
 <div>
    <Header/>
    <Input/>
    <StatusBadge status="Pending"/>
    <div className="p-10">
      <TournamentCard />
    </div>
   
   

    
 </div>
    

  )



}



export default App;

