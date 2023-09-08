import logo from './logo.svg';
import './App.css';
import Main from './pages/Main';
import Maintest from './pages/Maintest';
import { Route, Routes } from 'react-router-dom';




function App() {

// 함수.변수쓰기 html금지

  // const [] = ("");









// 로드가 되고 실행되는 함수 (3줄)
// useEffect(()=>{
//   console.log(quizList)
// },[quizList])
  return (
   <>



<Routes>
  <Route path="/" element={<info />} />
  <Route path="/Main" element={<Main/>} />
  <Route path="/Maintest" element={<Maintest/>} />
</Routes>









    </>
    
  );
}

export default App;
