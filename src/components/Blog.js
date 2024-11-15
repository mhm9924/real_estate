import BlogItem from "./BlogItem"

const Blog = () => {
    return (
        <section className="blog">
            <div className="page-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-title">Blog</h1>
                            <h2 className="page-description">Blog</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-content">
                <div className="container">
                    <div className="row"> 
                        <BlogItem link="blog-1" title="House rental" />
                        <BlogItem link="blog-2" title="House rental" />
                        <BlogItem link="blog-3" title="House rental"/>
                        <BlogItem link="blog-4" title="House rental"/>
                        <BlogItem link="blog-5" title="House rental"/>
                        <BlogItem link="blog-6" title="House rental"/>
                        <BlogItem link="blog-7" title="House rental"/>
                        <BlogItem link="blog-8" title="House rental"/>
                        <BlogItem link="blog-9" title="House rental"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog