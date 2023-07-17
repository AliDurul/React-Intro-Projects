import { FaEdit } from "react-icons/fa"
import { AiFillDelete } from "react-icons/ai"
import axios from "axios"
import Modal from "./Modal"

const TutorialList = ({ tutorials , getTutorials}) => {

  const handleDelete = async (id) => {
    const base_url = "https://tutorial-api.fullstack.clarusway.com/tutorials/"
    try {
      await axios.delete(`${base_url}/${id}`)
    } catch (error) {
      console.log(error);
    }
    getTutorials()
  }


  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutorials?.map((item) => {
            const { id, title, description } = item
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-center text-nowrap">
                  <FaEdit
                    size={20}
                    type="button"
                    className="me-2 text-warning"
                    data-bs-toggle="modal" data-bs-target="#open-modal"
                  />
                  <AiFillDelete
                    size={22}
                    type="button"
                    className="text-danger "
                    onClick={() => handleDelete(id)}
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <Modal/>
    </div>
  )
}

export default TutorialList
