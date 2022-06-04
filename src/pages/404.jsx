import react from "react";

const NotFoundPage = () => {
  return (
    <>
<div className="container">
    <div className="row">
        <div className="text-center my-5">
            <div className="error-template">
                <h1>
                    Oops!</h1>
                <h2>
                    404 Not Found</h2>
                <div className="error-details">
                    Sorry, an error has occured, Requested page not found!
                </div>
                <div className="error-actions mt-2">
                    <a href="/" className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-home"></span>
                        Take Me Home </a>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  );
};

export default NotFoundPage;
