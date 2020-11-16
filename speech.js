// <!-- Functions to run Speech Recognition -->
function Class_Record(classname) {
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";

    recognition.onresult = function(event) {
        console.log(event);
        document.getElementsByClassName(classname)[0].value = event.results[0][0].transcript;
    }

    recognition.start();
}

function Id_Record(IdName) {
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";

    recognition.onresult = function(event) {
        console.log(event);
        document.getElementById(IdName).value = event.results[0][0].transcript;
    }

    recognition.start();
}


function Extension() {
    var inputBox = document.getElementsByTagName('input');
    var inputBoxID = document.getElementById('input');
    var search_boxes = [inputBox,inputBoxID];
    return search_boxes;
}


search_boxes = Extension();
inputBox = search_boxes[0];
inputBoxID = search_boxes[1];

if(inputBoxID!=null){
            inputBoxID.addEventListener('click', function(e){
            console.log("Starting...")
            IdName = this.id;
            e.preventDefault();
            
            if (IdName != '') {
                Id_Record(IdName)
                console.log(IdName);
            } 
            else {
                var colorClass = this.className;
                Class_Record(colorClass)
                console.log(colorClass);
            }

        });

    }


for(var i=0; i<inputBox.length; i++){

    inputBox[i].addEventListener('click', function(e){
        console.log("Starting...")
        IdName = this.id;
        e.preventDefault();
        
        if (IdName != '') {
            Id_Record(IdName)
            console.log(IdName);
        } else {
            var colorClass = this.className;
            Class_Record(colorClass)
            console.log(colorClass);
        }

    });
}