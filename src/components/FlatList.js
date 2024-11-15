
import Title from "./Title"
import FlatItem from "./FlatItem"

const FlatList = () => {
    const title = {
        text: "House rental",
        description: "House rental"
    }
    return (
        <section className="section-all-re">
            <div className="container">
                <Title title={title.text} description={title.description} />
                <div className="row">
                    <FlatItem slug="Welcome-ipsum-1" />
                    <FlatItem slug="Welcome-ipsum-2" />
                    <FlatItem slug="Welcome-ipsum-3" />
                    <FlatItem slug="Welcome-ipsum-4" />
                    <FlatItem slug="Welcome-ipsum-5" />
                    <FlatItem slug="Welcome-ipsum-6" />  
                </div>
            </div>
        </section>
    )

}

export default FlatList;