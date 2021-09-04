import React from 'react'
import { Table } from 'antd';
import 'antd/dist/antd.css';

function TableColumns({state,getImage}) {

    const columns = [
        {
            title: "Image",
            render: (Image) => {
                return (
                    <div style={{ textAlign: "center" }}>
                        <img src={getImage(Image)} style={{ height: "100px", width: "100px", borderRadius: "50px" }} />
                    </div>
                )
            },
            dataIndex: "Image",
        },
        {
            title: "Title",
            render: (Title) => {return (<div>{Title}</div>)},
            dataIndex: "Title",
        },
        {
            title: "Overview",
            render: (Overview) => {return (<div>{Overview}</div>)},
            dataIndex: "Overview",
        },
        {
            title: "Release Date",
            render: (Release) => {return (<div>{Release}</div>)},
            dataIndex: "release_date",
        },
    ];

    return (
        <div>
            <Table
                columns={columns}
                dataSource={state}
                pagination={{ pageSize: 50 }}
                scroll={{ y: 370 }}
            />
        </div>
    )
}

export default TableColumns
