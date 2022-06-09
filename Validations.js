
//Check box validation
const checkBoxValidation = () =>{
    let checkBox = document.getElementById("flexSwitchCheckDefault").checked;
    let flexCheckDefault = document.getElementById("flexCheckDefault");

    if(checkBox){
        console.log(`Check Box : ${checkBox}`);
        flexCheckDefault.disabled = false;
    }else
    {
        flexCheckDefault.disabled = true;
    }
    
    return checkBox;
}