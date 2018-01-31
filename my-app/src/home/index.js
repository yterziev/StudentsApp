import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const Home = ({ cardsCount }) => (
    <div className="project-info">
        <h1>Trololo Board</h1>
        <p>There are {cardsCount} tasks on board</p>
        <span>Type task text and executor name. Click on card to move to another list.</span>
        <div>
        <Link to="/list"><button>safd</button></Link>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return { 
        cardsCount: state.length
    };
};

export default connect(mapStateToProps)(Home);