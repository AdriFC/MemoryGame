let clickedCard = null;
let preventClick = false;

function onCardClicked(e) {
    const target = e.currentTarget;

    if(preventClick ||
        target === clickedCard ||
        target.className.includes('done')
    ){
        return;
    }

    target.className = target.className
        .replace('color-hidden', '')
        .trim();
    target.className += ' done';
    //if we haven´t clicked a card,
    //keep track of the card, display it´s color
    if(!clickedCard){
        clickedCard = target;
    // if we have already clicked a card,
    // check if the new card matches the old card color  
    }else if (clickedCard){

        preventClick = false;
        
        if(clickedCard.getAttribute('data-color') !==
            target.getAttribute('data-color')
        ) {
            console.log("cards NOT equal");

            setTimeout(() => {
                clickedCard.className =
                clickedCard.className.replace('done', '').trim() +
                ' color-hidden';

                target.className =
                target.className.replace('done', '').trim() +
                ' color-hidden';

                clickedCard = null;
                preventClick = false;
            }, 500);
            
        }else{
            clickedCard = null;
        }                      

    }
     
}