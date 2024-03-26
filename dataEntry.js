let employeeName=document.getElementById("empname");
let employeeId=document.getElementById("empid");
let employeeAddress=document.getElementById("address");
let employeeDesignation=document.getElementById("designation");
let employeeDepartment=document.getElementById("department");
let employeeSalary=document.getElementById("salary");
let selectedRow=null;
0
function employeeDataManagement(){
	let employeeData=fetchEmployeeData();
	if(selectedRow==null)
	{
		newDataInserted(employeeData);
	}
	else{
		updateRow(employeeData);
	}
	clearFields();
}
function fetchEmployeeData() {
 let  employeeData={};
 employeeData.employeeName=employeeName.value;
 employeeData.employeeId=employeeId.value;
 employeeData.employeeAddress=employeeAddress.value;
 employeeData.employeeDesignation=employeeDesignation.value;
 employeeData.employeeDepartment=employeeDepartment.value;
 employeeData.employeeSalary=employeeSalary.value;
 return employeeData;

}

function newDataInserted(employeeData)
   {
	let tbody=document.getElementById("table-body");
	let newRow=tbody.insertRow(0);

	let cell0=newRow.insetCell(0);
	cell0.innerHTML=employeeData.employeeName;

	let cell1=newRow.insetCell(1);
	cell.innerHTML=employeeData.employeeId;

	let cell2=newRow.insetCell(2);
	cell2.innerHTML=employeeData.employeeDesignation;
   
    let cell3=newRow.insetCell(3);
	cell3.innerHTML=employeeData.employeeDepartment;

	let cell4=newRow.insetCell(4);
	cell4.innerHTML=employeeData.employeeSalary;

	let cell5=newRow.insetCell(5);
	cell5.innerHTML=employeeData.employeeAddress;

	cell6.innerHTML=`<button onclick="editEmployeeData(this)">Edit</button>,
                    <button onclick="deleteEmployeeData(this)">DELETE</button>`;
}
 function clearFields(){
employeeName.value="";
employeeId.value="";
employeeDepartment.value="";
employeeDesignation.value="";
employeeAddress.value="";
employeeSalary.value="";
selectedRow=null;
 }
 function editEmployeeData(obj){
 	selectedRow=obj.parentElement.parentElement;
 	employeeName.value =selectedRow.cells[0].innerHTML;
 	employeeId.value =selectedRow.cells[1].innerHTML;
 	employeeDesignation.value =selectedRow.cells[2].innerHTML;
 	employeeDepartment.value= selectedRow.cells[3].innerHTML;
 	employeeSalary.value =selectedRow.cells[4].innerHTML;
 	employeeAddress.value= selectedRow.cells[5].innerHTML;
 	
 }
 function updateRow(employeeData)
 {
 	selectedRow.cells[0].innerHTML=employeeName.value;
 	selectedRow.cells[1].innerHTML=employeeId.value;
 	selectedRow.cells[2].innerHTML=employeeDesignation.value;
 	selectedRow.cells[3].innerHTML=employeeDepartment.value;
 	selectedRow.cells[4].innerHTML=employeeSalary.value;
    selectedRow.cells[5].innerHTML=employeeAddress.value;

 }
function displayData(){
	let tbody=document.getElementById("table-body");
	let  newRow=tbody.insertRow(0);
	let cell0=newRow.insetCell(0); 
}