import React, { useState } from 'react'

const Modal = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    return (
        <div className="modal fade" id="open-modal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" 
                       />
                    </div>
                    <div className="modal-body">
                        <form >
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    placeholder="Enter your title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="desc" className="form-label">
                                    Description
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="desc"
                                    placeholder="Enter your Description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                />
                            </div>
                           <div className="text-end">
                           <button type="submit" className="btn btn-success " data-bs-dismiss="modal">
                                Submit
                            </button>
                           </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Modal