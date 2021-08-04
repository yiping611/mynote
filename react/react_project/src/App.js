import Todos from  './components/todos/index'
import Peoxy from './components/pexy/Peoxy'
import Search from './components/Search/index'

function App() {
  return (
    <div>
       <p className={'colorname'} style={{textAlign:'center'}}>3.axios案例GitHub搜素案例</p>
        <Search/>
        <p className={'colorname'}  style={{textAlign:'center'}}>2.axios</p>
       <Peoxy/>
       <p className={'colorname'} style={{textAlign:'center'}}>1.todos案例增删改查</p>
       <Todos/>

    </div>
  );
}

export default App;
