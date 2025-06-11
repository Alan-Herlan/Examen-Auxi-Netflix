import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import MovieDetails from './pages/MovieDetails';
import Search from './pages/Search';
import Login from './pages/Login/Login';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Recent from './pages/Recent/Recent';
import Collections from './pages/Collections/Collections';

export default function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recent" element={<Recent />} />
        <Route path="/collections" element={<Collections />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}













