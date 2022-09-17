import React from "react";
import { } from "./Users.css"
const Users = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Button</th>
                </tr>
            </thead>
            <tbody >
                {props.myItems && props.myItems.length > 0 ? props.myItems.map((item, i) => {
                    return (
                        <tr key={i} >
                            <td>{item.id}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>
                                <button className="edit-btn" onClick={() => props.updateUser(i)}>Edit</button>
                                &nbsp;
                                <button className="delete-btn" onClick={() => props.deleteUser(i)}>Delete</button>
                            </td>
                        </tr>
                    );
                }) : "No data available"}
            </tbody>
        </table>
    );
};

export default Users;
