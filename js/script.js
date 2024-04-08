const horas=document.querySelector("#horas")
const min= document.querySelector("#minutos")
const sec=document.querySelector("#segundos")

//funcao que retorna a hora do relogio no usando metodos de tempo
const relogio = setInterval(()=>{ 
    let dateToday=new Date()
    let hr=dateToday.getHours()
    let mn=dateToday.getMinutes()
    let s=dateToday.getSeconds()
    horas.innerHTML=hr
    min.innerHTML=mn
    sec.innerHTML=s
    
    //condicoes pra validacao de zeros
    if(hr < 10) hr="0"+hr
    if(mn < 10) mn="0"+mn
    if(s < 10) s="0"+s

})