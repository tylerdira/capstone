import NewJobForm from "./NewJobForm";

function Home({allHomes, technicians, newJob, user}) {

    return (
      <div className="bg-blue-400">
        <h1 className="self-center">Home</h1>
        <NewJobForm user={user} technicians={technicians} newJob={newJob} allHomes={allHomes}/>
      </div>
    );
  }
  
  export default Home;
  