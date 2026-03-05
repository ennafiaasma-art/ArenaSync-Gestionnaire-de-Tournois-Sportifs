
import Header from './components/Header'
import Input from './components/Input';
import StatusBadg from './components/StatusBadg';
import Card from './components/card';
import ParticipantRow from './components/ParticipantRow';


function App() {
  return (
 <div>
    <Header/>
    <Input/>
    <StatusBadg status="On Going"/>
    <Card/>
    <ParticipantRow
  avatar="foot.jpg"
  name="Ali Ahmed"
  status="Confirmed"
/>
   
   

    
 </div>
    

  )



}



export default App;

