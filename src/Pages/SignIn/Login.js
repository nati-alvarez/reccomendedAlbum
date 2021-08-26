import DiscogsLogo from "../../assets/discogsLogo.png";

function Login(props) {
  function authorize() {
    // window.location = "https://rlca-backend.herokuapp.com/authorize";
    window.location = "https://rlca-backend.herokuapp.com/authorize";
  }

  return (
    <div className="loginContainerMain">
      <img className="discogsLogo" src={DiscogsLogo} alt="discogsLogo" />
      <p>
        sonic architecture uses oauth authentication to access the discogs
        database, discogs is the largest and most comprehensive music database
        on the planet.
      </p>

      <p>
        more than 595,000 people have contributed some piece of knowledge, to
        build up a catalog of more than 14,319,858 recordings and 7,697,070
        artists.
      </p>
      <p>
        by creating an account, or logging in with your existing account, you
        can currate sonic architecture to catalog your favorite record labels
        and releases.
      </p>

      <button onClick={authorize}>Log-in using your discogs account</button>
    </div>
  );
}

export default Login;
