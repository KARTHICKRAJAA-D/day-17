let body = document.querySelector('body');
let count = document.querySelector('.countdown');
setTimeout(() => {
    setTimeout(() => {
        setTimeout(() =>{
            setTimeout(()=>{
                setTimeout(()=>{
                    setTimeout(()=>{
                        setTimeout(()=>{
                            setTimeout(()=>{
                                setTimeout(()=>{
                                    setTimeout(()=>{
                                        setTimeout(()=>{
                                            count.innerText = 'HAPPY INDEPENDENCE DAY';
                                            count.style.color = 'red';
                                        },1000)
                                        count.innerText = '1';
                                    },1000)
                                    count.innerText = '2';
                                },1000)
                                count.innerText = '3';
                            },1000)
                            count.innerText = '4';
                        },1000)
                        count.innerText = '5';
                    },1000)
                    count.innerText = '6';
                },1000)
                count.innerText = '7';
            },1000)
            count.innerText = '8';  
        },1000)
        count.innerText = '9';
    }, 1000);
    count.innerText = '10';
},1000);