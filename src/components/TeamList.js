import Title from "./Title"
import TeamItem from "./TeamItem"

const TeamList = () => {
    const title = {
        text: "House rental",
        description: "House rental"
    }
    return (
        <section className="section-teams">
            <div className="container">
                <Title title={title.text} description={title.description} />
                <div className="row">
                    <TeamItem/>
                    <TeamItem/>
                    <TeamItem/>
                </div>
            </div>
        </section>
    )
}

export default TeamList;