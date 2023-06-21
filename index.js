
function click11(){

    var rand = Math.floor(Math.random()*6) + 1;
    
    let img = document.querySelector("#first");
    
    if (rand === 1){
        img.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwebstockreview.net%2Fimages%2Fdice-clipart-double-4.png&f=1&nofb=1&ipt=6b8faf62b6c301ae45faaf57791bcf4f403889cdc276e2cadcfb9da6616289cd&ipo=images"
    }
    else if (rand === 2){
        img.src ="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjooinn.com%2Fimages%2F2-dice-2.png&f=1&nofb=1&ipt=d17b625c4e3f35c001a0b4539af870b36d728b8bef5213a7c8678e101ff8129e&ipo=images"
    }
    else if (rand === 3){   
        img.src = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipground.com%2Fimages%2Fnumber-3-dice-clipart-black-and-white-1.png&f=1&nofb=1&ipt=8483708c049af384e3e1203bd28e3f94c6b1b53a67298021772560e2b1cb01ec&ipo=images"
    }
    else if (rand === 4){
        img.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Ff%2Ffd%2FDice-4-b.svg%2F1024px-Dice-4-b.svg.png&f=1&nofb=1&ipt=039e3aeb79236a95cde835f9a6a202917725a9e77ca151c8bf549c7606defc1e&ipo=images"
    }   
    else if (rand === 5){
        img.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F08%2FDice-5-b.svg%2F1024px-Dice-5-b.svg.png&f=1&nofb=1&ipt=21329b59d5593119eddf2f389c4c2c80a2b5cfbff1c4313897d972b6ca05d9f7&ipo=images"
    }
    else if (rand === 6){
        img.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipground.com%2Fimages%2Fdice-clipart-1-6-1.png&f=1&nofb=1&ipt=3114ec12b27f7008d23e45b8188f878aaca447fa30e3bdaebd7dd9897f4f61e0&ipo=images"
    }


    var rand2 = Math.floor(Math.random()*6) + 1;
    
    let img2 = document.querySelector("#second");
    
    if (rand2 === 1){
        img2.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwebstockreview.net%2Fimages%2Fdice-clipart-double-4.png&f=1&nofb=1&ipt=6b8faf62b6c301ae45faaf57791bcf4f403889cdc276e2cadcfb9da6616289cd&ipo=images"
    }
    else if (rand2 === 2){
        img2.src ="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjooinn.com%2Fimages%2F2-dice-2.png&f=1&nofb=1&ipt=d17b625c4e3f35c001a0b4539af870b36d728b8bef5213a7c8678e101ff8129e&ipo=images"
    }
    else if (rand2 === 3){   
        img2.src = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipground.com%2Fimages%2Fnumber-3-dice-clipart-black-and-white-1.png&f=1&nofb=1&ipt=8483708c049af384e3e1203bd28e3f94c6b1b53a67298021772560e2b1cb01ec&ipo=images"
    }
    else if (rand2 === 4){
        img2.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Ff%2Ffd%2FDice-4-b.svg%2F1024px-Dice-4-b.svg.png&f=1&nofb=1&ipt=039e3aeb79236a95cde835f9a6a202917725a9e77ca151c8bf549c7606defc1e&ipo=images"
    }   
    else if (rand2 === 5){
        img2.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F08%2FDice-5-b.svg%2F1024px-Dice-5-b.svg.png&f=1&nofb=1&ipt=21329b59d5593119eddf2f389c4c2c80a2b5cfbff1c4313897d972b6ca05d9f7&ipo=images"
    }
    else if (rand2 === 6){
        img2.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipground.com%2Fimages%2Fdice-clipart-1-6-1.png&f=1&nofb=1&ipt=3114ec12b27f7008d23e45b8188f878aaca447fa30e3bdaebd7dd9897f4f61e0&ipo=images"
    }
    let sum = rand + rand2;
    sum = sum.toString()
    
    document.querySelector("#sum").innerHTML = sum;

}
