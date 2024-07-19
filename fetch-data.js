async function fetchUserData(){
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    const dataContainer = document.getElementById('api-data');
    try{
        const response = await fetch(apiUrl);
        const users = await response.json();
        dataContainer.innerHTML = ''; //to clear the previous text
        const userList = document.createElement('ul');
        //looping through for each userco
        users.forEach(user =>{
        const listItems = document.createElement('li');
        listItems.textContent = user.name;  //set content to users name
       
        userList.appendChild(listItems);  //append li to userList(ul)
        
        dataContainer.appendChild(userList);  //append userList to datacontainer


        })
    } catch{
        dataContainer.textContent = 'Failed to load user data.';
    }
    
  } 
  fetchUserData();
  document.addEventListener('DOMContentLoaded',fetchUserData);


    
