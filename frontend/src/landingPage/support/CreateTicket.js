import React from "react";

function CreateTicket() {
  return (
    <div className="container p-0 ">
      <div className="border-bottom pb-5">
        <div className="d-flex  justify-content-between  my-4">
          <h2 className="">Suppport Portal</h2>
          <button className="btn btn-primary px-4 fw-semibold">
            My tickets
          </button>
        </div>
        <input
          class="form-control me-2 p-3 "
          type="search"
          placeholder="Eg: How do I open my account, How do i activate F&O..."
          aria-label="Search"
        />
      </div>
      
    </div>
  );
}

export default CreateTicket;
