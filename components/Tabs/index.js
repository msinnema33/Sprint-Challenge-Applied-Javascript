// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        //console.log('topics: ', response);
        response.data.topics.forEach(item => {
            const tab = Tab(item);
            tabContent.appendChild(tab);
        });
        //const cards = document.querySelector('.cards');
        //const tabContent = document.querySelector('.topics');

    })

function Tab(item) {
    const newTab = document.createElement('div');

    newTab.classList.add('tab');

    newTab.textContent = item;

    return newTab;
}

const tabContent = document.querySelector('.topics');

//tabContent.appendChild(Tab(data.topics))