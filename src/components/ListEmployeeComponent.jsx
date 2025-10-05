import { useEffect, useState } from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([])
  const navigator = useNavigate()
  useEffect(() => {
    getAllEmployees()
  }, [employees])

  function getAllEmployees() {
    listEmployees()
      .then((response) => {
        setEmployees(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function addNewEmployee() {
    navigator('/add-employee')
  }

  function updateEmployee(id) {
    navigator(`/edit-employee/${id}`)
  }
  function removeEmployee(id) {
    console.log(id)
    deleteEmployee(id)
      .then((response) => {
        getAllEmployees()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="container">
      <h2 className="text-center mb-4">List of Employees</h2>
      <button className="btn btn-primary mb-2" onClick={addNewEmployee}>
        Add Employee
      </button>
      <table className="table table-hover table-dark mt-4">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>
                  <button
                    className="btn btn-info me-2"
                    onClick={() => updateEmployee(employee.id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeEmployee(employee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ListEmployeeComponent
