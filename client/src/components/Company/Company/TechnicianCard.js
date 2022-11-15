function TechnicianCard({tech, setTechnicians, technicians}) {

  let techPhoneNumber = tech.phone_number
  let areaCode = techPhoneNumber.slice(0, 3)
  let firstThree = techPhoneNumber.slice(3, 6)
  let lastFour = techPhoneNumber.slice(6)

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
      <div className="m-4">
        <p>Technician ID: {tech.id}</p>
        <p>First Name: {tech.first_name}</p>
        <p>Last Name: {tech.last_name}</p>
        <p>Email: {tech.email}</p>
        <p>Password: {tech.password_digest}</p>
        <p>Phone Number: {areaCode}-{firstThree}-{lastFour}</p>
        <p>Profession: {tech.profession}</p>
        <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={(e) => {
          e.stopPropagation();
          deleteTechnician(tech.id)
        }}>
          Delete Technician</button>
      </div>
    );
  }
  
  export default TechnicianCard;