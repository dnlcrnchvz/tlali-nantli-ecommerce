/* const borrarProducto=()=>
{
    document.querySelector(".card").innerHTML=``;
}; */

/* const borrarProducto=()=>
{
    if(document.getElementById("btn0"))
    {
        document.getElementById("card0").innerHTML=``;
    }
    else if(document.getElementById("btn1"))
        {
            document.getElementById("card1").innerHTML=``;
        }
    
} */

        const borrarProducto = (index) => {
            const button = document.getElementById(`btn${index}`);
            const card = document.getElementById(`card${index}`);
        
            if (button && card) {
                card.innerHTML = '';
            }
        };