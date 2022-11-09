function TechnicianCard({tech, setTechnicians, technicians}) {

  function deleteTechnician(technicianid) {
    var confirm = window.confirm("Are you sure you want to delete this?");
    if (confirm)  {
       fetch(`/technicians/${technicianid}`, {
        method: 'DELETE',
    })
    setTechnicians(technicians.filter(aTechnician => aTechnician.id != technicianid))
    }
  }

    return (
      <div>
        <p>Technician ID: {tech.id}</p>
        <p>First Name: {tech.first_name}</p>
        <p>Last Name: {tech.last_name}</p>
        <p>Email: {tech.email}</p>
        <p>Password: {tech.password_digest}</p>
        <p>Phone Number: {tech.phone_number}</p>
        <p>Profession: {tech.profession}</p>
        <button onClick={(e) => {
          e.stopPropagation();
          deleteTechnician(tech.id)
        }}>
          Delete Technician</button>
      </div>
    );
  }
  
  export default TechnicianCard;