import Header from "../components/Header/Header";

const HomePage = () => {
    return (
        <div>
            <Header></Header>
            <h1>Welcome to Vivekanand College</h1>
            <h3>Your journey to excellence starts here.</h3>
            
            <a class="btn hero-btn" href="/admissions" data-discover="true">Apply Now!</a>
            <h1><b>Admissions at Vivekanand College</b></h1>
            <p>Welcome to the Admissions page of Vivekanand College!</p>
            <p>We are delighted you're considering joining our vibrant academic community.</p>
            <p>Our admission process is deisnged to be straightforward and accessible.</p>
            <br></br>
            <br></br>
            <p>Please review the elgibility criteria ane key dates<br></br>below for the upcoming academic year.</p>
            <p>For any queries,feel free to contact our admissions office.</p>

        </div>
    )
}

export default HomePage;