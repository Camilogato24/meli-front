import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import SearchBox from '../components/searchBox/SearchBox';
import ResultSearch from '../components/resultSearch/ResultSearch';
import DetailProduct from '../components/detailProduct/DetailProduct';


const RoutesComponent: React.FC = () => {
    return (
        <Router>
            <SearchBox />
            <Routes>
                <Route path="/items" element={<ResultSearch />} />
                <Route path="/items/:id" element={<DetailProduct />} />
            </Routes>
        </Router>
    );
};

export default RoutesComponent;