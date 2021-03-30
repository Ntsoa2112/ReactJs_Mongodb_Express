import '../styles/Cart.css';
import React, { useState } from 'react'
import $ from 'jquery';
function users_list(){
    $(function() {
        $.ajax({
            url : "http://localhost:9000/list",
            type : "GET",
            dataType: "json", 
            success : function(user, statut){ 
                   
            },
            error : function(resultat, statut, erreur){
                console.log(resultat);
            }
        });
    });
}  

function Liste(){
    /*
    $(function() {
        $.ajax({
            url : "http://localhost:9000/list",
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

   return(
       <di>
           <table className="users">
                <tr>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Email</th>
                </tr>
                
            </table>
       </di>
   )
    
}

export default Liste