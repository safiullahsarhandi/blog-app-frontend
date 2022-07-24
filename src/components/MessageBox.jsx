import React from 'react'

export default function MessageBox({submit,formData,setFormData,message}) {
  return (
    <>
        <div className="card-title">
            <h3>{message}</h3>
        </div>
        <form onSubmit={(e) => submit(e)}>
            <div className="form-group mt-2">
                <label for="name">Name</label>
                <input value={formData.userName} onChange={(e) => setFormData({ ...formData, userName: e.target.value })} id="name" placeholder="Name..." className="form-control" />
            </div>
            <div className="form-group mt-2">
                <label for="comment">Comment</label>
                <textarea value={formData.comment} onChange={(e) => setFormData({ ...formData, comment: e.target.value })} cols={10} rows="8" id="comment" placeholder="Comment..." className="form-control" />
            </div>
            <div className="form-group mt-2">
                <button type="submit" className="btn btn-primary btn-blue">Submit</button>
            </div>
        </form>
    </>
  )
}
