var abc = [
  { index: 1, fname: "shree", lname: "wagh", point: 10 },
  { index: 2, fname: "shree1", lname: "wagh1", point: 20 },
];
function add() {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let point = document.getElementById("points").value;
  let index = abc.length + 1;
  let row = { index, fname, lname, point };
  abc.push(row);
  load();
}
function update(){
  let index = parseInt(document.getElementById("editindex").innerText);
  let fname = document.getElementById("editfname").value;
  let lname = document.getElementById("editlname").value;
  let point = document.getElementById("editpoints").value;
  let row = { index, fname, lname, point }; 
  abc[index-1] = row;
 load(false,row);
}

function editrow(rowNo){
  const row = abc.find(element =>{
    console.log(element.index);
    if(element.index==rowNo)
      return  element
  }
  );

  load(true,row);
}
function delrow(index) {
  if (index > -1) {
    abc.splice(index - 1, 1); // 2nd parameter means remove one item only
  }
  load();
}
function searchTable() {

  var input, table, tr, td;
  input = document.getElementById("myInput");
  
  table = document.getElementById("list");
  tr = table.getElementsByTagName("tr");
  let found = false;
  for (var i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td");

    if (td.length && td[1].innerHTML === input.value) {
      alert("found");
      found = true;
      tr[i].className='matchText';
    }
    else{
    tr[i].className='';
  }
  }

}
function load(isedit=false,row={}) {
  let thstr =
    "<th>index</th> <th>First Name</th> <th>Last Name</th> <th>Points</th> <th>action</th>";
  let trlist = "";
  for (var j = 0; j < abc.length; j++) {
    let td = "<td>" + abc[j].index + "</td>";
    let td0 = "<td>" + abc[j].fname + "</td>";
    let td1 = "<td>" + abc[j].lname + "</td>";
    let td2 = "<td>" + abc[j].point + "</td>";
    let td3 =
      '<td><button onclick="delrow(' +  abc[j].index + ');">delete</button></td>';
    let td4=
      '<td><button onclick="editrow(' +  abc[j].index + ');">edit</button></td>';
    let tr = "<tr>" + td + td0 + td1 + td2 + td3 + td4 + "</tr>";
    trlist = trlist + tr;
  }  
    let tdlast = "<td><label id='editindex'> "+ row?.index +" </label></td>";
    let tdlast0 = "<td><textarea id='editfname'> "+ row?.fname +" </textarea></td>";
    let tdlast1 = "<td>" + "<textarea id='editlname'>"+row?.lname+"</textarea></td>";
    let tdlast2 = "<td>" + "<textarea id='editpoints'>"+row?.point+"</textarea>"+ "</td>";
    let tdlast3 =
      '<td><button onclick="update(' +""+ ');">update</button></td>';
    let tdlast4=
      '<td><button onclick="editrow(' + "" + ');">cancel</button></td>';
    let lasttredit = "<tr>" + tdlast + tdlast0 + tdlast1 + tdlast2 + tdlast3 + tdlast4 + "</tr>"; 
    if(isedit){
      trlist=trlist+lasttredit;
    }

  let list = document.getElementById("list");

  list.innerHTML = thstr + trlist ;
}

window.onload = function () {
  load();
};
