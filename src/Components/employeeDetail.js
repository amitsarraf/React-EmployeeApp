import React ,{useState}from 'react';
import { useHistory } from 'react-router';


const EmployeeDetail = () => {

    const history = useHistory();


    const[employee, setemployee] = useState({
        employeeDetail:"", employeeSalary:"", employeeEducation:"", employeePrevCompany:"", 
    })

    let name, value;
    const handleInputs = (e) =>{
        console.log(e)

        name = e.target.name;
        value = e.target.value;

        setemployee({...employee, [name]:value});
    }

    const postData = async(e) =>{
        e.preventDefault();

        const{ employeeDetail, employeeSalary, employeeEducation, employeePrevCompany } = employee;
        console.log(employee);
        const res = await fetch("/api/employee", {
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                employeeDetail, employeeSalary, employeeEducation, employeePrevCompany
            }),
        })
        
        console.log(res);
        const data = await res.json();
        console.log(data);

        if( data.error){
          window.alert("error");
            console.log("Error in adding employee");
        }else {
            console.log(" Succefully Added employee");
            window.alert("Succefully Added employee")
           history.push('/getEmployee')
        }


    }



    return (
        <div className="wrapper">
        <div className="form-wrapper">
          <h1>Create Employeee Account</h1>
          <form  method = "POST">
            <div className="email">
              <label htmlFor="name">Employee Details</label>
              <input
                placeholder="Enter Employee Name"
                type="text"
                name="employeeDetail"
                value={employee.employeeDetail}
                onChange={handleInputs}
              />
            </div>
            
            <div className="email">
              <label htmlFor="salary">Employee Salary</label>
              <input
                placeholder="Employee Salary"
                type="number"
                name="employeeSalary"
                value={employee.employeeSalary}
                onChange={handleInputs}
              />
             
            </div>
            <div className="password">
              <label htmlFor="education">Employee Education</label>
              <input
                placeholder="Enter Employee education"
                type="text"
                name="employeeEducation"
                value={employee.employeeEducation}
                onChange={handleInputs}
              />
              
            </div>
            <div className="password">
              <label htmlFor="Company">Employee Prev Company</label>
              <input
                placeholder="Enter employee Prev Company"
                type="text"
                name="employeePrevCompany"
                value={employee.employeePrevCompany}
                onChange={handleInputs}
              />
            </div>
            <div className="createAccount">
              <button type="submit" onClick={postData} >Create Employee Account</button>
              <small>Already Have an Account?</small>
            </div>
          </form>
        </div>
      </div>
    )
}

export default EmployeeDetail

