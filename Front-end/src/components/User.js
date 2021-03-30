import '../styles/User.css'

function User() {
    return (
        <div >
            <h1 className='lmj-title'>Créer/modifier les utilisateurs</h1>
            <a href="http://localhost:9000/" className="button">Liste utilisateur</a><br></br>
            <form action="/action_page.php">
                <div className="row">
                    <div className="col-25">
                    <label for="fname">Nom</label>
                    </div>
                    <div className="col-75">
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                    <label for="lname">Prénom</label>
                    </div>
                    <div className="col-75">
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                    <label for="lname">Email</label>
                    </div>
                    <div className="col-75">
                    <input type="email" name="email" placeholder="Your email.."></input>
                    </div>
                </div>
                <div className="row_sub">
                    <input type="submit" className="btn_sub" value="Submit"></input>
                    <a href="/Annuler" className="btn_sub liste">Annuler</a>
                </div>
            </form>
        </div>
    )
}
export default User