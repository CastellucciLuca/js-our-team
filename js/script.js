//MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
const team = [
    {
        firstName: 'Wayne', 
        surname : 'Barnett',
        role : 'Founder & CEO',
        imgName : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        firstName: 'Angela', 
        surname : 'Caroll',
        role : 'Chief Editor',
        imgName : 'angela-caroll-chief-editor.jpg'
    },
    {
        firstName: 'Walter', 
        surname : 'Gordon',
        role : 'Office Manager',
        imgName : 'walter-gordon-office-manager.jpg'
    },
    {
        firstName: 'Angela', 
        surname : 'Lopez',
        role : 'Social Media Manager',
        imgName : 'angela-lopez-social-media-manager.jpg'
    },
    {
        firstName: 'Scott', 
        surname : 'Estrada',
        role : 'Developer',
        imgName : 'scott-estrada-developer.jpg'
    },
    {
        firstName: 'Barbara', 
        surname : 'Ramos',
        role : 'Graphic Designer',
        imgName : 'barbara-ramos-graphic-designer.jpg'
    }
];
const tbody = document.getElementById('table-tbody');
//MILESTONE 1:Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < team.length; i++) {
    const member = team[i];
    //MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
    const tr = document.createElement('tr');
    for(let key in member){
        const td = document.createElement('td');
        td.innerText = member[key];
        tr.append(td);
        console.log(member[key]);
    }
    tbody.append(tr);
    console.log('/-----------/'); //separatore nel console.log
}