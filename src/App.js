import { Stack } from '@mui/material';
import './App.css';
import JoinMember from './components/JoinMember';

function App() {
  return (
    <div className="App">
      <Stack mt={4} mb={4}> {/* New Car 버튼 위아래여백 */}
            <JoinMember />
      </Stack>      
    </div>
  );
}

export default App;
