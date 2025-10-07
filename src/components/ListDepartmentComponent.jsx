import { useState } from 'react'

const ListDepartmentComponent = () => {
  let dummyZData = [
    {
      id: 1,
      departmentName: 'R&D',
      departmentDescription: 'Research and Development Department'
    },
    {
      id: 2,
      departmentName: 'Finance',
      departmentDescription: 'Finance Department'
    },
    {
      id: 3,
      departmentName: 'Sports',
      departmentDescription: 'Sports Department'
    }
  ]

  const [departments, setDepartments] = useState(dummyZData)

  function addNewDepartment() {
    navigator('/add-employee')
  }
  return (
    <div className="container">
      <h2 className="text-center mb-4">List of Departments</h2>
      <button className="btn btn-primary mb-2" onClick={addNewDepartment}>
        Add Department
      </button>
      <table className="table table-hover table-dark mt-4">
        <thead>
          <tr>
            <th>Department Id</th>
            <th>Department Name</th>
            <th>Department Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department) => {
            return (
              <tr key={department.id}>
                <td>{department.id}</td>
                <td>{department.departmentName}</td>
                <td>{department.departmentDescription}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ListDepartmentComponent
