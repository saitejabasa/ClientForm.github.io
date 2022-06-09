

const getValueInput = () =>{

    let obj = {};
    let newArray = []

    let middleName = document.querySelector("#middleName").value; 
    
    let firstName = document.getElementById("firstName").value;

    let months = document.getElementById("months").value;

    let flexSwitchCheckDefault = document.getElementById("flexSwitchCheckDefault").checked;

    console.log("flexSwitchCheckChecked", flexSwitchCheckDefault);

    // if(flexSwitchCheckDefault)
    // {
    //     console.log("true");
    // }

    if(firstName == "" || middleName == "" || months == "")
    {
        alert("Cannot keep mandatory field's empty");
        return false;
    }

    let fileTitle = firstName;

    obj['First Name'] = firstName;
    obj['Middle Name'] = middleName;
    obj['Months'] = months;


    newArray.push(obj);

    // console.log(newArray);
    middleName = ""

    var headers = {
        firstName: 'First Name',
        middleName: "Middle Name",
        months : "Months"
    };
    // return exportCSVFile(headers,newArray, fileTitle);
}


function ConvertToCSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';

    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
            if (line != '') line += ','

            line += array[i][index];
        }

        str += line + '\r\n';
    }
    return str;
}

function exportCSVFile(headers, items, fileTitle) {

    if (headers) {
        items.unshift(headers);
    }

    // Convert Object to JSON
    let jsonObject = JSON.stringify(items);

    let csv = this.ConvertToCSV(jsonObject);

    var exportedFilenmae = fileTitle + '.csv' || 'export.csv';

    let blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, exportedFilenmae);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", exportedFilenmae);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}

