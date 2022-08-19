import AdminForm from "../components/admin/AdminForm";

const Admin = (props) => {
  return (
    <div className="form-section">
      <img className="form-img admin-img" src="https://res.cloudinary.com/dsdekztdq/image/upload/v1660299385/20200705_094526_rfieai.jpg" alt="img" />
      <AdminForm fetchPosts={props.fetchPosts} />
    </div>
  )
}
export default Admin;