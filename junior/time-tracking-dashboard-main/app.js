const currentStats = document.querySelectorAll(".current");
const previousStats = document.querySelectorAll(".previous");
const categoryStats = document.querySelectorAll(".previous-type")
const buttons = document.querySelectorAll('button');

fetch("data.json").then((response) => {
response.json().then(function(stats){
        for(var i = 0; i < currentStats.length; i++) {

            categoryStats[i].textContent = "Last Week";
    
            if (stats[i].timeframes.weekly.current <= 1) {
                currentStats[i].textContent = stats[i].timeframes.weekly.current + "hr";
            } else {
                currentStats[i].textContent = stats[i].timeframes.weekly.current + "hrs";
            }
    
            if (stats[i].timeframes.weekly.previous <= 1) {
                previousStats[i].textContent = stats[i].timeframes.weekly.previous + "hr";
            } else {
                previousStats[i].textContent = stats[i].timeframes.weekly.previous + "hrs";
            }    
        }       
    })
})

function dailyStats(stats) {
    for(var i = 0; i < currentStats.length; i++) {

        categoryStats[i].textContent = "Yesterday";

        if (stats[i].timeframes.daily.current <= 1) {
            currentStats[i].textContent = stats[i].timeframes.daily.current + "hr";
        } else {
            currentStats[i].textContent = stats[i].timeframes.daily.current + "hrs";
        }

        if (stats[i].timeframes.daily.previous <= 1) {
            previousStats[i].textContent = stats[i].timeframes.daily.previous + "hr";
        } else {
            previousStats[i].textContent = stats[i].timeframes.daily.previous + "hrs";
        }    
    }
}
function weeklyStats(stats) {
    for(var i = 0; i < currentStats.length; i++) {

        categoryStats[i].textContent = "Last Week";

        if (stats[i].timeframes.weekly.current <= 1) {
            currentStats[i].textContent = stats[i].timeframes.weekly.current + "hr";
        } else {
            currentStats[i].textContent = stats[i].timeframes.weekly.current + "hrs";
        }

        if (stats[i].timeframes.weekly.previous <= 1) {
            previousStats[i].textContent = stats[i].timeframes.weekly.previous + "hr";
        } else {
            previousStats[i].textContent = stats[i].timeframes.weekly.previous + "hrs";
        }    
    }
}
function monthlyStats(stats) {
    for(var i = 0; i < currentStats.length; i++) {

        categoryStats[i].textContent = "Last Month";

        if (stats[i].timeframes.monthly.current <= 1) {
            currentStats[i].textContent = stats[i].timeframes.monthly.current + "hr";
        } else {
            currentStats[i].textContent = stats[i].timeframes.monthly.current + "hrs";
        }

        if (stats[i].timeframes.monthly.previous <= 1) {
            previousStats[i].textContent = stats[i].timeframes.monthly.previous + "hr";
        } else {
            previousStats[i].textContent = stats[i].timeframes.monthly.previous + "hrs";
        }    
    }
}


function frequencyDashboard(clickedButton) {
    
    const buttonsArray = Array.from(buttons);
    const index = buttonsArray.indexOf(clickedButton);

    fetch("data.json").then((response) => {
        response.json().then(function(stats){
    
            switch(index) {
                case 0:
                    dailyStats(stats);
                    buttonActiveStyles(index);
                    break;
                case 1:
                    weeklyStats(stats);
                    buttonActiveStyles(index);
                    break;
                case 2:
                    monthlyStats(stats);
                    buttonActiveStyles(index);
                    break;
            }           
        })
    })
}

function buttonActiveStyles(index) {

    for(var i = 0; i < buttons.length; i++) {
        buttons[i].style.color = ""
    }

    buttons[index].style.color = 'white';
}