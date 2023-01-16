// no HTML, javascript:void refere-se a não retornar nada. neste caso será utilizado para fazer refresh a pagina
// <p></p> é o espaço onde o texto/pergunta será escrita
// onde tem sobre o "continueButton", o botão funciona como um link 
// "javascript:void(0)": quando clicado, indica que uma ação é suposto acontecer. é usado então para avnçar na história


let story = 0; // evitar que a história seja indefinida e que ocorra algum erro
let form = document.getElementById('Adventure');// obter o elemento com IDs correspondentes
let submit = document.getElementById('continueButton'); // para que o botão funcione de forma a avançar após submeter/escolher uma resposta
let reset = document.getElementById('resetButton'); // para que o botão reset dê refresh à página do site
let answer = '';

// "question" está entre " " para que possa ser usado depois de novo (mesmo que answers)
let story_telling = {  //é onde a história será escrita
    "start":{  //começo da história
        "question": "Two days ago, your village was attacked by some unknown force. Scared, you ran away, and now you're lost. Where do you wanna go? ",
        "answers":{
            "a": "To the Elf Forest.",
            "b": "Try to find the nearest kingdom.",
            "c": "Go north, where you can find the biggest mountains.",
        }
       
       },
     
       // Forest path
       
       "1_a":{
        "question": "You decide to go to the Forest, you will probably find a lot of water there and food, but dangers too. While walking, you heard a weird sound.",
        "answers": {
            "a": "Just keep walking like it was nothing.",
            "b": "Find about what was that.",
            "c": "Run and don't look back."
        }
     
       },
       "2_a":{
        "question": "It probably was nothing too bad. You just keept walking and met some old friends. You're finally not alone."
     
       },
       "2_b":{
        "question": "You find a friendly elf. They gave you food and you became friends.",
     
       },
       "2_c":{
        "question": "When you started running, you alerted something else dangerous, and it attacked you.",
     
        },
     
       // Kingdom path
     
       "1_b":{
        "question": "After some days, you find the way to the nearest Kingdom, but suddenly a group of fully clothed people approaches you. What do you do?",
        "answers":{
            "d": "Attack them.",
            "e": "Try to speak with them.",
            "f": "Be polite and hope they will leave you alone.",
        }
       },
       "2_d":{
        "question": "Without really thinking, you attack. This totally wasn't a good idea.",
     
       },
       "2_e":{
        "question": "You all started having a good chat. You discover those people are all travellers, and they invite you to join them.",
     
       },
       "2_f":{
        "question": "You politely wave at them and they do the same to you. You reach the Kingdom safely."
       },
     
       // Mountains path
     
       "1_c":{
        "question": "It took you a while, but you made it to the mountains. You were really tired, so you found a cave and sleept there. When you woke up, an enraged dragon was looking at you. What do you do?",
        "answers":{
            "g": "Try to exit the cave.",
            "h": "Give it your necklace.",
            "i": "Do nothing.",
        }
       },
       "2_g":{
        "question": "You start running to exit the cave, but the dragon is right there and it catches you.",
     
       },
       "2_h":{
        "question": "You offer your necklace in hope it won't attack you. The necklace is really small, but has value and is really pretty, catching the dragon's attention. Somehow, you two became friends and now travel the world together.",
     
       },
       "2_i":{
        "question": "You're too afraid to do anything. The dragon quickly gets bored of you and throws you away.",
       },
     
       // todas as várias vírgulas têm que estar presentes no }, ou então a história poderá não aparecer
     
    };

    // a primeira fase da história, as 3 primeiras perguntas/escolhas, são o começo
    // a 2 fase, toda as questions/história que surgem após o start, são representadas com 1
    // a ultima e 3 fase, as questions são representadas com o número 2
    // para adicionar mais conteúdo, teria que se seguir essa lógica. as próximas questions serião representadas com o número 3
    //cada answer (em cada conjunto de número) possui uma letra diferente, para depois puder ser usada com o número e letra correspondente
    

// Continue link
 submit.addEventListener('mouseup', function(){ //when a button on a pointing device is released while the pointer is located inside it
  answer = form.querySelectorAll('input[type=radio]:checked')[0].value; //a list of the document's elements that match the specified group of selectors.
  if(answer) {
    story++;//increment or add 1 to
    populateForm(story + '_' + answer),//if a radio is checked populate our form with the answer
    console.log("Story time!"); // ter certeza que está tudo a funcionar

    // "querySelectorAll" vai obter todos os elementos (answers)
     
  }
});

// Reset button
function resetForm(){
    document.getElementById("Adventure").reset();
}

// para gerar answers da story
function populateForm(story) {
  let current_story = story_telling[story];//take values from story_telling story
  let text = '';

  for(let prop in current_story['answers']) {
    if(current_story['answers'].hasOwnProperty(prop)) { //method returns a boolean (true or false) indicating whether the object has the specified property as its own property
      text += '<label><input type="radio" name="answer" value="' + prop + '"/><span>' + current_story['answers'][prop] + '</span></label>';// adding answers to the story
    }

    //essa confusão toda é basicamente adicionar as respostas que estão a ser inseridas à história colocando-as no html

  }

  form.querySelector('p').innerHTML = current_story.question;// escrever as questions para a tag p tag no HTML
  form.querySelector('fieldset').innerHTML = text;// escrever as answers no fieldset em html
}

populateForm('start'); //set the form at the beginning 
//entendo que seja para começar mesmo no início/start. sem isto o site não funciona