import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PatientList from './components/PatientList';
import PatientDetail from './components/detailsPatient';
import PatientAdd from './components/createPatient';
import PatientEdit from './components/updatePatient';
import Footer from './components/footer';
import Navbar from './components/Navbar';
import HomePage from './components/homePage';
import './App.css'

const App = () => {
    return (
        <Router>
            <div className="box-container">
                <Navbar />
                <Routes>
                    <Route path="/list" element={<PatientList />} />
                    <Route path="/add" element={<PatientAdd />} />
                    <Route path="/edit/:id" element={<PatientEdit />} />
                    <Route path="/detail/:id" element={<PatientDetail />} />
                    <Route exact path='/' element={<HomePage />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
};

export default App;