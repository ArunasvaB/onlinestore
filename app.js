function openCity(evt, cityName) {
    // Declare all variables
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