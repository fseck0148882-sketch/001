const users=[{prenom:"Fatou",nom:"Fall",etat:0,age:18,role:"admin"},
            {prenom:"Modou",nom:"Diop",etat:1,age:24,role:"user"},
            {prenom:"Amy",nom:"Seck",etat:0,age:15,role:"admin"},
            {prenom:"Moussa",nom:"Ndiaye",etat:1,age:28,role:"user"},
            {prenom:"Khady",nom:"Gueye",etat:0,age:25,role:"admin"},
            {prenom:"Awa",nom:"Cisse",etat:1,age:20,role:"user"},
];
//Creer une fonction flécher nommer getAdmins qui prend en parametre le tableau cette fonction retourne un tableau contenant des utilisateurs avec le role admin
//1ere methode
const getAdmins = (users) => {
    let admins = [];
    users.forEach(user => {
       if(user.role == "admin"){
        admins.push(user);
       } 
    });
    return admins;
};
//2eme methode
const getAdmin = (users) => {
    const newTab = users.filter((u) => u.role === "admin")
    return newTab;
};

let u = {prenom:"Fatou",nom:"Fall",etat:0,age:18,role:"admin"};
//let prenom=u.prenom;
//let nom=u.nom;
//let role=u.role;
//console.log(prenom, nom, role);
//Destructuration
const {prenom, nom, role} = u;
console.log(prenom, nom, role);

//avec map creer un tableau qui contient les prenoms et roles des users affiche le new tableau
let tabMap = users.map(({prenom,role})=>{
    return{
        p:prenom, r:role
    }
});
console.log(tabMap);
//En utilisant la destructuration recuperer le 1er utilisateur et le mettre dans une variable nommer user1 et le 3eme dans user3 et le 2eme utilisateur est ignoré
const [user1, , user3] = users;
console.log("user1 :", user1);
console.log("user3 :", user3);
//les spread operator
//creer un autre tableau appeler equipe contenant toute les donnes du 1er tableau plus un nouvel utilisateur à la fin ensuite afficher le nouvel tableau equipe sans push
const newUtilisateur = { prenom: "Mamy", nom: "Seck", etat: 1, age: 22, role: "user" };
const equipe = [users, newUtilisateur];
console.log(equipe);
//changer l'etat de l'utilisateur Fatou
const usersChanger = users.map(user => 
    u.prenom === "Fatou" ? {user, etat: 1 } : user
);

console.log(usersChanger);

