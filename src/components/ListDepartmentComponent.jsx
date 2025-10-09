import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { deleteDepartment, listDepartment } from '../services/DepartmentService'

const ListDepartmentComponent = () => {
  const [departments, setDepartments] = useState([])
  const navigator = useNavigate()

  useEffect(() => {
    getAllDepartments()
  }, [departments])

  function getAllDepartments() {
    listDepartment()
      .then((response) => {
        setDepartments(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  // let dummyZData = [
  //   {
  //     id: 1,
  //     departmentName: 'R&D',
  //     departmentDescription: 'Research and Development Department'
  //   },
  //   {
  //     id: 2,
  //     departmentName: 'Finance',
  //     departmentDescription: 'Finance Department'
  //   },
  //   {
  //     id: 3,
  //     departmentName: 'Sports',
  //     departmentDescription: 'Sports Department'
  //   }
  // ]

  function addNewDepartment() {
    navigator('/add-department')
  }

  function updateDepartment(id) {
    navigator(`/edit-department/${id}`)

  }
  function removeDepartment(id) {
    console.log(id)
    deleteDepartment(id)
      .then((response) => {
        getAllDepartments()
      })
      .catch((error) => {
        console.log(error)
      })
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
                <td>
                  <button
                    type="submit"
                    className="btn btn-info me-2"
                    onClick={() => updateDepartment(department.id)}
                  >
                    Update
                  </button>
                  <button
                    type="submit"
                    className="btn btn-danger"
                    onClick={() => removeDepartment(department.id)}
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

export default ListDepartmentComponent
