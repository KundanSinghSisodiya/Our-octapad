window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#6860d3",
        "#60b2d3"
    ];
    //get going with the sound here
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            //used function instead of arrow, to get access to this keyword!
            sounds[index].currentTime = 0; //reset current time to allow to click and play again and again
            sounds[index].play();

            // createBubbles(index); //????
        });
    });

   
}); //when the content is loaded, the function will run




