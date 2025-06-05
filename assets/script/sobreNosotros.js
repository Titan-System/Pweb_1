'use strict'

const li        = document.querySelectorAll('.li');
const bloque    = document.querySelectorAll('.bloque');

li.forEach( (cadaLi , i )=>{

        li[i].addEventListener('click',()=>{
            li.forEach((cadaLi , i)=>{
                li[i].classList.remove('activo');
                bloque[i].classList.remove('activo')
            })
            li[i].classList.add('activo');
            bloque[i].classList.add('activo')
        })
})

const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");

openBtn.addEventListener('click',()=>{
    modal.classList.add("open");
})
closeBtn.addEventListener('click',()=>{
    modal.classList.remove("open")
})