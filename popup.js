let main_colm = document.querySelectorAll('.col-md-4');
let modal = document.querySelectorAll('.modal');
let close_btn = document.querySelectorAll('.close_btn');

function close_modl(){
    for(let x = 0; x < modal.length; x ++){
     modal[x].style.visibility = 'hidden';
     modal[x].style.opacity = 0;
     modal[x].style.transition = 0.5;
     modal[x].style.transform = 'translateY(-7px)';
    }
 }
    for(let i = 0; i < main_colm.length; i ++){
        main_colm[i].addEventListener('click',function(){
        close_modl();
        modal[i].style.visibility = 'visible';
        modal[i].style.opacity = 1;
        modal[i].style.transform = 'translateY(7px)';
        })
    }
for(let x = 0; x < close_btn.length; x ++){
    close_btn[x].addEventListener('click',function(){
        close_modl();

    })
}
// function close_modl(){
//     for(let i = 0; i < modal.length; i ++){
//         modal[i].style.display = 'none';
//     }
// }
//         close_modl();
//     for(let x = 0; x < main_colm.length; x ++){
//         main_colm[x].addEventListener('click',function(){
//         close_modl();
//         modal[x].style.display = 'block';
//     })
// }
