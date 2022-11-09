import NewJobForm from "./NewJobForm";

function Home({allHomes, technicians, newJob, user}) {

    return (
      <div>
        <h1>Home</h1>
        <NewJobForm user={user} technicians={technicians} newJob={newJob} allHomes={allHomes}/>
      </div>
    );
  }
  
  export default Home;
  