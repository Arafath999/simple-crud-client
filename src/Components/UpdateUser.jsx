import { useLoaderData } from "react-router-dom";


const UpdateUser =  () => {
    const singleData = useLoaderData();
    console.log(singleData)
    const handleUpdateUser = async (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        

        const UpdateData = {
            name,
            email,
            password
        }
        console.log(UpdateData)
        fetch(`http://localhost:5001/users/${singleData._id}`,{
            method: "PUT",
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(UpdateData),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            // if(data.acknowledged){
            //     alert("data posted successfully")
    })

    }
    return (
        <div>
            <h2 className="text-2xl">User: </h2>
            <form onSubmit={handleUpdateUser}>
                <input type="text" defaultValue={singleData?.name} name="name" id="" />
                <br/>
                <input type="email" defaultValue={singleData?.email} name="email" id="" />
                <br/>
                <input type="password" defaultValue={singleData?.password} name="password" id="" />
                <br/>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateUser;