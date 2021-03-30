import '../styles/Cart.css';
import $ from 'jquery';
import Liste from '../components/List';

function list(){
    /*
    $(function() {
        $.ajax({
            url : "http://localhost:9000/",
            type : "GET",
            dataType: "json", 
            success : function(users, statut){ // success est toujours en place, bien sûr !
                
            },
            error : function(resultat, statut, erreur){
                console.log(resultat);
            }
         });
    });
    */

}

function Cart() {
    $(function() {
        $.ajax({
            url : "http://localhost:9000/list",
            type : "GET",
            dataType: "json", 
            success : function(users, statut){ // success est toujours en place, bien sûr !
                //alert(users[0]._id);
            },
            error : function(resultat, statut, erreur){
                console.log(resultat);
            }
         });
    });
    return (
        <div className="lmj-cart">
                <table className="users">
        <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
        </tr>
        <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany </td>
            <td><a className="button_users" href="#">Editer</a></td>
            <td><a className="button_users" href="#">Supprimer</a></td>
        </tr>
        <tr>
            <td>Berglunds snabbköp</td>
            <td>Christina Berglund</td>
            <td>Sweden</td>
            <td><a className="button_users" href="#">Editer</a></td>
            <td><a className="button_users" href="#">Supprimer</a></td>
        </tr>
    </table>
            
        </div>)
}

export default Cart