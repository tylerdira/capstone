import NewJobForm from "./NewJobForm";

function Home({allHomes, technicians, newJob}) {

    return (
      <div>
        <h1>Home</h1>
        <NewJobForm newJob={newJob} technicians={technicians} allHomes={allHomes}/>
      </div>
    );
  }
  
  export default Home;
  