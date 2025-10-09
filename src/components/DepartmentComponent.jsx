import { useEffect, useState } from 'react'
import {
  createDepartment,
  getDepartment,
  updateDepartment
} from '../services/DepartmentService'
import { useNavigate, useParams } from 'react-router'

const DepartmentComponent = () => {
  const [departmentName, setDepartmentName] = useState('')
  const [departmentDescription, setDepartmentDescription] = useState('')

  const { id } = useParams()

  const [errors, setErrors] = useState({
    departmentName: '',
    departmentDescription: ''
  })

  const navigator = useNavigate()

  useEffect(() => {
    if (id) {
      getDepartment(id)
        .then((response) => {
          setDepartmentName(response.data.departmentName)
          setDepartmentDescription(response.data.departmentDescription)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [id])

  function saveOrUpdateDepartment(e) {
    e.preventDefault()
    if (validateForm()) {
      const department = { departmentName, departmentDescription }
      console.log(department)

      if (id) {
        updateDepartment(id, department)
          .then((response) => {
            console.log(response.data)
            navigator('/departments')
          })
          .catch((error) => {
            console.log(error)
          })
      } else {
        createDepartment(department)
          .then((response) => {
            console.log(response.data)
            navigator('/departments')
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }
  }

  function validateForm() {
    let valid = true
    const errorsCopy = { ...errors }

    if (departmentName.trim()) {
      errorsCopy.departmentName = ''
    } else {
      errorsCopy.departmentName = 'Department Name is required'
      valid = false
    }

    if (departmentDescription.trim()) {
      errorsCopy.departmentDescription = ''
    } else {
      errorsCopy.departmentDescription = 'Department description is required'
      valid = false
    }

    setErrors(errorsCopy)
    return valid
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          {id ? (
            <h2 className="text-center">Update Department</h2>
          ) : (
            <h2 className="text-center">Add Department</h2>
          )}
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Department Name: </label>
                <input
                  type="text"
                  placeholder="Enter department Name"
                  name="departmentName"
                  value={departmentName}
                  className={`form-control ${
                    errors.departmentName ? 'is-invalid' : ''
                  }`}
                  onChange={(e) => {
                    setDepartmentName(e.target.value)
                  }}
                />
                {errors.departmentName && (
                  <div className="invalid-feedback">
                    {errors.departmentName}
                  </div>
                )}

                <label className="form-label">Department Description: </label>
                <input
                  type="text"
                  placeholder="Enter department description"
                  name="departmentDescription"
                  value={departmentDescription}
                  className={`form-control ${
                    errors.departmentDescription ? 'is-invalid' : ''
                  }`}
                  onChange={(e) => setDepartmentDescription(e.target.value)}
                />
                {errors.departmentDescription && (
                  <div className="invalid-feedback">
                    {errors.departmentDescription}
                  </div>
                )}
              </div>

              <button
                className="btn btn-success"
                onClick={saveOrUpdateDepartment}
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DepartmentComponent
