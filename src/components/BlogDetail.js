import Sidebar from "./Sidebar";

const BlogDetail = () => {
    return (
        <div className="container mt-4 mb-4">
            <div className="row">
                <div className="col-lg-8">
                    <div className="blog-detail">
                        <img className="w-100" src="/img/product1.jpeg" alt="product" />
                        <span className="blog-detail-category">Welcome</span>
                        <h1 className="blog-detail-title">House rentalt</h1>
                        <span className="blog-detail-date">03.06.2021</span>
                        <p className="blog-detail-content">
                            House rental
                        </p>
                        <h2 className="blog-detail-alttitle">House rentalt</h2>
                        <p className="blog-detail-content">
                            House rental
                        </p>
                        <h2 className="blog-detail-alttitle">House rentalt</h2>
                        <p className="blog-detail-content">
                            House rental
                        </p>
                    </div>
                </div>
                <Sidebar/>
            </div>
        </div>
    )
}
export default BlogDetail;