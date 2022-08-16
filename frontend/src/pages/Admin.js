import AdminForm from "../components/admin/AdminForm"

const Admin = (props) => {
    return (
        <div className="admin">
            <h2>Add a post...</h2>
               <div className="form-section">
               <div className="input-img-div">
               <img src= "https://res.cloudinary.com/dsdekztdq/image/upload/v1660299385/20200705_094526_rfieai.jpg" alt="img" />

                </div>
               <AdminForm fetchPosts={props.fetchPosts}/>
                </div>
        </div>
    )
}
export default Admin;