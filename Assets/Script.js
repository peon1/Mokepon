// Pet Buttons
let ratigueya = null;
let hipodoge = null;
let capipepo = null;

// Attack Buttons
let fireButton = null;
let waterButton = null;
let earthButton = null;


// Player Variables
let selectedPlayerPet = null;
let selectedPlayerAttack = null;
let playerLifes = 5;

// Enemy Variables
let selectedEnemyPet = null;
let selectedEnemyAttack = null;
let enemyLifes = 5;

// Audio
let clickEffect = null;

// Menus Variables
let selectPetMenu = null;
let selectAttackMenu = null;
let attackMenuParagraph = null;
let attackMenuCards = null;
let reseat = null;

// paragraph
let playerPet = null;
let enemyPet = null;
let selectyourpet = null;
let enemyAttack = null;
let playerAttack = null;
let finalResult = null;
let playerParagraphLifes = null;
let enemyParagraphLifes = null;
let finalrResultParagraph = null;

// Others
let reseatButton = null;

function gameLoad() {
    // Variables initialization
    hipodoge = document.getElementById("Select-Hipodoge");
    ratigueya = document.getElementById("Select-Ratigueya");
    capipepo = document.getElementById("Select-Capipepo");
    fireButton = document.getElementById("Fire-attack-button");
    waterButton = document.getElementById("Water-attack-button");
    earthButton = document.getElementById("Earth-attack-button");
    clickEffect = new Audio("Assets/Audio/ClickEffect.m4a");
    selectPetMenu = document.getElementById("Character-select-menu");
    selectAttackMenu = document.getElementById("Attack-select-menu");
    attackMenuParagraph = document.getElementById("Attack-select-menu-paragraph");
    attackMenuCards = document.getElementById("Attack-select-menu-cards");
    reseat = document.getElementById("Reseat");
    playerPet = document.getElementById("Player-character");
    enemyPet = document.getElementById("Enemy-character");
    selectyourpet = document.getElementById("Select-your-character");
    enemyAttack = document.getElementById("Enemy-attack");
    playerAttack = document.getElementById("Player-attack");
    finalResult = document.getElementById("Resultado-final");
    playerParagraphLifes = document.getElementById("Player-lifes");
    enemyParagraphLifes = document.getElementById("Enemy-lifes");
    finalrResultParagraph = document.getElementById("Final-result-paragraph");
    reseatButton = document.getElementById("Resset-button");






    // Add event listener to pets selecting variables

    ratigueya.addEventListener("click",   () =>
    {

       selectedPlayerPet = "Fire";
        clickSoundPlay();
        selectEnemyPet();
       battleMode();
    });
    hipodoge.addEventListener("click", () => {
        selectedPlayerPet = "Water";
        clickSoundPlay();
        selectEnemyPet();
        battleMode();
    });
    capipepo.addEventListener("click",() =>
    {
        selectedPlayerPet = "Earth";
        clickSoundPlay();
        selectEnemyPet();
        battleMode();
    })

    // Add event listener to attacks selecting variables

    fireButton.addEventListener("click", () =>
    {
        clickSoundPlay();
        selectedPlayerAttack = "Fire";
        showResult();
    })
    waterButton.addEventListener("click", () =>
    {
        clickSoundPlay();
        selectedPlayerAttack = "Water";
        showResult();
    })
    earthButton.addEventListener("click", () =>
    {
        clickSoundPlay();
        selectedPlayerAttack = "Earth";
        showResult();

    })

    // Add event listener to reseat button

    reseatButton.addEventListener("click", isGameFinished)

}

function selectEnemyPet ()
{
   let aux = Math.floor(Math.random() * (3 - 1 + 1) + 1);

    switch (aux)
    {
        case 1:
        {
            selectedEnemyPet = "Fire";
            break;
        }
        case 2:
        {
            selectedEnemyPet = "Water";
            break;
        }
        case 3:
        {
            selectedEnemyPet = "Earth";
            break;
        }
    }

         

}


function battleMode()
{
    playerPet.innerHTML = selectedPlayerPet;
    enemyPet.innerHTML = selectedEnemyPet;

    selectPetMenu.hidden = true;
    selectAttackMenu.hidden = false;


    attackMenuParagraph.hidden = false;
    attackMenuCards.hidden = false;
    attackMenuParagraph.style.display = "block"
    attackMenuCards.style.display = "flex";


    selectyourpet.hidden = true;


}


function clickSoundPlay ()
{

    new Audio("Assets/Audio/ClickEffect.m4a").play();

}

function showResult ()
{

    selectAttackMenu.hidden = true;
    attackMenuParagraph.hidden = true;
    attackMenuCards.hidden = true;
    document.getElementById("Result").hidden = false;
    document.getElementById("Results-paragraphs").hidden = false;
    playerAttack.innerHTML = selectedPlayerAttack;
    enemyAttack.innerHTML = "Eligiendo 🧨";
    playerAttack.hidden = false;
    enemyAttack.hidden = false;
    document.getElementById("Player-pet-result").innerHTML = selectedPlayerPet;
    document.getElementById("Enemy-pet-result").innerHTML = selectedEnemyPet;
    setTimeout(() => {

            let aux = Math.floor(Math.random() * (3 - 1 + 1) + 1);
            switch (aux) {
                case 1: {
                    selectedEnemyAttack = "Fire"
                    break;
                }
                case 2: {
                    selectedEnemyAttack = "Water";
                    break;
                }
                case 3: {
                    selectedEnemyAttack = "Earth";
                    break;
                }


            }
            enemyAttack.innerHTML = selectedEnemyAttack;
            decideWinner();
        }, 3000);



}

function decideWinner()
{
        //  Tie
    if (selectedPlayerAttack === selectedEnemyAttack)
    {
        updateLives(1,1);
    }
        // Player wins with Fatality
    if (selectedPlayerAttack === "Fire" && selectedPlayerPet === "Fire" && selectedEnemyAttack === "Earth")
    {
        updateLives(true, true);
    }

    if (selectedPlayerAttack === "Water" && selectedPlayerPet === "Water" && selectedEnemyAttack === "Fire")
    {
        updateLives(true, true)
    }

    if (selectedPlayerAttack === "Earth" && selectedPlayerPet === "Earth" && selectedEnemyAttack === "Water")
    {
        updateLives(true, true)
    }


// Player wins without Fatality

    if (selectedPlayerAttack === "Fire" && selectedPlayerPet !== "Fire" && selectedEnemyAttack === "Earth")
    {
        updateLives(true, false)
    }

    if (selectedPlayerAttack === "Water" && selectedPlayerPet !== "Water" && selectedEnemyAttack === "Fire")
    {
        updateLives(true, false)
    }


    if (selectedPlayerAttack === "Earth" && selectedPlayerPet !== "Earth" && selectedEnemyAttack === "Water")
    {
        updateLives(true, false)
    }

 // Player lose without Fatality

    if (selectedPlayerAttack === "Fire" && selectedEnemyPet !== "Water" && selectedEnemyAttack === "Water")
    {
        updateLives(false, false)
    }

    if (selectedPlayerAttack === "Water" && selectedEnemyPet !== "Earth" && selectedEnemyAttack === "Earth")
    {
        updateLives(false, false)
    }
    if (selectedPlayerAttack === "Earth" && selectedEnemyPet !== "Fire" && selectedEnemyAttack === "Fire")
    {
        updateLives(false, false)
    }

    // Player lose with Fatality
    if (selectedPlayerAttack === "Fire" && selectedEnemyPet === "Water" && selectedEnemyAttack === "Water")
    {
        updateLives(false, true)
    }
    if (selectedPlayerAttack === "Water" && selectedEnemyPet === "Earth" && selectedEnemyAttack === "Earth")
    {
        updateLives(false, true)
    }

    if (selectedPlayerAttack === "Earth" && selectedEnemyPet === "Fire" && selectedEnemyAttack === "Fire")
    {
        updateLives(false, true)
    }









}

function updateLives(playerWinn, fatal)
{
    document.getElementById("Final-result").hidden = false;
    finalrResultParagraph.hidden = false;
    if(playerWinn === true && fatal === true)
    {
       enemyLifes -= 2;
       finalrResultParagraph.innerHTML = "Ganaste con una FATALITY 😎🏆"
    } else if (playerWinn === true && fatal === false)
    {
        enemyLifes--;
        finalrResultParagraph.innerHTML = "Ganaste 🎉😎"
    } else if (playerWinn === false && fatal === false)
    {
        playerLifes--;
        finalrResultParagraph.innerHTML = "Perdiste 😐😔"
    } else if (playerWinn === false && fatal === true)
    {
        playerLifes -= 2;
        finalrResultParagraph.innerHTML = "Perdiste con una FATALITY 😭😭😭"
    } else
    {
        finalrResultParagraph.innerHTML = "Empate 😐😶‍🌫️";
    }
    fixLifes();
    playerParagraphLifes.innerHTML = playerLifes;
    enemyParagraphLifes.innerHTML = enemyLifes;
    reseat.hidden = false;
    reseatButton.hidden = false;


}

function reseatGame ()
{
    clickSoundPlay();
    reseat.hidden = true;
    finalResult.hidden = true;
    document.getElementById("Final-result").hidden = true;
    playerAttack.hidden = true;
    enemyAttack.hidden = true;
    enemyPet.hidden = true;
    playerPet.hidden = true;
    attackMenuParagraph.hidden = true;
    attackMenuCards.hidden = true;
    selectyourpet.hidden = false;
    selectPetMenu.hidden = false;
    finalrResultParagraph.hidden = true;
    document.getElementById("Result").hidden = true;
    document.getElementById("Results-paragraphs").hidden = true;




}

function isGameFinished()
{
    if(playerLifes <= 0)
    {
        clickSoundPlay();
        finalResult.hidden = true;
        finalrResultParagraph.hidden = true;
        document.getElementById("Final-result").hidden = true;
        document.getElementById("Final-screen").hidden = false;
        document.getElementById("Final-result-screen").innerHTML = "Perdiste el juego 😐😔😭😒";
        reseatButton.innerHTML = "Jugar de nuevo";
        reseatButton.removeEventListener("click", isGameFinished);
        reseatButton.addEventListener("click",reseatReseatButton)


    } else if (enemyLifes <= 0)
    {
        clickSoundPlay();
        finalResult.hidden = true;
        finalrResultParagraph.hidden = true;
        document.getElementById("Final-result").hidden = true;
        document.getElementById("Final-screen").hidden = false;
        document.getElementById("Final-result-screen").innerHTML = "Ganaste el juego 😎🏆😁🎈🎊🎉";
        reseatButton.innerHTML = "Jugar de nuevo";
        reseatButton.removeEventListener("click", isGameFinished);
        reseatButton.addEventListener("click", reseatReseatButton)

    } else
    {
        reseatGame();
    }
}

function fixLifes ()
{
    if (playerLifes < 0)
    {
        playerLifes = 0;
    }

    if (enemyLifes < 0)
    {
        enemyLifes = 0;
    }
}

function reseatReseatButton()
{
    document.getElementById("Final-screen").hidden = true;
    playerLifes = 5;
    enemyLifes = 5;
    reseatButton.removeEventListener("click", reseatReseatButton);
    reseatButton.addEventListener("click", isGameFinished);
    playerParagraphLifes.innerHTML = playerLifes;
    enemyParagraphLifes.innerHTML  = enemyLifes;
    reseatGame();
}

window.addEventListener("load", gameLoad);
