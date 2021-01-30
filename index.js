function handelTicket(ticket,isIncrease){
    const ticketInput=document.getElementById(ticket+'-count');
    const ticketCount=parseInt(ticketInput.value);
    let ticketNewCount=0;
    if(isIncrease==true){
        ticketNewCount=ticketCount+1;
    }
    if(isIncrease==false && ticketCount>0){
        ticketNewCount=ticketCount-1;
    }

    ticketInput.value=ticketNewCount;

    let ticketTotal=0;

    if(ticket=='first'){
        ticketTotal=ticketNewCount*150;
    }
    if(ticket=='economic'){
        ticketTotal=ticketNewCount*100;
    }
    document.getElementById(ticket+'-count').innerText=ticketTotal;
    calculateTicketPrice()
}

function calculateTicketPrice(){
    const firstClassTicketCount =  getInputTicket('first');
    const economicClassTicketCount =  getInputTicket('economic');
    const subTotal=firstClassTicketCount*150+economicClassTicketCount*100;
    document.getElementById('sub-Total').innerText=subTotal;
    const totalVat=subTotal*0.1;
    document.getElementById('total-vat').innerText=totalVat;
    const total=subTotal+totalVat;
    document.getElementById('total').innerText=total;

}
function getInputTicket(ticket){
    ticketInput=document.getElementById(ticket+'-count');
    const ticketCount=parseInt(ticketInput.value);
    return ticketCount;
}

//transition Area
const transitionBtn= document.getElementById('bookingBtn')
transitionBtn.addEventListener('click',function(){
    const bookingArea=document.getElementById('main-area');
    bookingArea.style.display='none';
    bookingArea.style.backgroundImage='none'
    const transitionArea=document.getElementById('transition-area');
    transitionArea.style.display='block';

})