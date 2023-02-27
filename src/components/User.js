import user from "../assets/user-img.png";

function User() {
  return (
    <div className="user">
      <div className="left">
        <h5 className="section-title">USER MANAGEMENT</h5>
        <h1>Single Sign On</h1>
        <p>
          Jotform Enterprise offers SAML user authentication and integrations
          with popular enterprise products such as Active Directory, Okta,
          Google, and OneLogin. If you have other directory service solutions,
          contact Jotform to see how we can assist.
        </p>
      </div>
      <div className="right">
        <img src={user} alt="User Logo" />
      </div>
    </div>
  );
}

export default User;
