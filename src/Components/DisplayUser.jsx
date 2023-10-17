import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const DisplayUser = () => {
    const users = useLoaderData();
    const [updateUser,setUpdateUser] = useState(users)
    console.log(users)


    const handleDelete = (_id) => {
        console.log(_id)
        fetch(`http://localhost:5001/users/${_id}`,{
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                alert("Deleted count successfully")
            }
            
                const filterData = updateUser.filter(item => item._id !== _id)
                setUpdateUser(filterData)
            
        })
        

    }
    return (
        <div>
            <h2 className="text 2xl">User:</h2>
            
            {
                updateUser.map((user) => <div key={user._id}>
                    <h1>{user.name}</h1>
                    <button type="submit" onClick={ () => handleDelete(user._id)}>delete</button>
                    <Link to={`/users/${user._id}`}><button type="submit">Updated</button></Link>
                </div>)
                 
            }
           
        
        </div>
    );
};

export default DisplayUser;