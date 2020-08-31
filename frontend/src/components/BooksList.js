import React from "react";

const BooksList = ({ books, openModalWithItem }) => {
    return (
        <div className="row">
            {books.map((book) => (
                <div
                className="container pt-3 pb-3 mt-5 d-flex justify-content-center"
                key={book._id}
                >
                    <div className="row card" style={{ width: "50%" }}>
                        <div
                        className="card-header"
                        style={{ cursor: "pointer" }}
                        onClick={ () => openModalWithItem(book)}
                        >
                            <div className="col text-center">
                                <h5>{book.title}</h5>
                            </div>
                        </div>
                    </div>
                    <button
                        className="btn btn-danger ml-5"
                        data-toggle="modal"
                        style={{ width: "100px" }}  
                    >EDIT</button>
                </div>
            ))}
        </div>
    );
};

export default BooksList;
