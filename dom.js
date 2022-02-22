document.getElementById("add-border-btn").addEventListener('click',function(){
    const container = document.getElementById('friend-container');
    container.style.border = '2px solid red'
});


function addBackgroundColor() {
 
    const friends = document.getElementsByClassName('friend');

    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue'
    }

}

document.getElementById('add-friend').addEventListener('click',function(){
    const container = document.getElementById('friend-container');
    const friend    = document.createElement('div');
    friend.classList.add('friend');
    friend.innerHTML = `
            <h1 class="friend-name">New friend</h1>
            <p>Repellendus, voluptate?</p>
    `

    container.appendChild(friend)
})