

const PostUser = () => {

    const handlePostUser = async (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        

        const myData = {
            name,
            email,
            password
        }
        console.log(myData)
        fetch('http://localhost:5001/users',{
            method: "POST",
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(myData),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            // if(data.acknowledged){
            //     alert("data posted successfully")
            // }
        })
    }
    return (
        <div>
            <h1>User:</h1>
            <form onSubmit={handlePostUser}>
                <input type="text" name="name" id="" />
                <br/>
                <input type="email" name="email" id="" />
                <br/>
                <input type="password" name="password" id="" />
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PostUser;