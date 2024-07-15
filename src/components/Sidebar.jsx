import React from 'react';
import dataSide from '../assets/data/dataSide';
import { Link } from 'react-router-dom';

const Item = ({ name, data }) => {
    if (name === "Ana Sayfa") {
        return (
            <Link to="/"  >
                <div className='w-[220px] flex items-center space-x-5 p-2 hover:bg-gray-200 cursor-pointer'>
                    <span>{data.icon}</span>
                    <span>{data.name}</span>
                </div>
            </Link>
        );
    } else {
        return (
            <Link to="/empty" >
                <div className='w-[220px] flex items-center space-x-5 p-2 hover:bg-gray-200 cursor-pointer'>
                    <span>{data.icon}</span>
                    <span>{data.name}</span>
                </div>
            </Link>
        );
    }
};

const Sidebar = () => {
    return (
        <div className='w-[240px] p-2 space-y-3 border-r h-screen'>
            {dataSide.map((data, i) => (
                <Item name={data.name} data={data} key={data.id} />
            ))}
        </div>
    );
};

export default Sidebar;
