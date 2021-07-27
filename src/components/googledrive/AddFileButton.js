import { faFileUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function AddFileButton({ currentFolder }) {
    function handleUpload(e) {}


    return (
        <label className="btn btn-outline-success  mt-4 m-2">
        <FontAwesomeIcon icon={faFileUpload} />
        <input
          type="file"
          onChange={handleUpload}
          style={{ opacity: 0, position: "absolute", left: "-9999px" }}
        />
      </label>
    )
}
