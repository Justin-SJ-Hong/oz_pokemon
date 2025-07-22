import { Suspense, useEffect, lazy } from 'react'
import './App.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMultiplePokemonById } from './RTK/thunk'
import { Routes, Route, Link, useNavigate } from 'react-router'

const Main = lazy(() => import('./pages/Main'));
const Detail = lazy(() => import('./pages/Detail'));
const Search = lazy(() => import('./pages/Search'));
const Favorite = lazy(() => import('./pages/Favorite'));

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151))
  }, [])
  

  return (
    <>
      <h1 className='border-t-[50px] border-t-[red] bg-black text-white text-[40px] text-center'>포켓몬 도감</h1>
      <nav className='py-[10px] border-b-[5px] border-b-black flex gap-[10px] justify-center'>
        <Link to={'/'}>메인</Link>
        <Link to={'/favorite'}>찜</Link>
        <div>
          <input onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)} className='w-[120px] border-b border-[darkgray] px-2 gap-[20px]' />
          <span>🔎</span>
        </div>
        
      </nav>
      <main className='bg-[gray] flex flex-wrap gap-[20px] justify-center pt-[20px] pb-[20px]'>
        <Suspense fallback={<div>로딩중......</div>}>
          <Routes>
            <Route path={'/'} element={<Main />} />
            <Route path={'/detail/:pokemonId'} element={<Detail />} />
            <Route path={'/search'} element={<Search />} />
            <Route path={'/favorite'} element={<Favorite />} />
          </Routes>
        </Suspense>
      </main>
      
    </>
  )
}

export default App
