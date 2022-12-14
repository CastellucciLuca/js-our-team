//MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
const team = [
    {
        firstName: 'Wayne', 
        surname : 'Barnett',
        role : 'Founder & CEO',
        photo : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        firstName: 'Angela', 
        surname : 'Caroll',
        role : 'Chief Editor',
        photo : 'angela-caroll-chief-editor.jpg'
    },
    {
        firstName: 'Walter', 
        surname : 'Gordon',
        role : 'Office Manager',
        photo : 'walter-gordon-office-manager.jpg'
    },
    {
        firstName: 'Angela', 
        surname : 'Lopez',
        role : 'Social Media Manager',
        photo : 'angela-lopez-social-media-manager.jpg'
    },
    {
        firstName: 'Scott', 
        surname : 'Estrada',
        role : 'Developer',
        photo : 'scott-estrada-developer.jpg'
    },
    {
        firstName: 'Barbara', 
        surname : 'Ramos',
        role : 'Graphic Designer',
        photo : 'barbara-ramos-graphic-designer.jpg'
    }
];
const tbody = document.getElementById('table-tbody');
//MILESTONE 1:Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < team.length; i++) {
    const member = team[i];
    //MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
    const tr = document.createElement('tr');
    tr.classList.add('align-middle');
    //BONUS 1
    for(let key in member){
        const td = document.createElement('td');
        if(key === 'photo'){
            td.innerHTML = `<img class="w-25" src="./img/${member[key]}" alt="">`;
        }
        else{
            td.innerHTML = member[key];
        }
        tr.append(td);
        console.log(member[key]);
    }
    tbody.append(tr);
    console.log('/-----------/'); //separatore nel console.log
}