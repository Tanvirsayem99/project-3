import React from 'react';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import JobCategory from '../JobCategory/JobCategory';
import Header from './navbar/Header/Header';
import Navbar from './navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <JobCategory></JobCategory>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;