// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


// axios.get('https://lambda-times-backend.herokuapp.com/topics')
//     .then(e => {
//         console.log('data: ', e);
//     });
// .catch(error => {
//     console.log("Couldn't get the data", error);
// });

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(data => {
        console.log('data: ', data);
        //const myInfo = e.data;
        //console.log('User info: ', myInfo);

        //const cards = document.querySelector('.cards');
        const tabContent = document.querySelector('.topics');
        const tab = Tab(data);
        tabContent.appendChild(tab);
    })





function Tab(data) {
    const newTab = document.createElement('div');

    newTab.classList.add('tab');

    newTab.textContent = data.topics;



    return newTab;
}

const tabContent = document.querySelector('.topics');

tabContent.appendChild(Tab(data.topics))