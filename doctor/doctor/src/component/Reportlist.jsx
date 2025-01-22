import React from 'react';
import { useNavigate } from 'react-router-dom';
import './reportlist.css';

const Reportlist = (props) => {

   const navigate = useNavigate();

    let ket=props.name._id;
    console.log(props);

    function ViewAll() {
        navigate(`/report/${ket}`); 
    };


    return (
        <>
            <div className="reportlist">
                <div className="reportlistleft">
                    <div className="reportname">
                        {props.name.doctorName}
                    </div>
                </div>
                <div className="reportlistright">
                    <div className="reportview" onClick={ViewAll}>
                        View All
                    </div>
                </div>
            </div>
        </>
    );
};

export default Reportlist;
