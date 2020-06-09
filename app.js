function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
   var hidden = document.getElementsByClassName("tabcontento");

   //normalise all the divs that were hidden
    for(i=0; i<hidden.length; i++)
    {
        hidden[i].className = hidden[i].className.replace("tabcontento", "tabcontent");
    }

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    var defaulTab = document.getElementById("All");
    for (i = 0; i < defaulTab.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

//not tab stuff

//get all elems



bakebox = document.getElementById("carbo");
cookbox = document.getElementById("cook");
froontbox = document.getElementById("froont");
vegetalbox = document.getElementById("vegetal");
meatbox = document.getElementById("meats");
//get divs
fruits= document.getElementsByClassName("fruit")
baked= document.getElementsByClassName("carbs")
vegets= document.getElementsByClassName("vegetable")
cooks= document.getElementsByClassName("cooking")
meats= document.getElementsByClassName("meat")

function selectBake(checkbox)
{

    if(bakebox.checked)

    {
        cookbox.style.display="none";
        froontbox.style.display="none";
        vegetalbox.style.display="none";
        meatbox.style.display="none";
        for(var i=0; i<fruits.length; i++ )
        {
            fruits[i].style.display="none";
        }

        for(var i=0; i<meats.length; i++ )
        {
            meats[i].style.display="none";
        }
        for(var i=0; i<vegets.length; i++ )
        {
            vegets[i].style.display="none";
        }
        for(var i=0; i<cooks.length; i++ )
        {
            cooks[i].style.display="none";
        }


    }
    else
        {
            cookbox.style.display=" inline";
            froontbox.style.display=" inline";
            vegetalbox.style.display=" inline";
            meatbox.style.display=" inline";

            for(var i=0; i<fruits.length; i++ )
            {
                fruits[i].style.display="inline-block";
            }
            for(var i=0; i<meats.length; i++ )
            {
                meats[i].style.display="inline-block";
            }
            for(var i=0; i<vegets.length; i++ )
            {
                vegets[i].style.display="inline-block";
            }
            for(var i=0; i<cooks.length; i++ )
            {
                cooks[i].style.display="inline-block";
            }

        }
}

function selectMeatbox(checkbox)
{
    if(meatbox.checked)
    {
        cookbox.style.display="none";
        froontbox.style.display="none";
        vegetalbox.style.display="none";
        bakebox.style.display="none";
        for(var i=0; i<fruits.length; i++ )
        {
            fruits[i].style.display="none";
        }

        for(var i=0; i<baked.length; i++ )
        {
            baked[i].style.display="none";
        }
        for(var i=0; i<vegets.length; i++ )
        {
            vegets[i].style.display="none";
        }
        for(var i=0; i<cooks.length; i++ )
        {
            cooks[i].style.display="none";
        }

    }
    else
    {
        cookbox.style.display="inline";
        froontbox.style.display="inline";
        vegetalbox.style.display="inline";
        bakebox.style.display="inline";
        for(var i=0; i<fruits.length; i++ )
        {
            fruits[i].style.display="inline-block";
        }
        for(var i=0; i<baked.length; i++ )
        {
            baked[i].style.display="inline-block";
        }
        for(var i=0; i<vegets.length; i++ )
        {
            vegets[i].style.display="inline-block";
        }
        for(var i=0; i<cooks.length; i++ )
        {
            cooks[i].style.display="inline-block";
        }

    }
}



function selectCookbox(checkbox)
{

    if(cookbox.checked)
    {
        meatbox.style.display="none";
        froontbox.style.display="none";
        vegetalbox.style.display="none";
        bakebox.style.display="none";
        for(var i=0; i<fruits.length; i++ )
        {
            fruits[i].style.display="none";
        }

        for(var i=0; i<baked.length; i++ )
        {
            baked[i].style.display="none";
        }
        for(var i=0; i<vegets.length; i++ )
        {
            vegets[i].style.display="none";
        }
        for(var i=0; i<meats.length; i++ )
        {
            meats[i].style.display="none";
        }



    }
    else {
        meatbox.style.display="inline";
        froontbox.style.display="inline";
        vegetalbox.style.display="inline";
        bakebox.style.display="inline";

        for(var i=0; i<fruits.length; i++ )
        {
            fruits[i].style.display="inline-block";
        }
        for(var i=0; i<baked.length; i++ )
        {
            baked[i].style.display="inline-block";
        }
        for(var i=0; i<vegets.length; i++ )
        {
            vegets[i].style.display="inline-block";
        }
        for(var i=0; i< meats.length; i++ )
        {
            meats[i].style.display="inline-block";
        }

    }
}

function selectFroontbox(checkbox)
{
    if(froontbox.checked)
    {
        meatbox.style.display="none";
        cookbox.style.display="none";
        vegetalbox.style.display="none";
        bakebox.style.display="none";

        for(var i=0; i<cooks.length; i++ )
        {
            cooks[i].style.display="none";
        }
        for(var i=0; i<baked.length; i++ )
        {
            baked[i].style.display="none";
        }
        for(var i=0; i<vegets.length; i++ )
        {
            vegets[i].style.display="none";
        }
        for(var i=0; i<meats.length; i++ )
        {
            meats[i].style.display="none";
        }

    } else
    {
        meatbox.style.display="inline";
        cookbox.style.display="inline";
        vegetalbox.style.display="inline";
        bakebox.style.display="inline";

        for(var i=0; i<cooks.length; i++ )
        {
            cooks[i].style.display="inline-block";
        }
        for(var i=0; i<baked.length; i++ )
        {
            baked[i].style.display="inline-block";
        }
        for(var i=0; i<vegets.length; i++ )
        {
            vegets[i].style.display="inline-block";
        }
        for(var i=0; i< meats.length; i++ )
        {
            meats[i].style.display="inline-block";
        }

    }
}

function selectVegetal(checkbox)
{
    if(vegetalbox.checked)
    {
        meatbox.style.display="none";
        cookbox.style.display="none";
        froontbox.style.display="none";
        bakebox.style.display="none";
        for(var i=0; i<cooks.length; i++ )
        {
            cooks[i].style.display="none";
        }

        for(var i=0; i<baked.length; i++ )
        {
            baked[i].style.display="none";
        }
        for(var i=0; i<fruits.length; i++ )
        {
            fruits[i].style.display="none";
        }
        for(var i=0; i<meats.length; i++ )
        {
            meats[i].style.display="none";
        }

    } else
    {

        meatbox.style.display="inline";
        cookbox.style.display="inline";
        froontbox.style.display="inline";
        bakebox.style.display="inline";
        for(var i=0; i<cooks.length; i++ )
        {
            cooks[i].style.display="inline-block";
        }
        for(var i=0; i<baked.length; i++ )
        {
            baked[i].style.display="inline-block";
        }
        for(var i=0; i<fruits.length; i++ )
        {
            fruits[i].style.display="inline-block";
        }
        for(var i=0; i< meats.length; i++ )
        {
            meats[i].style.display="inline-block";
        }

    }
}





bakebox.addEventListener("change", ()=>selectBake(bakebox));
cookbox.addEventListener("change", ()=>selectCookbox(cookbox));
froontbox.addEventListener("change", ()=>selectFroontbox(froontbox));
vegetalbox.addEventListener("change", ()=>selectVegetal(vegetalbox));
meatbox.addEventListener("change", ()=>selectMeatbox(meatbox));

let paragraph = document.getElementById("disp");

function addToCart(pass)
{
    var count = 0;
    var quant =0;
    var str="";
    if(pass=="apple")
    {
        count += 1.45;
        quant++;
        str = "Apples";
    }

}
