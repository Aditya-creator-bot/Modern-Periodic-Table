document.getElementById('search_cont').classList.add("hide");

function getele(){

    document.getElementById('search_cont').style.display = "block";

    let element_n = prompt("Enter the Element Name");
    fetch('./elementdata.json')
    .then(response => response.json())
    .then(data => info(data));

    function info(data){
        for (let i = 0; i < 5; i++) {
            if(data.elements[i].element_name == element_n){
                document.getElementById('search_info').innerText = "Your search Results : "+element_n;
                document.getElementById('sym').innerText = data.elements[i].sym;
                document.getElementById('element_detail').innerHTML = "Atomic No. : "+data.elements[i].atomicno+"</br> Atomic Mass : "+data.elements[i].atomicmass+"u</br> Element Name: " + data.elements[i].element_name+"</br> Latin Name : "+data.elements[i].latinname+"</br> Valency : "+data.elements[i].valency;
                break;
            }
            else{
                document.getElementById('search_info').innerText = "No search Results Found : "+element_n;
            }
        }   
    }
}